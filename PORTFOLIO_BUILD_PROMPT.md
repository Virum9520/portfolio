# Portfolio Website Development Prompt

## Project Overview
Build a dark-themed portfolio website with immersive 3D animations using React. The site should feature a distinctive, creative design with unique typography and smooth animations. All content should be configurable through JSON/JS files for easy updates.

---

## Development Approach
**IMPORTANT**: Before implementing each section, present 2-3 design concept options with visual descriptions. Wait for my selection before proceeding with that section's implementation.

---

## Section 1: Hero/About Section

### Requirements
- Full-screen hero section featuring:
  - My profile photo styled as a 3D hero icon/card
  - Player card-style statistics display (customizable stats)
  - Animated entrance effects
  - Contact information
  - Resume download button with hover effects
  - Smooth scroll indicator to next section

### Design Decision Point - STOP HERE AND ASK:
Present 3 distinct aesthetic directions for the hero section:

**Option A**: [Describe a specific aesthetic - e.g., "Futuristic Holographic"]
- Font pairing suggestion
- Color scheme (dark base + accents)
- Animation style (e.g., floating particles, neon glows)
- Layout approach (e.g., centered, asymmetric)
- 3D effect style for photo/card

**Option B**: [Describe contrasting aesthetic - e.g., "Brutalist Minimal"]
- Font pairing suggestion
- Color scheme
- Animation style
- Layout approach
- 3D effect style

**Option C**: [Describe third option - e.g., "Retro Gaming Terminal"]
- Font pairing suggestion
- Color scheme
- Animation style
- Layout approach
- 3D effect style

**Wait for my selection before proceeding.**

### Configuration File Structure
```javascript
// config/heroConfig.js
export const heroConfig = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your Tagline",
  profileImage: "/assets/profile.jpg",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies", value: "20+" },
    { label: "Coffee Consumed", value: "∞" }
  ],
  contact: {
    email: "your.email@example.com",
    phone: "+1234567890",
    location: "City, Country"
  },
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  },
  resumeUrl: "/assets/resume.pdf"
};
```

---

## Section 2: Skills Section

### Requirements
- Visually engaging display of technical skills
- Categories: Languages, Frameworks, Tools, Soft Skills
- Interactive elements (hover effects, animations)
- Proficiency indicators (visual, not just text)
- Smooth scroll-triggered animations

### Design Decision Point - STOP HERE AND ASK:
Present 3 visualization approaches for skills:

**Option A**: [e.g., "3D Rotating Skill Spheres"]
- How skills are grouped and displayed
- Interaction model
- Animation behavior
- Proficiency visualization method

**Option B**: [e.g., "Animated Card Grid with Flip Effects"]
- How skills are grouped and displayed
- Interaction model
- Animation behavior
- Proficiency visualization method

**Option C**: [e.g., "Terminal-Style Skill Matrix"]
- How skills are grouped and displayed
- Interaction model
- Animation behavior
- Proficiency visualization method

**Wait for my selection before proceeding.**

### Configuration File Structure
```javascript
// config/skillsConfig.js
export const skillsConfig = {
  categories: [
    {
      name: "Languages",
      skills: [
        { name: "JavaScript", proficiency: 90, icon: "js-icon" },
        { name: "Python", proficiency: 85, icon: "python-icon" },
        // ...
      ]
    },
    {
      name: "Frameworks",
      skills: [
        { name: "React", proficiency: 95, icon: "react-icon" },
        // ...
      ]
    },
    // ...
  ]
};
```

---

## Section 3: Projects Section

### Requirements
- Showcase creative/notable projects
- Each project card includes:
  - Project thumbnail/screenshot
  - Title and brief description
  - Technologies used (badges/icons)
  - "Read More" button that expands to show full details
  - Links to live demo and GitHub repo
- Grid/masonry layout with animations
- Filter by technology/category (optional but recommended)

