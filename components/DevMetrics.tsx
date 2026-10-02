import React from 'react';
import { Gauge, ShieldCheck, Accessibility, Search, Smartphone, Cpu, CheckCircle } from 'lucide-react';
import SpotlightCard from './effects/SpotlightCard';
import DecryptedText from './effects/DecryptedText';

const DevMetrics: React.FC = () => {
  const metrics = [
    { label: "Performance", score: 99, sub: "Fast First Paint", icon: <Gauge className="text-emerald-400" size={24} />, color: "bg-emerald-500/10", glow: "rgba(52, 211, 153, 0.2)" },
    { label: "Accessibility", score: 100, sub: "WCAG Compliant", icon: <Accessibility className="text-sky-400" size={24} />, color: "bg-sky-500/10", glow: "rgba(56, 189, 248, 0.2)" },
    { label: "Best Practices", score: 100, sub: "Modern Standards", icon: <ShieldCheck className="text-purple-400" size={24} />, color: "bg-purple-500/10", glow: "rgba(192, 132, 252, 0.2)" },
    { label: "SEO Optimization", score: 100, sub: "Search Ranked", icon: <Search className="text-amber-400" size={24} />, color: "bg-amber-500/10", glow: "rgba(251, 191, 36, 0.2)" },
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 space-y-12">
        
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Headline box */}
          <div className="lg:col-span-2">
            <SpotlightCard
              tiltIntensity={4}
              spotlightColor="rgba(249, 115, 22, 0.15)"
              className="h-full rounded-[2rem]"
            >
              <div className="p-8 md:p-10 rounded-[2rem] bg-[#0c0e14] border border-white/5 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-electric-orange/10 text-electric-orange font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle size={13} />
                    <span>Audited Quality</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                    Engineered for <span className="text-electric-orange">Speed & Clarity</span>
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    Every web application and business portal I engineer is optimized for sub-second page loads, mobile responsiveness, and clean semantic architecture.
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5 text-xs font-mono text-gray-500">
                  <div className="flex items-center gap-1.5"><Smartphone size={14} className="text-green-400" /> 100% Mobile Parity</div>
                  <div className="flex items-center gap-1.5"><Cpu size={14} className="text-electric-orange" /> Zero Layout Shift</div>
                </div>
              </div>
            </SpotlightCard>
          </div>
          
          {/* Metric cards */}
          {metrics.map((m, i) => (
            <SpotlightCard
              key={i}
              tiltIntensity={6}
              spotlightColor={m.glow}
              className="rounded-[2rem] h-full"
            >
              <div className="p-6 md:p-8 rounded-[2rem] bg-[#0c0e14] border border-white/5 flex flex-col items-center justify-center space-y-4 group hover:border-white/15 transition-all h-full text-center">
                <div className={`w-12 h-12 rounded-2xl ${m.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {m.icon}
                </div>
                <div className="text-4xl md:text-5xl font-display font-black text-white">
                  {m.score}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                    <DecryptedText text={m.label} animateOn="hover" />
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">{m.sub}</div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DevMetrics;
