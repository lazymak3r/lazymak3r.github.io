import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

import {IconExternalLinkSmall} from '../../assets/icons/IconExternalLinkSmall';
import type {Project} from '../../data/experience';
import telegramBadge from '../../assets/images/open_in_telegram.svg';
import appStoreBadge from '../../assets/images/download_on_the_app_store.svg';
import playStoreBadge from '../../assets/images/get_It_on_google_play.svg';
import {useIsDesktop} from '../../hooks/useIsDesktop';
import {springSheet, springSnappy, projectMomentum} from '../../lib/motion';

function modalTitle(project: Project) {
  const hasStore = project.appStore || project.playStore;
  const hasUrl = project.url || project.telegram;
  if (hasStore && hasUrl) return `Get ${project.name}`;
  if (hasStore) return `Download ${project.name}`;
  return `Open ${project.name}`;
}

export interface ModalOrigin {
  x: number;
  y: number;
}

interface StoreLinksModalProps {
  project: Project | null;
  open: boolean;
  origin?: ModalOrigin | null;
  onClose: () => void;
}

export function StoreLinksModal({
  project,
  open,
  origin,
  onClose,
}: StoreLinksModalProps) {
  const isDesktop = useIsDesktop();
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const anchorX = origin ? (origin.x - window.innerWidth / 2) * 0.18 : 0;
  const anchorY = origin ? (origin.y - window.innerHeight / 2) * 0.18 : 0;

  const links = project && (
    <>
      {project.url && (
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.97}}
          transition={springSnappy}
          className="text-xs text-text-secondary hover:text-brand-soft transition-colors duration-200 flex items-center gap-1"
        >
          <IconExternalLinkSmall className="w-3 h-3" />
          Visit Website
        </motion.a>
      )}
      {project.appStore && (
        <a href={project.appStore} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={appStoreBadge}
            alt="Download on the App Store"
            className="h-10"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.97}}
            transition={springSnappy}
          />
        </a>
      )}
      {project.playStore && (
        <a href={project.playStore} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={playStoreBadge}
            alt="Get it on Google Play"
            className="h-10"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.97}}
            transition={springSnappy}
          />
        </a>
      )}
      {project.telegram && (
        <a href={project.telegram} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={telegramBadge}
            alt="Open in Telegram"
            className="h-10"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.97}}
            transition={springSnappy}
          />
        </a>
      )}
    </>
  );

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && project && (
        <motion.div
          key="scrim"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={springSnappy}
          style={{zIndex: 'var(--z-modal)' as unknown as number}}
          className="modal-scrim fixed inset-0 flex justify-center items-end sm:items-center p-0 sm:p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle(project)}
        >
          {isDesktop ? (
            <motion.div
              key="dialog"
              initial={{
                opacity: 0,
                scale: 0.9,
                x: anchorX,
                y: anchorY,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                x: anchorX,
                y: anchorY,
                filter: 'blur(12px)',
              }}
              transition={springSheet}
              className="material-sheet rounded-card px-6 pt-6 pb-5 w-full max-w-xs space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-display font-semibold text-text-primary text-center">
                {modalTitle(project)}
              </p>
              <div className="flex flex-col items-center gap-3">{links}</div>
            </motion.div>
          ) : (
            <motion.div
              key="sheet"
              ref={sheetRef}
              initial={{y: '100%'}}
              animate={{y: 0}}
              exit={{y: '100%'}}
              transition={springSheet}
              drag="y"
              dragDirectionLock
              dragConstraints={{top: 0, bottom: 0}}
              dragElastic={{top: 0, bottom: 0.55}}
              onDragEnd={(_, info) => {
                const height = sheetRef.current?.offsetHeight ?? 320;
                const projected =
                  info.offset.y + projectMomentum(info.velocity.y);
                if (info.velocity.y > 0 && projected > height / 2) onClose();
                else if (info.velocity.y > 800) onClose();
              }}
              className="material-sheet w-full max-w-md rounded-t-[24px] px-6 pt-3 pb-[calc(1.25rem+env(safe-area-inset-bottom))] space-y-4 touch-pan-x"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                aria-hidden="true"
                className="mx-auto mb-2 h-1 w-10 rounded-full bg-[var(--color-n300)]"
              />
              <p className="font-display font-semibold text-text-primary text-center">
                {modalTitle(project)}
              </p>
              <div className="flex flex-col items-center gap-3">{links}</div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
