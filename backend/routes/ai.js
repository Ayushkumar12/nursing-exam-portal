const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { auth } = require('../middleware/authMiddleware');
const Attempt = require('../models/Attempt');
const User = require('../models/User');
const Chat = require('../models/Chat');
const Question = require('../models/Question');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

router.post('/career-insight', auth, async (req, res) => {
  try {
    const { attemptId } = req.body;
    const attempt = await Attempt.findById(attemptId).populate('responses.questionId');
    
    if (!attempt) {
      return res.status(404).json({ error: 'Attempt not found' });
    }

    // Group correct/incorrect by topic
    const topicPerformance = {};
    attempt.responses.forEach(resp => {
      const topic = resp.questionId?.topic || 'General';
      if (!topicPerformance[topic]) {
        topicPerformance[topic] = { correct: 0, total: 0 };
      }
      topicPerformance[topic].total++;
      if (resp.isCorrect) {
        topicPerformance[topic].correct++;
      }
    });

    const performanceSummary = Object.entries(topicPerformance)
      .map(([topic, stats]) => `${topic}: ${stats.correct}/${stats.total}`)
      .join(', ');

    const prompt = `As an expert nursing career counselor, analyze this student's exam performance:
    Exam: ${attempt.exam}
    Total Score: ${attempt.score}/${attempt.totalQuestions}
    Topic-wise Performance: ${performanceSummary}
    
    Provide a professional AI Career Insight (max 2-3 sentences).
    1. Identify a potential nursing specialization they might excel in based on their strong topics.
    2. Provide one specific, actionable advice for their career or study path.
    Keep the tone encouraging, professional, and clear. Do not use any markdown formatting like bold or tables, just plain text.`;

    const result = await model.generateContent(prompt);
    const insight = result.response.text();

    res.json({ insight });
  } catch (error) {
    console.error('Career Insight Error:', error);
    res.status(500).json({ error: 'Failed to generate career insight' });
  }
});

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
    
    const performanceSummary = attempts.length > 0 
      ? attempts.map(a => `- Exam: ${a.exam}, Score: ${a.score}/${a.totalQuestions}, Date: ${new Date(a.date).toLocaleDateString()}`).join('\n')
      : 'No exams taken yet.';

    // Fetch chat history
    let chat = await Chat.findOne({ user: userId });
    if (!chat) {
      chat = new Chat({ user: userId, messages: [] });
    }

    
    const systemInstruction = `You are a professional medical assistant and educator for nursing students. 
Your goal is to provide accurate, helpful, and encouraging information about medical topics, nursing practices, and exam preparation. 
Always maintain a professional tone and emphasize patient safety and evidence-based practice.

Student Information:
- Name: ${user.name}
- Current Focus: Nursing Exam Preparation

Rules for your responses:
1. DO NOT show any tables in your response.
2. Show only what the student asked for to ensure simple understanding.
3. Keep the language simple, clear, and encouraging.
4. Provide short, easy-to-understand summaries.
5. ONLY show or discuss the "Recent Exam Performance" if the student explicitly asks about their results, performance, or scores.

When the student asks about their results or performance:
1. Provide a short, easy-to-understand summary of the performance data provided above.
2. Highlight their strengths and areas for improvement.
3. If they haven't taken any exams, encourage them to start a practice test.

Use the student's name to personalize your responses. If they are struggling in certain areas based on the performance data, provide extra guidance and encouragement only when relevant to their questions.
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
    
    // Check for specific API key suspension or invalid key errors
    if (error.status === 403 || error.message?.includes('403') || error.message?.includes('suspended')) {
      return res.status(403).json({ 
        error: 'AI service is currently unavailable due to API key suspension. Please check your GEMINI_API_KEY configuration.' 
      });
    }
    
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
