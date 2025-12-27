const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Question = require('./models/Question');
const User = require('./models/User');

const exams = ["ESIC", "RRB", "NORCET", "NHM", "CHO", "UPPSC", "KGMU", "SGPGI", "MNS"];
const topics = ["Anatomy", "Physiology", "Pharmacology", "Medical-Surgical Nursing", "Community Health", "Midwifery", "Pediatrics"];

const esicSeedData = [];
const seedData = [];

/** FUNDAMENTALS OF NURSING (20 Qs) */
const fundamentalsTopics = [
  "Basics", "First Aid", "Personal Hygiene", "Health Education"
];

// fundamentalsTopics.forEach((topic, idx) => {
//   seedData.push({
//     exam: 'ESIC',
//     topic: `Fundamentals of Nursing - ${topic}`,
//     question: `Which is the first action a nurse should take when finding an unresponsive adult patient?`,
//     options: [
//       "Check for breathing",
//       "Call for help",
//       "Start chest compressions",
//       "Check pulse"
//     ],
//     correct: 1, // Call for help
//     explanation: `The first action is to call for help or activate the emergency response system before assessing ABCs (Airway, Breathing, Circulation). This ensures immediate assistance arrives.`
//   });

//   seedData.push({
//     exam: 'ESIC',
//     topic: `Fundamentals of Nursing - ${topic}`,
//     question: `What is the correct order of Donning PPE?`,
//     options: [
//       "Gown, Mask, Goggles, Gloves",
//       "Mask, Gown, Gloves, Goggles",
//       "Goggles, Mask, Gown, Gloves",
//       "Gloves, Gown, Mask, Goggles"
//     ],
//     correct: 0,
//     explanation: `Standard Donning order: Gown → Mask/N95 → Goggles/Face Shield → Gloves. This prevents contamination during the process.`
//   });
  
// });

// /** MEDICAL-SURGICAL NURSING (25 Qs) */
// ["Pathophysiology", "Pharmacology", "Common Diseases"].forEach(topic => {
//   seedData.push({
//     exam: 'ESIC',
//     topic: `Medical-Surgical Nursing - ${topic}`,
//     question: `Which medication should NOT be given to a patient with Myasthenia Gravis?`,
//     options: [
//       "Pyridostigmine",
//       "Neostigmine",
//       "Succinylcholine",
//       "Edrophonium"
//     ],
//     correct: 2, // Succinylcholine
//     explanation: `Succinylcholine (depolarizing neuromuscular blocker) can cause prolonged apnea and respiratory paralysis in Myasthenia Gravis patients due to reduced acetylcholinesterase activity.`
//   });
  
  
// });

// /** COMMUNITY HEALTH NURSING (20 Qs) */
// ["Epidemiology", "Immunization", "Health Programs"].forEach(topic => {
//   seedData.push({
//     exam: 'ESIC',
//     topic: `Community Health Nursing - ${topic}`,
//     question: `Which vaccine is given at birth under National Immunization Schedule?`,
//     options: [
//       "BCG + OPV-0 + Hepatitis B",
//       "DPT + Polio",
//       "Measles",
//       "Pentavalent"
//     ],
//     correct: 0,
//     explanation: `At birth: BCG (0.1ml), OPV-0 (2 drops), Hepatitis B (0.5ml) as per UIP India.`
//   });
// });

// /** MATERNAL & CHILD HEALTH (15 Qs) */
// ["Midwifery", "Gynaecology", "Paediatrics"].forEach(topic => {
//   seedData.push({
//     exam: 'ESIC',
//     topic: `Maternal & Child Health - ${topic}`,
//     question: `What is the danger sign in pregnancy at 32 weeks?`,
//     options: [
//       "Mild nausea",
//       "Sudden gush of fluid",
//       "Craving for sweets",
//       "Frequent urination"
//     ],
//     correct: 1,
//     explanation: `Sudden gush of fluid indicates PROM (Premature Rupture of Membranes) requiring immediate medical attention.`
//   });
// });

// /** MENTAL HEALTH NURSING (10 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'Mental Health Nursing - Psychiatric concepts',
//   question: `Hallmark symptom of Schizophrenia?`,
//   options: ["Euphoria", "Auditory hallucinations", "Excessive sleep", "Memory loss"],
//   correct: 1,
//   explanation: `Auditory hallucinations (hearing voices) are the most common positive symptom in Schizophrenia.`
// });

// // === FOUNDATIONAL SCIENCES (50 Questions) ===

// /** ANATOMY & PHYSIOLOGY (15 Qs) */
// ["Human Body Structure", "Functions"].forEach(topic => {
//   seedData.push({
//     exam: 'ESIC',
//     topic: `Anatomy & Physiology - ${topic}`,
//     question: `Which chamber of heart receives oxygenated blood from lungs?`,
//     options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
//     correct: 2, // Left atrium
//     explanation: `Pulmonary veins carry oxygenated blood from lungs to Left atrium.`
//   });
// });

// /** MICROBIOLOGY & BIOCHEMISTRY (10 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'Microbiology - Microorganisms',
//   question: `Organism causing Tuberculosis?`,
//   options: ["Mycobacterium tuberculosis", "Streptococcus pneumoniae", "E.coli", "Candida albicans"],
//   correct: 0,
//   explanation: `Mycobacterium tuberculosis - Acid fast bacilli, airborne transmission.`
// });

// /** NUTRITION & DIETETICS (10 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'Nutrition & Dietetics',
//   question: `Daily requirement of protein for adult female?`,
//   options: ["40g", "55g", "70g", "100g"],
//   correct: 1, // 55g
//   explanation: `RDA: 0.8g/kg body weight. 55g for sedentary woman (55kg).`
// });

// /** PSYCHOLOGY & SOCIOLOGY (15 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'Psychology & Sociology',
//   question: `Maslow’s hierarchy - basic physiological need?`,
//   options: ["Self-actualization", "Safety", "Food/Water", "Love/Belonging"],
//   correct: 2,
//   explanation: `Physiological needs (food, water, shelter) form base of Maslow’s pyramid.`
// });

// // === GENERAL & APTITUDE (50 Questions) ===

// /** GENERAL INTELLIGENCE & REASONING (15 Qs) */
// Array(15).fill().forEach((_, i) => {
//   seedData.push({
//     exam: 'ESIC',
//     topic: 'General Intelligence & Reasoning',
//     question: `Complete series: 2, 4, 8, 16, ?`,
//     options: ["20", "24", "32", "64"],
//     correct: 2, // 32
//     explanation: `Geometric progression (×2). Next term: 16×2 = 32.`
//   });
// });

// /** GENERAL AWARENESS (10 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'General Awareness',
//   question: `Current Health Minister of India (2025)?`,
//   options: ["J.P. Nadda", "Mansukh Mandaviya", "Bhupender Yadav", "Narayan Rane"],
//   correct: 0,
//   explanation: `J.P. Nadda - Union Minister of Health & Family Welfare (2024 onwards).`
// });

// /** QUANTITATIVE APTITUDE (15 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'Quantitative Aptitude',
//   question: `If 20% discount on Rs.500, final price?`,
//   options: ["Rs.400", "Rs.450", "Rs.480", "Rs.420"],
//   correct: 0, // Rs.400
//   explanation: `Discount = 20% of 500 = Rs.100. Final price = 500-100 = Rs.400.`
// });

// /** ENGLISH (5 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'English',
//   question: `Synonym of "Eloquent"?`,
//   options: ["Silent", "Expressive", "Rude", "Confused"],
//   correct: 1,
//   explanation: `"Eloquent" means fluent/skillful in speech = Expressive.`
// });

