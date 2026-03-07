export interface IgamingSystem {
  color: string
  iconPath: string
  title: string
  description: string
  badges: string[]
}

export const igamingSystems: IgamingSystem[] = [
  {
    color: '#22d3ee',
    iconPath:
      'M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6',
    title: 'High-Load iGaming Systems',
    description:
      'Built and scaled backend services under sustained peak traffic — connection pooling, query optimization, and horizontal pod autoscaling kept latency tight. Kafka handled bet placement and settlement pipelines so no event was ever dropped under load.',
    badges: ['Redis connection pooling', 'Auto-scaling pods', 'Event-driven settlement'],
  },
  {
    color: '#a855f7',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'KYC/AML & Responsible Gambling',
    description:
      'Wired up Jumio, Sumsub, and Onfido verification flows with GeoIP jurisdiction routing baked in from the start. Shipped deposit limits, self-exclusion, session timers, and reality checks that hold up under regulatory audit.',
    badges: ['Multi-provider fallback', 'Jurisdiction-aware routing', 'Self-exclusion engine'],
  },
  {
    color: '#f59e0b',
    iconPath:
      'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    title: 'Payments & PCI DSS',
    description:
      'Integrated Skrill, Neteller, and MuchBetter alongside crypto deposit/withdrawal gateways — raw card data never touches the server. All flows run tokenized through Stripe and bank APIs, scoped to PCI DSS compliance from day one.',
    badges: ['Zero raw card storage', 'Multi-gateway routing', 'Crypto on/off-ramp'],
  },
  {
    color: '#10b981',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Sports Data & Real-Time Feeds',
    description:
      'Connected Sportradar/Betradar and BetConstruct SDKs to pull live odds, scores, and match timelines, then fanned them out to thousands of WebSocket clients via Redis Pub/Sub and Streams on ElastiCache — sub-second from source to screen.',
    badges: ['Sub-second delivery', 'Redis Streams fan-out', 'ElastiCache backed'],
  },
  {
    color: '#f43f5e',
    iconPath:
      'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'Game Math & RTP Engine',
    description:
      'Wrote RTP calculation modules and paytable engine logic from scratch for casino game backends. Outcome generation is provably fair and config-driven, so RTP targets can be adjusted per jurisdiction without touching core game logic.',
    badges: ['Config-driven RTP', 'Jurisdiction-aware payouts', 'Outcome verification'],
  },
  {
    color: '#4812e4',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'API Architecture',
    description:
      'Designed RESTful and GraphQL APIs consumed across sportsbook web, mobile, and third-party clients. OAuth 2.0/JWT auth, per-route rate limiting, and OpenAPI specs ship as first-class deliverables — not afterthoughts.',
    badges: ['Contract-first design', 'Per-route rate limits', 'Multi-platform clients'],
  },
]