
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-3xl font-display font-extrabold tracking-tighter">
              THABANG<span className="text-electric-orange">.DEV</span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Pro Software Developer | 6+ Years Experience | Clean Code Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-sm font-medium text-gray-400">Built with passion, logic, and a lot of coffee ☕</div>
            <div className="text-xs text-gray-600">© {new Date().getFullYear()} Thabang Frans Mojapelo — Software Developer</div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-700">
           <a href="#about" className="hover:text-electric-orange transition-colors">About</a>
           <a href="#projects" className="hover:text-electric-orange transition-colors">Projects</a>
           <a href="#skills" className="hover:text-electric-orange transition-colors">Skills</a>
           <a href="#contact" className="hover:text-electric-orange transition-colors">Contact</a>
           <a href="#" className="hover:text-electric-orange transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
