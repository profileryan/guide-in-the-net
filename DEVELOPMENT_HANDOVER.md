# Guide in the Net — Development Handover

_Last updated: 13 July 2026_  
_Latest packaged build: **v0.7.1 — accessibility and navigation polish**_  
_Target repository: `profileryan/guide-in-the-net`_  
_Target Vercel project: `guide-in-the-net`_

---

## 1. What This Project Is

**Guide in the Net** is a mobile-first digital guide for the art and technology exhibition **Islands in the Net**, presented at Padimai Art & Tech Studio in Tanjong Pagar Distripark, Singapore.

It is a digital counterpart to the printed **Guide to Islands in the Net**, extended through:

- visitor-name personalisation
- guided movement through the exhibition
- long-form artwork interpretation
- “Why Now?” contextual framing
- Pause / Reflect prompts
- exhibition maps and visitor-position cues
- locally saved closing reflections
- a final credits and restart experience

The guide should feel like a **slow, atmospheric cultural object**, not a conventional museum website or generic mobile app.

The user is the **designer and curator**, not the developer. They supply art direction, wireframes, images, fonts and exact copy. The engineering role is responsible for translating those decisions into code, testing the result and preparing clean packages for Codex to merge.

---

## 2. Source of Truth and Working Workflow

### Source of truth

Use this order of precedence:

1. The latest deployed / merged code on `profileryan/guide-in-the-net`
2. The latest approved packaged build if it has not yet been merged
3. This handover document
4. The printed guide and supplied wireframes
5. Earlier packages only for archaeology, never as the starting point

The latest complete package at the time of this handover is:

```text
guide-in-the-net-polish-accessibility-v0.7.1.zip
```

After Codex merges v0.7.1, the GitHub `main` branch should become the sole development baseline.

### Collaboration workflow

The ChatGPT web GitHub connector has been unreliable for writes. The agreed workflow is:

1. Develop and validate changes in the working environment.
2. Produce a complete downloadable ZIP.
3. Include updated handoff and project-progress documentation.
4. Give the ZIP to the user.
5. The user asks Codex to merge and push it.
6. Vercel deploys automatically from GitHub.
7. Review the live build and iterate.

Do not make the user shuttle individual code snippets or manually reconstruct files unless absolutely necessary.

---

## 3. Reference Documents and Assets

These are the critical reference materials from the project:

```text
A Guide to Islands in the Net (WIP).pdf
General Public Overview — Islands in the Net.pdf
Guide in the Net Wireframes.zip
Guide in the Net Assets.zip
guide-in-the-net-project-plan.md
```

The original numbered wireframes are images **1–15**, designed at **440 × 956 px**.

Important: those original wireframes primarily establish the opening journey and early section language. Later parts of the app—especially Here in the Net, the Reading Room and closing sequence—were designed from the printed guide and the established visual system rather than from equivalent finished wireframes.

### Canonical artwork and map assets currently used

```text
public/assets/map-step-1.png
public/assets/map-step-2.png
public/assets/map-step-3.png

public/assets/works/safe-entry.jpg
public/assets/works/history-of-intelligence.jpg
public/assets/works/future-you.jpg
public/assets/works/impactbench-cereallm.jpg
public/assets/works/grace-quek-cloning-ai.jpg
public/assets/works/bussytemple-altar.jpg
public/assets/works/traces-in-the-net.jpg
public/assets/works/asia-maxxing.jpg
public/assets/works/hexagram-today.png
public/assets/works/xo.jpeg
```

The **latest supplied map files** must remain in use. Do not revert to earlier map exports.

### Font

The custom exhibition font is expected at:

```text
public/fonts/Header_Font.ttf
```

The font is intentionally not redistributed in development ZIPs. Codex must preserve it from the live repository during merges.

Never share the font file separately.

---

## 4. Current Technical Stack

- Vite
- React 18
- TypeScript
- CSS
- Vercel hosting
- GitHub source control
- no backend
- no environment variables
- `localStorage` for personalisation and optional private notes

Current dependency versions in v0.7.1:

```text
react: 18.3.1
react-dom: 18.3.1
typescript: 5.7.3
vite: 5.4.14
@vitejs/plugin-react: 4.3.4
```

Supported Node range:

```text
>=18 <23
```

Standard validation:

```bash
npm install
npm run check
npm run build
```

Do not run `npm audit fix --force` casually. It may introduce breaking dependency upgrades.

---

## 5. Complete Visitor Flow

The current route order is:

