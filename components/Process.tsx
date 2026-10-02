import React, { useState } from 'react';
import { Search, PencilRuler, Code, ShieldCheck, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover & Scope",
      subtitle: "Understanding Requirements",
      description: "I begin by deeply analyzing the core problem, user journey, and business goals to define an exact functional specification.",
      details: ["Client requirements gathering", "User story & flow mapping", "Technology & database scoping", "Target device profiling"],
      icon: <Search className="text-sky-400" size={26} />,
      color: "from-sky-500 to-blue-600"
    },
    {
      num: "02",
      title: "Design & Architect",
      subtitle: "System Blueprints",
      description: "I design intuitive, mobile-first interface layouts and map out REST API data schemas before writing code.",
      details: ["Component hierarchy planning", "REST endpoint definitions", "MongoDB document schema modeling", "Responsive breakpoint strategy"],
      icon: <PencilRuler className="text-purple-400" size={26} />,
      color: "from-purple-500 to-pink-600"
    },
    {
      num: "03",
      title: "Clean Engineering",
      subtitle: "Implementation & Build",
      description: "I write clean, modular, and maintainable React and Node.js code with zero bloat and smooth interaction states.",
      details: ["Modular React component design", "Express.js API routing & middleware", "MongoDB database operations", "Tailwind CSS utility styling"],
      icon: <Code className="text-electric-orange" size={26} />,
      color: "from-orange-500 to-amber-500"
    },
    {
      num: "04",
      title: "Test & Optimize",
      subtitle: "Quality & Performance Audits",
      description: "I run performance profiling, cross-device testing, and responsiveness checks to guarantee 100% Lighthouse audit scores.",
      details: ["Mobile & tablet touch testing", "100% Lighthouse performance audits", "Security & authentication checks", "Edge-case bug resolution"],
      icon: <ShieldCheck className="text-emerald-400" size={26} />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      num: "05",
      title: "Deploy & Maintain",
      subtitle: "Production Release",
      description: "I handle production deployment, domain/DNS routing, SSL certificates, and ongoing maintenance support.",
      details: ["Production build compilation", "Domain & DNS configuration", "Live environment verification", "Client support & updates"],
      icon: <Rocket className="text-amber-400" size={26} />,
      color: "from-amber-400 to-orange-600"
    }
  ];

  return (
    <section id="process" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
            <Rocket size={14} />
            <span>Methodology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
            How I Build <span className="text-electric-orange">Software</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            A structured, transparent engineering pipeline from problem definition to high-speed production launch.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-electric-orange/15 border-electric-orange text-white shadow-[0_0_20px_rgba(249,115,22,0.25)]'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="text-xs font-mono font-bold text-electric-orange mb-1">{step.num}</div>
              <div className="text-xs font-bold truncate">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <SpotlightCard
            tiltIntensity={4}
            spotlightColor="rgba(249, 115, 22, 0.2)"
            className="rounded-[2.5rem]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-[#0c0e14] border border-white/10 space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-electric-orange font-bold">
                        PHASE {steps[activeStep].num} OF 05
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                        <DecryptedText text={steps[activeStep].title} animateOn="hover" />
                      </h3>
                      <div className="text-xs text-gray-400 font-mono">{steps[activeStep].subtitle}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300 disabled:opacity-30 hover:bg-white/10"
                    >
                      Previous
                    </button>
                    <button
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-electric-orange text-white text-xs font-bold disabled:opacity-30 hover:bg-orange-600 shadow-md shadow-electric-orange/20"
                    >
                      Next Step
                    </button>
                  </div>
                </div>

                <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light">
                  {steps[activeStep].description}
                </p>

                {/* Key Deliverables in this Step */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase text-gray-400 font-bold tracking-wider block">
                    Key Execution Deliverables:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {steps[activeStep].details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 font-mono"
                      >
                        <CheckCircle2 size={15} className="text-electric-orange shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
};

export default Process;
