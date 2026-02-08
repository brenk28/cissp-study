# Comprehensive CISSP Study Guide

This guide covers the 8 domains of the CISSP Common Body of Knowledge (CBK) in detail. It goes beyond simple definitions to explain the *how* and *why* of security concepts, which is critical for the exam.

---

## Domain 1: Security and Risk Management
**Goal:** Align security with business strategy, laws, and ethics.

### 1. The CIA Triad
The foundation of information security.
*   **Confidentiality**: Preventing unauthorized disclosure (Encryption, Access Controls, Steganography).
*   **Integrity**: Preventing unauthorized modification (Hashing, Digital Signatures, Write-Once Media).
*   **Availability**: Ensuring timely access (Redundancy, RAID, UPS, Backups).

### 2. Risk Management
Risk cannot be eliminated, only managed to an acceptable level.
*   **Terminology**:
    *   **Asset**: Value to the company.
    *   **Threat**: Potential harm (Natural, Human, Technical).
    *   **Vulnerability**: Weakness (Unpatched OS, Unlocked door).
    *   **Exploit**: A threat agent acting on a vulnerability.
    *   **Risk**: The likelihood of a threat exploiting a vulnerability and the resulting impact.
*   **Quantitative Risk Analysis** (Numbers-based):
    *   **SLE (Single Loss Expectancy)** = Asset Value ($) × Exposure Factor (%).
    *   **ALE (Annualized Loss Expectancy)** = SLE × ARO (Annual Rate of Occurrence).
    *   *Tip: Use ALE to justify the cost of a safeguard. Cost of control must be < Value of assert protected.*
