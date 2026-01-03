const User = require('../models/User');
const Attempt = require('../models/Attempt');

const ACHIEVEMENTS = {
  FIRST_EXAM: {
    title: 'First Step',
    description: 'Completed your first exam!',
    icon: '🎯'
  },
  HIGH_SCORE: {
    title: 'High Achiever',
    description: 'Scored 90% or higher in an exam!',
    icon: '⭐'
  },
  PERFECT_SCORE: {
    title: 'Perfect Score',
    description: 'Scored 100% in an exam!',
    icon: '🏆'
  },
  FIVE_EXAMS: {
    title: 'Persistent Learner',
    description: 'Completed 5 exams!',
    icon: '📚'
  },
  TEN_EXAMS: {
    title: 'Exam Master',
    description: 'Completed 10 exams!',
    icon: '🎓'
  }
};

const checkAndAwardAchievements = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) return [];

    const attempts = await Attempt.find({ user: userId });
    const newlyEarned = [];

    const hasAchievement = (title) => user.achievements.some(a => a.title === title);

    const award = (achievement) => {
      if (!hasAchievement(achievement.title)) {
        user.achievements.push({
          title: achievement.title,
          description: achievement.description,
          icon: achievement.icon,
          earnedAt: new Date()
        });
        newlyEarned.push(achievement);
      }
    };

    // 1. First Exam
    if (attempts.length >= 1) {
      award(ACHIEVEMENTS.FIRST_EXAM);
    }

    // 2. High Score (>= 90%)
    const hasHighScore = attempts.some(a => (a.score / a.totalQuestions) >= 0.9);
    if (hasHighScore) {
      award(ACHIEVEMENTS.HIGH_SCORE);
    }

    // 3. Perfect Score (100%)
    const hasPerfectScore = attempts.some(a => (a.score / a.totalQuestions) === 1);
    if (hasPerfectScore) {
      award(ACHIEVEMENTS.PERFECT_SCORE);
    }

    // 4. Five Exams
    if (attempts.length >= 5) {
      award(ACHIEVEMENTS.FIVE_EXAMS);
    }

    // 5. Ten Exams
    if (attempts.length >= 10) {
      award(ACHIEVEMENTS.TEN_EXAMS);
    }

    if (newlyEarned.length > 0) {
      await user.save();
    }

    return newlyEarned;
  } catch (error) {
    console.error('Error checking achievements:', error);
    return [];
  }
};

module.exports = { checkAndAwardAchievements, ACHIEVEMENTS };
