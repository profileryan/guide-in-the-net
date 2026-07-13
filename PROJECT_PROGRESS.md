# Guide in the Net — Project Progress

_Last updated: 13 July 2026_
_Current package: v0.4.0 — Section 1 editorial artwork redesign_

## 1. Product Purpose

Guide in the Net is a mobile-first digital guide for **Islands in the Net** at Padimai Art & Tech Studio. It translates the printed exhibition guide into a slower, more atmospheric digital journey, with visitor-name personalisation, guided navigation, artwork interpretation, reflection prompts and future participatory features.

The canonical design viewport is **440 × 956 px**, with responsive behaviour for smaller phones.

## 2. Current Experience Flow

The app currently contains:

1. Loading sequence
2. Exhibition cover
3. Visitor name entry
4. Personalised welcome
5. How to use the space
6. Exhibition map
7. **You and the Net** section cover
8. Section introduction
9. Heman Chong — **Safe Entry (Version 2.0–2.7)**
10. Ho Rui An — **A History of Intelligence in ((South)(East)) Asia**
11. MIT Media Lab ft. Rachel Poonsiriwong — **Future You**
12. MIT Media Lab — **ImpactBench × CereaLLM**
13. Grace Quek — **Art in the Age of Human Cloning & AI**
14. Temporary handoff into **Together in the Net**

This order is intentional and should be preserved.

## 3. What Changed in v0.4.0

### Artwork template redesign

The Section 1 artwork pages have been rebuilt as an editorial digital catalogue rather than a standard stacked mobile page.

Each artwork now has:

- an immersive hero or editorial image plate
- a visible Section 1 sequence marker, from 01 / 05 to 05 / 05
- oversized title and artist treatment
- slow image drift
- an editorial opening paragraph with a drop cap
- a highlighted pull quote
- a dark, full-width **Why Now?** chapter
- a full-width, numbered **Pause / Reflect** chapter
- a quiet end marker before the persistent navigation
- artwork-specific colour palettes

The Grace Quek hero includes a restrained VHS scanline/flicker treatment. Reduced-motion mode disables this and all other animated movement.

### Supplied artwork thumbnails added

The following user-supplied images are now included:

| Artwork | App asset |
|---|---|
| Heman Chong — Safe Entry | `public/assets/works/safe-entry.jpg` |
| MIT Media Lab — Future You | `public/assets/works/future-you.jpg` |
| MIT Media Lab — ImpactBench × CereaLLM | `public/assets/works/impactbench-cereallm.jpg` |
| Grace Quek — Art in the Age of Human Cloning & AI | `public/assets/works/grace-quek-cloning-ai.jpg` |

The existing Ho Rui An image remains in use at:

`public/assets/works/history-of-intelligence.jpg`

It is the only Section 1 artwork image still considered provisional.

### Content and flow retained

All approved interpretation, Why Now and Pause / Reflect copy remains intact. The Section 1 name is consistently **You and the Net**.

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
?screen=sliceComplete
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
- `src/content/guideContent.ts` — Section 1 content and artwork presentation metadata
- `src/components/ArtworkPage.tsx` — reusable editorial artwork template
- `src/components/AppShell.tsx` — persistent header and navigation
- `src/styles.css` — all visual design and animation
- `public/assets/works/` — artwork thumbnails

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

## 7. Known Limitations

- Ho Rui An’s image is still provisional.
- The final exhibition header font is intentionally not bundled in this package. Preserve the existing repository file at `public/fonts/Header_Font.ttf`.
- The final screen is a temporary development handoff, not the completed Together in the Net section.
- Future You currently gives physical-installation guidance only; no external deep link has been added.
- No shared submissions, voting, analytics or backend features are included yet.

## 8. Recommended Next Slice

Build **Together in the Net** in this order:

1. Section cover
2. Section introduction
3. Updated exhibition map / visitor position
4. BussyTemple — Living Shrine
5. Traces
6. The Commons
7. Section transition toward Here in the Net

Reuse the new editorial artwork template, but allow Section 2 to have its own blue/purple palette and collective-memory visual language.

## 9. Acceptance Checklist for v0.4.0

Before merging or deploying:

- [ ] Preserve `public/fonts/Header_Font.ttf` from the live repository
- [ ] Preserve or regenerate `package-lock.json`
- [ ] Run `npm install`
- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Test all direct routes above
- [ ] Test Back and Next through the complete Section 1 order
- [ ] Confirm artwork images load on Vercel
- [ ] Test at 440 × 956
- [ ] Test on a shorter phone viewport
- [ ] Test reduced-motion mode
- [ ] Confirm the fixed top bar and bottom navigation remain readable over both dark and cream sections

## 10. Repository Workflow

Target repository:

`profileryan/guide-in-the-net`

Target hosting project:

`guide-in-the-net` on Vercel

ChatGPT develops and packages reviewed slices. Codex handles Git writes and deployment-oriented repository operations. Vercel should redeploy automatically after the merge to the production branch.