1. `loading`
2. `cover`
3. `name`
4. `welcome`
5. `how`
6. `map`
7. `section`
8. `sectionIntro`
9. `safeEntry`
10. `history`
11. `futureYou`
12. `impactBench`
13. `graceQuek`
14. `sectionTwoCover`
15. `sectionTwoIntro`
16. `mapTwo`
17. `altar`
18. `traces`
19. `commons`
20. `sectionThreeCover`
21. `sectionThreeIntro`
22. `mapThree`
23. `asiaMaxxing`
24. `hexagram`
25. `xo`
26. `readingRoomCover`
27. `readingRoom`
28. `closing`
29. `credits`

Each screen can be opened directly with:

```text
?screen=<route-name>
```

The URL query parameter updates automatically as the visitor moves through the guide. Preserve this because it is extremely useful for review and QA.

---

## 6. Exact Exhibition Structure and Naming

### Section 1

Section cover:

```text
YOU AND THE NET
```

The cover remains static and centred.

The blue long-form introduction is personalised:

```text
[VISITOR NAME] AND THE NET
```

Do not personalise the section cover itself.

Artwork order:

1. **Safe Entry (Version 2.0–2.7)** — Heman Chong
2. **A History of Intelligence in ((South)(East)) Asia** — Ho Rui An
3. **Future You** — MIT Media Lab ft. Rachel Poonsiriwong
4. **ImpactBench × CereaLLM** — MIT Media Lab × Ryan Ho
5. **Art in the Age of Human Cloning & AI** — Grace Quek

Critical credit:

```text
ImpactBench × CereaLLM
BY MIT MEDIA LAB × RYAN HO
```

### Section 2

Section cover:

```text
TOGETHER IN THE NET
```

The section-cover title is centred. Earlier left-aligned experiments were superseded.

Artwork / space order:

1. **The Commons**
2. **F4NT4SY_H4RD_DR1VE://ALTAR (2026)** — BussyTemple
3. **Traces in the Net** — Ryan Ho, Emotional Technologies Lab and Vignesh Sundaresan

The Commons is not presented as a conventional artwork. It is a space to sit, read, talk, listen, disagree, reconsider, vote and leave reflections.

### Section 3

Section cover:

```text
HERE IN THE NET
```

The title is centred.

Artwork order:

1. **ASIAMAXXING** — Weiwei Xu
2. **Hexagram Today** — Weiwei Xu
3. **XO (2026)** — Fyerool Darma

Critical title correction:

```text
XO (2026)
```

Do not restore the earlier title **A Xenographer’s Index** and do not restore the retired `xenographer` route.

### Final space and departure

The end sequence is:

```text
XO
→ Futures Reading Room cover
→ Reading Room
→ Continue?
→ Credits
```

There must be no obsolete “Section 2 complete” or “Section 3 complete” intermediary page.

---

## 7. Map Rules

The map is a recurring orientation device, not just decoration.

Use the latest assets:

```text
map-step-1.png
map-step-2.png
map-step-3.png
```

The CSS pulse must correspond to the active section:

```text
Section 1 marker:
left: 56.03%
top: 78.31%

Section 2 marker:
left: 55.78%
top: 49.31%

Section 3 marker:
left: 11.06%
top: 39.24%
```

The map component uses marker classes:

```text
map-step-one
map-step-two
map-step-three
```

Do not leave the pulse over marker 1 when showing Section 2 or 3.

Map notes must be represented as real separate lines or arrays of strings. Never display literal `\n` text in the interface.

Approved map-note structure:

```text
FOLLOW THE LIGHTS.
STAY IN EACH SECTION AS LONG AS YOU WOULD LIKE.
```

```text
FOLLOW THE LIGHTS INTO THE SPACE.
THIS SECTION OF THE EXHIBITION INVITES YOU TO STAY, TOGETHER.
```

```text
FOLLOW THE DOTTED PATH INTO SECTION 3.
THE FUTURE LOOKS DIFFERENT WHEN IT IS IMAGINED FROM HERE.
```

---

## 8. Visual and Layout Rules

### Canonical viewport

Design against:

```text
440 × 956 px
```

The app must remain responsive on smaller and shorter phones, but the canonical composition should not be casually rearranged.

### Persistent shell

After the cover / name sequence, the guide generally uses:

- Islands in the Net mark at top-left
- information and settings controls at top-right
- fixed Back and Next controls
- scrollable main content beneath the fixed shell
- safe-area spacing for notches and home indicators

Do not allow the fixed controls to obscure the final lines of content.

### Section atmospheres

- Opening: black / green glitch language
- Section 1: pink / dark cover, blue long-form intro
- Section 2: cobalt / purple / collective-memory mood
- Section 3: green and red signal language
- Reading Room: yellow and black
- Editorial artwork bodies: warm paper / cream with artwork-specific accent colours

