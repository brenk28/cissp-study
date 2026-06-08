import json

new_data = {
    1: {
        "options": {
            1: "Deploying cryptographic hashing algorithms",
            2: "Establishing a data governance policy",
            3: "Verifying user authorization credentials"
        },
        "exp": "Integrity is correct because it ensures that data remains unchanged, authentic, and protected from unauthorized modification. 'Deploying cryptographic hashing algorithms' is a technical trap; it is a mechanism to enforce integrity, not the triad element itself. 'Establishing a data governance policy' is a management trap representing a preventive action, not the foundational element. 'Verifying user authorization credentials' is a technical action related to access control and confidentiality, not integrity."
    },
    6: {
        "options": {
            1: "Restoring the server from the latest nightly backup",
            2: "Updating the disaster recovery plan",
            3: "Installing redundancy to prevent future crashes"
        },
        "exp": "Corrective is correct because corrective controls are specifically designed to restore systems or processes to their normal state after an incident has occurred. 'Restoring the server from the latest nightly backup' is a technical trap; it describes the specific technical action rather than the control category. 'Updating the disaster recovery plan' is a management trap and a right action at the wrong time (done after recovery). 'Installing redundancy to prevent future crashes' is a right action but represents a preventive control, not a corrective one."
    },
    8: {
        "options": {
            1: "Purchasing cybersecurity insurance",
            2: "Outsourcing the vulnerable service to a cloud provider",
            3: "Conducting a quantitative risk assessment"
        },
        "exp": "Risk transfer is correct because it involves passing the financial impact of a risk to a third party, such as purchasing insurance or outsourcing a service. 'Purchasing cybersecurity insurance' and 'Outsourcing the vulnerable service to a cloud provider' are technical/specific implementation traps; they are examples of risk transfer, not the category itself. 'Conducting a quantitative risk assessment' is a management trap (right action, wrong time) performed before deciding on a risk response."
    },
    9: {
        "options": {
            0: "Notify the data subjects immediately to prevent harm",
            1: "Drafting an incident response report for legal review",
            3: "Isolate the affected servers to contain the breach"
        },
        "exp": "72 hours is correct because GDPR Article 33 explicitly mandates that data controllers notify the appropriate supervisory authority within 72 hours of becoming aware of a breach. 'Notify the data subjects immediately to prevent harm' is a right action/wrong target trap; communication to subjects is distinct from the supervisory authority deadline. 'Drafting an incident response report for legal review' is a management trap that doesn't answer the timeline. 'Isolate the affected servers to contain the breach' is a technical trap that is part of incident response, not regulatory reporting."
    },
    10: {
        "options": {
            0: "Enforcing mandatory access controls (MAC) across the agency",
            2: "Conducting a Federal Information Security Modernization Act (FISMA) audit",
            3: "Implementing FIPS 140-2 validated cryptography"
        },
        "exp": "NIST RMF (SP 800-37) is correct because the National Institute of Standards and Technology created the Risk Management Framework specifically to guide U.S. federal agencies in securing their information systems, as mandated by FISMA. 'Enforcing mandatory access controls' and 'Implementing FIPS 140-2 validated cryptography' are technical traps representing specific controls, not the overarching framework. 'Conducting a FISMA audit' is a management trap (right action, wrong time) representing the assessment process rather than the framework itself."
    },
    11: {
        "options": {
            0: "Deploying automated vulnerability scanners versus manual penetration testing",
            1: "Creating a risk register before calculating the Annualized Loss Expectancy (ALE)",
            3: "Presenting the findings to senior management for formal risk acceptance"
        },
        "exp": "Qualitative uses subjective ratings; quantitative uses dollar values is correct because qualitative analysis relies on descriptive scales (e.g., High, Medium, Low) based on judgment, whereas quantitative assigns objective monetary values (e.g., SLE, ALE) to risks. 'Deploying automated vulnerability scanners versus manual penetration testing' is a technical trap confusing assessment tools with risk analysis types. 'Creating a risk register' and 'Presenting findings to senior management' are management traps representing correct actions at different stages of the risk management lifecycle, not the difference between the two analysis types."
    },
    12: {
        "options": {
            3: "Deploying technical countermeasures"
        },
        "exp": "Avoid, Transfer, Mitigate, and Accept are correct as they represent the four standard methods of responding to risk within risk management frameworks. 'Deploying technical countermeasures' is a technical trap; while it is a method to achieve mitigation, it is a specific technical action rather than a high-level risk treatment option."
    },
    14: {
        "options": {
            0: "Configuring the firewall to block all inbound traffic to the VLAN",
            2: "Conducting a formal risk acceptance review with senior management",
            3: "Upgrading the legacy software during the next budget cycle"
        },
        "exp": "A compensating control is correct because it is an alternative measure implemented to mitigate the risk when the primary control (upgrading the software) is not feasible or too costly. 'Configuring the firewall to block all inbound traffic' is a technical trap describing the mechanism rather than the control type. 'Conducting a formal risk acceptance review' is a management trap that should have already occurred. 'Upgrading the legacy software during the next budget cycle' is a right action/wrong time trap representing a future plan, not the current control type."
    },
    15: {
        "options": {
            0: "Deploy open-source alternatives to meet the technical requirements cheaply",
            1: "Update the risk register and schedule a compliance audit",
            2: "Revoke network access for non-compliant systems immediately"
        },
        "exp": "Present a cost-benefit analysis with alternatives is correct because the CISO's role is to advise leadership on security risks and compliance impacts so management can make informed business decisions. 'Deploy open-source alternatives' and 'Revoke network access' are technical traps that bypass necessary business alignment and management decision-making. 'Update the risk register and schedule a compliance audit' is a management trap (right action, wrong time) that is premature before a strategy is decided."
    },
    16: {
        "options": {
            0: "Configure the database to automatically purge records after 30 days",
            1: "Draft a localized privacy policy acknowledging both timelines",
            3: "Encrypt the data at rest so it cannot be read during the 7-year period"
        },
        "exp": "Seek legal counsel on jurisdiction-specific requirements is correct because conflicts of law require specialized legal expertise to navigate safely; security professionals should not make complex legal determinations. 'Configure the database to automatically purge records' and 'Encrypt the data at rest' are technical traps attempting to use technical mechanisms to bypass a legal contradiction. 'Draft a localized privacy policy' is a management trap representing a right action at the wrong time, as legal counsel must first determine the strategy."
    },
    17: {
        "options": {
            1: "Immediately deploy endpoint detection and response (EDR) to the target's assets",
            2: "Update the corporate incident response plan to include the new assets",
            3: "Conduct a full penetration test on the target's infrastructure"
        },
        "exp": "Present quantified risks and mitigation options to the board is correct because the CISO's role is to ensure leadership understands the risk exposure before making business decisions. 'Immediately deploy endpoint detection and response' is a technical trap, jumping to implementation before risks are accepted or the deal is closed. 'Update the corporate incident response plan' and 'Conduct a full penetration test' are right action/wrong time traps that should occur post-acquisition or earlier in due diligence."
    },
    18: {
        "options": {
            1: "Rewrite the vulnerable code using a secure software development lifecycle (SSDLC)",
            2: "Perform a web application firewall (WAF) rule update",
            3: "Require senior management to sign a formal risk acceptance letter"
        },
        "exp": "Deploy compensating controls and launch with monitoring is correct as it balances the business need (launch) with risk mitigation until a permanent fix is ready. 'Rewrite the vulnerable code using an SSDLC' is a technical trap (right action, wrong time) that ignores the business timeline constraint. 'Perform a WAF rule update' is a specific technical trap that assumes a single solution fits without knowing the exact architecture. 'Require senior management to sign a formal risk acceptance letter' is a management trap; while risk must be accepted, the CISO must first recommend mitigations."
    },
    19: {
        "options": {
            0: "Yes, because deploying the countermeasure reduces the attack surface",
            1: "No, management must first update the risk register and business impact analysis",
            3: "No, a quantitative risk assessment must be performed on the residual $5,000"
        },
        "exp": "Yes, the net safeguard value of $10,000 justifies it is correct. The math is: Original ALE ($50,000) - Mitigated ALE ($5,000) - Cost of Countermeasure ($35,000) = Net Benefit of $10,000. 'Yes, because deploying the countermeasure reduces the attack surface' is a technical trap; it is factually true but ignores the financial justification required by quantitative analysis. 'Management must first update the risk register' and 'A quantitative risk assessment must be performed on the residual' are management traps introducing unnecessary administrative delays (right action, wrong time)."
    },
    20: {
        "options": {
            1: "Configuring synchronous replication to a hot site within 1 hour",
            2: "Initiating the disaster recovery plan within 4 hours of the incident",
            3: "Purchasing backup software capable of taking hourly snapshots"
        },
        "exp": "Maximum 4 hours downtime and maximum 1 hour data loss is correct. Recovery Time Objective (RTO) dictates how long a system can be down before unacceptable impact occurs, and Recovery Point Objective (RPO) dictates the maximum allowable data loss measured in time. 'Configuring synchronous replication' and 'Purchasing backup software' are technical traps that describe methods to meet the requirements, not the definition of the metrics themselves. 'Initiating the disaster recovery plan' is a management trap describing an operational step."
    },
    22: {
        "options": {
            0: "Implementing Data Loss Prevention (DLP) controls to block the transfer",
            1: "Terminating the employee and revoking all logical access",
            3: "Updating the acceptable use policy (AUP) to forbid data theft"
        },
        "exp": "Civil law for trade secret misappropriation is correct because selling proprietary data constitutes theft of trade secrets, which is primarily pursued via civil litigation to recover damages. 'Implementing Data Loss Prevention (DLP) controls' is a technical trap (right action, wrong time/concept) that attempts to solve a legal classification question with a preventative control. 'Terminating the employee and revoking all logical access' and 'Updating the acceptable use policy' are management traps representing administrative responses rather than identifying the applicable law."
    },
    27: {
        "options": {
            0: "Updating the asset inventory to reflect the new owner",
            2: "Physically shredding the drive to guarantee data destruction",
            3: "Running a standard operating system quick format"
        },
        "exp": "Overwriting with approved patterns (clearing) is correct because it ensures data cannot be easily recovered while leaving the drive functional for reuse internally. 'Updating the asset inventory' is a management trap (right action, wrong time) done after sanitization. 'Physically shredding the drive' is a technical trap; while highly secure, it violates the business requirement to reuse the drive. 'Running a standard operating system quick format' is a technical trap as it only removes file pointers and is insufficient for true sanitization."
    },
    28: {
        "options": {
            0: "Encrypting the entire volume with AES-256 before disposal",
            1: "Obtaining a certificate of destruction from senior management",
            2: "Implementing a multi-pass overwrite using DoD 5220.22-M standards"
        },
        "exp": "Physical destruction is correct because incineration or shredding into tiny fragments completely guarantees the data can never be recovered by any means. 'Encrypting the entire volume with AES-256' and 'Implementing a multi-pass overwrite' are technical traps representing highly secure methods, but they are still inferior to physical destruction in terms of absolute irrecoverability. 'Obtaining a certificate of destruction' is a management trap (right action, wrong time) that provides administrative proof but does not actually destroy the data."
    },
    30: {
        "options": {
            3: "Removing the file system pointers from the Master File Table (MFT)"
        },
        "exp": "Clearing, Purging, Physical destruction, and Cryptographic erasure are correct because they are recognized by NIST SP 800-88 as valid methods to sanitize media. 'Removing the file system pointers from the Master File Table (MFT)' is a technical trap; it is a description of a quick format, which leaves raw data intact and is not considered a valid sanitization method."
    },
    32: {
        "options": {
            0: "Deploying a Virtual Local Area Network (VLAN) to segment the database",
            2: "Conducting a formal risk assessment before altering labels",
            3: "Encrypting the PHI data to lower its overall risk profile"
        },
        "exp": "Apply the highest classification to both is correct (high water mark principle) because when mixed data cannot be separated, the entire system must meet the security standards of the most sensitive data. 'Deploying a VLAN' and 'Encrypting the PHI data' are technical traps; they are good security practices but do not answer how to classify the system under mixed data scenarios. 'Conducting a formal risk assessment before altering labels' is a management trap (right action, wrong time) that avoids resolving the immediate classification conflict."
    },
    33: {
        "options": {
            1: "Review firewall and VPN logs for unauthorized data exfiltration",
            2: "Schedule an emergency meeting with the legal and HR departments",
            3: "Enforce a mandatory password reset for the remaining development team"
        },
        "exp": "Disable all accounts and revoke access immediately is correct because immediate containment prevents the former employee from causing harm, stealing data, or planting logic bombs. 'Review firewall and VPN logs' is a technical trap (right action, wrong time) representing investigation, which occurs after containment. 'Schedule an emergency meeting with legal and HR' is a management trap that delays critical containment. 'Enforce a mandatory password reset for the remaining development team' is a technical trap that is secondary to securing the terminated employee's direct access."
    }
}

with open('c:/projects/cissp/batch1.json', 'r') as f:
    data = json.load(f)

for item in data:
    qid = item['id']
    if qid in new_data:
        nd = new_data[qid]
        for opt_idx, new_text in nd['options'].items():
            item['options'][opt_idx] = new_text
        item['exp'] = nd['exp']

with open('c:/projects/cissp/out1.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Done writing to c:/projects/cissp/out1.json")
