export const SITE_CONFIG = {
  name: 'Dr. Santhoshkumar',
  fullName: 'Dr. Santhoshkumar',
  title: 'Senior Data Scientist / Senior ML Engineer',
  tagline: 'Building production AI systems with LLMs, RAG, and MLOps',
  description:
    'I build reliable AI systems that work in production. Specializing in making search intelligent, LLMs useful, and ML operations repeatable at enterprise scale.',
  company: 'Eurowings Digital GmbH',
  currentRole: 'Senior Data Scientist / Senior ML Engineer',
  location: 'Europe | Remote',
  email: 'santhoshramuk@gmail.com',
  url: 'https://santhosh790.github.io',
} as const

export const CAREER_METRICS = {
  experience: '13+',
  experienceLabel: 'Years Experience',
  systems: '4',
  systemsLabel: 'Production AI Systems',
  llmApps: '3',
  llmAppsLabel: 'LLM Applications',
  focus: 'Enterprise',
  focusLabel: 'MLOps Projects',
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/santhosh790',
  linkedin: 'https://www.linkedin.com/in/dr-santhoshkumar-s-9ab69a48/',
  scholar: 'https://scholar.google.com/citations?hl=en&user=2U2D8dAAAAAJ',
  substack: 'https://drsanthosh.substack.com/',
  resume: '/resume',
} as const

export const HERO_SIGNALS = [
  'Search & Retrieval',
  'LLM Systems',
  'Production MLOps',
  'Databricks',
  'Azure',
] as const

export const NAVIGATION = [
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
] as const

