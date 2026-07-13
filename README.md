# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.7.0 — complete guide journey

This package contains the complete visitor flow:

- opening and personalisation
- **You and the Net**
- **Together in the Net**
- **Here in the Net**
- **Futures Reading Room**
- closing reflection questions
- final credits and restart

The closing questions include optional private text fields. Responses are stored only in the visitor’s browser on that device.

Start with:

- `PROJECT_PROGRESS.md` — complete product state and remaining QA notes
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
