# Portfolio Website - Technical Specification

## Project Overview

**Project Name**: Personal Portfolio Website  
**Framework**: React 18+ with Vite  
**Theme**: Dark Mode  
**Deployment**: GitHub Pages  
**Architecture**: Component-based with configuration-driven content

---

## Tech Stack

### Core Technologies
```json
{
  "runtime": "Node.js >= 18.0.0",
  "framework": "React 18.2.0",
  "buildTool": "Vite 5.0.0",
  "language": "JavaScript (ES6+)",
  "styling": "CSS Modules + CSS Variables"
}
```

### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.92.0",
    "framer-motion": "^10.16.0",
    "react-intersection-observer": "^9.5.3",
    "lucide-react": "^0.294.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "gh-pages": "^6.1.0",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0"
  }
}
```

### Library Purposes
- **three + @react-three/fiber**: 3D graphics and animations
- **@react-three/drei**: Helper components for Three.js
- **framer-motion**: 2D animations and transitions
- **react-intersection-observer**: Scroll-triggered animations
- **lucide-react**: Icon library
- **clsx**: Conditional className utility
- **react-router-dom**: Client-side routing (if multi-page chosen)

---

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.jpg
│   │   │   ├── projects/
│   │   │   └── life/
│   │   ├── icons/
│   │   │   ├── technologies/
│   │   │   └── social/
│   │   ├── resume.pdf
│   │   └── company-logos/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.module.css
│   │   │   ├── PlayerCard.jsx
│   │   │   ├── PlayerCard.module.css
│   │   │   ├── StatsDisplay.jsx
│   │   │   ├── StatsDisplay.module.css
│   │   │   ├── ContactInfo.jsx
│   │   │   └── ResumeButton.jsx
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── Skills.module.css
│   │   │   ├── SkillCategory.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── ProficiencyIndicator.jsx
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.module.css
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ProjectFilter.jsx
│   │   │   └── TechBadge.jsx
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   ├── Experience.module.css
│   │   │   ├── Timeline.jsx
│   │   │   ├── TimelineItem.jsx
│   │   │   └── CompanyCard.jsx
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   ├── Education.module.css
│   │   │   ├── EducationCard.jsx
│   │   │   └── CertificationBadge.jsx
│   │   ├── Life/
│   │   │   ├── Life.jsx
│   │   │   ├── Life.module.css
│   │   │   ├── InterestCard.jsx
│   │   │   ├── PhotoGallery.jsx
│   │   │   └── FunFacts.jsx
│   │   ├── Navigation/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── MobileMenu.jsx
│   │   │   └── ScrollProgress.jsx
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Layout.module.css
│   │   │   ├── PageTransition.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── shared/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Card/
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Card.module.css
│   │   │   ├── SectionTitle/
│   │   │   │   ├── SectionTitle.jsx
│   │   │   │   └── SectionTitle.module.css
│   │   │   ├── LoadingSpinner/
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   └── LoadingSpinner.module.css
│   │   │   └── Modal/
│   │   │       ├── Modal.jsx
│   │   │       └── Modal.module.css
│   │   └── 3D/
│   │       ├── Scene3D.jsx
│   │       ├── FloatingElements.jsx
│   │       ├── ParticleField.jsx
│   │       └── GeometricShapes.jsx
│   ├── config/
│   │   ├── index.js
│   │   ├── heroConfig.js
│   │   ├── skillsConfig.js
│   │   ├── projectsConfig.js
│   │   ├── experienceConfig.js
│   │   ├── educationConfig.js
│   │   ├── lifeConfig.js
│   │   ├── navigationConfig.js
│   │   └── themeConfig.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── animations.css
│   │   ├── typography.css
│   │   └── utilities.css
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useWindowSize.js
│   │   ├── useMediaQuery.js
│   │   └── useTheme.js
│   ├── utils/
│   │   ├── animationHelpers.js
│   │   ├── scrollHelpers.js
│   │   ├── deviceDetection.js
│   │   └── constants.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx (if multi-page)
│   │   ├── Projects.jsx (if multi-page)
│   │   └── Contact.jsx (if multi-page)
│   ├── App.jsx
│   ├── main.jsx
│   └── Router.jsx (if multi-page)
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── DEPLOYMENT_GUIDE.md
```

