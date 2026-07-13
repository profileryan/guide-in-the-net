# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.4.0

This package contains the complete opening journey and **You and the Net** section, including all five artwork pages in their approved order. The artwork pages use a new editorial digital-catalogue design and include the supplied project thumbnails.

Start with:

- `PROJECT_PROGRESS.md` — full project status, design principles and roadmap
- `CODEX_HANDOFF.md` — repository merge and deployment instructions

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

The app expects the exhibition font at:

```text
public/fonts/Header_Font.ttf
```

The font is not distributed in this ZIP. Preserve it from the existing Git repository when merging.
