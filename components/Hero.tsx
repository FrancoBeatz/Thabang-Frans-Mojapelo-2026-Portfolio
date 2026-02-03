
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[10%] right-[-5%] -z-10 w-[50%] h-[50%] bg-electric-orange/10 blur-[150px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[-5%] -z-10 w-[30%] h-[40%] bg-white/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
        <div className="space-y-6 relative z-10 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="inline-flex items-center px-4 py-1.5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md text-xs font-medium tracking-wide">
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-gray-300">🟢 Currently building powerful web apps</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tighter">
            Software <span className="text-electric-orange">Developer</span> by Choice. <br className="hidden md:block" />
            Problem Solver by Nature.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
            I’m <span className="text-white font-semibold">Thabang Frans Mojapelo</span>, a professional software developer with <span className="text-electric-orange font-bold">6+ years</span> of experience building modern, scalable, and high-performance applications that don’t just look good — they work flawlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#projects" 
              className="group flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-electric-orange hover:text-white transition-all duration-500 orange-glow-hover"
            >
              🚀 View My Work
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/27723481158" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-xl hover:border-electric-orange hover:text-electric-orange transition-all duration-300 backdrop-blur-sm"
            >
              📩 Hire Me
            </a>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-300 group max-w-sm lg:max-w-none mx-auto lg:mx-0">
          <div className="relative z-10 w-full aspect-square md:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-card-bg border border-white/10 orange-glow transform transition-transform duration-700 group-hover:scale-[1.01]">
            <img 
              src="https://i.ibb.co/4wHq6WdP/IMG-20251221-WA0002.jpg" 
              alt="Thabang Frans Mojapelo" 
              className="w-full h-full object-cover opacity-90 transition-all duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-electric-orange/20 rounded-full flex items-center justify-center text-electric-orange">
                     <Sparkles size={20} />
                   </div>
                   <div>
                     <div className="text-white text-sm font-bold">Thabang F. Mojapelo</div>
                     <div className="text-[10px] text-gray-400">Software Architect & Performance Expert</div>
                   </div>
                </div>
            </div>
          </div>
          
          {/* Decorative frames */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-electric-orange rounded-[2rem] -z-10 opacity-30 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-white/10 rounded-[2rem] -z-10 opacity-30 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center opacity-50">
        <span className="text-[8px] uppercase tracking-[0.3em] text-gray-500 mb-2">Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-electric-orange to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
