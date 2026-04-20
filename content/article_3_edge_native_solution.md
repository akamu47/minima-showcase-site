# The Edge-Native Answer: How Minima and Integritas Close the AI Compliance Gap

*Article 3 of 5 — Minima Global Content Series*

---

The previous two articles in this series established the problem. The EU AI Act's Article 12 requires that high-risk AI systems "technically allow for the automatic recording of events (logs) over the lifetime of the system." Article 14 mandates human oversight mechanisms, including a stop capability, built into the system itself. Articles 19 and 26 set a minimum six-month retention requirement for those logs. And Article 72 requires active, ongoing post-market monitoring of every deployed high-risk system.

Every major AI compliance platform available today — Credo AI, OneTrust, IBM OpenPages, Holistic AI, Monitaur — fails to address these requirements for the largest category of high-risk AI deployment: systems that operate at the edge, autonomously, without persistent cloud connectivity.

This article explains how [Minima's blockchain architecture](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf) and its [Integritas](https://integritas.technology) compliance product are engineered to solve that specific problem — not as a conceptual proposal, but as demonstrated, validated technology. It maps each EU AI Act requirement directly to the technical capability that addresses it, documents the first successful proof-of-concept validation in live autonomous flight, and explains the legal foundation that makes blockchain-based compliance evidence legally presumptive under EU law.

---

## Part 1: The Architecture — Why the Underlying Design Matters

Most discussions of blockchain for compliance treat the blockchain as a generic "secure database." The specifics of which blockchain, and how it is designed, rarely enter the conversation. For edge AI compliance, those specifics are decisive.

The EU AI Act's requirements must be met *on the device* — at the point of action, in real time, during disconnected operation. That means the compliance infrastructure cannot live on a server somewhere. It must be lightweight enough to run on a drone flight controller, a vehicle ECU, or an industrial sensor node. It must work without network connectivity. And it must produce records that an adversarial regulator, in a courtroom, cannot credibly argue have been tampered with.

No existing enterprise blockchain or public Layer 1 meets those criteria. Bitcoin full nodes require [350GB and growing](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf); Ethereum nodes require upward of 1TB; Solana validators need 256GB of RAM. These are data center requirements, not edge device requirements.

Minima was designed from first principles to run on exactly the hardware where high-risk AI actually operates.

### Full Node on Every Device

The defining architectural choice in Minima is that every participant runs a complete constructing and validating node — not a "light client" that offloads verification to a trusted server, but a full node that independently processes and validates the blockchain state. This is what makes tamper-proof edge compliance possible: the device itself holds the cryptographic record, and it can verify its own logs without trusting any external party.

As the [Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf) states: *"Minima is a cryptocurrency designed to be ultra-compact. Designed to remain Totally Decentralized. Designed to have no rulers. There are no miners and no ever-growing database... Everyone runs a Complete node. Forever."*

The entire node — software, cryptographic spine, and the user's personal UTXO data — fits within approximately 300MB. The mechanisms that achieve this compact footprint are not arbitrary optimizations; they are the same mechanisms that make on-device compliance verification architecturally sound.

### Cascading Proof Chain: Logarithmic, Not Linear

Standard blockchain designs require nodes to store the entire history of the chain, which grows linearly with every block added. Minima uses a 32-level Cascading Proof Chain that retains only the 1,024 most recent blocks in full. Older blocks are distilled into compact "Super Blocks" — at most 128 blocks per level, across 32 levels — so the chain history grows logarithmically rather than linearly. ([Minima Docs: The Blockchain](https://docs.minima.global/docs/learn/the-blockchain))

This pruning does not sacrifice immutability. The cascade preserves a cumulative cryptographic proof of work covering the entire chain history without requiring storage of every historical block. An audit record anchored five years ago is just as verifiable as one anchored yesterday.

### UTXO and MMR Proofs: User-Centric by Design

Minima uses a UTXO (Unspent Transaction Output) model extended with Peter Todd's Merkle Mountain Range (MMR) proof scheme. Rather than requiring every node to maintain a global database of all unspent outputs, each user stores only their own transaction data. Any transaction can be verified against a shared cryptographic spine via a Merkle proof — without the verifier needing to hold the full dataset. ([Minima Docs: Storage-less MMR UTXO](https://docs.minima.global/docs/core/minimawhitepaper/storagelessmmrutxo))

For AI compliance, this means an autonomous device holds its own cryptographically verifiable records. A regulator requesting evidence of the device's behavior does not need to access a central server. The device's own logs, anchored to the MMR root committed in each block, are self-evidencing.

### Tx-PoW: Gasless at IoT Scale

Minima has no transaction fees in the traditional sense. Instead of a gas market, every transaction sender performs approximately 10 seconds of mobile-processor computational work (Transaction Proof of Work) before broadcasting. This work is contributed to network security — cooperative mining — and the network is protected against spam without requiring a fee market. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

For IoT and edge AI compliance, this is not a minor technical detail. A fleet of 10,000 connected vehicles logging AI decisions in real time — at, say, 100 events per vehicle per hour — generates one million blockchain records per hour. On Ethereum at any non-trivial gas price, that volume is economically unworkable. On Minima, the cost is 10 seconds of on-device computation per event, with no payment to any external party. High-frequency micro-attestation becomes economically viable at any scale. ([Evertiq: Siemens Cre8Ventures partnership](https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security))

### WOTS + SHA3-256: The Quantum Argument

Minima's security rests entirely on hash-based cryptography. SHA3-256 (KECCAK) underlies all mining, hashing, and proof chains. For digital signatures, Minima uses the Winternitz One-Time Signature (WOTS) scheme — a hash-based construction that cannot be forged without inverting the one-way hash function, a problem quantum computers cannot efficiently solve. ([Minima Docs: Quantum Security](https://docs.minima.global/docs/learn/quantum-security))

Bitcoin and Ethereum both use ECDSA, which is vulnerable to Shor's algorithm: a sufficiently powerful quantum computer could derive private keys from exposed public keys. For systems embedded in infrastructure expected to operate for 20 to 30 years — autonomous vehicles, industrial robots, energy grid sensors — this is not a theoretical concern. NIST's first finalized post-quantum standard (SLH-DSA, FIPS 205) uses the same underlying hash-based principle as WOTS. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

Audit records created on Minima today will be verifiable, and will remain tamper-evident, even in a post-quantum threat environment.

### Maxima: The Off-Chain Oversight Layer

Maxima is Minima's native information transport layer — described in the whitepaper as *"Maxima is to information what Minima is to value."* Every Minima node runs Maxima automatically, with no separate installation. It enables any node to send encrypted data — sensor readings, system status, operational alerts — to any other node, independently of the blockchain itself, in a fully decentralized point-to-point manner. ([Minima Docs: Maxima About](https://docs.minima.global/docs/learn/maxima-about))

Crucially, Maxima messages contribute proof-of-work to Layer 1 security. Off-chain monitoring traffic does not weaken the base layer; it strengthens it. ([X / Fetch.ai post on Maxima](https://x.com/Satoureireal/status/2014902942613307816)) For AI compliance, Maxima provides the real-time monitoring channel that Article 14's human oversight requirement demands — machine-to-machine telemetry that flows back to authorized supervisors without routing through any centralized server.

### L1 Comparison

The architectural contrast with other public blockchains reflects the fundamental design choice at the centre of Minima's edge compliance thesis:

| Dimension | Minima | Bitcoin | Ethereum | Solana |
|---|---|---|---|---|
| Node model | Every device is a full constructing and validating node | Full nodes require 350GB+; most users run light clients | Full nodes require 1TB+; most users via Infura/Alchemy | Validators require 256GB+ RAM enterprise hardware |
| Quantum security | Built-in from genesis (WOTS + SHA3-256) | Vulnerable (ECDSA) | Vulnerable (ECDSA) | Vulnerable (ECDSA) |
| Transaction fees | None (Tx-PoW work + optional burn) | Variable gas (sats/byte) | Variable gas (Gwei) | Low fixed fees |
| Data storage per node | ~300MB (user's own data only) | 350GB+ chain history | 1TB+ state | 80TB+ for validators |
| Hardware target | Mobile phones, IoT chips, drones | Data centre / ASIC farms | Data centre / cloud | High-performance validators |
| DePIN / IoT design | Primary design goal | None | Possible but expensive | Possible but hardware-heavy |

Sources: [Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf); [We Are DePIN podcast with Paddy Cerri](https://www.youtube.com/watch?v=y_dGFpoF3WU)

As Paddy Cerri, Minima's Co-founder and Chief Architect, has put it: *"The machine-to-machine economy is really where I see Minima really shining — in low resource environments."* ([We Are DePIN podcast](https://www.youtube.com/watch?v=y_dGFpoF3WU))

---

## Part 2: Integritas — Compliance as Infrastructure

The Minima protocol provides the cryptographic substrate: an immutable, distributed, tamper-resistant ledger that runs on edge devices. [Integritas](https://integritas.technology) is the compliance product layer that makes that substrate useful to organizations governed by the EU AI Act.

### The Four-Step Workflow

Integritas' core process is straightforward in concept, even if the cryptography underneath is not:

1. **Data creation.** Any data — an AI system's input prompt, the features used in a decision, the model version at inference, a sensor reading, a control signal — is captured at the moment it occurs.
2. **Cryptographic hashing.** Integritas generates a cryptographic hash of the data. This hash is a fixed-length fingerprint: unique to the exact content, deterministic, and non-reversible. Any change to the source data — a single altered character — produces a completely different hash.
3. **Blockchain anchoring.** The hash is recorded to the Minima blockchain, creating an immutable timestamp and proof of existence at that moment. Because Minima is decentralized and distributed across every node in the network, no single party can alter this record after the fact.
4. **Certificate issuance.** At any future point — six months later, during a regulatory audit, in litigation — the hash of the current data is compared to the blockchain record. A match proves the data is authentic and unchanged. A mismatch proves tampering. Integritas produces a comprehensive verification report suitable for regulatory submission.

([Integritas.technology](https://integritas.technology))

The critical design insight: **personal data never goes on-chain**. Only the cryptographic hash is anchored to the blockchain. The underlying data can be stored in encrypted off-chain storage that is GDPR-compliant and subject to erasure. When a data subject exercises their right to erasure, the encryption key for the off-chain data is destroyed (crypto-shredding), while the on-chain hash — containing no personal data — remains intact. The audit trail is preserved without retaining the personal information. ([Blockchain Council — Blockchain for AI Compliance](https://www.blockchain-council.org/blockchain/blockchain-for-ai-compliance-gdpr-hipaa-eu-ai-act-immutable-logs/))

### SDK Integration

Integritas is API-driven and designed for integration with existing MLOps pipelines and AI platforms. The product exposes a JavaScript/TypeScript SDK that integrates with standard AI inference workflows, including explicit support for GPT-4 and other foundation models:

```javascript
import { Integritas } from '@integritas/core';
const AuditTrail = Audit.createTrail('AI Interaction');
Integritas.verify('validate model output');
const result = await integritas.audit('trace model decision');
```

([Integritas.technology](https://integritas.technology))

The architecture is compatible with on-premises or cloud infrastructure. Edge deployment — logging sensor data and AI decisions in real time on resource-constrained hardware — is explicitly supported. This is what enabled the University of Southampton drone demonstration: Integritas created timestamped blockchain records during live autonomous flight on hardware operating under strict power constraints.

### Standards Coverage

| Standard | Status | Relevance |
|---|---|---|
| EU AI Act | Compliant | Directly addresses traceability and accountability requirements for high-risk AI systems (enforcement from August 2026 for Annex III systems) |
| ISO 42001 | Supported | Simplifies audit reporting for conformity with the first international AI Management System standard |
| SOC2 Type II | Supported | Immutable records facilitate demonstration that security controls have operated effectively over time |
| ASTM / EASA | Aligned | On-device timestamping and data attestation delivers direct alignment to drone regulatory requirements per the University of Southampton demonstration |

([Integritas.technology](https://integritas.technology); [Chainwire: Blockchain-on-Chip announcement](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

### Five Use Cases

([Integritas.technology](https://integritas.technology))

1. **AI decision auditability.** Every AI decision — model version, input features, output, timestamp — is automatically, immutably recorded. Governance of LLM interactions, foundation model outputs, and automated decision systems. The record is independently verifiable by any Minima node.

2. **Document authenticity.** Hash any document at its approved version; any subsequent modification is cryptographically detectable. Regulatory submissions, controlled documentation, model cards, technical files — all version-controlled by cryptographic proof rather than access controls.

3. **Data provenance at handoffs.** Every data handoff in a manufacturing or AI development pipeline is anchored. Tamper-evident traceability from design through manufacturing through operations — a verifiable digital thread that satisfies Article 10's data governance requirements.

4. **Edge data security.** Real-time anchoring of sensor and telemetry data from edge devices. Event logs from autonomous systems are secured at the moment of generation, not uploaded and secured retrospectively in a cloud database that someone controls.

5. **Sustainability reporting.** Digital Product Passport frameworks require provenance of material, manufacturing, and recycling data across supply chains. Blockchain anchoring provides the integrity proof that makes those passports credible rather than self-reported.

The key insight that distinguishes Integritas from every competing compliance platform: **compliance lives on the device, not in a cloud dashboard**. When an autonomous vehicle is operating in a tunnel with no connectivity, compliance is not paused. The device is creating its own immutable records, independently, at the point of action. When connectivity resumes, those records are distributed across the Minima network and become independently verifiable.

---

## Part 3: Mapping to the Regulation

The EU AI Act's requirements for high-risk AI systems are specific, technical, and enforcement is beginning on [2 August 2026 for Annex III systems](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act). The following maps each relevant obligation directly to the Minima/Integritas capability that addresses it.

### Requirement-to-Capability Mapping

| EU AI Act Requirement | Article | Current Problem | Minima / Integritas Capability |
|---|---|---|---|
| Automatic logging of events over system lifetime | Art. 12(1) | Edge devices cannot upload logs in real time; existing platforms require cloud connectivity | On-device Integritas SDK generates cryptographic hash of every event and anchors it to Minima blockchain locally, with no connectivity required at time of creation |
| Logging must enable identification of risk situations | Art. 12(2)(a) | Mutable application logs can be selectively deleted before a regulator reviews them | Immutable blockchain record; any deletion of an event creates a detectable gap in the hash chain |
| Logging must facilitate post-market monitoring | Art. 12(2)(b) | Centralized platforms cannot aggregate data from disconnected edge fleets at scale | Distributed Minima node network collects and propagates records from every device; full nodes across the fleet collectively maintain the evidence base |
| Human oversight: ability to monitor operation and detect anomalies | Art. 14(4)(a) | Autonomous edge systems have no real-time channel to oversight personnel | Maxima off-chain encrypted messaging layer provides real-time machine-to-machine telemetry from edge devices to authorized oversight nodes without central broker |
| Human oversight: intervention and stop capability | Art. 14(4)(e) | Stop mechanisms must be built into systems operating at the physical edge, not accessible only via cloud dashboard | Maxima channel enables oversight personnel to issue authenticated intervention commands directly to device nodes; architecture does not depend on cloud intermediary |
| Post-market monitoring: active, systematic data collection | Art. 72(1)–(2) | Distributed deployments across thousands of edge devices make centralized data aggregation an engineering problem; existing platforms have no edge collection capability | Minima's full-node-on-every-device architecture means each device participates in the network; performance and behavioral data collected at source propagates across the distributed ledger |
| Evidence preservation: no alteration after a serious incident | Art. 73(6) | The AI Act's implicit prohibition on evidence alteration (*"shall not perform any investigation which involves altering the AI system... in a way which may affect any subsequent evaluation"*) requires tamper-proof records — but the mechanism is unspecified | Blockchain immutability satisfies Art. 73(6): once a hash is anchored to Minima, consensus would reject any attempt to alter it; every node in the network holds the same proof |
| Log retention: minimum 6 months for providers and deployers | Arts. 19, 26(6) | Application logs on edge devices are subject to storage constraints, firmware updates, and physical access; centralized cloud logs are mutable and controlled by the platform vendor | On-chain records persist indefinitely across the distributed Minima network; storage limits on individual devices do not affect the durability of the anchored hashes |
| Qualified electronic ledger / legal integrity presumption | eIDAS 2.0, Arts. 45k–45l | Standard blockchain records have uncertain legal status in EU jurisdictions | Minima-based records are architecturally compatible with qualified electronic ledger status under Regulation (EU) 2024/1183; legal presumption of chronological integrity and tamper-evidence available once provider achieves QTSP designation |

Sources: [EUR-Lex — EU AI Act full text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689); [artificialintelligenceact.eu](https://artificialintelligenceact.eu/); [EUR-Lex — eIDAS 2.0](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183)

### The Article 12 Automatic Logging Requirement in Detail

Article 12's "automatic" and "lifetime" requirements are, on their face, unambiguous. [HelpNetSecurity's April 2026 analysis](https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/) of the requirement makes clear that "automatic" means the system generates logs without manual triggering, and "lifetime" means from deployment to decommissioning — not only during connected operation.

[ISMS.online's Article 12 analysis](https://www.isms.online/iso-42001/eu-ai-act/article-12/) observes that "proof of logging integrity is no longer optional: regulators and courts expect cryptographically sealed, append-only, and human-attributed chains of custody that are irreversibly mapped." The regulation does not prescribe blockchain; it prescribes an outcome — automatic, lifetime, tamper-evident logging. Blockchain happens to be the only technology currently available that satisfies all three conditions in an edge-deployed, disconnected environment.

### The Architecture Diagram

The legally sound architecture for edge AI compliance using Minima and Integritas, aligned with the eIDAS qualified electronic ledger framework:

```
[Edge Device / AI System]
        ↓  Raw events — auto-generated at inference time (Art. 12)
[Integritas On-Device Hashing Layer]
        ↓  SHA3-256 hash of event data
[Off-chain Encrypted Storage] — GDPR-compliant; crypto-shredding on erasure request
        ↓  Merkle root / hash chain
[Minima Immutable Ledger — Distributed Full Nodes]
        ↓  Anchored hash + timestamp, propagated across network
[eIDAS Qualified Timestamp (QTSP)] — ETSI EN 319 421; legal presumption of integrity
        ↓  Timestamped cryptographic proof
[Audit-Ready Evidence Package] — Verifiable by regulators, courts, and any Minima node
```

Personal data never enters the blockchain. Any court or regulator can independently verify any record by running a Minima node. No vendor relationship is required for verification.

---

## Part 4: Proof of Concept — The Southampton Drone Demonstration

Abstract architectural arguments for edge blockchain compliance are one thing. On March 4, 2026, the University of Southampton published evidence that the approach works on real hardware, under real operational conditions, on the most demanding class of edge device in current AI deployment: an autonomous drone in flight.

### The Demonstration

A team of engineering students at the University of Southampton, supervised by Dr Ivan Ling and in partnership with Minima, built what the university described as a "world-first" blockchain black box for drones — a system that records key operational and sensor data in real time onto the Minima blockchain during live autonomous flight, using Minima's blockchain protocol and the Integritas platform to create tamper-proof, searchable, independently verifiable timestamps of the drone's entire operational record. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page); [Mirage News coverage](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/))

The framing is deliberate. Aircraft black boxes are the canonical model for tamper-resistant operational records. They are built to survive crashes, to be physically recovered, and to provide investigators with authoritative data about what happened. The blockchain black box extends this concept to any autonomous machine — without the single point of failure of a physical device, without the physical recovery requirement, and without a trusted authority controlling access to the data.

Unlike a physical black box, the blockchain record is distributed across every node on the Minima network. Every device in the network runs a full node; data is stored locally but verifiable by everyone. If a drone crashes, an aircraft malfunctions, or a robot acts unexpectedly, regulators and insurers can independently prove what the machine did — without requesting a copy of anything from the manufacturer, the operator, or any third party.

### The Performance Numbers

The breakthrough was demonstrating that Minima's compact blockchain can run directly inside a microprocessor system-on-chip — integrated into hardware, not merely installed as software on top of it:

| Metric | Result |
|---|---|
| Performance gain (hardware vs. software) | **500×** |
| Energy efficiency gain | **Up to 10,000%** (100× reduction in power consumption) |

Sources: [University of Southampton](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page); [Mirage News](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/)

These figures are what make the concept viable at the hardware level. Drones operate under strict power and weight budgets. A 10,000% improvement in energy efficiency means blockchain verification consumes approximately 1/100th of what it would as a software process. The 500× performance gain means verification can occur at the same speed as sensor data generation — producing real-time tamper-proof logs rather than delayed batch records that cannot capture the moment-to-moment detail regulators will need to see.

### The Participants and Their Assessment

| Name | Role | Quote |
|---|---|---|
| **Yi Cherng Tan**, engineering student and team lead, University of Southampton | *"The test was a huge success. It's been fantastic to work with industry partners like Minima on cutting edge technology that could play a huge role in shaping how the internet of things and other next generation technologies progress."* |
| **Dr Ivan Ling**, project supervisor, University of Southampton | *"This project shows that trusted verification can move from remote servers into the hardware of autonomous machines themselves. As intelligent systems become more common in public and industrial environments, the ability to independently prove what a machine has done will become essential for safety and public confidence."* |
| **Adam Feiler**, Head of Partnerships, Minima | *"Running a full verification system on low power hardware during live drone flight is a major milestone. It demonstrates that secure decentralised technology can operate directly within autonomous systems, not just in data centres."* |
| **Paddy Cerri**, Chief Architect, Minima | *"Operating reliably under strict power limits and changing connectivity conditions shows that distributed verification can work in real world autonomous environments. This opens the path toward embedding secure verification into the next generation of connected devices."* |
| **Prof. Harold Chong**, Head of Sustainable Electronic Technologies, University of Southampton | *"This world-first partnership marries secure, decentralized software and embedded hardware innovation. It charts new territory for energy-efficient, tamper-resistant devices."* |

Sources: [University of Southampton](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page); [Mirage News](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/)

### Connection to ASTM/EASA and October 2025 Blockchain-on-Chip

The drone demonstration was the proof-of-concept validation for the blockchain-on-chip project announced in October 2025, involving Minima alongside Siemens Cre8Ventures and ARM. ([Chainwire: Blockchain-on-Chip announcement](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/)) That project draws on Siemens' advanced EDA toolchains and ARM's security-rich IP embedded within Southampton's electronics innovation environment, targeting initial deployment in the $60 billion global commercial drone sector before scaling to autonomous vehicles, robotics, and industrial IoT.

ASTM and EASA are developing their own regulatory requirements for drone operational data and accountability. The university press release explicitly describes Integritas' on-device timestamping as delivering "direct alignment to ASTM/EASA requirements." The blockchain black box concept — proof of what a drone did, when, under what conditions — is not merely a compliance feature. It is the foundation of the operational accountability infrastructure that regulators will require for commercial drone certification at scale.

The project was completed within a single academic semester. ([Mirage News](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/)) The speed from concept to working prototype on live hardware reflects both the maturity of Minima's protocol and the viability of the approach.

---

## Part 5: The Legal Foundation — eIDAS 2.0 and Qualified Electronic Ledgers

Technical tamper-evidence is necessary but not sufficient. The evidentiary value of a blockchain-based audit trail depends on whether courts and regulators will accept it as presumptively authentic — which in turn depends on the legal framework governing electronic records.

In the EU, that framework is eIDAS 2.0.

### Regulation (EU) 2024/1183 — Qualified Electronic Ledgers

Regulation (EU) 2024/1183, published 30 April 2024, amends the original eIDAS Regulation and introduces qualified electronic ledgers as a new category of qualified trust service. ([EUR-Lex — eIDAS 2.0](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183))

The definition in Article 3(52): *"Electronic ledger means a sequence of electronic data records, ensuring the integrity of those records and the accuracy of the chronological ordering of those records."*

The legal effect in Article 45k: data records in a qualified electronic ledger enjoy a **legal presumption** of unique and accurate sequential chronological ordering and integrity of those records. This is a reversal of the burden of proof. Records in a qualified electronic ledger are presumed tamper-proof and chronologically accurate; the party challenging them must prove otherwise.

Qualified electronic ledgers provided in one Member State are recognised as qualified in all other Member States. ([EUR-Lex — eIDAS 2.0](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183)) The regulation is explicitly technology-neutral — it does not mandate blockchain, but blockchain-based systems that meet the requirements of Article 45l can qualify.

### CEN/TS 18264:2026 — The Electronic Ledger Trust Services Standard

In March 2026, CEN published CEN/TS 18264:2026, which provides policy, functional, and security requirements for qualified trust services operating on electronic ledgers, including blockchains and distributed ledgers, aligned with eIDAS 2.0. ([Iteh Standards — CEN/TS 18264:2026](https://standards.iteh.ai/articles/blog/latest-news/electronic-ledger-standards-mar-2026))

The standard mandates cryptographic integrity via hash chains, authenticated and authorized identities for all ledger interactions, consensus mechanisms for consistent data ordering, detection and logging of anomalies, and integration with qualified timestamping per ETSI EN 319 421.

Organizations whose systems align with CEN/TS 18264:2026 demonstrate compliance with eIDAS 2.0 and are positioned for EU-wide recognition of their trust services. Minima's underlying architecture — hash chains, distributed consensus, SHA3-256, WOTS signatures — is directly aligned with these technical requirements.

### The GDPR Compatibility Solution

The apparent tension between blockchain immutability and GDPR's right to erasure is resolved by architecture, not compromise. As the [Blockchain Council's analysis](https://www.blockchain-council.org/blockchain/blockchain-for-ai-compliance-gdpr-hipaa-eu-ai-act-immutable-logs/) and [VeritasChain's cryptographic audit trail research](https://veritaschain.org/blog/posts/2025-12-25-eu-ai-act-cryptographic-audit/) both document: when personal data is stored off-chain in encrypted form and only the cryptographic hash is anchored on-chain, a GDPR erasure request can be satisfied by destroying the encryption key. The off-chain data becomes computationally unrecoverable. The on-chain hash — which contains no personal information whatsoever — remains on the immutable ledger, preserving the audit trail's integrity.

This is not a workaround. It is the architecturally correct approach to combining GDPR compliance with tamper-proof audit trail preservation. The hash proves the data existed and was not subsequently altered, without itself containing the personal data subject to erasure.

---

## Part 6: Competitive Position — How Integritas Compares

The AI governance market is not short of vendors. Understanding where Integritas is differentiated requires honesty about both its unique capabilities and its current stage.

### The Comparison

| Dimension | Integritas | Credo AI | OneTrust | Holistic AI | IBM OpenPages |
|---|---|---|---|---|---|
| Tamper-proof audit storage | Cryptographic, blockchain-anchored, independent | Centralized database (mutable) | Centralized database (mutable) | Per-audit reports | Centralized database (mutable) |
| Quantum resistance | Yes (WOTS + SHA3-256 via Minima) | No | No | No | No |
| Edge-native deployment | Yes — explicitly designed for resource-constrained, disconnected hardware | No | No | No | No |
| Offline operation | Yes — records created on-device without connectivity | No | No | No | No |
| Independent verifiability | Any Minima node can verify any record, without trusting any vendor | Requires platform access | Requires platform access | Requires vendor engagement | Requires platform access |
| ASI:One / agentic AI integration | Yes — [Integritas Agent on Agentverse.ai](https://x.com/Fetch_ai/status/1978438462148661598); conversational blockchain interaction | No | No | No | No |
| EU AI Act coverage | Architectural (on-device logging, blockchain immutability, Maxima oversight channel) | Regulatory framework mapping, documentation workflows | Documentation and impact assessments | Bias auditing, conformity assessment support | GRC workflows, policy mapping |
| Market maturity | Earlier commercial stage; no published customer case studies as of early 2026 | [Forrester Wave Leader, Q3 2025](https://www.credo.ai/forrester-wave); high enterprise adoption | Established GRC vendor with large existing customer base | Recognized audit and testing provider | Leader in Gartner MQ for GRC |
| Pricing | Not publicly disclosed | ~$30,000+/year | $50,000–$500,000+/year | ~$10,000/audit | $100,000+/year |

Sources: [Integritas.technology](https://integritas.technology); [Credo AI product page](https://www.credo.ai/lp/onetrust-vs-credo-ai); [Atlan AI Governance tools roundup](https://atlan.com/ai-governance-tools/)

### What Makes Integritas Architecturally Different

The fundamental difference between Integritas and every competing platform is not a feature checklist item. It is a structural property of how audit records are created and stored.

Every major AI compliance platform stores its audit records in a database that someone controls. The vendor controls it, or the enterprise controls it. That means the records can, in principle, be altered — and in any adversarial context (litigation, regulatory enforcement, insurance dispute), the question "could these logs have been modified?" has no satisfactory answer from a centralized database.

Integritas' records are anchored to a blockchain that no single party controls. The Minima network is distributed across hundreds of thousands of nodes in 187 countries. ([YouTube: Hugo Feiler interview](https://www.youtube.com/watch?v=k8BhtSovwf8)) Altering a record would require achieving consensus from a majority of those nodes, simultaneously, against their own cryptographic interest. In practice, the records are immutable not because a contract says they are, but because the physics of consensus makes undetected alteration computationally infeasible.

The quantum resistance differentiator adds a temporal dimension. Audit records created today will need to remain verifiable — and remain tamper-evident — when systems currently being deployed are still in service in 2040 or 2050. Minima's WOTS + SHA3-256 architecture is the same underlying approach selected by NIST's first post-quantum standard. No other AI governance platform makes this guarantee.

The ASI:One integration — the [partnership with Fetch.ai](https://x.com/Fetch_ai/status/1978438462148661598), announced October 2025 — enables something no other compliance tool offers: an AI agent operating on Agentverse.ai can record its inputs and decisions to the Minima blockchain in real time via the Integritas Agent, creating an immutable record of autonomous agent behavior. As agentic AI moves from demonstration to enterprise deployment, the ability to prove what an agent decided, when, and on what inputs will become a core compliance requirement. Integritas is already positioned for that requirement.

### An Honest Assessment

Integritas is at an earlier commercial stage than Credo AI or OneTrust. There are no published customer case studies as of early 2026. Several deployment modes — MCP Server and Compliance Cloud — are listed as "coming soon" on the product page. ([Integritas.technology](https://integritas.technology))

For enterprises that need a battle-tested governance workflow management tool with documented customer references and analyst recognition, Credo AI and Holistic AI are mature options. For enterprises whose AI systems operate in cloud-connected, data-center-hosted environments, the existing market adequately covers their compliance needs.

The case for Integritas is specific: for organizations deploying AI in autonomous systems, edge hardware, industrial IoT, drones, or any environment where on-device, tamper-proof, connectivity-independent logging is required — or where 20-year infrastructure lifespans make quantum resistance an engineering requirement — there is no comparable alternative currently available.

---

## Conclusion: The Compliance Gap Is an Architecture Problem

The EU AI Act's core logging and oversight requirements — Articles 12, 14, 19, 26, 72 — were written with the intent that compliance would happen in real time, automatically, at the point of AI decision-making. For cloud-hosted AI systems, the existing market addresses this intent reasonably well. For the fastest-growing and highest-risk category of AI deployment — autonomous systems, edge devices, embedded intelligence — it does not.

The reason is not lack of regulatory intent or lack of governance platform capability. It is an architectural mismatch. Centralized compliance infrastructure cannot follow AI into the field, because it depends on connectivity, trust in a central authority, and hardware resources that resource-constrained edge devices do not have.

Minima's ~300MB full-node-on-every-device architecture, Tx-PoW gasless transaction model, Cascading Proof Chain, and WOTS quantum-resistant cryptography were designed, from first principles, for exactly this environment. Integritas applies that substrate to the specific compliance workflow required by the EU AI Act: hash, anchor, verify, certify.

The University of Southampton demonstration proved this works on actual drone hardware — 500× performance improvement, up to 10,000% energy efficiency improvement — in live autonomous flight. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page)) eIDAS 2.0's qualified electronic ledger framework, and CEN/TS 18264:2026 published March 2026, provide the legal architecture for that cryptographic proof to carry legal presumptive weight in EU courts and regulatory proceedings. ([Iteh Standards](https://standards.iteh.ai/articles/blog/latest-news/electronic-ledger-standards-mar-2026))

Article 4 of this series will examine the broader market infrastructure required for edge AI compliance to reach enterprise scale: the standards, the certification pathways, and what compliant deployment looks like in practice for the industries most exposed to EU AI Act high-risk classification.

---

*This article is part of a five-part series on edge AI compliance and the EU AI Act. All technical claims are cited to primary sources. Minima Global is the developer of the Minima blockchain protocol and the Integritas product.*

---

### Primary Sources Referenced in This Article

| Topic | Source | URL |
|---|---|---|
| Minima Whitepaper v11 | Minima Docs | https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf |
| Quantum Security | Minima Docs | https://docs.minima.global/docs/learn/quantum-security |
| Maxima Protocol | Minima Docs | https://docs.minima.global/docs/learn/maxima-about |
| Blockchain Structure / Cascading Chain | Minima Docs | https://docs.minima.global/docs/learn/the-blockchain |
| Storage-less MMR UTXO | Minima Docs | https://docs.minima.global/docs/core/minimawhitepaper/storagelessmmrutxo |
| Integritas product | Integritas | https://integritas.technology |
| Southampton drone demo | University of Southampton | https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page |
| Drone demo press coverage | Mirage News | https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/ |
| Blockchain-on-Chip announcement | Chainwire | https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/ |
| EU AI Act full text | EUR-Lex | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689 |
| Annotated AI Act | artificialintelligenceact.eu | https://artificialintelligenceact.eu/ |
| AI Act implementation timeline | EU AI Act Service Desk | https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act |
| Article 12 logging analysis | HelpNetSecurity | https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/ |
| Article 12 compliance | ISMS.online | https://www.isms.online/iso-42001/eu-ai-act/article-12/ |
| Cryptographic audit trails | VeritasChain | https://veritaschain.org/blog/posts/2025-12-25-eu-ai-act-cryptographic-audit/ |
| eIDAS 2.0 | EUR-Lex | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183 |
| CEN/TS 18264:2026 | Iteh Standards | https://standards.iteh.ai/articles/blog/latest-news/electronic-ledger-standards-mar-2026 |
| Blockchain for AI compliance / GDPR | Blockchain Council | https://www.blockchain-council.org/blockchain/blockchain-for-ai-compliance-gdpr-hipaa-eu-ai-act-immutable-logs/ |
| ETSI TS 104 008 (CABCA) | ETSI | https://www.etsi.org/newsroom/press-releases/2634-etsi-launches-new-standard-enabling-continuous-compliance-for-dynamic-ai-systems-aligned-with-the-eu-ai-act |
| Fetch.ai / ASI:One integration | Fetch.ai | https://x.com/Fetch_ai/status/1978438462148661598 |
| Siemens partnership | Siemens Cre8Ventures | https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/ |
| Siemens / IoT security press | Evertiq | https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security |
| Paddy Cerri interview | We Are DePIN podcast | https://www.youtube.com/watch?v=y_dGFpoF3WU |
| Credo AI competitive comparison | Credo AI | https://www.credo.ai/lp/onetrust-vs-credo-ai |
| AI Governance tools roundup | Atlan | https://atlan.com/ai-governance-tools/ |
| Edge AI governance | VerifyWise | https://verifywise.ai/lexicon/edge-ai-governance |
| Edge AI challenges | Digital Watch Observatory | https://dig.watch/updates/edge-ai-advantages-and-challenges-shaping-the-future-of-digital-systems |
