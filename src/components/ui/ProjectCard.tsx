import {useState} from 'react';
import {motion} from 'framer-motion';

import {StoreLinksModal} from './StoreLinksModal';
import type {ModalOrigin} from './StoreLinksModal';
import {linkCount, singleLink} from '../../lib/projectLinks';
import {springSnappy} from '../../lib/motion';
import type {Project} from '../../data/experience';
import {ArrowSquareOutIcon} from '@phosphor-icons/react';

interface ProjectCardProps
  extends Pick<Project, 'url' | 'appStore' | 'playStore' | 'telegram'> {
  name: string;
  blurb?: string;
  company: string;
  period: string;
  technologies: string[];
}

export function ProjectCard({
  name,
  blurb,
  url,
  appStore,
  playStore,
  telegram,
  company,
  period,
  technologies,
}: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [origin, setOrigin] = useState<ModalOrigin | null>(null);
  const project: Project = {name, url, appStore, playStore, telegram};
  const count = linkCount(project);

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin({x: r.left + r.width / 2, y: r.top + r.height / 2});
    setModalOpen(true);
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: {opacity: 0, scale: 0.92, y: 20},
          visible: {opacity: 1, scale: 1, y: 0, transition: {duration: 0.3}},
        }}
        whileHover={{y: -6, transition: springSnappy}}
        className="group relative flex flex-col h-full"
      >
        <div className="flex flex-col h-full p-6 rounded-card bg-[var(--color-bg-card)] border border-[var(--color-separator)] transition-colors duration-300 group-hover:border-[var(--color-separator-opaque)]">
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
                  className="pressable text-text-muted hover:text-brand-soft transition-colors duration-200 shrink-0 ml-3"
                >
                  <ArrowSquareOutIcon weight="regular" className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={openModal}
                  aria-label={`Open ${name}`}
                  className="pressable text-text-muted hover:text-brand-soft transition-colors duration-200 shrink-0 ml-3"
                >
                  <ArrowSquareOutIcon weight="regular" className="w-4 h-4" />
                </button>
              ))}
          </div>

          <h3 className="font-display font-semibold text-text-primary text-balance mb-2">
            {name}
          </h3>

          {blurb && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-6">
              {blurb}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {technologies.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full text-text-secondary bg-fill-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <StoreLinksModal
        project={project}
        open={modalOpen}
        origin={origin}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
