# Guide in the Net — Project Progress

_Last updated: 13 July 2026_
_Current package: v0.5.1 — Section 2 artwork images integrated_

## 1. Product Purpose

Guide in the Net is a mobile-first digital guide for **Islands in the Net** at Padimai Art & Tech Studio. It translates the printed exhibition guide into a slower, more atmospheric digital journey, with visitor-name personalisation, guided navigation, artwork interpretation, reflection prompts and future participatory features.

The canonical design viewport remains **440 × 956 px**, with responsive behaviour for smaller phones.

## 2. Current Experience Flow

The app currently contains:

1. Loading sequence
2. Exhibition cover
3. Visitor name entry
4. Personalised welcome
5. How to use the space
6. Exhibition map
7. **You and the Net** section cover
8. **You and the Net** section introduction
9. Heman Chong — **Safe Entry (Version 2.0–2.7)**
10. Ho Rui An — **A History of Intelligence in ((South)(East)) Asia**
11. MIT Media Lab ft. Rachel Poonsiriwong — **Future You**
12. MIT Media Lab × Ryan Ho — **ImpactBench × CereaLLM**
13. Grace Quek — **Art in the Age of Human Cloning & AI**
14. **Together in the Net** section cover
15. **Together in the Net** section introduction
16. Updated exhibition map / visitor position
17. BussyTemple — **F4NT4SY_H4RD_DR1VE://ALTAR (2026)**
18. Ryan Ho, Emotional Technologies Lab and Vignesh Sundaresan — **Traces in the Net**
19. **The Commons**
20. Section handoff toward **Here in the Net**

This order is intentional and should be preserved.

## 3. What Changed in v0.5.1

### Section 2 artwork images integrated

This update builds on the full Section 2 implementation and adds the newly supplied artwork thumbnails for:

- **BussyTemple — F4NT4SY_H4RD_DR1VE://ALTAR (2026)**
- **Traces in the Net**

These now replace the temporary editorial placeholder heroes used in the previous package.

The broader Section 2 flow remains:

- a Section 2 arrival screen matching the blue/purple collective-memory mood
- the approved **Together in the Net** section introduction
- the new map step using the supplied Section 2 route image
- two interpretive artwork pages
- a dedicated **The Commons** page for the low-table / reflection / voting area
- a handoff screen toward **Here in the Net**

### Section 1 metadata correction

The credit for **ImpactBench × CereaLLM** has been corrected to:

**MIT Media Lab × Ryan Ho**

### New content structure

`src/content/guideContent.ts` now contains:

- `sectionOneIntro`
- `sectionTwoIntro`
- `sectionOneArtworks`
- `sectionTwoArtworks`
- `commonsContent`

This keeps copy and screen structure more maintainable for later sections.

### Section 2 visual system

The existing editorial artwork template has been extended to support both real artwork images and designed editorial treatments.

For Section 2:

- BussyTemple and Traces now use the supplied artwork thumbnails
- those wide images are styled as editorial image plates rather than being aggressively cropped
- the section uses new **cobalt** and **moss** palette families
- the new Commons page uses a softer editorial/paper treatment rather than the full artwork template

## 4. Direct Test Routes

Append one of these query strings to the deployed URL:

```text
?screen=section
?screen=sectionIntro
?screen=safeEntry
?screen=history
?screen=futureYou
?screen=impactBench
?screen=graceQuek
?screen=sectionTwoCover
?screen=sectionTwoIntro
?screen=mapTwo
?screen=altar
?screen=traces
?screen=commons
?screen=sectionTwoComplete
```

The query parameter updates as the visitor moves through the app, making individual screens easy to review and share.

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
- `src/content/guideContent.ts` — section copy and artwork presentation metadata
- `src/components/ArtworkPage.tsx` — reusable editorial artwork template
- `src/components/CommonsPage.tsx` — dedicated Commons page
- `src/components/AppShell.tsx` — persistent header and navigation
- `src/components/GlitchCanvas.tsx` — animated glitch/noise backgrounds, now with blue tone support
- `src/styles.css` — all visual design and animation
- `public/assets/works/` — supplied artwork thumbnails
- `public/assets/map-step-2.png` — supplied Section 2 map image

## 6. Current Design Principles

Preserve these decisions in future development:

- slow, restrained movement rather than app-like animation
- strong editorial hierarchy
- generous pauses and full-screen transitions
- no gamified progress language
- no accounts required
- visitor data stored locally
- persistent information and settings access
- reduced-motion support
- content separated from page structure where possible
- section-specific colours and atmospheres
- a willingness to use designed placeholders when final artwork images are not yet available

## 7. Known Limitations

- Ho Rui An’s image is still provisional.
- The Commons page still uses an editorial treatment rather than a supplied documentary space image.
- The final exhibition header font is intentionally not bundled in this package. Preserve the existing repository file at `public/fonts/Header_Font.ttf`.
- No external deep links, live submissions, voting backend, analytics or CMS features are included yet.

## 8. Recommended Next Slice

Build **Here in the Net** and then the final downstream support screens.

Recommended next order:

1. Section 3 cover
2. Section 3 introduction
3. Updated map / visitor position
4. Section 3 artworks and interpretive flow
5. Futures Reading Room / Section 5 handoff logic as required
6. Art Shop / utility screens if part of the guide scope
7. Any outbound links or programme overlays

Also recommended soon:

- replace provisional artwork images as they arrive
- decide whether future artwork pages should support audio, video or external links
- confirm whether the Traces experience needs a launch/deep-link button in-guide

## 9. Acceptance Checklist for v0.5.1

Before merging or deploying:

- [ ] Preserve `public/fonts/Header_Font.ttf` from the live repository
- [ ] Preserve or regenerate `package-lock.json`
- [ ] Run `npm install`
- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Test all direct routes above
- [ ] Test Back and Next through both Section 1 and Section 2 in sequence
- [ ] Confirm supplied images load on Vercel
- [ ] Confirm `public/assets/map-step-2.png` loads correctly
- [ ] Test at 440 × 956
- [ ] Test on a shorter phone viewport
- [ ] Test reduced-motion mode
- [ ] Confirm fixed top bar and bottom navigation remain readable over dark and cream sections

## 10. Repository Workflow

Target repository:

`profileryan/guide-in-the-net`

Target hosting project:

`guide-in-the-net` on Vercel

ChatGPT develops and packages reviewed slices. Codex handles Git writes and deployment-oriented repository operations. Vercel should redeploy automatically after the merge to the production branch.
