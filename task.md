# CISSP Question Bank Rewrite Task

## Goal
Fix the distractors (incorrect options) for the 120 difficulty 2 and 3 questions (excluding `type: 'scenario'`) in `questions.js`, as well as fix the distractors and explanations for all `type: 'scenario'` questions (excluding IDs 9001, 9002, 9003). Make them highly plausible but fundamentally wrong using the 'Tech vs Management' trap or 'Right action, wrong time' trap. Update the `exp` fields to clearly explain why the correct answer is right and why the distractors are wrong.

## Progress
- [x] Analyzed `questions.js` and extracted 120 regular questions matching the criteria.
- [x] Split regular target questions into 6 batches and rewrote their distractors using subagents.
- [x] Merged regular rewritten distractors and explanations back into `questions.js`.
- [x] Extracted scenario target questions into a JSON file and split into 4 batches.
- [x] Spawned 4 autonomous subagents to rewrite scenario distractors and explanations concurrently.
- [x] Verified successful completion of all scenario batches.
- [x] Wrote a script `merge_scenarios.ps1` to merge scenario modifications back into `questions.js` (Pending user execution due to timeouts).
- [x] Updated `task.md` to reflect the distractor hardening progress for scenario questions.

## Status
Completed subagent orchestration and modifications. Pending execution of the final merge script.
