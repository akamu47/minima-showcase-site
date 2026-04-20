# Minima Global & Integritas: Deep Research Report
*Compiled for publication-quality articles. All facts source-cited.*

---

## Table of Contents
1. [Minima Protocol — Technical Architecture](#1-minima-protocol--technical-architecture)
2. [Integritas Product](#2-integritas-product)
3. [University of Southampton Drone Demo (March 2026)](#3-university-of-southampton-drone-demo-march-2026)
4. [Partnerships](#4-partnerships)
5. [Company Background](#5-company-background)
6. [Competitive Positioning](#6-competitive-positioning)

---

## 1. Minima Protocol — Technical Architecture

### Overview

Minima is a Layer 1 blockchain designed from first principles for maximum decentralization at the edge. Its founding premise is that every device on the network — including mobile phones and IoT hardware — should run a **full constructing and validating node**, not merely a lightweight or "light client" wallet. This architectural choice is unique among public blockchains. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

The protocol's abstract states it plainly: *"Minima is a cryptocurrency designed to be ultra-compact. Designed to remain Totally Decentralized. Designed to have no rulers. There are no miners and no ever-growing database. A simple yet powerful scripting language, Cascading Proof Chain, adaptive block scaling, and an innovative Proof of Work (PoW) backed user-centric blockchain algorithm that uses both on-chain and off-chain traffic for security. All Quantum Secure Cryptography. Small enough to run efficiently on your mobile phone. Everyone runs a Complete node. Forever."* ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

As of early 2023, Hugo Feiler (CEO) confirmed over 300,000 nodes running across 187 countries. ([YouTube: Hugo Feiler interview](https://www.youtube.com/watch?v=k8BhtSovwf8))

---

### 1.1 Full-Node-on-Every-Device Architecture

Most blockchains distinguish between **full nodes** (which store the entire chain history) and **light clients** (which rely on trusted third-party nodes for verification). Minima eliminates this hierarchy entirely. Every participant — whether on a smartphone, an IoT sensor, a drone, or an embedded chip — runs a complete constructing *and* validating node. ([Minima Docs: The Blockchain](https://docs.minima.global/docs/learn/the-blockchain))

This is made possible through three interlocking design decisions:

1. **User-centric data storage**: Instead of every node maintaining a global database of all Unspent Transaction Outputs (UTXOs), each user maintains only *their own* transaction data. A Merkle Mountain Range (MMR) proof scheme allows each node to verify any transaction against a shared cryptographic spine without storing the complete ledger. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

2. **Cascading Proof Chain**: The blockchain is heavily pruned through a 32-level cascading chain. Only 1,024 recent blocks are kept in full. Older data is distilled into a compact "cascading chain" of Super Blocks — at most 128 blocks per level, across 32 levels — which grows **logarithmically** rather than linearly. This provides an immutable cumulative proof of work without storing every historical block. ([Minima Docs: The Blockchain](https://docs.minima.global/docs/learn/the-blockchain))

3. **Cooperative Tx-PoW mining**: Every transaction is itself mined (≈10 seconds of work per device). This distributes security responsibility across all users. No dedicated miners are needed; blocks are simply "lucky transactions" that exceed the network difficulty threshold. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

The result, as Paddy Cerri (Co-founder and Chief Architect) describes it: *"The larger Minima gets, the more decentralized it gets. And that's really important because the only metric that matters is decentralization."* ([YouTube: We Are DePIN podcast](https://www.youtube.com/watch?v=y_dGFpoF3WU))

---

### 1.2 The ~300MB Footprint

The entire blockchain — including the node software, cryptographic spine, and the user's personal UTXO data — stays within a compact footprint suitable for mobile phones and IoT devices. As Hugo Feiler explained in a 2021 interview: *"Bitcoin is about 350 gigabytes of data and ever growing, whereas Minima will stay at about a gigabyte of data in size, so it can fit easily on a mobile phone."* ([TalkingPointz interview](https://talkingpointz.com/is-that-a-blockchain-in-your-pocket-hugofeiler-of-minima_global/))

The modern target footprint (≈300MB) is achieved by:

- **No global UTXO database**: Unlike Bitcoin's UTXO set (which must be stored by all full nodes), Minima uses Peter Todd's MMR (Merkle Mountain Range) storage-less Proof DB. This allows for an almost limitless amount of provable data without requiring a central store. Users only store their own coins and the cryptographic spine. ([Minima Docs: Storage-less MMR UTXO](https://docs.minima.global/docs/core/minimawhitepaper/storagelessmmrutxo))
- **Block pruning via Cascading Chain**: The TxPoW Tree retains only the 1,024 most recent blocks in full. Older blocks are integrated into the compact 32-level Cascading Chain and then discarded. ([Minima Docs: The Blockchain](https://docs.minima.global/docs/learn/the-blockchain))
- **Compact blocks**: Minima blocks store only *hashes* of transactions (like Bitcoin's Compact Blocks), not full transaction data. A 10KB block holds approximately 330 transaction hashes. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))
- **Tx pruning**: Almost all transaction data is eventually pruned; only the MMR root (a cryptographic proof of state) is retained. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

**What this enables**: Any device capable of running a basic application — a smartphone, a Raspberry Pi, a drone flight controller, or a silicon chip — can participate in the network as a first-class citizen, validating and constructing blocks independently without trusting any third party. This is what makes Minima's "blockchain-on-chip" project with ARM physically feasible. ([Chainwire: Blockchain-on-Chip announcement](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

---

### 1.3 UTXO-Based Architecture with MMR Proofs

Minima uses a UTXO (Unspent Transaction Output) model, like Bitcoin, rather than an account-based model like Ethereum. However, it extends the standard UTXO model significantly:

**Transaction structure**: Each transaction has:
- **Inputs**: Address, Amount, TokenID, CoinID, and user-defined parameters
- **Outputs**: The sum of outputs must be ≤ sum of inputs (the difference is "burnt" — reducing total supply)
- **MMR proof**: Each input includes a recent Merkle Mountain Range proof demonstrating the coin exists and is unspent, verified against the user's current MMR root

([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

**Storage-less MMR**: Peter Todd's MMR Proof DB allows limitless addition and updates (INSERT/UPDATE operations only — no SELECT/DELETE) in a hash tree. Any data's existence can be proven via a Merkle proof to the MMR root, without the verifier storing the full dataset. Each block commits to the current MMR state, and each user sends transactions with a recent MMR proof. ([Minima Docs: Storage-less MMR UTXO](https://docs.minima.global/docs/core/minimawhitepaper/storagelessmmrutxo))

**Tokens**: Tokens are treated identically to Minima's native coin — as fractional "colored Minima" — sharing the same MMR storage with no additional efficiency loss. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

**Smart contracts via MiniScript**: Every Minima address is actually the hash of a MiniScript. Scripts return TRUE or FALSE as to whether an output can be spent. Examples include:
- Standard: `RETURN SIGNEDBY ( 0xEFDC56DCA87F )`
- HTLC (Hash Time-Lock Contract): multi-condition scripts using `IF/ELSEIF/ENDIF` logic
- Advanced functions: `MAST` (Merklized Abstract Syntax Trees), `VERIFYOUTPUT`, `VERIFYINPUT`, `CHECKSIG` (for oracle use), `PROOF` (for efficient Merkle proof checking)

The scripting language supports stateful smart contracts via state variables per transaction, enabling Covenant-style programming (recursive outputs) while maintaining the speed and efficiency of UTXO transactions. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

---

### 1.4 Quantum-Resistant Cryptography: WOTS + SHA3

Minima's security is built entirely on **hash-based cryptography**, which is considered post-quantum secure. This is a deliberate architectural choice: once deployed on hundreds of millions of chips and devices, a future cryptographic upgrade requiring a hard fork would be impossible to coordinate. The protocol must be secure "forever." ([Minima Docs: Quantum Security](https://docs.minima.global/docs/learn/quantum-security))

**Two-fold quantum security approach**:

**1. SHA3-256 (KECCAK) Hashing**:
- All TxPoW mining, block and transaction hashes, proof chains, and data signing/verifying use SHA3-256 (KECCAK).
- SHA3-256 is considered post-quantum sufficient by NIST (National Institute of Standards and Technology). Unlike elliptic curve discrete logarithm problems (broken by Shor's algorithm), hash function security is only weakened — not broken — by Grover's algorithm, requiring at most doubling of hash output length for equivalent security.
([Minima Docs: Quantum Security](https://docs.minima.global/docs/learn/quantum-security))

**2. Winternitz One-Time Signature (WOTS) Scheme**:
- For digital signatures, Minima uses WOTS with a Winternitz parameter of 8.
- WOTS is a hash-based digital signature scheme. It works by applying a hash function a variable number of times to each component of a message hash, building a signature that cannot be forged without inverting the one-way hash function — a problem quantum computers cannot efficiently solve.
- Size: A single-use WOTS signature is **400–800 bytes** — 10–20× larger than Bitcoin's ECDSA signatures (~72 bytes). This is the trade-off for quantum resistance.
- Multiple signatures with the same root public key are enabled via the **Merkle Signature Scheme**: a hash tree of valid public keys, processable in MiniScript.
- WOTS data is not stored permanently; almost all transaction data (including signatures) is eventually pruned. The bandwidth overhead is temporary.
([Minima Docs: Quantum Security](https://docs.minima.global/docs/learn/quantum-security); [Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

**Why this matters for IoT/chip deployment**: Ethereum and Bitcoin use ECDSA, which is vulnerable to quantum attack via Shor's algorithm. A sufficiently powerful quantum computer could derive private keys from exposed public keys. For devices embedded in autonomous vehicles, industrial robots, or infrastructure that may operate for 20–30 years, this is not a theoretical concern but an engineering reality. Minima's hash-based approach is the same underlying principle selected by NIST's first finalized post-quantum standard (SLH-DSA / FIPS 205). ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

---

### 1.5 Gasless Transaction Model

Minima has **no transaction fees** in the traditional sense. Instead:

**Transaction Proof of Work (Tx-PoW)**: Every transaction sender performs approximately 10 seconds of computational work before broadcasting. This replaces the gas/fee mechanism:
- It prevents spam and DoS attacks without requiring a fee market
- The work is contributed to network security (cooperative mining)
- Users do not pay fees to other participants; the work is "paid" to the network collectively
- Block size is adaptive: users signal congestion by adjusting how full they make blocks

**Burn mechanism**: The difference between inputs and outputs in any transaction is "burned" (permanently removed from circulation). Burn is optional (minimum burn is zero) but acts as congestion control: higher-burn transactions are prioritized, creating a voluntary fee market only when the network is under load. Unlike EIP-1559 on Ethereum (where base fees go to protocol), Minima's burn actually reduces total supply.

**Maxima layer messages**: Small data messages over the Maxima network are free (Tx-PoW only); larger data can be paid for via an atomic-swap mechanism over a Lightning-style channel. ([Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf))

**Why this is enterprise-critical**: For IoT applications — a fleet of 10,000 connected vehicles sending telemetry, or 1 million sensors logging supply chain data — gas fees on networks like Ethereum would make the economics entirely unworkable. Minima's model makes high-frequency, low-value micro-attestations economically viable. ([Evertiq: Siemens Cre8Ventures partnership](https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security))

---

### 1.6 The Maxima Layer (Off-Chain Messaging)

Maxima is Minima's integrated information transport layer — a Layer 2 that is native to every Minima node. The whitepaper describes it as: *"Maxima is to information what Minima is to value."* ([Minima Docs: Maxima About](https://docs.minima.global/docs/learn/maxima-about))

**Key properties**:
- Every Minima node *automatically* runs the Maxima protocol — there is no separate installation
- Maxima enables nodes to send encrypted data (text, pictures, documents, sensor readings) to any other node, independently of the Minima blockchain itself
- Communication is point-to-point and fully decentralized — no central server, no data collection
- Users add "Maxima Contacts" to establish direct encrypted channels
- Spam prevention: sending a message requires approximately 1 second of Tx-PoW work
- Messages are free for small data; larger data can be paid via atomic swaps

**Security contribution**: Maxima messages (even off-chain data transmissions) contribute PoW to Layer 1 security. This is the key insight: Layer 2 traffic does not weaken the base layer — it enhances it. ([X / Fetch.ai: "Through Maxima, off-chain messages still contribute PoW to Layer 1 security"](https://x.com/Satoureireal/status/2014902942613307816))

**MiniDapps**: Applications built on Maxima include MaxSolo and Chatter, which provide decentralized messaging. More broadly, Maxima unlocks composable Web3 applications that combine peer-to-peer value transfer (Minima blockchain) with peer-to-peer information exchange (Maxima). ([Minima Docs: Maxima About](https://docs.minima.global/docs/learn/maxima-about))

**Machine-to-machine applicability**: For IoT networks — where devices need to communicate sensor data, mission records, and operational logs without a central broker — Maxima provides the transport layer. The Integritas platform runs over Maxima, enabling timestamped, immutable logs of any data stream. ([Minima Docs: Maxima About](https://docs.minima.global/docs/learn/maxima-about))

---

### 1.7 Technical Comparison: Minima vs. Other L1 Blockchains

| Dimension | **Minima** | **Bitcoin** | **Ethereum** | **Solana** |
|-----------|-----------|-------------|--------------|------------|
| **Node model** | Every device is a full constructing + validating node | Full nodes require ~350GB+ disk; most users run light clients | Full nodes require ~1TB+; most users via Infura/Alchemy | Validators require enterprise hardware (256GB+ RAM) |
| **Consensus** | Cooperative Tx-PoW (every user mines cooperatively) | Competitive PoW (ASIC miners) | Proof of Stake (validators) | Proof of History + PoS |
| **Block time** | ~50 seconds | ~10 minutes | ~12 seconds | ~400ms |
| **Quantum security** | Built-in from genesis (WOTS + SHA3-256) | Vulnerable (ECDSA) | Vulnerable (ECDSA) | Vulnerable (ECDSA) |
| **Transaction fees** | None (Tx-PoW work + optional burn) | Variable gas (sats/byte) | Variable gas (Gwei) | Low fixed fees |
| **Smart contracts** | MiniScript (UTXO-based, validation-only) | Bitcoin Script (limited) | Solidity/EVM (Turing complete) | Rust/BPF programs |
| **Layer 2** | Maxima (native, PoW-contributing) | Lightning Network | Rollups, L2 chains | (Native high TPS) |
| **Data storage per node** | Compact (~300MB, user's own data only) | ~350GB+ chain history | ~1TB+ state | ~80TB+ for validators |
| **Hardware target** | Mobile phones, IoT chips, drones | Data center / ASIC farms | Data center / cloud | High-performance validators |
| **DePIN / IoT focus** | Primary design goal | None | Possible but expensive | Possible but hardware-heavy |
| **Governance** | No hard forks; protocol designed as finished | Hard forks via miner consensus | Developer-driven upgrades | Developer-driven upgrades |

Sources: [Minima Whitepaper v11](https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf); [Bitcoin vs. Ethereum comparison](https://www.vaneck.com/us/en/blogs/digital-assets/bitcoin-vs-ethereum/); [We Are DePIN podcast with Paddy Cerri](https://www.youtube.com/watch?v=y_dGFpoF3WU)

**Key differentiator**: Bitcoin and Ethereum are designed for *data center security* (large nodes, competitive mining, high hardware requirements). Minima is the only L1 designed specifically for *edge security*, where the security model assumes that any individual device is resource-constrained, intermittently connected, and may be physically attacked or tampered with. ([CoinMarketCap: Minima](https://coinmarketcap.com/currencies/minima-global/))

---

## 2. Integritas Product

### 2.1 What Integritas Does

Integritas is Minima's AI compliance manager product. Its core function is to **create tamper-proof, cryptographically verifiable audit trails for AI systems** by recording every prompt, input file, and output to the Minima blockchain in real time. ([Integritas.technology](https://integritas.technology))

The product page states: *"Audit, trace, and prove every prompt, input, and output, across all your AI systems."*

The fundamental compliance challenge Integritas addresses: as AI systems make consequential decisions — in hiring, credit scoring, medical diagnosis, autonomous systems control — there is a growing regulatory and legal requirement to prove *what data was used*, *what model made the decision*, *when it happened*, and *whether that record has been tampered with*. Without a system like Integritas, these records live in mutable databases or log files that can be altered or deleted. ([Integritas.technology](https://integritas.technology))

### 2.2 How It Creates Tamper-Proof Audit Trails

The process has four steps ([Integritas.technology](https://integritas.technology)):

1. **Data creation**: Any data — document, sensor reading, AI prompt, model output — is captured.
2. **Cryptographic hashing**: Integritas generates a cryptographic hash of the data and records it on the Minima blockchain, creating an immutable timestamp and proof of existence. The hash is unique to the exact content; any change to the data, even a single character, produces a completely different hash.
3. **Verification**: To verify authenticity at any future time, the hash of the current data is compared to the blockchain record. If they match, the data is authentic. If not, tampering is detected.
4. **Certificate issuance**: A comprehensive verification report is issued as a certificate, suitable for regulatory audit, legal proceedings, or compliance documentation.

The blockchain record cannot be altered because Minima's distributed consensus would reject any such attempt — every node on the network holds the same cryptographic proof. ([Integritas.technology](https://integritas.technology))

### 2.3 On-Chain Compliance Records — Technical Architecture

**Deployment**: Integritas is fully API-driven and compatible with on-premises or cloud infrastructure. It integrates with existing MLOps pipelines and AI platforms (e.g., GPT-4 and other models via `audit.track({ model: 'gpt-4', input: data })`). ([Integritas.technology](https://integritas.technology))

**SDK**: The product exposes a JavaScript/TypeScript SDK:
```javascript
import { Integritas } from '@integritas/core';
const AuditTrail = Audit.createTrail('AI Interaction');
Integritas.verify('validate model output');
const result = await integritas.audit('trace model decision');
```

**Quantum resistance**: Because Integritas writes records to the Minima blockchain, and Minima uses WOTS + SHA3-256, the audit trail records are themselves quantum-resistant — they cannot be retroactively forged even by a future quantum computer. ([Integritas.technology](https://integritas.technology))

**Edge compatibility**: Integritas explicitly supports edge device deployment — securing event/telemetry data in real time, anchoring logs from edge devices for diagnostics and analytics. This is what made the University of Southampton drone demonstration possible: the Integritas platform created timestamps on the Minima blockchain during live autonomous flight. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page))

**Available deployment modes** (as of early 2026):
- Enterprise API: Available now
- MCP Server: Coming soon
- Compliance Cloud: Coming soon

### 2.4 Standards Compliance

| Standard | Status | What It Means |
|----------|--------|---------------|
| **EU AI Act** | Compliant | The EU AI Act (enforcement beginning August 2026 for high-risk systems) requires providers of high-risk AI to maintain documentation of data governance, transparency, human oversight, and audit trails. Integritas directly addresses the traceability and accountability requirements. |
| **ISO 42001** | Supported | ISO/IEC 42001 is the first international standard for AI Management Systems (AIMS), providing certifiable requirements for establishing, implementing, and maintaining AI governance. Integritas simplifies audit reporting for ISO 42001 conformity. |
| **SOC2** | Supported | SOC2 Type II certification requires demonstrating that security controls are operating effectively over time. Integritas' immutable records facilitate this demonstrability. |

Source: [Integritas.technology](https://integritas.technology)

The drone demonstration also references alignment with **ASTM/EASA** (drone regulatory) requirements — Integritas' on-device timestamping and data attestation was described as delivering "direct alignment to ASTM/EASA requirements." ([Chainwire: Blockchain-on-Chip announcement](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

### 2.5 Use Cases Described on the Product Page

([Integritas.technology](https://integritas.technology))

1. **AI decision auditability**: Make every AI decision transparent and automatically reportable. Governance of foundation models, LLM interactions, and automated decision systems.
2. **Document authenticity**: Verify authenticity, enforce version control, detect unauthorized edits, and achieve audit readiness for controlled documentation.
3. **Data provenance at handoffs**: Guarantee authenticity across every data handoff — a verifiable digital thread from design through manufacturing through operations. Tamper-evident traceability.
4. **Edge data security**: Secure event and telemetry data in real time. Anchor logs from edge devices for diagnostics and analytics.
5. **Sustainability reporting**: Support Digital Product Passport frameworks. Prove material, manufacturing, and recycling data integrity across supply chains.

### 2.6 The Blockchain "Black Box" Concept

Integritas combined with Minima functions as a distributed digital black box — analogous to an aircraft's flight recorder, but decentralized and tamper-proof by design. For autonomous systems:

- Data is stored locally on the device (no cloud dependency)
- Every node on the Minima network can independently verify the record
- The record is searchable via timestamps created by Integritas
- If a drone crashes, vehicle malfunctions, or robot acts unexpectedly, regulators and insurers can independently verify the machine's operational record

This concept was validated in the March 2026 University of Southampton drone demonstration. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page))

---

## 3. University of Southampton Drone Demo (March 2026)

### 3.1 What Was Demonstrated

On March 4, 2026, the University of Southampton published results of a student engineering project that achieved what it described as a "world-first" in blockchain verification for autonomous systems. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page))

The demonstration: An autonomous drone recorded key operational and sensor data **in real time** onto the Minima blockchain during live autonomous flight. The system used Minima's blockchain protocol and the Integritas platform to create tamper-proof timestamps of the drone's operational data, creating a searchable log verifiable by anyone on the network. ([Mirage News coverage](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/))

This was the **first time a full verification system of this kind had operated during live autonomous flight on such constrained hardware.** The significance: previous approaches to flight data recording rely on centralized data storage (cloud servers or central databases), which require stable connectivity and external oversight. The Minima approach allowed the drone to create secure records independently, at the point of action, even under the demanding conditions of autonomous flight. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page))

### 3.2 The Blockchain "Black Box" Concept

The project drew an explicit analogy to aircraft black boxes — the tamper-resistant recorders that survive crashes and provide investigators with authoritative records of flight parameters. The blockchain black box concept extends this to any autonomous machine:

- Unlike a physical black box (centralized, single point of failure, requires physical recovery), the blockchain record is distributed across every node on the Minima network
- Every device in the network runs a full node; data is stored locally but verifiable by everyone — making it tamper-proof without requiring a trusted third party
- The Integritas platform creates timestamps that make the log of data searchable
- For regulators, insurers, and the public: independent proof that a machine operated safely as intended

The broader implications cited by the university include: autonomous vehicles (verifiable driving records), industrial robots (compliance with safety standards), energy systems (transparent operational data), defence platforms (secure audit trails), and AI systems (demonstrating decision-making via searchable logs with timestamps on the Minima blockchain). ([Mirage News coverage](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/))

The demo was also highlighted as providing "proof of accountability" — a key requirement of the EU AI Act, which came into force in 2026. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page))

### 3.3 Performance Metrics

The project's key breakthrough was demonstrating that Minima's compact blockchain can run **directly inside a microprocessor system-on-chip** (hardware-integrated, not software-only):

| Metric | Value | Context |
|--------|-------|---------|
| **Performance gain** | **500×** | Achieved by moving Minima's blockchain from software into hardware (inside a microprocessor SoC) |
| **Energy efficiency gain** | **Up to 10,000%** (100×) | Hardware acceleration versus software implementation |

Sources: [University of Southampton](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page); [Mirage News](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/)

These gains are what make the "blockchain-on-chip" concept viable for power-constrained edge devices. Drones operate under strict power and weight budgets; a 10,000% improvement in energy efficiency means blockchain verification consumes a fraction of what it previously would as a software process. The 500× performance gain means verification can occur at the same speed as sensor data generation — creating real-time tamper-proof logs, not delayed batch records.

### 3.4 Participants

| Name | Role | Affiliation | Quote |
|------|------|-------------|-------|
| **Yi Cherng Tan** | Engineering student, team lead | University of Southampton | *"The test was a huge success. It's been fantastic to work with industry partners like Minima on cutting edge technology that could play a huge role in shaping how the internet of things and other next generation technologies progress."* |
| **Dr Ivan Ling** | Project supervisor | University of Southampton | *"This project shows that trusted verification can move from remote servers into the hardware of autonomous machines themselves. As intelligent systems become more common in public and industrial environments, the ability to independently prove what a machine has done will become essential for safety and public confidence."* |
| **Adam Feiler** | Head of Partnerships | Minima | *"Running a full verification system on low power hardware during live drone flight is a major milestone. It demonstrates that secure decentralised technology can operate directly within autonomous systems, not just in data centres."* |
| **Paddy Cerri** | Chief Architect | Minima | *"Operating reliably under strict power limits and changing connectivity conditions shows that distributed verification can work in real world autonomous environments. This opens the path toward embedding secure verification into the next generation of connected devices."* |
| **Prof. Harold Chong** | Head of Sustainable Electronic Technologies | University of Southampton | *"This world-first partnership marries secure, decentralized software and embedded hardware innovation. It charts new territory for energy-efficient, tamper-resistant devices."* |

Sources: [University of Southampton](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page); [Mirage News](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/); [Chainwire](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/)

### 3.5 Project Context

The drone demonstration was the proof-of-concept validation for the broader **blockchain-on-chip** project announced in October 2025. That announcement stated:
- University of Southampton's School of Electronics and Computer Science leads the R&D
- Industry partners: Siemens Cre8Ventures (EDA toolchains) and ARM Flexible Access (security-rich IP)
- January 2026: prototype launch
- Q1 2026: proof-of-concept drone validation (which this demo represents)
- Target: independent assessment from regulators, UAV manufacturers, and IoT security experts
- Initial market: $60 billion global commercial drone sector
- Broader applications: autonomous vehicles, robotics, industrial IoT, smart manufacturing

([Chainwire: Blockchain-on-Chip announcement, October 28, 2025](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

The drone project was completed **within a single academic semester** by the student engineering team. ([Mirage News coverage](https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/))

---

## 4. Partnerships

### 4.1 ARM Partnership

**Announcement date**: December 3, 2024  
**Source**: [Yahoo Finance / CoinDesk reporting](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html); [DePIN Scan](https://depinscan.io/news/2024-12-05/blockchain-for-iot-minima-to-develop-ledger-embedded-microchips-with-arm)

**What it involves**: Minima joined ARM's **Flexible Access Program**, which provides approximately 70 carefully selected startups with access to ARM's intellectual property portfolio and chip design system. This gives Minima access to ARM's security-rich IP for hardware accelerator development.

**The "Minima Chip" concept**: A microchip with Minima's decentralized ledger embedded directly within it. Each chip-equipped device would have a secure node capable of:
- Data verification (validating blockchain records)
- Token generation (creating digital assets)
- Peer-to-peer messaging (over Maxima)
- Widespread blockchain integration

The concept is described as "blockchain everywhere" — analogous to how WiFi or Bluetooth became ubiquitous in consumer electronics, blockchain verification would be built into chips by default.

**CEO Hugo Feiler on the rationale**: *"For actual enterprise implementation, it is advantageous to separate blockchain operations from the intricacies of an existing technology framework by embedding it within a chip."* He likened the network to a highway: *"It's the road everyone has to use — you've got Volvos, Audis, and Teslas, etc., that don't necessarily trust each other, but they must trust the information and data being transmitted from those devices."* ([Yahoo Finance](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html))

**ARM's rationale**: *"With ARM Flexible Access, emerging companies like Minima have a streamlined and cost-effective pathway to prototype development, enabling them to experiment and design with assurance."* (ARM's partner and business models lead, quoted in press release) ([Yahoo Finance](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html))

**October 2025 update**: The ARM partnership formally became the hardware accelerator backbone of the three-way Minima/Siemens/ARM/Southampton blockchain-on-chip project. Development draws on *"Siemens' advanced EDA toolchains and ARM security-rich IP, embedded into Southampton's electronics innovation environment."* ([Chainwire, October 28, 2025](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

**Target chips**: The initial application targets drone flight controllers (commercial UAV sector). The universally adaptable reference architecture is designed to scale to any ARM-based chip across autonomous vehicles, robotics, industrial IoT, and smart manufacturing. ARM architecture underlies the vast majority of mobile and embedded processors globally (Apple Silicon, Qualcomm Snapdragon, Samsung Exynos, Raspberry Pi, most automotive MCUs). ([Chainwire](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

---

### 4.2 Siemens Partnership (via Cre8Ventures)

**Announcement date**: March 17, 2025  
**Source**: [Siemens Cre8Ventures official blog](https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/)

**What Siemens Cre8Ventures is**: Cre8Ventures is Siemens' startup collaboration arm within Siemens Digital Industries Software. It operates a Digital Twin Marketplace for startups and SMEs and runs a Higher Education Program for university-industry partnerships. Carson Bradbury is its Director for EU Chips Act & Co-founder.

**What the partnership involves**: Bringing Minima's embedded blockchain to the Siemens Cre8Ventures Digital Twin Marketplace, addressing security and compliance needs across four sectors:

| Sector | Minima Use Cases via Partnership |
|--------|----------------------------------|
| **Automotive** | Tamper-proof vehicle logs, sensor data, and OTA updates; decentralized security infrastructure; smart contracts for OEM/supplier/service-provider transactions |
| **Energy** | Smart grid data integrity against cyberattacks; peer-to-peer energy trading via blockchain smart contracts; predictive maintenance via IoT data integration in digital twins |
| **Healthcare equipment** | Patient data integrity from connected medical devices; regulatory compliance audit trails; supply chain transparency from manufacturing to deployment |
| **Robotics** | Cybersecurity and data integrity for robot operations; compliance with safety standards |

([Siemens Cre8Ventures blog](https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/))

**EU Chips Act alignment**: The partnership explicitly supports the EU Chips Act's sovereignty goals — reducing reliance on non-European chip manufacturers and building European leadership in next-generation digital ecosystems. Carson Bradbury stated: *"This partnership not only strengthens industry-specific security solutions but also supports the sovereignty goals of the EU Chips Act, ensuring European technology independence and leadership in next-generation digital ecosystems."* ([Evertiq coverage](https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security))

**Digital twin enhancement**: Specifically, the partnership focuses on:
1. **Authenticating digital twin models**: Cryptographic proof that digital twins reflect verified real-world conditions
2. **Securing V2X & IoT communication**: Vehicles, energy grids, and healthcare devices communicating within their ecosystems
3. **Trust in supply chain data**: Traceability and integrity from design to deployment

([Siemens Cre8Ventures blog](https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/))

**October 2025 expansion**: Siemens became the third party in the blockchain-on-chip prototype project alongside Minima and ARM, providing EDA (Electronic Design Automation) toolchains for hardware development. Bradbury: *"Embedding blockchain deep within silicon infrastructure paves the way for programmable trust across the exponential growth of industrial IoT and connected machines."* ([Chainwire](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

---

### 4.3 Fetch.ai / ASI:One Integration

**Partnership announcement date**: October 13, 2025  
**Source**: [Fetch.ai official Twitter/X post](https://x.com/Fetch_ai/status/1978438462148661598)

**Context**: Fetch.ai is a founding member of the Artificial Superintelligence (ASI) Alliance. ASI:One is a coordination platform for agentic AI (announced by Fetch.ai in November 2025 for broader availability in early 2026). Agentverse.ai is Fetch.ai's marketplace for building and deploying autonomous AI agents.

**What was integrated**: On October 13, 2025, Minima and Fetch.ai officially partnered, with Integritas fully integrated with ASI:One. Specifically:
- The **Integritas Agent** was deployed on Agentverse.ai
- Users can **stamp, verify, and manage blockchain data through natural language** using Fetch.ai's agent framework
- ASI:One's AI capabilities enhance the Minima blockchain interaction, enabling conversational access

**Key capabilities unlocked**:
1. **Agentic Integrity**: Integritas is now connected to ASI:One's autonomous reasoning capabilities — data integrity directly linked to agentic AI decision-making
2. **AI Meets Proof**: Users can stamp, verify, and manage blockchain data through natural language via Fetch.ai's agent framework
3. **End-to-End Trust**: On-chain validation meets AI intelligence — a new standard for transparent, verifiable digital interactions
4. **Conversational blockchain interaction**: Natural language prompts allow anyone to prove data existence, verify authenticity, or explore blockchain concepts without technical knowledge
5. **Developer framework**: Open framework to merge blockchain proofs with AI reasoning

([Fetch.ai X post](https://x.com/Fetch_ai/status/1978438462148661598))

**What this means for autonomous agents**: As AI agents increasingly make consequential real-world decisions (booking, purchasing, managing systems), there is a critical need to verify that agent actions are auditable and tamper-proof. The Integritas integration means that an AI agent operating on Agentverse can record its inputs and decisions to the Minima blockchain in real time — creating an immutable record of autonomous agent behavior. This is directly relevant to EU AI Act requirements for high-risk AI system transparency.

---

### 4.4 Automotive Partnerships (MobilityXlab)

**MobilityXlab participation**: Starting July 2022, Minima joined MobilityXlab — a collaboration platform driven by CEVT, Ericsson, Polestar, Veoneer, Volvo Cars, Volvo Group, and Zenseact. Minima was one of eleven global startups selected for the program (a prerequisite was selection by at least two industry partners). ([Crypto.news coverage](https://crypto.news/layer-1-blockchain-minima-mobilityxlab-innovative-mobility-solutions/))

The initial program focused on:
- Vehicle-to-Vehicle (V2V) communication: A decentralized network of globally connected cars benefiting from blockchain security across all participating nodes
- Autonomous economic units: Cars as sovereign nodes enabling automated payments, digital service books, and loyalty programs
- Peer-to-peer messaging via Maxima for V2X communication

**Extension**: In January 2023, the MobilityXlab partnership was extended for six months, focusing on cybersecurity, data privacy, and integration into connected infrastructure. Hugo Feiler: *"P2P, data-driven, token-incentivized networks of connected vehicles, infrastructure, and people will be the key focus."* ([AccessWire press release](https://www.accessnewswire.com/newsroom/en/blockchain-and-cryptocurrency/minima-and-mobilityxlab-extend-partnership-to-fuel-the-future-of-conne-737416))

---

## 5. Company Background

### 5.1 Founding and Corporate Structure

- **Founded**: 2018 (concept / early development); operational company from January 2019 per LinkedIn data
- **Incorporation**: Zug, Switzerland (Swiss registered) with operational presence in London, UK
- **Registered name**: "Minima Global" (company); the protocol and token are referred to as "Minima" / "MINIMA"
- **LinkedIn company description**: *"The world's only completely decentralized blockchain. A cooperative network that enables everyone to freely connect and prosper. The evolution will not be centralized."*

Sources: [CoinMarketCap](https://coinmarketcap.com/currencies/minima-global/); [Hugo Feiler LinkedIn](https://www.linkedin.com/in/hugo-feiler); [Deep Analysis profile excerpt](https://www.deep-analysis.net/vendor-vignette-0/minima/)

---

### 5.2 Leadership Team

| Name | Title | Background |
|------|-------|------------|
| **Hugo Feiler** | Co-Founder & CEO | Over two decades in marketing communications. Previously ran internationally awarded advertising agencies, creating global campaigns for Vodafone, Toshiba, and Sony Electronics. Formerly General Manager of marcomms at Sony Europe for computer and audio divisions. Discovered blockchain in 2018. ([Spotify: FinTech Silicon Valley podcast](https://creators.spotify.com/pod/profile/fintechsv/episodes/Hugo-Feiler--CoFounderCEO-Minima-e1nie5h)) |
| **Paddy Cerri** | Co-Founder & Chief Architect | Originally fell into the "Bitcoin rabbit hole" as a coder in 2012. Describes the architecture of Minima as his answer to the centralization trends he observed in Bitcoin during the SegWit wars (2017). Has led the technical design of the Tx-PoW, MMR UTXO, Cascading Chain, and Maxima systems. ([We Are DePIN podcast](https://www.youtube.com/watch?v=y_dGFpoF3WU)) |
| **Adam Feiler** | Head of Partnerships | Represented Minima in the University of Southampton drone demonstration, quoted in official press releases. ([University of Southampton press release](https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page)) |

Note: Paddy Cerri is referred to as both "Chief Architect" (in official press releases) and occasionally "CTO" in media coverage.

---

### 5.3 Funding History

Total raised: **$27 million** across four rounds ([DroomDroom fundraising profile](https://droomdroom.com/fundraising/projects/minima))

| Round | Date | Amount | Key Investors |
|-------|------|--------|---------------|
| Seed / Unknown | November–December 2020 | $2.5M | Blockchange Ventures |
| Series A | September–October 2021 | $6.5M | GSR Markets, DEX Ventures, AGE Crypto, SMO Capital, Vinny Lingham |
| Unknown (strategic) | May–June 2022 | Undisclosed | MH Ventures |
| Public Sale | January–February 2023 | $18M | Public |

Sources: [DroomDroom](https://droomdroom.com/fundraising/projects/minima); [Investing.com coverage of Series A](https://www.investing.com/news/cryptocurrency-news/most-decentralized-network-minima-raises-65m-in-series-a-round-2655592); [Yahoo Finance Series A](https://finance.yahoo.com/news/minima-closes-series-round-raising-140000095.html)

Hugo Feiler on the Series A: *"We are excited to announce this oversubscribed Series A fundraise. Our mission is to develop a blockchain that is owned by everyone and controlled by no one, achieving complete decentralization."* ([Yahoo Finance](https://finance.yahoo.com/news/minima-closes-series-round-raising-140000095.html))

---

### 5.4 CertiK Audit

- **CertiK Skynet Score**: **87.14** (Grade: **AA**) — *Note: CoinMarketCap lists a rating of 4.4/5, which likely represents a normalized 5-point scale version of the same score. The CertiK native score is on a 100-point scale.*
- **Actual CertiK audit**: No CertiK direct audit; 1 third-party audit conducted by **Hacken**, published **October 1, 2023**

**CertiK Skynet Score Breakdown** ([CertiK Skynet: Minima](https://skynet.certik.com/projects/minima)):

| Category | Score |
|----------|-------|
| Code Security | 80.0 |
| Market Stability | 90.42 |
| Fundamental Health | 88.95 |
| Operational Resilience | 81.09 |
| Governance Strength | 80.50 |
| Community Trust | 89.56 |
| **Overall** | **87.14 (AA)** |

The Skynet score is a composite rating based on on-chain monitoring, code audit history, team verification, and community signals — not simply the audit score. At 87.14 (AA), Minima ranks in CertiK's second-highest tier.

CertiK's description of Minima: *"Minima is a lightweight, fully decentralized, quantum-secure Layer 1 blockchain protocol designed to run directly on mobile, IoT devices and in full on chip. Its core aim is to deliver a truly decentralized network by ensuring every user can run a full node, thereby removing the reliance on centralized validators or miners and achieving maximal censorship resistance, security, and accessibility."* ([CertiK Skynet](https://skynet.certik.com/projects/minima))

---

### 5.5 Token Economics

**Token**: MINIMA  
**Max supply**: 1,000,000,000 (1 billion) — hard-capped  
**Total supply**: ~999,991,230 (essentially 1 billion, minus burned tokens)  
**Circulating supply**: ~510,000,000–553,000,000 (approximately 51–55% of max, depending on snapshot date)  
**Market cap**: ~$4–10 million (highly variable; at ATH of $0.132 on December 6, 2024, market cap was approximately $67M fully diluted)

Source: [CoinGecko: MINIMA](https://www.coingecko.com/en/coins/minima)

**Exchange listings** (as of 2024–2025):
| Exchange | Listing Date | Trading Pair | 24h Volume (approximate) |
|----------|--------------|--------------|--------------------------|
| **BitMart** | November 19, 2024 (primary listing) | MINIMA/USDT | ~$104,682 |
| **MEXC** | [Prior to BitMart] | MINIMA/USDT | ~$113,728 |
| **XT.COM** | [Prior to BitMart] | MINIMA/USDT | ~$13,734 |

Sources: [BitMart listing announcement](https://bitmart.zendesk.com/hc/en-us/articles/30925312184219); [CoinGecko](https://www.coingecko.com/en/coins/minima); [CoinCodex](https://coincodex.com/crypto/minima-global/exchanges/)

**Historical price note**: MINIMA reached its all-time high of $0.132 on December 6, 2024 — coinciding with the BitMart primary listing and broader crypto market rally. The token has since traded significantly below ATH. ([CoinGecko](https://www.coingecko.com/en/coins/minima))

**Token utility per MEXC description**: *"The only Layer 1 Protocol that allows any device to run a full constructing and validating node. Utilizing Minima, any edge device can become its own economic agent to securely communicate, and seamlessly create, manage and send tokens. Minima has a growing ecosystem of partners within Web3 and Web2 to deliver use case for #DePIN #RWA #AI and #Enterprise."* ([MEXC tokenomics page](https://www.mexc.com/price/MINIMA/tokenomics))

**Node incentives**: Per a 2021 interview, Minima allocated approximately 30% of total supply toward a two-year program of incentivizing people to run nodes — paying MINIMA per day for running a node and contributing to the network. ([TalkingPointz](https://talkingpointz.com/is-that-a-blockchain-in-your-pocket-hugofeiler-of-minima_global/))

---

## 6. Competitive Positioning

### 6.1 Minima vs. DePIN Projects

Minima positions itself as an "Enterprise DePIN" — but its architecture is fundamentally different from other DePIN projects, which typically use a general-purpose blockchain as their settlement and coordination layer while deploying specialized hardware networks on top.

| Project | Chain Architecture | Hardware Model | Primary Use Case | Token Model |
|---------|-------------------|----------------|------------------|-------------|
| **Minima** | Custom L1; every device is a full node | Software on any device + silicon (ARM chip) | Universal edge verification, IoT, AI compliance | Cooperative Tx-PoW; no mining rewards |
| **Helium** | Migrated to Solana; L2 for wireless | Dedicated hotspot hardware | Wireless connectivity (IoT, mobile) | Proof of Coverage mining rewards |
| **Render** | Solana + Polygon | GPU farms | GPU rendering, AI compute | Task-based payments |
| **Akash** | Cosmos-based L1 | Cloud compute providers | Decentralized compute | Reverse auction pricing |
| **Peaq** | Polkadot parachain (Substrate) | Any DePIN device | General DePIN infrastructure, EVM-compatible | Economy of Things tokens |
| **IoTeX** | Custom L1 + Ethereum bridge | IoT devices with W3bstream | IoT data, real-world data oracles | Staking and fee model |

Sources: [DePIN Hub comparison](https://depinhub.io/blog/013-where-to-build-a-depin-project); [CoinBrain DePIN overview](https://devel.coinbrain.com/blog/top-depin-crypto-projects); [Beluga DePIN projects](https://heybeluga.com/articles/top-depin-projects-2025/)

**Key differentiators for Minima in DePIN**:

1. **No specialized hardware required**: Unlike Helium (requires hotspot purchase), Render (requires GPU), or Akash (requires server), Minima runs on devices people already own. The "DePIN infrastructure" *is* the existing global device fleet.

2. **Enterprise-grade security model**: Minima positions explicitly for enterprise and regulated industries (automotive, healthcare, energy) where GDPR compliance, quantum resistance, and audit trail requirements are real. As DePIN Hub noted: *"Their low latency node-to-node communication offers GDPR compliance, a very real-world issue that not many crypto projects pay attention to."* ([DePIN Hub](https://depinhub.io/blog/013-where-to-build-a-depin-project))

3. **No fee market**: IoTeX and Peaq use fee models that make high-frequency IoT micro-attestations expensive at scale. Minima's Tx-PoW model enables economically viable per-event blockchain recording.

4. **Silicon integration**: No other DePIN project is integrating its consensus layer directly into semiconductor silicon alongside partners like ARM and Siemens. Helium, IoTeX, and Peaq all run on top of conventional hardware.

5. **Automotive traction**: Minima is the only DePIN project with validated automotive sector partnerships (Volvo Group ecosystem via MobilityXlab, Polestar, Veoneer, CEVT, Ericsson). ([DePIN Hub](https://depinhub.io/blog/013-where-to-build-a-depin-project); [AccessWire](https://www.accessnewswire.com/newsroom/en/blockchain-and-cryptocurrency/minima-and-mobilityxlab-extend-partnership-to-fuel-the-future-of-conne-737416))

**Limitations to note**: Minima is less well-known than Helium, Render, or IoTeX in DePIN circles, and its token liquidity is significantly lower ($3–10M market cap vs. Helium's hundreds of millions). The DePIN Hub noted: *"The real challenge lies in pulling users and liquidity over from the larger blockchain ecosystems."* ([DePIN Hub](https://depinhub.io/blog/013-where-to-build-a-depin-project))

---

### 6.2 Integritas vs. Other AI Compliance Tools

Integritas competes in the emerging AI governance and compliance software market. However, its approach is architecturally distinct from all existing tools.

| Tool | Approach | Blockchain | Standards | Primary Market |
|------|----------|------------|-----------|----------------|
| **Integritas** | Blockchain-anchored immutable audit trail on Minima; quantum-resistant | Yes (Minima L1) | EU AI Act, ISO 42001, SOC2, ASTM/EASA | AI systems, edge/IoT, autonomous systems |
| **Credo AI** | AI-native governance platform; continuous risk monitoring; workflow automation | No | EU AI Act, ISO 42001, NIST AI RMF | Enterprise AI governance; MedTech, insurance, financial services |
| **Holistic AI** | Technical assurance testing and audits | No | EU AI Act, NIST AI RMF | AI testing and bias evaluation |
| **OneTrust AI Governance** | Privacy/GRC platform extended to AI; asset inventory and compliance tracking | No | EU AI Act, ISO 42001 | Large enterprises with existing OneTrust investment |
| **IBM Watsonx.governance** | Monitoring and compliance within IBM AI ecosystem | No | Multiple | IBM stack enterprises |

Sources: [Credo AI product page](https://www.credo.ai/lp/onetrust-vs-credo-ai); [Atlan AI Governance tools roundup](https://atlan.com/ai-governance-tools/); [Integritas.technology](https://integritas.technology)

**Key differentiators for Integritas**:

1. **Tamper-proof by cryptographic design**: Credo AI, OneTrust, and Holistic AI all store audit records in conventional databases or cloud platforms that are theoretically mutable. Integritas records to an immutable blockchain — once written, no system administrator, vendor, or attacker can alter the record. This is a fundamentally different security model.

2. **Quantum resistance**: No other AI governance tool offers quantum-resistant audit trail storage. As AI systems are expected to operate for decades (autonomous vehicles, industrial robots, medical devices), the long-term integrity of audit records is a genuine concern.

3. **Edge-native**: Existing tools assume cloud connectivity. Integritas explicitly supports edge deployment — logging sensor data and AI decisions in real time on resource-constrained hardware (as demonstrated with the drone). This opens markets that Credo AI and OneTrust cannot address: embedded industrial AI, autonomous robotics, field devices.

4. **Independent verifiability**: Any node on the Minima network can independently verify an Integritas audit record. Credo AI and OneTrust records are verifiable only by auditors with access to the vendor's platform.

5. **ASI:One integration**: Integritas is the only AI compliance tool with native integration into an agentic AI coordination platform, enabling autonomous agents to self-report compliance as they act. ([Fetch.ai X post](https://x.com/Fetch_ai/status/1978438462148661598))

**Limitations**: Integritas is at an earlier commercial stage than Credo AI (Forrester Wave Leader, Q3 2025) or OneTrust (established GRC vendor). No published customer case studies are currently available. Deployment modes (MCP Server, Compliance Cloud) remain "coming soon" as of early 2026.

---

### 6.3 The Edge-Native Approach: Why It Is Unique

The central thesis of Minima's competitive positioning is that the next generation of computing is not cloud-centric but **edge-centric**: billions of autonomous devices (vehicles, robots, drones, sensors, implants) making decisions locally, without reliable cloud connectivity.

Current blockchain infrastructure assumes cloud-level hardware:
- Bitcoin nodes: 350GB+ disk, constant internet, high power
- Ethereum nodes: 1TB+ disk, high memory, constant connectivity
- Enterprise blockchains (Hyperledger, R3 Corda): Run on servers

None of these can operate on a microcontroller, drone flight computer, or EV sensor node.

Minima's specific edge advantages:
- **~300MB total footprint** vs. 350GB+ for Bitcoin or 1TB+ for Ethereum
- **10 seconds of mobile processor time** per transaction vs. dedicated mining hardware
- **No connectivity requirement** for existing records (local verification against stored MMR root)
- **Hardware integration via ARM** chips — the most widely deployed processor architecture in embedded systems
- **Siemens toolchain integration** — the dominant EDA software for chip design

This positions Minima to address what Paddy Cerri calls the "machine-to-machine economy": *"The machine-to-machine economy is really where I see Minima really shining — in low resource environments."* ([We Are DePIN podcast](https://www.youtube.com/watch?v=y_dGFpoF3WU))

For Integritas specifically, the edge-native architecture means AI compliance is no longer limited to data-center AI. It can follow AI wherever it operates — inside autonomous vehicles, on factory floors, aboard drones, and eventually inside the silicon itself.

---

## Appendix: Key Sources Reference

| Topic | Primary Source | URL |
|-------|---------------|-----|
| Minima Whitepaper | Minima Docs | https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf |
| Quantum Security | Minima Docs | https://docs.minima.global/docs/learn/quantum-security |
| Maxima Protocol | Minima Docs | https://docs.minima.global/docs/learn/maxima-about |
| Blockchain Structure | Minima Docs | https://docs.minima.global/docs/learn/the-blockchain |
| Storage-less MMR UTXO | Minima Docs | https://docs.minima.global/docs/core/minimawhitepaper/storagelessmmrutxo |
| Integritas product | Integritas | https://integritas.technology |
| Southampton drone demo | University of Southampton | https://www.southampton.ac.uk/news/2026/03/student-engineers-achieve-worldfirst-in-blockchain-black-box-for-drones-.page |
| Drone demo (press) | Mirage News | https://www.miragenews.com/student-engineers-pioneer-blockchain-black-box-1630688/ |
| Blockchain-on-Chip announcement | Chainwire | https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/ |
| ARM partnership (Dec 2024) | Yahoo Finance | https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html |
| Siemens partnership | Siemens Cre8Ventures blog | https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/ |
| Fetch.ai integration | Fetch.ai X post | https://x.com/Fetch_ai/status/1978438462148661598 |
| MobilityXlab partnership | Crypto.news | https://crypto.news/layer-1-blockchain-minima-mobilityxlab-innovative-mobility-solutions/ |
| Series A funding | Yahoo Finance | https://finance.yahoo.com/news/minima-closes-series-round-raising-140000095.html |
| Total funding history | DroomDroom | https://droomdroom.com/fundraising/projects/minima |
| CertiK score | CertiK Skynet | https://skynet.certik.com/projects/minima |
| Token data | CoinGecko | https://www.coingecko.com/en/coins/minima |
| BitMart listing | BitMart | https://bitmart.zendesk.com/hc/en-us/articles/30925312184219 |
| Company description | CoinMarketCap | https://coinmarketcap.com/currencies/minima-global/ |
| DePIN comparison | DePIN Hub | https://depinhub.io/blog/013-where-to-build-a-depin-project |
| Paddy Cerri interview | We Are DePIN podcast | https://www.youtube.com/watch?v=y_dGFpoF3WU |
| Hugo Feiler background | FinTech Silicon Valley podcast | https://creators.spotify.com/pod/profile/fintechsv/episodes/Hugo-Feiler--CoFounderCEO-Minima-e1nie5h |
| Credo AI comparison | Credo AI | https://www.credo.ai/lp/onetrust-vs-credo-ai |
| Siemens IoT security (press) | Evertiq | https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security |

---
*Research compiled: 2026. All data reflects sources available at time of research. Token prices and market cap figures are indicative only.*
