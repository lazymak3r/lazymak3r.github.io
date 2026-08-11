export interface Project {
  name: string;
  blurb?: string;
  url?: string;
  appStore?: string;
  playStore?: string;
  telegram?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: 'full-time' | 'freelance' | 'contract';
  description: string;
  technologies: string[];
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Spayon.io',
    role: 'Lead FinTech Engineer, Contract - Remote',
    period: 'Jan 2025 - Present',
    type: 'contract',
    description:
      'Lead engineer on a multi-currency payment gateway processing high-frequency transactions for 100+ online merchants across Central Asia, Europe, and North America, spanning payment, subscription, and wallet APIs, a multi-vendor admin portal, and ARCA and MIR payment rail integrations.',
    technologies: [
      'Multi-Currency Payments',
      'ARCA & MIR Rails',
      'Double-Entry Ledger',
      'PII Masking & Tokenization',
      'Metabase',
    ],
    projects: [
      {
        name: 'Financial Ledger Inspector',
        blurb:
          'Internal reconciliation tool that compares vendor wallet balances against a double-entry ledger in real time, flags per-vendor discrepancies, and exposes a full journal-entry audit trail, letting ops catch balance drift before it becomes a financial integrity issue.',
      },
      {
        name: 'Platform Operations Dashboard',
        blurb:
          'Surfaced platform financial health in a Metabase operations dashboard covering vendor liquidity, fee revenue by deposit and withdrawal, multi-currency gateway receipts, and reserve balances for withdrawals, refunds, and chargebacks - built so non-engineers can interrogate the numbers themselves.',
      },
      {
        name: 'PII Handling in Payment Flows',
        blurb:
          'Applied masking and tokenization to cardholder and merchant personal data across payment, subscription, and wallet APIs, so downstream services, analytics, and support tooling operate on tokenized references rather than raw PII.',
      },
    ],
  },
  {
    id: 2,
    company: 'CAIAT.US',
    role: 'Principal AI Product Engineer, Contract',
    period: 'June 2024 - Present',
    type: 'contract',
    description: 'Delivery engineer across client AI platform engagements.',
    technologies: [
      'Python',
      'LangChain',
      'FastAPI',
      'Anthropic Claude API',
      'OpenAI API',
      'Google Gemini',
      'AWS Bedrock',
      'OpenRouter',
      'MCP',
      'Whisper API',
      'Docker',
      'GitHub Actions',
    ],
    projects: [
      {
        name: 'Zetik',
        blurb:
          'B2B iGaming and sportsbook platform, source-code licensed to operators. Delivered core platform systems for a white-label online casino and sportsbook serving LATAM, Asia, Russia, and Middle East markets: fraud detection (3rd party solution), bonus engine and abuse controls, player account management, sportsbook and in-house games, slot-provider integrations, affiliate campaigns, and Fasttrack CRM integration. Services containerized with Docker and shipped to operator environments through CI/CD.',
      },
      {
        name: 'AI-Native QA Pipeline',
        blurb:
          'Automated quality-evaluation system for a 30-agent Atlassian service desk, scoring 200+ tickets per week. Samples across random, stratified, and targeted modes, scores against a rubric-trained LLM-as-judge calibrated on human-scored samples, and routes outcomes into structured Confluence records and follow-up tasks by score threshold, with human-in-the-loop gates for judgment calls. Golden datasets and regression suites re-run on every prompt and model change so quality drift is caught before it reaches production. Built in Python against Jira Service Management. Cut the feedback cycle from 6 days to 2, reached full coverage on high-priority tickets within 30 days, and surfaced 7 knowledge-base articles through systemic issue detection. Published as an Atlassian community case study.',
      },
      {
        name: 'Multi-Agent Content Pipeline',
        blurb:
          'End-to-end generation, QA, and publish pipeline for LegalCalls LLC: Whisper transcription of voice input, an LLM intake agent that interviews the user and emits a structured brief for approval, then three specialized agents generating long-form, LinkedIn, and X content in parallel. Output guardrails run brand-safety, fact-verification, and SEO checks with structured-output validation before a human approval gate and single-action publish; failed checks route back for regeneration rather than blocking the run.',
      },
      {
        name: 'Rev-Box',
        blurb:
          'Carrier data ETL platform for P&C insurance. Idempotent ingestion pipeline normalizing Excel workbooks from multiple insurance carriers into a single queryable Postgres dataset, with per-carrier field, status, and category mapping. Row-level error tracking quarantines failed rows and retries them without halting the run, and raw rows are retained for full audit traceability. Policyholder PII masked and tokenized before reaching any model. Added in-browser LLM mapping suggestions running with zero external API calls - chosen over a hosted model once per-row inference cost and data egress made local inference the better trade-off.',
      },
      {
        name: 'Multi-Provider Orchestration & Cost Control',
        blurb:
          'Ran agent workloads across Anthropic, OpenAI, Gemini, and AWS Bedrock behind a routing layer with runtime fallback: when a provider rate-limits or errors, traffic reroutes to a secondary rather than failing the run. Per-run spend and latency tracked through OpenRouter usage data, Bedrock metrics in CloudWatch, and Metabase dashboards, so cost drift is visible to the team rather than discovered on the invoice.',
      },
      {
        name: 'Reliability Under Provider Limits',
        blurb:
          'Handled provider rate limits with queued background workers, exponential backoff, and request batching, with idempotency keys so retried runs never double-publish or double-charge. Failures isolate to the affected run instead of halting the pipeline.',
      },
      {
        name: 'MCP Server (Qlerify)',
        blurb:
          'Designed and shipped a Model Context Protocol server exposing product-modeling capabilities to LLM clients, enabling agents to operate against the platform through native tool calling.',
      },
      {
        name: 'Local & Fine-Tuned Model Deployment',
        blurb:
          'Deployed open-weight models locally with Ollama and on HuggingFace, and fine-tuned models with Tinker, choosing local inference over hosted APIs where cost, latency, or data residency made it the better trade-off.',
      },
      {
        name: 'Python Automation Across Engagements',
        blurb:
          'Built internal automation and agent tooling in Python with LangChain and FastAPI, containerized with Docker and deployed via GitHub Actions and AWS CodePipeline - reaching for an orchestration framework only where model-native tool calling and structured outputs were not enough on their own.',
      },
    ],
  },
  {
    id: 3,
    company: 'brandwise.ai',
    role: 'Founding AI Product Engineer - Remote',
    period: 'Aug 2023 - May 2024',
    type: 'full-time',
    description:
      'Co-founded and architected an AI-powered customer support SaaS from zero (formerly 1hero.ai), owning both the marketing site and the full-stack product with a focus on scalability and LLM integration. Engineered the Python and FastAPI backend pipeline handling ticket ingestion, LLM-based routing, and AI-drafted responses via the OpenAI API, using structured outputs, tool calling, and LangChain for multi-step chains. Led technical decision-making across frontend and backend, establishing architecture patterns, code standards, and Dockerized CI/CD pipelines, and integrated Stripe billing with multi-tenant data isolation. Fine-tuned GPT-3.5 with OpenAI fine-tuning tooling on a proprietary dataset, and implemented advanced RAG methods for context retrieval using Pinecone Vector DB.',
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'LangChain',
      'Structured Outputs',
      'Tool Calling',
      'GPT-3.5 Fine-Tuning',
      'PineconeDB',
      'RAG',
      'Stripe',
      'Docker',
      'Next.js',
    ],
    projects: [
      {name: '1hero.ai', url: 'https://1hero.ai'},
      {name: 'web.1hero.ai', url: 'https://web.1hero.ai'},
    ],
  },
  {
    id: 4,
    company: 'Iabsis SARL',
    role: 'AI and Full-Stack Engineer, Web3 to AI Engineering - Remote',
    period: 'Jan 2023 - Mar 2026',
    type: 'full-time',
    description:
      'Started on Web3 and DeFi delivery, building blockchain integrations with Ethers.js and Web3.js including wallet connection flows, on-chain transaction handling, and DeFi protocol interactions, and contributing to architecture decisions on high-availability systems serving thousands of concurrent users. Moved into AI engineering on SerenGPT.',
    technologies: [
      'LangGraph',
      'Google Agent Development Kit',
      'PostgreSQL',
      'pgvector',
      'Elasticsearch',
      'NestJS',
      'TypeScript',
      'Ethers.js',
      'Web3.js',
      'WMS/WFS',
    ],
    projects: [
      {
        name: 'SerenGPT',
        blurb:
          'AI engine for job and candidate matching - an agentic toolkit spanning CV generation, a job matching engine, an AI interview coach, and AI recruiter analysis. Orchestrated multi-step agent behavior with LangGraph and the Google Agent Development Kit over Postgres with vector search, and ran LLM eval suites against scored test sets to measure output quality across the agent tools and catch regressions between prompt versions.',
      },
      {
        name: 'Pollenn',
        url: 'https://pollenn.ch',
        blurb:
          'Biodiversity monitoring and field operations platform. Built AI insect recognition and mapping into a multi-stakeholder observation platform used by private, public, and NGO environmental teams, with Elasticsearch-backed search across observations and real-time geospatial map sync over WMS/WFS.',
      },
      {name: 'Airdrop.com', url: 'https://airdrop.com'},
      {name: 'Alt.co', url: 'https://alt.co'},
      {
        name: 'Sezame Wallet',
        url: 'https://sezame.app',
        appStore: 'https://apps.apple.com/us/app/sezame-wallet/id1618252953',
        playStore:
          'https://play.google.com/store/apps/details?id=org.maze2.sezamewallet&hl=en',
      },
    ],
  },
  {
    id: 5,
    company: 'TruckinDigital',
    role: 'Senior Full-Stack Web Engineer',
    period: 'Apr 2022 - Jul 2023',
    type: 'full-time',
    description:
      'Built a trucking fleet management platform for US carriers from scratch, owning architecture and delivery across frontend and backend through to production. Implemented real-time shipment tracking and interactive fleet mapping with Trimble Maps, giving dispatchers live visibility across active loads. Engineered real-time dispatcher-driver messaging over WebSockets, handling reconnection, message ordering, and delivery guarantees at sub-second latency. Integrated payment processing via Plaid and Stripe for carrier billing and settlement, and delivered a React and TypeScript interface optimized for low-latency mobile use by drivers in the field.',
    technologies: [
      'React',
      'TypeScript',
      'WebSockets',
      'Trimble Maps',
      'Plaid',
      'Stripe',
    ],
    projects: [
      {name: 'TruckinDigital Web App', url: 'https://www.truckindigital.com'},
    ],
  },
  {
    id: 6,
    company: 'inKin Inc',
    role: 'Front-End Team Lead',
    period: 'Jun 2019 - Apr 2022',
    type: 'full-time',
    description:
      'Led a cross-functional frontend team building a global corporate fitness and wellness platform that scaled to hundreds of thousands of active users. Established frontend architecture standards, shared component libraries, and code review processes that measurably reduced regression rates and shortened onboarding for new engineers. Drove React Native mobile development alongside the web product, delivering cross-platform feature parity across iOS and Android, and partnered directly with product managers and designers to translate UX requirements into performant, accessible implementations.',
    technologies: ['React', 'React Native', 'Redux', 'TypeScript', 'iOS', 'Android'],
    projects: [
      {
        name: 'inKin Mobile App',
        url: 'https://www.inkin.com/',
        appStore:
          'https://apps.apple.com/us/app/inkin-fitness-challenge/id1456256877',
        playStore:
          'https://play.google.com/store/apps/details?id=am.minnova.inkin&hl=en',
      },
      {name: 'app.inkin.com', url: 'https://app.inkin.com'},
      {name: 'inkin.com', url: 'https://inkin.com'},
    ],
  },
  {
    id: 7,
    company: 'Iguan Systems',
    role: 'Full-Stack Engineer',
    period: '2018 - 2019',
    type: 'full-time',
    description: 'GraphQL and Apollo API design.',
    technologies: ['GraphQL', 'Apollo GraphQL'],
    projects: [{name: 'Barder.art Admin', url: 'https://www.barder.art'}],
  },
  {
    id: 8,
    company: 'Aparg / Cincopa',
    role: 'Web Developer',
    period: '2017 - 2018',
    type: 'full-time',
    description:
      'Built web features and Chrome extensions for the Cincopa media platform.',
    technologies: ['JavaScript', 'Chrome Extensions API'],
    projects: [{name: 'Cincopa.com', url: 'https://www.cincopa.com'}],
  },
  {
    id: 9,
    company: 'IT-Talents',
    role: 'Junior Web Developer',
    period: '2016 - 2017',
    type: 'full-time',
    description:
      'Started my professional career building web and mobile applications.',
    technologies: ['JavaScript', 'Angular', 'Ionic'],
    projects: [
      {
        name: 'Paris Tour Guide App',
        url: 'https://play.google.com/store/apps/details?id=com.tour.paris&hl=en_US&gl=US',
      },
      {name: 'IT-Talents Website', url: 'https://it-talents.org/am'},
    ],
  },
];
