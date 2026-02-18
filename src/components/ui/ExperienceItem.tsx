import { motion } from 'framer-motion'
import type { Experience } from '../../data/experience'
import { IconExternalLinkSmall } from '../../assets/icons/IconExternalLinkSmall'

interface ExperienceItemProps {
  item: Experience
  index: number
}

export function ExperienceItem({ item, index }: ExperienceItemProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } },
      }}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <div className="w-4 h-4 rounded-full bg-brand-violet border-2 border-bg-deep shadow-[0_0_12px_rgba(72,18,228,0.6)]" />
      </div>

      <div className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
        <span
          className="inline-block text-sm font-medium px-3 py-1 rounded-full"
          style={{
            background: 'rgba(72,18,228,0.15)',
            border: 'var(--border-glow)',
            color: 'var(--color-brand-cyan)',
          }}
        >
          {item.period}
        </span>
      </div>

      <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div
          className="p-6 rounded-card"
          style={{
            background: 'var(--color-bg-card)',
            border: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display font-semibold text-lg text-text-primary">
              {item.company}
            </h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full shrink-0"
              style={{
                background: item.type === 'freelance' ? 'rgba(26,172,204,0.15)' : 'rgba(72,18,228,0.15)',
                color: item.type === 'freelance' ? 'var(--color-brand-cyan)' : 'var(--color-brand-violet)',
              }}
            >
              {item.type}
            </span>
          </div>

          <p className="text-brand-cyan text-sm font-medium mb-3">{item.role}</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.map(tech => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full text-text-muted"
                style={{ background: 'rgba(248,250,252,0.05)' }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {item.projects.filter(p => p.url !== '#').map(project => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-secondary hover:text-brand-cyan transition-colors duration-200 flex items-center gap-1"
              >
                <IconExternalLinkSmall className="w-3 h-3" />
                {project.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
