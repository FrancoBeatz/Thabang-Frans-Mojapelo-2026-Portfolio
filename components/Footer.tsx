import React from 'react';
import { Github, Mail, Phone, Heart, FileText, ArrowUp } from 'lucide-react';
import Magnetic from './effects/Magnetic';
import DecryptedText from './effects/DecryptedText';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenResume = () => {
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  };

  return (
    <footer className="py-12 sm:py-16 md:py-20 border-t border-white/5 bg-[#050608] relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xl sm:text-2xl font-display font-black text-white">
              <span className="text-white">THABANG</span>
              <span className="text-electric-orange">.DEV</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm font-light">
              Junior Full-Stack Developer • Dedicated to Building High-Performance Web Applications & Business Portals.
            </p>
          </div>

          {/* Quick Connect Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Magnetic strength={0.25}>
              <a
                href="https://github.com/FrancoBeatz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-white hover:text-electric-orange hover:bg-white/10 transition-all flex items-center justify-center min-w-[40px] min-h-[40px]"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="mailto:mojapelot2@gmail.com"
                className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-white hover:text-electric-orange hover:bg-white/10 transition-all flex items-center justify-center min-w-[40px] min-h-[40px]"
                title="Email"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="https://wa.me/27723481158"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-white hover:text-green-400 hover:bg-white/10 transition-all flex items-center justify-center min-w-[40px] min-h-[40px]"
                title="WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <Phone size={18} />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <button
                onClick={handleOpenResume}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-white hover:bg-white/10 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer min-h-[40px]"
              >
                <FileText size={14} className="text-purple-400" />
                <span>CV</span>
              </button>
            </Magnetic>

            <Magnetic strength={0.25}>
              <button
                onClick={scrollToTop}
                className="p-2.5 sm:p-3 rounded-2xl bg-electric-orange/15 border border-electric-orange/30 text-electric-orange hover:bg-electric-orange hover:text-white transition-all cursor-pointer flex items-center justify-center min-w-[40px] min-h-[40px]"
                title="Back to Top"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </Magnetic>
          </div>

        </div>

        {/* Footer Navigation Link Ticker */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-mono text-gray-400 pt-4 sm:pt-6 border-t border-white/5">
          <a href="#about" className="hover:text-electric-orange transition-colors">About</a>
          <a href="#skills" className="hover:text-electric-orange transition-colors">Skills</a>
          <a href="#projects" className="hover:text-electric-orange transition-colors">Projects</a>
          <a href="#education" className="hover:text-electric-orange transition-colors">Education</a>
          <a href="#process" className="hover:text-electric-orange transition-colors">Process</a>
          <a href="#ai-assistant" className="hover:text-electric-orange transition-colors">AI Twin</a>
          <a href="#contact" className="hover:text-electric-orange transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] sm:text-xs text-gray-400 font-mono">
          © {new Date().getFullYear()} Thabang Frans Mojapelo. Engineered with modern React, TypeScript & Motion.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