---

## Configuration Files Specification

### 1. Theme Configuration (`config/themeConfig.js`)

```javascript
export const themeConfig = {
  // Color palette
  colors: {
    background: {
      primary: '#0a0a0f',
      secondary: '#121218',
      tertiary: '#1a1a24'
    },
    surface: {
      primary: '#1e1e2e',
      secondary: '#252535',
      hover: '#2d2d3f'
    },
    accent: {
      primary: '#00ffcc',    // Customizable
      secondary: '#ff00aa',   // Customizable
      tertiary: '#7700ff'     // Customizable
    },
    text: {
      primary: '#ffffff',
      secondary: '#b4b4c8',
      tertiary: '#808096',
      accent: '#00ffcc'
    },
    border: {
      default: '#2d2d3f',
      focus: '#00ffcc'
    },
    gradient: {
      primary: 'linear-gradient(135deg, #00ffcc, #7700ff)',
      secondary: 'linear-gradient(135deg, #ff00aa, #00ffcc)',
      radial: 'radial-gradient(circle, #00ffcc20, transparent)'
    }
  },

  // Typography
  fonts: {
    display: '"CustomDisplay", sans-serif',  // Customizable
    heading: '"CustomHeading", sans-serif',   // Customizable
    body: '"CustomBody", sans-serif',         // Customizable
    code: '"JetBrains Mono", monospace'
  },

  // Font sizes (responsive)
  fontSizes: {
    hero: {
      desktop: '5rem',
      tablet: '3.5rem',
      mobile: '2.5rem'
    },
    h1: {
      desktop: '3.5rem',
      tablet: '2.5rem',
      mobile: '2rem'
    },
    h2: {
      desktop: '2.5rem',
      tablet: '2rem',
      mobile: '1.75rem'
    },
    h3: {
      desktop: '2rem',
      tablet: '1.5rem',
      mobile: '1.25rem'
    },
    body: {
      desktop: '1.125rem',
      tablet: '1rem',
      mobile: '0.938rem'
    },
    small: '0.875rem'
  },

  // Spacing scale
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
    section: '6rem'
  },

  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },

  // Shadows
  shadows: {
    sm: '0 2px 8px rgba(0, 255, 204, 0.1)',
    md: '0 4px 16px rgba(0, 255, 204, 0.15)',
    lg: '0 8px 32px rgba(0, 255, 204, 0.2)',
    xl: '0 16px 64px rgba(0, 255, 204, 0.25)',
    glow: '0 0 20px rgba(0, 255, 204, 0.5)'
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },

  // Z-index layers
  zIndex: {
    background: -1,
    default: 1,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    popover: 400,
    tooltip: 500
  }
};
```

### 2. Hero Configuration (`config/heroConfig.js`)

```javascript
export const heroConfig = {
  // Personal info
  name: "John Doe",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences with code and creativity",
  
  // Profile image
  profileImage: "/assets/images/profile.jpg",
  
  // Player card stats (customizable)
  stats: [
    {
      id: 1,
      label: "Experience",
      value: "5+",
      suffix: "years",
      icon: "trophy",
      color: "#00ffcc"
    },
    {
      id: 2,
      label: "Projects",
      value: "50+",
      suffix: "completed",
      icon: "code",
      color: "#ff00aa"
    },
    {
      id: 3,
      label: "Technologies",
      value: "20+",
      suffix: "mastered",
      icon: "layers",
      color: "#7700ff"
    },
    {
      id: 4,
      label: "Coffee",
      value: "∞",
      suffix: "cups",
      icon: "coffee",
      color: "#ffaa00"
    }
  ],

  // Contact information
  contact: {
    email: "john.doe@example.com",
    phone: "+1 (234) 567-8900",
    location: "San Francisco, CA"
  },

  // Social media links
  social: {
    github: {
      url: "https://github.com/johndoe",
      icon: "github",
      label: "GitHub"
    },
    linkedin: {
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin",
      label: "LinkedIn"
    },
    twitter: {
      url: "https://twitter.com/johndoe",
      icon: "twitter",
      label: "Twitter"
    },
    email: {
      url: "mailto:john.doe@example.com",
      icon: "mail",
      label: "Email"
    }
  },

  // Resume
  resumeUrl: "/assets/resume.pdf",
  resumeFileName: "JohnDoe_Resume.pdf",

  // Hero animation settings
  animations: {
    profileDelay: 0.2,
    statsDelay: 0.4,
    contactDelay: 0.6,
    enableParticles: true,
    enable3D: true
  }
};
```

