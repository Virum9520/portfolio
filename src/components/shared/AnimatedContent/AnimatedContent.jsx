import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

const easeMap = {
  'power1.out': 'power1.out',
  'power2.out': 'power2.out',
  'power3.out': 'power3.out',
  'power4.out': 'power4.out',
  'power1.in': 'power1.in',
  'power2.in': 'power2.in',
  'power3.in': 'power3.in',
  'power4.in': 'power4.in',
  'power1.inOut': 'power1.inOut',
  'power2.inOut': 'power2.inOut',
  'power3.inOut': 'power3.inOut',
  'power4.inOut': 'power4.inOut',
  'back.out': 'back.out',
  'back.in': 'back.in',
  'back.inOut': 'back.inOut',
  'elastic.out': 'elastic.out',
  'elastic.in': 'elastic.in',
  'elastic.inOut': 'elastic.inOut',
  'bounce.out': 'bounce.out',
  'bounce.in': 'bounce.in',
  'bounce.inOut': 'bounce.inOut',
  'sine.out': 'sine.out',
  'sine.in': 'sine.in',
  'sine.inOut': 'sine.inOut',
  'expo.out': 'expo.out',
  'expo.in': 'expo.in',
  'expo.inOut': 'expo.inOut',
  'circ.out': 'circ.out',
  'circ.in': 'circ.in',
  'circ.inOut': 'circ.inOut',
};

export default function AnimatedContent({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onDisappearanceComplete,
  className = '',
}) {
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false, // Allow reanimation when scrolling back into view
  });

  // Set initial state immediately when element is available (before intersection observer checks)
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const isVertical = direction === 'vertical';
    
    // For sliding UP from below: start with positive Y (below), animate to 0
    // When reverse=false and vertical: content starts below (positive Y)
    // When reverse=true and vertical: content starts above (negative Y)
    const initialY = isVertical ? (reverse ? -distance : distance) : 0;
    const initialX = isVertical ? 0 : (reverse ? -distance : distance);
    
    // Set initial hidden state immediately - this ensures content is hidden on mount
    gsap.set(element, {
      opacity: initialOpacity,
      x: initialX,
      y: initialY,
      scale: scale,
    });
  }, [direction, reverse, distance, initialOpacity, scale]);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const isVertical = direction === 'vertical';
    
    // For sliding UP from below: start with positive Y (below), animate to 0
    // When reverse=false and vertical: content starts below (positive Y)
    // When reverse=true and vertical: content starts above (negative Y)
    const initialY = isVertical ? (reverse ? -distance : distance) : 0;
    const initialX = isVertical ? 0 : (reverse ? -distance : distance);
    
    if (inView) {
      // Reset to initial state first, then animate
      gsap.set(element, {
        opacity: initialOpacity,
        x: initialX,
        y: initialY,
        scale: scale,
      });

      const animationProps = {
        opacity: animateOpacity ? 1 : initialOpacity,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: easeMap[ease] || ease,
        onComplete: () => {
          hasAnimatedRef.current = true;
          if (onComplete) onComplete();
        },
      };

      // Kill any existing animation before starting new one
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, animationProps);

      // Handle disappearance if configured
      if (disappearAfter > 0) {
        const disappearTimer = setTimeout(() => {
          gsap.to(element, {
            opacity: 0,
            duration: disappearDuration,
            ease: easeMap[disappearEase] || disappearEase,
            onComplete: onDisappearanceComplete,
          });
        }, (delay + duration + disappearAfter) * 1000);

        return () => {
          clearTimeout(disappearTimer);
          if (animationRef.current) {
            animationRef.current.kill();
          }
        };
      }
    } else {
      // When out of view, reset to initial state for reanimation
      if (hasAnimatedRef.current) {
        gsap.set(element, {
          opacity: initialOpacity,
          x: initialX,
          y: initialY,
          scale: scale,
        });
        hasAnimatedRef.current = false;
      } else {
        // Set initial state only if not yet animated
        gsap.set(element, {
          opacity: initialOpacity,
          x: initialX,
          y: initialY,
          scale: scale,
        });
      }
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [
    inView,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    delay,
    onComplete,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onDisappearanceComplete,
  ]);

  return (
    <div
      ref={(node) => {
        ref(node);
        elementRef.current = node;
      }}
      className={className}
    >
      {children}
    </div>
  );
}
