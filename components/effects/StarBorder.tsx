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
  speed = '6s',
  children,
  style = {},
  onClick,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[2rem] p-[1px] ${className}`}
      onClick={onClick}
      style={style}
      {...rest}
    >
      <div
        className="absolute inset-[-100%] aspect-square animate-spin"
        style={{
          animationDuration: speed,
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 60%, ${color} 80%, #ffffff 90%, ${color} 95%, transparent 100%)`,
        }}
      />
      <div className="relative z-10 w-full h-full rounded-[inherit] bg-[#0c0c0c]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
