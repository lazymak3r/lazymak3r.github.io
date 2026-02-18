import { motion } from 'framer-motion'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ExperienceItem } from '../ui/ExperienceItem'
import { experiences } from '../../data/experience'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export function WorkExperience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-surface/30">
      <div className="section-container">
        <div className="mb-16 text-center">
          <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Work <span className="gradient-brand-text">Experience</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm">
            7+ years building products across fintech, fitness, e-commerce, and Web3.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px"
            style={{ background: 'var(--border-glow)' }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} item={exp} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