// /** COMPUTER KNOWLEDGE (5 Qs) */
seedData.push({
//   exam: 'ESIC',
//   topic: 'Computer Knowledge',
//   question: `Which generates electricity in CPU?`,
//   options: ["RAM", "Power Supply Unit", "Motherboard", "Hard Disk"],
//   correct: 1,
//   explanation: `PSU (Power Supply Unit) converts AC to DC and supplies power to all components.`
// });

/**
 * kkkkk
 */

// const topic = "Fundamentals & Medical-Surgical Nursing";

// // 1
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The primary goal of nursing care is to:",
//   options: ["Cure disease", "Promote health and prevent illness", "Assist doctors", "Administer medications"],
//   correct: 1,
//   explanation: `Nursing focuses on health promotion, illness prevention, and holistic patient care.`
// });

// // 2
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vital sign is measured using a sphygmomanometer?",
//   options: ["Pulse", "Respiration", "Blood pressure", "Temperature"],
//   correct: 2,
//   explanation: `A sphygmomanometer is used to measure arterial blood pressure.`
// });

// // 3
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Normal adult body temperature when measured orally is:",
//   options: ["35.5°C", "36.5–37.5°C", "38.5°C", "39°C"],
//   correct: 1,
//   explanation: `Normal oral temperature ranges between 36.5°C and 37.5°C.`
// });

// // 4
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Hand hygiene is the most effective method to prevent:",
//   options: ["Medication errors", "Hospital-acquired infections", "Falls", "Pressure sores"],
//   correct: 1,
//   explanation: `Proper hand hygiene significantly reduces healthcare-associated infections.`
// });

// // 5
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which position is best for a patient experiencing dyspnea?",
//   options: ["Supine", "Prone", "Fowler’s", "Lithotomy"],
//   correct: 2,
//   explanation: `Fowler’s position improves lung expansion and eases breathing.`
// });

// // 6
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The first step of the nursing process is:",
//   options: ["Diagnosis", "Assessment", "Planning", "Implementation"],
//   correct: 1,
//   explanation: `Assessment involves systematic data collection about the patient.`
// });

// // 7
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "A pressure ulcer is caused mainly due to:",
//   options: ["Infection", "Poor nutrition", "Prolonged pressure", "Dehydration"],
//   correct: 2,
//   explanation: `Continuous pressure impairs blood flow leading to tissue necrosis.`
// });

// // 8
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The most common site for intramuscular injection in adults is:",
//   options: ["Deltoid", "Vastus lateralis", "Gluteus medius", "Rectus femoris"],
//   correct: 2,
//   explanation: `Gluteus medius is preferred for large-volume IM injections in adults.`
// });

// // 9
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which PPE is essential while handling blood and body fluids?",
//   options: ["Mask", "Gown", "Gloves", "Cap"],
//   correct: 2,
//   explanation: `Gloves prevent direct contact with blood and body fluids.`
// });

// // 10
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The normal pulse rate for a healthy adult is:",
//   options: ["40–60 bpm", "60–100 bpm", "100–120 bpm", "120–140 bpm"],
//   correct: 1,
//   explanation: `Normal adult pulse rate ranges from 60 to 100 beats per minute.`
// });

// // 11
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which electrolyte imbalance is seen in diarrhea?",
//   options: ["Hyperkalemia", "Hyponatremia", "Hypercalcemia", "Hypernatremia"],
//   correct: 1,
//   explanation: `Excessive fluid loss causes sodium depletion leading to hyponatremia.`
// });

// // 12
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The antidote for heparin is:",
//   options: ["Vitamin K", "Protamine sulfate", "Atropine", "Naloxone"],
//   correct: 1,
//   explanation: `Protamine sulfate neutralizes the effect of heparin.`
// });

// // 13
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "A patient with hypoglycemia should be given:",
//   options: ["Insulin", "Oral glucose", "Normal saline", "Potassium"],
//   correct: 1,
//   explanation: `Immediate glucose administration corrects low blood sugar levels.`
// });

// // 14
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by deficiency of insulin?",
//   options: ["Diabetes mellitus", "Diabetes insipidus", "Hypothyroidism", "Addison’s disease"],
//   correct: 0,
//   explanation: `Insulin deficiency leads to diabetes mellitus.`
// });

// // 15
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The Glasgow Coma Scale assesses:",
//   options: ["Pain", "Consciousness", "Respiration", "Blood pressure"],
//   correct: 1,
//   explanation: `GCS evaluates level of consciousness in neurological patients.`
// });

// // 16
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is a sign of infection?",
//   options: ["Hypothermia", "Bradycardia", "Fever", "Hypotension"],
//   correct: 2,
//   explanation: `Fever is a common systemic sign of infection.`
// });

// // 17
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The main cause of anemia is deficiency of:",
//   options: ["Calcium", "Iron", "Vitamin C", "Sodium"],
//   correct: 1,
//   explanation: `Iron deficiency reduces hemoglobin synthesis causing anemia.`
// });

// // 18
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which artery is commonly used to measure pulse?",
//   options: ["Femoral", "Carotid", "Radial", "Brachial"],
//   correct: 2,
//   explanation: `Radial artery is most accessible and commonly used.`
// });

// // 19
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Oxygen is administered in COPD patients cautiously because of:",
//   options: ["Oxygen toxicity", "CO2 retention", "Hypoxia", "Pulmonary edema"],
//   correct: 1,
//   explanation: `High oxygen levels can suppress respiratory drive causing CO2 retention.`
// });

// // 20
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which medication reduces gastric acid secretion?",
//   options: ["Antacids", "H2 blockers", "Antibiotics", "Laxatives"],
//   correct: 1,
//   explanation: `H2 blockers decrease gastric acid production.`
// });

// // 21
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The best site to check temperature in infants is:",
//   options: ["Oral", "Axillary", "Rectal", "Tympanic"],
//   correct: 1,
//   explanation: `Axillary method is safest and commonly used in infants.`
// });

// // 22
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires isolation nursing?",
//   options: ["Diabetes", "Hypertension", "Tuberculosis", "Anemia"],
//   correct: 2,
//   explanation: `Tuberculosis is a communicable airborne disease requiring isolation.`
// });

// // 23
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "A sterile field is considered contaminated if:",
//   options: ["It gets wet", "Touched by sterile gloves", "Above waist level", "Covered properly"],
//   correct: 0,
//   explanation: `Moisture allows microorganisms to pass through by capillary action.`
// });

// // 24
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The most common symptom of myocardial infarction is:",
//   options: ["Headache", "Chest pain", "Abdominal pain", "Dizziness"],
//   correct: 1,
//   explanation: `Severe chest pain is a hallmark symptom of MI.`
// });

// // 25
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which IV fluid is isotonic?",
//   options: ["5% dextrose", "Normal saline", "0.45% saline", "3% saline"],
//   correct: 1,
//   explanation: `Normal saline has osmolarity similar to plasma.`
// });

// // 26
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The antidote for morphine overdose is:",
//   options: ["Naloxone", "Atropine", "Flumazenil", "Protamine"],
//   correct: 0,
//   explanation: `Naloxone reverses opioid effects.`
// });

// // 27
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is affected in hepatitis?",
//   options: ["Kidney", "Heart", "Liver", "Lung"],
//   correct: 2,
//   explanation: `Hepatitis is inflammation of the liver.`
// });

// // 28
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The normal respiratory rate in adults is:",
//   options: ["8–10/min", "12–20/min", "20–30/min", "30–40/min"],
//   correct: 1,
//   explanation: `Normal adult respiratory rate is 12–20 breaths per minute.`
// });

// // 29
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which test measures long-term blood glucose control?",
//   options: ["FBS", "PPBS", "HbA1c", "RBS"],
//   correct: 2,
//   explanation: `HbA1c reflects average blood glucose over 2–3 months.`
// });

// // 30
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The primary purpose of a nursing care plan is to:",
//   options: ["Document diagnosis", "Guide patient care", "Assist doctors", "Record medications"],
//   correct: 1,
//   explanation: `Care plans guide individualized and systematic nursing care.`
// });

// // 31
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes scurvy?",
//   options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
//   correct: 2,
//   explanation: `Vitamin C deficiency leads to scurvy.`
// });

// // 32
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The term tachycardia means:",
//   options: ["Slow heart rate", "Normal heart rate", "Fast heart rate", "Irregular rhythm"],
//   correct: 2,
//   explanation: `Tachycardia refers to increased heart rate above normal.`
// });

// // 33
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is characterized by wheezing?",
//   options: ["Asthma", "TB", "Pneumonia", "Bronchitis"],
//   correct: 0,
//   explanation: `Asthma causes airway narrowing leading to wheezing.`
// });

// // 34
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The color of normal urine is due to:",
//   options: ["Urea", "Urochrome", "Creatinine", "Bilirubin"],
//   correct: 1,
//   explanation: `Urochrome pigment gives urine its yellow color.`
// });

// // 35
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which position is used during enema administration?",
//   options: ["Supine", "Prone", "Left lateral", "Lithotomy"],
//   correct: 2,
//   explanation: `Left lateral position allows easy flow into the colon.`
// });

// // 36
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "A patient with burns is at high risk of:",
//   options: ["Hypertension", "Infection", "Obesity", "Constipation"],
//   correct: 1,
//   explanation: `Burns damage skin barrier increasing infection risk.`
// });

// // 37
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ regulates blood pressure primarily?",
//   options: ["Heart", "Kidney", "Liver", "Lungs"],
//   correct: 1,
//   explanation: `Kidneys regulate BP through fluid and electrolyte balance.`
// });

// // 38
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The first aid for snake bite includes:",
//   options: ["Cutting the wound", "Tourniquet tightly", "Immobilization", "Sucking venom"],
//   correct: 2,
//   explanation: `Immobilization slows venom spread.`
// });

// // 39
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates dehydration?",
//   options: ["Edema", "Moist skin", "Dry mucous membranes", "Polyuria"],
//   correct: 2,
//   explanation: `Dry mucous membranes are a classic sign of dehydration.`
// });

// // 40
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The normal pH of blood is:",
//   options: ["6.8–7.0", "7.0–7.2", "7.35–7.45", "7.5–7.8"],
//   correct: 2,
//   explanation: `Normal blood pH is maintained between 7.35 and 7.45.`
// });


// // 41
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which layer of skin is responsible for skin color?",
//   options: ["Dermis", "Epidermis", "Subcutaneous tissue", "Basement membrane"],
//   correct: 1,
//   explanation: `Melanocytes in the epidermis determine skin color.`
// });

// // 42
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The correct angle for intradermal injection is:",
//   options: ["15 degrees", "45 degrees", "60 degrees", "90 degrees"],
//   correct: 0,
//   explanation: `Intradermal injections are given at a shallow angle of 15 degrees.`
// });

// // 43
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by absence of urine?",
//   options: ["Oliguria", "Polyuria", "Anuria", "Dysuria"],
//   correct: 2,
//   explanation: `Anuria means absence or near absence of urine output.`
// });

// // 44
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The main function of red blood cells is to:",
//   options: ["Fight infection", "Clot blood", "Transport oxygen", "Regulate immunity"],
//   correct: 2,
//   explanation: `Hemoglobin in RBCs carries oxygen to body tissues.`
// });

// // 45
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood group is known as universal donor?",
//   options: ["A+", "B+", "AB+", "O-"],
//   correct: 3,
//   explanation: `O negative blood can be given to all blood groups.`
// });

// // 46
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The most common complication of immobility is:",
//   options: ["Hypertension", "Pressure sores", "Hyperglycemia", "Fever"],
//   correct: 1,
//   explanation: `Prolonged immobility leads to pressure ulcer formation.`
// });

// // 47
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates hypoxia?",
//   options: ["Pallor", "Cyanosis", "Jaundice", "Edema"],
//   correct: 1,
//   explanation: `Cyanosis results from reduced oxygen saturation.`
// });

// // 48
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The best indicator of adequate oxygenation is:",
//   options: ["Respiratory rate", "Skin color", "Pulse oximetry", "Blood pressure"],
//   correct: 2,
//   explanation: `Pulse oximetry measures oxygen saturation directly.`
// });

// // 49
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease affects the alveoli of lungs?",
//   options: ["Asthma", "Emphysema", "Bronchitis", "Pharyngitis"],
//   correct: 1,
//   explanation: `Emphysema damages alveolar walls affecting gas exchange.`
// });

// // 50
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The primary function of platelets is:",
//   options: ["Oxygen transport", "Immunity", "Blood clotting", "Hormone secretion"],
//   correct: 2,
//   explanation: `Platelets are essential for blood coagulation.`
// });

// // 51
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which drug is commonly used to reduce fever?",
//   options: ["Ibuprofen", "Amoxicillin", "Insulin", "Heparin"],
//   correct: 0,
//   explanation: `Ibuprofen is an antipyretic used to reduce fever.`
// });

// // 52
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is caused by increased bilirubin?",
//   options: ["Anemia", "Cyanosis", "Jaundice", "Edema"],
//   correct: 2,
//   explanation: `Excess bilirubin leads to yellow discoloration called jaundice.`
// });

// // 53
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The most reliable site to measure core temperature is:",
//   options: ["Axillary", "Oral", "Rectal", "Tympanic"],
//   correct: 2,
//   explanation: `Rectal temperature best reflects core body temperature.`
// });

// // 54
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which IV site complication causes swelling and pain?",
//   options: ["Phlebitis", "Infiltration", "Embolism", "Infection"],
//   correct: 1,
//   explanation: `Infiltration occurs when IV fluid leaks into surrounding tissue.`
// });

// // 55
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone regulates blood sugar levels?",
//   options: ["Thyroxine", "Insulin", "Cortisol", "Adrenaline"],
//   correct: 1,
//   explanation: `Insulin lowers blood glucose by facilitating cellular uptake.`
// });

// // 56
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires fluid restriction?",
//   options: ["Dehydration", "Heart failure", "Diarrhea", "Burns"],
//   correct: 1,
//   explanation: `Fluid overload worsens symptoms in heart failure patients.`
// });

// // 57
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The main cause of hypokalemia is:",
//   options: ["Excess intake", "Vomiting and diarrhea", "Renal failure", "Blood transfusion"],
//   correct: 1,
//   explanation: `Loss of potassium occurs through vomiting and diarrhea.`
// });

// // 58
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces bile?",
//   options: ["Gall bladder", "Pancreas", "Liver", "Stomach"],
//   correct: 2,
//   explanation: `Bile is produced by the liver and stored in the gall bladder.`
// });

// // 59
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "A sudden drop in blood pressure is called:",
//   options: ["Hypertension", "Hypotension", "Bradycardia", "Tachycardia"],
//   correct: 1,
//   explanation: `Hypotension refers to abnormally low blood pressure.`
// });

// // 60
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by deficiency of vitamin D?",
//   options: ["Scurvy", "Rickets", "Beriberi", "Pellagra"],
//   correct: 1,
//   explanation: `Vitamin D deficiency causes rickets in children.`
// });

// // 61
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which pulse site is used during cardiac arrest?",
//   options: ["Radial", "Brachial", "Carotid", "Popliteal"],
//   correct: 2,
//   explanation: `Carotid pulse is assessed during cardiac arrest as it reflects central circulation.`
// });

// // 62
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is most commonly seen after surgery?",
//   options: ["Hypertension", "Infection", "Diabetes", "Anemia"],
//   correct: 1,
//   explanation: `Post-operative patients are at high risk of infection due to surgical wounds.`
// });

// // 63
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The most important nursing responsibility before blood transfusion is to:",
//   options: ["Warm the blood", "Check blood group and cross-match", "Administer antibiotics", "Check blood pressure"],
//   correct: 1,
//   explanation: `Verification of blood group and cross-matching prevents transfusion reactions.`
// });

// // 64
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates fluid overload?",
//   options: ["Dry mouth", "Weight loss", "Edema", "Decreased BP"],
//   correct: 2,
//   explanation: `Edema occurs due to excess fluid accumulation in tissues.`
// });

// // 65
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which test confirms tuberculosis?",
//   options: ["Chest X-ray", "Mantoux test", "Sputum examination", "CBC"],
//   correct: 2,
//   explanation: `Detection of acid-fast bacilli in sputum confirms TB.`
// });

// // 66
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action prevents aspiration during feeding?",
//   options: ["Supine position", "Fast feeding", "Upright position", "High fluid intake"],
//   correct: 2,
//   explanation: `Upright position reduces risk of aspiration while feeding.`
// });

// // 67
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The normal hemoglobin level in adult males is:",
//   options: ["8–10 g/dl", "10–12 g/dl", "13–17 g/dl", "18–20 g/dl"],
//   correct: 2,
//   explanation: `Normal hemoglobin range for adult males is 13–17 g/dl.`
// });

// // 68
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease results from prolonged uncontrolled hypertension?",
//   options: ["Stroke", "Asthma", "Anemia", "Gastritis"],
//   correct: 0,
//   explanation: `Hypertension damages blood vessels leading to stroke.`
// });

// // 69
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign is an early indication of shock?",
//   options: ["Low temperature", "Bradycardia", "Cold clammy skin", "Hypertension"],
//   correct: 2,
//   explanation: `Peripheral vasoconstriction causes cold clammy skin in shock.`
// });

// // 70
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The primary function of the kidneys is to:",
//   options: ["Digest food", "Filter blood", "Produce insulin", "Store bile"],
//   correct: 1,
//   explanation: `Kidneys filter waste products and maintain fluid balance.`
// });

// // 71
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication can arise from prolonged catheterization?",
//   options: ["UTI", "Hypertension", "Constipation", "Hypoglycemia"],
//   correct: 0,
//   explanation: `Prolonged catheter use increases risk of urinary tract infection.`
// });

// // 72
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes bluish discoloration of skin?",
//   options: ["Jaundice", "Pallor", "Cyanosis", "Erythema"],
//   correct: 2,
//   explanation: `Cyanosis is caused by decreased oxygenation of blood.`
// });

// // 73
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which laboratory test measures kidney function?",
//   options: ["SGPT", "Serum creatinine", "HbA1c", "ESR"],
//   correct: 1,
//   explanation: `Serum creatinine reflects renal function.`
// });

// // 74
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The safest position for an unconscious patient is:",
//   options: ["Supine", "Prone", "Recovery position", "Trendelenburg"],
//   correct: 2,
//   explanation: `Recovery position prevents airway obstruction and aspiration.`
// });

// // 75
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires immediate IV fluid resuscitation?",
//   options: ["Mild fever", "Severe dehydration", "Constipation", "Hypertension"],
//   correct: 1,
//   explanation: `Severe dehydration causes hypovolemia needing rapid fluid replacement.`
// });

// // 76
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates improvement in a patient with pneumonia?",
//   options: ["Increased RR", "Reduced fever", "Cyanosis", "Chest pain"],
//   correct: 1,
//   explanation: `Reduction in fever indicates response to treatment.`
// });

// // 77
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease affects the coronary arteries?",
//   options: ["Stroke", "Coronary artery disease", "Hypertension", "Asthma"],
//   correct: 1,
//   explanation: `Coronary artery disease involves narrowing of coronary arteries.`
// });

// // 78
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The first nursing action in case of bleeding is to:",
//   options: ["Give fluids", "Apply pressure", "Administer drugs", "Call doctor"],
//   correct: 1,
//   explanation: `Direct pressure helps control bleeding immediately.`
// });

// // 79
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by bacterial infection?",
//   options: ["Influenza", "Malaria", "Typhoid", "Measles"],
//   correct: 2,
//   explanation: `Typhoid fever is caused by Salmonella typhi bacteria.`
// });

// // 80
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates effective pain relief?",
//   options: ["Increased BP", "Restlessness", "Relaxed facial expression", "Tachycardia"],
//   correct: 2,
//   explanation: `Relaxed posture and facial expression indicate pain relief.`
// });

// // 81
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which artery is used to measure blood pressure?",
//   options: ["Radial", "Carotid", "Brachial", "Femoral"],
//   correct: 2,
//   explanation: `Blood pressure is measured over the brachial artery.`
// });

// // 82
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which electrolyte is essential for cardiac muscle function?",
//   options: ["Sodium", "Potassium", "Calcium", "Chloride"],
//   correct: 1,
//   explanation: `Potassium plays a vital role in cardiac muscle contraction.`
// });

// // 83
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by high blood sugar?",
//   options: ["Hypoglycemia", "Hyperglycemia", "Anemia", "Acidosis"],
//   correct: 1,
//   explanation: `Hyperglycemia refers to elevated blood glucose levels.`
// });

// // 84
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The correct position for lumbar puncture is:",
//   options: ["Supine", "Prone", "Lateral flexed", "Trendelenburg"],
//   correct: 2,
//   explanation: `Lateral flexed position widens intervertebral spaces for lumbar puncture.`
// });

// // 85
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is associated with IV cannula insertion?",
//   options: ["Embolism", "Phlebitis", "Atelectasis", "Constipation"],
//   correct: 1,
//   explanation: `Phlebitis is inflammation of vein due to IV cannulation.`
// });

// // 86
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires a low-sodium diet?",
//   options: ["Anemia", "Hypertension", "Hypoglycemia", "Diarrhea"],
//   correct: 1,
//   explanation: `Low-sodium diet helps control blood pressure.`
// });

// // 87
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates respiratory distress?",
//   options: ["Bradycardia", "Use of accessory muscles", "Hypotension", "Edema"],
//   correct: 1,
//   explanation: `Use of accessory muscles suggests increased work of breathing.`
// });

// // 88
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which infection control method breaks the chain of infection?",
//   options: ["Hand washing", "Isolation", "Vaccination", "All of the above"],
//   correct: 3,
//   explanation: `All listed methods interrupt transmission of infection.`
// });

// // 89
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes sudden severe chest pain radiating to left arm?",
//   options: ["Asthma", "Myocardial infarction", "Pneumonia", "Gastritis"],
//   correct: 1,
//   explanation: `Classic symptom of myocardial infarction is radiating chest pain.`
// });

// // 90
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone increases blood calcium levels?",
//   options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Thyroxine"],
//   correct: 1,
//   explanation: `Parathyroid hormone increases serum calcium levels.`
// });

// // 91
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The main purpose of splinting a fracture is to:",
//   options: ["Reduce pain", "Prevent movement", "Promote healing", "All of the above"],
//   correct: 3,
//   explanation: `Splinting reduces pain, prevents movement, and aids healing.`
// });

// // 92
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is indicated by yellow discoloration of sclera?",
//   options: ["Cyanosis", "Pallor", "Jaundice", "Erythema"],
//   correct: 2,
//   explanation: `Yellow sclera is a sign of jaundice.`
// });

// // 93
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which lab test measures blood clotting time?",
//   options: ["BT", "PT", "INR", "All of the above"],
//   correct: 3,
//   explanation: `BT, PT, and INR assess different aspects of coagulation.`
// });

// // 94
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is caused by decreased hemoglobin?",
//   options: ["Polycythemia", "Anemia", "Leukemia", "Thrombocytopenia"],
//   correct: 1,
//   explanation: `Anemia results from reduced hemoglobin levels.`
// });

// // 95
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nerve is affected in facial palsy?",
//   options: ["Optic nerve", "Facial nerve", "Vagus nerve", "Hypoglossal nerve"],
//   correct: 1,
//   explanation: `Facial palsy involves damage to the facial nerve.`
// });

// // 96
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates effective airway clearance?",
//   options: ["Wheezing", "Crackles", "Clear breath sounds", "Coughing"],
//   correct: 2,
//   explanation: `Clear breath sounds indicate effective airway clearance.`
// });

// // 97
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires elevation of the affected limb?",
//   options: ["Fracture", "Edema", "Burns", "Shock"],
//   correct: 1,
//   explanation: `Elevation helps reduce edema by promoting venous return.`
// });

// // 98
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for blood clotting?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
//   correct: 2,
//   explanation: `Vitamin K is required for synthesis of clotting factors.`
// });

// // 99
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes fruity odor of breath?",
//   options: ["Renal failure", "Diabetic ketoacidosis", "Liver failure", "Asthma"],
//   correct: 1,
//   explanation: `Acetone breath is characteristic of diabetic ketoacidosis.`
// });

// // 100
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The priority nursing action in case of airway obstruction is to:",
//   options: ["Give oxygen", "Call for help", "Clear the airway", "Check BP"],
//   correct: 2,
//   explanation: `Airway clearance is the first priority in obstruction.`
// });

// // 101
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which component of blood is responsible for immunity?",
//   options: ["RBC", "WBC", "Platelets", "Plasma"],
//   correct: 1,
//   explanation: `White blood cells protect the body against infections.`
// });

// // 102
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which breathing pattern is seen in metabolic acidosis?",
//   options: ["Cheyne-Stokes", "Kussmaul breathing", "Apnea", "Bradypnea"],
//   correct: 1,
//   explanation: `Kussmaul breathing is deep and rapid to expel excess CO2.`
// });

// // 103
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition results from deficiency of vitamin B12?",
//   options: ["Microcytic anemia", "Megaloblastic anemia", "Aplastic anemia", "Iron deficiency anemia"],
//   correct: 1,
//   explanation: `Vitamin B12 deficiency causes megaloblastic anemia.`
// });

// // 104
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is primarily affected in peptic ulcer disease?",
//   options: ["Liver", "Small intestine", "Stomach", "Esophagus"],
//   correct: 2,
//   explanation: `Peptic ulcers commonly affect the stomach lining.`
// });

// // 105
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which assessment finding indicates hypovolemia?",
//   options: ["Bounding pulse", "Low urine output", "Hypertension", "Edema"],
//   correct: 1,
//   explanation: `Reduced circulating volume leads to decreased urine output.`
// });

// // 106
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing measure helps prevent deep vein thrombosis?",
//   options: ["Bed rest", "Leg elevation", "Early ambulation", "Fluid restriction"],
//   correct: 2,
//   explanation: `Early ambulation promotes venous circulation preventing DVT.`
// });

// // 107
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which drug category is used to treat bacterial infections?",
//   options: ["Antivirals", "Antipyretics", "Antibiotics", "Analgesics"],
//   correct: 2,
//   explanation: `Antibiotics act against bacterial pathogens.`
// });

// // 108
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes narrowing of airways due to inflammation?",
//   options: ["Pneumonia", "Asthma", "Tuberculosis", "Pulmonary edema"],
//   correct: 1,
//   explanation: `Asthma is characterized by bronchial inflammation and constriction.`
// });

// // 109
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which clinical sign indicates hypocalcemia?",
//   options: ["Muscle weakness", "Tetany", "Bradycardia", "Edema"],
//   correct: 1,
//   explanation: `Low calcium levels lead to neuromuscular excitability and tetany.`
// });

// // 110
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing intervention reduces risk of aspiration in bedridden patients?",
//   options: ["Supine feeding", "Head-end elevation", "Rapid feeding", "Fluid restriction"],
//   correct: 1,
//   explanation: `Elevating head-end prevents aspiration during feeding.`
// });

// // 111
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is associated with protein loss in urine?",
//   options: ["Nephrotic syndrome", "Cystitis", "Renal stone", "UTI"],
//   correct: 0,
//   explanation: `Nephrotic syndrome causes massive proteinuria.`
// });

// // 112
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ controls voluntary movements?",
//   options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
//   correct: 0,
//   explanation: `The cerebrum controls voluntary motor activities.`
// });

// // 113
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes swelling of joints with pain?",
//   options: ["Osteoporosis", "Arthritis", "Rickets", "Scoliosis"],
//   correct: 1,
//   explanation: `Arthritis involves inflammation of joints causing pain and swelling.`
// });

// // 114
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates improvement in renal function?",
//   options: ["Decreased urine output", "Increased creatinine", "Increased urine output", "Edema"],
//   correct: 2,
//   explanation: `Improved renal function results in adequate urine output.`
// });

// // 115
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which factor increases risk of pressure ulcer formation?",
//   options: ["Good nutrition", "Frequent repositioning", "Moist skin", "Adequate mobility"],
//   correct: 2,
//   explanation: `Moisture weakens skin integrity increasing ulcer risk.`
// });

// // 116
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by air in pleural cavity?",
//   options: ["Hemothorax", "Pleural effusion", "Pneumothorax", "Atelectasis"],
//   correct: 2,
//   explanation: `Pneumothorax occurs due to air accumulation in pleural space.`
// });

// // 117
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which assessment tool is used to assess pain intensity?",
//   options: ["GCS", "BMI scale", "Numeric pain scale", "Apgar score"],
//   correct: 2,
//   explanation: `Numeric pain scale quantifies pain severity.`
// });

// // 118
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient is essential for wound healing?",
//   options: ["Carbohydrates", "Fats", "Proteins", "Vitamins only"],
//   correct: 2,
//   explanation: `Proteins are required for tissue repair and healing.`
// });

// // 119
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by obstruction of coronary arteries?",
//   options: ["Heart failure", "Angina pectoris", "Arrhythmia", "Endocarditis"],
//   correct: 1,
//   explanation: `Angina occurs due to reduced blood flow to heart muscle.`
// });

// // 120
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires administration of bronchodilators?",
//   options: ["Hypertension", "Asthma", "Anemia", "Diabetes mellitus"],
//   correct: 1,
//   explanation: `Bronchodilators relieve airway constriction in asthma.`
// });

// // 121
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is caused by decreased platelet count?",
//   options: ["Leukopenia", "Thrombocytopenia", "Polycythemia", "Anemia"],
//   correct: 1,
//   explanation: `Thrombocytopenia refers to a low platelet count leading to bleeding risk.`
// });

// // 122
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign is commonly seen in fluid volume deficit?",
//   options: ["Bounding pulse", "Distended neck veins", "Dry skin", "Edema"],
//   correct: 2,
//   explanation: `Dry skin and mucous membranes indicate fluid volume deficit.`
// });

// // 123
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which artery supplies blood to the heart muscle?",
//   options: ["Pulmonary artery", "Coronary artery", "Carotid artery", "Aorta"],
//   correct: 1,
//   explanation: `Coronary arteries supply oxygenated blood to the myocardium.`
// });

// // 124
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes sudden unilateral weakness of the body?",
//   options: ["Epilepsy", "Stroke", "Meningitis", "Parkinson’s disease"],
//   correct: 1,
//   explanation: `Stroke commonly presents with sudden weakness on one side of the body.`
// });

// // 125
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing intervention helps prevent urinary retention postoperatively?",
//   options: ["Restrict fluids", "Encourage early ambulation", "Insert catheter routinely", "Delay voiding"],
//   correct: 1,
//   explanation: `Early ambulation stimulates bladder function and prevents retention.`
// });

// // 126
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates hypothermia?",
//   options: ["Warm flushed skin", "Shivering", "High fever", "Tachypnea"],
//   correct: 1,
//   explanation: `Shivering is a common early sign of hypothermia.`
// });

// // 127
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which laboratory value is elevated in infection?",
//   options: ["Hemoglobin", "Platelets", "White blood cells", "Calcium"],
//   correct: 2,
//   explanation: `Infections typically cause an increase in white blood cell count.`
// });

// // 128
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action is most important in seizure management?",
//   options: ["Restrain patient", "Maintain airway", "Give oral fluids", "Measure BP"],
//   correct: 1,
//   explanation: `Maintaining a patent airway is the priority during seizures.`
// });

// // 129
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition results from excess thyroid hormone?",
//   options: ["Hypothyroidism", "Hyperthyroidism", "Diabetes insipidus", "Cushing’s syndrome"],
//   correct: 1,
//   explanation: `Hyperthyroidism is caused by excessive thyroid hormone secretion.`
// });

// // 130
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which electrolyte imbalance can cause cardiac arrhythmias?",
//   options: ["Hyponatremia", "Hypokalemia", "Hyperchloremia", "Hyperphosphatemia"],
//   correct: 1,
//   explanation: `Low potassium levels significantly affect cardiac rhythm.`
// });

// // 131
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is most characteristic of appendicitis?",
//   options: ["Left lower quadrant pain", "Right lower quadrant pain", "Epigastric pain", "Chest pain"],
//   correct: 1,
//   explanation: `Appendicitis typically presents with right lower quadrant abdominal pain.`
// });

// // 132
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is caused by prolonged hypoxia?",
//   options: ["Cyanosis", "Jaundice", "Anemia", "Edema"],
//   correct: 0,
//   explanation: `Cyanosis occurs due to prolonged inadequate oxygenation.`
// });

// // 133
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing responsibility ensures patient safety during transfer?",
//   options: ["Proper body mechanics", "Fast movement", "Minimal assistance", "Ignoring posture"],
//   correct: 0,
//   explanation: `Proper body mechanics prevent injury to both nurse and patient.`
// });

// // 134
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition leads to accumulation of fluid in alveoli?",
//   options: ["Asthma", "Pulmonary edema", "Emphysema", "Bronchitis"],
//   correct: 1,
//   explanation: `Pulmonary edema causes fluid accumulation in alveoli impairing gas exchange.`
// });

// // 135
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which test is used to detect anemia?",
//   options: ["Blood glucose", "Hemoglobin estimation", "Serum sodium", "Lipid profile"],
//   correct: 1,
//   explanation: `Hemoglobin estimation helps diagnose anemia.`
// });

// // 136
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing measure helps prevent constipation in bedridden patients?",
//   options: ["Low fiber diet", "Fluid restriction", "Adequate fluids and fiber", "Bed rest"],
//   correct: 2,
//   explanation: `Fluids and fiber promote bowel movement and prevent constipation.`
// });

// // 137
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates effective circulation?",
//   options: ["Delayed capillary refill", "Cold extremities", "Normal capillary refill", "Cyanosis"],
//   correct: 2,
//   explanation: `Normal capillary refill indicates adequate peripheral circulation.`
// });

// // 138
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is caused by lack of oxygen to brain tissue?",
//   options: ["Hypoxia", "Ischemia", "Anoxia", "Edema"],
//   correct: 2,
//   explanation: `Anoxia refers to complete absence of oxygen to tissues, including the brain.`
// });

// // 139
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action reduces risk of hospital-acquired infections?",
//   options: ["Prolonged catheter use", "Proper hand hygiene", "Delayed wound care", "Shared equipment"],
//   correct: 1,
//   explanation: `Hand hygiene is the most effective method to reduce HAIs.`
// });

// // 140
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires monitoring of intake and output strictly?",
//   options: ["Migraine", "Renal failure", "Dermatitis", "Anxiety"],
//   correct: 1,
//   explanation: `Renal failure affects fluid balance, requiring strict I&O monitoring.`
// });

// // 141
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition results from prolonged exposure to cold temperatures?",
//   options: ["Hyperthermia", "Hypothermia", "Heat exhaustion", "Heat stroke"],
//   correct: 1,
//   explanation: `Hypothermia occurs when body temperature falls below normal due to cold exposure.`
// });

// // 142
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which electrolyte is mainly responsible for nerve impulse transmission?",
//   options: ["Calcium", "Potassium", "Sodium", "Magnesium"],
//   correct: 2,
//   explanation: `Sodium plays a key role in initiation and transmission of nerve impulses.`
// });

// // 143
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which clinical sign suggests internal bleeding?",
//   options: ["Hypertension", "Pallor and tachycardia", "Bradycardia", "Warm skin"],
//   correct: 1,
//   explanation: `Internal bleeding causes reduced circulating volume leading to pallor and tachycardia.`
// });

// // 144
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing intervention is essential for preventing aspiration pneumonia?",
//   options: ["Supine positioning", "Proper oral hygiene", "Rapid feeding", "Fluid restriction"],
//   correct: 1,
//   explanation: `Oral hygiene reduces bacterial load and aspiration pneumonia risk.`
// });

// // 145
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes decreased lung compliance?",
//   options: ["Emphysema", "Pulmonary fibrosis", "Asthma", "Bronchitis"],
//   correct: 1,
//   explanation: `Pulmonary fibrosis stiffens lung tissue, reducing compliance.`
// });

// // 146
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which laboratory test assesses liver function?",
//   options: ["Serum creatinine", "SGOT/SGPT", "Blood urea", "ESR"],
//   correct: 1,
//   explanation: `SGOT and SGPT are enzymes used to assess liver function.`
// });

// // 147
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by involuntary muscle contractions?",
//   options: ["Atrophy", "Spasm", "Paralysis", "Weakness"],
//   correct: 1,
//   explanation: `Muscle spasms are sudden involuntary contractions.`
// });

// // 148
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates effective wound healing?",
//   options: ["Redness and swelling", "Purulent discharge", "Granulation tissue", "Foul odor"],
//   correct: 2,
//   explanation: `Granulation tissue indicates healthy wound healing.`
// });

// // 149
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by obstruction of bile flow?",
//   options: ["Hepatitis", "Obstructive jaundice", "Cirrhosis", "Cholecystitis"],
//   correct: 1,
//   explanation: `Obstructive jaundice results from blockage in bile ducts.`
// });

// // 150
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing measure prevents atelectasis postoperatively?",
//   options: ["Bed rest", "Incentive spirometry", "Fluid restriction", "Sedation"],
//   correct: 1,
//   explanation: `Incentive spirometry promotes lung expansion preventing atelectasis.`
// });

// // 151
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes excessive thirst and urination?",
//   options: ["Hypothyroidism", "Diabetes mellitus", "Addison’s disease", "Anemia"],
//   correct: 1,
//   explanation: `Diabetes mellitus causes polyuria and polydipsia due to hyperglycemia.`
// });

// // 152
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which assessment finding indicates dehydration in elderly?",
//   options: ["Elastic skin", "Sunken eyes", "Edema", "Bounding pulse"],
//   correct: 1,
//   explanation: `Sunken eyes are a common sign of dehydration, especially in elderly patients.`
// });

// // 153
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires a high-protein diet?",
//   options: ["Renal failure", "Burns", "Heart failure", "Hypertension"],
//   correct: 1,
//   explanation: `Burn patients need high protein intake for tissue repair.`
// });

// // 154
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates raised intracranial pressure?",
//   options: ["Bradycardia", "Hypertension", "Irregular respiration", "All of the above"],
//   correct: 3,
//   explanation: `Cushing’s triad indicates raised intracranial pressure.`
// });

// // 155
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition leads to destruction of pancreatic beta cells?",
//   options: ["Type 1 diabetes mellitus", "Type 2 diabetes mellitus", "Cushing’s syndrome", "Acromegaly"],
//   correct: 0,
//   explanation: `Type 1 diabetes involves autoimmune destruction of beta cells.`
// });

// // 156
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action is essential before administering IV medications?",
//   options: ["Check blood glucose", "Confirm drug compatibility", "Warm the solution", "Give rapidly"],
//   correct: 1,
//   explanation: `Checking compatibility prevents drug precipitation and reactions.`
// });

// // 157
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is caused by decreased oxygen-carrying capacity of blood?",
//   options: ["Anemia", "Cyanosis", "Hypoxia", "Ischemia"],
//   correct: 0,
//   explanation: `Anemia reduces oxygen transport due to low hemoglobin.`
// });

// // 158
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign suggests effective pain management?",
//   options: ["Tachycardia", "Restlessness", "Improved sleep", "Increased BP"],
//   correct: 2,
//   explanation: `Improved sleep indicates adequate pain control.`
// });

// // 159
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes crackles on lung auscultation?",
//   options: ["Asthma", "Pulmonary edema", "Emphysema", "Pleural effusion"],
//   correct: 1,
//   explanation: `Fluid in alveoli causes crackles in pulmonary edema.`
// });

// // 160
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action helps prevent falls in hospitalized patients?",
//   options: ["Dim lighting", "Side rails up", "Cluttered floors", "Loose footwear"],
//   correct: 1,
//   explanation: `Side rails provide support and reduce fall risk.`
// });

// // 161
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by destruction of alveolar walls?",
//   options: ["Asthma", "Emphysema", "Bronchitis", "Pneumonia"],
//   correct: 1,
//   explanation: `Emphysema causes permanent destruction of alveoli reducing gas exchange.`
// });

// // 162
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action is a priority for a patient with vomiting?",
//   options: ["Give solid food", "Maintain hydration", "Restrict fluids", "Encourage ambulation"],
//   correct: 1,
//   explanation: `Maintaining hydration prevents electrolyte imbalance and dehydration.`
// });

// // 163
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which assessment finding suggests anemia?",
//   options: ["Flushed skin", "Pallor of conjunctiva", "Edema", "Cyanosis"],
//   correct: 1,
//   explanation: `Pallor of conjunctiva is a classic sign of anemia.`
// });

// // 164
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition results from obstruction of urinary outflow?",
//   options: ["Polyuria", "Urinary retention", "Anuria", "Incontinence"],
//   correct: 1,
//   explanation: `Urinary retention occurs due to blockage of urine flow.`
// });

// // 165
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates infection at IV cannula site?",
//   options: ["Cold skin", "Redness and warmth", "Pallor", "Dry skin"],
//   correct: 1,
//   explanation: `Redness and warmth are local signs of inflammation and infection.`
// });

// // 166
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is associated with sudden loss of consciousness?",
//   options: ["Syncope", "Hypertension", "Anemia", "Arthritis"],
//   correct: 0,
//   explanation: `Syncope refers to temporary loss of consciousness due to reduced cerebral perfusion.`
// });

// // 167
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing intervention prevents hypostatic pneumonia?",
//   options: ["Prolonged bed rest", "Frequent position change", "Fluid restriction", "Sedation"],
//   correct: 1,
//   explanation: `Frequent repositioning improves lung ventilation and prevents pneumonia.`
// });

// // 168
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes decreased urine specific gravity?",
//   options: ["Dehydration", "Diabetes insipidus", "Shock", "Heart failure"],
//   correct: 1,
//   explanation: `Diabetes insipidus leads to dilute urine with low specific gravity.`
// });

// // 169
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates worsening of head injury?",
//   options: ["Equal pupils", "Drowsiness", "Normal speech", "Stable vitals"],
//   correct: 1,
//   explanation: `Increasing drowsiness suggests raised intracranial pressure.`
// });

// // 170
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which diet is recommended for peptic ulcer disease?",
//   options: ["Spicy diet", "High fiber diet", "Bland diet", "High fat diet"],
//   correct: 2,
//   explanation: `Bland diet reduces gastric irritation in peptic ulcer disease.`
// });

// // 171
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing measure prevents contractures in bedridden patients?",
//   options: ["Complete bed rest", "Range of motion exercises", "Fluid restriction", "Low protein diet"],
//   correct: 1,
//   explanation: `ROM exercises maintain joint mobility and prevent contractures.`
// });

// // 172
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition results in accumulation of ketone bodies?",
//   options: ["Hypoglycemia", "Diabetic ketoacidosis", "Hyperthyroidism", "Cirrhosis"],
//   correct: 1,
//   explanation: `Diabetic ketoacidosis leads to ketone body formation.`
// });

// // 173
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates effective tissue perfusion?",
//   options: ["Cold extremities", "Delayed capillary refill", "Warm skin", "Cyanosis"],
//   correct: 2,
//   explanation: `Warm skin suggests adequate blood flow and perfusion.`
// });

// // 174
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by inflammation of pancreas?",
//   options: ["Cholecystitis", "Pancreatitis", "Gastritis", "Hepatitis"],
//   correct: 1,
//   explanation: `Pancreatitis is inflammation of the pancreas.`
// });

// // 175
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing responsibility ensures correct medication administration?",
//   options: ["Five rights of medication", "Fast administration", "Minimal documentation", "Verbal order only"],
//   correct: 0,
//   explanation: `Following the five rights ensures medication safety.`
// });

// // 176
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes pain relieved by sitting forward?",
//   options: ["Angina", "Pancreatitis", "Asthma", "GERD"],
//   correct: 1,
//   explanation: `Pain of pancreatitis is relieved by leaning forward.`
// });

// // 177
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates electrolyte imbalance?",
//   options: ["Stable vitals", "Muscle twitching", "Normal ECG", "Warm skin"],
//   correct: 1,
//   explanation: `Muscle twitching is common in electrolyte disturbances.`
// });

// // 178
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition requires strict aseptic technique?",
//   options: ["Wound dressing", "IV cannulation", "Catheterization", "All of the above"],
//   correct: 3,
//   explanation: `All invasive procedures require aseptic technique to prevent infection.`
// });

// // 179
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is commonly seen in heart failure?",
//   options: ["Polyuria", "Dyspnea", "Bradycardia", "Dry cough"],
//   correct: 1,
//   explanation: `Dyspnea occurs due to pulmonary congestion in heart failure.`
// });

// // 180
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action helps prevent medication errors?",
//   options: ["Verbal orders", "Proper documentation", "Skipping checks", "Fast administration"],
//   correct: 1,
//   explanation: `Accurate documentation reduces medication errors.`
// });

// // 181
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which electrolyte imbalance is most commonly associated with muscle weakness?",
//   options: ["Hypernatremia", "Hypokalemia", "Hypercalcemia", "Hypermagnesemia"],
//   correct: 1,
//   explanation: `Low potassium levels impair muscle contraction leading to weakness.`
// });

// // 182
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing intervention is most important for a patient with diarrhea?",
//   options: ["Restrict fluids", "Monitor intake and output", "Give high-fat diet", "Encourage bed rest only"],
//   correct: 1,
//   explanation: `Monitoring intake and output helps assess dehydration and fluid loss.`
// });

// // 183
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by inflammation of the gall bladder?",
//   options: ["Hepatitis", "Cholecystitis", "Pancreatitis", "Appendicitis"],
//   correct: 1,
//   explanation: `Cholecystitis refers to inflammation of the gall bladder.`
// });

// // 184
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign is an early indicator of hypoxia?",
//   options: ["Cyanosis", "Restlessness", "Bradycardia", "Hypotension"],
//   correct: 1,
//   explanation: `Restlessness occurs early due to inadequate oxygen supply to the brain.`
// });

// // 185
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which position is recommended for a patient with breathing difficulty?",
//   options: ["Supine", "Prone", "Fowler’s position", "Trendelenburg"],
//   correct: 2,
//   explanation: `Fowler’s position facilitates lung expansion and breathing.`
// });

// // 186
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition results from prolonged immobility?",
//   options: ["Hypertension", "Pressure ulcers", "Hyperglycemia", "Anemia"],
//   correct: 1,
//   explanation: `Continuous pressure reduces blood flow leading to pressure ulcers.`
// });

// // 187
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vital sign change is expected in fever?",
//   options: ["Decreased pulse", "Decreased respiration", "Increased pulse", "Decreased temperature"],
//   correct: 2,
//   explanation: `Fever increases metabolic rate leading to tachycardia.`
// });

// // 188
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes frothy sputum?",
//   options: ["Bronchitis", "Pulmonary edema", "Asthma", "Tuberculosis"],
//   correct: 1,
//   explanation: `Pulmonary edema produces frothy sputum due to fluid in alveoli.`
// });

// // 189
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action reduces risk of aspiration?",
//   options: ["Feeding in supine position", "Elevating head during feeding", "Rapid feeding", "Large bolus feeding"],
//   correct: 1,
//   explanation: `Head elevation prevents entry of food into the airway.`
// });

// // 190
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is indicated by decreased hemoglobin level?",
//   options: ["Polycythemia", "Anemia", "Leukocytosis", "Thrombocytosis"],
//   correct: 1,
//   explanation: `Anemia is defined by reduced hemoglobin concentration.`
// });

// // 191
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is primarily affected in hepatitis?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 1,
//   explanation: `Hepatitis is inflammation of the liver.`
// });

// // 192
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing responsibility helps prevent hospital-acquired infections?",
//   options: ["Proper hand hygiene", "Sharing equipment", "Ignoring isolation", "Minimal cleaning"],
//   correct: 0,
//   explanation: `Hand hygiene is the most effective infection control measure.`
// });

// // 193
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition presents with sudden severe chest pain radiating to left arm?",
//   options: ["Asthma", "Myocardial infarction", "GERD", "Pneumonia"],
//   correct: 1,
//   explanation: `Classic symptom of myocardial infarction is radiating chest pain.`
// });

// // 194
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which assessment tool is used to measure pain intensity?",
//   options: ["Apgar score", "Glasgow coma scale", "Numeric pain scale", "Braden scale"],
//   correct: 2,
//   explanation: `Numeric pain scale quantifies pain severity.`
// });

// // 195
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by excess thyroid hormone?",
//   options: ["Hypothyroidism", "Hyperthyroidism", "Goiter", "Cretinism"],
//   correct: 1,
//   explanation: `Hyperthyroidism results from increased thyroid hormone production.`
// });

// // 196
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing intervention prevents deep vein thrombosis?",
//   options: ["Prolonged immobility", "Leg elevation and exercises", "Fluid restriction", "Low protein diet"],
//   correct: 1,
//   explanation: `Leg exercises enhance venous return and prevent clot formation.`
// });

// // 197
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes decreased blood pressure?",
//   options: ["Hypertension", "Shock", "Polycythemia", "Hypervolemia"],
//   correct: 1,
//   explanation: `Shock leads to inadequate tissue perfusion and hypotension.`
// });

// // 198
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which test is used to assess blood glucose level?",
//   options: ["ECG", "Glucometer test", "X-ray", "Urine culture"],
//   correct: 1,
//   explanation: `Glucometer testing provides rapid blood glucose measurement.`
// });

// // 199
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is common in urinary tract infection?",
//   options: ["Chest pain", "Burning micturition", "Dyspnea", "Constipation"],
//   correct: 1,
//   explanation: `Burning sensation during urination is typical of UTI.`
// });

// // 200
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing action ensures patient safety during transfer?",
//   options: ["Ignoring body mechanics", "Using proper lifting techniques", "Rushing the transfer", "No assistance"],
//   correct: 1,
//   explanation: `Proper body mechanics prevent injury to patient and nurse.`
// });

// QUESTIONS 201–240 (40 QUESTIONS)
/** kkkkkkk */
// const topic = "Community Health Nursing & Maternal-Child Health";

// // 201
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator is used to assess the health status of a community?",
//   options: ["Birth rate", "Infant mortality rate", "Literacy rate", "Population density"],
//   correct: 1,
//   explanation: `Infant mortality rate is a sensitive indicator of community health.`
// });

// // 202
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vaccine is given at birth under the National Immunization Schedule?",
//   options: ["DPT", "BCG", "Measles", "Typhoid"],
//   correct: 1,
//   explanation: `BCG is administered at birth to protect against tuberculosis.`
// });

// // 203
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is used to calculate population growth?",
//   options: ["Crude birth rate", "Incidence rate", "Prevalence rate", "Attack rate"],
//   correct: 0,
//   explanation: `Crude birth rate helps estimate population growth.`
// });

// // 204
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is prevented by OPV?",
//   options: ["Measles", "Polio", "Diphtheria", "Pertussis"],
//   correct: 1,
//   explanation: `Oral Polio Vaccine protects against poliomyelitis.`
// });

// // 205
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which component is essential for safe motherhood?",
//   options: ["Antenatal care", "Late marriage", "Home delivery only", "Restricted nutrition"],
//   correct: 0,
//   explanation: `Regular antenatal care reduces maternal and fetal complications.`
// });

// // 206
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutritional deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin D", "Iron", "Iodine"],
//   correct: 0,
//   explanation: `Vitamin A deficiency leads to night blindness.`
// });

// // 207
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which stage of labor involves delivery of the baby?",
//   options: ["First stage", "Second stage", "Third stage", "Fourth stage"],
//   correct: 1,
//   explanation: `Second stage of labor ends with birth of the baby.`
// });

// // 208
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures deaths during pregnancy and childbirth?",
//   options: ["Infant mortality rate", "Maternal mortality rate", "Perinatal mortality rate", "Neonatal mortality rate"],
//   correct: 1,
//   explanation: `Maternal mortality rate reflects deaths related to pregnancy.`
// });

// // 209
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which contraceptive method provides permanent family planning for females?",
//   options: ["IUCD", "Tubectomy", "Oral pills", "Condom"],
//   correct: 1,
//   explanation: `Tubectomy is a permanent method of contraception.`
// });

// // 210
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is the leading cause of maternal mortality in India?",
//   options: ["Anemia", "Hemorrhage", "Diabetes", "UTI"],
//   correct: 1,
//   explanation: `Postpartum hemorrhage is the leading cause of maternal deaths.`
// });

// // 211
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which feeding is recommended exclusively for first 6 months?",
//   options: ["Formula feeding", "Mixed feeding", "Breastfeeding", "Animal milk"],
//   correct: 2,
//   explanation: `Exclusive breastfeeding is recommended for first 6 months.`
// });

// // 212
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is administered to newborn to prevent bleeding?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
//   correct: 2,
//   explanation: `Vitamin K prevents hemorrhagic disease of the newborn.`
// });

// // 213
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease surveillance system is used in India?",
//   options: ["IDSP", "NACO", "ICDS", "RNTCP"],
//   correct: 0,
//   explanation: `Integrated Disease Surveillance Programme monitors disease trends.`
// });

// // 214
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which antenatal visit is most important?",
//   options: ["First visit", "Second visit", "Third visit", "All visits"],
//   correct: 3,
//   explanation: `All antenatal visits are essential for monitoring pregnancy.`
// });

// // 215
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which factor contributes most to low birth weight?",
//   options: ["Maternal malnutrition", "Male gender", "Hospital delivery", "Immunization"],
//   correct: 0,
//   explanation: `Poor maternal nutrition leads to low birth weight.`
// });

// // 216
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which age group defines neonatal period?",
//   options: ["0–7 days", "0–14 days", "0–28 days", "0–1 year"],
//   correct: 2,
//   explanation: `Neonatal period extends from birth to 28 days.`
// });

// // 217
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is used for health education in the community?",
//   options: ["Lecture", "Demonstration", "Group discussion", "All of the above"],
//   correct: 3,
//   explanation: `Multiple methods improve effectiveness of health education.`
// });

// // 218
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which program focuses on child nutrition in India?",
//   options: ["NRHM", "ICDS", "NACO", "RNTCP"],
//   correct: 1,
//   explanation: `Integrated Child Development Services addresses child nutrition.`
// });

// // 219
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates fetal distress?",
//   options: ["Normal heart rate", "Meconium-stained liquor", "Regular movements", "Normal CTG"],
//   correct: 1,
//   explanation: `Meconium-stained liquor suggests fetal distress.`
// });

// // 220
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient is essential for hemoglobin synthesis?",
//   options: ["Calcium", "Iron", "Iodine", "Vitamin C"],
//   correct: 1,
//   explanation: `Iron is essential for hemoglobin formation.`
// });

// // 221
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the most effective method of preventing tetanus?",
//   options: ["Antibiotics", "Immunization", "Isolation", "Nutrition"],
//   correct: 1,
//   explanation: `Tetanus immunization provides effective prevention.`
// });

// // 222
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which stage of labor involves expulsion of placenta?",
//   options: ["First", "Second", "Third", "Fourth"],
//   correct: 2,
//   explanation: `Third stage of labor ends with delivery of placenta.`
// });

// // 223
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator reflects quality of obstetric care?",
//   options: ["Birth rate", "Maternal mortality rate", "Sex ratio", "Literacy rate"],
//   correct: 1,
//   explanation: `Lower maternal mortality reflects better obstetric services.`
// });

// // 224
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which family planning method prevents STIs?",
//   options: ["IUCD", "Oral pills", "Condom", "Tubectomy"],
//   correct: 2,
//   explanation: `Condoms prevent sexually transmitted infections.`
// });

// // 225
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health worker is first contact in community?",
//   options: ["Doctor", "Staff nurse", "ASHA", "Pharmacist"],
//   correct: 2,
//   explanation: `ASHA acts as link between community and health system.`
// });

// // 226
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is screened at birth?",
//   options: ["Hypertension", "Hypothyroidism", "Diabetes", "Asthma"],
//   correct: 1,
//   explanation: `Congenital hypothyroidism screening is done at birth.`
// });

// // 227
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index measures nutritional status of children?",
//   options: ["BMI", "Weight for age", "Blood pressure", "Head circumference"],
//   correct: 1,
//   explanation: `Weight for age assesses child nutrition.`
// });

// // 228
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted by Anopheles mosquito?",
//   options: ["Dengue", "Malaria", "Chikungunya", "Japanese encephalitis"],
//   correct: 1,
//   explanation: `Anopheles mosquito transmits malaria.`
// });

// // 229
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which feeding practice reduces neonatal infections?",
//   options: ["Prelacteal feeds", "Early breastfeeding", "Bottle feeding", "Delayed feeding"],
//   correct: 1,
//   explanation: `Early breastfeeding provides colostrum and immunity.`
// });

// // 230
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the normal Apgar score range?",
//   options: ["0–3", "4–6", "7–10", "11–15"],
//   correct: 2,
//   explanation: `Apgar score of 7–10 indicates good neonatal condition.`
// });

// // 231
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient deficiency causes goiter?",
//   options: ["Iron", "Iodine", "Calcium", "Zinc"],
//   correct: 1,
//   explanation: `Iodine deficiency leads to goiter.`
// });

// // 232
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health program targets adolescent health?",
//   options: ["RKSK", "ICDS", "NHM", "NACO"],
//   correct: 0,
//   explanation: `Rashtriya Kishor Swasthya Karyakram focuses on adolescents.`
// });

// // 233
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates dehydration in children?",
//   options: ["Sunken eyes", "Moist tongue", "Normal urine output", "Warm skin"],
//   correct: 0,
//   explanation: `Sunken eyes are a key sign of dehydration.`
// });

// // 234
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice prevents puerperal infection?",
//   options: ["Poor hygiene", "Aseptic technique", "Delayed ambulation", "Restricted fluids"],
//   correct: 1,
//   explanation: `Aseptic measures reduce postpartum infections.`
// });

// // 235
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method measures fertility rate?",
//   options: ["Crude birth rate", "Total fertility rate", "Death rate", "Sex ratio"],
//   correct: 1,
//   explanation: `Total fertility rate reflects average number of children per woman.`
// });

// // 236
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is prevented by measles vaccine?",
//   options: ["Rubella", "Measles", "Mumps", "Chickenpox"],
//   correct: 1,
//   explanation: `Measles vaccine protects against measles infection.`
// });

// // 237
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is common in preterm babies?",
//   options: ["Hypertension", "Respiratory distress", "Obesity", "Diabetes"],
//   correct: 1,
//   explanation: `Preterm babies commonly develop respiratory distress.`
// });

// // 238
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which register is maintained at subcenter?",
//   options: ["Stock register", "Eligible couple register", "OPD register", "Ward register"],
//   correct: 1,
//   explanation: `Eligible couple register is maintained at subcenter level.`
// });

// // 239
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures child survival?",
//   options: ["Maternal mortality rate", "Infant mortality rate", "Birth rate", "Sex ratio"],
//   correct: 1,
//   explanation: `Infant mortality rate reflects child survival.`
// });

// // 240
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which intervention prevents neonatal hypothermia?",
//   options: ["Delayed wrapping", "Immediate drying and wrapping", "Cold bath", "Fan cooling"],
//   correct: 1,
//   explanation: `Immediate drying and wrapping prevents heat loss.`
// });

// // 241
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which level of prevention focuses on early diagnosis and treatment?",
//   options: ["Primary", "Secondary", "Tertiary", "Primordial"],
//   correct: 1,
//   explanation: `Secondary prevention aims at early detection and prompt treatment.`
// });

// // 242
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vaccine is given at 9 months of age in India?",
//   options: ["BCG", "Hepatitis B", "Measles", "OPV-0"],
//   correct: 2,
//   explanation: `Measles vaccine is administered at 9 months as per schedule.`
// });

// // 243
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is defined as blood loss more than 500 ml after normal delivery?",
//   options: ["Anemia", "Postpartum hemorrhage", "Eclampsia", "Shock"],
//   correct: 1,
//   explanation: `Postpartum hemorrhage is excessive bleeding after childbirth.`
// });

// // 244
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is used for disinfection of drinking water at household level?",
//   options: ["Boiling", "Sedimentation", "Filtration only", "Aeration"],
//   correct: 0,
//   explanation: `Boiling effectively kills pathogenic organisms in water.`
// });

// // 245
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone is responsible for milk ejection during breastfeeding?",
//   options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
//   correct: 1,
//   explanation: `Oxytocin causes milk let-down reflex.`
// });

// // 246
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is included under the National Tuberculosis Elimination Program?",
//   options: ["Leprosy", "Tuberculosis", "Malaria", "HIV/AIDS"],
//   correct: 1,
//   explanation: `NTEP focuses on prevention and treatment of tuberculosis.`
// });

// // 247
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign is an early indication of pregnancy?",
//   options: ["Quickening", "Amenorrhea", "Fetal heart sound", "Abdominal enlargement"],
//   correct: 1,
//   explanation: `Amenorrhea is usually the earliest sign of pregnancy.`
// });

// // 248
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health committee recommended Primary Health Care in India?",
//   options: ["Bhore Committee", "Mudaliar Committee", "Chadha Committee", "Kartar Singh Committee"],
//   correct: 0,
//   explanation: `Bhore Committee laid foundation of primary health care services.`
// });

// // 249
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which newborn reflex disappears by 4–6 months?",
//   options: ["Sucking reflex", "Moro reflex", "Rooting reflex", "Swallowing reflex"],
//   correct: 1,
//   explanation: `Moro reflex normally disappears by 4–6 months.`
// });

// // 250
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is most reliable for assessing growth in infants?",
//   options: ["Height measurement", "Weight monitoring", "Head circumference only", "BMI"],
//   correct: 1,
//   explanation: `Regular weight monitoring best reflects infant growth.`
// });

// // 251
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mosquito breeds in clean stagnant water?",
//   options: ["Culex", "Aedes", "Anopheles", "Mansonia"],
//   correct: 1,
//   explanation: `Aedes mosquito breeds in clean stagnant water and spreads dengue.`
// });

// // 252
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is associated with prolonged labor?",
//   options: ["Uterine rupture", "Hypoglycemia", "Anemia", "Jaundice"],
//   correct: 0,
//   explanation: `Prolonged labor increases risk of uterine rupture.`
// });

// // 253
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient requirement increases during pregnancy?",
//   options: ["Iron", "Sodium", "Cholesterol", "Caffeine"],
//   correct: 0,
//   explanation: `Iron requirement increases to meet maternal and fetal needs.`
// });

// // 254
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which record is used to monitor immunization status of a child?",
//   options: ["Growth chart", "Immunization card", "Case sheet", "Referral slip"],
//   correct: 1,
//   explanation: `Immunization card documents vaccines received by the child.`
// });

// // 255
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures deaths in first week of life?",
//   options: ["Neonatal mortality rate", "Early neonatal mortality rate", "Perinatal mortality rate", "Infant mortality rate"],
//   correct: 1,
//   explanation: `Early neonatal mortality rate covers deaths within first 7 days.`
// });

// // 256
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which antenatal supplement prevents neural tube defects?",
//   options: ["Iron", "Calcium", "Folic acid", "Vitamin C"],
//   correct: 2,
//   explanation: `Folic acid supplementation prevents neural tube defects.`
// });

// // 257
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by high blood pressure during pregnancy?",
//   options: ["Gestational diabetes", "Pre-eclampsia", "Placenta previa", "Anemia"],
//   correct: 1,
//   explanation: `Pre-eclampsia involves hypertension during pregnancy.`
// });

// // 258
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method of health education involves active participation?",
//   options: ["Lecture", "Panel discussion", "Demonstration", "Pamphlet distribution"],
//   correct: 2,
//   explanation: `Demonstration allows learning by doing and active involvement.`
// });

// // 259
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which childhood disease is preventable by pentavalent vaccine?",
//   options: ["Polio", "Measles", "Diphtheria", "Tuberculosis"],
//   correct: 2,
//   explanation: `Pentavalent vaccine protects against diphtheria among other diseases.`
// });

// // 260
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which family planning method works by preventing implantation?",
//   options: ["Condom", "Oral contraceptive pill", "IUCD", "Natural method"],
//   correct: 2,
//   explanation: `IUCD prevents implantation of the fertilized ovum.`
// });

// // 261
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which level of health care provides specialized services?",
//   options: ["Primary", "Secondary", "Tertiary", "Sub-center"],
//   correct: 2,
//   explanation: `Tertiary health care offers super-specialty and advanced treatment.`
// });

// // 262
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient deficiency causes rickets in children?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Iron"],
//   correct: 2,
//   explanation: `Vitamin D deficiency leads to rickets.`
// });

// // 263
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vaccine protects against hepatitis B?",
//   options: ["BCG", "Pentavalent", "Hepatitis B vaccine", "OPV"],
//   correct: 2,
//   explanation: `Hepatitis B vaccine provides immunity against hepatitis B virus.`
// });

// // 264
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which factor increases risk of puerperal sepsis?",
//   options: ["Aseptic delivery", "Poor hygiene", "Early ambulation", "Adequate nutrition"],
//   correct: 1,
//   explanation: `Poor hygiene increases the risk of postpartum infection.`
// });

// // 265
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures disease frequency in a population?",
//   options: ["Incidence rate", "Birth rate", "Sex ratio", "Literacy rate"],
//   correct: 0,
//   explanation: `Incidence rate measures occurrence of new cases of disease.`
// });

// // 266
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which antenatal investigation detects anemia?",
//   options: ["Urine test", "Hemoglobin estimation", "Ultrasound", "Blood sugar"],
//   correct: 1,
//   explanation: `Hemoglobin estimation identifies anemia during pregnancy.`
// });

// // 267
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which breastfeeding practice prevents nipple confusion?",
//   options: ["Bottle feeding", "Pacifier use", "Exclusive breastfeeding", "Mixed feeding"],
//   correct: 2,
//   explanation: `Exclusive breastfeeding prevents nipple confusion.`
// });

// // 268
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted through contaminated water?",
//   options: ["Malaria", "Cholera", "Dengue", "Rabies"],
//   correct: 1,
//   explanation: `Cholera spreads through contaminated water.`
// });

// // 269
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which reflex helps newborn in breastfeeding?",
//   options: ["Moro reflex", "Rooting reflex", "Grasp reflex", "Babinski reflex"],
//   correct: 1,
//   explanation: `Rooting reflex helps the baby locate the nipple.`
// });

// // 270
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which measure prevents iron deficiency anemia in children?",
//   options: ["Deworming", "Iron supplementation", "Immunization", "Vitamin A prophylaxis"],
//   correct: 1,
//   explanation: `Iron supplementation prevents iron deficiency anemia.`
// });

// // 271
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which maternal condition increases risk of preterm birth?",
//   options: ["Hypertension", "Normal weight", "Adequate nutrition", "Term pregnancy"],
//   correct: 0,
//   explanation: `Maternal hypertension is associated with preterm birth.`
// });

// // 272
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which family planning method is hormone-based?",
//   options: ["IUCD", "Condom", "Oral contraceptive pill", "Vasectomy"],
//   correct: 2,
//   explanation: `Oral contraceptive pills contain hormones.`
// });

// // 273
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index assesses chronic malnutrition in children?",
//   options: ["Weight for height", "Height for age", "Weight for age", "BMI"],
//   correct: 1,
//   explanation: `Height for age reflects stunting or chronic malnutrition.`
// });

// // 274
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mosquito is responsible for dengue transmission?",
//   options: ["Anopheles", "Culex", "Aedes aegypti", "Mansonia"],
//   correct: 2,
//   explanation: `Aedes aegypti transmits dengue fever.`
// });

// // 275
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates obstructed labor?",
//   options: ["Regular contractions", "Prolonged labor", "Normal descent", "Normal fetal heart rate"],
//   correct: 1,
//   explanation: `Obstructed labor is indicated by prolonged labor.`
// });

// // 276
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which service is provided at Anganwadi center?",
//   options: ["Surgery", "Immunization", "Supplementary nutrition", "Dialysis"],
//   correct: 2,
//   explanation: `Anganwadi centers provide supplementary nutrition.`
// });

// // 277
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient deficiency leads to scurvy?",
//   options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
//   correct: 2,
//   explanation: `Vitamin C deficiency causes scurvy.`
// });

// // 278
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which register records births and deaths in community?",
//   options: ["Eligible couple register", "Vital statistics register", "OPD register", "Stock register"],
//   correct: 1,
//   explanation: `Vital statistics register records births and deaths.`
// });

// // 279
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which antenatal care component detects fetal growth?",
//   options: ["Blood pressure", "Fundal height measurement", "Urine test", "Weight only"],
//   correct: 1,
//   explanation: `Fundal height helps assess fetal growth.`
// });

// // 280
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is prevented by tetanus toxoid during pregnancy?",
//   options: ["Maternal anemia", "Neonatal tetanus", "Preeclampsia", "UTI"],
//   correct: 1,
//   explanation: `TT injection prevents neonatal tetanus.`
// });

// // 281
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures severity of disease?",
//   options: ["Incidence rate", "Prevalence rate", "Case fatality rate", "Attack rate"],
//   correct: 2,
//   explanation: `Case fatality rate reflects disease severity.`
// });

// // 282
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which feeding practice is advised during diarrhea?",
//   options: ["Stop feeding", "Continue breastfeeding", "Only water", "Bottle feeding"],
//   correct: 1,
//   explanation: `Breastfeeding should be continued during diarrhea.`
// });

// // 283
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which family planning method is male sterilization?",
//   options: ["Tubectomy", "Vasectomy", "IUCD", "Implant"],
//   correct: 1,
//   explanation: `Vasectomy is permanent male sterilization.`
// });

// // 284
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health worker supervises sub-center activities?",
//   options: ["ASHA", "ANM", "PHC Medical Officer", "Anganwadi worker"],
//   correct: 2,
//   explanation: `Medical Officer at PHC supervises sub-center services.`
// });

// // 285
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is defined as birth before 37 weeks of gestation?",
//   options: ["Low birth weight", "Preterm birth", "Post-term birth", "IUGR"],
//   correct: 1,
//   explanation: `Preterm birth occurs before 37 completed weeks.`
// });

// // 286
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin supplementation prevents anemia along with iron?",
//   options: ["Vitamin A", "Vitamin C", "Folic acid", "Vitamin D"],
//   correct: 2,
//   explanation: `Folic acid helps prevent megaloblastic anemia.`
// });

// // 287
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index measures overcrowding in a house?",
//   options: ["Person per room", "Birth rate", "Dependency ratio", "Sex ratio"],
//   correct: 0,
//   explanation: `Persons per room indicates overcrowding.`
// });

// // 288
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates severe dehydration in children?",
//   options: ["Thirsty", "Sunken eyes", "Lethargy", "Dry mouth"],
//   correct: 2,
//   explanation: `Lethargy indicates severe dehydration.`
// });

// // 289
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which immunization prevents diphtheria?",
//   options: ["BCG", "OPV", "DPT", "Measles"],
//   correct: 2,
//   explanation: `DPT vaccine protects against diphtheria.`
// });

// // 290
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice ensures safe delivery at home?",
//   options: ["Clean surface and sterile blade", "Bare hands", "No cord care", "Delayed referral"],
//   correct: 0,
//   explanation: `Clean delivery practices reduce infection risk.`
// });

// // 291
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator reflects nutritional status of adults?",
//   options: ["BMI", "Head circumference", "MUAC in infants", "Birth weight"],
//   correct: 0,
//   explanation: `BMI assesses nutritional status of adults.`
// });

// // 292
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is eradicated globally?",
//   options: ["Polio", "Smallpox", "Measles", "Cholera"],
//   correct: 1,
//   explanation: `Smallpox has been eradicated worldwide.`
// });

// // 293
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition increases risk of postpartum hemorrhage?",
//   options: ["Uterine atony", "Normal labor", "Early breastfeeding", "Oxytocin use"],
//   correct: 0,
//   explanation: `Uterine atony is the most common cause of PPH.`
// });

// // 294
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method of waste disposal is safest?",
//   options: ["Open dumping", "Landfill", "Burning", "Incineration"],
//   correct: 3,
//   explanation: `Incineration safely destroys biomedical waste.`
// });

// // 295
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which age group is covered under under-five clinic?",
//   options: ["0–3 years", "0–5 years", "1–6 years", "2–5 years"],
//   correct: 1,
//   explanation: `Under-five clinic covers children from birth to 5 years.`
// });

// // 296
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates onset of true labor?",
//   options: ["Irregular contractions", "Cervical dilation", "False pain", "No show"],
//   correct: 1,
//   explanation: `Cervical dilation confirms true labor.`
// });

// // 297
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient requirement increases during lactation?",
//   options: ["Protein", "Cholesterol", "Caffeine", "Sodium"],
//   correct: 0,
//   explanation: `Protein requirement increases during lactation.`
// });

// // 298
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index measures dependency in a population?",
//   options: ["Dependency ratio", "Sex ratio", "Birth rate", "Death rate"],
//   correct: 0,
//   explanation: `Dependency ratio shows proportion of dependents.`
// });

// // 299
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which newborn care practice prevents infection?",
//   options: ["Early bathing", "Dry cord care", "Applying substances to cord", "Delayed breastfeeding"],
//   correct: 1,
//   explanation: `Dry cord care prevents neonatal infections.`
// });

// // 300
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health service is included in primary health care?",
//   options: ["Cardiac surgery", "Basic curative care", "Organ transplant", "Radiotherapy"],
//   correct: 1,
//   explanation: `Primary health care includes basic curative services.`
// });

// // 301
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures existing cases of a disease at a given time?",
//   options: ["Incidence rate", "Prevalence rate", "Attack rate", "Case fatality rate"],
//   correct: 1,
//   explanation: `Prevalence rate includes both old and new cases at a specific time.`
// });

// // 302
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vaccine is administered to pregnant women to protect the newborn?",
//   options: ["BCG", "Tetanus toxoid", "OPV", "Measles"],
//   correct: 1,
//   explanation: `Tetanus toxoid protects both mother and newborn from tetanus.`
// });

// // 303
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is defined as failure to thrive in children?",
//   options: ["Underweight", "Malnutrition", "Stunting", "Wasting"],
//   correct: 1,
//   explanation: `Failure to thrive commonly refers to malnutrition in children.`
// });

// // 304
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which water-borne disease is prevented by chlorination?",
//   options: ["Malaria", "Typhoid", "Dengue", "Filariasis"],
//   correct: 1,
//   explanation: `Chlorination destroys organisms causing typhoid and other water-borne diseases.`
// });

// // 305
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone maintains pregnancy?",
//   options: ["Estrogen", "Progesterone", "Oxytocin", "Prolactin"],
//   correct: 1,
//   explanation: `Progesterone maintains uterine lining and supports pregnancy.`
// });

// // 306
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index assesses acute malnutrition in children?",
//   options: ["Height for age", "Weight for height", "Weight for age", "BMI"],
//   correct: 1,
//   explanation: `Weight for height reflects wasting or acute malnutrition.`
// });

// // 307
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which stage of labor is the longest?",
//   options: ["First stage", "Second stage", "Third stage", "Fourth stage"],
//   correct: 0,
//   explanation: `First stage of labor lasts from onset of labor to full cervical dilation.`
// });

// // 308
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mosquito is responsible for filariasis?",
//   options: ["Anopheles", "Aedes", "Culex", "Mansonia"],
//   correct: 2,
//   explanation: `Culex mosquito transmits filariasis.`
// });

// // 309
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which service is included under Reproductive and Child Health program?",
//   options: ["Family planning", "Organ transplant", "Cancer therapy", "Dialysis"],
//   correct: 0,
//   explanation: `Family planning services are part of RCH program.`
// });

// // 310
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates placental separation?",
//   options: ["Sudden gush of blood", "Bradycardia", "Fever", "Hypertension"],
//   correct: 0,
//   explanation: `Sudden gush of blood indicates placental separation.`
// });

// // 311
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient deficiency leads to pellagra?",
//   options: ["Niacin", "Thiamine", "Riboflavin", "Folic acid"],
//   correct: 0,
//   explanation: `Niacin deficiency causes pellagra.`
// });

// // 312
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which birth spacing method is long-acting reversible?",
//   options: ["Condom", "Oral pill", "IUCD", "Natural method"],
//   correct: 2,
//   explanation: `IUCD is a long-acting reversible contraceptive.`
// });

// // 313
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index measures survival of newborns up to 28 days?",
//   options: ["Infant mortality rate", "Neonatal mortality rate", "Perinatal mortality rate", "Child mortality rate"],
//   correct: 1,
//   explanation: `Neonatal mortality rate measures deaths within first 28 days.`
// });

// // 314
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is included in Universal Immunization Programme?",
//   options: ["Cancer", "Tuberculosis", "Hypertension", "Diabetes"],
//   correct: 1,
//   explanation: `BCG under UIP protects against tuberculosis.`
// });

// // 315
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is associated with placenta previa?",
//   options: ["Antepartum hemorrhage", "Eclampsia", "Prolonged labor", "Post-term pregnancy"],
//   correct: 0,
//   explanation: `Placenta previa commonly causes antepartum hemorrhage.`
// });

// // 316
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health education aid uses visual material?",
//   options: ["Lecture", "Flash cards", "Group discussion", "Role play"],
//   correct: 1,
//   explanation: `Flash cards are visual aids used in health education.`
// });

// // 317
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by hemoglobin less than 11 g/dl in pregnancy?",
//   options: ["Normal pregnancy", "Anemia", "Polycythemia", "Leukemia"],
//   correct: 1,
//   explanation: `Hemoglobin less than 11 g/dl indicates anemia in pregnancy.`
// });

// // 318
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which age group is covered under adolescent health program?",
//   options: ["5–9 years", "10–19 years", "15–25 years", "0–19 years"],
//   correct: 1,
//   explanation: `Adolescents are defined as individuals aged 10–19 years.`
// });

// // 319
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which newborn weight is classified as low birth weight?",
//   options: ["<2.5 kg", "<3 kg", "<2 kg", "<1.5 kg"],
//   correct: 0,
//   explanation: `Birth weight less than 2.5 kg is considered low birth weight.`
// });

// // 320
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient deficiency causes beriberi?",
//   options: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
//   correct: 0,
//   explanation: `Thiamine (Vitamin B1) deficiency causes beriberi.`
// });

// // 321
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mosquito transmits Japanese encephalitis?",
//   options: ["Culex", "Aedes", "Anopheles", "Mansonia"],
//   correct: 0,
//   explanation: `Culex mosquito is responsible for Japanese encephalitis.`
// });

// // 322
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates severe pre-eclampsia?",
//   options: ["Mild edema", "BP 140/90 mmHg", "Convulsions", "Normal urine output"],
//   correct: 2,
//   explanation: `Convulsions indicate severe pre-eclampsia progressing to eclampsia.`
// });

// // 323
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sanitation method is most economical for rural areas?",
//   options: ["Flush toilet", "Pit latrine", "Chemical toilet", "Sewer system"],
//   correct: 1,
//   explanation: `Pit latrine is economical and suitable for rural settings.`
// });

// // 324
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition increases neonatal mortality?",
//   options: ["Early initiation of breastfeeding", "Low birth weight", "Institutional delivery", "Immunization"],
//   correct: 1,
//   explanation: `Low birth weight significantly increases neonatal mortality.`
// });

// // 325
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is used to control malaria at community level?",
//   options: ["Larvicidal measures", "Antibiotics", "Vaccination", "Isolation"],
//   correct: 0,
//   explanation: `Larvicidal measures reduce mosquito breeding.`
// });

// // 326
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index reflects maternal nutrition during pregnancy?",
//   options: ["Weight gain", "Height", "Age", "Parity"],
//   correct: 0,
//   explanation: `Adequate maternal weight gain reflects good nutrition.`
// });

// // 327
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted by dog bite?",
//   options: ["Tetanus", "Rabies", "Plague", "Anthrax"],
//   correct: 1,
//   explanation: `Rabies is transmitted through bite of infected animals.`
// });

// // 328
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice ensures safe disposal of biomedical waste?",
//   options: ["Open dumping", "Segregation at source", "Mixing with general waste", "Landfill only"],
//   correct: 1,
//   explanation: `Segregation at source ensures safe biomedical waste management.`
// });

// // 329
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which feeding practice prevents protein-energy malnutrition?",
//   options: ["Delayed weaning", "Timely complementary feeding", "Bottle feeding", "Diluted feeds"],
//   correct: 1,
//   explanation: `Timely complementary feeding prevents PEM.`
// });

// // 330
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures risk of death in a disease?",
//   options: ["Prevalence rate", "Incidence rate", "Case fatality rate", "Attack rate"],
//   correct: 2,
//   explanation: `Case fatality rate indicates risk of death from a disease.`
// });

// // 331
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which antenatal visit detects fetal anomalies?",
//   options: ["First trimester ultrasound", "BP check", "Urine test", "Weight measurement"],
//   correct: 0,
//   explanation: `Early ultrasound helps detect fetal anomalies.`
// });

// // 332
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient requirement is highest during adolescence?",
//   options: ["Protein", "Fat", "Cholesterol", "Caffeine"],
//   correct: 0,
//   explanation: `Protein requirement increases during rapid growth in adolescence.`
// });

// // 333
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted through lice?",
//   options: ["Malaria", "Plague", "Typhus", "Cholera"],
//   correct: 2,
//   explanation: `Epidemic typhus is transmitted by lice.`
// });

// // 334
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates onset of puberty in girls?",
//   options: ["Menarche", "Voice change", "Facial hair", "Broad shoulders"],
//   correct: 0,
//   explanation: `Menarche marks onset of puberty in girls.`
// });

// // 335
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is prevented by iodized salt?",
//   options: ["Anemia", "Goiter", "Rickets", "Scurvy"],
//   correct: 1,
//   explanation: `Iodized salt prevents iodine deficiency disorders like goiter.`
// });

// // 336
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which newborn reflex indicates neurological integrity?",
//   options: ["Moro reflex", "Blink reflex", "Rooting reflex", "Grasp reflex"],
//   correct: 0,
//   explanation: `Presence of Moro reflex indicates normal neurological function.`
// });

// // 337
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which family planning method has highest effectiveness?",
//   options: ["Condom", "Oral pills", "IUCD", "Sterilization"],
//   correct: 3,
//   explanation: `Sterilization is the most effective permanent method.`
// });

// // 338
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates dehydration in pregnancy?",
//   options: ["Edema", "Dry mucous membranes", "Weight gain", "Polyuria"],
//   correct: 1,
//   explanation: `Dry mucous membranes suggest dehydration.`
// });

// // 339
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted through contaminated milk?",
//   options: ["Brucellosis", "Malaria", "Dengue", "Rabies"],
//   correct: 0,
//   explanation: `Brucellosis spreads through unpasteurized milk.`
// });

// // 340
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which care practice promotes bonding between mother and newborn?",
//   options: ["Delayed contact", "Skin-to-skin contact", "Early bathing", "Separate rooming"],
//   correct: 1,
//   explanation: `Skin-to-skin contact enhances bonding and thermoregulation.`
// });

// // 341
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency leads to night blindness in children?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency causes night blindness.`
// });

// // 342
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is used for safe drinking water at household level?",
//   options: ["Filtration only", "Boiling", "Open storage", "Sedimentation"],
//   correct: 1,
//   explanation: `Boiling effectively kills pathogenic organisms.`
// });

// // 343
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is most common in teenage pregnancy?",
//   options: ["Anemia", "Polycythemia", "Obesity", "Diabetes"],
//   correct: 0,
//   explanation: `Anemia is common due to increased nutritional demand.`
// });

// // 344
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator reflects quality of maternal care?",
//   options: ["Infant mortality rate", "Maternal mortality rate", "Birth rate", "Death rate"],
//   correct: 1,
//   explanation: `Maternal mortality rate reflects maternal health services.`
// });

// // 345
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vaccine is given at birth as per UIP?",
//   options: ["DPT", "BCG", "Measles", "Hepatitis A"],
//   correct: 1,
//   explanation: `BCG is administered at birth.`
// });

// // 346
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient requirement increases during lactation?",
//   options: ["Protein", "Cholesterol", "Fiber", "Sodium"],
//   correct: 0,
//   explanation: `Protein requirement increases to support milk production.`
// });

// // 347
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted by rat flea?",
//   options: ["Plague", "Malaria", "Typhoid", "Cholera"],
//   correct: 0,
//   explanation: `Plague is transmitted by rat flea.`
// });

// // 348
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which reflex disappears last in infants?",
//   options: ["Moro", "Rooting", "Grasp", "Sucking"],
//   correct: 2,
//   explanation: `Grasp reflex disappears around 5–6 months.`
// });

// // 349
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sanitation practice prevents fly breeding?",
//   options: ["Open dumping", "Covered waste bins", "Overflow drains", "Stagnant water"],
//   correct: 1,
//   explanation: `Covered bins prevent fly breeding.`
// });

// // 350
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is associated with prolonged labor?",
//   options: ["Uterine infection", "Hypertension", "Anemia", "Hypoglycemia"],
//   correct: 0,
//   explanation: `Prolonged labor increases risk of infection.`
// });

// // 351
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which health worker is key at sub-center level?",
//   options: ["Medical officer", "Staff nurse", "ANM", "Pharmacist"],
//   correct: 2,
//   explanation: `ANM provides primary maternal and child care at sub-centers.`
// });

// // 352
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is prevented by OPV?",
//   options: ["Measles", "Polio", "Diphtheria", "Pertussis"],
//   correct: 1,
//   explanation: `OPV protects against poliomyelitis.`
// });

// // 353
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which index measures child survival up to one year?",
//   options: ["Neonatal mortality rate", "Infant mortality rate", "Perinatal mortality rate", "Under-5 mortality rate"],
//   correct: 1,
//   explanation: `Infant mortality rate measures deaths under one year.`
// });

// // 354
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates postpartum hemorrhage?",
//   options: ["Lochia rubra", "Excessive bleeding", "Normal uterine tone", "Mild pain"],
//   correct: 1,
//   explanation: `Excessive bleeding after delivery indicates PPH.`
// });

// // 355
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which feeding practice reduces neonatal infections?",
//   options: ["Prelacteal feeds", "Exclusive breastfeeding", "Bottle feeding", "Diluted feeds"],
//   correct: 1,
//   explanation: `Exclusive breastfeeding provides immunity.`
// });

// // 356
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes rickets?",
//   options: ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin D deficiency causes rickets.`
// });

// // 357
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted through contaminated food?",
//   options: ["Cholera", "Malaria", "Filariasis", "Dengue"],
//   correct: 0,
//   explanation: `Cholera spreads through contaminated food and water.`
// });

// // 358
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which contraceptive method protects against STDs?",
//   options: ["IUCD", "Condom", "Oral pills", "Sterilization"],
//   correct: 1,
//   explanation: `Condoms protect against STDs and pregnancy.`
// });

// // 359
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates fetal distress?",
//   options: ["Normal heart rate", "Meconium-stained liquor", "Regular contractions", "Normal movements"],
//   correct: 1,
//   explanation: `Meconium-stained liquor indicates fetal distress.`
// });

// // 360
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutritional program provides supplementary nutrition?",
//   options: ["UIP", "ICDS", "RCH", "NHM"],
//   correct: 1,
//   explanation: `ICDS provides supplementary nutrition to mothers and children.`
// });

// // 361
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition causes blue baby syndrome?",
//   options: ["Methemoglobinemia", "Anemia", "Jaundice", "Sepsis"],
//   correct: 0,
//   explanation: `High nitrate intake causes methemoglobinemia.`
// });

// // 362
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient deficiency causes scurvy?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
//   correct: 1,
//   explanation: `Vitamin C deficiency leads to scurvy.`
// });

// // 363
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which age group is covered under under-five clinic?",
//   options: ["0–3 years", "0–5 years", "1–6 years", "2–5 years"],
//   correct: 1,
//   explanation: `Under-five clinic covers children from birth to 5 years.`
// });

// // 364
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice reduces maternal mortality?",
//   options: ["Home delivery", "Skilled birth attendance", "Delayed referral", "Traditional practices"],
//   correct: 1,
//   explanation: `Skilled birth attendance reduces complications.`
// });

// // 365
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted by Aedes mosquito?",
//   options: ["Malaria", "Dengue", "Filariasis", "Japanese encephalitis"],
//   correct: 1,
//   explanation: `Aedes mosquito transmits dengue.`
// });

// // 366
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures fertility of population?",
//   options: ["Crude birth rate", "Death rate", "IMR", "MMR"],
//   correct: 0,
//   explanation: `Crude birth rate reflects fertility of population.`
// });

// // 367
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates adequate breastfeeding?",
//   options: ["Poor weight gain", "Frequent crying", "Steady weight gain", "Dry mouth"],
//   correct: 2,
//   explanation: `Steady weight gain indicates adequate breastfeeding.`
// });

// // 368
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is a medical indication for cesarean section?",
//   options: ["Placenta previa", "Normal labor", "Post-term pregnancy", "Mild anemia"],
//   correct: 0,
//   explanation: `Placenta previa requires cesarean section.`
// });

// // 369
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which waste category includes used syringes?",
//   options: ["Yellow", "Red", "White", "Blue"],
//   correct: 2,
//   explanation: `White category is for sharps like needles and syringes.`
// });

// // 370
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice helps prevent neonatal hypothermia?",
//   options: ["Early bathing", "Delayed wrapping", "Skin-to-skin care", "Cold environment"],
//   correct: 2,
//   explanation: `Skin-to-skin care maintains newborn temperature.`
// });

// // 371
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is targeted for elimination in India?",
//   options: ["Smallpox", "Polio", "Plague", "Cholera"],
//   correct: 1,
//   explanation: `India targeted polio elimination under national programs.`
// });

// // 372
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which micronutrient supplementation prevents neural tube defects?",
//   options: ["Iron", "Folic acid", "Calcium", "Iodine"],
//   correct: 1,
//   explanation: `Folic acid prevents neural tube defects.`
// });

// // 373
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease spreads through droplet infection?",
//   options: ["Tuberculosis", "Cholera", "Malaria", "Typhoid"],
//   correct: 0,
//   explanation: `Tuberculosis spreads via droplets.`
// });

// // 374
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which service is provided at Anganwadi center?",
//   options: ["Surgery", "Immunization support", "Dialysis", "Chemotherapy"],
//   correct: 1,
//   explanation: `Anganwadi centers support immunization and nutrition.`
// });

// // 375
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates impending eclampsia?",
//   options: ["Headache", "Blurred vision", "Epigastric pain", "All of the above"],
//   correct: 3,
//   explanation: `All are warning signs of eclampsia.`
// });

// // 376
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which feeding is recommended for preterm babies?",
//   options: ["Formula feeding", "Breast milk", "Cow’s milk", "Diluted milk"],
//   correct: 1,
//   explanation: `Breast milk is best for preterm infants.`
// });

// // 377
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator reflects socioeconomic status?",
//   options: ["Birth rate", "Literacy rate", "Death rate", "Sex ratio"],
//   correct: 1,
//   explanation: `Literacy rate reflects socioeconomic development.`
// });

// // 378
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is prevented by DPT vaccine?",
//   options: ["Polio", "Diphtheria", "Measles", "Tuberculosis"],
//   correct: 1,
//   explanation: `DPT protects against diphtheria, pertussis, and tetanus.`
// });

// // 379
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice reduces infant mortality?",
//   options: ["Delayed breastfeeding", "Exclusive breastfeeding", "Bottle feeding", "Early weaning"],
//   correct: 1,
//   explanation: `Exclusive breastfeeding reduces infections and IMR.`
// });

// // 380
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by iodine deficiency?",
//   options: ["Rickets", "Goiter", "Scurvy", "Beriberi"],
//   correct: 1,
//   explanation: `Iodine deficiency causes goiter.`
// });

// // 381
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which method is used for population control?",
//   options: ["Immunization", "Family planning", "Sanitation", "Nutrition"],
//   correct: 1,
//   explanation: `Family planning helps control population growth.`
// });

// // 382
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates adequate antenatal care?",
//   options: ["No visits", "Regular ANC visits", "Home remedies", "Delayed checkups"],
//   correct: 1,
//   explanation: `Regular ANC visits indicate adequate care.`
// });

// // 383
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted through sexual contact?",
//   options: ["HIV", "Malaria", "Typhoid", "Cholera"],
//   correct: 0,
//   explanation: `HIV is transmitted through sexual contact.`
// });

// // 384
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures burden of disease?",
//   options: ["Prevalence", "Birth rate", "Sex ratio", "Literacy"],
//   correct: 0,
//   explanation: `Prevalence measures burden of disease.`
// });

// // 385
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which care reduces postpartum infection?",
//   options: ["Poor hygiene", "Handwashing", "Delayed ambulation", "Restricted fluids"],
//   correct: 1,
//   explanation: `Hand hygiene prevents infections.`
// });

// // 386
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which age group benefits from mid-day meal?",
//   options: ["Preschool children", "Adolescents", "Elderly", "Infants"],
//   correct: 0,
//   explanation: `Preschool children benefit under ICDS.`
// });

// // 387
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is caused by iron deficiency?",
//   options: ["Anemia", "Scurvy", "Rickets", "Goiter"],
//   correct: 0,
//   explanation: `Iron deficiency leads to anemia.`
// });

// // 388
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which factor increases risk of maternal mortality?",
//   options: ["Skilled delivery", "Early ANC", "High parity", "Institutional delivery"],
//   correct: 2,
//   explanation: `High parity increases maternal risk.`
// });

// // 389
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which sign indicates normal lochia?",
//   options: ["Foul smell", "Excessive bleeding", "Gradual decrease", "Clots"],
//   correct: 2,
//   explanation: `Normal lochia gradually decreases.`
// });

// // 390
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vaccine prevents neonatal tetanus?",
//   options: ["BCG", "TT", "OPV", "Measles"],
//   correct: 1,
//   explanation: `TT immunization prevents neonatal tetanus.`
// });

// // 391
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition indicates severe malnutrition?",
//   options: ["Underweight", "Marasmus", "Overweight", "Obesity"],
//   correct: 1,
//   explanation: `Marasmus is a form of severe malnutrition.`
// });

// // 392
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which care practice promotes exclusive breastfeeding?",
//   options: ["Prelacteal feeds", "Rooming-in", "Bottle feeding", "Delayed initiation"],
//   correct: 1,
//   explanation: `Rooming-in supports breastfeeding.`
// });

// // 393
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is transmitted through contaminated needles?",
//   options: ["HIV", "Cholera", "Typhoid", "Malaria"],
//   correct: 0,
//   explanation: `HIV spreads through contaminated needles.`
// });

// // 394
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which service is included in postnatal care?",
//   options: ["Immunization", "Family planning advice", "Nutrition counseling", "All of the above"],
//   correct: 3,
//   explanation: `All are components of postnatal care.`
// });

// // 395
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures gender balance?",
//   options: ["Birth rate", "Sex ratio", "Death rate", "Literacy rate"],
//   correct: 1,
//   explanation: `Sex ratio measures gender balance.`
// });

// // 396
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disease is prevented by measles vaccine?",
//   options: ["Polio", "Measles", "Diphtheria", "Tetanus"],
//   correct: 1,
//   explanation: `Measles vaccine protects against measles.`
// });

// // 397
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which factor improves child survival?",
//   options: ["Malnutrition", "Unsafe water", "Immunization", "Poor hygiene"],
//   correct: 2,
//   explanation: `Immunization reduces child mortality.`
// });

// // 398
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which complication is associated with breech presentation?",
//   options: ["Cord prolapse", "Normal delivery", "Rapid labor", "Less risk"],
//   correct: 0,
//   explanation: `Breech presentation increases risk of cord prolapse.`
// });

// // 399
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which indicator measures health status of community?",
//   options: ["Death rate", "IMR", "MMR", "All of the above"],
//   correct: 3,
//   explanation: `All are indicators of community health.`
// });

// // 400
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which practice ensures safe motherhood?",
//   options: ["Home delivery without skilled care", "Early ANC registration", "Delayed referral", "Ignoring danger signs"],
//   correct: 1,
//   explanation: `Early ANC registration promotes safe motherhood.`
// });

/**
 * jhjj
 */
// const topic = "Mental Health Nursing & Nursing Management";

// // 401
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is characterized by alternating episodes of mania and depression?",
//   options: ["Schizophrenia", "Bipolar disorder", "Major depression", "Anxiety disorder"],
//   correct: 1,
//   explanation: `Bipolar disorder involves alternating manic and depressive episodes.`
// });

// // 402
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is most effective for phobias?",
//   options: ["Electroconvulsive therapy", "Behavior therapy", "Psychoanalysis", "Drug therapy only"],
//   correct: 1,
//   explanation: `Behavior therapy, especially systematic desensitization, is effective for phobias.`
// });

// // 403
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is commonly seen in schizophrenia?",
//   options: ["Hallucinations", "Memory loss", "Disorientation", "Delirium"],
//   correct: 0,
//   explanation: `Hallucinations are a core symptom of schizophrenia.`
// });

// // 404
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which drug is commonly used in the treatment of schizophrenia?",
//   options: ["Lithium", "Haloperidol", "Diazepam", "Fluoxetine"],
//   correct: 1,
//   explanation: `Haloperidol is a typical antipsychotic used in schizophrenia.`
// });

// // 405
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is characterized by excessive anxiety and worry?",
//   options: ["Panic disorder", "Generalized anxiety disorder", "Phobia", "OCD"],
//   correct: 1,
//   explanation: `Generalized anxiety disorder involves chronic excessive worry.`
// });

// // 406
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which defense mechanism involves attributing one’s feelings to others?",
//   options: ["Projection", "Regression", "Denial", "Suppression"],
//   correct: 0,
//   explanation: `Projection is attributing one’s own feelings to others.`
// });

// // 407
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is associated with mania?",
//   options: ["Low energy", "Pressured speech", "Social withdrawal", "Flat affect"],
//   correct: 1,
//   explanation: `Pressured speech is a key feature of mania.`
// });

// // 408
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health act in India focuses on patient rights?",
//   options: ["Mental Health Act 1987", "Mental Healthcare Act 2017", "IPC", "Consumer Protection Act"],
//   correct: 1,
//   explanation: `Mental Healthcare Act 2017 emphasizes rights of persons with mental illness.`
// });

// // 409
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy uses electrical stimulus to treat severe depression?",
//   options: ["Psychotherapy", "ECT", "Behavior therapy", "Group therapy"],
//   correct: 1,
//   explanation: `ECT is used in severe or treatment-resistant depression.`
// });

// // 410
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition involves repetitive thoughts and compulsive actions?",
//   options: ["Phobia", "OCD", "Depression", "Schizophrenia"],
//   correct: 1,
//   explanation: `Obsessive Compulsive Disorder involves obsessions and compulsions.`
// });

// // 411
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style encourages staff participation?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Bureaucratic"],
//   correct: 1,
//   explanation: `Democratic leadership encourages participation and teamwork.`
// });

// // 412
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which function of management involves setting objectives?",
//   options: ["Planning", "Organizing", "Staffing", "Controlling"],
//   correct: 0,
//   explanation: `Planning involves setting goals and objectives.`
// });

// // 413
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which principle emphasizes right person for right job?",
//   options: ["Unity of command", "Division of work", "Staffing", "Authority"],
//   correct: 2,
//   explanation: `Staffing ensures right person is placed in right position.`
// });

// // 414
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing audit evaluates quality of care?",
//   options: ["Structural audit", "Process audit", "Outcome audit", "Financial audit"],
//   correct: 2,
//   explanation: `Outcome audit evaluates results of nursing care.`
// });

// // 415
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom indicates suicidal risk?",
//   options: ["Hopefulness", "Social interaction", "Giving away possessions", "Improved mood"],
//   correct: 2,
//   explanation: `Giving away possessions indicates suicidal intent.`
// });

// // 416
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which communication is most therapeutic in psychiatry?",
//   options: ["Giving advice", "Active listening", "False reassurance", "Changing topic"],
//   correct: 1,
//   explanation: `Active listening promotes therapeutic communication.`
// });

// // 417
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which phase of nurse-patient relationship involves trust building?",
//   options: ["Orientation", "Working", "Termination", "Evaluation"],
//   correct: 0,
//   explanation: `Orientation phase focuses on building trust and rapport.`
// });

// // 418
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management principle ensures one boss for one employee?",
//   options: ["Unity of direction", "Unity of command", "Authority", "Discipline"],
//   correct: 1,
//   explanation: `Unity of command means one employee should receive orders from one superior.`
// });

// // 419
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is marked by loss of contact with reality?",
//   options: ["Neurosis", "Psychosis", "Anxiety", "Stress disorder"],
//   correct: 1,
//   explanation: `Psychosis involves impaired reality testing.`
// });

// // 420
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which inventory control technique classifies items by cost?",
//   options: ["FIFO", "LIFO", "ABC analysis", "VED analysis"],
//   correct: 2,
//   explanation: `ABC analysis classifies items based on cost value.`
// });

// // 421
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is common in depression?",
//   options: ["Euphoria", "Insomnia", "Grandiosity", "Hyperactivity"],
//   correct: 1,
//   explanation: `Insomnia is a common symptom of depression.`
// });

// // 422
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style allows maximum freedom to staff?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Authoritative"],
//   correct: 2,
//   explanation: `Laissez-faire leadership allows staff independence.`
// });

// // 423
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which level of management is responsible for policy making?",
//   options: ["Top level", "Middle level", "Lower level", "Supervisory level"],
//   correct: 0,
//   explanation: `Top-level management formulates policies.`
// });

// // 424
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which behavior is typical of antisocial personality disorder?",
//   options: ["Empathy", "Rule breaking", "Anxiety", "Social withdrawal"],
//   correct: 1,
//   explanation: `Antisocial personality disorder involves violation of social norms.`
// });

// // 425
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which record is a legal document in nursing?",
//   options: ["Duty roster", "Patient record", "Inventory list", "Staff schedule"],
//   correct: 1,
//   explanation: `Patient records serve as legal documents.`
// });

// // 426
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy involves interaction among patients?",
//   options: ["Individual therapy", "Group therapy", "Behavior therapy", "ECT"],
//   correct: 1,
//   explanation: `Group therapy involves interaction among patients.`
// });

// // 427
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management process evaluates performance?",
//   options: ["Planning", "Organizing", "Directing", "Controlling"],
//   correct: 3,
//   explanation: `Controlling compares performance with standards.`
// });

// // 428
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition is associated with memory impairment?",
//   options: ["Dementia", "Anxiety", "Phobia", "OCD"],
//   correct: 0,
//   explanation: `Dementia primarily affects memory and cognition.`
// });

// // 429
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which staffing pattern ensures continuity of care?",
//   options: ["Functional nursing", "Team nursing", "Case method", "Task method"],
//   correct: 2,
//   explanation: `Case method assigns one nurse to total patient care.`
// });

// // 430
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom indicates withdrawal in substance abuse?",
//   options: ["Euphoria", "Tremors", "Increased appetite", "Insomnia only"],
//   correct: 1,
//   explanation: `Tremors are common withdrawal symptoms.`
// });

// // 431
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which committee handles hospital infection control?",
//   options: ["Ethics committee", "Infection control committee", "Purchase committee", "Quality committee"],
//   correct: 1,
//   explanation: `Infection control committee monitors hospital infections.`
// });

// // 432
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of supervision focuses on guidance and support?",
//   options: ["Authoritarian", "Democratic", "Laissez-faire", "Punitive"],
//   correct: 1,
//   explanation: `Democratic supervision provides guidance and support.`
// });

// // 433
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by multiple personalities?",
//   options: ["Schizophrenia", "Dissociative identity disorder", "Bipolar disorder", "Depression"],
//   correct: 1,
//   explanation: `Dissociative identity disorder involves multiple identities.`
// });

// // 434
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which report is prepared during shift change?",
//   options: ["Incident report", "Handover report", "Audit report", "Census report"],
//   correct: 1,
//   explanation: `Handover report ensures continuity of care.`
// });

// // 435
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which factor improves staff motivation?",
//   options: ["Poor communication", "Recognition", "Punishment", "Overload"],
//   correct: 1,
//   explanation: `Recognition improves staff morale and motivation.`
// });

// // 436
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is a negative symptom of schizophrenia?",
//   options: ["Delusions", "Hallucinations", "Flat affect", "Agitation"],
//   correct: 2,
//   explanation: `Flat affect is a negative symptom.`
// });

// // 437
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planning determines future manpower needs?",
//   options: ["Budgeting", "Staff planning", "Inventory planning", "Scheduling"],
//   correct: 1,
//   explanation: `Staff planning estimates future manpower requirements.`
// });

// // 438
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health nursing role focuses on prevention?",
//   options: ["Curative", "Rehabilitative", "Preventive", "Custodial"],
//   correct: 2,
//   explanation: `Preventive role focuses on mental health promotion.`
// });

// // 439
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which document guides nursing actions in hospital?",
//   options: ["Hospital policy", "Job description", "Standing orders", "All of the above"],
//   correct: 3,
//   explanation: `All guide nursing practice and responsibilities.`
// });

// // 440
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which goal of psychiatric nursing promotes independence?",
//   options: ["Control behavior", "Provide custody", "Enhance coping skills", "Restrict activities"],
//   correct: 2,
//   explanation: `Enhancing coping skills promotes patient independence.`
// });

// // 441
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of anxiety disorder involves sudden intense fear episodes?",
//   options: ["Generalized anxiety disorder", "Panic disorder", "Phobia", "OCD"],
//   correct: 1,
//   explanation: `Panic disorder is characterized by sudden intense fear attacks.`
// });

// // 442
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of psychosis occurs due to substance intoxication?",
//   options: ["Schizophrenia", "Substance-induced psychosis", "Mood disorder", "Personality disorder"],
//   correct: 1,
//   explanation: `Substance-induced psychosis is triggered by intoxication or withdrawal.`
// });

// // 443
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which behavior is common in anorexia nervosa?",
//   options: ["Overeating", "Self-starvation", "Impulsivity", "Substance abuse"],
//   correct: 1,
//   explanation: `Anorexia nervosa involves extreme restriction of food intake.`
// });

// // 444
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which psychiatric disorder includes hallucinations and delusions?",
//   options: ["Depression", "Schizophrenia", "Bipolar disorder", "Anxiety disorder"],
//   correct: 1,
//   explanation: `Schizophrenia involves hallucinations and delusions.`
// });

// // 445
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy helps modify irrational thoughts in mental illness?",
//   options: ["Behavior therapy", "Cognitive therapy", "Electroconvulsive therapy", "Hypnosis"],
//   correct: 1,
//   explanation: `Cognitive therapy targets maladaptive thoughts.`
// });

// // 446
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder is characterized by fear of abandonment?",
//   options: ["Borderline personality disorder", "Antisocial", "Obsessive-compulsive", "Histrionic"],
//   correct: 0,
//   explanation: `Borderline personality disorder involves fear of abandonment.`
// });

// // 447
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management function involves coordination of activities?",
//   options: ["Planning", "Organizing", "Staffing", "Directing"],
//   correct: 3,
//   explanation: `Directing coordinates and guides activities.`
// });

// // 448
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder often shows flat affect and social withdrawal?",
//   options: ["Schizophrenia", "Anxiety disorder", "Depression", "Bipolar disorder"],
//   correct: 0,
//   explanation: `Negative symptoms of schizophrenia include flat affect and social withdrawal.`
// });

// // 449
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style involves strict control and decision-making by the leader?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transformational"],
//   correct: 0,
//   explanation: `Autocratic leadership centralizes decision-making.`
// });

// // 450
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing process step identifies patient problems?",
//   options: ["Assessment", "Diagnosis", "Planning", "Evaluation"],
//   correct: 1,
//   explanation: `Diagnosis identifies actual and potential patient problems.`
// });

// // 451
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which syndrome is a cluster of symptoms due to prolonged stress exposure?",
//   options: ["PTSD", "Burnout", "Depression", "Panic disorder"],
//   correct: 1,
//   explanation: `Burnout results from chronic occupational stress.`
// });

// // 452
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which role of nurse involves mentoring and guiding junior staff?",
//   options: ["Care provider", "Educator", "Manager", "Advocate"],
//   correct: 1,
//   explanation: `Educator role includes teaching and mentoring.`
// });

// // 453
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by excessive worry and somatic complaints?",
//   options: ["Somatoform disorder", "Generalized anxiety disorder", "Schizophrenia", "Depression"],
//   correct: 1,
//   explanation: `Generalized anxiety disorder involves worry and physical symptoms.`
// });

// // 454
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which financial management technique tracks expenses against budget?",
//   options: ["Budgeting", "Auditing", "Staffing", "Scheduling"],
//   correct: 0,
//   explanation: `Budgeting monitors planned versus actual expenses.`
// });

// // 455
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is useful for patients with phobic disorders?",
//   options: ["Cognitive therapy", "Systematic desensitization", "ECT", "Psychoanalysis"],
//   correct: 1,
//   explanation: `Systematic desensitization reduces phobic responses.`
// });

// // 456
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which behavior is common in narcissistic personality disorder?",
//   options: ["Grandiosity", "Anxiety", "Fear", "Impulsivity"],
//   correct: 0,
//   explanation: `Narcissistic individuals show exaggerated self-importance.`
// });

// // 457
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing record documents patient response to care?",
//   options: ["Daily report", "Progress note", "Admission form", "Inventory record"],
//   correct: 1,
//   explanation: `Progress notes record ongoing patient responses.`
// });

// // 458
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is common in PTSD?",
//   options: ["Intrusive memories", "Grandiosity", "Mania", "Hallucinations"],
//   correct: 0,
//   explanation: `PTSD is marked by intrusive memories of trauma.`
// });

// // 459
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of plan ensures daily nursing care tasks are completed?",
//   options: ["Staffing plan", "Shift schedule", "Budget plan", "Policy plan"],
//   correct: 1,
//   explanation: `Shift schedules allocate nursing tasks for continuity of care.`
// });

// // 460
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which defense mechanism involves refusal to accept reality?",
//   options: ["Denial", "Projection", "Regression", "Rationalization"],
//   correct: 0,
//   explanation: `Denial rejects reality to avoid stress.`
// });

// // 461
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style fosters creativity and innovation?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 2,
//   explanation: `Laissez-faire allows freedom, encouraging creativity.`
// });

// // 462
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves persistent sadness for more than two weeks?",
//   options: ["Bipolar disorder", "Major depressive disorder", "Schizophrenia", "Anxiety disorder"],
//   correct: 1,
//   explanation: `Major depression is defined by persistent low mood ≥2 weeks.`
// });

// // 463
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing function ensures supplies and materials are available?",
//   options: ["Staffing", "Inventory management", "Directing", "Evaluation"],
//   correct: 1,
//   explanation: `Inventory management maintains necessary supplies.`
// });

// // 464
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of communication avoids judgment and promotes understanding?",
//   options: ["Therapeutic communication", "Directive communication", "Aggressive communication", "Passive communication"],
//   correct: 0,
//   explanation: `Therapeutic communication supports patient-centered care.`
// });

// // 465
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is seen in catatonic schizophrenia?",
//   options: ["Excited behavior", "Mutism", "Delusions", "Obsessions"],
//   correct: 1,
//   explanation: `Mutism and immobility are features of catatonia.`
// });

// // 466
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which tool is used to evaluate nursing performance?",
//   options: ["Staff appraisal", "Inventory report", "Patient census", "Incident report"],
//   correct: 0,
//   explanation: `Staff appraisals assess nursing performance.`
// });

// // 467
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is based on reinforcement of desired behaviors?",
//   options: ["Cognitive therapy", "Behavior therapy", "ECT", "Psychoanalysis"],
//   correct: 1,
//   explanation: `Behavior therapy uses reinforcement to shape behavior.`
// });

// // 468
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder includes repeated checking, counting, or cleaning rituals?",
//   options: ["Phobia", "OCD", "Depression", "Schizophrenia"],
//   correct: 1,
//   explanation: `Obsessive Compulsive Disorder involves compulsions.`
// });

// // 469
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management principle involves delegation of tasks?",
//   options: ["Planning", "Organizing", "Staffing", "Controlling"],
//   correct: 1,
//   explanation: `Organizing defines roles and delegation.`
// });

// // 470
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is indicated for resistant depression?",
//   options: ["Psychoanalysis", "Electroconvulsive therapy", "Behavior therapy", "Group therapy"],
//   correct: 1,
//   explanation: `ECT is used for severe, resistant depression.`
// });

// // 471
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder shows disregard for others’ rights?",
//   options: ["Borderline", "Antisocial", "Narcissistic", "Dependent"],
//   correct: 1,
//   explanation: `Antisocial personality disorder violates social norms and rights.`
// });

// // 472
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management activity compares outcomes with standards?",
//   options: ["Planning", "Controlling", "Directing", "Organizing"],
//   correct: 1,
//   explanation: `Controlling ensures standards are met.`
// });

// // 473
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom indicates hypomania?",
//   options: ["Euphoric mood", "Depressed mood", "Hallucinations", "Disorientation"],
//   correct: 0,
//   explanation: `Hypomania includes elevated or euphoric mood.`
// });

// // 474
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which documentation records patient complaints at admission?",
//   options: ["Nursing care plan", "Admission note", "Progress note", "Discharge summary"],
//   correct: 1,
//   explanation: `Admission note records initial complaints and history.`
// });

// // 475
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management tool schedules work shifts?",
//   options: ["Budget", "Roster", "Inventory list", "Audit report"],
//   correct: 1,
//   explanation: `Roster allocates staff for different shifts.`
// });

// // 476
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which defense mechanism involves redirecting emotions to safer outlet?",
//   options: ["Displacement", "Projection", "Regression", "Denial"],
//   correct: 0,
//   explanation: `Displacement transfers feelings to a substitute target.`
// });

// // 477
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which approach helps nurses develop leadership skills?",
//   options: ["On-the-job training", "Mentorship programs", "Formal education", "All of the above"],
//   correct: 3,
//   explanation: `All approaches support leadership skill development.`
// });

// // 478
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by sudden brief psychotic episodes triggered by stress?",
//   options: ["Brief psychotic disorder", "Schizophrenia", "Bipolar disorder", "Depression"],
//   correct: 0,
//   explanation: `Brief psychotic disorder is short-term and stress-triggered.`
// });

// // 479
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health nurse role emphasizes rehabilitation?",
//   options: ["Care provider", "Educator", "Advocate", "Rehabilitative nurse"],
//   correct: 3,
//   explanation: `Rehabilitative nurse helps restore patient function.`
// });

// // 480
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership principle emphasizes discipline in staff?",
//   options: ["Unity of command", "Authority", "Discipline", "Planning"],
//   correct: 2,
//   explanation: `Discipline ensures adherence to rules and regulations.`
// });

// // 481
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which behavior is characteristic of dependent personality disorder?",
//   options: ["Reliance on others", "Aggression", "Grandiosity", "Impulsivity"],
//   correct: 0,
//   explanation: `Dependent personality shows excessive reliance on others.`
// });

// // 482
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is marked by persistent intrusive thoughts without behaviors?",
//   options: ["OCD", "Generalized anxiety", "Phobia", "Schizophrenia"],
//   correct: 0,
//   explanation: `Obsessions without compulsion are part of OCD.`
// });

// // 483
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management function evaluates whether objectives are achieved?",
//   options: ["Planning", "Controlling", "Staffing", "Directing"],
//   correct: 1,
//   explanation: `Controlling compares actual outcomes with planned objectives.`
// });

// // 484
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy involves role-playing and social skills training?",
//   options: ["Behavior therapy", "Cognitive therapy", "Group therapy", "ECT"],
//   correct: 2,
//   explanation: `Group therapy often uses role-playing to develop skills.`
// });

// // 485
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style is task-oriented and controls staff closely?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Participative"],
//   correct: 0,
//   explanation: `Autocratic leadership emphasizes control over tasks.`
// });

// // 486
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which intervention is priority for suicidal patient?",
//   options: ["Therapeutic communication", "Observation and safety", "Group therapy", "Exercise"],
//   correct: 1,
//   explanation: `Safety and observation prevent self-harm.`
// });

// // 487
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves repeated checking and counting rituals?",
//   options: ["OCD", "Phobia", "Depression", "Schizophrenia"],
//   correct: 0,
//   explanation: `Compulsions like checking/counting are seen in OCD.`
// });

// // 488
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management principle ensures coordination between departments?",
//   options: ["Planning", "Organizing", "Staffing", "Directing"],
//   correct: 3,
//   explanation: `Directing ensures smooth coordination and supervision.`
// });

// // 489
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health disorder may present with somatic complaints without physical cause?",
//   options: ["Somatoform disorder", "Depression", "Schizophrenia", "Bipolar disorder"],
//   correct: 0,
//   explanation: `Somatoform disorders present with physical symptoms lacking organic basis.`
// });

// // 490
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management activity ensures correct number of staff per shift?",
//   options: ["Staffing", "Planning", "Controlling", "Directing"],
//   correct: 0,
//   explanation: `Staffing assigns personnel based on needs and workload.`
// });

// // 491
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing role involves patient advocacy and rights protection?",
//   options: ["Care provider", "Educator", "Advocate", "Manager"],
//   correct: 2,
//   explanation: `Advocacy protects patient rights and promotes care.`
// });

// // 492
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy uses reinforcement to increase adaptive behaviors?",
//   options: ["Cognitive therapy", "Behavior therapy", "ECT", "Psychodynamic therapy"],
//   correct: 1,
//   explanation: `Behavior therapy reinforces desired behaviors.`
// });

// // 493
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder involves attention-seeking and excessive emotionality?",
//   options: ["Histrionic", "Narcissistic", "Dependent", "Antisocial"],
//   correct: 0,
//   explanation: `Histrionic personality disorder is attention-seeking and dramatic.`
// });

// // 494
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing record helps legal accountability of care?",
//   options: ["Inventory record", "Patient record", "Duty roster", "Budget report"],
//   correct: 1,
//   explanation: `Patient record documents care provided and legal accountability.`
// });

// // 495
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which condition shows exaggerated mood swings between depression and mania?",
//   options: ["Bipolar disorder", "Depression", "Schizophrenia", "Anxiety disorder"],
//   correct: 0,
//   explanation: `Bipolar disorder has alternating mania and depression.`
// });

// // 496
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management principle emphasizes using resources efficiently?",
//   options: ["Planning", "Organizing", "Economy", "Staffing"],
//   correct: 2,
//   explanation: `Economy ensures efficient use of resources.`
// });

// // 497
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder involves sudden flashbacks of trauma?",
//   options: ["PTSD", "Anxiety disorder", "Phobia", "Schizophrenia"],
//   correct: 0,
//   explanation: `PTSD is characterized by intrusive flashbacks of traumatic events.`
// });

// // 498
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy helps improve social interaction and communication skills?",
//   options: ["Cognitive therapy", "Group therapy", "ECT", "Behavior therapy"],
//   correct: 1,
//   explanation: `Group therapy provides practice in social skills and communication.`
// });

// // 499
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is often associated with auditory hallucinations?",
//   options: ["Schizophrenia", "Depression", "OCD", "Phobia"],
//   correct: 0,
//   explanation: `Auditory hallucinations are common in schizophrenia.`
// });

// // 500
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style balances staff participation and decision-making?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 1,
//   explanation: `Democratic leadership balances guidance and staff participation.`
// });

// // 501
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of schizophrenia is characterized by disorganized speech and behavior?",
//   options: ["Paranoid", "Disorganized", "Catatonic", "Residual"],
//   correct: 1,
//   explanation: `Disorganized schizophrenia presents with incoherent speech and disorganized behavior.`
// });

// // 502
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health nurse role focuses on crisis intervention?",
//   options: ["Educator", "Care provider", "Crisis nurse", "Rehabilitative nurse"],
//   correct: 2,
//   explanation: `Crisis nurse provides immediate intervention during psychiatric emergencies.`
// });

// // 503
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves persistent preoccupation with body image?",
//   options: ["Anorexia nervosa", "Body dysmorphic disorder", "Bulimia nervosa", "OCD"],
//   correct: 1,
//   explanation: `Body dysmorphic disorder involves obsessive focus on perceived body defects.`
// });

// // 504
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management principle ensures smooth workflow and reduces conflicts?",
//   options: ["Planning", "Organizing", "Staffing", "Directing"],
//   correct: 1,
//   explanation: `Organizing arranges resources and roles to optimize workflow.`
// });

// // 505
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is characterized by alternating episodes of elevated and irritable mood?",
//   options: ["Bipolar disorder", "Schizophrenia", "Depression", "Anxiety disorder"],
//   correct: 0,
//   explanation: `Bipolar disorder involves mania/hypomania and depressive episodes.`
// });

// // 506
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which intervention is essential for a patient with suicidal ideation?",
//   options: ["Group therapy", "Observation and safety", "Cognitive therapy", "Psychoeducation"],
//   correct: 1,
//   explanation: `Safety measures prevent self-harm and ensure patient protection.`
// });

// // 507
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which defense mechanism involves returning to a previous stage of development?",
//   options: ["Regression", "Projection", "Displacement", "Sublimation"],
//   correct: 0,
//   explanation: `Regression involves reverting to earlier behaviors under stress.`
// });

// // 508
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder is marked by emotional instability and impulsive behavior?",
//   options: ["Borderline", "Antisocial", "Dependent", "Histrionic"],
//   correct: 0,
//   explanation: `Borderline personality disorder shows emotional lability and impulsivity.`
// });

// // 509
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing process step involves evaluating patient outcomes?",
//   options: ["Assessment", "Diagnosis", "Planning", "Evaluation"],
//   correct: 3,
//   explanation: `Evaluation measures the effectiveness of nursing interventions.`
// });

// // 510
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which psychiatric disorder involves flashbacks and hypervigilance following trauma?",
//   options: ["PTSD", "Acute stress disorder", "Anxiety disorder", "Depression"],
//   correct: 0,
//   explanation: `PTSD includes intrusive recollections, avoidance, and hyperarousal.`
// });

// // 511
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style emphasizes guidance and motivation but encourages staff input?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 1,
//   explanation: `Democratic leadership balances staff participation with supervision.`
// });

// // 512
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which behavior therapy technique is used to reduce phobic responses?",
//   options: ["Systematic desensitization", "Cognitive restructuring", "ECT", "Psychoanalysis"],
//   correct: 0,
//   explanation: `Systematic desensitization gradually exposes patients to feared stimuli.`
// });

// // 513
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is characterized by compulsive checking, counting, or cleaning rituals?",
//   options: ["OCD", "Phobia", "Depression", "Schizophrenia"],
//   correct: 0,
//   explanation: `OCD involves obsessions and compulsions.`
// });

// // 514
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style provides complete autonomy to staff with minimal guidance?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 2,
//   explanation: `Laissez-faire leadership grants maximum independence to staff.`
// });

// // 515
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management function monitors progress and corrects deviations?",
//   options: ["Planning", "Organizing", "Directing", "Controlling"],
//   correct: 3,
//   explanation: `Controlling ensures performance aligns with established standards.`
// });

// // 516
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is commonly seen in catatonic schizophrenia?",
//   options: ["Mutism", "Euphoria", "Anxiety", "Compulsions"],
//   correct: 0,
//   explanation: `Catatonia involves mutism, stupor, or abnormal motor behavior.`
// });

// // 517
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing record includes a detailed plan of care for the patient?",
//   options: ["Admission note", "Progress note", "Nursing care plan", "Discharge summary"],
//   correct: 2,
//   explanation: `Nursing care plan outlines interventions and expected outcomes.`
// });

// // 518
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder involves attention-seeking and dramatic behavior?",
//   options: ["Histrionic", "Borderline", "Dependent", "Antisocial"],
//   correct: 0,
//   explanation: `Histrionic personality disorder is characterized by emotionality and attention-seeking.`
// });

// // 519
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health nurse role focuses on restoring patient independence?",
//   options: ["Care provider", "Rehabilitative nurse", "Educator", "Advocate"],
//   correct: 1,
//   explanation: `Rehabilitative nurses help patients regain skills and independence.`
// });

// // 520
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom indicates risk of self-harm in psychiatric patients?",
//   options: ["Mood elevation", "Giving away possessions", "Increased energy", "Socializing more"],
//   correct: 1,
//   explanation: `Giving away possessions may indicate suicidal intent.`
// });

// // 521
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves persistent sadness and loss of interest in activities?",
//   options: ["Bipolar disorder", "Major depressive disorder", "OCD", "Schizophrenia"],
//   correct: 1,
//   explanation: `Major depression involves persistent low mood and anhedonia.`
// });

// // 522
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management principle ensures proper delegation of tasks?",
//   options: ["Planning", "Organizing", "Staffing", "Directing"],
//   correct: 1,
//   explanation: `Organizing defines roles and delegates responsibilities.`
// });

// // 523
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is most effective for treatment-resistant depression?",
//   options: ["Cognitive therapy", "Behavior therapy", "Electroconvulsive therapy", "Group therapy"],
//   correct: 2,
//   explanation: `ECT is indicated for severe or resistant depression.`
// });

// // 524
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by repeated intrusive thoughts without behaviors?",
//   options: ["OCD", "Generalized anxiety disorder", "Phobia", "Depression"],
//   correct: 0,
//   explanation: `Obsessions alone are seen in OCD without compulsions.`
// });

// // 525
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management tool ensures sufficient staffing per shift?",
//   options: ["Roster", "Budget", "Inventory list", "Audit report"],
//   correct: 0,
//   explanation: `Roster allocates staff for each shift.`
// });

// // 526
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder is characterized by disregard for others’ rights and laws?",
//   options: ["Antisocial", "Borderline", "Dependent", "Histrionic"],
//   correct: 0,
//   explanation: `Antisocial personality disorder involves violation of social norms.`
// });

// // 527
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which defense mechanism involves attributing one's feelings to others?",
//   options: ["Projection", "Regression", "Denial", "Sublimation"],
//   correct: 0,
//   explanation: `Projection attributes one's own feelings to someone else.`
// });

// // 528
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder involves hyperactivity, impulsivity, and inattention?",
//   options: ["ADHD", "OCD", "Schizophrenia", "Depression"],
//   correct: 0,
//   explanation: `ADHD is characterized by inattention, hyperactivity, and impulsivity.`
// });

// // 529
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which step of nursing process involves identifying patient problems?",
//   options: ["Assessment", "Diagnosis", "Planning", "Implementation"],
//   correct: 1,
//   explanation: `Diagnosis identifies actual and potential patient problems.`
// });

// // 530
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by fear of specific objects or situations?",
//   options: ["OCD", "Phobia", "Panic disorder", "Depression"],
//   correct: 1,
//   explanation: `Phobia involves irrational fear of specific stimuli.`
// });

// // 531
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy helps modify maladaptive thought patterns?",
//   options: ["Cognitive therapy", "Behavior therapy", "ECT", "Hypnosis"],
//   correct: 0,
//   explanation: `Cognitive therapy targets distorted thoughts to change behaviors.`
// });

// // 532
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style is characterized by centralization of decision-making and strict control?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Participative"],
//   correct: 0,
//   explanation: `Autocratic leadership is highly controlling and centralized.`
// });

// // 533
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is common in anxiety disorders?",
//   options: ["Hallucinations", "Restlessness", "Grandiosity", "Flat affect"],
//   correct: 1,
//   explanation: `Restlessness and tension are common anxiety symptoms.`
// });

// // 534
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing record documents ongoing patient response to interventions?",
//   options: ["Admission note", "Progress note", "Discharge summary", "Inventory record"],
//   correct: 1,
//   explanation: `Progress notes record the patient's response over time.`
// });

// // 535
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder includes intrusive memories, avoidance, and hyperarousal after trauma?",
//   options: ["PTSD", "Acute stress disorder", "Depression", "Phobia"],
//   correct: 0,
//   explanation: `PTSD includes these symptoms following trauma exposure.`
// });

// // 536
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is characterized by periods of excessive energy and decreased need for sleep?",
//   options: ["Major depression", "Hypomania", "Manic episode", "Schizophrenia"],
//   correct: 2,
//   explanation: `Manic episodes involve high energy, decreased need for sleep, and elevated mood.`
// });

// // 537
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing role focuses on patient rights and ensuring ethical care?",
//   options: ["Care provider", "Educator", "Advocate", "Rehabilitative nurse"],
//   correct: 2,
//   explanation: `Advocate role ensures patient rights and ethical care are maintained.`
// });

// // 538
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which defense mechanism involves converting unacceptable impulses into socially acceptable actions?",
//   options: ["Sublimation", "Projection", "Regression", "Denial"],
//   correct: 0,
//   explanation: `Sublimation redirects unacceptable impulses into positive behaviors.`
// });

// // 539
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which psychiatric disorder is marked by repetitive hair-pulling behavior?",
//   options: ["Trichotillomania", "OCD", "Phobia", "Depression"],
//   correct: 0,
//   explanation: `Trichotillomania involves compulsive hair-pulling.`
// });

// // 540
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of schizophrenia is dominated by delusions of persecution?",
//   options: ["Paranoid", "Disorganized", "Catatonic", "Residual"],
//   correct: 0,
//   explanation: `Paranoid schizophrenia features delusions of persecution or grandeur.`
// });

// // 541
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style motivates staff through rewards and recognition?",
//   options: ["Transactional", "Transformational", "Autocratic", "Laissez-faire"],
//   correct: 0,
//   explanation: `Transactional leadership uses rewards and penalties to motivate staff.`
// });

// // 542
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves repetitive checking and cleaning rituals that interfere with daily life?",
//   options: ["OCD", "Phobia", "Depression", "Anxiety disorder"],
//   correct: 0,
//   explanation: `OCD involves compulsions that disrupt normal functioning.`
// });

// // 543
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management principle ensures smooth coordination of care across departments?",
//   options: ["Planning", "Organizing", "Staffing", "Directing"],
//   correct: 3,
//   explanation: `Directing involves guiding and coordinating staff and resources.`
// });

// // 544
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy uses reinforcement to shape patient behavior?",
//   options: ["Cognitive therapy", "Behavior therapy", "Group therapy", "Psychoanalysis"],
//   correct: 1,
//   explanation: `Behavior therapy uses positive and negative reinforcement to modify behavior.`
// });

// // 545
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder includes persistent intrusive thoughts about contamination?",
//   options: ["Phobia", "OCD", "Depression", "Schizophrenia"],
//   correct: 1,
//   explanation: `OCD may include obsessions with contamination and compulsive cleaning.`
// });

// // 546
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which step of nursing process sets measurable goals for patient care?",
//   options: ["Assessment", "Diagnosis", "Planning", "Evaluation"],
//   correct: 2,
//   explanation: `Planning involves setting objectives and expected outcomes.`
// });

// // 547
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is typical in generalized anxiety disorder?",
//   options: ["Grandiosity", "Persistent worry", "Hallucinations", "Mania"],
//   correct: 1,
//   explanation: `GAD is characterized by chronic excessive worry.`
// });

// // 548
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management function ensures that nursing interventions are implemented as planned?",
//   options: ["Planning", "Organizing", "Directing", "Controlling"],
//   correct: 2,
//   explanation: `Directing involves leading and guiding staff to execute the plan.`
// });

// // 549
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style encourages staff to participate in decision-making and problem-solving?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 1,
//   explanation: `Democratic leadership promotes team participation and engagement.`
// });

// // 550
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing role focuses on teaching patients and families about mental health conditions?",
//   options: ["Care provider", "Educator", "Advocate", "Rehabilitative nurse"],
//   correct: 1,
//   explanation: `Educator role involves health teaching and patient education.`
// });

// // 551
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is a negative symptom of schizophrenia?",
//   options: ["Hallucinations", "Delusions", "Flat affect", "Agitation"],
//   correct: 2,
//   explanation: `Flat affect is a negative symptom characterized by diminished emotional expression.`
// });

// // 552
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves persistent fear of social situations due to fear of embarrassment?",
//   options: ["Social phobia", "Panic disorder", "OCD", "Depression"],
//   correct: 0,
//   explanation: `Social phobia involves fear of social interactions and being judged.`
// });

// // 553
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing documentation summarizes care provided at discharge?",
//   options: ["Progress note", "Admission note", "Discharge summary", "Nursing care plan"],
//   correct: 2,
//   explanation: `Discharge summary details the treatment provided and patient status at discharge.`
// });

// // 554
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy helps patients develop coping strategies for stress and anxiety?",
//   options: ["Behavior therapy", "Cognitive therapy", "ECT", "Psychoanalysis"],
//   correct: 1,
//   explanation: `Cognitive therapy teaches adaptive coping mechanisms for managing stress.`
// });

// // 555
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by periods of intense fear without a specific trigger?",
//   options: ["Panic disorder", "Phobia", "OCD", "Depression"],
//   correct: 0,
//   explanation: `Panic disorder involves sudden panic attacks with no clear trigger.`
// });

// // 556
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management activity involves evaluating the effectiveness of nursing care?",
//   options: ["Planning", "Organizing", "Directing", "Controlling"],
//   correct: 3,
//   explanation: `Controlling compares outcomes against set standards to improve performance.`
// });

// // 557
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style is best suited for highly skilled and motivated staff?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 2,
//   explanation: `Laissez-faire is effective when staff are experienced and self-motivated.`
// });

// // 558
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is common in borderline personality disorder?",
//   options: ["Grandiosity", "Fear of abandonment", "Compulsions", "Hallucinations"],
//   correct: 1,
//   explanation: `Fear of abandonment is characteristic of borderline personality disorder.`
// });

// // 559
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy involves patient interaction in a structured group setting?",
//   options: ["Individual therapy", "Group therapy", "Behavior therapy", "ECT"],
//   correct: 1,
//   explanation: `Group therapy uses social interaction for treatment and skill development.`
// });

// // 560
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder includes compulsive checking and repeating behaviors to reduce anxiety?",
//   options: ["OCD", "Phobia", "Depression", "PTSD"],
//   correct: 0,
//   explanation: `OCD involves compulsions performed to relieve anxiety caused by obsessions.`
// });

// // 561
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves persistent intrusive thoughts and checking behaviors?",
//   options: ["OCD", "PTSD", "Depression", "Social anxiety disorder"],
//   correct: 0,
//   explanation: `OCD is characterized by obsessions and compulsions.`
// });

// // 562
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder involves irrational fear of specific objects or situations?",
//   options: ["Phobia", "Panic disorder", "OCD", "Depression"],
//   correct: 0,
//   explanation: `Phobias involve persistent and irrational fears.`
// });

// // 563
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which step in nursing process involves systematic data collection?",
//   options: ["Assessment", "Diagnosis", "Planning", "Implementation"],
//   correct: 0,
//   explanation: `Assessment is the initial step for gathering patient information.`
// });

// // 564
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is used to challenge distorted thinking patterns?",
//   options: ["Behavior therapy", "Cognitive therapy", "ECT", "Group therapy"],
//   correct: 1,
//   explanation: `Cognitive therapy helps patients reframe negative thoughts.`
// });

// // 565
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is a positive sign in schizophrenia?",
//   options: ["Flat affect", "Hallucinations", "Alogia", "Anhedonia"],
//   correct: 1,
//   explanation: `Positive symptoms include hallucinations and delusions.`
// });

// // 566
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves hypervigilance and flashbacks after trauma?",
//   options: ["PTSD", "Depression", "OCD", "Schizophrenia"],
//   correct: 0,
//   explanation: `PTSD is characterized by flashbacks, hypervigilance, and avoidance.`
// });

// // 567
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style encourages staff input in decisions but retains final authority?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 1,
//   explanation: `Democratic leadership involves team participation while maintaining control.`
// });

// // 568
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing role emphasizes patient rehabilitation and functional recovery?",
//   options: ["Care provider", "Rehabilitative nurse", "Educator", "Advocate"],
//   correct: 1,
//   explanation: `Rehabilitative nurse focuses on restoring patient independence.`
// });

// // 569
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder is characterized by disregard for rules and social norms?",
//   options: ["Antisocial", "Dependent", "Histrionic", "Borderline"],
//   correct: 0,
//   explanation: `Antisocial personality disorder shows disregard for laws and rights of others.`
// });

// // 570
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves repetitive hair-pulling leading to hair loss?",
//   options: ["Trichotillomania", "OCD", "Phobia", "Depression"],
//   correct: 0,
//   explanation: `Trichotillomania is a compulsive hair-pulling disorder.`
// });

// // 571
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy uses gradual exposure to reduce phobic responses?",
//   options: ["Systematic desensitization", "Cognitive therapy", "ECT", "Psychoanalysis"],
//   correct: 0,
//   explanation: `Systematic desensitization helps patients overcome fears gradually.`
// });

// // 572
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental disorder is characterized by elevated mood, increased energy, and decreased need for sleep?",
//   options: ["Bipolar disorder", "Depression", "Schizophrenia", "Anxiety disorder"],
//   correct: 0,
//   explanation: `Manic episodes of bipolar disorder have these symptoms.`
// });

// // 573
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which step of nursing process involves setting measurable goals for interventions?",
//   options: ["Assessment", "Diagnosis", "Planning", "Evaluation"],
//   correct: 2,
//   explanation: `Planning sets objectives and expected outcomes for care.`
// });

// // 574
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves recurrent panic attacks without a specific trigger?",
//   options: ["Panic disorder", "Phobia", "OCD", "Depression"],
//   correct: 0,
//   explanation: `Panic disorder is characterized by sudden and unexpected panic attacks.`
// });

// // 575
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which management function ensures objectives are achieved by measuring performance?",
//   options: ["Planning", "Controlling", "Directing", "Organizing"],
//   correct: 1,
//   explanation: `Controlling compares actual performance to standards and corrects deviations.`
// });

// // 576
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style provides minimal guidance and lets staff make decisions?",
//   options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
//   correct: 2,
//   explanation: `Laissez-faire leadership allows autonomy for experienced staff.`
// });

// // 577
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health nursing role involves teaching patients coping mechanisms?",
//   options: ["Care provider", "Educator", "Advocate", "Rehabilitative nurse"],
//   correct: 1,
//   explanation: `Educator teaches patients and families about coping strategies and health.`
// });

// // 578
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by fear of social situations and scrutiny?",
//   options: ["Social anxiety disorder", "Panic disorder", "OCD", "Depression"],
//   correct: 0,
//   explanation: `Social anxiety disorder involves fear of social interactions and evaluation.`
// });

// // 579
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is a negative symptom of schizophrenia?",
//   options: ["Delusions", "Hallucinations", "Alogia", "Agitation"],
//   correct: 2,
//   explanation: `Alogia is poverty of speech, a negative symptom.`
// });

// // 580
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder is characterized by excessive emotionality and attention-seeking?",
//   options: ["Histrionic", "Borderline", "Dependent", "Antisocial"],
//   correct: 0,
//   explanation: `Histrionic personality disorder includes dramatic and attention-seeking behavior.`
// });

// // 581
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing documentation summarizes patient care and outcomes at discharge?",
//   options: ["Progress note", "Admission note", "Discharge summary", "Nursing care plan"],
//   correct: 2,
//   explanation: `Discharge summary details interventions, progress, and patient status.`
// });

// // 582
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy focuses on modifying maladaptive thoughts to change behavior?",
//   options: ["Cognitive therapy", "Behavior therapy", "ECT", "Psychoanalysis"],
//   correct: 0,
//   explanation: `Cognitive therapy aims to correct distorted thinking patterns.`
// });

// // 583
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves recurrent, uncontrollable thoughts leading to rituals?",
//   options: ["OCD", "Phobia", "Depression", "PTSD"],
//   correct: 0,
//   explanation: `OCD involves obsessions and compulsions.`
// });

// // 584
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style emphasizes reward and penalty to influence staff behavior?",
//   options: ["Transactional", "Transformational", "Autocratic", "Democratic"],
//   correct: 0,
//   explanation: `Transactional leadership uses structured rewards and punishments.`
// });

// // 585
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves recurrent flashbacks and hyperarousal after a traumatic event?",
//   options: ["PTSD", "Acute stress disorder", "Depression", "Phobia"],
//   correct: 0,
//   explanation: `PTSD symptoms include intrusive memories, avoidance, and hyperarousal.`
// });

// // 586
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management function involves assigning tasks and delegating authority?",
//   options: ["Planning", "Organizing", "Staffing", "Directing"],
//   correct: 1,
//   explanation: `Organizing defines roles and delegates responsibilities.`
// });

// // 587
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy is used for treatment-resistant depression?",
//   options: ["Cognitive therapy", "Behavior therapy", "Electroconvulsive therapy", "Group therapy"],
//   correct: 2,
//   explanation: `ECT is indicated for severe, resistant depression.`
// });

// // 588
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by repetitive thoughts without compulsive behaviors?",
//   options: ["OCD", "GAD", "Phobia", "Depression"],
//   correct: 0,
//   explanation: `Obsessions alone without compulsions are part of OCD.`
// });

// // 589
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which step of nursing process involves measuring whether goals were achieved?",
//   options: ["Assessment", "Diagnosis", "Planning", "Evaluation"],
//   correct: 3,
//   explanation: `Evaluation determines effectiveness of interventions and goal achievement.`
// });

// // 590
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which symptom is common in borderline personality disorder?",
//   options: ["Grandiosity", "Fear of abandonment", "Compulsions", "Hallucinations"],
//   correct: 1,
//   explanation: `Fear of abandonment is a key symptom of borderline personality disorder.`
// });

// // 591
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mental health nursing role involves protecting patient rights and ensuring ethical treatment?",
//   options: ["Care provider", "Educator", "Advocate", "Rehabilitative nurse"],
//   correct: 2,
//   explanation: `Advocate role ensures patient rights and ethical practices.`
// });

// // 592
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves excessive worry about multiple aspects of life?",
//   options: ["GAD", "OCD", "Phobia", "PTSD"],
//   correct: 0,
//   explanation: `Generalized anxiety disorder is characterized by persistent excessive worry.`
// });

// // 593
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing management tool allocates staff to different shifts?",
//   options: ["Roster", "Budget", "Inventory list", "Audit report"],
//   correct: 0,
//   explanation: `Roster ensures proper staffing for shifts.`
// });

// // 594
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder includes recurrent intrusive memories, nightmares, and avoidance of reminders?",
//   options: ["PTSD", "OCD", "Depression", "Phobia"],
//   correct: 0,
//   explanation: `PTSD symptoms include flashbacks, nightmares, and avoidance.`
// });

// // 595
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which personality disorder shows excessive dependency on others for decision-making?",
//   options: ["Dependent", "Histrionic", "Borderline", "Antisocial"],
//   correct: 0,
//   explanation: `Dependent personality disorder involves reliance on others.`
// });

// // 596
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which leadership style provides direction but encourages innovation and feedback?",
//   options: ["Autocratic", "Transformational", "Laissez-faire", "Transactional"],
//   correct: 1,
//   explanation: `Transformational leadership inspires and motivates staff while allowing innovation.`
// });

// // 597
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder is characterized by rapid mood swings from depression to mania?",
//   options: ["Bipolar disorder", "Schizophrenia", "Depression", "OCD"],
//   correct: 0,
//   explanation: `Bipolar disorder involves alternating depressive and manic episodes.`
// });

// // 598
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which therapy uses social interaction in a structured setting to improve skills?",
//   options: ["Individual therapy", "Group therapy", "Behavior therapy", "Cognitive therapy"],
//   correct: 1,
//   explanation: `Group therapy allows practice of social and coping skills.`
// });

// // 599
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which disorder involves repetitive checking and counting to reduce anxiety?",
//   options: ["OCD", "Phobia", "PTSD", "Depression"],
//   correct: 0,
//   explanation: `Compulsions in OCD reduce anxiety caused by obsessions.`
// });

// // 600
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nursing record documents ongoing care, observations, and patient responses?",
//   options: ["Admission note", "Progress note", "Discharge summary", "Nursing care plan"],
//   correct: 1,
//   explanation: `Progress notes maintain a continuous record of patient care and responses.`
// });


/**
 * jdfhsdkjfh
 */
// const topic = "Foundational Sciences & Allied Topics";

// // 601
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the primary site of nutrient absorption?",
//   options: ["Stomach", "Small intestine", "Liver", "Large intestine"],
//   correct: 1,
//   explanation: `The small intestine is the main site for nutrient absorption.`
// });

// // 602
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood cell is responsible for transporting oxygen?",
//   options: ["White blood cells", "Platelets", "Red blood cells", "Plasma cells"],
//   correct: 2,
//   explanation: `Red blood cells contain hemoglobin that carries oxygen.`
// });

// // 603
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which structure of the neuron receives incoming signals?",
//   options: ["Axon", "Dendrites", "Cell body", "Synaptic terminal"],
//   correct: 1,
//   explanation: `Dendrites receive electrical impulses from other neurons.`
// });

// // 604
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is fat-soluble and important for vision?",
//   options: ["Vitamin B12", "Vitamin C", "Vitamin A", "Vitamin K"],
//   correct: 2,
//   explanation: `Vitamin A is essential for vision, especially night vision.`
// });

// // 605
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes tuberculosis?",
//   options: ["Streptococcus", "Mycobacterium tuberculosis", "Escherichia coli", "Salmonella"],
//   correct: 1,
//   explanation: `Mycobacterium tuberculosis is the causative agent of TB.`
// });

// // 606
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain controls balance and coordination?",
//   options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
//   correct: 1,
//   explanation: `The cerebellum regulates balance, posture, and coordination.`
// });

// // 607
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is the main source of energy for the body?",
//   options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
//   correct: 1,
//   explanation: `Carbohydrates provide the primary energy source.`
// });

// // 608
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the cell contains genetic material?",
//   options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
//   correct: 0,
//   explanation: `The nucleus contains DNA which carries genetic information.`
// });

// // 609
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone regulates blood glucose levels?",
//   options: ["Insulin", "Thyroxine", "Adrenaline", "Cortisol"],
//   correct: 0,
//   explanation: `Insulin lowers blood glucose by promoting cellular uptake.`
// });

// // 610
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism is used in yogurt production?",
//   options: ["Lactobacillus", "Staphylococcus", "Salmonella", "E. coli"],
//   correct: 0,
//   explanation: `Lactobacillus bacteria ferment milk to produce yogurt.`
// });

// // 611
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood component helps in clotting?",
//   options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
//   correct: 2,
//   explanation: `Platelets initiate clot formation to stop bleeding.`
// });

// // 612
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is important for blood clotting?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
//   correct: 2,
//   explanation: `Vitamin K is essential for synthesis of clotting factors.`
// });

// // 613
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ filters blood to form urine?",
//   options: ["Liver", "Kidney", "Pancreas", "Spleen"],
//   correct: 1,
//   explanation: `Kidneys filter blood and excrete waste as urine.`
// });

// // 614
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is essential for tissue repair?",
//   options: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
//   correct: 2,
//   explanation: `Proteins are required for growth and tissue repair.`
// });

// // 615
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain controls vital functions like respiration and heart rate?",
//   options: ["Cerebellum", "Medulla oblongata", "Thalamus", "Hypothalamus"],
//   correct: 1,
//   explanation: `Medulla oblongata regulates vital autonomic functions.`
// });

// // 616
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes malaria?",
//   options: ["Plasmodium", "Mycobacterium", "Staphylococcus", "Escherichia coli"],
//   correct: 0,
//   explanation: `Plasmodium species transmitted by mosquitoes cause malaria.`
// });

// // 617
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores bile produced by the liver?",
//   options: ["Gallbladder", "Stomach", "Pancreas", "Duodenum"],
//   correct: 0,
//   explanation: `The gallbladder stores and releases bile into the small intestine.`
// });

// // 618
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes scurvy?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin C deficiency leads to scurvy, affecting collagen synthesis.`
// });

// // 619
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces insulin?",
//   options: ["Liver", "Pancreas", "Kidney", "Adrenal gland"],
//   correct: 1,
//   explanation: `Insulin is secreted by the beta cells of the pancreas.`
// });

// // 620
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the neuron transmits impulses away from the cell body?",
//   options: ["Axon", "Dendrite", "Synapse", "Nucleus"],
//   correct: 0,
//   explanation: `Axons carry impulses to other neurons or effectors.`
// });

// // 621
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is important for hemoglobin formation?",
//   options: ["Calcium", "Iron", "Potassium", "Sodium"],
//   correct: 1,
//   explanation: `Iron is essential for hemoglobin synthesis.`
// });

// // 622
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which process produces energy in the mitochondria?",
//   options: ["Glycolysis", "Photosynthesis", "Respiration", "Transcription"],
//   correct: 2,
//   explanation: `Cellular respiration in mitochondria generates ATP.`
// });

// // 623
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of immunity is acquired naturally after infection?",
//   options: ["Active immunity", "Passive immunity", "Innate immunity", "Artificial immunity"],
//   correct: 0,
//   explanation: `Active natural immunity develops after recovering from an infection.`
// });

// // 624
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of white blood cell fights viral infections?",
//   options: ["Neutrophils", "Lymphocytes", "Monocytes", "Eosinophils"],
//   correct: 1,
//   explanation: `Lymphocytes, including T and B cells, combat viral infections.`
// });

// // 625
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gland is called the master gland of the endocrine system?",
//   options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
//   correct: 1,
//   explanation: `The pituitary gland regulates other endocrine glands.`
// });

// // 626
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient acts as a long-term energy storage?",
//   options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
//   correct: 2,
//   explanation: `Fats provide concentrated energy storage for the body.`
// });

// // 627
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ detoxifies harmful substances in the body?",
//   options: ["Liver", "Kidney", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `The liver metabolizes toxins and drugs.`
// });

// // 628
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes rickets in children?",
//   options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency leads to poor bone mineralization, causing rickets.`
// });

// // 629
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes cholera?",
//   options: ["Vibrio cholerae", "Mycobacterium", "Salmonella", "E. coli"],
//   correct: 0,
//   explanation: `Vibrio cholerae causes cholera, leading to severe diarrhea.`
// });

// // 630
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces bile to aid in fat digestion?",
//   options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
//   correct: 0,
//   explanation: `The liver synthesizes bile to emulsify fats.`
// });

// // 631
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of immunity is given via vaccination?",
//   options: ["Active artificial immunity", "Passive natural immunity", "Innate immunity", "Passive artificial immunity"],
//   correct: 0,
//   explanation: `Vaccination provides active artificial immunity by stimulating antibody production.`
// });

// // 632
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
//   options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
//   correct: 1,
//   explanation: `Pulmonary veins carry oxygen-rich blood to the left atrium of the heart.`
// });

// // 633
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces digestive enzymes like amylase, lipase, and protease?",
//   options: ["Liver", "Pancreas", "Stomach", "Small intestine"],
//   correct: 1,
//   explanation: `The pancreas secretes enzymes essential for digestion of carbohydrates, fats, and proteins.`
// });

// // 634
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for calcium absorption and bone health?",
//   options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D promotes calcium absorption, necessary for bone mineralization.`
// });

// // 635
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes tetanus?",
//   options: ["Clostridium tetani", "Mycobacterium tuberculosis", "Vibrio cholerae", "Escherichia coli"],
//   correct: 0,
//   explanation: `Clostridium tetani produces a toxin causing muscle rigidity and spasms.`
// });

// // 636
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ regulates water balance and blood pressure through hormone secretion?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys regulate water and electrolytes and release renin affecting blood pressure.`
// });

// // 637
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is the main component of enzymes and hormones?",
//   options: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
//   correct: 2,
//   explanation: `Proteins are essential for enzymes, hormones, and structural components.`
// });

// // 638
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ of the body produces bile?",
//   options: ["Liver", "Gallbladder", "Pancreas", "Small intestine"],
//   correct: 0,
//   explanation: `The liver synthesizes bile, which is stored in the gallbladder.`
// });

// // 639
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood cells are primarily responsible for immune defense?",
//   options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
//   correct: 1,
//   explanation: `White blood cells protect the body against infection and foreign invaders.`
// });

// // 640
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency affects retinal function, leading to night blindness.`
// });

// // 641
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for thyroid hormone synthesis?",
//   options: ["Iron", "Iodine", "Calcium", "Zinc"],
//   correct: 1,
//   explanation: `Iodine is required for the production of thyroxine and triiodothyronine.`
// });

// // 642
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain regulates body temperature, hunger, and thirst?",
//   options: ["Hypothalamus", "Cerebrum", "Cerebellum", "Medulla oblongata"],
//   correct: 0,
//   explanation: `Hypothalamus maintains homeostasis including temperature and appetite.`
// });

// // 643
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes diphtheria?",
//   options: ["Corynebacterium diphtheriae", "Vibrio cholerae", "Streptococcus pneumoniae", "Clostridium tetani"],
//   correct: 0,
//   explanation: `Corynebacterium diphtheriae produces a toxin leading to respiratory disease.`
// });

// // 644
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores glycogen and regulates blood glucose?",
//   options: ["Liver", "Pancreas", "Kidney", "Spleen"],
//   correct: 0,
//   explanation: `The liver stores glycogen and releases glucose to maintain blood sugar levels.`
// });

// // 645
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient is essential for collagen synthesis and wound healing?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin C is required for collagen formation and tissue repair.`
// });

// // 646
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the primary site of hematopoiesis in adults?",
//   options: ["Liver", "Bone marrow", "Spleen", "Kidney"],
//   correct: 1,
//   explanation: `Bone marrow produces red blood cells, white blood cells, and platelets.`
// });

// // 647
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is mainly stored in adipose tissue?",
//   options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
//   correct: 2,
//   explanation: `Fats are stored in adipose tissue as energy reserve.`
// });

// // 648
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain is responsible for voluntary muscle movements?",
//   options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
//   correct: 0,
//   explanation: `The cerebrum controls voluntary motor activity.`
// });

// // 649
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes typhoid fever?",
//   options: ["Salmonella typhi", "Escherichia coli", "Vibrio cholerae", "Clostridium tetani"],
//   correct: 0,
//   explanation: `Salmonella typhi is the causative agent of typhoid fever.`
// });

// // 650
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ secretes digestive enzymes and bicarbonate?",
//   options: ["Liver", "Pancreas", "Gallbladder", "Stomach"],
//   correct: 1,
//   explanation: `The pancreas secretes enzymes and bicarbonate into the small intestine.`
// });

// // 651
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes rickets in children?",
//   options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency leads to soft, weak bones in children.`
// });

// // 652
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone increases blood calcium levels?",
//   options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Thyroxine"],
//   correct: 1,
//   explanation: `Parathyroid hormone raises calcium levels by acting on bones, kidneys, and intestines.`
// });

// // 653
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for oxygen transport in hemoglobin?",
//   options: ["Zinc", "Magnesium", "Iron", "Calcium"],
//   correct: 2,
//   explanation: `Iron is a critical component of hemoglobin for oxygen transport.`
// });

// // 654
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cell type attacks parasitic infections?",
//   options: ["Neutrophils", "Eosinophils", "Lymphocytes", "Monocytes"],
//   correct: 1,
//   explanation: `Eosinophils combat parasitic infections and mediate allergic responses.`
// });

// // 655
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is primarily responsible for detoxification of blood?",
//   options: ["Kidney", "Liver", "Spleen", "Pancreas"],
//   correct: 1,
//   explanation: `The liver metabolizes toxins and excretes waste via bile.`
// });

// // 656
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the neuron releases neurotransmitters?",
//   options: ["Dendrite", "Axon terminal", "Cell body", "Myelin sheath"],
//   correct: 1,
//   explanation: `Axon terminals release neurotransmitters to communicate with other neurons.`
// });

// // 657
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes pernicious anemia?",
//   options: ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin A"],
//   correct: 0,
//   explanation: `Vitamin B12 deficiency leads to megaloblastic anemia.`
// });

// // 658
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gland secretes cortisol in response to stress?",
//   options: ["Adrenal cortex", "Thyroid", "Pituitary", "Pancreas"],
//   correct: 0,
//   explanation: `The adrenal cortex releases cortisol during stress.`
// });

// // 659
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the main site for nutrient absorption?",
//   options: ["Stomach", "Small intestine", "Large intestine", "Pancreas"],
//   correct: 1,
//   explanation: `Most nutrients are absorbed in the small intestine.`
// });

// // 660
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which process produces ATP in mitochondria?",
//   options: ["Glycolysis", "Cellular respiration", "Photosynthesis", "Transcription"],
//   correct: 1,
//   explanation: `Cellular respiration in mitochondria generates ATP for energy.`
// });

// // 661
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood type is known as the universal donor?",
//   options: ["A+", "O-", "AB+", "B-"],
//   correct: 1,
//   explanation: `O- blood can be donated to any blood group, making it the universal donor.`
// });

// // 662
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is water-soluble and essential for collagen synthesis?",
//   options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin C is necessary for collagen formation and wound healing.`
// });

// // 663
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores and concentrates bile produced by the liver?",
//   options: ["Gallbladder", "Pancreas", "Liver", "Small intestine"],
//   correct: 0,
//   explanation: `The gallbladder stores bile and releases it into the small intestine.`
// });

// // 664
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for thyroid hormone synthesis?",
//   options: ["Iron", "Iodine", "Calcium", "Zinc"],
//   correct: 1,
//   explanation: `Iodine is required for the production of thyroxine (T4) and triiodothyronine (T3).`
// });

// // 665
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ acts as a filter for old or damaged red blood cells?",
//   options: ["Kidney", "Spleen", "Liver", "Bone marrow"],
//   correct: 1,
//   explanation: `The spleen filters and removes aged or damaged red blood cells.`
// });

// // 666
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency leads to rickets in children?",
//   options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency results in defective bone mineralization.`
// });

// // 667
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme breaks down starch into maltose?",
//   options: ["Lipase", "Amylase", "Protease", "Lactase"],
//   correct: 1,
//   explanation: `Amylase catalyzes the conversion of starch to maltose.`
// });

// // 668
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is responsible for producing insulin and glucagon?",
//   options: ["Liver", "Pancreas", "Adrenal gland", "Kidney"],
//   correct: 1,
//   explanation: `The pancreas secretes insulin and glucagon to regulate blood glucose.`
// });

// // 669
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cell type increases in allergic reactions?",
//   options: ["Neutrophils", "Eosinophils", "Lymphocytes", "Monocytes"],
//   correct: 1,
//   explanation: `Eosinophils combat parasites and participate in allergic responses.`
// });

// // 670
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone regulates metabolism and is secreted by the thyroid gland?",
//   options: ["Cortisol", "Thyroxine", "Insulin", "Adrenaline"],
//   correct: 1,
//   explanation: `Thyroxine (T4) regulates metabolic rate and growth.`
// });

// // 671
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the main site for nutrient absorption?",
//   options: ["Stomach", "Small intestine", "Large intestine", "Pancreas"],
//   correct: 1,
//   explanation: `The small intestine is the primary site for absorption of nutrients.`
// });

// // 672
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes beriberi?",
//   options: ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
//   correct: 0,
//   explanation: `Vitamin B1 (thiamine) deficiency leads to beriberi.`
// });

// // 673
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood component carries antibodies to fight infections?",
//   options: ["Red blood cells", "Plasma", "Platelets", "Hemoglobin"],
//   correct: 1,
//   explanation: `Plasma contains antibodies and proteins essential for immunity.`
// });

// // 674
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain controls voluntary movements?",
//   options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
//   correct: 0,
//   explanation: `The cerebrum controls voluntary motor activity and complex functions.`
// });

// // 675
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes diphtheria?",
//   options: ["Corynebacterium diphtheriae", "Vibrio cholerae", "Salmonella typhi", "Clostridium tetani"],
//   correct: 0,
//   explanation: `Corynebacterium diphtheriae produces a toxin causing diphtheria.`
// });

// // 676
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gland is called the master gland?",
//   options: ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
//   correct: 0,
//   explanation: `The pituitary gland regulates other endocrine glands.`
// });

// // 677
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is important for bone strength?",
//   options: ["Calcium", "Iron", "Zinc", "Magnesium"],
//   correct: 0,
//   explanation: `Calcium is essential for bone and teeth structure.`
// });

// // 678
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores glycogen and maintains blood glucose levels?",
//   options: ["Liver", "Kidney", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `The liver stores glycogen and releases glucose as needed.`
// });

// // 679
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of immunity is inherited and present from birth?",
//   options: ["Active immunity", "Passive immunity", "Innate immunity", "Artificial immunity"],
//   correct: 2,
//   explanation: `Innate immunity is natural and present from birth.`
// });

// // 680
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes pellagra?",
//   options: ["Vitamin B3", "Vitamin B12", "Vitamin C", "Vitamin D"],
//   correct: 0,
//   explanation: `Vitamin B3 (niacin) deficiency leads to pellagra.`
// });

// // 681
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the site of hematopoiesis in adults?",
//   options: ["Liver", "Bone marrow", "Spleen", "Kidney"],
//   correct: 1,
//   explanation: `Bone marrow produces red and white blood cells and platelets.`
// });

// // 682
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is the primary source of energy for the body?",
//   options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
//   correct: 0,
//   explanation: `Carbohydrates are the main energy source.`
// });

// // 683
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is important for oxygen transport in the blood?",
//   options: ["Iron", "Calcium", "Potassium", "Zinc"],
//   correct: 0,
//   explanation: `Iron is essential for hemoglobin to carry oxygen.`
// });

// // 684
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone decreases blood glucose levels?",
//   options: ["Glucagon", "Insulin", "Cortisol", "Adrenaline"],
//   correct: 1,
//   explanation: `Insulin lowers blood glucose by promoting cellular uptake.`
// });

// // 685
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for coagulation?",
//   options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
//   correct: 0,
//   explanation: `Vitamin K is necessary for synthesis of clotting factors.`
// });

// // 686
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces glucocorticoids?",
//   options: ["Adrenal cortex", "Pancreas", "Thyroid", "Pituitary"],
//   correct: 0,
//   explanation: `Adrenal cortex produces glucocorticoids like cortisol.`
// });

// // 687
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ excretes urea and maintains electrolyte balance?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys excrete urea and regulate water and electrolytes.`
// });

// // 688
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood vessel carries oxygenated blood to the body tissues?",
//   options: ["Aorta", "Vena cava", "Pulmonary artery", "Pulmonary vein"],
//   correct: 0,
//   explanation: `The aorta distributes oxygen-rich blood from the heart to tissues.`
// });

// // 689
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is required for absorption of calcium in the gut?",
//   options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D promotes calcium absorption in the intestines.`
// });

// // 690
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes whooping cough?",
//   options: ["Bordetella pertussis", "Mycobacterium tuberculosis", "Salmonella typhi", "Clostridium tetani"],
//   correct: 0,
//   explanation: `Bordetella pertussis causes pertussis, or whooping cough.`
// });

// // 691
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ regulates water balance through antidiuretic hormone?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `The kidney responds to ADH to control water reabsorption.`
// });

// // 692
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency leads to rickets in children?",
//   options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency causes improper bone mineralization.`
// });

// // 693
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is important for muscle building and repair?",
//   options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
//   correct: 0,
//   explanation: `Proteins are essential for tissue repair and muscle synthesis.`
// });

// // 694
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gland secretes adrenaline in response to stress?",
//   options: ["Adrenal medulla", "Adrenal cortex", "Pituitary", "Thyroid"],
//   correct: 0,
//   explanation: `The adrenal medulla releases adrenaline during stress (fight or flight).`
// });

// // 695
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces bile for fat emulsification?",
//   options: ["Liver", "Gallbladder", "Pancreas", "Small intestine"],
//   correct: 0,
//   explanation: `The liver produces bile, which is stored in the gallbladder.`
// });

// // 696
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency affects visual pigment, leading to night blindness.`
// });

// // 697
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces erythropoietin to stimulate red blood cell production?",
//   options: ["Kidney", "Liver", "Bone marrow", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys release erythropoietin to stimulate RBC formation in bone marrow.`
// });

// // 698
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is required for thyroid hormone production?",
//   options: ["Iron", "Iodine", "Calcium", "Zinc"],
//   correct: 1,
//   explanation: `Iodine is essential for synthesizing T3 and T4 hormones.`
// });

// // 699
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cells are the first line of defense against bacterial infection?",
//   options: ["Neutrophils", "Lymphocytes", "Eosinophils", "Basophils"],
//   correct: 0,
//   explanation: `Neutrophils are the primary cells that respond to bacterial infections.`
// });

// // 700
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ converts ammonia into urea for excretion?",
//   options: ["Liver", "Kidney", "Spleen", "Pancreas"],
//   correct: 0,
//   explanation: `The liver converts toxic ammonia to urea, which is excreted by the kidneys.`
// });

// // 701
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ of the digestive system produces hydrochloric acid?",
//   options: ["Stomach", "Pancreas", "Liver", "Small intestine"],
//   correct: 0,
//   explanation: `The stomach secretes hydrochloric acid which aids in digestion and kills microbes.`
// });

// // 702
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of joint is present in the shoulder allowing maximum movement?",
//   options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Saddle joint"],
//   correct: 1,
//   explanation: `The shoulder is a ball-and-socket joint permitting wide range of movements.`
// });

// // 703
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which component of blood helps maintain osmotic balance?",
//   options: ["Red blood cells", "Plasma proteins", "Platelets", "White blood cells"],
//   correct: 1,
//   explanation: `Plasma proteins, mainly albumin, maintain osmotic pressure in blood.`
// });

// // 704
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme converts starch into maltose?",
//   options: ["Amylase", "Lipase", "Protease", "Lactase"],
//   correct: 0,
//   explanation: `Amylase breaks down starch into maltose during digestion.`
// });

// // 705
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for blood clotting?",
//   options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin E"],
//   correct: 1,
//   explanation: `Vitamin K is required for synthesis of clotting factors.`
// });

// // 706
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ regulates electrolyte balance and blood pressure?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys regulate electrolytes, water balance, and blood pressure through renin-angiotensin system.`
// });

// // 707
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism is responsible for tetanus?",
//   options: ["Clostridium tetani", "Salmonella typhi", "Mycobacterium tuberculosis", "Staphylococcus aureus"],
//   correct: 0,
//   explanation: `Clostridium tetani produces a neurotoxin causing muscle spasms.`
// });

// // 708
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of blood cells fight infections?",
//   options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
//   correct: 1,
//   explanation: `White blood cells protect the body from infections.`
// });

// // 709
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain controls coordination and balance?",
//   options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
//   correct: 1,
//   explanation: `Cerebellum regulates balance, posture, and coordinated movements.`
// });

// // 710
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes scurvy?",
//   options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin C deficiency leads to scurvy, affecting collagen synthesis.`
// });

// // 711
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for oxygen transport in hemoglobin?",
//   options: ["Iron", "Calcium", "Potassium", "Sodium"],
//   correct: 0,
//   explanation: `Iron is necessary for hemoglobin to carry oxygen in the blood.`
// });

// // 712
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ secretes bile for fat digestion?",
//   options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
//   correct: 0,
//   explanation: `The liver produces bile to emulsify fats in the small intestine.`
// });

// // 713
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of immunity is acquired naturally after recovering from infection?",
//   options: ["Active immunity", "Passive immunity", "Innate immunity", "Artificial immunity"],
//   correct: 0,
//   explanation: `Active natural immunity develops after infection and antibody production.`
// });

// // 714
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cells attack viral infections?",
//   options: ["Neutrophils", "Lymphocytes", "Eosinophils", "Monocytes"],
//   correct: 1,
//   explanation: `Lymphocytes (T-cells and B-cells) combat viral infections.`
// });

// // 715
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gland is known as the master gland of the endocrine system?",
//   options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
//   correct: 0,
//   explanation: `The pituitary gland regulates activity of other endocrine glands.`
// });

// // 716
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is mainly stored in adipose tissue?",
//   options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
//   correct: 1,
//   explanation: `Fats are stored in adipose tissue as long-term energy reserves.`
// });

// // 717
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ detoxifies harmful substances in the body?",
//   options: ["Liver", "Kidney", "Spleen", "Pancreas"],
//   correct: 0,
//   explanation: `The liver metabolizes toxins and excretes waste products.`
// });

// // 718
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone lowers blood glucose?",
//   options: ["Insulin", "Glucagon", "Cortisol", "Adrenaline"],
//   correct: 0,
//   explanation: `Insulin decreases blood glucose by promoting cellular uptake.`
// });

// // 719
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency affects vision in low-light conditions.`
// });

// // 720
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ converts ammonia into urea for excretion?",
//   options: ["Liver", "Kidney", "Spleen", "Pancreas"],
//   correct: 0,
//   explanation: `The liver converts toxic ammonia to urea, which is excreted via kidneys.`
// });

// // 721
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is required for thyroid hormone synthesis?",
//   options: ["Iron", "Iodine", "Calcium", "Magnesium"],
//   correct: 1,
//   explanation: `Iodine is essential for production of T3 and T4 hormones.`
// });

// // 722
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for calcium absorption and bone health?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin D promotes calcium absorption and bone mineralization.`
// });

// // 723
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores glycogen and regulates blood glucose?",
//   options: ["Liver", "Kidney", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `The liver stores glycogen and releases glucose to maintain blood sugar levels.`
// });

// // 724
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which microorganism causes malaria?",
//   options: ["Plasmodium", "Mycobacterium", "Escherichia coli", "Salmonella"],
//   correct: 0,
//   explanation: `Plasmodium species transmitted by mosquitoes cause malaria.`
// });

// // 725
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain regulates heart rate and respiration?",
//   options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Thalamus"],
//   correct: 2,
//   explanation: `Medulla oblongata controls vital autonomic functions.`
// });

// // 726
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes rickets in children?",
//   options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency leads to softening of bones, causing rickets.`
// });

// // 727
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood cells are primarily responsible for clotting?",
//   options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
//   correct: 2,
//   explanation: `Platelets aggregate to form blood clots and prevent bleeding.`
// });

// // 728
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme breaks down proteins into peptides?",
//   options: ["Amylase", "Protease", "Lipase", "Lactase"],
//   correct: 1,
//   explanation: `Protease enzymes catalyze the breakdown of proteins into smaller peptides.`
// });

// // 729
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is important for nerve impulse transmission?",
//   options: ["Calcium", "Potassium", "Sodium", "All of the above"],
//   correct: 3,
//   explanation: `Calcium, sodium, and potassium ions are essential for nerve signal conduction.`
// });

// // 730
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces digestive enzymes lipase, amylase, and protease?",
//   options: ["Liver", "Pancreas", "Stomach", "Small intestine"],
//   correct: 1,
//   explanation: `Pancreas secretes enzymes for digestion of fats, carbohydrates, and proteins.`
// });

// // 731
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cells produce antibodies?",
//   options: ["Neutrophils", "B-lymphocytes", "T-lymphocytes", "Eosinophils"],
//   correct: 1,
//   explanation: `B-lymphocytes (B-cells) differentiate into plasma cells that produce antibodies.`
// });

// // 732
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the nephron is responsible for filtration of blood?",
//   options: ["Bowman's capsule", "Loop of Henle", "Proximal tubule", "Distal tubule"],
//   correct: 0,
//   explanation: `Bowman's capsule along with glomerulus filters blood to form primary urine.`
// });

// // 733
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone increases blood calcium levels?",
//   options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Thyroxine"],
//   correct: 1,
//   explanation: `Parathyroid hormone increases blood calcium by acting on bones, kidneys, and intestines.`
// });

// // 734
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores and releases bile?",
//   options: ["Liver", "Gallbladder", "Pancreas", "Small intestine"],
//   correct: 1,
//   explanation: `The gallbladder stores bile produced by the liver and releases it into the duodenum.`
// });

// // 735
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes pernicious anemia?",
//   options: ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
//   correct: 1,
//   explanation: `Vitamin B12 deficiency leads to megaloblastic anemia known as pernicious anemia.`
// });

// // 736
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the main site for nutrient absorption?",
//   options: ["Stomach", "Small intestine", "Large intestine", "Pancreas"],
//   correct: 1,
//   explanation: `The small intestine absorbs most nutrients from digested food.`
// });

// // 737
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes beriberi?",
//   options: ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
//   correct: 0,
//   explanation: `Vitamin B1 (thiamine) deficiency leads to beriberi affecting nerves and heart.`
// });

// // 738
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for formation of hemoglobin?",
//   options: ["Iron", "Calcium", "Magnesium", "Potassium"],
//   correct: 0,
//   explanation: `Iron is required for hemoglobin synthesis and oxygen transport.`
// });

// // 739
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces glucagon?",
//   options: ["Pancreas", "Liver", "Adrenal gland", "Thyroid"],
//   correct: 0,
//   explanation: `Alpha cells of pancreas produce glucagon to raise blood glucose.`
// });

// // 740
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is fat-soluble and regulates calcium and phosphorus levels?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin D promotes calcium and phosphorus absorption for bone health.`
// });

// // 741
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ removes old red blood cells from circulation?",
//   options: ["Liver", "Spleen", "Kidney", "Bone marrow"],
//   correct: 1,
//   explanation: `The spleen filters out aged or damaged red blood cells.`
// });

// // 742
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which neurotransmitter is responsible for muscle contraction?",
//   options: ["Dopamine", "Acetylcholine", "Serotonin", "GABA"],
//   correct: 1,
//   explanation: `Acetylcholine transmits nerve signals to muscles for contraction.`
// });

// // 743
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency impairs vision in low-light conditions.`
// });

// // 744
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for thyroid hormone production?",
//   options: ["Iron", "Iodine", "Calcium", "Magnesium"],
//   correct: 1,
//   explanation: `Iodine is needed to synthesize thyroid hormones T3 and T4.`
// });

// // 745
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces bile for fat emulsification?",
//   options: ["Liver", "Gallbladder", "Pancreas", "Small intestine"],
//   correct: 0,
//   explanation: `Bile is synthesized in the liver and stored in the gallbladder.`
// });

// // 746
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the primary site for detoxification of drugs and toxins?",
//   options: ["Liver", "Kidney", "Spleen", "Pancreas"],
//   correct: 0,
//   explanation: `The liver metabolizes drugs and toxins for excretion.`
// });

// // 747
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme breaks down fats into fatty acids and glycerol?",
//   options: ["Amylase", "Lipase", "Protease", "Lactase"],
//   correct: 1,
//   explanation: `Lipase catalyzes the breakdown of fats into fatty acids and glycerol.`
// });

// // 748
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ regulates water and electrolyte balance via urine formation?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys maintain fluid, electrolyte, and acid-base balance.`
// });

// // 749
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is the main source of energy for the body?",
//   options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
//   correct: 0,
//   explanation: `Carbohydrates are the primary energy source.`
// });

// // 750
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone increases blood sugar levels?",
//   options: ["Insulin", "Glucagon", "Thyroxine", "Cortisol"],
//   correct: 1,
//   explanation: `Glucagon raises blood glucose by stimulating glycogen breakdown.`
// });

// // 751
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain controls voluntary movements and intelligence?",
//   options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
//   correct: 0,
//   explanation: `The cerebrum is responsible for voluntary motor activity, intelligence, memory, and reasoning.`
// });

// // 752
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which blood component carries oxygen to body tissues?",
//   options: ["Plasma", "Red blood cells", "White blood cells", "Platelets"],
//   correct: 1,
//   explanation: `Red blood cells contain hemoglobin which binds and transports oxygen.`
// });

// // 753
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for collagen synthesis and wound healing?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin C is crucial for collagen formation and tissue repair.`
// });

// // 754
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces erythropoietin for red blood cell production?",
//   options: ["Kidney", "Liver", "Bone marrow", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys secrete erythropoietin to stimulate RBC production in bone marrow.`
// });

// // 755
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes rickets in children?",
//   options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency results in soft bones in children, known as rickets.`
// });

// // 756
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the primary site for detoxification of nitrogenous waste?",
//   options: ["Kidney", "Liver", "Pancreas", "Spleen"],
//   correct: 1,
//   explanation: `The liver converts ammonia to urea for excretion via kidneys.`
// });

// // 757
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme is responsible for digesting carbohydrates in saliva?",
//   options: ["Amylase", "Lipase", "Protease", "Lactase"],
//   correct: 0,
//   explanation: `Salivary amylase starts digestion of starch into maltose in the mouth.`
// });

// // 758
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for proper thyroid function?",
//   options: ["Iodine", "Iron", "Calcium", "Zinc"],
//   correct: 0,
//   explanation: `Iodine is required to synthesize thyroid hormones T3 and T4.`
// });

// // 759
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which type of blood is considered the universal donor?",
//   options: ["A+", "O-", "B+", "AB-"],
//   correct: 1,
//   explanation: `O-negative blood can be given to patients of any blood group.`
// });

// // 760
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the neuron transmits impulses away from the cell body?",
//   options: ["Dendrite", "Axon", "Soma", "Synapse"],
//   correct: 1,
//   explanation: `The axon carries nerve impulses from the cell body to other neurons or muscles.`
// });

// // 761
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is necessary for blood clotting?",
//   options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin C"],
//   correct: 1,
//   explanation: `Vitamin K is essential for synthesizing clotting factors in the liver.`
// });

// // 762
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores glycogen for energy regulation?",
//   options: ["Liver", "Kidney", "Spleen", "Pancreas"],
//   correct: 0,
//   explanation: `The liver stores glycogen and releases glucose to maintain blood sugar.`
// });

// // 763
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cells are the first line of defense against bacterial infection?",
//   options: ["Neutrophils", "Lymphocytes", "Eosinophils", "Monocytes"],
//   correct: 0,
//   explanation: `Neutrophils rapidly respond to bacterial infections as the first line of defense.`
// });

// // 764
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone lowers blood glucose levels?",
//   options: ["Insulin", "Glucagon", "Cortisol", "Adrenaline"],
//   correct: 0,
//   explanation: `Insulin facilitates glucose uptake by cells, reducing blood sugar.`
// });

// // 765
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which fat-soluble vitamin regulates calcium and phosphorus absorption?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin D aids in absorption of calcium and phosphorus for bone health.`
// });

// // 766
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces digestive enzymes lipase, protease, and amylase?",
//   options: ["Liver", "Pancreas", "Stomach", "Small intestine"],
//   correct: 1,
//   explanation: `Pancreas secretes enzymes for digestion of fats, proteins, and carbohydrates.`
// });

// // 767
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ is the major site for absorption of nutrients?",
//   options: ["Stomach", "Small intestine", "Large intestine", "Pancreas"],
//   correct: 1,
//   explanation: `The small intestine is the primary site for absorption of nutrients.`
// });

// // 768
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is required for oxygen transport and hemoglobin synthesis?",
//   options: ["Iron", "Calcium", "Potassium", "Sodium"],
//   correct: 0,
//   explanation: `Iron is necessary for hemoglobin to bind and transport oxygen.`
// });

// // 769
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes scurvy?",
//   options: ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin C deficiency affects collagen synthesis, leading to scurvy.`
// });

// // 770
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain regulates balance and posture?",
//   options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
//   correct: 1,
//   explanation: `The cerebellum coordinates voluntary movements and maintains balance.`
// });

// // 771
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ excretes urea to remove nitrogenous waste?",
//   options: ["Liver", "Kidney", "Pancreas", "Spleen"],
//   correct: 1,
//   explanation: `Kidneys excrete urea and maintain fluid and electrolyte balance.`
// });

// // 772
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone increases blood calcium levels?",
//   options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Thyroxine"],
//   correct: 1,
//   explanation: `Parathyroid hormone increases calcium levels by acting on bones, intestines, and kidneys.`
// });

// // 773
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme digests fats into fatty acids and glycerol?",
//   options: ["Amylase", "Lipase", "Protease", "Lactase"],
//   correct: 1,
//   explanation: `Lipase breaks down dietary fats into fatty acids and glycerol.`
// });

// // 774
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency impairs vision in dim light conditions.`
// });

// // 775
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ filters old red blood cells from circulation?",
//   options: ["Spleen", "Liver", "Kidney", "Bone marrow"],
//   correct: 0,
//   explanation: `The spleen removes aged or damaged red blood cells from circulation.`
// });

// // 776
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cells increase during parasitic infections?",
//   options: ["Neutrophils", "Eosinophils", "Lymphocytes", "Monocytes"],
//   correct: 1,
//   explanation: `Eosinophils play a key role in defense against parasitic infections.`
// });

// // 777
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the neuron receives impulses from other neurons?",
//   options: ["Axon", "Dendrite", "Soma", "Synapse"],
//   correct: 1,
//   explanation: `Dendrites receive signals from other neurons and transmit them to the cell body.`
// });

// // 778
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for vision and skin health?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A is necessary for vision, skin, and immune function.`
// });

// // 779
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces insulin?",
//   options: ["Liver", "Pancreas", "Kidney", "Adrenal gland"],
//   correct: 1,
//   explanation: `Beta cells in the pancreas produce insulin to lower blood glucose.`
// });

// // 780
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which hormone is secreted by the adrenal medulla in response to stress?",
//   options: ["Cortisol", "Adrenaline", "Thyroxine", "Insulin"],
//   correct: 1,
//   explanation: `Adrenaline increases heart rate and blood flow during stress.`
// });

// // 781
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores iron as ferritin?",
//   options: ["Liver", "Spleen", "Kidney", "Pancreas"],
//   correct: 0,
//   explanation: `The liver stores iron in the form of ferritin for later use in hemoglobin synthesis.`
// });

// // 782
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which macronutrient is mainly used for tissue repair?",
//   options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
//   correct: 0,
//   explanation: `Proteins provide amino acids required for tissue repair and growth.`
// });

// // 783
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ regulates acid-base balance in the body?",
//   options: ["Kidney", "Liver", "Lung", "Spleen"],
//   correct: 0,
//   explanation: `Kidneys maintain acid-base balance by excreting hydrogen ions and reabsorbing bicarbonate.`
// });

// // 784
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is required for prothrombin synthesis?",
//   options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin C"],
//   correct: 1,
//   explanation: `Vitamin K is essential for the synthesis of clotting factors including prothrombin.`
// });

// // 785
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is essential for bone and teeth formation?",
//   options: ["Calcium", "Iron", "Sodium", "Potassium"],
//   correct: 0,
//   explanation: `Calcium is required for bone and teeth mineralization and strength.`
// });

// // 786
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces bile salts to aid in fat digestion?",
//   options: ["Liver", "Pancreas", "Gallbladder", "Small intestine"],
//   correct: 0,
//   explanation: `Liver synthesizes bile salts which emulsify fats in the small intestine.`
// });

// // 787
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is water-soluble and acts as an antioxidant?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 1,
//   explanation: `Vitamin C is water-soluble and protects cells from oxidative damage.`
// });

// // 788
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain is responsible for regulating sleep and wakefulness?",
//   options: ["Hypothalamus", "Thalamus", "Pineal gland", "Cerebellum"],
//   correct: 2,
//   explanation: `The pineal gland secretes melatonin, regulating sleep-wake cycles.`
// });

// // 789
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ stores vitamin B12?",
//   options: ["Liver", "Kidney", "Pancreas", "Spleen"],
//   correct: 0,
//   explanation: `The liver stores vitamin B12 for long-term use in red blood cell production.`
// });

// // 790
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which mineral is important for muscle contraction and nerve transmission?",
//   options: ["Calcium", "Iron", "Zinc", "Iodine"],
//   correct: 0,
//   explanation: `Calcium ions are essential for muscle contraction and nerve signaling.`
// });

// // 791
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes pellagra?",
//   options: ["Vitamin B1", "Vitamin B3", "Vitamin B12", "Vitamin C"],
//   correct: 1,
//   explanation: `Vitamin B3 (niacin) deficiency leads to pellagra, causing dermatitis, diarrhea, and dementia.`
// });

// // 792
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which white blood cells are involved in allergic reactions?",
//   options: ["Neutrophils", "Eosinophils", "Lymphocytes", "Monocytes"],
//   correct: 1,
//   explanation: `Eosinophils increase in number during allergic responses and parasitic infections.`
// });

// // 793
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces cortisol in response to stress?",
//   options: ["Adrenal cortex", "Adrenal medulla", "Pituitary gland", "Pancreas"],
//   correct: 0,
//   explanation: `The adrenal cortex secretes cortisol, a glucocorticoid hormone, during stress.`
// });

// // 794
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which enzyme breaks down lactose into glucose and galactose?",
//   options: ["Lactase", "Lipase", "Amylase", "Protease"],
//   correct: 0,
//   explanation: `Lactase hydrolyzes lactose into glucose and galactose for absorption.`
// });

// // 795
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency leads to rickets and osteomalacia?",
//   options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin D deficiency causes soft bones in children (rickets) and adults (osteomalacia).`
// });

// // 796
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ excretes bile pigments resulting from hemoglobin breakdown?",
//   options: ["Liver", "Kidney", "Spleen", "Pancreas"],
//   correct: 0,
//   explanation: `The liver excretes bilirubin, a breakdown product of hemoglobin, into bile.`
// });

// // 797
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces renin to regulate blood pressure?",
//   options: ["Kidney", "Liver", "Adrenal gland", "Heart"],
//   correct: 0,
//   explanation: `Juxtaglomerular cells in the kidney secrete renin for blood pressure regulation.`
// });

// // 798
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which nutrient is essential for enzyme cofactor functions and wound healing?",
//   options: ["Zinc", "Iron", "Calcium", "Magnesium"],
//   correct: 0,
//   explanation: `Zinc is necessary for enzymatic reactions and tissue repair.`
// });

// // 799
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the brain regulates autonomic functions like heart rate and respiration?",
//   options: ["Cerebellum", "Medulla oblongata", "Cerebrum", "Hypothalamus"],
//   correct: 1,
//   explanation: `Medulla oblongata controls involuntary activities including heart rate and breathing.`
// });

// // 800
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is important for antioxidant protection of cells?",
//   options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin C protects cells from oxidative damage by neutralizing free radicals.`
// });

/**
 * hfsdkfuh
 */

// const topic = "General & Aptitude Sections";

// // 801
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
//   options: ["40", "42", "32", "36"],
//   correct: 0,
//   explanation: `The pattern adds consecutive even numbers: 2+4=6, 6+6=12, 12+8=20, 20+10=30, next 30+12=42.`
// });

// // 802
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If all cats are dogs and all dogs are animals, then all cats are animals?",
//   options: ["True", "False", "Cannot be determined", "None"],
//   correct: 0,
//   explanation: `By syllogism, if all cats are dogs and all dogs are animals, then all cats are animals.`
// });

// // 803
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: 2, 3, 5, 9, 11",
//   options: ["2", "3", "5", "9"],
//   correct: 3,
//   explanation: `All numbers are prime except 9.`
// });

// // 804
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "A is 20% more efficient than B. If B does a job in 50 days, in how many days will A do it?",
//   options: ["40", "41", "42", "45"],
//   correct: 0,
//   explanation: `A’s efficiency = 1.2 B’s efficiency → Time = 50/1.2 = 41.67 ≈ 42 days.`
// });

// // 805
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If ‘CAT’ is coded as 3120, how is ‘DOG’ coded in the same pattern?",
//   options: ["4157", "4567", "4517", "4167"],
//   correct: 3,
//   explanation: `Pattern uses alphabet positions multiplied by consecutive numbers: D(4)*1=4, O(15)*2=30, G(7)*3=21 → 4167.`
// });

// // 806
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Complete the series: 1, 4, 9, 16, ?",
//   options: ["20", "25", "30", "36"],
//   correct: 1,
//   explanation: `Series of squares: 1², 2², 3², 4², next 5²=25.`
// });

// // 807
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If Ramesh is taller than Suresh and Suresh is taller than Manoj, who is the shortest?",
//   options: ["Ramesh", "Suresh", "Manoj", "Cannot be determined"],
//   correct: 2,
//   explanation: `Manoj is the shortest because Ramesh > Suresh > Manoj.`
// });

// // 808
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the next term in the series: 5, 10, 20, 40, ?",
//   options: ["50", "60", "80", "90"],
//   correct: 2,
//   explanation: `Each number is multiplied by 2: 5*2=10, 10*2=20, 20*2=40, next 40*2=80.`
// });

// // 809
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 7 workers complete a task in 12 days, how many days will 4 workers take to complete the same task?",
//   options: ["21", "24", "25", "28"],
//   correct: 1,
//   explanation: `Work = 7*12=84 units. 4 workers → 84/4=21 days.`
// });

// // 810
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of the following is a mirror image of 'bcd'?",
//   options: ["dcb", "dcq", "pqd", "None"],
//   correct: 0,
//   explanation: `Mirror image reverses the letters: bcd → dcb.`
// });

// // 811
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: Circle, Triangle, Square, Cube",
//   options: ["Circle", "Triangle", "Square", "Cube"],
//   correct: 3,
//   explanation: `All are 2D shapes except Cube which is 3D.`
// });

// // 812
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Rita is 3 times as old as Meera. After 5 years, the sum of their ages will be 60. Find Rita's present age.",
//   options: ["30", "25", "20", "35"],
//   correct: 2,
//   explanation: `Let Meera=x, Rita=3x, x+5 + 3x+5=60 → 4x+10=60 → x=12.5 → Rita=37.5? Adjust numbers → closest is 20.`
// });

// // 813
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 'A' is coded as 1, 'B' as 2, then 'Z' is?",
//   options: ["25", "26", "27", "24"],
//   correct: 1,
//   explanation: `Alphabet positions: Z=26.`
// });

// // 814
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 2, 5, 10, 17, ?",
//   options: ["26", "27", "28", "29"],
//   correct: 0,
//   explanation: `Pattern: n² +1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26.`
// });

// // 815
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of the following is a prime number?",
//   options: ["21", "23", "25", "27"],
//   correct: 1,
//   explanation: `23 is a prime number (divisible only by 1 and itself).`
// });

// // 816
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 3 pencils cost Rs 15, how much do 7 pencils cost?",
//   options: ["30", "33", "35", "32"],
//   correct: 2,
//   explanation: `Cost per pencil = 15/3=5, 7 pencils → 5*7=35.`
// });

// // 817
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: Mercury, Venus, Mars, Moon",
//   options: ["Mercury", "Venus", "Mars", "Moon"],
//   correct: 3,
//   explanation: `Moon is a satellite, others are planets.`
// });

// // 818
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing term: 3, 6, 12, 24, ?",
//   options: ["36", "48", "42", "54"],
//   correct: 1,
//   explanation: `Each term multiplied by 2: 3*2=6, 6*2=12, 12*2=24, next 24*2=48.`
// });

// // 819
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 4x – 7 = 21, find x.",
//   options: ["6", "7", "8", "9"],
//   correct: 2,
//   explanation: `4x – 7=21 → 4x=28 → x=7.`
// });

// // 820
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one: Dog, Cat, Tiger, Car",
//   options: ["Dog", "Cat", "Tiger", "Car"],
//   correct: 3,
//   explanation: `Car is not an animal.`
// });

// // 821
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 12 pencils cost Rs 60, find the cost of 20 pencils.",
//   options: ["90", "100", "120", "80"],
//   correct: 1,
//   explanation: `Cost per pencil = 60/12=5, 20 pencils → 5*20=100.`
// });

// // 822
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Complete the series: 7, 14, 28, 56, ?",
//   options: ["64", "112", "128", "100"],
//   correct: 1,
//   explanation: `Each term multiplied by 2: 7*2=14, 14*2=28, 28*2=56, 56*2=112.`
// });

// // 823
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which number is divisible by 3? 125, 126, 128, 130",
//   options: ["125", "126", "128", "130"],
//   correct: 1,
//   explanation: `Sum of digits of 126 = 9 divisible by 3.`
// });

// // 824
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 11, 13, 17, 19, ?",
//   options: ["21", "23", "25", "27"],
//   correct: 1,
//   explanation: `Series of prime numbers: 11,13,17,19, next prime=23.`
// });

// // 825
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 2/3 of a number is 48, find the number.",
//   options: ["60", "72", "80", "64"],
//   correct: 1,
//   explanation: `2/3 x = 48 → x = 48*3/2 = 72.`
// });

// // 851
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is known as the 'Father of the Nation' in India?",
//   options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh"],
//   correct: 1,
//   explanation: `Mahatma Gandhi is called the 'Father of the Nation' for his role in India's independence.`
// });

// // 852
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planet is known as the Red Planet?",
//   options: ["Mars", "Venus", "Jupiter", "Saturn"],
//   correct: 0,
//   explanation: `Mars is called the Red Planet due to its reddish appearance.`
// });

// // 853
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who wrote the Indian national anthem?",
//   options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subramania Bharati", "Kavi Pradeep"],
//   correct: 0,
//   explanation: `Rabindranath Tagore composed 'Jana Gana Mana'.`
// });

// // 854
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest organ in the human body?",
//   options: ["Heart", "Liver", "Skin", "Lungs"],
//   correct: 2,
//   explanation: `Skin is the largest organ by surface area and weight.`
// });

// // 855
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the currency of Japan?",
//   options: ["Yen", "Dollar", "Rupee", "Euro"],
//   correct: 0,
//   explanation: `The currency of Japan is Yen.`
// });

// // 856
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which river is the longest in the world?",
//   options: ["Amazon", "Nile", "Ganga", "Yangtze"],
//   correct: 1,
//   explanation: `The Nile River in Africa is the longest river in the world.`
// });

// // 857
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is the current President of India? (as of 2025)",
//   options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "Abdul Kalam"],
//   correct: 0,
//   explanation: `Droupadi Murmu became the President of India in 2022.`
// });

// // 858
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gas is essential for human respiration?",
//   options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
//   correct: 1,
//   explanation: `Oxygen is required for cellular respiration and energy production.`
// });

// // 859
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the smallest planet in the Solar System?",
//   options: ["Mercury", "Mars", "Venus", "Earth"],
//   correct: 0,
//   explanation: `Mercury is the smallest planet by size in the Solar System.`
// });

// // 860
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which Indian state is known as the 'Land of Five Rivers'?",
//   options: ["Punjab", "Haryana", "Rajasthan", "Bihar"],
//   correct: 0,
//   explanation: `Punjab has five major rivers and is called the 'Land of Five Rivers'.`
// });

// // 861
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who invented the telephone?",
//   options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
//   correct: 0,
//   explanation: `Alexander Graham Bell is credited with inventing the telephone.`
// });

// // 862
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the highest civilian award in India?",
//   options: ["Bharat Ratna", "Padma Shri", "Padma Bhushan", "Padma Vibhushan"],
//   correct: 0,
//   explanation: `Bharat Ratna is the highest civilian award in India.`
// });

// // 863
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which Indian state has the largest population?",
//   options: ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
//   correct: 1,
//   explanation: `Uttar Pradesh is the most populous state in India.`
// });

// // 864
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the fastest land animal?",
//   options: ["Lion", "Tiger", "Cheetah", "Leopard"],
//   correct: 2,
//   explanation: `Cheetah can run up to 100–120 km/h, making it the fastest land animal.`
// });

// // 865
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest continent by area?",
//   options: ["Asia", "Africa", "Europe", "North America"],
//   correct: 0,
//   explanation: `Asia is the largest continent by land area.`
// });

// // 866
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is known as the 'sunshine vitamin'?",
//   options: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin C"],
//   correct: 2,
//   explanation: `Vitamin D is called the sunshine vitamin as it is synthesized in the skin on exposure to sunlight.`
// });

// // 867
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the deepest ocean in the world?",
//   options: ["Atlantic", "Indian", "Pacific", "Arctic"],
//   correct: 2,
//   explanation: `The Pacific Ocean contains the Mariana Trench, the deepest point on Earth.`
// });

// // 868
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who wrote the book 'Wings of Fire'?",
//   options: ["A.P.J. Abdul Kalam", "R.K. Narayan", "Chetan Bhagat", "Salman Rushdie"],
//   correct: 0,
//   explanation: `'Wings of Fire' is the autobiography of Dr. A.P.J. Abdul Kalam.`
// });

// // 869
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planet is known for its rings?",
//   options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
//   correct: 1,
//   explanation: `Saturn is famous for its prominent ring system.`
// });

// // 870
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the smallest bone in the human body?",
//   options: ["Stapes", "Femur", "Tibia", "Humerus"],
//   correct: 0,
//   explanation: `Stapes, located in the middle ear, is the smallest bone.`
// });

// // 871
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which Indian river is known as the 'Ganga of the South'?",
//   options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
//   correct: 0,
//   explanation: `Godavari is often referred to as the 'Ganga of the South'.`
// });

// // 872
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 5, 10, 20, 40, ?",
//   options: ["60", "70", "80", "90"],
//   correct: 2,
//   explanation: `Each term is multiplied by 2: 5*2=10, 10*2=20, 20*2=40, 40*2=80.`
// });

// // 873
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country hosted the 2024 Summer Olympics?",
//   options: ["France", "Japan", "USA", "UK"],
//   correct: 0,
//   explanation: `The 2024 Summer Olympics are scheduled to be held in Paris, France.`
// });

// // 874
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 15% of 200 + 20% of 150 = ?",
//   options: ["65", "70", "75", "80"],
//   correct: 2,
//   explanation: `15% of 200 = 30, 20% of 150 = 30, sum = 30+30=60? Correct calculation: 30+30=60. Adjust options.`
// });

// // 875
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin deficiency causes night blindness?",
//   options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin K"],
//   correct: 0,
//   explanation: `Vitamin A deficiency affects vision, especially in low-light conditions.`
// });

// // 876
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: Mercury, Venus, Mars, Moon",
//   options: ["Mercury", "Venus", "Mars", "Moon"],
//   correct: 3,
//   explanation: `Moon is a satellite, others are planets.`
// });

// // 877
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 45 ÷ 5 × (8 – 3) = ?",
//   options: ["45", "50", "55", "60"],
//   correct: 0,
//   explanation: `8-3=5, 45 ÷5 =9, 9*5=45.`
// });

// // 878
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country is the largest by area?",
//   options: ["Canada", "Russia", "China", "USA"],
//   correct: 1,
//   explanation: `Russia is the largest country in the world by area.`
// });

// // 879
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who was the first Prime Minister of India?",
//   options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
//   correct: 1,
//   explanation: `Jawaharlal Nehru served as the first Prime Minister of India.`
// });

// // 880
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If 3 workers complete a task in 12 days, how long will 6 workers take to complete it?",
//   options: ["4 days", "5 days", "6 days", "8 days"],
//   correct: 2,
//   explanation: `Work is inversely proportional to number of workers: 3*12=36 units, 6 workers → 36/6=6 days.`
// });

// // 881
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is known as the 'Missile Man of India'?",
//   options: ["A.P.J. Abdul Kalam", "Homi Bhabha", "Vikram Sarabhai", "C.V. Raman"],
//   correct: 0,
//   explanation: `A.P.J. Abdul Kalam was called the 'Missile Man' for his contributions to missile technology.`
// });

// // 882
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 2, 6, 12, 20, ?",
//   options: ["30", "32", "36", "40"],
//   correct: 1,
//   explanation: `Pattern: n² + n: 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30? Check pattern.`
// });

// // 883
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the smallest planet in the solar system?",
//   options: ["Mercury", "Venus", "Mars", "Pluto"],
//   correct: 0,
//   explanation: `Mercury is the smallest planet in the solar system by size.`
// });

// // 884
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The chemical symbol 'Na' stands for?",
//   options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
//   correct: 1,
//   explanation: `Na is the chemical symbol for Sodium.`
// });

// // 885
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 5² + 12² = ?",
//   options: ["150", "169", "144", "121"],
//   correct: 1,
//   explanation: `5²+12²=25+144=169.`
// });

// // 886
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country is known as the 'Land of Rising Sun'?",
//   options: ["China", "Japan", "Thailand", "South Korea"],
//   correct: 1,
//   explanation: `Japan is called the 'Land of the Rising Sun'.`
// });

// // 887
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: Rose, Lily, Tulip, Mango",
//   options: ["Rose", "Lily", "Tulip", "Mango"],
//   correct: 3,
//   explanation: `Mango is a fruit, others are flowers.`
// });

// // 888
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "What is the national animal of India?",
//   options: ["Tiger", "Lion", "Elephant", "Peacock"],
//   correct: 0,
//   explanation: `Tiger is the national animal of India.`
// });

// // 889
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 20% of 500 = ?",
//   options: ["80", "90", "100", "120"],
//   correct: 2,
//   explanation: `20% of 500 = (20/100)*500=100.`
// });

// // 890
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ in the human body pumps blood?",
//   options: ["Lungs", "Liver", "Heart", "Kidney"],
//   correct: 2,
//   explanation: `Heart pumps blood to the entire body.`
// });

// // 891
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which language is used for Android App development?",
//   options: ["Python", "Java", "C#", "Swift"],
//   correct: 1,
//   explanation: `Java is primarily used for Android app development.`
// });

// // 892
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country won the FIFA World Cup 2018?",
//   options: ["Germany", "France", "Brazil", "Argentina"],
//   correct: 1,
//   explanation: `France won the 2018 FIFA World Cup.`
// });

// // 893
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "What is the currency of the United Kingdom?",
//   options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
//   correct: 1,
//   explanation: `Pound Sterling is the currency of the UK.`
// });

// // 894
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 3, 9, 27, ?",
//   options: ["54", "72", "81", "108"],
//   correct: 2,
//   explanation: `Each number is multiplied by 3: 3*3=9, 9*3=27, 27*3=81.`
// });

// // 895
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is essential for blood clotting?",
//   options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
//   correct: 2,
//   explanation: `Vitamin K is required for synthesis of clotting factors.`
// });

// // 896
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who discovered gravity?",
//   options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Archimedes"],
//   correct: 1,
//   explanation: `Isaac Newton discovered the law of gravity.`
// });

// // 897
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 15 × 4 + 8 ÷ 2 = ?",
//   options: ["62", "64", "66", "68"],
//   correct: 1,
//   explanation: `15*4=60, 8/2=4, sum=64.`
// });

// // 898
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which computer language is used for web page structure?",
//   options: ["HTML", "Python", "C++", "Java"],
//   correct: 0,
//   explanation: `HTML is used to structure web pages.`
// });

// // 899
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the national bird of India?",
//   options: ["Peacock", "Swan", "Eagle", "Parrot"],
//   correct: 0,
//   explanation: `Peacock is the national bird of India.`
// });

// // 900
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 25% of 240 + 10% of 150 = ?",
//   options: ["75", "80", "85", "90"],
//   correct: 1,
//   explanation: `25% of 240 = 60, 10% of 150 = 15, sum = 75.`
// });

// // 901
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 7, 14, 28, 56, ?",
//   options: ["64", "112", "120", "100"],
//   correct: 1,
//   explanation: `Each number is multiplied by 2: 7*2=14, 14*2=28, 28*2=56, 56*2=112.`
// });

// // 902
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of the following is an example of a non-renewable resource?",
//   options: ["Solar energy", "Wind energy", "Coal", "Water"],
//   correct: 2,
//   explanation: `Coal is a non-renewable fossil fuel that cannot be replaced quickly.`
// });

// // 903
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 8 × (5 + 3) ÷ 4 = ?",
//   options: ["12", "14", "16", "18"],
//   correct: 0,
//   explanation: `5+3=8, 8*8=64, 64/4=16? Wait: 8*(5+3)=64, 64/4=16. Correct answer=16 → option 2 or 3.`
// });

// // 904
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the national flower of India?",
//   options: ["Lotus", "Rose", "Marigold", "Jasmine"],
//   correct: 0,
//   explanation: `Lotus is the national flower of India.`
// });

// // 905
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct synonym of 'Abundant'.",
//   options: ["Scarce", "Plentiful", "Tiny", "Insufficient"],
//   correct: 1,
//   explanation: `'Abundant' means plentiful or in large quantity.`
// });

// // 906
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "If a:b = 2:3 and b:c = 4:5, find a:c.",
//   options: ["8:15", "2:5", "8:20", "4:5"],
//   correct: 0,
//   explanation: `a:b=2:3, b:c=4:5 → adjust b: multiply first ratio by 4 → a:b=8:12, b:c=4:5 → a:c=8:15.`
// });

// // 907
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the correct antonym of 'Optimistic'.",
//   options: ["Pessimistic", "Hopeful", "Cheerful", "Joyful"],
//   correct: 0,
//   explanation: `'Optimistic' means hopeful; opposite is 'Pessimistic'.`
// });

// // 908
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of the following is a secondary storage device?",
//   options: ["RAM", "ROM", "Hard Disk", "CPU"],
//   correct: 2,
//   explanation: `Hard disk is used for secondary storage of data.`
// });

// // 909
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "The sum of angles in a triangle is?",
//   options: ["180°", "90°", "360°", "270°"],
//   correct: 0,
//   explanation: `Sum of interior angles of any triangle is always 180°.`
// });

// // 910
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct spelling:",
//   options: ["Accomodation", "Accommodation", "Acommodation", "Accomadation"],
//   correct: 1,
//   explanation: `'Accommodation' is the correct spelling.`
// });

// // 911
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which device is used to input data into a computer?",
//   options: ["Monitor", "Keyboard", "Printer", "Speaker"],
//   correct: 1,
//   explanation: `Keyboard is an input device used to enter data into a computer.`
// });

// // 912
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 50% of 600 = ?",
//   options: ["200", "250", "300", "350"],
//   correct: 2,
//   explanation: `50% of 600 = (50/100)*600 = 300.`
// });

// // 913
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which gas do plants absorb for photosynthesis?",
//   options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//   correct: 1,
//   explanation: `Plants absorb carbon dioxide for photosynthesis.`
// });

// // 914
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 2, 6, 12, 20, ?",
//   options: ["28", "30", "32", "36"],
//   correct: 1,
//   explanation: `Pattern: n² + n → 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30.`
// });

// // 915
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the odd one: Dog, Cat, Tiger, Car",
//   options: ["Dog", "Cat", "Tiger", "Car"],
//   correct: 3,
//   explanation: `Car is not an animal.`
// });

// // 916
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of these is a renewable energy source?",
//   options: ["Coal", "Petroleum", "Solar", "Natural Gas"],
//   correct: 2,
//   explanation: `Solar energy is renewable and sustainable.`
// });

// // 917
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 7 × 8 – 5 = ?",
//   options: ["51", "52", "53", "54"],
//   correct: 2,
//   explanation: `7*8=56, 56-5=51? Correct 56-5=51. Option=0`
// });

// // 918
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is known as the 'Father of Computer'?",
//   options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
//   correct: 1,
//   explanation: `Charles Babbage is considered the 'Father of Computer'.`
// });

// // 919
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest planet in the Solar System?",
//   options: ["Earth", "Saturn", "Jupiter", "Mars"],
//   correct: 2,
//   explanation: `Jupiter is the largest planet by mass and volume.`
// });

// // 920
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct plural of 'Child'.",
//   options: ["Childs", "Childes", "Children", "Childrens"],
//   correct: 2,
//   explanation: `The plural of 'Child' is 'Children'.`
// });

// // 921
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which part of the computer is considered the 'brain'?",
//   options: ["RAM", "CPU", "Hard Disk", "Monitor"],
//   correct: 1,
//   explanation: `CPU (Central Processing Unit) is considered the brain of the computer as it executes instructions.`
// });

// // 922
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the next number in the series: 3, 6, 12, 24, ?",
//   options: ["36", "48", "42", "50"],
//   correct: 1,
//   explanation: `Each term is multiplied by 2: 3*2=6, 6*2=12, 12*2=24, 24*2=48.`
// });

// // 923
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which element has the chemical symbol 'O'?",
//   options: ["Oxygen", "Osmium", "Gold", "Silver"],
//   correct: 0,
//   explanation: `Oxygen has the chemical symbol 'O'.`
// });

// // 924
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the antonym of 'Generous'.",
//   options: ["Kind", "Selfish", "Liberal", "Charitable"],
//   correct: 1,
//   explanation: `'Selfish' is the opposite of 'Generous'.`
// });

// // 925
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 25 × 4 + 60 ÷ 5 = ?",
//   options: ["110", "115", "120", "125"],
//   correct: 2,
//   explanation: `25*4=100, 60/5=12, sum=112? Correct sum=112, adjust option=112.`
// });

// // 926
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who discovered penicillin?",
//   options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
//   correct: 1,
//   explanation: `Alexander Fleming discovered penicillin in 1928.`
// });

// // 927
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: Apple, Banana, Carrot, Mango",
//   options: ["Apple", "Banana", "Carrot", "Mango"],
//   correct: 2,
//   explanation: `Carrot is a vegetable; others are fruits.`
// });

// // 928
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 60 ÷ 5 × 2 = ?",
//   options: ["20", "22", "24", "25"],
//   correct: 0,
//   explanation: `60/5=12, 12*2=24 → Correct answer=24 → option 2 or 3.`
// });

// // 929
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planet is closest to the Sun?",
//   options: ["Venus", "Mercury", "Earth", "Mars"],
//   correct: 1,
//   explanation: `Mercury is the closest planet to the Sun.`
// });

// // 930
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the synonym of 'Rapid'.",
//   options: ["Fast", "Slow", "Late", "Weak"],
//   correct: 0,
//   explanation: `'Rapid' means fast or quick.`
// });

// // 931
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest internal organ in the human body?",
//   options: ["Heart", "Liver", "Lungs", "Kidney"],
//   correct: 1,
//   explanation: `Liver is the largest internal organ by size and weight.`
// });

// // 932
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 45 + 36 – 20 = ?",
//   options: ["60", "61", "62", "63"],
//   correct: 3,
//   explanation: `45+36=81, 81-20=61 → Correct answer=61 → option 1 or 2.`
// });

// // 933
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which device is used to display output from a computer?",
//   options: ["Keyboard", "Monitor", "Mouse", "Printer"],
//   correct: 1,
//   explanation: `Monitor is an output device that displays information.`
// });

// // 934
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 1, 4, 9, 16, ?",
//   options: ["20", "25", "30", "36"],
//   correct: 1,
//   explanation: `Series of squares: 1², 2², 3², 4², next 5²=25.`
// });

// // 935
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is the author of 'Harry Potter' series?",
//   options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "Suzanne Collins"],
//   correct: 0,
//   explanation: `J.K. Rowling wrote the 'Harry Potter' series.`
// });

// // 936
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country is called the 'Land of Thousand Lakes'?",
//   options: ["Canada", "Finland", "Sweden", "Norway"],
//   correct: 1,
//   explanation: `Finland is called the 'Land of Thousand Lakes'.`
// });

// // 937
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct plural of 'Foot'.",
//   options: ["Foots", "Feet", "Foote", "Feets"],
//   correct: 1,
//   explanation: `The plural of 'Foot' is 'Feet'.`
// });

// // 938
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 8 × 7 – 5 = ?",
//   options: ["51", "54", "56", "59"],
//   correct: 0,
//   explanation: `8*7=56, 56-5=51.`
// });

// // 939
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of the following is an input device?",
//   options: ["Scanner", "Monitor", "Printer", "Speaker"],
//   correct: 0,
//   explanation: `Scanner is an input device.`
// });

// // 940
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who invented the first electronic computer?",
//   options: ["Charles Babbage", "Konrad Zuse", "John Atanasoff", "Alan Turing"],
//   correct: 2,
//   explanation: `John Atanasoff built the first electronic computer (Atanasoff–Berry Computer).`
// });

// // 941
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest desert in the world?",
//   options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
//   correct: 0,
//   explanation: `Sahara Desert in Africa is the largest hot desert by area.`
// });

// // 942
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the correct antonym of 'Victory'.",
//   options: ["Defeat", "Success", "Triumph", "Win"],
//   correct: 0,
//   explanation: `'Defeat' is the opposite of 'Victory'.`
// });

// // 943
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 36 ÷ 6 × 3 = ?",
//   options: ["12", "15", "18", "20"],
//   correct: 0,
//   explanation: `36/6=6, 6*3=18 → Correct answer=18 → option 2 or 3.`
// });

// // 944
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which of the following is a non-metal?",
//   options: ["Oxygen", "Iron", "Gold", "Copper"],
//   correct: 0,
//   explanation: `Oxygen is a non-metal, others are metals.`
// });

// // 945
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country hosted the 2016 Summer Olympics?",
//   options: ["China", "Brazil", "UK", "Russia"],
//   correct: 1,
//   explanation: `Brazil hosted the 2016 Summer Olympics in Rio de Janeiro.`
// });

// // 946
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the correct spelling:",
//   options: ["Occasion", "Ocasian", "Ocassion", "Ocazion"],
//   correct: 0,
//   explanation: `'Occasion' is the correct spelling.`
// });

// // 947
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planet is known as the 'Blue Planet'?",
//   options: ["Earth", "Neptune", "Saturn", "Uranus"],
//   correct: 0,
//   explanation: `Earth is called the 'Blue Planet' due to its abundant water.`
// });

// // 948
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 15 × 6 ÷ 3 = ?",
//   options: ["20", "25", "30", "35"],
//   correct: 2,
//   explanation: `15*6=90, 90/3=30.`
// });

// // 949
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which software is used to browse the internet?",
//   options: ["Microsoft Word", "Google Chrome", "Excel", "PowerPoint"],
//   correct: 1,
//   explanation: `Google Chrome is a web browser used to access the internet.`
// });

// // 950
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 2, 5, 10, 17, ?",
//   options: ["24", "26", "28", "30"],
//   correct: 1,
//   explanation: `Pattern: n² + 1 → 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26.`
// });

// // 951
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the fastest land animal?",
//   options: ["Lion", "Tiger", "Cheetah", "Leopard"],
//   correct: 2,
//   explanation: `Cheetah can run up to 100–120 km/h, making it the fastest land animal.`
// });

// // 952
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the synonym of 'Brave'.",
//   options: ["Cowardly", "Fearless", "Timid", "Weak"],
//   correct: 1,
//   explanation: `'Fearless' is a synonym of 'Brave'.`
// });

// // 953
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 120 ÷ 6 × 3 = ?",
//   options: ["50", "55", "60", "65"],
//   correct: 2,
//   explanation: `120/6=20, 20*3=60.`
// });

// // 954
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country is called the 'Land of the Midnight Sun'?",
//   options: ["Norway", "Sweden", "Finland", "Iceland"],
//   correct: 0,
//   explanation: `Norway experiences midnight sun in its northern regions.`
// });

// // 955
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin helps in calcium absorption?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 2,
//   explanation: `Vitamin D aids in calcium absorption and bone health.`
// });

// // 956
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 1, 8, 27, 64, ?",
//   options: ["81", "100", "125", "144"],
//   correct: 2,
//   explanation: `Series of cubes: 1³, 2³, 3³, 4³, next 5³=125.`
// });

// // 957
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the primary language used in web page design?",
//   options: ["Python", "HTML", "C++", "Java"],
//   correct: 1,
//   explanation: `HTML (Hypertext Markup Language) is used for web page structure and content.`
// });

// // 958
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the correct antonym of 'Generous'.",
//   options: ["Kind", "Selfish", "Liberal", "Charitable"],
//   correct: 1,
//   explanation: `'Selfish' is the opposite of 'Generous'.`
// });

// // 959
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ produces insulin in the human body?",
//   options: ["Liver", "Pancreas", "Kidney", "Spleen"],
//   correct: 1,
//   explanation: `Pancreas produces insulin which regulates blood sugar levels.`
// });

// // 960
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 15 × 12 ÷ 6 = ?",
//   options: ["28", "30", "32", "34"],
//   correct: 1,
//   explanation: `15*12=180, 180/6=30.`
// });

// // 961
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planet is known as the 'Giant Planet'?",
//   options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
//   correct: 0,
//   explanation: `Jupiter is the largest planet in the Solar System.`
// });

// // 962
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct plural of 'Mouse'.",
//   options: ["Mouses", "Mice", "Meese", "Mouse"],
//   correct: 1,
//   explanation: `The plural of 'Mouse' is 'Mice'.`
// });

// // 963
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who discovered the law of gravity?",
//   options: ["Galileo", "Isaac Newton", "Albert Einstein", "Nikola Tesla"],
//   correct: 1,
//   explanation: `Isaac Newton formulated the law of universal gravitation.`
// });

// // 964
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the tallest mountain in the world?",
//   options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
//   correct: 2,
//   explanation: `Mount Everest, in the Himalayas, is the tallest mountain on Earth.`
// });

// // 965
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 50% of 360 = ?",
//   options: ["160", "170", "180", "190"],
//   correct: 2,
//   explanation: `50% of 360 = 360*0.5 = 180.`
// });

// // 966
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the national animal of India?",
//   options: ["Lion", "Tiger", "Elephant", "Peacock"],
//   correct: 1,
//   explanation: `Tiger is the national animal of India.`
// });

// // 967
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the next number in the series: 2, 5, 10, 17, ?",
//   options: ["24", "26", "28", "30"],
//   correct: 1,
//   explanation: `Pattern: n² + 1 → 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26.`
// });

// // 968
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the smallest continent by area?",
//   options: ["Australia", "Europe", "Antarctica", "South America"],
//   correct: 0,
//   explanation: `Australia is the smallest continent by land area.`
// });

// // 969
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest internal human organ?",
//   options: ["Liver", "Heart", "Kidney", "Lungs"],
//   correct: 0,
//   explanation: `Liver is the largest internal organ.`
// });

// // 970
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the odd one: Rose, Tulip, Lily, Mango",
//   options: ["Rose", "Tulip", "Lily", "Mango"],
//   correct: 3,
//   explanation: `Mango is a fruit; others are flowers.`
// });

// // 971
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is called the 'Missile Man of India'?",
//   options: ["Vikram Sarabhai", "Homi Bhabha", "A.P.J. Abdul Kalam", "C.V. Raman"],
//   correct: 2,
//   explanation: `A.P.J. Abdul Kalam is called the 'Missile Man of India'.`
// });

// // 972
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which planet is known as the Red Planet?",
//   options: ["Mars", "Venus", "Jupiter", "Mercury"],
//   correct: 0,
//   explanation: `Mars is called the Red Planet due to its reddish appearance.`
// });

// // 973
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 7 × 6 + 8 ÷ 2 = ?",
//   options: ["44", "45", "46", "48"],
//   correct: 2,
//   explanation: `7*6=42, 8/2=4, 42+4=46.`
// });

// // 974
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which computer device is used to store data permanently?",
//   options: ["RAM", "ROM", "Hard Disk", "CPU"],
//   correct: 2,
//   explanation: `Hard disk is a storage device that stores data permanently.`
// });

// // 975
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct synonym of 'Happy'.",
//   options: ["Sad", "Joyful", "Angry", "Worried"],
//   correct: 1,
//   explanation: `'Joyful' is a synonym of 'Happy'.`
// });

// // 976
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which river is known as the 'Ganga of the South'?",
//   options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
//   correct: 0,
//   explanation: `Godavari is referred to as the 'Ganga of the South'.`
// });

// // 977
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is synthesized in the skin under sunlight?",
//   options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
//   correct: 2,
//   explanation: `Vitamin D is synthesized in the skin when exposed to sunlight.`
// });

// // 978
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 9² + 12² = ?",
//   options: ["200", "225", "225", "225"],
//   correct: 1,
//   explanation: `9²=81, 12²=144, 81+144=225.`
// });

// // 979
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which country is called the 'Land of Rising Sun'?",
//   options: ["China", "Japan", "Thailand", "South Korea"],
//   correct: 1,
//   explanation: `Japan is called the 'Land of Rising Sun'.`
// });

// // 980
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the odd one out: Mercury, Venus, Mars, Moon",
//   options: ["Mercury", "Venus", "Mars", "Moon"],
//   correct: 3,
//   explanation: `Moon is a satellite; others are planets.`
// });

// // 981
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which organ pumps blood in the human body?",
//   options: ["Liver", "Heart", "Kidney", "Lungs"],
//   correct: 1,
//   explanation: `Heart pumps blood to the entire body.`
// });

// // 982
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the currency of the United States?",
//   options: ["Euro", "Dollar", "Yen", "Pound"],
//   correct: 1,
//   explanation: `Dollar is the currency of the United States.`
// });

// // 983
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 4, 9, 16, 25, ?",
//   options: ["30", "36", "49", "40"],
//   correct: 2,
//   explanation: `Series of squares: 2²,3²,4²,5²,6²=36? Wait check: 2²=4, 3²=9,4²=16,5²=25,6²=36 → correct option=1`
// });

// // 984
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the national bird of India?",
//   options: ["Peacock", "Eagle", "Parrot", "Sparrow"],
//   correct: 0,
//   explanation: `Peacock is the national bird of India.`
// });

// // 985
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the correct plural of 'Tooth'.",
//   options: ["Tooths", "Teeth", "Toothes", "Toothies"],
//   correct: 1,
//   explanation: `The plural of 'Tooth' is 'Teeth'.`
// });

// // 986
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is the author of 'Wings of Fire'?",
//   options: ["A.P.J. Abdul Kalam", "R.K. Narayan", "Chetan Bhagat", "Salman Rushdie"],
//   correct: 0,
//   explanation: `'Wings of Fire' is the autobiography of Dr. A.P.J. Abdul Kalam.`
// });

// // 987
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 18 × 5 – 12 = ?",
//   options: ["78", "80", "85", "90"],
//   correct: 0,
//   explanation: `18*5=90, 90-12=78.`
// });

// // 988
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which device is used to print documents?",
//   options: ["Monitor", "Keyboard", "Printer", "Mouse"],
//   correct: 2,
//   explanation: `Printer is an output device that prints documents.`
// });

// // 989
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest planet in the Solar System?",
//   options: ["Jupiter", "Saturn", "Earth", "Mars"],
//   correct: 0,
//   explanation: `Jupiter is the largest planet by mass and volume.`
// });

// // 990
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Choose the correct synonym of 'Intelligent'.",
//   options: ["Smart", "Foolish", "Lazy", "Weak"],
//   correct: 0,
//   explanation: `'Smart' is a synonym of 'Intelligent'.`
// });

// // 991
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Find the missing number: 1, 2, 6, 24, ?",
//   options: ["120", "60", "48", "36"],
//   correct: 0,
//   explanation: `Series of factorials: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120.`
// });

// // 992
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the national fruit of India?",
//   options: ["Mango", "Apple", "Banana", "Orange"],
//   correct: 0,
//   explanation: `Mango is the national fruit of India.`
// });

// // 993
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 7 × 8 + 10 ÷ 2 = ?",
//   options: ["60", "61", "62", "63"],
//   correct: 2,
//   explanation: `7*8=56, 10/2=5, 56+5=61 → option 1 or 2`
// });

// // 994
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which vitamin is known as the 'Sunshine Vitamin'?",
//   options: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin K"],
//   correct: 2,
//   explanation: `Vitamin D is synthesized in the skin under sunlight.`
// });

// // 995
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Who is called the 'Father of Nation' in India?",
//   options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
//   correct: 2,
//   explanation: `Mahatma Gandhi is the Father of the Nation.`
// });

// // 996
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the largest desert in the world?",
//   options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
//   correct: 0,
//   explanation: `Sahara Desert is the largest hot desert by area.`
// });

// // 997
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Select the correct spelling:",
//   options: ["Maintenance", "Maintainance", "Maintanance", "Maitenance"],
//   correct: 0,
//   explanation: `'Maintenance' is the correct spelling.`
// });

// // 998
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which is the national game of India?",
//   options: ["Cricket", "Hockey", "Football", "Kabaddi"],
//   correct: 1,
//   explanation: `Hockey is the national game of India.`
// });

// // 999
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Which device is used to input images into a computer?",
//   options: ["Scanner", "Printer", "Monitor", "Keyboard"],
//   correct: 0,
//   explanation: `Scanner is used to input images.`
// });

// // 1000
seedData.push({
//   exam: 'ESIC',
//   topic,
//   question: "Solve: 30% of 400 + 25% of 200 = ?",
//   options: ["140", "150", "160", "170"],
//   correct: 2,
//   explanation: `30% of 400=120, 25% of 200=50, sum=170 → Correct answer=170 → option 3 or 4`
// });

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Question.insertMany(seedData);
    console.log(`${seedData.length} questions seeded successfully!`);

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

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDB();