### 3. Skills Configuration (`config/skillsConfig.js`)

```javascript
export const skillsConfig = {
  categories: [
    {
      id: 1,
      name: "Programming Languages",
      icon: "code",
      color: "#00ffcc",
      skills: [
        {
          id: 1,
          name: "JavaScript",
          proficiency: 95,
          icon: "/assets/icons/technologies/javascript.svg",
          yearsOfExperience: 5,
          description: "Advanced ES6+, async/await, closures"
        },
        {
          id: 2,
          name: "TypeScript",
          proficiency: 90,
          icon: "/assets/icons/technologies/typescript.svg",
          yearsOfExperience: 3,
          description: "Type systems, generics, decorators"
        },
        {
          id: 3,
          name: "Python",
          proficiency: 85,
          icon: "/assets/icons/technologies/python.svg",
          yearsOfExperience: 4,
          description: "Django, Flask, data analysis"
        }
      ]
    },
    {
      id: 2,
      name: "Frontend Frameworks",
      icon: "layout",
      color: "#ff00aa",
      skills: [
        {
          id: 4,
          name: "React",
          proficiency: 95,
          icon: "/assets/icons/technologies/react.svg",
          yearsOfExperience: 5,
          description: "Hooks, Context, Performance optimization"
        },
        {
          id: 5,
          name: "Vue.js",
          proficiency: 80,
          icon: "/assets/icons/technologies/vue.svg",
          yearsOfExperience: 2,
          description: "Composition API, Vuex, Nuxt"
        },
        {
          id: 6,
          name: "Next.js",
          proficiency: 88,
          icon: "/assets/icons/technologies/nextjs.svg",
          yearsOfExperience: 3,
          description: "SSR, SSG, API routes"
        }
      ]
    },
    {
      id: 3,
      name: "Backend & Databases",
      icon: "database",
      color: "#7700ff",
      skills: [
        {
          id: 7,
          name: "Node.js",
          proficiency: 90,
          icon: "/assets/icons/technologies/nodejs.svg",
          yearsOfExperience: 5,
          description: "Express, NestJS, microservices"
        },
        {
          id: 8,
          name: "MongoDB",
          proficiency: 85,
          icon: "/assets/icons/technologies/mongodb.svg",
          yearsOfExperience: 4,
          description: "Aggregation, indexing, sharding"
        },
        {
          id: 9,
          name: "PostgreSQL",
          proficiency: 82,
          icon: "/assets/icons/technologies/postgresql.svg",
          yearsOfExperience: 3,
          description: "Query optimization, JSONB"
        }
      ]
    },
    {
      id: 4,
      name: "Tools & DevOps",
      icon: "tool",
      color: "#ffaa00",
      skills: [
        {
          id: 10,
          name: "Git",
          proficiency: 92,
          icon: "/assets/icons/technologies/git.svg",
          yearsOfExperience: 5,
          description: "Branching strategies, rebasing"
        },
        {
          id: 11,
          name: "Docker",
          proficiency: 85,
          icon: "/assets/icons/technologies/docker.svg",
          yearsOfExperience: 3,
          description: "Containerization, orchestration"
        },
        {
          id: 12,
          name: "AWS",
          proficiency: 80,
          icon: "/assets/icons/technologies/aws.svg",
          yearsOfExperience: 2,
          description: "EC2, S3, Lambda, CloudFront"
        }
      ]
    }
  ],

  // Proficiency levels explanation
  proficiencyLevels: {
    expert: { min: 90, max: 100, label: "Expert", color: "#00ffcc" },
    advanced: { min: 75, max: 89, label: "Advanced", color: "#ff00aa" },
    intermediate: { min: 60, max: 74, label: "Intermediate", color: "#7700ff" },
    beginner: { min: 0, max: 59, label: "Learning", color: "#ffaa00" }
  },

  // Animation settings
  animations: {
    staggerDelay: 0.1,
    enableHover: true,
    enable3D: false
  }
};
```