### Section-cover alignment

All three main section covers are currently centred:

```text
YOU AND THE NET
TOGETHER IN THE NET
HERE IN THE NET
```

Keep explicit alignment classes so later CSS does not accidentally override this.

### Artwork-page template

The reusable artwork template is deliberately editorial. It includes:

1. immersive hero or editorial image plate
2. section label and sequence counter
3. oversized title
4. artist credit
5. lead paragraph / deck
6. long-form interpretation
7. pull-quote interlude
8. dark **Why Now?** section
9. numbered **Pause / Reflect** prompts
10. quiet end marker before persistent navigation

Wide images should usually appear as editorial plates with `object-fit: contain`, rather than being aggressively cropped.

Do not regress the pages into generic cards, accordions or standard museum-app layouts.

---

## 9. Interaction and Animation Rules

The experience should be **beautiful, slow and restrained**.

### Preferred motion

- long crossfades
- gentle reveals
- slow texture movement
- subtle image drift
- staggered paragraph entrances
- map-path / map-image reveal
- quiet route pulse
- occasional restrained glitch behaviour
- no constant visual agitation

### Avoid

- bouncy spring animation
- swipe-carousel language
- gamified rewards
- noisy micro-interactions
- fast app-like transitions
- generic Material / iOS component motion
- animation that competes with reading

### Current animation timings

These are implementation details from v0.7.1 and should be treated as a useful baseline:

```text
Screen entrance:
1.05s cubic-bezier(.22, .75, .2, 1)

Loading screen:
2.7s normal
0.7s reduced-motion

Loader progress:
2.35s

Floating island forms:
10s alternating drift

Cover logo breathing:
7s

Paragraph reveals:
approximately 0.9–0.95s with gentle stagger

Map reveal:
2.1s, beginning after 0.35s

Map pulse:
2.6s repeating, beginning after 1.7s

Artwork image drift:
24s

Scroll cue:
2.5s repeating

Grace Quek VHS flicker:
11s, very restrained

Credits glitch:
9s stepped cycle
```

These durations can be tuned, but the overall pace should remain contemplative.

### Reduced motion

Reduced-motion mode is mandatory.

The current implementation adds a `reduced-motion` class to the root and collapses animation and transition durations to near-zero. It also explicitly disables the Reading Room paragraph animation and credits glitch.

Any new animation must respect this setting.

---

## 10. Personalisation, Privacy and Local State

Current `localStorage` keys:

```text
iitn-guide-name
iitn-guide-reduced-motion
iitn-guide-text-size
iitn-guide-colour-mode
iitn-guide-closing-reflections
```

### Visitor name

- maximum length: 32 characters
- reused in the welcome screen
- reused in the personalised Section 1 intro
- reused in the closing and credits screens
- can be changed from Settings

Fallback name:

```text
FRIEND
```

### Closing reflections

The three optional closing notes are stored only on the device.

Maximum answer length:

```text
600 characters per question
```

The interface must continue to state clearly:

```text
YOUR NOTES ARE SAVED ONLY ON THIS DEVICE.
```

No answer is required. The visitor can continue without typing.

### Shared-device question

Current **Start Again** returns to the opening sequence but does not necessarily clear the stored name or closing notes.

This is an unresolved product decision for shared exhibition devices. Before launch, decide whether Restart should:

- preserve everything
- clear only the name
- clear only closing reflections
- clear all local visitor state

Do not silently change this behaviour without curator approval.

---

## 11. Reading Room and Closing Experience

### Futures Reading Room

The final reading-space sequence should feel like a threshold rather than another artwork page.

Current structure:

- atmospheric Reading Room arrival
- editorial interpretation of the Reading Room and Research Archive
- five archive-browsing prompts
- closing end-mark reading `ARCHIVE / OPEN`

The core prompt language is:

```text
THE ARCHIVE IS UNFINISHED.
SO IS THE FUTURE.
```

### Continue?

The closing screen uses the printed guide’s final text and asks:

1. **What do you want technology to help us become?**
2. **What should it never be allowed to decide for us?**
3. **What will you contribute to the net?**

Each has an optional private textarea.

### Credits

The final screen includes:

```text
THANK YOU, [VISITOR NAME].
KEEP THE NET OPEN.
```

Current presentation credit:

```text
Padimai Art & Tech Studio
Tanjong Pagar Distripark, Singapore
```

Current curatorial / programming / design credit:

```text
Kathleen Ditzig, Ryan Ho, Joshua Comaroff
```

Do not alter credits without explicit approval.

---

## 12. Important Files in the Codebase

```text
src/App.tsx
```

