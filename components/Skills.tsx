
import React from 'react';
import { Database, Layout, Search, Command, Layers } from 'lucide-react';

const SkillGroup: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="p-10 rounded-[2.5rem] bg-card-bg border border-white/5 group hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-electric-orange/10 transition-colors">
      {icon}
    </div>
    <h4 className="text-2xl font-bold mb-8 group-hover:text-electric-orange transition-colors">{title}</h4>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span key={skill} className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 text-sm font-medium text-gray-400 group-hover:border-white/10 group-hover:text-white transition-all">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="space-y-4">
              <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em]">Modern Tech Stack</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight">My <span className="text-electric-orange">Lethal</span> Tools</h3>
           </div>
           <p className="text-gray-500 max-w-sm">I don't just use tools; I master them to deliver peak performance and unbreakable stability.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           <SkillGroup title="Frontend" icon={<Layout size={80}/>} skills={['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Next.js']} />
           <SkillGroup title="Backend" icon={<Database size={80}/>} skills={['Node.js', 'Express', 'MongoDB', 'Supabase', 'REST APIs', 'SQL']} />
           <SkillGroup title="The Expert Set" icon={<Layers size={80}/>} skills={['Git', 'Netlify', 'Performance Opt.', 'Authentication', 'Advanced Debugging']} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
