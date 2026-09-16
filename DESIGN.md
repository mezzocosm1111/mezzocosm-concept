---
name: Mezzocosm working concept
description: An outspoken architectural product studio with the warmth of a workshop.
colors:
  paper: "#f3f1e9"
  ink: "#22271f"
  brand: "#3333cc"
  brand-ink: "#fff"
  accent: "#fa6551"
  sage: "#a8b7a2"
  sky: "#b8d7e4"
  sand: "#d9c4a4"
  line: "#9ca18f"
  muted: "#555c50"
  earth-brand: "#44614b"
  earth-accent: "#fb6050"
  earth-paper: "#f0eee5"
  earth-sky: "#bfdce3"
  earth-sage: "#adc0a4"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(44px, 5.25vw, 84px)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(36px, 4vw, 62px)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Instrument, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plex, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  square: "0px"
  palette: "2px"
  round: "50%"
  module-roof: "22px 22px 0 0"
  module-roof-mobile: "16px 16px 0 0"
spacing:
  gutter: "clamp(24px, 4vw, 64px)"
  section: "100px"
  section-tablet: "74px"
  section-mobile: "62px"
  control-gap: "8px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "18px 20px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-text:
    backgroundColor: "transparent"
    textColor: "inherit"
    padding: "0 0 7px"
  button-tool:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    width: "40px"
    height: "40px"
  button-system:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 7px"
  button-system-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-module:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "12px 18px"
  button-module-selected:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
  button-palette:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.palette}"
    padding: "5px 7px"
  layer-intelligence:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
    rounded: "{rounded.square}"
    padding: "27px 32px"
  layer-physical:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "27px 32px"
---

# Design System: Mezzocosm working concept

## Overview

**Creative North Star: "An architectural product studio with the warmth of a workshop."**

This is a code-led, provisional website exploration for a pre-prototype micro-farm dwelling. Loud typography, precise construction diagrams, daylight, warm timber, and playful gestures express manufactured coherence alongside human participation. The owner selected the architectural inspiration; no image comp was approved. The headline, font pairing, wordmark treatment, and alternate palette remain proposals.

The existing Mezzocosm name and human-scale premise anchor the work. The implemented star and text wordmark are provisional rather than final Mezzoman artwork or a replacement identity approval. Original editable artwork and the owner's Helvetica Now files are still outstanding. Reuse this document as an accurate record of the working implementation, not as a claim that the house is engineered or available.

The current Dawn campaign uses “The dawn of a new way to live.” beside an uncropped 2:3 portrait of the canopy and celestial alignment, followed later by a 4:5 photograph-style concept image of communal earth-wall work. Both visuals are labeled as AI concept images. The former cave slogan and circular hero sticker have been removed from the markup; this campaign revision does not replace the established palette or font system.

**Key Characteristics:**
- Dense display type with conversational supporting text.
- Flat paper and colored fields with thin technical rules.
- Visible structural parts and schematic interaction.
- Warm natural materials punctuated by blue and coral.
- Explicit distinction between concept communication and demonstrated capability.

Reviewer disposition supplied at handoff: **ship as working live mockup**; no material blockers. Mobile visual verification covered the hero and assembly only, not the full page. Publishing is being prepared separately through the user-created GitHub repository `mezzocosm1111/mezzocosm-concept` and Render; this document does not certify a deployed URL or production readiness.

## Colors

Warm paper and earth materials support an assertive blue identity, with coral, sage, and sky providing playful, purposeful section changes. The frontmatter records the actual CSS values; prefixes identify palette alternatives rather than additional simultaneous accents.

### Primary
- **Original blue (`brand`)**: wordmark, emphasized text, selected module controls, intelligence layer, and prototype invitation.
- **Earth green (`earth-brand`)**: the alternate palette's replacement for the primary brand color.

### Secondary
- **Workshop coral (`accent`)**: invitation button, hero-copy rule, mud headline emphasis, and schematic connection points. The alternate palette uses `earth-accent`.
- **Garden sage (`sage`)**: ownership section and future module illustration; `earth-sage` replaces it in the alternate palette.

### Tertiary
- **Daylight sky (`sky`)**: the assembly stage and module windows; `earth-sky` replaces it in the alternate palette.
- **Timber sand (`sand`)**: elevation plate, physical layer, and base module.

### Neutral
- **Warm paper (`paper`)**: page ground and inverted text; the alternate ground is `earth-paper`.
- **Workshop ink (`ink`)**: principal text and dark mud section.
- **Brand white (`brand-ink`)**: text on the primary colored surfaces.
- **Construction rule (`line`)**: quiet borders and section rules.
- **Muted olive (`muted`)**: secondary explanatory text.

