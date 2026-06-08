# Walkthrough: Hardened CISSP Distractors

This document showcases examples of how the CISSP questions have been updated to replace obvious distractors with plausible, exam-realistic traps. We focused on the "Tech vs Management" trap and the "Right action, wrong time" trap.

## Example 1: The "Tech vs Management" Trap

**Question (ID: 1):**
Which element of the CIA triad ensures that data is not altered by unauthorized people?

**Old Distractors (Conceptual):**
- Hackers
- Passwords
- Encryption

**New Hardened Options:**
- [x] **Integrity** (Correct Answer)
- [ ] Deploying cryptographic hashing algorithms (Technical trap: This is *how* you enforce integrity, not the element itself)
- [ ] Establishing a data governance policy (Management trap: A high-level policy, not the core concept asked for)
- [ ] Verifying user authorization credentials (Technical action: This is an access control mechanism, related to confidentiality)

**Explanation:**
Integrity is correct because it ensures that data remains unchanged, authentic, and protected from unauthorized modification. 'Deploying cryptographic hashing algorithms' is a technical trap; it is a mechanism to enforce integrity, not the triad element itself. 'Establishing a data governance policy' is a management trap representing a preventive action, not the foundational element. 'Verifying user authorization credentials' is a technical action related to access control and confidentiality, not integrity.

---

## Example 2: The "Right Action, Wrong Time" Trap

**Question (ID: 6):**
You are implementing a control to fix a broken server after a crash. What type of control function is this?

**Old Distractors (Conceptual):**
- Preventive
- Detective
- Deterrent

**New Hardened Options:**
- [x] **Corrective** (Correct Answer)
- [ ] Restoring the server from the latest nightly backup (Technical trap: This describes the *action*, not the control *type*)
- [ ] Updating the disaster recovery plan (Right action, wrong time: This should be done *after* recovery)
- [ ] Installing redundancy to prevent future crashes (Right action, but this is a *preventive* control)

**Explanation:**
Corrective is correct because corrective controls are specifically designed to restore systems or processes to their normal state after an incident has occurred. 'Restoring the server from the latest nightly backup' is a technical trap; it describes the specific technical action rather than the control category. 'Updating the disaster recovery plan' is a management trap and a right action at the wrong time (done after recovery). 'Installing redundancy to prevent future crashes' is a right action but represents a preventive control, not a corrective one.

---

### Conclusion
By injecting these highly plausible distractors, the questions now accurately mimic the difficulty of the real CISSP exam, forcing test-takers to carefully analyze what the question is explicitly asking for (e.g., a management concept vs. a technical implementation).

---

## Example 3: The Scenario Trap

**Scenario (ID: 257):**
A financial services firm detects unusual database queries at 2 AM from a service account. The queries target customer PII and export data to an internal staging server. No alerts fired because the service account has legitimate database access.

**Question:**
What is the FIRST action the SOC analyst should take?

**New Hardened Options:**
- [x] **Verify whether this is authorized maintenance activity** (Correct Answer)
- [ ] Isolate the database server from the network (Right action, wrong time: Proper containment, but premature before confirming if it's maintenance)
- [ ] Initiate an incident response team call-out (Management trap: Escalates too quickly before basic validation)
- [ ] Disable the service account to halt exfiltration (Right action, wrong time: Halts business processes unnecessarily if authorized)

**Explanation:**
Verify legitimacy first. Disabling the account or isolating servers are proper containment steps but are premature before confirming it's not authorized maintenance. Initiating an IR call-out escalates too quickly before basic validation.
