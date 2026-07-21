# Portfolio Action Items - Consolidated Checklist

**Last Updated:** 2026-07-21  
**Current Score:** 5.5/10 → **Target:** 8.5/10  
**Portfolio Status:** Phase 1 Complete (6.5/10)

---

## 📊 Portfolio Structure Update

### 🌟 Tier 1: Enterprise AI Systems (Featured Projects)
5 flagship projects showcasing production expertise:
1. AI-Powered Semantic Search
2. Enterprise RAG/Customer Support
3. Enterprise MLOps Platform  
4. Forecasting & Personalization
5. AI Search Agent (Open Source)

### 🚀 Tier 2: Open Source AI & Engineering
3 projects demonstrating breadth and experimentation:
1. NOPC (Developer Productivity Tool)
2. Web Scraping API Experiments (Data Engineering)
3. OpenAQ API to Dataset Pipeline (ETL)

### 📝 Tier 3: Technical Writing
Blog posts and thought leadership content

---

## ✅ Phase 1: COMPLETED (Weekend Work - 4.75 hours)

### Done Items:
- [x] **Rewrite hero headline** - Changed to "I architect enterprise AI systems at scale"
- [x] **Fix role title** - Changed from "Senior Data Scientist / Senior ML Engineer" to "Senior ML Engineer"
- [x] **Add career progression timeline** - Added 2008-2026 timeline to hero card
- [x] **Remove buzzwords** - Replaced with concrete numbers (10K QPS, 2M embeddings, 40ms P99)
- [x] **Add team/ownership context** - Added to all 4 projects (team size, reporting, scope, collaboration)
- [x] **Update Featured Systems label** - Changed from "Production Systems" to "Featured Systems"

**Result:** Portfolio improved from 5.5/10 → 6.5/10

---

## 🚀 Phase 2: NEXT UP (Week 1 - 15 hours)

### Priority: HIGH | Expected Result: 6.5/10 → 7.5/10

### 1. Add Cost/Scale Metrics (3h) - CRITICAL
**File:** `lib/constants.ts`  
**Priority:** 🔴 CRITICAL

Add `metrics` object to each project:
```typescript
metrics: {
  scale: {
    qps: "10,000 peak, 3M queries/day",
    indexSize: "2M document embeddings (1536-dim), 12GB RAM",
    dataVolume: "500GB corpus, 2M documents",
    concurrentUsers: "5,000 peak"
  },
  performance: {
    latencyP50: "20ms",
    latencyP95: "35ms",
    latencyP99: "40ms (vs 180ms baseline)",
    availability: "99.95% uptime"
  },
  cost: {
    perQuery: "$0.008 all-in (API + compute + storage)",
    monthlyInfra: "$12K (vs $45K baseline)",
    businessImpact: "18% support call reduction = $420K annual savings"
  }
}
```

**Impact:** Proves enterprise-scale experience and cost awareness

---

### 2. Write Production Failure Blog Post (4h) - CRITICAL
**File:** `_posts/2026-07-20-production-lessons-embedding-model.md` (NEW)  
**Priority:** 🔴 CRITICAL - HIGHEST ROI

**Title:** "Production Lessons: Embedding Model Update Broke Search"

**Structure:**
```markdown
## The Incident
- Rolled new text-embedding-ada-002 to production
- Recall dropped 15% within 2 hours
- 2,000+ users affected before rollback

## Root Cause
- New model had different similarity threshold distribution
- Existing confidence threshold (0.7) was calibrated for old model
- No similarity distribution analysis in pre-deployment testing

## Detection
- Offline evaluation pipeline alerted: nDCG@10 dropped from 0.84 to 0.71
- User feedback spike: "search results are worse"
- Detected in 2 hours via automated monitoring

## Recovery
1. Canary rollback to previous model (15 minutes)
2. Recalibrated confidence threshold: 0.7 → 0.65 for new model
3. Re-deployed with A/B test (95/5 split)
4. Validated: nDCG@10 recovered to 0.83

## Prevention
1. Added similarity distribution analysis to pre-deployment checklist
2. Golden query set now includes threshold sensitivity tests
3. Canary deployment mandatory for all embedding model changes
4. Automated rollback if nDCG drops >5% within 2 hours

## Lessons
- Never deploy embedding model changes without similarity analysis
- Confidence thresholds are model-dependent
- Fast detection (2h) limited user impact
```

**Impact:** 🌟 HIGHEST VALUE - Proves production resilience and debugging maturity

