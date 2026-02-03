
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
  <div className="group relative bg-card-bg rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-electric-orange/30 transition-all duration-700">
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
      
      {/* Performance Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
        <Zap size={14} className="text-yellow-400 fill-yellow-400" />
        <span className="text-xs font-bold text-white">{project.perf}% Perf Score</span>
      </div>
    </div>
    
    <div className="p-10 space-y-6">
      <div className="space-y-2">
        <h4 className="text-3xl font-display font-bold group-hover:text-electric-orange transition-colors">{project.title}</h4>
        <div className="flex flex-wrap gap-2">
           {project.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t}</span>)}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
          <span className="text-[10px] font-bold text-electric-orange uppercase block mb-1">Problem Solved</span>
          <p className="text-sm text-gray-400 leading-relaxed italic">{project.problem}</p>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
      </div>
      
      <div className="flex gap-4 pt-4">
        <a href={project.liveLink} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-2xl hover:bg-electric-orange hover:text-white transition-all">
          <ExternalLink size={18} /> Live Demo
        </a>
        <a href={project.githubLink} className="inline-flex items-center justify-center w-14 h-14 border border-white/10 rounded-2xl hover:border-electric-orange hover:text-electric-orange transition-all">
          <Github size={20} />
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "TaskFlow Enterprise",
      problem: "Teams struggled with slow sync and poor mobile UX for complex task management.",
      description: "A production-grade SaaS solution optimized for real-time collaboration. No lag. No nonsense. Built for 10k+ concurrent users.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      tech: ["React", "Node.js", "MongoDB"],
      perf: 99,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "LogisticX Solver",
      problem: "Manual supply chain tracking was causing 15% inventory leakage yearly.",
      description: "Automated logistics hub. High-performance data pipelines reducing errors by 40% with automated audit trails.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200",
      tech: ["TypeScript", "Supabase", "Express"],
      perf: 97,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Interactive Web Engine",
      problem: "Browser games often suffer from heavy assets and long initial loading screens.",
      description: "Custom lightweight rendering engine implementation for smooth interactive visualizations and canvas-based experiences.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",
      tech: ["Canvas API", "WebGL", "JavaScript"],
      perf: 100,
      liveLink: "#",
      githubLink: "#",
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
          <p className="text-gray-500 max-w-sm">No tutorial clones here. These are high-impact solutions engineered for real business challenges.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
