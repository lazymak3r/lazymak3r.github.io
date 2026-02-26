export interface Hackathon {
    id: number
    hackathon: string
    year: string
    project: string
    award: string
    description: string
    technologies: string[]
    devpostUrl: string
}

export const hackathons: Hackathon[] = [
    {
        id: 1,
        hackathon: 'Codegeist 2024',
        year: '2024',
        project: 'FlowSense — Intelligent Flowboards for Jira',
        award: '3rd Place',
        description:
            'AI-powered visual collaboration tool for Atlassian users. Generates user journey maps, wireframe specs, user stories, and pain points for each flow stage. Integrates a Rovo UX agent for design feedback and connects insights directly into Jira workflows via async Loom collaboration.',
        technologies: ['Atlassian Forge', 'React', 'TypeScript', 'Node.js', 'AWS Lambda', 'OpenAI', 'Rovo', 'Jira API'],
        devpostUrl: 'https://devpost.com/software/flowsense-intelligent-fowboards',
    },
]