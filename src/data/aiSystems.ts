import {brand} from '../styles/colors';

export interface AiSystem {
  color: string;
  iconPath: string;
  title: string;
  description: string;
  badges: string[];
}

export const aiSystems: AiSystem[] = [
  {
    color: brand.vivid,
    iconPath:
      'M12 2a2 2 0 012 2v1h3a2 2 0 012 2v3h1a2 2 0 010 4h-1v3a2 2 0 01-2 2h-3v1a2 2 0 01-4 0v-1H7a2 2 0 01-2-2v-3H4a2 2 0 010-4h1V7a2 2 0 012-2h3V4a2 2 0 012-2z',
    title: 'Agentic Pipelines & Tool Calling',
    description:
      'Multi-agent workflows on Claude, GPT, and Gemini using provider-native tool calling and structured outputs. Intake agents that interview a user and emit a structured brief, specialized agents generating in parallel, and MCP servers exposing platform capabilities so agents operate through native tools rather than scraped APIs.',
    badges: ['Provider-native tools', 'Structured outputs', 'MCP servers'],
  },
  {
    color: brand.base,
    iconPath:
      'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
    title: 'LLM Evaluation & Review Gates',
    description:
      'The measurement layer under the automation: rubric-trained judge agents, scoring thresholds that route outcomes, and human-in-the-loop gates for judgment calls. Weekly sampling across random, stratified, and targeted modes keeps coverage honest instead of cherry-picked.',
    badges: ['LLM-as-judge', 'Scoring rubrics', 'Human review gates'],
  },
  {
    color: brand.soft,
    iconPath:
      'M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 7c0 1.66 3.58 3 8 3s8-1.34 8-3M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3m0 5c0 1.66-3.58 3-8 3s-8-1.34-8-3',
    title: 'RAG & Hybrid Retrieval',
    description:
      'Retrieval built on pgvector, Pinecone, LanceDB, and Chroma, combining dense embeddings with BM25 for hybrid ranking. Vector search over Postgres backing agent toolkits, so retrieval and relational state live in one queryable system rather than drifting apart.',
    badges: ['pgvector & Pinecone', 'BM25 hybrid ranking', 'Vector + relational'],
  },
  {
    color: brand.vivid,
    iconPath:
      'M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
    title: 'Guardrails & Output Validation',
    description:
      'Brand-voice alignment, fact verification, and SEO analysis running as guardrail checks before anything reaches a human approval gate. Output validation and regression suites catch drift when prompts or models change, so a model swap is a measured decision rather than a hope.',
    badges: ['Fact verification', 'Brand-safety checks', 'Regression suites'],
  },
  {
    color: brand.deep,
    iconPath:
      'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Production Reliability at Volume',
    description:
      'Pipelines that run unattended: idempotent ingestion, retry and fallback handling, rate-limit backoff, and row-level error tracking that quarantines failures without halting the run. Raw inputs are retained for audit traceability so a bad run is diagnosable after the fact.',
    badges: ['Idempotent ingestion', 'Failure quarantine', 'Audit traceability'],
  },
  {
    color: brand.deep,
    iconPath:
      'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    title: 'Local & Fine-Tuned Models',
    description:
      'Open-weight models deployed locally with Ollama and on HuggingFace, fine-tuned with Tinker, plus in-browser inference running with zero external API calls. Local inference chosen deliberately where cost, latency, or data residency makes it the better trade-off than a hosted API.',
    badges: ['Ollama & HuggingFace', 'Zero-egress inference', 'Cost & latency control'],
  },
];
