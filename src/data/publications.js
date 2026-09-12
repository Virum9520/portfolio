export const publications = [
  {
    id: 'forensic-dna-datasets',
    title: 'National and State-Level Datasets of United States Forensic DNA Databases 2001–2025',
    authors: 'Pryor, Y., Ranka, V., et al.',
    venue: 'Scientific Data (Nature Portfolio), 2026',
    venueShort: 'Scientific Data 2026',
    link: 'https://doi.org/10.1038/s41597-026-07605-5',
    linkLabel: 'DOI: 10.1038/s41597-026-07605-5',
    oneLiner:
      'Open, analysis-ready datasets covering 25 years of U.S. forensic DNA database records.',
    writeup: [
      'The United States maintains forensic DNA databases at both national and state levels, but a quarter-century of their records had never been assembled into datasets researchers could actually use. Reports were scattered across agencies, formats changed year to year, and state-level figures were inconsistent or missing.',
      'This paper fixes that. We compiled, cleaned, and validated national and state-level records of U.S. forensic DNA databases from 2001 through 2025, and published them as open, analysis-ready datasets in Scientific Data, Nature Portfolio\u2019s journal for research data.',
      'My work was the data engineering behind the datasets: building the collection and processing pipeline, reconciling formats across 25 years of sources, and validating the outputs so that every figure traces back to its source. Dataset papers live or die on trustworthiness — the validation work is the contribution.',
      'The datasets give researchers in criminology, law, policy, and bioethics a common, citable foundation for studying how DNA databases have grown and how their use varies across states.',
    ],
  },
  {
    id: 'walk-before-you-run',
    title: 'Walk Before You Run: The Importance of Data Exploration for Data Analysis Agents',
    authors: 'Yuan, Y., Ranka, V., et al.',
    venue: 'VLDB 2026 Workshop',
    venueShort: 'VLDB 2026',
    link: 'https://doi.org/10.48550/arXiv.2608.16045',
    linkLabel: 'arXiv: 2608.16045',
    oneLiner:
      'LLM analysis agents get measurably better answers when they explore the data before analyzing it.',
    writeup: [
      'LLM agents are increasingly asked to analyze datasets end to end: load the data, form a plan, run the analysis, report the answer. Most jump straight to the analysis. This paper asks a simple question — does making an agent explore the data first actually change what it gets right?',
      'It does, measurably. We ran controlled experiments across four LLM baselines on real analysis tasks, comparing agents that explore — profiling distributions, checking schemas, probing for quality issues — against agents that go straight to work. Exploration consistently improved task accuracy, and skipping it produced a recognizable pattern of failures: wrong assumptions about schema, silent mishandling of missing data, confident answers built on misread columns.',
      'My contribution was the evaluation machinery: ground-truth benchmarks built with few-shot prompting, task-level accuracy and quality metrics, and the experiment analysis across baselines. I also built the analytics tooling we used to categorize failures and compare configurations across runs.',
      'The takeaway for anyone building analysis agents: exploration isn\u2019t overhead, it\u2019s where the accuracy comes from. The paper was accepted at a VLDB 2026 workshop.',
    ],
  },
];
