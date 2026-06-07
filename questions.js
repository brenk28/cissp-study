// CISSP Practice Exam - Comprehensive Question Bank
// Question types: "mc" (multiple choice), "ms" (multi-select), "order" (ordering/drag-drop)
// Difficulty: 1=Easy, 2=Medium, 3=Hard

const questionBank = [

// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 1: Security and Risk Management                     ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:1, type:"mc", difficulty:1, domain:"Security and Risk Management",
  q:"Which element of the CIA triad ensures that data is not altered by unauthorized people?",
  options:["Confidentiality","Integrity","Availability","Authorization"], answer:1,
  exp:"Integrity ensures data remains unchanged and authentic. Confidentiality prevents disclosure, Availability ensures access." },

{ id:2, type:"mc", difficulty:1, domain:"Security and Risk Management",
  q:"Which document provides management guidance on acceptable risk levels?",
  options:["Security Policy","Risk Appetite Statement","Standard Operating Procedure","Baseline Configuration"], answer:1,
  exp:"Risk Appetite defines how much risk the organization is willing to accept." },

{ id:3, type:"mc", difficulty:1, domain:"Security and Risk Management",
  q:"What is the difference between a policy and a procedure?",
  options:["Policies are technical; procedures are managerial","Policies state what; procedures state how","Policies are optional; procedures are mandatory","There is no difference"], answer:1,
  exp:"Policies are high-level statements of management intent. Procedures provide step-by-step instructions for implementing policies." },

{ id:4, type:"mc", difficulty:1, domain:"Security and Risk Management",
  q:"Which of the following is an example of administrative (managerial) control?",
  options:["Firewall","Security awareness training","Biometric lock","Encryption"], answer:1,
  exp:"Security awareness training is an administrative control. Firewalls and encryption are technical. Biometric locks are physical." },

{ id:5, type:"mc", difficulty:1, domain:"Security and Risk Management",
  q:"What does 'due diligence' mean in security governance?",
  options:["Implementing controls after an incident","Researching and understanding risks before acting","Documenting all security events","Hiring qualified security staff"], answer:1,
  exp:"Due diligence is the practice of researching and understanding risks. Due care is acting on that knowledge responsibly." },

// --- Medium ---
{ id:6, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"You are implementing a control to fix a broken server after a crash. What type of control function is this?",
  options:["Preventive","Detective","Corrective","Deterrent"], answer:2,
  exp:"Corrective controls restore systems to normal after an incident. Detective controls identify incidents, Preventive stops them." },

{ id:7, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the formula for calculating Single Loss Expectancy (SLE)?",
  options:["AV × ARO","AV × EF","ALE / ARO","EF × ARO"], answer:1,
  exp:"SLE = Asset Value (AV) × Exposure Factor (EF). ALE = SLE × ARO." },

{ id:8, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"Which risk response involves shifting the financial burden of a loss to another party?",
  options:["Risk avoidance","Risk mitigation","Risk transfer","Risk acceptance"], answer:2,
  exp:"Risk transfer shifts financial impact (e.g., insurance, outsourcing). It does not eliminate risk entirely — residual risk remains." },

{ id:9, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"Under GDPR, what is the maximum time allowed to notify the supervisory authority after a data breach?",
  options:["24 hours","48 hours","72 hours","7 days"], answer:2,
  exp:"GDPR Article 33 requires breach notification to the supervisory authority within 72 hours of becoming aware of a personal data breach." },

{ id:10, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"Which security framework was specifically designed for federal information systems in the United States?",
  options:["ISO 27001","COBIT","NIST RMF (SP 800-37)","ITIL"], answer:2,
  exp:"NIST Risk Management Framework (RMF) is mandated for U.S. federal systems by FISMA. ISO 27001 is international, COBIT is for IT governance, ITIL is for service management." },

{ id:11, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the primary difference between qualitative and quantitative risk analysis?",
  options:["Qualitative is faster; quantitative is slower","Qualitative uses subjective ratings; quantitative uses dollar values","Qualitative is more accurate; quantitative is an estimate","There is no meaningful difference"], answer:1,
  exp:"Qualitative uses subjective scales (High/Medium/Low). Quantitative assigns monetary values (SLE, ALE, ARO) for objective comparison." },

{ id:12, type:"ms", difficulty:2, domain:"Security and Risk Management",
  q:"Which of the following are valid risk treatment options? (Select ALL that apply)",
  options:["Avoid","Transfer","Mitigate","Ignore","Accept"], answers:[0,1,2,4],
  exp:"The four risk treatment options are Avoid, Transfer, Mitigate, and Accept. 'Ignore' is never a valid treatment — it is negligence." },

{ id:13, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What type of law deals with wrongs committed against society as a whole?",
  options:["Civil law","Criminal law","Administrative law","Common law"], answer:1,
  exp:"Criminal law addresses wrongs against society (prosecution by the state). Civil law addresses disputes between parties. Administrative law covers government regulations." },

// --- Hard ---
{ id:14, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"A company accepts the risk of legacy software because upgrading is too expensive. However, they place the legacy server on an isolated VLAN with strict firewall rules. What type of risk treatment is the VLAN?",
  options:["Risk Transfer","Risk Avoidance","Compensating Control","Corrective Control"], answer:2,
  exp:"Compensating controls are alternative measures put in place when the primary control is not feasible." },

{ id:15, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"A new regulation requires your organization to implement specific security controls. Management states the cost is prohibitive. As the CISO, what is the BEST course of action?",
  options:["Implement only the controls you can afford","Document the decision to accept the risk","Perform a cost-benefit analysis and present alternatives to management","Ignore the regulation until audited"], answer:2,
  exp:"Present a risk-based analysis with options. Management makes the final decision, but the CISO provides informed options." },

{ id:16, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization operates in multiple countries. GDPR requires data deletion within 30 days of request, but local law in Country X requires 7-year retention. How should you handle this conflict?",
  options:["Follow GDPR as it is stricter","Follow Country X law as local law takes precedence","Seek legal counsel to determine jurisdiction-specific requirements","Store data outside Country X to avoid the conflict"], answer:2,
  exp:"Legal conflicts require legal expertise. The answer depends on where data is stored, where the user resides, and specific circumstances." },

{ id:17, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your company is acquiring a smaller firm. Due diligence reveals significant security deficiencies. Senior management wants to complete the acquisition quickly. What is your BEST action as CISO?",
  options:["Recommend delaying until issues are fixed","Present the risks to the board with quantified impact and mitigation options","Accept the risks to meet business timelines","Insist on terminating the acquisition"], answer:1,
  exp:"Present factual risk assessment with business impact and mitigation options. Leadership makes business decisions; your role is to inform." },

{ id:18, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your company develops a mobile app for millions of users. A security review reveals a moderate vulnerability requiring 6 months to fix. Marketing wants to launch in 1 month. What should you recommend?",
  options:["Delay launch until the issue is fixed","Launch with the vulnerability and fix it later","Implement compensating controls and launch with enhanced monitoring","Remove the vulnerable feature entirely"], answer:2,
  exp:"Balance risk and business need. Compensating controls and monitoring can reduce risk to acceptable levels while maintaining the timeline." },

{ id:19, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"An organization's ALE for a specific threat is $50,000. A proposed countermeasure costs $35,000 annually and would reduce the ALE to $5,000. Should the countermeasure be implemented?",
  options:["Yes, because the cost is less than the original ALE","Yes, because the value of the safeguard ($45,000) exceeds the cost ($35,000)","No, because the countermeasure doesn't eliminate the risk entirely","No, because the residual risk is still $5,000"], answer:1,
  exp:"Value of safeguard = ALE(before) - ALE(after) - annual cost = $50,000 - $5,000 - $35,000 = $10,000 net benefit. The safeguard is cost-justified." },

{ id:20, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"During a BIA, you identify that the order processing system has an RTO of 4 hours and an RPO of 1 hour. What does this mean for your disaster recovery strategy?",
  options:["The system can be down for up to 4 hours, and you can lose up to 1 hour of data","The system must be backed up every 4 hours with 1-hour test restores","The system must have 4 redundant copies updated hourly","The system needs 4 hours to fully recover and 1 hour to partially recover"], answer:0,
  exp:"RTO (Recovery Time Objective) is the max acceptable downtime. RPO (Recovery Point Objective) is the max acceptable data loss measured in time. RPO of 1 hour means backups/replication must occur at least hourly." },

{ id:21, type:"order", difficulty:3, domain:"Security and Risk Management",
  q:"Place the Business Continuity Planning (BCP) phases in the correct order:",
  items:["Project Scope and Planning","Business Impact Analysis","Recovery Strategy Development","Plan Design and Development","Implementation, Testing, and Maintenance"],
  correctOrder:[0,1,2,3,4],
  exp:"BCP follows a structured lifecycle: scope the project, analyze impacts, develop recovery strategies, design the plan, then implement and maintain it." },

{ id:22, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"A security team discovers that an employee has been selling proprietary data to a competitor. Which type of law is MOST likely to apply?",
  options:["Administrative law","Civil law (trade secret misappropriation)","Regulatory law","International law"], answer:1,
  exp:"Trade secret theft is primarily a civil matter under laws like the Uniform Trade Secrets Act. It may also have criminal implications under the Economic Espionage Act." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 2: Asset Security                                   ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:23, type:"mc", difficulty:1, domain:"Asset Security",
  q:"Who is primarily responsible for classifying data?",
  options:["The System Administrator","The Data Custodian","The Data Owner","The Security Officer"], answer:2,
  exp:"The Data Owner (usually management) knows the value of the data and is responsible for its classification." },

{ id:24, type:"mc", difficulty:1, domain:"Asset Security",
  q:"What is the role of a data custodian?",
  options:["Classify data based on business value","Implement and maintain security controls for data","Define data retention policies","Audit data access logs"], answer:1,
  exp:"The data custodian (often IT staff) implements the protections defined by the data owner. They handle backups, access controls, and day-to-day security." },

{ id:25, type:"mc", difficulty:1, domain:"Asset Security",
  q:"Which data classification level in the government scheme is the LOWEST?",
  options:["Secret","Top Secret","Confidential","Unclassified"], answer:3,
  exp:"Government classifications from lowest to highest: Unclassified → Confidential → Secret → Top Secret." },

{ id:26, type:"mc", difficulty:1, domain:"Asset Security",
  q:"What is the primary purpose of data classification?",
  options:["To comply with regulations","To determine the level of protection data requires","To organize files alphabetically","To reduce storage costs"], answer:1,
  exp:"Data classification determines the value and sensitivity of data so appropriate protection levels can be applied." },

// --- Medium ---
{ id:27, type:"mc", difficulty:2, domain:"Asset Security",
  q:"Which method is most appropriate for sanitizing a hard drive that will be reused within the same high-security organization?",
  options:["Degaussing","Overwriting","Physical Destruction","Formatting"], answer:1,
  exp:"Overwriting (clearing) is suitable for reuse. Degaussing and destruction ruin the drive. Formatting is insufficient." },

{ id:28, type:"mc", difficulty:2, domain:"Asset Security",
  q:"Under the concept of data remanence, which is the MOST secure method of ensuring data cannot be recovered?",
  options:["Single-pass overwrite","Degaussing","Cryptographic erasure","Physical destruction"], answer:3,
  exp:"Physical destruction (shredding, incineration) guarantees data cannot be recovered. Degaussing works for magnetic media. Crypto erasure works if encryption was properly implemented." },

{ id:29, type:"mc", difficulty:2, domain:"Asset Security",
  q:"What is the purpose of a data retention policy?",
  options:["To ensure all data is kept forever","To define how long data must be stored before secure disposal","To classify data by sensitivity","To encrypt data at rest"], answer:1,
  exp:"Data retention policies define storage duration requirements based on legal, regulatory, and business needs, and mandate secure disposal afterward." },

{ id:30, type:"ms", difficulty:2, domain:"Asset Security",
  q:"Which of the following are valid methods for media sanitization? (Select ALL that apply)",
  options:["Clearing (overwriting)","Purging (degaussing)","Physical destruction","Quick format","Cryptographic erasure"], answers:[0,1,2,4],
  exp:"NIST SP 800-88 defines clearing, purging, and physical destruction as valid sanitization methods. Cryptographic erasure is also valid. Quick format only removes file system pointers." },

{ id:31, type:"mc", difficulty:2, domain:"Asset Security",
  q:"Which role is responsible for determining who can access specific data?",
  options:["Data processor","Data owner","Data custodian","System administrator"], answer:1,
  exp:"The data owner determines access rights based on business needs and data classification. The custodian implements those decisions." },

// --- Hard ---
{ id:32, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization handles healthcare data (PHI) and credit card data (PCI). The DPO wants PHI classified as 'Confidential' while finance wants PCI data as 'Restricted' (higher). What should you recommend?",
  options:["Use the highest classification (Restricted) for both","Keep separate classifications as requested","Classify both as Confidential","Create a new 'Regulated Data' category"], answer:0,
  exp:"When data has multiple sensitivity requirements, use the highest classification level to ensure adequate protection." },

{ id:33, type:"mc", difficulty:3, domain:"Asset Security",
  q:"A terminated employee had access to proprietary source code. The departure was contentious. What should be your FIRST priority?",
  options:["Disable all accounts and access immediately","Conduct a data exfiltration investigation","Inform law enforcement","Initiate legal action for NDA breach"], answer:0,
  exp:"Immediately disable access to prevent further data exfiltration or sabotage. Investigation and legal action follow after securing the environment." },

