import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'Clean Code. Stable Systems. Peak Performance.',
  separator = ' ',
  manualMode = false,
  blurAmount = 3,
  borderColor = '#f97316',
  glowColor = 'rgba(249, 115, 22, 0.4)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.4,
  className = '',
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    const targetWord = wordRefs.current[currentIndex];
    const container = containerRef.current;
    if (!targetWord || !container) return;

    const parentRect = container.getBoundingClientRect();
    const activeRect = targetWord.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className={`relative flex flex-wrap gap-x-4 gap-y-2 justify-center items-center select-none py-4 ${className}`}
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`relative font-display font-bold text-2xl md:text-4xl transition-all duration-300 cursor-pointer ${
              isActive ? 'text-white' : 'text-gray-500'
            }`}
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute pointer-events-none rounded-xl border border-dashed"
        animate={{
          x: focusRect.x - 8,
          y: focusRect.y - 4,
          width: focusRect.width + 16,
          height: focusRect.height + 8,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 24,
        }}
        style={{
          borderColor,
          boxShadow: `0 0 20px ${glowColor}`,
        }}
      >
        <span
          className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 rounded-tl"
          style={{ borderColor }}
        />
        <span
          className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 rounded-tr"
          style={{ borderColor }}
        />
        <span
          className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 rounded-bl"
          style={{ borderColor }}
        />
        <span
          className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 rounded-br"
          style={{ borderColor }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;