**The Same Layout Rule.** Palette controls replace the corresponding CSS variables without changing composition or typography. The 3D material colors and some SVG materials remain fixed; this is not a recoloring of every object.

## Typography

**Display Font:** Archivo Black, self-hosted as CSS family `Archivo`, with Arial and sans-serif fallbacks. **Body Font:** Instrument Sans, self-hosted as `Instrument`, with Arial and sans-serif fallbacks. **Label/Mono Font:** IBM Plex Mono, self-hosted as `Plex`, with a monospace fallback. Each uses font-display swap; the display face is preloaded.

Dense, closely tracked headings carry the provocation; readable sans-serif paragraphs explain it; small monospaced notes distinguish diagrams, states, and development status. The wordmark currently uses Instrument at weight 650. This is a provisional treatment, not the owner's original Helvetica Now wordmark.

### Hierarchy
- **Display:** frontmatter display role, uppercase in the hero with a 10ch maximum width. At 800px and below it uses clamp(36px, 5.4vw, 44px); at 650px and below it uses clamp(40px, 10.8vw, 64px) with a 12ch maximum width. Line-height remains 1.04. The earth-photo headline uses clamp(38px, 4.3vw, 64px), line-height 1.06, and letter-spacing -0.035em; at 650px and below its size is 46px.
- **Headline:** frontmatter headline role, with section-specific sizes to fit the editorial composition. Keep deliberate line breaks in their section context.
- **Title:** section-console and content subheadings; supporting titles also vary by component.
- **Body:** frontmatter body role, reducing to 16px on mobile. Paragraphs have a default maximum width of 66ch; shorter measures are used beside imagery and in the invitation.
- **Label:** frontmatter mono role; most captions and control annotations use 11px. Labels explain actual interaction and concept status.

## Layout

The page uses broad, full-width editorial bands rather than a card grid. A fluid gutter aligns header, hero, and sections. The Dawn hero uses equal desktop columns with a 5vw gap and 36px top padding: headline and supporting copy on the left, portrait image and caption on the right. The introduction is a vertical flex column with a 38px gap and 32px top padding. The image stays at 2:3 with object-fit contain, centered, and no maximum height, preserving the full celestial alignment. At 800px and below the grid gap becomes 30px and the introduction gap becomes 24px, with 45px bottom padding. At 650px and below the hero becomes one column, with introduction padding of 38px 24px 32px and a 25px gap; the image has 24px side margins and retains its uncropped 2:3 ratio.

The earth section pairs a headline and 4:5 image with the existing story in 1.1fr / 1fr columns, with a 7vw gap (36px at 800px and below). The image uses object-fit cover. At 650px and below the section stacks, with 38px above the story. Manifesto and other two-column sections retain their established content-specific ratios.

Section padding follows the frontmatter's desktop, tablet, and mobile values. Breakpoints occur at 1650px (large displays), 1000px (tablet restructuring), 800px (ownership layers and Dawn campaign adjustments), and 650px (mobile stacking). The final Dawn campaign rules override the older hero-specific sizing at these breakpoints. Mobile keeps the prototype navigation action visible, stacks the introduction and narrative sections, and arranges the six assembly selectors in three columns. Ownership principles stack at the mobile breakpoint.

The assembly scroll section spans 380vh on desktop and 300vh on mobile. Its sticky inner stage occupies the viewport, with minimum heights of 720px, 650px at tablet, and 620px at mobile. Mobile uses 100svh. Reduced motion removes the long scroll section and sticky behavior, using a relative stage of 800px instead. These are current implementation values, not universal templates for new pages.

Responsive code exists for the whole page, but the reported mobile visual verification covers only the hero and assembly. Do not represent it as complete mobile certification.

## Elevation & Depth

The interface uses no CSS box shadows. Depth comes from colored surfaces, thin rules, architectural imagery, and the model's soft directional shadows. The WebGL scene uses an orthographic camera, hemisphere and directional lighting, translucent skins, and a shadow-receiving ground plane. Its timber, soil, foliage, glass, and panel colors are scene materials, not general UI tokens.

**The Material Depth Rule.** Keep UI panels flat; let the architecture and its parts provide spatial depth. Do not infer a floating-card shadow system from the rendered house.

## Shapes

