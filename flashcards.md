# CISSP Flashcards (50 Key Concepts)

## Domain 1: Security and Risk Management

1.  **Confidentiality**
    *   Preserving authorized restrictions on information access and disclosure, including means for protecting personal privacy and proprietary information.

2.  **Integrity**
    *   Guarding against improper information modification or destruction, and includes ensuring information non-repudiation and authenticity.

3.  **Availability**
    *   Ensuring timely and reliable access to and use of information.

4.  **Due Care vs. Due Diligence**
    *   **Due Care**: Acting as a reasonable person would (e.g., installing a firewall). The "prudent man" rule.
    *   **Due Diligence**: Investigating and verifying risks (e.g., researching which firewall to buy).

5.  **Single Loss Expectancy (SLE)**
    *   The monetary loss expected from a single event. Calculated as Asset Value x Exposure Factor (AV x EF).

6.  **Annualized Loss Expectancy (ALE)**
    *   The expected monetary loss for an asset over one year. Calculated as SLE x ARO (Annualized Rate of Occurrence).

7.  **STRIDE Threat Model**
    *   Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.

## Domain 2: Asset Security

8.  **Data Remanence**
    *   Residual representation of data that remains even after attempts have been made to remove or erase the data.

9.  **Scoping vs. Tailoring**
    *   **Scoping**: Determining which parts of a standard apply to the organization.
    *   **Tailoring**: Modifying the scoped controls to fit the organization's specific needs.

10. **Data Owner**
    *   The individual (usually management) ultimately responsible for the data's protection and classification.

11. **Data Custodian**
    *   The individual (usually IT) responsible for the technical environment and protection of data (backups, patching).

## Domain 3: Security Architecture and Engineering

12. **Bell-LaPadula Model**
    *   A state machine model used for enforcing access control in government and military applications. Focuses on **Confidentiality**. Rules: Simple Security Property (No Read Up), * Star Property (No Write Down).

13. **Biba Model**
    *   Focuses on **Integrity**. Rules: Simple Integrity Axiom (No Read Down), * Integrity Axiom (No Write Up).

14. **Clark-Wilson Model**
    *   Focuses on **Integrity** in commercial environments. Uses transactions and separation of duties (Transformation Procedures, Constrained Data Items).

15. **Brewer-Nash (Chinese Wall) Model**
    *   Designed to prevent conflicts of interest. Users access data based on their conflict of interest class.

16. **Common Criteria (ISO 15408)**
    *   A framework for evaluating security products. Result is an EAL (Evaluation Assurance Level) from 1 (lowest) to 7 (highest).

17. **TPM (Trusted Platform Module)**
    *   A hardware chip on the motherboard that stores cryptographic keys and ensures platform integrity (Root of Trust).

18. **Steganography**
    *   Hiding the *existence* of a message, often by embedding it within an image or audio file (Least Significant Bit modification).

19. **Quantum Key Distribution (QKD)**
    *   Uses quantum mechanics to secure key exchange. Any attempt to eavesdrop changes the state of the photons, alerting the parties.

## Domain 4: Communication and Network Security

20. **IPSec (Internet Protocol Security)**
    *   A suite of protocols to secure IP communications. Two modes: **Tunnel** (encrypts entire packet) and **Transport** (encrypts only payload). Two protocols: **AH** (Integrity/Auth) and **ESP** (Confidentiality).

21. **OSI Layer 7 Attacks**
    *   Attacks targeting the application layer, such as SQL Injection, XSS, and CSRF. Harder to detect by traditional firewalls.

22. **Zero Trust Architecture**
    *   A security model that denies access to applications and data by default. Threat prevention is achieved by only granting access to networks and workloads utilizing policy informed by continuous, contextual, risk-based verification across users and their associated devices.

23. **SD-WAN (Software-Defined Wide Area Network)**
    *   Decouples the networking hardware from its control mechanism, allowing for dynamic path selection and centralized management.

24. **DDoS (Distributed Denial of Service)**
    *   An attack where multiple compromised systems (botnet) target a single system to cause a denial of service.

25. **NAC (Network Access Control)**
    *   Security solution that enforces policy on devices that access networks to increase network visibility and reduce risk.

