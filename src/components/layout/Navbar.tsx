import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const navLinks = [
    {label: 'Home', href: '#hero'},
    {label: 'About', href: '#about'},
    {label: 'Experience', href: '#experience'},
    {label: 'Projects', href: '#projects'},
    {label: 'Skills', href: '#skills'},
    {label: 'Contact', href: '#contact'},
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const sectionIds = navLinks.map(l => l.href.slice(1))
        const observers: IntersectionObserver[] = []

        sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id)
                },
                {threshold: 0.4}
            )
            obs.observe(el)
            observers.push(obs)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [])

    return (
        <motion.header
            initial={{y: -80, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            style={{zIndex: 'var(--z-navbar)' as unknown as number}}
            className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
                scrolled
                    ? 'bg-bg-deep/80 backdrop-blur-md border-b border-white/5'
                    : 'bg-transparent'
            }`}
        >
            <div className="section-container">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    <a href="#hero" className="font-display font-bold text-xl gradient-brand-text">
                        LazyMak3R
                    </a>

                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-200 ${
                                        activeSection === link.href.slice(1)
                                            ? 'text-brand-cyan'
                                            : 'text-text-secondary hover:text-text-primary'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={menuOpen ? {rotate: 45, y: 8} : {rotate: 0, y: 0}}
                            className="block w-6 h-0.5 bg-text-primary origin-center transition-all"
                        />
                        <motion.span
                            animate={menuOpen ? {opacity: 0} : {opacity: 1}}
                            className="block w-6 h-0.5 bg-text-primary"
                        />
                        <motion.span
                            animate={menuOpen ? {rotate: -45, y: -8} : {rotate: 0, y: 0}}
                            className="block w-6 h-0.5 bg-text-primary origin-center"
                        />
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        className="md:hidden overflow-hidden bg-bg-surface/95 backdrop-blur-md border-b border-white/5"
                    >
                        <ul className="section-container py-6 flex flex-col gap-5">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`text-base font-medium transition-colors ${
                                            activeSection === link.href.slice(1)
                                                ? 'text-brand-cyan'
                                                : 'text-text-secondary'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
