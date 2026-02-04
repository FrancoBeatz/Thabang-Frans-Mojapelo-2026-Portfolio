
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={closeMenu} className="text-2xl font-display font-black tracking-tighter group outline-none focus:ring-2 focus:ring-electric-orange rounded-lg">
          THABANG<span className="text-electric-orange transition-all duration-300 group-hover:tracking-normal">.DEV</span>
        </a>

        {/* Desktop CTA only for a premium, focused experience */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://wa.me/27723481158" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-electric-orange text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-all orange-glow transform hover:-translate-y-1 outline-none shadow-lg shadow-electric-orange/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle - Kept for accessibility and potential future utility */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors z-[110] outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-dark-bg/98 backdrop-blur-2xl transition-all duration-500 z-[105] ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
           <a 
            href="https://wa.me/27723481158" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-electric-orange text-white font-bold rounded-2xl text-xl text-center orange-glow focus:ring-2 focus:ring-electric-orange outline-none block transform active:scale-95 transition-transform"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
