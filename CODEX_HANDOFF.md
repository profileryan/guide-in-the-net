# Codex Handoff — v0.6.1

## Objective

Merge this package into `profileryan/guide-in-the-net` and deploy it through the existing Vercel project `guide-in-the-net`.

This is a full project snapshot and supersedes v0.6.0.

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
git commit -m "Polish maps, personalisation and Section 3 artwork"
git push
```

## High-priority changes

### 1. Map note formatting

`MapScreen` now receives `note: string[]`. Do not convert these back to JSX string attributes containing `\\n`.

Verify:

```text
?screen=map
?screen=mapTwo
?screen=mapThree
```

No literal `\\n` should be visible.

### 2. Personalised Section 1 intro

The Section 1 cover remains static. The following intro screen is dynamic:

```text
?screen=sectionIntro
```

It should display the locally stored visitor name followed by **AND THE NET**.

### 3. Cover alignment

All are centred:

```text
?screen=section
?screen=sectionTwoCover
?screen=sectionThreeCover
```

### 4. Removed Section 2 completion screen

The correct flow is:

```text
traces → commons → sectionThreeCover
```

There is no `sectionTwoComplete` route.

### 5. Final map assets

The three supplied files have replaced previous versions:

```text
public/assets/map-step-1.png
public/assets/map-step-2.png
public/assets/map-step-3.png
```

### 6. Section 3 artwork update

The final Section 3 sequence is:

```text
asiaMaxxing → hexagram → xo → sectionThreeComplete
```

The old `xenographer` route and content key have been replaced by `xo`.

New assets:

```text
public/assets/works/asia-maxxing.jpg
public/assets/works/hexagram-today.png
public/assets/works/xo.jpeg
```

## Key files changed

- `src/App.tsx`
- `src/content/guideContent.ts`
- `src/styles.css`
- `public/assets/map-step-1.png`
- `public/assets/map-step-2.png`
- `public/assets/map-step-3.png`
- `public/assets/works/asia-maxxing.jpg`
- `public/assets/works/hexagram-today.png`
- `public/assets/works/xo.jpeg`
- project documentation

## Direct routes

```text
?screen=sectionIntro
?screen=map
?screen=sectionTwoCover
?screen=mapTwo
?screen=commons
?screen=sectionThreeCover
?screen=mapThree
?screen=asiaMaxxing
?screen=hexagram
?screen=xo
?screen=sectionThreeComplete
```

## Build expectation

Vercel framework: Vite
Build command: `npm run build`
Output: `dist`
Environment variables: none
