import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { projectsConfig } from '../../config/projectsConfig';

const skillPillClasses = [
  'border-emerald-300/30 bg-emerald-500/10 text-emerald-100',
  'border-cyan-300/30 bg-cyan-500/10 text-cyan-100',
  'border-amber-300/30 bg-amber-500/10 text-amber-100',
  'border-rose-300/30 bg-rose-500/10 text-rose-100',
  'border-indigo-300/30 bg-indigo-500/10 text-indigo-100',
];

function ProjectMedia({ item, index, placeholderGradients, className = '' }) {
  const isPlaceholder = item.thumbnail?.includes('placehold.co');
  const thumbnailSrc = item.thumbnail?.startsWith('/')
    ? `${import.meta.env.BASE_URL}${item.thumbnail.slice(1)}`
    : item.thumbnail;
  const [imageAspectRatio, setImageAspectRatio] = useState(16 / 9);

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth && naturalHeight) {
      setImageAspectRatio(naturalWidth / naturalHeight);
    }
  };

  return (
    <div className={`relative flex h-[clamp(14rem,32vh,18rem)] items-center justify-center overflow-hidden ${className}`}>
      {isPlaceholder ? (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.25),transparent_35%)]" />
        </>
      ) : null}

      {isPlaceholder ? (
        <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.18em] text-zinc-200/90">
          {item.category}
        </div>
      ) : (
        <div className="relative h-[calc(100%-0.75rem)] max-w-[calc(100%-0.75rem)]" style={{ aspectRatio: imageAspectRatio }}>
          <div className="h-full w-full overflow-hidden">
          <img
            src={thumbnailSrc}
            alt={item.title}
            onLoad={handleImageLoad}
            className="h-full w-full object-contain p-1.5 shadow-[0_0_24px_rgba(169,105,255,0.22)]"
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects({ onExplore }) {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const rafRef = useRef(0);
  const [translateX, setTranslateX] = useState(0);

  const visibleProjects = projectsConfig.projects;

  const placeholderGradients = [
    'from-violet-500/40 via-indigo-500/30 to-slate-900',
    'from-fuchsia-500/35 via-purple-500/25 to-slate-900',
    'from-cyan-500/35 via-blue-500/25 to-slate-900',
    'from-emerald-500/35 via-teal-500/25 to-slate-900',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const rail = railRef.current;
      if (!section || !rail) return;

      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight - window.innerHeight, 1);
      const consumed = Math.min(Math.max(-rect.top, 0), total);
      const progress = consumed / total;
      const maxX = Math.max(rail.scrollWidth - window.innerWidth, 0);
      targetXRef.current = progress * maxX;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [visibleProjects.length]);

  useEffect(() => {
    const animate = () => {
      currentXRef.current += (targetXRef.current - currentXRef.current) * 0.085;
      setTranslateX(currentXRef.current);
      rafRef.current = window.requestAnimationFrame(animate);
    };
    rafRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[230vh] px-6 md:px-14">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute left-0 right-0 top-12 z-30 flex flex-col items-center gap-4 text-center">
          <Fade triggerOnce direction="up" duration={700}>
            <div>
              <h2 className="gradient-text text-5xl font-semibold md:text-6xl">
                My <span className="text-violet-300 drop-shadow-[0_0_18px_rgba(196,128,252,0.55)]">Work</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-400">Selected projects with tools and features.</p>
            </div>
          </Fade>
          <button
            type="button"
            onClick={() => onExplore('timeline', { fast: true })}
            className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.15em] text-zinc-200 transition hover:bg-white/10"
          >
            Journey
          </button>
        </div>

        <div
          ref={railRef}
          className=" flex w-max gap-0 pt-40 will-change-transform"
          style={{ transform: `translate3d(-${translateX}px,0,0)` }}
        >
          <a
            href="https://github.com/virum9520"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[62vh] w-[min(60vw,26rem)] items-center justify-center border-r border-white/15 px-10 text-2xl uppercase tracking-[0.18em] text-violet-200 transition hover:text-violet-100"
          >
            Explore More
          </a>
          {visibleProjects.map((item, index) => (
            <article key={item.id} className="flex min-h-[58vh] w-[min(76vw,38rem)] flex-col border-r border-white/15 pr-10">
              {index % 2 === 0 ? (
                <>
                  <div className="pt-12">
                    <span className="text-4xl font-semibold text-zinc-100/90">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-3 text-3xl font-semibold leading-tight text-zinc-100">{item.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-sm uppercase tracking-[0.16em] text-zinc-400">Domain:</span>
                      <span className="rounded-full border border-cyan-300/25 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-50">
                        {item.category}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm uppercase tracking-[0.16em] text-zinc-400">Skills:</span>
                      {item.skills?.map((skill, skillIndex) => (
                        <span
                          key={`${item.id}-${skill}`}
                          className={`rounded-full border px-3 py-1 text-xs ${
                            skillPillClasses[skillIndex % skillPillClasses.length]
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex min-h-[17rem] items-stretch gap-4">
                    <ProjectMedia
                      item={item}
                      index={index}
                      placeholderGradients={placeholderGradients}
                      className="w-2/3"
                    />

                    <div className="flex w-1/3 flex-col items-center justify-center gap-4 text-zinc-300">
                      {item.links?.github && (
                        <a
                          href={item.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-violet-200"
                          aria-label={`${item.title} GitHub`}
                        >
                          <Github size={22} />
                        </a>
                      )}
                      {item.links?.live && (
                        <a
                          href={item.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-[0.14em] transition hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-violet-200"
                          aria-label={`${item.title} Live demo`}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="pt-12">
                    <span className="text-4xl font-semibold text-zinc-100/90">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="mt-5 flex min-h-[17rem] items-stretch gap-4">
                    <ProjectMedia
                      item={item}
                      index={index}
                      placeholderGradients={placeholderGradients}
                      className="w-2/3"
                    />

                    <div className="flex w-1/3 flex-col items-center justify-center gap-3 text-zinc-300">
                      {item.links?.github && (
                        <a
                          href={item.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-violet-200"
                          aria-label={`${item.title} GitHub`}
                        >
                          <Github size={22} />
                        </a>
                      )}
                      {item.links?.live && (
                        <a
                          href={item.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-[0.14em] transition hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-violet-200"
                          aria-label={`${item.title} Live demo`}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pb-8">
                    <h3 className="text-3xl font-semibold leading-tight text-zinc-100">{item.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-sm uppercase tracking-[0.16em] text-zinc-400">Domain:</span>
                      <span className="rounded-full border border-cyan-300/25 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-50">
                        {item.category}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm uppercase tracking-[0.16em] text-zinc-400">Skills:</span>
                      {item.skills?.map((skill, skillIndex) => (
                        <span
                          key={`${item.id}-${skill}`}
                          className={`rounded-full border px-3 py-1 text-xs ${
                            skillPillClasses[skillIndex % skillPillClasses.length]
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
          <a
            href="https://github.com/virum9520"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[62vh] w-[min(60vw,26rem)] items-center justify-center border-r border-white/15 px-10 text-2xl uppercase tracking-[0.18em] text-violet-200 transition hover:text-violet-100"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
