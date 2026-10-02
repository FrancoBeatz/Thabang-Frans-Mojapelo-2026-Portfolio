import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';

export interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
}

const DockItem: React.FC<{
  item: DockItemData;
  mouseX: any;
  distance: number;
  magnification: number;
  baseItemSize: number;
}> = ({ item, mouseX, distance, magnification, baseItemSize }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <motion.button
      ref={ref}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={item.onClick}
      className={`relative inline-flex items-center justify-center rounded-2xl border transition-colors outline-none cursor-pointer ${
        item.active
          ? 'bg-electric-orange/20 border-electric-orange text-electric-orange shadow-[0_0_15px_rgba(249,115,22,0.3)]'
          : 'bg-[#12151c]/90 border-white/10 hover:border-white/30 text-gray-300 hover:text-white hover:bg-[#1a1f2c]'
      }`}
      aria-label={item.label}
    >
      <div className="flex items-center justify-center">
        {item.icon}
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: -12, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#08090c] border border-white/15 text-white font-mono text-[11px] font-bold whitespace-nowrap shadow-xl pointer-events-none z-50"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      {item.active && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric-orange" />
      )}
    </motion.button>
  );
};

const Dock: React.FC<DockProps> = ({
  items,
  className = '',
  distance = 140,
  panelHeight = 60,
  baseItemSize = 42,
  magnification = 58,
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded-3xl bg-[#090a0f]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="flex items-center gap-2">
        {items.map((item, index) => (
          <DockItem
            key={index}
            item={item}
            mouseX={mouseX}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;
