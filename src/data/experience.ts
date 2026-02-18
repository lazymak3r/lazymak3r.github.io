export interface Project {
    name: string
    url: string
}

export interface Experience {
    id: number
    company: string
    role: string
    period: string
    type: 'full-time' | 'freelance' | 'contract'
    description: string
    technologies: string[]
    projects: Project[]
}

export const experiences: Experience[] = [
    {
        id: 1,
        company: 'Indie Apps',
        role: 'Co-founder & Developer',
        period: '2024 - Present',
        type: 'full-time',
        description:
            'Built and shipped three independent mobile apps to the App Store. Trakio is a beautifully simple finance tracker. Localingo is an offline-first translator with peer-to-peer chat powered on-device ML. MusicDrop is an offline music player with background playback and library management.',
        technologies: ['React Native', 'TypeScript', 'Zustand', 'SQLite', 'React Navigation', 'i18next', 'IAP'],
        projects: [
            {name: 'Trakio', url: 'https://apps.apple.com/us/app/trakio/id6748575726'},
            {name: 'Localingo', url: 'https://apps.apple.com/us/app/localingo-local-translation/id6754503625'},
            {name: 'MusicDrop', url: 'https://apps.apple.com/us/app/musicdrop-music-playlists/id6705131153'},
        ],
    },
    {
        id: 2,
        company: '1hero',
        role: 'Co-founder & Lead Engineer',
        period: 'Aug 2023 - Present',
        type: 'full-time',
        description:
            'Co-founded and led engineering for an AI-powered customer support platform. Architected and built both the marketing site and the full-stack product from the ground up.',
        technologies: ['Next.js', 'React', 'NestJS', 'Zustand', 'Stripe', 'Pusher', 'PineconeDB', 'MongoDB', 'Heroku'],
        projects: [
            {name: '1hero.ai', url: 'https://1hero.ai'},
            {name: 'web.1hero.ai', url: 'https://web.1hero.ai'},
        ],
    },
    {
        id: 3,
        company: 'Iabsis SARL',
        role: 'Full-Stack Web Engineer',
        period: 'Jan 2023 - Present',
        type: 'full-time',
        description:
            'Delivered full-stack features across multiple Web3, DeFi, and SaaS products. Worked with React, Angular, NestJS, and blockchain integrations using Web3.js and Ethers.js.',
        technologies: ['Next.js', 'React', 'Angular 2+', 'React Native', 'NestJS', 'Web3.js', 'Ethers.js', 'MetaMask', 'Redux', 'Elasticsearch', 'MongoDB', 'PineconeDB'],
        projects: [
            {name: 'Airdrop.com', url: 'https://airdrop.com'},
            {name: 'Alt.co', url: 'https://alt.co'},
            {name: 'Sezame Wallet', url: 'https://sezame.app'},
            {name: 'Pollenn', url: 'https://pollenn.ch'},
            {name: 'Pollenn Admin', url: '#'},
            {name: 'Jmatch', url: '#'},
        ],
    },
    {
        id: 4,
        company: 'TruckinDigital',
        role: 'Front-End Engineer',
        period: 'Feb 2022 - Jan 2023',
        type: 'full-time',
        description:
            'Built the core web application for a logistics SaaS platform. Integrated payments, real-time messaging, and mapping features used by trucking fleets across the US.',
        technologies: ['React', 'TypeScript', 'Plaid', 'Stream.io', 'Pusher', 'Stripe', 'MUI Material', 'Trimble Maps'],
        projects: [
            {name: 'TruckinDigital Web App', url: 'https://www.truckindigital.com'},
        ],
    },
    {
        id: 5,
        company: 'Freelancing',
        role: 'Full-Stack Web Engineer',
        period: 'Nov 2021 - Jul 2023',
        type: 'freelance',
        description:
            'Worked independently across blockchain, banking, and social platforms. Delivered production-ready web applications for clients ranging from startups to established financial institutions.',
        technologies: ['React', 'Angular 2+', 'Ethers.js', 'Vanilla JS', 'Webpack', 'Gulp', 'Rollup'],
        projects: [
            {name: 'Blockem.io', url: 'https://www.blockem.io'},
            {name: 'Mamele.com', url: 'https://mamele.com'},
            {name: 'SMP Bank', url: 'https://smpbank.ru/home'},
        ],
    },
    {
        id: 6,
        company: 'inKin Inc',
        role: 'Front End Team Lead',
        period: 'Jun 2019 - Nov 2021',
        type: 'full-time',
        description:
            'Led the frontend team building a global fitness and wellness platform. Owned the web and mobile apps from architecture to delivery, scaling the product to hundreds of thousands of users.',
        technologies: ['React', 'React Native', 'Redux', 'Stripe', 'TypeScript'],
        projects: [
            {name: 'inKin Mobile App', url: 'https://apps.apple.com/us/app/inkin-fitness-challenge/id1456256877'},
            {name: 'app.inkin.com', url: 'https://app.inkin.com'},
            {name: 'inkin.com', url: 'https://inkin.com'},
        ],
    },
    {
        id: 7,
        company: 'Epam Systems',
        role: 'Full Stack Software Engineer',
        period: 'Apr 2018 - Jun 2019',
        type: 'full-time',
        description:
            'Developed enterprise SPAs and admin dashboards using Angular 2+ with reactive state management. Worked in an agile team delivering scalable, production-grade frontend architectures.',
        technologies: ['Angular 2+', 'NgRx', 'RxJS', 'GraphQL', 'Apollo GraphQL', 'TypeScript', 'MUI'],
        projects: [
            {name: 'Deout SPA', url: '#'},
            {name: 'Barder.art Admin', url: 'https://www.barder.art'},
        ],
    },
    {
        id: 8,
        company: 'Aparg',
        role: 'Web Developer',
        period: 'Jan 2017 - Apr 2018',
        type: 'full-time',
        description:
            'Built web features and Chrome extensions for the Cincopa media platform. Developed tools used daily by thousands of content creators and marketers.',
        technologies: ['Vanilla JS', 'jQuery', 'Chrome Extensions API'],
        projects: [
            {name: 'Cincopa.com', url: 'https://www.cincopa.com'},
            {name: 'Rectrace Extension', url: '#'},
            {name: 'Shazoom Extension', url: '#'},
        ],
    },
    {
        id: 9,
        company: 'IT-Talents',
        role: 'Web Developer',
        period: 'Jan 2016 - Jan 2017',
        type: 'full-time',
        description:
            'Started my professional career building web and mobile applications. Developed a mobile tour guide app and maintained the company website.',
        technologies: ['Angular', 'Ionic', 'Capacitor', 'Vanilla JS'],
        projects: [
            {
                name: 'Paris Tour Guide App',
                url: 'https://play.google.com/store/apps/details?id=com.tour.paris&hl=en_US&gl=US'
            },
            {name: 'IT-Talents Website', url: 'https://it-talents.org/am'},
        ],
    },
]