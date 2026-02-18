import {motion} from 'framer-motion'

import lazyImg from '../../assets/images/lazy.jpg'
import trakioImg from '../../assets/images/trakio.png'
import localingoImg from '../../assets/images/localingo.png'
import musicdropImg from '../../assets/images/musicdrop.png'
import appStoreBadge from '../../assets/images/download_on_the_app_store.svg'
import playStoreBadge from '../../assets/images/get_It_on_google_play.svg'
import {ArrowRight} from '../../assets/icons/ArrowRight'
import {SectionWrapper} from '../ui/SectionWrapper'

const highlights = [
    {icon: '⚡', label: 'Build app from MVP to launch'},
    {icon: '🔧', label: 'Revive & improve existing apps'},
    {icon: '☁️', label: 'Firebase / AWS integrations'},
    {icon: '👥', label: 'Lead frontend teams'},
    {icon: '📝', label: 'Code reviews & mentoring'},
]

const myApps = [
    {
        name: 'Trakio',
        tagline: 'Finance Tracker',
        description: 'A beautifully simple yet powerful finance tracker for personal and business use. Visualize spending, set goals, and take control of your money.',
        icon: trakioImg,
        iconBg: null,
        appStore: 'https://apps.apple.com/us/app/trakio/id6748575726',
        playStore: '#',
    },
    {
        name: 'Localingo',
        tagline: 'Local Translation',
        description: 'Offline-first translator with peer-to-peer chat powered by on-device ML. Communicate in any language - no Wi-Fi or mobile data required.',
        icon: localingoImg,
        iconBg: null,
        appStore: 'https://apps.apple.com/us/app/localingo-local-translation/id6754503625',
        playStore: '#',
    },
    {
        name: 'MusicDrop',
        tagline: 'Offline Music Player',
        description: 'Take control of your music library with offline playback, background playing, and high-quality audio - your music, always available, wherever you are.',
        icon: musicdropImg,
        iconBg: null,
        appStore: 'https://apps.apple.com/us/app/musicdrop-music-playlists/id6705131153',
        playStore: '#',
    },
]

export function About() {
    return (
        <SectionWrapper id="about">
            <div className="section-container">
                <div className="mb-14">
                    <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
                        Who I am
                    </p>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                        About <span className="gradient-brand-text">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.45, ease: 'easeOut'}}
                        className="space-y-5"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            I'm a passionate full-stack software engineer who strives to create fascinating and
                            breathtaking user experiences. With a user-oriented approach, I make sure to meet
                            deadlines and deliver the best value to every project.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            With extensive knowledge of JavaScript, specifically React, React Native, Node, and Angular,
                            I've led front-end teams that launched global SaaS apps and worked with individuals and
                            companies on projects from MVP to platforms serving hundreds of thousands of users.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            I've built and improved dozens of successful applications across social networking,
                            education, entertainment, fitness, fintech, and commerce. I also teach development courses
                            in JS, HTML, CSS, and React.js.
                        </p>

                        <div className="pt-4 space-y-3">
                            <p className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                                How I can help you
                            </p>
                            {highlights.map(h => (
                                <div key={h.label} className="flex items-center gap-3">
                                    <span className="text-base">{h.icon}</span>
                                    <span className="text-text-secondary text-sm">{h.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a
                                href="mailto:aramsuqiasyan20@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-button font-medium text-sm text-text-primary transition-all duration-300"
                                style={{
                                    background: 'var(--gradient-brand)',
                                    boxShadow: 'var(--shadow-glow-purple)',
                                }}
                            >
                                Get in touch
                                <ArrowRight className="w-4 h-4"/>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.45, ease: 'easeOut', delay: 0.1}}
                        whileHover={{scale: 1.02, transition: {type: 'spring', stiffness: 300}}}
                        className="relative"
                    >
                        <div
                            className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                            style={{background: 'var(--gradient-brand)'}}
                        />
                        <div className="card-gradient-border relative">
                            <div className="p-8 text-center space-y-6">
                                <img
                                    src={lazyImg}
                                    alt="Aram Suqiasyan"
                                    className="w-32 h-32 mx-auto rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-display font-bold text-xl text-text-primary">Aram Suqiasyan</h3>
                                    <p className="text-brand-cyan text-sm mt-1">Full-Stack Software Engineer</p>
                                </div>
                                <div className="flex justify-center gap-6 pt-2">
                                    <div className="text-center">
                                        <p className="font-bold text-2xl gradient-brand-text font-display">7+</p>
                                        <p className="text-text-muted text-xs mt-1">Years exp.</p>
                                    </div>
                                    <div className="w-px bg-white/10"/>
                                    <div className="text-center">
                                        <p className="font-bold text-2xl gradient-brand-text font-display">50+</p>
                                        <p className="text-text-muted text-xs mt-1">Projects</p>
                                    </div>
                                    <div className="w-px bg-white/10"/>
                                    <div className="text-center">
                                        <p className="font-bold text-2xl gradient-brand-text font-display">6</p>
                                        <p className="text-text-muted text-xs mt-1">Companies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.15}}
                    transition={{duration: 0.45, ease: 'easeOut'}}
                    className="mt-20"
                >
                    <div className="mb-8">
                        <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
                            Co-founded
                        </p>
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary">
                            Apps I've <span className="gradient-brand-text">Shipped</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {myApps.map((app, i) => (
                            <motion.div
                                key={app.name}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{duration: 0.35, delay: i * 0.07, ease: 'easeOut'}}
                                className="card-gradient-border"
                            >
                                <div className="p-6 space-y-4 h-full flex flex-col">
                                    <div className="flex items-center gap-4">
                                        <div className="relative shrink-0 w-16 h-16">
                                            <img
                                                src={app.icon}
                                                alt=""
                                                aria-hidden="true"
                                                className="absolute inset-0 w-full h-full rounded-2xl object-cover scale-110 blur-xl opacity-70"
                                            />
                                            <img
                                                src={app.icon}
                                                alt={app.name}
                                                className="relative w-full h-full rounded-2xl object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-text-primary text-lg leading-tight">
                                                {app.name}
                                            </h4>
                                            <p className="text-brand-cyan text-xs font-medium mt-0.5">{app.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {app.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 pt-1 mt-auto">
                                        <motion.a
                                            href={app.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{scale: 1.06}}
                                            whileTap={{scale: 0.97}}
                                            transition={{type: 'spring', stiffness: 400, damping: 20}}
                                            className="inline-block"
                                            style={{transformOrigin: 'center'}}
                                        >
                                            <img src={appStoreBadge} alt="Download on the App Store" className="h-9"/>
                                        </motion.a>
                                        {app.playStore !== '#' && (
                                            <motion.a
                                                href={app.playStore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{scale: 1.06}}
                                                whileTap={{scale: 0.97}}
                                                transition={{type: 'spring', stiffness: 400, damping: 20}}
                                                className="inline-block"
                                                style={{transformOrigin: 'center'}}
                                            >
                                                <img src={playStoreBadge} alt="Get it on Google Play" className="h-9"/>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}