*   **Risk Responses**:
    *   **Avoid**: Stop the risky activity (e.g., don't launch the feature).
    *   **Transfer**: Shift liability (Insurance, SaaS).
    *   **Mitigate**: Apply controls to reduce risk (Firewalls, Training).
    *   **Accept**: Management formally signs off on the risk (usually when cost of control > value of asset).

### 3. Legal and Compliance
*   **Criminal Law**: Society vs. Individual (Jail/Fines). Burden of proof: "Beyond reasonable doubt".
*   **Civil/Tort Law**: Individual vs. Individual (Financial damages). Burden of proof: "Preponderance of evidence".
*   **Administrative Law**: Regulatory bodies (HIPAA, GDPR) vs. Organizations.
*   **Intellectual Property**:
    *   **Copyright**: Expression of ideas (Code, Books). Expires 70 years after death.
    *   **Trademark**: Brand identity (Logo, Slogan).
    *   **Patent**: Inventions. Strongest protection but short duration (20 years).
    *   **Trade Secret**: Confidential business info (Google Algorithm). Lasts as long as it's kept secret.

---

## Domain 2: Asset Security
**Goal:** Identify, classify, and protect data throughout its lifecycle.

### 1. Data Classification
You cannot protect what you don't know you have.
*   **Commercial Levels**: Public -> Internal -> Confidential -> Restricted (Highest).
*   **Military/Gov Levels**: Unclassified -> Sensitive -> Confidential -> Secret -> Top Secret (Highest).
*   **Roles**:
    *   **Data Owner**: Management. *Decides* classification and access rights. Liable for negligence.
    *   **Data Custodian**: IT Staff. *Implements* the controls (backups, ACLs) defined by the owner.
    *   **Data Controller**: (GDPR) Decides purpose/means of processing.

### 2. Data Lifecycle
*   **Retention**: How long to keep data? (Driven by laws/regulations).
*   **Destruction**:
    *   **Clearing**: Overwriting (for reuse internally).
    *   **Purging**: Degaussing (removing magnetic field) for removal from secure area.
    *   **Destruction**: Shredding/Incinerating (Physical destruction is the only way to be 100% sure).
    *   **Data Remanence**: The data left behind after an attempted delete. SSDs are harder to sanitize than HDDs due to wear leveling.

---

## Domain 3: Security Architecture and Engineering
**Goal:** Building security into systems from the ground up (Security by Design).

### 1. Security Models
*   **Bell-LaPadula**: **Confidentiality** model.
    *   *Simple Security Property*: No Read Up (Can't read secrets).
    *   *Star Property*: No Write Down (Can't leak secrets to lower levels).
*   **Biba**: **Integrity** model.
    *   *Simple Integrity Axiom*: No Read Down (Don't read lies).
    *   *Star Integrity Axiom*: No Write Up (Don't corrupt high-integrity data).
*   **Clark-Wilson**: Integrity via separation of duties and well-formed transactions.

### 2. Cryptography
*   **Symmetric (Private Key)**: Fast, used for bulk data encryption (AES, DES, RC4).
    *   *Problem*: Key distribution. How do I send you the key securely?
*   **Asymmetric (Public Key)**: Slow, used for key exchange and digital signatures (RSA, ECC, Diffie-Hellman).
    *   *Concept*: Public key encrypts, Private key decrypts. OR Private key signs, Public key verifies.
*   **Hashing**: Integrity check (SHA-256, MD5). One-way function.
    *   *Collision*: Two different inputs producing the same hash.
*   **PKI (Public Key Infrastructure)**:
    *   **CA (Certificate Authority)**: Trusted third party that issues certificates.
    *   **CRL (Certificate Revocation List)**: List of bad certs.
    *   **OCSP**: Online check for cert validity (faster than CRL).

### 3. Physical Security
*   **CPTED (Crime Prevention Through Environmental Design)**: Landscaping, lighting, and layout used to deter crime.
*   **Fire Classes**:
    *   **A**: Ash (Wood/Paper) -> Water.
    *   **B**: Boil (Liquids) -> Foam/Powder.
    *   **C**: Circuit (Electrical) -> CO2/FM-200 (Don't use water!).
    *   **D**: Metal (Magnesium) -> Dry Powder.
    *   **K**: Kitchen (Grease).

---

## Domain 4: Communication and Network Security
**Goal:** Protecting data in transit.

### 1. OSI Model (Please Do Not Trow Sausage Pizza Away)
1.  **Physical**: Bits, Cables, Wi-Fi. (Attacks: Sniffing, Jamming).
2.  **Data Link**: Frames, MAC, Switches. (Attacks: ARP Spoofing/Poisoning).
3.  **Network**: Packets, IP, Routers. (Attacks: Ping flood, Route spoofing).
4.  **Transport**: Segments, TCP/UDP. (Attacks: Port scanning, SYN flood).
5.  **Session**: Manager of the connection.
6.  **Presentation**: Encryption (TLS), Formatting (JPEG).
7.  **Application**: User interface (HTTP, SMTP).

### 2. Secure Protocols
*   **TLS/SSL**: Encrypts HTTP (HTTPS), SMTP, LDAP. Mutual Auth involves both client and server certs.
*   **IPSec**: Secures IP packets.
    *   **AH (Authentication Header)**: Integrity + Auth only (No encryption).
    *   **ESP (Encapsulating Security Payload)**: Encryption + Integrity.
    *   **Tunnel Mode**: Encrypts headers + data (VPNs).
    *   **Transport Mode**: Encrypts data only (Internal logic).
*   **Wireless**:
    *   *WEP/WPA*: Broken.
    *   *WPA2*: Uses AES/CCMP. Secure.
    *   *WPA3*: Uses SAE (Simultaneous Authentication of Equals) to stop dictionary attacks.

---

## Domain 5: Identity and Access Management (IAM)
**Goal:** Ensuring the right people imply the right access.

### 1. Identification vs. Authentication vs. Authorization
*   **Identification**: "I am Bill". (User ID).
*   **Authentication**: "Prove it". (Password).
*   **Authorization**: "Here is what Bill is allowed to do". (Permissions).
*   **Accounting**: "Here is a log of what Bill did".

### 2. Multi-Factor Authentication (MFA)
Must use 2 of the 3 types:
1.  **Type 1 (Knowledge)**: Password, PIN, Mother's maiden name.
2.  **Type 2 (Possession)**: Smart card, Phone, RSA Token.
3.  **Type 3 (Inherence)**: Fingerprint, Retina, Face.
*   *Note: Password + PIN is NOT MFA (Two Type 1s).*

### 3. Single Sign-On (SSO)
*   **Kerberos**: Internal/LAN SSO. Uses specific tickets to prevent replay attacks.
    *   *KDC*: Key Distribution Center (Single Point of Failure).
    *   *Time Sync*: Critical requirement.
*   **Federated Identity (SAML/OIDC)**: Cloud/Web SSO.
    *   *IdP (Identity Provider)*: Holds the user directory (e.g., Google, Okta).
    *   *SP (Service Provider)*: The app you want to login to (e.g., Salesforce).

---

## Domain 6: Security Assessment and Testing
**Goal:** Verify that controls are working.

### 1. Testing Types
*   **Vulnerability Scan**: Automated, passive (usually). Finds "low hanging fruit".
*   **Penetration Test**: Active exploitation.
    *   *Rules of Engagement*: Critical document defining scope, timing, and "get out of jail free" card.
    *   *Blind Test*: Attacker knowns nothing (Black Box).
    *   *Double Blind*: Defenders don't know it's a test either (tests incident response).

### 2. Auditing
*   **SOC Reports**: Service Organization Control.
    *   **SOC 1**: Financial reporting (not security focused).
    *   **SOC 2**: Security focused.
        *   **Type 1**: Snapshot in time (Design).
        *   **Type 2**: Period of time (6 months+). Tests *effectiveness*.
    *   **SOC 3**: Public marketing summary of SOC 2.

---

## Domain 7: Security Operations
**Goal:** Keeping the lights on and responding to incidents.

### 1. Incident Response (IR)
*   **Preparation**: The most important phase. Training, tools, playbooks.
*   **Detection**: ID'ing the breach (SIEM alerts, IDS).
*   **Containment**: Stop the bleeding. (Disconnect network, isolate VLAN). *Do this before remediation*.
*   **Eradication**: Remove the root cause (Reimage, patch).
*   **Recovery**: Restore to production.
*   **Lessons Learned**: Update process so it doesn't happen again.

### 2. Disaster Recovery (DR) vs Business Continuity (BCP)
*   **BCP**: Strategic. How does the business keep making money during a disaster?
*   **DR**: Tactical. How does IT get the servers back up?
*   **Site Types**:
    *   **Hot Site**: Fully equipped, real-time data. Expensive. RTO: Hours/Minutes.
    *   **Warm Site**: Equipment present, but data needs to be restored. RTO: Days.
    *   **Cold Site**: Empty room with power/AC. No hardware. RTO: Weeks.

### 3. Forensics
*   **Order of Volatility** (Capture most fragile data first):
    1.  CPU Cache / Registers.
    2.  RAM.
    3.  Swap/Page File.
    4.  Hard Drive.
    5.  Logs on remote server.
    6.  Archive media.
*   **Chain of Custody**: The paper trail of who handled evidence. If broken, evidence is inadmissible in court.

---

## Domain 8: Software Development Security
**Goal:** Secure code and databases.

### 1. Database Security
*   **Aggregation and Inference**: The ability to deduce sensitive info from non-sensitive data.
    *   *Control*: Polyinstantiation (Show different data to different users) or Cell suppression.
*   **ACID Model** (for Database Integrity):
    *   **Atomicity**: All or nothing transaction.
    *   **Consistency**: DB follows rules.
    *   **Isolation**: Transactions don't interfere.
    *   **Durability**: Once committed, it stays saved.

### 2. Web Attacks (OWASP)
*   **SQL Injection**: Input `' OR 1=1;--` to bypass auth.
    *   *Fix*: **Prepared Statements** / Parameterized Queries. Input validation is good, but prepared statements are the cure.
*   **XSS (Cross Site Scripting)**: Injecting JS to steal session cookies.
    *   *Fix*: Output Encoding (Data sanitization).
*   **CSRF (Cross Site Request Forgery)**: Tricking a logged-in user's browser into sending a command.
    *   *Fix*: Anti-CSRF Tokens (Unique random value for each form request).

### 3. Development Methods
*   **Waterfall**: Linear, rigid. Hard to fix security bugs found late.
*   **Agile**: Iterative, sprints. Security must be integrated daily (User stories).
*   **DevSecOps**: Automating security choices (CI/CD pipelines, SAST/DAST).
    *   **SAST**: Static analysis (Code scanner). White box.
    *   **DAST**: Dynamic analysis (Runniing app scanner). Black box.
