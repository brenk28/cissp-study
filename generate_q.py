import json

questions = [
    {
        "id": 11031,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization expects a specific cyber attack to occur once every four years. The asset value is $2,000,000, and the exposure factor is 15%. A proposed security control costs $30,000 annually and will reduce the frequency of the attack to once every ten years, while also reducing the exposure factor to 5%. What is the Return on Security Investment (ROSI) for the first year, assuming ROSI = (ALE_before - ALE_after) - Cost?",
        "options": [
            "$45,000",
            "$35,000",
            "$15,000",
            "$10,000"
        ],
        "answer": 1,
        "exp": "The correct answer is '$35,000'. Initial SLE = $2,000,000 * 0.15 = $300,000. Initial ARO = 0.25 (1/4). Initial ALE = $300,000 * 0.25 = $75,000. New SLE = $2,000,000 * 0.05 = $100,000. New ARO = 0.10 (1/10). New ALE = $100,000 * 0.10 = $10,000. Savings = Initial ALE - New ALE = $75,000 - $10,000 = $65,000. ROSI = Savings - Control Cost = $65,000 - $30,000 = $35,000. '$45,000' is incorrect; it miscalculates control costs. '$15,000' is incorrect; miscalculation of ALE. '$10,000' is incorrect; this is the new ALE."
    },
    {
        "id": 11032,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A multinational financial institution operating in both the EU and the US faces a conflict of laws. A data subject in the EU exercises their GDPR 'Right to Erasure' (Right to be Forgotten) for all their historical transaction data. However, US financial regulations mandate that the institution retain these exact transaction records for seven years to prevent money laundering. How should the institution's governance body best address this conflict?",
        "options": [
            "Comply fully with the GDPR request to avoid fines of up to 4% of global turnover.",
            "Retain the data to comply with US law, but implement technical controls like pseudonymization and restrict access solely for legal compliance purposes.",
            "Transfer the data to a US-based server where GDPR no longer applies, then deny the erasure request.",
            "Anonymize the data completely so it falls outside GDPR scope, while still fulfilling US regulatory needs."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Retain the data to comply with US law, but implement technical controls like pseudonymization and restrict access solely for legal compliance purposes.' GDPR Article 17 (Right to Erasure) includes exemptions where processing is necessary for compliance with a legal obligation. By restricting access and retaining only what is legally required, the institution balances both laws. 'Comply fully with the GDPR request to avoid fines of up to 4% of global turnover' is incorrect because ignoring US law could result in banking license revocation or severe penalties. 'Transfer the data to a US-based server where GDPR no longer applies, then deny the erasure request' is incorrect; GDPR has extraterritorial scope. 'Anonymize the data completely so it falls outside GDPR scope, while still fulfilling US regulatory needs' is incorrect; true anonymization usually destroys the specific transaction traceability required by anti-money laundering (AML) laws."
    },
    {
        "id": 11033,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization is transitioning from qualitative risk analysis to quantitative risk analysis. They are utilizing Monte Carlo simulations to model the uncertainty in their expected losses. What is the primary advantage of using a Monte Carlo simulation in quantitative risk management?",
        "options": [
            "It provides a single, exact dollar figure for ALE that guarantees accurate budgeting.",
            "It eliminates the need for subject matter expert (SME) estimations of exposure factors.",
            "It aggregates multiple risk variables using probability distributions to provide a range of potential outcomes and their likelihoods.",
            "It automatically prioritizes risks based on industry-standard qualitative matrices."
        ],
        "answer": 2,
        "exp": "The correct answer is 'It aggregates multiple risk variables using probability distributions to provide a range of potential outcomes and their likelihoods.' Monte Carlo simulations run thousands of iterations using ranges of values (distributions) for inputs like ARO and EF, producing a probability curve of possible outcomes rather than a single point estimate. 'It provides a single, exact dollar figure for ALE that guarantees accurate budgeting' is incorrect; it provides a range, not a single exact figure, and no method guarantees perfect accuracy. 'It eliminates the need for subject matter expert (SME) estimations of exposure factors' is incorrect; SMEs are still needed to define the input distributions. 'It automatically prioritizes risks based on industry-standard qualitative matrices' is incorrect; it is a quantitative method, not a qualitative matrix."
    },
    {
        "id": 11034,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "Under the ISO/IEC 27001 standard, establishing an Information Security Management System (ISMS) requires defining the 'Context of the Organization.' Which of the following governance activities is most directly associated with this requirement?",
        "options": [
            "Conducting vulnerability scans on external-facing web applications.",
            "Identifying internal and external issues, and understanding the needs and expectations of interested parties.",
            "Writing the technical specifications for firewall rules.",
            "Performing a detailed quantitative risk assessment on all critical servers."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Identifying internal and external issues, and understanding the needs and expectations of interested parties.' In ISO 27001 (Clause 4), understanding the context of the organization explicitly requires identifying internal and external factors that affect the ISMS and determining the requirements of interested parties (stakeholders, regulators, etc.). 'Conducting vulnerability scans on external-facing web applications' and 'Writing the technical specifications for firewall rules' are incorrect as they are operational or technical tasks, not contextual governance. 'Performing a detailed quantitative risk assessment on all critical servers' is incorrect; risk assessment comes after establishing the context."
    },
    {
        "id": 11035,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A US-based cloud service provider receives a subpoena under the US CLOUD Act demanding access to a European customer's data stored in a datacenter in Germany. The customer is subject to GDPR. Which of the following best describes the legal mechanism the provider must navigate?",
        "options": [
            "The provider must immediately hand over the data because the CLOUD Act supersedes GDPR globally.",
            "The provider can ignore the subpoena because US law has no jurisdiction over servers physically located in Germany.",
            "The provider must evaluate if the request conflicts with GDPR and may move to quash the subpoena based on comity analysis and bilateral agreements.",
            "The provider must force the US government to physically seize the servers in Germany."
        ],
        "answer": 2,
        "exp": "The correct answer is 'The provider must evaluate if the request conflicts with GDPR and may move to quash the subpoena based on comity analysis and bilateral agreements.' The US CLOUD Act allows providers to move to quash a subpoena if compliance would violate the laws of a qualifying foreign government, leading to a comity analysis. 'The provider must immediately hand over the data because the CLOUD Act supersedes GDPR globally' is incorrect; it does not automatically supersede foreign laws and provides mechanisms to challenge the order. 'The provider can ignore the subpoena because US law has no jurisdiction over servers physically located in Germany' is incorrect; the CLOUD Act asserts jurisdiction over data controlled by US companies regardless of physical location. 'The provider must force the US government to physically seize the servers in Germany' is incorrect; data is provided electronically via the legal order."
    },
    {
        "id": 11036,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "In the context of corporate governance and security, which of the following best illustrates the principle of 'Due Diligence' as opposed to 'Due Care'?",
        "options": [
            "Applying the latest security patches to a critical database server within the SLA timeframe.",
            "Conducting a comprehensive risk assessment of a third-party vendor before signing a service contract.",
            "Enforcing a policy that requires all employees to use multi-factor authentication.",
            "Encrypting all backup tapes before they are sent to an offsite storage facility."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Conducting a comprehensive risk assessment of a third-party vendor before signing a service contract.' Due diligence involves the research, investigation, and analysis done before making a decision or taking an action (e.g., investigating a vendor's security posture). Due care is the ongoing implementation and maintenance of security practices (acting responsibly). 'Applying the latest security patches...', 'Enforcing a policy...', and 'Encrypting all backup tapes...' are all examples of Due Care (taking the correct ongoing actions to protect the organization)."
    },
    {
        "id": 11037,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization is evaluating the Total Cost of Risk (TCoR) to present a comprehensive financial view to the Board of Directors. Which combination of elements accurately represents the components of TCoR?",
        "options": [
            "Annualized Loss Expectancy, Single Loss Expectancy, and Exposure Factor.",
            "Cost of retained losses, cost of risk transfer (insurance premiums), cost of risk control measures, and administrative costs of risk management.",
            "Capital Expenditure (CapEx) for security tools and Operational Expenditure (OpEx) for security staff.",
            "Return on Investment (ROI), Net Present Value (NPV), and Internal Rate of Return (IRR)."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Cost of retained losses, cost of risk transfer (insurance premiums), cost of risk control measures, and administrative costs of risk management.' TCoR is a financial concept encompassing all costs associated with managing risk, including self-insured losses, insurance premiums, control implementation costs, and the overhead of the risk management department. 'Annualized Loss Expectancy...' are metrics for calculating expected loss, not the total cost of managing risk. 'Capital Expenditure...' only covers the cost of controls, ignoring retained losses and insurance. 'Return on Investment...' are financial performance metrics, not components of risk cost."
    },
    {
        "id": 11038,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "The Board of Directors of a publicly traded company is defining the organization's approach to cybersecurity. What is the appropriate role of the Board regarding the organization's 'Risk Appetite'?",
        "options": [
            "The Board develops the specific technical controls required to meet the risk appetite.",
            "The Board approves the overarching risk appetite statement and ensures executive management's strategy aligns with it.",
            "The Board calculates the Annualized Loss Expectancy to determine the exact quantitative risk appetite.",
            "The Board delegates the definition and approval of the risk appetite entirely to the Chief Information Security Officer (CISO)."
        ],
        "answer": 1,
        "exp": "The correct answer is 'The Board approves the overarching risk appetite statement and ensures executive management's strategy aligns with it.' The Board of Directors is responsible for ultimate governance, which includes setting the tone at the top and approving the amount of risk the organization is willing to accept (risk appetite). 'The Board develops the specific technical controls required to meet the risk appetite' is incorrect; this is a management/operational role. 'The Board calculates the Annualized Loss Expectancy...' is incorrect; Boards do not perform technical risk math. 'The Board delegates the definition and approval... entirely to the CISO' is incorrect; risk appetite is a fundamental business governance decision that cannot be fully delegated to a functional leader."
    },
    {
        "id": 11039,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A Chief Information Security Officer (CISO) is using the COBIT framework to align IT security with enterprise governance. According to COBIT principles, what is the primary distinction between 'Governance' and 'Management'?",
        "options": [
            "Governance plans, builds, runs, and monitors activities; Management ensures stakeholder needs are evaluated to determine enterprise objectives.",
            "Governance ensures stakeholder needs, conditions, and options are evaluated to set direction; Management plans, builds, runs, and monitors activities in alignment with the direction.",
            "Governance focuses on tactical implementation of security controls; Management focuses on strategic vision.",
            "Governance is the responsibility of the CISO; Management is the responsibility of the Board of Directors."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Governance ensures stakeholder needs, conditions, and options are evaluated to set direction; Management plans, builds, runs, and monitors activities in alignment with the direction.' COBIT makes a clear distinction: Governance is the responsibility of the Board (evaluating needs, setting direction, monitoring performance), while Management is the responsibility of executive management (planning, building, running, and monitoring daily activities to achieve the goals set by governance). Option 0 reverses these definitions. Option 2 is incorrect because governance is strategic, not tactical. Option 3 is reversed; governance is the Board's role, management is the CISO's role."
    },
    {
        "id": 11040,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A healthcare provider operates in the US (subject to HIPAA) and has a subsidiary in California (subject to CCPA/CPRA). A breach occurs compromising both PHI and non-PHI personal data. HIPAA requires notification without unreasonable delay and in no case later than 60 days. A new state law where some affected individuals reside requires notification within 30 days. How must the organization respond regarding notification timelines?",
        "options": [
            "Notify all individuals within 60 days, as federal law (HIPAA) always preempts state laws regarding breach notification.",
            "Notify the individuals in the specific state within 30 days, and the rest within 60 days, as stricter state laws regarding notification timelines are generally not preempted by HIPAA.",
            "Wait until the investigation is fully complete, even if it takes 90 days, because accurate information takes precedence over timeline mandates.",
            "Notify the federal government within 30 days but wait 60 days to notify the media and affected individuals."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Notify the individuals in the specific state within 30 days, and the rest within 60 days, as stricter state laws regarding notification timelines are generally not preempted by HIPAA.' HIPAA acts as a baseline; if a state law imposes stricter requirements (like a shorter notification timeframe), the organization must comply with the stricter state law for residents of that state. 'Notify all individuals within 60 days, as federal law (HIPAA) always preempts state laws regarding breach notification' is incorrect; HIPAA expressly does not preempt state laws that are more stringent. 'Wait until the investigation is fully complete...' is incorrect; violating statutory timelines invites severe penalties. 'Notify the federal government within 30 days but wait 60 days...' is incorrect and does not align with either law's requirements."
    },
    {
        "id": 11041,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A company is negotiating a contract with a SaaS provider. The provider insists on a limitation of liability clause capped at 12 months of service fees. The company's quantitative risk assessment shows that a breach at the provider could result in $50 million in damages, while 12 months of fees is only $1 million. Which risk management strategy is the company primarily forced to adopt for the remaining $49 million if they sign the contract?",
        "options": [
            "Risk Mitigation",
            "Risk Transference",
            "Risk Acceptance",
            "Risk Avoidance"
        ],
        "answer": 2,
        "exp": "The correct answer is 'Risk Acceptance'. If the liability cap transfers only $1 million of a potential $50 million loss to the provider, the company is inherently accepting the remaining $49 million in financial risk if they proceed with the contract without additional measures (like their own cyber insurance). 'Risk Mitigation' is incorrect; signing a liability cap does not reduce the likelihood or impact of the breach itself. 'Risk Transference' is incorrect for the $49 million; they transferred $1M, but the question asks about the remaining $49M. 'Risk Avoidance' is incorrect; avoidance would mean not signing the contract and not using the SaaS provider at all."
    },
    {
        "id": 11042,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A security metric report provided to the Information Security Steering Committee shows that the 'Percentage of systems with critical vulnerabilities unpatched after 30 days' has risen from 5% to 15%. In the context of governance and metrics, this measurement is best classified as a:",
        "options": [
            "Key Performance Indicator (KPI)",
            "Key Risk Indicator (KRI)",
            "Key Goal Indicator (KGI)",
            "Return on Investment (ROI)"
        ],
        "answer": 1,
        "exp": "The correct answer is 'Key Risk Indicator (KRI)'. A KRI is a metric used to provide an early signal of increasing risk exposure in various areas of the enterprise. An increase in unpatched critical vulnerabilities directly indicates an elevation in the organization's risk profile. 'Key Performance Indicator (KPI)' is incorrect; while it measures performance, a KPI evaluates how well a process is executing against a target (e.g., SLA compliance), whereas this specific metric is a leading indicator of risk. 'Key Goal Indicator (KGI)' measures the achievement of a high-level business goal. 'Return on Investment (ROI)' is a financial metric."
    },
    {
        "id": 11043,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization is applying the FAIR (Factor Analysis of Information Risk) framework to quantify cyber risk. According to FAIR, 'Risk' is defined as the probable frequency and probable magnitude of future loss. Which two primary factors combine to determine the 'Probable Frequency' of a loss event?",
        "options": [
            "Threat Event Frequency and Vulnerability",
            "Loss Magnitude and Exposure Factor",
            "Annualized Rate of Occurrence and Single Loss Expectancy",
            "Inherent Risk and Residual Risk"
        ],
        "answer": 0,
        "exp": "The correct answer is 'Threat Event Frequency and Vulnerability'. In the FAIR methodology, Loss Event Frequency is derived from Threat Event Frequency (how often a threat agent acts against an asset) and Vulnerability (the probability that a threat event will result in a loss, which FAIR defines as the threat capability vs. the asset's resistance strength). 'Loss Magnitude and Exposure Factor' and 'Annualized Rate of Occurrence and Single Loss Expectancy' are terms from traditional ALE calculations, not the specific decomposition used in FAIR. 'Inherent Risk and Residual Risk' represent stages of risk, not the factors calculating frequency."
    },
    {
        "id": 11044,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "During an eDiscovery process for a civil litigation case in the US, the plaintiff demands email records from a multinational corporation's server located in France. The French block statute prohibits the transfer of certain economic and commercial information for foreign judicial proceedings. Which principle is commonly applied by courts to balance these conflicting legal obligations?",
        "options": [
            "The Principle of Least Privilege",
            "The Hague Evidence Convention and International Comity",
            "The Safe Harbor framework",
            "The Principle of Non-repudiation"
        ],
        "answer": 1,
        "exp": "The correct answer is 'The Hague Evidence Convention and International Comity'. When facing conflicting cross-border legal discovery obligations (like US discovery rules vs. French blocking statutes), courts use international comity analysis (often guided by the Aerospatiale Supreme Court decision) and procedures under the Hague Evidence Convention to balance the interests of the two nations. 'The Principle of Least Privilege' is a technical access control concept. 'The Safe Harbor framework' was an invalidated data privacy framework, not a litigation discovery balancing test. 'The Principle of Non-repudiation' ensures a party cannot deny an action, unrelated to eDiscovery conflicts."
    },
    {
        "id": 11045,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An enterprise is structuring its IT Risk Management framework and wants to implement the 'Three Lines of Defense' model. Which of the following represents the correct assignment of responsibilities in this model?",
        "options": [
            "1st Line: Internal Audit; 2nd Line: Risk Management; 3rd Line: Operational IT",
            "1st Line: Operational IT (Management); 2nd Line: Risk Management and Compliance; 3rd Line: Internal Audit",
            "1st Line: Risk Management; 2nd Line: Internal Audit; 3rd Line: External Audit",
            "1st Line: Board of Directors; 2nd Line: CISO; 3rd Line: Security Analysts"
        ],
        "answer": 1,
        "exp": "The correct answer is '1st Line: Operational IT (Management); 2nd Line: Risk Management and Compliance; 3rd Line: Internal Audit'. In the Three Lines of Defense model, the first line is operational management (they own and manage the risk). The second line is the risk management and compliance functions (they oversee and guide risk management). The third line is internal audit (they provide independent assurance to the board). Options 0, 2, and 3 misalign the recognized functions of this standard governance model."
    },
    {
        "id": 11046,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A financial firm purchases a cyber insurance policy to transfer the financial impact of a data breach. After a ransomware attack, the insurer denies the claim, citing the firm's failure to patch a known critical vulnerability that was exploited by the attackers. This denial is most likely based on which common insurance clause?",
        "options": [
            "Force Majeure",
            "Subrogation",
            "Failure to maintain due care/minimum security standards",
            "Indemnification"
        ],
        "answer": 2,
        "exp": "The correct answer is 'Failure to maintain due care/minimum security standards'. Cyber insurance policies typically include conditions requiring the insured to maintain a baseline level of security (due care), such as timely patching of known critical vulnerabilities. Failure to do so can void coverage. 'Force Majeure' refers to unforeseeable circumstances that prevent someone from fulfilling a contract (acts of God). 'Subrogation' is the right of the insurer to pursue a third party that caused the loss. 'Indemnification' is the obligation to compensate for harm or loss, which is what the insurer provides unless a condition is breached."
    },
    {
        "id": 11047,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization relies heavily on a Tier-1 supplier for critical manufacturing components. The risk team performs an analysis and realizes that if the supplier experiences a cyber breach, the organization will halt production within 48 hours, causing a loss of $5 million per day. To address this supply chain risk quantitatively, the organization requires the supplier to hold $50 million in cyber liability insurance and name the organization as an additional insured. Which risk treatment strategy is the organization employing regarding the downstream financial impact?",
        "options": [
            "Risk Acceptance",
            "Risk Avoidance",
            "Risk Mitigation",
            "Risk Transference"
        ],
        "answer": 3,
        "exp": "The correct answer is 'Risk Transference'. By requiring the supplier to hold insurance and name the organization as an additional insured, the organization is transferring the financial impact of the supplier's downtime to the insurance carrier. 'Risk Acceptance' means taking no action. 'Risk Avoidance' would mean severing ties with the supplier. 'Risk Mitigation' would involve actions that reduce the likelihood or impact of the event itself (e.g., requiring the supplier to implement specific security controls, or the organization sourcing a secondary backup supplier), but relying on insurance is pure financial transference."
    },
    {
        "id": 11048,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "When calculating the Net Present Value (NPV) of a proposed 3-year security investment, the risk manager notes that while the ROSI is positive in nominal dollars, the NPV is negative. What financial reality does this indicate to governance stakeholders?",
        "options": [
            "The security control is highly effective and should be implemented immediately.",
            "The upfront capital expenditure is fully recovered in the first year.",
            "When accounting for the time value of money, the project's costs exceed its benefits, making it an economically unfavorable investment.",
            "The Annualized Loss Expectancy will increase if the control is implemented."
        ],
        "answer": 2,
        "exp": "The correct answer is 'When accounting for the time value of money, the project's costs exceed its benefits, making it an economically unfavorable investment.' NPV discounts future cash flows (savings from reduced ALE) back to their present value. If NPV is negative, it means that once the time value of money (interest/discount rate) is factored in, the investment destroys value, even if simple nominal ROSI appeared positive. 'The security control is highly effective...' is incorrect; financially, it is not. 'The upfront capital expenditure is fully recovered...' is incorrect; a negative NPV means it is not recovered sufficiently. 'The Annualized Loss Expectancy will increase...' is incorrect; the ALE may decrease, but not enough to justify the discounted cost of the control."
    },
    {
        "id": 11049,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A European employee of a US-based multinational company uses a corporate laptop for personal web browsing, which is permitted by company policy. During an investigation of an insider threat, the US security team wants to image the laptop and analyze all browser history. Which fundamental privacy principle of the GDPR might this action violate if not strictly scoped?",
        "options": [
            "Data Portability",
            "Purpose Limitation and Data Minimization",
            "Right to Rectification",
            "Integrity and Confidentiality"
        ],
        "answer": 1,
        "exp": "The correct answer is 'Purpose Limitation and Data Minimization'. Collecting and analyzing the entirety of an employee's personal web history when investigating a specific insider threat likely violates the principle of data minimization (gathering only what is strictly necessary) and purpose limitation (processing data only for the legitimate purpose for which it was collected). In the EU, employees retain privacy rights on corporate devices. 'Data Portability' is the right to transfer data to another service. 'Right to Rectification' is the right to correct inaccurate data. 'Integrity and Confidentiality' refers to security controls over the data."
    },
    {
        "id": 11050,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization processes credit card data and is subject to PCI-DSS. They also operate in a country with strict labor laws prohibiting the active monitoring of employee terminal sessions without employee consent and union approval. PCI-DSS Requirement 10 requires logging and monitoring of all access to cardholder data. How should the organization resolve this compliance conflict?",
        "options": [
            "Implement the PCI-DSS controls strictly, as industry standards override local labor laws.",
            "Ignore PCI-DSS Requirement 10, as national law always supersedes industry standards, and accept the risk of non-compliance.",
            "Engage legal counsel and labor unions to negotiate a compliant monitoring strategy that masks personal employee behavior while satisfying PCI-DSS audit trails for cardholder data access.",
            "Relocate the cardholder data environment to a country without restrictive labor laws without informing the unions."
        ],
        "answer": 2,
        "exp": "The correct answer is 'Engage legal counsel and labor unions to negotiate a compliant monitoring strategy that masks personal employee behavior while satisfying PCI-DSS audit trails for cardholder data access.' When laws and industry standards conflict, an organization cannot simply ignore one. They must seek a legally sound compromise, often involving legal counsel and technical controls (like masking, targeted logging, or explicit negotiated consent) to satisfy both the local law and the regulatory standard. 'Implement the PCI-DSS controls strictly...' is incorrect; industry standards do not override national laws. 'Ignore PCI-DSS Requirement 10...' is incorrect; doing so risks losing the ability to process payments. 'Relocate the cardholder data environment...' is a drastic avoidance measure that carries massive legal and operational risks."
    },
    {
        "id": 11051,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "In a robust information security governance structure, why should the Chief Information Security Officer (CISO) ideally report to a role such as the CEO or Chief Risk Officer (CRO) rather than the Chief Information Officer (CIO)?",
        "options": [
            "To ensure the CISO has direct control over the IT budget for purchasing security appliances.",
            "To prevent a conflict of interest, ensuring that security and risk considerations are not subordinate to IT operational metrics and uptime goals.",
            "To allow the CISO to bypass the change advisory board (CAB) for emergency security patches.",
            "To guarantee that the CISO is a member of the Board of Directors."
        ],
        "answer": 1,
        "exp": "The correct answer is 'To prevent a conflict of interest, ensuring that security and risk considerations are not subordinate to IT operational metrics and uptime goals.' The CIO's primary mandate is often IT performance, availability, and cost-efficiency. If the CISO reports to the CIO, security initiatives that slow down operations or increase costs may be overridden, creating a conflict of interest. Reporting to the CEO or CRO ensures independent risk reporting. 'To ensure the CISO has direct control over the IT budget...' is incorrect; budget control is a side effect, not the primary governance reason. 'To allow the CISO to bypass the change advisory board...' is incorrect; CAB bypasses are handled by policy, not reporting structure. 'To guarantee that the CISO is a member of the Board of Directors' is incorrect; the CISO reports to the board but is rarely a board member."
    },
    {
        "id": 11052,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "A critical vulnerability with a CVSS score of 9.8 is announced for a core firewall. The risk management framework dictates that the SLE is $1,000,000 and the new ARO is estimated at 12 (once a month). However, patching the firewall requires 4 hours of downtime, costing the business $15,000,000 in lost revenue. Which of the following represents the most appropriate executive management decision based on risk analysis?",
        "options": [
            "Patch immediately because the CVSS score is Critical, and security must take precedence over revenue.",
            "Accept the risk indefinitely because the cost of the control ($15M) far exceeds the ALE ($12M).",
            "Implement a compensating control, such as a strict IPS signature and network segmentation, to lower the ARO and reduce the ALE, avoiding the immediate $15M downtime cost.",
            "Purchase a $20M cyber insurance policy to transfer the risk, then ignore the patch."
        ],
        "answer": 2,
        "exp": "The correct answer is 'Implement a compensating control, such as a strict IPS signature and network segmentation, to lower the ARO and reduce the ALE, avoiding the immediate $15M downtime cost.' Good risk management balances security with business objectives. Since the cost of patching ($15M) exceeds the ALE ($12M), immediate patching is financially unsound. A compensating control reduces the risk (ARO) temporarily until the patch can be applied during a scheduled maintenance window where downtime costs are lower. 'Patch immediately...' ignores the business impact. 'Accept the risk indefinitely...' is reckless given the high ALE and availability of compensating controls. 'Purchase a $20M cyber insurance policy...' is financially worse than the downtime."
    },
    {
        "id": 11053,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization discovers that a former employee retained access to a cloud-based CRM and downloaded the entire customer database. The organization did not have a procedure to revoke access upon termination. Under legal principles of negligence, the organization's failure to implement basic termination procedures demonstrates a lack of:",
        "options": [
            "Due Diligence",
            "Due Care",
            "Non-repudiation",
            "Data Sovereignty"
        ],
        "answer": 1,
        "exp": "The correct answer is 'Due Care'. Due care is the ongoing implementation of standard practices that a reasonable person or organization would perform to protect assets—such as revoking access when an employee leaves. Failing to maintain this standard is negligence. 'Due Diligence' is the initial investigation and research (e.g., verifying a candidate's background). 'Non-repudiation' proves someone took an action. 'Data Sovereignty' relates to the geographic location and legal jurisdiction of data."
    },
    {
        "id": 11054,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "Which of the following scenarios best describes a situation where an organization would deliberately choose 'Risk Avoidance' as its strategy?",
        "options": [
            "Moving on-premises servers to a cloud infrastructure provider and signing a comprehensive SLA.",
            "Deciding not to open a new branch office in a region experiencing active civil war and extreme instability.",
            "Purchasing a secondary backup generator for a critical data center.",
            "Deploying advanced endpoint detection and response (EDR) software on all employee laptops."
        ],
        "answer": 1,
        "exp": "The correct answer is 'Deciding not to open a new branch office in a region experiencing active civil war and extreme instability.' Risk avoidance involves changing business plans to completely eliminate the risk source. By not opening the branch, the organization completely avoids the associated risks. 'Moving on-premises servers to a cloud infrastructure provider...' is Risk Transference (or Risk Sharing). 'Purchasing a secondary backup generator...' and 'Deploying advanced EDR...' are examples of Risk Mitigation, as they reduce the impact and likelihood of risks but do not eliminate the activity causing the risk."
    },
    {
        "id": 11055,
        "type": "mc",
        "difficulty": 3,
        "domain": "Domain 1: Security and Risk Management",
        "q": "An organization's security policy requires that all third-party vendors must undergo an annual SSAE-18 SOC 2 Type II audit. What specific assurance does a Type II report provide to the organization's governance board that a Type I report does not?",
        "options": [
            "It guarantees that the vendor is fully compliant with GDPR and CCPA privacy regulations.",
            "It provides a point-in-time snapshot of the design of the security controls.",
            "It provides an assessment of the operating effectiveness of the security controls over a specified period of time (e.g., 6 to 12 months).",
            "It validates the financial stability and creditworthiness of the vendor."
        ],
        "answer": 2,
        "exp": "The correct answer is 'It provides an assessment of the operating effectiveness of the security controls over a specified period of time (e.g., 6 to 12 months).' A SOC 2 Type I report evaluates the suitability of the design of controls at a specific point in time. A SOC 2 Type II report evaluates both the design and the operating effectiveness of those controls over a period of time, providing much greater assurance. 'It guarantees that the vendor is fully compliant with GDPR...' is incorrect; SOC 2 focuses on Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy), but it is not a legal certification of GDPR compliance. 'It provides a point-in-time snapshot...' describes a Type I report. 'It validates the financial stability...' is incorrect; financial stability is covered by SOC 1 or separate financial audits, not SOC 2."
    }
]

with open(r'c:\projects\cissp\new_q_d1_2.json', 'w') as f:
    json.dump(questions, f, indent=2)

print("Created 25 questions in c:\\projects\\cissp\\new_q_d1_2.json")
