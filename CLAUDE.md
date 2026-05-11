# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A multi-page portfolio website for a social media manager (Urvashi Bhojwani). It is a vanilla HTML/CSS/JS project — no framework, no bundler, no build step. Serve via any static file server or open `index.html` directly.

## Commands

- **Run all tests:** `npm test` (runs `vitest run`)
- **Watch mode:** `npm run test:watch`
- **Coverage:** `npm run coverage`
- **Run a single test file:** `npx vitest run tests/unit/scaffold.test.js`
- **Dev server:** `python3 -m http.server 8080` (or any static server)

## Architecture

### Pages

- `index.html` — main page: hero, metrics, case studies grid, creative gallery sections grid, contact form
- `section.html` — detail page for a gallery section (loaded via `?key=xxx` query param)
- `case-study.html` — detail page for a case study (loaded via `?id=xxx` query param)

### JavaScript Files

- `data.js` — shared data constants loaded by all pages as a classic `<script>`. Contains `GALLERY_DATA`, `SECTIONS`, `CASE_STUDIES`, and `isVideoFile()`. No ESM exports (browser-compatible).
- `data.esm.js` — ESM wrapper around `data.js` for vitest imports. Evaluates data.js via `new Function()` and re-exports the constants.
- `script.js` — main page logic: renders case study cards, section cards, metric counter animation, hamburger menu, navbar scroll effect, contact form.
- `section.js` — section detail page logic: reads `?key=` from URL, filters `GALLERY_DATA`, renders media grid with lightbox.

### Data-Driven Rendering

All content is driven by three constants in `data.js`:

- **`GALLERY_DATA`** — array of `{ type, category, src, alt, poster? }`. Every image and video. The `category` field matches a `key` in `SECTIONS`.
- **`SECTIONS`** — array of `{ key, name, folder }`. Maps folder keys to display names. The creative gallery on index.html renders one card per section.
- **`CASE_STUDIES`** — array of `{ id, title, desc, result, image }`. Each renders as a clickable card linking to `case-study.html?id={id}`.

### Image/Video Sizing

Cards use Instagram-style fixed aspect ratios:
- Images: 1:1 square (CSS `aspect-ratio: 1/1`)
- Videos: 4:5 portrait (CSS `aspect-ratio: 4/5`)
- CSS custom properties: `--card-size: 320px`, `--card-video-width: 320px`, `--card-video-height: 400px`

### Navigation Between Pages

- Section cards on index.html link to `section.html?key={sectionKey}`
- Case study cards link to `case-study.html?id={caseStudyId}`
- Detail pages have a "Back to Gallery" / "Back to Case Studies" link
- All pages share the same navbar with links back to index.html sections

## Testing

Tests use **vitest** with **jsdom** environment and **fast-check** for property-based tests.

- `tests/unit/scaffold.test.js` — validates data structure (imports from `data.esm.js`)
- `tests/integration/hero.test.js` — hero section DOM tests (loads index.html via JSDOM)
- `tests/integration/navbar.test.js` — navbar scroll, hamburger, active link tests (self-contained DOM)
- `tests/property/heroZIndex.property.test.js` — hero z-index ordering via CSS parsing
- `tests/property/navActiveLink.property.test.js` — nav link uniqueness invariant

## CSS Design Tokens

All colors, spacing, and typography use CSS custom properties in `:root` in `style.css`. Key tokens: `--color-bg` (#0f172a), `--color-surface` (#1e293b), `--color-accent` (#38bdf8), `--color-text`, `--color-muted`. Mobile breakpoint: `max-width: 767px`.
