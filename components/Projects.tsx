import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Code2, Cpu, Layout, ArrowUpRight, CheckCircle, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';
import ClickSpark from './effects/ClickSpark';
import Magnetic from './effects/Magnetic';

interface Project {
  title: string;
  category: 'architecture' | 'website';
  categoryLabel: string;
  problem: string;
  solution: string;
  description: string;
  image: string;
  tech: string[];
  perf: number;
  liveLink: string;
  githubLink: string;
  highlights: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'architecture' | 'website'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "CreamFlow",
      category: "architecture",
      categoryLabel: "Flagship Showroom & E-Commerce",
      problem: "A luxury skincare and product service needed an immersive digital showroom with flawless transitions and high visual contrast to captivate customers without latency.",
      solution: "Engineered a high-performance interactive brand platform featuring cream-themed, ultra-fluid aesthetic layouts, sensory motion physics, and zero layout shift.",
      description: "A premium e-commerce design and fluid digital showroom built with modern responsive elements and high-contrast motion physics.",
      image: "https://i.ibb.co/KjGcwFR4/creamflow.jpg",
      tech: ["React", "Aesthetic UI", "Motion Physics", "Tailwind CSS"],
      perf: 100,
      liveLink: "https://creamflow.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      highlights: ["100% Lighthouse Score", "Custom Sensory Transitions", "Responsive Grid Layout"]
    },
    {
      title: "Galaxy Defender: Canvas Engine",
      category: "architecture",
      categoryLabel: "Interactive Web Game Engine",
      problem: "Traditional DOM-based rendering was too slow to handle dozens of moving vector entities simultaneously at 60 FPS across mobile and desktop viewports.",
      solution: "Constructed a custom 2D canvas drawing system operating directly on hardware-accelerated buffers with vector physics, collision detection, and modular OOP architecture.",
      description: "A fast-paced space game demonstrating high-speed browser graphics, particle rendering, and object-oriented JavaScript design.",
      image: "https://i.ibb.co/qF2wKHgh/2.jpg",
      tech: ["Canvas API", "Vector Physics", "OOP Architecture", "JavaScript ES6+"],
      perf: 100,
      liveLink: "https://galaxy-defender-2-d-game.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      highlights: ["60 FPS Rendering", "Custom Physics Calculations", "Object-Oriented Design"]
    },
    {
      title: "Mkhonto Global Capital",
      category: "website",
      categoryLabel: "Enterprise Commercial Portal",
      problem: "A premier executive recruitment and human capital consulting firm needed an authoritative digital portal to attract enterprise partners globally.",
      solution: "Engineered a secure, lightning-fast multi-section corporate portal with optimized SEO metadata, mobile-first touch UX, and direct lead generation pipeline.",
      description: "A high-quality business website built for a global human capital consulting firm.",
      image: "https://i.ibb.co/8grqP05h/Capture.jpg",
      tech: ["Enterprise UI", "Business Logic", "Next-Gen UX", "Tailwind CSS"],
      perf: 100,
      liveLink: "https://linda-mkhonto-global-human-capital.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      highlights: ["Full Search Optimization", "Lead Pipeline Integration", "Cross-Device Parity"]
    },
    {
      title: "Tracy Mashishi Portfolio",
      category: "website",
      categoryLabel: "High-Performance Personal Brand",
      problem: "A professional client required a distinctive, cinematic personal brand portfolio to stand out in a competitive consulting and speaking market.",
      solution: "Engineered a custom responsive architecture with ultra-fast initial paint times, high-fidelity visual interactions, and seamless media presentation.",
      description: "A premium business portfolio built with modern web standards for a seamless user experience.",
      image: "https://i.ibb.co/9kjtMfCG/tracy.jpg",
      tech: ["UX Engineering", "Performance", "Business Branding", "React"],
      perf: 100,
      liveLink: "https://tracymashishi.co.za/",
      githubLink: "https://github.com/FrancoBeatz",
      highlights: ["Sub-second First Paint", "Custom Aesthetic Typography", "Contact Action Flows"]
    },
    {
      title: "Kolas Supply Chain",
      category: "website",
      categoryLabel: "Logistics & Real-Time Tracking Dashboard",
      problem: "Logistics and warehouse workers struggled with fragmented spreadsheets, leading to delayed inventory updates across border transit hubs.",
      solution: "Built a centralized web interface aggregating inventory status in real time with Node.js backend logic and responsive inventory status metrics.",
      description: "A professional tool for tracking goods, supplies, and transit logistics across regional checkpoints.",
      image: "https://i.ibb.co/pB6LDjZh/1.jpg",
      tech: ["Cloud Data", "Node.js", "Predictive Analytics", "REST API"],
      perf: 98,
      liveLink: "https://kola-s-rat-p-supply.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      highlights: ["Real-time Status Feed", "Node.js Data Pipeline", "High Data Density UX"]
    },
    {
      title: "Child Care Africa",
      category: "website",
      categoryLabel: "Humanitarian Mobile Platform",
      problem: "Users in remote regions with low-bandwidth 3G connections frequently encountered timeouts when attempting to donate and review child welfare reports.",
      solution: "Rebuilt the architecture from scratch to be ultra-lightweight, eliminating heavy scripts and prioritizing instant asset delivery on cellular data.",
      description: "A fast, accessible, and lightweight platform designed to connect donors with community relief initiatives across Africa.",
      image: "https://i.ibb.co/7dM7xMWX/child-care-africa-netlify-app.png",
      tech: ["Performance Optimization", "Mobile-First", "Impact Design", "Accessible UI"],
      perf: 99,
      liveLink: "https://child-care-africa.vercel.app/",
      githubLink: "https://github.com/FrancoBeatz",
      highlights: ["Optimized for 3G Connections", "Accessible Semantic HTML", "Instant Interaction"]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Dynamic Lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Layers size={14} />
              <span>Selected Works & Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
              Featured <span className="text-electric-orange">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Real-world systems, e-commerce platforms, custom canvas engines, and business portals engineered for performance and reliability.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'all', label: 'All Projects (6)' },
            { id: 'architecture', label: 'Flagship Systems & Engines' },
            { id: 'website', label: 'Business & Commercial Websites' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? 'bg-electric-orange text-white shadow-lg shadow-electric-orange/30'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <BorderGlow
                    borderRadius={36}
                    backgroundColor="#0a0c12"
                    colors={project.category === 'architecture' ? ['#f97316', '#fb923c', '#ffffff'] : ['#38bdf8', '#818cf8', '#ffffff']}
                    className="h-full"
                  >
                    <div className="flex flex-col h-full overflow-hidden">
                      
                      {/* Project Image & Performance Tag */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black group/img">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] via-transparent to-black/40" />

                        {/* Top Badges */}
                        <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-bold font-mono text-white">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{project.perf}% Optimization</span>
                        </div>

                        <div className="absolute top-5 right-5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                          {project.categoryLabel}
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col justify-between">
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-electric-orange transition-colors">
                              <DecryptedText text={project.title} animateOn="hover" />
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mt-2">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300 font-semibold"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Problem & Solution Accordion */}
                          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                            <div>
                              <span className="text-[10px] font-mono font-black text-electric-orange uppercase tracking-wider block mb-1">
                                ⚡ Problem Solved
                              </span>
                              <p className="text-xs text-gray-300 leading-relaxed font-light">
                                {project.problem}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-white/5">
                              <span className="text-[10px] font-mono font-black text-green-400 uppercase tracking-wider block mb-1">
                                🛠️ Architectural Solution
                              </span>
                              <p className="text-xs text-gray-400 leading-relaxed font-light">
                                {project.solution}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                          <ClickSpark sparkColor="#f97316" className="flex-1">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-black font-extrabold text-sm hover:bg-electric-orange hover:text-white transition-all shadow-lg group/btn"
                            >
                              <Zap size={16} className="group-hover/btn:animate-pulse" />
                              <span>Live Preview</span>
                              <ArrowUpRight size={16} />
                            </a>
                          </ClickSpark>

                          <Magnetic strength={0.3}>
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-white hover:text-electric-orange hover:bg-white/10 transition-all"
                              title="Inspect GitHub Repository"
                            >
                              <Code2 size={20} />
                            </a>
                          </Magnetic>
                        </div>

                      </div>

                    </div>
                  </BorderGlow>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
