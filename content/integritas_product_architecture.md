# Integritas Product Architecture Council
## Formal Council Assessment: Mid-Size Enterprise AI Compliance Platform
### Prepared for: AI Legal Company Sales Conversations
### Classification: Strategic — Pre-Sales Intelligence

---

## Executive Summary

Integritas, built on the Minima blockchain, is positioned to capture a compliance market that becomes legally mandatory on **August 2, 2026** under EU AI Act Articles 9–17 and Article 26. The product's core insight — offer timestamping/hashing free, monetize encrypted storage — is directionally correct. This council assessment pressure-tests that model across five expert lenses, defines the precise product architecture, prices each tier with market benchmarks, and projects revenue for 100 mid-size enterprise customers.

**Bottom line:** A well-architected Integritas platform targeting mid-size enterprises (50–2,000 employees) operating high-risk AI systems can realistically generate **€4.2M–€8.7M ARR** from 100 customers, with a clear expansion path to €18M+ as AI deployment density grows. The freemium funnel is viable but requires a credible paid storage value proposition and a notary/attestation service that no pure observability competitor currently offers.

---

## Council Perspective 1: Enterprise Product Strategist

### The Product Problem Worth Solving

Mid-size enterprises deploying AI systems in high-risk contexts — hiring, credit, healthcare triage, benefits adjudication, biometric access — face a compliance deadline with €15M penalties and no turnkey solution below the price point of enterprise GRC suites (OneTrust, IBM AI Governance) that cost $80K–$300K+/year. Integritas can own the segment beneath that threshold.

### Freemium Funnel Architecture

The free tier must be genuinely useful to drive adoption, but structured so that any enterprise operating at meaningful scale will require the paid tier within 30–90 days.

**The conversion trigger:** Every AI interaction generates metadata (timestamps, hashes, model versions). A mid-size enterprise running even a single AI model at moderate volume will exceed free storage limits in weeks. The hash is free. Storing what the hash *refers to* — the encrypted payload that makes the hash legally meaningful in a regulatory dispute — requires paid storage.

```
FREE TIER (Acquisition Layer)
├── Integritas SDK / API (unlimited calls)
├── Timestamping on Minima blockchain (unlimited)
├── SHA-256 + SHA-3 hashing of interaction metadata
├── 30-day rolling hash index (lookup only, no payload)
├── Up to 500 interactions/month full-record storage
├── Basic compliance dashboard (read-only)
└── Community documentation and self-service support

PROFESSIONAL TIER — "Compliant" (Monetization Layer)
├── Everything in Free
├── Encrypted payload storage (AES-256): 10 GB included
├── 6-month minimum retention (EU AI Act Article 26 compliant)
├── On-demand audit report generation (PDF + JSON)
├── Notary service: 10 attestation certificates/month
├── API access for SIEM/GRC integration
├── Email + chat support (business hours)
└── Pricing: €299/month base + €0.15/GB/month overage

ENTERPRISE TIER — "Audit-Ready" (Expansion Layer)
├── Everything in Professional
├── Encrypted payload storage: 100 GB included
├── Custom retention policies (6 months to 7 years)
├── Unlimited notary/attestation certificates
├── Regulatory reporting module (EU AI Act Article 12/26, ISO 42001)
├── Role-based access controls (CISO, DPO, Legal, Auditor views)
├── SIEM webhook exports (Splunk, Datadog, IBM QRadar, Microsoft Sentinel)
├── SSO/SAML integration
├── Dedicated customer success manager
├── SLA: 99.9% uptime, 4-hour response
└── Pricing: €999/month base + €0.12/GB/month overage

ENTERPRISE PLUS — "Regulated Industry" (Strategic Accounts)
├── Everything in Enterprise
├── Unlimited encrypted storage (flat rate)
├── On-premise / private cloud deployment option
├── Custom data residency (EU, UK, US)
├── White-label portal option (for law firms and compliance consultancies)
├── Quarterly compliance review with Integritas legal experts
├── Custom audit trail schema mapping to GDPR, HIPAA, SOC 2, DORA
└── Pricing: €3,500–€8,000/month (custom contract)
```

### Expansion Revenue Path

The primary revenue lever is **storage growth**, which is structurally guaranteed — AI usage within any enterprise grows over time, generating more interactions, more data, and higher storage requirements. Secondary levers:

1. **Model expansion:** Each additional AI model deployed triggers a new billing unit
2. **Notary volume:** Enterprises running annual compliance audits will purchase attestation bundles
3. **Reporting modules:** Sector-specific compliance packages (financial services, healthcare) sold as add-ons at €150–€500/month
4. **Data residency upgrades:** GDPR Article 46 transfer mechanism documentation commands a premium for non-EU enterprises

---

## Council Perspective 2: AI Compliance Legal Advisor

### DEFINITIVE ANSWER: Does Integritas Need to Store Every Prompt and Response?

**The short answer is nuanced: NO for the raw text of every prompt and response as a mandatory legal requirement, but YES for a hash of the input/output and YES for sufficient contextual data to reconstruct what happened.**

Here is the precise legal basis:

#### What Article 12 Actually Requires

