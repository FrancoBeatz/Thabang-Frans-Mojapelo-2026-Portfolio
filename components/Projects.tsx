import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Code2, 
  Cpu, 
  Layout, 
  ArrowUpRight, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Sparkles,
  Terminal,
  Server,
  Database,
  Smartphone,
  SlidersHorizontal,
  Maximize2,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';
import ClickSpark from './effects/ClickSpark';
import Magnetic from './effects/Magnetic';
import ScrollStack from './effects/ScrollStack';

export interface Project {
  title: string;
  category: 'flagship' | 'commercial';
  categoryLabel: string;
  role: string;
  problem: string;
  solution: string;
  description: string;
  image: string;
  tech: string[];
  perf: number;
  liveLink: string;
  githubLink: string;
  features: string[];
  architectureDetails: {
    frontendStack: string;
    backendStack: string;
    keyChallenge: string;
    engineeringOutcome: string;
  };
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'commercial'>('all');
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "CreamFlow",
      category: "flagship",
      categoryLabel: "Flagship Showroom & Sensory E-Commerce",
      role: "Lead Full-Stack Developer",
      problem: "A luxury skincare and sensory product brand needed an immersive, fluid digital showroom with zero layout shift, ultra-fast initial paint, and micro-motion interactions.",
      solution: "Engineered a high-performance interactive showroom featuring cream-toned sensory motion physics, custom spring interactions, and modular React component architecture.",
      description: "A luxury e-commerce showroom built with high-contrast motion physics, responsive grid layouts, and zero-latency page transitions.",
      image: "https://i.ibb.co/KjGcwFR4/creamflow.jpg",
      tech: ["React", "Motion Physics", "Tailwind CSS", "Aesthetic UI", "Vite"],
      perf: 100,
      liveLink: "https://creamflow.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      features: [
        "100% Lighthouse Performance & Best Practices score",
        "Fluid sensory product interaction with zero layout shift",
        "Custom touch-optimized mobile carousels and drawers"
      ],
      architectureDetails: {
        frontendStack: "React 19 + Tailwind CSS + Framer Motion Physics",
        backendStack: "Static edge-cached CDN with client-side state hydration",
        keyChallenge: "Balancing heavy media assets with strict sub-second First Contentful Paint times.",
        engineeringOutcome: "Achieved instantaneous responsive navigation with optimized asset delivery and zero CLS."
      }
    },
    {
      title: "Galaxy Defender: Canvas Engine",
      category: "flagship",
      categoryLabel: "Interactive 2D Web Game Engine",
      role: "Game Engine & Logic Architect",
      problem: "Standard DOM-based entity rendering choked when updating dozens of simultaneous vector sprites at 60 FPS across mobile and desktop viewports.",
      solution: "Engineered a custom 2D canvas drawing system operating directly on hardware-accelerated buffers with vector physics, collision detection, and modular OOP architecture.",
      description: "A high-speed browser arcade game demonstrating custom 60 FPS HTML5 Canvas rendering, entity lifecycle management, and vector math.",
      image: "https://i.ibb.co/qF2wKHgh/2.jpg",
      tech: ["HTML5 Canvas", "Vector Physics", "OOP Architecture", "JavaScript ES6+", "State Machines"],
      perf: 100,
      liveLink: "https://galaxy-defender-2-d-game.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      features: [
        "Consistent 60 FPS hardware-accelerated rendering loop",
        "Object-oriented entity lifecycle and spatial collision detection",
        "Adaptive mobile touch pad controls with keyboard event listener fallback"
      ],
      architectureDetails: {
        frontendStack: "Vanilla Canvas 2D Context + ES6 Modules",
        backendStack: "Client-side state engine with localStorage high score persistence",
        keyChallenge: "Preventing garbage collection pauses during high-density particle explosions.",
        engineeringOutcome: "Implemented object pooling to eliminate memory thrashing and frame drops."
      }
    },
    {
      title: "Mkhonto Global Capital",
      category: "commercial",
      categoryLabel: "Enterprise Commercial Portal",
      role: "Full-Stack Web Engineer",
      problem: "An executive recruitment and human capital consulting firm needed an authoritative digital portal to attract enterprise partners globally with seamless mobile UX.",
      solution: "Engineered a secure, lightning-fast multi-section corporate portal with optimized SEO metadata, mobile-first touch UX, and direct lead generation pipeline.",
      description: "A high-quality business portal built for an international human capital consulting firm, with custom lead pipelines and brand presentation.",
      image: "https://i.ibb.co/8grqP05h/Capture.jpg",
      tech: ["React", "Enterprise UI", "Next-Gen UX", "Tailwind CSS", "Lead Pipeline"],
      perf: 100,
      liveLink: "https://linda-mkhonto-global-human-capital.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      features: [
        "Full Search Engine Optimization (SEO) structured schema markup",
        "Direct multi-channel lead acquisition and WhatsApp integration",
        "Fully responsive layout verified across phone, tablet, and widescreen"
      ],
      architectureDetails: {
        frontendStack: "React + Tailwind CSS + Semantic HTML5",
        backendStack: "Serverless form dispatch with real-time validation",
        keyChallenge: "Creating a corporate aesthetic that maintains high visual contrast without sacrificing loading speed.",
        engineeringOutcome: "Delivered a 100% audited corporate portal that boosted executive lead conversions."
      }
    },
    {
      title: "Tracy Mashishi Portfolio",
      category: "commercial",
      categoryLabel: "High-Performance Personal Brand",
      role: "Frontend Developer & UI Designer",
      problem: "A client required a distinctive, cinematic personal brand portfolio to stand out in a competitive consulting and speaking market.",
      solution: "Engineered a custom responsive architecture with ultra-fast initial paint times, high-fidelity visual interactions, and seamless media presentation.",
      description: "A premium personal brand portfolio built with modern web standards, custom typography, and sub-second load times.",
      image: "https://i.ibb.co/9kjtMfCG/tracy.jpg",
      tech: ["React", "UX Engineering", "Performance Audits", "Tailwind CSS"],
      perf: 100,
      liveLink: "https://tracymashishi.co.za/",
      githubLink: "https://github.com/FrancoBeatz",
      features: [
        "Sub-second First Paint with prioritized asset preloading",
        "Custom aesthetic typography matching executive consulting brand",
        "Direct booking and speaking inquiry flow"
      ],
      architectureDetails: {
        frontendStack: "React + Modern CSS Grid + Motion",
        backendStack: "Fast edge-deployed hosting with SSL automation",
        keyChallenge: "Ensuring media-heavy portfolio galleries do not slow down cellular devices.",
        engineeringOutcome: "Optimized responsive image sets with progressive loading."
      }
    },
    {
      title: "Kolas Supply Chain",
      category: "commercial",
      categoryLabel: "Logistics & Real-Time Tracking Dashboard",
      role: "Full-Stack Developer",
      problem: "Logistics and warehouse workers struggled with fragmented spreadsheets, leading to delayed inventory updates across border transit checkpoints.",
      solution: "Built a centralized web interface aggregating inventory status in real time with Node.js backend logic and responsive inventory status metrics.",
      description: "A professional tool for tracking goods, supplies, and transit logistics across regional checkpoints.",
      image: "https://i.ibb.co/pB6LDjZh/1.jpg",
      tech: ["Node.js", "REST APIs", "Express.js", "Data Dashboard", "MongoDB"],
      perf: 98,
      liveLink: "https://kola-s-rat-p-supply.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      features: [
        "Real-time shipment checkpoint status feed",
        "Node.js API pipeline with structured JSON schemas",
        "High-density data tables designed for tablet and mobile field workers"
      ],
      architectureDetails: {
        frontendStack: "React + Tailwind CSS Data Grid",
        backendStack: "Node.js + Express REST Endpoints + MongoDB Aggregation",
        keyChallenge: "Handling intermittent connectivity in warehouse loading zones.",
        engineeringOutcome: "Implemented optimistic UI caching for smooth data logging."
      }
    },
    {
      title: "Child Care Africa",
      category: "commercial",
      categoryLabel: "Humanitarian Mobile Platform",
      role: "Frontend Engineer",
      problem: "Users in remote regions with low-bandwidth 3G connections frequently encountered timeouts when attempting to donate and review child welfare reports.",
      solution: "Rebuilt the architecture from scratch to be ultra-lightweight, eliminating heavy scripts and prioritizing instant asset delivery on cellular data.",
      description: "A fast, accessible, and lightweight platform designed to connect donors with community relief initiatives across Africa.",
      image: "https://i.ibb.co/7dM7xMWX/child-care-africa-netlify-app.png",
      tech: ["Performance Optimization", "Mobile-First", "Impact Design", "Accessible UI"],
      perf: 99,
      liveLink: "https://child-care-africa.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      features: [
        "Ultra-lightweight bundle optimized for low-bandwidth 3G mobile data",
        "Fully accessible WCAG AAA compliant color contrast and semantic structure",
        "Instant donor action dispatch and welfare project updates"
      ],
      architectureDetails: {
        frontendStack: "Accessible Semantic HTML5 + Tailwind CSS + React",
        backendStack: "Lightweight API integration with secure donation gateway",
        keyChallenge: "Minimizing total JavaScript payload to under 100KB for instant cellular execution.",
        engineeringOutcome: "Decreased bounce rate significantly by cutting load times to under 1.2s on 3G."
      }
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Dynamic Lighting */}
      <div className="absolute top-[25%] left-[-10%] w-[600px] h-[600px] bg-electric-orange/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Layers size={14} />
              <span>Selected Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white">
              Featured <span className="text-electric-orange">Projects</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Every system here is engineered for performance, clean architecture, and real business value.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Verified 100% Live Deployments</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Layout Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-white/5 pb-4 sm:pb-6">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'All (6)' },
              { id: 'flagship', label: 'Flagship Systems' },
              { id: 'commercial', label: 'Commercial Portals' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-electric-orange text-white shadow-lg shadow-electric-orange/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-[#0e111a] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setViewMode('stack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'stack' ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Stacked View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Grid View
            </button>
          </div>
        </div>

        {/* View Mode 1: Stacked Storytelling (ScrollStack) */}
        {viewMode === 'stack' ? (
          <ScrollStack>
            {filteredProjects.map((project, idx) => (
              <div key={project.title} className="w-full">
                <BorderGlow
                  borderRadius={28}
                  backgroundColor="#0a0c12"
                  colors={project.category === 'flagship' ? ['#f97316', '#38bdf8', '#ffffff'] : ['#38bdf8', '#818cf8', '#ffffff']}
                  className="w-full shadow-2xl"
                >
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 p-4 sm:p-8 lg:p-10 items-center">
                    
                    {/* Visual Media Showcase */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black group/img border border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] via-transparent to-black/30 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-bold font-mono text-white">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{project.perf}% Score</span>
                      </div>

                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        {project.categoryLabel}
                      </div>

                      {/* Expand Blueprint Trigger */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-gray-200 hover:text-white hover:border-electric-orange transition-all cursor-pointer"
                      >
                        <Maximize2 size={12} />
                        <span>Blueprint</span>
                      </button>
                    </div>

                    {/* Content & Engineering Breakdown */}
                    <div className="space-y-4 sm:space-y-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs font-mono">
                          <span className="uppercase text-electric-orange font-bold">
                            Role: {project.role}
                          </span>
                          <span className="text-gray-500 uppercase">
                            {project.tech.slice(0, 3).join(' • ')}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white">
                          <DecryptedText text={project.title} animateOn="hover" />
                        </h3>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* Problem & Solution Box */}
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                          <div>
                            <span className="text-[10px] font-mono font-bold text-electric-orange uppercase tracking-wider block">
                              ⚡ Challenge Solved
                            </span>
                            <p className="text-xs text-gray-300 leading-relaxed font-light">
                              {project.problem}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-white/5">
                            <span className="text-[10px] font-mono font-bold text-green-400 uppercase tracking-wider block">
                              🛠️ Engineering Solution
                            </span>
                            <p className="text-xs text-gray-400 leading-relaxed font-light">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Key Technical Highlights */}
                        <div className="space-y-1 pt-1">
                          {project.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                              <CheckCircle size={12} className="text-electric-orange shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
                        <ClickSpark sparkColor="#f97316" className="flex-1 min-w-[140px]">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-electric-orange hover:text-white transition-all shadow-lg group/btn"
                          >
                            <Zap size={14} className="group-hover/btn:animate-pulse" />
                            <span>Live Demo</span>
                            <ArrowUpRight size={14} />
                          </a>
                        </ClickSpark>

                        <Magnetic strength={0.25}>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white hover:text-electric-orange hover:bg-white/10 text-xs font-mono transition-all"
                            title="Inspect GitHub Repository"
                          >
                            <Code2 size={16} />
                          </a>
                        </Magnetic>

                        <Magnetic strength={0.25}>
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center justify-center px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-mono transition-all cursor-pointer"
                          >
                            <span>Blueprint</span>
                          </button>
                        </Magnetic>
                      </div>

                    </div>

                  </div>
                </BorderGlow>
              </div>
            ))}
          </ScrollStack>
        ) : (
          /* View Mode 2: Grid View */
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <SpotlightCard
                    tiltIntensity={5}
                    spotlightColor="rgba(249, 115, 22, 0.18)"
                    className="rounded-[2rem] h-full"
                  >
                    <div className="p-6 sm:p-8 rounded-[2rem] bg-[#0c0e14] border border-white/5 space-y-5 flex flex-col justify-between h-full">
                      
                      <div className="space-y-4">
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/5">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 text-[10px] font-mono text-emerald-400 font-bold border border-white/10">
                            {project.perf}% Score
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-electric-orange font-bold uppercase">{project.categoryLabel}</div>
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                            <DecryptedText text={project.title} animateOn="hover" />
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className="px-2.5 py-0.5 rounded-lg bg-white/5 text-[10px] font-mono text-gray-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 rounded-xl bg-electric-orange text-white text-xs font-bold text-center hover:bg-orange-600 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Zap size={13} />
                          <span>Live Demo</span>
                          <ArrowUpRight size={13} />
                        </a>
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white cursor-pointer"
                        >
                          Blueprint
                        </button>
                      </div>

                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>

      {/* Deep Architecture Blueprint Drawer Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/80 backdrop-blur-xl overscroll-contain">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl sm:max-w-3xl rounded-3xl bg-[#0e111a] border border-white/15 p-5 sm:p-8 lg:p-10 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-electric-orange font-bold uppercase">Technical Blueprint & Architecture</div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-0.5">{activeModalProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="min-w-[40px] min-h-[40px] p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-mono">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-gray-400 uppercase text-[10px]">Frontend Architecture</div>
                  <div className="text-white font-bold">{activeModalProject.architectureDetails.frontendStack}</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-gray-400 uppercase text-[10px]">Backend & Infrastructure</div>
                  <div className="text-white font-bold">{activeModalProject.architectureDetails.backendStack}</div>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-electric-orange uppercase">Core Engineering Challenge:</span>
                  <p className="text-xs leading-relaxed text-gray-300 font-light">
                    {activeModalProject.architectureDetails.keyChallenge}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-green-400 uppercase">Architecture Decision & Outcome:</span>
                  <p className="text-xs leading-relaxed text-gray-300 font-light">
                    {activeModalProject.architectureDetails.engineeringOutcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={activeModalProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-3.5 rounded-xl bg-electric-orange text-white font-bold text-xs uppercase tracking-wider text-center hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Zap size={14} />
                  <span>Launch Live System</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={activeModalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-electric-orange text-xs font-mono transition-colors flex items-center gap-2"
                >
                  <Code2 size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