---

### 3. Add Before/After Comparison Tables (2h) - HIGH
**File:** `lib/constants.ts`  
**Priority:** 🟡 HIGH

Add `beforeAfter` array to each project:
```typescript
beforeAfter: [
  {
    metric: "Search Method",
    before: "Keyword-only (BM25)",
    after: "Hybrid (BM25 + Vector)",
    improvement: "45% satisfaction ↑"
  },
  {
    metric: "Query Latency P99",
    before: "180ms",
    after: "40ms",
    improvement: "78% reduction"
  },
  {
    metric: "Support Call Volume",
    before: "12,000 calls/month",
    after: "9,840 calls/month",
    improvement: "18% reduction ($420K savings)"
  }
]
```

**Impact:** Side-by-side proof makes improvements concrete

---

### 4. Add Monitoring/Evaluation Details (4h) - HIGH
**File:** `lib/constants.ts`  
**Priority:** 🟡 HIGH

Add `monitoring` object to each project:
```typescript
monitoring: {
  offlineEval: {
    dataset: "500 hand-labeled queries, monthly refresh",
    metrics: ["nDCG@10", "Precision@5", "Recall@20"],
    threshold: "nDCG < 0.82 blocks deployment"
  },
  onlineMonitoring: {
    metrics: [
      "Embedding drift detection (cosine distribution shift)",
      "Query latency P50/P95/P99 (Datadog)",
      "CTR drop >10% triggers review",
      "Error rate >1% alerts PagerDuty"
    ],
    alerting: "P99 > 100ms or error rate > 1%"
  },
  abTesting: {
    method: "95/5 canary split",
    keyMetrics: ["search satisfaction", "support deflection rate"],
    rollbackCriteria: "Satisfaction drop >5% within 24h"
  }
}
```

**Impact:** Proves ops maturity and production ownership

---

### 5. Add Decision-Making Authority (2h) - HIGH
**File:** `lib/constants.ts`  
**Priority:** 🟡 HIGH

Add `decisions` array to each project:
```typescript
decisions: [
  {
    decision: "Hybrid Retrieval Over Pure Vector Search",
    context: "Vector search had 15% false positive rate for entity queries",
    options: ["Pure vector", "Pure keyword", "Hybrid", "Ensemble reranking"],
    myDecision: "Hybrid BM25 + vector with query-type routing",
    rationale: "Keyword precision for entities + semantic recall for FAQs",
    result: "Precision improved 22%, recall maintained",
    authority: "Final call after A/B testing with Product approval"
  }
]
```

**Impact:** Proves autonomous decision-making (core Staff skill)

---

## 📦 Phase 3: Major Improvements (Weeks 2-4 - 27 hours)

### Priority: CRITICAL | Expected Result: 7.5/10 → 8.5/10

### 6. Add System Architecture Diagrams (4h) - CRITICAL
**Files:** Create `components/ArchitectureDiagram.tsx` or add Mermaid to project pages  
**Priority:** 🔴 CRITICAL

**Required Diagrams for 5 Featured Projects:**

#### Search System:
```mermaid
graph LR
    A[User Query] --> B[API Gateway]
    B --> C[Query Understanding]
    C --> D[Hybrid Retrieval]
    D --> E[BM25 Index]
    D --> F[Vector DB 2M docs]
    E --> G[Reranker]
    F --> G
    G --> H{Confidence > 0.7?}
    H -->|Yes| I[GPT-4 Summarization]
    H -->|No| J[Fallback Results]
    I --> K[Response Cache]
    J --> K
    K --> L[User]
```

#### RAG System:
```mermaid
graph TB
    A[User Question] --> B[Session Memory]
    B --> C[Query Expansion]
    C --> D[Hybrid Retrieval]
    D --> E[BM25]
    D --> F[Vector Search]
    E --> G[Reranking]
    F --> G
    G --> H[GPT-4 + Citations]
    H --> I[Response Cache]
    I --> J[Answer + Sources]
```

#### MLOps Platform:
```mermaid
graph LR
    A[Git Push] --> B[CI/CD Pipeline]
    B --> C{Tests Pass?}
    C -->|Yes| E[Model Registry]
    E --> F[Feature Store]
    F --> G[Inference Endpoints]
    G --> H[Monitoring]
    H --> I[Drift Detection]
```