### Design Decision Point - STOP HERE AND ASK:
Present 3 project showcase styles:

**Option A**: [e.g., "3D Card Stack with Parallax"]
- Card layout and arrangement
- Expansion/modal behavior for "Read More"
- Hover and transition effects
- How tech badges are displayed

**Option B**: [e.g., "Magazine-Style Editorial Layout"]
- Card layout and arrangement
- Expansion/modal behavior for "Read More"
- Hover and transition effects
- How tech badges are displayed

**Option C**: [e.g., "Glassmorphic Grid with Depth"]
- Card layout and arrangement
- Expansion/modal behavior for "Read More"
- Hover and transition effects
- How tech badges are displayed

**Wait for my selection before proceeding.**

### Configuration File Structure
```javascript
// config/projectsConfig.js
export const projectsConfig = {
  projects: [
    {
      id: 1,
      title: "Project Name",
      shortDescription: "Brief one-liner",
      fullDescription: "Detailed project description...",
      thumbnail: "/assets/project1-thumb.jpg",
      images: ["/assets/project1-1.jpg", "/assets/project1-2.jpg"],
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Web App",
      links: {
        live: "https://project-demo.com",
        github: "https://github.com/username/project"
      },
      featured: true
    },
    // ...
  ],
  categories: ["All", "Web App", "Mobile", "Design", "AI/ML"]
};
```

---

## Section 4: Experience Section

### Requirements
- Timeline or card-based display of work experience
- Each entry includes:
  - Company name and logo
  - Job title
  - Duration (start - end dates)
  - Key responsibilities/achievements (bullet points)
  - Technologies used
- Chronological order (most recent first)
- Smooth animations on scroll

### Design Decision Point - STOP HERE AND ASK:
Present 3 experience timeline designs:

**Option A**: [e.g., "Vertical 3D Timeline with Depth"]
- Timeline structure and flow
- How entries are visually connected
- Animation approach (scroll-triggered)
- Company logo integration

**Option B**: [e.g., "Horizontal Sliding Cards"]
- Timeline structure and flow
- How entries are visually connected
- Animation approach
- Company logo integration

**Option C**: [e.g., "Stacked Cards with Blur Effects"]
- Timeline structure and flow
- How entries are visually connected
- Animation approach
- Company logo integration

**Wait for my selection before proceeding.**

### Configuration File Structure
```javascript
// config/experienceConfig.js
export const experienceConfig = {
  experiences: [
    {
      id: 1,
      company: "Company Name",
      logo: "/assets/company1-logo.png",
      position: "Senior Developer",
      duration: {
        start: "Jan 2022",
        end: "Present"
      },
      location: "City, Country",
      responsibilities: [
        "Led development of...",
        "Implemented...",
        "Collaborated with..."
      ],
      technologies: ["React", "TypeScript", "AWS"],
      achievements: [
        "Increased performance by 40%",
        "Reduced load time by 2 seconds"
      ]
    },
    // ...
  ]
};
```

---

## Section 5: Education Section

### Requirements
- Display academic background
- Each entry includes:
  - Institution name and logo
  - Degree and field of study
  - Graduation year or expected graduation
  - GPA or honors (optional)
  - Relevant coursework (optional)
  - Certifications (if any)
- Clean, professional presentation
- Subtle animations

### Design Decision Point - STOP HERE AND ASK:
Present 2-3 education display styles:

**Option A**: [e.g., "Diploma/Certificate Cards"]
- Visual style and layout
- Information hierarchy
- Animation style
- Logo/badge integration

**Option B**: [e.g., "Academic Timeline"]
- Visual style and layout
- Information hierarchy
- Animation style
- Logo/badge integration

**Option C**: [e.g., "Minimalist Grid"]
- Visual style and layout
- Information hierarchy
- Animation style
- Logo/badge integration

**Wait for my selection before proceeding.**

