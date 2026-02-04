
import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

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
  featured?: boolean;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className={`group relative bg-card-bg rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-electric-orange/40 transition-all duration-700 h-full flex flex-col hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(249,115,22,0.1)] ${project.featured ? 'lg:col-span-1' : ''}`}>
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
      
      {/* Performance Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 z-10">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-bold text-white">{project.perf}% Score</span>
      </div>

      {project.featured && (
        <div className="absolute top-6 right-6 px-3 py-1.5 bg-electric-orange text-white text-[10px] font-black uppercase tracking-widest rounded-lg z-10 shadow-lg">
          Primary Build
        </div>
      )}
    </div>
    
    <div className="p-10 space-y-6 flex-1 flex flex-col">
      <div className="space-y-2">
        <h4 className={`${project.featured ? 'text-3xl' : 'text-2xl'} font-display font-bold group-hover:text-electric-orange transition-colors duration-500`}>{project.title}</h4>
        <div className="flex flex-wrap gap-2">
           {project.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t}</span>)}
        </div>
      </div>
      
      <div className="space-y-4 flex-1">
        <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 group-hover:bg-white/[0.05] transition-colors">
          <div>
            <span className="text-[10px] font-bold text-electric-orange uppercase block mb-1">The Challenge</span>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">{project.problem}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-green-500 uppercase block mb-1">The Engineering Solution</span>
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
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-2xl hover:bg-electric-orange hover:text-white transition-all shadow-xl"
        >
          <ExternalLink size={18} /> Experience Live App
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center w-14 h-14 border border-white/10 rounded-2xl hover:border-electric-orange hover:text-electric-orange transition-all"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "Galaxy Defender",
      problem: "Traditional browser games suffer from DOM overhead, leading to input lag and frame drops on varied hardware.",
      solution: "Engineered a custom rendering pipeline using pure HTML5 Canvas and mathematical vector logic to bypass the DOM, ensuring 60FPS consistent output.",
      description: "A high-octane space shooter that serves as a benchmark for browser performance.",
      image: "https://i.ibb.co/qF2wKHgh/2.jpg",
      tech: ["Canvas API", "JavaScript", "Vector Math", "OOP"],
      perf: 100,
      liveLink: "https://galaxy-defender-game.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
      featured: true
    },
    {
      title: "Nexus Chat Live",
      problem: "Standard HTTP requests are too slow for real-time collaboration, causing race conditions in message delivery.",
      solution: "Implemented a full-duplex WebSocket architecture with Socket.io, backed by a persistent Redis-like state layer.",
      description: "A professional-grade real-time messaging engine.",
      image: "https://i.ibb.co/yn51d2rG/2.jpg",
      tech: ["React", "Socket.io", "Node.js", "Express"],
      perf: 99,
      liveLink: "https://nexus-chat-live.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-orange/20 bg-electric-orange/5 text-[10px] font-black text-electric-orange uppercase tracking-[0.2em]">
               Production Ready
             </div>
             <h3 className="text-5xl md:text-7xl font-display font-bold leading-tight">
               Primary <span className="text-electric-orange">Architectures</span>
             </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
            I don't just build websites; I engineer interactive platforms that solve hard technical problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {featuredProjects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
