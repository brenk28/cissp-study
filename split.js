const fs = require('fs');
const content = fs.readFileSync('c:/projects/cissp/questions.js', 'utf8');
const match = content.match(/const questionBank = (\[[\s\S]*\]);/);
if (match) {
  const qb = JSON.parse(match[1]);
  const diff23 = qb.filter(q => (q.difficulty === 2 || q.difficulty === 3) && q.type !== 'scenario');
  const other = qb.filter(q => !((q.difficulty === 2 || q.difficulty === 3) && q.type !== 'scenario'));
  
  console.log('diff23 count:', diff23.length);
  console.log('other count:', other.length);
  
  const batchSize = 30;
  for (let i = 0; i < diff23.length; i += batchSize) {
    const batch = diff23.slice(i, i + batchSize);
    fs.writeFileSync(`c:/Users/bill_/.gemini/antigravity/brain/e125a383-4038-4c46-98ed-0bb89b7345bc/scratch/batch_${i/batchSize}.json`, JSON.stringify(batch, null, 2));
  }
  fs.writeFileSync('c:/Users/bill_/.gemini/antigravity/brain/e125a383-4038-4c46-98ed-0bb89b7345bc/scratch/other.json', JSON.stringify(other, null, 2));
} else {
  console.log('could not match');
}
