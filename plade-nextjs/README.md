# PLADE — SEO-Optimized Next.js Website

> **Learn Code. Shoot Targets.** — The world's first FPS coding education game.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- npm (comes with Node.js)

### Installation

```bash
cd plade-nextjs
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

This generates a static export in the `/out` directory.

### Deploy to Firebase

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize (select Hosting, choose 'out' as public directory)
firebase init

# Deploy
firebase deploy
```

## Project Structure

```
plade-nextjs/
├── app/
│   ├── globals.css        # Full design system + responsive styles
│   ├── layout.js          # Root layout, fonts, metadata, JSON-LD
│   ├── page.js            # Main page (assembles all components)
│   ├── not-found.js       # Custom 404 page
│   ├── sitemap.js         # Dynamic sitemap generation
│   ├── robots.js          # Robots.txt for crawlers
│   └── manifest.js        # Web app manifest (PWA)
├── components/
│   ├── CustomCursor.js    # Crosshair cursor (desktop only)
│   ├── ScrollProgress.js  # Scroll progress bar
│   ├── Navbar.js          # Nav with mobile hamburger menu
│   ├── Hero.js            # Hero with particles & parallax
│   ├── Marquee.js         # Infinite scrolling ticker
│   ├── Features.js        # Feature cards grid
│   ├── HowItWorks.js      # Steps + terminal mockup
│   ├── TechStack.js       # Tech cards grid
│   ├── Download.js        # Download CTA section
│   └── Footer.js          # Footer
├── public/
│   └── icon.svg           # Favicon
├── firebase.json          # Firebase Hosting config
├── next.config.js         # Static export config
└── package.json
```

## SEO Features

- ✅ Next.js Metadata API (title, description, keywords, Open Graph, Twitter Cards)
- ✅ JSON-LD Structured Data (SoftwareApplication, FAQPage, WebSite schemas)
- ✅ Dynamic `sitemap.xml` generation
- ✅ Dynamic `robots.txt` generation
- ✅ Canonical URLs
- ✅ Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`)
- ✅ Proper heading hierarchy (single H1)
- ✅ ARIA labels for accessibility
- ✅ Web App Manifest
- ✅ Mobile-responsive design
- ✅ Reduced motion support
- ✅ Security headers via Firebase

## Domain

Production: **https://plade.web.app**
