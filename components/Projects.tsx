
import React from 'react';
import { ExternalLink, Github, Layout, Cpu, Zap, Code2 } from 'lucide-react';

interface Project {
  title: string;
  problem: string;
  solution: string;
  description: string;
  image: string;
  tech: string[];
  perf: number;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<{ project: Project; type: 'architecture' | 'website' }> = ({ project, type }) => (
  <div className={`group relative bg-card-bg rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-electric-orange/40 transition-all duration-700 h-full flex flex-col hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(249,115,22,0.1)]`}>
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
      
      {/* Performance Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 z-10">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-bold text-white">{project.perf}% Optimization</span>
      </div>

      <div className="absolute top-6 right-6 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-lg z-10 border border-white/10">
        {type === 'architecture' ? <div className="flex items-center gap-1"><Cpu size={10} /> System Engine</div> : <div className="flex items-center gap-1"><Layout size={10} /> Enterprise Portal</div>}
      </div>
    </div>
    
    <div className="p-10 space-y-6 flex-1 flex flex-col">
      <div className="space-y-2">
        <h4 className="text-2xl font-display font-bold group-hover:text-electric-orange transition-colors duration-500">{project.title}</h4>
        <div className="flex flex-wrap gap-2">
           {project.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t}</span>)}
        </div>
      </div>
      
      <div className="space-y-4 flex-1">
        <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 group-hover:bg-white/[0.05] transition-colors">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-1 h-4 bg-electric-orange rounded-full"></div>
            <span className="text-[10px] font-black text-electric-orange uppercase block mb-1 tracking-widest">Engineering Challenge</span>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">{project.problem}</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-1 h-4 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-black text-green-500 uppercase block mb-1 tracking-widest">Architectural Solution</span>
            <p className="text-sm text-gray-400 leading-relaxed italic">{project.solution}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
      </div>
      
      <div className="flex gap-4 pt-6 mt-auto">
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-2xl hover:bg-electric-orange hover:text-white transition-all shadow-xl group/btn"
        >
          <Zap size={18} className="group-hover/btn:animate-pulse" /> Launch Environment
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center w-14 h-14 border border-white/10 rounded-2xl hover:border-electric-orange hover:text-electric-orange transition-all"
        >
          <Code2 size={20} />
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const architectures: Project[] = [
    {
      title: "SyncFlow Data Engine",
      problem: "Enterprise workflows were crippled by 'Latent Fragmentation'—where data synchronization between legacy SQL databases and modern cloud interfaces took upwards of 5 seconds.",
      solution: "Engineered a high-performance event-driven orchestration layer. It utilizes an atomic state management system and asynchronous worker threads to reduce data latency to sub-100ms.",
      description: "A professional-grade real-time data engine providing millisecond consistency for high-throughput business logic.",
      image: "https://i.ibb.co/zW2mkhYw/localhost-3000.png",
      tech: ["React", "TypeScript", "Worker Threads", "Orchestration"],
      perf: 100,
      liveLink: "https://syncflow-data.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz"
    },
    {
      title: "Galaxy Defender: Canvas Engine",
      problem: "Traditional browser games hit severe performance bottlenecks due to DOM manipulation overhead, causing frame drops below 30FPS on standard mobile hardware.",
      solution: "Developed a custom graphics pipeline from the ground up using the HTML5 Canvas API and mathematical vector logic, bypassing the DOM entirely to lock at a consistent 60FPS.",
      description: "A math-intensive arcade engine that serves as a benchmark for high-performance browser rendering.",
      image: "https://i.ibb.co/qF2wKHgh/2.jpg",
      tech: ["Canvas API", "Vector Physics", "OOP Architecture"],
      perf: 100,
      liveLink: "https://galaxy-defender-game.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz"
    }
  ];

  const websites: Project[] = [
    {
      title: "Mkhonto Global Capital",
      problem: "A major human capital firm lacked a scalable digital interface to manage high-level executive consultancy and recruitment at an enterprise level.",
      solution: "Architected a secure, high-conversion recruitment portal featuring complex filtering logic, optimized SEO headers, and a lightning-fast responsive UI.",
      description: "A premium corporate portal designed for high-end human capital consultancy and business management.",
      image: "https://i.ibb.co/8grqP05h/Capture.jpg",
      tech: ["Enterprise UI", "Business Logic", "Next-Gen UX"],
      perf: 100,
      liveLink: "https://mkhonto-global-human-capital-ent.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz"
    },
    {
      title: "Kolas Supply Chain",
      problem: "Global logistics visibility was obscured by siloed data sources, making real-time inventory tracking impossible for warehouse operators.",
      solution: "Built a cloud-native supply chain dashboard that aggregates disparate data streams into a single source of truth with real-time analytics and predictive alerts.",
      description: "Industrial-grade supply chain interface providing deep operational visibility across multiple logistics nodes.",
      image: "https://i.ibb.co/pB6LDjZh/1.jpg",
      tech: ["Cloud Data", "Node.js", "Predictive Analytics"],
      perf: 98,
      liveLink: "http://kolas-p-supply.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz"
    },
    {
      title: "Child Care Africa",
      problem: "Social impact initiatives often fail due to poor digital accessibility in low-bandwidth regions of Africa, resulting in a 70% bounce rate on legacy platforms.",
      solution: "Implemented a 'Performance-First' architecture, optimizing asset delivery and reducing initial bundle sizes by 60% to ensure 99/100 performance scores even on 3G networks.",
      description: "A social impact portal engineered for maximum digital accessibility and high-bandwidth efficiency.",
      image: "https://i.ibb.co/7dM7xMWX/child-care-africa-netlify-app.png",
      tech: ["Perf Optimization", "Mobile-First", "Impact Design"],
      perf: 99,
      liveLink: "https://child-care-africa.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6 space-y-32">
        
        {/* Architectures Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-orange/20 bg-electric-orange/5 text-[10px] font-black text-electric-orange uppercase tracking-[0.2em]">
                 Core Systems Engineering
               </div>
               <h3 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                 Primary <span className="text-electric-orange">Architectures</span>
               </h3>
            </div>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed text-right md:text-left">
              Advanced logic builds that solve high-complexity technical problems.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {architectures.map((p, idx) => <ProjectCard key={idx} project={p} type="architecture" />)}
          </div>
        </div>

        {/* Websites Section */}
        <div className="relative pt-24 border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-orange/20 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 text-right md:text-left w-full md:w-auto">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">
                 Strategic Enterprise Solutions
               </div>
               <h3 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                 Production <span className="text-white">Portals</span>
               </h3>
            </div>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed text-right md:text-left">
              Scalable, high-conversion platforms engineered for professional enterprise standards.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {websites.map((p, idx) => <ProjectCard key={idx} project={p} type="website" />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
