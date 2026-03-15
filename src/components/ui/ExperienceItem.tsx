import {useState} from 'react';
import {motion} from 'framer-motion';

import {IconExternalLinkSmall} from '../../assets/icons/IconExternalLinkSmall';
import type {Experience, Project} from '../../data/experience';
import {StoreLinksModal} from './StoreLinksModal';
import {linkCount, singleLink} from '../../lib/projectLinks';

interface ExperienceItemProps {
  item: Experience;
  index: number;
}

export function ExperienceItem({item, index}: ExperienceItemProps) {
  const isEven = index % 2 === 0;
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 30},
          visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.32, ease: 'easeOut'},
          },
        }}
        className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
          <div className="w-4 h-4 rounded-full bg-brand-vivid border-2 border-bg-deep" />
        </div>

        <div
          className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
        >
          <span
            className="inline-block text-sm font-medium px-3 py-1 rounded-full"
            style={{
              background: 'var(--color-brand-vivid-a10)',
              border: 'var(--border-glow)',
              color: 'var(--color-brand-soft)',
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
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-lg text-text-primary">
                {item.company}
              </h3>
              <span
                className="text-xs px-2 py-0.5 rounded-full shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.type}
              </span>
            </div>

            <p className="text-brand-soft text-sm font-medium mb-3">
              {item.role}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full text-text-secondary"
                  style={{background: 'rgba(248,250,252,0.05)'}}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {item.projects.map((project) => {
                const count = linkCount(project);
                if (count === 0) return null;
                if (count === 1)
                  return (
                    <a
                      key={project.name}
                      href={singleLink(project)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-secondary hover:text-brand-soft transition-colors duration-200 flex items-center gap-1"
                    >
                      <IconExternalLinkSmall className="w-3 h-3" />
                      {project.name}
                    </a>
                  );
                return (
                  <button
                    key={project.name}
                    onClick={() => setModalProject(project)}
                    className="text-xs text-text-secondary hover:text-brand-soft transition-colors duration-200 flex items-center gap-1"
                  >
                    <IconExternalLinkSmall className="w-3 h-3" />
                    {project.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {modalProject && (
        <StoreLinksModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}
