import React, { useRef, useCallback, useState } from 'react';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string; // e.g. "24 100 50" for HSL
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  colors?: string[];
  onClick?: () => void;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  backgroundColor = '#0c0d12',
  borderRadius = 28,
  glowIntensity = 0.8,
  colors = ['#f97316', '#38bdf8', '#fb923c'],
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, opacity: 0 });

  const handlePointerMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y, opacity: 1 });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setCoords(prev => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className={`relative p-[1px] group transition-all duration-500 overflow-hidden ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)`,
      }}
    >
      {/* Interactive Cursor Tracking Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: coords.opacity * glowIntensity,
          background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, ${colors[0]}, ${colors[1]} 50%, transparent 80%)`,
          borderRadius: `${borderRadius}px`,
        }}
      />
      
      {/* Card Inner Container */}
      <div
        className="relative z-10 w-full h-full rounded-[inherit] overflow-hidden transition-colors"
        style={{
          backgroundColor,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
