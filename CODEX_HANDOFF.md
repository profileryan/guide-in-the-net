# Codex Handoff — v0.4.0

## Objective

Merge this package into `profileryan/guide-in-the-net` and deploy it through the existing Vercel project `guide-in-the-net`.

This ZIP is a complete project snapshot containing the full opening journey and all five Section 1 artwork screens. It supersedes the earlier Section 1 package.

## Important preservation rules

1. **Preserve the live custom font** at:
   `public/fonts/Header_Font.ttf`

   This package intentionally does not distribute the font file.

2. **Preserve or regenerate `package-lock.json`.**
   The dependency versions have not changed; only the package version is now `0.4.0`.

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
git commit -m "Redesign Section 1 artwork guide pages"
git push
```

A normal file copy is also fine. The `rsync` example simply makes the font-preservation requirement explicit.

## Key changes to review

- `src/components/ArtworkPage.tsx`
  - new editorial artwork structure
  - hero sequence labels
  - pull quote, Why Now and numbered reflection blocks

- `src/content/guideContent.ts`
  - presentation metadata for sequence, palette and pull quotes
  - approved image alt text
  - correct Section 1 artwork order retained

- `src/styles.css`
  - complete editorial artwork visual system
  - per-artwork palettes
  - wide-image plate handling
  - Grace Quek VHS treatment
  - responsive and reduced-motion behaviour

- `public/assets/works/`
  - four new supplied artwork images
  - existing Ho Rui An image retained

- `PROJECT_PROGRESS.md`
  - current project status and future plan

## Screen order to verify

```text
sectionIntro
→ safeEntry
→ history
→ futureYou
→ impactBench
→ graceQuek
→ sliceComplete
```

## Direct routes

```text
?screen=safeEntry
?screen=history
?screen=futureYou
?screen=impactBench
?screen=graceQuek
```

## Build expectation

Vercel framework: Vite
Build command: `npm run build`
Output: `dist`
Environment variables: none