### 4. Projects Configuration (`config/projectsConfig.js`)

```javascript
export const projectsConfig = {
  // Featured/highlighted projects appear first
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      shortDescription: "Full-stack shopping platform with real-time inventory",
      fullDescription: `A comprehensive e-commerce solution featuring real-time inventory management, 
      secure payment processing, and a responsive admin dashboard. Built with modern technologies 
      and designed for scalability.
      
      Key features include:
      - Real-time stock updates across multiple warehouses
      - Stripe payment integration with webhook handling
      - Advanced product filtering and search
      - Admin analytics dashboard with charts
      - Automated email notifications`,
      
      thumbnail: "/assets/images/projects/ecommerce-thumb.jpg",
      images: [
        "/assets/images/projects/ecommerce-1.jpg",
        "/assets/images/projects/ecommerce-2.jpg",
        "/assets/images/projects/ecommerce-3.jpg"
      ],
      
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Redux", color: "#764ABC" },
        { name: "Stripe", color: "#008CDD" },
        { name: "AWS S3", color: "#FF9900" }
      ],
      
      category: "Web Application",
      tags: ["Full Stack", "E-Commerce", "Real-time"],
      
      links: {
        live: "https://ecommerce-demo.example.com",
        github: "https://github.com/johndoe/ecommerce-platform",
        case_study: null
      },
      
      featured: true,
      completionDate: "2024-01",
      
      metrics: {
        users: "10,000+",
        performance: "98/100 Lighthouse",
        uptime: "99.9%"
      },
      
      teamSize: "Solo",
      duration: "3 months",
      role: "Full Stack Developer"
    },
    {
      id: 2,
      title: "AI Image Generator",
      slug: "ai-image-generator",
      shortDescription: "Text-to-image app powered by Stable Diffusion",
      fullDescription: `An AI-powered image generation tool that transforms text prompts into 
      stunning visuals using Stable Diffusion. Features include style presets, image editing, 
      and a gallery system.`,
      
      thumbnail: "/assets/images/projects/ai-generator-thumb.jpg",
      images: ["/assets/images/projects/ai-generator-1.jpg"],
      
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Python", color: "#3776AB" },
        { name: "FastAPI", color: "#009688" },
        { name: "Stable Diffusion", color: "#FF6F00" }
      ],
      
      category: "AI/ML",
      tags: ["Machine Learning", "Generative AI", "Web App"],
      
      links: {
        live: "https://ai-generator.example.com",
        github: "https://github.com/johndoe/ai-image-gen",
        case_study: null
      },
      
      featured: true,
      completionDate: "2023-11",
      
      teamSize: "Solo",
      duration: "2 months",
      role: "Full Stack Developer"
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      slug: "task-dashboard",
      shortDescription: "Kanban-style project management tool",
      fullDescription: `A collaborative task management system with drag-and-drop functionality, 
      real-time updates, and team collaboration features.`,
      
      thumbnail: "/assets/images/projects/task-dash-thumb.jpg",
      images: ["/assets/images/projects/task-dash-1.jpg"],
      
      technologies: [
        { name: "Next.js", color: "#000000" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "Prisma", color: "#2D3748" }
      ],
      
      category: "Web Application",
      tags: ["Productivity", "SaaS", "Real-time"],
      
      links: {
        live: "https://taskdash.example.com",
        github: "https://github.com/johndoe/task-dashboard",
        case_study: null
      },
      
      featured: false,
      completionDate: "2023-08",
      
      teamSize: "2 developers",
      duration: "4 months",
      role: "Lead Frontend Developer"
    }
  ],

  // Categories for filtering
  categories: [
    { id: "all", name: "All Projects", icon: "grid" },
    { id: "web", name: "Web Applications", icon: "monitor" },
    { id: "mobile", name: "Mobile Apps", icon: "smartphone" },
    { id: "ai", name: "AI/ML", icon: "brain" },
    { id: "design", name: "Design", icon: "palette" }
  ],

  // Display settings
  displaySettings: {
    projectsPerPage: 6,
    enableFiltering: true,
    enableSearch: true,
    defaultSort: "featured", // featured, recent, alphabetical
    gridColumns: {
      desktop: 3,
      tablet: 2,
      mobile: 1
    }
  }
};
```

