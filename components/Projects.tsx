import React, { useState } from 'react';
import { ExternalLink, Github, Layout, Cpu, Zap, Code2, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SpotlightCard from './effects/SpotlightCard';
import ClickSpark from './effects/ClickSpark';
import DecryptedText from './effects/DecryptedText';

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  description: string;
  image: string;
  tech: string[];
  perf: number;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpotlightCard
      spotlightColor="rgba(249, 115, 22, 0.22)"
      tiltIntensity={4}
      className={`group rounded-3xl bg-[#0d0d12]/95 border border-white/10 hover:border-electric-orange/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl ${
        featured ? 'lg:col-span-1' : ''
      }`}
    >
      <div>
        {/* Project Visual Image / Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black/60 border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/40" />

          {/* Performance optimization badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-xl border border-white/10 z-10">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-white">{project.perf}% Performance</span>
          </div>

          {/* Type Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-electric-orange/20 backdrop-blur-md text-electric-orange text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg z-10 border border-electric-orange/30 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-7 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-display font-bold text-white group-hover:text-electric-orange transition-colors">
                {project.title}
              </h4>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-gray-300 group-hover:border-electric-orange/20 group-hover:text-white transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Problem & Solution Box */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 font-mono text-xs">
            <div className="relative pl-3.5 border-l-2 border-electric-orange">
              <span className="text-[10px] uppercase tracking-wider text-electric-orange font-bold block mb-0.5">
                The Engineering Challenge
              </span>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">{project.problem}</p>
            </div>
            <div className="relative pl-3.5 border-l-2 border-green-500">
              <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold block mb-0.5">
                The Architectural Solution
              </span>
              <p className="text-gray-400 font-sans text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm font-light leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-7 pt-0 flex items-center gap-3">
        <ClickSpark sparkColor="#f97316" className="flex-1">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-black hover:bg-electric-orange hover:text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Live App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </ClickSpark>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub Source"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-electric-orange/50 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </SpotlightCard>
  );
};

const Projects: React.FC = () => {
  const architectures: Project[] = [
    {
      title: 'Galaxy Defender: 2D Canvas Engine',
      category: 'System Engine',
      problem: 'Browsers struggled with rendering hundreds of active entities, collisions, and particle vectors at constant 60fps on mobile viewports.',
      solution: 'Engineered a custom HTML5 Canvas rendering loop with object pooling, mathematical vector physics, and strict state decoupling.',
      description: 'A responsive space shooter proving high-performance real-time graphics and zero frame-drop game loops in pure vanilla JavaScript.',
      image: 'https://i.ibb.co/qF2wKHgh/2.jpg',
      tech: ['Canvas API', 'Vector Physics', 'OOP Architecture', 'State Loop'],
      perf: 100,
      liveLink: 'https://galaxy-defender-2-d-game.vercel.app/',
      githubLink: 'https://github.com/FrancoBeatz',
    },
    {
      title: 'CreamFlow: Sensory E-Commerce',
      category: 'Digital Showroom',
      problem: 'Luxury skincare brands need immersive aesthetic experiences that load instantaneously without bulky asset lag.',
      solution: 'Architected high-contrast layouts, smooth fluid micro-animations, fast component caching, and friction-free conversion workflows.',
      description: 'A modern e-commerce showroom that balances tactile UI aesthetics with fast responsive rendering.',
      image: 'https://i.ibb.co/KjGcwFR4/creamflow.jpg',
      tech: ['React SPA', 'Tailwind CSS', 'Motion Physics', 'Responsive UI'],
      perf: 100,
      liveLink: 'https://creamflow.vercel.app/',
      githubLink: 'https://github.com/FrancoBeatz',
    },
  ];

  const clientWebsites: Project[] = [
    {
      title: 'Mkhonto Global Capital',
      category: 'Enterprise Portal',
      problem: 'Global human capital firm needed an authoritative digital footprint with streamlined consultation discovery and SEO.',
      solution: 'Designed and deployed a responsive corporate portal with dynamic content sections, optimized assets, and clean accessibility.',
      description: 'Production enterprise website supporting corporate advisory and human resource consulting operations.',
      image: 'https://i.ibb.co/8grqP05h/Capture.jpg',
      tech: ['Enterprise UI', 'Business Logic', 'SEO Optimization'],
      perf: 100,
      liveLink: 'https://linda-mkhonto-global-human-capital.vercel.app/',
      githubLink: 'https://github.com/FrancoBeatz',
    },
    {
      title: 'Tracy Mashishi Portfolio',
      category: 'Client Branding',
      problem: 'Client needed an elite personal brand showcase with fast page loads and elegant mobile responsiveness.',
      solution: 'Engineered bespoke UI typography hierarchy, optimized image delivery, and smooth client inquiry flows.',
      description: 'A bespoke personal portfolio built for high conversion and professional distinction.',
      image: 'https://i.ibb.co/9kjtMfCG/tracy.jpg',
      tech: ['UX Architecture', 'Performance', 'Mobile-First'],
      perf: 100,
      liveLink: 'https://tracymashishi.co.za/',
      githubLink: 'https://github.com/FrancoBeatz',
    },
    {
      title: 'Kolas Supply Chain',
      category: 'Logistics Portal',
      problem: 'Logistics operations suffered from fragmented tracking data across cross-border freight channels.',
      solution: 'Constructed an integrated tracking dashboard interface with streamlined status telemetry and real-time clarity.',
      description: 'Cross-border supply chain web portal built to give cargo handlers and clients real-time visibility.',
      image: 'https://i.ibb.co/pB6LDjZh/1.jpg',
      tech: ['Data Visualization', 'Node.js', 'Clean Architecture'],
      perf: 98,
      liveLink: 'https://kola-s-rat-p-supply.vercel.app/',
      githubLink: 'https://github.com/FrancoBeatz',
    },
    {
      title: 'Child Care Africa',
      category: 'NGO Platform',
      problem: 'Low-bandwidth users in rural African communities faced high abandonment due to bloated humanitarian portals.',
      solution: 'Redesigned the entire web architecture to under 150KB total payload for near-instant rendering on 2G/3G connections.',
      description: 'Humanitarian web platform dedicated to child welfare support and social initiative outreach.',
      image: 'https://i.ibb.co/7dM7xMWX/child-care-africa-netlify-app.png',
      tech: ['Ultra-Lightweight', 'Accessible UX', 'Global Impact'],
      perf: 99,
      liveLink: 'https://child-care-africa.vercel.app/',
      githubLink: 'https://github.com/FrancoBeatz',
    },
  ];

  return (
    <section id="projects" className="py-28 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-xs font-mono text-electric-orange">
              <Code2 className="w-3.5 h-3.5" />
              <span>PROVEN WORK & DEPLOYMENTS</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
              Engineered <span className="text-electric-orange">Products</span> & Systems
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Real-world applications delivering measurable speed, elegant interfaces, and resilient code architecture.
          </p>
        </div>

        {/* Flagship Architectures */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-mono text-electric-orange uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5">
              Featured Flagship Systems
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {architectures.map((project, idx) => (
              <ProjectCard key={idx} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Business Platforms & Client Portals */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5">
              Client & Enterprise Web Applications
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clientWebsites.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
