# Website Re-Design Plan: Shine On Web

This plan outlines the steps and technologies required to transform the current website into a premium, high-end digital experience with 3D animations, professional aesthetics, and a modern layout.

## 1. Design Vision & Aesthetics
- **Core Concept**: Modern, immersive, and high-performance.
- **Color Palette**: 
  - **Primary**: Deep Slate/Indigo (#0f172a) for Dark Mode, Crisp White/Off-White (#f8fafc) for Light Mode.
  - **Accent**: Electric Purple/Cyan gradients for a "tech-forward" feel.
  - **Secondary**: Slate-400 for text, with subtle glassmorphism effects.
- **Typography**: Inter for body text, Outfit or Satoshi for headings.
- **Layout**: Bento-grid style for services/portfolio, full-width immersive Hero section with 3D elements.

## 2. Key Features & Technologies
### 3D Animations
- **Library**: `Three.js`, `@react-three/fiber`, `@react-three/drei`.
- **Implementation**:
  - **Hero Background**: An interactive 3D particle field or a floating 3D abstract shape that reacts to mouse movement.
  - **Scroll Interactions**: 3D objects that rotate or move based on scroll position.
  - **Micro-interactions**: Subtle 3D tilt effects on cards and buttons.

### Layout Re-design
- **Glassmorphism**: Use translucent backgrounds with backdrop-blur for headers, cards, and navigation.
- **Bento Grid**: A modern grid layout for the "Services" and "Portfolio" sections to maximize visual appeal.
- **Sticky Sections**: High-impact sticky scroll sections for storytelling.

### Dark & Light Mode
- **System**: `next-themes` (already present).
- **Default**: Implement a "System Default" with a clean toggle in the navbar.
- **Consistency**: Ensure all 3D colors and gradients adapt seamlessly to the active theme.

## 3. Technology Stack Updates
- **3D Engine**: Three.js + React Three Fiber.
- **Motion**: Framer Motion (for layout transitions and simple reveals).
- **Components**: NextUI (for base components) + Custom Framer/Three components.
- **Icons**: Lucide React + custom animated SVGs.

## 4. Implementation Steps

### Phase 1: Infrastructure & Assets
1. Install 3D dependencies: `npm install three @types/three @react-three/fiber @react-three/drei`.
2. Define the new color palette in `globals.css` using HSL variables.
3. Set up Google Fonts (Outfit/Inter) in `layout.tsx`.

### Phase 2: Core Layout Re-design
1. **SiteHeader**: Update to a floating glassmorphism navbar with a theme toggle.
2. **HeroSection**: 
   - Integrate a `Canvas` for 3D elements.
   - Add a high-impact headline with `Framer Motion` text effects.
3. **Bento Grid**: Rebuild the `ServicesSection` and `PortfolioSection` using a modern grid layout.

### Phase 3: 3D Animation Integration
1. Create a `Scene3D` component for the Hero background.
2. Implement "Floating Objects" in the background that react to the cursor.
3. Add scroll-triggered 3D transformations for section transitions.

### Phase 4: Polish & Refinement
1. Implement micro-animations for all buttons and interactive cards.
2. Ensure full responsiveness (mobile-friendly 3D rendering).
3. Final SEO and Performance audit.

## 5. Success Metrics
- Immersive first impression (WOW factor).
- Seamless theme switching.
- High performance (optimized 3D assets).
- Intuitive navigation and clear CTA paths.

---

**Next Steps**: 
1. User confirms the plan.
2. Begin Phase 1: Install dependencies and set up the design system.