### Configuration File Structure
```javascript
// config/educationConfig.js
export const educationConfig = {
  education: [
    {
      id: 1,
      institution: "University Name",
      logo: "/assets/university-logo.png",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: {
        start: "2015",
        end: "2019"
      },
      gpa: "3.8/4.0",
      honors: ["Cum Laude", "Dean's List"],
      coursework: [
        "Data Structures",
        "Algorithms",
        "Machine Learning"
      ]
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://..."
    }
  ]
};
```

---

## Section 6: "My Life" Section

### Requirements
- Personal section showcasing interests, hobbies, or life philosophy
- Could include:
  - Photo gallery or carousel
  - Timeline of personal milestones
  - Interests/hobbies with icons
  - Fun facts or quotes
  - Travel map or locations
  - Creative "about me beyond work" content
- Engaging and personable tone
- Unique visual treatment

### Design Decision Point - STOP HERE AND ASK:
Present 3 conceptual approaches for personal section:

**Option A**: [e.g., "Life in Polaroids - Photo Grid with Stories"]
- Content format and structure
- Visual presentation style
- Interactive elements
- Animation/transition effects

**Option B**: [e.g., "Interests Constellation - 3D Space"]
- Content format and structure
- Visual presentation style
- Interactive elements
- Animation/transition effects

**Option C**: [e.g., "Journey Map - Interactive Timeline"]
- Content format and structure
- Visual presentation style
- Interactive elements
- Animation/transition effects

**Wait for my selection before proceeding.**

### Configuration File Structure
```javascript
// config/lifeConfig.js
export const lifeConfig = {
  philosophy: "Your personal motto or philosophy",
  interests: [
    {
      name: "Photography",
      icon: "camera-icon",
      description: "Love capturing moments...",
      images: ["/assets/hobby1.jpg"]
    },
    {
      name: "Travel",
      icon: "plane-icon",
      description: "Visited 20+ countries...",
      places: ["Paris", "Tokyo", "New York"]
    }
  ],
  funFacts: [
    "Coffee enthusiast ☕",
    "Night owl 🦉",
    "Bookworm 📚"
  ],
  gallery: [
    { image: "/assets/life1.jpg", caption: "Caption here" },
    // ...
  ]
};
```

---

## Global Design Elements

### Typography - INITIAL DESIGN DECISION:
**STOP HERE AND ASK**: Present 5 unique font pairing options:

**Option 1**: [e.g., "Cyberpunk Tech"]
- Display/Heading Font: [Font name + description]
- Body Font: [Font name + description]
- Code Font: [Font name + description]
- Why it works for this portfolio

**Option 2**: [e.g., "Editorial Elegance"]
- Display/Heading Font: [Font name + description]
- Body Font: [Font name + description]
- Code Font: [Font name + description]
- Why it works for this portfolio

**Option 3**: [e.g., "Retro Terminal"]
- Display/Heading Font: [Font name + description]
- Body Font: [Font name + description]
- Code Font: [Font name + description]
- Why it works for this portfolio

**Option 4**: [e.g., "Modern Geometric"]
- Display/Heading Font: [Font name + description]
- Body Font: [Font name + description]
- Code Font: [Font name + description]
- Why it works for this portfolio

**Option 5**: [e.g., "Organic Handcrafted"]
- Display/Heading Font: [Font name + description]
- Body Font: [Font name + description]
- Code Font: [Font name + description]
- Why it works for this portfolio

**Wait for my selection before proceeding.**

### Color Scheme - DESIGN DECISION:
**STOP HERE AND ASK**: Based on the chosen typography, present 3 dark theme color palettes:

**Palette A**: [Theme name]
- Background: [Dark color]
- Surface: [Slightly lighter]
- Primary Accent: [Bold color]
- Secondary Accent: [Complementary]
- Text: [Light color]
- Gradient/Special: [If applicable]

**Palette B**: [Theme name]
- [Same structure]

**Palette C**: [Theme name]
- [Same structure]

