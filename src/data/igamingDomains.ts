export interface IgamingDomain {
  label: string
  score: number
  techs: string[]
  color: string
}

export const igamingDomains: IgamingDomain[] = [
  {
    label: 'Real-time Systems',
    score: 95,
    techs: ['Socket.IO', 'WebSockets', 'Redis Pub/Sub', 'Kafka'],
    color: '#22d3ee',
  },
  {
    label: 'Game Frontend',
    score: 80,
    techs: ['PixiJS', 'Phaser.js', 'GSAP', 'Canvas API', 'WebGL'],
    color: '#a855f7',
  },
  {
    label: 'Backend / PAM',
    score: 90,
    techs: ['NestJS', 'Node.js', 'PAM Integration', 'Game State Machines'],
    color: '#4812e4',
  },
  {
    label: 'Payments & Crypto',
    score: 88,
    techs: ['Stripe', 'Web3.js', 'Ethers.js', 'Crypto Payments'],
    color: '#f59e0b',
  },
  {
    label: 'Mobile Gaming',
    score: 85,
    techs: ['React Native', 'Expo', 'IAP', 'Offline-first'],
    color: '#10b981',
  },
  {
    label: 'Compliance / KYC',
    score: 75,
    techs: ['KYC/AML SDKs', 'RNG Systems', 'Provably Fair'],
    color: '#f43f5e',
  },
]