{ id:34, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization is moving sensitive data to a cloud provider. The provider offers encryption at rest. What should you verify FIRST?",
  options:["Encryption algorithm strength","Who controls the encryption keys","Compliance certifications","Data center physical security"], answer:1,
  exp:"Key management is critical. If the provider controls keys, they can access your data. Verify if you can use customer-managed keys (CMK) or BYOK." },

{ id:35, type:"mc", difficulty:3, domain:"Asset Security",
  q:"A company stores PII in a database shared with non-sensitive marketing data. An auditor flags this as a concern. What principle is being violated?",
  options:["Separation of duties","Data minimization","Least privilege","Need-to-know"], answer:1,
  exp:"Data minimization (also data segregation) requires that sensitive data be isolated from non-sensitive data. Mixing PII with marketing data increases exposure risk." },

{ id:36, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization uses a cloud-based SaaS application. The vendor's contract states they may use anonymized customer data for analytics. What is your PRIMARY concern?",
  options:["Re-identification risk","Bandwidth usage","Vendor lock-in","Application performance"], answer:0,
  exp:"Anonymized data can potentially be re-identified through correlation with other datasets. Evaluate whether the anonymization technique is robust enough (k-anonymity, differential privacy)." },

{ id:37, type:"mc", difficulty:3, domain:"Asset Security",
  q:"An employee reports their laptop was stolen from their car. The laptop has full disk encryption and requires login. What should be your FIRST action?",
  options:["File a police report","Remotely wipe the device if possible","Change the user's credentials","Assess what data was on the device"], answer:1,
  exp:"If remote wipe capability exists (MDM), use it immediately. Even with FDE, there are attack vectors. After wiping, revoke credentials and assess data exposure." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 3: Security Architecture and Engineering            ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:38, type:"mc", difficulty:1, domain:"Security Architecture and Engineering",
  q:"Which type of fire suppression system is most suitable for a data center?",
  options:["Water sprinklers","Wet pipe system","Clean agent (gaseous) system","Foam-based system"], answer:2,
  exp:"Clean agent systems (FM-200, Inergen) don't damage electronic equipment. Water-based systems can destroy servers." },

{ id:39, type:"mc", difficulty:1, domain:"Security Architecture and Engineering",
  q:"What is the primary purpose of a DMZ (Demilitarized Zone) in network architecture?",
  options:["To store backup data","To provide an additional layer between external and internal networks","To encrypt all traffic","To monitor employee activity"], answer:1,
  exp:"A DMZ is a perimeter network segment that hosts public-facing services, providing a buffer between untrusted external networks and the trusted internal network." },

{ id:40, type:"mc", difficulty:1, domain:"Security Architecture and Engineering",
  q:"Which security principle states that a system should be designed to fail in a secure state?",
  options:["Defense in depth","Fail-secure","Least privilege","Separation of duties"], answer:1,
  exp:"Fail-secure (fail-closed) ensures that when a system fails, it defaults to a secure state rather than an open/insecure state." },

{ id:41, type:"mc", difficulty:1, domain:"Security Architecture and Engineering",
  q:"What does symmetric encryption use?",
  options:["Two different keys","One shared key","A hash function only","No keys"], answer:1,
  exp:"Symmetric encryption uses a single shared key for both encryption and decryption. Examples include AES, DES, and 3DES." },

// --- Medium ---
{ id:42, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"Which security model focuses primarily on preventing conflicts of interest?",
  options:["Bell-LaPadula","Biba","Brewer-Nash","Clark-Wilson"], answer:2,
  exp:"The Brewer-Nash (Chinese Wall) model prevents conflicts of interest by dynamically changing access rights based on user activity." },

{ id:43, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"Which cryptographic algorithm is asymmetric?",
  options:["AES","DES","RSA","Blowfish"], answer:2,
  exp:"RSA is asymmetric (public/private key pair). AES, DES, and Blowfish are symmetric (single shared key)." },

{ id:44, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"The Bell-LaPadula model enforces which security property?",
  options:["Integrity — no read up, no write down","Confidentiality — no read up, no write down","Availability — ensure system uptime","Non-repudiation — prevent denial of actions"], answer:1,
  exp:"Bell-LaPadula enforces confidentiality: 'no read up' (simple security) and 'no write down' (star property) to prevent information leakage to lower clearance levels." },

{ id:45, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"The Biba model is the inverse of Bell-LaPadula. What does Biba protect?",
  options:["Confidentiality","Integrity","Availability","Authentication"], answer:1,
  exp:"Biba protects integrity: 'no read down' and 'no write up' — a subject cannot read lower-integrity data or write to higher-integrity objects." },

{ id:46, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the key difference between a block cipher and a stream cipher?",
  options:["Block ciphers are faster","Stream ciphers encrypt one bit/byte at a time; block ciphers encrypt fixed-size blocks","Block ciphers don't need keys","Stream ciphers are more secure"], answer:1,
  exp:"Stream ciphers (RC4) encrypt data one bit or byte at a time. Block ciphers (AES, DES) encrypt fixed-size blocks (e.g., 128 bits). Each has different use cases." },

{ id:47, type:"ms", difficulty:2, domain:"Security Architecture and Engineering",
  q:"Which of the following are symmetric encryption algorithms? (Select ALL that apply)",
  options:["AES","RSA","3DES","ECC","Blowfish"], answers:[0,2,4],
  exp:"AES, 3DES, and Blowfish are symmetric. RSA and ECC are asymmetric (public key) algorithms." },

{ id:48, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What does a digital signature provide?",
  options:["Confidentiality and integrity","Integrity, authentication, and non-repudiation","Confidentiality and availability","Only authentication"], answer:1,
  exp:"Digital signatures provide integrity (tamper detection), authentication (sender identity), and non-repudiation (sender cannot deny). They do NOT provide confidentiality." },

// --- Hard ---
{ id:49, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"You are implementing a cryptography solution. You need to ensure that past sessions cannot be decrypted even if the server's private key is compromised in the future. What feature must you enable?",
  options:["Digital Signatures","Perfect Forward Secrecy (PFS)","HMAC","Elliptic Curve Cryptography"], answer:1,
  exp:"PFS ensures session keys are not derived from the server's long-term private key, protecting past sessions from future key compromise." },

{ id:50, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"You are designing a secure facility. The building has a reception area, office space, a data center, and a loading dock. Which areas should have mantrap access?",
  options:["Reception only","Data center only","Data center and loading dock","All areas"], answer:2,
  exp:"Mantraps prevent tailgating in high-security areas. Data centers contain critical assets; loading docks are vulnerable entry points." },

{ id:51, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"You are evaluating TPM for full disk encryption. What is the PRIMARY security benefit TPM provides over software-based encryption?",
  options:["Faster encryption/decryption","Hardware-based key storage resistant to extraction","Larger key sizes","Better algorithm support"], answer:1,
  exp:"TPM stores cryptographic keys in tamper-resistant hardware. Software keys in memory are vulnerable to memory dumps and cold boot attacks." },

{ id:52, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"You are implementing defense-in-depth for a web application with a WAF, network firewall, and IDS. Despite this, an SQL injection succeeds. What does this MOST likely indicate?",
  options:["All security controls failed","The attack bypassed network controls through an encrypted channel","Defense-in-depth doesn't work","Insufficient security budget"], answer:1,
  exp:"If traffic is encrypted (HTTPS), network IDS can't inspect payloads. This highlights the need for application-layer controls like parameterized queries." },

{ id:53, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"You are selecting a hash algorithm for integrity verification of software downloads. Which should you choose?",
  options:["MD5","SHA-1","SHA-256","CRC32"], answer:2,
  exp:"SHA-256 is cryptographically secure. MD5 and SHA-1 have known collision vulnerabilities. CRC32 is for error detection, not security." },

{ id:54, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"A development team proposes using ECB (Electronic Codebook) mode for AES encryption of customer images. What is your PRIMARY concern?",
  options:["ECB is too slow for large files","ECB reveals patterns in plaintext because identical blocks produce identical ciphertext","ECB requires larger keys than other modes","ECB doesn't support AES"], answer:1,
  exp:"ECB mode encrypts each block independently, so identical plaintext blocks produce identical ciphertext blocks, revealing data patterns. Use CBC, CTR, or GCM instead." },

{ id:55, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization needs to implement encryption for data at rest and in transit. The key management system must support automatic key rotation. Which approach is BEST?",
  options:["Manual key management with documented procedures","Hardware Security Module (HSM) with automated key lifecycle management","Store keys in environment variables","Use the same key for all encryption operations"], answer:1,
  exp:"HSMs provide tamper-resistant key storage with automated lifecycle management including generation, rotation, and destruction. Manual processes don't scale and are error-prone." },

{ id:56, type:"order", difficulty:2, domain:"Security Architecture and Engineering",
  q:"Order the following from WEAKEST to STRONGEST encryption:",
  items:["DES (56-bit)","3DES (168-bit)","AES-128","AES-256"],
  correctOrder:[0,1,2,3],
  exp:"DES uses a 56-bit key (easily brute-forced). 3DES applies DES three times. AES-128 and AES-256 are modern standards with increasing key sizes." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 4: Communication and Network Security               ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:57, type:"mc", difficulty:1, domain:"Communication and Network Security",
  q:"Which port is commonly used for standard HTTP traffic?",
  options:["22","80","443","3389"], answer:1,
  exp:"Port 80 is HTTP. Port 443 is HTTPS. Port 22 is SSH. Port 3389 is RDP." },

{ id:58, type:"mc", difficulty:1, domain:"Communication and Network Security",
  q:"What layer of the OSI model do routers operate at?",
  options:["Layer 1 - Physical","Layer 2 - Data Link","Layer 3 - Network","Layer 4 - Transport"], answer:2,
  exp:"Routers operate at Layer 3 (Network) using IP addresses for forwarding decisions. Switches operate at Layer 2 using MAC addresses." },

{ id:59, type:"mc", difficulty:1, domain:"Communication and Network Security",
  q:"What does a firewall primarily do?",
  options:["Encrypt data in transit","Filter network traffic based on rules","Detect malware on endpoints","Authenticate users"], answer:1,
  exp:"Firewalls filter network traffic based on predefined rules (allow/deny) using criteria like IP addresses, ports, and protocols." },

{ id:60, type:"mc", difficulty:1, domain:"Communication and Network Security",
  q:"Which protocol provides secure web browsing?",
  options:["HTTP","FTP","HTTPS","Telnet"], answer:2,
  exp:"HTTPS uses TLS to encrypt HTTP traffic. HTTP, FTP, and Telnet transmit data in cleartext." },

// --- Medium ---
{ id:61, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"Your organization is implementing VLANs. What is the PRIMARY security benefit?",
  options:["Increased bandwidth","Network segmentation and isolation","Reduced hardware costs","Faster routing"], answer:1,
  exp:"VLANs provide logical segmentation, limiting broadcast domains and isolating traffic to reduce attack surface." },

{ id:62, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is the difference between a stateful and stateless firewall?",
  options:["Stateful firewalls are faster","Stateful firewalls track connection state; stateless firewalls evaluate each packet independently","Stateless firewalls are more secure","There is no meaningful difference"], answer:1,
  exp:"Stateful firewalls maintain a connection state table and can make decisions based on the context of the traffic flow. Stateless firewalls evaluate each packet in isolation." },

{ id:63, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"Which protocol operates at the Network layer and provides connectionless communication?",
  options:["TCP","UDP","IP","HTTP"], answer:2,
  exp:"IP operates at Layer 3 (Network) and is connectionless. TCP and UDP are Layer 4 (Transport). HTTP is Layer 7 (Application)." },

{ id:64, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is the primary purpose of NAT (Network Address Translation)?",
  options:["Encrypt network traffic","Translate private IP addresses to public IP addresses","Authenticate network devices","Monitor network performance"], answer:1,
  exp:"NAT translates private (RFC 1918) addresses to public addresses, allowing internal devices to communicate with the internet while hiding the internal network structure." },

{ id:65, type:"ms", difficulty:2, domain:"Communication and Network Security",
  q:"Which of the following are Layer 2 attacks? (Select ALL that apply)",
  options:["ARP spoofing","SQL injection","MAC flooding","SYN flood","VLAN hopping"], answers:[0,2,4],
  exp:"ARP spoofing, MAC flooding, and VLAN hopping are Layer 2 (Data Link) attacks. SQL injection is an application-layer attack. SYN flood is Layer 4." },

{ id:66, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is the purpose of an IDS compared to an IPS?",
  options:["IDS blocks traffic; IPS only alerts","IDS detects and alerts; IPS detects and blocks","They are the same technology","IDS works at Layer 7; IPS works at Layer 3"], answer:1,
  exp:"An IDS (Intrusion Detection System) monitors and alerts. An IPS (Intrusion Prevention System) monitors, alerts, AND actively blocks malicious traffic inline." },

// --- Hard ---
{ id:67, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"During a security assessment, you discover that internal DNS servers are responding to queries from external sources. What should you do FIRST?",
  options:["Implement DNSSEC","Configure split-horizon DNS","Enable DNS query logging","Conduct a full network scan"], answer:1,
  exp:"Split-horizon DNS separates internal and external DNS views, preventing information disclosure. DNSSEC provides integrity but doesn't solve the exposure issue." },

