import type {Icon} from '@phosphor-icons/react';
import {
  GiftIcon,
  PackageIcon,
  SoccerBallIcon,
  ChartLineUpIcon,
  PlugsConnectedIcon,
  IdentificationCardIcon,
} from '@phosphor-icons/react';

import {brand} from '../styles/colors';

export interface IgamingSystem {
  color: string;
  icon: Icon;
  title: string;
  description: string;
  badges: string[];
}

export const igamingSystems: IgamingSystem[] = [
  {
    color: brand.vivid,
    icon: GiftIcon,
    title: 'Bonus Engine & Abuse Controls',
    description:
      'Built the bonus engine for a white-label casino and sportsbook, together with the abuse controls that sit around it - so promotional mechanics can run per operator without opening the platform up to bonus abuse.',
    badges: ['Bonus engine', 'Abuse controls'],
  },
  {
    color: brand.base,
    icon: IdentificationCardIcon,
    title: 'Player Account Management',
    description:
      'Delivered player account management as a core platform system, covering the player record and account lifecycle that the casino, sportsbook, and downstream operator tooling all read from.',
    badges: ['PAM', 'Account lifecycle'],
  },
  {
    color: brand.soft,
    icon: SoccerBallIcon,
    title: 'Sportsbook & In-House Games',
    description:
      'Delivered the sportsbook alongside in-house games as part of the core platform, shipped to operators as a single white-label product rather than a set of separate integrations.',
    badges: ['Sportsbook', 'In-house games'],
  },
  {
    color: brand.vivid,
    icon: PlugsConnectedIcon,
    title: 'Slot-Provider Integrations',
    description:
      'Integrated third-party slot providers into the platform so operators inherit a working game catalogue on licence, without wiring each provider themselves.',
    badges: ['Provider integrations', 'Game catalogue'],
  },
  {
    color: brand.deep,
    icon: ChartLineUpIcon,
    title: 'Fraud Detection, Affiliates & CRM',
    description:
      'Wired in fraud detection through a third-party solution, plus affiliate campaign support and Fasttrack CRM integration - the acquisition and retention surface operators run the business on.',
    badges: [
      'Third-party fraud detection',
      'Affiliate campaigns',
      'Fasttrack CRM',
    ],
  },
  {
    color: brand.deep,
    icon: PackageIcon,
    title: 'Operator Delivery & Licensing',
    description:
      'Services containerized with Docker and shipped to operator environments through CI/CD. The platform is licensed to operators and sold with source code, serving LATAM, Asia, Russia, and Middle East markets.',
    badges: ['Docker', 'CI/CD to operators', 'Source-code licensing'],
  },
];