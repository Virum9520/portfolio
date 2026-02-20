import { useState } from 'react';
import AnimatedContent from './shared/AnimatedContent/AnimatedContent';

const ABOUT_TRACKS = [
  {
    title: 'AI Developer',
    subtitle: 'Building intelligent systems & AI solutions',
    desc: 'Developing AI agents, chatbots, and machine learning systems with production-ready pipelines and reliable model behavior.',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'LLMs', 'NLP'],
  },
  {
    title: 'ML Practitioner',
    subtitle: 'Training and deploying robust ML workflows',
    desc: 'Designing data pipelines, feature engineering, and model evaluation loops to ship accurate and scalable machine learning solutions.',
    tools: ['Scikit-learn', 'PySpark', 'Pandas', 'SciPy', 'MLOps'],
  },
  {
    title: 'Software Developer',
    subtitle: 'Crafting fast, scalable software systems',
    desc: 'Building polished frontends and dependable backend services focused on performance, maintainability, and clean architecture.',
    tools: ['React', 'FastAPI', 'Docker', 'AWS', 'Git'],
  },
];

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardsHovered, setCardsHovered] = useState(false);

  return (
    <div className="relative min-h-screen px-6 py-24 md:px-14">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10">
        <p
          className={`select-none text-[10vw] font-semibold uppercase tracking-[0.08em] transition-colors duration-500 md:text-[8vw] blur-sm ${
            cardsHovered
              ? 'text-violet-300/60'
              : 'text-white/60'
          }`}
        >
          What I do
        </p>
      </div>
      <AnimatedContent
        distance={300}
        direction="vertical"
        reverse={false}
        duration={3}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
        <div
          className="relative ml-auto flex h-[62vh] w-full max-w-xl flex-col gap-3 overflow-hidden md:h-[66vh]"
          onMouseLeave={() => setCardsHovered(false)}
        >
          {ABOUT_TRACKS.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <article
                key={item.title}
                onMouseEnter={() => {
                  setActiveIdx(idx);
                  setCardsHovered(true);
                }}
                className={`group overflow-hidden border border-white/20 px-6 py-5 transition-all duration-500 ${
                  isActive ? 'flex-[1.8] border-violet-300/70 bg-black/20' : 'flex-1 bg-black/10'
                }`}
              >
                <h3 className="text-3xl font-semibold uppercase tracking-wide text-white">{item.title}</h3>
                <p className="mt-2 text-base text-white/80">{item.subtitle}</p>
                <p
                  className={`mt-4 max-w-lg text-sm leading-relaxed text-white/80 transition-all duration-500 ${
                    isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.desc}
                </p>
                <div
                  className={`mt-4 flex flex-wrap gap-2 transition-all duration-500 ${
                    isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-violet-200/40 bg-violet-500/15 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </AnimatedContent>
    </div>
  );
}
