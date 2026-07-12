# Guide in the Net

A mobile-first digital exhibition guide for **Islands in the Net**, presented at Padimai Art & Tech Studio, Tanjong Pagar Distripark.

## Current build: v0.2.0

This build includes:

- loading and cover sequence
- visitor-name personalisation
- exhibition welcome and orientation
- how-to-use-this-space guide
- animated map and Section 1 arrival
- **You in the Net** section introduction
- **A History of Intelligence in ((South)(East)) Asia** by Ho Rui An
- **Safe Entry (Version 2.0–2.7)** by Heman Chong
- reusable artwork, Why Now and Pause / Reflect templates
- information and settings overlays
- reduced-motion support

## Run locally

Use Node.js 18–22.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal, usually `http://localhost:5173`.

## Production check

```bash
npm run check
npm run build
```

Vercel should detect the project as Vite and publish the `dist` directory.

## Direct screen testing

Append one of these query strings:

```text
?screen=section
?screen=sectionIntro
?screen=history
?screen=safeEntry
?screen=sliceComplete
```

## Fonts

The interface expects the exhibition heading font at:

```text
public/fonts/Header_Font.ttf
```

If it is absent, the app falls back to a monospace system font.

## Temporary assets

`public/assets/history-of-intelligence.jpg` is currently cropped from the supplied wireframe. Replace it with the final approved artwork photograph when available.

## Next development slice

Replace the temporary completion screen with:

- Together in the Net section cover
- section introduction
- updated map
- Living Shrine
- Traces
- The Commons
