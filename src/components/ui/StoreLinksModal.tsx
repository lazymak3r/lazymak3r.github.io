import {motion, AnimatePresence} from 'framer-motion';

import {IconExternalLinkSmall} from '../../assets/icons/IconExternalLinkSmall';
import type {Project} from '../../data/experience';
import appStoreBadge from '../../assets/images/download_on_the_app_store.svg';
import playStoreBadge from '../../assets/images/get_It_on_google_play.svg';

function modalTitle(project: Project) {
  const hasStore = project.appStore || project.playStore;
  const hasUrl = project.url;
  if (hasStore && hasUrl) return `Get ${project.name}`;
  if (hasStore) return `Download ${project.name}`;
  return `Open ${project.name}`;
}

interface StoreLinksModalProps {
  project: Project;
  onClose: () => void;
}

export function StoreLinksModal({project, onClose}: StoreLinksModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{background: 'rgba(0,0,0,0.7)'}}
        onClick={onClose}
      >
        <motion.div
          initial={{opacity: 0, scale: 0.92, y: 16}}
          animate={{opacity: 1, scale: 1, y: 0}}
          exit={{opacity: 0, scale: 0.92, y: 16}}
          transition={{type: 'spring', stiffness: 400, damping: 28}}
          className="rounded-card p-6 w-full max-w-xs space-y-4"
          style={{
            background: 'var(--color-bg-card)',
            border: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card-hover)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="font-display font-semibold text-text-primary text-center">
            {modalTitle(project)}
          </p>
          <div className="flex flex-col items-center gap-3">
            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.97}}
                className="text-xs text-text-secondary hover:text-brand-soft transition-colors duration-200 flex items-center gap-1"
              >
                <IconExternalLinkSmall className="w-3 h-3" />
                Visit Website
              </motion.a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-10"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.97}}
                />
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={playStoreBadge}
                  alt="Get it on Google Play"
                  className="h-10"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.97}}
                />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
