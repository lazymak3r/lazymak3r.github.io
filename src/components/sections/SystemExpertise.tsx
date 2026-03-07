import {motion} from 'framer-motion'

import {SectionWrapper} from '../ui/SectionWrapper'
import {igamingSystems} from '../../data/igamingSystems'

const systems = igamingSystems

const containerVariants = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.07}},
}

const cardVariants = {
  hidden: {opacity: 0, y: 28},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number]}
  },
}

export function SystemExpertise() {
  return (
    <SectionWrapper id="system-expertise">
      <div className="section-container">
        <div className="mb-14 text-center">
          <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
            System Expertise
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Deep Technical <span className="gradient-brand-text">Knowledge</span>
          </h2>
          <p className="mt-4 text-text-secondary text-sm max-w-xl mx-auto">
            Critical backend domains in iGaming — from high-load infrastructure to compliance and real-time data
            pipelines.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
        >
          {systems.map(system => (
            <motion.div
              key={system.title}
              variants={cardVariants}
              whileHover={{y: -5, transition: {type: 'spring', stiffness: 400, damping: 20}}}
              className="group relative flex flex-col rounded-card overflow-hidden transition-shadow duration-300"
              style={{
                background: 'var(--color-bg-card)',
                border: 'var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card-hover)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = `${system.color}33`
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(148,163,184,0.1)'
              }}
            >
              <div
                className="h-0.5 w-full"
                style={{background: `linear-gradient(90deg, #4812e4, ${system.color})`}}
              />

              <div className="flex flex-col flex-1 p-6">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 shrink-0"
                  style={{
                    background: `${system.color}18`,
                    border: `1px solid ${system.color}30`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4.5 h-4.5"
                    fill="none"
                    stroke={system.color}
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{width: '1.125rem', height: '1.125rem'}}
                  >
                    <path d={system.iconPath}/>
                  </svg>
                </div>

                <h3 className="font-display font-semibold text-text-primary text-sm mb-2.5 leading-snug">
                  {system.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
                  {system.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {system.badges.map(badge => (
                    <span
                      key={badge}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${system.color}12`,
                        color: system.color,
                        border: `1px solid ${system.color}28`,
                      }}
                    >
                                            {badge}
                                        </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}