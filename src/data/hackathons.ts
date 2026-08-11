export interface Hackathon {
  id: number;
  hackathon: string;
  year: string;
  project: string;
  award: string;
  description: string;
  technologies: string[];
  devpostUrl: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 1,
    hackathon: 'Codegeist 2024',
    year: '2024',
    project: 'FlowSense - Intelligent Flowboards for Jira',
    award: 'Winner',
    description:
      'AI-powered collaboration tool for the Atlassian ecosystem generating user journey maps, wireframe specs, user stories, and pain-point analyses from product descriptions, with a Rovo agent wiring insights into Jira workflows via Atlassian Forge.',
    technologies: [
      'Atlassian Forge',
      'React',
      'TypeScript',
      'AWS Lambda',
      'AI Agents',
      'Prompt Engineering',
    ],
    devpostUrl: 'https://devpost.com/software/flowsense-intelligent-fowboards',
  },
];
