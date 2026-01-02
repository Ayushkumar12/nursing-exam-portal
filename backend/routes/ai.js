const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const { auth } = require('../middleware/authMiddleware');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/chat', auth, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional medical assistant and educator for nursing students. Your goal is to provide accurate, helpful, and encouraging information about medical topics, nursing practices, and exam preparation. Always maintain a professional tone and emphasize patient safety and evidence-based practice. If a question is outside the medical scope or is inappropriate, politely redirect the student to relevant medical topics."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('AI Chat Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI assistant' });
  }
});

module.exports = router;
