require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./models/Question');
const User = require('./models/User');

const exams = ["ESIC", "RRB", "NORCET", "NHM", "CHO", "UPPSC", "KGMU", "SGPGI", "MNS"];
const topics = ["Anatomy", "Physiology", "Pharmacology", "Medical-Surgical Nursing", "Community Health", "Midwifery", "Pediatrics"];

const seedData = [];

for (const exam of exams) {
  for (let i = 1; i <= 150; i++) {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    seedData.push({
      exam,
      topic,
      question: `Sample ${topic} question ${i} for ${exam} exam: What is the primary function of...?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: Math.floor(Math.random() * 4),
      explanation: `This is a detailed explanation for sample question ${i} in ${topic} for the ${exam} exam.`
    });
  }
}

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Question.deleteMany({});
    await Question.insertMany(seedData);

    // Seed admin user
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';
    const adminName = 'Admin';

    let adminUser = await User.findOne({ email: adminEmail });
    if (!adminUser) {
      adminUser = new User({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        role: 'admin'
      });
      await adminUser.save();
      console.log('Admin user seeded successfully!');
    } else {
      console.log('Admin user already exists.');
    }

    console.log(`${seedData.length} questions seeded successfully!`);
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDB();
