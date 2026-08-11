export const brand = {
  base: '#ff5826',
  vivid: '#ff5826',
  soft: '#c2410c',
  faint: '#ffe8e0',
  deep: '#7c2d12',
} as const;

export const neutral = {
  n100: '#f5f5f5',
  n200: '#e5e5e5',
  n300: '#d4d4d4',
  n500: '#737373',
  n700: '#404040',
  n800: '#262626',
  n950: '#0a0a0a',
} as const;

export const brandRgb = {
  base: '255,88,38',
  vivid: '255,88,38',
  soft: '194,65,12',
} as const;

export const ui = {
  award: '#ff9a3c',
  rocketBody: '#f5f5f5',
  bgDeep: '#fafafa',
  textPrimary: '#0a0a0a',
  white: '#ffffff',
} as const;

export const stateColor = {
  crash: '#ff453a',
  crashRgb: '255,69,58',
  win: '#30d158',
  winLight: '#63e6e2',
  winRgb: '48,209,88',
} as const;

export const particle = {
  trail: ['#ffd60a', '#ff453a'] as string[],
  explosion: [
    '#ff453a',
    '#ff9f0a',
    '#ff375f',
    '#ffd60a',
    '#ffffff',
  ] as string[],
  win: ['#30d158', '#64d2ff', '#63e6e2', '#a7f3d0', '#ffffff'] as string[],
} as const;
