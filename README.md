<p align="center"><img src="./public/spylt-banner-1.png" alt="Rentiful Platform Preview" width="100%" style="border-radius: 10px;" /></p>

# SPYLT

[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![shadcn](https://img.shields.io/badge/shadcn-4-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

A responsive, animation-rich landing page for SPYLT, a playful protein and caffeine drink brand. The page introduces the product, showcases its flavors and nutrition, highlights benefits, and closes with video testimonials.

## Getting started

You’ll need a recent version of Node.js and a package manager. This repository includes a `bun.lock`; Bun is the simplest option, though npm works too.

```bash
bun install
bun run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). With npm, use `npm install` followed by `npm run dev`.

## Available commands

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server. |
| `bun run build` | Type-check the app and create a production build in `dist/`. |
| `bun run preview` | Serve the production build locally. Run the build first. |
| `bun run lint` | Check the project with ESLint. |
| `bun run format` | Format project files with Prettier. |

Use `npm run <command>` instead if you installed dependencies with npm.

## What’s in the app

- **Hero and loading screen** — Shows a progress screen while key hero media loads, then reveals the landing page. Larger screens use a video background; smaller screens use images.
- **Brand story** — Animated messaging introduces the SPYLT tone and product.
- **Flavor showcase** — A slider presents the drink flavors.
- **Nutrition and benefits** — Highlights nutrition details and product benefits.
- **Testimonials** — Video cards play on hover.
- **Navigation and footer** — Connect the page sections and social links.

The page is assembled in [`src/App.tsx`](src/App.tsx). Its content is split into components under `src/components/`, with product copy and display data in `src/lib/constants.ts`.

## Project layout

```text
src/
  components/       Page sections, navigation, shared UI, and animations
  lib/              Shared content and utilities
  App.tsx           Page composition and loading experience
  index.css         Global styles and theme
public/
  images/           Product, flavor, and interface imagery
  videos/           Hero, flavor, and testimonial videos
  fonts/            Local font assets
```

Static media is served from `public/` and referenced with root-relative paths such as `/images/hero-img.webp`. When replacing an asset, keep its path in sync with the component that uses it. The hero loader expects `/videos/hero-bg.mp4` on desktop and `/images/hero-bg.webp` plus `/images/hero-img.webp` on mobile.

## Notes

This is a front-end showcase; it does not include a backend or purchase flow. The document title, description, social sharing metadata, and sitemap link are configured in [`index.html`](index.html).
