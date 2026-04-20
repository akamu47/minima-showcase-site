# Beyond Compliance: Why ARM, Siemens, and Fetch.ai Are Building on Minima

*Article 4 of 5 | Minima Global Content Series*

---

There is a pattern worth noticing.

In December 2024, Minima joined ARM's Flexible Access Program — one of approximately 70 carefully selected startups given access to ARM's IP portfolio and chip design system, with a mandate to explore embedding a blockchain node directly into silicon. In March 2025, Siemens Cre8Ventures formally partnered with Minima to bring embedded blockchain verification to its Digital Twin Marketplace across automotive, energy, healthcare, and robotics. In October 2025, Fetch.ai — the AI agent infrastructure company and founding member of the Artificial Superintelligence Alliance — integrated Minima's compliance product with its Agentverse platform and ASI:One reasoning system. The same month, all three announced together: the world's first industrial-grade microchip capable of running a full blockchain node, initially embedded in commercial drone flight controllers.

These are not crypto partnerships. ARM does not announce token collaborations. Siemens Cre8Ventures does not run hackathons for speculative DeFi protocols. Fetch.ai's integration requirements are grounded in real agent infrastructure, not hype cycles.

What you are looking at, instead, is a sequence of partnerships from some of the most consequential technology companies in the world, each arriving independently at the same conclusion: that Minima's architecture — a full blockchain node that runs in under 300MB, with no gas fees, quantum-resistant cryptography, and cooperative proof-of-work consensus — solves a real problem that nobody else has solved.

Understanding why requires understanding what each partner was actually looking for.

---

## ARM: Blockchain on Silicon

ARM Holdings licenses processor architecture to almost every company that makes a mobile phone, embedded processor, or connected device. Apple Silicon is ARM. Qualcomm Snapdragon is ARM. Samsung Exynos is ARM. The automotive microcontrollers inside modern vehicles are predominantly ARM. The embedded processors in industrial sensors, smart meters, and medical devices are ARM. When ARM decides to spend engineering resources on a protocol, it is not making a casual bet — it is evaluating whether that protocol can live inside the hardware it already powers.

The ARM Flexible Access Program, which Minima [joined in December 2024](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html), is not open to most applicants. It provides a small cohort of companies with access to ARM's security-rich IP for hardware accelerator development — specifically, the intellectual property needed to prototype chips. That access is the prerequisite for the "Minima Chip" concept: a microchip with Minima's decentralized ledger embedded directly within it, such that each chip-equipped device carries a secure node capable of data verification, token generation, and peer-to-peer messaging.

Hugo Feiler, Minima's CEO, articulated the strategic logic plainly: *"For actual enterprise implementation, it is advantageous to separate blockchain operations from the intricacies of an existing technology framework by embedding it within a chip."* He offered a clarifying analogy — the network as a highway: *"It's the road everyone has to use — you've got Volvos, Audis, and Teslas that don't necessarily trust each other, but they must trust the information and data being transmitted from those devices."* ([Yahoo Finance](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html))

ARM's own stated rationale was about reducing friction for emerging companies: *"With ARM Flexible Access, emerging companies like Minima have a streamlined and cost-effective pathway to prototype development, enabling them to experiment and design with assurance."* ([Yahoo Finance](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html)) The subtext is significant. ARM evaluates which protocols are technically suitable for silicon integration — small enough, efficient enough, architecturally stable enough to survive the constraints of embedded hardware. Most blockchains, with their gigabyte-scale full nodes and fee markets tuned for desktop-class hardware, fail that evaluation on first principles. Minima did not.

The implication, if the "Minima Chip" concept is realized at scale, is distribution that no marketing campaign could replicate. WiFi became ubiquitous not because consumers chose it, but because it was embedded in every chip by default. Bluetooth arrived the same way. If Minima's verification layer is embedded in ARM-based chips, it arrives in every device that uses those chips — mobile phones, IoT sensors, vehicles, industrial robots, medical devices — as a default capability rather than a software download. The blockchain does not need a user to install it. It is already there.

---

## Siemens Cre8Ventures: Industrial Trust

