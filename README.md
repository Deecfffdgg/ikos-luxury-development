# IKOS Luxury Developments

A legendary, hyper-premium architectural portfolio and commissioning website built for **IKOS Luxury Developments**. The website features an elegant dark editorial theme, modern asymmetric layouts, interactive estimation tools, real-time construction telemetry tracking, and dynamic multi-lingual support.

## Key Technologies Used

* **Astro Framework (v4)**: Modern, ultra-performant, content-first static site generation (SSG) with dynamic static path routing.
* **Tailwind CSS**: Custom color-palette implementation comprising an obsidian dark theme (`#121212`), high-contrast warm linen typography (`#F9F6F0`), and metallic bronze accents (`#D4AF37`).
* **Astro ViewTransitions**: Native, fluid transition morphs between detail layers and index pages.
* **Google Translate API integration**: Minimalist custom text dropdown in the header ("EN | FR | DE") backed by official programmatic Google Translate, carefully overrides default Google Translate banners via global CSS injections.
* **Interactive Dark-Mode Map**: An embedded Google Map centered on luxury estate development belts with responsive Tailwind/CSS inversion filters, producing a seamless obsidian finish.
* **Interactive Scope Calculator**: Custom client-side scaling engine evaluating acreage scale, material palettes, and footprint to output precise consult summaries and engineering tiers.
* **Netlify Forms**: Native seamless form capture for elite commission applications.

## How to Run Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or newer) and `npm` installed.

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ikos-luxury-developments
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Build the production application**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Development and Deployment on Netlify

This project is fully optimized for the **Netlify** platform:
* Automated build and deployment hooks.
* High-performance static routing.
* Form capture enabled on form submittal via Netlify forms.
