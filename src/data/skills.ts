export type SkillCategory = 'Frontend' | 'Backend' | 'AI & Web3' | 'Tooling'

export interface Skill {
  id: number
  name: string
  category: SkillCategory
}

export const skills: Skill[] = [
  { id: 1,  name: 'JavaScript',    category: 'Frontend' },
  { id: 2,  name: 'TypeScript',    category: 'Frontend' },
  { id: 3,  name: 'React',         category: 'Frontend' },
  { id: 4,  name: 'React Native',  category: 'Frontend' },
  { id: 5,  name: 'Next.js',       category: 'Frontend' },
  { id: 6,  name: 'Angular 2+',    category: 'Frontend' },
  { id: 7,  name: 'Svelte',        category: 'Frontend' },
  { id: 8,  name: 'HTML5',         category: 'Frontend' },
  { id: 9,  name: 'CSS3',          category: 'Frontend' },
  { id: 10, name: 'Tailwind CSS',  category: 'Frontend' },
  { id: 11, name: 'Redux',         category: 'Frontend' },
  { id: 12, name: 'Zustand',       category: 'Frontend' },
  { id: 13, name: 'MobX',          category: 'Frontend' },
  { id: 14, name: 'RxJS',          category: 'Frontend' },
  { id: 15, name: 'NgRx',          category: 'Frontend' },

  { id: 16, name: 'Node.js',       category: 'Backend' },
  { id: 17, name: 'NestJS',        category: 'Backend' },
  { id: 18, name: 'Express.js',    category: 'Backend' },
  { id: 19, name: 'GraphQL',       category: 'Backend' },
  { id: 20, name: 'REST / SOAP',   category: 'Backend' },
  { id: 21, name: 'MongoDB',       category: 'Backend' },
  { id: 22, name: 'MySQL',         category: 'Backend' },
  { id: 23, name: 'Neo4j',         category: 'Backend' },
  { id: 24, name: 'Stripe',        category: 'Backend' },
  { id: 25, name: 'Socket.IO',     category: 'Backend' },
  { id: 26, name: 'Pusher',        category: 'Backend' },
  { id: 27, name: 'TypeORM',       category: 'Backend' },
  { id: 28, name: 'Prisma',        category: 'Backend' },
  { id: 29, name: 'Elastic Search',category: 'Backend' },

  { id: 30, name: 'Web3.js',       category: 'AI & Web3' },
  { id: 31, name: 'Ethers.js',     category: 'AI & Web3' },
  { id: 32, name: 'Langchain',     category: 'AI & Web3' },
  { id: 33, name: 'LlamaIndex',    category: 'AI & Web3' },
  { id: 34, name: 'OpenAI',        category: 'AI & Web3' },
  { id: 35, name: 'HuggingFace',   category: 'AI & Web3' },
  { id: 36, name: 'PineconeDB',    category: 'AI & Web3' },
  { id: 37, name: 'ChromaDB',      category: 'AI & Web3' },

  { id: 38, name: 'Git',           category: 'Tooling' },
  { id: 39, name: 'Vite',          category: 'Tooling' },
  { id: 40, name: 'Webpack',       category: 'Tooling' },
  { id: 41, name: 'Jest',          category: 'Tooling' },
  { id: 42, name: 'Cypress',       category: 'Tooling' },
  { id: 43, name: 'AWS',           category: 'Tooling' },
  { id: 44, name: 'Heroku',        category: 'Tooling' },
  { id: 45, name: 'Ionic',         category: 'Tooling' },
  { id: 46, name: 'Electron',      category: 'Tooling' },
  { id: 47, name: 'Storybook',     category: 'Tooling' },
  { id: 48, name: 'RegEx',         category: 'Tooling' },
]

export const skillCategories: SkillCategory[] = ['Frontend', 'Backend', 'AI & Web3', 'Tooling']
