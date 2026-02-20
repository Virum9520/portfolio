import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function easeOutCubic(progress) {
  return 1 - (1 - progress) ** 3;
}

function formatNumber(value, decimals, separator) {
  const fixed = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  if (!separator) {
    return fixed;
  }

  const [intPart, decimalPart] = fixed.split('.');
  const sign = intPart.startsWith('-') ? '-' : '';
  const unsigned = sign ? intPart.slice(1) : intPart;
  const separated = unsigned.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decimalPart ? `${sign}${separated}.${decimalPart}` : `${sign}${separated}`;
}

export default function CountUp({
  from = 0,
  to,
  duration = 5,
  delay = 0,
  decimals,
  separator = '',
  className,
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [value, setValue] = useState(from);
  const frameRef = useRef(null);
  const timeoutRef = useRef(null);

  const decimalPlaces = useMemo(() => {
    if (typeof decimals === 'number') {
      return decimals;
    }
    const toString = String(to);
    return toString.includes('.') ? toString.split('.')[1].length : 0;
  }, [decimals, to]);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    const startAnimation = () => {
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const nextValue = from + (to - from) * easeOutCubic(progress);
        setValue(progress >= 1 ? to : nextValue);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    timeoutRef.current = setTimeout(startAnimation, delay * 1000);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, duration, from, inView, to]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(value, decimalPlaces, separator)}
    </span>
  );
}
