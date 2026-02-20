# MEPROTFOLIO

High-end dark-mode portfolio built with Next.js App Router, Tailwind CSS, GSAP, Lenis, and Three.js (`@react-three/fiber`, `@react-three/drei`).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Three.js via React Three Fiber + Drei
- `clsx` + `tailwind-merge` for dynamic class composition

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build production:

```bash
npm run build
```

4. Start production server:

```bash
npm run start
```

## Main Files

- `app/page.tsx`: entry page rendering portfolio shell
- `components/PortfolioPage.tsx`: full page layout + GSAP + Lenis wiring
- `components/Navbar.tsx`: top navigation with magnetic CTA
- `components/Hero3D.tsx`: Three.js hero blob with hover interaction + Suspense fallback
- `components/ProjectCard.tsx`: GSAP hover scale + gradient detail reveal
- `components/Pricing.tsx`: glassmorphism pricing cards (highlighted Pro tier)
- `components/MagneticButton.tsx`: reusable magnetic button behavior
- `lib/cn.ts`: `clsx` + `tailwind-merge` helper
- `app/globals.css`: palette/theme variables and atmospheric background

## Notes

- Build and lint have been validated locally:
  - `npm run lint` passes
  - `npm run build` passes
- On this machine, Next.js may log SWC native-binary warnings and fallback to WASM; build still succeeds.