{ id:68, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"An attacker sends an ICMP echo request with a spoofed source address of the victim to a network broadcast address. What attack is this?",
  options:["Ping of Death","Smurf Attack","Fraggle Attack","SYN Flood"], answer:1,
  exp:"Smurf attack uses ICMP echo to broadcast addresses with a spoofed source. Fraggle uses UDP. Ping of Death uses oversized packets." },

{ id:69, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"You need to secure site-to-site communications over the Internet with confidentiality, integrity, and authentication. What is the BEST solution?",
  options:["TLS","IPSec VPN","SSH tunnel","HTTPS proxy"], answer:1,
  exp:"IPSec VPN provides network-layer encryption for site-to-site connectivity with mutual authentication. TLS/HTTPS are application-layer." },

{ id:70, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization implements network segmentation. Database servers are on VLAN 10, app servers on VLAN 20, user workstations on VLAN 30. What firewall rule set is MOST secure?",
  options:["Allow VLAN 20 → VLAN 10, deny all other inter-VLAN traffic","Allow VLAN 30 → VLAN 20 → VLAN 10 in sequence","Allow VLAN 20 → VLAN 10 on required ports only, deny all else","Default deny all, explicit allow based on business need"], answer:3,
  exp:"Default deny with explicit, least-privilege allow rules is the most secure approach." },

{ id:71, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization implements a new wireless network. You need secure guest access without exposing the corporate network. What is the BEST solution?",
  options:["WPA2-PSK with a long passphrase","Separate guest SSID on the same VLAN with firewall rules","Separate guest SSID on isolated VLAN with internet-only access","Open network with captive portal authentication"], answer:2,
  exp:"Separate guest SSID on an isolated VLAN with no access to corporate resources provides segmentation and meets guest needs." },

{ id:72, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"A network engineer proposes using SSL VPN instead of IPSec VPN for remote access. What is the PRIMARY advantage of SSL VPN?",
  options:["Stronger encryption","Works through most firewalls and NAT without special configuration","Lower licensing costs","Better performance"], answer:1,
  exp:"SSL/TLS VPN uses port 443 (HTTPS), which is typically allowed through firewalls and NAT. IPSec can have issues traversing NAT and requires specific ports/protocols." },

{ id:73, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"You notice unusual DNS traffic patterns — very long subdomain names in DNS queries to an external domain. What type of attack is MOST likely occurring?",
  options:["DNS amplification","DNS cache poisoning","DNS tunneling (data exfiltration)","DNS zone transfer"], answer:2,
  exp:"DNS tunneling encodes data in DNS queries (often in subdomain labels) to exfiltrate data or establish covert channels, bypassing traditional security controls." },

{ id:74, type:"order", difficulty:2, domain:"Communication and Network Security",
  q:"Order the OSI model layers from BOTTOM (Layer 1) to TOP (Layer 7):",
  items:["Physical","Data Link","Network","Transport","Session","Presentation","Application"],
  correctOrder:[0,1,2,3,4,5,6],
  exp:"The OSI model layers from bottom to top: Physical → Data Link → Network → Transport → Session → Presentation → Application." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 5: Identity and Access Management (IAM)             ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:75, type:"mc", difficulty:1, domain:"Identity and Access Management",
  q:"A password is an example of which authentication factor?",
  options:["Something you are","Something you have","Something you know","Something you do"], answer:2,
  exp:"Passwords are knowledge-based (Something you know). Tokens are 'have', biometrics are 'are'." },

{ id:76, type:"mc", difficulty:1, domain:"Identity and Access Management",
  q:"What is the purpose of multi-factor authentication (MFA)?",
  options:["To use multiple passwords","To require two or more different types of authentication factors","To encrypt authentication data","To speed up the login process"], answer:1,
  exp:"MFA requires factors from two or more different categories (know, have, are). Two passwords is NOT MFA since both are 'something you know'." },

{ id:77, type:"mc", difficulty:1, domain:"Identity and Access Management",
  q:"Which access control model allows the resource owner to decide who can access the resource?",
  options:["Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Role-Based Access Control (RBAC)","Attribute-Based Access Control (ABAC)"], answer:1,
  exp:"DAC lets the owner set permissions at their discretion. MAC uses centrally defined labels. RBAC uses roles. ABAC uses attributes." },

{ id:78, type:"mc", difficulty:1, domain:"Identity and Access Management",
  q:"What is Single Sign-On (SSO)?",
  options:["Using the same password for all systems","Authenticating once to gain access to multiple systems","A biometric authentication method","A type of encryption"], answer:1,
  exp:"SSO allows a user to authenticate once and gain access to multiple applications without re-authenticating for each one." },

// --- Medium ---
{ id:79, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"Which error rate in biometrics represents the point where FAR and FRR intersect?",
  options:["Crossover Error Rate (CER)","Type I Error","Type II Error","Failure to Enroll Rate"], answer:0,
  exp:"The CER (or EER) is where the False Acceptance Rate and False Rejection Rate intersect. Lower CER means a better biometric system." },

{ id:80, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What access control model uses labels and clearances to determine access?",
  options:["DAC","MAC","RBAC","Rule-Based"], answer:1,
  exp:"MAC uses security labels (classifications) and clearances. DAC is owner-controlled, RBAC uses job roles." },

{ id:81, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is the difference between identification and authentication?",
  options:["They are the same thing","Identification claims an identity; authentication proves it","Identification is for users; authentication is for systems","Authentication happens before identification"], answer:1,
  exp:"Identification is claiming who you are (username). Authentication is proving it (password, biometric). Authorization follows — determining what you can do." },

{ id:82, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"In RBAC, access is determined by what?",
  options:["Data sensitivity labels","The user's job function or role","The user's department","The time of day"], answer:1,
  exp:"Role-Based Access Control assigns permissions to roles, and users are assigned to roles based on their job function. This simplifies access management." },

{ id:83, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is a Kerberos ticket-granting ticket (TGT)?",
  options:["A permanent access token","A temporary credential used to request service tickets without re-authenticating","An encryption key","A digital certificate"], answer:1,
  exp:"After initial authentication, the KDC issues a TGT. The user presents the TGT to obtain service tickets for specific resources without re-entering credentials." },

{ id:84, type:"ms", difficulty:2, domain:"Identity and Access Management",
  q:"Which of the following are authentication factors? (Select ALL that apply)",
  options:["Something you know","Somewhere you are","Something you have","Something you are"], answers:[0,1,2,3],
  exp:"The authentication factors are: Something you know (password), Something you have (token), Something you are (biometric), and Somewhere you are (location/geolocation)." },

// --- Hard ---
{ id:85, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"In a federated identity system using SAML, who generates the SAML assertion?",
  options:["Service Provider","Identity Provider","User's Browser","The LDAP Server"], answer:1,
  exp:"The Identity Provider (IdP) authenticates the user and generates the assertion sent to the Service Provider." },

{ id:86, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"You are implementing OAuth 2.0 for a mobile app. Which grant type is MOST appropriate?",
  options:["Client Credentials","Resource Owner Password Credentials","Authorization Code with PKCE","Implicit Grant"], answer:2,
  exp:"Authorization Code with PKCE is recommended for mobile apps as it mitigates code interception attacks. Implicit is deprecated." },

{ id:87, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"During an access review, you discover a former contractor still has VPN access 3 months after contract termination. What does this MOST likely indicate?",
  options:["A deliberate insider threat","Inadequate offboarding procedures","Compromised VPN server","Social engineering attack"], answer:1,
  exp:"This most likely indicates process failure in offboarding. Focus on fixing the process gap and implementing automated access revocation." },

{ id:88, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"You implement MFA using SMS for token delivery. Auditors flag this as insufficient. What is the PRIMARY concern?",
  options:["SMS is not encrypted","SMS can be intercepted via SIM swapping or SS7 attacks","SMS has delivery delays","Users may not have cell service"], answer:1,
  exp:"SMS is vulnerable to SIM swapping and SS7 exploits. NIST deprecated SMS-based MFA. Use authenticator apps or hardware tokens." },

{ id:89, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"You are implementing least privilege. A DBA needs daily maintenance access but also emergency access to production data. How should you structure access?",
  options:["Grant full DBA rights permanently","Use two accounts: standard for maintenance, elevated for emergencies with logging","Use role-based access that changes based on time of day","Require manager approval for all database access"], answer:1,
  exp:"Separate privileged accounts ('break-glass') for emergency use with comprehensive logging. Normal tasks use standard accounts with minimal rights." },

{ id:90, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"An organization uses ABAC (Attribute-Based Access Control). What PRIMARY advantage does ABAC provide over RBAC?",
  options:["Simpler administration","Fine-grained, context-aware access decisions using multiple attributes","Better performance","Lower implementation cost"], answer:1,
  exp:"ABAC evaluates multiple attributes (user role, time, location, resource sensitivity, action type) for fine-grained decisions. RBAC is simpler but less flexible for complex scenarios." },

{ id:91, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"A privileged user account was used to access systems at 3 AM from an unusual geographic location. The account owner denies the activity. What should you do FIRST?",
  options:["Disable the account immediately","Review authentication logs and session details","Reset the password","Notify law enforcement"], answer:1,
  exp:"Review logs first to understand the scope and confirm compromise before taking disruptive actions. The activity could be legitimate (travel, VPN) or a true compromise." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 6: Security Assessment and Testing                  ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:92, type:"mc", difficulty:1, domain:"Security Assessment and Testing",
  q:"What is a vulnerability assessment?",
  options:["An active attempt to exploit vulnerabilities","A systematic review to identify known weaknesses","A type of firewall configuration","A risk transfer mechanism"], answer:1,
  exp:"A vulnerability assessment identifies and catalogs known weaknesses. Unlike penetration testing, it does not actively exploit vulnerabilities." },

{ id:93, type:"mc", difficulty:1, domain:"Security Assessment and Testing",
  q:"What is the primary difference between a vulnerability scan and a penetration test?",
  options:["Vulnerability scans are automated; pen tests are manual","Vulnerability scans identify weaknesses; pen tests actively exploit them","Vulnerability scans are more thorough","Penetration tests only target web applications"], answer:1,
  exp:"Vulnerability scans identify and report vulnerabilities. Penetration tests go further by actively attempting to exploit them to assess real-world impact." },

{ id:94, type:"mc", difficulty:1, domain:"Security Assessment and Testing",
  q:"What does SOC 2 Type II report evaluate?",
  options:["Financial statement accuracy","Design and operating effectiveness of controls over a period of time","Network architecture","Employee background checks"], answer:1,
  exp:"SOC 2 Type II evaluates both the design suitability and the operating effectiveness of controls over a specified period (typically 6-12 months)." },

// --- Medium ---
{ id:95, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"Which type of penetration test provides the testing team with full knowledge of the environment?",
  options:["Black box","White box","Gray box","Red team"], answer:1,
  exp:"White box provides complete knowledge (architecture, source code). Black box has none. Gray box has partial." },

{ id:96, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is a false positive in vulnerability scanning?",
  options:["A real vulnerability that was missed","A reported vulnerability that does not actually exist","A vulnerability that was correctly identified","A scan that failed to complete"], answer:1,
  exp:"A false positive is when a scanner reports a vulnerability that doesn't actually exist. A false negative is when a real vulnerability is missed." },

{ id:97, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is the purpose of a security audit compared to a security assessment?",
  options:["Audits are informal; assessments are formal","Audits verify compliance with standards; assessments evaluate overall security posture","Audits only focus on technical controls","They are the same thing"], answer:1,
  exp:"Audits measure compliance against a specific standard or policy. Assessments are broader evaluations of the overall security posture." },

{ id:98, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"During code review, a SAST tool reports a SQL injection vulnerability. What type of testing is SAST?",
  options:["Dynamic testing","Static analysis of source code without execution","Runtime monitoring","Manual penetration testing"], answer:1,
  exp:"SAST (Static Application Security Testing) analyzes source code, bytecode, or binary without executing the application. DAST tests the running application." },

{ id:99, type:"ms", difficulty:2, domain:"Security Assessment and Testing",
  q:"Which of the following are types of security assessments? (Select ALL that apply)",
  options:["Vulnerability scan","Penetration test","Risk assessment","Performance benchmark"], answers:[0,1,2],
  exp:"Vulnerability scans, penetration tests, and risk assessments are all security assessments. Performance benchmarks measure system performance, not security." },

// --- Hard ---
{ id:100, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"An organization wants to test incident response capability without interrupting operations. Teams perform response actions in real-time on isolated systems. Which test type is this?",
  options:["Tabletop Exercise","Parallel Test","Full Interruption Test","Simulation Test"], answer:3,
  exp:"A Simulation involves role-playing the response in a realistic manner without hurting production. Tabletop is discussion-only." },

{ id:101, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"During a security audit, you find that developers have sudo access on production servers. Management says it's necessary. What should you recommend FIRST?",
  options:["Remove all developer sudo access immediately","Implement privileged access management (PAM) with session recording","Require temporary access requests each time","Accept the risk and document it"], answer:1,
  exp:"PAM provides controlled, monitored access meeting both security and business needs." },