### 5. Experience Configuration (`config/experienceConfig.js`)

```javascript
export const experienceConfig = {
  experiences: [
    {
      id: 1,
      company: "Tech Corp",
      logo: "/assets/images/company-logos/techcorp.png",
      position: "Senior Full Stack Developer",
      employmentType: "Full-time",
      location: "San Francisco, CA",
      locationType: "Hybrid",
      
      duration: {
        start: "2022-01",
        end: null, // null means current
        startFormatted: "Jan 2022",
        endFormatted: "Present"
      },
      
      description: "Leading development of cloud-based SaaS platform serving 100K+ users",
      
      responsibilities: [
        "Led team of 5 developers in building microservices architecture",
        "Architected and implemented real-time notification system using WebSockets",
        "Reduced API response time by 60% through optimization and caching strategies",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with design and product teams for feature planning"
      ],
      
      achievements: [
        "Increased application performance by 60%",
        "Reduced deployment time from 2 hours to 15 minutes",
        "Implemented CI/CD pipeline, reducing bugs by 40%",
        "Led successful migration to microservices architecture"
      ],
      
      technologies: [
        "React", "Node.js", "TypeScript", "PostgreSQL", 
        "Redis", "Docker", "Kubernetes", "AWS"
      ],
      
      projects: [
        {
          name: "Analytics Dashboard",
          description: "Built real-time analytics platform processing 1M+ events daily"
        }
      ],
      
      current: true
    },
    {
      id: 2,
      company: "StartupXYZ",
      logo: "/assets/images/company-logos/startupxyz.png",
      position: "Full Stack Developer",
      employmentType: "Full-time",
      location: "Remote",
      locationType: "Remote",
      
      duration: {
        start: "2020-03",
        end: "2021-12",
        startFormatted: "Mar 2020",
        endFormatted: "Dec 2021"
      },
      
      description: "Core team member building MVP and scaling product to 10K users",
      
      responsibilities: [
        "Developed RESTful APIs and integrated third-party services",
        "Implemented responsive UI components using React",
        "Designed and maintained database schemas",
        "Participated in agile ceremonies and sprint planning"
      ],
      
      achievements: [
        "Built MVP that secured $2M seed funding",
        "Grew user base from 0 to 10,000 in 6 months",
        "Implemented payment system processing $100K+ monthly"
      ],
      
      technologies: [
        "React", "Express.js", "MongoDB", "Stripe API", 
        "Jest", "GitHub Actions"
      ],
      
      projects: [],
      
      current: false
    },
    {
      id: 3,
      company: "Digital Agency Co",
      logo: "/assets/images/company-logos/agency.png",
      position: "Junior Web Developer",
      employmentType: "Full-time",
      location: "New York, NY",
      locationType: "On-site",
      
      duration: {
        start: "2019-06",
        end: "2020-02",
        startFormatted: "Jun 2019",
        endFormatted: "Feb 2020"
      },
      
      description: "Built websites and applications for various clients across industries",
      
      responsibilities: [
        "Developed custom WordPress themes and plugins",
        "Created responsive landing pages and marketing sites",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Maintained and updated existing client websites"
      ],
      
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved page load speeds by average of 45%",
        "Received 5-star client ratings consistently"
      ],
      
      technologies: [
        "HTML", "CSS", "JavaScript", "jQuery", 
        "WordPress", "PHP", "MySQL"
      ],
      
      projects: [],
      
      current: false
    }
  ],

  // Timeline display settings
  timelineSettings: {
    showDuration: true,
    showTechnologies: true,
    expandByDefault: false,
    animateOnScroll: true
  }
};
```

### 6. Education Configuration (`config/educationConfig.js`)

