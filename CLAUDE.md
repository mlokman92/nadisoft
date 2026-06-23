# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The import above is load-bearing: this repo runs **Next.js 16.2.2**, whose APIs and
> conventions differ from older Next.js. Read the relevant guide under
> `node_modules/next/dist/docs/` (App Router lives in `01-app/`) before writing or
> changing framework code.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build (run `build` first)
- `npm run lint` — ESLint (flat config, `next/core-web-vitals` + `next/typescript`)

There is no test runner configured; `lint` and a successful `build` are the only checks.

## Architecture

A single-page marketing site (plus a privacy-policy page) for Nadisoft, a Malaysian
software company. Everything lives under `src/app/` using the **App Router**.

- `src/app/layout.tsx` — root layout. Sets `<html lang="ms">` (the site copy is in
  Malay), loads the Geist font via `next/font/google` into the `--font-geist-sans`
  variable, and defines page `metadata`.
- `src/app/page.tsx` — the landing page (header / hero / footer), all in one Server
  Component.
- `src/app/privacy-policy/page.tsx` — the `/privacy-policy` route.
- `src/app/globals.css` — global styles and the design system.
- `public/` — static assets, including `nadisoft-logo.png` and the company SVGs.

These are Server Components by default; add `"use client"` only when a component needs
interactivity. There are no API routes, data fetching, or state management — it is a
static content site.

## Styling

**Tailwind CSS v4**, configured entirely in `src/app/globals.css` (no `tailwind.config`
file). PostCSS uses the `@tailwindcss/postcss` plugin.

The brand palette is defined as CSS custom properties under `:root` and exposed to
Tailwind through the `@theme inline` block. Use these semantic color utilities rather
than hard-coded hex values:

- `ocean` (`#0369a1`), `ocean-light` (`#7dd3fc`), `ocean-dark` (`#0c4a6e`) — brand blues
- `gray` (`#64748b`), `gray-light` (`#f1f5f9`) — text and surfaces
- `background` / `foreground` — page base colors

To add a color, declare it in both `:root` and `@theme inline` in `globals.css`.

## Conventions

- TypeScript is `strict`. Import from `src/` via the `@/*` path alias (e.g.
  `@/app/...`).
- Match the existing Tailwind-utility styling approach; keep page sections as plain
  Server Components.
