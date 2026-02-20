# Virum Ranka | Portfolio

Personal portfolio website built with React, Vite, and Framer Motion.

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

## Intro video

Add your typing video to `public/assets/intro-typing.mp4`. The intro sequence:

1. Plays your video (5 sec)
2. Zooms into a monitor-style frame
3. Shows "Welcome to my world"
4. Fades to the portfolio

If the video is missing, a terminal-style fallback is shown. Edit `src/config/introConfig.js` to change timing or `showEveryVisit`.

## Update content

Edit the config files in `src/config/`:

- `heroConfig.js` - Name, title, stats, contact, social links, resume
- `skillsConfig.js` - Skills by category
- `projectsConfig.js` - Projects with descriptions and links
- `experienceConfig.js` - Work experience
- `educationConfig.js` - Education and certifications
- `lifeConfig.js` - Personal interests and fun facts
