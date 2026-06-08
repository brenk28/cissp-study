import json

new_exps = {
    272: [
        "Password spraying (Option 2) involves attempting a small number of commonly used passwords across a large number of accounts to avoid triggering account lockouts. Man-in-the-middle (Option 0) intercepts communication, which does not match the login failure pattern. Brute force against a single account (Option 1) would generate many failures for one account, but the scenario specifies no single account has more than 5 failures. Denial of service (Option 3) aims to disrupt availability rather than authenticate.",
        "The attacker deliberately kept the number of failed attempts per account (max 5) below typical lockout thresholds (Option 2). There is no evidence the policy is completely broken (Option 0) or disabled (Option 3). Account lockout policies are not generally restricted by business hours (Option 1).",
        "Correlating failed logins across multiple accounts over a specific time window (Option 1) detects distributed attacks like password spraying that evade per-account thresholds. Restricting logins to business hours (Option 0) or disabling VPN access (Option 2) harms business operations. Increasing the lockout threshold (Option 3) would make the system more vulnerable to brute force, not help detect password spraying."
    ],
    273: [
        "The RTO gap (Option 0) means 5 extra hours of complete payment outage, causing immediate business interruption and lost sales. The RPO gap (Option 3) loses 55 minutes of transactions, which might be recoverable through other means. The gaps are not equally critical (Option 2) nor insignificant (Option 1).",
        "Active-active clustering (Option 3) provides near-instant automatic failover, achieving a sub-hour RTO. Manual runbook rebuilds (Option 0) or backups/imaging (Options 1 and 2) would take hours or days, failing to meet the 1-hour RTO requirement.",
        "Formally documenting the residual risk (Option 2) ensures leadership is aware and can officially accept the risk. Hiding the gap (Option 0) is unethical and dangerous. Blaming IT (Option 1) is unprofessional and unproductive. Stating it can never be fixed (Option 3) ignores potential future technological or budget changes."
    ],
    274: [
        "Misclassifying PII as 'Internal' (Option 1) means it lacks the stringent access controls and encryption required for 'Confidential' data, increasing the risk of unauthorized access or data breaches. Employee confusion (Option 0) and storage space (Option 3) are minor operational issues, not the primary security risk. The number of classification levels (Option 2) is irrelevant to the specific misclassification of PII.",
        "Automated Data Loss Prevention (DLP) (Option 0) can scan and reclassify millions of documents at scale based on their content. Manual reclassification (Option 2) of 3 million documents is practically infeasible. Deleting all documents (Option 1) destroys potentially critical business data. Lowering PII classification (Option 3) violates privacy regulations and fundamental security principles.",
        "Automated classification upon creation based on content analysis (Option 0) stops misclassification at the source. CEO approval for every document (Option 1) is a massive administrative bottleneck. Reducing classification levels (Option 2) or removing them entirely (Option 3) undermines the entire data security strategy."
    ],
    275: [
        "Placing an upstream filter like an IPS or router ACL (Option 1) can block malicious traffic exploiting the RCE without taking the firewall offline. Ignoring the vulnerability (Option 0) leaves the organization exposed. Downgrading firmware (Option 2) does not fix the zero-day vulnerability. Relying solely on host-based controls (Option 3) exposes the internal network and removes edge protection.",
        "Enhanced monitoring of management interfaces (Option 2) is critical because RCE exploits often target these administrative entry points. Reducing logging (Option 0) or disabling alerting (Option 1) blinds the security team. Monitoring only during business hours (Option 3) ignores the 24/7 nature of cyber threats.",
        "You must verify that the patch was installed correctly and actively test to ensure the vulnerability is remediated (Option 3). Waiting for a pentest (Option 0) leaves an unacceptable verification gap. Relying on user reports (Option 1) or vendor assurances (Option 2) without independent verification is negligent."
    ],
    276: [
        "A flat network violates the principle of network segmentation (Option 0), which is required to isolate the Cardholder Data Environment (CDE) and reduce PCI scope. While awareness training (Option 1), antivirus (Option 2), and pentesting (Option 3) are PCI DSS requirements, they do not directly address the flat network architecture issue described.",
        "VLANs with centralized ACL templates (Option 0) allow logical isolation of the CDE across all 200 stores efficiently. Physical separation (Option 1) or separate ISPs (Option 2) are cost-prohibitive and extremely difficult to manage. Air-gapping POS terminals (Option 3) would prevent them from processing payments.",
        "Validated network segmentation restricts the PCI DSS assessment scope to only the CDE segment (Option 3), significantly reducing compliance cost and effort. It does not eliminate compliance needs entirely (Option 1) or require individual store assessments if managed centrally (Option 0). It reduces, rather than increases, assessment expense (Option 2)."
    ],
    277: [
        "Because access tokens are long-lived (24 hours) and refresh tokens never expire, the cached tokens on the stolen laptop provide immediate, persistent API access (Option 0). The loss of personal files (Option 1) or hardware cost (Option 3) are secondary concerns. WiFi exposure (Option 2) is less critical than direct API access to core cloud resources.",
        "The inability to revoke tokens (Option 2) means the organization cannot stop the attacker from using the stolen refresh tokens, allowing persistent access. Storing tokens only in cookies (Option 0) or using XML (Option 3) doesn't fix the architectural flaw. OAuth 2.0 is not fundamentally insecure (Option 1) if implemented correctly.",
        "Shortening access token lifetimes, implementing revocation, and expiring refresh tokens (Option 2) directly mitigate the risk of stolen credentials. Adding more data to tokens (Option 0) or using only passwords (Option 1) does not solve the session management issue. Restricting to business hours (Option 3) impacts legitimate service availability."
    ],
    278: [
        "The scenario explicitly states containment takes 4 hours, which is the Mean Time to Contain (MTTC) (Option 2). Detection is working (they see it), so MTTD (Option 1) is not the primary issue here. Pentest frequency (Option 0) and staff numbers (Option 3) are not direct metrics for containment speed.",
        "SOAR platforms automate containment actions (Option 2), reducing MTTC from hours to seconds or minutes. Hiring more analysts (Option 1) helps with investigation but manual containment is still slow. More exercises (Option 0) just identify the problem again. Faster SIEM hardware (Option 3) improves detection, not containment.",
        "The next exercise should specifically validate whether the implemented improvements (like SOAR) successfully reduced the MTTC gap (Option 3). Testing a different scenario (Option 0) or physical controls (Option 2) ignores the known weakness. Hiding the scenario from the blue team (Option 1) turns it into a red team test, defeating the collaborative nature of a purple team exercise."
    ],
    279: [
        "The lack of authentication between internal services is a failure of east-west traffic security (Option 1), allowing unrestricted lateral movement. Input validation (Option 0) and database normalization (Option 3) are unrelated to service authentication. North-south encryption (Option 2) deals with external traffic entering the network, not internal service communication.",
        "Mutual TLS (mTLS) (Option 3) provides strong, cryptographic mutual authentication between services, ensuring both sides verify each other's identity. IP allowlisting (Option 0) is weak and easily spoofed. Shared API keys (Option 1) or plaintext passwords (Option 2) do not provide granular, per-service authentication and are inherently insecure.",
        "Implementing per-service authorization policies via a service mesh (Option 3) enforces least privilege, restricting which services can interact and limiting lateral movement. Giving all services full access (Option 0) maximizes the blast radius. Consolidating servers (Option 1) or hiding documentation (Option 2) do not enforce access control boundaries."
    ],
    280: [
        "Auditing current dependencies (Option 2) immediately identifies if any known compromised packages are already in your environment. Ignoring the threat (Option 0) is negligent. Switching languages (Option 1) or removing all dependencies (Option 3) are extreme, business-disrupting overreactions.",
        "Pinning versions, using lockfiles, and verifying integrity hashes (Option 2) ensure that only explicitly approved and unmodified package versions are installed. Manually reading all code (Option 0) is impossible to scale. Relying on download counts (Option 1) does not prevent malicious updates. Avoiding open source entirely (Option 3) is generally impractical.",
        "Sandboxing the build environment with restricted network and filesystem access (Option 1) prevents malicious install scripts in compromised packages from exfiltrating data or moving laterally. Allowing system commands (Option 0) or admin privileges (Option 2) facilitates the attack. Disabling security scanning (Option 3) increases risk."
    ],
    281: [
        "An outdated plan with wrong contacts and decommissioned systems cannot effectively guide a response during an actual crisis (Option 1), resulting in paralysis. While document length (Option 2) or exercise duration (Option 0) might be administrative issues, operational paralysis during an incident is the primary risk. Phone vs email (Option 3) is a minor preference detail.",
        "The plan must be immediately updated with accurate contacts and current systems (Option 3) to restore its operational readiness. Conducting another exercise (Option 0) with a broken plan is useless. Disbanding the team (Option 1) eliminates your response capability. Waiting for an annual review (Option 2) leaves the organization vulnerable in the interim.",
        "Implementing regular reviews (e.g., quarterly) combined with trigger-based updates for major changes like personnel departures or system decommissioning (Option 2) ensures continuous accuracy. Waiting for real incidents (Option 0) or reviewing every five years (Option 1) guarantees the plan will become obsolete. Assigning maintenance to a departing employee (Option 3) is illogical."
    ],
    282: [
        "Without a clear policy, intent is ambiguous. Consulting legal and HR (Option 2) is essential to determine if a violation occurred and ensure any action is legally defensible and adheres to company protocols. Terminating immediately (Option 1) or making a public announcement (Option 0) without policy backing invites legal liability. Deleting the account (Option 3) destroys potential evidence.",
        "The absence of an explicit rule highlights a gap in the Acceptable Use Policy (AUP) and data handling procedures (Option 1). It does not prove the engineer is malicious (Option 2) or that DLP should be disabled (Option 0). Personal email use for sensitive IP should generally be restricted, not encouraged (Option 3).",
        "An explicit acceptable use policy combined with technical enforcement via DLP blocking rules (Option 3) prevents future ambiguity and stops unauthorized exfiltration regardless of employee intent. Disabling internet (Option 0) or external email entirely (Option 1) cripples productivity. Removing repository access (Option 2) prevents engineers from doing their jobs."
    ],
    283: [
        "The widespread use of vulnerable images points to a systemic lack of governance and failure to provide secure, maintained \"golden\" base images (Option 3). There's no evidence developers are intentionally malicious (Option 0) or that the scanner is wrong (Option 1). Containers are not inherently insecure if properly managed (Option 2).",
        "A dedicated team providing hardened, continuously updated base images (Option 2) gives developers a secure foundation without requiring them to manage OS-level patching. Ignoring vulnerabilities (Option 0) or letting teams manage their own (Option 3) perpetuates the risk. Banning containers (Option 1) halts modern software development.",
        "Implementing admission control in the CI/CD pipeline to block the deployment of images not built from approved bases (Option 1) enforces compliance automatically. Trusting developers without verification (Option 0) fails at scale. Scanning only in production (Option 2) is too late. Removing scanning (Option 3) eliminates visibility."
    ],
    284: [
        "A 99.5% false positive rate generating 50,000 alerts causes severe alert fatigue (Option 0), overwhelming analysts and causing them to miss real incidents. Office space (Option 1), computer speed (Option 2), or SIEM cost (Option 3) are not the root issues affecting incident detection in this scenario.",
        "Alert correlation, tuning, and suppression directly reduce the volume of false positives (Option 0), making the alert queue manageable for the existing team. Generating alerts only during business hours (Option 1) or disabling the SIEM (Option 2) completely ignores off-hours threats. Hiring 250 analysts (Option 3) is a massive, unrealistic expense to handle noise.",
        "An increasing true positive rate and decreasing mean time to investigate (Option 2) indicate that tuning efforts are successfully reducing noise and allowing analysts to focus efficiently on real threats. Total storage (Option 0), rule count (Option 1), or sheer alert volume (Option 3) do not measure the quality or effectiveness of the SOC's response."
    ],
    9001: [
        "Deferring full network routing via a strict zero-trust gateway (Option 1) balances the Board's business requirement for speed with the need to mitigate immediate lateral movement risks from unknown vulnerabilities. Halting the merger (Option 0) ignores business realities. Immediately deploying EDR (Option 2) or accepting risk to meet deadlines (Option 3) leaves the network exposed to lateral spread before defenses are fully operational.",
        "In a merger, the acquiring company inherits the target's legal and regulatory liabilities. Unreported breaches in Europe strongly suggest violations of GDPR's 72-hour notification requirement, risking massive fines (Option 1). Technical methods (Option 0) or credit monitoring costs (Option 2) are secondary to the severe regulatory penalty. Insurance coverage (Option 3) may be voided by the target's failure to report.",
        "The most effective and systematic approach is to map the target's data repositories into your organization's established classification matrix and governance framework during integration (Option 0). Automatically classifying everything as Confidential (Option 1) or relying solely on file extensions (Option 3) will result in inaccurate controls. Firing data owners (Option 2) doesn't solve the immediate technical challenge."
    ],
    9002: [
        "According to standard incident response procedures, containment is the immediate priority to stop the active threat. Disconnecting the server from the network (Option 1) prevents further lateral movement and data exfiltration. Restoration (Option 0) and eradication/reimaging (Option 3) occur later in the lifecycle. Contacting insurance (Option 2) is a later coordination step, not an immediate technical response.",
        "The Order of Volatility dictates that the most volatile data must be captured first. System RAM and active network connections (Option 2) will be permanently lost if the server is powered down. Anti-virus scans (Option 0) alter the filesystem. Forensic hard drive imaging (Option 1) is crucial but should happen after capturing volatile data. Copying the note (Option 3) is insufficient for forensics.",
        "The strongest argument is practical and ethical: paying does not guarantee data recovery (decryption tools often fail) and directly funds criminal enterprises (Option 1). Ransom payments are not universally illegal (Option 0), though they may violate specific sanctions. Cyber insurance often does cover payments (Option 2). Rebuilding from scratch is rarely cheaper or faster than a successful restore (Option 3)."
    ],
    9003: [
        "The Bell-LaPadula model (Option 2) explicitly focuses on confidentiality, using the 'No Read Up' (Simple Security) and 'No Write Down' (*-Property) rules, perfectly matching the agency's requirements. Biba (Option 0) focuses on integrity. Clark-Wilson (Option 1) focuses on commercial integrity and separation of duties. Brewer-Nash (Option 3) prevents conflicts of interest.",
        "Perfect Forward Secrecy (PFS) ensures that the compromise of a long-term key does not compromise past session keys. Diffie-Hellman Ephemeral (DHE) or Elliptic Curve DHE (ECDHE) (Option 1) generate unique, temporary session keys for every exchange, providing PFS. RSA (Option 0), AES (Option 2), and DSA (Option 3) do not inherently provide PFS.",
        "Split knowledge (Option 1) divides the key material among multiple individuals, and dual control requires those individuals to act together to perform a sensitive operation, ensuring no single administrator has unilateral power. Defense in Depth (Option 0) is a general layering concept. Security by Obscurity (Option 2) is a flawed practice. Mandatory Access Control (Option 3) restricts access based on clearance but doesn't specifically address administrative separation of duties for cryptographic keys."
    ]
}

with open(r'c:\projects\cissp\scenarios_fix_2.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for scenario in data:
    s_id = scenario['id']
    if s_id in new_exps:
        exps = new_exps[s_id]
        for idx, q in enumerate(scenario['questions']):
            if idx < len(exps):
                q['exp'] = exps[idx]

with open(r'c:\projects\cissp\scenarios_fixed_2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Successfully written to scenarios_fixed_2.json")
