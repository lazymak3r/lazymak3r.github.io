import {useRef} from 'react'
import {motion, useInView} from 'framer-motion'

import {SectionWrapper} from '../ui/SectionWrapper'
import {igamingDomains} from '../../data/igamingDomains'

const domains = igamingDomains

const SIZE = 400
const CENTER = SIZE / 2
const MAX_R = 178
const N = domains.length
const GRID_LEVELS = [0.2, 0.4, 0.6, 0.8, 1.0]

function getPoint(i: number, r: number) {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N
  return {
    x: CENTER + r * Math.cos(angle),
    y: CENTER + r * Math.sin(angle),
  }
}

function polygonPoints(scores: number[]) {
  return scores
    .map((score, i) => {
      const p = getPoint(i, (score / 100) * MAX_R)
      return `${p.x},${p.y}`
    })
    .join(' ')
}

function hexagonPoints(level: number) {
  return Array.from({length: N}, (_, i) => {
    const p = getPoint(i, level * MAX_R)
    return `${p.x},${p.y}`
  }).join(' ')
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function IgamingExpertise() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {once: true, amount: 0.25})

  return (
    <SectionWrapper id="igaming" className="bg-bg-surface/30">
      <div className="section-container" ref={ref}>
        <div className="mb-14 text-center">
          <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Domain Expertise
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            iGaming <span className="gradient-brand-text">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <svg
              viewBox="-70 -30 540 460"
              className="w-full max-w-xs md:max-w-sm"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4812e4"/>
                  <stop offset="100%" stopColor="#1aaccc"/>
                </linearGradient>
              </defs>

              {GRID_LEVELS.map(level => (
                <polygon
                  key={level}
                  points={hexagonPoints(level)}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              ))}

              {domains.map((_, i) => {
                const end = getPoint(i, MAX_R)
                return (
                  <line
                    key={i}
                    x1={CENTER}
                    y1={CENTER}
                    x2={end.x}
                    y2={end.y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                )
              })}

              <motion.polygon
                points={polygonPoints(domains.map(d => d.score))}
                fill="rgba(72,18,228,0.2)"
                stroke="url(#radarGrad)"
                strokeWidth="2"
                initial={{scale: 0}}
                animate={isInView ? {scale: 1} : {scale: 0}}
                transition={{duration: 0.9, ease}}
                style={{transformOrigin: `${CENTER}px ${CENTER}px`}}
              />

              {domains.map((d, i) => {
                const r = (d.score / 100) * MAX_R
                const p = getPoint(i, r)
                return (
                  <motion.circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="4"
                    fill={d.color}
                    initial={{opacity: 0, scale: 0}}
                    animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0}}
                    transition={{duration: 0.3, delay: 0.7 + i * 0.06}}
                    style={{transformOrigin: `${p.x}px ${p.y}px`}}
                  />
                )
              })}

              {domains.map((d, i) => {
                const p = getPoint(i, MAX_R + 26)
                const textAnchor =
                  p.x < CENTER - 10 ? 'end' : p.x > CENTER + 10 ? 'start' : 'middle'
                return (
                  <text
                    key={i}
                    x={p.x}
                    y={p.y}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fontSize="10"
                    fill="var(--color-text-secondary)"
                  >
                    {d.label}
                  </text>
                )
              })}
            </svg>
          </div>

          <div className="flex flex-col gap-6">
            {domains.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{opacity: 0, x: 28}}
                animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 28}}
                transition={{duration: 0.35, delay: i * 0.07, ease}}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-text-primary">{d.label}</span>
                  <span className="text-xs tabular-nums font-medium" style={{color: d.color}}>
                                        {d.score}%
                                    </span>
                </div>

                <div className="h-px rounded-full bg-white/5 overflow-hidden mb-2.5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{background: `linear-gradient(90deg, #4812e4, ${d.color})`}}
                    initial={{width: '0%'}}
                    animate={isInView ? {width: `${d.score}%`} : {width: '0%'}}
                    transition={{duration: 0.75, delay: 0.3 + i * 0.07, ease}}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {d.techs.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-xs border"
                      style={{
                        borderColor: 'rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.04)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                                            {tech}
                                        </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}