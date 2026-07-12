# Build notes — production slice 01

## Design canvas

The supplied 440 × 956 px mobile wireframes are treated as the canonical canvas. The interface scales down to smaller phones and is centred inside a 440 px frame on larger screens.

## Implemented behaviour

- Slow loading progress before the cover appears
- Procedural green and pink glitch fields rather than a static screenshot
- Subtle floating contour islands
- Personalised visitor greeting
- Local-only browser storage for the visitor name
- Functional information and settings overlays
- Reduced-motion preference
- Scrollable long-form reading screens
- Fixed top controls and bottom navigation
- Animated reveal of the first route on the exhibition map

## Content structure

The initial copy follows the exhibition's opening narrative: technology as part of everyday language, labour, identity and culture; the exhibition as a different kind of conversation; and Southeast Asia as an archipelago of distinct histories and ways of knowing.

The how-to screen includes all six invitations from the printed guide, even though only the first three are visible in the first mobile viewport.

## Asset status

The supplied logos, icons and first map state are integrated. The source font should be copied locally to `public/fonts/Header_Font.ttf`.

The cover's foliage and photographic island textures were not supplied as separate layers, so this slice uses a procedural glitch field and contour forms. These can be replaced later without changing the screen architecture.

## Recommended next slice

1. Build the **You & the Net** section introduction.
2. Create a reusable artwork-story component.
3. Implement the Ho Rui An and Heman Chong artwork journeys.
4. Add progress markers and map-state changes.
5. Replace procedural cover elements with final layered art assets when available.