The Siemens partnership, announced in [March 2025](https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/), requires a moment of context. Siemens Cre8Ventures is not Siemens' marketing arm. It is the startup collaboration division within Siemens Digital Industries Software — the business unit that produces EDA (Electronic Design Automation) toolchains used by virtually every chip designer in the world. When Cre8Ventures selects a startup for its Digital Twin Marketplace, it is integrating that startup's technology into the software environment where industrial engineers design the next generation of physical hardware.

The partnership addresses four industrial sectors, each with distinct trust requirements.

**Automotive.** Modern vehicles generate continuous telemetry: sensor readings, software update logs, GPS traces, component diagnostics. This data is increasingly used in insurance, warranty claims, regulatory compliance, and autonomous driving certification. Without a tamper-proof record, every data point is susceptible to manipulation after the fact — by manufacturers, operators, or bad actors. Minima's blockchain provides cryptographic proof that a vehicle's log reflects verified real-world conditions, not edited records. Smart contracts on Minima enable automated transactions between OEMs, suppliers, and service providers — removing friction from the multi-party relationships that define modern automotive supply chains.

**Energy.** Smart grids generate enormous volumes of distributed data from sensors, meters, and control systems. The integrity of that data is a security and operational question: a falsified energy reading can conceal an attack, trigger automated responses to phantom conditions, or corrupt the data on which predictive maintenance models depend. Minima's Siemens integration addresses this directly — providing cryptographic data integrity for smart grid data and enabling peer-to-peer energy trading via blockchain smart contracts within digital twins.

**Healthcare.** Connected medical devices — insulin pumps, remote monitoring equipment, hospital telemetry — generate patient data that is simultaneously regulated under GDPR, subject to medical device certification requirements, and potentially life-critical. The audit trail requirement for these systems is not abstract: it is a precondition for market authorization in the EU. Minima's tamper-proof records provide the integrity layer that regulators require, from manufacturing through deployment.

**Robotics.** Industrial robots operating in shared environments with human workers require cybersecurity and data integrity certification under EU machinery safety standards. As robots become more autonomous — making decisions rather than executing predetermined sequences — the question of auditability becomes urgent. What did the robot decide, and why? Minima provides the immutable record of those decisions.

Across all four sectors, the Siemens partnership is built around what Carson Bradbury, Director for EU Chips Act at Cre8Ventures, called "programmable trust." Bradbury's statement at the [October 2025 blockchain-on-chip announcement](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/) was unusually precise for a press release: *"Embedding blockchain deep within silicon infrastructure paves the way for programmable trust across the exponential growth of industrial IoT and connected machines."* The word "programmable" is the key. Trust, in industrial systems, has historically been delivered by certification regimes, audit firms, and regulatory bodies — slow, expensive, and retrospective. Programmable trust is trust delivered by cryptographic architecture: instant, cheap, and prospective. It doesn't require an auditor to arrive after the fact. It is built into the system.

The EU Chips Act dimension of the partnership adds a political layer that helps explain Siemens' strategic interest. The EU Chips Act, which Bradbury explicitly referenced, is aimed at reducing European dependence on non-European semiconductor manufacturers. A blockchain-on-chip architecture developed through a European industrial partnership — Siemens' EDA toolchains, ARM's IP, Minima's protocol — fits directly within that mandate. The partnership is not just commercially attractive; it is politically aligned with European industrial policy. ([Evertiq coverage](https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security))

The October 2025 blockchain-on-chip prototype — where Siemens, ARM, and Minima together produced the world's first industrial-grade microchip running a full blockchain node — targeted commercial drone flight controllers as its initial application. The prototype, which launched in January 2026, generates on-device, standards-compliant timestamping and data attestation aligned with ASTM and EASA regulatory requirements — without cloud infrastructure, without connectivity dependencies, without any operator intermediary. ([Chainwire](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/))

The drone is the first use case. The reference architecture is designed for every ARM-based chip across autonomous vehicles, industrial robotics, and smart manufacturing. The chip is the proof of concept. The deployment surface is orders of magnitude larger.

---

## Fetch.ai and the Agent Economy