export const FEATURED_PROJECTS = [
  {
    id: 'ai-search',
    title: 'AI-Powered Semantic Search',
    slug: 'ai-search',
    company: 'Eurowings · Lufthansa Group',
    duration: '4-month production rollout',
    tagline: 'Enterprise search powered by embeddings, retrieval, and LLMs',
    description:
      'Built an onsite search and FAQ discovery platform for airline e-commerce, handling natural-language search, multilingual queries, and hybrid retrieval at customer scale.',
    impact: ['18% fewer support calls', '45% higher satisfaction', '40% lower latency'],
    tags: ['Semantic Search', 'RAG', 'Vector Search', 'GPT-4', 'LlamaIndex', 'Databricks'],
    category: 'flagship',
    featured: true,
    businessProblem:
      'Keyword-only search caused poor retrieval for natural-language questions, multilingual queries, and support intent inside booking journeys.',
    architecture: [
      'Nuxt.js website and backend search API',
      'Databricks query understanding for language detection, spelling correction, and intent extraction',
      'Hybrid BM25 + vector retrieval with confidence scoring and reranking',
      'LLM summarization for high-confidence answer generation',
    ],
    technicalDecisions: [
      'Used hybrid retrieval because vector search alone created false positives and keyword search alone missed semantic intent.',
      'Kept retrieval deterministic and used GPT-4 only for final summarization to control cost and hallucinations.',
      'Used Databricks Vector Search to align with existing governance, security, and deployment workflows.',
    ],
    productionChallenges: [
      'Reduced latency with caching, parallel retrieval, prompt optimization, and top-k tuning.',
      'Introduced confidence thresholds and score-gap heuristics to handle vector-search false positives.',
      'Added offline golden-set evaluation and canary rollback after an embedding-model update hurt recall.',
    ],
    outcomes: [
      '18% reduction in customer support calls',
      '45% increase in search satisfaction',
      '40% reduction in average latency',
      'Higher self-service engagement for baggage, cancellation, and check-in content',
    ],
    links: [
      {
        label: 'Databricks customer story',
        href: 'https://www.databricks.com/customers/eurowings',
      },
      {
        label: 'Why Vector Search Never Says No Results',
        href: 'https://drsanthosh.substack.com/p/why-vector-search-never-says-no-results',
      },
    ],
  },
  {
    id: 'enterprise-rag',
    title: 'Enterprise AI Customer Support',
    slug: 'enterprise-rag',
    company: 'Eurowings · Lufthansa Group',
    duration: '3-month production rollout',
    tagline: 'Conversational AI for enterprise customer support',
    description:
      'Designed and deployed a customer-support chatbot over enterprise help content, reducing repetitive questions while maintaining citation-backed responses.',
    impact: ['Reduced repetitive tickets', 'Faster resolution', 'Higher self-service rate'],
    tags: ['RAG', 'GPT-4', 'LlamaIndex', 'Conversational AI', 'Azure'],
    category: 'llm',
    featured: true,
    businessProblem:
      'Customers repeatedly asked about baggage, cancellations, refunds, check-in, and special assistance, overloading support channels.',
    architecture: [
      'Azure OpenAI GPT-4 with retrieval-augmented answer generation',
      'Hybrid search over FAQs, policy documents, and support content',
      'Session-aware conversation memory for follow-up questions',
      'Fallback handoff to human support for low-confidence answers',
    ],
    technicalDecisions: [
      'Used citation-enforced prompts to make answer quality auditable and safer in customer-facing flows.',
      'Kept context memory scoped to the session to preserve relevance without over-retaining noise.',
      'Added confidence thresholds and escalation paths instead of forcing the model to answer every request.',
    ],
    productionChallenges: [
      'Controlled hallucinations with retrieval-only prompting and explicit citation enforcement.',
      'Tracked conversation success, escalation rate, hallucination rate, and user feedback.',
      'Built a golden QA dataset and combined human review with LLM-as-a-judge evaluation.',
    ],
    outcomes: [
      'Reduced repetitive support workload',
      'Improved first-response speed',
      'Raised customer self-service completion',
    ],
    links: [
      {
        label: 'Related search engineering writing',
        href: 'https://drsanthosh.substack.com/p/why-vector-search-never-says-no-results',
      },
    ],
  },
  {
    id: 'mlops-platform',
    title: 'Enterprise MLOps Platform',
    slug: 'mlops-platform',
    company: 'Eurowings · Lufthansa Group',
    duration: '6-month platform build',
    tagline: 'Infrastructure for operating ML at scale',
    description:
      'Built the platform layer for governed ML deployment on Azure Databricks, standardizing CI/CD, registry workflows, monitoring, and access control across teams.',
    impact: ['Weeks → Hours deployment', 'Standardized deployments', 'Improved governance'],
    tags: ['MLOps', 'Databricks', 'MLflow', 'Unity Catalog', 'Azure DevOps'],
    category: 'platform',
    featured: true,
    businessProblem:
      'Teams deployed models inconsistently, with weak governance, fragmented monitoring, and no reproducible delivery path.',
    architecture: [
      'Git and Azure DevOps for versioned pipelines',
      'Databricks MLflow tracking and model registry',
      'Unity Catalog and Feature Store for governance',
      'Serving endpoints and monitoring dashboards for production models',
    ],
    technicalDecisions: [
      'Standardized around Databricks and MLflow to reduce platform sprawl and make delivery repeatable.',
      'Used Unity Catalog and Key Vault integration to align access control with enterprise governance.',
      'Built reusable CI/CD templates rather than one-off project pipelines to reduce setup time across teams.',
    ],
    productionChallenges: [
      'Solved secret management with Azure Key Vault integration.',
      'Implemented drift, latency, failure, and feature-quality monitoring for deployed models.',
      'Created reusable deployment templates to move teams from ad hoc releases to governed delivery.',
    ],
    outcomes: [
      'Reduced deployment time from weeks to hours',
      'Standardized delivery across ML teams',
      'Improved reproducibility and platform governance',
    ],
    links: [],
  },
  {
    id: 'forecasting-platform',
    title: 'AI Forecasting & Personalization',
    slug: 'forecasting-platform',
    company: 'Eurowings · Lufthansa Group',
    duration: '5-month production rollout',
    tagline: 'Predictive modeling for business decisions',
    description:
      'Applied forecasting and recommendation pipelines to improve planning accuracy, targeting quality, and campaign efficiency across digital operations.',
    impact: ['Improved forecast accuracy', 'Better targeting', 'Reduced manual effort'],
    tags: ['XGBoost', 'Prophet', 'Collaborative Filtering', 'Time Series'],
    category: 'ml',
    featured: true,
    businessProblem:
      'Manual forecasting and non-personalized campaigns created planning inefficiencies and weaker customer targeting.',
    architecture: [
      'Feature pipelines for reusable forecasting inputs',
      'Ensemble forecasting with XGBoost, Prophet, Random Forest, and regression models',
      'Collaborative and similarity-based recommendation components for personalization',
      'Automated retraining and monitoring for drift-prone signals',
    ],
    technicalDecisions: [
      'Used a mix of forecasting models rather than a single approach to fit different planning horizons and feature availability.',
      'Added popularity-based fallbacks to reduce cold-start degradation in recommendation workflows.',
      'Invested early in reusable feature pipelines to reduce repeated manual engineering effort.',
    ],
    productionChallenges: [
      'Operationalized retraining to respond to concept drift.',
      'Tracked RMSE, MAE, MAPE, CTR, and recommendation acceptance to connect model quality to business use.',
      'Built fallback behavior for sparse or cold-start recommendation segments.',
    ],
    outcomes: [
      'Improved forecast accuracy for planning workflows',
      'Raised campaign targeting quality',
      'Reduced manual planning effort',
    ],
    links: [],
  },
] as const

