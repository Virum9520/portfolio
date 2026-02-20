import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!media.matches || reduceMotion.matches) return undefined;

    const onMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    };

    const tick = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.14;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentRef.current.x - 18}px, ${currentRef.current.y - 18}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-[42px] w-[42px] rounded-full bg-white/95 mix-blend-difference shadow-[0_0_35px_rgba(255,255,255,0.95)] md:block"
    />
  );
}
