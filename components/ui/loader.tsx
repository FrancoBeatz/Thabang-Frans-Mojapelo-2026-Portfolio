import React from "react";
import { motion } from "motion/react";

interface LoaderFourProps {
  size?: number;
  color?: string;
  secondaryColor?: string;
  text?: string;
  className?: string;
}

export const LoaderFour: React.FC<LoaderFourProps> = ({
  size = 120,
  color = "#f97316",
  secondaryColor = "#38bdf8",
  text,
  className = "",
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Outer Glow Halo */}
      <div 
        className="absolute rounded-full blur-2xl opacity-30 pointer-events-none animate-pulse-slow"
        style={{
          width: size * 1.8,
          height: size * 1.8,
          background: `radial-gradient(circle, ${color} 0%, ${secondaryColor} 50%, transparent 70%)`
        }}
      />

      {/* Nested Rotating Geometric Rings & Particle Orbits */}
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        
        {/* Ring 1 - Outer segmented border */}
        <motion.div
          className="absolute inset-0 rounded-full border border-dashed"
          style={{ borderColor: `${color}60` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring 2 - Primary rotating dual-arc */}
        <motion.div
          className="absolute inset-1 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: color,
            borderBottomColor: color,
            boxShadow: `0 0 15px ${color}40`,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ring 3 - Secondary fast rotating accent arc */}
        <motion.div
          className="absolute inset-3 rounded-full border-2 border-transparent"
          style={{
            borderLeftColor: secondaryColor,
            borderRightColor: secondaryColor,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring 4 - Inner spinning dashed circle */}
        <motion.div
          className="absolute inset-5 rounded-full border border-dotted"
          style={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
          animate={{ rotate: -180, scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting Satellite 1 */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full absolute -top-1 left-1/2 -translate-x-1/2 shadow-lg"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 12px ${color}, 0 0 20px ${color}`,
            }}
          />
        </motion.div>

        {/* Orbiting Satellite 2 */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-2 h-2 rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-lg"
            style={{
              backgroundColor: secondaryColor,
              boxShadow: `0 0 10px ${secondaryColor}, 0 0 16px ${secondaryColor}`,
            }}
          />
        </motion.div>

        {/* Pulsing Core Diamond / Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-8 h-8 rounded-xl bg-[#090b10] border border-white/20 shadow-xl"
          animate={{
            scale: [0.85, 1.1, 0.85],
            boxShadow: [
              `0 0 10px ${color}30`,
              `0 0 25px ${color}70`,
              `0 0 10px ${color}30`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-3.5 h-3.5 rounded-md transform rotate-45"
            style={{
              background: `linear-gradient(135deg, ${color}, ${secondaryColor})`,
            }}
          />
        </motion.div>
      </div>

      {/* Optional Status text */}
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-xs font-mono uppercase tracking-[0.3em] text-gray-400 font-semibold text-center"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoaderFour;
