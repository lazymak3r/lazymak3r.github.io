import type { SVGProps } from 'react'

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M8 3l5 5-5 5" />
    </svg>
  )
}