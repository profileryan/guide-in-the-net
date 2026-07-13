# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.7.1 — accessibility and navigation polish

This package contains the complete visitor journey plus a polish pass covering:

- the PxPlus IBM BIOS display font for all header typography
- revised How to Use This Space copy
- personalised map headings
- corrected Section 2 artwork order
- accessible text-size controls
- colour-accessibility palette options
- a sliding four-destination section menu opened from the top-left logo
- simplified credits

Start with:

- `PROJECT_PROGRESS.md` — current product state and QA notes
- `CODEX_HANDOFF.md` — merge and deployment instructions
- `DEVELOPMENT_HANDOVER.md` — critical context for future sessions

## Run locally

Use Node.js 18–22.

```bash
npm install
npm run dev
```

## Check and build

```bash
npm run check
npm run build
```

## Important font note

The app expects the supplied **PxPlus IBM BIOS** font at:

```text
public/fonts/Header_Font.ttf
```

The font is intentionally not distributed in this ZIP. Preserve it from the existing Git repository when merging.
