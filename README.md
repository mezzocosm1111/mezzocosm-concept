# Mezzocosm working website concept

A static website prototype built with semantic HTML, CSS, and JavaScript. The exploratory 3D house uses a locally bundled copy of Three.js 0.170.0. All fonts and imagery are local; there are no analytics, accounts, external requests, or payment flows in this mockup.

## Preview

From this directory: `python -m http.server 4173` and open `http://localhost:4173`.

## Render

Push this directory as the root of a Git repository. In Render, create a **Static Site** connected to that repository. Use `node build.mjs` as the build command and `dist` as the publish directory. Alternatively, use the included `render.yaml` as a Render Blueprint. The build copies only the website and its asset licenses; review materials and internal design notes are excluded.

If this folder lives inside a larger repository, set Render's Root Directory to this folder's path. The production mezzocosm.com domain is not connected by this project. This concept includes `noindex` directives.

## Working interactions

- Original blue-violet (#3333CC) and sage/coral palette comparison.
- Scroll-driven assembly model, explicit system buttons, range control, rotation and view reset.
- Protective / home / outdoor shade-sail diagram.
- Illustrative module expansion.
- Local intelligence, ownership principles, and optional community earth-infill story.
- Investor and prospective-resident email links to the address published on mezzocosm.com; no messages are sent by the page itself.
- Responsive layout, reduced-motion handling, WebGL fallback, semantic controls.

## Status and content

The dwelling is pre-prototype. Rendered architecture, spatial arrangements, motion, and module examples are illustrative. No dimensions, price, delivery date, resource yield, off-grid guarantee, or engineered resilience is asserted. Local AI, privacy, ownership, and low-tech independence are owner-directed design commitments to be developed and tested.

Website type uses Archivo Black and Instrument Sans, with IBM Plex Mono for technical captions. The original Helvetica Now font has not been supplied. The text wordmark and human-scale favicon are provisional website treatments, not final logo artwork.

Hero image generated with the built-in image generator. Exact generation prompt is in `assets/hero.prompt.txt`. Libraries and fonts are listed in `assets/THIRD-PARTY.md` with bundled licenses.
