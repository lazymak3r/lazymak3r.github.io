export type SkillCategory =
  | 'Languages'
  | 'AI & LLM Engineering'
  | 'Evaluation & Observability'
  | 'Retrieval & Data'
  | 'Backend & Reliability'
  | 'Cloud & DevOps'
  | 'Frontend'
  | 'Web3'
  | 'iGaming';

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  {id: 1, name: 'TypeScript', category: 'Languages'},
  {id: 2, name: 'JavaScript (ES2024)', category: 'Languages'},
  {id: 3, name: 'Python', category: 'Languages'},
  {id: 4, name: 'Node.js', category: 'Languages'},
  {id: 5, name: 'SQL', category: 'Languages'},

  {id: 10, name: 'Anthropic Claude API', category: 'AI & LLM Engineering'},
  {id: 11, name: 'OpenAI API', category: 'AI & LLM Engineering'},
  {id: 12, name: 'Google Gemini', category: 'AI & LLM Engineering'},
  {id: 13, name: 'AWS Bedrock', category: 'AI & LLM Engineering'},
  {id: 14, name: 'Tool Calling', category: 'AI & LLM Engineering'},
  {id: 15, name: 'Structured Outputs', category: 'AI & LLM Engineering'},
  {id: 16, name: 'MCP', category: 'AI & LLM Engineering'},
  {id: 17, name: 'AI Agents', category: 'AI & LLM Engineering'},
  {id: 18, name: 'Multi-Agent Orchestration', category: 'AI & LLM Engineering'},
  {id: 19, name: 'RAG Pipelines', category: 'AI & LLM Engineering'},
  {id: 20, name: 'Prompt Engineering', category: 'AI & LLM Engineering'},
  {id: 21, name: 'LangGraph', category: 'AI & LLM Engineering'},
  {id: 22, name: 'Mastra.ai', category: 'AI & LLM Engineering'},
  {id: 23, name: 'n8n', category: 'AI & LLM Engineering'},
  {id: 24, name: 'Whisper API', category: 'AI & LLM Engineering'},
  {id: 25, name: 'Claude Code', category: 'AI & LLM Engineering'},
  {id: 26, name: 'Ollama', category: 'AI & LLM Engineering'},
  {id: 27, name: 'HuggingFace', category: 'AI & LLM Engineering'},
  {id: 28, name: 'Fine-Tuning (Tinker)', category: 'AI & LLM Engineering'},

  {id: 30, name: 'LLM-as-Judge', category: 'Evaluation & Observability'},
  {id: 31, name: 'Scoring Rubrics', category: 'Evaluation & Observability'},
  {id: 32, name: 'Error Analysis', category: 'Evaluation & Observability'},
  {
    id: 33,
    name: 'Stratified & Targeted Sampling',
    category: 'Evaluation & Observability',
  },
  {
    id: 34,
    name: 'Human-in-the-Loop Gates',
    category: 'Evaluation & Observability',
  },
  {id: 35, name: 'Regression Suites', category: 'Evaluation & Observability'},
  {id: 36, name: 'Output Validation', category: 'Evaluation & Observability'},
  {
    id: 37,
    name: 'Brand-Safety & Fact-Verification Guardrails',
    category: 'Evaluation & Observability',
  },
  {id: 38, name: 'LangSmith Tracing', category: 'Evaluation & Observability'},
  {id: 39, name: 'CloudWatch', category: 'Evaluation & Observability'},
  {id: 40, name: 'Metabase', category: 'Evaluation & Observability'},
  {
    id: 41,
    name: 'Cost & Latency Tracking',
    category: 'Evaluation & Observability',
  },

  {id: 45, name: 'PostgreSQL', category: 'Retrieval & Data'},
  {id: 46, name: 'pgvector', category: 'Retrieval & Data'},
  {id: 47, name: 'PineconeDB', category: 'Retrieval & Data'},
  {id: 48, name: 'LanceDB', category: 'Retrieval & Data'},
  {id: 49, name: 'ChromaDB', category: 'Retrieval & Data'},
  {id: 50, name: 'BM25 & Hybrid Retrieval', category: 'Retrieval & Data'},
  {id: 51, name: 'MongoDB', category: 'Retrieval & Data'},
  {id: 52, name: 'Redis', category: 'Retrieval & Data'},
  {id: 53, name: 'ElasticSearch', category: 'Retrieval & Data'},
  {id: 54, name: 'MySQL', category: 'Retrieval & Data'},
  {id: 55, name: 'Supabase', category: 'Retrieval & Data'},
  {id: 56, name: 'Snowflake', category: 'Retrieval & Data'},

  {id: 60, name: 'NestJS', category: 'Backend & Reliability'},
  {id: 61, name: 'FastAPI', category: 'Backend & Reliability'},
  {id: 62, name: 'Express.js', category: 'Backend & Reliability'},
  {id: 63, name: 'GraphQL', category: 'Backend & Reliability'},
  {id: 64, name: 'REST', category: 'Backend & Reliability'},
  {id: 65, name: 'WebSockets', category: 'Backend & Reliability'},
  {id: 66, name: 'Socket.IO', category: 'Backend & Reliability'},
  {id: 67, name: 'Kafka', category: 'Backend & Reliability'},
  {id: 68, name: 'NATS', category: 'Backend & Reliability'},
  {id: 69, name: 'Redis Pub/Sub', category: 'Backend & Reliability'},
  {id: 70, name: 'Trigger.dev', category: 'Backend & Reliability'},
  {id: 71, name: 'Background Workers', category: 'Backend & Reliability'},
  {id: 72, name: 'Idempotency', category: 'Backend & Reliability'},
  {id: 73, name: 'Retry & Fallback Handling', category: 'Backend & Reliability'},
  {id: 74, name: 'Rate-Limit Handling', category: 'Backend & Reliability'},
  {
    id: 75,
    name: 'Failure Isolation & Quarantine',
    category: 'Backend & Reliability',
  },

  {id: 80, name: 'AWS Lambda', category: 'Cloud & DevOps'},
  {id: 81, name: 'AWS ECS / EC2', category: 'Cloud & DevOps'},
  {id: 82, name: 'S3', category: 'Cloud & DevOps'},
  {id: 83, name: 'DynamoDB', category: 'Cloud & DevOps'},
  {id: 84, name: 'WAF', category: 'Cloud & DevOps'},
  {id: 85, name: 'SageMaker', category: 'Cloud & DevOps'},
  {id: 86, name: 'Docker', category: 'Cloud & DevOps'},
  {id: 87, name: 'Kubernetes', category: 'Cloud & DevOps'},
  {id: 88, name: 'CI/CD', category: 'Cloud & DevOps'},
  {id: 89, name: 'Git', category: 'Cloud & DevOps'},
  {id: 90, name: 'Firebase', category: 'Cloud & DevOps'},
  {id: 91, name: 'Vercel', category: 'Cloud & DevOps'},

  {id: 95, name: 'React', category: 'Frontend'},
  {id: 96, name: 'Next.js', category: 'Frontend'},
  {id: 97, name: 'React Native', category: 'Frontend'},
  {id: 98, name: 'Tailwind CSS', category: 'Frontend'},
  {id: 99, name: 'Redux', category: 'Frontend'},
  {id: 100, name: 'Zustand', category: 'Frontend'},
  {id: 101, name: 'Angular 2+', category: 'Frontend'},
  {id: 102, name: 'RxJS', category: 'Frontend'},
  {id: 103, name: 'Three.js', category: 'Frontend'},

  {id: 110, name: 'Web3.js', category: 'Web3'},
  {id: 111, name: 'Ethers.js', category: 'Web3'},
  {id: 112, name: 'MetaMask', category: 'Web3'},
  {id: 113, name: 'Wallet Connection Flows', category: 'Web3'},
  {id: 114, name: 'On-Chain Transactions', category: 'Web3'},
  {id: 115, name: 'DeFi Protocol Integration', category: 'Web3'},

  {id: 120, name: 'PixiJS', category: 'iGaming'},
  {id: 121, name: 'Phaser.js', category: 'iGaming'},
  {id: 122, name: 'GSAP', category: 'iGaming'},
  {id: 123, name: 'Canvas API', category: 'iGaming'},
  {id: 124, name: 'WebGL', category: 'iGaming'},
  {id: 125, name: 'Game State Machines', category: 'iGaming'},
  {id: 126, name: 'RNG / Provably Fair', category: 'iGaming'},
  {id: 127, name: 'PAM Integration', category: 'iGaming'},
  {id: 128, name: 'KYC / AML SDKs', category: 'iGaming'},
];

export const skillCategories: SkillCategory[] = [
  'AI & LLM Engineering',
  'Evaluation & Observability',
  'Retrieval & Data',
  'Backend & Reliability',
  'Cloud & DevOps',
  'Languages',
  'Frontend',
  'Web3',
  'iGaming',
];
