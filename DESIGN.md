---
name: Cyber-Minimalist Portfolio
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#b9cbbc'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849587'
  outline-variant: '#3a4a3f'
  surface-tint: '#00e38d'
  primary: '#f4fff4'
  on-primary: '#00391f'
  primary-container: '#00ff9f'
  on-primary-container: '#007144'
  inverse-primary: '#006d41'
  secondary: '#c0c6db'
  on-secondary: '#293041'
  secondary-container: '#42495a'
  on-secondary-container: '#b2b8cd'
  tertiary: '#fffbff'
  on-tertiary: '#402d00'
  tertiary-container: '#ffdb93'
  on-tertiary-container: '#7e5d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#55ffa9'
  primary-fixed-dim: '#00e38d'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#005230'
  secondary-fixed: '#dce2f8'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#151b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 60px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-y: 96px
  gutter: 24px
---

## Brand & Style
This design system balances two distinct environments: a high-tech, cybernetic digital experience and a refined, corporate print-ready aesthetic. It is designed for developers and technical creatives who want to project both cutting-edge engineering skills and professional dependability.

The primary style is **Minimalist Cyberpunk**. It utilizes a deep "Obsidian" canvas with hyper-precise neon accents to mimic an active IDE or engineering blueprint. Key characteristics include:
- **Atmospheric Depth:** Subtle grid overlays (40px frequency) and large, soft radial blurs create a digital "room glow."
- **Circuitry Metaphors:** UI elements are connected by thin lines and terminal nodes, suggesting a networked, modular system.
- **Tactile Offsets:** Floating frames and magnetic hover interactions provide a physical sense of layered hardware.
- **Dual-Mode Logic:** While the primary digital experience is dark, the system includes a high-contrast, "paper-white" mode for formal documentation and printing.

## Colors
The palette is built on extreme contrast to ensure the "Spring Green" accent feels electric and functional.

- **Primary (Spring Green):** Used exclusively for interactive states, progress indicators, and terminal-style accents. It represents "active code."
- **Secondary (Obsidian Blue):** The deep, saturated base for the dark UI. It is warmer and deeper than pure black, providing a more premium feel.
- **Tertiary (Amber/Gold):** Reserved strictly for highlighting achievements or "starred" items in professional contexts.
- **Neutral (Slate/Gray):** A comprehensive range of grays used to manage hierarchy. Slate-400 serves as the standard body text in dark mode to reduce eye strain.

**Background Roles:**
- **Surface:** `#0b1221` (Base Canvas)
- **Container:** `#111827` (Card Headers/Deep Fields)
- **Overlay:** `rgba(0, 255, 159, 0.05)` (Soft Ambient Glow)

## Typography
The typography system uses a mix of high-impact sans-serif for content and technical monospaced fonts for navigation and metadata.

- **Display & Headlines:** Use **Hanken Grotesk** for a sharp, contemporary tech feel. Large display titles should use tight letter spacing to appear more "constructed."
- **Body Copy:** **Inter** provides maximum legibility across both dark and light modes. Use "leading-relaxed" for long-form descriptions.
- **Technical Accents:** **JetBrains Mono** is used for "Intro Labels" (e.g., "01. Introduction") and tech tags to reinforce the developer aesthetic.
- **CV Headers:** Use the `label-caps` style for section headers in professional documents to create a rigid, architectural structure.

## Layout & Spacing
The layout follows a "Spine and Node" philosophy.

- **Grid:** Use a 12-column fluid grid for desktop (`max-w-6xl`) and a focused single-column layout for reading-heavy sections (`max-w-4xl`).
- **The Spine:** Vertical timelines and experience sections should be anchored by a 2px left-aligned border (Slate-800) with circular nodes (Spring Green) marking key events.
- **Rhythmic Padding:** Sections are separated by large vertical gaps (96px to 128px) to allow each concept to breathe.
- **Interactive Headers:** Navigation uses a "Blur Header" that transitions from transparent to a frosted Obsidian (`80% opacity`) with a Spring Green bottom hairline upon scrolling.

## Elevation & Depth
Depth is created through **Luminance and Layers** rather than traditional shadows.

- **Tonal Layering:** Cards use a slightly lighter Obsidian tint than the background to appear "raised."
- **Glassmorphism:** Navigation bars and dropdowns use `backdrop-blur-md` with semi-transparent backgrounds to maintain context of the underlying grid.
- **Glow Borders:** Elevation is often signaled by a `1px` border that transitions from dark gray to semi-transparent Spring Green (`opacity-50`) on hover.
- **Structural Nodes:** Small `6px` circular nodes and `1px` lines "wire" components together, creating a sense of a physical motherboard layout.

## Shapes
The shape language is primarily geometric and structured.

- **Standard Radius:** Use **0.5rem (8px)** for skill chips and small nodes to keep them feeling modern but precise.
- **Card Radius:** Use **0.75rem (12px)** for project cards and main containers to provide a distinct silhouette.
- **Sharp Accents:** Use **0px** radius for "Outline Buttons" to emphasize the technical, machine-built aesthetic.
- **Timeline Nodes:** Use **Full (9999px)** for timeline points and status indicators.

## Components

### Buttons
- **Primary (Neon Outline):** No fill, 1px Spring Green border, sharp corners. On hover, apply a `10%` Spring Green background tint and translate any icons upwards/rightwards.
- **Print Pill:** High-contrast Slate-800 background, white text, 12px rounded corners.

### Cards (Project/Schematic)
- **Background:** Dark Obsidian with a solid top-header area.
- **Detail:** A 1px vertical line should extend 32px from the top-left corner, ending in a small dot node. On card hover, this "wire" and the card border should light up in Spring Green.
- **Images:** Apply a grayscale filter by default, transitioning to full color on hover with a subtle emerald overlay (`10%` opacity).

### Input Fields & Tags
- **Tech Tags:** Monospaced font, Slate-800 background (50% opacity), 4px rounded corners.
- **Inputs:** Dark backgrounds with a bottom-only 2px border that expands from the center on focus.

### Navigation
- **Active State:** Navigation links should feature a monospace step number (e.g., `01.`) in Spring Green.
- **Hover State:** A hairline underline should animate from 0% to 100% width on hover.

### Skills Network
- Components should be visually "plugged in" to the layout using horizontal and vertical 2px Slate-800 lines that intersect at component midpoints.