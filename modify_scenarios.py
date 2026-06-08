import json

def process_scenarios():
    with open('c:/projects/cissp/temp_scenarios_utf8.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    updates = {
        257: {
            "q1": {
                "options": [
                    "Verify whether this is authorized maintenance activity",
                    "Isolate the database server from the network",
                    "Initiate an incident response team call-out",
                    "Disable the service account to halt exfiltration"
                ],
                "exp": "Verify legitimacy first. Disabling the account (Option 3) or isolating servers (Option 1) are proper containment steps but are premature before confirming it's not authorized maintenance. Initiating an IR call-out (Option 2) escalates too quickly before basic validation."
            },
            "q2": {
                "options": [
                    "Notify the Data Protection Officer (DPO) of the breach",
                    "Revoke the compromised service account credentials",
                    "Perform a forensic memory dump of the staging server",
                    "Block all outbound internet access from the database server"
                ],
                "exp": "Revoking credentials stops the ongoing unauthorized access directly at the source (containment). Notifying the DPO (Option 0) is a required reporting step but does not contain the threat. A memory dump (Option 2) is part of investigation, not containment. Blocking outbound internet from the database (Option 3) might not stop the transfer to the internal staging server."
            },
            "q3": {
                "options": [
                    "Require Multi-Factor Authentication (MFA) for the service account",
                    "Implement behavioral analytics on service account activity",
                    "Enforce time-of-day login restrictions on the service account",
                    "Rotate the service account credentials every 30 days"
                ],
                "exp": "Behavioral analytics would detect abnormal query volume and targets even if credentials are valid. MFA (Option 0) is generally not feasible for automated service accounts. Time-of-day restrictions (Option 2) might break legitimate automated tasks scheduled at night. Credential rotation (Option 3) reduces the window of compromise but doesn't prevent abuse of active credentials."
            }
        },
        258: {
            "q1": {
                "options": [
                    "The startup's current security architecture and firewall rules",
                    "The integration timeline for merging the two IT environments",
                    "The volume and type of personal data affected",
                    "The specific encryption algorithms used for data at rest"
                ],
                "exp": "Understanding the volume and type of personal data determines the immediate regulatory and legal exposure under GDPR. Evaluating security architecture (Option 0) and encryption (Option 3) are important technical assessments, but risk magnitude must be scoped first. IT integration timelines (Option 1) are secondary to identifying compliance violations that could jeopardize the acquisition."
            },
            "q2": {
                "options": [
                    "Standard Contractual Clauses for international transfers",
                    "Implementation of Binding Corporate Rules (BCRs)",
                    "An indemnification clause transferring all compliance liability to the startup",
                    "A Data Processing Agreement (DPA) requiring symmetric encryption"
                ],
                "exp": "SCCs are the appropriate, immediate legal mechanism for international data transfers under GDPR. BCRs (Option 1) are valid but take years to gain regulatory approval, making them impossible before the 60-day close. Indemnification (Option 2) may offer financial protection but does not satisfy GDPR transfer requirements. A DPA with encryption (Option 3) is a security measure, not a recognized legal transfer mechanism."
            },
            "q3": {
                "options": [
                    "Migrate personal data to a GDPR-compliant jurisdiction",
                    "Deploy a Data Loss Prevention (DLP) solution on the startup's network",
                    "Conduct a comprehensive vulnerability penetration test",
                    "Implement role-based access control (RBAC) across the merged environment"
                ],
                "exp": "Data residency is the primary compliance gap exposing the parent company to legal risk, making migration the top priority. Deploying DLP (Option 1), conducting pentests (Option 2), and implementing RBAC (Option 3) are all excellent security practices, but they do not resolve the immediate jurisdictional and regulatory violation of storing GDPR data in an unprotected location."
            }
        },
        259: {
            "q1": {
                "options": [
                    "Require end-to-end encryption but double the server infrastructure",
                    "Implement tiered encryption based on data sensitivity",
                    "Accept the latency increase to strictly comply with zero-trust principles",
                    "Offload all cryptographic processing to the client-side browser"
                ],
                "exp": "Tiered encryption applies the strongest protection to sensitive data while maintaining performance for non-sensitive operations, balancing risk and business needs. Doubling infrastructure (Option 0) incurs massive costs instead of optimizing the architecture. Accepting the latency (Option 2) ignores the business requirement for performance. Client-side encryption (Option 3) relies on untrusted environments and is not a comprehensive solution."
            },
            "q2": {
                "options": [
                    "Switch from AES-256 to DES for faster processing speeds",
                    "Implement hardware security modules or dedicated SSL/TLS offloaders",
                    "Deploy IPSec tunnel mode across the application tier",
                    "Use symmetric cryptography for the initial key exchange"
                ],
                "exp": "Hardware security modules (HSMs) or TLS offloaders move cryptographic processing off the application servers, reducing latency. DES (Option 0) is deprecated and insecure. IPSec (Option 2) provides network-level encryption but does not reduce the cryptographic overhead on the endpoints. Symmetric cryptography is faster, but using it for initial key exchange (Option 3) violates secure design (asymmetric is needed for secure key exchange)."
            },
            "q3": {
                "options": [
                    "The number of encrypted packets dropped per hour under peak load",
                    "Revenue impact of latency vs. potential cost of a data breach",
                    "The annualized rate of occurrence (ARO) of a denial-of-service attack",
                    "The cryptographic key length used in the chosen cipher suite"
                ],
                "exp": "Comparing revenue loss from latency against the potential financial impact of a data breach quantifies the tradeoff in business terms. Packet drops (Option 0) and key lengths (Option 3) are technical metrics, not risk justifications for management. A DoS attack's ARO (Option 2) is a valid risk metric, but it does not address the specific tradeoff between encryption overhead and confidentiality."
            }
        },
        260: {
            "q1": {
                "options": [
                    "Asymmetric routing causing stateful firewall connection drops",
                    "Sensitive traffic routing through unencrypted underlay paths",
                    "BGP route flapping leading to widespread network loops",
                    "IP address space overlap causing resource exhaustion"
                ],
                "exp": "The primary security (confidentiality) risk is that sensitive traffic might be routed over unencrypted transport if policies fail during the transition. Asymmetric routing (Option 0), route flapping (Option 2), and IP overlaps (Option 3) are significant network engineering concerns that impact availability, but unencrypted traffic directly compromises data confidentiality."
            },
            "q2": {
                "options": [
                    "Mandatory IPsec encryption for all inter-site traffic",
                    "Quality of Service (QoS) tagging for real-time threat intelligence",
                    "Micro-segmentation of the local branch office VLANs",
                    "Deployment of a centralized Intrusion Prevention System (IPS)"
                ],
                "exp": "Mandatory encryption ensures confidentiality across the overlay regardless of whether the traffic traverses the MPLS or internet underlay. Micro-segmentation (Option 2) and IPS deployment (Option 3) are excellent defense-in-depth measures, but establishing basic encrypted transport across the WAN is the foundational first step. QoS (Option 1) is primarily for availability and performance, not security."
            },
            "q3": {
                "options": [
                    "Configure the SD-WAN path as a passive, failover-only route",
                    "Implement strict default-deny rules exclusively on the SD-WAN interfaces",
                    "Route all security logging traffic exclusively over the MPLS path",
                    "Apply consistent, identical access policies to both MPLS and SD-WAN paths"
                ],
                "exp": "Consistent policy enforcement across both paths prevents security gaps and ensures traffic is inspected equally regardless of how it routes. Using SD-WAN only for failover (Option 0) negates its benefits. Applying strict rules only to SD-WAN (Option 1) leaves the MPLS path with a different security posture. Forcing logs over MPLS (Option 2) creates a single point of failure for visibility."
            }
        },
        261: {
            "q1": {
                "options": [
                    "Discretionary Access Control (DAC) cannot scale to the size of a hospital",
                    "Static single-role RBAC struggles with users requiring multiple concurrent roles",
                    "Mandatory Access Control (MAC) lacks sufficient data classification labels",
                    "Separation of Duties (SoD) principles inherently prohibit medical and administrative access"
                ],
                "exp": "The scenario illustrates the limitation of static RBAC systems that assign a single role per user, failing to model real-world multi-hat scenarios. The issue is with RBAC, not DAC (Option 0) or MAC (Option 2). While SoD (Option 3) is a concern, a doctor can legitimately hold both clinical and research roles without violating SoD if properly architected."
            },
            "q2": {
                "options": [
                    "Provision multiple distinct user accounts for the doctor, one for each role",
                    "Migrate the EHR system to a Mandatory Access Control (MAC) architecture",
                    "Implement composite roles or Attribute-Based Access Control (ABAC)",
                    "Grant the doctor global administrator privileges with temporary time-bounds"
                ],
                "exp": "Composite roles or ABAC can dynamically evaluate user attributes and grant necessary access across different functions while maintaining least privilege. Provisioning multiple accounts (Option 0) creates audit and credential management nightmares. MAC (Option 1) is overly rigid and generally reserved for military/intelligence. Global admin access (Option 3) grossly violates the principle of least privilege."
            },
            "q3": {
                "options": [
                    "Authentication token expiration during lengthy medical procedures",
                    "Inability to integrate with the hospital's Single Sign-On (SSO) provider",
                    "Increased processing overhead on the identity and access management server",
                    "Privilege accumulation (creep) that violates Separation of Duties (SoD)"
                ],
                "exp": "Assigning multiple roles or broad attributes risks privilege creep, where the combination of permissions violates SoD (e.g., prescribing medication and approving the pharmacy budget). Token expiration (Option 0), SSO integration (Option 1), and processing overhead (Option 2) are operational IT issues, not primary security risks associated with multi-role access control models."
            }
        },
        262: {
            "q1": {
                "options": [
                    "Document the finding, halt further testing on that vector, and report it",
                    "Extract a small, anonymized sample of patient records as a proof-of-concept",
                    "Pivot through the vulnerable database server to identify internal targets",
                    "Launch a denial-of-service attack to take the vulnerable portal offline"
                ],
                "exp": "The tester must strictly adhere to the Rules of Engagement (RoE) and stop testing the vector since exploiting it would access patient data. Extracting even a small sample (Option 1) or pivoting (Option 2) violates the explicit RoE prohibiting exploitation of patient data. Launching a DoS (Option 3) is a disruptive action that is almost certainly out of scope and highly unethical."
            },
            "q2": {
                "options": [
                    "Wait to formally present it during the final executive read-out session",
                    "Encrypt the findings and email them to the general IT support helpdesk",
                    "Immediately pause the engagement and notify the designated point of contact",
                    "Submit an emergency pull request directly to the development team's repository"
                ],
                "exp": "Critical vulnerabilities that expose sensitive data require out-of-band, immediate notification to the designated point of contact. Waiting for the final report (Option 0) leaves the organization unnecessarily exposed. Emailing the general helpdesk (Option 1) risks exposing the vulnerability to unauthorized staff. Directly submitting code (Option 3) is outside the scope of a penetration test and bypasses change management."
            },
            "q3": {
                "options": [
                    "Initiate an emergency schema update on the production database",
                    "Deploy a Web Application Firewall (WAF) rule to block the specific attack pattern",
                    "Take the patient portal offline until the entire codebase is rewritten",
                    "Perform a forensic analysis to determine if the flaw was intentionally planted"
                ],
                "exp": "A WAF rule (virtual patching) provides immediate mitigation and containment, protecting the data while developers work on a permanent code fix. Updating the database schema (Option 0) doesn't fix a web application SQL injection flaw. Taking the portal offline completely (Option 2) impacts availability and patient care unnecessarily. Forensic analysis (Option 3) is unwarranted without evidence of an insider threat."
            }
        },
        263: {
            "q1": {
                "options": [
                    "The XSS vulnerability manifests only through runtime execution and DOM interaction",
                    "The SAST tool lacks the necessary database connection strings to parse the flow",
                    "SAST cannot analyze source code written in modern JavaScript frameworks",
                    "DAST performs deeper source code inspection that static tools cannot achieve"
                ],
                "exp": "Static Application Security Testing (SAST) analyzes code at rest and often misses runtime context (like DOM-based or stored XSS retrieved from a database), which Dynamic Application Security Testing (DAST) catches by interacting with the running application. SAST does not need database credentials (Option 1). Modern SAST tools absolutely support JavaScript (Option 2). DAST does not inspect source code at all; it tests the running application (Option 3)."
            },
            "q2": {
                "options": [
                    "Deploy to production but implement continuous logging for XSS payloads",
                    "Delay the release until the high-severity vulnerability is fully remediated",
                    "Release on schedule and formally document the flaw in the risk register",
                    "Downgrade the vulnerability severity to medium and release as a known issue"
                ],
                "exp": "A stored XSS vulnerability is high-severity and compromises users; the release must be delayed to remediate the flaw. Deploying with monitoring (Option 0), documenting it in a risk register (Option 2), or artificially downgrading the severity (Option 3) are unacceptable risk acceptances for a known, exploitable vulnerability in a production environment."
            },
            "q3": {
                "options": [
                    "Shift DAST left by integrating it earlier in the pipeline on feature branches",
                    "Replace the SAST tool entirely with Interactive Application Security Testing (IAST)",
                    "Require manual penetration testing sign-off before every code commit",
                    "Implement a Web Application Firewall (WAF) in the staging environment"
                ],
                "exp": "Shifting DAST left allows developers to catch runtime vulnerabilities earlier in the SDLC, before release deadlines loom. IAST is excellent but should augment, not replace, SAST (Option 1). Manual pentesting for every commit (Option 2) destroys CI/CD velocity. A WAF in staging (Option 3) only masks the vulnerability; it does not prevent developers from writing insecure code."
            }
        }
    }

    for scenario in data:
        sid = scenario['id']
        if sid in updates:
            for idx, q_key in enumerate(["q1", "q2", "q3"]):
                if idx < len(scenario['questions']):
                    scenario['questions'][idx]['options'] = updates[sid][q_key]['options']
                    scenario['questions'][idx]['exp'] = updates[sid][q_key]['exp']
    
    with open('c:/projects/cissp/batch1_done.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

if __name__ == '__main__':
    process_scenarios()
