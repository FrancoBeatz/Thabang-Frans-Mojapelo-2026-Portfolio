import React, { useEffect, useRef, useState } from 'react';

export interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  yOffset?: number; // in pixels (default 24)
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  id?: string;
  as?: 'div' | 'section';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  yOffset = 24,
  threshold = 0.08,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  id,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      setAnimationFinished(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      setAnimationFinished(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
            setAnimationFinished(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // When visible, clear the transform after animation completes so sticky/fixed children behave normally
  useEffect(() => {
    if (isVisible && !animationFinished) {
      const timer = setTimeout(() => {
        setAnimationFinished(true);
      }, delay + duration + 50);

      return () => clearTimeout(timer);
    }
  }, [isVisible, animationFinished, delay, duration]);

  const hasTransform = yOffset > 0;

  return (
    <Component
      ref={containerRef}
      id={id}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: !hasTransform || animationFinished
          ? 'none'
          : isVisible
          ? 'translate3d(0, 0, 0)'
          : `translate3d(0, ${yOffset}px, 0)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionProperty: hasTransform ? 'opacity, transform' : 'opacity',
        willChange: animationFinished ? 'auto' : hasTransform ? 'opacity, transform' : 'opacity',
      }}
    >
      {children}
    </Component>
  );
};

export default FadeInSection;
