import React, { useRef } from 'react';
import { ChevronRight, FileText, Bot, ArrowDown, Code, Zap, ShieldCheck } from 'lucide-react';
import { gsap, useGSAP, prefersReducedMotion } from '../src/lib/gsap';
import RotatingText from './effects/RotatingText';
import DecryptedText from './effects/DecryptedText';
import ElectricBorder from './effects/ElectricBorder';
import SpotlightCard from './effects/SpotlightCard';
import Magnetic from './effects/Magnetic';
import ClickSpark from './effects/ClickSpark';
import GsapButton from './effects/GsapButton';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const hudCardRef = useRef<HTMLDivElement>(null);

  const handleOpenResume = () => {
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (prefersReducedMotion()) {
        gsap.set('.gsap-hero-item', { opacity: 1, clearProps: 'all' });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered entrance for hero elements
      tl.fromTo(
        '.gsap-hero-badge',
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.4)' }
      )
        .fromTo(
          '.gsap-hero-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.gsap-hero-metric-item',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-actions',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' },
          '-=0.3'
        )
        .fromTo(
          hudCardRef.current,
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' },
          '-=0.7'
        )
        .fromTo(
          '.gsap-scroll-indicator',
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        );

      // Subtle ambient hover floating animation on HUD
      if (hudCardRef.current) {
        gsap.to(hudCardRef.current, {
          y: '-=8',
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.2,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 xs:pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Dynamic Ambient Mesh Glows */}
      <div className="absolute top-[15%] right-[5%] -z-10 w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-electric-orange/10 blur-[140px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[5%] -z-10 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-sky-500/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Developer Identity & Value Proposition */}
        <div className="space-y-6 sm:space-y-8 relative z-10">
          
          {/* Status Badge with ElectricBorder */}
          <div className="gsap-hero-badge inline-block max-w-full">
            <ElectricBorder color="#f97316" speed={0.8} chaos={0.08} borderRadius={999}>
              <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#090b10]/90 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide border border-white/10 backdrop-blur-md">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-green-500" />
                </span>
                <span className="text-gray-300 truncate">
                  <DecryptedText text="Junior Full-Stack Developer • Active Since 2023" animateOn="hover" />
                </span>
              </div>
            </ElectricBorder>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="gsap-hero-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-white">
              I Engineer <br />
              <RotatingText
                texts={[
                  'Full-Stack Apps',
                  'High-Speed APIs',
                  'Business Portals',
                  'Interactive Systems',
                  'E-Commerce Engines'
                ]}
                interval={2600}
                className="text-electric-orange inline-block align-baseline font-black"
                badgeClassName="drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]"
              />
              <br />
              That Work. Fast & Reliable.
            </h1>

            <p className="gsap-hero-desc text-sm xs:text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              Hi, I’m <span className="text-white font-semibold"><DecryptedText text="Thabang Frans Mojapelo" animateOn="hover" className="text-white font-bold" /></span>. 
              I build production-grade web applications and modern business portals using{' '}
              <span className="text-white font-semibold">React</span>,{' '}
              <span className="text-white font-semibold">Node.js</span>,{' '}
              <span className="text-white font-semibold">Express.js</span>, and{' '}
              <span className="text-white font-semibold">MongoDB</span> with meticulous attention to performance, UX architecture, and clean maintainable code.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 py-2.5 border-y border-white/10">
            <div className="gsap-hero-metric-item flex items-center gap-2 text-xs font-mono text-gray-300">
              <Zap size={14} className="text-electric-orange shrink-0" />
              <span>100% Perf Audits</span>
            </div>
            <div className="gsap-hero-metric-item flex items-center gap-2 text-xs font-mono text-gray-300">
              <Code size={14} className="text-blue-400 shrink-0" />
              <span>Full-Stack MERN Architecture</span>
            </div>
            <div className="gsap-hero-metric-item flex items-center gap-2 text-xs font-mono text-gray-300">
              <ShieldCheck size={14} className="text-green-400 shrink-0" />
              <span>Verified Scrimba & FCC</span>
            </div>
          </div>

          {/* Action Triggers with GSAP interactive button physics */}
          <div className="gsap-hero-actions flex flex-wrap items-stretch sm:items-center gap-3 pt-1">
            <Magnetic strength={0.3} className="w-full sm:w-auto">
              <ClickSpark sparkColor="#f97316" className="w-full sm:w-auto">
                <GsapButton scaleOnHover={1.04} className="w-full sm:w-auto">
                  <a
                    href="#projects"
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-extrabold text-sm rounded-2xl hover:bg-electric-orange hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.4)]"
                  >
                    <span>🚀 Explore Projects</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </GsapButton>
              </ClickSpark>
            </Magnetic>

            <div className="flex gap-2.5 w-full sm:w-auto">
              <Magnetic strength={0.3} className="flex-1 sm:flex-none">
                <ClickSpark sparkColor="#38bdf8" className="w-full">
                  <GsapButton scaleOnHover={1.03} className="w-full">
                    <a
                      href="#ai-assistant"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white font-bold text-xs sm:text-sm rounded-2xl hover:border-electric-orange/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Bot size={16} className="text-electric-orange" />
                      <span>Chat AI Twin</span>
                    </a>
                  </GsapButton>
                </ClickSpark>
              </Magnetic>

              <Magnetic strength={0.3} className="flex-1 sm:flex-none">
                <ClickSpark sparkColor="#a855f7" className="w-full">
                  <GsapButton scaleOnHover={1.03} className="w-full">
                    <button
                      onClick={handleOpenResume}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-gray-300 hover:text-white font-bold text-xs sm:text-sm rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <FileText size={16} className="text-purple-400" />
                      <span>Download CV</span>
                    </button>
                  </GsapButton>
                </ClickSpark>
              </Magnetic>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Developer Telemetry HUD with GSAP floating effect */}
        <div
          ref={hudCardRef}
          className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full"
        >
          <SpotlightCard
            tiltIntensity={6}
            spotlightColor="rgba(249, 115, 22, 0.2)"
            className="rounded-[2.5rem]"
          >
            <div className="relative rounded-[2.5rem] bg-[#0c0e14] border border-white/10 p-3 sm:p-4 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              
              {/* Image Frame with Overlay Controls */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-black border border-white/5">
                <img
                  src="https://i.ibb.co/MxMdkkqf/71fbabe1-d110-4701-81d9-f7062408f93f.png"
                  alt="Thabang Frans Mojapelo"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-black/30 pointer-events-none" />

                {/* Live Telemetry Floating Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>READY_TO_DEPLOY</span>
                </div>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono text-electric-orange font-bold">
                  <span>Stack: MERN</span>
                </div>

                {/* Floating Interactive Micro Diagnostics */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-4 rounded-2xl bg-[#0e111a]/95 backdrop-blur-xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm">Thabang Frans Mojapelo</div>
                      <div className="text-[10px] sm:text-[11px] text-gray-400 font-mono">Junior Full-Stack Developer</div>
                    </div>
                    <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-electric-orange/20 border border-electric-orange/30 text-electric-orange font-mono text-[9px] sm:text-[10px] font-bold">
                      SINCE 2023
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/5 text-[9px] sm:text-[10px] font-mono text-gray-400 text-center">
                    <div><span className="text-white font-bold">25+</span> Projects</div>
                    <div><span className="text-white font-bold">100%</span> Mobile</div>
                    <div><span className="text-green-400 font-bold">Verified</span> Skills</div>
                  </div>
                </div>

              </div>

            </div>
          </SpotlightCard>
        </div>

      </div>

      {/* Scroll Down Prompt with GSAP entrance */}
      <div
        className="gsap-scroll-indicator absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll to explore</span>
        <ArrowDown size={14} className="animate-bounce text-electric-orange" />
      </div>
    </section>
  );
};

export default Hero;
