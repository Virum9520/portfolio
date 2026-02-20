import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Life from './components/Life/Life';
import ExperienceEducationTimeline from './components/ExperienceEducationTimeline';
import CursorFollower from './components/shared/CursorFollower/CursorFollower';

const SECTION_IDS = ['home', 'about', 'timeline', 'projects', 'skills', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const lenisRef = useRef(null);

  function scrollToSection(targetId, options = {}) {
    const target = document.getElementById(targetId);
    if (!target) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: options.fast ? 0.85 : 1.25,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return undefined;

    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const sectionEls = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sectionEls.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.4, 0.65, 0.8] }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <CursorFollower />
      <div className="relative z-20">
        <section id="home" className="min-h-screen">
          <Hero onExplore={scrollToSection} />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="timeline" className="min-h-screen">
          <ExperienceEducationTimeline />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects onExplore={scrollToSection} />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills onExplore={scrollToSection} />
        </section>
        <section id="contact" className="min-h-[72vh]">
          <Life />
        </section>
      </div>
    </div>
  );
}

export default App;