{ id:102, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"Your pen test team exploited SQL injection and extracted customer data. Management asks if the system is now 'secure.' What should you communicate?",
  options:["Yes, the system is now secure","No, more testing is needed to find other vulnerabilities","The system meets compliance requirements","Security testing is never complete"], answer:1,
  exp:"Finding one vulnerability doesn't mean no others exist. Security is ongoing; one test provides a snapshot." },

{ id:103, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"A vulnerability scan identifies OpenSSL Heartbleed on a web server scheduled for decommissioning in 2 weeks. What should you do?",
  options:["Patch immediately","Accept the risk since decommissioning is imminent","Isolate the server until decommissioning","Accelerate the decommissioning timeline"], answer:2,
  exp:"Heartbleed allows memory disclosure. Isolation limits exposure while maintaining business continuity until decommissioning." },

{ id:104, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"Your organization completed a SOC 2 Type II audit. A qualified opinion was issued. What does this mean?",
  options:["All controls are operating effectively","Some controls had exceptions but the overall report is reliable with noted issues","The audit was incomplete","The organization failed the audit entirely"], answer:1,
  exp:"A qualified opinion means the auditor found specific exceptions or deviations, but the overall control environment is reliable with noted reservations. An unqualified opinion means no issues found." },

{ id:105, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"You are designing a security testing program for a CI/CD pipeline. What combination provides the BEST coverage?",
  options:["SAST only","DAST only","SAST in build pipeline + DAST in staging + periodic pen tests","Manual code review for all changes"], answer:2,
  exp:"Layered testing: SAST catches code-level issues early, DAST finds runtime issues in staging, and periodic pen tests provide real-world attack simulation." },

{ id:106, type:"order", difficulty:3, domain:"Security Assessment and Testing",
  q:"Place the penetration testing phases in the correct order:",
  items:["Planning and Reconnaissance","Scanning and Enumeration","Exploitation","Post-Exploitation and Pivoting","Reporting"],
  correctOrder:[0,1,2,3,4],
  exp:"Pen testing follows: Plan/Recon → Scan/Enumerate → Exploit → Post-Exploit/Pivot → Report findings and recommendations." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 7: Security Operations                              ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:107, type:"mc", difficulty:1, domain:"Security Operations",
  q:"What is the primary goal of the containment phase in incident response?",
  options:["Document lessons learned","Remove the threat","Limit the damage and prevent spreading","Restore systems to normal"], answer:2,
  exp:"Containment focuses on isolating the incident to prevent further damage. Eradication removes the threat; Recovery restores systems." },

{ id:108, type:"mc", difficulty:1, domain:"Security Operations",
  q:"What does RAID stand for?",
  options:["Random Access Integrated Disk","Redundant Array of Independent Disks","Rapid Application and Infrastructure Deployment","Redundant Application and Information Database"], answer:1,
  exp:"RAID (Redundant Array of Independent Disks) combines multiple disks for redundancy and/or performance." },

{ id:109, type:"mc", difficulty:1, domain:"Security Operations",
  q:"What is the purpose of a backup?",
  options:["To improve system performance","To create a copy of data for recovery in case of loss","To encrypt sensitive data","To monitor system health"], answer:1,
  exp:"Backups create copies of data and systems that can be used for recovery after data loss, corruption, or disaster." },

{ id:110, type:"mc", difficulty:1, domain:"Security Operations",
  q:"Which backup type copies only data that has changed since the last FULL backup?",
  options:["Full backup","Incremental backup","Differential backup","Mirror backup"], answer:2,
  exp:"Differential backs up all changes since the last full backup (growing in size). Incremental backs up changes since the last backup of any type (smaller, but restore needs all incrementals)." },

// --- Medium ---
{ id:111, type:"mc", difficulty:2, domain:"Security Operations",
  q:"During an incident, which phase involves removing the root cause from the environment?",
  options:["Preparation","Detection and Analysis","Eradication","Post-Incident Activity"], answer:2,
  exp:"Eradication removes the root cause (e.g., deleting malware, disabling compromised accounts). Containment stops the spread." },

{ id:112, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the difference between a hot site, warm site, and cold site?",
  options:["Cost only — they all provide the same recovery time","Hot is fully operational; warm has infrastructure but needs data; cold has only space and power","Hot has no equipment; cold is fully equipped","They are different names for the same thing"], answer:1,
  exp:"Hot site: fully operational, fastest recovery. Warm site: has infrastructure, needs current data/configuration. Cold site: only facility with power/connectivity, longest recovery." },

{ id:113, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is chain of custody in digital forensics?",
  options:["The encryption key management process","Documented chronological history of evidence handling","The network path data travels","A type of access control"], answer:1,
  exp:"Chain of custody documents who handled evidence, when, where, and what was done with it. It ensures evidence integrity and admissibility in court." },

{ id:114, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What RAID level provides disk mirroring?",
  options:["RAID 0","RAID 1","RAID 5","RAID 10"], answer:1,
  exp:"RAID 1 mirrors data across two disks (100% redundancy). RAID 0 is striping (no redundancy). RAID 5 is striping with distributed parity. RAID 10 combines mirroring and striping." },

{ id:115, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the primary purpose of a Security Operations Center (SOC)?",
  options:["Develop security policies","Monitor, detect, and respond to security incidents in real time","Conduct penetration testing","Manage IT infrastructure"], answer:1,
  exp:"A SOC provides 24/7 monitoring and response capabilities using SIEM, analysts, and incident response procedures." },

{ id:116, type:"ms", difficulty:2, domain:"Security Operations",
  q:"Which of the following are phases of the NIST Incident Response lifecycle? (Select ALL that apply)",
  options:["Preparation","Detection and Analysis","Containment, Eradication, and Recovery","Post-Incident Activity","Risk Assessment"], answers:[0,1,2,3],
  exp:"NIST SP 800-61 defines four phases: Preparation → Detection and Analysis → Containment, Eradication, and Recovery → Post-Incident Activity. Risk Assessment is a separate process." },

// --- Hard ---
{ id:117, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization experiences a ransomware attack. Backups are encrypted. You discover one air-gapped backup from 3 weeks ago. What should you do FIRST?",
  options:["Pay the ransom to recover quickly","Verify the integrity of the air-gapped backup","Rebuild systems from scratch","Contact law enforcement"], answer:1,
  exp:"Before committing to recovery, verify the backup is clean and usable. Paying ransom is risky and doesn't guarantee recovery." },

{ id:118, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your SIEM alerts on lateral movement using stolen credentials. You isolate the compromised account. What should you do NEXT?",
  options:["Reset all user passwords","Conduct a full security audit","Hunt for persistence mechanisms","Restore systems from backup"], answer:2,
  exp:"After containing the immediate threat, hunt for persistence (backdoors, scheduled tasks, additional compromised accounts)." },

{ id:119, type:"mc", difficulty:3, domain:"Security Operations",
  q:"During incident response, you discover an attacker has been in your network for 8 months (APT). What should be your PRIMARY focus?",
  options:["Immediate eradication of all attacker access","Comprehensive scope assessment to identify all compromised systems","Forensic evidence collection","Restoring systems from backups"], answer:1,
  exp:"With APT, understand the full scope before eradication. Premature eradication alerts attackers and they may escalate or hide deeper." },

{ id:120, type:"mc", difficulty:3, domain:"Security Operations",
  q:"You are implementing a SOAR platform. What is the PRIMARY benefit over traditional SIEM?",
  options:["Better log correlation","Automated response and orchestration","Lower cost","Improved compliance reporting"], answer:1,
  exp:"SOAR extends SIEM by automating playbooks and response actions, reducing MTTR and analyst workload." },

{ id:121, type:"mc", difficulty:3, domain:"Security Operations",
  q:"After a security incident, the post-incident review reveals that the mean time to detect (MTTD) was 45 days. What should be your PRIMARY recommendation?",
  options:["Hire more security analysts","Implement better detection capabilities (SIEM rules, behavioral analytics, EDR)","Increase the incident response team size","Conduct more frequent pen tests"], answer:1,
  exp:"A 45-day MTTD indicates detection gaps. Improving detection capabilities (better SIEM correlation, behavioral analytics, EDR deployment) directly reduces MTTD." },

{ id:122, type:"mc", difficulty:3, domain:"Security Operations",
  q:"A forensic investigator needs to acquire evidence from a running server that may have been compromised. What should they capture FIRST?",
  options:["Hard drive image","Network logs","Volatile memory (RAM)","Configuration files"], answer:2,
  exp:"Follow the order of volatility: capture the most volatile evidence first. RAM contents are lost when the system is powered off and may contain encryption keys, malware, and active connections." },

{ id:123, type:"order", difficulty:2, domain:"Security Operations",
  q:"Order the following by volatility, from MOST volatile (lost first) to LEAST volatile:",
  items:["CPU registers and cache","RAM","Disk (temporary files)","Disk (permanent files)","Remote logging and monitoring data"],
  correctOrder:[0,1,2,3,4],
  exp:"The order of volatility (RFC 3227): CPU registers/cache → RAM → temp disk files → permanent disk files → remote logs. Capture the most volatile first." },

