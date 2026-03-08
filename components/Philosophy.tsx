
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-40 bg-dark-bg relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-orange/5 blur-[120px] rounded-full -z-0"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-7xl md:text-9xl text-electric-orange/20 font-display font-black leading-none h-16 select-none animate-float">“</div>
          
          <div className="space-y-8">
            <p className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1]">
              I write <span className="text-electric-orange font-bold">clean code</span> that is easy to read and maintain.
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1]">
              I build <span className="italic">stable systems</span> that you can always rely on.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white/40 tracking-tight leading-tight">
              I focus on <span className="text-white/60">efficiency</span> so your app runs as fast as possible.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
             <div className="w-16 h-[1px] bg-white/10"></div>
             <span className="text-xs uppercase tracking-[0.6em] font-black text-gray-500 flex items-center gap-2">
               The <span className="text-electric-orange">Mojapelo</span> Code
             </span>
             <div className="w-16 h-[1px] bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
