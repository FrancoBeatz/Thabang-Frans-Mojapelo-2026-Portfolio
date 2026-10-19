import React, { useState, useRef } from 'react';
import { Award, ShieldCheck, Cpu, Database, ExternalLink, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, useGSAP, prefersReducedMotion } from '../src/lib/gsap';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';
import GsapButton from './effects/GsapButton';

const Education: React.FC = () => {
  const credentials = [
    {
      id: 'scrimba',
      provider: "Scrimba AS",
      role: "Software Development Programme",
      focus: "JavaScript & TypeScript Deep Dive",
      period: "2023 – 2026",
      hours: "Deep Dive Curriculum",
      description: "Comprehensive software engineering program focused on asynchronous JavaScript, TypeScript type systems, component life cycles in React, and backend API integration.",
      verifier: "Per Harald Borgen (CEO, Scrimba AS)",
      badge: "Verified Grad",
      certId: "SCR-2026-TF19",
      image: "https://i.ibb.co/vC2gd3mp/ac7b9098-4c27-42c1-ae36-dffa74b1a54b.png",
      link: null,
    },
    {
      id: 'fcc',
      provider: "freeCodeCamp.org",
      role: "Legacy Full Stack Developer",
      focus: "Full-Stack Software Engineering Curriculum",
      period: "2020 – 2023",
      hours: "1,800+ Hours Coursework",
      description: "Rigorous coursework covering Responsive Web Design, JavaScript Algorithms & Data Structures, Front End Development Libraries, Data Visualization, and Back End APIs.",
      verifier: "Quincy Larson (Executive Director, freeCodeCamp)",
      badge: "1800h Certified",
      certId: "FCC-FULLSTACK-FRANS1987",
      image: "https://i.ibb.co/KxfPj1hJ/9a9db522-37fe-4342-a3c7-13e6fbdb611d.png",
      link: "https://www.freecodecamp.org/certification/frans1987/full-stack",
    }
  ];

  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion()) return;

      const header = containerRef.current.querySelector('.gsap-edu-header');
      const cards = containerRef.current.querySelectorAll('.gsap-edu-card');

      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.16,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="education"
      className="py-20 sm:py-28 lg:py-32 relative z-10 border-t border-white/5 overflow-hidden"
    >
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
        
        {/* Header */}
        <div className="gsap-edu-header flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Award size={14} />
              <span>Verified Credentials & Learning</span>
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white">
              Education & <span className="text-electric-orange">Certifications</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
            Hands-on technical development curriculum validated through rigorous algorithmic coursework and project certifications.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {credentials.map((item) => (
            <div key={item.id} className="gsap-edu-card h-full">
            <SpotlightCard
              key={item.id}
              tiltIntensity={5}
              spotlightColor="rgba(249, 115, 22, 0.18)"
              className="rounded-[2rem] sm:rounded-[2.5rem] h-full"
            >
              <div className="p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-[#0c0e14] border border-white/5 space-y-6 flex flex-col justify-between h-full">
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-electric-orange/10 text-electric-orange font-mono text-xs font-bold uppercase">
                      <ShieldCheck size={14} />
                      <span>{item.badge}</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500 font-bold">{item.period}</span>
                  </div>

                  {/* Title & Provider */}
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white">
                      <DecryptedText text={item.provider} animateOn="hover" />
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-electric-orange mt-1">{item.role}</div>
                    <div className="text-[11px] sm:text-xs text-gray-400 font-mono mt-0.5">{item.focus}</div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-gray-400">
                      <span>Curriculum Load:</span>
                      <span className="text-white font-bold">{item.hours}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Signatory:</span>
                      <span className="text-gray-300">{item.verifier}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 border-t border-white/5">
                  <GsapButton scaleOnHover={1.03} className="flex-1 min-w-[140px]">
                    <button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-resume-modal'));
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-electric-orange hover:border-electric-orange transition-all duration-200 cursor-pointer"
                    >
                      <FileText size={14} />
                      <span>View Certificate</span>
                    </button>
                  </GsapButton>

                  {item.link && (
                    <GsapButton scaleOnHover={1.04}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-xs hover:bg-green-500/20 transition-all duration-200"
                      >
                        <span>Online Verify</span>
                        <ExternalLink size={13} />
                      </a>
                    </GsapButton>
                  )}
                </div>

              </div>
            </SpotlightCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
