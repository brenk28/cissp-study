# Question Bank Expansion Strategy

I completely agree with the statistical feedback you provided. It perfectly highlights the blind spots that still exist in the bank. 

The 60% Easy ratio is too high for a proper CAT simulation, and the domain-specific gaps (especially Domain 6 having only 3 hard questions) will leave you unprepared for specific sections of the real exam. The lack of Ethics Canon questions is also a critical omission.

Based on this feedback, I have updated the expansion plan to hit the 1,000 question target while systematically addressing every point in your analysis.

## Proposed Expansion Plan

To reach a ~1,000 question bank, we need to generate and inject ~563 new questions. Instead of generating them randomly, we will use targeted generation to fix the distribution gaps.

### 1. Fix the Legacy Explanations (The 63 Short Ones)
Before generating new questions, I will spawn a subagent to specifically target the ~63 remaining "Difficulty 1" questions that have explanations under 80 characters. We will rewrite these to ensure *every single question* in the bank explains why the distractors are wrong.

### 2. Targeted Domain Expansion (Difficulty 2 & 3)
To fix the 60% easy skew, the ~500 new questions will be exclusively Difficulty 2 and 3. We will heavily skew the generation toward the underrepresented domains:
*   **Domain 6 (Security Assessment & Testing):** Massive injection of Hard questions (Pen-testing rules of engagement, SOC reports, vulnerability scanning vs management).
*   **Domain 5 (IAM):** Injection of Hard questions (Federation protocols, SAML vs OAuth/OIDC, Zero Trust Architecture).
*   **Domain 3 (Security Architecture):** Injection of Hard questions (Cryptography, physical security controls, cloud computing models).

### 3. New Scenario Blocks
I will write and inject at least 4 brand-new, complex scenario blocks explicitly focusing on the requested domains:
*   **IAM Scenario:** A merger involving federated identity conflict resolution.
*   **Assessment & Testing Scenario:** Managing a critical vulnerability discovery during an active Red Team engagement.
*   **Software Development Scenario:** Handling an active supply chain attack within a CI/CD pipeline.

### 4. Code of Ethics & Canon Priority
I will inject a dedicated batch of questions focused solely on the (ISC)² Code of Ethics. This will include priority ordering questions (e.g., resolving a conflict between "Protect society" vs "Act honorably") and conflict-of-interest scenarios.

### 5. Type Variety Injection
During generation, I will instruct the subagents to explicitly generate at least 20 new `ms` (multi-select) and 10 new `ordering` questions to increase format variety.

## User Review Required

> [!IMPORTANT]
> The plan is now perfectly aligned with your statistical feedback. If you approve this highly-targeted expansion strategy, I will create the tracking checklist and begin orchestrating the background agents to execute these 5 phases.

Do you approve this updated, targeted expansion plan?

## Verification Plan
- Monitor the generation batches in the `task.md` artifact.
- Run a statistical analysis script after the final merge to verify the difficulty ratio has shifted closer to 40/30/30 and the domain gaps have been filled.
