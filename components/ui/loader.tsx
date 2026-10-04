import React from "react";
import { motion } from "motion/react";

interface LoaderFourProps {
  size?: number;
  color?: string;
  secondaryColor?: string;
  className?: string;
}

export const LoaderFour: React.FC<LoaderFourProps> = ({
  size = 64,
  color = "#f97316",
  secondaryColor = "#38bdf8",
  className = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading..."
    >
      {/* Outer Rotating Glow Arc */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          borderTopColor: color,
          borderRightColor: "transparent",
          borderBottomColor: color,
          borderLeftColor: "transparent",
          boxShadow: `0 0 20px ${color}40`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Middle Counter-Rotating Arc */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-transparent"
        style={{
          borderTopColor: "transparent",
          borderRightColor: secondaryColor,
          borderBottomColor: "transparent",
          borderLeftColor: secondaryColor,
          boxShadow: `0 0 15px ${secondaryColor}30`,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner Pulsing Core */}
      <motion.div
        className="absolute w-3 h-3 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 15px ${color}, 0 0 30px ${color}80`,
        }}
        animate={{
          scale: [0.8, 1.25, 0.8],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting Satellite Dot */}
      <motion.div
        className="absolute inset-0 flex items-start justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="w-2 h-2 rounded-full -mt-1 shadow-lg"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: `0 0 10px #ffffff, 0 0 20px ${color}`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoaderFour;
