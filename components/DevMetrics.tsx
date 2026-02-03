
import React from 'react';
import { Gauge, ShieldCheck, Accessibility, Search } from 'lucide-react';

const DevMetrics: React.FC = () => {
  const metrics = [
    { label: "Performance", score: 99, icon: <Gauge className="text-green-500" />, color: "bg-green-500/10" },
    { label: "Accessibility", score: 100, icon: <Accessibility className="text-blue-500" />, color: "bg-blue-500/10" },
    { label: "Best Practices", score: 100, icon: <ShieldCheck className="text-purple-500" />, color: "bg-purple-500/10" },
    { label: "SEO", score: 100, icon: <Search className="text-yellow-500" />, color: "bg-yellow-500/10" },
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2 p-10 rounded-[2rem] bg-card-bg border border-white/5 flex flex-col justify-between">
            <h3 className="text-3xl font-display font-bold mb-4">Engineering for <span className="text-electric-orange">Excellence</span>.</h3>
            <p className="text-gray-500 leading-relaxed">
              Every line of code I write is optimized for maximum efficiency. My builds consistently rank in the top percentile of Google Lighthouse scores.
            </p>
          </div>
          
          {metrics.map((m, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-card-bg border border-white/5 flex flex-col items-center justify-center space-y-4 group hover:border-white/10 transition-all">
              <div className={`w-14 h-14 rounded-2xl ${m.color} flex items-center justify-center`}>
                {m.icon}
              </div>
              <div className="text-5xl font-display font-black text-white">{m.score}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevMetrics;
