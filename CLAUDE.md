# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Style

Do not add any comments to code. No inline comments, no block comments, no JSDoc.

## Commands

```bash
yarn dev          # Start dev server at localhost:5173
yarn build        # tsc -b && vite build (TypeScript check + bundle)
yarn preview      # Preview production build at localhost:4173
yarn lint         # ESLint check
yarn deploy       # yarn build → gh-pages -d dist → live at lazymak3r.github.io
```

No test suite is configured.

## Architecture

**100% static portfolio site** — no backend, no API, no routing. All data is hardcoded in `src/data/` (typed TypeScript arrays). Contact uses only a `mailto:` link.

**Page layout:** `App.tsx` renders a single page: `Navbar → Hero → About → WorkExperience → Projects → Skills → Contact → Footer`. All sections use anchor-link navigation (`#hero`, `#projects`, etc.).

### Design System

Two-layer token system:
- `src/styles/variables.css` — raw CSS custom properties (`--color-brand-violet`, `--shadow-glow-purple`, etc.) used in component `style={}` props and CSS rules.
- `src/styles/index.css` `@theme {}` block — re-declares the same tokens for Tailwind v4 to generate utility classes (`bg-brand-violet`, `text-brand-cyan`, etc.).

**Tailwind v4 specifics:**
- No `tailwind.config.js` — config lives in `@theme {}` inside `index.css`.
- PostCSS plugin is `@tailwindcss/postcss` (separate from `tailwindcss`), configured in `postcss.config.js`.
- Custom utilities go in `@layer utilities`, base overrides in `@layer base`. Unlayered CSS always beats layered rules regardless of specificity — do not write unlayered CSS that should yield to utilities.

Custom utility classes defined in `index.css`: `.section-container`, `.section-padding`, `.gradient-brand-text`, `.gradient-text`, `.card-gradient-border`, `.rounded-card`, `.rounded-button`.

### Three.js Hero

`Hero.tsx` conditionally renders the canvas (skipped on mobile < 768px and `prefers-reduced-motion`). The canvas is lazy-loaded via `React.lazy`.

Scene hierarchy:
```
HeroScene (Canvas, alpha:true, dpr:[1,2])
  ├─ lights (ambient + directional + 4 point lights)
  ├─ Environment preset="city"   ← required for glass reflections
  ├─ BrandText3D                 ← "LazyMak3R" Text3D with glass material
  └─ CameraRig                   ← mouse parallax via useFrame lerp
```

**`useMouseParallax`** returns a `useRef` (not `useState`) so `useFrame` reads mouse coords every animation frame without React re-renders.

**`CameraRig`** lerps `state.camera.position.x/y` toward `mousePos * 0.35` each frame, then calls `camera.lookAt(0,0,0)`.

**`BrandText3D`** uses `Text3D` + `Center` from `@react-three/drei` with the bundled `helvetiker_bold` font from `three/examples/fonts`. The glass material uses `meshPhysicalMaterial` with `transparent`, `roughness=0`, `clearcoat`, and `envMapIntensity` — **not** `transmission` (transmission is invisible on a transparent canvas with nothing behind it to refract).

`StrictMode` is intentionally absent from `main.tsx` — double-mounting in dev creates two simultaneous WebGL contexts and triggers context loss.

### Framer Motion

- `SectionWrapper.tsx` — HOC wrapping every section except Hero: `whileInView` fade + `y:40→0`, `viewport={{ once: true, amount: 0.15 }}`.
- Ease arrays must be cast: `[0.16, 1, 0.3, 1] as [number, number, number, number]` (Framer Motion v12 TypeScript requirement).

### Build / Deploy

Vite chunks are split manually: `three-vendor`, `motion-vendor`, `react-vendor`. The warning limit is raised to 1500 KB because Three.js is large by design.

GitHub Pages target is the user page (`lazymak3r.github.io`), so `vite.config.ts` sets `base: '/'` (not `/repo-name/`).

React Compiler (`babel-plugin-react-compiler`) is enabled in `vite.config.ts` — avoid manual `useMemo`/`useCallback` unless profiling shows a specific need.