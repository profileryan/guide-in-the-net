# Codex Handoff — v0.7.0

## Objective

Merge this package into `profileryan/guide-in-the-net` and deploy it through the existing Vercel project `guide-in-the-net`.

This full project snapshot completes the guide journey through the Futures Reading Room, closing questions and credits.

## Important preservation rules

1. Preserve the live custom font:

   `public/fonts/Header_Font.ttf`

2. Preserve or regenerate `package-lock.json`.

3. Do not commit:

   - `node_modules/`
   - `dist/`
   - `.vercel/`

## Suggested merge procedure

```bash
rsync -av --exclude 'public/fonts/Header_Font.ttf' /path/to/unzipped-package/ ./

npm install
npm run check
npm run build

git add .
git commit -m "Complete Reading Room and closing guide flow"
git push
```

## New final flow

```text
xo
→ readingRoomCover
→ readingRoom
→ closing
→ credits
```

The old `sectionThreeComplete` screen is removed.

## Key files added

```text
src/components/ReadingRoomPage.tsx
src/components/ClosingReflectionPage.tsx
src/components/CreditsPage.tsx
```

## Key files changed

### `src/App.tsx`

- adds the four final screens
- routes XO directly into the Reading Room
- passes the stored visitor name to the closing and credits screens

### `src/content/guideContent.ts`

Adds:

- `readingRoomContent`
- `closingContent`

### `src/components/AppShell.tsx`

- adds `yellow` as a supported shell tone

### `src/components/GlitchCanvas.tsx`

- adds a yellow procedural background tone

### `src/styles.css`

Adds the complete visual system for:

- Reading Room cover
- Reading Room editorial content
- closing reflection fields
- credits screen
- yellow shell navigation / icon behaviour

## Private closing notes

Closing responses are optional and stored locally at:

```text
iitn-guide-closing-reflections
```

Do not replace this with network submission or analytics logic without explicit approval.

## Direct routes to verify

```text
?screen=xo
?screen=readingRoomCover
?screen=readingRoom
?screen=closing
?screen=credits
```

## Required checks

```bash
npm install
npm run check
npm run build
```

Then verify:

- XO advances to Reading Room cover
- Reading Room content scrolls correctly
- each closing text field accepts input
- closing notes persist after navigating Back / Next
- credits page Start Again works
- reduced-motion mode disables new ambient animations

## Build expectation

Vercel framework: Vite
Build command: `npm run build`
Output: `dist`
Environment variables: none
