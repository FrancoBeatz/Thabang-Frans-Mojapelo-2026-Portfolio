import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../../src/lib/gsap';

export interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  distance?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: string; // e.g. "top 85%"
  once?: boolean;
  ease?: string;
  id?: string;
  as?: React.ElementType;
}

export const GsapReveal: React.FC<GsapRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  distance = 35,
  delay = 0,
  duration = 0.85,
  stagger = 0,
  threshold = 'top 88%',
  once = true,
  ease = 'power3.out',
  id,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (prefersReducedMotion()) {
        gsap.set(containerRef.current, { opacity: 1, clearProps: 'all' });
        return;
      }

      let x = 0;
      let y = 0;
      let scale = 1;

      switch (direction) {
        case 'up':
          y = distance;
          break;
        case 'down':
          y = -distance;
          break;
        case 'left':
          x = distance;
          break;
        case 'right':
          x = -distance;
          break;
        case 'scale':
          scale = 0.94;
          break;
        case 'fade':
        default:
          break;
      }

      const target = stagger > 0 ? containerRef.current.children : containerRef.current;

      gsap.fromTo(
        target,
        {
          opacity: 0,
          x,
          y,
          scale,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          stagger: stagger > 0 ? stagger : undefined,
          ease,
          clearProps: 'transform,opacity,willChange',
          scrollTrigger: {
            trigger: containerRef.current,
            start: threshold,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            once,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [direction, distance, delay, duration, stagger, once, ease] }
  );

  return (
    <Component ref={containerRef} id={id} className={className}>
      {children}
    </Component>
  );
};

export default GsapReveal;
