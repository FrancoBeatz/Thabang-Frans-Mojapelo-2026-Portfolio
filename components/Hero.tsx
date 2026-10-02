import React from 'react';
import { ChevronRight, Sparkles, Terminal, FileText, Bot, ArrowDown, Code, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import RotatingText from './effects/RotatingText';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';
import Magnetic from './effects/Magnetic';
import ClickSpark from './effects/ClickSpark';
import ElectricBorder from './effects/ElectricBorder';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 lg:pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center">
            <ElectricBorder speed="3.5s" color="#22c55e" className="shadow-lg shadow-green-500/10">
              <div className="flex items-center gap-2.5 px-4 py-1.5 text-xs font-mono text-gray-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span>AVAILABLE FOR FULL-TIME & CONTRACT ROLES</span>
              </div>
            </ElectricBorder>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] tracking-tight text-white">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-orange via-amber-400 to-orange-500">
              High-Speed
            </span>
            <br />
            <RotatingText 
              texts={[
                'Full-Stack Web Apps',
                'Scalable REST APIs',
                'Dynamic React Systems',
                'E-Commerce Engines',
              ]}
              interval={3000}
              className="text-white drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]"
            />
          </h1>

          {/* Bio text */}
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
            I’m <span className="text-white font-semibold">Thabang Frans Mojapelo</span>, a dedicated{' '}
            <span className="text-electric-orange font-semibold">Junior Full-Stack Software Developer</span>. 
            I build resilient, clean, and production-grade applications that convert complex business logic into rapid, delightful user experiences.
          </p>

          {/* Live Metric Badges */}
          <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <div className="text-lg font-bold font-mono text-white flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-electric-orange" />
                <span>100%</span>
              </div>
              <div className="text-[11px] text-gray-400">Commitment</div>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <div className="text-lg font-bold font-mono text-white flex items-center gap-1.5">
                <Code className="w-4 h-4 text-sky-400" />
                <span>6+</span>
              </div>
              <div className="text-[11px] text-gray-400">Live Deployments</div>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <div className="text-lg font-bold font-mono text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>2023–Now</span>
              </div>
              <div className="text-[11px] text-gray-400">Engineering</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Magnetic strength={0.25}>
              <ClickSpark sparkColor="#f97316">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-orange to-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-electric-orange/30 hover:shadow-electric-orange/50 hover:scale-[1.02] transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </ClickSpark>
            </Magnetic>

            <Magnetic strength={0.25}>
              <ClickSpark sparkColor="#38bdf8">
                <a
                  href="https://wa.me/27723481158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-4 bg-white/10 border border-white/15 hover:border-electric-orange/50 text-white font-semibold rounded-2xl backdrop-blur-md hover:bg-white/15 transition-all duration-300"
                >
                  <span>WhatsApp Chat</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-mono">+27 72 348 1158</span>
                </a>
              </ClickSpark>
            </Magnetic>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
              className="flex items-center gap-2 px-5 py-4 text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              <FileText className="w-4 h-4 text-electric-orange" />
              <span>Inspect CV</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Interactive Profile & Terminal HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto w-full max-w-md"
        >
          <SpotlightCard
            spotlightColor="rgba(249, 115, 22, 0.25)"
            tiltIntensity={7}
            className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-6 shadow-2xl shadow-black/80"
          >
            {/* Top Terminal Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-gray-400">engineer_session.sh</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-electric-orange/10 text-electric-orange border border-electric-orange/20">
                v2.6.0
              </span>
            </div>

            {/* Profile Avatar / Visual */}
            <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] bg-gradient-to-tr from-[#111116] to-[#1c1c24] border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=800&q=80"
                alt="Developer Workstation"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <span>Thabang Frans Mojapelo</span>
                </div>
                <div className="text-xs text-gray-300 font-mono flex items-center justify-between">
                  <span>📍 Pretoria, South Africa</span>
                  <span className="text-electric-orange font-semibold">Junior Full-Stack</span>
                </div>
              </div>
            </div>

            {/* Terminal Live Command Simulation */}
            <div className="space-y-2 font-mono text-xs text-gray-300 bg-black/70 p-3.5 rounded-xl border border-white/5">
              <div className="text-gray-400 flex items-center gap-2">
                <span className="text-electric-orange">$</span>
                <DecryptedText 
                  text="cat developer_stack.json" 
                  animateOn="view" 
                  speed={35}
                  className="text-sky-300"
                />
              </div>
              <div className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                <div>{'{'}</div>
                <div className="pl-4"><span className="text-amber-300">"frontend"</span>: ["React", "TypeScript", "TailwindCSS"],</div>
                <div className="pl-4"><span className="text-amber-300">"backend"</span>: ["Node.js", "Express", "REST APIs"],</div>
                <div className="pl-4"><span className="text-amber-300">"database"</span>: ["MongoDB", "PostgreSQL"],</div>
                <div className="pl-4"><span className="text-amber-300">"focus"</span>: "Speed, Clean Architecture & UX"</div>
                <div>{'}'}</div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs font-mono">
        <span className="tracking-widest uppercase text-[10px]">Scroll to inspect</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-electric-orange" />
      </div>
    </section>
  );
};

export default Hero;
