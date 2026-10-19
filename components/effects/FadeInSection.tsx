import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../../src/lib/gsap';

export interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  yOffset?: number; // in pixels (default 24)
  threshold?: number; // 0 to 1
  rootMargin?: string;
  once?: boolean;
  id?: string;
  as?: 'div' | 'section';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 750,
  yOffset = 24,
  threshold = 0.08,
  once = true,
  id,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, clearProps: 'all' });
        return;
      }

      // Convert threshold to approximate start position
      const startPercent = Math.max(50, Math.min(95, 100 - Math.round(threshold * 100)));
      const startPosition = `top ${startPercent}%`;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration / 1000,
          delay: delay / 1000,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: startPosition,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            once,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [delay, duration, yOffset, threshold, once] }
  );

  return (
    <Component
      ref={containerRef as any}
      id={id}
      className={className}
    >
      {children}
    </Component>
  );
};

export default FadeInSection;
