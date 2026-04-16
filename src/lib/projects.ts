export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  thumbnail: string;
  gallery: string[];
  pages: { title: string; image: string; description: string }[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  completionDate: string;
  duration: string;
  teamSize: string;
  rating: string;
}

export const projects: Project[] = [
  {
  id: 1,
  title: "Khan Engineering Inventory & Memo Management System",
  description:
    "A full-stack inventory and sales memo system for a construction materials supplier with real-time stock, PDF memos, customer management, payments tracking, and bilingual (Bangla/English) UI.",
  detailedDescription:
    "A comprehensive full-stack business operations platform built for Khan Engineering to manage pipe inventory (e.g., 304/201 grades), customers, sales memos, and transactions. Key workflows include wizard-based memo creation, professional PDF generation, and stock movement automation (deduct on memo create, restore on memo delete) to keep inventory accurate. The app includes dashboard analytics, payment status tracking (Paid/Partial/Unpaid), stock adjustments with logs, role-based access (JWT), and a bilingual notice/reminder UX for billing communication (Bangla/English toggle, scheduled reminders, and countdown timing). Fully responsive UI optimized for fast daily operational use.",
  thumbnail: "/projects/khan-engineering/thumbnail.png", // add your image
  gallery: [
    "/projects/khan-engineering/1.png", // add images
    "/projects/khan-engineering/2.png",
    "/projects/khan-engineering/3.png",
    "/projects/khan-engineering/4.png",
     "/projects/khan-engineering/5.png",
    "/projects/khan-engineering/6.png",
    "/projects/khan-engineering/7.png"

  ],
  pages: [
    {
      title: "Dashboard & Analytics",
      image: "/projects/khan-engineering/1.png",
      description:
        "KPI overview (memos, revenue, customers, dues) with charts and recent activity for quick daily decisions."
    },
    {
      title: "Memo Creation Wizard + PDF",
      image: "/projects/khan-engineering/2.png",
      description:
        "Step-by-step memo flow (grade, customer, items, preview) with professional PDF output and share/download support."
    },
    {
      title: "Stock Management (304/201, Pipe Sizes)",
      image: "/projects/khan-engineering/3.png",
      description:
        "Real-time stock tracking, adjustments, and history logs; stock automatically updates with memo create/delete."
    },
    {
      title: "Transactions & Payment Status",
      image: "/projects/khan-engineering/4.png",
      description:
        "Track Paid/Partial/Unpaid, due calculations, and transaction history for accounts follow-up."
    },
    {
      title: "Bilingual Payment Notice (EN/BN) + Reminders",
      image: "/projects/khan-engineering/5.png",
      description:
        "Full-viewport notice with language toggle, phone/WhatsApp contact, countdown deadline, and reminder re-show scheduling."
    }
  ],
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "i18next",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT"
  ],
  liveUrl: "https://khan-engineering-frontend.vercel.app",   // add if deployed
  githubUrl: "#",  // add if public
  completionDate: "2026",
  duration: "Continuous Development",
  teamSize: "Solo Project",
  rating: "4.9/5"
},
  {
  id: 2,
  title: "Fotogrit Basketball 5×5 — Event Stats & Player Portal (Frontend)",
  description:
    "A modern React (Vite) frontend for Fotogrit’s Basketball 5×5 platform featuring events, live/final box scores & team/player stats, leaderboards, player profiles, media, and coin-based purchase/payment flows with production analytics + monitoring.",
  detailedDescription:
    "A production-ready single-page frontend built for Fotogrit’s Basketball 5×5 ecosystem. The app delivers event browsing and detail experiences, real-time-style game statistics UX (team + roster/player level) with polling/caching-friendly API integration, and multiple scoring/box-score views. It includes player/coach leaderboards, player profile access, media pages, clubs and photographer discovery, and commerce workflows such as cart, orders, payment status, and coin purchases. Authentication and profile management are integrated with Fotogrit’s common account site (sign-in, redirects, and embedded my-profile view). The project is instrumented with GA4 + Mixpanel for product analytics, Sentry for error monitoring, and Web Vitals reporting to support stability and performance in production. Fully responsive UI using Tailwind CSS/DaisyUI and React Router for navigation.",
  thumbnail: "/projects/fotogrit-basketball5x5/thumbnail.png", // add your image
  gallery: [
    "/projects/fotogrit-basketball5x5/1.png", // add images
    "/projects/fotogrit-basketball5x5/2.png",
    "/projects/fotogrit-basketball5x5/3.png",
    "/projects/fotogrit-basketball5x5/4.png",
    "/projects/fotogrit-basketball5x5/5.png"
   
  ],
  pages: [
    {
      title: "Events (List + Detail)",
      image: "/projects/fotogrit-basketball5x5/1.png",
      description:
        "Browse basketball events and open detailed event pages with responsive layouts and smooth navigation."
    },
    {
      title: "Box Score / Game Stats (Team + Player)",
      image: "/projects/fotogrit-basketball5x5/2.png",
      description:
        "Score detail views with team and roster/player statistics; supports live-style updates via polling and cache-aware API patterns."
    },
    {
      title: "Leaderboards (Players + Coaches)",
      image: "/projects/fotogrit-basketball5x5/3.png",
      description:
        "Rankings and performance views for players and coaches to drive competition and engagement."
    },
    {
      title: "Player Portal + My Profile Integration",
      image: "/projects/fotogrit-basketball5x5/4.png",
      description:
        "Player area with authenticated access and my-profile embedding/redirect integration with Fotogrit’s common account site."
    },
    {
      title: "Coins, Cart, Orders & Payment Status",
      image: "/projects/fotogrit-basketball5x5/5.png",
      description:
        "Monetization flows including buy coins, cart/checkout, order detail, and payment status handling."
    }
  ],
  tags: [
    "React",
    "Vite",
    "JavaScript",
    "React Router",
    "Tailwind CSS",
    "DaisyUI",
    "Axios",
    "Sentry",
    "GA4",
    "Mixpanel",
    "Firebase",
    "reCAPTCHA"
  ],
  liveUrl: "#", // add if deployed
  githubUrl: "#", // add if public
  completionDate: "2026",
  duration: "Continuous Development",
  teamSize: "Frontend (Solo/Small Team)", // adjust
  rating: "5/5"
},
  {
  id: 3,
  title: "Fotogrit Scoring App (Live Sports Scoring & Game Management)",
  description:
    "A React-based live scoring and game-operations app for managing events, rosters, substitutions, real-time game actions, and detailed game logs—plus streaming overlay settings for broadcast-style scoreboards.",
  detailedDescription:
    "Fotogrit Scoring App v2 is a production-style web application built to support end-to-end live game operations. Core workflows include secure authentication with protected routes, event browsing and selection, player/roster management, starter & substitution management, and a dedicated real-time control page for tracking game actions (e.g., assists, rebounds, fouls, turnovers) alongside timing utilities (game clock/shot clock) and confirmation/modals to prevent operator mistakes. The platform also provides post-game visibility with structured game logs and reporting views such as box score, statistics, and minute logs. A settings area enables configuration for streaming overlays (scoreboard, game info, visibility/calculation rules) so on-screen graphics remain aligned with live data. Built with a responsive UI and state-driven architecture optimized for fast, reliable operation during live games.",
  thumbnail: "/projects/fotogrit-scoring-v2/thumbnail.png", // add your image
  gallery: [
    "/projects/fotogrit-scoring-v2/1.png", // add images
    "/projects/fotogrit-scoring-v2/2.png",
    "/projects/fotogrit-scoring-v2/3.png",
    "/projects/fotogrit-scoring-v2/4.png",
    "/projects/fotogrit-scoring-v2/5.png",
    "/projects/fotogrit-scoring-v2/6.png"
  ],
  pages: [
    {
      title: "Home (Events) + Search/Filters",
      image: "/projects/fotogrit-scoring-v2/1.png",
      description:
        "Browse events with quick search and date-based navigation for selecting the correct game fast."
    },
    {
      title: "Players & Roster Management",
      image: "/projects/fotogrit-scoring-v2/2.png",
      description:
        "Manage players per event, selection helpers, and roster workflows used before and during the game."
    },
    {
      title: "Starter & Substitution Management",
      image: "/projects/fotogrit-scoring-v2/3.png",
      description:
        "Set starters and handle substitutions smoothly to keep lineups accurate throughout the match."
    },
    {
      title: "Live Control Page (Scoring + Timers)",
      image: "/projects/fotogrit-scoring-v2/4.png",
      description:
        "Real-time scoring console for game actions (assists, rebounds, fouls, turnovers, etc.) with clock tools and safety confirmations."
    },
    {
      title: "Game Logs & Reports (Box Score / Stats / Minute Logs)",
      image: "/projects/fotogrit-scoring-v2/5.png",
      description:
        "Post-game views for auditing play-by-play logs, box score summaries, and statistical breakdowns."
    },
    {
      title: "Settings (Streaming Overlays + Visibility/Rules)",
      image: "/projects/fotogrit-scoring-v2/6.png",
      description:
        "Configure scoreboard and overlay modules (game info, performance stats, visibility and calculation rules)."
    }
  ],
  tags: [
    "React",
    "JavaScript",
    "Redux Toolkit",
    "React Router",
    "React Query",
    "Axios",
    "Tailwind CSS",
    "JWT",
    "React Hook Form"
  ],
  liveUrl: "#", // add if deployed
  githubUrl: "#", // add if public
  completionDate: "2026",
  duration: "Project-based",
  teamSize: "Solo / Team", // update
  rating: "—"
},
 {
  "id": 3,
  "title": "MobileInfoHub — Device Specs, Comparisons & News Platform",
  "description": "A Next.js web platform for browsing mobile device specifications, comparing phones, discovering top devices, and reading tech news/blogs with SEO optimization, ads placements, and theme support.",
  "detailedDescription": "MobileInfoHub is a content-rich Next.js application focused on mobile device discovery and comparison. It includes device listing and detail pages, brand-wise browsing, search and phone-finder UX, comparison modules, and sections like Latest Devices, Upcoming Devices, Top Devices, and Top Favorites. The site uses SSR for fast first load and SEO (Next SEO + structured data), integrates advertisement placements (top banner, sidebar, on-load popup), supports dark mode via a ThemeProvider, and includes authentication flows (login/register modal) with client state management (Redux) and server data fetching utilities. Built for performance, responsiveness, and daily content updates (news + blogs).",
  "thumbnail": "/projects/mobileinfohub/thumbnail.png",
  "gallery": [
    "/projects/mobileinfohub/1.png",
    "/projects/mobileinfohub/2.png",
    "/projects/mobileinfohub/3.png",
    "/projects/mobileinfohub/4.png",
    "/projects/mobileinfohub/5.png",
    "/projects/mobileinfohub/6.png"
  ],
  "pages": [
    {
      "title": "Home (Latest + Upcoming Devices)",
      "image": "/projects/mobileinfohub/1.png",
      "description": "SSR homepage showing Latest Devices, Upcoming Devices, budget categories, and content sections (news/blog) with responsive layout."
    },
    {
      "title": "Device Details Page",
      "image": "/projects/mobileinfohub/2.png",
      "description": "Full device specification view with images, key specs, and structured content optimized for SEO."
    },
    {
      "title": "Brand-wise Browsing",
      "image": "/projects/mobileinfohub/3.png",
      "description": "Browse phones by brand with filtering and quick navigation for faster discovery."
    },
    {
      "title": "Compare Phones",
      "image": "/projects/mobileinfohub/4.png",
      "description": "Side-by-side comparison experience to evaluate key differences between devices."
    },
    {
      "title": "Advertisements System",
      "image": "/projects/mobileinfohub/5.png",
      "description": "Multiple ad placements including top banner, sidebar blocks, and on-load popup with booking flow support."
    },
    {
      "title": "Dark Mode + Auth Modal",
      "image": "/projects/mobileinfohub/6.png",
      "description": "Theme toggle (light/dark) with authentication modal (login/register) integrated into the navbar UX."
    }
  ],
  "tags": [
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Query",
    "Firebase",
    "Next SEO",
    "SSR",
    "Google Ads"
  ],
  "liveUrl": "#",
  "githubUrl": "#",
  "completionDate": "2026",
  "duration": "Ongoing",
  "teamSize": "Solo Project",
  "rating": "5/5"
},
{
  "id": 5,
  "title": "C-W Restaurant Table Booking Widget (Multi-Venue + Stripe)",
  "description": "A production-ready restaurant/pub reservation widget supporting multiple venues with availability search, area selection, booking creation, booking management (modify/edit/cancel), promotions, and Stripe-powered payment/pre-order flows.",
  "detailedDescription": "A multi-venue booking frontend built to power table reservations for three venues (The Tap & Run, The Griffin Inn, The Long Hop). The booking journey includes venue entry pages, area selection, date picking and availability search, time-slot selection, guest details capture, and a confirmation step that can complete a booking via API—including a Stripe token flow for payment/pre-order scenarios. Beyond new bookings, the app supports full booking lifecycle management: booking reference lookup, booking details retrieval, modify/edit/reschedule steps, cancellation flows, resend confirmation, and 'lost booking' recovery screens. The project includes centralized environment-aware API routing (development proxy vs production serverless endpoints), JWT authentication handling, promotion fetching per venue, and a responsive UI built with reusable components (custom inputs, date picker views, chips/indicators, modals, toasts).",
  "thumbnail": "/projects/cw-booking-widget/thumbnail.png",
  "gallery": [
    "/projects/cw-booking-widget/1.png",
    "/projects/cw-booking-widget/2.png",
    "/projects/cw-booking-widget/3.png",
    "/projects/cw-booking-widget/4.png",
    "/projects/cw-booking-widget/5.png",
    "/projects/cw-booking-widget/6.png",
    "/projects/cw-booking-widget/7.png"
  ],
  "pages": [
    {
      "title": "Venue Entry (Tap & Run / Griffin / Long Hop)",
      "image": "/projects/cw-booking-widget/1.png",
      "description": "Dedicated venue routes and headers with shared booking experience across multiple restaurants."
    },
    {
      "title": "Area Selection + Date & Availability Search",
      "image": "/projects/cw-booking-widget/2.png",
      "description": "Choose seating area, pick a date, and fetch real-time availability to start the booking flow."
    },
    {
      "title": "Time Slot Selector + Guest Details",
      "image": "/projects/cw-booking-widget/3.png",
      "description": "Select an available time slot and enter booking details (party size and customer info) with validation."
    },
    {
      "title": "Confirm Booking + Stripe Payment/Pre-Order",
      "image": "/projects/cw-booking-widget/4.png",
      "description": "Finalize booking, optionally collect payment via Stripe token flow, and handle success/cancel outcomes."
    },
    {
      "title": "Manage Booking (Lookup / Modify / Edit / Cancel / Resend)",
      "image": "/projects/cw-booking-widget/5.png",
      "description": "End-to-end booking lifecycle screens: reference lookup, booking details, reschedule/edit steps, cancellation, and resend confirmation."
    }
  ],
  "tags": [
    "React",
    "React Router",
    "Redux Toolkit",
    "Redux Persist",
    "Material UI (MUI)",
    "Bootstrap",
    "Styled Components",
    "Axios",
    "Stripe",
    "react-day-picker",
    "UUID"
  ],
  "liveUrl": "#",
  "githubUrl": "#",
  "completionDate": "2026",
  "duration": "Project-Based",
  "teamSize": "Solo Project",
  "rating": "5/5"
},
{
  "id": 6,
  "title": "Quip Insight Nexus — Product Detail Page (Single-Call) API Spec",
  "description": "A complete Product Detail Page API design where one endpoint returns everything needed for PDP: product details, vendor offers, related products, store products, identifiers, and health/maintenance info—optimized to avoid multiple frontend requests.",
  "detailedDescription": "Designed an optimized REST API specification for a Product Detail Page using a single endpoint (`GET /api/products/{productId}/complete`) that aggregates all PDP data in one response. The spec includes path/query params (`relatedLimit`, `storeProductsLimit`), a full success payload covering product info (price, rating, stock, images, store, specs), product identifiers (MPN/UPC/GTIN/SKU/EAN), vendor offers with shipping details, and curated related/store product sections. It defines standard error formats and common error codes, includes TypeScript interfaces for strong typing, and provides backend notes for performance (parallel queries, caching strategy, indexing, rate limiting, response-time targets) plus recommended relational DB schemas and query patterns.",
  "thumbnail": "/projects/quip-insight-nexus/thumbnail.png",
  "gallery": [
    "/projects/quip-insight-nexus/1.png",
    "/projects/quip-insight-nexus/2.png",
    "/projects/quip-insight-nexus/3.png",
    "/projects/quip-insight-nexus/4.png",
    "/projects/quip-insight-nexus/5.png"
  ],
  "pages": [
    {
      "title": "Single Endpoint PDP Aggregation",
      "image": "/projects/quip-insight-nexus/1.png",
      "description": "One-call Product Detail endpoint that returns product, vendor offers, related products, and more-from-store data for fast PDP rendering."
    },
    {
      "title": "Response Model (Product + Offers + Recommendations)",
      "image": "/projects/quip-insight-nexus/2.png",
      "description": "Clear JSON response structure including product specifications, identifiers, vendor shipping details, and curated recommendation sections."
    },
    {
      "title": "Typed Contracts (TypeScript Interfaces)",
      "image": "/projects/quip-insight-nexus/3.png",
      "description": "Type-safe interface definitions for Product, VendorOffer, Store, MaintenanceInfo, ProductIdentifiers, and the full response payload."
    },
    {
      "title": "Error Handling + Validation",
      "image": "/projects/quip-insight-nexus/4.png",
      "description": "Standardized error format with common codes (INVALID_PRODUCT_ID, PRODUCT_NOT_FOUND, INTERNAL_SERVER_ERROR) and parameter validation guidance."
    },
    {
      "title": "Performance & Backend Notes",
      "image": "/projects/quip-insight-nexus/5.png",
      "description": "Optimization guidance: parallel fetching, caching, indexing, rate limiting, and recommended database schemas for scalable implementation."
    }
  ],
  "tags": [
    "REST API Design",
    "API Documentation",
    "TypeScript",
    "JSON Schema / Contracts",
    "Backend Architecture",
    "Performance Optimization",
    "Caching Strategy",
    "Database Schema Design",
    "E-commerce"
  ],
  "liveUrl": "#",
  "githubUrl": "#",
  "completionDate": "2026",
  "duration": "Spec & Architecture",
  "teamSize": "Solo Project",
  "rating": "5/5"
},
{
  "id": 7,
  "title": "Auto Parts Marketplace (Customer + Vendor Portal)",
  "description": "A responsive auto parts marketplace for selling used/original car parts with advanced search & filtering, product details, cart/checkout, Stripe payments, order tracking, returns, and a vendor dashboard to manage parts and sales.",
  "detailedDescription": "A full-featured marketplace web app built with React + TypeScript (Vite) for browsing and purchasing used/original car parts. Customers can explore products with category/search filters and pagination, view product details, manage cart, and complete checkout with shipping details, service fee calculation, and Stripe card payments. After purchase, users can track orders, view order details, request returns, and manage their profile. The app includes multi-language UI, multi-currency support, dark/light theme, wishlist, toast notifications, and smooth UX transitions. A dedicated vendor portal provides login, dashboard KPIs (parts, revenue, monthly sales, pending orders), parts listing with pagination, and add-new-part workflow. Integrations include Stripe (PaymentIntent flow) and backend APIs for orders, shipping/tracking updates, and vendor sales/parts data.",
  "thumbnail": "/projects/auto-parts-marketplace/thumbnail.png",
  "gallery": [
    "/projects/auto-parts-marketplace/1.png",
    "/projects/auto-parts-marketplace/2.png",
    "/projects/auto-parts-marketplace/3.png",
    "/projects/auto-parts-marketplace/4.png",
    "/projects/auto-parts-marketplace/5.png",
    "/projects/auto-parts-marketplace/6.png",
    "/projects/auto-parts-marketplace/7.png"
  ],
  "pages": [
    {
      "title": "Marketplace + Search Filters",
      "image": "/projects/auto-parts-marketplace/1.png",
      "description": "Product browsing with search/filter controls, pagination, and responsive product grid for fast discovery."
    },
    {
      "title": "Product Details + Gallery",
      "image": "/projects/auto-parts-marketplace/2.png",
      "description": "Detailed part view with image gallery, vendor info, and actions like add-to-cart and wishlist."
    },
    {
      "title": "Cart + Checkout (Shipping + Fees)",
      "image": "/projects/auto-parts-marketplace/3.png",
      "description": "Cart summary and checkout flow with shipping address, shipping cost, service fee calculation, and order total rounding."
    },
    {
      "title": "Stripe Card Payment + Success/Declined UX",
      "image": "/projects/auto-parts-marketplace/4.png",
      "description": "Stripe PaymentIntent card confirmation with clear success and declined states using modal feedback."
    },
    {
      "title": "Orders, Tracking & Returns",
      "image": "/projects/auto-parts-marketplace/5.png",
      "description": "Protected order history, order status/details pages, and return request workflow for post-purchase support."
    },
    {
      "title": "Vendor Dashboard + Parts Management",
      "image": "/projects/auto-parts-marketplace/6.png",
      "description": "Vendor KPIs, parts list with pagination, and add-new-part modal for inventory management."
    },
    {
      "title": "User Profile + Preferences",
      "image": "/projects/auto-parts-marketplace/7.png",
      "description": "Profile area with preference-driven UI (theme, language, currency) and a polished navigation experience."
    }
  ],
  "tags": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "React Query",
    "Zustand",
    "Redux Toolkit",
    "Stripe (PaymentIntents)",
    "Axios",
    "REST API Integration"
  ],
  "liveUrl": "#",
  "githubUrl": "#",
  "completionDate": "2026",
  "duration": "Ongoing",
  "teamSize": "Solo Project",
  "rating": "5/5"
}
];

