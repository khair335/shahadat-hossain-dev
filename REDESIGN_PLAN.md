## Shine On Web – Portfolio Redesign Plan

### Goals
- **Professional visual identity**: clean, modern, accessible.
- **Systematic architecture**: consistent design tokens, scalable components.
- **Compelling motion**: tasteful micro‑interactions with Framer Motion.
- **Interactive storytelling**: React Flow skills/experience graph.
- **Performance & SEO**: fast loads, solid Core Web Vitals, rich metadata.

### Information Architecture
- **Home**: Hero, Services snapshot, Featured Projects, Testimonials, Latest Posts, CTA.
- **About**: Bio, Skills matrix, Timeline, Certifications, Download CV.
- **Services**: Offerings, process, FAQs, contact CTA.
- **Portfolio**: Filterable grid, project details modal, case study pages.
- **Blog** (optional): List + post detail.
- **Contact**: Simple form, social links.
- **Admin**: Existing dashboard for content management.

### Tech & Libraries
- **Next.js 15 (App Router)** with React 19.
- **Styling**: Tailwind + shadcn/ui tokens (already present).
- **Motion**: Framer Motion (section transitions, reveals, hover states).
- **Graphs**: React Flow for Skills/Experience map.
- **Data**: TanStack Query (already present), optional MDX for blog.
- **Icons**: lucide-react (already present).

### Design System Improvements
- Tighten color scale and semantic tokens in `globals.css`.
- Define typography scale (display, h1–h6, lead, small) and apply via utilities.
- Standardize spacing, radii, shadows; create utility classes for cards/sections.
- Create reusable patterns: `Section`, `Container`, `PageHeader`, `CTAButton`.

### Motion Guidelines
- Duration: 180–300ms for micro‑interactions; 400–700ms for section reveals.
- Easing: `easeOut`/`anticipate`; reduce motion for prefers‑reduced‑motion.
- Keep staggered entrances under 600ms total; avoid blocking content.

### Page/Section Redesign
- **Hero**: animated headline, subtle background grid/particles, primary CTA.
- **About**: staggered content, skill bars/chips, download CV.
- **Services**: cards with icon morph/tilt on hover.
- **Timeline**: animated steps; accessible keyboard navigation.
- **Portfolio**: masonry/grid with hover preview, modal with carousel.
- **Skills Graph**: React Flow diagram of tech stack, clickable nodes.

### Architecture
- Move page UIs from `src/pages/*` into `src/components/*` and render in `app/*`.
- Keep content models in `src/components/Dashboard/*` (as-is) and surface read-only on public pages.
- Providers: unify to a single toast system; keep `next-themes`, Query, Tooltip.

### Performance & SEO
- Fill `next.config.ts` with `images.remotePatterns` for external hosts.
- Preload key fonts; use `next/font`.
- Optimize images (`next/image`) and add blur placeholders.
- Update metadata with canonical URL and social cards.

### Phased Implementation
1) Infrastructure & Refactor
- Migrate `src/pages/*` UI into `src/components/*`; keep routes in `app/*`.
- Add Framer Motion and React Flow deps; scaffold Skills Graph section.
- Consolidate toast provider; update `next.config.ts` images.

2) Design System Tightening
- Update tokens in `globals.css`; add typography utilities.
- Create `Section`, `Container`, `PageHeader`, `CTAButton` components.

3) Hero & Home
- Redesign Hero with motion and CTA; add featured sections with reveals.

4) About, Services, Timeline
- Apply motion patterns, accessibility, and consistent layouts.

5) Portfolio Enhancements
- Grid hover previews; modal/carousel for details.

6) SEO & Performance
- Update metadata; add font optimization; image hygiene; verify CWV.

7) Polish & QA
- Cross-browser/device run; a11y audit; lighthouse; fix regressions.

### Success Criteria
- Consistent design across pages, polished animations, <2.5s LCP on 4G, valid SEO tags, and clear navigation to contact/CTA.

## NextUI Integration Plan

- Goals: Adopt NextUI components where they provide value (buttons, cards, inputs, navbar), keep shadcn for primitives that are already customized. Ensure dark mode compatibility and Tailwind harmony.

### Steps
1) Install deps
   - `npm i @nextui-org/react framer-motion` (framer-motion already present) and `@nextui-org/theme`
2) Tailwind config
   - Add `nextui()` plugin and content paths for `node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}`
3) Provider
   - Wrap app with `NextUIProvider` inside `src/app/providers.tsx` below `ThemeProvider`.
4) Theming
   - Use `attribute="class"` (already) to sync dark mode; pass `className` to `NextUIProvider` if needed.
5) Try components
   - Replace selective UI: `CTAButton` variant using NextUI `Button`, create a `Card` demo in Skills Map note, and migrate `SiteHeader` to NextUI `Navbar`.
6) Audit styles
   - Verify Tailwind and NextUI tokens don’t conflict; tweak Tailwind colors if necessary.
7) Rollout plan
   - Start with `CTAButton` and `Card`, then header navbar, then forms.

### Backout
- Keep shadcn components in parallel for easy revert; migration is incremental.