```javascript
export const educationConfig = {
  education: [
    {
      id: 1,
      institution: "University of California",
      logo: "/assets/images/education/uc-logo.png",
      degree: "Bachelor of Science",
      field: "Computer Science",
      minor: "Mathematics",
      
      duration: {
        start: "2015-09",
        end: "2019-05",
        startFormatted: "Sep 2015",
        endFormatted: "May 2019"
      },
      
      location: "Berkeley, CA",
      gpa: "3.8",
      gpaScale: "4.0",
      
      honors: [
        "Summa Cum Laude",
        "Dean's List (All Semesters)",
        "Academic Excellence Award 2019"
      ],
      
      relevantCoursework: [
        "Data Structures and Algorithms",
        "Database Systems",
        "Machine Learning",
        "Computer Networks",
        "Software Engineering",
        "Web Development",
        "Operating Systems",
        "Artificial Intelligence"
      ],
      
      activities: [
        "President, Computer Science Club",
        "Member, Association for Computing Machinery (ACM)",
        "Teaching Assistant for Intro to Programming"
      ],
      
      thesis: {
        title: "Real-time Object Detection Using Deep Learning",
        advisor: "Dr. Jane Smith",
        url: "/assets/thesis.pdf"
      }
    },
    {
      id: 2,
      institution: "Tech Academy",
      logo: "/assets/images/education/academy-logo.png",
      degree: "Bootcamp Certificate",
      field: "Full Stack Web Development",
      
      duration: {
        start: "2019-01",
        end: "2019-04",
        startFormatted: "Jan 2019",
        endFormatted: "Apr 2019"
      },
      
      location: "San Francisco, CA",
      
      description: "Intensive 12-week program focused on modern web development technologies",
      
      relevantCoursework: [
        "React & Redux",
        "Node.js & Express",
        "MongoDB",
        "RESTful API Design",
        "Authentication & Security",
        "Deployment & DevOps"
      ],
      
      projects: [
        "Built full-stack social media application",
        "Developed e-commerce platform with payment integration"
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      issuerLogo: "/assets/images/certifications/aws.png",
      issueDate: "2023-06",
      expiryDate: "2026-06",
      credentialId: "AWS-SAA-123456",
      credentialUrl: "https://www.credly.com/badges/...",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"]
    },
    {
      id: 2,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      issuerLogo: "/assets/images/certifications/mongodb.png",
      issueDate: "2022-09",
      expiryDate: null,
      credentialId: "MONGO-DEV-789012",
      credentialUrl: "https://university.mongodb.com/...",
      skills: ["MongoDB", "Database Design", "Aggregation"]
    },
    {
      id: 3,
      name: "React Professional Certificate",
      issuer: "Meta (via Coursera)",
      issuerLogo: "/assets/images/certifications/meta.png",
      issueDate: "2021-11",
      expiryDate: null,
      credentialId: "COURSERA-REACT-345678",
      credentialUrl: "https://www.coursera.org/...",
      skills: ["React", "JavaScript", "Frontend Development"]
    }
  ],

  // Display settings
  displaySettings: {
    showGPA: true,
    showCoursework: true,
    showActivities: true,
    groupCertifications: true,
    sortBy: "recent" // recent, alphabetical
  }
};
```

### 7. Life/Personal Configuration (`config/lifeConfig.js`)

