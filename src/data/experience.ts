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
    role: 'Lead FinTech Engineer',
    period: 'Jan 2025 - Present',
    type: 'full-time',
    description:
      'Lead engineer on a multi-currency payment gateway processing high-frequency transactions for 100+ online merchants across Central Asia, Europe, and North America, spanning payment, subscription, and wallet APIs, a multi-vendor admin portal, and ARCA and MIR payment rail integrations.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Kafka',
      'Docker',
      'AWS',
      'Metabase',
    ],
    projects: [
      {
        name: 'Financial Ledger Inspector',
        blurb:
          'Internal reconciliation tool comparing vendor wallet balances against a double-entry ledger in real time, flagging per-vendor discrepancies and exposing a full journal-entry audit trail so ops catch balance drift before it becomes a financial integrity issue.',
      },
      {
        name: 'Platform Operations Dashboard',
        blurb:
          'Surfaces platform financial health: vendor liquidity, fee revenue by deposit and withdrawal, multi-currency gateway receipts, and reserve balances for withdrawals, refunds, and chargebacks.',
      },
    ],
  },
  {
    id: 2,
    company: 'CAIAT.US',
    role: 'Senior AI & Full-Stack Engineer, Contract',
    period: 'Feb 2025 - Present',
    type: 'contract',
    description:
      'Sole delivery engineer across client AI platform engagements - agentic pipelines, LLM evaluation systems, data infrastructure, and B2B iGaming platform delivery.',
    technologies: [
      'Python',
      'TypeScript',
      'Anthropic Claude API',
      'OpenAI API',
      'MCP',
      'LangGraph',
      'Whisper API',
      'PostgreSQL',
      'Ollama',
      'HuggingFace',
      'AWS Bedrock',
    ],
    projects: [
      {
        name: 'AI-Native QA Pipeline',
        blurb:
          'Automated quality-evaluation system for a 30-agent service desk that cut the feedback cycle from 6 days to 2, reached full coverage on high-priority tickets within 30 days, and surfaced 7 knowledge-base articles through systemic issue detection. Samples tickets weekly across random, stratified, and targeted modes, scores them with a rubric-trained LLM agent, and routes outcomes into Confluence records and follow-up tasks by score threshold, with human-in-the-loop gates. Published as an Atlassian community case study.',
      },
      {
        name: 'Multi-Agent Content Pipeline',
        blurb:
          'End-to-end generation, QA, and publish pipeline for LegalCalls LLC: Whisper transcription of voice input, an LLM intake agent that interviews the user and emits a structured brief for approval, then three specialized agents generating long-form, LinkedIn, and X content in parallel. Guardrail checks run brand-voice alignment, fact verification, and SEO analysis before a human approval gate and single-action publish.',
      },
      {
        name: 'Zetik',
        blurb:
          'B2B iGaming and sports betting platform - a white-label online casino and sportsbook licensed to operators and sold with source code, serving LATAM, Asia, Russia, and Middle East markets. Delivered the bonus engine, player account management, sportsbook and in-house games, slot-provider integrations, affiliate campaigns, fraud detection, and Fasttrack CRM.',
      },
      {
        name: 'Rev-Box',
        blurb:
          'Carrier data ETL platform for P&C insurance. Idempotent ingestion pipeline normalizing Excel workbooks from multiple carriers into a single queryable Postgres dataset, with per-carrier field, status, and category mapping. Row-level error tracking quarantines failed rows without halting the run, and raw rows are retained for audit traceability. In-browser LLM mapping suggestions run with zero external API calls, cutting per-row inference cost and data egress.',
      },
      {
        name: 'MCP Server (Qlerify)',
        blurb:
          'Model Context Protocol server exposing product-modeling capabilities to LLM clients, enabling agents to operate against the platform through native tool calling.',
      },
      {
        name: 'Local & Fine-Tuned Model Deployment',
        blurb:
          'Deployed open-weight models locally with Ollama and on HuggingFace, and fine-tuned models with Tinker - choosing local inference over hosted APIs where cost, latency, or data residency made it the better trade-off.',
      },
    ],
  },
  {
    id: 3,
    company: 'brandwise.ai',
    role: 'Founding AI Engineer',
    period: 'Aug 2023 - May 2024',
    type: 'full-time',
    description:
      'Co-founded and architected an AI-powered customer support SaaS from zero (formerly 1hero.ai), owning both the marketing site and the full-stack product. Engineered the backend pipeline handling ticket ingestion, LLM-based routing, and AI-drafted responses via the OpenAI API using structured outputs and tool calling. Led technical decision-making across frontend and backend, establishing architecture patterns, code standards, and CI/CD pipelines, and integrated Stripe billing with multi-tenant data isolation.',
    technologies: [
      'Next.js',
      'React',
      'NestJS',
      'OpenAI API',
      'Structured Outputs',
      'Tool Calling',
      'Stripe',
      'PineconeDB',
      'MongoDB',
      'Zustand',
    ],
    projects: [
      {name: '1hero.ai', url: 'https://1hero.ai'},
      {name: 'web.1hero.ai', url: 'https://web.1hero.ai'},
    ],
  },
  {
    id: 4,
    company: 'Iabsis SARL',
    role: 'Full-Stack Engineer, Web3 to AI Engineering',
    period: 'Jan 2023 - Mar 2026',
    type: 'full-time',
    description:
      'Started on Web3 and DeFi delivery, building blockchain integrations with Ethers.js and Web3.js including wallet connection flows, on-chain transaction handling, and DeFi protocol interactions, and contributing to architecture decisions on high-availability systems serving thousands of concurrent users. Moved into AI engineering on SerenGPT.',
    technologies: [
      'React',
      'Next.js',
      'NestJS',
      'LangGraph',
      'Google ADK',
      'PostgreSQL',
      'pgvector',
      'Ethers.js',
      'Web3.js',
      'MetaMask',
      'Elasticsearch',
    ],
    projects: [
      {
        name: 'SerenGPT',
        blurb:
          'AI engine for job and candidate matching - an agentic toolkit spanning CV generation, a job matching engine, an AI interview coach, and AI recruiter analysis. Multi-step agent behavior orchestrated with LangGraph and the Google Agent Development Kit over Postgres with vector search, with LLM eval suites measuring output quality across the agent tools.',
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
      {name: 'Pollenn', url: 'https://pollenn.ch'},
    ],
  },
  {
    id: 5,
    company: 'TruckinDigital',
    role: 'Senior Full-Stack Web Engineer',
    period: 'Apr 2022 - Nov 2024',
    type: 'full-time',
    description:
      'Built a trucking fleet management platform for US carriers from scratch, owning architecture and delivery across frontend and backend through to production. Implemented real-time shipment tracking and interactive fleet mapping with Trimble Maps, engineered dispatcher-driver messaging over WebSockets handling reconnection, message ordering, and delivery guarantees at sub-second latency, and integrated Plaid and Stripe for carrier billing and settlement.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'WebSockets',
      'Trimble Maps',
      'Plaid',
      'Stripe',
      'MUI Material',
    ],
    projects: [
      {name: 'TruckinDigital Web App', url: 'https://www.truckindigital.com'},
    ],
  },
  {
    id: 6,
    company: 'Freelancing',
    role: 'Full-Stack Web Engineer',
    period: 'Nov 2021 - Jul 2023',
    type: 'freelance',
    description:
      'Worked independently across blockchain, banking, and social platforms. Delivered production-ready web applications for clients ranging from startups to established financial institutions.',
    technologies: [
      'React',
      'Angular 2+',
      'Ethers.js',
      'Vanilla JS',
      'Webpack',
      'Rollup',
    ],
    projects: [
      {name: 'Blockem.io', url: 'https://www.blockem.io'},
      {name: 'Mamele.com', url: 'https://mamele.com'},
      {name: 'SMP Bank', url: 'https://smpbank.ru/home'},
    ],
  },
  {
    id: 7,
    company: 'inKin Inc',
    role: 'Front-End Team Lead',
    period: 'Jun 2019 - Apr 2022',
    type: 'full-time',
    description:
      'Led a cross-functional frontend team building a global corporate fitness and wellness platform that scaled to hundreds of thousands of active users. Established frontend architecture standards, shared component libraries, and code review processes that measurably reduced regression rates and shortened onboarding, and drove React Native mobile development alongside the web product with cross-platform feature parity across iOS and Android.',
    technologies: ['React', 'React Native', 'Redux', 'TypeScript', 'Stripe'],
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
    id: 8,
    company: 'Iguan Systems',
    role: 'Full-Stack Engineer',
    period: 'Apr 2018 - Jun 2019',
    type: 'full-time',
    description:
      'Developed enterprise SPAs and admin dashboards with GraphQL and Apollo API design, using Angular 2+ with reactive state management. Worked in an agile team delivering scalable, production-grade frontend architectures.',
    technologies: [
      'GraphQL',
      'Apollo GraphQL',
      'Angular 2+',
      'NgRx',
      'RxJS',
      'TypeScript',
    ],
    projects: [{name: 'Barder.art Admin', url: 'https://www.barder.art'}],
  },
  {
    id: 9,
    company: 'Aparg / Cincopa',
    role: 'Web Developer',
    period: 'Jan 2017 - Apr 2018',
    type: 'full-time',
    description:
      'Built web features and Chrome extensions for the Cincopa media platform. Developed tools used daily by thousands of content creators and marketers.',
    technologies: ['Vanilla JS', 'jQuery', 'Chrome Extensions API'],
    projects: [{name: 'Cincopa.com', url: 'https://www.cincopa.com'}],
  },
  {
    id: 10,
    company: 'IT-Talents',
    role: 'Junior Web Developer',
    period: 'Jan 2016 - Jan 2017',
    type: 'full-time',
    description:
      'Started my professional career building web and mobile applications. Developed a mobile tour guide app and maintained the company website.',
    technologies: ['Angular', 'Ionic', 'Capacitor', 'Vanilla JS'],
    projects: [
      {
        name: 'Paris Tour Guide App',
        url: 'https://play.google.com/store/apps/details?id=com.tour.paris&hl=en_US&gl=US',
      },
      {name: 'IT-Talents Website', url: 'https://it-talents.org/am'},
    ],
  },
];
