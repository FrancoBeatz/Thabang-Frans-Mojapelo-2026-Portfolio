import React from 'react';
import { Target, Bug, Zap, Rocket, Code2, Cpu } from 'lucide-react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';

const WhySoftware: React.FC = () => {
  const stats = [
    { label: 'Active in Tech', value: '2023', sub: 'Independent Development', icon: <Target size={24} className="text-electric-orange" /> },
    { label: 'Deployed Projects', value: '25+', sub: 'Websites & Applications', icon: <Rocket size={24} className="text-sky-400" /> },
    { label: 'Performance Score', value: '100%', sub: 'Speed Audits Achieved', icon: <Zap size={24} className="text-amber-400" /> },
    { label: 'Core Philosophy', value: 'Clean', sub: 'Maintainable Logic', icon: <Code2 size={24} className="text-purple-400" /> },
  ];

  return (
    <section id="why" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Target size={14} />
              <span>Engineering Drive</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
              Why I Build <span className="text-electric-orange">Software</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                I build software because I genuinely enjoy <span className="text-white font-semibold">deconstructing complex problems into elegant, fast, and simple solutions.</span>
              </p>
              <p className="text-gray-400">
                To me, programming is a craft of pure logic, discipline, and user empathy. Whether it is engineering an interactive 60 FPS canvas engine or building a reliable business database portal, I aim for zero friction, rock-solid stability, and clean readability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <SpotlightCard
                key={idx}
                tiltIntensity={6}
                spotlightColor="rgba(249, 115, 22, 0.18)"
                className="rounded-[2rem] h-full"
              >
                <div className="p-6 md:p-8 rounded-[2rem] bg-[#0c0e14] border border-white/5 flex flex-col items-center text-center justify-between space-y-3 h-full group hover:border-white/15 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">{stat.label}</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">{stat.sub}</div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySoftware;
