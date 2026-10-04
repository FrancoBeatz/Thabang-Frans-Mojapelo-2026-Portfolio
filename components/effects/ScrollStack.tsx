import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  index,
  total,
  scrollYProgress,
  className = '',
}) => {
  const step = 1 / Math.max(1, total);
  const start = index * step;
  const end = start + step;

  // Scale down slightly as subsequent cards stack on top (subtle depth)
  const scale = useTransform(
    scrollYProgress,
    [start, end, 1],
    [1, 1 - (total - index) * 0.02, 1 - (total - index) * 0.025]
  );

  return (
    <motion.div
      style={{
        scale,
      }}
      className={`sticky top-20 sm:top-24 md:top-28 lg:top-32 rounded-3xl will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStackProps {
  children: React.ReactNode[];
  className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-8 sm:gap-12 pb-16 sm:pb-24 ${className}`}>
      {React.Children.map(children, (child, idx) => (
        <ScrollStackItem
          key={idx}
          index={idx}
          total={React.Children.count(children)}
          scrollYProgress={scrollYProgress}
        >
          {child}
        </ScrollStackItem>
      ))}
    </div>
  );
};

export default ScrollStack;