**Wait for my selection before proceeding.**

---

## Technical Architecture

### React Structure
```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── Hero.module.css
│   │   ├── PlayerCard.jsx
│   │   └── StatsDisplay.jsx
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   ├── Skills.module.css
│   │   └── SkillCard.jsx
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   ├── Projects.module.css
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   ├── Experience/
│   │   ├── Experience.jsx
│   │   ├── Experience.module.css
│   │   └── TimelineItem.jsx
│   ├── Education/
│   │   ├── Education.jsx
│   │   └── Education.module.css
│   ├── Life/
│   │   ├── Life.jsx
│   │   └── Life.module.css
│   ├── Navigation/
│   │   ├── Navbar.jsx
│   │   └── MobileMenu.jsx
│   └── shared/
│       ├── Button.jsx
│       ├── Card.jsx
│       └── SectionTitle.jsx
├── config/
│   ├── heroConfig.js
│   ├── skillsConfig.js
│   ├── projectsConfig.js
│   ├── experienceConfig.js
│   ├── educationConfig.js
│   ├── lifeConfig.js
│   └── themeConfig.js
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume.pdf
├── hooks/
│   ├── useScrollAnimation.js
│   └── useTheme.js
├── utils/
│   └── animationHelpers.js
├── App.jsx
└── main.jsx
```

### Key Libraries to Use
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.92.0",
    "framer-motion": "^10.16.0",
    "react-intersection-observer": "^9.5.3",
    "lucide-react": "^0.294.0"
  }
}
```

### 3D Animation Guidelines
- Use Three.js via @react-three/fiber for 3D elements
- Keep 3D animations performant (60fps target)
- Provide fallbacks for low-performance devices
- Use @react-three/drei helpers for common 3D effects
- Framer Motion for 2D animations and scroll effects

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly interactive elements
- Simplified 3D effects on mobile for performance

---

## Navigation Structure Decision

**STOP HERE AND ASK**: Choose navigation approach:

**Option A: Single Page Application (SPA)**
- All sections on one scrollable page
- Smooth scroll navigation
- Fixed/sticky navbar with section links
- URL hash navigation (#about, #skills, etc.)
- Pros: Fluid experience, easier animations
- Cons: Long initial load, heavy single page

**Option B: Multi-Page Application**
- Separate routes for each major section
- React Router navigation
- Persistent layout with transitions
- Pros: Better SEO, lighter individual pages
- Cons: More complex state management

**Which approach do you prefer?**

---

## GitHub Deployment

### GitHub Pages Setup
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure vite.config.js:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... other config
});
```

4. Deploy: `npm run deploy`

### Configuration Update Workflow
```
1. Update relevant config file in /config
2. Commit changes
3. Run: npm run deploy
4. Site updates automatically
```

---

## Development Workflow

### Phase 1: Foundation
1. Choose typography and color scheme
2. Set up project structure
3. Create theme configuration
4. Build navigation component

### Phase 2: Section-by-Section Development
For each section:
1. **Present design options** (WAIT FOR SELECTION)
2. **Implement chosen design**
3. **Create configuration file**
4. **Test responsiveness**
5. **Optimize animations**
6. **Get approval before moving to next section**

### Phase 3: Polish
1. Cross-browser testing
2. Performance optimization
3. Accessibility audit
4. Final animations tuning
5. Documentation

---

## Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90
- Smooth 60fps animations
- Optimized images (WebP format)
- Lazy loading for below-fold content

---

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators
- Reduced motion support (prefers-reduced-motion)

---

## Ready to Start?

**First Decision Required**: 
Before we begin implementation, I need you to choose:
1. Navigation structure (SPA vs Multi-page)
2. Typography pairing (from 5 options I'll present)
3. Color palette (from 3 options I'll present)

After these are selected, we'll proceed section by section, with design approval at each stage.

Are you ready to make these initial choices?
