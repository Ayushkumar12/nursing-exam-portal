const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Question = require('./models/Question');
const User = require('./models/User');


const seedData = [];

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most reliable indicator of adequate ventilation in a newborn immediately after birth is:',
  options: [
    'Heart rate above 100 per minute',
    'Strong cry',
    'Pink coloration of extremities',
    'Regular respiratory movements'
  ],
  correct: 0,
  explanation: `Heart rate above 100/min is the most reliable sign of effective ventilation and successful neonatal resuscitation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'According to IMNCI guidelines, a child with chest indrawing is classified as:',
  options: [
    'No pneumonia',
    'Pneumonia',
    'Severe pneumonia or very severe disease',
    'Upper respiratory infection'
  ],
  correct: 2,
  explanation: `Chest indrawing is a danger sign and indicates severe pneumonia or very severe disease under IMNCI.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal duration of the third stage of labor is:',
  options: [
    '5–10 minutes',
    '10–20 minutes',
    '20–30 minutes',
    '30–60 minutes'
  ],
  correct: 1,
  explanation: `The third stage of labor normally lasts 10–20 minutes and involves delivery of the placenta.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The primary cause of postpartum hemorrhage is:',
  options: [
    'Retained placenta',
    'Uterine atony',
    'Genital tract trauma',
    'Coagulation disorders'
  ],
  correct: 1,
  explanation: `Uterine atony is the most common cause of postpartum hemorrhage.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which vaccine is administered at birth under the Universal Immunization Programme?',
  options: [
    'DPT',
    'OPV and BCG',
    'Measles',
    'Pentavalent'
  ],
  correct: 1,
  explanation: `BCG and OPV (zero dose) are administered at birth under UIP.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In a child with severe dehydration, the preferred fluid management is:',
  options: [
    'ORS only',
    'Plan A',
    'Plan B',
    'Plan C'
  ],
  correct: 3,
  explanation: `Plan C with IV fluids is recommended for severe dehydration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The Glasgow Coma Scale assesses:',
  options: [
    'Pain response only',
    'Level of consciousness',
    'Motor strength',
    'Brainstem reflexes'
  ],
  correct: 1,
  explanation: `GCS is used to assess level of consciousness based on eye, verbal, and motor responses.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Kangaroo Mother Care primarily helps in:',
  options: [
    'Reducing neonatal infections',
    'Maintaining body temperature',
    'Improving digestion',
    'Preventing jaundice'
  ],
  correct: 1,
  explanation: `KMC provides thermal protection and improves survival of low birth weight babies.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The correct site for intramuscular injection in an infant is:',
  options: [
    'Deltoid muscle',
    'Gluteus maximus',
    'Vastus lateralis',
    'Dorsogluteal region'
  ],
  correct: 2,
  explanation: `Vastus lateralis is the safest IM injection site for infants.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The Apgar score is assessed at:',
  options: [
    '1 minute only',
    '5 minutes only',
    '1 and 5 minutes',
    '10 minutes only'
  ],
  correct: 2,
  explanation: `Apgar score is assessed at 1 and 5 minutes after birth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended treatment for neonatal hypoglycemia is:',
  options: [
    'IV dextrose 10%',
    'IV saline',
    'Oral glucose only',
    'No treatment needed'
  ],
  correct: 0,
  explanation: `IV dextrose 10% is used to treat symptomatic neonatal hypoglycemia promptly.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is a sign of impending shock in a child?',
  options: [
    'Bradycardia',
    'Warm extremities',
    'Rapid weak pulse',
    'Decreased respiratory rate'
  ],
  correct: 2,
  explanation: `Rapid weak pulse, along with other signs like cold extremities, indicates shock.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first action in case of a newborn not breathing at birth is:',
  options: [
    'Start chest compressions',
    'Provide tactile stimulation and clear airway',
    'Call for NICU',
    'Administer oxygen'
  ],
  correct: 1,
  explanation: `Immediate stimulation and airway clearance are first steps in neonatal resuscitation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most common cause of neonatal sepsis is:',
  options: [
    'E. coli',
    'Staphylococcus aureus',
    'Group B Streptococcus',
    'Pseudomonas aeruginosa'
  ],
  correct: 2,
  explanation: `Group B Streptococcus is the leading cause of early-onset neonatal sepsis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is a priority nursing action in eclampsia?',
  options: [
    'Administer oxytocin',
    'Monitor fetal heart rate',
    'Prevent injury during seizures',
    'Start IV antibiotics'
  ],
  correct: 2,
  explanation: `Preventing injury and ensuring maternal safety is the priority during eclamptic seizures.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Normal fetal heart rate is considered to be:',
  options: [
    '80–100 bpm',
    '110–160 bpm',
    '160–200 bpm',
    '90–120 bpm'
  ],
  correct: 1,
  explanation: `110–160 bpm is the normal range for fetal heart rate.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is a primary nursing intervention for hypothermia in a neonate?',
  options: [
    'Cold water bath',
    'Skin-to-skin contact',
    'Fanning the baby',
    'Reducing room temperature'
  ],
  correct: 1,
  explanation: `Skin-to-skin contact (KMC) helps maintain neonatal body temperature.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The priority action for a patient with chest pain and suspected myocardial infarction is:',
  options: [
    'Administer painkillers',
    'Obtain vital signs and ECG',
    'Start physiotherapy',
    'Give IV fluids only'
  ],
  correct: 1,
  explanation: `ECG and vital signs assessment are critical to diagnose MI and begin urgent management.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most appropriate position for a post-cesarean section patient during early recovery is:',
  options: [
    'Supine with legs elevated',
    'High Fowler’s position',
    'Side-lying with support',
    'Trendelenburg'
  ],
  correct: 2,
  explanation: `Side-lying position helps prevent pressure injuries and promotes comfort post-cesarean.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is an early sign of shock in a postpartum patient?',
  options: [
    'Hypotension',
    'Tachycardia',
    'Oliguria',
    'Cool clammy skin'
  ],
  correct: 1,
  explanation: `Tachycardia is often the earliest detectable sign of shock before hypotension occurs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'For a child with acute gastroenteritis, the most important nursing intervention is:',
  options: [
    'Antibiotic administration',
    'Fluid and electrolyte replacement',
    'Bed rest',
    'High-protein diet'
  ],
  correct: 1,
  explanation: `Fluid and electrolyte replacement is critical to prevent dehydration and complications.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which drug is commonly used to prevent postpartum hemorrhage?',
  options: [
    'Magnesium sulfate',
    'Oxytocin',
    'Methyldopa',
    'Nifedipine'
  ],
  correct: 1,
  explanation: `Oxytocin is routinely administered to prevent postpartum hemorrhage by promoting uterine contraction.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended frequency of antenatal visits in a normal pregnancy is:',
  options: [
    '4 visits',
    '5 visits',
    '8 visits',
    '10 visits'
  ],
  correct: 2,
  explanation: `WHO recommends at least 8 antenatal visits for a normal pregnancy to improve outcomes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In pediatric patients, the preferred site for intraosseous access is:',
  options: [
    'Proximal tibia',
    'Humerus',
    'Femoral artery',
    'Radial vein'
  ],
  correct: 0,
  explanation: `Proximal tibia is the standard site for intraosseous access in children when IV access is difficult.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The Apgar parameter that assesses muscle tone is:',
  options: [
    'Appearance',
    'Pulse',
    'Activity',
    'Respiration'
  ],
  correct: 2,
  explanation: `Activity refers to muscle tone in the Apgar scoring system.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The correct sequence of neonatal resuscitation steps is:',
  options: [
    'Airway, Breathing, Circulation',
    'Circulation, Breathing, Airway',
    'Breathing, Airway, Circulation',
    'Airway, Circulation, Breathing'
  ],
  correct: 0,
  explanation: `The standard sequence is Airway, Breathing, Circulation (ABC) in neonatal resuscitation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which is the most common cause of neonatal jaundice within the first 24 hours?',
  options: [
    'Physiological jaundice',
    'Breast milk jaundice',
    'Hemolytic disease of newborn',
    'Sepsis'
  ],
  correct: 2,
  explanation: `Jaundice within 24 hours is usually pathological, most commonly due to hemolytic disease of the newborn.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The ideal IV fluid for maintenance in a child is:',
  options: [
    '0.9% saline',
    'Dextrose 5% with 0.45% saline',
    'Ringer lactate',
    'Dextrose 10%'
  ],
  correct: 1,
  explanation: `Dextrose 5% with 0.45% saline is commonly used for maintenance fluid in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In postpartum care, the first step in managing a perineal tear is:',
  options: [
    'Administer antibiotics',
    'Perform perineal repair',
    'Apply cold packs',
    'Encourage ambulation'
  ],
  correct: 1,
  explanation: `Immediate repair of the tear reduces bleeding and risk of infection.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The key sign of hypovolemic shock in children includes:',
  options: [
    'Hypertension and bradycardia',
    'Tachycardia and hypotension',
    'Mottled skin and hypertension',
    'Polyuria and bradycardia'
  ],
  correct: 1,
  explanation: `Tachycardia and hypotension are characteristic of hypovolemic shock in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is part of essential newborn care immediately after birth?',
  options: [
    'Delayed cord clamping',
    'Immediate bathing',
    'Isolation from mother',
    'Oral antibiotic prophylaxis'
  ],
  correct: 0,
  explanation: `Delayed cord clamping (1–3 minutes) improves neonatal iron stores and hemoglobin.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which maternal position is recommended to improve uteroplacental blood flow during labor?',
  options: [
    'Supine with legs elevated',
    'Left lateral recumbent',
    'High Fowler’s position',
    'Lithotomy'
  ],
  correct: 1,
  explanation: `Left lateral position improves uteroplacental perfusion and reduces vena cava compression.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The drug of choice for preventing eclampsia in preeclamptic patients is:',
  options: [
    'Magnesium sulfate',
    'Hydralazine',
    'Labetalol',
    'Nifedipine'
  ],
  correct: 0,
  explanation: `Magnesium sulfate is the standard prophylactic and therapeutic agent for eclampsia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is a sign of meningitis in a neonate?',
  options: [
    'Bulging fontanelle',
    'Bradycardia',
    'Hyperactivity',
    'Constipation'
  ],
  correct: 0,
  explanation: `Bulging anterior fontanelle is a classic early sign of neonatal meningitis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In newborn resuscitation, when should positive pressure ventilation be initiated?',
  options: [
    'If the heart rate is below 100/min',
    'Only if the baby is cyanotic',
    'Immediately after birth',
    'After first cry'
  ],
  correct: 0,
  explanation: `PPV is initiated if the newborn’s heart rate is below 100/min after initial stimulation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is an early sign of hypoglycemia in neonates?',
  options: [
    'Jitteriness',
    'Lethargy',
    'Seizures',
    'Apnea'
  ],
  correct: 0,
  explanation: `Jitteriness is an early sign; lethargy and seizures appear later.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In the management of severe dehydration in children, the preferred IV fluid is:',
  options: [
    'Ringer lactate',
    '0.9% saline',
    'Dextrose 5% only',
    'Half normal saline'
  ],
  correct: 0,
  explanation: `Ringer lactate is recommended for rapid volume replacement in severe dehydration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which delivery complication is prevented by administering oxytocin immediately after birth?',
  options: [
    'Shoulder dystocia',
    'Postpartum hemorrhage',
    'Uterine rupture',
    'Perineal tear'
  ],
  correct: 1,
  explanation: `Oxytocin stimulates uterine contraction and reduces risk of postpartum hemorrhage.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended birth weight for initiating kangaroo mother care is:',
  options: [
    '≤2500 g',
    '≤2000 g',
    '≤1500 g',
    '≤1000 g'
  ],
  correct: 0,
  explanation: `Infants weighing ≤2500 g benefit from skin-to-skin contact for thermoregulation and survival.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is considered a danger sign in neonates?',
  options: [
    'Feeding poorly',
    'Sleeping more than usual',
    'Yellow skin after 3 days',
    'Normal cry'
  ],
  correct: 0,
  explanation: `Poor feeding is a danger sign requiring immediate assessment.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The appropriate action for a newborn with meconium-stained amniotic fluid and poor respiratory effort is:',
  options: [
    'Immediate suctioning of mouth and nose',
    'Endotracheal suctioning and resuscitation',
    'Observe for spontaneous breathing',
    'Immediate formula feeding'
  ],
  correct: 1,
  explanation: `Endotracheal suctioning is required if the newborn is depressed with meconium-stained fluid.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is an essential nursing intervention for neonatal sepsis?',
  options: [
    'Early initiation of antibiotics',
    'Delayed feeding',
    'Routine phototherapy',
    'Isolation for 24 hours only'
  ],
  correct: 0,
  explanation: `Early antibiotics reduce morbidity and mortality in neonatal sepsis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The correct site for subcutaneous injection in infants is:',
  options: [
    'Abdomen',
    'Thigh',
    'Upper arm',
    'Buttocks'
  ],
  correct: 1,
  explanation: `Thigh is preferred for subcutaneous injections in infants for safety and absorption.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first step in managing a child with anaphylactic shock is:',
  options: [
    'Administer IV fluids',
    'Give epinephrine',
    'Start oxygen therapy',
    'Administer antihistamines'
  ],
  correct: 1,
  explanation: `Intramuscular epinephrine is the first-line treatment for anaphylaxis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most common cause of neonatal respiratory distress syndrome is:',
  options: [
    'Infection',
    'Prematurity',
    'Meconium aspiration',
    'Congenital heart disease'
  ],
  correct: 1,
  explanation: `Premature infants often lack surfactant, leading to respiratory distress syndrome.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The standard needle size for IM injections in newborns is:',
  options: [
    '21–23G, 1 inch',
    '25–27G, 0.5–1 inch',
    '18–20G, 2 inch',
    '30G, 0.25 inch'
  ],
  correct: 1,
  explanation: `25–27G needle, 0.5–1 inch, is safe for IM injections in newborns and infants.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In postpartum care, which of the following promotes uterine involution?',
  options: [
    'Breastfeeding',
    'Bed rest',
    'Antibiotics',
    'Oral iron therapy'
  ],
  correct: 0,
  explanation: `Breastfeeding stimulates oxytocin release, which helps uterine contraction and involution.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is a key nursing priority in pediatric asthma management?',
  options: [
    'Monitoring peak expiratory flow rate',
    'Daily blood sugar monitoring',
    'Restricting fluids',
    'Encouraging bed rest only'
  ],
  correct: 0,
  explanation: `Peak expiratory flow rate monitoring helps assess severity and response to therapy in pediatric asthma.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The primary purpose of giving Vitamin K to neonates is to:',
  options: [
    'Prevent rickets',
    'Prevent hemorrhagic disease',
    'Enhance immunity',
    'Prevent anemia'
  ],
  correct: 1,
  explanation: `Vitamin K is administered to prevent Vitamin K deficiency bleeding in neonates.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'A child with severe malnutrition presents with edema and skin changes. This condition is:',
  options: [
    'Marasmus',
    'Kwashiorkor',
    'Rickets',
    'Scurvy'
  ],
  correct: 1,
  explanation: `Kwashiorkor is characterized by edema, hypoalbuminemia, and skin/hair changes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most appropriate fluid for initial resuscitation in pediatric shock is:',
  options: [
    'Dextrose 5%',
    'Ringer lactate or normal saline bolus',
    'Half-normal saline',
    'Dextrose 10%'
  ],
  correct: 1,
  explanation: `Isotonic fluids such as Ringer lactate or normal saline are used for rapid resuscitation in shock.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The preferred site for intraosseous infusion in infants is:',
  options: [
    'Proximal humerus',
    'Proximal tibia',
    'Distal femur',
    'Iliac crest'
  ],
  correct: 1,
  explanation: `Proximal tibia is the standard site for IO access in infants when IV access is difficult.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is a classic sign of neonatal sepsis?',
  options: [
    'Hyperactivity',
    'Temperature instability',
    'Excessive crying',
    'Normal feeding'
  ],
  correct: 1,
  explanation: `Temperature instability, either hypothermia or fever, is an early sign of neonatal sepsis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended first-line drug for status epilepticus in children is:',
  options: [
    'Phenobarbitone',
    'Lorazepam',
    'Phenytoin',
    'Valproate'
  ],
  correct: 1,
  explanation: `Lorazepam (or diazepam) is recommended as the initial drug for pediatric status epilepticus.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal respiratory rate for a newborn is:',
  options: [
    '30–40/min',
    '40–60/min',
    '20–30/min',
    '50–70/min'
  ],
  correct: 1,
  explanation: `A normal newborn respiratory rate ranges from 40 to 60 breaths per minute.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first step in managing a febrile child with convulsion is:',
  options: [
    'Administer anticonvulsant',
    'Ensure airway and breathing',
    'Give antipyretics only',
    'Start antibiotics'
  ],
  correct: 1,
  explanation: `Airway, breathing, and circulation should be assessed first before any medication.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which is the primary nursing intervention for a child with bronchiolitis?',
  options: [
    'Antibiotic therapy',
    'Supportive care and oxygen therapy',
    'Corticosteroids',
    'Chest physiotherapy only'
  ],
  correct: 1,
  explanation: `Supportive care, including oxygen and hydration, is the mainstay of bronchiolitis management.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The appropriate IV fluid for a neonate with hypoglycemia is:',
  options: [
    'Dextrose 10%',
    'Normal saline',
    'Ringer lactate',
    'Dextrose 5%'
  ],
  correct: 3,
  explanation: `Dextrose 5% is typically used for mild neonatal hypoglycemia; severe cases may require 10%.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'During resuscitation, a newborn’s heart rate <60/min after 30 seconds of effective ventilation requires:',
  options: [
    'Continue ventilation only',
    'Chest compressions',
    'Give IV fluids',
    'Administer antibiotics'
  ],
  correct: 1,
  explanation: `Chest compressions are initiated if HR remains <60/min after effective ventilation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The best position to prevent aspiration in a vomiting child is:',
  options: [
    'Supine',
    'Left lateral recumbent',
    'Right lateral recumbent',
    'Prone'
  ],
  correct: 1,
  explanation: `Left lateral position helps prevent aspiration and improves gastric emptying.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most effective intervention to prevent neonatal hypothermia is:',
  options: [
    'Immediate bathing',
    'Skin-to-skin contact',
    'Room heating only',
    'Cold compresses'
  ],
  correct: 1,
  explanation: `Kangaroo Mother Care (skin-to-skin) is the most effective method to prevent hypothermia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'A primigravida at 38 weeks with sudden gush of fluid from vagina most likely has:',
  options: [
    'Amniotic fluid leak',
    'Urinary incontinence',
    'Placenta previa',
    'Ectopic pregnancy'
  ],
  correct: 0,
  explanation: `Sudden rupture of membranes (amniotic fluid leak) occurs in term pregnancies.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is an immediate nursing action for shoulder dystocia during delivery?',
  options: [
    'McRoberts maneuver',
    'Immediate cesarean',
    'Episiotomy only',
    'Uterotonics'
  ],
  correct: 0,
  explanation: `McRoberts maneuver helps relieve shoulder impaction in shoulder dystocia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first action in suspected neonatal sepsis is:',
  options: [
    'Start IV antibiotics immediately',
    'Obtain blood cultures and start antibiotics',
    'Observe for 24 hours',
    'Start oral antibiotics'
  ],
  correct: 1,
  explanation: `Blood cultures should be obtained before starting IV antibiotics for effective management.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The correct dose of epinephrine for anaphylaxis in children is:',
  options: [
    '0.01 mg/kg IM',
    '0.1 mg/kg IM',
    '0.5 mg/kg IV',
    '0.01 mg/kg IV'
  ],
  correct: 0,
  explanation: `IM epinephrine at 0.01 mg/kg is recommended for pediatric anaphylaxis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'A newborn with persistent vomiting, lethargy, and hypotonia may indicate:',
  options: [
    'Physiological jaundice',
    'Hypoglycemia or metabolic disorder',
    'Normal adaptation',
    'Mild dehydration'
  ],
  correct: 1,
  explanation: `These signs may indicate hypoglycemia or metabolic disorder requiring urgent evaluation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal blood pressure range for a full-term neonate is:',
  options: [
    '50–70/30–45 mmHg',
    '70–90/40–60 mmHg',
    '90–110/60–70 mmHg',
    '40–60/20–35 mmHg'
  ],
  correct: 0,
  explanation: `Neonatal BP varies with gestational age; term neonates usually have 50–70 systolic.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which maternal complication is most associated with preterm labor?',
  options: [
    'Preeclampsia',
    'Placenta previa',
    'Multiple gestation',
    'All of the above'
  ],
  correct: 3,
  explanation: `Preeclampsia, placenta previa, and multiple gestation all increase risk for preterm labor.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing action in a child with febrile convulsion is:',
  options: [
    'Place in safe position and maintain airway',
    'Administer antipyretics immediately',
    'Start IV fluids',
    'Give anticonvulsants only'
  ],
  correct: 0,
  explanation: `Ensuring airway and safety during convulsions is the priority.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The preferred site for IM injection in toddlers is:',
  options: [
    'Deltoid muscle',
    'Vastus lateralis',
    'Gluteus maximus',
    'Dorsogluteal region'
  ],
  correct: 1,
  explanation: `Vastus lateralis is safe and recommended for IM injections in toddlers.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which intervention reduces neonatal mortality in preterm infants?',
  options: [
    'Antenatal corticosteroids',
    'Delayed cord clamping',
    'Kangaroo Mother Care',
    'All of the above'
  ],
  correct: 3,
  explanation: `Antenatal steroids, delayed cord clamping, and KMC all improve preterm survival.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended duration for exclusive breastfeeding is:',
  options: [
    '3 months',
    '6 months',
    '9 months',
    '12 months'
  ],
  correct: 1,
  explanation: `WHO recommends exclusive breastfeeding for the first 6 months of life.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most common cause of neonatal convulsions is:',
  options: [
    'Hypoglycemia',
    'Sepsis',
    'Hypocalcemia',
    'All of the above'
  ],
  correct: 3,
  explanation: `Neonatal convulsions may result from hypoglycemia, infection, or electrolyte disturbances.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The immediate nursing action in postpartum hemorrhage due to uterine atony is:',
  options: [
    'Massage the uterus',
    'Start IV antibiotics',
    'Observe only',
    'Administer sedatives'
  ],
  correct: 0,
  explanation: `Uterine massage stimulates contraction and is the first step in PPH management.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is considered a normal newborn blood glucose level?',
  options: [
    '20–30 mg/dL',
    '45–80 mg/dL',
    '90–120 mg/dL',
    '100–140 mg/dL'
  ],
  correct: 1,
  explanation: `Normal neonatal blood glucose is 45–80 mg/dL; hypoglycemia is <45 mg/dL.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following signs indicates dehydration in infants?',
  options: [
    'Tearful crying',
    'Sunken eyes and fontanelle',
    'Moist mucous membranes',
    'Warm extremities'
  ],
  correct: 1,
  explanation: `Sunken eyes and fontanelle are classic signs of dehydration in infants.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first step in managing a newborn with meconium aspiration is:',
  options: [
    'Immediate suctioning of mouth and nose',
    'Intubation and suctioning only if depressed',
    'Observe for cyanosis',
    'Give oxygen only'
  ],
  correct: 1,
  explanation: `Intubation and suctioning is indicated if the newborn has poor respiratory effort.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended oxygen delivery method for mild pediatric hypoxia is:',
  options: [
    'Nasal prongs',
    'Non-rebreather mask',
    'Bag-mask ventilation',
    'Endotracheal intubation'
  ],
  correct: 0,
  explanation: `Nasal prongs are used for mild oxygen supplementation in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is the primary nursing intervention for a newborn with neonatal jaundice?',
  options: [
    'Phototherapy',
    'Immediate formula feeding',
    'Antibiotic therapy',
    'Vitamin K administration'
  ],
  correct: 0,
  explanation: `Phototherapy is used to reduce bilirubin levels in neonatal jaundice.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In pediatric shock, the first priority is:',
  options: [
    'Correct hypoglycemia',
    'Restore perfusion with IV fluids',
    'Give antibiotics',
    'Start oxygen therapy'
  ],
  correct: 1,
  explanation: `Rapid fluid resuscitation restores circulating volume and tissue perfusion.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most appropriate IV fluid for maintenance in neonates is:',
  options: [
    'Dextrose 5% with 0.45% saline',
    'Ringer lactate',
    'Normal saline only',
    'Dextrose 10%'
  ],
  correct: 0,
  explanation: `Dextrose 5% with 0.45% saline is commonly used for neonatal maintenance fluids.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The best method to prevent neonatal hypothermia immediately after birth is:',
  options: [
    'Placing the baby under a radiant warmer',
    'Skin-to-skin contact with mother',
    'Bathing immediately after birth',
    'Wrapping in dry cloth only'
  ],
  correct: 1,
  explanation: `Kangaroo Mother Care provides warmth and helps prevent hypothermia effectively.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In postpartum care, lochia rubra typically lasts:',
  options: [
    '1–3 days',
    '4–10 days',
    '2–4 weeks',
    '6 weeks'
  ],
  correct: 1,
  explanation: `Lochia rubra, red vaginal discharge, usually lasts 4–10 days post-delivery.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The correct intervention for neonatal hypoglycemia with blood glucose <40 mg/dL is:',
  options: [
    'Oral feeding',
    'IV dextrose administration',
    'Observe and monitor only',
    'Administer insulin'
  ],
  correct: 1,
  explanation: `IV dextrose bolus or infusion is required for symptomatic or severe hypoglycemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which neonatal condition requires phototherapy?',
  options: [
    'Hyperbilirubinemia',
    'Hypoglycemia',
    'Hypocalcemia',
    'Infection'
  ],
  correct: 0,
  explanation: `Phototherapy is indicated for elevated bilirubin levels to prevent kernicterus.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'In children with dehydration, the preferred oral rehydration solution is:',
  options: [
    'Dextrose 10%',
    'ORS with recommended electrolyte composition',
    'Normal saline',
    'Plain water'
  ],
  correct: 1,
  explanation: `ORS with correct electrolytes prevents and treats dehydration effectively.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The primary nursing action for a neonate with suspected congenital heart disease is:',
  options: [
    'Immediate surgery',
    'Oxygen supplementation and cardiology referral',
    'IV antibiotics',
    'Phototherapy'
  ],
  correct: 1,
  explanation: `Stabilization with oxygen and early referral to a cardiologist is crucial.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is the safest route for antibiotic administration in neonates?',
  options: [
    'Oral',
    'Intramuscular',
    'Intravenous',
    'Subcutaneous'
  ],
  correct: 2,
  explanation: `IV route ensures rapid and reliable drug delivery in neonates.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing step in a newborn with respiratory distress is:',
  options: [
    'Provide warmth and clear airway',
    'Administer IV antibiotics',
    'Start feeding immediately',
    'Provide phototherapy'
  ],
  correct: 0,
  explanation: `Airway management and warmth are the initial priorities in neonatal respiratory distress.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended interval for antenatal visits in low-risk pregnancies is:',
  options: [
    'Every week',
    'At least 8 visits',
    'Only once per trimester',
    'Every 2 weeks'
  ],
  correct: 1,
  explanation: `WHO recommends 8 visits in a normal pregnancy to monitor maternal and fetal well-being.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which is the earliest sign of neonatal hypothermia?',
  options: [
    'Apnea',
    'Jitteriness and lethargy',
    'Bradycardia',
    'Cyanosis'
  ],
  correct: 1,
  explanation: `Early hypothermia manifests as lethargy, poor feeding, or jitteriness.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal pulse rate for a newborn is:',
  options: [
    '80–100/min',
    '100–120/min',
    '120–160/min',
    '160–180/min'
  ],
  correct: 2,
  explanation: `Normal neonatal heart rate ranges between 120–160 bpm.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which maternal condition is most commonly associated with postpartum hemorrhage?',
  options: [
    'Prolonged labor',
    'Uterine atony',
    'Multiple gestation',
    'All of the above'
  ],
  correct: 3,
  explanation: `All listed conditions increase the risk of postpartum hemorrhage.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended first-line drug for pediatric status epilepticus is:',
  options: [
    'Phenobarbitone',
    'Lorazepam',
    'Phenytoin',
    'Valproate'
  ],
  correct: 1,
  explanation: `Lorazepam is the preferred initial drug for status epilepticus in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal respiratory rate for a toddler is:',
  options: [
    '20–30/min',
    '24–40/min',
    '30–50/min',
    '40–60/min'
  ],
  correct: 1,
  explanation: `Normal respiratory rate for toddlers ranges from 24–40 breaths per minute.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing action for an infant with suspected sepsis is:',
  options: [
    'Start IV antibiotics immediately',
    'Obtain blood cultures and start IV antibiotics',
    'Provide phototherapy',
    'Start oral fluids only'
  ],
  correct: 1,
  explanation: `Blood cultures should be obtained before starting IV antibiotics for effective treatment.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which maternal position is recommended to prevent supine hypotension during labor?',
  options: [
    'Supine',
    'Left lateral',
    'High Fowler’s',
    'Lithotomy'
  ],
  correct: 1,
  explanation: `Left lateral recumbent prevents compression of the inferior vena cava and maintains blood flow.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first-line treatment for mild dehydration in children is:',
  options: [
    'IV fluids (Plan C)',
    'Oral rehydration solution (Plan A)',
    'Immediate blood transfusion',
    'Diuretics'
  ],
  correct: 1,
  explanation: `Plan A ORS therapy is used for mild dehydration in children.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which of the following is an early sign of pediatric shock?',
  options: [
    'Bradycardia',
    'Tachycardia',
    'Hypertension',
    'Oliguria'
  ],
  correct: 1,
  explanation: `Tachycardia is often the first detectable sign of shock before hypotension occurs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The preferred route for emergency administration of epinephrine in children is:',
  options: [
    'Oral',
    'IM',
    'Subcutaneous',
    'IV only'
  ],
  correct: 1,
  explanation: `IM injection is the recommended route for rapid and safe delivery of epinephrine in anaphylaxis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended position for a post-cesarean section patient during early recovery is:',
  options: [
    'Supine with legs elevated',
    'High Fowler’s',
    'Side-lying with support',
    'Trendelenburg'
  ],
  correct: 2,
  explanation: `Side-lying position promotes comfort and reduces pressure on the surgical site.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The most common cause of neonatal respiratory distress is:',
  options: [
    'Meconium aspiration',
    'Prematurity and surfactant deficiency',
    'Congenital heart disease',
    'Infection'
  ],
  correct: 1,
  explanation: `Premature infants often develop respiratory distress syndrome due to lack of surfactant.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing action in suspected neonatal sepsis is:',
  options: [
    'Start IV antibiotics immediately',
    'Obtain blood cultures and start IV antibiotics',
    'Observe for 24 hours',
    'Start oral antibiotics only'
  ],
  correct: 1,
  explanation: `Blood cultures must be obtained prior to starting IV antibiotics for effective management.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which neonatal condition requires urgent phototherapy?',
  options: [
    'Hypoglycemia',
    'Hyperbilirubinemia',
    'Respiratory distress',
    'Sepsis'
  ],
  correct: 1,
  explanation: `Phototherapy reduces bilirubin levels and prevents kernicterus.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal range of heart rate in a newborn is:',
  options: [
    '80–100 bpm',
    '100–120 bpm',
    '120–160 bpm',
    '160–180 bpm'
  ],
  correct: 2,
  explanation: `Normal neonatal heart rate is 120–160 beats per minute.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended first-line treatment for pediatric anaphylaxis is:',
  options: [
    'Oxygen therapy only',
    'Antihistamines',
    'Epinephrine IM',
    'Corticosteroids'
  ],
  correct: 2,
  explanation: `IM epinephrine is the life-saving first-line treatment.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which maternal position improves uteroplacental blood flow during labor?',
  options: [
    'Supine',
    'Left lateral recumbent',
    'High Fowler’s',
    'Lithotomy'
  ],
  correct: 1,
  explanation: `Left lateral recumbent reduces vena cava compression and improves fetal oxygenation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing action in postpartum hemorrhage due to uterine atony is:',
  options: [
    'Massage the uterus',
    'Administer sedatives',
    'Start IV antibiotics',
    'Observe only'
  ],
  correct: 0,
  explanation: `Uterine massage stimulates contraction and is the initial management step.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The ideal timing to initiate breastfeeding is:',
  options: [
    'Within 1 hour of birth',
    'After 12 hours',
    'After 24 hours',
    'After 48 hours'
  ],
  correct: 0,
  explanation: `Early initiation within the first hour enhances immunity and bonding.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The preferred site for IM injection in toddlers is:',
  options: [
    'Deltoid',
    'Vastus lateralis',
    'Gluteus maximus',
    'Dorsogluteal region'
  ],
  correct: 1,
  explanation: `Vastus lateralis is safest for toddlers, reducing risk of nerve injury.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which intervention reduces neonatal hypothermia in preterm infants?',
  options: [
    'Immediate bathing',
    'Kangaroo Mother Care',
    'Cold ambient temperature',
    'Wrapping in dry cloth only'
  ],
  correct: 1,
  explanation: `Skin-to-skin contact provides thermal regulation and promotes survival.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal respiratory rate for a newborn is:',
  options: [
    '30–40/min',
    '40–60/min',
    '50–70/min',
    '20–30/min'
  ],
  correct: 1,
  explanation: `Normal newborn respiratory rate ranges from 40–60 breaths per minute.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing action for a child with febrile seizure is:',
  options: [
    'Maintain airway and safe position',
    'Administer antipyretics immediately',
    'Start IV fluids',
    'Give anticonvulsants only'
  ],
  correct: 0,
  explanation: `Airway and safety are priorities during a seizure; medications follow if needed.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which is the earliest sign of hypoglycemia in neonates?',
  options: [
    'Seizures',
    'Jitteriness',
    'Lethargy',
    'Apnea'
  ],
  correct: 1,
  explanation: `Jitteriness is often the first detectable sign of low blood sugar in newborns.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The recommended IV fluid for resuscitation in pediatric shock is:',
  options: [
    'Dextrose 5%',
    'Ringer lactate or normal saline',
    'Half-normal saline',
    'Dextrose 10%'
  ],
  correct: 1,
  explanation: `Isotonic fluids like Ringer lactate or normal saline restore circulating volume rapidly.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The primary intervention to prevent neonatal jaundice complications is:',
  options: [
    'Oral glucose',
    'Phototherapy',
    'IV antibiotics',
    'Delayed cord clamping'
  ],
  correct: 1,
  explanation: `Phototherapy reduces bilirubin levels and prevents neurotoxicity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The normal fetal heart rate is:',
  options: [
    '80–100 bpm',
    '110–160 bpm',
    '160–180 bpm',
    '90–120 bpm'
  ],
  correct: 1,
  explanation: `Normal fetal heart rate ranges from 110–160 beats per minute.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'The first nursing action for suspected neonatal sepsis is:',
  options: [
    'Observe for 24 hours',
    'Obtain blood cultures and start IV antibiotics',
    'Start oral antibiotics only',
    'Provide phototherapy'
  ],
  correct: 1,
  explanation: `Blood cultures must be obtained before starting IV antibiotics for effective treatment.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Clinical Nursing',
  question: 'Which maternal condition increases risk of preterm labor?',
  options: [
    'Preeclampsia',
    'Placenta previa',
    'Multiple gestation',
    'All of the above'
  ],
  correct: 3,
  explanation: `All listed conditions are risk factors for preterm labor.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'What is the main goal of RMNCH+A programs?',
  options: [
    'Reduce maternal and child mortality',
    'Promote adult literacy',
    'Prevent infectious diseases in elderly',
    'Increase hospital bed capacity'
  ],
  correct: 0,
  explanation: `RMNCH+A (Reproductive, Maternal, Newborn, Child, and Adolescent Health) focuses on reducing maternal and child morbidity and mortality.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which vaccine is part of the national immunization schedule at birth?',
  options: [
    'BCG',
    'Measles',
    'DPT',
    'Polio (OPV) only at 6 weeks'
  ],
  correct: 0,
  explanation: `BCG is administered at birth to prevent severe forms of tuberculosis in infants.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The primary purpose of Janani Suraksha Yojana (JSY) is:',
  options: [
    'Promote institutional deliveries',
    'Provide contraceptives to women',
    'Promote child vaccination',
    'Prevent anemia in adolescent girls'
  ],
  correct: 0,
  explanation: `JSY is a conditional cash transfer scheme to encourage institutional deliveries and reduce maternal mortality.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a key strategy in community-based management of malnutrition?',
  options: [
    'Growth monitoring and promotion',
    'Hospitalization of all malnourished children',
    'Daily vitamin injections',
    'Restrict breastfeeding'
  ],
  correct: 0,
  explanation: `Regular growth monitoring helps early identification and community-based management of malnutrition.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'What is the main objective of the National Health Mission (NHM)?',
  options: [
    'Strengthen healthcare infrastructure and primary care',
    'Provide free private health insurance',
    'Promote traditional medicine only',
    'Reduce the number of hospitals'
  ],
  correct: 0,
  explanation: `NHM aims to improve access to quality healthcare services, especially in rural and underserved areas.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which strategy is used to prevent vector-borne diseases like malaria?',
  options: [
    'Use of insecticide-treated nets',
    'Daily multivitamins',
    'Wearing warm clothing',
    'Mass antibiotic distribution'
  ],
  correct: 0,
  explanation: `Insecticide-treated nets prevent mosquito bites and reduce malaria transmission.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'What is the primary purpose of the Pulse Polio program?',
  options: [
    'Eliminate polio by immunizing all children',
    'Treat all children with polio',
    'Provide nutrition to infants',
    'Promote institutional deliveries'
  ],
  correct: 0,
  explanation: `Pulse Polio aims to eradicate poliomyelitis through mass immunization campaigns.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an example of a community-level health indicator?',
  options: [
    'Infant mortality rate',
    'Patient blood pressure in hospital',
    'Surgical success rate',
    'Hospital bed occupancy'
  ],
  correct: 0,
  explanation: `Infant mortality rate reflects overall community health and effectiveness of health programs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which approach focuses on empowering women in health decision-making?',
  options: [
    'Community mobilization',
    'Vertical health programs',
    'Hospital-based care',
    'Curative approach only'
  ],
  correct: 0,
  explanation: `Community mobilization engages women and communities in planning and decision-making for better health outcomes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The primary purpose of Integrated Child Development Services (ICDS) is:',
  options: [
    'Promote child growth and nutrition',
    'Provide free school education',
    'Immunize only',
    'Build hospitals'
  ],
  correct: 0,
  explanation: `ICDS provides supplementary nutrition, growth monitoring, health, and early education services to children under 6 years.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is the main vector of dengue fever?',
  options: [
    'Anopheles mosquito',
    'Aedes aegypti',
    'Culex mosquito',
    'Sandfly'
  ],
  correct: 1,
  explanation: `Aedes aegypti is the primary vector transmitting dengue, chikungunya, and Zika viruses.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The main goal of Janani Shishu Suraksha Karyakram (JSSK) is:',
  options: [
    'Provide free delivery and neonatal care',
    'Promote adult vaccination',
    'Provide family planning only',
    'Improve hospital management'
  ],
  correct: 0,
  explanation: `JSSK ensures free entitlements for pregnant women and sick neonates, including delivery, transport, and medicines.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which health indicator reflects maternal health status in a community?',
  options: [
    'Maternal mortality ratio',
    'Infant mortality rate',
    'Life expectancy',
    'Underweight prevalence'
  ],
  correct: 0,
  explanation: `Maternal mortality ratio indicates the risk associated with pregnancy and childbirth in the population.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The main goal of the National AIDS Control Program (NACP) is:',
  options: [
    'Reduce HIV transmission and improve care',
    'Promote general nutrition',
    'Prevent malaria',
    'Provide maternal care'
  ],
  correct: 0,
  explanation: `NACP aims to prevent HIV spread and provide treatment, care, and support to infected individuals.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an important strategy for controlling tuberculosis at the community level?',
  options: [
    'DOTS (Directly Observed Treatment, Short-course)',
    'Mass vaccination with BCG at age 10',
    'Daily antibiotics for all residents',
    'Quarantine of entire village'
  ],
  correct: 0,
  explanation: `DOTS ensures adherence to TB treatment and reduces drug resistance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The main aim of Swachh Bharat Abhiyan in health context is:',
  options: [
    'Improve sanitation and hygiene to prevent diseases',
    'Increase hospital beds',
    'Promote traditional medicine',
    'Provide free medicines'
  ],
  correct: 0,
  explanation: `Sanitation and hygiene improvements prevent communicable diseases and improve public health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an example of primary prevention in community health?',
  options: [
    'Immunization',
    'Screening for hypertension',
    'Treatment of diabetes',
    'Surgical intervention'
  ],
  correct: 0,
  explanation: `Primary prevention aims to prevent disease occurrence, e.g., immunization.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program focuses on improving adolescent health in India?',
  options: [
    'Rashtriya Kishor Swasthya Karyakram (RKSK)',
    'Janani Suraksha Yojana',
    'National AIDS Control Program',
    'Polio Eradication Program'
  ],
  correct: 0,
  explanation: `RKSK addresses adolescent health including nutrition, reproductive health, mental health, and substance abuse.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an important component of community-based health education?',
  options: [
    'Awareness campaigns on hygiene and nutrition',
    'Surgery in hospitals',
    'Prescription of antibiotics',
    'Lab testing only'
  ],
  correct: 0,
  explanation: `Health education empowers communities to adopt healthy behaviors and prevent diseases.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides conditional cash incentives for institutional deliveries?',
  options: [
    'Janani Suraksha Yojana (JSY)',
    'Rashtriya Swasthya Bima Yojana',
    'ICDS',
    'Ayushman Bharat'
  ],
  correct: 0,
  explanation: `JSY provides financial incentives to encourage safe institutional deliveries.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a key feature of the National Vector Borne Disease Control Program (NVBDCP)?',
  options: [
    'Prevention and control of malaria, dengue, and chikungunya',
    'Providing institutional deliveries',
    'Promoting maternal nutrition',
    'Vaccination against tuberculosis'
  ],
  correct: 0,
  explanation: `NVBDCP focuses on surveillance, prevention, and control of vector-borne diseases like malaria, dengue, chikungunya, and filariasis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which is the main purpose of the National Deworming Day program?',
  options: [
    'Prevent intestinal worm infestation in children',
    'Provide free milk',
    'Promote vaccination',
    'Provide financial aid to women'
  ],
  correct: 0,
  explanation: `National Deworming Day aims to deworm all children aged 1–19 years to improve health and nutrition.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator is used to measure child health in a community?',
  options: [
    'Under-five mortality rate',
    'Maternal mortality ratio',
    'Life expectancy at birth',
    'Adult literacy rate'
  ],
  correct: 0,
  explanation: `Under-five mortality rate reflects the overall health and survival of children in a community.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The main goal of the Mid-Day Meal Scheme is:',
  options: [
    'Improve nutrition and school attendance',
    'Provide free uniforms',
    'Reduce child labor',
    'Promote sports'
  ],
  correct: 0,
  explanation: `Mid-Day Meal Scheme aims to reduce malnutrition and encourage school enrollment.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is considered a secondary prevention strategy?',
  options: [
    'Screening for hypertension',
    'Vaccination',
    'Promotion of handwashing',
    'Providing iron supplements'
  ],
  correct: 0,
  explanation: `Secondary prevention detects disease early to prevent complications, e.g., hypertension screening.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides health insurance coverage to economically vulnerable families?',
  options: [
    'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    'Janani Suraksha Yojana',
    'Rashtriya Swasthya Bima Yojana',
    'ICDS'
  ],
  correct: 0,
  explanation: `PM-JAY provides cashless hospitalization coverage to poor and vulnerable families.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which strategy is essential to control malaria in endemic areas?',
  options: [
    'Use of insecticide-treated nets and indoor residual spraying',
    'Daily vitamin supplementation',
    'Frequent bathing',
    'Regular antibiotics'
  ],
  correct: 0,
  explanation: `Vector control through ITNs and IRS is critical for malaria prevention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which is the primary focus of National Leprosy Eradication Program (NLEP)?',
  options: [
    'Early detection and treatment of leprosy cases',
    'Promoting maternal health',
    'Preventing malnutrition',
    'Controlling polio'
  ],
  correct: 0,
  explanation: `NLEP aims to detect leprosy cases early and provide multidrug therapy to prevent disability.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an example of tertiary prevention?',
  options: [
    'Rehabilitation after stroke',
    'Vaccination',
    'Screening for diabetes',
    'Health education on hygiene'
  ],
  correct: 0,
  explanation: `Tertiary prevention focuses on reducing complications and disability after disease occurs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The main purpose of the National Iron Plus Initiative (NIPI) is:',
  options: [
    'Prevent anemia across all age groups',
    'Provide vitamin A supplementation',
    'Control malaria',
    'Promote institutional deliveries'
  ],
  correct: 0,
  explanation: `NIPI targets anemia prevention through iron and folic acid supplementation across life stages.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which health worker primarily implements community health programs in villages?',
  options: [
    'ASHA (Accredited Social Health Activist)',
    'Staff Nurse in hospital',
    'Physician',
    'Pharmacist'
  ],
  correct: 0,
  explanation: `ASHAs are frontline health workers responsible for health education, immunization, and referral in communities.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which disease is targeted under the National Filariasis Elimination Program?',
  options: [
    'Lymphatic filariasis',
    'Malaria',
    'Dengue',
    'Tuberculosis'
  ],
  correct: 0,
  explanation: `The program aims to eliminate lymphatic filariasis through mass drug administration and vector control.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator reflects nutritional status in children under 5?',
  options: [
    'Stunting and wasting',
    'Blood pressure',
    'Heart rate',
    'Vaccination status'
  ],
  correct: 0,
  explanation: `Stunting and wasting indicate chronic and acute malnutrition in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program focuses on reducing iodine deficiency disorders?',
  options: [
    'National Iodine Deficiency Disorders Control Program',
    'National TB Program',
    'Rashtriya Kishor Swasthya Karyakram',
    'Janani Suraksha Yojana'
  ],
  correct: 0,
  explanation: `This program ensures universal salt iodization to prevent IDDs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a common indicator for maternal health monitoring?',
  options: [
    'Antenatal care coverage',
    'Child vaccination rate',
    'Life expectancy',
    'Hospital bed density'
  ],
  correct: 0,
  explanation: `Antenatal care coverage reflects maternal access to healthcare services.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which public health measure is effective for controlling diarrheal diseases in communities?',
  options: [
    'Safe water and sanitation',
    'Vitamin supplementation',
    'Hospitalization of all children',
    'Daily deworming only'
  ],
  correct: 0,
  explanation: `Safe water, sanitation, and hygiene prevent transmission of diarrheal pathogens.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program aims to reduce neonatal and maternal mortality through home visits?',
  options: [
    'Home-Based Newborn Care (HBNC)',
    'National Polio Program',
    'Ayushman Bharat PM-JAY',
    'National Iron Plus Initiative'
  ],
  correct: 0,
  explanation: `HBNC involves trained health workers visiting newborns and mothers at home to provide care and early detection of complications.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which is a core objective of the National Health Mission (NHM)?',
  options: [
    'Strengthen primary healthcare and reduce health disparities',
    'Provide free tertiary care in private hospitals',
    'Promote only curative services',
    'Build medical colleges in urban areas only'
  ],
  correct: 0,
  explanation: `NHM focuses on strengthening primary healthcare, improving accessibility, and reducing inequalities.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator measures adolescent health outcomes in a population?',
  options: [
    'Teenage pregnancy rate',
    'Infant mortality rate',
    'Maternal mortality ratio',
    'Hospital bed density'
  ],
  correct: 0,
  explanation: `Teenage pregnancy rate reflects reproductive health risks among adolescents.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which intervention is part of primary healthcare in rural communities?',
  options: [
    'Health education and immunization',
    'Open-heart surgery',
    'Chemotherapy',
    'Dialysis only'
  ],
  correct: 0,
  explanation: `Primary healthcare includes preventive, promotive, and basic curative services at the community level.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a key strategy for tuberculosis control in India?',
  options: [
    'DOTS (Directly Observed Treatment, Short-course)',
    'Mass BCG vaccination in adults',
    'Daily antibiotics for all',
    'Isolation of all patients'
  ],
  correct: 0,
  explanation: `DOTS ensures adherence to TB treatment and prevents drug resistance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'The main goal of Rashtriya Bal Swasthya Karyakram (RBSK) is:',
  options: [
    'Early identification and intervention for children 0–18 years',
    'Provide maternity benefits',
    'Promote adult vaccination',
    'Eliminate malaria'
  ],
  correct: 0,
  explanation: `RBSK focuses on screening children for defects, diseases, deficiencies, and developmental delays and providing early intervention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program targets adolescent nutrition and anemia prevention?',
  options: [
    'Weekly Iron and Folic Acid Supplementation (WIFS)',
    'National Deworming Day',
    'ICDS',
    'JSY'
  ],
  correct: 0,
  explanation: `WIFS provides iron and folic acid supplements to adolescents to prevent anemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which vector control measure is effective in controlling dengue transmission?',
  options: [
    'Elimination of stagnant water',
    'Daily multivitamins',
    'Hospitalization of patients only',
    'Using antibiotics in community'
  ],
  correct: 0,
  explanation: `Aedes mosquitoes breed in stagnant water; eliminating breeding sites reduces dengue incidence.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides financial incentives for promoting family planning?',
  options: [
    'Family Planning Incentive Scheme',
    'Janani Suraksha Yojana',
    'Ayushman Bharat PM-JAY',
    'Mid-Day Meal Scheme'
  ],
  correct: 0,
  explanation: `The Family Planning Incentive Scheme provides rewards to encourage adoption of contraception methods.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which is the primary focus of the National Leprosy Eradication Program?',
  options: [
    'Early detection and multidrug therapy',
    'Malaria control',
    'Maternal care',
    'Nutrition supplementation'
  ],
  correct: 0,
  explanation: `NLEP aims to detect leprosy early and treat patients to prevent disability.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a key strategy of the National Mental Health Program?',
  options: [
    'Integrate mental health into primary healthcare',
    'Provide only tertiary care',
    'Screen for anemia',
    'Promote physical fitness only'
  ],
  correct: 0,
  explanation: `Integration into primary care improves accessibility and early treatment of mental disorders.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is the main goal of the National Tobacco Control Program?',
  options: [
    'Reduce tobacco use and prevent tobacco-related diseases',
    'Promote alcohol consumption',
    'Increase cigarette taxation only',
    'Provide tobacco to rural areas'
  ],
  correct: 0,
  explanation: `The program aims to reduce prevalence of tobacco use through awareness, cessation support, and legislation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides supplementary nutrition and health education to children under six years?',
  options: [
    'Integrated Child Development Services (ICDS)',
    'Ayushman Bharat',
    'Janani Suraksha Yojana',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `ICDS provides nutrition, health education, and early childhood development services.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an essential component of primary healthcare?',
  options: [
    'Preventive, promotive, curative, and rehabilitative services',
    'Only tertiary care',
    'Only hospital-based surgery',
    'Pharmaceutical manufacturing'
  ],
  correct: 0,
  explanation: `Primary healthcare encompasses comprehensive services including prevention, promotion, treatment, and rehabilitation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following programs addresses reproductive health in adolescents?',
  options: [
    'Rashtriya Kishor Swasthya Karyakram (RKSK)',
    'Janani Suraksha Yojana',
    'National Polio Program',
    'National Iron Plus Initiative'
  ],
  correct: 0,
  explanation: `RKSK focuses on adolescent health including nutrition, reproductive health, mental health, and substance abuse prevention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides conditional cash assistance to pregnant women for safe delivery?',
  options: [
    'Janani Suraksha Yojana (JSY)',
    'Ayushman Bharat',
    'Mid-Day Meal Scheme',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `JSY incentivizes institutional deliveries to reduce maternal and neonatal mortality.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program focuses on reducing iodine deficiency disorders in the population?',
  options: [
    'National Iodine Deficiency Disorders Control Program',
    'National Malaria Control Program',
    'National AIDS Control Program',
    'Rashtriya Kishor Swasthya Karyakram'
  ],
  correct: 0,
  explanation: `This program ensures universal salt iodization to prevent IDDs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator is used to monitor maternal health in a community?',
  options: [
    'Antenatal care coverage',
    'Under-five mortality rate',
    'Adult literacy rate',
    'Hospital bed density'
  ],
  correct: 0,
  explanation: `Antenatal care coverage reflects access to maternal health services and preventive care.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an effective community-level intervention to prevent diarrheal diseases?',
  options: [
    'Safe water, sanitation, and hygiene practices',
    'Daily vitamin supplementation',
    'Hospitalization of all children',
    'Mass antibiotics distribution'
  ],
  correct: 0,
  explanation: `Safe water, sanitation, and hygiene prevent diarrheal disease transmission in communities.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program includes home visits for neonatal care to reduce mortality?',
  options: [
    'Home-Based Newborn Care (HBNC)',
    'National TB Program',
    'Ayushman Bharat PM-JAY',
    'Mid-Day Meal Scheme'
  ],
  correct: 0,
  explanation: `HBNC involves trained health workers visiting mothers and newborns to provide care and detect complications early.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator reflects adolescent reproductive health in a population?',
  options: [
    'Teenage pregnancy rate',
    'Infant mortality rate',
    'Maternal mortality ratio',
    'Hospital bed density'
  ],
  correct: 0,
  explanation: `Teenage pregnancy rate indicates reproductive health risks among adolescents.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is considered a primary prevention strategy?',
  options: [
    'Immunization',
    'Screening for diabetes',
    'Rehabilitation after stroke',
    'Treatment of chronic disease'
  ],
  correct: 0,
  explanation: `Primary prevention aims to prevent disease occurrence, such as through vaccination.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program aims to reduce malnutrition in children under six years?',
  options: [
    'Integrated Child Development Services (ICDS)',
    'National TB Program',
    'Ayushman Bharat PM-JAY',
    'Janani Suraksha Yojana'
  ],
  correct: 0,
  explanation: `ICDS provides supplementary nutrition, health education, and early childhood care to prevent malnutrition.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides financial support for transportation of pregnant women to health facilities?',
  options: [
    'Janani Shishu Suraksha Karyakram (JSSK)',
    'Ayushman Bharat',
    'Mid-Day Meal Scheme',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `JSSK ensures free transport, delivery, and care for pregnant women and sick newborns.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a key strategy for malaria control at the community level?',
  options: [
    'Indoor residual spraying and insecticide-treated nets',
    'Daily iron supplementation',
    'Hospitalization of all patients',
    'Mass vitamin A distribution'
  ],
  correct: 0,
  explanation: `Vector control measures reduce malaria transmission in endemic areas.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program focuses on HIV prevention, care, and support?',
  options: [
    'National AIDS Control Program (NACP)',
    'National Leprosy Eradication Program',
    'Rashtriya Bal Swasthya Karyakram',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `NACP aims to reduce HIV transmission and provide treatment, care, and support.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which intervention reduces neonatal mortality in rural communities?',
  options: [
    'Home-Based Newborn Care (HBNC)',
    'Hospital-based surgery only',
    'Mass vaccination of adults only',
    'Daily vitamin injections for all children'
  ],
  correct: 0,
  explanation: `HBNC ensures early detection and management of neonatal complications at home.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following programs addresses anemia in adolescents?',
  options: [
    'Weekly Iron and Folic Acid Supplementation (WIFS)',
    'Janani Suraksha Yojana',
    'National Polio Program',
    'Mid-Day Meal Scheme'
  ],
  correct: 0,
  explanation: `WIFS provides iron and folic acid to adolescents to prevent anemia and promote growth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which health worker is primarily responsible for immunization and health promotion at the village level?',
  options: [
    'ASHA (Accredited Social Health Activist)',
    'Hospital physician',
    'Staff Nurse in urban hospital',
    'Pharmacist'
  ],
  correct: 0,
  explanation: `ASHAs mobilize communities, provide health education, and assist in vaccination and referral.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an example of tertiary prevention?',
  options: [
    'Rehabilitation after stroke',
    'Vaccination',
    'Screening for hypertension',
    'Health education on hygiene'
  ],
  correct: 0,
  explanation: `Tertiary prevention focuses on reducing complications and disability after disease occurrence.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator reflects the nutritional status of children under five years?',
  options: [
    'Stunting and wasting',
    'Maternal mortality ratio',
    'Infant mortality rate',
    'Life expectancy'
  ],
  correct: 0,
  explanation: `Stunting and wasting indicate chronic and acute malnutrition, respectively.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program focuses on iodine deficiency prevention in India?',
  options: [
    'National Iodine Deficiency Disorders Control Program',
    'National TB Program',
    'National AIDS Control Program',
    'Rashtriya Kishor Swasthya Karyakram'
  ],
  correct: 0,
  explanation: `Universal salt iodization under this program prevents iodine deficiency disorders.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is a key feature of the National Vector Borne Disease Control Program?',
  options: [
    'Control of malaria, dengue, chikungunya, and filariasis',
    'Institutional deliveries',
    'Maternal nutrition only',
    'Vaccination of all adults'
  ],
  correct: 0,
  explanation: `NVBDCP focuses on surveillance, prevention, and control of major vector-borne diseases.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which intervention is effective for preventing diarrheal diseases at the community level?',
  options: [
    'Safe water, sanitation, and hygiene practices',
    'Daily vitamin supplementation',
    'Hospitalization only',
    'Mass antibiotic distribution'
  ],
  correct: 0,
  explanation: `Safe water, sanitation, and hygiene reduce the incidence of diarrheal diseases.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following programs targets reproductive and maternal health in adolescents?',
  options: [
    'Rashtriya Kishor Swasthya Karyakram (RKSK)',
    'Janani Suraksha Yojana',
    'National Polio Program',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `RKSK focuses on adolescent health including reproductive health, nutrition, and mental well-being.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which indicator reflects maternal health service utilization?',
  options: [
    'Antenatal care coverage',
    'Infant mortality rate',
    'Child vaccination rate',
    'Adult literacy rate'
  ],
  correct: 0,
  explanation: `Antenatal care coverage measures the proportion of pregnant women accessing maternal healthcare.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme provides free nutrition, health, and early education services to children under 6 years?',
  options: [
    'Integrated Child Development Services (ICDS)',
    'Ayushman Bharat PM-JAY',
    'Janani Suraksha Yojana',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `ICDS provides integrated services for child health, growth, and development.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program provides conditional cash incentives to pregnant women for institutional delivery?',
  options: [
    'Janani Suraksha Yojana (JSY)',
    'Ayushman Bharat',
    'Mid-Day Meal Scheme',
    'National Deworming Day'
  ],
  correct: 0,
  explanation: `JSY encourages institutional deliveries to improve maternal and neonatal outcomes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is an important vector-borne disease in India controlled through NVBDCP?',
  options: [
    'Dengue',
    'Tuberculosis',
    'Polio',
    'HIV/AIDS'
  ],
  correct: 0,
  explanation: `Dengue is controlled by vector management strategies under NVBDCP.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which strategy is essential for controlling lymphatic filariasis?',
  options: [
    'Mass drug administration and vector control',
    'Institutional delivery promotion',
    'Daily vitamin supplementation',
    'Hospital-based surgery'
  ],
  correct: 0,
  explanation: `MDA and vector control prevent transmission and reduce disease burden.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following programs focuses on reducing adolescent anemia and promoting nutrition?',
  options: [
    'Weekly Iron and Folic Acid Supplementation (WIFS)',
    'National TB Program',
    'National AIDS Control Program',
    'Mid-Day Meal Scheme'
  ],
  correct: 0,
  explanation: `WIFS provides iron and folic acid to adolescents to prevent anemia and improve growth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program provides early screening and intervention for children with developmental delays?',
  options: [
    'Rashtriya Bal Swasthya Karyakram (RBSK)',
    'Janani Suraksha Yojana',
    'National Polio Program',
    'National Iron Plus Initiative'
  ],
  correct: 0,
  explanation: `RBSK screens children for defects, diseases, deficiencies, and developmental delays, ensuring early intervention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which program aims to prevent and control tobacco use in India?',
  options: [
    'National Tobacco Control Program (NTCP)',
    'Janani Suraksha Yojana',
    'Ayushman Bharat',
    'National Iron Plus Initiative'
  ],
  correct: 0,
  explanation: `NTCP implements policies, awareness campaigns, and cessation programs to reduce tobacco-related morbidity and mortality.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which of the following is considered a secondary prevention activity?',
  options: [
    'Screening for hypertension',
    'Vaccination',
    'Health education on hygiene',
    'Nutrition supplementation'
  ],
  correct: 0,
  explanation: `Secondary prevention identifies disease early to prevent progression or complications.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which public health measure helps prevent diarrheal diseases in communities?',
  options: [
    'Safe water, sanitation, and hygiene (WASH)',
    'Hospitalization of patients only',
    'Mass vitamin A supplementation',
    'Distribution of antibiotics to all'
  ],
  correct: 0,
  explanation: `WASH interventions are the most effective method to prevent diarrheal infections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Community & Public Health Nursing',
  question: 'Which scheme focuses on early childhood development and maternal nutrition?',
  options: [
    'Integrated Child Development Services (ICDS)',
    'Ayushman Bharat PM-JAY',
    'National Deworming Day',
    'Janani Suraksha Yojana'
  ],
  correct: 0,
  explanation: `ICDS integrates nutrition, health, and early education for children and mothers.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is primarily responsible for detoxification and metabolism of drugs?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver metabolizes and detoxifies drugs and other xenobiotics through enzymatic processes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which blood cells are primarily responsible for oxygen transport?',
  options: [
    'Red blood cells (RBCs)',
    'White blood cells (WBCs)',
    'Platelets',
    'Lymphocytes'
  ],
  correct: 0,
  explanation: `RBCs contain hemoglobin which binds and carries oxygen to tissues.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is fat-soluble and important for vision and immune function?',
  options: [
    'Vitamin A',
    'Vitamin B12',
    'Vitamin C',
    'Vitamin B6'
  ],
  correct: 0,
  explanation: `Vitamin A is fat-soluble and essential for vision, epithelial integrity, and immune function.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which structure in the cell generates energy in the form of ATP?',
  options: [
    'Mitochondria',
    'Nucleus',
    'Ribosome',
    'Golgi apparatus'
  ],
  correct: 0,
  explanation: `Mitochondria are the site of cellular respiration and ATP production.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is essential for hemoglobin synthesis?',
  options: [
    'Iron',
    'Calcium',
    'Magnesium',
    'Potassium'
  ],
  correct: 0,
  explanation: `Iron is a core component of hemoglobin and is necessary for oxygen transport.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is responsible for maintaining electrolyte and fluid balance?',
  options: [
    'Kidney',
    'Liver',
    'Pancreas',
    'Heart'
  ],
  correct: 0,
  explanation: `Kidneys regulate water, electrolytes, and acid-base balance through filtration and reabsorption.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which macronutrient is the primary source of energy for the body?',
  options: [
    'Carbohydrates',
    'Proteins',
    'Fats',
    'Vitamins'
  ],
  correct: 0,
  explanation: `Carbohydrates are the main source of energy, providing glucose for cellular metabolism.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the brain controls balance and coordination?',
  options: [
    'Cerebellum',
    'Medulla oblongata',
    'Cerebrum',
    'Hypothalamus'
  ],
  correct: 0,
  explanation: `The cerebellum regulates muscle coordination, posture, and balance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which component of blood is involved in clotting?',
  options: [
    'Platelets',
    'Red blood cells',
    'Lymphocytes',
    'Plasma proteins'
  ],
  correct: 0,
  explanation: `Platelets aggregate at the site of injury to form a platelet plug and initiate clotting.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is water-soluble and essential for collagen synthesis?',
  options: [
    'Vitamin C',
    'Vitamin A',
    'Vitamin D',
    'Vitamin E'
  ],
  correct: 0,
  explanation: `Vitamin C is water-soluble and critical for collagen formation, wound healing, and antioxidant activity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates blood glucose by lowering it?',
  options: [
    'Insulin',
    'Glucagon',
    'Cortisol',
    'Adrenaline'
  ],
  correct: 0,
  explanation: `Insulin lowers blood glucose by facilitating cellular uptake of glucose.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces bile essential for fat digestion?',
  options: [
    'Liver',
    'Pancreas',
    'Stomach',
    'Gallbladder'
  ],
  correct: 0,
  explanation: `The liver produces bile which emulsifies fats for digestion and absorption.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which macronutrient is essential for tissue repair and enzyme production?',
  options: [
    'Proteins',
    'Carbohydrates',
    'Fats',
    'Minerals'
  ],
  correct: 0,
  explanation: `Proteins provide amino acids necessary for tissue repair, enzyme synthesis, and growth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which blood component is responsible for immunity?',
  options: [
    'White blood cells (WBCs)',
    'Red blood cells',
    'Platelets',
    'Plasma'
  ],
  correct: 0,
  explanation: `WBCs play a key role in defending the body against infections and foreign antigens.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which electrolyte is essential for nerve impulse conduction and muscle contraction?',
  options: [
    'Sodium',
    'Iron',
    'Zinc',
    'Vitamin D'
  ],
  correct: 0,
  explanation: `Sodium plays a critical role in action potential generation and muscle contraction.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the neuron conducts impulses away from the cell body?',
  options: [
    'Axon',
    'Dendrite',
    'Soma',
    'Myelin sheath'
  ],
  correct: 0,
  explanation: `The axon transmits electrical impulses from the neuron to other cells.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ regulates calcium and phosphate metabolism?',
  options: [
    'Parathyroid gland',
    'Pituitary gland',
    'Adrenal gland',
    'Pancreas'
  ],
  correct: 0,
  explanation: `Parathyroid hormone maintains calcium and phosphate levels in blood and bones.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is synthesized in the skin under sunlight exposure?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin K',
    'Vitamin C'
  ],
  correct: 0,
  explanation: `Vitamin D is synthesized in the skin when UV rays convert 7-dehydrocholesterol to cholecalciferol.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ secretes digestive enzymes including amylase, lipase, and proteases?',
  options: [
    'Pancreas',
    'Liver',
    'Stomach',
    'Small intestine'
  ],
  correct: 0,
  explanation: `The pancreas produces digestive enzymes that aid in carbohydrate, fat, and protein digestion.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which of the following is a component of the extracellular matrix important for tissue structure?',
  options: [
    'Collagen',
    'Hemoglobin',
    'Insulin',
    'Myosin'
  ],
  correct: 0,
  explanation: `Collagen provides tensile strength and structure to tissues and connective tissue.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is primarily responsible for excretion of urea?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Skin'
  ],
  correct: 0,
  explanation: `Kidneys filter blood and excrete nitrogenous wastes like urea through urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone increases blood glucose levels?',
  options: [
    'Glucagon',
    'Insulin',
    'Aldosterone',
    'Calcitonin'
  ],
  correct: 0,
  explanation: `Glucagon, secreted by the pancreas, raises blood glucose by stimulating glycogen breakdown.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which macronutrient provides the highest energy per gram?',
  options: [
    'Fat',
    'Carbohydrates',
    'Protein',
    'Vitamin'
  ],
  correct: 0,
  explanation: `Fat provides 9 kcal per gram, more than carbohydrates and proteins which provide 4 kcal/g.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is essential for blood clotting?',
  options: [
    'Vitamin K',
    'Vitamin A',
    'Vitamin D',
    'Vitamin C'
  ],
  correct: 0,
  explanation: `Vitamin K is necessary for synthesis of clotting factors in the liver.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ stores glycogen and releases glucose when needed?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver stores glycogen and releases glucose during fasting to maintain blood glucose levels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of muscle is involuntary and found in internal organs?',
  options: [
    'Smooth muscle',
    'Skeletal muscle',
    'Cardiac muscle',
    'Striated muscle'
  ],
  correct: 0,
  explanation: `Smooth muscle is involuntary and found in the walls of internal organs like intestines and blood vessels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is essential for thyroid hormone synthesis?',
  options: [
    'Iodine',
    'Iron',
    'Calcium',
    'Zinc'
  ],
  correct: 0,
  explanation: `Iodine is required for synthesis of thyroxine and triiodothyronine in the thyroid gland.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which enzyme initiates carbohydrate digestion in the mouth?',
  options: [
    'Salivary amylase',
    'Pepsin',
    'Lipase',
    'Trypsin'
  ],
  correct: 0,
  explanation: `Salivary amylase (ptyalin) breaks down starch into maltose in the oral cavity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates calcium levels by lowering blood calcium?',
  options: [
    'Calcitonin',
    'Parathyroid hormone',
    'Insulin',
    'Aldosterone'
  ],
  correct: 0,
  explanation: `Calcitonin, secreted by the thyroid, lowers blood calcium by promoting deposition in bones.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which blood vessel carries oxygenated blood from the lungs to the heart?',
  options: [
    'Pulmonary vein',
    'Pulmonary artery',
    'Aorta',
    'Superior vena cava'
  ],
  correct: 0,
  explanation: `Pulmonary veins transport oxygen-rich blood from the lungs to the left atrium of the heart.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which macronutrient is essential for muscle growth and repair?',
  options: [
    'Protein',
    'Carbohydrates',
    'Fat',
    'Vitamin C'
  ],
  correct: 0,
  explanation: `Proteins supply amino acids required for tissue repair, enzyme production, and growth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces the hormone erythropoietin to stimulate red blood cell production?',
  options: [
    'Kidney',
    'Liver',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The kidneys secrete erythropoietin in response to low oxygen levels, stimulating RBC production in bone marrow.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the nephron is responsible for filtration of blood?',
  options: [
    'Glomerulus',
    'Loop of Henle',
    'Collecting duct',
    'Proximal tubule'
  ],
  correct: 0,
  explanation: `The glomerulus filters plasma from the blood into the nephron for urine formation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency causes rickets in children?',
  options: [
    'Vitamin D',
    'Vitamin C',
    'Vitamin A',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin D deficiency leads to rickets, causing soft and weak bones in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ synthesizes most plasma proteins?',
  options: [
    'Liver',
    'Kidney',
    'Spleen',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The liver produces albumin and clotting factors which are essential plasma proteins.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of blood vessel carries blood away from the heart?',
  options: [
    'Arteries',
    'Veins',
    'Capillaries',
    'Venules'
  ],
  correct: 0,
  explanation: `Arteries carry oxygenated blood from the heart to body tissues (except pulmonary artery).`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates water balance in the body?',
  options: [
    'Antidiuretic hormone (ADH)',
    'Insulin',
    'Glucagon',
    'Calcitonin'
  ],
  correct: 0,
  explanation: `ADH, secreted by the posterior pituitary, promotes water reabsorption in the kidneys.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces hydrochloric acid for digestion?',
  options: [
    'Stomach',
    'Pancreas',
    'Liver',
    'Small intestine'
  ],
  correct: 0,
  explanation: `Parietal cells in the stomach secrete HCl which helps in protein digestion and kills microbes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of carbohydrate is absorbed directly into the bloodstream after digestion?',
  options: [
    'Monosaccharides',
    'Disaccharides',
    'Polysaccharides',
    'Fiber'
  ],
  correct: 0,
  explanation: `Monosaccharides like glucose are absorbed directly through the intestinal mucosa into the blood.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ regulates acid-base balance and removes metabolic wastes?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Pancreas'
  ],
  correct: 0,
  explanation: `Kidneys excrete hydrogen ions and bicarbonate to maintain acid-base homeostasis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency causes scurvy?',
  options: [
    'Vitamin C',
    'Vitamin A',
    'Vitamin D',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin C deficiency leads to scurvy, causing bleeding gums, bruising, and impaired wound healing.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ stores and releases bile when needed for digestion?',
  options: [
    'Gallbladder',
    'Liver',
    'Pancreas',
    'Small intestine'
  ],
  correct: 0,
  explanation: `The gallbladder stores and concentrates bile produced by the liver, releasing it into the small intestine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is required for oxygen transport in hemoglobin?',
  options: [
    'Iron',
    'Calcium',
    'Magnesium',
    'Potassium'
  ],
  correct: 0,
  explanation: `Iron is a key component of hemoglobin necessary for oxygen binding and transport.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ secretes glucagon to raise blood glucose levels?',
  options: [
    'Pancreas',
    'Liver',
    'Kidney',
    'Adrenal gland'
  ],
  correct: 0,
  explanation: `Alpha cells of the pancreas secrete glucagon, which increases blood glucose by glycogen breakdown.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient is essential for the synthesis of neurotransmitters?',
  options: [
    'Proteins',
    'Carbohydrates',
    'Fats',
    'Vitamins'
  ],
  correct: 0,
  explanation: `Amino acids from proteins are precursors for neurotransmitters like serotonin, dopamine, and norepinephrine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the heart receives oxygenated blood from the lungs?',
  options: [
    'Left atrium',
    'Right atrium',
    'Left ventricle',
    'Right ventricle'
  ],
  correct: 0,
  explanation: `The left atrium receives oxygen-rich blood from the pulmonary veins and sends it to the left ventricle.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is essential for calcium absorption from the intestine?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin K',
    'Vitamin C'
  ],
  correct: 0,
  explanation: `Vitamin D promotes calcium absorption and maintains bone health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which enzyme converts starch into maltose during digestion?',
  options: [
    'Amylase',
    'Lipase',
    'Pepsin',
    'Trypsin'
  ],
  correct: 0,
  explanation: `Amylase, secreted by salivary glands and pancreas, breaks down starch into maltose.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is responsible for synthesizing clotting factors and albumin?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver produces plasma proteins including albumin and clotting factors essential for homeostasis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the nervous system controls voluntary movements?',
  options: [
    'Somatic nervous system',
    'Autonomic nervous system',
    'Sympathetic system',
    'Parasympathetic system'
  ],
  correct: 0,
  explanation: `The somatic nervous system controls voluntary skeletal muscle movements.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ excretes hydrogen ions and maintains acid-base balance?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Pancreas'
  ],
  correct: 0,
  explanation: `Kidneys regulate pH by excreting H+ ions and reabsorbing bicarbonate.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is necessary for thyroid hormone production?',
  options: [
    'Iodine',
    'Iron',
    'Calcium',
    'Zinc'
  ],
  correct: 0,
  explanation: `Iodine is required for synthesis of thyroxine (T4) and triiodothyronine (T3).`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency leads to night blindness?',
  options: [
    'Vitamin A',
    'Vitamin C',
    'Vitamin D',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin A deficiency affects vision in low light, causing night blindness.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of lipid is the main component of cell membranes?',
  options: [
    'Phospholipids',
    'Triglycerides',
    'Cholesterol',
    'Steroids'
  ],
  correct: 0,
  explanation: `Phospholipids form the bilayer structure of cell membranes, providing barrier and fluidity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ stores glycogen and releases glucose when needed?',
  options: [
    'Liver',
    'Muscles',
    'Kidney',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The liver stores glycogen and converts it to glucose to maintain blood sugar levels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which blood cells help in defense against infections?',
  options: [
    'White blood cells',
    'Red blood cells',
    'Platelets',
    'Plasma'
  ],
  correct: 0,
  explanation: `WBCs protect the body from pathogens through phagocytosis and immune response.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient provides 9 kcal per gram, the highest among macronutrients?',
  options: [
    'Fat',
    'Carbohydrates',
    'Proteins',
    'Alcohol'
  ],
  correct: 0,
  explanation: `Fat is the most energy-dense macronutrient providing 9 kcal/g.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the brain controls heartbeat and respiration?',
  options: [
    'Medulla oblongata',
    'Cerebellum',
    'Cerebrum',
    'Hypothalamus'
  ],
  correct: 0,
  explanation: `The medulla oblongata regulates autonomic functions like heart rate, blood pressure, and respiration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone decreases blood calcium by promoting deposition in bones?',
  options: [
    'Calcitonin',
    'Parathyroid hormone',
    'Insulin',
    'Cortisol'
  ],
  correct: 0,
  explanation: `Calcitonin lowers blood calcium by stimulating bone formation and inhibiting osteoclast activity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which structure in the nephron is primarily responsible for reabsorption of nutrients?',
  options: [
    'Proximal convoluted tubule',
    'Distal convoluted tubule',
    'Loop of Henle',
    'Collecting duct'
  ],
  correct: 0,
  explanation: `The proximal tubule reabsorbs glucose, amino acids, salts, and water back into circulation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of muscle is striated and involuntary?',
  options: [
    'Cardiac muscle',
    'Skeletal muscle',
    'Smooth muscle',
    'Connective tissue'
  ],
  correct: 0,
  explanation: `Cardiac muscle is striated and involuntary, found in the heart for pumping blood.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates the fight-or-flight response?',
  options: [
    'Adrenaline',
    'Insulin',
    'Glucagon',
    'Calcitonin'
  ],
  correct: 0,
  explanation: `Adrenaline from adrenal medulla increases heart rate, blood pressure, and energy availability during stress.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is essential for collagen formation and wound healing?',
  options: [
    'Vitamin C',
    'Vitamin D',
    'Vitamin K',
    'Vitamin A'
  ],
  correct: 0,
  explanation: `Vitamin C is necessary for hydroxylation of proline and lysine in collagen synthesis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces bile to emulsify fats?',
  options: [
    'Liver',
    'Pancreas',
    'Gallbladder',
    'Stomach'
  ],
  correct: 0,
  explanation: `The liver produces bile which is stored in the gallbladder and released for fat digestion.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient deficiency causes anemia?',
  options: [
    'Iron',
    'Vitamin A',
    'Vitamin D',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Iron deficiency leads to reduced hemoglobin synthesis, resulting in anemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ stores fat-soluble vitamins?',
  options: [
    'Liver',
    'Kidney',
    'Spleen',
    'Pancreas'
  ],
  correct: 0,
  explanation: `Fat-soluble vitamins (A, D, E, K) are stored primarily in the liver for future use.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which component of the blood transports carbon dioxide back to the lungs?',
  options: [
    'Plasma and red blood cells',
    'White blood cells',
    'Platelets',
    'Lymph'
  ],
  correct: 0,
  explanation: `CO2 is transported dissolved in plasma, bound to hemoglobin, or as bicarbonate ions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ regulates blood pressure through renin secretion?',
  options: [
    'Kidney',
    'Liver',
    'Heart',
    'Adrenal gland'
  ],
  correct: 0,
  explanation: `The kidney secretes renin to activate the renin-angiotensin-aldosterone system, regulating blood pressure.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of carbohydrate is digested most rapidly?',
  options: [
    'Monosaccharides',
    'Disaccharides',
    'Polysaccharides',
    'Fiber'
  ],
  correct: 0,
  explanation: `Monosaccharides like glucose are absorbed directly without further digestion.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which structure in the cell contains genetic material?',
  options: [
    'Nucleus',
    'Mitochondria',
    'Ribosome',
    'Endoplasmic reticulum'
  ],
  correct: 0,
  explanation: `The nucleus stores DNA which controls cellular functions and inheritance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone stimulates red blood cell production?',
  options: [
    'Erythropoietin',
    'Insulin',
    'Glucagon',
    'Thyroxine'
  ],
  correct: 0,
  explanation: `Erythropoietin, secreted by kidneys, stimulates bone marrow to produce RBCs in response to hypoxia.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates the basal metabolic rate?',
  options: [
    'Thyroxine (T4)',
    'Insulin',
    'Glucagon',
    'Cortisol'
  ],
  correct: 0,
  explanation: `Thyroxine increases metabolism in cells, regulating oxygen consumption and energy expenditure.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is essential for vision and epithelial cell integrity?',
  options: [
    'Vitamin A',
    'Vitamin C',
    'Vitamin D',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin A is necessary for rhodopsin formation in the retina and maintaining epithelial tissues.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which electrolyte is the major intracellular cation?',
  options: [
    'Potassium',
    'Sodium',
    'Calcium',
    'Magnesium'
  ],
  correct: 0,
  explanation: `Potassium is predominantly found inside cells and is crucial for nerve conduction and muscle function.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the nephron concentrates urine?',
  options: [
    'Loop of Henle',
    'Proximal tubule',
    'Distal tubule',
    'Bowman’s capsule'
  ],
  correct: 0,
  explanation: `The loop of Henle creates a concentration gradient, allowing water reabsorption and urine concentration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which component of plasma maintains oncotic pressure?',
  options: [
    'Albumin',
    'Globulin',
    'Fibrinogen',
    'Electrolytes'
  ],
  correct: 0,
  explanation: `Albumin is the main plasma protein that maintains osmotic pressure and fluid balance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency causes rickets in children?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin C',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin D deficiency leads to impaired calcium absorption, causing soft bones (rickets) in children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces insulin?',
  options: [
    'Pancreas',
    'Liver',
    'Kidney',
    'Adrenal gland'
  ],
  correct: 0,
  explanation: `Beta cells of the pancreas produce insulin to lower blood glucose levels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient deficiency can lead to goiter?',
  options: [
    'Iodine',
    'Iron',
    'Calcium',
    'Zinc'
  ],
  correct: 0,
  explanation: `Iodine deficiency reduces thyroid hormone synthesis, causing enlargement of the thyroid (goiter).`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency leads to scurvy?',
  options: [
    'Vitamin C',
    'Vitamin A',
    'Vitamin D',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin C deficiency impairs collagen synthesis, causing bleeding gums, bruising, and delayed wound healing.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of blood vessel allows exchange of nutrients and gases with tissues?',
  options: [
    'Capillaries',
    'Arteries',
    'Veins',
    'Venules'
  ],
  correct: 0,
  explanation: `Capillaries have thin walls that facilitate diffusion of oxygen, nutrients, and waste products.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which macronutrient is stored as glycogen in the liver and muscles?',
  options: [
    'Carbohydrates',
    'Proteins',
    'Fats',
    'Vitamins'
  ],
  correct: 0,
  explanation: `Excess glucose is stored as glycogen for future energy needs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone increases blood calcium levels?',
  options: [
    'Parathyroid hormone',
    'Calcitonin',
    'Insulin',
    'Aldosterone'
  ],
  correct: 0,
  explanation: `Parathyroid hormone increases calcium by stimulating bone resorption and renal reabsorption.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces bile stored in the gallbladder?',
  options: [
    'Liver',
    'Pancreas',
    'Stomach',
    'Small intestine'
  ],
  correct: 0,
  explanation: `The liver produces bile, which emulsifies fats, and the gallbladder stores and concentrates it.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is necessary for blood clotting?',
  options: [
    'Vitamin K',
    'Vitamin C',
    'Vitamin D',
    'Vitamin A'
  ],
  correct: 0,
  explanation: `Vitamin K is required for synthesis of prothrombin and other clotting factors.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone controls water reabsorption in the kidneys?',
  options: [
    'Antidiuretic hormone (ADH)',
    'Aldosterone',
    'Cortisol',
    'Insulin'
  ],
  correct: 0,
  explanation: `ADH increases water permeability in the collecting ducts, concentrating urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is the main site of protein digestion?',
  options: [
    'Stomach',
    'Small intestine',
    'Mouth',
    'Liver'
  ],
  correct: 0,
  explanation: `Pepsin in the stomach initiates protein digestion into peptides.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the neuron receives signals from other neurons?',
  options: [
    'Dendrites',
    'Axon',
    'Soma',
    'Myelin sheath'
  ],
  correct: 0,
  explanation: `Dendrites receive incoming signals and transmit them to the cell body.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is essential for oxygen transport in hemoglobin?',
  options: [
    'Iron',
    'Calcium',
    'Potassium',
    'Magnesium'
  ],
  correct: 0,
  explanation: `Iron forms the heme group in hemoglobin, allowing oxygen binding and transport.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates blood pressure and fluid balance through sodium retention?',
  options: [
    'Aldosterone',
    'ADH',
    'Insulin',
    'Glucagon'
  ],
  correct: 0,
  explanation: `Aldosterone increases sodium reabsorption in the kidney, influencing fluid balance and BP.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ excretes urea as a nitrogenous waste product?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Skin'
  ],
  correct: 0,
  explanation: `Kidneys filter urea from the blood and excrete it in urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of muscle is voluntary and striated?',
  options: [
    'Skeletal muscle',
    'Smooth muscle',
    'Cardiac muscle',
    'Connective tissue'
  ],
  correct: 0,
  explanation: `Skeletal muscle is under voluntary control and shows striations.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is essential for bone and teeth formation?',
  options: [
    'Calcium',
    'Iron',
    'Potassium',
    'Zinc'
  ],
  correct: 0,
  explanation: `Calcium is required for hydroxyapatite formation in bones and teeth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces erythropoietin to stimulate RBC production?',
  options: [
    'Kidney',
    'Liver',
    'Spleen',
    'Pancreas'
  ],
  correct: 0,
  explanation: `Kidneys secrete erythropoietin in response to hypoxia, stimulating bone marrow to produce RBCs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient deficiency leads to beri-beri?',
  options: [
    'Vitamin B1 (Thiamine)',
    'Vitamin B12',
    'Vitamin C',
    'Vitamin D'
  ],
  correct: 0,
  explanation: `Thiamine deficiency affects carbohydrate metabolism, causing neurological and cardiac symptoms.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is responsible for the majority of water and electrolyte absorption?',
  options: [
    'Small intestine',
    'Stomach',
    'Large intestine',
    'Kidney'
  ],
  correct: 0,
  explanation: `The small intestine absorbs most nutrients, water, and electrolytes from digested food.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces hydrochloric acid for digestion?',
  options: [
    'Stomach',
    'Liver',
    'Pancreas',
    'Small intestine'
  ],
  correct: 0,
  explanation: `Parietal cells in the stomach secrete HCl to aid protein digestion and kill microbes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is important for antioxidant defense and protecting cell membranes?',
  options: [
    'Vitamin E',
    'Vitamin C',
    'Vitamin D',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin E protects cell membranes from oxidative damage.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ stores and releases bile for fat digestion?',
  options: [
    'Gallbladder',
    'Liver',
    'Pancreas',
    'Stomach'
  ],
  correct: 0,
  explanation: `The gallbladder stores bile produced by the liver and releases it into the small intestine.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is essential for normal blood clotting?',
  options: [
    'Vitamin K',
    'Vitamin C',
    'Vitamin D',
    'Vitamin A'
  ],
  correct: 0,
  explanation: `Vitamin K is required for the synthesis of clotting factors in the liver.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is the primary site for detoxification of drugs and toxins?',
  options: [
    'Liver',
    'Kidney',
    'Spleen',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The liver metabolizes and detoxifies drugs and other substances through enzymatic reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient is the main source of energy for brain cells?',
  options: [
    'Glucose',
    'Fat',
    'Protein',
    'Vitamin B12'
  ],
  correct: 0,
  explanation: `Glucose is the primary energy source for neurons.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the heart pumps oxygenated blood to the systemic circulation?',
  options: [
    'Left ventricle',
    'Right ventricle',
    'Left atrium',
    'Right atrium'
  ],
  correct: 0,
  explanation: `The left ventricle pumps oxygen-rich blood into the aorta for systemic circulation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which electrolyte is essential for muscle contraction and nerve conduction?',
  options: [
    'Calcium',
    'Potassium',
    'Sodium',
    'Magnesium'
  ],
  correct: 0,
  explanation: `Calcium ions play a key role in muscle contraction and neurotransmitter release.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates blood sugar by promoting uptake of glucose by cells?',
  options: [
    'Insulin',
    'Glucagon',
    'Cortisol',
    'Adrenaline'
  ],
  correct: 0,
  explanation: `Insulin lowers blood glucose by facilitating its uptake into cells.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of blood cell is involved in clotting?',
  options: [
    'Platelets',
    'Red blood cells',
    'White blood cells',
    'Plasma cells'
  ],
  correct: 0,
  explanation: `Platelets aggregate to form a platelet plug and initiate the clotting cascade.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ secretes digestive enzymes like amylase, lipase, and trypsin?',
  options: [
    'Pancreas',
    'Liver',
    'Stomach',
    'Small intestine'
  ],
  correct: 0,
  explanation: `The pancreas produces enzymes that digest carbohydrates, fats, and proteins.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which part of the brain controls coordination and balance?',
  options: [
    'Cerebellum',
    'Cerebrum',
    'Medulla oblongata',
    'Hypothalamus'
  ],
  correct: 0,
  explanation: `The cerebellum regulates muscle coordination, posture, and balance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency causes beriberi?',
  options: [
    'Vitamin B1 (Thiamine)',
    'Vitamin B12',
    'Vitamin C',
    'Vitamin D'
  ],
  correct: 0,
  explanation: `Thiamine deficiency impairs carbohydrate metabolism, leading to neurological and cardiovascular symptoms.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone regulates calcium levels by promoting bone resorption?',
  options: [
    'Parathyroid hormone',
    'Calcitonin',
    'Insulin',
    'Glucagon'
  ],
  correct: 0,
  explanation: `Parathyroid hormone increases blood calcium by stimulating osteoclasts and calcium reabsorption in kidneys.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ excretes urea and maintains electrolyte balance?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The kidney filters urea and regulates electrolytes and water balance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient deficiency causes anemia?',
  options: [
    'Iron',
    'Vitamin D',
    'Calcium',
    'Vitamin A'
  ],
  correct: 0,
  explanation: `Iron deficiency reduces hemoglobin synthesis, leading to anemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ stores glycogen for glucose release when blood sugar is low?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Muscle'
  ],
  correct: 0,
  explanation: `The liver stores glycogen and releases glucose to maintain blood sugar levels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is essential for collagen synthesis?',
  options: [
    'Vitamin C',
    'Vitamin D',
    'Vitamin A',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin C is required for hydroxylation of proline and lysine in collagen formation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which blood vessel carries oxygenated blood from the lungs to the heart?',
  options: [
    'Pulmonary vein',
    'Pulmonary artery',
    'Aorta',
    'Superior vena cava'
  ],
  correct: 0,
  explanation: `Pulmonary veins transport oxygen-rich blood to the left atrium.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ synthesizes most plasma proteins?',
  options: [
    'Liver',
    'Kidney',
    'Spleen',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The liver produces albumin, clotting factors, and other plasma proteins.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ is the main site for nutrient absorption?',
  options: [
    'Small intestine',
    'Stomach',
    'Large intestine',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The small intestine absorbs most nutrients including carbohydrates, proteins, fats, vitamins, and minerals.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone increases water reabsorption in kidneys?',
  options: [
    'Antidiuretic hormone (ADH)',
    'Aldosterone',
    'Cortisol',
    'Glucagon'
  ],
  correct: 0,
  explanation: `ADH increases water reabsorption in the collecting ducts, concentrating urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces hydrochloric acid for digestion?',
  options: [
    'Stomach',
    'Liver',
    'Pancreas',
    'Small intestine'
  ],
  correct: 0,
  explanation: `Parietal cells of the stomach secrete HCl to aid protein digestion and kill pathogens.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of muscle is involuntary and found in walls of hollow organs?',
  options: [
    'Smooth muscle',
    'Skeletal muscle',
    'Cardiac muscle',
    'Connective tissue'
  ],
  correct: 0,
  explanation: `Smooth muscle contracts involuntarily and is present in intestines, blood vessels, and other organs.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which nutrient provides 9 kcal per gram, the highest energy source?',
  options: [
    'Fat',
    'Protein',
    'Carbohydrates',
    'Alcohol'
  ],
  correct: 0,
  explanation: `Fat provides the most energy per gram among macronutrients.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ produces digestive enzymes for carbohydrates, proteins, and fats?',
  options: [
    'Pancreas',
    'Liver',
    'Stomach',
    'Small intestine'
  ],
  correct: 0,
  explanation: `The pancreas produces amylase, lipase, and proteases to digest nutrients.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin is produced in the skin under sunlight exposure?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin E',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `UV rays convert 7-dehydrocholesterol in the skin to Vitamin D3.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which type of carbohydrate is absorbed directly into the bloodstream?',
  options: [
    'Monosaccharides',
    'Disaccharides',
    'Polysaccharides',
    'Fiber'
  ],
  correct: 0,
  explanation: `Monosaccharides like glucose are directly absorbed through the intestinal mucosa.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which mineral is essential for oxygen transport in hemoglobin?',
  options: [
    'Iron',
    'Calcium',
    'Magnesium',
    'Zinc'
  ],
  correct: 0,
  explanation: `Iron forms the heme group in hemoglobin for oxygen binding.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which hormone is secreted by the adrenal medulla during stress?',
  options: [
    'Adrenaline',
    'Insulin',
    'Cortisol',
    'Glucagon'
  ],
  correct: 0,
  explanation: `Adrenaline prepares the body for fight-or-flight by increasing heart rate and energy availability.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which organ excretes nitrogenous waste in the form of urea?',
  options: [
    'Kidney',
    'Liver',
    'Spleen',
    'Pancreas'
  ],
  correct: 0,
  explanation: `The kidneys filter urea from the blood and excrete it in urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Basic Nursing Sciences',
  question: 'Which vitamin deficiency leads to rickets?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin C',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin D deficiency causes poor mineralization of bones, resulting in rickets.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route of drug administration provides the fastest onset of action?',
  options: [
    'Intravenous (IV)',
    'Oral',
    'Intramuscular (IM)',
    'Subcutaneous (SC)'
  ],
  correct: 0,
  explanation: `IV administration delivers the drug directly into the bloodstream, providing the fastest effect.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is the correct site for intramuscular injection in adults?',
  options: [
    'Ventrogluteal region',
    'Dorsogluteal region',
    'Deltoid muscle',
    'Vastus lateralis'
  ],
  correct: 0,
  explanation: `The ventrogluteal site is preferred for IM injections due to safety and less risk of nerve injury.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing intervention prevents pressure ulcers in bedridden patients?',
  options: [
    'Regular repositioning',
    'High-calorie diet only',
    'Limiting fluid intake',
    'Using a heating pad'
  ],
  correct: 0,
  explanation: `Frequent turning and repositioning relieve pressure and prevent ulcer formation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which antiseptic is commonly used for skin preparation before surgery?',
  options: [
    'Chlorhexidine',
    'Phenol',
    'Alcohol only',
    'Iodine tincture only'
  ],
  correct: 0,
  explanation: `Chlorhexidine is effective against a broad range of microbes and is preferred for surgical skin prep.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which needle gauge is commonly used for intradermal injections?',
  options: [
    '25–27 gauge',
    '18–20 gauge',
    '21–23 gauge',
    '14–16 gauge'
  ],
  correct: 0,
  explanation: `Small-gauge needles (25–27) are used for shallow intradermal injections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is a common side effect of opioid analgesics?',
  options: [
    'Constipation',
    'Diarrhea',
    'Hyperactivity',
    'Tachypnea'
  ],
  correct: 0,
  explanation: `Opioids slow gastrointestinal motility, leading to constipation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which isolation precaution is required for tuberculosis patients?',
  options: [
    'Airborne precautions',
    'Contact precautions',
    'Droplet precautions',
    'Standard precautions only'
  ],
  correct: 0,
  explanation: `TB is transmitted via airborne particles; N95 masks and negative pressure rooms are required.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV fluid is isotonic and commonly used for fluid resuscitation?',
  options: [
    '0.9% Normal Saline',
    '5% Dextrose',
    '0.45% Saline',
    'Ringer’s Lactate'
  ],
  correct: 0,
  explanation: `0.9% NS is isotonic and suitable for volume replacement.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which method is most appropriate to prevent nosocomial infections?',
  options: [
    'Hand hygiene',
    'Wearing gloves only',
    'Mask only',
    'Sterilizing instruments once a week'
  ],
  correct: 0,
  explanation: `Proper hand hygiene is the most effective way to prevent hospital-acquired infections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action should a nurse take first in case of anaphylactic reaction?',
  options: [
    'Administer epinephrine immediately',
    'Call for help only',
    'Give oral antihistamines',
    'Monitor vital signs for 10 minutes'
  ],
  correct: 0,
  explanation: `Epinephrine is the first-line treatment to counteract severe allergic reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which sign indicates infiltration of an IV line?',
  options: [
    'Swelling and pallor at the site',
    'Fever',
    'Rash on trunk',
    'Diarrhea'
  ],
  correct: 0,
  explanation: `Infiltration occurs when IV fluid leaks into surrounding tissue, causing swelling and pallor.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which of the following is a nursing intervention to prevent falls in elderly patients?',
  options: [
    'Use of non-slip footwear',
    'Restricting fluids',
    'Encouraging night wandering',
    'Keeping patient in a high bed'
  ],
  correct: 0,
  explanation: `Non-slip footwear reduces the risk of falls by improving stability.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route of medication administration is preferred in patients who are unconscious?',
  options: [
    'Parenteral (IV or IM)',
    'Oral',
    'Sublingual',
    'Rectal'
  ],
  correct: 0,
  explanation: `Unconscious patients cannot swallow safely, so parenteral routes are preferred.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which infection control practice prevents cross-contamination in hospitals?',
  options: [
    'Proper disposal of contaminated sharps',
    'Sharing towels',
    'Leaving bedside tables uncleaned',
    'Reusing gloves'
  ],
  correct: 0,
  explanation: `Sharps disposal prevents accidental injuries and infection spread.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which assessment is most important before administering digoxin?',
  options: [
    'Pulse rate',
    'Blood pressure only',
    'Temperature',
    'Respiratory rate'
  ],
  correct: 0,
  explanation: `Digoxin can slow heart rate; pulse should be checked prior to administration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which fluid and electrolyte imbalance is indicated by tenting of the skin?',
  options: [
    'Dehydration',
    'Fluid overload',
    'Hyponatremia',
    'Hyperkalemia'
  ],
  correct: 0,
  explanation: `Skin tenting indicates reduced skin turgor due to fluid loss.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which needle size is preferred for subcutaneous injection?',
  options: [
    '25–27 gauge',
    '18–20 gauge',
    '21–23 gauge',
    '14–16 gauge'
  ],
  correct: 0,
  explanation: `Small-gauge needles minimize tissue trauma during subcutaneous injections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which medication route bypasses the first-pass metabolism?',
  options: [
    'Sublingual',
    'Oral',
    'Rectal',
    'Topical'
  ],
  correct: 0,
  explanation: `Sublingual drugs are absorbed directly into systemic circulation, avoiding hepatic first-pass effect.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which PPE is essential when caring for patients with airborne infections?',
  options: [
    'N95 respirator',
    'Surgical mask',
    'Gloves only',
    'Apron only'
  ],
  correct: 0,
  explanation: `N95 respirators filter airborne particles and prevent inhalation of infectious droplets.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action should a nurse take to prevent medication errors?',
  options: [
    'Follow the “5 Rights” of medication administration',
    'Administer medications quickly',
    'Rely on memory for dosage',
    'Mix drugs without checking'
  ],
  correct: 0,
  explanation: `The 5 Rights (right patient, drug, dose, route, time) minimize medication errors.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which intervention helps prevent catheter-associated urinary tract infections?',
  options: [
    'Maintain closed drainage system',
    'Intermittent catheterization daily',
    'Frequent catheter replacement without indication',
    'Ignoring aseptic technique'
  ],
  correct: 0,
  explanation: `A closed, sterile system reduces risk of infection.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which side effect is common with corticosteroid therapy?',
  options: [
    'Hyperglycemia',
    'Hypoglycemia',
    'Bradycardia',
    'Hypotension'
  ],
  correct: 0,
  explanation: `Corticosteroids increase blood glucose levels by promoting gluconeogenesis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug is commonly used as an antidote for opioid overdose?',
  options: [
    'Naloxone',
    'Atropine',
    'Adrenaline',
    'Diphenhydramine'
  ],
  correct: 0,
  explanation: `Naloxone blocks opioid receptors and reverses respiratory depression.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action should a nurse take before administering a blood transfusion?',
  options: [
    'Check patient identity and blood compatibility',
    'Start infusion without checking',
    'Administer antihistamine only',
    'Use any available blood unit'
  ],
  correct: 0,
  explanation: `Patient safety requires verifying identity, blood type, and compatibility to prevent reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing action helps reduce risk of deep vein thrombosis in bedridden patients?',
  options: [
    'Encourage leg exercises and ambulation',
    'Restrict fluid intake',
    'Keep patient immobile',
    'Avoid using compression devices'
  ],
  correct: 0,
  explanation: `Movement and exercises prevent venous stasis and reduce DVT risk.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is the correct way to dispose of sharp instruments?',
  options: [
    'Use puncture-proof sharps container',
    'Throw in regular trash',
    'Recap and dispose in trash',
    'Burn immediately'
  ],
  correct: 0,
  explanation: `Sharps containers prevent needle-stick injuries and infection transmission.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing assessment is essential before administering antihypertensive medication?',
  options: [
    'Blood pressure',
    'Temperature',
    'Respiratory rate',
    'Pupillary reaction'
  ],
  correct: 0,
  explanation: `Monitoring blood pressure ensures safe administration and prevents hypotension.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which type of drug reaction is immediate and severe, potentially life-threatening?',
  options: [
    'Anaphylactic reaction',
    'Mild rash',
    'Delayed fever',
    'Gastrointestinal upset'
  ],
  correct: 0,
  explanation: `Anaphylaxis is rapid-onset, severe, and requires immediate intervention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV complication is indicated by redness, warmth, and tenderness along the vein?',
  options: [
    'Phlebitis',
    'Infiltration',
    'Air embolism',
    'Fluid overload'
  ],
  correct: 0,
  explanation: `Phlebitis is inflammation of the vein, commonly caused by IV catheter or medication irritation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route is commonly used for insulin administration?',
  options: [
    'Subcutaneous',
    'Oral',
    'IV',
    'Intramuscular'
  ],
  correct: 0,
  explanation: `Insulin is injected subcutaneously for gradual absorption.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action is part of standard precautions in infection control?',
  options: [
    'Hand hygiene',
    'Isolation of all patients',
    'Wearing full PPE always',
    'Sterilizing all surfaces hourly'
  ],
  correct: 0,
  explanation: `Standard precautions focus on hand hygiene, gloves, masks, and proper waste disposal.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug class reduces inflammation and immune response?',
  options: [
    'Corticosteroids',
    'Antibiotics',
    'Analgesics',
    'Diuretics'
  ],
  correct: 0,
  explanation: `Corticosteroids suppress inflammation and immune activity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is a common side effect of loop diuretics?',
  options: [
    'Hypokalemia',
    'Hyperkalemia',
    'Hypertension',
    'Bradycardia'
  ],
  correct: 0,
  explanation: `Loop diuretics increase potassium excretion, potentially causing hypokalemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action helps prevent ventilator-associated pneumonia?',
  options: [
    'Maintain head-of-bed elevation at 30–45°',
    'Keep patient supine',
    'Avoid oral care',
    'Use contaminated suction equipment'
  ],
  correct: 0,
  explanation: `Elevating the head and oral care reduce aspiration risk and pneumonia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug is commonly used to treat hypoglycemia?',
  options: [
    'Glucose',
    'Insulin',
    'Metformin',
    'Glucagon injection only'
  ],
  correct: 0,
  explanation: `Rapid administration of glucose restores blood sugar in hypoglycemia.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action is essential before giving a patient an intramuscular injection?',
  options: [
    'Aspirate to check for blood return',
    'Massage the area vigorously',
    'Use the same site repeatedly',
    'Inject rapidly without preparation'
  ],
  correct: 0,
  explanation: `Aspirating ensures the needle is not in a blood vessel, preventing systemic drug effects.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is the preferred site for IV cannulation in adults?',
  options: [
    'Dorsal vein of the hand',
    'Femoral vein',
    'External jugular vein',
    'Brachial artery'
  ],
  correct: 0,
  explanation: `The dorsal hand veins are easily accessible, safe, and have low complication risk.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing intervention helps prevent aspiration during feeding?',
  options: [
    'Elevate head of bed at 30–45°',
    'Feed patient in supine position',
    'Give large bolus at once',
    'Avoid monitoring swallowing'
  ],
  correct: 0,
  explanation: `Proper positioning reduces the risk of food or liquid entering the airway.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which antiseptic is preferred for hand hygiene in hospitals?',
  options: [
    'Alcohol-based hand rub',
    'Plain water only',
    'Iodine solution only',
    'Chlorine water'
  ],
  correct: 0,
  explanation: `Alcohol-based rubs are effective against most pathogens and quick for routine hand hygiene.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug class is commonly used to treat bacterial infections?',
  options: [
    'Antibiotics',
    'Antivirals',
    'Antifungals',
    'Analgesics'
  ],
  correct: 0,
  explanation: `Antibiotics target bacterial infections by inhibiting growth or killing bacteria.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which vital sign is most important to monitor after administering a beta-blocker?',
  options: [
    'Heart rate',
    'Temperature',
    'Respiratory rate',
    'Oxygen saturation'
  ],
  correct: 0,
  explanation: `Beta-blockers slow heart rate; monitoring pulse is essential to avoid bradycardia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action reduces risk of infection in patients with indwelling urinary catheters?',
  options: [
    'Maintain closed drainage system',
    'Change catheter daily without indication',
    'Disconnect tubing frequently',
    'Ignore aseptic technique'
  ],
  correct: 0,
  explanation: `A closed, sterile system minimizes the risk of catheter-associated infections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which medication requires monitoring of serum potassium levels?',
  options: [
    'Loop diuretics',
    'Analgesics',
    'Antacids',
    'Vitamin supplements'
  ],
  correct: 0,
  explanation: `Loop diuretics increase potassium excretion, which can cause hypokalemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is the priority action for a patient experiencing hypoglycemia?',
  options: [
    'Give fast-acting glucose',
    'Administer insulin',
    'Give high-fat meal',
    'Wait and observe'
  ],
  correct: 0,
  explanation: `Immediate glucose administration corrects dangerously low blood sugar.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route is preferred for medications that require rapid absorption?',
  options: [
    'Intravenous',
    'Oral',
    'Sublingual',
    'Topical'
  ],
  correct: 0,
  explanation: `IV administration delivers drugs directly into the bloodstream for quick action.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing measure helps prevent ventilator-associated pneumonia?',
  options: [
    'Elevate head of bed 30–45° and perform oral care',
    'Keep patient flat',
    'Skip suctioning',
    'Avoid monitoring'
  ],
  correct: 0,
  explanation: `Proper positioning and oral hygiene reduce risk of aspiration and infection.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which side effect is common with antihistamines?',
  options: [
    'Drowsiness',
    'Diarrhea',
    'Bradycardia',
    'Hypotension'
  ],
  correct: 0,
  explanation: `Many antihistamines cause sedation as a central nervous system effect.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action should a nurse take before administering a blood transfusion?',
  options: [
    'Check patient identity and blood group compatibility',
    'Administer immediately without checking',
    'Mix with other blood types',
    'Skip baseline vitals'
  ],
  correct: 0,
  explanation: `Correct identification and compatibility check prevent hemolytic reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which intervention helps prevent deep vein thrombosis in immobilized patients?',
  options: [
    'Leg exercises and ambulation',
    'Restrict fluids',
    'Avoid movement',
    'Use tight bandages only'
  ],
  correct: 0,
  explanation: `Movement promotes venous return and reduces thrombus formation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug is an antidote for opioid overdose?',
  options: [
    'Naloxone',
    'Atropine',
    'Adrenaline',
    'Diphenhydramine'
  ],
  correct: 0,
  explanation: `Naloxone blocks opioid receptors and reverses respiratory depression.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action helps prevent pressure ulcers in bedridden patients?',
  options: [
    'Regular repositioning',
    'Restricting fluids',
    'Using heating pad continuously',
    'Feeding only liquids'
  ],
  correct: 0,
  explanation: `Frequent repositioning relieves pressure and prevents tissue breakdown.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is a key principle of safe medication administration?',
  options: [
    'Follow the 5 Rights (patient, drug, dose, route, time)',
    'Administer quickly without verification',
    'Rely on memory',
    'Skip double-checking high-risk drugs'
  ],
  correct: 0,
  explanation: `Adhering to the 5 Rights minimizes medication errors.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which PPE is required when caring for patients with airborne diseases?',
  options: [
    'N95 respirator',
    'Surgical mask',
    'Gloves only',
    'Gown only'
  ],
  correct: 0,
  explanation: `N95 respirators prevent inhalation of airborne infectious particles.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV complication is indicated by swelling and pallor at the site?',
  options: [
    'Infiltration',
    'Phlebitis',
    'Air embolism',
    'Fluid overload'
  ],
  correct: 0,
  explanation: `Infiltration occurs when IV fluid leaks into surrounding tissue.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action is part of infection control for catheter care?',
  options: [
    'Maintain closed sterile system',
    'Disconnect tubing frequently',
    'Reuse catheters',
    'Avoid hand hygiene'
  ],
  correct: 0,
  explanation: `Maintaining a closed sterile system reduces catheter-associated infections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which side effect is common with loop diuretics?',
  options: [
    'Hypokalemia',
    'Hyperkalemia',
    'Hypercalcemia',
    'Hypertension'
  ],
  correct: 0,
  explanation: `Loop diuretics increase potassium excretion, leading to hypokalemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action should a nurse take first in anaphylactic shock?',
  options: [
    'Administer epinephrine immediately',
    'Monitor vital signs',
    'Give oral antihistamine',
    'Place patient supine'
  ],
  correct: 0,
  explanation: `Immediate epinephrine administration is life-saving in anaphylaxis.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which type of injection is given into the dermis for allergy testing?',
  options: [
    'Intradermal',
    'Subcutaneous',
    'Intramuscular',
    'Intravenous'
  ],
  correct: 0,
  explanation: `Intradermal injections are shallow and suitable for allergy or tuberculin tests.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug route bypasses gastrointestinal absorption?',
  options: [
    'Parenteral',
    'Oral',
    'Sublingual',
    'Rectal'
  ],
  correct: 0,
  explanation: `Parenteral routes (IV, IM, SC) bypass the GI tract for faster absorption.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action reduces risk of medication errors in hospitals?',
  options: [
    'Double-check high-risk drugs and doses',
    'Rely on memory',
    'Skip documentation',
    'Administer without verification'
  ],
  correct: 0,
  explanation: `Double-checking high-risk medications ensures patient safety.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing measure is key to preventing nosocomial infections?',
  options: [
    'Hand hygiene',
    'Using gloves only',
    'Mask only',
    'Daily sterilization of all surfaces'
  ],
  correct: 0,
  explanation: `Proper hand hygiene is the most effective method to prevent hospital-acquired infections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which assessment is essential before administering digoxin?',
  options: [
    'Check pulse rate',
    'Check temperature',
    'Check respiratory rate',
    'Check oxygen saturation'
  ],
  correct: 0,
  explanation: `Digoxin can cause bradycardia; pulse must be checked before administration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV fluid is isotonic and commonly used for resuscitation?',
  options: [
    '0.9% Normal Saline',
    '0.45% Saline',
    '5% Dextrose',
    '10% Dextrose'
  ],
  correct: 0,
  explanation: `0.9% NS is isotonic and safe for restoring intravascular volume.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which complication is indicated by sudden swelling of the face and lips after medication?',
  options: [
    'Anaphylaxis',
    'Phlebitis',
    'Edema from heart failure',
    'Fluid overload'
  ],
  correct: 0,
  explanation: `Rapid facial swelling is a sign of an acute allergic reaction needing immediate intervention.`
});
seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug class is used to relieve mild to moderate pain?',
  options: [
    'Analgesics',
    'Antibiotics',
    'Antipyretics',
    'Diuretics'
  ],
  correct: 0,
  explanation: `Analgesics reduce pain perception without affecting consciousness.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing action is most important when administering IV antibiotics?',
  options: [
    'Check for allergy history',
    'Give rapidly without monitoring',
    'Mix with other incompatible drugs',
    'Skip infusion rate check'
  ],
  correct: 0,
  explanation: `Checking for allergies prevents anaphylactic reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which assessment is essential before giving antihypertensive medication?',
  options: [
    'Blood pressure',
    'Temperature',
    'Respiratory rate',
    'Heart sounds only'
  ],
  correct: 0,
  explanation: `Monitoring blood pressure ensures safe administration and prevents hypotension.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which complication is indicated by redness, warmth, and pain along an IV vein?',
  options: [
    'Phlebitis',
    'Infiltration',
    'Air embolism',
    'Extravasation'
  ],
  correct: 0,
  explanation: `Phlebitis is inflammation of the vein caused by irritation or infection.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing measure prevents ventilator-associated pneumonia?',
  options: [
    'Oral care and head elevation',
    'Supine positioning',
    'Skipping suctioning',
    'Avoid monitoring'
  ],
  correct: 0,
  explanation: `Proper oral hygiene and positioning reduce aspiration and infection risk.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which is a common adverse effect of corticosteroids?',
  options: [
    'Hyperglycemia',
    'Hypoglycemia',
    'Hypotension',
    'Bradycardia'
  ],
  correct: 0,
  explanation: `Corticosteroids increase glucose production, potentially causing hyperglycemia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing intervention prevents catheter-associated urinary tract infections?',
  options: [
    'Maintain a closed sterile drainage system',
    'Replace catheter daily without indication',
    'Disconnect tubing frequently',
    'Skip hand hygiene'
  ],
  correct: 0,
  explanation: `A closed system and proper aseptic technique reduce infection risk.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which assessment is essential before giving digoxin?',
  options: [
    'Pulse rate',
    'Blood pressure only',
    'Respiratory rate',
    'Temperature'
  ],
  correct: 0,
  explanation: `Digoxin slows heart rate; pulse must be checked to avoid bradycardia.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route of insulin administration is preferred?',
  options: [
    'Subcutaneous',
    'Oral',
    'Intravenous',
    'Intramuscular'
  ],
  correct: 0,
  explanation: `Subcutaneous injection ensures gradual absorption of insulin.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action is first for a patient experiencing anaphylactic shock?',
  options: [
    'Administer epinephrine',
    'Call physician only',
    'Give oral antihistamine',
    'Monitor vital signs'
  ],
  correct: 0,
  explanation: `Immediate epinephrine is life-saving in severe allergic reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which PPE is required when caring for a patient with airborne infection?',
  options: [
    'N95 respirator',
    'Surgical mask',
    'Gloves only',
    'Gown only'
  ],
  correct: 0,
  explanation: `N95 respirators protect against inhalation of airborne pathogens.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV complication presents as sudden swelling and coolness at the site?',
  options: [
    'Infiltration',
    'Phlebitis',
    'Air embolism',
    'Thrombophlebitis'
  ],
  correct: 0,
  explanation: `Infiltration occurs when IV fluid enters surrounding tissue, causing swelling and coolness.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing intervention prevents nosocomial infections?',
  options: [
    'Hand hygiene',
    'Sharing equipment',
    'Skipping glove use',
    'Reusing syringes'
  ],
  correct: 0,
  explanation: `Proper hand hygiene is the most effective infection control measure.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action prevents deep vein thrombosis in bedridden patients?',
  options: [
    'Encourage leg exercises and ambulation',
    'Keep patient immobile',
    'Restrict fluids',
    'Avoid compression stockings'
  ],
  correct: 0,
  explanation: `Movement improves venous return and reduces thrombus formation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug reverses opioid overdose?',
  options: [
    'Naloxone',
    'Atropine',
    'Adrenaline',
    'Diphenhydramine'
  ],
  correct: 0,
  explanation: `Naloxone blocks opioid receptors, reversing respiratory depression.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which intervention helps prevent pressure ulcers?',
  options: [
    'Frequent repositioning',
    'Restrict fluids',
    'Use heat packs continuously',
    'Feed patient only liquids'
  ],
  correct: 0,
  explanation: `Repositioning relieves pressure and prevents tissue breakdown.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which principle ensures safe medication administration?',
  options: [
    'Follow the 5 Rights',
    'Administer quickly without verification',
    'Skip documentation',
    'Rely on memory'
  ],
  correct: 0,
  explanation: `The 5 Rights prevent medication errors and ensure patient safety.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV fluid is isotonic and commonly used for resuscitation?',
  options: [
    '0.9% Normal Saline',
    '0.45% Saline',
    '5% Dextrose',
    '10% Dextrose'
  ],
  correct: 0,
  explanation: `0.9% NS restores intravascular volume safely.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which complication shows facial swelling and difficulty breathing after medication?',
  options: [
    'Anaphylaxis',
    'Phlebitis',
    'Fluid overload',
    'Edema from heart failure'
  ],
  correct: 0,
  explanation: `Rapid swelling is a sign of acute allergic reaction, requiring immediate intervention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which type of injection is given into the dermis for testing allergies?',
  options: [
    'Intradermal',
    'Subcutaneous',
    'Intramuscular',
    'Intravenous'
  ],
  correct: 0,
  explanation: `Intradermal injections are shallow and suitable for tuberculin and allergy testing.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route bypasses gastrointestinal absorption and first-pass metabolism?',
  options: [
    'Parenteral',
    'Oral',
    'Sublingual',
    'Rectal'
  ],
  correct: 0,
  explanation: `Parenteral routes like IV, IM, SC bypass the GI tract.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing step reduces medication errors?',
  options: [
    'Double-check high-risk drugs',
    'Administer immediately without check',
    'Rely on memory',
    'Skip documentation'
  ],
  correct: 0,
  explanation: `Double-checking ensures correct drug and dose administration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing measure is most effective for preventing hospital-acquired infections?',
  options: [
    'Hand hygiene',
    'Wearing gloves only',
    'Using masks only',
    'Daily sterilization of all surfaces'
  ],
  correct: 0,
  explanation: `Hand hygiene is the most important measure to prevent nosocomial infections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug class reduces inflammation and suppresses immune response?',
  options: [
    'Corticosteroids',
    'Antibiotics',
    'Diuretics',
    'Analgesics'
  ],
  correct: 0,
  explanation: `Corticosteroids suppress inflammation and immune activity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which assessment is essential before administering loop diuretics?',
  options: [
    'Check serum potassium levels',
    'Check blood glucose only',
    'Check oxygen saturation only',
    'Check temperature only'
  ],
  correct: 0,
  explanation: `Loop diuretics can cause hypokalemia; potassium levels must be monitored.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which intervention reduces risk of ventilator-associated pneumonia?',
  options: [
    'Elevate head of bed 30–45° and perform oral care',
    'Keep patient supine',
    'Skip suctioning',
    'Avoid monitoring'
  ],
  correct: 0,
  explanation: `Proper positioning and oral hygiene prevent aspiration and infection.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which medication is used for rapid treatment of hypoglycemia?',
  options: [
    'Glucose',
    'Insulin',
    'Metformin',
    'Glucagon only'
  ],
  correct: 0,
  explanation: `Fast-acting glucose restores low blood sugar immediately.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route is preferred for rapid drug absorption in emergencies?',
  options: [
    'Intravenous',
    'Oral',
    'Sublingual',
    'Topical'
  ],
  correct: 0,
  explanation: `IV administration delivers drugs directly to bloodstream for immediate effect.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing measure prevents medication errors?',
  options: [
    'Follow the 5 Rights of medication administration',
    'Administer quickly without check',
    'Rely on memory',
    'Skip documentation'
  ],
  correct: 0,
  explanation: `The 5 Rights (patient, drug, dose, route, time) ensure safe medication administration.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV complication presents as redness, warmth, and tenderness along the vein?',
  options: [
    'Phlebitis',
    'Infiltration',
    'Air embolism',
    'Extravasation'
  ],
  correct: 0,
  explanation: `Phlebitis is vein inflammation caused by mechanical or chemical irritation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing action is priority in anaphylaxis?',
  options: [
    'Administer epinephrine immediately',
    'Give oral antihistamine',
    'Monitor vitals only',
    'Place patient supine'
  ],
  correct: 0,
  explanation: `Epinephrine acts rapidly to counteract severe allergic reactions.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which route bypasses gastrointestinal absorption?',
  options: [
    'Parenteral',
    'Oral',
    'Sublingual',
    'Rectal'
  ],
  correct: 0,
  explanation: `Parenteral routes (IV, IM, SC) deliver drugs directly into tissues or bloodstream.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which PPE is essential for airborne precautions?',
  options: [
    'N95 respirator',
    'Surgical mask',
    'Gloves only',
    'Gown only'
  ],
  correct: 0,
  explanation: `N95 respirators protect against inhalation of airborne pathogens.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action prevents catheter-associated urinary tract infection?',
  options: [
    'Maintain closed sterile system',
    'Change catheter daily without indication',
    'Disconnect tubing frequently',
    'Skip aseptic technique'
  ],
  correct: 0,
  explanation: `A closed, sterile system minimizes infection risk.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action prevents deep vein thrombosis in immobilized patients?',
  options: [
    'Leg exercises and ambulation',
    'Keep patient immobile',
    'Restrict fluids',
    'Avoid compression devices'
  ],
  correct: 0,
  explanation: `Movement and leg exercises promote venous return and reduce DVT risk.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug reverses opioid-induced respiratory depression?',
  options: [
    'Naloxone',
    'Atropine',
    'Adrenaline',
    'Diphenhydramine'
  ],
  correct: 0,
  explanation: `Naloxone blocks opioid receptors, reversing overdose effects.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which measure helps prevent pressure ulcers?',
  options: [
    'Frequent repositioning',
    'Restrict fluids',
    'Use heating pads continuously',
    'Feed patient only liquids'
  ],
  correct: 0,
  explanation: `Regular repositioning relieves pressure and prevents tissue breakdown.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which step reduces medication errors?',
  options: [
    'Follow the 5 Rights',
    'Administer quickly without check',
    'Rely on memory',
    'Skip documentation'
  ],
  correct: 0,
  explanation: `Adhering to the 5 Rights ensures patient safety.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV fluid is isotonic and used for volume replacement?',
  options: [
    '0.9% Normal Saline',
    '0.45% Saline',
    '5% Dextrose',
    '10% Dextrose'
  ],
  correct: 0,
  explanation: `0.9% NS safely restores intravascular volume.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which complication is indicated by sudden facial swelling after medication?',
  options: [
    'Anaphylaxis',
    'Phlebitis',
    'Fluid overload',
    'Edema from heart failure'
  ],
  correct: 0,
  explanation: `Rapid swelling indicates acute allergic reaction requiring immediate intervention.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which type of injection is used for allergy testing?',
  options: [
    'Intradermal',
    'Subcutaneous',
    'Intramuscular',
    'Intravenous'
  ],
  correct: 0,
  explanation: `Intradermal injections are shallow and suitable for allergy testing.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action prevents ventilator-associated pneumonia?',
  options: [
    'Elevate head of bed 30–45° and perform oral care',
    'Keep patient supine',
    'Skip suctioning',
    'Avoid monitoring'
  ],
  correct: 0,
  explanation: `Proper oral hygiene and positioning reduce aspiration and infection.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which side effect is common with antihistamines?',
  options: [
    'Drowsiness',
    'Diarrhea',
    'Bradycardia',
    'Hypotension'
  ],
  correct: 0,
  explanation: `Sedation is a common central nervous system effect of antihistamines.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which intervention is first for a patient with hypoglycemia?',
  options: [
    'Give fast-acting glucose',
    'Administer insulin',
    'Give high-fat meal',
    'Wait and observe'
  ],
  correct: 0,
  explanation: `Immediate glucose restores blood sugar and prevents complications.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which assessment is essential before giving digoxin?',
  options: [
    'Pulse rate',
    'Blood pressure',
    'Respiratory rate',
    'Temperature'
  ],
  correct: 0,
  explanation: `Check pulse to avoid bradycardia from digoxin toxicity.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which IV complication presents as sudden swelling and coolness at the site?',
  options: [
    'Infiltration',
    'Phlebitis',
    'Air embolism',
    'Thrombophlebitis'
  ],
  correct: 0,
  explanation: `Infiltration occurs when IV fluid leaks into surrounding tissue.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which action is most important to prevent nosocomial infections?',
  options: [
    'Hand hygiene',
    'Sharing equipment',
    'Skipping glove use',
    'Reusing syringes'
  ],
  correct: 0,
  explanation: `Hand hygiene is the single most effective infection control measure.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which intervention reduces DVT risk in bedridden patients?',
  options: [
    'Leg exercises and ambulation',
    'Keep patient immobile',
    'Restrict fluids',
    'Avoid compression devices'
  ],
  correct: 0,
  explanation: `Movement prevents venous stasis and thrombus formation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which drug is used as antidote for opioid overdose?',
  options: [
    'Naloxone',
    'Atropine',
    'Adrenaline',
    'Diphenhydramine'
  ],
  correct: 0,
  explanation: `Naloxone blocks opioid receptors and reverses respiratory depression.`
});

seedData.push({
  exam: 'NHM',
  topic: 'Nursing Practice & Pharmacology',
  question: 'Which nursing measure prevents pressure ulcers?',
  options: [
    'Frequent repositioning',
    'Restrict fluids',
    'Use heat packs continuously',
    'Feed patient only liquids'
  ],
  correct: 0,
  explanation: `Repositioning relieves pressure and prevents tissue breakdown.`
});
seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health scheme provides free insurance for low-income families?',
  options: [
    'Ayushman Bharat',
    'Pradhan Mantri Jan Dhan Yojana',
    'Swachh Bharat Abhiyan',
    'Digital India'
  ],
  correct: 0,
  explanation: `Ayushman Bharat provides health coverage and cashless treatment for poor families.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes rickets in children?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin C',
    'Vitamin B12'
  ],
  correct: 0,
  explanation: `Vitamin D deficiency leads to defective bone mineralization, causing rickets.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the correct plural form of "child"?',
  options: [
    'Children',
    'Childs',
    'Childes',
    'Childrens'
  ],
  correct: 0,
  explanation: `The irregular plural of "child" is "children".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'What is 25% of 240?',
  options: [
    '60',
    '50',
    '40',
    '80'
  ],
  correct: 0,
  explanation: `25% of 240 = (25/100) × 240 = 60.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ is primarily responsible for detoxification in the human body?',
  options: [
    'Liver',
    'Kidney',
    'Lungs',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver metabolizes and detoxifies harmful substances in the body.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which word is the synonym of "benevolent"?',
  options: [
    'Kind',
    'Cruel',
    'Lazy',
    'Angry'
  ],
  correct: 0,
  explanation: `"Benevolent" means kind and generous.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the capital of Rajasthan?',
  options: [
    'Jaipur',
    'Udaipur',
    'Jodhpur',
    'Bikaner'
  ],
  correct: 0,
  explanation: `Jaipur is the capital city of Rajasthan.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which gas is essential for human respiration?',
  options: [
    'Oxygen',
    'Carbon dioxide',
    'Nitrogen',
    'Hydrogen'
  ],
  correct: 0,
  explanation: `Oxygen is required for cellular respiration and energy production.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 2, 4, 8, 16, ?',
  options: [
    '32',
    '24',
    '30',
    '28'
  ],
  correct: 0,
  explanation: `Each number doubles; 16 × 2 = 32.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian national program aims at improving maternal and child health?',
  options: [
    'RMNCH+A',
    'Digital India',
    'Make in India',
    'Skill India'
  ],
  correct: 0,
  explanation: `RMNCH+A (Reproductive, Maternal, Newborn, Child, Adolescent Health) focuses on maternal and child health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by both 2 and 3?',
  options: [
    '18',
    '25',
    '17',
    '35'
  ],
  correct: 0,
  explanation: `18 is divisible by 2 (18/2=9) and by 3 (18/3=6).`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "scarce"?',
  options: [
    'Abundant',
    'Rare',
    'Limited',
    'Deficient'
  ],
  correct: 0,
  explanation: `"Abundant" is the opposite of scarce.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which software is used for creating presentations?',
  options: [
    'Microsoft PowerPoint',
    'Microsoft Word',
    'Excel',
    'Notepad'
  ],
  correct: 0,
  explanation: `PowerPoint is used to create slides and presentations.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'What is the full form of NHM in India?',
  options: [
    'National Health Mission',
    'National Housing Mission',
    'National Highways Mission',
    'National Heritage Mission'
  ],
  correct: 0,
  explanation: `NHM stands for National Health Mission, focusing on health services and schemes.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which of the following is a water-soluble vitamin?',
  options: [
    'Vitamin C',
    'Vitamin D',
    'Vitamin A',
    'Vitamin E'
  ],
  correct: 0,
  explanation: `Vitamin C dissolves in water and must be replenished regularly.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian state has the largest population?',
  options: [
    'Uttar Pradesh',
    'Maharashtra',
    'Bihar',
    'Tamil Nadu'
  ],
  correct: 0,
  explanation: `Uttar Pradesh is the most populous state in India.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ produces insulin in the human body?',
  options: [
    'Pancreas',
    'Liver',
    'Kidney',
    'Gallbladder'
  ],
  correct: 0,
  explanation: `The pancreas produces insulin to regulate blood glucose.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural form of "mouse"?',
  options: [
    'Mice',
    'Mouses',
    'Mouse',
    'Meese'
  ],
  correct: 0,
  explanation: `The irregular plural of "mouse" is "mice".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 5, 10, 15, 20, ?',
  options: [
    '25',
    '30',
    '35',
    '22'
  ],
  correct: 0,
  explanation: `The series increases by 5; 20 + 5 = 25.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme focuses on improving sanitation and hygiene?',
  options: [
    'Swachh Bharat Abhiyan',
    'Ayushman Bharat',
    'Skill India',
    'Digital India'
  ],
  correct: 0,
  explanation: `Swachh Bharat Abhiyan promotes cleanliness, hygiene, and sanitation.`
});
seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes night blindness?',
  options: [
    'Vitamin A',
    'Vitamin D',
    'Vitamin C',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin A deficiency affects retinal function, causing night blindness.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "increase"?',
  options: [
    'Decrease',
    'Grow',
    'Rise',
    'Expand'
  ],
  correct: 0,
  explanation: `"Decrease" is the opposite of "increase".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ filters blood to form urine?',
  options: [
    'Kidneys',
    'Liver',
    'Lungs',
    'Spleen'
  ],
  correct: 0,
  explanation: `The kidneys filter waste from blood to produce urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'What is the next number in the series: 3, 6, 12, 24, ?',
  options: [
    '48',
    '36',
    '30',
    '60'
  ],
  correct: 0,
  explanation: `Each number doubles; 24 × 2 = 48.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the capital of India?',
  options: [
    'New Delhi',
    'Mumbai',
    'Kolkata',
    'Chennai'
  ],
  correct: 0,
  explanation: `New Delhi is the capital city of India.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program aims at universal health coverage?',
  options: [
    'Ayushman Bharat',
    'Digital India',
    'Make in India',
    'Skill India'
  ],
  correct: 0,
  explanation: `Ayushman Bharat provides universal health coverage through insurance and primary care.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is a water-soluble vitamin?',
  options: [
    'Vitamin C',
    'Vitamin A',
    'Vitamin D',
    'Vitamin E'
  ],
  correct: 0,
  explanation: `Vitamin C dissolves in water and must be consumed regularly.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which word is the synonym of "rapid"?',
  options: [
    'Fast',
    'Slow',
    'Late',
    'Delayed'
  ],
  correct: 0,
  explanation: `"Rapid" means fast or quick.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the largest organ of the human body?',
  options: [
    'Skin',
    'Liver',
    'Lungs',
    'Heart'
  ],
  correct: 0,
  explanation: `Skin is the largest organ by surface area and weight.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by both 5 and 10?',
  options: [
    '50',
    '33',
    '27',
    '42'
  ],
  correct: 0,
  explanation: `50 ÷ 5 = 10 and 50 ÷ 10 = 5, so divisible by both.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian national scheme focuses on adolescent health?',
  options: [
    'RKSK (Rashtriya Kishor Swasthya Karyakram)',
    'Ayushman Bharat',
    'Swachh Bharat Abhiyan',
    'Make in India'
  ],
  correct: 0,
  explanation: `RKSK targets adolescent health, nutrition, and well-being.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian state has the highest literacy rate?',
  options: [
    'Kerala',
    'Uttar Pradesh',
    'Bihar',
    'Rajasthan'
  ],
  correct: 0,
  explanation: `Kerala has the highest literacy rate in India.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "honest"?',
  options: [
    'Dishonest',
    'Kind',
    'Brave',
    'Polite'
  ],
  correct: 0,
  explanation: `"Dishonest" is the opposite of "honest".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ produces bile?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver produces bile to aid digestion of fats.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 7, 14, 28, 56, ?',
  options: [
    '112',
    '70',
    '84',
    '98'
  ],
  correct: 0,
  explanation: `Each number doubles; 56 × 2 = 112.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "foot"?',
  options: [
    'Feet',
    'Foots',
    'Feets',
    'Fote'
  ],
  correct: 0,
  explanation: `The irregular plural of "foot" is "feet".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is a prime number?',
  options: [
    '13',
    '12',
    '15',
    '20'
  ],
  correct: 0,
  explanation: `13 has only two factors: 1 and 13, so it is prime.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme focuses on digital literacy and IT awareness?',
  options: [
    'Digital India',
    'Skill India',
    'Ayushman Bharat',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `Digital India aims to improve digital literacy and government e-services.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which of the following is an English verb?',
  options: [
    'Run',
    'Happy',
    'Blue',
    'Quickly'
  ],
  correct: 0,
  explanation: `"Run" is a verb indicating an action.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 10, 20, 30, 40, ?',
  options: [
    '50',
    '45',
    '60',
    '55'
  ],
  correct: 0,
  explanation: `The series increases by 10; 40 + 10 = 50.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ stores bile produced by the liver?',
  options: [
    'Gallbladder',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The gallbladder stores and releases bile for fat digestion.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes scurvy?',
  options: [
    'Vitamin C',
    'Vitamin A',
    'Vitamin D',
    'Vitamin B12'
  ],
  correct: 0,
  explanation: `Vitamin C deficiency leads to scurvy, characterized by gum bleeding and poor wound healing.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health scheme aims to improve nutrition among children?',
  options: [
    'POSHAN Abhiyaan',
    'Digital India',
    'Skill India',
    'Make in India'
  ],
  correct: 0,
  explanation: `POSHAN Abhiyaan focuses on reducing malnutrition in children and improving overall health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 9?',
  options: [
    '81',
    '82',
    '85',
    '77'
  ],
  correct: 0,
  explanation: `81 ÷ 9 = 9; hence 81 is divisible by 9.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "generous"?',
  options: [
    'Stingy',
    'Kind',
    'Helpful',
    'Benevolent'
  ],
  correct: 0,
  explanation: `"Stingy" is the opposite of generous.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the primary source of energy for the human body?',
  options: [
    'Carbohydrates',
    'Proteins',
    'Vitamins',
    'Minerals'
  ],
  correct: 0,
  explanation: `Carbohydrates are the main energy source for body metabolism.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme provides free healthcare for senior citizens?',
  options: [
    'Ayushman Bharat',
    'Digital India',
    'Skill India',
    'Make in India'
  ],
  correct: 0,
  explanation: `Ayushman Bharat includes coverage for vulnerable populations, including senior citizens.`
});
seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program aims to reduce maternal and infant mortality?',
  options: [
    'RMNCH+A',
    'Digital India',
    'Skill India',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `RMNCH+A focuses on Reproductive, Maternal, Newborn, Child, and Adolescent Health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes beriberi?',
  options: [
    'Vitamin B1 (Thiamine)',
    'Vitamin D',
    'Vitamin A',
    'Vitamin C'
  ],
  correct: 0,
  explanation: `Thiamine deficiency causes beriberi, affecting nerves and heart.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 1, 4, 9, 16, 25, ?',
  options: [
    '36',
    '30',
    '40',
    '32'
  ],
  correct: 0,
  explanation: `The series is of perfect squares: 1², 2², 3², 4², 5², 6² = 36.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which of the following is an English adjective?',
  options: [
    'Beautiful',
    'Run',
    'Quickly',
    'Eat'
  ],
  correct: 0,
  explanation: `"Beautiful" describes a noun and is an adjective.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health scheme provides free diagnostic services at primary healthcare level?',
  options: [
    'Ayushman Bharat – Health & Wellness Centres',
    'Skill India',
    'Digital India',
    'Make in India'
  ],
  correct: 0,
  explanation: `Ayushman Bharat establishes Health & Wellness Centres providing diagnostics and preventive care.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the smallest prime number?',
  options: [
    '2',
    '1',
    '0',
    '3'
  ],
  correct: 0,
  explanation: `2 is the smallest prime number; it has only two factors: 1 and 2.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme focuses on skill development among youth?',
  options: [
    'Skill India',
    'Digital India',
    'Ayushman Bharat',
    'POSHAN Abhiyaan'
  ],
  correct: 0,
  explanation: `Skill India provides training to enhance employability for youth.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ produces digestive enzymes and insulin?',
  options: [
    'Pancreas',
    'Liver',
    'Gallbladder',
    'Kidney'
  ],
  correct: 0,
  explanation: `The pancreas produces enzymes for digestion and insulin for glucose regulation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "tooth"?',
  options: [
    'Teeth',
    'Tooths',
    'Toothe',
    'Teeths'
  ],
  correct: 0,
  explanation: `The irregular plural of "tooth" is "teeth".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian initiative focuses on improving sanitation in rural areas?',
  options: [
    'Swachh Bharat Abhiyan',
    'Digital India',
    'Make in India',
    'Skill India'
  ],
  correct: 0,
  explanation: `Swachh Bharat Abhiyan promotes hygiene, sanitation, and cleanliness in rural and urban areas.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which element is essential for the formation of hemoglobin?',
  options: [
    'Iron',
    'Calcium',
    'Potassium',
    'Sodium'
  ],
  correct: 0,
  explanation: `Iron is required for hemoglobin synthesis in red blood cells.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 6?',
  options: [
    '24',
    '25',
    '19',
    '31'
  ],
  correct: 0,
  explanation: `24 is divisible by both 2 and 3, hence divisible by 6.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin is necessary for blood clotting?',
  options: [
    'Vitamin K',
    'Vitamin D',
    'Vitamin A',
    'Vitamin C'
  ],
  correct: 0,
  explanation: `Vitamin K is essential for synthesis of clotting factors.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health scheme focuses on improving nutrition among women and children?',
  options: [
    'POSHAN Abhiyaan',
    'Digital India',
    'Skill India',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `POSHAN Abhiyaan targets malnutrition among children and women.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 4?',
  options: [
    '32',
    '33',
    '35',
    '31'
  ],
  correct: 0,
  explanation: `32 ÷ 4 = 8, so 32 is divisible by 4.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "optimistic"?',
  options: [
    'Pessimistic',
    'Hopeful',
    'Cheerful',
    'Positive'
  ],
  correct: 0,
  explanation: `"Pessimistic" is the opposite of optimistic.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ stores glycogen and releases glucose into blood?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver stores glycogen and releases glucose to maintain blood sugar levels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 2, 6, 12, 20, ?',
  options: [
    '30',
    '28',
    '25',
    '32'
  ],
  correct: 0,
  explanation: `Series pattern: add consecutive even numbers: 2+4=6, 6+6=12, 12+8=20, 20+10=30.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "man"?',
  options: [
    'Men',
    'Mans',
    'Mene',
    'Mens'
  ],
  correct: 0,
  explanation: `The irregular plural of "man" is "men".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is an Indian national program for digital skill development?',
  options: [
    'Digital India',
    'Skill India',
    'Ayushman Bharat',
    'POSHAN Abhiyaan'
  ],
  correct: 0,
  explanation: `Digital India focuses on IT literacy and e-governance.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is a perfect square?',
  options: [
    '49',
    '50',
    '45',
    '55'
  ],
  correct: 0,
  explanation: `7 × 7 = 49, which is a perfect square.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "ancient"?',
  options: [
    'Modern',
    'Old',
    'Historic',
    'Old-fashioned'
  ],
  correct: 0,
  explanation: `"Modern" is the opposite of ancient.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ excretes urine?',
  options: [
    'Kidneys',
    'Lungs',
    'Liver',
    'Heart'
  ],
  correct: 0,
  explanation: `Kidneys filter blood and excrete waste as urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 8?',
  options: [
    '64',
    '63',
    '65',
    '61'
  ],
  correct: 0,
  explanation: `64 ÷ 8 = 8, so divisible by 8.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health program focuses on adolescent reproductive health?',
  options: [
    'RKSK',
    'Ayushman Bharat',
    'POSHAN Abhiyaan',
    'Skill India'
  ],
  correct: 0,
  explanation: `Rashtriya Kishor Swasthya Karyakram targets adolescent health and reproductive education.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which English word is a verb?',
  options: [
    'Eat',
    'Blue',
    'Beautiful',
    'Quickly'
  ],
  correct: 0,
  explanation: `"Eat" is an action word, hence a verb.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme aims at universal health coverage through insurance?',
  options: [
    'Ayushman Bharat',
    'Digital India',
    'Skill India',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `Ayushman Bharat provides health insurance for economically weaker sections.`
});
seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes rickets in children?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin C',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin D deficiency leads to improper bone mineralization, causing rickets.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "hard"?',
  options: [
    'Soft',
    'Rigid',
    'Tough',
    'Strong'
  ],
  correct: 0,
  explanation: `"Soft" is the opposite of "hard".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 1, 2, 4, 8, 16, ?',
  options: [
    '32',
    '30',
    '24',
    '28'
  ],
  correct: 0,
  explanation: `Each number doubles; 16 × 2 = 32.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program aims at improving maternal and child nutrition?',
  options: [
    'POSHAN Abhiyaan',
    'Digital India',
    'Skill India',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `POSHAN Abhiyaan targets reduction of malnutrition in women and children.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by both 2 and 5?',
  options: [
    '20',
    '21',
    '23',
    '27'
  ],
  correct: 0,
  explanation: `20 ÷ 2 = 10 and 20 ÷ 5 = 4; divisible by both.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "ox"?',
  options: [
    'Oxen',
    'Oxs',
    'Oxes',
    'Oxenx'
  ],
  correct: 0,
  explanation: `The irregular plural of "ox" is "oxen".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is a prime number?',
  options: [
    '17',
    '18',
    '20',
    '21'
  ],
  correct: 0,
  explanation: `17 has only two factors (1 and 17), so it is prime.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ stores bile produced by the liver?',
  options: [
    'Gallbladder',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The gallbladder stores bile for digestion of fats.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme provides free healthcare for poor families?',
  options: [
    'Ayushman Bharat',
    'Digital India',
    'Skill India',
    'Make in India'
  ],
  correct: 0,
  explanation: `Ayushman Bharat offers cashless treatment and insurance coverage to economically weaker sections.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which English word is a noun?',
  options: [
    'Book',
    'Run',
    'Quickly',
    'Happy'
  ],
  correct: 0,
  explanation: `"Book" is a noun representing an object.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health scheme targets adolescent health and education?',
  options: [
    'RKSK',
    'Ayushman Bharat',
    'POSHAN Abhiyaan',
    'Skill India'
  ],
  correct: 0,
  explanation: `Rashtriya Kishor Swasthya Karyakram (RKSK) focuses on adolescent health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 5, 10, 20, 40, ?',
  options: [
    '80',
    '70',
    '90',
    '100'
  ],
  correct: 0,
  explanation: `Series doubles each time; 40 × 2 = 80.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin is necessary for blood clotting?',
  options: [
    'Vitamin K',
    'Vitamin C',
    'Vitamin A',
    'Vitamin D'
  ],
  correct: 0,
  explanation: `Vitamin K is essential for synthesis of clotting factors.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program improves digital literacy?',
  options: [
    'Digital India',
    'Skill India',
    'Ayushman Bharat',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `Digital India focuses on IT literacy and digital infrastructure.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 3?',
  options: [
    '21',
    '22',
    '25',
    '28'
  ],
  correct: 0,
  explanation: `21 ÷ 3 = 7; hence divisible by 3.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ produces insulin?',
  options: [
    'Pancreas',
    'Liver',
    'Kidney',
    'Heart'
  ],
  correct: 0,
  explanation: `Pancreas secretes insulin to regulate blood sugar.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is a perfect square?',
  options: [
    '64',
    '63',
    '65',
    '66'
  ],
  correct: 0,
  explanation: `8 × 8 = 64; hence a perfect square.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "weak"?',
  options: [
    'Strong',
    'Feeble',
    'Fragile',
    'Delicate'
  ],
  correct: 0,
  explanation: `"Strong" is the opposite of weak.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health scheme aims to reduce malnutrition in children?',
  options: [
    'POSHAN Abhiyaan',
    'Digital India',
    'Skill India',
    'Make in India'
  ],
  correct: 0,
  explanation: `POSHAN Abhiyaan focuses on nutrition of children and women.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 2, 5, 10, 17, 26, ?',
  options: [
    '37',
    '35',
    '34',
    '36'
  ],
  correct: 0,
  explanation: `Pattern: add consecutive odd numbers: 2+3=5, 5+5=10, 10+7=17, 17+9=26, 26+11=37.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which English word is an adverb?',
  options: [
    'Quickly',
    'Run',
    'Book',
    'Happy'
  ],
  correct: 0,
  explanation: `"Quickly" describes how an action is done, hence an adverb.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme provides insurance for senior citizens and poor families?',
  options: [
    'Ayushman Bharat',
    'Digital India',
    'POSHAN Abhiyaan',
    'Skill India'
  ],
  correct: 0,
  explanation: `Ayushman Bharat provides cashless treatment and health insurance coverage.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "woman"?',
  options: [
    'Women',
    'Womans',
    'Womanes',
    'Womene'
  ],
  correct: 0,
  explanation: `The irregular plural of "woman" is "women".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 9?',
  options: [
    '81',
    '82',
    '85',
    '87'
  ],
  correct: 0,
  explanation: `81 ÷ 9 = 9; hence divisible by 9.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ filters waste and forms urine?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Spleen'
  ],
  correct: 0,
  explanation: `Kidneys remove waste from blood and produce urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "optimistic"?',
  options: [
    'Pessimistic',
    'Hopeful',
    'Positive',
    'Cheerful'
  ],
  correct: 0,
  explanation: `"Pessimistic" is the opposite of optimistic.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program targets adolescent health and nutrition?',
  options: [
    'RKSK',
    'Ayushman Bharat',
    'POSHAN Abhiyaan',
    'Skill India'
  ],
  correct: 0,
  explanation: `Rashtriya Kishor Swasthya Karyakram (RKSK) focuses on adolescent health.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 3, 6, 12, 24, 48, ?',
  options: [
    '96',
    '100',
    '90',
    '92'
  ],
  correct: 0,
  explanation: `Series doubles each time; 48 × 2 = 96.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes scurvy?',
  options: [
    'Vitamin C',
    'Vitamin D',
    'Vitamin A',
    'Vitamin B12'
  ],
  correct: 0,
  explanation: `Vitamin C deficiency leads to scurvy, characterized by bleeding gums and poor wound healing.`
});
seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme promotes digital payments and e-governance?',
  options: [
    'Digital India',
    'Skill India',
    'Ayushman Bharat',
    'POSHAN Abhiyaan'
  ],
  correct: 0,
  explanation: `Digital India promotes digital infrastructure, e-governance, and digital literacy.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 12?',
  options: [
    '36',
    '35',
    '34',
    '38'
  ],
  correct: 0,
  explanation: `36 ÷ 12 = 3; hence divisible by 12.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes night blindness?',
  options: [
    'Vitamin A',
    'Vitamin D',
    'Vitamin C',
    'Vitamin K'
  ],
  correct: 0,
  explanation: `Vitamin A deficiency affects the retina, causing night blindness.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next in the series: 1, 1, 2, 3, 5, 8, ?',
  options: [
    '13',
    '12',
    '11',
    '10'
  ],
  correct: 0,
  explanation: `This is the Fibonacci series; next number = 5+8 = 13.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "difficult"?',
  options: [
    'Easy',
    'Hard',
    'Tough',
    'Challenging'
  ],
  correct: 0,
  explanation: `"Easy" is the opposite of "difficult".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which English word is a verb?',
  options: [
    'Write',
    'Book',
    'Beautiful',
    'Quickly'
  ],
  correct: 0,
  explanation: `"Write" is an action word, hence a verb.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ stores glycogen and releases glucose?',
  options: [
    'Liver',
    'Kidney',
    'Pancreas',
    'Spleen'
  ],
  correct: 0,
  explanation: `The liver stores glycogen and releases glucose to maintain blood sugar levels.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme targets malnutrition in children and women?',
  options: [
    'POSHAN Abhiyaan',
    'Digital India',
    'Skill India',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `POSHAN Abhiyaan aims to reduce malnutrition among children and women.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 7?',
  options: [
    '35',
    '33',
    '32',
    '31'
  ],
  correct: 0,
  explanation: `35 ÷ 7 = 5; hence divisible by 7.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "child"?',
  options: [
    'Children',
    'Childs',
    'Childes',
    'Childrens'
  ],
  correct: 0,
  explanation: `The irregular plural of "child" is "children".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program aims at adolescent reproductive health?',
  options: [
    'RKSK',
    'Ayushman Bharat',
    'POSHAN Abhiyaan',
    'Skill India'
  ],
  correct: 0,
  explanation: `Rashtriya Kishor Swasthya Karyakram (RKSK) targets adolescent health and education.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 2, 6, 12, 20, 30, ?',
  options: [
    '42',
    '40',
    '50',
    '45'
  ],
  correct: 0,
  explanation: `Pattern: add consecutive even numbers: 2+4=6, 6+6=12, 12+8=20, 20+10=30, 30+12=42.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes beriberi?',
  options: [
    'Vitamin B1 (Thiamine)',
    'Vitamin C',
    'Vitamin A',
    'Vitamin D'
  ],
  correct: 0,
  explanation: `Thiamine deficiency causes beriberi, affecting nerves and heart function.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ excretes urine?',
  options: [
    'Kidney',
    'Liver',
    'Lungs',
    'Heart'
  ],
  correct: 0,
  explanation: `Kidneys filter waste from blood and excrete it as urine.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by 5?',
  options: [
    '25',
    '23',
    '26',
    '27'
  ],
  correct: 0,
  explanation: `25 ÷ 5 = 5; hence divisible by 5.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which English word is an adjective?',
  options: [
    'Beautiful',
    'Run',
    'Eat',
    'Quickly'
  ],
  correct: 0,
  explanation: `"Beautiful" describes a noun, hence an adjective.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian scheme provides free healthcare for poor families?',
  options: [
    'Ayushman Bharat',
    'Digital India',
    'Skill India',
    'Swachh Bharat Abhiyan'
  ],
  correct: 0,
  explanation: `Ayushman Bharat offers health coverage and cashless treatment.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is a perfect square?',
  options: [
    '81',
    '82',
    '85',
    '83'
  ],
  correct: 0,
  explanation: `9 × 9 = 81, which is a perfect square.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the antonym of "ancient"?',
  options: [
    'Modern',
    'Old',
    'Historic',
    'Ancient'
  ],
  correct: 0,
  explanation: `"Modern" is the opposite of "ancient".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which organ produces digestive enzymes and insulin?',
  options: [
    'Pancreas',
    'Liver',
    'Kidney',
    'Spleen'
  ],
  correct: 0,
  explanation: `The pancreas produces enzymes for digestion and insulin for blood sugar regulation.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 4, 9, 16, 25, 36, ?',
  options: [
    '49',
    '48',
    '50',
    '45'
  ],
  correct: 0,
  explanation: `Series of perfect squares: 2², 3², 4², 5², 6², 7²=49.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian program focuses on improving sanitation?',
  options: [
    'Swachh Bharat Abhiyan',
    'Digital India',
    'Skill India',
    'Ayushman Bharat'
  ],
  correct: 0,
  explanation: `Swachh Bharat Abhiyan promotes cleanliness, hygiene, and sanitation in India.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is divisible by both 2 and 3?',
  options: [
    '18',
    '19',
    '17',
    '25'
  ],
  correct: 0,
  explanation: `18 ÷ 2 = 9 and 18 ÷ 3 = 6; divisible by both.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which is the plural of "goose"?',
  options: [
    'Geese',
    'Gooses',
    'Goosen',
    'Goose'
  ],
  correct: 0,
  explanation: `The irregular plural of "goose" is "geese".`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number is prime?',
  options: [
    '23',
    '21',
    '25',
    '27'
  ],
  correct: 0,
  explanation: `23 has only two factors: 1 and 23; hence prime.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which Indian health program targets adolescent nutrition and health?',
  options: [
    'RKSK',
    'Ayushman Bharat',
    'POSHAN Abhiyaan',
    'Skill India'
  ],
  correct: 0,
  explanation: `RKSK focuses on adolescent health, nutrition, and reproductive education.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which vitamin deficiency causes rickets?',
  options: [
    'Vitamin D',
    'Vitamin A',
    'Vitamin C',
    'Vitamin B12'
  ],
  correct: 0,
  explanation: `Vitamin D deficiency leads to defective bone mineralization, causing rickets.`
});

seedData.push({
  exam: 'NHM',
  topic: 'General & Aptitude',
  question: 'Which number comes next: 1, 3, 6, 10, 15, ?',
  options: [
    '21',
    '20',
    '22',
    '18'
  ],
  correct: 0,
  explanation: `Pattern: add consecutive natural numbers: 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21.`
});

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    // await Question.deleteMany({});
    // console.log('Cleared existing questions...');

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