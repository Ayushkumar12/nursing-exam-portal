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
  },
  FIRST_LOGIN: {
    title: 'Welcome Aboard',
    description: 'Logged in for the first time!',
    icon: '👋'
  },
  THREE_DAY_STREAK: {
    title: 'Consistent Learner',
    description: 'Maintained a 3-day login streak!',
    icon: '🔥'
  },
  FIVE_DAY_STREAK: {
    title: 'Workhorse',
    description: 'Maintained a 5-day login streak!',
    icon: '🐎'
  },
  SEVEN_DAY_STREAK: {
    title: 'Dedicated Scholar',
    description: 'Maintained a 7-day login streak!',
    icon: '⚡'
  },
  NINE_DAY_STREAK: {
    title: 'Unstoppable Force',
    description: 'Maintained a 9-day login streak!',
    icon: '🚀'
  },
  CHAT_BEGINNER: {
    title: 'Curious Mind',
    description: 'Used the AI Tutor for the first time!',
    icon: '🤖'
  },
  CHAT_MASTER: {
    title: 'AI Enthusiast',
    description: 'Asked 10 questions to the AI Tutor!',
    icon: '🧠'
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

    // 6. Login Streaks
    if (user.lastLogin) {
      award(ACHIEVEMENTS.FIRST_LOGIN);
    }
    if (user.loginStreak >= 3) {
      award(ACHIEVEMENTS.THREE_DAY_STREAK);
    }
    if (user.loginStreak >= 5) {
      award(ACHIEVEMENTS.FIVE_DAY_STREAK);
    }
    if (user.loginStreak >= 7) {
      award(ACHIEVEMENTS.SEVEN_DAY_STREAK);
    }
    if (user.loginStreak >= 9) {
      award(ACHIEVEMENTS.NINE_DAY_STREAK);
    }

    // 7. Chatbot Usage
    if (user.chatbotUsageCount >= 1) {
      award(ACHIEVEMENTS.CHAT_BEGINNER);
    }
    if (user.chatbotUsageCount >= 10) {
      award(ACHIEVEMENTS.CHAT_MASTER);
    }

    if (newlyEarned.length > 0 || true) { // Check title even if no new achievement this time
      const totalAchievements = user.achievements.length;
      if (totalAchievements >= 10) {
        user.title = 'Healthcare Hero';
      } else if (totalAchievements >= 7) {
        user.title = 'Clinical Commander';
      } else if (totalAchievements >= 4) {
        user.title = 'Medical Maestro';
      } else if (totalAchievements >= 1) {
        user.title = 'Rising Nightingale';
      } else {
        user.title = 'Nursing Aspirant';
      }
      await user.save();
    }

    return newlyEarned;
  } catch (error) {
    console.error('Error checking achievements:', error);
    return [];
  }
};

module.exports = { checkAndAwardAchievements, ACHIEVEMENTS };
