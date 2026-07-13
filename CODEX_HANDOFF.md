# Codex Handoff — v0.5.1

## Objective

Merge this package into `profileryan/guide-in-the-net` and deploy it through the existing Vercel project `guide-in-the-net`.

This ZIP is a complete project snapshot containing the full opening journey, the completed **You and the Net** section, the implemented **Together in the Net** section and the newly supplied BussyTemple / Traces artwork images.

## Important preservation rules

1. **Preserve the live custom font** at:
   `public/fonts/Header_Font.ttf`

   This package intentionally does not distribute the font file.

2. **Preserve or regenerate `package-lock.json`.**

3. Do not commit:
   - `node_modules/`
   - `dist/`
   - `.vercel/`

## Suggested merge procedure

```bash
# From a clean checkout of profileryan/guide-in-the-net
# Preserve the existing font somewhere temporarily if needed.

rsync -av --exclude 'public/fonts/Header_Font.ttf' /path/to/unzipped-package/ ./

npm install
npm run check
npm run build

git add .
git commit -m "Add Section 2 artwork images"
git push
```

A normal file copy is also fine. The `rsync` example simply makes the font-preservation requirement explicit.

## Key changes to review

- `src/App.tsx`
  - extended screen flow through Section 2
  - new map step and navigation sequence
  - Section 2 cover and completion handoff

- `src/content/guideContent.ts`
  - corrected ImpactBench credit
  - added Section 2 intro, artworks and Commons content
  - added supplied image references for BussyTemple and Traces
  - added per-artwork section labels and totals

- `src/components/ArtworkPage.tsx`
  - now supports section-specific labels and totals
  - supports both supplied artwork images and designed hero placeholders

- `src/components/CommonsPage.tsx`
  - new dedicated page for the reflective communal space

- `src/components/GlitchCanvas.tsx`
  - now supports a blue tone for Section 2 arrival

- `src/styles.css`
  - new Section 2 and Commons styling
  - new cobalt and moss palettes
  - editorial plate styling for the supplied BussyTemple and Traces images

- `public/assets/map-step-2.png`
  - supplied Section 2 map image

- `public/assets/works/bussytemple-altar.jpg`
  - supplied BussyTemple image

- `public/assets/works/traces-in-the-net.jpg`
  - supplied Traces image

## Screen order to verify

```text
sectionIntro
→ safeEntry
→ history
→ futureYou
→ impactBench
→ graceQuek
→ sectionTwoCover
→ sectionTwoIntro
→ mapTwo
→ altar
→ traces
→ commons
→ sectionTwoComplete
```

## Direct routes

```text
?screen=graceQuek
?screen=sectionTwoCover
?screen=sectionTwoIntro
?screen=mapTwo
?screen=altar
?screen=traces
?screen=commons
?screen=sectionTwoComplete
```

## Build expectation

Vercel framework: Vite
Build command: `npm run build`
Output: `dist`
Environment variables: none
