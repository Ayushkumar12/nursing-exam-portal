const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const Attempt = require('../models/Attempt');
const { auth } = require('../middleware/authMiddleware');

// Get 100 questions for an exam: 20 from each topic
router.get('/generate/:exam', auth, async (req, res) => {
  try {
    const { exam } = req.params;

    // Get all topics for the exam
    const topics = await Question.distinct('topic', { exam });

    let allQuestions = [];

    for (const topic of topics) {
      // Get up to 20 random questions per topic
      const topicQuestions = await Question.aggregate([
        { $match: { exam, topic } },
        { $sample: { size: 20 } }
      ]);
      allQuestions = allQuestions.concat(topicQuestions);
    }

    // If we have more than 100 questions, randomly select 100
    if (allQuestions.length > 100) {
      const shuffled = allQuestions.sort(() => Math.random() - 0.5);
      allQuestions = shuffled.slice(0, 100);
    }

    res.send(allQuestions);
  } catch (error) {
    console.error('Error generating questions:', error);
    res.status(500).send({ error: error.message });
  }
});

// Submit quiz
router.post('/submit', auth, async (req, res) => {
  try {
    const { exam, responses } = req.body; // responses: [{ questionId, selectedOption }]
    
    let score = 0;
    const detailedResponses = [];

    for (const resp of responses) {
      const question = await Question.findById(resp.questionId);
      const isCorrect = question.correct === resp.selectedOption;
      if (isCorrect) score++;
      
      detailedResponses.push({
        questionId: resp.questionId,
        selectedOption: resp.selectedOption,
        isCorrect
      });
    }

    const attempt = new Attempt({
      user: req.user._id,
      exam,
      score,
      totalQuestions: responses.length,
      responses: detailedResponses
    });

    await attempt.save();
    res.status(201).send(attempt);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Get user history
router.get('/history', auth, async (req, res) => {
  try {
    const history = await Attempt.find({ user: req.user._id }).sort({ date: -1 });
    res.send(history);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
