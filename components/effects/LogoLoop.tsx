import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title: string;
  badge?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // duration in seconds
  direction?: 'left' | 'right';
  className?: string;
  gap?: number;
  scaleOnHover?: boolean;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 28,
  direction = 'left',
  className = '',
  gap = 24,
  scaleOnHover = true,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const displayList = [...logos, ...logos, ...logos];

  return (
    <div
      className={`relative overflow-hidden w-full select-none py-4 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Edge Blur Mask */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        className="flex items-center w-max"
        style={{ gap: `${gap}px` }}
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {displayList.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0e1015]/90 border border-white/5 backdrop-blur-md text-gray-300 font-medium text-xs whitespace-nowrap transition-all duration-300 ${
              scaleOnHover ? 'hover:scale-105 hover:border-electric-orange/40 hover:text-white hover:bg-[#151922]' : ''
            }`}
          >
            {item.node && <span className="text-electric-orange">{item.node}</span>}
            {item.src && (
              <img src={item.src} alt={item.alt || item.title} className="w-4 h-4 object-contain" />
            )}
            <span className="font-semibold">{item.title}</span>
            {item.badge && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
