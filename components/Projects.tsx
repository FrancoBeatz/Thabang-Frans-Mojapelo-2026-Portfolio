
import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

interface Project {
  title: string;
  problem: string;
  description: string;
  image: string;
  tech: string[];
  perf: number;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative bg-card-bg rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-electric-orange/30 transition-all duration-700 h-full flex flex-col">
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
      
      {/* Performance Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-bold text-white">{project.perf}% Score</span>
      </div>
    </div>
    
    <div className="p-10 space-y-6 flex-1 flex flex-col">
      <div className="space-y-2">
        <h4 className="text-2xl font-display font-bold group-hover:text-electric-orange transition-colors">{project.title}</h4>
        <div className="flex flex-wrap gap-2">
           {project.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t}</span>)}
        </div>
      </div>
      
      <div className="space-y-4 flex-1">
        <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
          <span className="text-[10px] font-bold text-electric-orange uppercase block mb-1">Impact</span>
          <p className="text-sm text-gray-400 leading-relaxed italic">{project.problem}</p>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
      </div>
      
      <div className="flex gap-4 pt-6 mt-auto">
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-2xl hover:bg-electric-orange hover:text-white transition-all"
        >
          <ExternalLink size={18} /> Live
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
  const projects: Project[] = [
    {
      title: "Child Care Africa",
      problem: "Non-profit organizations required a high-performance platform to coordinate welfare initiatives.",
      description: "A professional web application built for social impact. Focused on lightning-fast load times, global accessibility, and seamless UX for donors.",
      image: "https://i.ibb.co/NdDwgDjs/child-care-africa-netlify-app.png",
      tech: ["React", "Tailwind", "Vite"],
      perf: 99,
      liveLink: "https://child-care-africa-official.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
    },
    {
      title: "Kolas Supply Chain",
      problem: "A fragmented supply chain system causing inventory delays and lack of transparency.",
      description: "A comprehensive supply chain management dashboard focused on real-time asset tracking and inventory optimization for modern operations.",
      image: "https://i.ibb.co/pB6LDjZh/1.jpg",
      tech: ["React", "Vite", "Netlify"],
      perf: 98,
      liveLink: "https://kolas-p-supply.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
    },
    {
      title: "FrancoBeatz Marketplace",
      problem: "Digital asset trading platforms often suffer from slow search indices and clunky checkout.",
      description: "A high-performance digital marketplace engineered for speed. Features instant search, secure transactions, and a vendor dashboard.",
      image: "https://i.ibb.co/Wpv32DB7/1.jpg",
      tech: ["React", "Supabase", "Netlify"],
      perf: 99,
      liveLink: "https://francobeatz-marketplace.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
    },
    {
      title: "Galaxy Defender",
      problem: "Web games struggle with input lag and inconsistent framerates across low-end devices.",
      description: "A high-octane space shooter engineered with pure Canvas API for zero-latency gameplay. Features adaptive difficulty and 60FPS rendering.",
      image: "https://i.ibb.co/qF2wKHgh/2.jpg",
      tech: ["JavaScript", "Canvas API", "HTML5"],
      perf: 100,
      liveLink: "https://galaxy-defender-game.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
    },
    {
      title: "Global Human Capital",
      problem: "Executive talent acquisition required a sophisticated digital hub for corporate networking.",
      description: "A premium corporate platform for human capital consultancy. Engineered for professional service profiling with high-end aesthetic navigation.",
      image: "https://i.ibb.co/4R8z47TQ/Capture.jpg",
      tech: ["React", "Tailwind", "Vite"],
      perf: 98,
      liveLink: "https://lindamkhonto-global-human-capital.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
    },
    {
      title: "Nexus Chat Live",
      problem: "Real-time communication platforms often struggle with synchronization and latency during high traffic.",
      description: "A professional real-time messaging suite built for instant synchronization. Features persistent chat history, presence indicators, and ultra-low latency delivery.",
      image: "https://i.ibb.co/yn51d2rG/2.jpg",
      tech: ["React", "Socket.io", "Netlify"],
      perf: 99,
      liveLink: "https://nexus-chat-live.netlify.app/",
      githubLink: "https://github.com/FrancoBeatz",
    }
  ];

  return (
    <section id="projects" className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
             <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em]">Real builds only</h2>
             <h3 className="text-4xl md:text-6xl font-display font-bold">Featured <span className="text-electric-orange">Works</span></h3>
          </div>
          <p className="text-gray-500 max-w-sm">No tutorial clones. These are production-ready solutions engineered for specific business challenges.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
