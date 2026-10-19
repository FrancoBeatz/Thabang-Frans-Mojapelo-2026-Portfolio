import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins once in browser environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  // Default configurations for smooth, modern feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
}

/**
 * Checks if the user has requested reduced motion in their OS / browser settings
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export { gsap, ScrollTrigger, useGSAP };
