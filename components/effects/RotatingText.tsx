import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
  badgeClassName?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  interval = 2800,
  className = 'text-electric-orange font-bold inline-block',
  badgeClassName = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className={`inline-flex items-center overflow-hidden align-baseline ${badgeClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 22, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -22, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
