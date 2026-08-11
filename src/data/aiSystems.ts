import type {Icon} from '@phosphor-icons/react';
import {
  ArrowsSplitIcon,
  ClipboardTextIcon,
  CpuIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  TreeStructureIcon,
} from '@phosphor-icons/react';

import {brand} from '../styles/colors';

export interface AiSystem {
  color: string;
  icon: Icon;
  title: string;
  description: string;
  badges: string[];
}

export const aiSystems: AiSystem[] = [
  {
    color: brand.vivid,
    icon: TreeStructureIcon,
    title: 'Agentic Pipelines & Tool Calling',
    description:
      'Multi-agent workflows on Claude, GPT, and Gemini using provider-native tool calling and structured outputs. Intake agents that interview a user and emit a structured brief, specialized agents generating in parallel, and MCP servers exposing platform capabilities so agents operate through native tools rather than scraped APIs.',
    badges: ['Provider-native tools', 'Structured outputs', 'MCP servers'],
  },
  {
    color: brand.base,
    icon: ClipboardTextIcon,
    title: 'LLM Evals & Review Gates',
    description:
      'The measurement layer under the automation: LLM-as-judge scoring calibrated on human-scored samples, golden datasets, and regression suites that re-run on every prompt and model change so quality drift is caught before production. Sampling across random, stratified, and targeted modes keeps coverage honest instead of cherry-picked.',
    badges: ['LLM-as-judge', 'Golden datasets', 'Regressions on every change'],
  },
  {
    color: brand.soft,
    icon: DatabaseIcon,
    title: 'RAG & Hybrid Retrieval',
    description:
      'Retrieval built on pgvector, Pinecone, LanceDB, and Chroma, combining dense embeddings with BM25 for hybrid ranking. Vector search over Postgres backing agent toolkits, so retrieval and relational state live in one queryable system rather than drifting apart.',
    badges: ['pgvector & Pinecone', 'BM25 hybrid ranking', 'Vector + relational'],
  },
  {
    color: brand.vivid,
    icon: ShieldCheckIcon,
    title: 'Guardrails, PII & Compliance',
    description:
      'Brand-safety, fact-verification, and SEO checks with structured-output validation before anything reaches a human approval gate - failed checks route back for regeneration rather than blocking the run. PII masked and tokenized before it reaches any model, so downstream services and analytics operate on tokenized references.',
    badges: ['Schema validation', 'PII masking & tokenization', 'Fact verification'],
  },
  {
    color: brand.deep,
    icon: ArrowsSplitIcon,
    title: 'Multi-Provider Routing & Cost Control',
    description:
      'Agent workloads run across Anthropic, OpenAI, Gemini, and AWS Bedrock behind a routing layer with runtime fallback: when a provider rate-limits or errors, traffic reroutes to a secondary rather than failing the run. Per-run spend and latency tracked through OpenRouter usage data, Bedrock metrics in CloudWatch, and Metabase dashboards, so cost drift is visible rather than discovered on the invoice.',
    badges: ['Runtime fallback', 'Per-run cost & latency', 'Drift alerting'],
  },
  {
    color: brand.deep,
    icon: CpuIcon,
    title: 'Local & Fine-Tuned Models',
    description:
      'Open-weight models deployed locally with Ollama and on HuggingFace, fine-tuned with Tinker, plus in-browser inference running with zero external API calls. Local inference chosen deliberately where cost, latency, or data residency makes it the better trade-off than a hosted API.',
    badges: ['Ollama & HuggingFace', 'Zero-egress inference', 'Cost & latency control'],
  },
];