Sections, invitation links, and most controls use square corners. Palette controls have a very small radius; model tools are circles. Dawn campaign images have square corners, and the hero-copy block begins with a 4px coral rule. Future module illustrations round only their upper corners, with the desktop and mobile values recorded in frontmatter. Rules are generally 1px; module outlines use 2px. The house's softened roof corners and tensile sails are architectural forms rather than a mandate to round every interface element.

## Components

### Dawn campaign imagery

The live HTML headline is “The dawn of a new way to live.” Its support copy sits below a coral rule, with a 34ch maximum width (35ch on mobile). The hero uses `assets/hero-dawn.png` at 1024 × 1536 with high fetch priority. Its stacked mono caption reads “Imagining Mezzocosm at dawn.” and “AI concept image / First prototype ahead”; the second line uses muted text.

The earth section keeps “Made of mud. And us.” above `assets/earth-hands.png` at 1122 × 1402, displayed at 4:5 and loaded lazily. Its caption reads “Bring a friend. Get your hands dirty.” and “AI concept image”, with a #70746b rule and #bacaad second line on the existing ink background. These are generated concept illustrations in a photographic style, not photographs of a built prototype. Built-in image-generation prompts are recorded in `assets/dawn-images.prompt.txt`, and the PNG files retain embedded provenance. The former hero sticker and earth poster mark are absent from the current markup.

### Buttons and links

The primary contact link is a broad coral rectangle with an arrow, changing to paper on hover. Text links use a thin underline and an arrow, with brand-colored hover text outside the invitation panel. Navigation links underline on hover. A global focus-visible outline uses the brand color at 3px with 5px offset; the prototype panel uses coral for focus visibility. Disabled buttons use opacity .4 and a not-allowed cursor. Contact actions open prefilled email drafts; they are not order forms or payment controls.

### Palette comparison

Two compact buttons in the dark preview bar switch `original` and `earth`, update aria-pressed, and update the theme-color metadata. A thin paper border marks selection. The alternate's coral swatch is a palette cue, not a literal representation of the alternate primary green.

### Assembly console

Six semantic buttons select assembly progress, with ink/paper selected styling. They are a button group rather than ARIA tabs. A labeled native range input provides a second route and displays a numeric percentage. Rotate and reset use circular icon buttons with accessible names. Manual selection holds until wheel or touch interaction resumes scroll control; reduced motion disables scroll assembly and begins with the completed home. Render work is skipped when the stage is offscreen or the document is hidden.

When WebGL cannot initialize, the render falls back to the concept image; view tools are disabled, while explanatory system controls remain usable. If the module import itself fails, the copy directs visitors to read the sections below and disables model tools, system buttons, and the range input. These are distinct failure paths. The model is explicitly exploratory, not construction documentation.

### Sail states and future modules

Three sail buttons select Away, At home, and Outside, please, update aria-pressed and explanatory copy, and animate both the SVG sail representation and available 3D sails. The default is extended. SVG motion uses 900ms cubic-bezier(.16, 1, .3, 1). The schematic transforms illustrate intended behavior, not engineered geometry.

Future module buttons offer Just home, Add a studio, and More growing room. The selected control uses brand color and white text. The illustration reveals a connector and a second module, updates its label and aria-hidden state, and animates translation and opacity. It is a concept demonstration, not a live product configurator.

### Capability layers

Two adjoining flat bands distinguish intelligence from physical essentials. Each uses a title, paragraph, and vertical mono annotation on desktop. At 800px the annotation disappears; at 650px content stacks. The intelligence band uses brand color; the physical band uses sand. Three ownership principles sit beneath them.

### Disclosure and status

A native details/summary element exposes open design questions in the prototype panel. Captions, model annotations, and the pre-prototype status explain uncertainty beside the relevant visual. Reduced motion globally removes CSS transitions and animations while preserving explicit controls. No text-entry form or generic card library is implemented.

## Do's and Don'ts

### Do:
- **Do** keep the Mezzocosm name, playful tone, and human-scale premise intact.
- **Do** preserve semantic controls, visible keyboard focus, reduced-motion behavior, and readable fallback content.
- **Do** use warm materials and visible construction to make the micro-farm concept tangible.
- **Do** label architectural renders, assembly geometry, and future modules as concept communication.
- **Do** treat palette switching as a comparison across the same page.

### Don't:
- **Don't** treat the headline, replacement typography, star, or alternate palette as approved final identity.
- **Don't** portray the illustrative geometry as product CAD or tested construction.
- **Don't** turn prototype intentions into proven performance, available products, orders, or certifications.
- **Don't** turn local intelligence and durable physical-layer ambitions into a solar-flare protection claim.
- **Don't** claim full mobile verification or public deployment on the basis of this documentation handoff.
