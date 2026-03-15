import {motion} from 'framer-motion';

import {SectionWrapper} from '../ui/SectionWrapper';
import {skills, skillCategories} from '../../data/skills';
import type {SkillCategory} from '../../data/skills';
import {ui} from '../../styles/colors';
const categoryMeta: Record<SkillCategory, {color: string; label: string}> = {
  Frontend: {color: 'var(--color-brand-vivid)', label: 'Frontend'},
  Backend: {color: 'var(--color-brand-soft)', label: 'Backend'},
  'AI & Web3': {color: 'var(--color-brand-vivid)', label: 'AI & Web3'},
  Tooling: {color: 'var(--color-brand-soft)', label: 'Tooling'},
  iGaming: {color: 'var(--color-brand-vivid)', label: 'iGaming'},
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-bg-surface/30">
      <div className="section-container">
        <div className="mb-14 text-center">
          <p className="text-brand-soft text-sm font-medium tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Skills & <span className="gradient-brand-text">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const meta = categoryMeta[category];
            const categorySkills = skills.filter(
              (s) => s.category === category,
            );

            return (
              <motion.div
                key={category}
                initial={{opacity: 0, y: 32}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.15}}
                transition={{
                  duration: 0.35,
                  delay: catIndex * 0.05,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="card-gradient-border"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="block w-2.5 h-2.5 rounded-full"
                        style={{background: meta.color}}
                      />
                      <h3
                        className="font-display font-semibold text-sm uppercase tracking-widest"
                        style={{color: meta.color}}
                      >
                        {meta.label}
                      </h3>
                    </div>
                    <span className="text-text-muted text-xs tabular-nums">
                      {categorySkills.length} techs
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, i) => (
                      <motion.span
                        key={skill.id}
                        initial={{opacity: 0, scale: 0.85}}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.18,
                            delay: catIndex * 0.04 + i * 0.02,
                            ease: 'easeOut',
                          },
                        }}
                        viewport={{once: true}}
                        whileHover={{
                          borderColor: meta.color,
                          color: ui.textPrimary,
                          y: -1,
                          transition: {duration: 0.15},
                        }}
                        className="px-3 py-1.5 rounded-full text-xs border cursor-default select-none"
                        style={{
                          borderColor: 'rgba(255,255,255,0.08)',
                          background: 'rgba(255,255,255,0.04)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
