import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  )
}
