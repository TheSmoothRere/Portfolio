# Portfolio Development Plan

## 1. Project Overview
A modern, developer-focused portfolio website featuring a dark "Obsidian" theme with technical aesthetics. The core unique feature is an animated "dependency graph" or "class diagram" visualization that connects skills to projects using lines that animate upon scrolling.

## 2. Tech Stack
- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (configured with CSS variables)
- **Icons**: @phosphor-icons/react
- **Animation**: Motion (Framer Motion) (for SVG path drawing and scroll animations)

## 3. Visual Identity
- **Background**: Dark "Obsidian" (#0b1221) with a subtle 40px grid overlay.
- **Primary Accent**: "Spring Green" (#00ff9f) for buttons, active states, and connecting lines.
- **Secondary Accent**: Muted slate/gray for inactive nodes and text.
- **Typography**: A mix of clean sans-serif (Inter/Roboto) for body text and Monospace (Fira Code/JetBrains Mono) for headings and code snippets to enhance the "technical" feel.

## 4. Site Structure & Components

### A. Layout
- **`App.tsx`**: Main container handling global layout and scroll context.
- **`GridBackground`**: (Already implemented in CSS) Background wrapper using `--color-obsidian`.
- **`Navbar`**: Fixed, glassmorphism header with navigation links.

### B. Sections
1.  **Hero Section**
    -   Big bold introduction ("Hi, I'm [Name]").
    -   "Start" node of the graph.
    -   Call to Action (CTA) button ("View Work").

2.  **About Section**
    -   Brief bio.
    -   Profile picture (optional, or represented as a "User" node).

3.  **Skills & Experience (The Graph)**
    -   **`SkillNode` Components**: Icons/Text representing technologies (React, TS, Node, etc.).
    -   **`ConnectionLine` Components**: SVG paths connecting nodes.
    -   *Logic*: Skills act as "parent" nodes flowing into projects.

4.  **Projects Section**
    -   **`ProjectCard`**: Displaying screenshot, title, description, and links.
    -   Connected to specific skills via the graph lines (e.g., A line flows from "React" node to "Portfolio Website" project).

5.  **Contact Section**
    -   Simple form or links to GitHub/LinkedIn/Email.
    -   "End" node of the graph.

## 5. Animation Strategy (Framer Motion)
-   **Scroll-Linked Paths**: Use `useScroll` and `useTransform` to animate the `pathLength` of SVG lines connecting sections.
-   **Node Reveal**: Staggered fade-in + scale-up for skill/project nodes as the line "activates" them.
-   **Hover Effects**: Nodes glow "Spring Green" and scale slightly on hover.

## 6. Implementation Steps
1.  **Setup**: Verify `motion` installation and Tailwind configuration (Done).
2.  **Hero Implementation**: Create the landing view.
3.  **Graph Logic**: Develop a system to draw SVG lines between absolute positioned elements (or a canvas-based approach if complexity grows).
    *   *Approach*: Use absolute positioning for nodes and a full-screen SVG overlay for lines.
4.  **Skills & Projects**: Build the data structure (JSON) defining relations (e.g., `{ id: 'react', connectsTo: ['project-1'] }`).
5.  **Responsiveness**: Ensure the graph adapts to mobile (stacking vertically with simpler lines).

## 7. Future Enhancements
-   Interactive graph dragging.
-   Theme toggler (if needed, though Obsidian is primary).
