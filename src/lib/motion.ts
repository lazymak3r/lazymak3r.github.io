import type {Transition} from 'framer-motion';

export const springDefault: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.4,
};

export const springSnappy: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.3,
};

export const springSheet: Transition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.3,
};

export const springMomentum: Transition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.4,
};

export const easeStandard = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function projectMomentum(
  initialVelocity: number,
  decelerationRate = 0.998,
) {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

export function rubberband(
  overshoot: number,
  dimension: number,
  constant = 0.55,
) {
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
