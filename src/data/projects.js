export const projects = [
  {
    slug: 'mini-replit',
    title: 'Mini-Replit — a Browser IDE',
    oneLiner:
      'A Replit-inspired IDE that runs entirely in the browser. Real Python and JavaScript execution, zero backend.',
    stack: ['TypeScript', 'React', 'Pyodide', 'WebAssembly', 'Monaco'],
    github: 'https://github.com/Virum9520/mini-replit',
    live: 'https://virum9520.github.io/mini-replit/',
    year: '2026',
    highlights: [
      'Executes real CPython (via Pyodide/WebAssembly) and sandboxed JavaScript from static files on GitHub Pages',
      'Full IDE loop: file tree, editor tabs, run button, console, deployment advisor',
      'Cloud Architect renders live AWS architecture diagrams that morph as you change requirements',
    ],
    writeup: [
      'Most "browser IDEs" are thin clients for a server somewhere. This one has no server at all. It ships as static files from GitHub Pages, yet it runs real code: CPython compiled to WebAssembly for Python, and a sandboxed iframe for JavaScript and HTML.',
      'The execution model was the fun part. For JavaScript, the workspace compiles into a single self-contained document — local script and stylesheet references get inlined from the in-memory file system, a console shim is injected, and the result renders in an iframe with strict sandboxing. The shim forwards console output, runtime errors, and unhandled rejections back to the host via postMessage.',
      'Python runs on Pyodide, lazy-loaded on the first run so users who never touch Python never pay the ~10 MB download. Workspace .py files get written into Pyodide\u2019s in-memory filesystem, so local imports just work. The workspace itself persists in localStorage with starter templates, so edits survive reloads with zero infrastructure.',
      'The differentiator is the Cloud Architect. It analyzes your workspace for server-ish signals (Flask, Express, WebSocket servers), takes requirements through a log-scale traffic slider and budget toggles, and recommends an AWS architecture rendered as a live SVG diagram. It looks like an AI advisor, but it\u2019s a deterministic heuristics engine — every recommendation is reproducible, and it needs no API keys.',
    ],
  },
  {
    slug: 'distributed-job-scheduler',
    title: 'Fault-Tolerant Distributed Job Scheduler',
    oneLiner:
      'A distributed task-execution system in C++ that stayed correct through 100K+ jobs and deliberate worker failures.',
    stack: ['C++', 'Python', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    github: null,
    live: null,
    year: '2025',
    highlights: [
      'Priority-queue scheduling, worker heartbeats, automatic retries, consistent-hash workload distribution',
      'Processed 100K+ mock jobs while tolerating worker failures mid-run',
      'Unit and integration tests automated through GitHub Actions with Docker-based CI/CD',
    ],
    writeup: [
      'This project was about the unglamorous parts of production systems: what happens when a worker dies mid-job, when two schedulers disagree, when retries pile up. I built a distributed task-execution system in C++ to find out.',
      'The core is a priority-queue scheduler with worker heartbeats and automatic retries. Work is distributed via consistent hashing, so adding or losing a worker reshuffles only its share of the keyspace instead of everything. The system processed 100K+ mock jobs while I killed workers on purpose — jobs rerouted, retried, and completed.',
      'Around the C++ core sits a Python REST API and PostgreSQL persistence for job state. I treated observability as part of the system, not an afterthought: structured logging, health checks, and latency/error monitoring were in from the start. Multithreaded execution is covered by unit and integration tests running in GitHub Actions with Docker-based CI/CD.',
    ],
  },
  {
    slug: 'attentionplay',
    title: 'AttentionPlay — Context-Aware Music Recommendation',
    oneLiner:
      'A Transformer recommender trained on 3.4M+ playlist sequences that beats GRU4Rec on next-track prediction.',
    stack: ['Python', 'PyTorch', 'Transformers', 'GPU Cluster'],
    github:
      'https://github.com/Virum9520/AttentionPlay-Transformer-Based_Deep_Learning_Playlist_Recommendation_System',
    live: null,
    year: '2025',
    highlights: [
      '34.9% Top-10 and 46.0% Top-20 accuracy — ahead of GRU4Rec (33.1% Top-10) and far ahead of KNN (1.9%)',
      '3.4M+ training sequences across 41K+ tracks from the Spotify Million Playlist Dataset',
      'Mixed-precision training with GPU-aware batching on the university cluster',
    ],
    writeup: [
      'Playlist continuation is the problem Spotify and Apple Music solve every day: given the tracks so far, what comes next? I modeled it as a sequence task and built the full ladder of baselines to a custom Transformer.',
      'The final model has four encoder layers, eight-head self-attention, and 256-dimensional embeddings for both songs and context. Context matters here — a workout playlist and a study playlist continue very differently, so playlist mood/intent is embedded alongside the tracks.',
      'Training ran on the university GPU cluster over 3.4M+ sequences spanning 41K+ tracks, using mixed precision and GPU-aware batching to keep throughput up. I benchmarked against KNN, cosine similarity, and GRU4Rec. The Transformer won across every Top-K metric: 34.9% Top-10 and 46.0% Top-20, versus 33.1% Top-10 for GRU4Rec.',
      'Built as the capstone for SI 670 (Applied Machine Learning) at Michigan.',
    ],
  },
  {
    slug: 'gpt-from-scratch',
    title: 'GPT-Style Language Model, From Scratch',
    oneLiner:
      'A GPT implementation with RoPE and SwiGLU — pretraining pipeline through conversational supervised fine-tuning.',
    stack: ['Python', 'PyTorch', 'Mixed Precision', 'Wandb'],
    github: 'https://github.com/Virum9520/GPT-style-Language-Model-Conversational-SFT',
    live: null,
    year: '2026',
    highlights: [
      'Modern architecture choices: Rotary Position Embeddings and SwiGLU activations, implemented by hand',
      'Full pretraining pipeline with mixed precision, checkpointing, and Wandb logging',
      'Conversational SFT stage on top of the pretrained base',
    ],
    writeup: [
      'The best way to understand a Transformer is to build one without shortcuts. This is a GPT implemented layer by layer in PyTorch — embeddings, multi-head attention, feed-forward blocks, the training loop — with the architectural choices modern models actually use.',
      'That means Rotary Position Embeddings instead of learned positional vectors, and SwiGLU instead of plain GELU in the MLP. Both implemented by hand, both verified with unit tests that check shapes and numerics component by component.',
      'The training side is a real pipeline, not a notebook: mixed-precision training for speed, model checkpointing, validation evaluation to watch for overfitting, and Wandb logging throughout. After pretraining, a conversational supervised fine-tuning stage turns the base model into something you can talk to.',
    ],
  },
  {
    slug: 'stock-analysis-agents',
    title: 'Multi-Agent Stock Analysis',
    oneLiner:
      'A CrewAI team of agents that researches a ticker and produces an analysis report, deployed and live.',
    stack: ['Python', 'CrewAI', 'LLM Orchestration'],
    github: 'https://github.com/Virum9520/MultiAgent-StockAnalysis-Using-CrewAI',
    live: 'https://multiagent-stockanalysis-using-crewai.onrender.com',
    year: '2025',
    highlights: [
      'Specialized agents for research, analysis, and reporting coordinated with CrewAI',
      'Deployed on Render with a live public demo',
    ],
    writeup: [
      'An early experiment in agent orchestration: a small team of specialized agents — researcher, analyst, reporter — that takes a stock ticker and produces a structured analysis. Each agent has its own role prompt and tools, and CrewAI handles the handoffs.',
      'It taught me the failure modes I now design against professionally: agents that loop, tool calls that silently fail, and outputs that look confident but don\u2019t survive scrutiny. The deployed demo is live on Render.',
    ],
  },
];

export const moreProjects = [
  {
    title: 'EEG-Based Autism Detection',
    note: 'ML on EEG signals for autism detection and severity analysis — undergraduate final-year project.',
    github:
      'https://github.com/Virum9520/EEG-based-Machine-Learning-model-for-Autism-detection-and-severity-analysis',
  },
  {
    title: 'Big Data Pipeline on AWS',
    note: 'End-to-end data pipeline with Spark, Docker, and GitHub Actions.',
    github: 'https://github.com/Virum9520/Big-Data-Pipeline-using-AWS',
  },
  {
    title: 'Flex.i — AI Fitness Web App',
    note: 'React and Node.js fitness application with AI-generated plans.',
    github: 'https://github.com/Virum9520/Flex.i-AI-powered-fitness-Web-application',
  },
];
