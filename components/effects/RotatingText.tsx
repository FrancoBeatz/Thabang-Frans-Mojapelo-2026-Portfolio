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
  className = '',
  badgeClassName = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`inline-flex items-center justify-start overflow-hidden relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className={`inline-block ${badgeClassName}`}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
