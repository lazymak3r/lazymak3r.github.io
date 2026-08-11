import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import {springSnappy, springSheet, easeStandard} from '../../lib/motion';

const navLinks = [
  {label: 'Home', href: '#hero'},
  {label: 'About', href: '#about'},
  {label: 'AI Systems', href: '#ai-systems'},
  {label: 'Projects', href: '#projects'},
  {label: 'Experience', href: '#experience'},
  {label: 'Skills', href: '#skills'},
  {label: 'Hackathons', href: '#hackathons'},
  {label: 'iGaming', href: '#system-expertise'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    let raf = 0;

    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 40);

      const line = window.innerWidth >= 768 ? 96 : 80;
      const doc = document.documentElement;
      const atBottom =
        window.scrollY + window.innerHeight >= doc.scrollHeight - 2;

      if (atBottom) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          if (document.getElementById(sectionIds[i])) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      let current = sectionIds[0];
      let best = -Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line && top > best) {
          best = top;
          current = id;
        }
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <motion.header
      initial={{y: -80, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.4, ease: easeStandard}}
      style={{zIndex: 'var(--z-navbar)' as unknown as number}}
      className="fixed top-0 left-0 right-0"
    >
      <div
        className={`material-chrome relative transition-[background-color,backdrop-filter] duration-300 ${
          scrolled ? 'is-floating' : ''
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#hero"
              className="pressable font-display font-bold text-xl gradient-brand-text"
            >
              Aram Suqiasyan
            </a>

            <ul className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`pressable text-sm font-medium transition-colors duration-200 ${
                      activeSection === link.href.slice(1)
                        ? 'text-brand-soft'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="pressable lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? {rotate: 45, y: 8} : {rotate: 0, y: 0}}
                transition={springSnappy}
                className="block w-6 h-0.5 bg-text-primary origin-center"
              />
              <motion.span
                animate={menuOpen ? {opacity: 0} : {opacity: 1}}
                transition={springSnappy}
                className="block w-6 h-0.5 bg-text-primary"
              />
              <motion.span
                animate={menuOpen ? {rotate: -45, y: -8} : {rotate: 0, y: 0}}
                transition={springSnappy}
                className="block w-6 h-0.5 bg-text-primary origin-center"
              />
            </button>
          </nav>
        </div>

        <div
          aria-hidden="true"
          className={`scroll-edge pointer-events-none absolute left-0 right-0 top-full h-6 transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{y: '-100%', opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: '-100%', opacity: 0}}
            transition={springSheet}
            drag="y"
            dragDirectionLock
            dragConstraints={{top: 0, bottom: 0}}
            dragElastic={{top: 0.55, bottom: 0}}
            onDragEnd={(_, info) => {
              if (info.velocity.y < -300 || info.offset.y < -60) {
                setMenuOpen(false);
              }
            }}
            className="material-menu lg:hidden overflow-hidden touch-pan-x"
          >
            <ul className="section-container py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`pressable text-base font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-brand-soft'
                        : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              aria-hidden="true"
              className="mx-auto mb-3 h-1 w-10 rounded-full bg-[var(--color-n300)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
