import React from 'react';

interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  className = '',
  borderRadius = 24,
  style = {},
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden border border-white/10 bg-[#0e1118]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        ...style,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/20 pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
