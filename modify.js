const fs = require('fs');
const filePath = 'c:/projects/cissp/questions.js';
let code = fs.readFileSync(filePath, 'utf8');

const match = code.match(/const questionBank = (\[.*\]);\s*$/s);
if (!match) {
    console.error("Could not parse questionBank");
    process.exit(1);
}

let qb = eval(match[1]);
let modified = 0;

for (let i = 0; i < qb.length; i++) {
    let q = qb[i];
    if (q.type === 'scenario' && ![9001, 9002, 9003].includes(q.id)) {
        if (q.questions) {
            for (let j = 0; j < q.questions.length; j++) {
                let subQ = q.questions[j];
                // Replace obvious distractors
                subQ.options = subQ.options.map(opt => {
                    if (opt.match(/media|fire|ignore|delete all|too many|shut down|publicly/i)) {
                        return "Deploy technical controls without management approval";
                    }
                    if (opt.match(/expensive|insecure|demanding|burnout|vacation/i)) {
                        return "Update the risk register before taking technical action";
                    }
                    if (opt.length < 15 && subQ.options.indexOf(opt) !== subQ.answer) {
                        return "Perform a quantitative risk assessment";
                    }
                    return opt;
                });
                // Ensure unique options
                subQ.options = subQ.options.map((opt, idx, arr) => arr.indexOf(opt) === idx ? opt : opt + " (Alternative)");
                subQ.exp += " Tricky distractors represent common pitfalls like taking technical action without management authorization, or administrative delays during active incidents.";
            }
        }
        modified++;
    }
}

const newCode = code.slice(0, match.index) + "const questionBank = " + JSON.stringify(qb, null, 2) + ";\n";
fs.writeFileSync(filePath, newCode, 'utf8');
console.log("Successfully modified " + modified + " scenarios.");
