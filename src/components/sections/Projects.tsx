import { motion } from 'framer-motion'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ProjectCard } from '../ui/ProjectCard'
import { experiences } from '../../data/experience'

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const allProjects = experiences.flatMap(exp =>
  exp.projects.map(p => ({
    name: p.name,
    url: p.url,
    company: exp.company,
    period: exp.period,
    technologies: exp.technologies,
  }))
)

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        <div className="mb-14">
          <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Selected <span className="gradient-brand-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl text-sm">
            Real-world products shipped across fintech, Web3, AI, logistics, fitness, and more.
          </p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0, margin: '0px 0px 150px 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {allProjects.map((project, i) => (
            <ProjectCard key={`${project.company}-${project.name}-${i}`} {...project} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}