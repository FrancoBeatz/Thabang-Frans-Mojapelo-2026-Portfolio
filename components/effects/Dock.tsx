import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
}

const DockItem: React.FC<{
  item: DockItemData;
  mouseX: any;
}> = ({ item, mouseX }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [42, 58, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onClick={item.onClick}
      className={`relative flex items-center justify-center rounded-2xl cursor-pointer transition-colors duration-200 group ${
        item.active
          ? 'bg-electric-orange text-white shadow-lg shadow-electric-orange/30'
          : 'bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white'
      } border border-white/10 backdrop-blur-md`}
    >
      <div className="w-5 h-5 flex items-center justify-center pointer-events-none">
        {item.icon}
      </div>

      {/* Floating Tooltip Label */}
      <span className="absolute -top-9 px-2.5 py-1 rounded-md bg-black/90 border border-white/10 text-[11px] font-medium text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
        {item.label}
      </span>
    </motion.div>
  );
};

const Dock: React.FC<DockProps> = ({ items, className = '' }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-end gap-3 px-4 py-3 rounded-3xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {items.map((item, idx) => (
        <DockItem key={idx} item={item} mouseX={mouseX} />
      ))}
    </div>
  );
};

export default Dock;
