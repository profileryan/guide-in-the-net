# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.6.1 — polish pass

This package includes:

- the complete opening journey
- the full **You and the Net** section
- the full **Together in the Net** section
- the full **Here in the Net** section
- the latest Section 1, 2 and 3 map images
- final supplied images for **ASIAMAXXING**, **Hexagram Today** and **XO (2026)**
- a handoff into the **Futures Reading Room**

Key polish changes:

- map-note line-break bugs removed
- Section 1 intro title now uses the visitor’s chosen name
- all three section covers are centred
- the obsolete Section 2 completion screen has been removed
- Fyerool Darma’s work is now titled **XO (2026)**

Start with:

- `PROJECT_PROGRESS.md` — current product state, implemented flow and next steps
- `CODEX_HANDOFF.md` — merge and deployment instructions for Codex

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

The app expects the exhibition header font at:

```text
public/fonts/Header_Font.ttf
```

The font is not distributed in this ZIP. Preserve it from the existing Git repository when merging.