export const WRITING_LINKS = [
  {
    title: 'Why Vector Search Never Says "No Results"',
    description:
      'A production lesson on false positives, confidence thresholds, and why semantic retrieval needs explicit failure handling.',
    date: '2026-07-07',
    tags: ['Vector Search', 'Search Evaluation', 'RAG'],
    readingTime: '8 min read',
    href: 'https://drsanthosh.substack.com/p/why-vector-search-never-says-no-results',
  },
  {
    title: 'Eurowings Search Modernization on Databricks',
    description:
      'A customer-facing view of the airline search modernization work spanning retrieval quality, latency, and self-service outcomes.',
    date: '2025-11-01',
    tags: ['Databricks', 'Search Platform', 'Enterprise AI'],
    readingTime: '5 min read',
    href: 'https://www.databricks.com/customers/eurowings',
  },
] as const

export const BLOG_POSTS = [
  {
    slug: 'why-vector-search-never-says-no-results',
    title: 'Why Vector Search Never Says "No Results"',
    summary:
      'A production lesson on false positives, confidence thresholds, and why semantic retrieval needs explicit failure handling.',
    date: '2026-07-07',
    readingTime: '8 min read',
    tags: ['Vector Search', 'Search Evaluation', 'RAG'],
    category: 'LLM Engineering',
    sourceUrl: 'https://drsanthosh.substack.com/p/why-vector-search-never-says-no-results',
    body: [
      'Vector search systems are designed to always return nearest neighbors, even when user intent has no meaningful match in the corpus.',
      'In production, this means "always returning something" can easily become "returning misleading results" unless confidence is explicitly modeled.',
      'In our search platform, reliability improved when retrieval included confidence thresholds, keyword overlap checks, metadata validation, and score-gap heuristics.',
      'The key engineering lesson is that retrieval quality is not only about finding relevant results; it is also about knowing when not to answer automatically.',
    ],
  },
  {
    slug: 'how-llms-can-benefit-from-self-generated-context-memento',
    title: 'How LLMs Can Benefit from Self-Generated Context: Memento',
    summary:
      'A practical synthesis of Memento research and why context compression matters for KV cache, throughput, and cost in long-running reasoning systems.',
    date: '2026-07-01',
    readingTime: '9 min read',
    tags: ['LLM', 'Context Engineering', 'Inference Optimization'],
    category: 'LLM Engineering',
    sourceUrl:
      'https://myresearchworks.wordpress.com/2026/07/01/how-llms-can-benefit-from-self-generated-context-memento/',
    body: [
      'Long-context reasoning increases KV cache pressure and inference cost because every generated token remains part of the active context.',
      'The Memento approach reframes this by teaching models to create compact self-generated state at logical checkpoints instead of carrying full reasoning traces forward.',
      'For production teams, this is relevant because it suggests a path to improve throughput and memory efficiency without heavily degrading task accuracy.',
      'The broader system design lesson is to treat context management as a first-class model capability, not only as an external orchestration concern.',
    ],
  },
  {
    slug: 'llm-how-response-generated-sampling',
    title: 'LLM: How Response Generated - Sampling',
    summary:
      'A practical explanation of sampling controls like temperature, top-k, top-p, and constrained decoding for balancing determinism and creativity.',
    date: '2024-08-23',
    readingTime: '8 min read',
    tags: ['LLM', 'Sampling', 'Decoding'],
    category: 'LLM Fundamentals',
    sourceUrl: 'https://myresearchworks.wordpress.com/2024/08/23/llm-how-response-generated-sampling/',
    body: [
      'Sampling governs how a model chooses the next token from its probability distribution, which directly affects quality, consistency, and variation.',
      'Temperature, top-k, and top-p each shape output diversity differently, and they must be tuned to the target task instead of treated as static defaults.',
      'Constrained decoding becomes especially useful for structured tasks, where free-form generation can produce invalid or unsafe outputs.',
      'The practical takeaway is that decoding strategy is part of product behavior, not just a model parameter.',
    ],
  },
  {
    slug: 'how-llms-are-built',
    title: 'How LLMs Are Built',
    summary:
      'An end-to-end overview of LLM architecture, training lifecycle, and application-layer concerns including alignment and decoding.',
    date: '2024-04-26',
    readingTime: '12 min read',
    tags: ['LLM', 'Transformers', 'Training'],
    category: 'AI Systems',
    sourceUrl: 'https://myresearchworks.wordpress.com/2024/04/26/how-llms-are-built/',
    body: [
      'Building LLM systems spans more than model architecture; it includes data quality, tokenization choices, training objectives, and deployment trade-offs.',
      'The write-up connects core transformer concepts to practical engineering topics such as efficient training, alignment, and output generation methods.',
      'For production applications, the key insight is that model quality depends on a full pipeline, not a single model checkpoint.',
    ],
  },
  {
    slug: 'internet-and-rumors-identify-it-faster',
    title: 'Internet and Rumors - Identify It Faster',
    summary:
      'A research-to-practice summary of early rumor detection using dual CNN design and certainty-factor-based activation.',
    date: '2023-03-20',
    readingTime: '7 min read',
    tags: ['NLP', 'Rumor Detection', 'Deep Learning'],
    category: 'Applied ML Research',
    sourceUrl: 'https://myresearchworks.wordpress.com/2023/03/20/internet-and-rumors-identify-it-faster/',
    body: [
      'Early rumor detection is difficult because signals are sparse at the beginning of an event, when intervention matters most.',
      'The proposed approach combines dual CNN pipelines and certainty-factor-based activation to improve feature extraction under low-data conditions.',
      'This work demonstrates how architecture decisions can target practical constraints such as limited early evidence and response urgency.',
    ],
  },
  {
    slug: 'jupyter-notebook-and-kernel-basics-and-a-fix',
    title: 'Jupyter Notebook and Kernel - Basics and a Fix',
    summary:
      'A practical guide to Python environment and kernel mismatches in notebook workflows, with clear debugging patterns for data science teams.',
    date: '2023-10-16',
    readingTime: '6 min read',
    tags: ['Data Science', 'Jupyter', 'Python Environments'],
    category: 'Data Science Practice',
    sourceUrl:
      'https://myresearchworks.wordpress.com/2023/10/16/jupyter-notebook-and-kernel-basics-and-a-fix/',
    body: [
      'Notebook package issues are often caused by kernel and interpreter mismatches rather than package installation failures.',
      'The article explains how to inspect runtime executables and align environments so imports and execution paths are consistent.',
      'For production-minded data teams, reproducible notebook setup is a key foundation for reliable experimentation and handover.',
    ],
  },
  {
    slug: 'connect-jupyter-with-amazon-aws-athena',
    title: 'Connect Jupyter with Amazon AWS Athena',
    summary:
      'A practical walkthrough for querying large historical datasets from notebooks using Athena, MFA, and Python connectors.',
    date: '2020-04-08',
    readingTime: '7 min read',
    tags: ['Data Engineering', 'Athena', 'AWS', 'Jupyter'],
    category: 'Data Engineering',
    sourceUrl: 'https://myresearchworks.wordpress.com/2020/04/08/connect-jupyter-with-amazon-aws-athena/',
    body: [
      'Querying historical data directly from Athena enables efficient analysis without moving full datasets into local environments.',
      'This guide outlines secure access patterns with IAM and MFA, then connects those credentials to notebook-based analysis workflows.',
      'It reflects a practical bridge between analytics experimentation and cloud-scale data access.',
    ],
  },
  {
    slug: 'a-classification-task-using-theano',
    title: 'A Classification Task Using Theano',
    summary:
      'A from-first-principles walkthrough of logistic regression internals, optimization, and evaluation loops in a deep learning framework.',
    date: '2020-01-02',
    readingTime: '9 min read',
    tags: ['Data Science', 'Classification', 'Deep Learning'],
    category: 'ML Foundations',
    sourceUrl: 'https://myresearchworks.wordpress.com/2020/01/02/a-classification-task-using-theano/',
    body: [
      'Understanding model internals improves debugging and feature-level reasoning beyond black-box library usage.',
      'The post walks through loss design, gradient updates, validation checkpoints, and test evaluation in a practical training loop.',
      'Its lasting value is methodological: reproducible learning pipelines start with clear objective and evaluation design.',
    ],
  },
  {
    slug: 'performance-metrics-in-machine-learning-part-2',
    title: 'Performance Metrics in Machine Learning - Part 2',
    summary:
      'A practical survey of classification and regression metrics, with guidance on when each metric is informative or potentially misleading.',
    date: '2019-12-10',
    readingTime: '8 min read',
    tags: ['Data Science', 'Model Evaluation', 'ML Metrics'],
    category: 'Data Science Foundations',
    sourceUrl: 'https://myresearchworks.wordpress.com/2019/12/10/performance-metrics-in-machine-learning-part-2/',
    body: [
      'Model quality is context-dependent, and metric selection should reflect the business cost of false positives, false negatives, and calibration errors.',
      'The article covers common measures such as precision, recall, F1, ROC-AUC, MAE, MSE, and R-squared with practical interpretation notes.',
      'For production ML, evaluation design is a decision framework, not just a reporting checklist.',
    ],
  },
  {
    slug: 'why-and-how-to-protect-your-web-against-bots',
    title: 'Why and How to Protect Your Web Against Bots',
    summary:
      'A practical security engineering guide for identifying malicious bot activity and applying layered protections for web and API systems.',
    date: '2024-04-29',
    readingTime: '8 min read',
    tags: ['Web Security', 'Bot Protection', 'API'],
    category: 'Engineering Architecture',
    sourceUrl: 'https://myprogressivelearning.wordpress.com/2024/04/29/why-and-how-to-protect-your-web-against-bots/',
    body: [
      'Not all bots are harmful, but malicious automation can skew analytics, degrade service performance, and drive abuse against authentication flows.',
      'A strong defensive posture combines baseline controls like robots rules, rate limiting, and monitoring with deeper tactics such as honey pots and adaptive response strategies.',
      'The main operational lesson is to pair prevention with rapid detection and incident handling so resilience is sustained over time.',
    ],
  },
  {
    slug: 'why-session-handling-is-difficult-in-aem',
    title: 'Why Session Handling Is Difficult in AEM',
    summary:
      'A practical deep dive into state management limits in RESTful AEM flows and realistic alternatives for cross-page information transfer.',
    date: '2023-10-11',
    readingTime: '7 min read',
    tags: ['AEM', 'Session Management', 'REST'],
    category: 'Platform Engineering',
    sourceUrl: 'https://myprogressivelearning.wordpress.com/2023/10/11/why-session-handling-is-difficult-in-aem/',
    body: [
      'Traditional server-side session assumptions often break down in distributed AEM deployments where stateless, cache-aware request handling dominates.',
      'The article evaluates trade-offs across forwarding, redirects, query parameters, selectors, and cookie-based approaches.',
      'It highlights an important enterprise pattern: design for stateless flow continuity early to avoid brittle coupling across services.',
    ],
  },
  {
    slug: 'connection-pooling-integration-with-aem',
    title: 'Connection Pooling - Integration with AEM',
    summary:
      'A performance-focused guide to HTTP client connection pooling for AEM integrations with external systems.',
    date: '2017-11-18',
    readingTime: '6 min read',
    tags: ['AEM', 'Performance', 'HTTPClient'],
    category: 'Platform Engineering',
    sourceUrl: 'https://myprogressivelearning.wordpress.com/2017/11/18/connection-pooling-integration-with-aem/',
    body: [
      'Repeated connection setup to third-party systems can become a hidden latency and reliability bottleneck for content platforms.',
      'Pooling strategies improve throughput by reusing established connections and controlling route-level concurrency.',
      'The practical takeaway is to centralize client configuration and tune pool limits according to traffic and downstream behavior.',
    ],
  },
  {
    slug: 'csrf-in-aem',
    title: 'CSRF in AEM',
    summary:
      'A practical walkthrough of CSRF token handling, referrer controls, and CORS-related protection in AEM environments.',
    date: '2017-06-13',
    readingTime: '6 min read',
    tags: ['AEM', 'CSRF', 'Security'],
    category: 'Security Engineering',
    sourceUrl: 'https://myprogressivelearning.wordpress.com/2017/06/13/csrf-in-aem/',
    body: [
      'Defending against CSRF requires more than a token field; it also depends on request origin policy and server-side verification discipline.',
      'This write-up summarizes how AEM combines cryptographic token checks with referrer and policy controls for safer POST handling.',
      'For enterprise delivery teams, the key is to treat CSRF protection as part of deployment configuration and integration testing, not only code.',
    ],
  },
  {
    slug: 'aem-6-2-issues-and-resolution',
    title: 'AEM 6.2 - Issues and Resolution',
    summary:
      'Field notes on upgrade-related issues, diagnostics, and practical fixes encountered while adopting AEM 6.2.',
    date: '2016-11-28',
    readingTime: '7 min read',
    tags: ['AEM', 'Upgrade', 'Troubleshooting'],
    category: 'Platform Engineering',
    sourceUrl: 'https://myprogressivelearning.wordpress.com/2016/11/28/aem-6-2-issues-and-resolution/',
    body: [
      'Early upgrade cycles often expose edge-case failures in tooling, compatibility, and runtime behavior across large platform stacks.',
      'The article captures practical fixes for common migration pain points, including request call limits and dependency/version transitions.',
      'Its value is in operational realism: successful upgrades depend on systematic diagnostics and controlled remediation steps.',
    ],
  },
  {
    slug: 'eurowings-search-modernization-on-databricks',
    title: 'Eurowings Search Modernization on Databricks',
    summary:
      'A case-driven view of improving retrieval quality, latency, and customer self-service in airline digital journeys.',
    date: '2025-11-01',
    readingTime: '5 min read',
    tags: ['Databricks', 'Search Platform', 'Enterprise AI'],
    category: 'Production AI Lessons',
    sourceUrl: 'https://www.databricks.com/customers/eurowings',
    body: [
      'Modernizing enterprise search required balancing semantic relevance, response latency, and operational reliability under real customer traffic.',
      'Hybrid retrieval, targeted reranking, and strict evaluation loops allowed the team to improve customer outcomes while controlling response cost and complexity.',
      'The strongest outcome came from treating search as a system-design problem instead of a standalone model problem.',
    ],
  },
] as const

