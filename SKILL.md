---
name: radius-design
description: Use this skill to generate well-branded interfaces and assets for Radius (the AI real-estate brokerage CRM), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` is the single entry point (tokens + fonts + base + component CSS).
- `tokens/` holds the color, type, radius, and spacing custom properties (1:1 with the Figma variables). Semantic primary is Radius indigo `#5A5FF2` — every primary CTA, light AND dark mode, white text. Never neutral-900 for CTAs. `--mel-gradient` is the Mel logo gradient (`#7B7FF5 → #5A5FF2 → #F08068 → #F0A468`).
- `components/` holds the React primitives (`Button`, `Input`, `Badge`, `Card`, `Table`, `Tabs`, `Dialog`, `Icon`, …), each with a `.d.ts` and `.prompt.md`. Mount them from `window.RadiusUIDesignSystem_c7220b` after loading `_ds_bundle.js`.
- `ui_kits/crm/index.html` is a full Radius CRM agent workspace — the best reference for product layout, density, and Mel treatment.
- `guidelines/` holds foundation specimen cards; `assets/` holds the real logos and the Mel icon (never recolor them).

Brand rules to honor: sentence case everywhere; near-monochrome neutrals + one indigo `#5A5FF2` primary CTA per surface; Mel wears the indigo→coral glow; Lucide line icons only, no emoji; dense professional layouts with obvious selected states; flat fills, no gradients on UI chrome; money/metrics in the mono stack.
