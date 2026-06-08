const fs = require('fs');
const code = fs.readFileSync('c:/projects/cissp/questions.js', 'utf8');
const match = code.match(/const questionBank = (\[.*\]);\s*$/s);
const qb = eval(match[1]);
const scenarios = qb.filter(q => q.type === 'scenario' && ![9001, 9002, 9003].includes(q.id));
fs.writeFileSync('c:/projects/cissp/scenarios.json', JSON.stringify(scenarios, null, 2));
