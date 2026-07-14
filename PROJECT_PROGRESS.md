# Guide in the Net — Project Progress

_Last updated: 14 July 2026_  
_Current package: v0.7.5 — navigation and artwork cue polish_

## Current experience

The complete guide journey remains:

1. Opening and visitor-name personalisation
2. **You and the Net**
3. **Together in the Net**
4. **Here in the Net**
5. Futures Reading Room
6. Closing questions
7. Credits / restart

## Changes in v0.7.5

- Added a persistent section-menu control beside the bottom back and next buttons.
- Kept the artwork scroll arrow below the artwork title and artist credit at every viewport size.

### Section 1 artwork order

1. Safe Entry
2. A History of Intelligence in ((South)(East)) Asia
3. Future You
4. ImpactBench × CereaLLM
5. Art in the Age of Human Cloning & AI

### Section 2 order

1. **The Commons**
2. **F4NT4SY_H4RD_DR1VE://ALTAR (2026)**
3. **Traces in the Net**

### Section 3 artwork order

1. ASIAMAXXING
2. Hexagram Today
3. XO (2026)

## Changes in v0.7.4

- Centred section-cover content and made the Futures Reading Room cover consistent with the other section covers.
- Switched artwork titles and section-cover subtitles to a clean sans-serif stack.
- Replaced the artwork scroll prompt with a centred animated arrow.
- Updated the final map heading, simplified the final thank-you message and removed the admission row from exhibition information.
- Added high-priority font and splash-image hints plus guarded image preloading during the loading screen.

## Changes in v0.7.3

- Added a fourth, yellow-toned map screen between the Reading Room cover and the Futures Reading Room.
- Added `public/assets/map-step-4.png` and a matching map marker.
- Simplified every map instruction to **FOLLOW THE LIGHT**.
- Increased the GlitchCanvas refresh rate and refined display, loading and navigation spacing.
- Changed reflection labels to **PAUSE & REFLECT** and artwork progress to a compact `01/05` format.

## Changes in v0.7.2

- Rebalanced oversized display typography and navigation labels for mobile screens.
- Made section-cover content resilient to short viewports.
- Simplified stretched close controls and renamed the menu destination to **Beginning**.

## Changes in v0.7.1

### Typography

The bundled font reference now uses the font’s real family name:

```text
PxPlus IBM BIOS
```

All headings resolve through the shared `--header` CSS variable. Codex must preserve the existing file at `public/fonts/Header_Font.ttf`.

### Copy and responsive polish

- Added: **“This space is yours to inhabit. We invite you to...”**
- Replaced the six How to Use This Space descriptions with the approved concise copy
- Made the name-entry placeholder shrink responsively on narrow screens
- Removed the provisional-image disclaimer from Ho Rui An’s page

### Personalised maps

- Section 1: `STEP INTO THE NET, [NAME].`
- Section 2: `STEP INTO THE COMMON AREA, [NAME].`
- Section 3: `FIND YOURSELF HERE, [NAME].`

Map body copy was updated to the approved wording.

### Section navigation

The top-left exhibition logo is now a button. It opens a left-sliding menu with four destinations:

- Beginning / Restart
- You and the Net
- Together in the Net
- Here in the Net

Jumping sections preserves the visitor name, settings and private closing notes.

### Settings

New locally persisted settings:

```text
iitn-guide-text-size
iitn-guide-colour-mode
```

Text size options:

- Small
- Standard
- Large

Colour-accessibility options:

- Standard palette
- Red / green safe
- Blue / yellow safe
- High contrast

The existing reduced-motion option remains available.

### Credits

- Removed the secondary large logo, leaving the persistent clickable top-left logo
- Removed the Lekker Architects line

## Key files

- `src/App.tsx` — complete flow, settings state, map headings and Section 2 order
- `src/components/AppShell.tsx` — clickable logo/menu trigger
- `src/components/SectionMenu.tsx` — sliding section selector
- `src/components/CreditsPage.tsx` — simplified credits
- `src/content/guideContent.ts` — artwork copy and image metadata
- `src/styles.css` — font, responsive text, accessibility palettes and menu animation

## Direct test routes

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

## QA checklist

- [ ] Preserve `public/fonts/Header_Font.ttf`
- [ ] Run `npm install`
- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Test name placeholder at 320px–360px wide
- [ ] Confirm all headings use PxPlus IBM BIOS
- [ ] Confirm Section 2 flows Map → Commons → Altar → Traces → Section 3
- [ ] Test personalised headings with a long 32-character name
- [ ] Open and close the section menu on multiple screens
- [ ] Test every section-menu destination
- [ ] Test text-size decrease / increase and persistence
- [ ] Test all four colour modes
- [ ] Test reduced motion with the sliding menu
- [ ] Confirm credits contain only one visible exhibition logo
- [ ] Confirm closing notes still persist locally

## Repository workflow

Target repository: `profileryan/guide-in-the-net`  
Target Vercel project: `guide-in-the-net`

ChatGPT prepares validated packages. Codex merges them into GitHub and Vercel deploys from the production branch.
