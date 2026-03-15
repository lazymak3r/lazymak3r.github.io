import {motion} from 'framer-motion';

import {IconExternalLink} from '../../assets/icons/IconExternalLink';
import type {Hackathon} from '../../data/hackathons';
import {ui} from '../../styles/colors';

export function HackathonCard({
  hackathon,
  project,
  award,
  description,
  technologies,
  devpostUrl,
}: Hackathon) {
  return (
    <motion.div
      variants={{
        hidden: {opacity: 0, scale: 0.92, y: 20},
        visible: {opacity: 1, scale: 1, y: 0, transition: {duration: 0.3}},
      }}
      whileHover={{
        y: -6,
        transition: {type: 'spring', stiffness: 400, damping: 20},
      }}
      className="group relative flex flex-col h-full"
    >
      <div
        className="flex flex-col h-full p-6 rounded-card transition-all duration-300"
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            'rgba(255,255,255,0.14)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            'rgba(255,255,255,0.07)';
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-text-muted font-medium">{hackathon}</p>
            <span
              className="inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(255,197,61,0.12)',
                color: ui.award,
                border: '1px solid rgba(255,197,61,0.25)',
              }}
            >
              {award}
            </span>
          </div>
          <a
            href={devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project} on Devpost`}
            className="text-text-muted hover:text-brand-soft transition-colors duration-200 shrink-0 ml-3"
          >
            <IconExternalLink className="w-4 h-4" />
          </a>
        </div>

        <h3 className="font-display font-semibold text-text-primary mb-3">
          {project}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {technologies.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full text-text-secondary"
              style={{background: 'rgba(248,250,252,0.05)'}}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
