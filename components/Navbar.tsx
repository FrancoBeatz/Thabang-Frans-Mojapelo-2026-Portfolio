import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
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
      setScrolled(window.scrollY > 40);

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
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const handleOpenResume = () => {
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#06070a]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand Mark */}
          <Magnetic strength={0.25}>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-1.5 flex items-center justify-center group-hover:border-electric-orange/60 transition-all duration-300 shadow-md">
                <img
                  src="https://i.ibb.co/Vc26YYXx/71fbabe1-d110-4701-81d9-f7062408f93f.png"
                  alt="Thabang Logo"
                  className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-display font-black text-lg tracking-tight text-white">
                    <DecryptedText text="THABANG" animateOn="hover" className="font-black" />
                  </span>
                  <span className="text-electric-orange font-bold text-lg">.DEV</span>
                </div>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest hidden sm:block">
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
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
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

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Magnetic strength={0.3}>
              <ClickSpark sparkColor="#38bdf8">
                <button
                  onClick={handleOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-bold transition-all duration-300 shadow-sm"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-orange text-white text-xs font-black uppercase tracking-wider hover:bg-orange-600 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5"
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
            className="lg:hidden p-2.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#06070a]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-display font-bold text-gray-300 hover:text-electric-orange transition-colors flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-gray-600">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleOpenResume();
                }}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2"
              >
                <FileText size={18} /> View / Download CV
              </button>
              <a
                href="https://wa.me/27723481158"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-2xl bg-electric-orange text-white font-bold text-center block shadow-lg shadow-electric-orange/30"
              >
                Let's Talk Business (WhatsApp)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
