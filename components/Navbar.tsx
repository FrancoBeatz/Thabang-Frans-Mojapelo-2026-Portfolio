import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Magnetic from './effects/Magnetic';
import ClickSpark from './effects/ClickSpark';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 group outline-none"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/15 group-hover:border-electric-orange/60 transition-all bg-[#0a0a0e] flex items-center justify-center p-1.5 shadow-md">
            <img
              src="https://i.ibb.co/Vc26YYXx/71fbabe1-d110-4701-81d9-f7062408f93f.png"
              alt="Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg tracking-tight text-white leading-none">
              THABANG<span className="text-electric-orange font-mono">.DEV</span>
            </span>
            <span className="text-[10px] font-mono text-gray-400">Junior Full-Stack</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-gray-300 hover:text-electric-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.3}>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-200 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-electric-orange" />
                <span>Resume</span>
              </button>
            </Magnetic>

            <Magnetic strength={0.3}>
              <ClickSpark sparkColor="#f97316">
                <a
                  href="https://wa.me/27723481158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-electric-orange hover:bg-orange-600 text-white font-bold text-xs shadow-lg shadow-electric-orange/25 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Hire Me</span>
                </a>
              </ClickSpark>
            </Magnetic>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-mono uppercase tracking-wider text-gray-300 hover:text-electric-orange transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => {
                  closeMenu();
                  window.dispatchEvent(new CustomEvent('open-resume-modal'));
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-white"
              >
                <FileText className="w-4 h-4 text-electric-orange" />
                <span>View Full CV</span>
              </button>

              <a
                href="https://wa.me/27723481158"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-electric-orange text-white font-bold text-sm shadow-lg shadow-electric-orange/30"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp: +27 72 348 1158</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