#### Forecasting System:
```mermaid
graph TB
    A[Historical Data] --> B[Feature Engineering]
    B --> C[Model Selection]
    C --> D[XGBoost]
    C --> E[LightGBM]
    C --> F[Prophet]
    D --> G[Ensemble]
    E --> G
    F --> G
    G --> H[Cold Start Handler]
    H --> I[API Serving]
```

#### AI Search Agent:
```mermaid
graph TB
    A[User Query] --> B[Planner Agent]
    B --> C{Need Search?}
    C -->|Yes| D[Search Tool]
    C -->|No| E[Direct Answer]
    D --> F[Web Search API]
    D --> G[Vector Retrieval]
    F --> H[Context Aggregator]
    G --> H
    H --> I[LLM Reasoning]
    I --> J{More Info Needed?}
    J -->|Yes| D
    J -->|No| K[Response Generator]
    E --> K
    K --> L[User Answer]
```

**Impact:** 🌟 CRITICAL - Visual systems thinking proof (40% credibility boost)

---

### 7. Add Data Flow Diagrams (3h) - HIGH
**Files:** Add to project detail pages  
**Priority:** 🟡 HIGH

Add ASCII-style or Mermaid diagrams showing HOW data moves through each system.

**Impact:** Makes systems concrete and easier to evaluate

---

### 8. Add Deployment Pipeline Diagrams (2h) - MEDIUM
**Files:** Add to project detail pages  
**Priority:** 🟢 MEDIUM

Show CI/CD flow: Code → Tests → Build → Staging → Canary → Production

**Impact:** Shows CI/CD maturity and ops discipline

---

### 9. Create Evidence Artifacts (4h) - HIGH
**Files:** Create charts/screenshots in `public/images/evidence/`  
**Priority:** 🟡 HIGH

**Required Artifacts:**
- `search-satisfaction.png` - Line graph showing satisfaction before/after
- `support-volume.png` - Bar chart of monthly support calls
- `latency-p99.png` - Histogram of latency distribution
- `monitoring-dashboard.png` - Datadog/Grafana screenshot
- `mlflow-registry.png` - MLflow model registry

**Tools:** Chart.js, D3.js, or Google Sheets/Excel exports

**Impact:** Visual proof makes claims credible (30% trust boost)

---

### 10. Expand Leadership Section (2h) - MEDIUM-HIGH
**File:** `components/LeadershipProof.tsx`  
**Priority:** 🟠 MEDIUM-HIGH

Add detailed cards:
- Team Lead experience (6-person team, 2016-2020)
- Technical mentorship (4 ML engineers onboarded)
- Cross-functional influence (Product, Legal, Support)

**Impact:** Proves leadership scope beyond IC work

---

### 11. Add "Lessons Learned" Sections (3h) - MEDIUM-HIGH
**File:** `lib/constants.ts`  
**Priority:** 🟠 MEDIUM-HIGH

Add to each project:
```typescript
lessonsLearned: {
  technical: [
    "Hybrid retrieval beats pure vector search for enterprise content",
    "Confidence thresholds must be tuned per query type",
    "Offline eval is insufficient—production A/B testing caught edge cases"
  ],
  operational: [
    "Canary deployments non-negotiable for embedding model changes",
    "Monitoring embedding drift detected issues 2 weeks before users",
    "Cross-functional alignment (Product, Legal) takes longer than engineering"
  ],
  whatIdDoDifferently: [
    "Start with simpler keyword search + A/B test semantic layer incrementally",
    "Invest in eval infrastructure earlier (golden datasets, regression tests)",
    "Document threshold tuning rationale for future engineers"
  ]
}
```

**Impact:** Shows reflection and learning velocity

---

### 12. Add Security Architecture (3h) - MEDIUM
**File:** `lib/constants.ts`  
**Priority:** 🟢 MEDIUM

Add `security` object to each project:
```typescript
security: {
  dataPrivacy: [
    "PII detection: redact email, phone, passport before embedding",
    "Unity Catalog row-level security for customer data",
    "Audit logging: All queries logged to immutable S3 (GDPR compliance)"
  ],
  llmSecurity: [
    "Prompt injection defense: input sanitization + output filtering",
    "Citation validation: RAG responses must cite sources (hallucination <2%)",
    "Rate limiting: 100 queries/min per user (abuse prevention)"
  ],
  infrastructure: [
    "Azure Private Link for Databricks ↔ OpenAI traffic",
    "Secrets in Key Vault (zero hardcoded API keys)",
    "Network policies: VPC isolation for prod workloads"
  ]
}
```

**Impact:** Proves enterprise security awareness

---

