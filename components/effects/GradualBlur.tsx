import React from 'react';

interface GradualBlurProps {
  position?: 'top' | 'bottom';
  height?: string;
  strength?: number;
  divCount?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GradualBlur: React.FC<GradualBlurProps> = ({
  position = 'bottom',
  height = '6rem',
  strength = 2,
  divCount = 5,
  className = '',
  style = {}
}) => {
  const divs = [];
  const increment = 100 / divCount;

  for (let i = 1; i <= divCount; i++) {
    const progress = i / divCount;
    const blurValue = (0.0625 * (progress * divCount + 1) * strength).toFixed(3);
    const p1 = Math.round((increment * i - increment) * 10) / 10;
    const p2 = Math.round(increment * i * 10) / 10;

    const direction = position === 'top' ? 'to top' : 'to bottom';
    const gradient = `transparent ${p1}%, black ${p2}%`;

    divs.push(
      <div
        key={i}
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: `linear-gradient(${direction}, ${gradient})`,
          WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
          backdropFilter: `blur(${blurValue}rem)`,
          WebkitBackdropFilter: `blur(${blurValue}rem)`,
        }}
      />
    );
  }

  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none z-20 overflow-hidden ${
        position === 'top' ? 'top-0' : 'bottom-0'
      } ${className}`}
      style={{ height, ...style }}
    >
      {divs}
    </div>
  );
};

export default GradualBlur;
