export const site = {
  name: 'Virum Ranka',
  headline: 'Software Dev Engineer | Evaluation at Scale | LLMs',
  intro:
    "I build LLM systems that survive production — and the evaluation, monitoring, and guardrails that keep them reliable. Currently an MS Data Science student at the University of Michigan.",
  location: 'Ann Arbor, MI',
  email: 'virum@umich.edu',
  github: 'https://github.com/Virum9520',
  linkedin: 'https://linkedin.com/in/virumranka',
  resumeUrl: '/portfolio/assets/resume.pdf',
};

export const experience = [
  {
    id: 'dte',
    role: 'AI & Data Intern',
    company: 'DTE Energy',
    location: 'Detroit, MI',
    dates: 'Jun 2026 – Present',
    summary:
      'Built AgentOps, a LangGraph agent that automates L1 support for 1,800+ Azure Data Factory and Databricks pipelines. It cut triage time 3.5x and saves an estimated $15K a month.',
    bullets: [
      'Set up MLflow monitoring and evaluation: LangGraph execution traces plus 30 regression tests that run daily to catch drift in agent behavior.',
      'Designed human-in-the-loop guardrails around API tool calls, then iterated on them with feedback from the platform team.',
    ],
    tags: ['Python', 'LangGraph', 'MLflow', 'Azure', 'Databricks', 'React'],
  },
  {
    id: 'michmed',
    role: 'Software Developer',
    company: 'Michigan Medicine',
    location: 'Ann Arbor, MI',
    dates: 'Apr 2026 – Jun 2026',
    summary:
      'Architected a configuration-driven multi-agent platform for healthcare research. One interface, 5+ LLM providers, three specialized agent teams.',
    bullets: [
      'Built hybrid retrieval over PubMed, web search, and chat history: contextual chunking, BM25 + embeddings, reciprocal-rank fusion, cross-encoder reranking.',
      'Optimized long-term memory that streams and summarizes conversations into ChromaDB — 30% less context in long chats, with semantic search over past sessions.',
    ],
    tags: ['Python', 'RAG', 'ChromaDB', 'PyTorch', 'GPU Inference'],
  },
  {
    id: 'lsa',
    role: 'Graduate AI Researcher',
    company: 'University of Michigan LSA',
    location: 'Ann Arbor, MI',
    dates: 'Nov 2025 – Mar 2026',
    summary:
      'Ran controlled A/B evaluations of data-analysis agents across four LLM baselines. The findings became a VLDB 2026 workshop paper.',
    bullets: [
      'Defined task-level accuracy and quality metrics, and built ground-truth benchmarks with few-shot prompting.',
      'Built an analytics dashboard tracking accuracy, failure categories, and retrieval quality across runs — made comparing model and RAG configs fast.',
      'Developed DuRAG, a dual-layer graph RAG over research data spanning 353+ variables; multi-agent orchestration improved task accuracy 35%.',
    ],
    tags: ['LLM Evaluation', 'Benchmarking', 'Python', 'Graph RAG'],
  },
  {
    id: 'sprect',
    role: 'AI/ML Engineer Intern',
    company: 'Sprect Pvt. Ltd.',
    location: 'Mumbai, India',
    dates: 'Aug 2024 – Dec 2024',
    summary:
      'Fine-tuned BERT and RoBERTa for intent classification on 25,000 social-media samples, lifting recall 18%.',
    bullets: [
      'Took recommendations from similarity baselines to gradient-boosted ranking on profile and engagement features, validated with offline metrics.',
    ],
    tags: ['PyTorch', 'Hugging Face', 'Recommender Systems'],
  },
];

export const publications = [
  {
    id: 'scidata',
    title: 'National and State-Level Datasets of United States Forensic DNA Databases 2001–2025',
    authors: 'Pryor, Y., Ranka, V., et al.',
    venue: 'Scientific Data (Nature Portfolio), 2026',
    link: 'https://doi.org/10.1038/s41597-026-07605-5',
    linkLabel: 'DOI: 10.1038/s41597-026-07605-5',
    note: 'Built and validated 25 years of national and state-level forensic DNA database records into open, analysis-ready datasets.',
  },
  {
    id: 'vldb',
    title: 'Walk Before You Run: The Importance of Data Exploration for Data Analysis Agents',
    authors: 'Yuan, Y., Ranka, V., et al.',
    venue: 'VLDB 2026 Workshop',
    link: 'https://doi.org/10.48550/arXiv.2608.16045',
    linkLabel: 'arXiv: 2608.16045',
    note: 'Benchmarked how structured data exploration changes what LLM analysis agents get right — and where they fail without it.',
  },
];

export const education = [
  {
    id: 'umich',
    school: 'University of Michigan, Ann Arbor',
    degree: 'M.S. in Data Science',
    dates: 'Aug 2025 – May 2027',
    detail: 'GPA 3.8/4 · Applied ML, NLP, Big Data Engineering, Cloud Computing, Database Design',
  },
  {
    id: 'mumbai',
    school: 'University of Mumbai',
    degree: 'B.Tech. in Computer Science and Engineering',
    dates: 'Aug 2021 – May 2025',
    detail: 'GPA 9.2/10 · Data Structures & Algorithms, Operating Systems, Distributed Systems, Software Engineering',
  },
];

export const skills = [
  { group: 'Languages', items: 'Python, C/C++, TypeScript, Java, SQL, Shell' },
  {
    group: 'LLMs & ML',
    items: 'PyTorch, Hugging Face, LangGraph, RAG, LLM Evaluation, MLflow, TensorFlow',
  },
  {
    group: 'Software',
    items: 'REST APIs, GraphQL, Microservices, Distributed Systems, Production Debugging & Monitoring, Git, CI/CD',
  },
  {
    group: 'Cloud & Data',
    items: 'AWS, Azure, Databricks, Docker, Kafka, PostgreSQL, MongoDB, Snowflake',
  },
];