export const TECH_STACK = {
  'Generative AI & LLMs': [
    'GPT-4',
    'Azure OpenAI',
    'LlamaIndex',
    'LangChain',
    'RAG',
    'Prompt Engineering',
    'Vector Search',
    'Semantic Search',
  ],
  'ML Engineering': [
    'Python',
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'XGBoost',
    'MLflow',
    'Model Serving',
  ],
  'MLOps & Platform': [
    'Databricks',
    'Azure ML',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Model Monitoring',
    'Unity Catalog',
  ],
  'Data & Search': [
    'Vector Databases',
    'Azure AI Search',
    'Elasticsearch',
    'SQL',
    'NoSQL',
    'Data Pipelines',
  ],
  'Cloud & Infrastructure': ['Azure', 'AWS', 'FastAPI', 'REST APIs', 'Microservices'],
} as const

export const LEADERSHIP_HIGHLIGHTS = [
  {
    title: 'PhD in Machine Learning',
    detail: 'VIT, Vellore · 2020 · GPA 9/10',
    description:
      'Completed doctoral research on rumor detection and control with deep learning.',
  },
  {
    title: '4 Years Team Leadership',
    detail: 'Team Lead, AEM Development · 2016-2020',
    description:
      'Led software delivery teams while completing PhD research in parallel.',
  },
  {
    title: '13+ Years in Industry',
    detail: 'From Java/AEM to Production AI',
    description:
      'Progressed from enterprise software engineering to ownership of production AI systems.',
  },
] as const

