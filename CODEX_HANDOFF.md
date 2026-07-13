# Codex Handoff — v0.6.0

## Objective

Merge this package into `profileryan/guide-in-the-net` and deploy it through the existing Vercel project `guide-in-the-net`.

This ZIP is a complete project snapshot containing the opening journey and all three exhibition sections through **Here in the Net**.

## Important preservation rules

1. Preserve the live custom font at:

   `public/fonts/Header_Font.ttf`

   This package intentionally does not distribute it.

2. Preserve or regenerate `package-lock.json`.

3. Do not commit:

   - `node_modules/`
   - `dist/`
   - `.vercel/`

## Suggested merge procedure

```bash
# From a clean checkout of profileryan/guide-in-the-net
rsync -av --exclude 'public/fonts/Header_Font.ttf' /path/to/unzipped-package/ ./

npm install
npm run check
npm run build

git add .
git commit -m "Add Here in the Net section"
git push
```

## High-priority checks

### Map marker fix

Open:

```text
?screen=mapTwo
```

The glow must be around the **2 / Together in the Net** marker. It must no longer sit on **1 / You and the Net**.

Then open:

```text
?screen=mapThree
```

The glow should sit over **3 / Here in the Net**.

### Cover alignment

- `?screen=section` — centred
- `?screen=sectionTwoCover` — left-aligned
- `?screen=sectionThreeCover` — centred

## Key changes

- `src/App.tsx`
  - adds Section 3 flow and direct routes
  - adds marker identities to each map screen
  - passes explicit cover alignment

- `src/content/guideContent.ts`
  - adds Section 3 introduction
  - adds ASIAMAXXING, Hexagram Today and A Xenographer’s Index
  - adds Section 3 palette and placeholder metadata

- `src/components/AppShell.tsx`
  - supports black, blue, green and red shell tones

- `src/components/ArtworkPage.tsx`
  - supports per-artwork placeholder labels

- `src/styles.css`
  - corrects map marker coordinates
  - locks cover alignment
  - adds green/red Section 3 language
  - adds Section 3 artwork placeholder designs

- `public/assets/map-step-3.png`
  - Section 3 map base; currently reuses the supplied exhibition map while the marker is positioned through CSS

## Screen order to verify

```text
commons
→ sectionTwoComplete
→ sectionThreeCover
→ sectionThreeIntro
→ mapThree
→ asiaMaxxing
→ hexagram
→ xenographer
→ sectionThreeComplete
```

## Direct routes

```text
?screen=mapTwo
?screen=sectionThreeCover
?screen=sectionThreeIntro
?screen=mapThree
?screen=asiaMaxxing
?screen=hexagram
?screen=xenographer
?screen=sectionThreeComplete
```

## Build expectation

Vercel framework: Vite
Build command: `npm run build`
Output: `dist`
Environment variables: none
