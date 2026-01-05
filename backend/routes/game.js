const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { auth } = require('../middleware/authMiddleware');
const { logActivity } = require('../utils/logger');

// Helper to get all available Gemini keys
const getAllKeys = () => {
    const keys = [];
    for (let i = 1; i <= 20; i++) {
        const key = process.env[`GEMINI_GAME_API_KEY_${i}`];
        if (key) keys.push(key.trim());
    }
    if (keys.length === 0) {
        const fallbackKey = process.env.GEMINI_GAME_API_KEY || process.env.GEMINI_API_KEY;
        if (fallbackKey) keys.push(fallbackKey.trim());
    }
    return keys;
};

// Execute Gemini call with retry and key rotation
const generateContentWithRetry = async (prompt) => {
    let keys = getAllKeys();
    if (keys.length === 0) throw new Error('No Gemini API keys found in environment variables');

    // Shuffle keys to distribute load initially
    keys = keys.sort(() => Math.random() - 0.5);

    let lastError = null;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        try {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-flash-latest",
                generationConfig: {
                    responseMimeType: "application/json",
                }
            });
            
            const result = await model.generateContent(prompt);
            return result;
        } catch (error) {
            lastError = error;
            // If it's a quota error (429), try the next key
            if (error.status === 429 || error.message?.includes('429') || error.message?.includes('quota')) {
                console.warn(`Gemini API key ${i + 1}/${keys.length} exhausted (429), rotating...`);
                continue;
            }
            // For other errors, throw immediately
            throw error;
        }
    }
    
    throw lastError || new Error('All Gemini API keys failed');
};

const SYSTEM_PROMPT = `You are a professional nursing clinical educator. You are running a 5-step story-based simulation for a nursing student.
Your goal is to present a realistic clinical scenario where the student must make critical decisions over exactly 5 steps.

Guidelines:
1. The simulation MUST consist of exactly 5 steps.
2. In each step, the patient's vital signs and condition MUST change significantly based on the student's previous action (improving for correct actions, worsening for incorrect ones).
3. Provide 4 realistic multiple-choice options for the next action in each step.
4. One option is the "best" practice, others are less ideal or dangerous.
5. Provide detailed clinical feedback on the previous choice at each step.
6. Track the current step number (1 to 5).
7. On Step 5, set "gameOver" to true and provide a final summary of the patient's outcome based on all previous choices.
8. The patient's vital signs must reflect their current status accurately (e.g., tachycardia/hypotension if worsening).

You MUST respond in JSON format with the following structure:
{
  "step": 1,
  "scenario": "Detailed description of the current situation",
  "options": [
    {"id": 1, "text": "Action 1 description"},
    {"id": 2, "text": "Action 2 description"},
    {"id": 3, "text": "Action 4 description"},
    {"id": 4, "text": "Action 4 description"}
  ],
  "patientStatus": "Current status (Stable, Guarded, Critical, Improving, Deteriorating)",
  "feedback": "Clinical feedback on the previous choice",
  "gameOver": false,
  "success": false,
  "vitalSigns": {
    "bp": "120/80",
    "hr": "80",
    "rr": "18",
    "temp": "98.6",
    "spo2": "98%"
  }
}`;

router.post('/start', auth, async (req, res) => {
    try {
        const prompt = `${SYSTEM_PROMPT}\n\nStart Step 1 of a new nursing clinical scenario. Choose a random but common nursing situation (e.g., post-op complication, chest pain, respiratory distress, etc.).`;
        const result = await generateContentWithRetry(prompt);
        const response = JSON.parse(result.response.text());
        
        await logActivity(req.user.id, 'GAME_STARTED', `Started new nursing simulation: ${response.scenario.substring(0, 100)}...`);
        
        res.json(response);
    } catch (error) {
        console.error('Game Start Error:', error);
        res.status(500).json({ error: 'Failed to start the game. All API keys may have exceeded their quota.' });
    }
});

router.post('/action', auth, async (req, res) => {
    try {
        const { history, lastAction } = req.body;
        const currentStep = history.length + 1;
        
        const prompt = `${SYSTEM_PROMPT}
        
        Game History:
        ${JSON.stringify(history)}
        
        Current Step: ${currentStep}
        The student just chose: ${lastAction}
        
        Based on this choice and previous history, continue the story for Step ${currentStep}. 
        If this is Step 5, conclude the case and set gameOver to true.
        Provide specific feedback on how the last action affected the patient's vitals and condition.`;

        const result = await generateContentWithRetry(prompt);
        const response = JSON.parse(result.response.text());

        if (response.gameOver) {
            const summary = `Completed nursing simulation. Final Status: ${response.patientStatus}. Success: ${response.success}. Steps: ${response.step || currentStep}`;
            await logActivity(req.user.id, 'GAME_COMPLETED', summary);
        } else {
            await logActivity(req.user.id, 'GAME_STEP', `Completed step ${response.step || currentStep}. Choice: ${lastAction}. Patient Status: ${response.patientStatus}`);
        }

        res.json(response);
    } catch (error) {
        console.error('Game Action Error:', error);
        res.status(500).json({ error: 'Failed to process game action' });
    }
});

module.exports = router;