## Domain 5: Identity and Access Management (IAM)

26. **Kerberos**
    *   A network authentication protocol using tickets. Relies on a KDC (Key Distribution Center), TGT (Ticket Granting Ticket), and time synchronization to prevent replay attacks.

27. **SAML (Security Assertion Markup Language)**
    *   XML-based open standard for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP).

28. **OIDC (OpenID Connect)**
    *   A simple identity layer on top of the OAuth 2.0 protocol. Allows clients to verify the identity of the End-User based on the authentication performed by an Authorization Server.

29. **Discretionary Access Control (DAC)**
    *   The data owner decides who has access (e.g., Windows file permissions).

30. **Mandatory Access Control (MAC)**
    *   The operating system decides access based on security labels and clearance (e.g., SELinux, Military systems).

31. **Role-Based Access Control (RBAC)**
    *   Access is based on the user's role/job function within the organization (Non-discretionary).

32. **Attribute-Based Access Control (ABAC)**
    *   Access is based on attributes (user, resource, environment). "If user is Manager AND time is 9-5 AND location is Office".

## Domain 6: Security Assessment and Testing

33. **Social Engineering**
    *   Manipulating people into performing actions or divulging confidential information (e.g., Phishing, Vishing, Pretexting).

34. **Fuzzing (Fuzz Testing)**
    *   Providing invalid, unexpected, or random data as inputs to a computer program to find bugs and vulnerabilities (crashes, memory leaks).

35. **SOC 2 Type I vs. Type II**
    *   **Type I**: Report on the design of controls at a specific point in time.
    *   **Type II**: Report on the design AND operating effectiveness of controls over a period of time (usually 6-12 months).

## Domain 7: Security Operations

36. **Honeypot**
    *   A decoy system designed to lure attackers away from critical systems and gather intelligence on their methods.

37. **SIEM (Security Information and Event Management)**
    *   Aggregates and analyzes log data from across the enterprise to detect security incidents in real-time.

38. **Bia (Business Impact Analysis)**
    *   Identifies critical business functions and the potential impact of their disruption. Determines RTO and RPO.

39. **Chain of Custody**
    *   Documentation that chronicles the seizure, custody, control, transfer, analysis, and disposition of physical or electronic evidence.

40. **Write Blocker**
    *   A hardware or software tool used in digital forensics to prevent data from being written to a storage device, ensuring evidence integrity.

41. **Need to Know vs. Least Privilege**
    *   **Need to Know**: You have permission, but do you have a *reason* to access this specific file right now?
    *   **Least Privilege**: You are given only the minimum permissions necessary to do your job.

42. **Due Process**
    *   The legal requirement that the state must respect all legal rights that are owed to a person. In employment, it means fair treatment during investigations/termination.

## Domain 8: Software Development Security

43. **DevSecOps**
    *   The philosophy of integrating security practices within the DevOps process. Security is "shifted left" (done earlier).

44. **SQL Injection (SQLi)**
    *   An attack where malicious SQL statements are inserted into an entry field for execution (e.g., `dUMP DATABASE`). Fix: Parameterized queries/Prepared statements.

45. **XSS (Cross-Site Scripting)**
    *   An attack where malicious scripts are injected into trusted websites.
        *   **Stored**: Malicious script is saved on the server (e.g., forum post).
        *   **Reflected**: Malicious script is reflected off the web server (e.g., search result).
        *   **DOM-based**: Vulnerability in client-side code usually in the "hash" fragment.

46. **CSRF (Cross-Site Request Forgery)**
    *   An attack that forces an end user to execute unwanted actions on a web application in which they are currently authenticated. Fix: Anti-CSRF tokens.

47. **Buffer Overflow**
    *   An anomaly where a program, while writing data to a buffer, overruns the buffer's boundary and overwrites adjacent memory locations.

48. **Software Composition Analysis (SCA)**
    *   A tool that identifies open-source components and their known vulnerabilities in a codebase.

49. **Polyinstantiation**
    *   Creating multiple instances of a database object (row/table) with different security levels to prevent inference attacks.

50. **Verification vs. Validation**
    *   **Verification**: "Are we building the product right?" (Conforms to specs).
    *   **Validation**: "Are we building the right product?" (Meets user needs).
