# Santhosh Kumar | Senior ML Engineer Portfolio

Personal portfolio for Dr. Santhoshkumar, a Senior ML Engineer building reliable production AI systems across semantic search, RAG, AI agents, forecasting, and MLOps.

Live site: [santhosh790.github.io](https://santhosh790.github.io)

## Positioning

- 13+ years of software, machine learning, and platform engineering experience
- 5 flagship AI systems across search, conversational AI, MLOps, forecasting, and agentic AI
- 3 enterprise LLM applications
- Current role: Senior ML Engineer at Eurowings Digital GmbH
- Focus: production AI architecture, retrieval systems, evaluation, MLOps, and LLMOps

## Portfolio Content

### Featured systems

1. [AI-Powered Semantic Search](https://santhosh790.github.io/projects/ai-search/)
   - Hybrid BM25 and vector retrieval, query understanding, reranking, and GPT-4 summarization
   - 91% recall@10, 40ms P99 latency, and 18% fewer support calls
2. [Enterprise AI Customer Support](https://santhosh790.github.io/projects/enterprise-rag/)
   - Citation-backed RAG with session context, confidence thresholds, and human escalation
3. [Enterprise MLOps Platform](https://santhosh790.github.io/projects/mlops-platform/)
   - Azure Databricks, MLflow, Unity Catalog, CI/CD, model serving, and monitoring
4. [AI Forecasting and Personalization](https://santhosh790.github.io/projects/forecasting-platform/)
   - Forecasting, recommendation, retraining, and cold-start handling for digital operations
5. [AI Search Agent](https://santhosh790.github.io/projects/ai-search-agent/)
   - Open-source agent architecture combining search, reasoning, and tool calling

Each case study includes the business problem, architecture, technical decisions, production challenges, outcomes, and related links.

### Other sections

- Career timeline from backend engineering through enterprise AI leadership
- Open-source engineering projects
- Technical stack across Generative AI, ML Engineering, MLOps, Search, Data, and Cloud
- Technical writing archive covering production AI, search, LLMs, and machine learning
- Selected publications, credentials, leadership experience, and contact details

## Technology

- **Framework:** Next.js 15 App Router, React 19, TypeScript
- **Styling:** Tailwind CSS with reusable UI components and light/dark themes
- **Content:** TypeScript content models and MDX-ready blog infrastructure
- **Motion:** Framer Motion and CSS animations
- **AI/ML focus:** RAG, vector search, semantic search, LLM evaluation, MLflow, Databricks, Azure, forecasting, and recommendation systems
- **Deployment:** Static export for GitHub Pages

## Routes

| Route              | Purpose                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `/`                | Homepage with hero, metrics, featured systems, career timeline, skills, writing, and contact |
| `/projects/[slug]` | Individual AI system and open-source case studies                                            |
| `/blog`            | Technical writing archive                                                                    |
| `/blog/[slug]`     | Individual article pages                                                                     |
| `/about`           | Professional summary and background                                                          |
| `/credentials`     | Publications, certifications, and credentials                                                |
| `/resume`          | Web resume                                                                                   |

## Run Locally

### Requirements

- Node.js 18.18 or newer
- npm

### Install and start development

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

### Validate and build

```bash
npm run type-check
npm run build
npm run start
```

The production build uses Next.js static export and is generated in `out/`.

### Other commands

```bash
npm run lint
npm run format
```

## Project Structure

```text
app/                 Next.js routes and page metadata
components/          Portfolio sections and reusable UI components
content/blog/        Blog content guidance and MDX content
lib/constants.ts     Site content, project records, navigation, and links
public/images/       Profile, research, and portfolio assets
scripts/             Local Node version and build helpers
```

## Deployment

`next.config.js` is configured with `output: 'export'` and unoptimized images for GitHub Pages compatibility. The site can be deployed by publishing the generated `out/` directory through GitHub Pages or another static hosting provider.

## Links

- [GitHub](https://github.com/santhosh790)
- [LinkedIn](https://www.linkedin.com/in/dr-santhoshkumar-s-9ab69a48/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=2U2D8dAAAAAJ)
- [Substack](https://drsanthosh.substack.com/)
