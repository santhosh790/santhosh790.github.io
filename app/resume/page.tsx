import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Resume | ${SITE_CONFIG.name}`,
  description: `${SITE_CONFIG.name} - Senior ML Engineer | Senior Data Scientist specializing in enterprise AI systems, semantic search, RAG, and MLOps platforms.`,
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
            Senior ML Engineer | Senior Data Scientist
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
              I design and deliver <strong className="text-text-primary">reliable AI systems</strong> that solve complex business problems at enterprise scale. My expertise lies in building semantic search, retrieval-augmented generation (RAG), and MLOps platforms that improve customer experience while meeting strict requirements for scalability, latency, governance, and operational reliability.
            </p>
            <p>
              At <strong className="text-text-primary">Eurowings (Lufthansa Group)</strong>, I have designed and delivered enterprise AI platforms that contributed to an <strong className="text-text-primary">18% reduction in customer support calls</strong>, a <strong className="text-text-primary">45% improvement in search satisfaction</strong>, and significantly accelerated machine learning deployment through standardized MLOps practices.
            </p>
            <p>
              My background combines <strong className="text-text-primary">14+ years of software engineering</strong>, a <strong className="text-text-primary">Ph.D. in Machine Learning</strong>, and extensive hands-on experience building AI systems on <strong className="text-text-primary">Azure</strong> and <strong className="text-text-primary">Databricks</strong>. I enjoy turning ambiguous business requirements into measurable, production-ready AI solutions.
            </p>
            <p className="text-text-primary font-semibold">
              <strong>Current Focus:</strong> LLM • RAG • AI Agents • Semantic Search • MLOps & LLMOps • AI Platform Engineering
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
                  <td className="p-4 text-body text-text-secondary"><strong className="text-text-primary">110% satisfaction improvement (42% → 90%)</strong>, achieved <strong className="text-text-primary">91% recall@10</strong>, <strong className="text-text-primary">99.3% latency reduction (6s → 40ms P99)</strong>, €420K annual savings (18% fewer support calls)</td>
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
                <h3 className="text-heading-2 font-bold text-text-primary">Senior ML Engineer | Senior Data Scientist</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">Eurowings Digital GmbH (Lufthansa Group)</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">July 2022 – Present | Europe (Remote)</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Led end-to-end <strong className="text-text-primary">machine learning initiatives</strong> across aviation and e-commerce domains.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Designed <strong className="text-text-primary">scalable ML pipelines</strong> from data ingestion to production deployment.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Developed <strong className="text-text-primary">AI and LLM-powered solutions</strong> for forecasting, personalization, recommendation engines, and intelligent search systems.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Architected <strong className="text-text-primary">time-series forecasting, regression, and XGBoost models</strong> for business planning and optimization.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Built <strong className="text-text-primary">Retrieval-Augmented Generation (RAG) solutions</strong> for context-aware search experiences.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Developed <strong className="text-text-primary">AI agents and virtual assistants</strong> for customer support and enterprise knowledge management.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Implemented <strong className="text-text-primary">MLOps and LLMOps pipelines</strong> using Azure Databricks and cloud-native technologies.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Defined AI strategy and served as <strong className="text-text-primary">technical lead for customer-facing AI initiatives</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Represented the organization in <strong className="text-text-primary">aviation-focused hackathons and conferences</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Optimized production AI systems through <strong className="text-text-primary">monitoring, observability, and performance tuning</strong>.</span>
              </li>
            </ul>
            
            <div className="mt-4 rounded-lg border border-border bg-surface/40 p-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Impact & Achievements</p>
              <ul className="space-y-2 text-body-sm text-text-secondary">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                  <span>Improved key business KPIs (CSAT, AOV) by <strong className="text-text-primary">15–30%</strong> through machine learning solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                  <span>Increased forecast accuracy by over <strong className="text-text-primary">20%</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                  <span>Improved conversion rates by <strong className="text-text-primary">10–25%</strong> through personalization and recommendation systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                  <span>Reduced manual operational effort by up to <strong className="text-text-primary">60%</strong> through ML(LLM)Ops automation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                  <span>Reduced inference latency by <strong className="text-text-primary">25%</strong> through model optimization and infrastructure scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                  <span>Improved user engagement, personalization, and revenue through <strong className="text-text-primary">multi-agent AI architectures</strong></span>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Technologies</p>
              <p className="text-body text-text-secondary">
                <strong className="text-text-primary">Frameworks:</strong> PySpark • PyTorch • Scikit-learn • NLTK • SpaCy • Theano • MLflow • Git • Docker • Kubernetes<br/>
                <strong className="text-text-primary">Cloud & DevOps:</strong> Azure Databricks • Microsoft Azure • Azure AI Search • Azure Container Apps • AWS EC2 • AWS SageMaker • CI/CD Pipelines • MLOps • LLMOps
              </p>
            </div>
          </div>

          {/* Hitachi Vantara */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Senior Consultant (SC2)</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">Hitachi Vantara (Hitachi Data Systems)</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">July 2020 – June 2022 | Pune, India</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Contributed to <strong className="text-text-primary">enterprise data analytics initiatives</strong>, delivering analytics solutions for global customers.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Led <strong className="text-text-primary">cross-functional teams</strong> across analytics and machine learning models, ensuring successful project delivery within scope and timelines.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Successfully delivered enterprise analytics solutions for global customers with strong emphasis on quality and stakeholder collaboration.</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Technologies</p>
              <p className="text-body text-text-secondary">
                Java • AWS • AWS EC2 • Scikit-learn • ML Models • Adobe Experience Manager (AEM)
              </p>
            </div>
          </div>

          {/* Relevance Lab */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Team Lead</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">Relevance Lab</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">April 2016 – July 2020 | Bangalore, India</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Led a team of <strong className="text-text-primary">10+ professionals</strong> across project planning, execution, and delivery.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Coordinated <strong className="text-text-primary">stakeholder communication</strong> and mentored team members to ensure consistent delivery quality.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Ensured quality standards and delivery timelines were consistently met across multiple concurrent projects.</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Technologies</p>
              <p className="text-body text-text-secondary">
                Java • Kafka • Docker • AWS • AWS S3 • AWS EC2
              </p>
            </div>
          </div>

          {/* Sapient */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Associate Technology L2</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">Sapient</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">September 2014 – April 2016 | Bangalore, India</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Developed <strong className="text-text-primary">web applications</strong> using Adobe Experience Manager (AEM), delivering enterprise digital experience platforms.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Built backend services with Java and front-end solutions with JavaScript, HTML, and CSS.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Contributed to enterprise digital experience platform delivery for global clients.</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Technologies</p>
              <p className="text-body text-text-secondary">
                Java • AWS • Adobe Experience Manager (AEM) • JavaScript • HTML • CSS
              </p>
            </div>
          </div>

          {/* Cognizant */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-heading-2 font-bold text-text-primary">Programmer Analyst</h3>
                <p className="text-body-lg text-accent font-semibold mt-1">Cognizant</p>
              </div>
              <p className="text-body text-text-tertiary mt-2 md:mt-0">December 2012 – August 2014 | Chennai, India</p>
            </div>
            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Developed <strong className="text-text-primary">enterprise Java applications</strong> and web services for global enterprise clients.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Built scalable backend systems and contributed to full-stack development projects.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>Gained foundational experience in enterprise software development, establishing the technical foundation for later engineering leadership roles.</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Technologies</p>
              <p className="text-body text-text-secondary">
                Java • AWS • Adobe Experience Manager (AEM) • Web Services
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-8">Education</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="text-heading-2 font-bold text-text-primary">Ph.D. in Information Technology</h3>
              <p className="text-body-lg text-accent font-semibold mt-1">Vellore Institute of Technology (VIT), India</p>
              <p className="text-body text-text-tertiary mt-1">2014 – 2020</p>
              <div className="mt-4">
                <p className="text-body font-semibold text-text-primary mb-2">Research Focus</p>
                <p className="text-body text-text-secondary">
                  Machine Learning research on rumor control in online social networks using neural networks and bio-inspired algorithms. Published multiple papers in Scopus-indexed journals.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="text-heading-2 font-bold text-text-primary">Master's Degree in Software Engineering</h3>
              <p className="text-body-lg text-accent font-semibold mt-1">Vellore Institute of Technology (VIT), India</p>
              <p className="text-body text-text-tertiary mt-1">2007 – 2012</p>
              <div className="mt-4">
                <p className="text-body text-text-secondary">
                  Advanced study in software engineering, algorithms, and system design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-display-3 font-bold text-text-primary mb-8">Professional Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">Academy Accreditation - Generative AI Fundamentals</p>
              <p className="text-body text-accent mt-1">Databricks</p>
              <p className="text-body text-text-tertiary text-sm mt-1">Issued May 2026 • Credential ID: 182259131</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">Working Effectively with Stakeholders</p>
              <p className="text-body text-accent mt-1">Google</p>
              <p className="text-body text-text-tertiary text-sm mt-1">Issued Mar 2026 • Credential ID: RUCTG2BDI44Q</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">Deep Learning Specialization</p>
              <p className="text-body text-accent mt-1">Coursera</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">Mathematics for Machine Learning Specialization</p>
              <p className="text-body text-accent mt-1">Coursera</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">Oracle Certified Java Developer</p>
              <p className="text-body text-accent mt-1">Oracle</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-body-lg text-text-primary font-semibold">Adobe Certified AEM Development Expert</p>
              <p className="text-body text-accent mt-1">Adobe</p>
            </div>
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