The Fetch.ai partnership, announced on [October 13, 2025](https://x.com/Fetch_ai/status/1978438462148661598), addresses a different problem domain — but the same underlying question.

Fetch.ai is a founding member of the Artificial Superintelligence Alliance. Its Agentverse platform [crossed one million registered agents in Q1 2025](https://coinstats.app/ai/a/fundamental-analysis-fetch-ai), making it one of the largest autonomous agent deployment platforms in existence. ASI:Chain, a blockDAG network purpose-built for billions of autonomous agents, launched in DevNet in October 2025 — the same month as the Minima integration. The partnership integrated Minima's Integritas compliance product with Fetch.ai's ASI:One multi-agent reasoning system and deployed the Integritas Agent directly on Agentverse.

The scale of the agent economy context matters here. Virtuals Protocol's 18,000+ deployed agents generated [$479 million in Agentic GDP](https://blockeden.xyz/blog/2026/04/04/virtuals-protocol-ai-economic-operating-system-on-chain-agent-economy/) in Q1 2026 — autonomous agents discovering work, negotiating terms, delivering services, and settling payments entirely on-chain. This is not a prototype. It is a functioning economic layer, and it is growing. The Virtuals team targets $3 billion in annualized agentic GDP by end of 2026.

The problem the Fetch.ai integration addresses is structural: autonomous agents have no native mechanism for proving what they did. An agent logging its decisions to its operator's servers creates records that are only as trustworthy as the operator — which is to say, they are testimony, not evidence. An operator can edit logs. An operator can delete logs. An operator can fabricate logs. Under EU AI Act Article 12, which requires tamper-proof, automatically generated logs of high-risk AI system decisions, an operator-controlled log is not a compliance record. It is a liability.

What the Integritas integration on Agentverse provides is five specific capabilities:

1. **Agentic integrity**: Integritas is connected to ASI:One's autonomous reasoning capabilities, linking data integrity directly to AI decision-making in real time.
2. **Natural language verification**: Agents can stamp, verify, and manage blockchain data through natural language interaction with ASI:One — without requiring complex technical integration.
3. **End-to-end trust**: On-chain validation meets AI intelligence, creating independently verifiable records of autonomous agent behavior.
4. **Conversational blockchain access**: Any Agentverse participant can prove data existence, verify authenticity, or retrieve audit records via simple natural language prompts.
5. **Open developer framework**: The integration is built on an open framework that merges blockchain proofs with AI reasoning, allowing developers to extend the compliance layer into their own agent architectures.

The result is that Integritas is currently the only compliance tool natively integrated with an agentic AI platform at scale. Every one of the million-plus agents registered on Agentverse can, today, route its compliance logging through Integritas. As EU AI Act enforcement tightens — full obligations for high-risk AI systems became enforceable in August 2026 — that distribution channel becomes increasingly significant.

[Fetch.ai's announcement](https://x.com/Fetch_ai/status/1978438462148661598) framed the integration as "a major step forward for agentic AI and blockchain data integrity." It is worth noting that the market agreed: MINIMA jumped 14% on the announcement day, while FET rose 8%. Third-party builders have already extended the integration: the [RelAI platform uses Integritas receipts](https://relai.fi/blog/integritas-provenance) to provide blockchain-backed evidence of API payments, with auditors independently verifying that a payment occurred at a specific time, for a specific amount, between specific parties — a pattern that generalizes to any agent transaction or data access.

The partnership represents Minima's entry into the agent economy through the most credible possible channel: a live integration with the platform that hosts the largest population of deployed autonomous agents in the world.

---

## MobilityXlab and the Automotive Frontier

Before ARM, before Siemens, before Fetch.ai, there was MobilityXlab.

Minima joined MobilityXlab in July 2022 — a collaboration platform driven by CEVT, Ericsson, Polestar, Veoneer, Volvo Cars, Volvo Group, and Zenseact. Getting into MobilityXlab required selection by at least two industry partners; Minima was one of eleven global startups chosen from the applicant pool. ([Crypto.news](https://crypto.news/layer-1-blockchain-minima-mobilityxlab-innovative-mobility-solutions/))

The automotive use cases that MobilityXlab explored were foundational. Vehicle-to-Vehicle (V2V) communication requires a trust model: when one vehicle broadcasts its speed, position, and intent to neighboring vehicles, the receiving vehicles need to know that the broadcast has not been tampered with. In a decentralized network, there is no central authority to provide that guarantee — the trust must be cryptographic, embedded in the protocol. Minima's Maxima messaging layer, which enables peer-to-peer communication between nodes, provides exactly this — V2X communication secured at the protocol level, not by a third-party server.

The deeper vision is the connected vehicle as an autonomous economic unit. Hugo Feiler described it in terms that have since become more relevant, not less: vehicles as sovereign nodes enabling automated payments, digital service books, and loyalty programs — not dependent on any single manufacturer's cloud infrastructure, but operating on a network that no single participant controls. An Audi and a Volvo on the same road don't trust each other's engineering, but they can trust a shared protocol. The highway analogy from the ARM partnership applies directly: the road everyone uses, regardless of what vehicle they are driving.

The January 2023 extension of the MobilityXlab partnership focused on cybersecurity, data privacy, and integration into connected infrastructure. Feiler: *"P2P, data-driven, token-incentivized networks of connected vehicles, infrastructure, and people will be the key focus."* ([AccessWire](https://www.accessnewswire.com/newsroom/en/blockchain-and-cryptocurrency/minima-and-mobilityxlab-extend-partnership-to-fuel-the-future-of-conne-737416))

The MobilityXlab work predates the blockchain-on-chip prototype, but it establishes the automotive context in which that prototype makes sense. The drone flight controller chip is technically equivalent to an automotive MCU. The ASTM/EASA compliance framework is the drone-sector equivalent of automotive safety standards. The extension of the blockchain-on-chip architecture to automotive applications is not speculative — it is the next step in a pathway that has been under development for three years.

---

## DePIN Positioning: What Makes Minima Different

Minima is frequently categorized alongside DePIN (Decentralized Physical Infrastructure Network) projects — and the category is accurate, but the comparison requires nuance. Most DePIN projects use a general-purpose blockchain as their settlement and coordination layer, deploying specialized hardware networks on top of it. Minima's architecture inverts this model: the blockchain is the edge layer, running on the same hardware that generates the data.

The practical differences are significant:

| Project | Hardware Model | Fee Model | Silicon Integration | Automotive Traction |
|---------|----------------|-----------|---------------------|---------------------|
| **Minima** | Software on any device + ARM chip | Tx-PoW (gasless) | ARM/Siemens blockchain-on-chip | MobilityXlab (Volvo Group ecosystem) |
| **Helium** | Dedicated hotspot hardware | Proof of Coverage mining | None | None |
| **Render** | GPU farms | Task-based payments | None | None |
| **Akash** | Cloud compute providers | Reverse auction | None | None |
| **Peaq** | Any DePIN device | Fee model | None | None |
| **IoTeX** | IoT devices with W3bstream | Staking and fees | None | None |

Sources: [DePIN Hub](https://depinhub.io/blog/013-where-to-build-a-depin-project); [CoinBrain DePIN overview](https://devel.coinbrain.com/blog/top-depin-crypto-projects)

Five specific differentiators define Minima's position:

**No specialized hardware required.** Helium requires hotspot hardware purchase. Render requires GPU investment. Akash requires server infrastructure. Minima requires nothing that people don't already own. The DePIN infrastructure is the existing global device fleet — every smartphone, every Raspberry Pi, every industrial sensor that can run a 300MB application. This eliminates the capital barrier that has constrained other DePIN networks and makes enterprise adoption — which involves deploying on existing device inventories, not purchasing new hardware — tractable.

**Enterprise-grade security.** Minima positions explicitly for regulated industries where GDPR compliance, quantum resistance, and audit trail requirements are real constraints rather than marketing language. As [DePIN Hub observed](https://depinhub.io/blog/013-where-to-build-a-depin-project): *"Their low latency node-to-node communication offers GDPR compliance, a very real-world issue that not many crypto projects pay attention to."* The quantum resistance is not a roadmap item — it is the current architecture, using SHA3-256 hashing and Winternitz One-Time Signatures, both considered post-quantum sufficient by NIST standards.

**No fee market.** IoTeX and Peaq use fee models that make high-frequency IoT micro-attestations expensive at scale. An industrial sensor logging 1,000 events per day to Ethereum at even $0.10 per transaction would cost $36,500 per year per device in gas fees alone. Minima's Transaction Proof of Work (Tx-PoW) model eliminates per-transaction fees entirely — the cost of logging an event is the computational work of the device generating it, not a payment to miners or validators. This makes economically viable per-event blockchain recording possible for the first time at the scale that industrial IoT requires.

**Silicon integration.** No other DePIN project is integrating its consensus layer directly into semiconductor silicon alongside ARM and Siemens. This is not a technical detail — it is a distribution model. Embedded in silicon, the node does not require installation, maintenance, or active user management. It is a feature of the hardware, not a choice by the user.

**Automotive traction.** Minima is the only DePIN project with validated automotive sector partnerships — MobilityXlab provides access to the Volvo Group ecosystem (CEVT, Ericsson, Polestar, Veoneer, Zenseact), representing the supply chain and R&D infrastructure of one of the world's largest vehicle manufacturers.

It is worth being honest about the limitations. Minima is less well-known than Helium, Render, or IoTeX in DePIN circles, and its token liquidity is significantly lower: a market cap in the $4-10 million range against Helium's hundreds of millions. [DePIN Hub noted](https://depinhub.io/blog/013-where-to-build-a-depin-project) that Minima's "real challenge lies in pulling users and liquidity over from the larger blockchain ecosystems." Integritas, while technically distinguished, is at an earlier commercial stage than established GRC vendors like Credo AI (a Forrester Wave Leader) or OneTrust. No published customer case studies are currently available, and some deployment modes remain in development as of early 2026. The partnership pipeline is genuine; the commercial conversion of that pipeline into revenue and adoption is the open question.

---

## The Bigger Picture: A Protocol for the Machine Economy

There is a useful frame for understanding what Minima is actually building toward, and it requires stepping back from the individual partnerships.

The dominant narrative in blockchain is still about financial applications: DeFi, stablecoins, tokenized assets, NFTs. These are applications designed for human economic participants — people making decisions, people holding assets, people approving transactions. The user interface is a wallet. The unit of adoption is a person.

Minima is not competing in that market. Its architecture — edge-native, zero-cost transactions, quantum-resistant, silicon-embeddable — is poorly suited to applications where human interaction is the primary use case. It is perfectly suited to applications where the primary participants are machines.

Consider the scale of what is coming. There are approximately 15 billion IoT devices currently deployed globally, with projections toward 29 billion by 2030. The autonomous vehicle market is moving from prototype to production, with Level 3 and Level 4 autonomy entering commercial deployment across multiple jurisdictions. Commercial drone fleets are scaling rapidly — the global commercial drone sector is valued at approximately [$60 billion](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/). Industrial robotics deployments are accelerating under labor cost pressures and automation incentives across manufacturing, logistics, and agriculture.

Every one of these systems has the same underlying requirement: a way to prove what it did, when it did it, and whether it was authorized to do it. The compliance question is not limited to the EU AI Act or GDPR, though both create immediate legal mandates. It is a fundamental operational requirement for any autonomous system operating in a consequential domain. An autonomous vehicle that cannot prove it followed the approved route has no defense in a liability proceeding. An industrial robot that cannot prove its decisions complied with safety standards cannot be certified for operation near humans. A drone that cannot generate a tamper-proof flight record cannot satisfy air traffic authority requirements.

These are not edge cases. They are the baseline requirements for operating in every regulated market that these systems are targeting.

The machine economy does not measure its participants in wallets. It measures them in devices, sensors, actuators, and agents. The number of machines that will require trust infrastructure in the next decade is not comparable to the number of DeFi users — it is measured in billions. At that scale, the technical requirements that Minima was designed to satisfy — sub-300MB footprint, zero transaction fees, edge operation without connectivity, silicon embeddability — are not nice-to-haves. They are the prerequisites.

The partnership signal with which this article opened is worth returning to now with this context. ARM chose Minima because ARM's IP powers the hardware that the machine economy runs on, and ARM needed to identify which protocols could actually operate on that hardware. Siemens chose Minima because Siemens' industrial customers operate in exactly the sectors — automotive, energy, healthcare, robotics — where the machine economy's trust requirements are most immediate and most consequential. Fetch.ai chose Minima because Fetch.ai is building the agent layer of the machine economy and needed a compliance infrastructure that operates at agent speed, without gas fees, in distributed environments.

None of these partners chose Minima because of its token price or its marketing. They chose it because they evaluated the technical and commercial requirements of the problems they were solving and found that Minima's architecture matched those requirements in ways that no competing protocol did.

That is a different kind of signal than a partnership press release. It is an engineering evaluation, conducted by organizations with the resources to build alternative solutions if better alternatives existed. Their selection of Minima as the infrastructure partner is, effectively, a technical validation that the market has not yet priced.

The MINIMA token currently trades at approximately $0.007, with a market cap around $3.6 million. ([CoinMarketCap](https://coinmarketcap.com/currencies/minima-global/)) That figure represents one of the larger disconnects between assessed industrial utility and market valuation in the current crypto landscape. It does not reflect the ARM partnership. It does not reflect the Siemens integration. It does not reflect the Fetch.ai deployment to a million-agent platform. It reflects a small-cap token with limited liquidity, minimal exchange presence, and a community that has not yet crossed the critical mass threshold for broader market awareness. Small market cap, limited liquidity, and early-stage commercial deployment are real constraints — not minor caveats.

What the market will eventually need to price is not just the partnerships as press releases, but as active distribution infrastructure for a network that sits at the convergence of three of the most consequential technology trends of the next decade: autonomous systems, AI governance, and the machine economy.

The billion-device surface area is not a projection. It is the existing deployment base of ARM architecture. The question is whether Minima's node is inside those devices when the compliance requirements arrive — or whether the industry discovers the gap only after the first wave of enforcement actions.

ARM, Siemens, and Fetch.ai appear to have formed a view on that question.

---

*Article 5 in this series will examine Minima's investment thesis: token economics, market positioning, and the scenario analysis for a protocol at the intersection of industrial adoption and regulatory tailwinds.*

---

**Sources**

- ARM Partnership (December 2024) — [Yahoo Finance](https://finance.yahoo.com/news/blockchain-iot-minima-develop-ledger-140000870.html)
- Siemens Cre8Ventures Partnership (March 2025) — [Siemens Cre8Ventures blog](https://blogs.sw.siemens.com/cre8ventures/2025/03/17/siemens-cre8ventures-minima-partnership/)
- Blockchain-on-Chip Prototype (October 2025) — [Chainwire](https://chainwire.org/2025/10/28/minima-siemens-and-arm-develop-worlds-first-blockchain-on-chip-prototype/)
- Fetch.ai Integration Announcement — [Fetch.ai X/Twitter](https://x.com/Fetch_ai/status/1978438462148661598)
- Integritas AI Partnership (Minima + Fetch.ai) — [OurCryptoTalk](https://ourcryptotalk.com/news/integritas-ai-partnership-minima-fetch-ai)
- MobilityXlab Partnership — [Crypto.news](https://crypto.news/layer-1-blockchain-minima-mobilityxlab-innovative-mobility-solutions/)
- MobilityXlab Partnership Extension — [AccessWire](https://www.accessnewswire.com/newsroom/en/blockchain-and-cryptocurrency/minima-and-mobilityxlab-extend-partnership-to-fuel-the-future-of-conne-737416)
- DePIN Comparison — [DePIN Hub](https://depinhub.io/blog/013-where-to-build-a-depin-project)
- DePIN Project Overview — [CoinBrain](https://devel.coinbrain.com/blog/top-depin-crypto-projects)
- Fetch.ai / ASI Alliance Fundamentals — [CoinStats](https://coinstats.app/ai/a/fundamental-analysis-fetch-ai)
- Virtuals Protocol Agentic GDP — [BlockEden](https://blockeden.xyz/blog/2026/04/04/virtuals-protocol-ai-economic-operating-system-on-chain-agent-economy/)
- RelAI x Integritas Integration — [RelAI blog](https://relai.fi/blog/integritas-provenance)
- Siemens IoT Security Coverage — [Evertiq](https://evertiq.com/design/2025-03-31-siemens-cre8ventures-partners-with-minima-to-enhance-iot-security)
- MINIMA Token Data — [CoinMarketCap](https://coinmarketcap.com/currencies/minima-global/)
- Minima Quantum Security — [Minima Docs](https://docs.minima.global/docs/learn/quantum-security)
- Integritas Product — [Integritas.technology](https://integritas.technology)
- Paddy Cerri Interview — [We Are DePIN podcast](https://www.youtube.com/watch?v=y_dGFpoF3WU)
