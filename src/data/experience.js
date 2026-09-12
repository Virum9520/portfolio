export const experience = [
  {
    id: 'dte-energy',
    role: 'AI & Data Intern',
    company: 'DTE Energy',
    location: 'Detroit, MI',
    dates: 'Jun 2026 – Present',
    oneLiner:
      'Built AgentOps, a LangGraph agent automating L1 support for 1,800+ data pipelines — triage is 3.5x faster.',
    tags: ['Python', 'LangGraph', 'MLflow', 'Azure Data Factory', 'Databricks', 'React'],
    highlights: [
      '3.5x reduction in triage time across 1,800+ Azure Data Factory and Databricks pipelines',
      'An estimated $15K/month in operational savings',
      'MLflow evaluation system with LangGraph execution traces and 30 daily regression tests',
      'Human-in-the-loop guardrails on every API tool call',
    ],
    writeup: [
      'DTE runs 1,800+ data pipelines across Azure Data Factory and Databricks. When one fails, an engineer has to figure out what broke, where, and whether it matters — the classic L1 support grind. My internship project is AgentOps, an agent that does that first pass automatically.',
      'The system is built in Python on LangGraph, with a React frontend for the support team. When a pipeline fails, the agent pulls run history, logs, and lineage across both clouds, forms a diagnosis, and proposes a fix. The result so far: triage that took an engineer most of an hour now takes minutes — a 3.5x reduction, worth an estimated $15K a month.',
      'An agent that touches production infrastructure needs a leash. Every API tool call goes through human-in-the-loop guardrails: the agent proposes, a person approves. I worked directly with the data-platform team to shape these controls, and iterated on the agent using their feedback.',
      'The part I care most about is the evaluation system. I set up MLflow-based monitoring that captures full LangGraph execution traces, and a suite of 30 regression tests that runs every day. If a model update or prompt change shifts the agent\u2019s behavior, we know before users do. That\u2019s the difference between a demo and a system people rely on.',
    ],
  },
  {
    id: 'michigan-medicine',
    role: 'Software Developer',
    company: 'Michigan Medicine',
    location: 'Ann Arbor, MI',
    dates: 'Apr 2026 – Jun 2026',
    oneLiner:
      'Architected a multi-agent AI platform for healthcare research — 5+ LLM providers behind one interface.',
    tags: ['Python', 'RAG', 'ChromaDB', 'PyTorch', 'GPU Inference'],
    highlights: [
      'Configuration-driven platform unifying 5+ LLM providers and three specialized agent teams',
      'Hybrid retrieval: BM25 + embeddings, reciprocal-rank fusion, cross-encoder reranking',
      'Long-term memory that cut context size 30% in long conversations',
      'Profiler-guided GPU optimization of embedding and reranking inference',
    ],
    writeup: [
      'Healthcare researchers at Michigan Medicine needed AI tooling for literature research and writing workflows — but no single LLM provider was the right answer for every task, and the requirements kept changing. So I architected the platform to be configuration-driven: 5+ LLM providers unified behind a single agent interface, with three specialized agent teams composed from config rather than code.',
      'Retrieval was the core engineering problem. The platform searches PubMed, the web, and past conversations, so I designed a ChromaDB vector store with contextual chunking and hybrid search — BM25 alongside embeddings, merged with reciprocal-rank fusion, then reranked with a cross-encoder. Each stage earned its place by measurably improving what the agents retrieved.',
      'Long research conversations blow past context windows fast. I optimized a memory system that streams and summarizes chat history into persistent ChromaDB storage, with semantic search over past sessions. It cut context size by 30% in long conversations without losing the thread.',
      'Under the hood, I also optimized the Transformer embedding and cross-encoder models on NVIDIA GPUs — batching, mixed precision, and profiler-guided tuning — so retrieval stayed fast as the corpus grew.',
    ],
  },
  {
    id: 'umich-lsa',
    role: 'Graduate AI Researcher',
    company: 'University of Michigan LSA',
    location: 'Ann Arbor, MI',
    dates: 'Nov 2025 – Mar 2026',
    oneLiner:
      'Ran controlled evaluations of data-analysis agents across four LLM baselines — the work became a VLDB 2026 paper.',
    tags: ['LLM Evaluation', 'Benchmarking', 'Python', 'Graph RAG'],
    highlights: [
      'Controlled A/B-style experiments across four LLM baselines',
      'Ground-truth benchmarks built with few-shot prompting',
      'Analytics dashboard for accuracy, failure categories, and retrieval quality',
      'DuRAG: dual-layer graph RAG over 353+ variables, +35% task accuracy',
      'Co-authored a VLDB 2026 workshop paper from the findings',
    ],
    writeup: [
      'The research question: how well do LLM agents actually analyze data, and what changes their success rate? Answering it required evaluation discipline more than modeling tricks.',
      'I designed controlled A/B-style experiments across four LLM baselines, defining task-level accuracy and quality metrics up front. To score the agents at all, I built ground-truth benchmarks using few-shot prompting — you can\u2019t measure improvement without a trustworthy answer key.',
      'Comparing dozens of runs by reading logs doesn\u2019t scale, so I built a Python analytics dashboard that tracks model accuracy, failure categories, retrieval quality, and experiment results across evaluation runs. It turned model-vs-model and RAG-config comparisons from an afternoon of spreadsheet work into a glance.',
      'On the systems side, I developed DuRAG, a dual-layer graph RAG that builds knowledge graphs from research data spanning 353+ variables. With multi-agent orchestration on top, task accuracy improved 35%.',
      'The central finding — that agents which explore data before analyzing it perform meaningfully better — became "Walk Before You Run," accepted at a VLDB 2026 workshop.',
    ],
  },
  {
    id: 'sprect',
    role: 'AI/ML Engineer Intern',
    company: 'Sprect Pvt. Ltd.',
    location: 'Mumbai, India',
    dates: 'Aug 2024 – Dec 2024',
    oneLiner:
      'Fine-tuned BERT and RoBERTa for intent classification — recall up 18% on 25,000 social-media samples.',
    tags: ['PyTorch', 'Hugging Face', 'Recommender Systems'],
    highlights: [
      '+18% recall on multiclass intent classification over 25,000 samples',
      'GPU training optimized with mixed precision, dynamic padding, and gradient accumulation',
      'Recommendations upgraded from similarity baselines to gradient-boosted ranking',
    ],
    writeup: [
      'Sprect is a professional-networking startup, and my job was to help it understand its users. The first project was multiclass intent classification: fine-tuning BERT and RoBERTa on 25,000 social-media text samples to identify potential users of the platform. Recall improved 18%.',
      'Getting there was as much about training efficiency as model choice. I optimized GPU training with mixed precision, dynamic padding, gradient accumulation, and batch-size tuning — the difference between iterating daily and iterating hourly.',
      'The second project was recommendations for new users. I started with popularity and similarity baselines, then moved to gradient-boosted ranking models over profile and engagement features, comparing offline metrics at each step. The result cut average profile-setup time by about three minutes.',
    ],
  },
];