```javascript
export const lifeConfig = {
  philosophy: "Code. Create. Inspire. Repeat.",
  
  tagline: "Beyond the keyboard, I'm an explorer, creator, and lifelong learner",
  
  interests: [
    {
      id: 1,
      name: "Photography",
      icon: "camera",
      emoji: "📷",
      description: "Capturing moments and telling stories through the lens. Specializing in landscape and street photography.",
      images: [
        "/assets/images/life/photography-1.jpg",
        "/assets/images/life/photography-2.jpg"
      ],
      stats: {
        label: "Photos Taken",
        value: "5,000+"
      },
      link: "https://instagram.com/johndoe_photo"
    },
    {
      id: 2,
      name: "Travel",
      icon: "plane",
      emoji: "✈️",
      description: "Exploring new cultures and cuisines around the world. Always planning the next adventure.",
      places: [
        { name: "Tokyo, Japan", flag: "🇯🇵", year: 2023 },
        { name: "Paris, France", flag: "🇫🇷", year: 2022 },
        { name: "Barcelona, Spain", flag: "🇪🇸", year: 2022 },
        { name: "Iceland", flag: "🇮🇸", year: 2021 },
        { name: "New Zealand", flag: "🇳🇿", year: 2020 }
      ],
      stats: {
        label: "Countries Visited",
        value: "25"
      }
    },
    {
      id: 3,
      name: "Music Production",
      icon: "music",
      emoji: "🎵",
      description: "Creating electronic music and experimenting with sound design in my home studio.",
      equipment: ["Ableton Live", "MIDI Controllers", "Synthesizers"],
      stats: {
        label: "Tracks Produced",
        value: "30+"
      },
      link: "https://soundcloud.com/johndoe"
    },
    {
      id: 4,
      name: "Fitness & Running",
      icon: "activity",
      emoji: "🏃",
      description: "Marathon runner and fitness enthusiast. Running clears my mind and fuels creativity.",
      achievements: [
        "Completed 3 marathons",
        "Half-marathon PR: 1:35:24",
        "Running streak: 100+ days"
      ],
      stats: {
        label: "Miles Run (2024)",
        value: "1,200+"
      }
    },
    {
      id: 5,
      name: "Reading",
      icon: "book",
      emoji: "📚",
      description: "Avid reader of sci-fi, philosophy, and technical books. Always have a book on my nightstand.",
      currentRead: "The Pragmatic Programmer",
      favoriteGenres: ["Science Fiction", "Philosophy", "Technology"],
      stats: {
        label: "Books Read (2024)",
        value: "24"
      }
    }
  ],

  funFacts: [
    "☕ Can't start coding without coffee",
    "🌙 Night owl - most productive after 10 PM",
    "🎮 Speedrunner of retro video games",
    "🍕 Pizza is my debugging fuel",
    "🎯 Solved Rubik's cube in under 30 seconds",
    "🐶 Proud dog parent to a Golden Retriever",
    "🧗 Rock climbing on weekends",
    "🎨 Learning watercolor painting"
  ],

  timeline: [
    {
      year: 2024,
      title: "Launched Personal Portfolio",
      description: "Built this website with React and Three.js",
      type: "project"
    },
    {
      year: 2023,
      title: "First Marathon",
      description: "Completed SF Marathon in 3:45:30",
      type: "achievement"
    },
    {
      year: 2022,
      title: "Backpacked Through Europe",
      description: "3-month solo adventure across 12 countries",
      type: "travel"
    },
    {
      year: 2021,
      title: "Started Photography Hobby",
      description: "Bought first DSLR and fell in love with the craft",
      type: "hobby"
    }
  ],

  gallery: [
    {
      image: "/assets/images/life/gallery-1.jpg",
      caption: "Sunset in Santorini",
      category: "travel"
    },
    {
      image: "/assets/images/life/gallery-2.jpg",
      caption: "Marathon finish line",
      category: "fitness"
    },
    {
      image: "/assets/images/life/gallery-3.jpg",
      caption: "Studio setup",
      category: "music"
    },
    {
      image: "/assets/images/life/gallery-4.jpg",
      caption: "Street photography, Tokyo",
      category: "photography"
    }
  ],

  quotes: [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    }
  ],

  // Display settings
  displaySettings: {
    showTimeline: true,
    showGallery: true,
    showQuotes: false,
    galleryLayout: "masonry", // masonry, grid
    enableLightbox: true
  }
};
```

### 8. Navigation Configuration (`config/navigationConfig.js`)

