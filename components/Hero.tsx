
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
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
            I Build <span className="text-electric-orange">Software</span> That Works. <br className="hidden md:block" />
            Simple. Fast. Reliable.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
            I’m <span className="text-white font-semibold">Thabang Frans Mojapelo</span>. I have <span className="text-electric-orange font-bold">6+ years</span> of experience building websites and apps that are easy to use and run perfectly.
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
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download starting...");
                // In a real app, this would be a link to the PDF file
                window.open("https://thabang-frans-mojapelo-2026-portfol.vercel.app/resume.pdf", "_blank");
              }}
              className="flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-gray-300 font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-300 group max-w-sm lg:max-w-none mx-auto lg:mx-0">
          <div className="relative z-10 w-full aspect-square md:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-black border border-white/10 orange-glow transform transition-transform duration-700 group-hover:scale-[1.01]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-orange/10 via-transparent to-transparent opacity-50"></div>
            <img 
              src="https://i.ibb.co/MxMdkkqf/71fbabe1-d110-4701-81d9-f7062408f93f.png" 
              alt="Thabang Frans Mojapelo" 
              className="relative z-10 w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-105 drop-shadow-[0_0_25px_rgba(255,87,34,0.3)]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20"></div>
            
            {/* Surprise: Floating Animated Code Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-electric-orange/20 rounded-lg backdrop-blur-sm border border-electric-orange/30 flex items-center justify-center animate-bounce duration-[3000ms]">
                <span className="text-electric-orange font-mono text-xs font-bold">{"{}"}</span>
              </div>
              <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-pulse duration-[2000ms]">
                <span className="text-blue-400 font-mono text-[10px] font-bold">JS</span>
              </div>
            </div>

            {/* Surprise: Animated Robot Companion */}
            <div className="absolute bottom-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <img 
                 src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eDlrcWp1eDlrcWp1eDlrcWp1eDlrcWp1eDlrcWp1eDlrcWp1eDAmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/26tn33aiTi1jkl6H6/giphy.gif" 
                 alt="Robot Companion" 
                 className="w-full h-full object-contain"
                 referrerPolicy="no-referrer"
               />
            </div>
            
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
