import React, { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../../src/lib/gsap';

export interface GsapStaggerProps {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  threshold?: string;
  once?: boolean;
  delay?: number;
}

export const GsapStagger: React.FC<GsapStaggerProps> = ({
  children,
  className = '',
  itemSelector = '.gsap-stagger-item',
  stagger = 0.12,
  duration = 0.75,
  yOffset = 30,
  threshold = 'top 85%',
  once = true,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = itemSelector
        ? containerRef.current.querySelectorAll(itemSelector)
        : containerRef.current.children;

      if (!items || items.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, clearProps: 'all' });
        return;
      }

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: yOffset,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          stagger: {
            each: stagger,
            from: 'start',
          },
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: containerRef.current,
            start: threshold,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            once,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [itemSelector, stagger, duration, yOffset, once, delay] }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GsapStagger;