```javascript
export const navigationConfig = {
  // Main navigation items
  navItems: [
    { id: "hero", label: "Home", href: "#hero", icon: "home" },
    { id: "skills", label: "Skills", href: "#skills", icon: "code" },
    { id: "projects", label: "Projects", href: "#projects", icon: "briefcase" },
    { id: "experience", label: "Experience", href: "#experience", icon: "trending-up" },
    { id: "education", label: "Education", href: "#education", icon: "graduation-cap" },
    { id: "life", label: "My Life", href: "#life", icon: "heart" }
  ],

  // Navigation behavior
  behavior: {
    sticky: true,
    hideOnScroll: false,
    showProgressBar: true,
    smoothScroll: true,
    offset: 80 // Offset for fixed header
  },

  // Mobile menu
  mobileMenu: {
    breakpoint: 768,
    position: "right", // left, right, full
    animation: "slide", // slide, fade, scale
    overlay: true
  },

  // Social links in navigation (optional)
  socialLinks: [
    { platform: "github", url: "https://github.com/johndoe", icon: "github" },
    { platform: "linkedin", url: "https://linkedin.com/in/johndoe", icon: "linkedin" },
    { platform: "twitter", url: "https://twitter.com/johndoe", icon: "twitter" }
  ],

  // Logo/Brand
  brand: {
    text: "JD",
    image: null, // or path to logo image
    showText: true
  },

  // Call-to-action button
  cta: {
    text: "Download Resume",
    href: "/assets/resume.pdf",
    show: true,
    style: "primary" // primary, secondary, outline
  }
};
```

---

## Component Architecture

### Shared Components Pattern

All shared components follow this structure:

```jsx
// components/shared/Button/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';
import clsx from 'clsx';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon = null,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </motion.button>
  );
};
```

---

## Custom Hooks

### 1. useScrollAnimation Hook
```javascript
// hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
};
```

### 2. useWindowSize Hook
```javascript
// hooks/useWindowSize.js
import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
```

---

## Animation Standards

### Framer Motion Variants
```javascript
// utils/animationHelpers.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

---

## Performance Optimization

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading for all images
- Responsive images with srcset
- Optimize image sizes (max 200KB per image)

### Code Splitting
```javascript
// App.jsx
import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./components/Hero/Hero'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Hero />
      <Skills />
      <Projects />
      {/* ... */}
    </Suspense>
  );
}
```

### 3D Performance
- Limit polygon count
- Use lower resolution for mobile
- Implement level-of-detail (LOD)
- Dispose of unused geometries and materials

---

## Accessibility Standards

### ARIA Labels
```jsx
<button aria-label="Download Resume" aria-describedby="resume-desc">
  <DownloadIcon />
</button>
<span id="resume-desc" className="sr-only">
  Download John Doe's resume in PDF format
</span>
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators
- Logical tab order
- Skip to content link

### Screen Reader Support
```css
/* utilities.css */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Deployment Configuration

### package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "lint": "eslint . --ext js,jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,css}\""
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Your GitHub repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
```

### .gitignore
```
# dependencies
node_modules/
.pnp
.pnp.js

# testing
coverage/

# production
build/
dist/

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
```

---

## Update Workflow

### How to Update Portfolio Content

1. **Update Personal Info**:
   ```bash
   # Edit the relevant config file
   nano src/config/heroConfig.js
   ```

2. **Add New Project**:
   ```bash
   # Edit projects config
   nano src/config/projectsConfig.js
   # Add project images to public/assets/images/projects/
   # Update the projects array with new entry
   ```

3. **Update Skills**:
   ```bash
   # Edit skills config
   nano src/config/skillsConfig.js
   # Add skill icons to public/assets/icons/technologies/
   ```

4. **Deploy Changes**:
   ```bash
   git add .
   git commit -m "Update: [description of changes]"
   git push origin main
   npm run deploy
   ```

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

---

## Testing Checklist

### Before Deployment
- [ ] All images optimized and loading correctly
- [ ] All links working (internal and external)
- [ ] Resume PDF accessible and downloads correctly
- [ ] All animations smooth (60fps)
- [ ] Mobile responsive on all sections
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Cross-browser testing complete
- [ ] Accessibility audit passed
- [ ] Config files all updated with real data
- [ ] 3D elements performing well on low-end devices

---

## Documentation Files to Create

1. **README.md** - Project overview and setup instructions
2. **DEPLOYMENT_GUIDE.md** - Detailed deployment steps
3. **CONFIGURATION_GUIDE.md** - How to update content
4. **DESIGN_SYSTEM.md** - Color palette, typography, components
5. **CHANGELOG.md** - Track updates and versions

---

This specification provides the complete technical foundation for your portfolio website. The modular configuration system allows you to update all content without touching component code, making maintenance simple and efficient.
