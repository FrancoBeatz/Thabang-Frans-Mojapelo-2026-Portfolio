import React, { useRef, useState, useCallback } from 'react';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  glowColor = '#f97316',
  backgroundColor = '#0b0b0e',
  borderRadius = 16,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius: `${borderRadius}px` }}
      className={`relative p-[1.5px] overflow-hidden group ${className}`}
    >
      {/* Dynamic Border Gradient Follower */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0.2,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      <div
        style={{
          backgroundColor,
          borderRadius: `${borderRadius - 1.5}px`,
        }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
