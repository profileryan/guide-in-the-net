# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.6.0

This package now contains:

- the complete opening journey
- the full **You and the Net** section
- the full **Together in the Net** section
- the full **Here in the Net** section
- a handoff into the **Futures Reading Room**

It also corrects the Section 2 map marker and explicitly locks the intended section-title alignment:

- Section 1 cover: centred
- Section 2 cover: left-aligned
- Section 3 cover: centred

Start with:

- `PROJECT_PROGRESS.md` — current product state, architecture, completed flow and next steps
- `CODEX_HANDOFF.md` — merge and deployment instructions for Codex

## Run locally

Use Node.js 18–22.

```bash
npm install
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`.

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
