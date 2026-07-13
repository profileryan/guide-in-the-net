# Guide in the Net — Project Progress

_Last updated: 13 July 2026_
_Current package: v0.7.0 — complete guide journey_

## 1. Product Purpose

Guide in the Net is a mobile-first digital guide for **Islands in the Net** at Padimai Art & Tech Studio. It translates the printed exhibition guide into a slow, atmospheric visitor journey with local personalisation, guided navigation, artwork interpretation, reflection prompts and a concluding departure experience.

The canonical design viewport remains **440 × 956 px**, with responsive behaviour for smaller phones.

## 2. Complete Experience Flow

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
24. **Futures Reading Room** arrival
25. Reading Room and Research Archive interpretation
26. personalised **Continue?** closing reflection
27. final credits and restart

## 3. What Changed in v0.7.0

### Futures Reading Room

The temporary handoff after XO has been replaced by a complete final-space sequence:

- a full-screen yellow-and-black Reading Room arrival
- a dedicated editorial interpretation page
- the complete archive text from the printed guide
- five prompts encouraging visitors to browse, follow references, notice absences and contribute missing histories

### Closing reflection

The guide now ends with the printed guide’s **Continue?** text and three departure questions:

1. What do you want technology to help us become?
2. What should it never be allowed to decide for us?
3. What will you contribute to the net?

Each question has an optional private note field. Notes are stored in `localStorage` under:

```text
iitn-guide-closing-reflections
```

They are not uploaded or shared.

### Final credits

A final full-screen credits page now includes:

- personalised thank-you
- exhibition presentation credit
- curatorial / programming / design credit
- a **Start Again** action

### Final navigation correction

The end sequence is now:

```text
XO → Futures Reading Room cover → Reading Room → Continue? → Credits
```

The old `sectionThreeComplete` handoff route has been removed.

## 4. Direct Test Routes

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
?screen=readingRoomCover
?screen=readingRoom
?screen=closing
?screen=credits
```

## 5. Technical Architecture

- Vite
- React 18
- TypeScript
- CSS
- localStorage for visitor name, reduced-motion preference and optional closing notes
- Vercel deployment from GitHub
- no backend or environment variables

Important files:

- `src/App.tsx` — complete screen flow, personalisation and navigation
- `src/content/guideContent.ts` — section, artwork, Reading Room and closing content
- `src/components/ArtworkPage.tsx` — reusable editorial artwork template
- `src/components/CommonsPage.tsx` — Commons page
- `src/components/ReadingRoomPage.tsx` — Reading Room interpretation
- `src/components/ClosingReflectionPage.tsx` — closing questions and private local notes
- `src/components/CreditsPage.tsx` — final credit / restart screen
- `src/components/AppShell.tsx` — persistent shell, navigation and colour tones
- `src/components/GlitchCanvas.tsx` — procedural backgrounds, including the new yellow tone
- `src/styles.css` — complete visual system

## 6. Design Decisions to Preserve

- restrained movement rather than app-like animation
- strong editorial hierarchy
- deliberate section transitions
- persistent information and settings access
- no account requirement
- visitor data stored locally
- reduced-motion support
- no forced response at closing
- clear statement that closing notes stay on the device
- Restart does not send, export or publish notes

## 7. Known Limitations / Optional Later Work

- Ho Rui An’s artwork image remains provisional.
- The Commons uses an editorial treatment rather than a documentary room photograph.
- The final exhibition font is intentionally not bundled. Preserve `public/fonts/Header_Font.ttf` from the live repository.
- No external links, live submissions, shared voting backend, analytics or CMS features are included.
- A future production decision may be needed on whether **Start Again** should also clear the stored name and closing notes on shared devices.

## 8. Final QA Checklist

- [ ] Preserve `public/fonts/Header_Font.ttf`
- [ ] Run `npm install`
- [ ] Run `npm run check`
- [ ] Run `npm run build`
- [ ] Test the complete journey from cover through credits
- [ ] Test Back / Next on the four new final screens
- [ ] Confirm `XO → readingRoomCover` directly
- [ ] Confirm no `sectionThreeComplete` route remains
- [ ] Confirm Reading Room content can scroll fully above the fixed navigation
- [ ] Enter closing notes, navigate away, return and confirm they persist
- [ ] Confirm the closing note privacy statement is visible
- [ ] Confirm Start Again returns to the opening sequence
- [ ] Test at 440 × 956 and a shorter phone viewport
- [ ] Test reduced-motion mode
- [ ] Test iOS Safari and Android Chrome

## 9. Repository Workflow

Target repository: `profileryan/guide-in-the-net`
Target Vercel project: `guide-in-the-net`

ChatGPT develops and packages reviewed builds. Codex handles Git writes and deployment. Vercel should redeploy automatically after the production branch is updated.
