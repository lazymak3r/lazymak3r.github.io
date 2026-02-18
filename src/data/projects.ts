export interface PortfolioProject {
  id: number
  title: string
  description: string
  tech: string[]
  liveUrl: string
  featured: boolean
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Vertical Slider',
    description: 'A smooth, animated vertical image slider built with vanilla JavaScript and CSS transitions.',
    tech: ['JavaScript', 'CSS3', 'HTML5'],
    liveUrl: 'https://aramsuqiasyan.github.io/slider/',
    featured: true,
  },
  {
    id: 2,
    title: 'Flex Gallery',
    description: 'An interactive CSS Flexbox gallery that expands panels on hover with fluid animations.',
    tech: ['JavaScript', 'CSS3', 'Flexbox'],
    liveUrl: 'https://aramsuqiasyan.github.io/gallery/',
    featured: true,
  },
  {
    id: 3,
    title: 'Drag And Drop',
    description: 'A native HTML5 drag-and-drop interface demonstrating the browser DnD API with visual feedback.',
    tech: ['JavaScript', 'HTML5 DnD API', 'CSS3'],
    liveUrl: 'https://aramsuqiasyan.github.io/drag/',
    featured: false,
  },
  {
    id: 4,
    title: 'Aim Game',
    description: 'A browser-based aim-training game that tests reaction time and mouse accuracy with score tracking.',
    tech: ['JavaScript', 'Canvas API', 'CSS3'],
    liveUrl: 'https://aramsuqiasyan.github.io/game/',
    featured: true,
  },
  {
    id: 5,
    title: 'Funny Board',
    description: 'An interactive drawing board with fun visual effects and canvas-based rendering.',
    tech: ['JavaScript', 'Canvas API', 'CSS3'],
    liveUrl: 'https://aramsuqiasyan.github.io/board/',
    featured: false,
  },
  {
    id: 6,
    title: 'Lambda Restaurant',
    description: 'A modern restaurant landing page with animated sections and responsive design.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://aramsuqiasyan.github.io/lambda/',
    featured: false,
  },
  {
    id: 7,
    title: 'Landing Zero',
    description: 'A clean, minimal product landing page template with parallax and scroll animations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://aramsuqiasyan.github.io/landingZero/',
    featured: false,
  },
  {
    id: 8,
    title: 'Cosmos',
    description: 'An immersive space-themed experience with CSS and JavaScript particle animations simulating a galaxy.',
    tech: ['JavaScript', 'Canvas API', 'CSS3'],
    liveUrl: 'https://aramsuqiasyan.github.io/cosmos/',
    featured: true,
  },
  {
    id: 9,
    title: 'Social Icons',
    description: 'An animated social media icon pack with interactive hover effects and CSS micro-interactions.',
    tech: ['HTML5', 'CSS3', 'SVG'],
    liveUrl: 'https://aramsuqiasyan.github.io/socicons/',
    featured: false,
  },
  {
    id: 10,
    title: 'Switch',
    description: 'Creative CSS-only toggle switches with smooth animated transitions and accessible markup.',
    tech: ['HTML5', 'CSS3'],
    liveUrl: 'https://aramsuqiasyan.github.io/switch/',
    featured: false,
  },
]
