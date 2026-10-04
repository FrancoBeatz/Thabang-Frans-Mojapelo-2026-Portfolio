import React from 'react';

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = '#f97316',
  speed = '5s',
  children,
  style = {},
  onClick,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-2xl p-[1.5px] ${className}`}
      style={style}
      onClick={onClick}
      {...rest}
    >
      <div
        className="absolute inset-[-100%] animate-[spin_5s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${color} 360deg)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 w-full h-full bg-[#0a0a0c] rounded-[calc(1rem-1.5px)]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
