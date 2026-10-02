import React from 'react';
import TrueFocus from './effects/TrueFocus';
import DecryptedText from './effects/DecryptedText';

const Philosophy: React.FC = () => {
  return (
    <section className="py-36 relative overflow-hidden z-10 border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10 space-y-12 max-w-5xl mx-auto">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
          <DecryptedText text="THE MOJAPELO STANDARD" animateOn="hover" />
        </div>

        <div className="space-y-6">
          <TrueFocus
            sentence="Clean Code. Resilient Systems. Peak Speed."
            blurAmount={4}
            borderColor="#f97316"
            glowColor="rgba(249, 115, 22, 0.4)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.5}
          />

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            "I write code that is easy to understand, test, and maintain. I build systems that business leaders can rely on 24/7 without worrying about downtime or unhandled edge cases."
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="w-16 h-[1px] bg-white/10" />
          <span className="text-xs uppercase tracking-[0.4em] font-mono text-gray-500">
            ENGINEERED WITH DISCIPLINE
          </span>
          <div className="w-16 h-[1px] bg-white/10" />
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
