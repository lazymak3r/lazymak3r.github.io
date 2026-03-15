import {brand} from '../styles/colors';

export interface IgamingDomain {
  label: string;
  score: number;
  techs: string[];
  color: string;
}

export const igamingDomains: IgamingDomain[] = [
  {
    label: 'Real-time Systems',
    score: 95,
    techs: ['Socket.IO', 'WebSockets', 'Redis Pub/Sub', 'Kafka'],
    color: brand.base,
  },
  {
    label: 'Game Frontend',
    score: 80,
    techs: ['PixiJS', 'Phaser.js', 'GSAP', 'Canvas API', 'WebGL'],
    color: brand.vivid,
  },
  {
    label: 'Backend / PAM',
    score: 90,
    techs: ['NestJS', 'Node.js', 'PAM Integration', 'Game State Machines'],
    color: brand.vivid,
  },
  {
    label: 'Payments & Crypto',
    score: 88,
    techs: ['Stripe', 'Web3.js', 'Ethers.js', 'Crypto Payments'],
    color: brand.soft,
  },
  {
    label: 'Mobile Gaming',
    score: 85,
    techs: ['React Native', 'Expo', 'IAP', 'Offline-first'],
    color: brand.deep,
  },
  {
    label: 'Compliance / KYC',
    score: 75,
    techs: ['KYC/AML SDKs', 'RNG Systems', 'Provably Fair'],
    color: brand.deep,
  },
];
