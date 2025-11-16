## NFT Landing Page

Modern single-page NFT landing interface built with **React**, **Vite**, and **SCSS**, featuring smooth scroll animations and a responsive layout.

## Problem It Solves

Launching an NFT collection or marketplace often requires a **fast, visually compelling landing page** that clearly communicates value, showcases featured drops, and drives users to sign up or connect their wallet. Many teams either ship plain, generic pages or spend a lot of time wiring together layout, animations, and responsive behavior from scratch. This project provides a **ready-made, modern NFT landing experience** that you can adapt to your own brand and backend.

## Business Value / Benefits

- **Faster time-to-market**: Start from a polished React + Vite base instead of building a landing page from zero.
- **Conversion-focused layout**: Hero, featured releases, social proof (clients), and signup sections designed to support marketing funnels.
- **Consistent visual identity**: Centralized SCSS architecture makes it easy to theme colors, typography, and spacing for your brand.
- **Performance & DX**: Vite dev server, hot module replacement, and a lean React setup help keep both end-user performance and developer productivity high.
- **Animation-ready UX**: Scroll-based reveals and smooth interactions help differentiate your NFT experience from static competitor pages.

## Features

- **Hero section**: High-impact header with primary call-to-action to drive mints, signups, or wallet connections.
- **Featured releases**: Card-based layout for showcasing top NFTs, drops, or collections with imagery and pricing.
- **Super rare / spotlight area**: Highlight premium assets or curated picks to guide user attention.
- **Clients / social proof**: Logos and brand elements that help build credibility and trust.
- **Signup / lead capture**: Form section designed to collect user emails or onboard users into your community.
- **Responsive design**: Layout optimized for desktop, tablet, and mobile.
- **Scroll animations**: Sections revealed on scroll using `scrollreveal` for a dynamic browsing experience.

## Tech Stack
- **Frontend**: React 18, React Router
- **Build Tooling**: Vite 5
- **Styling**: SCSS (modular partials for sections and components)
- **UI / UX Enhancements**: `react-icons`, `scrollreveal`
- **Code Quality**: ESLint with React-focused rules

## Getting Started

### Prerequisites
- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### Installation
```bash
npm install
```
or
```bash
yarn
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure (High Level)
- **`src`**: React components, pages, and SCSS
  - **`components`**: Reusable UI pieces (cards, navbar, footer, sections, etc.)
  - **`scss`**: Base styles, section styles, and component styles

## License

This project is for learning and demonstration purposes. Adapt and extend it as needed.
