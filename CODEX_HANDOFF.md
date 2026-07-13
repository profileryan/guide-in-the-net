# Codex Handoff — v0.7.1

## Objective

Merge this complete project snapshot into:

```text
profileryan/guide-in-the-net
```

The Vercel project is:

```text
guide-in-the-net
```

## Preservation rules

1. Preserve the live font file:

   ```text
   public/fonts/Header_Font.ttf
   ```

   Its internal family name is **PxPlus IBM BIOS**. The ZIP intentionally does not distribute the binary font.

2. Use the included `package-lock.json` or regenerate it cleanly.

3. Do not commit `node_modules/`, `dist/` or `.vercel/`.

## Suggested merge

```bash
rsync -av --exclude 'public/fonts/Header_Font.ttf' /path/to/unzipped-package/ ./

npm install
npm run check
npm run build

git add .
git commit -m "Polish guide navigation accessibility and copy"
git push
```

## Important changes

### `src/App.tsx`

- new text-size and colour-accessibility settings
- persisted settings in localStorage
- approved How to Use This Space copy
- personalised headings on all three maps
- Section 2 sequence changed to Commons → Altar → Traces
- section-menu state and destinations

### `src/components/AppShell.tsx`

- top-left logo is now an accessible menu button

### `src/components/SectionMenu.tsx`

- new left-sliding four-destination navigation menu

### `src/components/CreditsPage.tsx`

- removed duplicate logo
- removed Lekker Architects credit line

### `src/content/guideContent.ts`

- removed the visible provisional-crop disclaimer from Ho Rui An’s page

### `src/styles.css`

- uses `PxPlus IBM BIOS` for display headings
- responsive name-placeholder sizing
- text-size presets
- colour-accessibility palettes
- settings control styling
- section-menu animation and layout

## Sequence to verify

```text
mapTwo
→ commons
→ altar
→ traces
→ sectionThreeCover
```

## Direct routes

```text
?screen=how
?screen=map
?screen=history
?screen=mapTwo
?screen=commons
?screen=altar
?screen=traces
?screen=mapThree
?screen=credits
```

## Required checks

```bash
npm install
npm run check
npm run build
```

Then verify:

- the live font is preserved and loads
- map headings include the stored visitor name
- the narrow name-entry placeholder remains fully visible
- the section menu opens from the logo and routes correctly
- text-size and colour settings persist after refresh
- reduced motion disables the menu animation
- the credit screen shows only the top-left logo

Vercel framework: Vite  
Build command: `npm run build`  
Output directory: `dist`  
Environment variables: none
