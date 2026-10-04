import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence: string;
  separator?: string;
  borderColor?: string;
  glowColor?: string;
  className?: string;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  separator = ' ',
  borderColor = '#f97316',
  glowColor = 'rgba(249, 115, 22, 0.4)',
  className = '',
}) => {
  const words = sentence.split(separator);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative inline-flex flex-wrap items-center gap-2 ${className}`}>
      {words.map((word, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-2 py-1 cursor-pointer transition-all duration-300"
          >
            {isHovered && (
              <motion.div
                layoutId="trueFocusFrame"
                className="absolute inset-0 rounded-lg border-2 pointer-events-none z-0"
                style={{
                  borderColor,
                  boxShadow: `0 0 16px ${glowColor}`,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 font-bold transition-all duration-300 ${
                isHovered
                  ? 'text-white scale-105 inline-block'
                  : isAnyHovered
                  ? 'text-gray-500 opacity-60 blur-[0.4px]'
                  : 'text-gray-200'
              }`}
            >
              {word}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TrueFocus;
