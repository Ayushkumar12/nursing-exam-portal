const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { auth } = require('../middleware/authMiddleware');
const Attempt = require('../models/Attempt');
const User = require('../models/User');
const Chat = require('../models/Chat');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

router.post('/chat', auth, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.id;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Fetch user details
    const user = await User.findById(userId);
    
    // Fetch previous exam attempts
    const attempts = await Attempt.find({ user: userId }).sort({ date: -1 }).limit(5);
    
    // Fetch chat history
    let chat = await Chat.findOne({ user: userId });
    if (!chat) {
      chat = new Chat({ user: userId, messages: [] });
    }

    // Construct context-aware system instructions
    let examContext = "";
    if (attempts.length > 0) {
      examContext = "\n\nStudent's Recent Exam Performance:\n" + 
        attempts.map(a => `- Exam: ${a.exam}, Score: ${a.score}/${a.totalQuestions}, Date: ${new Date(a.date).toLocaleDateString()}`).join('\n');
    }

    const systemInstruction = `You are a professional medical assistant and educator for nursing students. 
Your goal is to provide accurate, helpful, and encouraging information about medical topics, nursing practices, and exam preparation. 
Always maintain a professional tone and emphasize patient safety and evidence-based practice.

Student Information:
- Name: ${user.name}
- Current Focus: Nursing Exam Preparation${examContext}

Use the student's name and previous performance to personalize your responses. If they are struggling in certain areas, provide extra guidance and encouragement.
If a question is outside the medical scope or is inappropriate, politely redirect the student to relevant medical topics.`;

    // Prepare history for Gemini
    const history = chat.messages.slice(-10).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Start chat with system instruction prefixed to the message or as a system prompt if supported
    // For simplicity with gemini-1.5-flash, we'll use a chat session
    const chatSession = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    // Send message with system context prepended if it's the first message or every time for consistency
    const prompt = `System Instruction: ${systemInstruction}\n\nUser Message: ${message}`;
    const result = await chatSession.sendMessage(prompt);
    const reply = result.response.text();

    // Update chat history in DB
    chat.messages.push({ role: 'user', content: message });
    chat.messages.push({ role: 'assistant', content: reply });
    chat.updatedAt = Date.now();
    await chat.save();

    res.json({ reply });
  } catch (error) {
    console.error('Gemini AI Chat Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI assistant' });
  }
});

// Get chat history
router.get('/history', auth, async (req, res) => {
  try {
    const chat = await Chat.findOne({ user: req.user.id });
    res.json(chat ? chat.messages : []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

module.exports = router;
