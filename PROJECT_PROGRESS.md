# Guide in the Net — Project Progress

_Last updated: 13 July 2026_
_Current package: v0.6.1 — three-section polish pass_

## 1. Product Purpose

Guide in the Net is a mobile-first digital guide for **Islands in the Net** at Padimai Art & Tech Studio. It translates the printed exhibition guide into a slow, atmospheric digital journey with visitor-name personalisation, guided navigation, artwork interpretation and reflection prompts.

The canonical design viewport remains **440 × 956 px**, with responsive behaviour for smaller phones.

## 2. Current Experience Flow

1. Loading sequence
2. Exhibition cover
3. Visitor name entry
4. Personalised welcome
5. How to use the space
6. Section 1 map
7. **You and the Net** cover
8. personalised Section 1 introduction: **[VISITOR NAME] AND THE NET**
9. Heman Chong — **Safe Entry (Version 2.0–2.7)**
10. Ho Rui An — **A History of Intelligence in ((South)(East)) Asia**
11. MIT Media Lab ft. Rachel Poonsiriwong — **Future You**
12. MIT Media Lab × Ryan Ho — **ImpactBench × CereaLLM**
13. Grace Quek — **Art in the Age of Human Cloning & AI**
14. **Together in the Net** cover and introduction
15. Section 2 map
16. BussyTemple — **F4NT4SY_H4RD_DR1VE://ALTAR (2026)**
17. Ryan Ho, Emotional Technologies Lab and Vignesh Sundaresan — **Traces in the Net**
18. **The Commons**
19. **Here in the Net** cover and introduction
20. Section 3 map
21. Weiwei Xu — **ASIAMAXXING**
22. Weiwei Xu — **Hexagram Today**
23. Fyerool Darma — **XO (2026)**
24. Handoff into the **Futures Reading Room**

The Commons now flows directly into the Section 3 cover. There is no Section 2 completion interstitial.

## 3. What Changed in v0.6.1

### Copy and formatting fixes

- Removed visible `\\n` formatting errors from all map instructions.
- Map notes are now passed as arrays of lines rather than escaped strings, preventing this regression elsewhere.

### Dynamic Section 1 introduction

The blue Section 1 introduction now uses the visitor’s locally stored display name:

```text
[VISITOR NAME] AND
THE NET
```

The Section 1 cover remains **YOU AND THE NET**.

### Cover alignment

All three section covers are now explicitly centred:

- You and the Net
- Together in the Net
- Here in the Net

### Flow correction

The obsolete `sectionTwoComplete` screen has been removed. Navigation is now:

```text
Traces → The Commons → Here in the Net cover
```

### Latest maps integrated

The supplied final map images are now used at:

- `public/assets/map-step-1.png`
- `public/assets/map-step-2.png`
- `public/assets/map-step-3.png`

Their active section discs align with the CSS glow positions for markers 1, 2 and 3.

### Section 3 titles and images

- Fyerool Darma’s work has been renamed from **A Xenographer’s Index** to **XO (2026)**.
- New supplied artwork images have been integrated for:
  - ASIAMAXXING
  - Hexagram Today
  - XO (2026)
- The images use the existing editorial-plate treatment rather than destructive full-screen cropping.

## 4. Direct Test Routes

```text
?screen=section
?screen=sectionIntro
?screen=map
?screen=sectionTwoCover
?screen=sectionTwoIntro
?screen=mapTwo
?screen=commons
?screen=sectionThreeCover
?screen=sectionThreeIntro
?screen=mapThree
?screen=asiaMaxxing
?screen=hexagram
?screen=xo
?screen=sectionThreeComplete
```

## 5. Technical Architecture

- Vite
- React 18
- TypeScript
- CSS
- localStorage for visitor name and reduced-motion preference
- Vercel deployment from GitHub
- no backend or environment variables

Important files:

- `src/App.tsx` — screen flow, personalisation and navigation
- `src/content/guideContent.ts` — section introductions, artwork copy and presentation metadata
- `src/components/ArtworkPage.tsx` — reusable editorial artwork template
- `src/components/CommonsPage.tsx` — dedicated Commons page
- `src/components/AppShell.tsx` — persistent header, navigation and shell tones
- `src/styles.css` — visual system, map glow positions and artwork treatments
- `public/assets/map-step-*.png` — final supplied map states
- `public/assets/works/` — supplied artwork images

## 6. Known Limitations

- Ho Rui An’s artwork image remains provisional.
- The Commons uses an editorial treatment rather than a documentary room photograph.
- The final exhibition font is intentionally not bundled. Preserve `public/fonts/Header_Font.ttf` from the live repository.
- No external links, live submissions, shared voting backend, analytics or CMS features are included yet.

## 7. Recommended Next Slice

1. Futures Reading Room
2. Reading / research archive interpretation
3. Art Shop or utility route, if required
4. closing reflection and departure experience
5. restart / reset flow review
6. final device and accessibility QA

## 8. Acceptance Checklist

- [ ] Preserve `public/fonts/Header_Font.ttf`
- [ ] Run `npm install`
- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Confirm no map page visibly prints `\\n`
- [ ] Confirm Section 1 intro uses the stored visitor name
- [ ] Confirm the Section 1 cover still says **YOU AND THE NET**
- [ ] Confirm all three section covers are centred
- [ ] Confirm The Commons advances directly to Section 3
- [ ] Confirm map glows align with markers 1, 2 and 3
- [ ] Confirm ASIAMAXXING, Hexagram Today and XO images load
- [ ] Confirm the direct route is `?screen=xo`
- [ ] Test 440 × 956 and a shorter phone viewport
- [ ] Test reduced-motion mode

## 9. Repository Workflow

Target repository: `profileryan/guide-in-the-net`
Target Vercel project: `guide-in-the-net`

ChatGPT develops and packages reviewed slices. Codex handles Git writes and deployment. Vercel should redeploy automatically after the production branch is updated.
