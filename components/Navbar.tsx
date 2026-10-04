import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Magnetic from './effects/Magnetic';
import ClickSpark from './effects/ClickSpark';
import DecryptedText from './effects/DecryptedText';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Process', href: '#process' },
    { name: 'AI Twin', href: '#ai-assistant' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'process', 'ai-assistant', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleOpenResume = () => {
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#06070a]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-4 sm:py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Brand Mark */}
          <Magnetic strength={0.25}>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-1.5 flex items-center justify-center group-hover:border-electric-orange/60 transition-all duration-300 shadow-md">
                <img
                  src="https://i.ibb.co/Vc26YYXx/71fbabe1-d110-4701-81d9-f7062408f93f.png"
                  alt="Thabang Logo"
                  className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-display font-black text-base sm:text-lg tracking-tight text-white">
                    <DecryptedText text="THABANG" animateOn="hover" className="font-black" />
                  </span>
                  <span className="text-electric-orange font-bold text-base sm:text-lg">.DEV</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 uppercase tracking-widest hidden xs:block">
                  Full-Stack Engineer
                </span>
              </div>
            </a>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0d0f15]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-electric-orange/20 border border-electric-orange/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
            <Magnetic strength={0.3}>
              <ClickSpark sparkColor="#38bdf8">
                <button
                  onClick={handleOpenResume}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <FileText size={14} className="text-blue-400" />
                  <span>Resume / CV</span>
                </button>
              </ClickSpark>
            </Magnetic>

            <Magnetic strength={0.3}>
              <ClickSpark sparkColor="#f97316">
                <a
                  href="https://wa.me/27723481158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-electric-orange text-white text-xs font-black uppercase tracking-wider hover:bg-orange-600 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5"
                >
                  <Send size={13} />
                  <span>Hire Me</span>
                </a>
              </ClickSpark>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-electric-orange/50 transition-colors flex items-center justify-center cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#06070a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="text-xl sm:text-2xl font-display font-bold text-gray-300 hover:text-electric-orange transition-colors flex items-center justify-between py-3 px-2 rounded-xl hover:bg-white/5 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleOpenResume();
                }}
                className="w-full py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 text-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                <FileText size={16} className="text-blue-400" />
                <span>View / Download CV</span>
              </button>
              <a
                href="https://wa.me/27723481158"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-electric-orange text-white font-bold text-center flex items-center justify-center gap-2 text-sm shadow-lg shadow-electric-orange/30 hover:bg-orange-600 transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
