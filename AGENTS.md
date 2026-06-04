# IKOS Luxury Developments — System Architecture & Developer Guide

Welcome, Agent. This document maps the architectural footprint, directory structures, coding standards, and strategic design decisions engineered for the **IKOS Luxury Developments** portal.

---

## 1. Directory Blueprint

```
/opt/build/repo/
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Global HTML scaffolding, Google Fonts, ViewTransitions, Translators
│   ├── pages/
│   │   ├── [slug].astro     # Dynamic Commission spec sheet generator (SSG)
│   │   ├── index.astro      # Master Landing Page (Hero video, live builds, testimonials, calculator, maps)
│   │   └── success.astro    # Registry confirmation sheet
│   └── lib/
│       └── cms.ts           # Modular simulated-state CMS engine holding project & telemetry records
├── public/
│   └── favicon.svg          # Minimalist gold-serif visual monogram icon
├── astro.config.mjs         # Integrates Tailwind CSS (disable default base injection for granular overrides)
├── tailwind.config.mjs      # Custom theme mappings (obsidian dark, warm linen, polished gold-bronze)
├── package.json             # Core dependency manifest
└── README.md                # General orientation and setup document
```

---

## 2. Core Architectural & Non-Obvious Decisions

### A. Programmatic Multi-Language Overrides
To preserve an uncompromising luxury aesthetic, generic Google Translate dropdown blocks and top-frame banners are entirely suppressed. 
* **Mechanism**: Custom global CSS targeting class rules like `.skiptranslate`, `.goog-te-banner-frame`, and `.goog-te-gadget` enforces absolute visual hiding.
* **Control**: An elegant, native dropdown is rendered in the header ("EN | FR | DE"). Script listeners on these triggers programmatically inject values directly into Google's standard hidden select element (`.goog-te-combo`) and dispatch manual `change` events, initiating seamless localization without design compromises.

### B. High-Fidelity Obsidian Filtered Mapping
Standard bright Google Maps elements destroy dark layouts.
* **Mechanism**: The embedded map iframe is wrapped in a high-performance container and subjected to a combined Tailwind/CSS filter matrix:
  ```css
  filter: invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%);
  ```
* **Result**: An elite, deep charcoal and obsidian map rendering matching the overall color palette, focused on the high-end acreage belts around Springbank and Elbow Valley in Calgary.

### C. Streaming Hero Background with fallback
To satisfy high-quality streaming requirements, a direct high-definition MP4 panning loop from a reliable CDN is loaded inside the Hero. A static, local-fallback Unsplash HD hero image renders instantly to avoid any flicker before video hydration completes.

### D. Single-Source State (SSG Webhook Friendly)
All portfolios, testimonials, and live construction telemetry logs reside in `src/lib/cms.ts`.
* **Dynamic routes (`[slug].astro`)** ingest data from `getStaticPaths()`.
* **Static Generation**: In a production upgrade, `src/lib/cms.ts` can be hooked to fetch remote content from headless CMS APIs (e.g. Contentful, Sanity) using a simple `fetch()` or SDK client. When Netlify build webhooks fire, Astro generates all index files and static paths dynamically, making it fully production-grade and instantly updated.

---

## 3. Aesthetic Conventions

Keep the following visual metrics in mind during subsequent modifications:
* **Backgrounds**: Always use `#121212` (obsidian-neutral) or `#0A0A0A` (obsidian-dark). Avoid pure black `#000000`.
* **Typography**: Pair Cormorant Garamond (refined serif font for display/quotes) with Montserrat (crisp, modern sans font for functional details).
* **Accents**: Use the metallic gold-bronze accent (`#D4AF37`) with absolute restraint. Apply as borders, small labels, micro-dividers, or hover highlights only.

---

## 4. Netlify Integrations

* **Forms**: The inquiry card uses `data-netlify="true"` and custom hidden calculator inputs to automatically submit the client's current estimation scope choices alongside name and contact coordinates directly to Netlify Forms.
* **Transitions**: Utilizing Astro's `<ViewTransitions />` guarantees that transitions between the portfolio indexes and detailed specs morph fluidly, maintaining state and preventing jarring layout shifts.