export const PUBLICATIONS = [
  {
    title: 'A Parallel Neural Network approach for Faster Rumor Identification in Online Social Networks',
    venue: 'International Journal on Semantic Web and Information Systems (IJSWIS)',
    year: '2019',
    impact: 'CNN architecture for early rumor identification.',
    doi: 'https://doi.org/10.4018/IJSWIS.2019100105',
  },
  {
    title: 'A Bio-inspired Defensive Rumor Confinement Strategy in Online Social Networks',
    venue: 'Journal of Organizational and End User Computing',
    year: '2020',
    impact: 'Bio-inspired strategy for rumor containment.',
    doi: 'https://doi.org/10.4018/IJWSR.2020010104',
  },
  {
    title: 'A Neuro-Fuzzy approach to detect Rumors in Online Social Networks',
    venue: 'International Journal of Web Services Research (IJWSR)',
    year: '2020',
    impact: 'Hybrid neuro-fuzzy model for rumor detection.',
    doi: 'https://doi.org/10.4018/IJWSR.2020010104',
  },
  {
    title: 'Interest Aware Influential Information Disseminators in Social Networks',
    venue: 'SN Applied Sciences (Springer)',
    year: '2019',
    impact: 'Influence modeling for targeted information diffusion.',
    doi: 'https://doi.org/10.1007/s42452-019-1436-x',
  },
  {
    title: 'An Effective Rumor Control Approach for Online Social Networks',
    venue: 'Information Systems Design and Intelligent Applications (Springer)',
    year: '2019',
    impact: 'Pulse-vaccination inspired rumor control strategy.',
    doi: 'https://rd.springer.com/chapter/10.1007/978-981-13-3329-3_7',
  },
] as const

