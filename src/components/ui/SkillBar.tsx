import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import type { Skill } from '../../data/skills'

interface SkillBarProps {
  skill: Skill
  index: number
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
        <span className="text-xs text-text-muted tabular-nums">{skill.level}%</span>
      </div>
      <div
        className="relative h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(248,250,252,0.08)' }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: 'var(--gradient-brand)' }}
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.04,
          }}
        />
      </div>
    </div>
  )
}