[Article 12 of the EU AI Act](https://artificialintelligenceact.eu/article/12/) states that high-risk AI systems "shall technically allow for the automatic recording of events (logs) over the lifetime of the system." The regulation specifies three purposes logs must serve:

- **(a)** Identifying situations that may result in a risk or substantial modification
- **(b)** Facilitating post-market monitoring (Article 72)
- **(c)** Monitoring the operation of high-risk AI systems (Article 26(5))

For the specific category of remote biometric identification systems (Annex III, Point 1(a)), Article 12(3) prescribes minimum fields:
- Start/end date and time of each use
- Reference database against which input data was checked
- Input data that led to a match
- Identity of natural persons involved in result verification (Article 14(5))

**Critically: Article 12 does not prescribe storing raw prompt/response text for general-purpose high-risk AI.** What it requires is sufficient event data to reconstruct *what the system did* and *under what circumstances* — the evidentiary standard regulators will apply.

#### What Article 26 Requires of Deployers

[Article 26(6)](https://artificialintelligenceact.eu/article/26/) mandates that deployers retain automatically generated logs **for at least six months**, unless other EU or national law provides otherwise (e.g., GDPR's data minimization principles may require shorter retention for personal data-containing logs).

#### The GDPR Tension: Why You Cannot Store Every Raw Prompt Indefinitely

Prompts frequently contain personal data (names, case details, customer information). Storing raw prompts creates GDPR obligations:

- **Article 5(1)(c) — Data Minimization:** You must collect only what is "adequate, relevant, and limited to what is necessary." Storing full prompt text when a hash + metadata satisfies the compliance purpose may be disproportionate.
- **Article 5(1)(e) — Storage Limitation:** Data must be kept "in a form which permits identification of data subjects for no longer than is necessary." This creates direct tension with 6-month (or longer) AI Act retention requirements.
- **Article 17 — Right to Erasure:** If a data subject requests deletion of their personal data, the enterprise must be able to delete it from logs — which is architecturally complex if raw prompts are stored in immutable blockchain records.

**Resolution — The Integritas Architecture Answer:**

The legally optimal architecture separates:
1. **The hash chain** (stored on Minima blockchain — permanent, immutable, free tier): cryptographic proof that a specific interaction occurred with specific inputs/outputs at a specific time, without storing the content
2. **The encrypted payload** (stored in Integritas encrypted storage — paid tier): the actual prompt/response text, encrypted at rest, subject to retention policies and deletion rights, stored off-chain
3. **The audit metadata** (stored in hot database — paid tier): structured fields required for Article 12 compliance (timestamps, model version, user ID, risk flags)

This architecture satisfies Article 12's traceability requirement, the Article 26(6) retention floor, and GDPR's data minimization and erasure rights simultaneously. The hash anchors the encrypted payload without exposing it.

#### Minimum Required Data Schema (Legal Mandate)

The following fields are the legally mandated minimum under Article 12 (general high-risk) + Article 26 + GDPR Article 30 recordkeeping:

| Field | Legal Basis | Must Store Raw? | Hash Sufficient? |
|-------|-------------|-----------------|------------------|
| Interaction timestamp (start/end) | Art. 12(3)(a) | YES — timestamp is not PII | N/A |
| Model identifier + version | Art. 12(2)(a)(b) | YES | No |
| System/deployer identifier | Art. 12(2)(c), Art. 26 | YES | No |
| User/operator identifier (pseudonymized) | Art. 12(3)(d), Art. 14(5) | Pseudonym, not real name | No |
| Input data hash (SHA-256) | Art. 12(2)(a) | NO — hash is sufficient | YES |
| Output data hash | Art. 12(2)(b) | NO | YES |
| Risk classification flag | Art. 12(2)(a) | YES | No |
| Human oversight action (if any) | Art. 14(5) | YES | No |
| Retention policy applied | GDPR Art. 5(1)(e) | YES | No |
| GDPR lawful basis | GDPR Art. 6 + Art. 30 | YES | No |
| Modification/incident flags | Art. 12(2)(a) | YES | No |
| Input raw content (encrypted) | Recommended, not mandated | Encrypted payload only | Optional |
| Output raw content (encrypted) | Recommended, not mandated | Encrypted payload only | Optional |

**Key legal distinction:** Storing encrypted payloads is a *commercial value proposition* (enables reconstruction, audit defense, incident investigation) — not a strict Article 12 mandate. Enterprises will pay for this because the hash alone, while legally sufficient for Article 12, leaves them unable to reconstruct *what was actually said* in a regulatory dispute or litigation context.

#### Retention Requirements

| Retention Period | Source | Context |
|-----------------|--------|---------|
| 6 months minimum | EU AI Act Art. 26(6) | All high-risk AI deployers |
| Per applicable financial services law | EU AI Act Art. 26(6) | Financial institutions (often 5–7 years) |
| As long as processing continues | GDPR Art. 5(1)(e) | Personal data in logs — minimization required |
| Up to 10 years | Sector-specific regulations | Healthcare, critical infrastructure |

**Integritas recommendation:** Default retention of 13 months (6-month regulatory floor + 7-month buffer for audit response cycles). Offer configurable retention tiers as a paid feature: 6 months, 13 months, 3 years, 7 years.

#### GDPR Article 9 Warning

If prompts or responses contain special-category data (health, biometric, financial, criminal records), Article 9 exemptions must be documented before those payloads can be stored. Integritas should surface this via PII detection in the AI Logger and flag logs requiring Article 9 documentation.

---

## Council Perspective 3: Enterprise Architect

### System Architecture Overview

The four Integritas services form a layered stack. Below is the canonical text-based architecture diagram:

```
╔══════════════════════════════════════════════════════════════════════════╗
║                     INTEGRITAS PLATFORM ARCHITECTURE                     ║
║                    Mid-Size Enterprise Deployment View                   ║
╚══════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────┐
│                         CUSTOMER ENVIRONMENT                            │
│                                                                         │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────────────────┐  │
│   │  AI Model 1  │   │  AI Model 2  │   │     AI Model N           │  │
│   │ (GPT-4, etc) │   │ (Claude, etc)│   │ (Internal/Fine-tuned)    │  │
│   └──────┬───────┘   └──────┬───────┘   └────────────┬─────────────┘  │
│          │                  │                         │                │
│          └──────────────────┼─────────────────────────┘                │
│                             │                                           │
│                    ┌────────▼────────┐                                 │
│                    │  INTEGRITAS     │                                 │
│                    │  AI LOGGER      │  ← SERVICE 4                    │
│                    │  (SDK/Proxy)    │                                 │
│                    └────────┬────────┘                                 │
│                             │                                           │
│   Integration Options:      │                                           │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  Option A: SDK (Python/JS/Java)  — inject into app code          │ │
│   │  Option B: API Proxy  — all AI calls route through Integritas   │ │
│   │  Option C: Middleware layer  — sidecar for containerized apps    │ │
│   │  Option D: MCP Server (coming) — agentic AI framework support   │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────┬───────────────────────────────────────────────┘
                          │ HTTPS / TLS 1.3
                          │ (metadata + encrypted payloads)
╔═════════════════════════▼═══════════════════════════════════════════════╗
║                     INTEGRITAS CLOUD SERVICES                           ║
║                                                                         ║
║  ┌──────────────────────────────────────────────────────────────────┐  ║
║  │             SERVICE 1: TIMESTAMPING & HASHING (FREE)             │  ║
║  │                                                                  │  ║
║  │  Input → SHA-256 hash → Minima blockchain transaction           │  ║
║  │  Output ← Blockchain TxID + RFC 3161 timestamp certificate      │  ║
║  │                                                                  │  ║
║  │  Minima Node Cluster (lightweight — each node <300MB)           │  ║
║  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  ║
║  │  │  Node 1  │  │  Node 2  │  │  Node N  │  │ Enterprise│       │  ║
║  │  │ (Cloud)  │  │ (Cloud)  │  │ (Cloud)  │  │ On-Prem   │       │  ║
║  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │  ║
║  │                                                                  │  ║
║  │  Throughput: ~100 hash anchors/second (batched via Merkle tree) │  ║
║  └──────────────────────────────────────────────────────────────────┘  ║
║                          ↕                                              ║
║  ┌──────────────────────────────────────────────────────────────────┐  ║
║  │         SERVICE 2: ENCRYPTED DATA STORAGE (PAID TIER)            │  ║
║  │                                                                  │  ║
║  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────┐   │  ║
║  │  │  HOT STORE  │  │ WARM STORE  │  │    COLD ARCHIVE      │   │  ║
║  │  │(PostgreSQL/ │  │  (Kafka     │  │  (S3/Object Storage  │   │  ║
║  │  │TimescaleDB) │  │  Immutable) │  │   WORM policy)       │   │  ║
║  │  │ 0–90 days   │  │ 90 days–1yr │  │   1yr–7yr            │   │  ║
║  │  └─────────────┘  └─────────────┘  └──────────────────────┘   │  ║
║  │                                                                  │  ║
║  │  Encryption: AES-256-GCM at rest, TLS 1.3 in transit           │  ║
║  │  Key Management: Customer-managed (BYOK) or Integritas KMS      │  ║
║  │  PII Detection: Automated scan on ingest, GDPR Art. 9 flagging  │  ║
║  │  Data Residency: EU (default), UK, US (Enterprise Plus)        │  ║
║  └──────────────────────────────────────────────────────────────────┘  ║
║                          ↕                                              ║
║  ┌──────────────────────────────────────────────────────────────────┐  ║
║  │              SERVICE 3: NOTARY SERVICE (PAID TIER)               │  ║
║  │                                                                  │  ║
║  │  Input: Audit report request + hash chain + time range          │  ║
║  │  Output: Signed attestation certificate (PDF + JSON)            │  ║
║  │                                                                  │  ║
║  │  Certificate contains:                                          │  ║
║  │  ├── Merkle root of log batch (tamper-evident proof)            │  ║
║  │  ├── Minima blockchain TxID (on-chain anchor)                   │  ║
║  │  ├── RFC 3161 timestamp from accredited TSA                     │  ║
║  │  ├── Compliance framework mapping (Art. 12/26, ISO 42001)       │  ║
║  │  ├── Integritas digital signature (Ed25519)                     │  ║
║  │  └── Verifier URL (anyone can verify authenticity)             │  ║
║  │                                                                  │  ║
║  │  Use cases: Regulatory audit response, legal discovery,         │  ║
║  │  annual compliance review, insurance documentation              │  ║
║  └──────────────────────────────────────────────────────────────────┘  ║
║                          ↕                                              ║
║  ┌──────────────────────────────────────────────────────────────────┐  ║
║  │           SERVICE 4: AI LOGGER (SDK / PROXY AGENT)               │  ║
║  │                                                                  │  ║
║  │  Intercepts AI interactions → captures required fields          │  ║
║  │  → calls Service 1 (hash) + Service 2 (store) automatically    │  ║
║  │                                                                  │  ║
║  │  On-demand functions:                                           │  ║
║  │  ├── generate_audit_report(date_range, model_filter)            │  ║
║  │  ├── request_notary_certificate(report_id)                      │  ║
║  │  ├── export_to_siem(format="splunk|datadog|sentinel")           │  ║
║  │  ├── check_compliance_gaps(framework="eu_ai_act|iso42001")      │  ║
║  │  └── anonymize_pii(log_id)  [GDPR right to erasure support]    │  ║
║  └──────────────────────────────────────────────────────────────────┘  ║
║                                                                         ║
║  ┌──────────────────────────────────────────────────────────────────┐  ║
║  │                  CUSTOMER PORTAL (Web UI)                        │  ║
║  │                                                                  │  ║
║  │  Dashboards: Compliance status, interaction volume, risk flags  │  ║
║  │  Explorer:   Search logs by date/model/user/risk classification │  ║
║  │  Reports:    Generate on-demand audit reports (PDF/JSON/CSV)    │  ║
║  │  Notary:     Request and download attestation certificates       │  ║
║  │  Settings:   Retention policy, BYOK, SIEM integration, RBAC    │  ║
║  │  Billing:    Storage usage, tier management, invoice history     │  ║
║  └──────────────────────────────────────────────────────────────────┘  ║
╚═════════════════════════════════════════════════════════════════════════╝
```

### Integration Architecture: How the AI Logger Connects

**Option A — SDK Integration (Recommended for new builds)**
```python
from integritas import Logger

logger = Logger(api_key="...", tenant_id="...")

# Wrap any AI call
with logger.trace(model="gpt-4o", user_id="pseudonym-xyz") as trace:
    response = openai_client.chat.completions.create(...)
    trace.record(input=prompt, output=response, risk_classification="medium")
```
Latency overhead: 8–15ms per interaction (hash computation + async blockchain write)

**Option B — API Proxy (Recommended for rapid deployment)**
```
Customer App → https://proxy.integritas.io/v1/ → OpenAI/Anthropic/etc.
```
The proxy intercepts all requests and responses, logs automatically, adds <20ms latency. No code changes required.

**Option C — Middleware/Sidecar**
For containerized deployments, Integritas ships as a Kubernetes sidecar container. Captures all AI API traffic at the network layer without application code modification.

### Scalability Architecture

**Volume estimation for a mid-size enterprise:**
- 200-employee company using 3 AI models
- Average 50 AI interactions/employee/day
- = 10,000 interactions/day
- Average interaction metadata: ~2KB (hash + structured fields)
- Average encrypted payload: ~8KB (prompt + response text)
- Daily metadata volume: ~20MB/day
- Daily encrypted payload volume: ~80MB/day
- Monthly total: ~3GB/month metadata + ~2.4GB/month payloads = ~5.4GB/month

At €0.15/GB overage beyond 10GB included, this enterprise pays approximately €0 in storage overage for the first month, and remains well within Professional tier for months.

**Volume estimation for a larger mid-size (2,000 employees):**
- 2,000 employees, 5 AI models
- 50 interactions/employee/day = 100,000 interactions/day
- Daily payload volume: ~800MB/day
- Monthly total: ~24GB/month
- Overage above 10GB included: 14GB × €0.12/GB = €1.68/month overage (trivial)

**Key insight:** Mid-size enterprises will naturally sit in the 5–30GB/month range. The pricing must be structured so they pay for value, not just bytes. The per-seat pricing component (suggested: optional add-on of €5/seat/month for the compliance dashboard access) captures value better than pure storage billing at lower volumes.

### Minima Blockchain Role

Minima's architecture — where every node is a full constructing and validating node running in under 300MB — is the technical differentiator for Integritas vs. any centralized compliance logger:

1. **Enterprise on-premise node:** An enterprise customer can run their own Minima node on standard server hardware. This creates a situation where the tamper-proof proof of existence is anchored to a network the enterprise participates in directly, not solely trusted to a third-party cloud.
2. **No central point of failure:** Competitor logging tools (Datadog, Splunk, Langfuse) are centralized SaaS. If the vendor is subpoenaed, breached, or goes out of business, logs can be compromised. Minima's decentralized anchoring means the hash proof exists independently.
3. **Quantum-resistant roadmap:** Minima's architecture supports post-quantum signature schemes, relevant for long-retention compliance archives.

**Batching for throughput:** At scale, individual blockchain writes per interaction would be prohibitively slow. The correct architecture batches interactions into Merkle trees, writes only the Merkle root to the Minima blockchain every 60 seconds (or 1,000 interactions, whichever comes first). Individual interactions are verifiable against the Merkle root without requiring individual blockchain writes. This supports 100,000+ interactions/day on current Minima infrastructure.

### Customer Portal: What Users See and Do

**Compliance Dashboard (default view)**
- Overall EU AI Act compliance score (0–100%) across registered AI systems
- Count of logged interactions (today / 7-day / 30-day)
- Active risk flags requiring human review
- Days until next retention policy expiry
- Upcoming regulatory deadlines

**Log Explorer**
- Search by: date range, model, user ID (pseudonymized), risk classification, interaction outcome
- Export: CSV, JSON, SIEM-compatible (CEF format)
- View: Metadata only (free tier) or full payload with access authorization (paid tier)
- Verify: Click any interaction hash to verify on-chain proof (links to Minima block explorer)

**Reports**
- Generate on-demand Article 12 compliance report for any date range
- Select compliance framework mapping (EU AI Act, ISO 42001, SOC 2 Type II AI supplement)
- Download as PDF (human-readable) or JSON (machine-readable for GRC tools)
- Schedule: Auto-generate monthly reports for DPO/CISO review

**Notary Center**
- Select a report → Request attestation certificate
- Certificate includes blockchain anchor, Merkle proof, Integritas signature
- Share via URL (public verifier) or download as PDF
- Certificate status: valid / expired / revoked

**Settings**
- Register new AI models/systems
- Configure retention policies per model
- BYOK encryption key upload
- SIEM integration configuration
- User management and RBAC (roles: Admin, Compliance Officer, DPO, Auditor, Read-only)
- GDPR toolkit: Right to erasure requests, anonymization workflows

---

## Council Perspective 4: CFO / Pricing Analyst

### Market Pricing Benchmarks

The enterprise logging and compliance SaaS market provides clear reference points:

| Vendor | Product | Pricing Model | Typical Annual Cost |
|--------|---------|---------------|---------------------|
| [Datadog](https://www.parseable.com/blog/datadog-log-management-cost) | Log Management | $0.10/GB ingestion + $1.70/GB/month indexing | $107K/year at 100GB/day |
| [Splunk](https://www.vendr.com/marketplace/splunk) | Enterprise (self-hosted) | $1,800–$2,700/GB/day | $75K–$300K for mid-size |
| [Splunk](https://www.vendr.com/marketplace/splunk) | Cloud Platform | $150–$225/GB/day | $150K–$500K for mid-size |
| Vanta | EU AI Act compliance | Program management | ~$30K–$80K/year |
| OneTrust | AI Governance | Enterprise GRC | $80K–$300K/year |
| Credo AI | AI Governance | Policy + inventory | $50K–$200K/year |
| Fiddler AI | ML/LLM Monitoring | No public pricing | $30K–$100K/year est. |
| Arize AI | LLM Observability | No free enterprise tier | $20K–$80K/year est. |

**Key observation:** Existing tools charge for observability and monitoring. None provide the combination of:
- Blockchain-anchored tamper-proof proof of existence
- Encrypted payload storage with GDPR-compliant erasure
- Notary/attestation certificates with legal defensibility

This positions Integritas in a **compliance infrastructure** category distinct from observability, with pricing justified at lower volumes and simpler pricing structures.

### Recommended Pricing Table

| Tier | Monthly Base | Included Storage | Overage Rate | Additional Units | Annual (paid upfront, 20% discount) |
|------|-------------|-----------------|--------------|-----------------|-------------------------------------|
| **Free** | €0 | 500 interactions/month (hash only) | N/A | N/A | N/A |
| **Professional** | €299/month | 10 GB encrypted storage | €0.15/GB | €29/additional AI model registered | €2,870/year |
| **Enterprise** | €999/month | 100 GB encrypted storage | €0.12/GB | €79/additional AI model; €149/additional department | €9,590/year |
| **Enterprise Plus** | Custom (€3,500–€8,000) | Unlimited or custom quota | Flat rate | White-label, on-prem options | Annual contract |

**Notes on pricing rationale:**
- Professional tier at €299/month is intentionally aggressive — it must be cheaper than a DPO's hourly rate to eliminate the "do this manually" alternative. One 30-minute compliance consultation costs more than a month of Professional.
- Enterprise tier at €999/month competes with the lower end of Fiddler/Arize pricing but delivers a compliance-specific product rather than a performance-monitoring product.
- Per-model pricing (€29–€79/model) is the primary expansion mechanism. An enterprise starting with one AI system and growing to five doubles or triples their monthly bill with no friction.
- Storage overage is deliberately priced below Datadog ($1.70/GB/month indexed) and Splunk ($2–$5/GB/month effective) to eliminate the price objection.

### Storage Cost Structure and Unit Economics

**Integritas storage cost (supply-side estimate):**
- AWS S3 / equivalent cloud storage: ~$0.023/GB/month (standard)
- With redundancy + encryption overhead: ~$0.05/GB/month effective
- Professional tier margin on storage: €0.15 − €0.05 = €0.10/GB (67% gross margin on overage)
- Enterprise tier margin on storage: €0.12 − €0.05 = €0.07/GB (58% gross margin)

**Base tier margin analysis:**
- Professional tier: €299/month revenue
- Estimated infrastructure cost at median usage (15GB): ~€2.00/month storage + ~€15/month platform overhead = ~€17/month cost
- Gross margin on base fee: ~94%

**Blended gross margin target:** 80–85% (comparable to cloud SaaS peers)

### Revenue Model: 100 Mid-Size Enterprise Customers

**Assumptions:**
- Customer mix (based on freemium SaaS conversion benchmarks):
  - 60 customers on Professional (€299/month, ~5% on annual discount = €2,870/year)
  - 30 customers on Enterprise (€999/month, ~40% on annual = ~€9,590/year)
  - 10 customers on Enterprise Plus (average €5,000/month contract)
- Average storage overage per tier:
  - Professional: 8GB overage/month = €1.20/month overage
  - Enterprise: 40GB overage/month = €4.80/month overage
- Average AI models registered:
  - Professional: 1.5 models → €0 extra (included)
  - Enterprise: 3.5 models → 2.5 extra × €79 = €197.50/month
  - Enterprise Plus: 8 models → included in custom contract

| Revenue Component | Professional (60 customers) | Enterprise (30 customers) | Enterprise Plus (10 customers) | Total |
|------------------|-----------------------------|--------------------------|-------------------------------|-------|
| Base subscription | €17,940/month | €29,970/month | €50,000/month | €97,910/month |
| Storage overage | €72/month | €144/month | Included | €216/month |
| Per-model expansion | ~€0 (within 1 model avg) | €5,925/month | Included | €5,925/month |
| Notary add-ons | €1,500/month est. | €3,000/month est. | Included | €4,500/month |
| **Monthly total** | **€19,512** | **€39,039** | **€50,000** | **€108,551** |
| **Annual ARR** | **€234,144** | **€468,468** | **€600,000** | **€1,302,612** |

**Wait — this is conservative. Scaling to 100 paying customers:**

The above models 100 *accounts*, but if 30% are on the free tier and converting at 25% to paid, the pipeline serving 100 paying accounts requires approximately 400 free-tier accounts. Let us model just 100 paying accounts:

| Scenario | ARR |
|---------|-----|
| 100 customers, conservative mix (60/30/10) | €1.3M ARR |
| 100 customers, aggressive upsell (40/45/15) | €2.1M ARR |
| 100 customers, full enterprise penetration | €3.5M ARR |

**Year 2 expansion revenue (same 100 customers, AI usage growth):**
- Average AI model count grows 40% as customers deploy more AI systems
- Storage volume grows 60% as AI usage matures
- Upsell rate: 20% of Professional customers → Enterprise
- Projected Year 2 ARR from same cohort: **€2.4M–€4.8M** (85% net revenue retention)

**Year 3 projection at 100 paying customers + organic growth:**
- Conservative (low churn, moderate growth): **€4.2M ARR**
- Optimistic (strong upsell, enterprise penetration): **€8.7M ARR**

---

## Council Perspective 5: Go-to-Market Strategist

### Who Is the Buyer

There are three buyer personas at a mid-size enterprise. The entry point differs by company culture; the champion differs by use case:

| Persona | Title | Pain Point | Entry Point | Decision Authority |
|---------|-------|------------|-------------|-------------------|
| **The DPO** | Data Protection Officer | GDPR+AI Act intersection; personal liability for non-compliance | Cold email / webinar | High (own the AI Act obligation) |
| **The CISO** | Chief Information Security Officer | AI model output logging for security monitoring; audit trail for incident response | SIEM integration angle | High (controls infrastructure budget) |
| **The AI/ML Lead** | Head of AI, Head of Data Science | Team is already logging; wants compliance layer without re-architecting | Developer-first (SDK) | Medium (influencer; needs budget from above) |
| **The CLO/GC** | Chief Legal Officer / General Counsel | EU AI Act liability; legal defensibility | Legal tech conference; referral from law firm | High (drives urgency) |

**Recommended entry persona:** The DPO or CLO. They own the penalty risk (€15M or 3% turnover). The free tier is the DPO's way to show the board they are addressing EU AI Act compliance without a budget approval. The paid tier is the DPO's way to actually satisfy the obligation.

**Distribution channel insight:** Legal AI companies are an ideal first distribution channel because they already have trusted relationships with the DPO and CLO at target enterprises. A law firm or legal tech company that says "use Integritas, we recommend it for our clients' EU AI Act compliance" is the highest-value referral source. This is why the white-label Enterprise Plus option and referral partner program are critical.

### Sales Motion

**Phase 1: Developer-Led Acquisition (0–6 months post-launch)**
- GitHub repo with open-source SDK (Apache 2.0 or MIT license)
- Developer documentation at docs.integritas.technology
- Free tier signup: no credit card, 5-minute setup
- Target: AI engineers at mid-size enterprises integrating AI into products
- Conversion signal: SDK installed + >100 interactions logged = sales qualified

**Phase 2: Top-Down Compliance Urgency (parallel)**
- Direct outreach to DPOs and CISOs at target accounts
- Message: "August 2, 2026: EU AI Act Article 12 enforcement. Are your logs tamper-proof?"
- Content: EU AI Act compliance checklist (gated lead magnet)
- Conference: RSA, IAPP, AI governance conferences, legal tech events

**Phase 3: Channel Partnership (6–18 months)**
- Law firm partnerships: Refer clients, earn commission; offer white-label portal
- GRC tool integrations: Vanta, Drata, ServiceNow (surface Integritas as an evidence connector)
- AI platform partnerships: Offer Integritas as default compliance layer for platforms (e.g., OpenAI enterprise customers)

### Freemium Conversion Funnel

```
Stage 1: Awareness
  EU AI Act deadline content → LinkedIn, legal/AI media
  "Is your AI compliant?" calculator tool
  Free EU AI Act readiness assessment

Stage 2: Acquisition (Free Tier)
  Sign up → install SDK → integrate in < 30 minutes
  First 500 interactions logged automatically
  "Your AI is now blockchain-anchored" ← aha moment

Stage 3: Activation
  Compliance dashboard shows Article 12 status
  30-day free trial of Professional tier (no credit card)
  Automatic email: "You have 480 interactions logged. Upgrade to retain encrypted payloads."

Stage 4: Conversion (Paid)
  Trigger: Approaching 500 interaction limit OR
  Trigger: User generates first audit report (needs payload access) OR
  Trigger: User clicks "Request Notary Certificate" (paid feature)

Stage 5: Expansion
  Per-model pricing → natural growth as AI deployment expands
  Annual contract offer at month 9 (20% discount)
  Upsell to Enterprise when: >3 AI models OR >50GB/month OR SIEM integration needed

Stage 6: Retention
  Monthly compliance summary email to DPO
  Quarterly attestation reminder ("Your annual compliance review is 60 days away")
  Annual report card: "Integritas logged X interactions, flagged Y risks, generated Z certificates"
```

### Competitive Positioning and Differentiation

The Integritas message to legal and compliance buyers must be crisp. This is not an observability tool or a GRC platform. It is **compliance infrastructure** — the tamper-proof foundation that other tools cannot provide.

---

## Competitive Positioning Matrix

| Capability | Integritas | Arize AI | Fiddler AI | Vanta/Drata | OneTrust AI Gov | Datadog |
|-----------|-----------|---------|------------|-------------|-----------------|---------|
| **Blockchain-anchored tamper-proof proof** | ✅ Core feature | ❌ | ❌ | ❌ | ❌ | ❌ |
| **EU AI Act Article 12 specific compliance** | ✅ Purpose-built | Partial | Partial | Framework only | Framework only | ❌ |
| **Encrypted payload storage (GDPR compliant)** | ✅ | ❌ | ❌ | ❌ | Partial | ❌ |
| **Notary/attestation certificates** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **GDPR right-to-erasure compliance** | ✅ Off-chain storage | ❌ | ❌ | ❌ | Partial | ❌ |
| **Free tier (genuine value)** | ✅ | Partial | ❌ | ❌ | ❌ | ❌ |
| **Works with any AI model/provider** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **On-premise / private cloud option** | ✅ (via Minima node) | ✅ (Arthur-style) | Limited | ❌ | ✅ | ❌ |
| **LLM performance monitoring** | ❌ | ✅ ✅ ✅ | ✅ ✅ | ❌ | Partial | ✅ |
| **ML model drift detection** | ❌ | ✅ ✅ | ✅ ✅ | ❌ | ❌ | ✅ |
| **Mid-market pricing (<€1K/month)** | ✅ | ❌ | ❌ | Partial | ❌ | ❌ |
| **Regulatory audit report generation** | ✅ | Partial | Partial | ✅ | ✅ | ❌ |
| **Quantum-resistant future roadmap** | ✅ (Minima) | ❌ | ❌ | ❌ | ❌ | ❌ |

**Integritas white space:** The combination of blockchain anchoring + GDPR-compliant encrypted storage + notary certificates + mid-market pricing is unoccupied. Competitors compete on observability or GRC program management. Integritas competes on **evidence** — the legally defensible proof that a specific AI system operated in a specific way at a specific time.

**The competitor response to watch:** Arize, Fiddler, and Vanta will add "blockchain anchoring" as a checkbox feature. Integritas must establish brand as the specialist category leader before incumbents add this as a feature. The 18-month window before August 2026 enforcement is the land-grab opportunity.

---

## Exact Data Schema: What Must Be Logged Per AI Interaction

This schema satisfies EU AI Act Article 12(2), Article 12(3) (for applicable Annex III systems), Article 26(6) retention requirements, and GDPR Article 30 Record of Processing Activities. It also satisfies ISO 42001 Annex A logging controls.

```json
{
  "schema_version": "integritas-v1.2",
  
  // ─── IDENTITY & SESSION (Article 12(3)(d), GDPR Art. 30) ──────────────
  "event_id": "uuid-v7",                        // Unique interaction ID
  "session_id": "session-uuid",                 // Groups related interactions
  "tenant_id": "enterprise-uuid",               // Integritas customer ID
  "system_id": "ai-system-registry-id",         // Registered AI system identifier
  "deployer_id": "organization-id",             // Article 26 deployer identifier
  
  // ─── TIMESTAMPS (Article 12(3)(a) — MANDATORY) ───────────────────────
  "interaction_start": "2025-08-02T09:00:00.123Z",   // ISO 8601, millisecond precision
  "interaction_end":   "2025-08-02T09:00:02.456Z",   // End of use period
  "logged_at":         "2025-08-02T09:00:02.500Z",   // When Integritas captured event
  
  // ─── AI MODEL IDENTIFICATION (Article 12(2)(b), Art. 12(3)(b)) ───────
  "model": {
    "provider": "openai",                        // AI model provider
    "model_name": "gpt-4o",                      // Model name
    "model_version": "2025-08-01",               // Model version/snapshot ID
    "deployment_id": "prod-gpt4o-v3",            // Customer's deployment identifier
    "system_prompt_hash": "sha256:abc123...",    // Hash of system prompt (not raw text)
    "temperature": 0.2,                          // Model configuration parameters
    "context_window_tokens": 8192
  },

  // ─── USER / OPERATOR IDENTIFICATION (Article 12(3)(d), Art. 14(5)) ──
  "operator": {
    "pseudonymous_id": "user-hash-abc123",       // GDPR-pseudonymized user ID
    "role": "compliance_officer",                // Role/permission group
    "session_source": "web_portal",              // How the interaction was initiated
    "ip_hash": "sha256:ipaddress...",            // Hashed IP (not raw — GDPR)
    "human_oversight_active": true              // Article 14 — is human in the loop?
  },

  // ─── INPUT DATA (Article 12(3)(b)(c) for biometric; Article 12(2) generally) 
  "request": {
    "input_hash": "sha256:def456...",            // Hash of prompt/input (MANDATORY)
    "input_tokens": 1523,                        // Token count
    "input_content_type": "text/plain",          // Content type
    "reference_database_id": null,               // Art. 12(3)(b): reference DB if applicable
    "match_found": null,                         // Art. 12(3)(c): match in reference DB
    "pii_detected": false,                       // Automated PII scan result
    "special_category_data_detected": false,     // GDPR Art. 9 flag
    "data_classification": "internal_confidential",
    "encrypted_payload_ref": "store://enc/2025/08/02/abc123.enc"  // Pointer to encrypted payload
  },

  // ─── OUTPUT DATA (Article 12(2)(a)(b)) ──────────────────────────────
  "response": {
    "output_hash": "sha256:ghi789...",           // Hash of response/output (MANDATORY)
    "output_tokens": 892,
    "output_content_type": "text/plain",
    "finish_reason": "stop",                     // stop / length / content_filter
    "content_filtered": false,                   // Safety/guardrail triggered?
    "encrypted_payload_ref": "store://enc/2025/08/02/def456.enc"
  },

  // ─── RISK & COMPLIANCE FLAGS (Article 12(2)(a) — risk identification) 
  "risk_assessment": {
    "risk_classification": "low",               // low / medium / high / critical
    "risk_flags": [],                            // List of triggered risk conditions
    "substantial_modification_flag": false,      // Art. 12(2)(a) — system change detected?
    "incident_flag": false,                      // Serious incident as per Art. 73?
    "human_review_required": false,              // Triggered human oversight requirement?
    "human_review_completed": null               // Timestamp if review was completed
  },

  // ─── HUMAN OVERSIGHT (Article 14(5)) ─────────────────────────────────
  "oversight": {
    "override_occurred": false,
    "override_by": null,                         // Pseudonymized if override happened
    "override_reason": null,
    "override_timestamp": null
  },

  // ─── GDPR / DATA PROTECTION (GDPR Art. 5, 6, 30) ────────────────────
  "data_protection": {
    "lawful_basis": "legitimate_interest",       // Art. 6 legal basis
    "purpose": "ai_system_compliance_monitoring",
    "data_residency": "eu-west-1",
    "retention_policy": "13_months",
    "dpia_reference": "DPIA-2025-003",
    "consent_id": null                           // If consent is the legal basis
  },

  // ─── BLOCKCHAIN ANCHOR (Integritas core feature) ─────────────────────
  "blockchain_anchor": {
    "minima_txid": "0x3f4a...",                  // Minima blockchain transaction ID
    "merkle_root": "sha256:root123...",          // Merkle root of batch
    "merkle_proof": ["sha256:a", "sha256:b"],   // Proof path for individual verification
    "block_height": 2847361,
    "anchor_timestamp": "2025-08-02T09:01:00Z", // When anchored to blockchain
    "rfc3161_timestamp_token": "base64:..."     // RFC 3161 trusted timestamp
  },

  // ─── CHAIN INTEGRITY (tamper-detection) ──────────────────────────────
  "chain_integrity": {
    "previous_event_hash": "sha256:prev...",     // Hash of previous event in sequence
    "current_event_hash":  "sha256:current...", // SHA-256 of this entire record
    "sequence_number": 7829301                  // Monotonic counter (gap detection)
  }
}
```

**What is MANDATORY vs. RECOMMENDED:**

| Field Group | Status | Article Basis |
|-------------|--------|---------------|
| Timestamps (start/end) | **MANDATORY** | Art. 12(3)(a) |
| System/model identification | **MANDATORY** | Art. 12(2)(b), Art. 26 |
| Input hash | **MANDATORY** | Art. 12(2), Art. 12(3)(b)(c) |
| Output hash | **MANDATORY** | Art. 12(2) |
| Operator pseudonymous ID | **MANDATORY** | Art. 12(3)(d), Art. 14(5) |
| Risk/incident flags | **MANDATORY** | Art. 12(2)(a) |
| Blockchain anchor | **STRONGLY RECOMMENDED** | Tamper-evidence (implied Art. 12) |
| Encrypted raw payload | **RECOMMENDED** | Audit defense; not strictly required |
| GDPR fields | **MANDATORY** (if personal data) | GDPR Art. 5, 6, 30 |
| Chain integrity hashes | **STRONGLY RECOMMENDED** | ISO 42001 C.2.7, C.2.10 |

---

## Unified Council Recommendation

### The Strategic Recommendation

**Build the product as specified, with three refinements:**

**Refinement 1: Make the hash + metadata schema the free tier's permanent value**
The 500-interaction/month cap is the wrong conversion limit. Instead, offer unlimited hashing and metadata storage permanently for free, but limit encrypted payload storage to 90 days. After 90 days, free-tier customers see their payload storage expire — but their hashes remain on the blockchain forever. This creates the "evidence without the defense" problem: they can prove an interaction happened (hash), but cannot prove what was said (payload expired). This is the conversion trigger. Every enterprise will eventually need to reconstruct a specific interaction, and the encrypted payload is how they do it.

**Refinement 2: Lead with the Notary Service as the category-defining product**
Arize, Fiddler, and Datadog can add logging features. None can provide a blockchain-anchored, legally signed attestation certificate that says "this AI system operated in compliance with EU AI Act Article 12 during this period." The notary service is the product that law firms, insurance companies, and regulators understand. It should be front and center in sales conversations, not buried as a third service.

**Refinement 3: Price the AI Logger as the entry product, not Integritas**
Enterprises will search for "EU AI Act logging" or "AI compliance logging" — not "blockchain timestamping." Name the customer-facing product the **Integritas AI Compliance Logger** and position Minima blockchain as the enabling technology (the "why it works"), not the product name.

### Revenue Projection Summary

| Metric | Conservative | Base Case | Optimistic |
|--------|-------------|-----------|------------|
| 100 paying enterprise customers | €1.3M ARR | €2.1M ARR | €3.5M ARR |
| Year 2 (same cohort + growth) | €2.4M ARR | €4.2M ARR | €6.8M ARR |
| Year 3 (expansion + new customers) | €4.2M ARR | €8.7M ARR | €18M+ ARR |
| Gross margin (steady state) | 78% | 82% | 85% |
| CAC payback (Professional tier) | 18 months | 12 months | 8 months |
| Net Revenue Retention | 110% | 130% | 150% |

**The structural tailwind:** EU AI Act Article 12 enforcement begins August 2, 2026. Every enterprise deploying high-risk AI systems in the EU becomes a legal prospect. The market does not need to be convinced to buy; it needs to be found and equipped. The 100-customer target for Year 1 is achievable through direct sales to legal and compliance teams, law firm partnerships, and developer-led adoption.

### Risk Factors

1. **Regulatory delay risk:** The European Commission proposed delaying high-risk AI obligations to December 2027. If enacted, the urgency argument weakens. Mitigation: position compliance infrastructure as needed regardless of deadline (good governance; insurance discount angle).
2. **"Just log to S3" objection:** Enterprises may argue that S3 with versioning satisfies Article 12. Counter: S3 is not tamper-proof (root access can overwrite objects), not blockchain-anchored, and does not generate notary certificates. Regulators will ask "can you prove this was not modified?" — only Integritas answers yes cryptographically.
3. **GDPR complexity risk:** The tension between AI Act retention requirements and GDPR erasure rights will generate compliance uncertainty. Integritas must provide clear GDPR guidance and the anonymization workflow as a built-in feature, not an afterthought.
4. **Competitor response:** Established GRC platforms (Vanta, OneTrust) will add "blockchain logging" buttons. Integritas must compete on depth of compliance coverage, ease of integration, and the notary certificate as a product that GRC platforms cannot easily replicate.

---

## Sources

- [EU AI Act Article 12: Record-Keeping (Official Text)](https://artificialintelligenceact.eu/article/12/)
- [EU AI Act Article 26: Obligations of Deployers (Official Text)](https://artificialintelligenceact.eu/article/26/)
- [EU AI Act Implementation Timeline](https://artificialintelligenceact.eu/implementation-timeline/)
- [EU AI Act High-Risk Deadline: Enterprise Readiness Gap — Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-compliance-deadline-20/)
- [What the EU AI Act Requires for AI Agent Logging — Help Net Security](https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/)
- [Article 12 and the Logging Mandate — FireTail](https://www.firetail.ai/blog/article-12-and-the-logging-mandate-what-the-eu-ai-act-actually-requires)
- [EU AI Act Infrastructure-Level Compliance — CleanAim](https://cleanaim.com/resources/ai-governance/eu-ai-act-article-12-compliance/)
- [AI Logging Under the EU AI Act — datenschutz-notizen.de](https://www.datenschutz-notizen.de/ai-logging-under-the-eu-ai-act-the-compliance-infrastructure-behind-high-risk-systems-4458904/)
- [GDPR AI Compliance Guide — nexos.ai](https://nexos.ai/blog/gdpr-ai/)
- [Datadog Log Management Pricing 2026 — Parseable](https://www.parseable.com/blog/datadog-log-management-cost)
- [Splunk Software Pricing — Vendr](https://www.vendr.com/marketplace/splunk)
- [Best EU AI Act Compliance Software 2026 — KLA Digital](https://kla.digital/blog/best-eu-ai-act-compliance-software-2026)
- [Arize vs Fiddler vs Arthur Comparison — LinkedIn / GetAIGovernance](https://www.linkedin.com/pulse/arize-vs-fiddler-arthur-which-ai-monitoring-platform-actually-9xrwe)
- [AI Agent Audit Trail Architecture — The BrightByte](https://thebrightbyte.com/playbook/expertise/ai-audit-trail-architecture-compliance)
- [Integritas Product Page — integritas.technology](https://integritas.technology)
- [Minima Blockchain Ultra-Light Layer 1 — Manufacturing & Engineering Magazine](https://memuknews.com/technology/academia-rd/minimas-ultra-light-layer-1-blockchain/)
- [Integritas: Decentralized Data Integrity Platform — YouTube](https://www.youtube.com/watch?v=AJXANKuknfg)
- [GDPR-Compliant Use of Blockchain for Secure Usage Logs — ACM Digital Library](https://dl.acm.org/doi/fullHtml/10.1145/3463274.3463349)

---

*This assessment was prepared by the Integritas Product Architecture Council. All pricing recommendations are indicative and should be validated against market testing. Legal analysis is informational and does not constitute legal advice. Regulatory citations are current as of publication date; the EU AI Act implementation timeline is subject to legislative amendment.*
