import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { heroConfig } from '../../config/heroConfig';
import CountUp from '../shared/CountUp/CountUp';

function parseStatValue(rawValue) {
  if (typeof rawValue === 'number') {
    return { isCountable: true, target: rawValue, trailingText: '' };
  }

  const normalized = String(rawValue).trim();
  const match = normalized.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { isCountable: false, text: normalized };
  }

  return {
    isCountable: true,
    target: Number(match[1]),
    trailingText: match[2] ?? '',
  };
}

export default function Hero({ onExplore }) {
  const [loaded, setLoaded] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.25 });
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const splineRef = useRef(null);
  const wasInViewRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.2);
      setScrollOpacity(Math.max(0, 1 - progress));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (heroInView && !wasInViewRef.current && splineRef.current && loaded) {
      try {
        const spline = splineRef.current;
        spline.emitEvent('start', 'Camera 2');
      } catch (error) {
        console.warn('Could not restart Spline animation:', error);
      }
    }
    wasInViewRef.current = heroInView;
  }, [heroInView, loaded]);

  return (
    <section ref={heroRef} className="relative flex h-screen items-center px-6 md:px-16">
      {!loaded && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-violet-200">
          Loading 3D Scene...
        </div>
      )}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          opacity: scrollOpacity > 0 && loaded ? scrollOpacity : 0,
          visibility: scrollOpacity > 0 ? 'visible' : 'hidden',
          pointerEvents: scrollOpacity > 0 ? 'auto' : 'none',
        }}
      >
        <Spline
          scene="https://prod.spline.design/ZGoOOliZGa2HtjrQ/scene.splinecode"
          onLoad={(spline) => {
            splineRef.current = spline;
            setLoaded(true);
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between px-6 md:px-16">
        <div className="max-w-xl">
          <Fade triggerOnce direction="up" duration={700}>
            <p className="mb-2 text-base text-zinc-300 md:text-2xl">Hello! I'm</p>
            <h1 className="gradient-text text-4xl font-semibold uppercase tracking-wide md:text-6xl">
              {heroConfig.name}
            </h1>
          </Fade>
          <p className="mt-4 max-w-md text-sm text-zinc-300 md:text-lg">
            <TypeAnimation
              sequence={[
                heroConfig.tagline,
                1300,
                ...heroConfig.carouselItems.flatMap((item) => [item, 900]),
              ]}
              wrapper="span"
              speed={56}
              repeat={Infinity}
            />
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onExplore('about', { fast: true })}
              className="inline-flex items-center rounded-full bg-violet-500/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-violet-400"
            >
              Explore More
              <ArrowRight size={16} className="ml-2" />
            </button>
            <a
              href={heroConfig.resumeUrl}
              download={heroConfig.resumeFileName}
              className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-100 transition hover:bg-white/15"
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
        <div ref={statsRef} className="hidden w-full max-w-xs flex-col items-start gap-5 md:ml-auto md:flex">
          {statsInView &&
            heroConfig.stats.map((stat) => {
              const parsedValue = parseStatValue(stat.value);
              const isInfinity = !parsedValue.isCountable && parsedValue.text?.trim() === '∞';

              return (
                <div key={stat.id} className="w-full px-2 py-1 text-left">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">{stat.label}</p>
                  <div className="mt-1 flex items-baseline justify-start gap-2">
                    <span
                      className={`${isInfinity ? 'shiny-number' : 'text-violet-300'} text-4xl md:text-5xl font-semibold leading-none`}
                    >
                      {parsedValue.isCountable ? (
                        <>
                          <CountUp to={parsedValue.target} />
                          {parsedValue.trailingText}
                        </>
                      ) : (
                        parsedValue.text
                      )}
                    </span>
                    <span className="text-xs uppercase tracking-[0.12em] text-zinc-300">{stat.suffix}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
