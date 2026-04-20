# The EU AI Act: What It Actually Says, What It Actually Requires, and Why Most Companies Aren't Ready

*Article 1 of 5 — Minima Global Regulatory Series*

---

August 2, 2026 is not a target date. It is not aspirational. It is the date on which the obligations of [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — the EU Artificial Intelligence Act — become legally enforceable against the majority of companies deploying AI in or into the European Union. National market surveillance authorities will have the power to investigate, demand documentation, and impose fines. The regulation's full penalty architecture will be in force. There will be no grace period, no informal transition, no further legislative reprieve — unless, as discussed below, a pending amendment package materialises into law before that date. The evidence suggests most companies subject to these rules have not come close to meeting them.

This article is not a compliance checklist. It is a primary-source analysis of what the regulation actually requires, drawing directly from [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1689) and the official annotated text at [artificialintelligenceact.eu](https://artificialintelligenceact.eu/). The goal is precision: to identify exactly which systems are covered, exactly what obligations apply, and exactly where current industry practice falls short.

---

## I. The Deadline: A Timeline That Has Already Started

The EU AI Act's formal name — *Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence* — gives away its age. It entered into force on August 1, 2024, twenty days after publication in the Official Journal of the EU. But entry into force and entry into application are two different things under EU law, and the Act is deliberately staged.

The full implementation timeline, as published by the [EU AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act) and codified in [Article 113 of the regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689), runs as follows:

| Date | What Became or Becomes Enforceable |
|------|-------------------------------------|
| August 1, 2024 | Entry into force |
| February 2, 2025 | Chapters I and II: definitions, scope, and AI literacy obligations |
| August 2, 2025 | GPAI rules, governance framework, penalties under Articles 99–100; Member States required to designate national competent authorities |
| **August 2, 2026** | **General application: full Chapter III obligations for high-risk AI systems** |
| August 2, 2027 | Article 6(1) safety-component rules for Annex I products (autonomous vehicles, aviation, machinery); legacy GPAI model compliance |
| August 2, 2030 | Public authority AI systems procured before August 2026 |
| December 31, 2030 | Legacy large-scale IT systems listed in Annex X |

The significance of August 2, 2026 is that it is the date on which everything a company building or deploying a high-risk AI system most needs to worry about becomes simultaneously enforceable. Risk management systems, logging infrastructure, human oversight mechanisms, quality management documentation, conformity assessments, CE marking, EU database registration, post-market monitoring plans — all of it goes live at once.

One caveat deserves attention. In early 2026, the European Commission proposed targeted amendments under what it called the "Digital Omnibus Package," which would, among other things, shift certain Annex III deadlines to December 2027 where harmonized standards have not yet been published in the Official Journal. As of this writing, [no amendment has passed into law](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act). August 2, 2026 remains the current legally binding date. Companies planning their compliance programs around the prospect of a delay are gambling on legislative outcomes that have not materialised.

---

## II. What Counts as High-Risk: Article 6 and Annex III

The regulation's most consequential definitional choice is its concept of the "high-risk AI system." The obligations that dominate the Act — the risk management systems, the logging requirements, the human oversight mandates, the conformity assessments and penalties — apply only to high-risk systems. Getting the classification right is therefore not merely a legal nicety; it determines whether most of the regulation applies to a given product at all.

[Article 6](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1689) creates two separate pathways to high-risk classification.

**The first pathway (Article 6(1))** applies to AI systems used as safety components of products already governed by EU harmonization legislation listed in Annex I — legislation that includes the Machinery Regulation (EU) 2023/1230, the Medical Devices Regulation, the Radio Equipment Directive, Regulation (EU) 2018/1139 on civil aviation, and Regulation (EU) 2019/2144 on vehicle general safety. If an AI system is a safety component of a product covered by these laws *and* that product requires third-party conformity assessment under those laws, the AI system is automatically high-risk. Critically, Article 6(1) systems have a slightly deferred deadline of August 2, 2027 — a recognition that integrating AI Act requirements into established sector-specific conformity assessment regimes takes time.

**The second pathway (Article 6(2))** is more immediately pressing. AI systems are high-risk if they fall within any of the use-case categories listed in Annex III, regardless of the product they operate within. These categories — eight in total — cover an intentionally broad swath of consequential AI deployment: biometric identification and categorization; AI in the management of critical infrastructure; educational and vocational training; employment, worker management, and access to self-employment; access to essential public and private services including credit and health insurance; law enforcement; migration and border control; and the administration of justice and democratic processes. Annex III systems must comply from August 2, 2026.

The regulation provides a statutory safe harbor in Article 6(3): an AI system listed in Annex III is *not* considered high-risk if it performs a narrow procedural task; if it improves the result of a previously completed human activity; if it detects decision-making patterns without replacing or influencing human assessment; or if it performs preparatory tasks to an assessment that falls within an Annex III category. The safe harbor is explicitly carved back for one scenario: AI systems that perform **profiling of natural persons** are always high-risk, regardless of whether any safe harbor condition is otherwise satisfied. The Commission was required to publish guidance on practical application of Article 6 — including a worked list of high-risk and non-high-risk examples — by [February 2, 2026](https://digital-strategy.ec.europa.eu/en/news/supporting-implementation-ai-act-clear-guidelines). As of the writing of this article, those guidelines remain pending.

The practical implications for specific technology categories are significant:

| System Type | Classification | Operative Provision | Deadline |
|-------------|----------------|---------------------|----------|
| Autonomous road vehicles (safety AI) | High-risk | Art. 6(1) + Annex I (Reg. 2019/2144 type approval) | August 2, 2027 |
| Road traffic management AI | High-risk | Art. 6(2) + Annex III, point 2 | August 2, 2026 |
| Drone AI (in certified aviation products) | High-risk | Art. 6(1) + Annex I (Reg. 2018/1139) | August 2, 2027 |
| Industrial automation safety components (machinery) | High-risk | Art. 6(1) + Annex I (Reg. 2023/1230) | August 2, 2027 |
| IoT/edge AI in critical infrastructure (utilities, digital infrastructure) | High-risk | Art. 6(2) + Annex III, point 2 | August 2, 2026 |
| Credit-scoring AI | High-risk | Art. 6(2) + Annex III, point 5 | August 2, 2026 |
| AI in hiring and worker management | High-risk | Art. 6(2) + Annex III, point 4 | August 2, 2026 |

One sector where classification remains genuinely contested is radio equipment. The question of when AI constitutes a safety component of radio equipment within the meaning of Directive 2014/53/EU — and therefore when it falls under the Article 6(1) pathway — is the subject of [ongoing Brussels debate](https://www.insideprivacy.com/artificial-intelligence/when-is-a-safety-component-of-radio-equipment-a-high-risk-ai-system-under-the-eu-artificial-intelligence-act/) among practitioners and regulators alike. No definitive Commission guidance has yet resolved it.

---

## III. The Core Obligations: Article by Article

The high-risk AI system obligations in Chapter III, Section 2 of the regulation are not vague aspirational principles. They are specific technical and organisational requirements that can be audited, documented, and tested against. The following is a close reading of those that carry the most substantial implementation burden.

### Article 9: Risk Management

[Article 9](https://artificialintelligenceact.eu/article/9/) mandates a **continuous, iterative risk management system** — not a one-time assessment, but a living process that must be "established, implemented, documented, and maintained." This distinction matters. A risk assessment conducted at the point of product launch and then filed in a drawer does not satisfy Article 9.

The system must, at minimum, identify and analyse known and **reasonably foreseeable** risks to health, safety, or fundamental rights under the system's intended purpose; estimate and evaluate risks arising from **reasonably foreseeable misuse**; evaluate risks arising from post-market monitoring data as that data accumulates over the system's lifetime; and adopt appropriate, targeted risk management measures in response. Where risks cannot be fully eliminated through design choices, Article 9(5) requires a hierarchy: design-first elimination, then mitigation and control measures, then information and training to deployers.

Article 9's testing obligation is categorical: high-risk AI systems must be tested prior to placement on market, against "prior defined metrics and probabilistic thresholds" appropriate to their intended purpose. The drafters clearly intended to prevent the practice of deploying systems and refining risk understanding in production. For autonomous systems operating in edge environments, the practical challenge is substantial: the foreseeable misuse scenarios for a drone or autonomous vehicle include connectivity failure, sensor degradation, and adversarial environmental inputs — all of which must be addressed through the risk management system before market placement.

Academic analysis of Article 9 by Jonas Schuett in the *European Journal of Risk Regulation* identifies the proportionality requirement as one of its most important and underappreciated features: the risk management system must be calibrated to the context of use, including [the technical knowledge and experience of the expected deployer](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2E4D5707E65EFB3251A76E288BA74068/S1867299X23000016a.pdf/div-class-title-risk-management-in-the-artificial-intelligence-act-div.pdf). A system deployed by trained engineers requires a different risk management approach than one deployed by a municipality with limited AI expertise.

### Article 12: The Logging Mandate

[Article 12](https://artificialintelligenceact.eu/article/12/) may be the most technically demanding provision in the regulation. Its core obligation is deceptively concise: "High-risk AI systems shall technically allow for the automatic recording of events (logs) over the lifetime of the system."

Each word in that sentence is doing legal work.

**"Technically allow"** is a design-time requirement. The logging capability must be built into the system at the architecture level. A provider that deploys a system without logging capability and attempts to retrofit it later has already violated Article 12; the retrospective fix does not cure the original non-compliance. This has significant implications for AI systems already in development: if the logging architecture is not in the design today, it cannot be meaningfully added at the point of deployment.

**"Automatic"** means the logs must be generated without manual triggering. An event that requires an operator to press a "log now" button is not automatic. The system must generate logs continuously, at the moment events occur, without human intervention. This eliminates a wide range of existing monitoring approaches where logging is optional, triggered, or selective.

**"Lifetime"** refers to the entire operational life of the system — from deployment through decommissioning — not just the current version or the current firmware release. If a system is updated via over-the-air software, the logging obligation does not restart; it continues through the update. The logs generated before and after a software update are part of the same lifetime record.

What must the logs contain? Article 12(2) specifies that logging capabilities must enable recording of events relevant for: identifying situations where the system presents a risk per Article 79(1) or has undergone a substantial modification; facilitating post-market monitoring per Article 72; and monitoring by the deployer per Article 26(5). For remote biometric identification systems specifically, Article 12(3) adds enhanced requirements: the period of each use (start and end timestamps), the reference database against which input data was checked, the input data that led to a match, and the identity of human verifiers under Article 14(5).

Retention periods are specified separately. [Article 19](https://artificialintelligenceact.eu/article/19/) requires providers to keep logs "automatically generated by their high-risk AI systems, to the extent such logs are under their control... for a period appropriate to the intended purpose of the high-risk AI system, of at least **six months**." [Article 26(6)](https://artificialintelligenceact.eu/article/26/) imposes the identical six-month minimum on deployers. Both provisions include an important qualifier — "to the extent such logs are under their control" — whose significance for edge AI deployments is examined in Part VII below.

The regulation does not prescribe a specific format for logs. However, [Article 13(3)(f)](https://artificialintelligenceact.eu/article/13/) requires providers to explain in the instructions for use how deployers can "collect, store and interpret the logs" in accordance with Article 12 — effectively requiring providers to design a logging architecture that is interpretable by third parties, including regulators and notified bodies. Logs that exist but cannot be understood by anyone other than the team that built them do not satisfy this standard.

### Article 14: The Human Oversight Requirement

[Article 14(1)](https://artificialintelligenceact.eu/article/14/) states that high-risk AI systems "shall be designed and developed in such a way, including with appropriate human-machine interface tools, that they can be effectively overseen by natural persons during the period in which they are in use."

This is, again, a design-time obligation. Article 14(3) specifies that oversight measures must be "commensurate with risks, level of autonomy, and context of use" — recognising that a fully autonomous system requires different oversight architecture than a decision-support tool. The measures must be implemented either through built-in capabilities by the provider before market placement, or through capabilities that the deployer is required to implement.

Article 14(4) specifies what the natural persons performing oversight must be enabled to do. They must properly understand the system's capabilities and limitations, and monitor its operation including the detection of anomalies, dysfunctions, and unexpected performance. They must remain aware of the risk of automation bias — the tendency to over-rely on AI outputs without applying adequate independent judgment. They must be able to correctly interpret the system's output. They must be able to decide not to use the system, or to disregard, override, or reverse its output in specific cases.

Article 14(4)(e) — the provision that has attracted the most practitioner commentary — requires that oversight persons be enabled to "intervene in the operation of the high-risk AI system or interrupt the system through a 'stop button or similar procedure that allows the system to come to a halt in a safe state.'" The language of a "safe state" is technically precise: the halt must not itself create harm. An autonomous vehicle or industrial robot that abruptly cuts power in response to a stop command may create exactly the kind of safety incident the regulation is designed to prevent. The safe halt requirement therefore imposes engineering constraints that go well beyond installing an off switch.

For the narrowest category of high-risk AI — post-remote biometric identification systems under Annex III, point 1(a) — Article 14(5) adds a further requirement: no action or decision resulting from the identification may be taken unless separately verified and confirmed by at least two natural persons with the necessary competence, training, and authority.

### Articles 16 and 17: Provider Obligations and the Quality Management System

[Article 16](https://artificialintelligenceact.eu/article/16/) is the provider's master obligation list. It requires, among other things, that providers ensure compliance with Articles 9 through 15; maintain a quality management system per Article 17; keep technical documentation per Article 18; retain automatically generated logs per Article 19; conduct the relevant conformity assessment per Article 43; draw up an EU declaration of conformity per Article 47; affix CE marking per Article 48; register in the EU database per Article 49; take corrective actions when non-compliance is discovered; and demonstrate conformity to national competent authorities upon reasoned request.

[Article 17](https://artificialintelligenceact.eu/article/17/) specifies what the quality management system (QMS) must contain. It is a thirteen-element documented system that must include: a regulatory compliance strategy covering conformity assessment procedures and management of modifications; design control and verification techniques; development quality control and quality assurance; examination, testing, and validation procedures across the development lifecycle; technical specifications including applicable standards; a data management system covering acquisition, collection, analysis, labelling, storage, filtration, mining, aggregation, and retention; the risk management system required by Article 9; setup, implementation, and maintenance of a post-market monitoring system per Article 72; procedures for serious incident reporting per Article 73; communication handling with national authorities and notified bodies; record-keeping procedures; resource management including security-of-supply measures; and an accountability framework setting out the responsibilities of management and other staff.

Article 17(2) notes that implementation shall be "proportionate to the size of the provider's organisation." This is intended to mitigate the burden on SMEs, but it does not reduce the list of required elements — it only acknowledges that their implementation may look different in a ten-person startup than in a multinational corporation.

In October 2025, the draft harmonized standard **prEN 18286** — *Artificial Intelligence – Quality Management System for EU AI Act Regulatory Purposes* — became the first AI Act harmonized standard to enter [public enquiry](https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation). It is designed to support Article 17 compliance. It has not yet been published in the Official Journal, which means it cannot yet confer a presumption of conformity. Companies implementing ISO/IEC 42001 (the broader AI management system standard) may find relevant guidance, but that standard has also not been harmonized for AI Act purposes.

### Article 26: Deployer Obligations

The regulation is explicit that deployers of high-risk AI systems are not passive end-users. [Article 26](https://artificialintelligenceact.eu/article/26/) imposes a set of obligations that require deployers to establish their own processes, documentation, and monitoring capabilities — separate from and in addition to whatever the provider supplies.

Under Article 26(1) and (2), deployers must use the system in accordance with its instructions for use and must assign human oversight to persons with the necessary competence, training, and authority — along with the necessary support. Under Article 26(4), deployers must ensure that input data is relevant and sufficiently representative for the intended purpose, to the extent they control that data. Under Article 26(5), deployers must actively monitor the operation of the system; when there is reason to believe the system presents a risk per Article 79(1), they must inform the provider and the relevant market surveillance authority "without undue delay" and suspend use if necessary.

The log retention obligation sits in Article 26(6): deployers must keep automatically generated logs for at least six months. The worker transparency obligation in Article 26(7) requires that workers and their representatives be informed before deployment at the workplace. Article 26(11) requires that natural persons subject to decisions made with the assistance of a high-risk AI system be informed that they have been subject to such a system.

For public authority deployers, Article 26(8) adds a specific pre-deployment check: before using an Annex III high-risk AI system, public authorities must verify that it is registered in the EU database established under Article 71. Use of an unregistered system is non-compliant.

### Article 47: The Declaration of Conformity

[Article 47(1)](https://artificialintelligenceact.eu/article/47/) requires every provider to draw up a "written, machine-readable, physically or electronically signed" EU declaration of conformity for each high-risk AI system, and to keep it available to national competent authorities for **ten years** after the system is placed on the market or put into service. The declaration must state that the system meets the Section 2 requirements and contain the information set out in Annex V.

By drawing up the declaration, the provider assumes legal responsibility for compliance. Article 47(4) requires the declaration to be kept up to date — meaning it is not a one-time document but a living record that must be updated when the system changes. The ten-year retention window is intentionally long, designed to ensure that regulators can audit systems years after deployment.

---

## IV. The Penalty Structure: Article 99 in Full

[Article 99](https://artificialintelligenceact.eu/article/99/) establishes a three-tier penalty structure. The architecture is similar to GDPR's but calibrated to the severity of different categories of violation.

**Tier 1 (Article 99(3))** addresses violations of the prohibited AI practices under Article 5 — the absolute prohibitions on subliminal manipulation, exploitation of vulnerabilities, social scoring by public authorities, and (with narrow exceptions) real-time remote biometric identification in public spaces. Violations are subject to administrative fines of up to **€35 million or 7% of total worldwide annual turnover for the preceding financial year, whichever is higher**. The "whichever is higher" formulation is deliberate and material: for large companies, global turnover will produce the larger figure in every case.

**Tier 2 (Article 99(4))** covers non-compliance with the obligations of providers, authorised representatives, importers, distributors, deployers, and notified bodies under Articles 16, 22–24, 26, 31, 33–34, and 50. This is the tier that applies to the majority of the obligations examined in Part III of this article — risk management, logging, human oversight, QMS, conformity assessment, and deployer obligations. Fines are up to **€15 million or 3% of total worldwide annual turnover, whichever is higher**.

**Tier 3 (Article 99(5))** addresses supply of incorrect, incomplete, or misleading information to notified bodies or national competent authorities in reply to a request. Fines are up to **€7.5 million or 1% of total worldwide annual turnover, whichever is higher**.

The SME provision in Article 99(6) inverts the comparison rule for small and medium enterprises: where the general rule selects the *higher* of the fixed amount or the percentage, for SMEs the applicable fine shall be "up to the percentages or amount referred to in paragraphs 3, 4 and 5, **whichever thereof is lower**." This is a meaningful protection — for a startup with €2 million in global turnover, Tier 1 exposure becomes €140,000 rather than €35 million. But it does not eliminate liability, and for mid-sized companies the protection diminishes rapidly as turnover grows.

For general-purpose AI (GPAI) model providers — a separate category addressed in Article 51 onwards — [Article 101](https://artificialintelligenceact.eu/article/101/) establishes a parallel fine regime of up to €15 million or 3% of worldwide turnover, whichever is higher, applicable from August 2, 2026.

The regulation also requires that penalties be "effective, proportionate and dissuasive" and that they "take into account the interests of SMEs, including start-ups, and their economic viability." Article 99(7) lists the factors relevant to fine-setting: the nature, gravity, and duration of the infringement; the number of affected persons; whether the infringement was intentional or negligent; the degree of responsibility; any prior fines; financial benefits gained or losses avoided; and the degree of cooperation with authorities. National MSAs are given significant discretion in applying these factors.

---

## V. The Enforcement Architecture

The AI Act creates a layered enforcement architecture that distributes authority between national bodies and EU-level institutions.

### National Market Surveillance Authorities

Each EU Member State was required by August 2, 2025 to designate one or more [market surveillance authorities (MSAs)](https://digital-strategy.ec.europa.eu/en/policies/market-surveillance-authorities-under-ai-act) with responsibility for investigating and enforcing compliance within their jurisdiction. Where a Member State designates multiple MSAs, a single point of contact for cross-border coordination must also be designated.

MSAs have significant investigative powers: they can conduct remote monitoring, access providers' documentation, datasets, and source code, propose joint investigations with the Commission, request corrective measures, and ultimately impose penalties. They must be independent, impartial, and in possession of adequate technical, financial, and human resources. Annual reporting to the Commission is required. The European Data Protection Supervisor serves as the designated MSA for EU institutions, bodies, and agencies.

MSAs operate alongside "notifying authorities" — separate national bodies responsible for accrediting and supervising the notified bodies that conduct third-party conformity assessments. Together, MSAs and notifying authorities constitute the national competent authorities under the Act.

### The European AI Office

The [European AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office) was established within the European Commission as the EU's centre of AI expertise and as the primary enforcement body for general-purpose AI model obligations. It has more than 125 staff organised across six units: Excellence in AI and Robotics; Regulation and Compliance; AI Safety; AI Innovation and Policy Coordination; AI for Societal Good; and AI in Health and Life Science. It is supported by a Scientific Panel of independent AI experts and an Advisory Forum drawing from commercial and civil society stakeholders.

For GPAI models, the AI Office has authority to conduct evaluations, request information and corrective measures from model providers, and apply Article 101 sanctions. In November 2025, the Commission proposed additional amendments — under the "Digital Simplification Package" — that would reinforce the AI Office's powers and centralise oversight of AI systems built on GPAI models. Those amendments remain pending.

### Conformity Assessments

[Article 43](https://artificialintelligenceact.eu/article/43/) specifies how companies must demonstrate that their high-risk AI systems comply with the regulation before placing them on the market. The answer depends on the category of system.

For most Annex III systems (points 2 through 8), the conformity assessment is **self-assessment only** — internal control per Annex VI, with no mandatory third-party involvement. Providers must document their conformity evidence internally, draw up the EU declaration of conformity, and affix CE marking. For biometric identification systems (Annex III, point 1), companies have a choice: self-assessment under Annex VI if they fully apply harmonized standards, or third-party assessment by a notified body under Annex VII if they do not. For Annex I product safety components (Article 6(1) systems), conformity assessment follows the sector-specific procedure required by the applicable harmonization legislation, with AI Act requirements incorporated into that process.

Notified bodies must be accredited by national accreditation bodies, meet the independence and competence requirements of Article 31, and formally registered by the national notifying authority. The [Future of Privacy Forum's conformity assessment guide](https://fpf.org/wp-content/uploads/2025/04/OT-comformity-assessment-under-the-eu-ai-act-WP-1.pdf) provides a useful overview of the procedural steps involved.

### Post-Market Monitoring: Article 72

The regulation's post-market monitoring requirement is often underestimated relative to the pre-market conformity assessment. [Article 72(1)](https://artificialintelligenceact.eu/article/72/) requires providers to "establish and document a post-market monitoring system in a manner that is proportionate to the nature of the AI technologies and the risks of the high-risk AI system." Article 72(2) specifies that the system must "actively and systematically collect, document, and analyse relevant data" — not merely wait passively for incident reports — to evaluate continuous compliance throughout the system's lifetime.

The post-market monitoring plan must form part of the technical documentation required by Annex IV. The Commission was required to adopt an implementing act providing a template for such plans by February 2, 2026. The relationship between Article 72 and Article 12 is functional: the logs generated under Article 12 are one of the primary data sources for the post-market monitoring system. A provider that deploys a system without adequate logging capability cannot operate an adequate post-market monitoring system — the two obligations are structurally linked.

---

## VI. The Standards Gap

One of the most significant practical difficulties facing companies attempting to comply with the EU AI Act today is the absence of finalized harmonized standards.

Under EU law, the mechanism through which technical compliance is normally demonstrated is conformity to a harmonized standard published in the Official Journal of the EU. Such publication confers a legal "presumption of conformity" — companies that fully apply a harmonized standard are presumed to meet the corresponding regulatory requirements without having to independently demonstrate it. For the AI Act, the Commission issued a standardization mandate to the European standards bodies CEN and CENELEC (supported by ETSI for certain technical work), identifying [ten areas requiring harmonized standards](https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation): risk management, data governance, record-keeping, transparency, human oversight, accuracy, robustness, cybersecurity, quality management, and conformity assessment procedures.

As of this writing, **no harmonized standard for AI Act purposes has been published in the Official Journal**. [ISMS.online's analysis](https://www.isms.online/frameworks/iso-42001/iso-42001-harmonised-standards-eu-ai-act-presumption-of-conformity/) confirms the current position: companies cannot rely on any existing standard to trigger presumption of conformity. The development work is being conducted by [CEN-CENELEC Joint Technical Committee 21 (JTC 21)](https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation), which is following an "international first" approach — building on ISO/IEC JTC 1/SC 42 standards where these align with EU requirements.

The most advanced work is **prEN 18286**, the draft standard for AI Quality Management Systems for EU AI Act purposes, which entered public enquiry in October 2025. It is designed to support Article 17 compliance and is expected to draw on ISO/IEC 42001. However, public enquiry is not publication; the path from public enquiry to Official Journal publication involves stakeholder comment, technical resolution, CEN approval, and Commission publication — a process that can take twelve months or more even without complications.

The consequence for companies seeking compliance before August 2, 2026 is that they must demonstrate conformity through direct evidence rather than through presumption. [Skadden's analysis](https://www.skadden.com/insights/publications/2024/10/eu-standardization-supporting-the-artificial-intelligence-act) of the EU standardization process notes that this places a significantly higher evidentiary burden on providers: instead of demonstrating that they comply with a harmonized standard, they must construct and document their own technical case that each regulatory requirement is met.

A parallel development is worth noting. ETSI published [TS 104 008](https://www.etsi.org/newsroom/press-releases/2634-etsi-launches-new-standard-enabling-continuous-compliance-for-dynamic-ai-systems-aligned-with-the-eu-ai-act) in January 2026, introducing what it calls Continuous Auditing-Based Conformity Assessment (CABCA). The standard addresses the fundamental limitation of point-in-time audits for dynamic AI systems — systems that evolve through software updates, model retraining, and new training data. CABCA provides methodology for translating abstract legal requirements into continuously monitored metrics, enabling real-time non-conformity detection and automated evidence collection. It is not a harmonized standard under the AI Act (ETSI standards are not automatically harmonized in the Official Journal sense), but it provides practical technical guidance for companies implementing continuous monitoring under Article 72.

---

## VII. The Edge AI Problem

The EU AI Act was primarily drafted with centralized AI systems in mind: models running on cloud infrastructure, accessed through APIs, with persistent network connectivity and virtually unlimited storage for logs. The regulation's drafters appear to have contemplated a world where logging means writing events to a database server, human oversight means watching a dashboard, and post-market monitoring means analyzing API call logs.

That world does not describe a substantial and growing class of high-risk AI deployments: edge AI systems operating on dedicated hardware in vehicles, aircraft, industrial facilities, critical infrastructure nodes, and autonomous robotic platforms. For these systems, the gap between what the regulation requires and what is technically and operationally feasible is structural rather than incidental.

Consider each core obligation and its edge-specific failure mode:

| Requirement | Regulatory Basis | Edge Failure Mode |
|-------------|-----------------|-------------------|
| Automatic, continuous logging | Art. 12(1) | Edge devices have constrained compute and storage; intermittent connectivity prevents real-time cloud upload; finite local storage means logs may be overwritten |
| Lifetime log continuity | Art. 12(1) | Firmware updates, hardware replacements, and physical damage may break log chain; devices may be physically inaccessible for log retrieval |
| Six-month log retention | Art. 19, Art. 26(6) | Device storage may be insufficient for six months of operational data at required fidelity; connectivity for cloud backup unreliable |
| Tamper-evident logs | Art. 73(6) implicit | Edge devices are physically accessible to end-users and deployers; local storage is modifiable; devices may not have secure enclaves |
| Human oversight "stop button" | Art. 14(4)(e) | Fully autonomous systems operating in remote or disconnected environments may have no real-time human connection; safe halt may require complex operational logic |
| Post-market monitoring | Art. 72 | Performance data distributed across thousands of physically separate devices; aggregation requires connectivity and infrastructure that may not exist |
| Conformity after modification | Arts. 43, 47 | Over-the-air updates may constitute "substantial modifications" requiring new conformity assessments; responsibility and process are unclear |

The regulation does contain a partial acknowledgment of these difficulties. Both [Article 19](https://artificialintelligenceact.eu/article/19/) (provider log retention) and [Article 26(6)](https://artificialintelligenceact.eu/article/26/) (deployer log retention) include the qualifier: logs must be retained "to the extent such logs are under their control." As [analysis by HelpNetSecurity](https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/) notes, this qualifier recognizes that in some deployments — particularly distributed autonomous systems — neither the provider nor the deployer can guarantee physical access to every log on every device at every point in time.

But the qualifier does not eliminate the obligation. As the [Digital Watch Observatory](https://dig.watch/updates/edge-ai-advantages-and-challenges-shaping-the-future-of-digital-systems) has observed in its assessment of edge AI governance generally, "existing regulatory frameworks have been largely designed for centralised systems and do not fully address the complexities of decentralised architectures. Questions regarding liability, accountability, and enforcement remain unresolved." The phrase "to the extent such logs are under their control" is an acknowledgment of a problem, not a solution to it. It creates legal uncertainty about how much of the logging obligation can be discharged when on-device storage is the only available option and the device is in an environment — the bottom of an ocean, the interior of a power station, the cargo hold of an aircraft — where connectivity is absent.

The tamper-evidence problem is particularly acute. [Article 73(6)](https://artificialintelligenceact.eu/article/73/) prohibits providers from "performing any investigation which involves altering the AI system concerned in a way which may affect any subsequent evaluation of the causes of the incident." This creates an implicit requirement that incident-relevant data — including logs — must not be alterable after the fact. For logs stored on cloud infrastructure controlled by the provider, technical controls (immutable storage, cryptographic hashing, blockchain anchoring) are well-understood and readily implementable. For logs stored on edge devices, the same integrity guarantee requires hardware security features — secure enclaves, hardware-rooted key management, physically unclonable functions — that are not present in most current edge AI deployments. Companies deploying AI into critical infrastructure or autonomous vehicles under the assumption that their existing embedded logging approaches satisfy Article 12's requirements should examine that assumption carefully.

The ETSI TS 104 008 CABCA framework offers some guidance here: it was explicitly designed to address the compliance challenges of "dynamic AI systems" and provides methodology for continuous evidence collection from distributed deployments. The [CEN/TS 18264:2026 technical specification on trust services for electronic ledgers](https://standards.iteh.ai/articles/blog/latest-news/electronic-ledger-standards-mar-2026), published by CEN in March 2026, provides policy and security requirements for qualified trust services operating on electronic ledgers including distributed ledgers — and aligns with the eIDAS 2.0 framework of [Regulation (EU) 2024/1183](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183), which creates a legal status for "qualified electronic ledgers" whose records carry a presumption of integrity. For edge AI providers designing compliance architectures, these standards collectively point toward a model in which cryptographic hashes of on-device log data are anchored to qualified ledgers, with personal data stored separately in erasable off-chain storage — a design that satisfies both the AI Act's logging requirements and GDPR's right of erasure simultaneously.

None of this infrastructure is trivial to build. That is precisely the point. The companies that will be prepared for August 2, 2026 are those that began their compliance engineering not with the documentation layer — the QMS spreadsheets, the conformity assessment templates — but with the technical architecture: how events are captured, how logs are stored, how integrity is guaranteed, and how human intervention is made genuinely possible at the operational level of the system.

---

## Conclusion

The EU AI Act is a genuinely demanding piece of legislation. It imposes continuous, technical, documented, and auditable obligations on providers and deployers of high-risk AI systems — obligations that cannot be satisfied through policy documents alone, that require engineering choices made at the design stage, and that must be maintained throughout the operational lifetime of the system. The enforcement architecture — national MSAs with investigative powers, an EU AI Office with 125 staff, penalties reaching 7% of global turnover — has been constructed to make non-compliance costly.

The August 2, 2026 deadline is not distant. For companies that have not yet addressed their Article 12 logging architecture, their Article 9 risk management system, their Article 17 QMS documentation, or their Article 14 human oversight mechanisms, the time available is short. For companies deploying AI into edge environments — autonomous vehicles, drones, industrial robots, critical infrastructure nodes — the technical challenges are substantially more complex than for their cloud-based counterparts, and the absence of finalised harmonized standards means the compliance path must be constructed from primary regulatory text and emerging technical specifications rather than from a ready-made standard.

The regulation is in force. The penalties are real. The deadlines are fixed. The question is not whether companies will eventually have to comply — it is whether they will be compliant before enforcement begins.

---

*Sources: [EUR-Lex — Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) | [artificialintelligenceact.eu](https://artificialintelligenceact.eu/) | [EU AI Act Service Desk — Timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act) | [European AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office) | [Market Surveillance Authorities](https://digital-strategy.ec.europa.eu/en/policies/market-surveillance-authorities-under-ai-act) | [AI Act Standardisation](https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation) | [ETSI TS 104 008](https://www.etsi.org/newsroom/press-releases/2634-etsi-launches-new-standard-enabling-continuous-compliance-for-dynamic-ai-systems-aligned-with-the-eu-ai-act) | [CEN/TS 18264:2026](https://standards.iteh.ai/articles/blog/latest-news/electronic-ledger-standards-mar-2026) | [eIDAS 2.0 — Regulation (EU) 2024/1183](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183) | [FPF Conformity Assessment Guide](https://fpf.org/wp-content/uploads/2025/04/OT-comformity-assessment-under-the-eu-ai-act-WP-1.pdf) | [Schuett — Risk Management in the AI Act](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2E4D5707E65EFB3251A76E288BA74068/S1867299X23000016a.pdf/div-class-title-risk-management-in-the-artificial-intelligence-act-div.pdf) | [HelpNetSecurity — Logging Requirements](https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/) | [ISMS.online — Harmonised Standards](https://www.isms.online/frameworks/iso-42001/iso-42001-harmonised-standards-eu-ai-act-presumption-of-conformity/) | [Skadden — EU Standardisation](https://www.skadden.com/insights/publications/2024/10/eu-standardization-supporting-the-artificial-intelligence-act) | [Digital Watch Observatory](https://dig.watch/updates/edge-ai-advantages-and-challenges-shaping-the-future-of-digital-systems) | [GRC-Docs — Article 99](https://grc-docs.com/blogs/eu-ai-standard/eu-ai-act-article-99-penalties) | [Squire Patton Boggs — AI Act and Automotive](https://www.squirepattonboggs.com/media/uimjelus/ai-act-and-the-auto-sector.pdf) | [McCarter & English — Critical Infrastructure](https://www.mccarter.com/insights/ai-in-critical-infrastructure-markets-are-smart-systems-ai-the-eu-ai-act-says-it-maybe/) | [Inside Privacy — Radio Equipment](https://www.insideprivacy.com/artificial-intelligence/when-is-a-safety-component-of-radio-equipment-a-high-risk-ai-system-under-the-eu-artificial-intelligence-act/) | [Naaia.ai — Post-Market Monitoring](https://naaia.ai/post-market-monitoring-an-important-ai-act-requirement/) | [VeritasChain — Cryptographic Audit Trails](https://veritaschain.org/blog/posts/2025-12-25-eu-ai-act-cryptographic-audit/) | [FireTail — Article 12](https://www.firetail.ai/blog/article-12-and-the-logging-mandate-what-the-eu-ai-act-actually-requires)*
