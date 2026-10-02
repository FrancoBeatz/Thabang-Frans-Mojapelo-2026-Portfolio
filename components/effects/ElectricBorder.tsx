import React from 'react';

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#f97316',
  speed = '4s',
  className = '',
  style = {},
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`relative inline-flex p-[1px] overflow-hidden rounded-full ${className}`}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
        style={{
          animationDuration: speed,
          background: `conic-gradient(from 90deg at 50% 50%, #00000000 0%, #00000000 65%, ${color} 88%, #ffffff 96%, #00000000 100%)`,
        }}
      />
      <div className="relative z-10 w-full h-full rounded-full bg-black/90 backdrop-blur-md">
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
