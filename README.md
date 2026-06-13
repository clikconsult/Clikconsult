# Clikconsult Website

Full-service IT & digital marketing agency website built with React + Vite + Tailwind CSS + Framer Motion.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS v3**
- **Framer Motion** (scroll animations)
- **React Router v6** (client-side routing)
- **Lucide React** (icons)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services/web-development` | Web Development |
| `/services/mobile-apps` | Mobile App Development |
| `/services/desktop-apps` | Desktop Applications |
| `/services/web-automations` | Web Automations |
| `/services/digital-marketing` | Digital Marketing |
| `/portfolio` | Portfolio |
| `/blog` | Blog / Insights |
| `/contact` | Contact |
| `/careers` | Careers |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

The `vercel.json` file handles SPA routing rewrites automatically.

## Customisation Checklist

- [ ] Replace `hello@clikconsult.com` with your real email
- [ ] Replace `+234 000 000 0000` with your real phone number
- [ ] Update team member names/bios in `src/pages/About.jsx`
- [ ] Add real portfolio projects in `src/pages/Portfolio.jsx`
- [ ] Update blog posts in `src/pages/Blog.jsx`
- [ ] Connect contact form to a backend (Formspree, EmailJS, or custom API)
- [ ] Replace client logo names with real clients
- [ ] Update testimonials with real client quotes
- [ ] Add Google Analytics / Plausible tracking script
