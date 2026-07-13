# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.5.1

This package contains:

- the opening journey
- the full **You and the Net** section
- the full **Together in the Net** section
- supplied Section 2 artwork thumbnails for **BussyTemple** and **Traces**
- a handoff screen teasing **Here in the Net**

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
