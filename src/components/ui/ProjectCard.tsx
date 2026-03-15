import {useState} from 'react';
import {motion} from 'framer-motion';

import {IconExternalLink} from '../../assets/icons/IconExternalLink';
import {StoreLinksModal} from './StoreLinksModal';
import {linkCount, singleLink} from '../../lib/projectLinks';
import type {Project} from '../../data/experience';

interface ProjectCardProps extends Pick<
  Project,
  'url' | 'appStore' | 'playStore'
> {
  name: string;
  company: string;
  period: string;
  technologies: string[];
}

export function ProjectCard({
  name,
  url,
  appStore,
  playStore,
  company,
  period,
  technologies,
}: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const project: Project = {name, url, appStore, playStore};
  const count = linkCount(project);

  return (
    <>
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
              <p className="text-xs text-text-muted font-medium">{company}</p>
              <p className="text-xs text-text-muted/60 mt-0.5">{period}</p>
            </div>
            {count > 0 &&
              (count === 1 ? (
                <a
                  href={singleLink(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${name}`}
                  className="text-text-muted hover:text-brand-soft transition-colors duration-200 shrink-0 ml-3"
                >
                  <IconExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  aria-label={`Open ${name}`}
                  className="text-text-muted hover:text-brand-soft transition-colors duration-200 shrink-0 ml-3"
                >
                  <IconExternalLink className="w-4 h-4" />
                </button>
              ))}
          </div>

          <h3 className="font-display font-semibold text-text-primary mb-3 flex-1">
            {name}
          </h3>

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

      {modalOpen && (
        <StoreLinksModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
