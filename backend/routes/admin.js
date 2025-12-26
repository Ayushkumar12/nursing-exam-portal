const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Attempt = require('../models/Attempt');
const Question = require('../models/Question');
const { auth, adminAuth } = require('../middleware/authMiddleware');

// Get all students with their stats
router.get('/students', auth, adminAuth, async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');
    const studentStats = await Promise.all(students.map(async (student) => {
      const attempts = await Attempt.find({ user: student._id });
      const totalQuizzes = attempts.length;
      const avgScore = totalQuizzes > 0 
        ? (attempts.reduce((sum, a) => sum + (a.score / a.totalQuestions), 0) / totalQuizzes) * 100 
        : 0;
      const lastAttempt = totalQuizzes > 0 ? attempts[0].date : null;
      
      return {
        ...student._doc,
        totalQuizzes,
        avgScore: avgScore.toFixed(2),
        lastAttempt
      };
    }));
    res.send(studentStats);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get overall analytics
router.get('/analytics', auth, adminAuth, async (req, res) => {
  try {
    const attempts = await Attempt.find();
    const totalAttempts = attempts.length;
    const examStats = {};

    attempts.forEach(a => {
      if (!examStats[a.exam]) {
        examStats[a.exam] = { count: 0, totalScore: 0 };
      }
      examStats[a.exam].count++;
      examStats[a.exam].totalScore += (a.score / a.totalQuestions) * 100;
    });

    const analytics = Object.keys(examStats).map(exam => ({
      exam,
      avgScore: (examStats[exam].totalScore / examStats[exam].count).toFixed(2),
      totalAttempts: examStats[exam].count
    }));

    res.send({ totalAttempts, analytics });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add/Edit question
router.post('/questions', auth, adminAuth, async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Get admin stats
router.get('/stats', auth, adminAuth, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalQuestions = await Question.countDocuments();
    const totalAttempts = await Attempt.countDocuments();
    const attempts = await Attempt.find();
    const averageScore = attempts.length > 0
      ? attempts.reduce((sum, a) => sum + (a.score / a.totalQuestions * 100), 0) / attempts.length
      : 0;

    res.send({
      totalUsers,
      totalQuestions,
      totalAttempts,
      averageScore: averageScore.toFixed(2)
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get all users
router.get('/users', auth, adminAuth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get all questions
router.get('/questions', auth, adminAuth, async (req, res) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get all attempts
router.get('/attempts', auth, adminAuth, async (req, res) => {
  try {
    const attempts = await Attempt.find().populate('user', 'name email');
    const formattedAttempts = attempts.map(attempt => ({
      _id: attempt._id,
      userName: attempt.user.name,
      score: (attempt.score / attempt.totalQuestions * 100).toFixed(2),
      questionsAnswered: attempt.totalQuestions,
      date: attempt.date
    }));
    res.send(formattedAttempts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
