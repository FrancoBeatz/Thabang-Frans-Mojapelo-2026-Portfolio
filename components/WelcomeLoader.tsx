import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoaderFour } from "@/components/ui/loader";
import { Terminal, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

interface WelcomeLoaderProps {
  onComplete?: () => void;
  durationMs?: number; // default 5000ms (5 seconds)
}

const WelcomeLoader: React.FC<WelcomeLoaderProps> = ({
  onComplete,
  durationMs = 5000,
}) => {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const telemetryLogs = [
    { text: "Initializing React & Node.js runtime environment...", tag: "SYS_INIT" },
    { text: "Mounting MERN stack component architecture & UI systems...", tag: "HYDRATE" },
    { text: "Verifying 100% responsive audits & performance benchmarks...", tag: "AUDIT_100" },
    { text: "System ready. Welcome to Thabang's portfolio experience.", tag: "LIVE" },
  ];

  useEffect(() => {
    // Lock scroll during welcome loader
    document.body.style.overflow = "hidden";

    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(currentProgress);

      if (currentProgress < 25) {
        setPhaseIndex(0);
      } else if (currentProgress < 55) {
        setPhaseIndex(1);
      } else if (currentProgress < 85) {
        setPhaseIndex(2);
      } else {
        setPhaseIndex(3);
      }

      if (elapsed >= durationMs) {
        clearInterval(interval);
        triggerExit();
      }
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        triggerExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [durationMs]);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 800); // 800ms exit animation
  };

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="welcome-loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            filter: "blur(12px)",
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#050608] text-white flex flex-col justify-between items-center p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Background Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-orange/10 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-sky-500/8 blur-[160px] rounded-full pointer-events-none" />

          {/* Top Status Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl flex items-center justify-between border-b border-white/10 pb-4 relative z-10"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-electric-orange animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-widest text-gray-400 uppercase">
                THABANG.DEV <span className="text-white">v2026.1</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-500">
                <span>STATUS:</span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
              <button
                onClick={triggerExit}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white text-xs font-mono transition-all cursor-pointer"
                title="Skip intro (or press Esc)"
              >
                Skip Intro [ESC]
              </button>
            </div>
          </motion.div>

          {/* Central Welcome Presentation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-8 my-auto">
            
            {/* LoaderFour Core Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <LoaderFour size={130} color="#f97316" secondaryColor="#38bdf8" />
            </motion.div>

            {/* Typography & Identity */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/30 text-electric-orange text-[11px] font-mono font-bold uppercase tracking-[0.25em]"
              >
                <Sparkles size={12} />
                <span>WELCOME TO MY DIGITAL PORTFOLIO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase"
              >
                Thabang Frans <span className="text-electric-orange">Mojapelo</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base font-mono text-gray-400"
              >
                Junior Full-Stack Software Developer
              </motion.p>
            </div>

            {/* Dynamic Telemetry Log Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full max-w-md p-4 rounded-2xl bg-[#0b0d13]/90 border border-white/10 backdrop-blur-md shadow-2xl space-y-2 text-left"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 border-b border-white/5 pb-2">
                <span className="flex items-center gap-1.5 text-gray-400 font-bold">
                  <Terminal size={12} className="text-electric-orange" />
                  RUNTIME CONSOLE
                </span>
                <span className="text-electric-orange font-bold font-mono">
                  [{telemetryLogs[phaseIndex].tag}]
                </span>
              </div>

              <div className="text-xs font-mono text-gray-300 flex items-center gap-2 min-h-[22px]">
                <ChevronRight size={13} className="text-electric-orange shrink-0 animate-pulse" />
                <span className="truncate">{telemetryLogs[phaseIndex].text}</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Progress Bar & Percentage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md space-y-2.5 relative z-10"
          >
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
                <span>Loading Portfolio Engine</span>
              </span>
              <span className="text-white font-bold">{progress}%</span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-[1px] border border-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-electric-orange via-orange-400 to-sky-400 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="text-center text-[10px] font-mono text-gray-600">
              MERN Stack • High-Performance Web Architecture • Active Since 2023
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeLoader;
