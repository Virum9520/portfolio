# Virum Ranka | Portfolio

### **Visite at https://virum9520.github.io/portfolio/**

Personal portfolio website showcasing intro video, hero section, skills, projects, work experience, education, and personal interests. Built for deployment on GitHub Pages.

## Tech stack

- **React** + **Vite** — UI and build
- **Tailwind CSS** — styling
- **Framer Motion** + **GSAP** — animations
- **Spline** (react-spline) — 3D scenes

## Features

- **Parallax** — Scroll-based parallax and depth effects for sections
- **Spline** — 3D robot (or scene) in a monitoring-style frame
- **Smooth scrolling** — Lenis-driven scroll with easing
- **Intro sequence** — Video or terminal-style intro, then “Welcome to my world” and fade to portfolio
- **Scroll-triggered animations** — Reveals and motion on scroll (Framer Motion, GSAP)
- **Typewriter** — Animated typing in hero or other sections
- **Config-driven content** — Hero, skills, projects, experience, education, and life sections editable via `src/config/`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio)

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Update `homepage` in `package.json` to your GitHub Pages URL
2. Run: `npm run deploy`



## Update content

Edit the config files in `src/config/`:

- `heroConfig.js` — Name, title, stats, contact, social links, resume
- `skillsConfig.js` — Skills by category
- `projectsConfig.js` — Projects with descriptions and links
- `experienceConfig.js` — Work experience
- `educationConfig.js` — Education and certifications
- `lifeConfig.js` — Personal interests and fun facts