export const SPEAKING = [
  {
    title: 'International Faculty Development Program (6-days)',
    venue: 'Gopalan College of Engineering and Management (GCEM)',
    date: '2025-02-03 to 2025-02-08',
    location: 'Bengaluru, India',
    summary:
      'Delivered NLP and data science sessions for faculty, with research directions and live demos.',
    links: ['/images/FDPPoster1.jpg', '/images/FDPPoster2.jpg'],
  },
  {
    title: 'Guest Lecture on Professional Software Development Using Java',
    venue: 'School of Information Technology and Engineering',
    date: '2020-02-05',
    location: 'VIT, Vellore',
    summary: 'Presented software engineering process, tools, and applied Java practices.',
    links: [],
  },
  {
    title: 'Conference Proceedings talk on Rumor Control',
    venue: 'INDIA-2018',
    date: '2018-07-20',
    location: 'Mauritius',
    summary: 'Presented pulse-vaccination based rumor control research.',
    links: ['https://santhosh790.github.io/files/conference-certificate.pdf'],
  },
] as const

export const CERTIFICATIONS = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/XH26VNFGSB99',
  },
  {
    title: 'Mathematics for Machine Learning Specialization',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/D7HUKS5ZNCJK',
  },
  {
    title: 'Oracle Certified Java Developer',
    issuer: 'Oracle',
    link: '',
  },
  {
    title: 'Adobe Certified AEM Development Expert',
    issuer: 'Adobe',
    link: '',
  },
] as const
