import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Resume | ${SITE_CONFIG.name}`,
  description: `${SITE_CONFIG.name} - Senior Machine Learning Engineer specializing in enterprise AI systems, semantic search, RAG, and MLOps platforms.`,
}

export default function ResumePage() {
  return (
    <div className="bg-background pt-28 pb-20">
      <div className="container mx-auto max-w-4xl px-6 md:px-8">
        {/* Header */}
        <header className="mb-10">
          <Link href="/" className="text-sm text-accent hover:underline mb-4 inline-block">
            ← {SITE_CONFIG.name}
          </Link>
          <h1 className="text-display-3 md:text-display-2 font-bold text-text-primary mb-4">
            Senior Machine Learning Engineer | Enterprise AI Systems & Platforms
          </h1>
          <div className="flex flex-wrap gap-4 text-body text-text-secondary">
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-text-primary">
              {SITE_CONFIG.email}
            </a>
            <span>•</span>
            <span>{SITE_CONFIG.location}</span>
            <span>•</span>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
              LinkedIn ↗
            </a>
          </div>
        </header>

        <hr className="border-border mb-10" />

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-heading-1 font-bold text-text-primary mb-4">Professional Summary</h2>
          <div className="space-y-4 text-body-lg text-text-secondary leading-relaxed">
            <p>
              I design and deliver <strong className="text-text-primary">production-grade AI systems</strong> that solve complex business problems at enterprise scale. My expertise lies in building reliable semantic search, retrieval-augmented generation (RAG), and MLOps platforms that improve customer experience while meeting strict requirements for scalability, latency, governance, and operational reliability.
            </p>
            <p>
              At <strong className="text-text-primary">Eurowings (Lufthansa Group)</strong>, I have designed and delivered enterprise AI platforms that contributed to an <strong className="text-text-primary">18% reduction in customer support calls</strong>, a <strong className="text-text-primary">45% improvement in search satisfaction</strong>, and significantly accelerated machine learning deployment through standardized MLOps practices.
            </p>
            <p>
              My background combines <strong className="text-text-primary">15+ years of software engineering</strong>, a <strong className="text-text-primary">Ph.D. in Machine Learning</strong>, and extensive hands-on experience building AI systems on <strong className="text-text-primary">Azure</strong> and <strong className="text-text-primary">Databricks</strong>. I enjoy turning ambiguous business requirements into measurable, production-ready AI solutions.
            </p>
            <p className="text-text-primary font-semibold">
              <strong>Current Focus:</strong> Semantic Search • Retrieval-Augmented Generation (RAG) • Agentic AI • Enterprise MLOps • AI Platform Engineering
            </p>
          </div>
        </section>

        {/* Selected Enterprise Projects */}
        <section className="mb-12">
          <h2 className="text-heading-1 font-bold text-text-primary mb-6">Selected Enterprise Projects</h2>
          <div className="rounded-2xl border border-border bg-surface/60 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background-secondary">
                  <th className="text-left p-4 text-body font-semibold text-text-primary">Project</th>
                  <th className="text-left p-4 text-body font-semibold text-text-primary">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-body-lg text-text-primary font-medium">Enterprise Semantic Search Platform</td>
                  <td className="p-4 text-body text-text-secondary">Reduced customer support calls by <strong className="text-text-primary">18%</strong> and improved search satisfaction by <strong className="text-text-primary">45%</strong></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-body-lg text-text-primary font-medium">Enterprise RAG Customer Support Assistant</td>
                  <td className="p-4 text-body text-text-secondary">Improved customer self-service through trustworthy, citation-backed AI responses</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-body-lg text-text-primary font-medium">Enterprise MLOps Platform</td>
                  <td className="p-4 text-body text-text-secondary">Reduced ML deployment cycles from <strong className="text-text-primary">weeks to hours</strong> through standardized CI/CD and governance</td>
                </tr>
                <tr>
                  <td className="p-4 text-body-lg text-text-primary font-medium">Forecasting & Personalization Platform</td>
                  <td className="p-4 text-body text-text-secondary">Improved business planning through automated forecasting and recommendation pipelines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-8">Professional Experience</h2>

          {/* Current Role */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Senior Machine Learning Engineer / Senior Data Scientist</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">Eurowings Digital GmbH (Lufthansa Group)</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">2020 – Present | Europe (Remote)</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Designed and implemented an <strong className="text-text-primary">enterprise semantic search platform</strong> using hybrid retrieval (BM25 + vector search), query understanding, multilingual processing, and LLM-assisted ranking to improve customer search experiences.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Built a <strong className="text-text-primary">confidence-scoring framework</strong> combining similarity thresholds, score-gap heuristics, metadata validation, and keyword overlap to reduce false-positive retrievals in vector search.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Contributed to an <strong className="text-text-primary">18% reduction in customer support calls</strong> and a <strong className="text-text-primary">45% improvement in customer search satisfaction</strong> through production AI search capabilities.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Designed and deployed a <strong className="text-text-primary">Retrieval-Augmented Generation (RAG) customer support assistant</strong> with citation-backed responses, retrieval validation, and confidence-based fallback mechanisms to improve customer self-service.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Built reusable <strong className="text-text-primary">MLOps pipelines</strong> on Azure Databricks using MLflow, Unity Catalog, and CI/CD, standardizing model training, deployment, governance, and monitoring across multiple ML initiatives.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Developed automated forecasting and personalization pipelines using ensemble machine learning models (XGBoost, Prophet, Random Forest), improving planning efficiency and campaign targeting.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Collaborated with product managers, software engineers, UX teams, and business stakeholders to deliver AI solutions from problem definition through architecture, deployment, monitoring, and continuous improvement.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Regularly evaluated trade-offs between <strong className="text-text-primary">retrieval quality, latency, operational cost, explainability, and maintainability</strong> while designing enterprise AI systems.</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Technologies</p>
              <p className="text-body text-text-secondary">
                Azure OpenAI • Azure Databricks • MLflow • Unity Catalog • Feature Store • Python • LlamaIndex • LangChain • Hybrid Search • Vector Search • Azure AI Search • Kubernetes
              </p>
            </div>
          </div>

          {/* PhD Researcher */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Ph.D. Researcher (Machine Learning) & Technical Team Lead</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">VIT University</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">2016 – 2020</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Conducted doctoral research on <strong className="text-text-primary">early rumor detection and mitigation</strong> in online social networks using deep learning, neuro-fuzzy systems, and bio-inspired optimization techniques.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Published multiple peer-reviewed papers in international journals and conferences.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Developed expertise in <strong className="text-text-primary">deep learning, graph analytics, experimentation, and scientific evaluation methodologies</strong>, which continue to influence my production AI engineering work.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Simultaneously served as a <strong className="text-text-primary">technical lead</strong>, mentoring software engineers and coordinating engineering activities across academic and industry collaborations.</span>
              </li>
            </ul>
          </div>

          {/* Backend Software Engineer */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Backend Software Engineer → Technical Team Lead</h3>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">2012 – 2016</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Designed and developed enterprise web applications using Java, Spring, REST APIs, and Adobe Experience Manager (AEM).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Led engineering teams delivering customer-facing enterprise applications with strong emphasis on performance, maintainability, and security.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Designed scalable backend services, API integrations, and content management solutions for enterprise customers.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Built a strong foundation in distributed systems, software architecture, and engineering leadership that later enabled the transition into production AI systems.</span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-8">Education</h2>
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-heading-2 font-bold text-text-primary">Ph.D. in Machine Learning</h3>
            <p className="text-body-lg text-accent font-semibold mt-1">VIT University, India</p>
            <p className="text-body text-text-tertiary mt-1">2020</p>
            <div className="mt-4">
              <p className="text-body font-semibold text-text-primary mb-2">Thesis</p>
              <p className="text-body text-text-secondary italic">
                Rumor Detection and Mitigation in Online Social Networks using Deep Learning and Hybrid Machine Learning Models
              </p>
            </div>
            <p className="text-body text-text-secondary mt-4">
              GPA: <strong className="text-text-primary">9.0 / 10</strong>
            </p>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Research & Publications */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-6">Research & Publications</h2>
          <ul className="space-y-4">
            <li className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">
                A Parallel Neural Network Approach for Faster Rumor Identification in Online Social Networks
              </p>
              <p className="text-body text-text-secondary mt-2 italic">
                International Journal on Semantic Web and Information Systems (2019)
              </p>
            </li>
            <li className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">
                A Bio-inspired Defensive Rumor Confinement Strategy in Online Social Networks
              </p>
              <p className="text-body text-text-secondary mt-2 italic">
                Journal of Organizational and End User Computing (2020)
              </p>
            </li>
            <li className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body text-text-secondary">
                Additional publications in Springer proceedings and international journals covering deep learning, rumor detection, and intelligent systems.
              </p>
            </li>
          </ul>
        </section>

        <hr className="border-border mb-12" />

        {/* Core Technical Skills */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-8">Core Technical Skills</h2>

          <div className="space-y-6">
            {/* Enterprise AI Systems */}
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="text-heading-2 font-bold text-text-primary mb-3">Enterprise AI Systems</h3>
              <p className="text-body text-text-secondary leading-relaxed">
                Semantic Search • Retrieval-Augmented Generation (RAG) • Hybrid Retrieval (BM25 + Vector Search) • Vector Databases • LLM Applications • Prompt Engineering • Agentic AI • AI Evaluation • Search Relevance
              </p>
            </div>

            {/* Machine Learning & MLOps */}
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="text-heading-2 font-bold text-text-primary mb-3">Machine Learning & MLOps</h3>
              <p className="text-body text-text-secondary leading-relaxed">
                Python • PyTorch • Scikit-learn • XGBoost • Prophet • MLflow • Unity Catalog • Feature Store • Model Monitoring • Experiment Tracking • CI/CD for Machine Learning
              </p>
            </div>

            {/* Cloud & Platform Engineering */}
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="text-heading-2 font-bold text-text-primary mb-3">Cloud & Platform Engineering</h3>
              <p className="text-body text-text-secondary leading-relaxed">
                Azure • Azure Databricks • Azure OpenAI • Azure AI Search • Kubernetes • Docker • FastAPI • REST APIs • Microservices
              </p>
            </div>

            {/* Data Engineering */}
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="text-heading-2 font-bold text-text-primary mb-3">Data Engineering</h3>
              <p className="text-body text-text-secondary leading-relaxed">
                Feature Engineering • Data Pipelines • ETL • Data Validation • Model Deployment • Batch & Real-time Inference
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Professional Interests */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-6">Professional Interests</h2>
          <div className="rounded-2xl border border-border bg-background-secondary p-6">
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Production AI Reliability • Retrieval Evaluation • Enterprise Search • Cost-efficient LLM Systems • AI Platform Engineering • Technical Mentoring • Applied AI Architecture
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-tertiary">Last Updated: July 2026</p>
        </footer>
      </div>
    </div>
  )
}