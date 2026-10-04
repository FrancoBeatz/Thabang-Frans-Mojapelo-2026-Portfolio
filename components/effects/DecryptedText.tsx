import React, { useState, useEffect, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = DEFAULT_CHARS,
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-electric-orange/80',
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(''))).filter((c) => c !== ' ')
    : characters.split('');

  const shuffle = (str: string) => {
    if (availableChars.length === 0) return str;
    return str
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (revealedIndices.has(i)) return text[i];
        return availableChars[Math.floor(Math.random() * availableChars.length)];
      })
      .join('');
  };

  const startScrambling = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    let iteration = 0;
    const totalLength = text.length;
    const currentRevealed = new Set<number>();

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      iteration++;

      if (sequential) {
        if (revealDirection === 'start') {
          const count = Math.floor((iteration / maxIterations) * totalLength);
          for (let i = 0; i < count; i++) currentRevealed.add(i);
        } else if (revealDirection === 'end') {
          const count = Math.floor((iteration / maxIterations) * totalLength);
          for (let i = totalLength - 1; i >= totalLength - count; i--) currentRevealed.add(i);
        } else {
          const mid = Math.floor(totalLength / 2);
          const spread = Math.floor(((iteration / maxIterations) * totalLength) / 2);
          for (let i = Math.max(0, mid - spread); i <= Math.min(totalLength - 1, mid + spread); i++) {
            currentRevealed.add(i);
          }
        }
      }

      setRevealedIndices(new Set(currentRevealed));

      if (iteration >= maxIterations || currentRevealed.size >= totalLength) {
        setDisplayText(text);
        setIsScrambling(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setDisplayText(shuffle(text));
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startScrambling();
          }
        },
        { threshold: 0.2 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, text]);

  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (animateOn === 'hover') {
      startScrambling();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono cursor-default ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText.split('').map((char, index) => {
        const isRevealed = revealedIndices.has(index) || !isScrambling;
        return (
          <span
            key={index}
            className={`${isRevealed ? className : encryptedClassName} transition-colors duration-100`}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default DecryptedText;