### 13. Add Research-to-Production Bridge (2h) - MEDIUM-HIGH
**File:** Create new component or add section  
**Priority:** 🟠 MEDIUM-HIGH

**Content:**
```markdown
## How Research Informs Production

**Trust & Ranking (PhD) → Search Relevance (Production)**
- Academic: Modeled information credibility and propagation dynamics
- Production: Applied confidence scoring and source trust signals to ranking
- Result: 22% fewer irrelevant results in production search

**Deep Learning Foundations (PhD) → LLM System Design (Production)**
- Academic: Designed CNN architectures for sequence classification
- Production: Architected RAG with attention to failure modes
- Result: Hallucination rate <2% through research-driven prompt design

**Network Analysis (PhD) → Recommendation Systems (Production)**
- Academic: Studied influence propagation and collaborative signals
- Production: Built cold-start handling and similarity-based recommendations
- Result: 30% higher CTR vs popularity-based baseline
```

**Impact:** Turns PhD from "nice to have" into "strategic differentiator"

---

## 📊 Phase 4: Long-Term (Ongoing)

### 14. Add Production Screenshots (2h) - MEDIUM
**Files:** `public/images/screenshots/`  
**Priority:** 🟢 MEDIUM

- Search UI showing semantic results
- RAG chat interface with citations
- MLflow registry dashboard
- Databricks jobs/pipelines
- Monitoring dashboards

---

### 15. Passive → Active Voice Rewrite (1h) - LOW-MEDIUM
**Files:** Multiple components  
**Priority:** 🟢 LOW-MEDIUM

Pattern:
- "Built an onsite search platform" → "I architected a semantic search system"
- "Designed and deployed" → "I owned end-to-end delivery"

---

### 16. Create Interactive Demos (Long-term)
**Priority:** 🟢 NICE-TO-HAVE

- Hosted search demo (public or video)
- RAG chatbot demo
- MLOps platform walkthrough video

---

### 17. Technical Blog Series (Ongoing)
**Priority:** 🟢 NICE-TO-HAVE

Topics:
- "Building Enterprise AI Systems" (12-part series)
- "Production ML Lessons" (incident postmortems)
- "From Research to Production" (PhD → industry bridge)

---

### 18. Add Testimonials/Recommendations (Ongoing)
**Priority:** 🟢 NICE-TO-HAVE

From managers, peers, cross-functional partners

---

### 19. Conference Talks (Long-term)
**Priority:** 🟢 NICE-TO-HAVE

Target tier-1 venues: MLOps World, Applied ML Days, NeurIPS workshops

---

## 📈 Progress Tracking

### Current Status:
- ✅ **Phase 1 Complete** - 5 items done (4.75h)
- ⏳ **Phase 2 Next** - 5 items remaining (15h)
- 📋 **Phase 3 Planned** - 8 items queued (27h)
- 🎯 **Phase 4 Backlog** - 6 items ongoing

### Expected Progression:
- **After Phase 1 (DONE):** 6.5/10 - Senior IC: 70-75%, Staff: 45-50%
- **After Phase 2:** 7.5/10 - Senior IC: 75-80%, Staff: 55-60%
- **After Phase 3:** 8.5/10 - Senior IC: 85-90%, Staff: 70-80%

### Time Investment:
- **Phase 1:** 4.75 hours ✅ COMPLETE
- **Phase 2:** 15 hours (1-2 days)
- **Phase 3:** 27 hours (1 work week)
- **Total:** 46.75 hours to reach 8.5/10

---

## 🎯 This Week's Focus (Recommendation)

### Top 3 Priorities for Maximum ROI:
1. **Production failure blog post** (4h) - HIGHEST value signal for Staff roles
2. **System architecture diagrams** (4h) - Visual proof of systems thinking
3. **Cost/scale metrics** (3h) - Enterprise-scale awareness

**Total:** 11 hours → Score increases from 6.5/10 → 7.3/10

---

## 📝 Notes

### Key Decisions Made:
- ✅ Hero headline changed to direct, confident statement
- ✅ Role title clarified (removed DS confusion)
- ✅ Team ownership context added to prove leadership
- ✅ Career timeline shows growth trajectory

### Still to Decide:
- [ ] Mermaid vs SVG vs Lucidchart for architecture diagrams
- [ ] Real vs mock charts for evidence artifacts
- [ ] Which 1-2 projects to showcase with production screenshots

---

**Last Updated:** 2026-07-20  
**Next Review:** After Phase 2 completion
