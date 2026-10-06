# ☁️ AWS Student Community Day 2026 — IGDTUW

<div align="center">

[![Website Live](https://img.shields.io/badge/Live%20Website-AWS_SCD_IGDTUW-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://vidhiisaxena.github.io/AWS_SCD_IGDTUW/)
[![RSVP on KonfHub](https://img.shields.io/badge/RSVP-KonfHub%20Tickets-8B5CF6?style=for-the-badge&logo=ticket&logoColor=white)](https://konfhub.com/aws-student-community-day-2026-new-delhi)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%203-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**The flagship student cloud summit of North India — organized by AWS Student Builder Group IGDTUW.**  
*One Community. Countless Possibilities.*

[🌐 Explore Live Site](https://vidhiisaxena.github.io/AWS_SCD_IGDTUW/) • [🎟️ Grab Your Pass](https://konfhub.com/aws-student-community-day-2026-new-delhi) • [🕹️ Play Cloud Arcade](https://vidhiisaxena.github.io/AWS_SCD_IGDTUW/)

</div>

---

## 🌟 Overview

**AWS Student Community Day (SCD) 2026** is a premier student-led cloud computing conference hosted by the **AWS Student Builder Group (SGB) at Indira Gandhi Delhi Technical University for Women (IGDTUW)**. 

Designed around a **cosmic space-tech theme**, this website serves as an interactive command center where attendees, builders, and developers explore keynote speakers, track mission timelines, inspect organizing department squads, and play interactive games in the Cloud Arcade.

---

## 🚀 Key Highlights & Features

### 1. 🛰️ Cinematic Rocket Launch Telemetry (Preloader)
- **Interactive Staging Sequence:** Simulates a mission control countdown complete with atmospheric smoke canvas particles, payload telemetry diagnostics, and engine ignition visuals.
- **Bypass Capability:** Seamless instant-skip option for rapid access without compromising first-time visual impact.

### 2. 🌌 Dual-Gateway Welcome Portal
- **Forked Exploration:** Provides users with a choice between exploring the full conference site (`ENTER CLOUD`) or diving straight into the built-in mini-games (`LAUNCH CLOUD ARCADE`).
- **Live Atmosphere:** Animated cosmic starfields, reactive nebulas, and floating space dust.

### 3. 🕹️ Interactive AWS Cloud Arcade Zone
- **Cloud Match & Trivia Mini-Games:** Interactive playable web games centered around AWS services (S3, Lambda, DynamoDB, EC2, CloudFront, Bedrock).
- **Gamified Learning:** Real-time scoring, live streak counters, and celebratory confetti effects powered by `canvas-confetti`.

### 4. 🎛️ Mission Control Architecture (Community Squadron)
- **Departmental Command Console:** Switch between flight squadrons (**Community**, **Events**, **Tech**, **Design**, **Outreach**, and **Operations**) to view leads and builders.
- **Mobile-Optimized Telemetry:** Centered, swipe-friendly single-member console on mobile devices, cutting over 75% of vertical scroll fatigue while keeping full detail accessible.

### 5. 🧑‍🚀 Flight Crew & Keynotes (Speakers)
- **Holographic Speaker Badges:** Collectible flight card visuals showcasing AWS Heroes, architects, and community leaders.
- **Topic Deep Dives:** Displays talk categories, company associations, and social coordinates.

### 6. ⏱️ Mission Timeline & Launch Chronometer
- **Precision Countdown Timer:** Dynamic clock ticking down to liftoff day with auto-status switches upon ignition.
- **Trackable Schedule:** Chronological sessions covering keynote inaugurations, live deployment labs, architectural teardowns, and networking lunches.

### 7. 🪐 Alliance Fleet (Sponsors Orbit)
- **Planetary Orbit Showcase:** Desktop circular orbit diagram centering on the AWS core engine.
- **Touch-Friendly Mobile Slider:** Responsive card slider on mobile screens with drag gestures, Prev/Next buttons, and centered pagination dots.

### 8. 🗺️ Navigation Beacon & FAQ Terminal
- **Interactive Campus Routing:** Campus transit details (Metro lines, rail hubs, and airport connectivity) with rapid Google Maps navigation.
- **Terminal-Style FAQ Accordion:** Linux shell prompt-styled interactive accordion addressing ticketing, swags, prerequisites, and perks.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Build & Tooling** | [Vite 8](https://vitejs.dev/), [Oxlint](https://oxc.rs/) |
| **Styling & Design System** | [Tailwind CSS 3](https://tailwindcss.com/), Custom Cosmic Design System |
| **Animations & FX** | [Framer Motion](https://www.framer.com/motion/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [GitHub Pages Actions Pipeline](https://github.com/features/actions) |

---

## 📁 Project Architecture

```plaintext
AWS_Community_Day_website/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated CI/CD deployment to GitHub Pages
├── public/                      # Static assets & favicon icons
├── src/
│   ├── components/
│   │   ├── About.tsx            # Summit philosophy, pillars & live statistics
│   │   ├── BrandIcons.tsx       # Custom SVG vectors (LinkedIn, GitHub)
│   │   ├── CloudArcade.tsx      # Interactive browser-based cloud games
│   │   ├── Countdown.tsx        # Live event launch timer
│   │   ├── FAQ.tsx              # Shell terminal accordion for questions
│   │   ├── Footer.tsx           # Footer with AWS brand links & telemetry
│   │   ├── Hero.tsx             # Main hero section with call-to-actions
│   │   ├── Navbar.tsx           # Fixed blur navigation with mobile drawer
│   │   ├── RegistrationModal.tsx# Quick RSVP modal wrapper
│   │   ├── RocketLoader.tsx     # Cinematic interactive canvas preloader
│   │   ├── ScheduleTimeline.tsx # Conference mission agenda
│   │   ├── Speakers.tsx         # Speaker cards with flight badge aesthetics
│   │   ├── Sponsors.tsx         # Partner orbit and mobile slider
│   │   ├── StarField.tsx        # Dynamic canvas starfield backdrop
│   │   ├── TeamControlRoom.tsx  # Mission control squad console
│   │   ├── Venue.tsx            # Venue details & transit guides
│   │   └── WelcomeScreen.tsx    # Dual-choice gateway experience
│   ├── data/
│   │   └── eventData.ts         # Centralized configuration & schedule content
│   ├── App.tsx                  # Stage manager & root layout
│   ├── index.css                # Custom neon glows, scrollbars & grid utilities
│   └── main.tsx                 # React DOM mount point
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Cosmic theme palette & typography extensions
└── vite.config.ts               # Base path and compiler configuration
```

---


<div align="center">

Made with 💜 and ☁️ by the **AWS Student Builder Group IGDTUW**

[⭐ Star this Repository](https://github.com/vidhiisaxena/AWS_SCD_IGDTUW) • [Report an Issue](https://github.com/vidhiisaxena/AWS_SCD_IGDTUW/issues)

</div>