Complete screen flow, query routing, personalisation and Back / Next sequence.

```text
src/content/guideContent.ts
```

Section introductions, artwork metadata, artwork interpretation, Reading Room content and closing content.

```text
src/components/AppShell.tsx
```

Persistent header, navigation and shell colour tones.

```text
src/components/ArtworkPage.tsx
```

Reusable editorial artwork template.

```text
src/components/CommonsPage.tsx
```

The Commons experience.

```text
src/components/ReadingRoomPage.tsx
```

Reading Room interpretation and prompts.

```text
src/components/ClosingReflectionPage.tsx
```

Optional private departure notes.

```text
src/components/CreditsPage.tsx
```

Final thank-you, credits and Start Again.

```text
src/components/GlitchCanvas.tsx
```

Procedural glitch / noise backgrounds and tone variants.

```text
src/styles.css
```

The complete visual and animation system.

---

## 13. Known Limitations and Open Decisions

1. Ho Rui An’s artwork image is still provisional.
2. The Commons currently uses an editorial treatment rather than a documentary room photograph.
3. No CMS exists; content changes are made in TypeScript data.
4. No backend exists for shared submissions, voting or public reflections.
5. No analytics have been added.
6. No external launch link has been added for Future You, Traces or Hexagram.
7. The Reading Room and final sections were not based on finished original wireframes; they deserve a live visual review.
8. The Restart / shared-device data-clearing behaviour remains undecided.
9. Exhibition information in the Info overlay should be rechecked immediately before launch.
10. Accessibility should be tested on real iOS and Android devices, not only browser emulation.

---

## 14. QA Checklist for Every Future Package

Before handing a package to Codex:

```text
[ ] Start from latest Git main or latest unmerged approved ZIP
[ ] Preserve public/fonts/Header_Font.ttf
[ ] Keep current package-lock.json or regenerate it cleanly
[ ] npm install
[ ] npm run check
[ ] npm run build
[ ] Test complete Back / Next journey
[ ] Test direct ?screen= routes
[ ] Test 440 × 956
[ ] Test a shorter viewport
[ ] Test iOS Safari
[ ] Test Android Chrome
[ ] Test reduced-motion mode
[ ] Test Settings and name changes
[ ] Test all three map marker positions
[ ] Check that no literal \n text appears
[ ] Check fixed navigation does not obscure content
[ ] Test closing-note persistence
[ ] Confirm privacy statement is visible
[ ] Confirm Start Again behaviour
[ ] Check all artwork credits and titles exactly
[ ] Update PROJECT_PROGRESS.md
[ ] Update CODEX_HANDOFF.md
[ ] Update CHANGELOG.md
[ ] Update asset-status documentation
```

---

## 15. How to Begin the Next Session

At the start of a new development session:

1. Provide this handover file.
2. Point the assistant to `profileryan/guide-in-the-net`.
3. Confirm whether Codex has already merged v0.7.1.
4. If it has not, upload `guide-in-the-net-polish-accessibility-v0.7.1.zip`.
5. Ask the assistant to inspect the latest code before proposing changes.
6. Keep the user in the role of designer / curator; do not require them to write code.

Suggested opening instruction:

> Continue development of Guide in the Net using the attached handover and the latest code in `profileryan/guide-in-the-net`. First verify that v0.7.1 or later is deployed, then compare the current version against the handover. Preserve the established interaction, animation, personalisation, map and editorial-artwork rules. I am the designer and curator; handle implementation and return tested, Codex-ready packages.

---

## 16. Core Creative Reminder

The guide is not merely a container for wall text.

It should make visitors feel that they are moving through a network of ideas, histories, communities and possible futures. The best implementation choices are those that preserve:

- slowness
- legibility
- atmosphere
- specificity
- room for thought
- respect for the artworks
- the sense that the visitor is personally present inside the exhibition

When uncertain, choose the quieter, more deliberate interaction.


---

## 17. v0.7.1 Addendum

The following decisions supersede earlier notes where they conflict:

- Header typography uses the font family **PxPlus IBM BIOS**, loaded from `public/fonts/Header_Font.ttf`.
- Section 2 order is **The Commons → Altar → Traces**.
- Map headings are personalised with the visitor name.
- The top-left logo opens a sliding menu with Beginning / Restart and the three main exhibition sections.
- Settings include Small / Standard / Large reading text and four colour-accessibility palettes.
- Credits retain only the persistent top-left logo and no longer mention Lekker Architects.
- Ho Rui An’s provisional crop disclaimer is no longer shown to visitors.

Additional localStorage keys:

```text
iitn-guide-text-size
iitn-guide-colour-mode
```
