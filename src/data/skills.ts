export type SkillCategory =
  | 'AI & LLM Engineering'
  | 'Evaluation, Safety & Observability'
  | 'Retrieval & Data'
  | 'Backend & Reliability'
  | 'Cloud & DevOps'
  | 'Telegram Platform'
  | 'Frontend & Internal Tooling'
  | 'Languages'
  | 'Domains';

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  {id: 1, name: 'Python', category: 'Languages'},
  {id: 2, name: 'TypeScript', category: 'Languages'},
  {id: 3, name: 'JavaScript (ES2024)', category: 'Languages'},
  {id: 4, name: 'Node.js', category: 'Languages'},
  {id: 5, name: 'SQL', category: 'Languages'},

  {id: 10, name: 'OpenAI API', category: 'AI & LLM Engineering'},
  {id: 11, name: 'Anthropic Claude API', category: 'AI & LLM Engineering'},
  {id: 12, name: 'Google Gemini', category: 'AI & LLM Engineering'},
  {id: 13, name: 'AWS Bedrock', category: 'AI & LLM Engineering'},
  {id: 14, name: 'OpenRouter', category: 'AI & LLM Engineering'},
  {id: 15, name: 'Tool Calling', category: 'AI & LLM Engineering'},
  {id: 16, name: 'Structured Outputs', category: 'AI & LLM Engineering'},
  {
    id: 17,
    name: 'MCP (Model Context Protocol)',
    category: 'AI & LLM Engineering',
  },
  {id: 18, name: 'AI Agents', category: 'AI & LLM Engineering'},
  {id: 19, name: 'Multi-Agent Orchestration', category: 'AI & LLM Engineering'},
  {
    id: 20,
    name: 'Multi-Provider Routing & Fallback',
    category: 'AI & LLM Engineering',
  },
  {id: 21, name: 'RAG Pipelines', category: 'AI & LLM Engineering'},
  {id: 22, name: 'Prompt Engineering', category: 'AI & LLM Engineering'},
  {id: 23, name: 'LangChain', category: 'AI & LLM Engineering'},
  {id: 24, name: 'LangGraph', category: 'AI & LLM Engineering'},
  {
    id: 25,
    name: 'Google Agent Development Kit',
    category: 'AI & LLM Engineering',
  },
  {id: 26, name: 'Mastra.ai', category: 'AI & LLM Engineering'},
  {id: 27, name: 'n8n', category: 'AI & LLM Engineering'},
  {id: 28, name: 'Whisper API', category: 'AI & LLM Engineering'},
  {id: 29, name: 'Claude Code', category: 'AI & LLM Engineering'},
  {
    id: 30,
    name: 'Local LLM Deployment (Ollama)',
    category: 'AI & LLM Engineering',
  },
  {
    id: 31,
    name: 'HuggingFace Model Deployment',
    category: 'AI & LLM Engineering',
  },
  {
    id: 32,
    name: 'Model Fine-Tuning (Tinker)',
    category: 'AI & LLM Engineering',
  },

  {id: 40, name: 'LLM-as-Judge', category: 'Evaluation, Safety & Observability'},
  {
    id: 41,
    name: 'Scoring Rubrics',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 42,
    name: 'Golden & Test Datasets',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 43,
    name: 'Human-Calibrated Judge Scoring',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 44,
    name: 'Error Analysis',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 45,
    name: 'Stratified & Targeted Sampling',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 46,
    name: 'Human-in-the-Loop Review Gates',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 47,
    name: 'Regression Suites on Every Change',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 48,
    name: 'Output & Schema Validation',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 49,
    name: 'Brand-Safety & Fact-Verification Guardrails',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 50,
    name: 'PII Masking & Tokenization',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 51,
    name: 'Compliance-Aware Output',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 52,
    name: 'LangSmith Tracing',
    category: 'Evaluation, Safety & Observability',
  },
  {id: 53, name: 'CloudWatch', category: 'Evaluation, Safety & Observability'},
  {
    id: 54,
    name: 'Metabase Dashboards',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 55,
    name: 'Per-Run Cost & Latency Tracking',
    category: 'Evaluation, Safety & Observability',
  },
  {
    id: 56,
    name: 'Quality & Cost Drift Alerting',
    category: 'Evaluation, Safety & Observability',
  },

  {id: 60, name: 'PostgreSQL', category: 'Retrieval & Data'},
  {id: 61, name: 'pgvector', category: 'Retrieval & Data'},
  {id: 62, name: 'PineconeDB', category: 'Retrieval & Data'},
  {id: 63, name: 'LanceDB', category: 'Retrieval & Data'},
  {id: 64, name: 'ChromaDB', category: 'Retrieval & Data'},
  {id: 65, name: 'BM25 & Hybrid Retrieval', category: 'Retrieval & Data'},
  {id: 66, name: 'Elasticsearch', category: 'Retrieval & Data'},
  {id: 67, name: 'OpenSearch', category: 'Retrieval & Data'},
  {id: 68, name: 'MongoDB', category: 'Retrieval & Data'},
  {id: 69, name: 'Redis', category: 'Retrieval & Data'},
  {id: 70, name: 'MySQL', category: 'Retrieval & Data'},
  {id: 71, name: 'Supabase', category: 'Retrieval & Data'},
  {id: 72, name: 'Snowflake', category: 'Retrieval & Data'},

  {id: 80, name: 'FastAPI', category: 'Backend & Reliability'},
  {id: 81, name: 'NestJS', category: 'Backend & Reliability'},
  {id: 82, name: 'Express.js', category: 'Backend & Reliability'},
  {id: 83, name: 'GraphQL', category: 'Backend & Reliability'},
  {id: 84, name: 'REST', category: 'Backend & Reliability'},
  {id: 85, name: 'WebSockets', category: 'Backend & Reliability'},
  {id: 86, name: 'SSE', category: 'Backend & Reliability'},
  {id: 87, name: 'Socket.IO', category: 'Backend & Reliability'},
  {id: 88, name: 'Kafka', category: 'Backend & Reliability'},
  {id: 89, name: 'NATS', category: 'Backend & Reliability'},
  {id: 90, name: 'Redis Pub/Sub', category: 'Backend & Reliability'},
  {id: 91, name: 'Trigger.dev', category: 'Backend & Reliability'},
  {
    id: 92,
    name: 'Queues & Background Workers',
    category: 'Backend & Reliability',
  },
  {id: 93, name: 'Idempotency', category: 'Backend & Reliability'},
  {id: 94, name: 'Retry & Fallback Handling', category: 'Backend & Reliability'},
  {
    id: 95,
    name: 'Rate-Limit Handling & Exponential Backoff',
    category: 'Backend & Reliability',
  },
  {
    id: 96,
    name: 'Failure Isolation & Quarantine',
    category: 'Backend & Reliability',
  },

  {id: 100, name: 'AWS Lambda', category: 'Cloud & DevOps'},
  {id: 101, name: 'AWS ECS / EC2', category: 'Cloud & DevOps'},
  {id: 102, name: 'S3', category: 'Cloud & DevOps'},
  {id: 103, name: 'DynamoDB', category: 'Cloud & DevOps'},
  {id: 104, name: 'CloudWatch', category: 'Cloud & DevOps'},
  {id: 105, name: 'WAF', category: 'Cloud & DevOps'},
  {id: 106, name: 'Bedrock', category: 'Cloud & DevOps'},
  {id: 107, name: 'SageMaker', category: 'Cloud & DevOps'},
  {id: 108, name: 'Docker', category: 'Cloud & DevOps'},
  {id: 109, name: 'Kubernetes', category: 'Cloud & DevOps'},
  {id: 110, name: 'CI/CD (GitHub Actions)', category: 'Cloud & DevOps'},
  {id: 111, name: 'AWS CodePipeline', category: 'Cloud & DevOps'},
  {id: 112, name: 'Git', category: 'Cloud & DevOps'},
  {id: 113, name: 'Firebase', category: 'Cloud & DevOps'},
  {id: 114, name: 'Vercel', category: 'Cloud & DevOps'},

  {id: 120, name: 'Telegram Bot API', category: 'Telegram Platform'},
  {id: 121, name: 'Telegram Mini Apps (TMA)', category: 'Telegram Platform'},
  {id: 122, name: 'Long-Running Bot Processes', category: 'Telegram Platform'},
  {
    id: 123,
    name: 'In-App Purchase & Payment Flows',
    category: 'Telegram Platform',
  },
  {
    id: 124,
    name: 'Real-Time Multiplayer over WebSockets',
    category: 'Telegram Platform',
  },

  {id: 130, name: 'React', category: 'Frontend & Internal Tooling'},
  {id: 131, name: 'Next.js', category: 'Frontend & Internal Tooling'},
  {id: 132, name: 'React Native', category: 'Frontend & Internal Tooling'},
  {id: 133, name: 'Chakra UI', category: 'Frontend & Internal Tooling'},
  {id: 134, name: 'Tailwind CSS', category: 'Frontend & Internal Tooling'},
  {id: 135, name: 'Redux', category: 'Frontend & Internal Tooling'},
  {id: 136, name: 'Zustand', category: 'Frontend & Internal Tooling'},
  {
    id: 137,
    name: 'Internal Dashboards & Chat Interfaces',
    category: 'Frontend & Internal Tooling',
  },

  {id: 140, name: 'iGaming & Sports Betting', category: 'Domains'},
  {id: 141, name: 'Fintech', category: 'Domains'},
  {id: 142, name: 'Insurance', category: 'Domains'},
  {id: 143, name: 'Web3 / DeFi', category: 'Domains'},
  {id: 144, name: 'SaaS', category: 'Domains'},
];

export const skillCategories: SkillCategory[] = [
  'AI & LLM Engineering',
  'Evaluation, Safety & Observability',
  'Retrieval & Data',
  'Backend & Reliability',
  'Cloud & DevOps',
  'Telegram Platform',
  'Frontend & Internal Tooling',
  'Languages',
  'Domains',
];
