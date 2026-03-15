export const brand = {
  base: '#a179f1',
  vivid: '#8b5cf6',
  soft: '#c4b5fd',
  faint: '#ede9fe',
  deep: '#5b21b6',
} as const;

export const brandRgb = {
  base: '161,121,241',
  vivid: '139,92,246',
  soft: '196,181,253',
} as const;

export const ui = {
  award: '#ffc53d',
  rocketBody: '#f0f4f8',
  bgDeep: '#0a0a0a',
  textPrimary: '#f8fafc',
  white: '#ffffff',
} as const;

export const stateColor = {
  crash: '#f43f5e',
  crashRgb: '244,63,94',
  win: '#10b981',
  winLight: '#34d399',
  winRgb: '16,185,129',
} as const;

export const particle = {
  trail: ['#fbbf24', '#ef4444'] as string[],
  explosion: [
    '#f43f5e',
    '#f59e0b',
    '#ef4444',
    '#fbbf24',
    '#ffffff',
  ] as string[],
  win: ['#10b981', '#22d3ee', '#34d399', '#a7f3d0', '#ffffff'] as string[],
} as const;
