import { motion } from 'framer-motion'
import { SectionWrapper } from '../ui/SectionWrapper'
import { IconGitHub } from '../../assets/icons/IconGitHub'
import { IconLinkedIn } from '../../assets/icons/IconLinkedIn'
import { IconTwitterX } from '../../assets/icons/IconTwitterX'
import { IconEmail } from '../../assets/icons/IconEmail'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/lazymak3r',
    icon: <IconGitHub className="w-6 h-6" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aram-suqiasyan-476305180/',
    icon: <IconLinkedIn className="w-6 h-6" />,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/AramSuqiasyan97',
    icon: <IconTwitterX className="w-6 h-6" />,
  },
]

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-6">
            Let's Build Something <span className="gradient-brand-text">Together</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10">
            I'm currently available for freelance work and open to new opportunities.
            Whether you have a project in mind or just want to chat, my inbox is always open.
          </p>

          <motion.a
            href="mailto:aramsuqiasyan20@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-button font-display font-semibold text-lg text-white transition-all duration-300 mb-12"
            style={{
              background: 'var(--gradient-brand)',
              boxShadow: 'var(--shadow-glow-purple)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-glow-cyan)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-glow-purple)'
            }}
          >
            <IconEmail className="w-5 h-5" />
            aramsuqiasyan20@gmail.com
          </motion.a>

          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: 'var(--border-subtle)' }} />
            <span className="text-text-muted text-sm">or find me on</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border-subtle)' }} />
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className="p-3 rounded-full text-text-secondary hover:text-brand-cyan transition-colors duration-200"
                style={{
                  background: 'var(--color-bg-card)',
                  border: 'var(--border-subtle)',
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
