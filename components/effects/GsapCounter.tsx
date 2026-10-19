import React, { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../../src/lib/gsap';

interface GsapCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const GsapCounter: React.FC<GsapCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1.6,
  className = '',
}) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const node = countRef.current;
      if (!node) return;

      if (prefersReducedMotion()) {
        node.textContent = `${prefix}${value}${suffix}`;
        return;
      }

      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: node,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (node) {
            node.textContent = `${prefix}${Math.round(counter.val)}${suffix}`;
          }
        },
      });
    },
    { scope: countRef, dependencies: [value, duration, prefix, suffix] }
  );

  return (
    <span ref={countRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default GsapCounter;
