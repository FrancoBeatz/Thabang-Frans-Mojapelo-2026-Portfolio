
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-40 bg-dark-bg relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-6xl md:text-8xl text-electric-orange/20 font-serif leading-none h-12">“</div>
          <p className="text-4xl md:text-6xl font-display font-medium tracking-tight leading-tight">
            Code should be <span className="italic">readable</span>, <span className="text-electric-orange font-bold">scalable</span>, and <span className="text-gray-600">boring</span> — because boring code rarely breaks.
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-[1px] bg-white/20"></div>
             <span className="text-xs uppercase tracking-[0.5em] font-bold text-gray-500">My Code Philosophy</span>
             <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