{ id:124, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization's RPO is 1 hour and RTO is 4 hours for a critical database. Your current backup strategy is nightly full backups. Is this adequate?",
  options:["Yes, nightly backups are sufficient for any RPO","No, the RPO requires backups or replication at least every hour","It depends on the database size","The RTO determines backup frequency, not the RPO"], answer:1,
  exp:"RPO of 1 hour means maximum 1 hour of data loss. Nightly backups could lose up to 24 hours. Need hourly backups, transaction log shipping, or real-time replication." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  DOMAIN 8: Software Development Security                   ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Easy ---
{ id:125, type:"mc", difficulty:1, domain:"Software Development Security",
  q:"What is the primary purpose of input validation?",
  options:["To improve application performance","To prevent malicious data from entering the system","To encrypt user input","To log all user activities"], answer:1,
  exp:"Input validation prevents injection attacks and malformed data from compromising the application." },

{ id:126, type:"mc", difficulty:1, domain:"Software Development Security",
  q:"What is SQL injection?",
  options:["A database backup technique","An attack that inserts malicious SQL code into application queries","A method for optimizing database performance","A type of encryption for databases"], answer:1,
  exp:"SQL injection occurs when an attacker inserts malicious SQL statements into input fields, potentially accessing or modifying the database." },

{ id:127, type:"mc", difficulty:1, domain:"Software Development Security",
  q:"What does SDLC stand for?",
  options:["Security Data Lifecycle Control","Software Development Life Cycle","System Design and Launch Criteria","Secure Delivery and Logging Configuration"], answer:1,
  exp:"The Software Development Life Cycle defines the phases for planning, creating, testing, and deploying software systems." },

{ id:128, type:"mc", difficulty:1, domain:"Software Development Security",
  q:"Which SDLC methodology delivers working software in short iterations?",
  options:["Waterfall","Agile","Big Bang","V-Model"], answer:1,
  exp:"Agile delivers working software in short iterations (sprints), allowing for continuous feedback and adaptation." },

// --- Medium ---
{ id:129, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"Which attack involves injecting malicious script into a trusted website that is then served to other users?",
  options:["SQL Injection","Cross-Site Scripting (XSS)","Cross-Site Request Forgery (CSRF)","Buffer Overflow"], answer:1,
  exp:"XSS involves client-side scripts injected into web pages. SQLi targets the database. CSRF tricks authenticated users into performing unwanted actions." },

{ id:130, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"In which SDLC phase should security requirements be defined?",
  options:["Implementation","Testing","Design","Requirements/Planning"], answer:3,
  exp:"Security should be integrated from the beginning during requirements gathering. 'Shift left' means earlier security integration." },

{ id:131, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"What is the difference between SAST and DAST?",
  options:["SAST tests source code; DAST tests the running application","SAST is slower; DAST is faster","SAST requires credentials; DAST does not","They are different names for the same thing"], answer:0,
  exp:"SAST (Static) analyzes source code without execution. DAST (Dynamic) tests the running application by sending requests and analyzing responses." },

{ id:132, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"What is the primary defense against SQL injection?",
  options:["Web application firewall","Parameterized queries (prepared statements)","Input length restriction","HTTPS encryption"], answer:1,
  exp:"Parameterized queries separate SQL code from data, preventing injected input from being interpreted as code. WAFs help but are not the primary defense." },

{ id:133, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"What is a buffer overflow attack?",
  options:["Sending too many network packets","Writing more data to a buffer than it can hold, potentially overwriting adjacent memory","Filling a database table","Overloading a CPU with calculations"], answer:1,
  exp:"Buffer overflow occurs when data exceeds buffer boundaries and overwrites adjacent memory, potentially allowing arbitrary code execution." },

{ id:134, type:"ms", difficulty:2, domain:"Software Development Security",
  q:"Which of the following are OWASP Top 10 categories? (Select ALL that apply)",
  options:["Injection","Broken Access Control","Cryptographic Failures","Physical Security"], answers:[0,1,2],
  exp:"Injection, Broken Access Control, and Cryptographic Failures are all OWASP Top 10 categories. Physical Security is not in the OWASP Top 10 (which focuses on web application risks)." },

// --- Hard ---
{ id:135, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your team is adopting CI/CD. Security mandates that no code deploys without SAST checks, creating a bottleneck. What is the BEST approach?",
  options:["Remove the SAST check for minor updates","Run SAST asynchronously and fail the build only for critical issues","Switch to DAST only","Perform manual code review instead"], answer:1,
  exp:"Balance speed and security by tuning SAST to block only critical findings. This maintains security gates while enabling DevSecOps velocity." },

{ id:136, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"A code review reveals that a developer is using MD5 to hash user passwords. What is your PRIMARY concern?",
  options:["MD5 is too slow for production","MD5 collisions allow password recovery","MD5 lacks salt, enabling rainbow table attacks","MD5 is fast and vulnerable to brute force attacks"], answer:3,
  exp:"MD5 is cryptographically broken and computationally cheap, making brute force feasible. Use bcrypt, scrypt, or Argon2 which are deliberately slow." },

{ id:137, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"A web application allows users to upload profile pictures. What is the MOST critical security control?",
  options:["Scan for malware","Validate file type by extension","Validate file type by content (magic bytes)","Restrict file size"], answer:2,
  exp:"Validate actual file content (magic bytes/MIME type), not just extension which can be spoofed." },

{ id:138, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your organization adopts microservices architecture. Each service needs to authenticate to others. What is the BEST approach?",
  options:["Shared API keys stored in code","Mutual TLS (mTLS) with certificate-based authentication","Username and password per service","No authentication since services are internal"], answer:1,
  exp:"mTLS provides strong certificate-based mutual authentication ideal for zero-trust architectures." },

{ id:139, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"A developer proposes storing session tokens in localStorage for a web application. What is your PRIMARY security concern?",
  options:["localStorage has limited storage capacity","localStorage data persists after browser close","localStorage is accessible to JavaScript and vulnerable to XSS","localStorage is not supported by all browsers"], answer:2,
  exp:"localStorage is accessible via JavaScript, making tokens vulnerable to theft through XSS attacks. Use HttpOnly, Secure cookies for session tokens instead." },

{ id:140, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your application uses a third-party library with a known CVE rated as High severity. The library maintainer has not released a patch. What is the BEST course of action?",
  options:["Wait for the maintainer to release a patch","Fork the library and apply a fix yourself","Remove the library and find an alternative","Accept the risk since it's a third-party issue"], answer:2,
  exp:"If a critical vulnerability exists and no patch is available, the safest approach is to find an alternative. Forking creates maintenance burden. Waiting leaves you exposed." },

{ id:141, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"During threat modeling of a new API, you identify that an endpoint accepts user-supplied JSON that is deserialized server-side. What attack vector should you be MOST concerned about?",
  options:["SQL injection","Insecure deserialization leading to remote code execution","Cross-site scripting","Denial of service via large payloads"], answer:1,
  exp:"Insecure deserialization can lead to RCE if the application deserializes untrusted data. Use allowlists for deserialization classes and validate input structure." },

{ id:142, type:"order", difficulty:2, domain:"Software Development Security",
  q:"Order the Secure SDLC phases from FIRST to LAST:",
  items:["Requirements (security requirements, threat modeling)","Design (security architecture, design review)","Implementation (secure coding, SAST)","Testing (DAST, pen testing, security testing)","Deployment (security configuration, hardening)","Maintenance (patching, monitoring, incident response)"],
  correctOrder:[0,1,2,3,4,5],
  exp:"Security integrates at every SDLC phase: define security requirements → design securely → code securely → test for vulnerabilities → deploy hardened → maintain and patch." },


// ╔══════════════════════════════════════════════════════════════╗
// ║  ADDITIONAL CROSS-DOMAIN & SCENARIO QUESTIONS               ║
// ╚══════════════════════════════════════════════════════════════╝

// --- Domain 1 additional ---
{ id:143, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the primary purpose of a security awareness program?",
  options:["To teach employees to be hackers","To change employee behavior regarding security","To comply with ISO 27001 only","To replace technical controls"], answer:1,
  exp:"Security awareness programs aim to change behavior and create a security-conscious culture. They complement, not replace, technical controls." },

{ id:144, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization is subject to both PCI DSS and HIPAA. A conflict arises where PCI requires 90-day password rotation but your HIPAA-regulated system uses passphrase-based authentication with no expiration. How should you resolve this?",
  options:["Apply the stricter requirement (90-day rotation) to all systems","Apply each standard to its respective scope of data","Ignore PCI requirements since HIPAA is a federal law","Request an exemption from both standards"], answer:1,
  exp:"Apply each standard to its regulated data scope. PCI applies to cardholder data environments; HIPAA applies to systems with PHI. Scoping controls prevents unnecessary burden." },

{ id:145, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"A hurricane is forecast to hit your primary data center in 48 hours. Your BCP has never been tested. What should you do FIRST?",
  options:["Activate the full BCP immediately","Prioritize systems by BIA criticality and begin staged failover","Wait until the hurricane hits to assess actual damage","Shut down all systems to protect hardware"], answer:1,
  exp:"Use the BIA to identify critical systems and begin staged failover to the recovery site. Full untested BCP activation is risky. Waiting is negligent." },

// --- Domain 3 additional ---
{ id:146, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the primary difference between IaaS, PaaS, and SaaS regarding security responsibility?",
  options:["The cloud provider is responsible for all security in all models","The customer has the most security responsibility in IaaS and the least in SaaS","SaaS requires the most customer security effort","There is no difference in security responsibility"], answer:1,
  exp:"In IaaS, the customer manages OS, apps, and data. In PaaS, the provider manages the platform. In SaaS, the provider manages almost everything. Shared responsibility shifts upward." },

{ id:147, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization is evaluating a zero-trust architecture. Which principle is MOST fundamental to zero trust?",
  options:["Perimeter-based security","Never trust, always verify — regardless of network location","Trust internal network traffic by default","VPN access equals trusted access"], answer:1,
  exp:"Zero trust eliminates implicit trust. Every access request is verified regardless of source network. Identity, device health, and context are evaluated for every request." },

{ id:148, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the Clark-Wilson model primarily designed to enforce?",
  options:["Confidentiality through classification","Integrity through well-formed transactions","Availability through redundancy","Non-repudiation through logging"], answer:1,
  exp:"Clark-Wilson enforces integrity using well-formed transactions (transformation procedures) and separation of duties. It's used in commercial environments (banking, accounting)." },

// --- Domain 4 additional ---
{ id:149, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is the purpose of the ARP protocol?",
  options:["Route traffic between networks","Resolve IP addresses to MAC addresses","Encrypt network traffic","Assign IP addresses dynamically"], answer:1,
  exp:"ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network segment. ARP spoofing is a common Layer 2 attack." },

{ id:150, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization detects a BGP hijacking attempt that is redirecting traffic intended for your AS through an unauthorized path. What is the BEST long-term mitigation?",
  options:["Implement RPKI (Resource Public Key Infrastructure)","Add more firewall rules","Switch to a different ISP","Implement DNSSEC"], answer:0,
  exp:"RPKI validates BGP route announcements cryptographically, preventing unauthorized route advertisements. Firewall rules don't address BGP routing. DNSSEC protects DNS, not BGP." },

// --- Domain 5 additional ---
{ id:151, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is the purpose of an access control matrix?",
  options:["To encrypt access credentials","To define which subjects can perform which actions on which objects","To monitor network traffic","To classify data"], answer:1,
  exp:"An access control matrix maps subjects (users/processes) to objects (files/resources) with specific permissions (read/write/execute). It's the theoretical basis for ACLs and capability lists." },

{ id:152, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"Your organization implements just-in-time (JIT) privileged access. What is the PRIMARY security benefit?",
  options:["Faster access for administrators","Reduced standing privileges, limiting the window of exposure","Lower licensing costs","Simplified access management"], answer:1,
  exp:"JIT access provides privileges only when needed and for a limited time, reducing the attack surface by minimizing standing privileged accounts that could be compromised." },

// --- Domain 6 additional ---
{ id:153, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"Your red team discovers that the blue team's SIEM has a blind spot — it doesn't correlate VPN authentication logs with internal network logs. What type of exercise finding is this?",
  options:["A vulnerability","A threat","A detection gap","A compliance violation"], answer:2,
  exp:"This is a detection gap — a blind spot in monitoring that could allow attackers to move undetected. Red/blue team exercises are specifically designed to find these gaps." },

{ id:154, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is the difference between a SOC 1 and SOC 2 report?",
  options:["SOC 1 covers financial controls; SOC 2 covers security, availability, and other trust criteria","SOC 1 is more secure than SOC 2","SOC 2 is only for cloud providers","They cover the same controls but at different detail levels"], answer:0,
  exp:"SOC 1 focuses on internal controls over financial reporting (ICFR). SOC 2 evaluates controls related to security, availability, processing integrity, confidentiality, and privacy (Trust Services Criteria)." },

// --- Domain 7 additional ---
{ id:155, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the difference between an event, an alert, and an incident?",
  options:["They are all the same thing","An event is any observable occurrence; an alert is a notable event; an incident is a confirmed security violation","Events are worse than incidents","Alerts only come from firewalls"], answer:1,
  exp:"Events are any observable occurrences. Alerts are events that warrant attention. Incidents are confirmed violations of security policy requiring response." },

{ id:156, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your SOC receives 10,000 alerts per day, but only 50 are true positives. Analyst fatigue is causing real threats to be missed. What should you implement FIRST?",
  options:["Hire more analysts","Tune SIEM rules and reduce false positives","Ignore low-severity alerts","Outsource SOC operations"], answer:1,
  exp:"Alert fatigue is solved by tuning detection rules, adjusting thresholds, and correlating events to reduce false positives. Adding analysts to a noisy system doesn't fix the root cause." },

// --- Domain 8 additional ---
{ id:157, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"What is the purpose of threat modeling?",
  options:["To test application performance","To identify potential threats and design countermeasures early in development","To write security policies","To conduct penetration testing"], answer:1,
  exp:"Threat modeling systematically identifies potential threats, vulnerabilities, and attack vectors during design so countermeasures can be built in before implementation." },

{ id:158, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your application uses JWT tokens for API authentication. A security review reveals tokens are signed with HS256 using a weak secret. What is the MOST critical risk?",
  options:["Token expiration won't work","An attacker could brute-force the secret and forge valid tokens","JWT tokens don't support HS256","The tokens are too large for HTTP headers"], answer:1,
  exp:"A weak HS256 secret can be brute-forced, allowing attackers to forge arbitrary JWT tokens with any claims. Use strong secrets (256+ bit) or switch to RS256 with asymmetric keys." },

// --- More cross-domain scenario questions ---
{ id:159, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"An employee discovers a colleague is stealing company data. The employee reports it to you. Under which ethical canon of the (ISC)² Code of Ethics should you act?",
  options:["Protect society, the common good, necessary public trust","Act honorably, honestly, justly, responsibly, and legally","Provide diligent and competent service to principals","Advance and protect the profession"], answer:1,
  exp:"Acting honorably and responsibly means investigating through proper channels (HR, legal, management) rather than ignoring or handling it personally." },

{ id:160, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization processes transactions that require both confidentiality and integrity. Which combination of cryptographic techniques is MOST appropriate?",
  options:["Hashing only","Symmetric encryption only","AES-GCM (authenticated encryption)","Digital signatures only"], answer:2,
  exp:"AES-GCM provides both confidentiality (encryption) and integrity/authentication (GMAC tag) in a single operation, making it ideal for protecting data requiring both properties." },

{ id:161, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your network team proposes implementing SDN (Software-Defined Networking). What is the PRIMARY security consideration?",
  options:["SDN is inherently insecure","The centralized SDN controller becomes a high-value target requiring strong protection","SDN eliminates the need for firewalls","SDN only works with cloud infrastructure"], answer:1,
  exp:"The SDN controller has centralized visibility and control over the entire network. If compromised, an attacker could reconfigure all network flows. Protect the controller with strong authentication, encryption, and redundancy." },

{ id:162, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is privilege creep?",
  options:["When administrators gain root access","When users accumulate permissions over time beyond what they currently need","When privileges are revoked too quickly","When new accounts are created with excessive permissions"], answer:1,
  exp:"Privilege creep occurs when users accumulate permissions from role changes without having old permissions revoked. Regular access reviews are the primary countermeasure." },

{ id:163, type:"mc", difficulty:3, domain:"Security Operations",
  q:"During a forensic investigation, you need to prove that a disk image is an exact copy of the original. What technique should you use?",
  options:["Encrypt the image","Create a cryptographic hash (SHA-256) of both the original and the copy","Compare file sizes","Use a visual diff tool"], answer:1,
  exp:"Cryptographic hashing creates a unique fingerprint. If the hash of the copy matches the hash of the original, the image is proven to be identical (integrity verification)." },

{ id:164, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"A developer asks why they should use Content Security Policy (CSP) headers. What is the PRIMARY benefit?",
  options:["Faster page load times","Mitigation of XSS attacks by controlling which sources can load content","Better SEO rankings","Compliance with PCI DSS"], answer:1,
  exp:"CSP headers tell the browser which sources are allowed to load scripts, styles, and other resources, significantly reducing the impact of XSS attacks by preventing inline script execution and unauthorized external scripts." },

{ id:165, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the difference between a standard and a guideline in a security governance framework?",
  options:["Standards are mandatory; guidelines are recommended","Standards are technical; guidelines are managerial","Standards are created by management; guidelines are created by IT","They are the same thing"], answer:0,
  exp:"Standards are mandatory requirements that support policies (e.g., 'passwords must be 12+ characters'). Guidelines are recommended practices that provide flexibility." },

{ id:166, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization is implementing data loss prevention (DLP). Where should DLP be deployed for comprehensive coverage?",
  options:["Network perimeter only","Endpoints only","Network, endpoints, and cloud applications","Email gateway only"], answer:2,
  exp:"Comprehensive DLP requires coverage at network level (in-transit), endpoints (in-use), and cloud applications (at-rest/in-transit). Single-point DLP leaves gaps." },

{ id:167, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the principle of defense in depth?",
  options:["Using the strongest single security control available","Implementing multiple layers of security controls","Focusing all resources on perimeter security","Encrypting everything"], answer:1,
  exp:"Defense in depth uses multiple layers of diverse security controls so that if one fails, others continue to provide protection." },

{ id:168, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your security team detects a TLS downgrade attack against your web server. The attacker is forcing the connection to use TLS 1.0. What is the BEST mitigation?",
  options:["Disable all versions of TLS","Configure the server to only accept TLS 1.2 and TLS 1.3","Implement a WAF","Switch to IPSec"], answer:1,
  exp:"Disable legacy TLS versions (1.0, 1.1) on the server so downgrade attacks cannot force weak protocol versions. TLS 1.2 and 1.3 are current secure standards." },

{ id:169, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is the difference between RADIUS and TACACS+?",
  options:["RADIUS encrypts the entire payload; TACACS+ only encrypts the password","TACACS+ encrypts the entire payload; RADIUS only encrypts the password","RADIUS is newer than TACACS+","They provide identical functionality"], answer:1,
  exp:"TACACS+ encrypts the full payload and separates authentication, authorization, and accounting. RADIUS only encrypts the password portion of the packet and combines auth and authz." },

{ id:170, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"Your organization requires continuous monitoring of security controls. Which approach BEST achieves this?",
  options:["Annual penetration testing","Automated security control assessments integrated with SIEM and GRC tools","Monthly vulnerability scans","Quarterly compliance audits"], answer:1,
  exp:"Continuous monitoring requires automated, ongoing assessment of security controls integrated with monitoring systems. Point-in-time assessments (annual, monthly, quarterly) are insufficient." },

// --- Additional hard scenario questions ---
{ id:171, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your CEO receives a convincing email from what appears to be the CFO requesting an urgent wire transfer. The email passed DKIM and SPF checks. What type of attack is this MOST likely?",
  options:["Phishing","Business Email Compromise (BEC) with compromised account","Spam","Man-in-the-middle"], answer:1,
  exp:"Since the email passed DKIM/SPF, the CFO's actual email account is likely compromised (BEC). Regular phishing would fail these checks. BEC is one of the most costly cyber attacks." },

{ id:172, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization implements a deception technology (honeypot) in the production network. Any interaction with it is suspicious by definition. What type of detection does this represent?",
  options:["Signature-based detection","Anomaly-based detection","High-fidelity indicator of compromise","Heuristic analysis"], answer:2,
  exp:"Honeypots generate high-fidelity alerts because any interaction is inherently suspicious — there are no legitimate users or services, so virtually every alert is a true positive." },

{ id:173, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your development team wants to use homomorphic encryption to process sensitive data in the cloud without decrypting it. What is the PRIMARY limitation they should be aware of?",
  options:["Homomorphic encryption is not standardized","Significant computational overhead makes it impractical for many real-time applications","It only works with symmetric encryption","Cloud providers don't support it"], answer:1,
  exp:"Fully homomorphic encryption allows computation on encrypted data but has massive computational overhead (orders of magnitude slower), making it impractical for many production workloads currently." },

{ id:174, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"Your organization is implementing passwordless authentication. Which technology provides the STRONGEST security with the best user experience?",
  options:["SMS OTP","Magic email links","FIDO2/WebAuthn with hardware security keys","Push notifications"], answer:2,
  exp:"FIDO2/WebAuthn uses public key cryptography with hardware-bound credentials. It's phishing-resistant (bound to origin), provides strong authentication, and doesn't require remembering anything." },

{ id:175, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization's email server is receiving a flood of emails with forged sender addresses from your own domain. What technology would BEST prevent this?",
  options:["Implementing DMARC with a reject policy","Adding more email server capacity","Implementing an IDS","Using a VPN for email traffic"], answer:0,
  exp:"DMARC (Domain-based Message Authentication, Reporting, and Conformance) combined with SPF and DKIM prevents domain spoofing. A 'reject' policy tells receiving servers to reject unauthenticated emails from your domain." },

{ id:176, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the difference between a disaster recovery plan (DRP) and a business continuity plan (BCP)?",
  options:["They are the same thing","DRP focuses on restoring IT systems; BCP covers the entire business operation","DRP is for natural disasters only; BCP is for cyber attacks only","BCP is a subset of DRP"], answer:1,
  exp:"DRP focuses specifically on recovering IT infrastructure and data. BCP is broader, covering all business functions including people, processes, and facilities." },

{ id:177, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization processes credit card transactions and stores cardholder data. Under PCI DSS, which data element must NEVER be stored after authorization?",
  options:["Cardholder name","Primary Account Number (PAN)","Card expiration date","CVV/CVC (card verification value)"], answer:3,
  exp:"PCI DSS prohibits storage of sensitive authentication data (CVV/CVC, full magnetic stripe data, PIN) after authorization, even if encrypted. PAN can be stored if encrypted." },

{ id:178, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"What is the OWASP Top 10?",
  options:["A list of the top 10 programming languages","A regularly updated list of the most critical web application security risks","A list of the top 10 security vendors","A ranking of the most secure web frameworks"], answer:1,
  exp:"The OWASP Top 10 is a periodically updated awareness document listing the most critical web application security risks, used as a standard for secure development." },

{ id:179, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization's security program must demonstrate compliance with multiple frameworks (ISO 27001, SOC 2, NIST CSF). What approach minimizes redundant effort?",
  options:["Comply with each framework independently","Implement a unified control framework mapping controls to multiple standards","Choose one framework and ignore the others","Hire separate teams for each framework"], answer:1,
  exp:"A unified control framework (UCF) maps your controls to multiple standards simultaneously. One control can satisfy requirements across ISO 27001, SOC 2, and NIST CSF, reducing duplication." },

{ id:180, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization is implementing a container orchestration platform (Kubernetes). What is the MOST critical security configuration to address first?",
  options:["Container image scanning","RBAC for the Kubernetes API server","Network policies between pods","Resource quotas"], answer:1,
  exp:"The Kubernetes API server controls the entire cluster. Securing it with proper RBAC, authentication, and authorization is the most critical first step. A compromised API server means full cluster compromise." },

// --- Final batch: more scenario questions ---
{ id:181, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization is hit by a supply chain attack — a trusted vendor's software update contained malware. What should your incident response prioritize?",
  options:["Immediately disconnect from the vendor","Identify all systems that received the compromised update and assess the blast radius","Notify the media","Switch to a competitor's product"], answer:1,
  exp:"First understand the scope: which systems installed the update, what the malware does, and what data/systems are affected. Then contain, eradicate, and recover based on findings." },

{ id:182, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is residual risk?",
  options:["Risk that has been completely eliminated","Risk remaining after controls have been applied","Risk that is too expensive to address","Theoretical risk that has never materialized"], answer:1,
  exp:"Residual risk is the risk that remains after implementing controls. Total risk - controls = residual risk. Management must formally accept residual risk." },

{ id:183, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"A cloud application supports both SAML and OIDC for SSO. Your organization needs to support mobile native apps and SPAs. Which protocol should you prefer?",
  options:["SAML","OIDC (OpenID Connect)","LDAP","Kerberos"], answer:1,
  exp:"OIDC is built on OAuth 2.0 and uses JSON/REST, making it ideal for mobile apps and SPAs. SAML uses XML and is more complex for modern application architectures." },

{ id:184, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your team is implementing an API gateway. Which security control is MOST important to implement at the gateway level?",
  options:["Syntax highlighting","Rate limiting and authentication","Code formatting","Database connection pooling"], answer:1,
  exp:"API gateways should enforce rate limiting (preventing abuse/DoS), authentication/authorization, input validation, and TLS termination as the first line of defense for backend services." },

{ id:185, type:"mc", difficulty:2, domain:"Asset Security",
  q:"What is the principle of data minimization?",
  options:["Compressing data to save storage","Collecting and retaining only the minimum data necessary for the stated purpose","Encrypting all data","Deleting data immediately after use"], answer:1,
  exp:"Data minimization (a key GDPR principle) requires organizations to collect, process, and retain only the data strictly necessary for the stated purpose, reducing risk exposure." },

{ id:186, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"Your organization engages a red team for an adversary simulation. Unlike a standard pen test, what distinguishes a red team exercise?",
  options:["Red teams only use automated tools","Red teams simulate realistic adversary TTPs over an extended period with limited scope restrictions","Red teams focus only on network security","Red teams provide real-time remediation"], answer:1,
  exp:"Red team exercises simulate realistic threat actors using their TTPs over weeks/months, testing the organization's detection and response capabilities holistically, not just finding individual vulnerabilities." },

{ id:187, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization implements microsegmentation in its data center. What is the PRIMARY security benefit compared to traditional network segmentation?",
  options:["Faster network speeds","Granular, workload-level security policies that limit lateral movement","Lower hardware costs","Simplified network management"], answer:1,
  exp:"Microsegmentation applies security policies at the individual workload level (VM, container), dramatically limiting lateral movement even within the same network segment." },

{ id:188, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the purpose of a tabletop exercise?",
  options:["To test physical security of tabletops","A discussion-based exercise where team members walk through a scenario verbally","A full-scale disaster simulation","Automated testing of backup systems"], answer:1,
  exp:"Tabletop exercises are discussion-based: team members talk through their roles and responses to a hypothetical scenario. No actual systems are tested, but it validates plans and identifies gaps." },

{ id:189, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization's board asks for a single metric to represent cyber risk posture. What should you recommend?",
  options:["Number of open vulnerabilities","A composite risk score based on likelihood and impact across key risk scenarios","Number of security incidents last quarter","Compliance percentage against a framework"], answer:1,
  exp:"A composite risk score aggregates multiple risk factors (vulnerabilities, threats, control effectiveness, business impact) into a meaningful metric. Single metrics (vuln count, incident count) lack context." },

{ id:190, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization is implementing a PKI. The root CA private key is the most critical asset. How should it be protected?",
  options:["Store it encrypted on the CA server","Keep it in an HSM that is offline and air-gapped, brought online only for signing subordinate CA certificates","Store it in a cloud HSM for high availability","Distribute copies to multiple administrators"], answer:1,
  exp:"The root CA key should be in an offline, air-gapped HSM used only to sign subordinate CA certificates. If compromised, the entire PKI trust chain is broken." },

// More questions to round out the bank
{ id:191, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the difference between a threat and a vulnerability?",
  options:["They are the same thing","A threat is a potential danger; a vulnerability is a weakness that can be exploited","A vulnerability is more dangerous than a threat","Threats are external; vulnerabilities are internal"], answer:1,
  exp:"A threat is any potential danger (attacker, natural disaster). A vulnerability is a weakness (unpatched software, weak password). Risk exists when a threat can exploit a vulnerability." },

{ id:192, type:"mc", difficulty:1, domain:"Security Operations",
  q:"What is the purpose of an Uninterruptible Power Supply (UPS)?",
  options:["To increase network speed","To provide short-term power during outages and protect against power fluctuations","To cool server rooms","To encrypt data at rest"], answer:1,
  exp:"A UPS provides temporary power during outages, giving time for graceful shutdown or generator activation. It also conditions power to protect against surges and sags." },

{ id:193, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is a man-in-the-middle (MITM) attack?",
  options:["An attacker physically between two servers","An attacker intercepts and potentially alters communication between two parties","A social engineering attack","A type of malware"], answer:1,
  exp:"In MITM, the attacker secretly relays and potentially alters communication between two parties who believe they're communicating directly. TLS and certificate pinning help prevent this." },

{ id:194, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization wants to implement a privacy program compliant with both GDPR and CCPA. What role is required by GDPR but not explicitly by CCPA?",
  options:["Chief Information Officer","Data Protection Officer (DPO)","Privacy Attorney","Chief Privacy Officer"], answer:1,
  exp:"GDPR requires appointing a Data Protection Officer for certain organizations (those processing large-scale sensitive data or public authorities). CCPA does not have this specific requirement." },

{ id:195, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization uses tokenization for credit card data in its payment system. How does tokenization differ from encryption?",
  options:["Tokenization is stronger than encryption","Tokenization replaces data with a non-reversible token; the mapping is stored separately. Encryption is mathematically reversible with the key","They are the same technology","Tokenization only works for numeric data"], answer:1,
  exp:"Tokenization replaces sensitive data with a random token, with the original stored in a secure token vault. Unlike encryption, there's no mathematical relationship between the token and original data." },

{ id:196, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is a sandbox in security?",
  options:["A physical area for testing equipment","An isolated environment for safely executing and analyzing untrusted code","A type of firewall","A backup storage location"], answer:1,
  exp:"A sandbox is an isolated environment that limits what code can access, used for safely testing suspicious files, running untrusted applications, or analyzing malware." },

{ id:197, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is the purpose of a proxy server?",
  options:["To store backup data","To act as an intermediary between clients and servers, providing caching, filtering, and anonymity","To encrypt all network traffic","To assign IP addresses"], answer:1,
  exp:"Proxy servers act as intermediaries, providing content caching, URL filtering, access logging, and hiding internal client IP addresses from external servers." },

{ id:198, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization implements immutable infrastructure. How does this improve security incident response?",
  options:["It prevents all attacks","Compromised instances can be replaced with known-good images instead of cleaned, ensuring no persistence","It eliminates the need for monitoring","It makes forensics impossible"], answer:1,
  exp:"With immutable infrastructure, rather than cleaning compromised systems (risking missed persistence), you destroy and redeploy from a verified image, guaranteeing a clean state." },

{ id:199, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your application processes user-uploaded XML files. What attack should you be MOST concerned about?",
  options:["SQL injection","XML External Entity (XXE) injection","Cross-site scripting","Buffer overflow"], answer:1,
  exp:"XXE injection exploits XML parsers that process external entity references, potentially allowing file disclosure, SSRF, or denial of service. Disable external entity processing in the XML parser." },

{ id:200, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is the purpose of account lockout policies?",
  options:["To prevent users from changing passwords","To defend against brute-force password attacks by locking accounts after failed attempts","To log user activity","To enforce password complexity"], answer:1,
  exp:"Account lockout policies lock an account after a defined number of failed login attempts, making brute-force and credential stuffing attacks impractical." },

// Final questions to bring total above 250
{ id:201, type:"mc", difficulty:1, domain:"Security and Risk Management",
  q:"What does 'due care' mean in security?",
  options:["Researching risks before acting","Acting responsibly to protect the organization based on what is known","Documenting every security event","Hiring certified security professionals"], answer:1,
  exp:"Due care means acting responsibly based on knowledge (due diligence). If you know about a risk and do nothing, you fail to exercise due care — which can create legal liability." },

{ id:202, type:"mc", difficulty:1, domain:"Asset Security",
  q:"What is PII (Personally Identifiable Information)?",
  options:["Any data stored in a database","Information that can identify a specific individual","Public information about a company","Encrypted data"], answer:1,
  exp:"PII is any data that can be used to identify a specific individual — name, SSN, address, email, biometric data, etc. PII requires protection under various privacy laws." },

{ id:203, type:"mc", difficulty:1, domain:"Security Architecture and Engineering",
  q:"What is the purpose of encryption?",
  options:["To make data faster to process","To convert plaintext into ciphertext to protect confidentiality","To compress data for storage","To verify data integrity"], answer:1,
  exp:"Encryption transforms readable plaintext into unreadable ciphertext using an algorithm and key, protecting data confidentiality from unauthorized access." },

{ id:204, type:"mc", difficulty:1, domain:"Communication and Network Security",
  q:"What does DNS stand for and what does it do?",
  options:["Data Network Security — encrypts data","Domain Name System — translates domain names to IP addresses","Digital Network Service — provides internet access","Direct Network Storage — stores files"], answer:1,
  exp:"DNS (Domain Name System) translates human-readable domain names (example.com) to machine-readable IP addresses (93.184.216.34)." },

{ id:205, type:"mc", difficulty:1, domain:"Identity and Access Management",
  q:"What is authorization?",
  options:["Proving your identity","Claiming an identity","Determining what actions an authenticated user is allowed to perform","Logging user activity"], answer:2,
  exp:"Authorization determines what resources and actions an authenticated user is permitted to access. It follows identification (claiming) and authentication (proving)." },

{ id:206, type:"mc", difficulty:1, domain:"Security Assessment and Testing",
  q:"What is a security baseline?",
  options:["The minimum acceptable security configuration for a system","The maximum security possible","A type of penetration test","A backup configuration"], answer:0,
  exp:"A security baseline defines the minimum required security settings for a system or device. Systems are measured against baselines to ensure compliance." },

{ id:207, type:"mc", difficulty:1, domain:"Security Operations",
  q:"What is the purpose of logging?",
  options:["To slow down systems","To record events for monitoring, troubleshooting, and forensic analysis","To encrypt data","To back up files"], answer:1,
  exp:"Logging records system, application, and security events. Logs support real-time monitoring, incident investigation, compliance, and forensic analysis." },

{ id:208, type:"mc", difficulty:1, domain:"Software Development Security",
  q:"What is the principle of least privilege in software development?",
  options:["Write as little code as possible","Grant software components only the minimum permissions needed to function","Use the fewest programming languages possible","Minimize documentation"], answer:1,
  exp:"Least privilege means each component (process, user, service) should have only the minimum permissions necessary, reducing the impact of compromise." },

{ id:209, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the purpose of separation of duties?",
  options:["To make employees work in separate offices","To prevent any single individual from completing a critical task alone, reducing fraud risk","To separate development from operations","To isolate network segments"], answer:1,
  exp:"Separation of duties divides critical tasks among multiple people so that no single person can complete a high-risk process alone (e.g., creating and approving a payment)." },

{ id:210, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is mean time to repair (MTTR)?",
  options:["The average time between system failures","The average time to fix a failed system and restore service","The maximum downtime allowed","The time to detect an incident"], answer:1,
  exp:"MTTR is the average time to repair a system after failure. Lower MTTR means faster recovery. Related: MTTF (time to failure), MTBF (time between failures), MTTD (time to detect)." },

{ id:211, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization is considering cyber insurance. The policy excludes 'acts of war.' A nation-state attack causes significant damage. The insurer invokes the war exclusion. What should you have done during policy review?",
  options:["Accepted the exclusion as standard","Negotiated the definition of 'acts of war' and 'cyber warfare' to include coverage for nation-state attacks","Purchased a cheaper policy","Relied on self-insurance only"], answer:1,
  exp:"War exclusion clauses in cyber insurance are increasingly contentious. During policy review, negotiate clear definitions that specify coverage for nation-state cyber attacks, which may not constitute traditional 'war.'" },

{ id:212, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization implements data sovereignty controls because certain data must remain within national borders. Which cloud deployment consideration is MOST critical?",
  options:["Cloud provider pricing","Data residency and the geographic location of data storage and processing","Cloud provider uptime SLA","Migration timeline"], answer:1,
  exp:"Data sovereignty requires that data stays within specific geographic/legal jurisdictions. Verify the cloud provider's data residency options, including where backups and replicas are stored." },

{ id:213, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the purpose of a Certificate Revocation List (CRL)?",
  options:["To list all valid certificates","To list certificates that have been revoked before their expiration date","To issue new certificates","To encrypt certificate data"], answer:1,
  exp:"A CRL is a list of digital certificates that have been revoked by the issuing CA before their scheduled expiration. OCSP (Online Certificate Status Protocol) is a more real-time alternative." },

{ id:214, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is port scanning?",
  options:["A method of encrypting network ports","Probing a system to discover open ports and available services","A technique to close unnecessary ports","A type of firewall configuration"], answer:1,
  exp:"Port scanning sends packets to a range of ports to identify which are open and what services are running, helping both defenders (security assessment) and attackers (reconnaissance)." },

{ id:215, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is federation in identity management?",
  options:["Combining all user accounts into one database","Establishing trust between separate organizations to share identity information for authentication","Using the same password everywhere","Centralized user management"], answer:1,
  exp:"Federation allows separate organizations to trust each other's authentication, enabling users to access resources across organizational boundaries using their home credentials." },

{ id:216, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is the purpose of a risk register?",
  options:["To register new employees","To document identified risks, their assessment, and treatment plans","To register software licenses","To track IT assets"], answer:1,
  exp:"A risk register is a living document that records identified risks, their likelihood and impact assessment, risk owners, treatment plans, and status." },

{ id:217, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your CISO asks you to implement threat intelligence feeds. What is the PRIMARY value of operational threat intelligence?",
  options:["Understanding attacker motivations (strategic)","Indicators of compromise and TTPs that can be actioned by security tools and analysts","High-level geopolitical risk assessments","Vendor product evaluations"], answer:1,
  exp:"Operational threat intelligence provides actionable IOCs (hashes, IPs, domains) and TTPs (tactics, techniques, procedures) that can be loaded into SIEM, IDS, and EDR for immediate detection." },

{ id:218, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your organization is implementing a secrets management solution. Where should application secrets (API keys, database passwords) NEVER be stored?",
  options:["In a dedicated secrets vault (HashiCorp Vault, AWS Secrets Manager)","In environment variables on the deployment platform","In source code repositories","In encrypted configuration files with proper key management"], answer:2,
  exp:"Secrets must never be stored in source code repositories — even private ones — because they persist in version history. Use dedicated secrets management tools." },

{ id:219, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the purpose of a security steering committee?",
  options:["To write security code","To provide senior management oversight and strategic direction for the security program","To conduct penetration testing","To monitor security logs"], answer:1,
  exp:"A security steering committee provides governance, sets security priorities aligned with business objectives, allocates resources, and ensures management support for security initiatives." },

{ id:220, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your application needs to generate random numbers for cryptographic key generation. What source of randomness should you use?",
  options:["Math.random() in JavaScript","A pseudorandom number generator (PRNG)","A cryptographically secure pseudorandom number generator (CSPRNG)","A fixed seed for reproducibility"], answer:2,
  exp:"Cryptographic operations require a CSPRNG (e.g., /dev/urandom, CryptGenRandom, secrets module). Standard PRNGs and Math.random() are predictable and unsuitable for security purposes." },

{ id:221, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization implements DNS over HTTPS (DoH). What is a legitimate concern the security team should raise?",
  options:["DoH is less secure than traditional DNS","DoH bypasses network-level DNS monitoring and filtering because queries are encrypted","DoH is slower than traditional DNS","DoH is not supported by modern browsers"], answer:1,
  exp:"DoH encrypts DNS queries, which improves privacy but can bypass enterprise DNS monitoring, content filtering, and security controls that rely on inspecting DNS traffic." },

{ id:222, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is the difference between authentication and accountability?",
  options:["They are the same thing","Authentication verifies identity; accountability ensures actions can be traced to an individual","Authentication comes after accountability","Accountability replaces the need for authentication"], answer:1,
  exp:"Authentication proves who you are. Accountability ensures that actions can be traced back to the authenticated individual through auditing and logging." },

{ id:223, type:"mc", difficulty:3, domain:"Security Assessment and Testing",
  q:"During a red team engagement, the team achieves domain admin access. They notice the blue team hasn't detected them after 72 hours. What should the red team do?",
  options:["Immediately stop and report the finding","Continue the exercise to test additional objectives and detection capabilities","Cause disruption to force detection","Notify the blue team of their presence"], answer:1,
  exp:"Red team exercises should continue to test the full scope of detection and response capabilities. Early termination wastes the opportunity to assess additional objectives. Document the detection failure for the final report." },

{ id:224, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the difference between IDS signature-based detection and anomaly-based detection?",
  options:["Signature-based detects known patterns; anomaly-based detects deviations from normal behavior","They work the same way","Signature-based is always better","Anomaly-based only works for network traffic"], answer:0,
  exp:"Signature-based matches known attack patterns (fast, low false positives, misses new attacks). Anomaly-based establishes a baseline and alerts on deviations (catches novel attacks, higher false positives)." },

{ id:225, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your team implements a GraphQL API. What unique security risk does GraphQL introduce compared to REST APIs?",
  options:["GraphQL doesn't support HTTPS","Query complexity attacks — deeply nested or resource-intensive queries can cause denial of service","GraphQL has no authentication support","GraphQL cannot be monitored"], answer:1,
  exp:"GraphQL allows clients to craft complex, deeply nested queries that can consume excessive server resources (DoS). Implement query depth limiting, complexity analysis, and rate limiting." },

{ id:226, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the difference between a threat agent and a threat?",
  options:["They are the same thing","A threat agent is the entity that carries out a threat; a threat is the potential danger itself","A threat is more specific than a threat agent","Threat agents only refer to insiders"], answer:1,
  exp:"A threat is the potential for harm (e.g., unauthorized access). A threat agent is the entity that can carry it out (e.g., a hacker, disgruntled employee, natural disaster)." },

{ id:227, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization implements a data governance program. Who should be the executive sponsor?",
  options:["The CTO","The CISO","A C-level executive with cross-functional authority, often the CDO or COO","The DBA team lead"], answer:2,
  exp:"Data governance requires cross-functional authority to enforce policies across business units. A C-level sponsor (CDO, COO) provides the organizational authority and budget." },

{ id:228, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization considers implementing a Trusted Execution Environment (TEE) for processing sensitive workloads. What does a TEE provide?",
  options:["Network-level encryption","A hardware-isolated secure area in the processor where code and data are protected even from the host OS","A virtual machine with extra security","A type of firewall"], answer:1,
  exp:"TEEs (Intel SGX, ARM TrustZone) create hardware-isolated enclaves where code and data are protected from the host OS, hypervisor, and other processes — even a compromised OS cannot access TEE memory." },

{ id:229, type:"mc", difficulty:2, domain:"Communication and Network Security",
  q:"What is the primary security concern with IoT devices on a corporate network?",
  options:["They use too much bandwidth","Many have weak security controls (default passwords, no updates, limited encryption), expanding the attack surface","They are too expensive","They only work with specific vendors"], answer:1,
  exp:"IoT devices often lack robust security — hardcoded credentials, infrequent patches, limited encryption, and weak authentication — making them easy entry points for attackers." },

{ id:230, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"Your organization discovers that a service account has domain admin privileges and its password hasn't been changed in 3 years. What is the MOST appropriate remediation?",
  options:["Delete the account immediately","Rotate the password, reduce privileges to minimum required, implement monitoring, and enroll in a PAM solution","Leave it as-is since it's working","Change the password only"], answer:1,
  exp:"Service accounts with excessive privileges are high-value targets. Rotate credentials, apply least privilege, monitor usage, and manage through PAM. Deleting immediately could break dependent services." },

{ id:231, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is the purpose of a vulnerability disclosure policy?",
  options:["To hide vulnerabilities from the public","To define how external researchers can report vulnerabilities and how the organization will respond","To document internal vulnerability scans","To certify products as vulnerability-free"], answer:1,
  exp:"A vulnerability disclosure policy (VDP) establishes a process for external security researchers to responsibly report vulnerabilities, including timelines, communication channels, and legal safe harbor." },

{ id:232, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your SOC detects PowerShell being used to download and execute a script from an external URL on a finance workstation. This is not normal behavior for this user. What type of attack is MOST likely occurring?",
  options:["Brute force attack","Living off the land (LOTL) / fileless malware attack","Physical security breach","Denial of service"], answer:1,
  exp:"Living off the land attacks use legitimate system tools (PowerShell, WMI, certutil) to download and execute malicious payloads, evading traditional antivirus. This is a hallmark of fileless/LOTL techniques." },

{ id:233, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your organization implements a bug bounty program. What is the MOST important element to include?",
  options:["The highest possible payouts","Clear scope definition, rules of engagement, and legal safe harbor for researchers","A requirement for researchers to sign NDAs before starting","Restriction to internal employees only"], answer:1,
  exp:"Clear scope (what's in/out), rules of engagement (what testing is allowed), and legal safe harbor (researchers won't be prosecuted for good-faith testing) are essential for an effective bug bounty program." },

{ id:234, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the purpose of a risk heat map?",
  options:["To measure server room temperatures","To visually represent risks by plotting likelihood against impact","To track employee performance","To map network topology"], answer:1,
  exp:"A risk heat map is a visual tool that plots risks on a grid of likelihood (x-axis) vs. impact (y-axis), with color coding (green/yellow/red) to prioritize treatment efforts." },

{ id:235, type:"mc", difficulty:3, domain:"Asset Security",
  q:"Your organization must comply with the right to erasure under GDPR (Article 17). However, data is stored across multiple systems including backups and analytics platforms. What is the MOST practical approach?",
  options:["Delete from all systems immediately, including all backups","Delete from production systems, document backup retention schedules, and implement processes to exclude erased data when backups are restored","Inform the user the request cannot be fulfilled","Only delete from the primary database"], answer:1,
  exp:"Complete deletion from all backups may be impractical. Delete from active systems, document backup retention timelines, and ensure erased data isn't restored from backups. This balances compliance with operational reality." },

{ id:236, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the difference between a vulnerability and an exploit?",
  options:["They are the same thing","A vulnerability is a weakness; an exploit is code or a technique that takes advantage of that weakness","An exploit is theoretical; a vulnerability is practical","Vulnerabilities are in software; exploits are in hardware"], answer:1,
  exp:"A vulnerability is a weakness or flaw. An exploit is the specific code, tool, or technique used to take advantage of that vulnerability. Not all vulnerabilities have known exploits." },

{ id:237, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization implements a CASB (Cloud Access Security Broker). What is the PRIMARY function?",
  options:["Replace the corporate firewall","Provide visibility, compliance, data security, and threat protection for cloud service usage","Speed up cloud application performance","Store encryption keys for cloud services"], answer:1,
  exp:"CASBs sit between users and cloud services, providing visibility into shadow IT, enforcing DLP policies, detecting threats, and ensuring compliance across cloud applications." },

{ id:238, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"Your organization implements Privileged Access Workstations (PAWs) for administrators. What is the PRIMARY security benefit?",
  options:["Faster administrative tasks","Isolating privileged activities to hardened, dedicated workstations that reduce credential exposure","Lower hardware costs","Easier remote access"], answer:1,
  exp:"PAWs are dedicated, hardened workstations used exclusively for administrative tasks. This isolation prevents credential theft from compromised general-purpose workstations (email, browsing)." },

{ id:239, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is a security control assessment (SCA)?",
  options:["A type of penetration test","A systematic evaluation of whether security controls are implemented correctly and operating effectively","A vulnerability scan","A compliance audit"], answer:1,
  exp:"SCAs evaluate whether security controls are properly implemented (design assessment) and operating as intended (effectiveness assessment). They are part of continuous monitoring programs." },

{ id:240, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization is implementing a zero-trust network and discovers that 40% of internal traffic is unencrypted. What should you prioritize?",
  options:["Immediately block all unencrypted traffic","Inventory unencrypted communications, implement TLS for critical paths first, then expand","Accept the risk since it's internal traffic","Only encrypt traffic leaving the network"], answer:1,
  exp:"Zero trust assumes no implicit trust, including internal traffic. Start by inventorying and prioritizing critical communication paths for TLS implementation, then systematically expand to all traffic." },

{ id:241, type:"mc", difficulty:2, domain:"Software Development Security",
  q:"What is the purpose of code signing?",
  options:["To encrypt source code","To verify the authenticity and integrity of software using digital signatures","To compress code for distribution","To obfuscate code from reverse engineering"], answer:1,
  exp:"Code signing uses digital signatures to verify that software comes from a known publisher and hasn't been modified since signing, protecting against tampering and establishing trust." },

{ id:242, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your organization's MTPD (Maximum Tolerable Period of Disruption) for the e-commerce platform is 8 hours. Your current RTO is 12 hours. What does this gap indicate?",
  options:["The current DR strategy is adequate","The current DR strategy is inadequate — the business cannot survive a 12-hour outage when the maximum tolerable is 8 hours","The MTPD needs to be increased","RTO and MTPD are unrelated metrics"], answer:1,
  exp:"MTPD is the maximum time the business can survive without the function. If RTO exceeds MTPD, the recovery strategy is inadequate and must be improved to restore service within the MTPD." },

{ id:243, type:"mc", difficulty:2, domain:"Asset Security",
  q:"What is the difference between data at rest, data in transit, and data in use?",
  options:["They refer to data in different time zones","Data at rest is stored; data in transit is being transmitted; data in use is being processed in memory","Data at rest is encrypted; data in transit is not","They are three stages of data deletion"], answer:1,
  exp:"Data at rest: stored on disk/media. Data in transit: moving across a network. Data in use: actively being processed in memory. Each state requires different protection mechanisms." },

{ id:244, type:"mc", difficulty:2, domain:"Security Architecture and Engineering",
  q:"What is the purpose of network segmentation?",
  options:["To increase network speed","To divide a network into segments with different security requirements, limiting the blast radius of a breach","To reduce hardware costs","To simplify network management"], answer:1,
  exp:"Network segmentation isolates systems into zones with appropriate controls, containing breaches to a segment and preventing lateral movement across the entire network." },

{ id:245, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your security team discovers that an internal application is communicating over DNS (port 53) to exfiltrate data. Traditional firewall rules allow DNS. What control would BEST detect this?",
  options:["Block all DNS traffic","Implement DNS query analysis and anomaly detection","Upgrade the firewall","Add another IDS sensor"], answer:1,
  exp:"DNS-based exfiltration bypasses traditional firewalls since DNS is typically allowed. DNS query analysis can detect anomalies like unusually long queries, high query volume, or queries to suspicious domains." },

{ id:246, type:"mc", difficulty:2, domain:"Identity and Access Management",
  q:"What is credential stuffing?",
  options:["Hiding credentials in source code","Using stolen username/password pairs from one breach to attempt login on other services","Brute-forcing passwords","Creating fake credentials"], answer:1,
  exp:"Credential stuffing exploits password reuse by testing stolen credentials from one breach against other services. MFA, rate limiting, and breach detection help prevent it." },

{ id:247, type:"mc", difficulty:2, domain:"Security Assessment and Testing",
  q:"What is the difference between a Type I and Type II error in biometric systems?",
  options:["Type I is a false rejection; Type II is a false acceptance","Type I is a false acceptance; Type II is a false rejection","Both are the same type of error","Type I applies to fingerprints; Type II applies to iris scans"], answer:0,
  exp:"Type I (False Rejection Rate/FRR): rejecting a legitimate user. Type II (False Acceptance Rate/FAR): accepting an impostor. Type II is generally more dangerous for security." },

{ id:248, type:"mc", difficulty:3, domain:"Security Operations",
  q:"Your organization is implementing Security Chaos Engineering. What is the PRIMARY goal?",
  options:["To intentionally break production systems","To proactively discover security weaknesses by introducing controlled failures and attack simulations","To test backup systems","To train incident responders"], answer:1,
  exp:"Security Chaos Engineering proactively tests security assumptions by introducing controlled failures and simulated attacks in production-like environments, revealing weaknesses before real attackers find them." },

{ id:249, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"A developer implements server-side request forgery (SSRF) protection by blocking requests to private IP ranges. An attacker bypasses this using DNS rebinding. What additional control is needed?",
  options:["Block all outbound requests","Validate the resolved IP address after DNS resolution, not just the hostname","Implement a WAF","Use HTTPS for all requests"], answer:1,
  exp:"DNS rebinding changes the IP a hostname resolves to between the validation check and the actual request. Validate the resolved IP address at connection time, not just during initial URL validation." },

{ id:250, type:"mc", difficulty:3, domain:"Security and Risk Management",
  q:"Your board asks about the organization's cyber resilience posture. How does cyber resilience differ from cybersecurity?",
  options:["They are the same concept","Cybersecurity focuses on preventing attacks; cyber resilience focuses on the ability to prepare for, respond to, and recover from cyber events while maintaining operations","Cyber resilience replaces the need for cybersecurity","Cyber resilience only applies to critical infrastructure"], answer:1,
  exp:"Cyber resilience goes beyond prevention to include the ability to anticipate, withstand, recover from, and adapt to adverse cyber events. It assumes breaches will occur and focuses on maintaining operations." },

{ id:251, type:"mc", difficulty:2, domain:"Security and Risk Management",
  q:"What is the purpose of a non-disclosure agreement (NDA)?",
  options:["To grant access to classified information","To legally bind parties to protect confidential information from unauthorized disclosure","To replace encryption","To document security incidents"], answer:1,
  exp:"NDAs are legal contracts that establish confidentiality obligations between parties, providing legal recourse if confidential information is improperly disclosed." },

{ id:252, type:"mc", difficulty:3, domain:"Security Architecture and Engineering",
  q:"Your organization implements a WAF that operates in blocking mode. After deployment, legitimate users report being blocked. What should you do?",
  options:["Disable the WAF","Switch to detection-only mode, tune the rules to reduce false positives, then re-enable blocking","Allow all traffic through","Reduce all security rules to minimum"], answer:1,
  exp:"Switch to detection mode to stop blocking legitimate users, analyze the false positives, tune rules (adjust thresholds, whitelist legitimate patterns), then gradually re-enable blocking mode." },

{ id:253, type:"mc", difficulty:3, domain:"Communication and Network Security",
  q:"Your organization needs to protect against DDoS attacks on its web infrastructure. What is the MOST effective architectural approach?",
  options:["A larger firewall","CDN with DDoS mitigation, anycast routing, and rate limiting","More bandwidth from the ISP","An additional IDS"], answer:1,
  exp:"CDN with DDoS mitigation absorbs volumetric attacks across distributed PoPs. Anycast routing distributes traffic. Rate limiting protects against application-layer attacks. A single firewall becomes a bottleneck." },

{ id:254, type:"mc", difficulty:3, domain:"Identity and Access Management",
  q:"Your organization discovers shadow IT — employees are using unauthorized SaaS applications with corporate credentials. What is the MOST comprehensive remediation?",
  options:["Block all SaaS applications","Implement a CASB for visibility and control, combined with SSO to manage approved applications","Send a warning email to all employees","Restrict internet access"], answer:1,
  exp:"A CASB provides visibility into shadow IT usage. Combined with SSO and an approved application catalog, it enables controlled access while identifying and managing unauthorized service usage." },

{ id:255, type:"mc", difficulty:2, domain:"Security Operations",
  q:"What is the purpose of a runbook in security operations?",
  options:["A record of physical exercise","Step-by-step documented procedures for handling specific types of incidents or operational tasks","A list of running processes","A network diagram"], answer:1,
  exp:"Runbooks provide detailed, step-by-step procedures for common operational tasks and incident types, ensuring consistent and efficient response regardless of which analyst handles it." },

{ id:256, type:"mc", difficulty:3, domain:"Software Development Security",
  q:"Your organization's application uses WebSockets for real-time communication. What security control is MOST important to implement?",
  options:["Use HTTP instead","Implement authentication at connection establishment, validate origin headers, and apply message-level authorization","Disable real-time features","Use polling instead"], answer:1,
  exp:"WebSocket connections persist after initial handshake. Authenticate at connection time, validate Origin headers to prevent cross-site WebSocket hijacking, and authorize each message since the connection stays open." },

];
