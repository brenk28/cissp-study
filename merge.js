const fs = require('fs');

// Read processed outputs
let processed = [];
for (let i = 1; i <= 6; i++) {
  const content = fs.readFileSync('c:/projects/cissp/out' + i + '.json', 'utf8');
  processed.push(...JSON.parse(content));
}

// Create a map for quick lookup
const processedMap = new Map();
for (const q of processed) {
  processedMap.set(q.id, q);
}

// Read the original file
const originalStr = fs.readFileSync('c:/projects/cissp/questions.js', 'utf8');
const startIdx = originalStr.indexOf('[');
const endIdx = originalStr.lastIndexOf(']');
const prefix = originalStr.substring(0, startIdx);
const suffix = originalStr.substring(endIdx + 1);
const jsonStr = originalStr.substring(startIdx, endIdx + 1);

// Parse the original questions
let allQuestions = JSON.parse(jsonStr);

// Merge
let updatedCount = 0;
for (let i = 0; i < allQuestions.length; i++) {
  if (processedMap.has(allQuestions[i].id)) {
    allQuestions[i] = processedMap.get(allQuestions[i].id);
    updatedCount++;
  }
}

console.log('Updated ' + updatedCount + ' questions.');

// Write back
fs.writeFileSync('c:/projects/cissp/questions.js', prefix + JSON.stringify(allQuestions, null, 2) + suffix);
console.log('Wrote to questions.js');
