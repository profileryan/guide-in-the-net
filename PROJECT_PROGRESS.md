# Guide in the Net — Project Progress

_Last updated: 13 July 2026_
_Current package: v0.6.0 — Here in the Net implemented_

## 1. Product Purpose

Guide in the Net is a mobile-first digital guide for **Islands in the Net** at Padimai Art & Tech Studio. It translates the printed exhibition guide into a slow, atmospheric digital journey with visitor-name personalisation, guided navigation, artwork interpretation and reflection prompts.

The canonical design viewport remains **440 × 956 px**, with responsive behaviour for smaller phones.

## 2. Current Experience Flow

The app currently contains:

1. Loading sequence
2. Exhibition cover
3. Visitor name entry
4. Personalised welcome
5. How to use the space
6. Exhibition map
7. **You and the Net** cover and introduction
8. Heman Chong — **Safe Entry (Version 2.0–2.7)**
9. Ho Rui An — **A History of Intelligence in ((South)(East)) Asia**
10. MIT Media Lab ft. Rachel Poonsiriwong — **Future You**
11. MIT Media Lab × Ryan Ho — **ImpactBench × CereaLLM**
12. Grace Quek — **Art in the Age of Human Cloning & AI**
13. **Together in the Net** cover and introduction
14. Section 2 map
15. BussyTemple — **F4NT4SY_H4RD_DR1VE://ALTAR (2026)**
16. Ryan Ho, Emotional Technologies Lab and Vignesh Sundaresan — **Traces in the Net**
17. **The Commons**
18. **Here in the Net** cover and introduction
19. Section 3 map
20. Weiwei Xu — **ASIAMAXXING**
21. Weiwei Xu — **Hexagram Today**
22. Fyerool Darma — **A Xenographer’s Index**
23. Handoff into the **Futures Reading Room**

This order is intentional and should be preserved.

## 3. What Changed in v0.6.0

### Map accuracy corrected

The glowing visitor-position marker is now screen-specific:

- `map-step-one`: Section 1 marker
- `map-step-two`: Section 2 marker
- `map-step-three`: Section 3 marker

The Section 2 map marker has been moved from the **1** marker to the **2** marker. It also uses a slightly larger pale-green glow so it remains visible around the white Section 2 number disc.

### Section-cover alignment locked

The `SectionArrival` component now receives an explicit alignment value, preventing later CSS changes from flattening all covers into one layout.

- **You and the Net**: centred
- **Together in the Net**: left-aligned
- **Here in the Net**: centred

### Here in the Net implemented

Section 3 now includes:

- green/glitch section cover
- red editorial introduction
- map position at Section 3
- **ASIAMAXXING**
- **Hexagram Today**
- **A Xenographer’s Index**
- final handoff toward the Futures Reading Room

The Section 3 copy is stored in the content layer and follows the current exhibition guide.

### Designed artwork placeholders

No artwork images have yet been supplied for the three Section 3 works. Their pages currently use designed editorial heroes tailored to each work:

- alternate-life photobooth treatment for ASIAMAXXING
- broken/unbroken hexagram-line treatment for Hexagram Today
- speculative archive / mask treatment for A Xenographer’s Index

These can be replaced with supplied thumbnails later without altering the text or page sequence.

## 4. Direct Test Routes

Append one of these query strings to the deployed URL:

```text
?screen=section
?screen=sectionIntro
?screen=sectionTwoCover
?screen=sectionTwoIntro
?screen=mapTwo
?screen=altar
?screen=traces
?screen=commons
?screen=sectionThreeCover
?screen=sectionThreeIntro
?screen=mapThree
?screen=asiaMaxxing
?screen=hexagram
?screen=xenographer
?screen=sectionThreeComplete
```

The query parameter updates as the visitor moves through the guide.

## 5. Technical Architecture

- Vite
- React 18
- TypeScript
- CSS
- localStorage for visitor name and reduced-motion preference
- Vercel deployment from GitHub
- no backend or environment variables

Important files:

- `src/App.tsx` — screen flow and navigation
- `src/content/guideContent.ts` — section introductions, artwork copy and presentation metadata
- `src/components/ArtworkPage.tsx` — reusable editorial artwork template
- `src/components/CommonsPage.tsx` — dedicated Commons page
- `src/components/AppShell.tsx` — persistent header, navigation and shell tones
- `src/components/GlitchCanvas.tsx` — green, pink and blue animated glitch fields
- `src/styles.css` — visual design, alignment, marker positions and animation
- `public/assets/map-step-3.png` — Section 3 map base

## 6. Current Design Principles

Preserve these decisions:

- slow, restrained movement rather than app-like animation
- strong editorial hierarchy
- generous pauses and full-screen transitions
- no gamified progress language
- no accounts required
- visitor data stored locally
- persistent information and settings access
- reduced-motion support
- content separated from structure where possible
- section-specific colours and atmospheres
- explicit section-cover alignment rather than one universal layout

## 7. Known Limitations

- Ho Rui An’s artwork image remains provisional.
- No final imagery has yet been supplied for ASIAMAXXING, Hexagram Today or A Xenographer’s Index.
- The Commons still uses an editorial treatment rather than a supplied room photograph.
- The final exhibition font is intentionally not bundled. Preserve `public/fonts/Header_Font.ttf` from the live repository.
- No external links, live submissions, shared voting backend, analytics or CMS features are included yet.

## 8. Recommended Next Slice

Build the remaining support and conclusion experiences:

1. Futures Reading Room
2. Reading / research archive interpretation
3. any Art Shop or utility route required by the guide
4. closing reflection and departure screen
5. restart / reset flow review
6. final content proofing and device testing

Also decide whether the interactive artworks should gain clear launch buttons or external links inside the guide.

## 9. Acceptance Checklist for v0.6.0

Before merging or deploying:

- [ ] Preserve `public/fonts/Header_Font.ttf`
- [ ] Preserve or regenerate `package-lock.json`
- [ ] Run `npm install`
- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Confirm the Section 2 marker glows over **2**, not **1**
- [ ] Confirm Section 1 cover is centred
- [ ] Confirm Section 2 cover is left-aligned
- [ ] Confirm Section 3 cover is centred
- [ ] Test every Section 3 direct route
- [ ] Test Back and Next through all three sections
- [ ] Test at 440 × 956 and on a shorter phone viewport
- [ ] Test reduced-motion mode
- [ ] Confirm top and bottom controls remain legible across black, blue, green, red and cream screens

## 10. Repository Workflow

Target repository:

`profileryan/guide-in-the-net`

Target Vercel project:

`guide-in-the-net`

ChatGPT develops and packages reviewed slices. Codex handles Git writes and repository deployment. Vercel should redeploy automatically after the production branch is updated.
