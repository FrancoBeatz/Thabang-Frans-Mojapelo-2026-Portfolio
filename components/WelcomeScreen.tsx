import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import LoaderFourDemo from './loader-four-demo';
import { Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing runtime environment...');

  useEffect(() => {
    // Lock body scroll while welcome screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Total welcome duration: 5 seconds (5000ms)
    const totalDuration = 5000;
    const intervalTime = 50;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }

        // Update status text progressively
        if (next < 25) {
          setStatusText('Initializing runtime environment...');
        } else if (next < 55) {
          setStatusText('Loading creative architectures & projects...');
        } else if (next < 85) {
          setStatusText('Synchronizing interactive systems...');
        } else {
          setStatusText('Welcome. Entering creative world...');
        }

        return next;
      });
    }, intervalTime);

    // After exactly 5 seconds, trigger onComplete
    const finishTimeout = setTimeout(() => {
      onComplete();
    }, totalDuration);

    // Allow escape key to skip intro if user chooses
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        clearTimeout(finishTimeout);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        filter: 'blur(8px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#050608] text-white p-4 sm:p-8 md:p-12 overflow-hidden select-none"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-electric-orange/15 blur-[140px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Header / Skip Button */}
      <div className="w-full max-w-5xl flex items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0">
            <img
              src="https://i.ibb.co/Vc26YYXx/71fbabe1-d110-4701-81d9-f7062408f93f.png"
              alt="Logo"
              className="w-full h-full object-contain rounded-md"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
            THABANG<span className="text-electric-orange">.DEV</span>
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={onComplete}
          className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-electric-orange/40 hover:bg-white/10 text-gray-400 hover:text-white text-[11px] sm:text-xs font-mono transition-all cursor-pointer min-h-[36px]"
          title="Skip welcome screen"
        >
          <span>Skip</span>
          <ArrowRight size={12} className="text-electric-orange" />
        </motion.button>
      </div>

      {/* Center Welcome Typography & LoaderFour */}
      <div className="flex flex-col items-center text-center space-y-5 sm:space-y-8 max-w-2xl mx-auto relative z-10 my-auto">
        
        {/* Welcome Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/30 text-electric-orange text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(249,115,22,0.2)]"
        >
          <Sparkles size={12} className="animate-spin-slow" />
          <span>WELCOME</span>
        </motion.div>

        {/* Developer Name */}
        <div className="space-y-2 sm:space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
          >
            THABANG FRANS <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-electric-orange">
              MOJAPELO
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[11px] sm:text-sm md:text-base font-mono font-medium text-gray-400 uppercase tracking-wider"
          >
            Junior Full-Stack Software Developer
          </motion.p>
        </div>

        {/* LoaderFour Animation Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="py-1 sm:py-2"
        >
          <LoaderFourDemo />
        </motion.div>

        {/* Dynamic Telemetry Status & Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-2 sm:space-y-3 w-56 sm:w-80"
        >
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400">
            <span className="truncate max-w-[160px] sm:max-w-[200px]">{statusText}</span>
            <span className="text-electric-orange font-bold font-mono">
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>

          {/* Progress Track */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-electric-orange via-orange-400 to-sky-400 rounded-full"
              style={{ width: `${Math.min(100, progress)}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom Footer Telemetry */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-5xl flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider relative z-10 border-t border-white/5 pt-3 sm:pt-4"
      >
        <span>Experience 2026</span>
        <span className="text-gray-400 hidden sm:inline">React • TypeScript • Node.js • MERN</span>
        <span>Ready to Launch</span>
      </motion.div>

    </motion.div>
  );
};

export default WelcomeScreen;
