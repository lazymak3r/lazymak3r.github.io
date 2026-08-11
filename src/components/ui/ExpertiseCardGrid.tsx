import {motion} from 'framer-motion';
import type {Icon} from '@phosphor-icons/react';

import {springSnappy, easeStandard} from '../../lib/motion';

export interface ExpertiseCard {
  color: string;
  icon: Icon;
  title: string;
  description: string;
  badges: string[];
}

const containerVariants = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.07}},
};

const cardVariants = {
  hidden: {opacity: 0, y: 28},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.35, ease: easeStandard},
  },
};

export function ExpertiseCardGrid({items}: {items: ExpertiseCard[]}) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={cardVariants}
          whileHover={{y: -5, transition: springSnappy}}
          className="group relative flex flex-col rounded-card overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-separator)] transition-colors duration-300 hover:border-[var(--color-separator-opaque)]"
        >
          <div className="flex flex-col flex-1 p-6">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 shrink-0"
              style={{
                background: 'var(--color-brand-icon-bg)',
                border: '1px solid var(--color-brand-icon-border)',
              }}
            >
              <item.icon
                size={18}
                weight="duotone"
                color="var(--color-brand-vivid)"
              />
            </div>

            <h3 className="font-display font-semibold text-text-primary text-sm mb-2.5 leading-snug text-balance">
              {item.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 rounded-full font-medium bg-fill-muted text-text-secondary border border-[var(--color-separator)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
