import React from 'react';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title: string;
  badge?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 28,
  direction = 'left',
  className = '',
}) => {
  // Duplicate array to achieve seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={`relative w-full overflow-hidden mask-linear-gradient py-4 ${className}`}>
      {/* Edge Blur Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#070709] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#070709] to-transparent" />

      <div
        className="flex gap-6 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}`,
        }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-electric-orange/40 hover:bg-white/[0.06] transition-all duration-300 group cursor-default shadow-sm"
          >
            {logo.node && <span className="text-electric-orange group-hover:scale-110 transition-transform">{logo.node}</span>}
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{logo.title}</span>
            {logo.badge && (
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-electric-orange/10 text-electric-orange border border-electric-orange/20">
                {logo.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
