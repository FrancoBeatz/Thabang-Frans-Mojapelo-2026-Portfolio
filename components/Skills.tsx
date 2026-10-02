import React, { useState } from 'react';
import { Layout, Database, Terminal, Layers, Code, Server, Globe, Cpu, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoLoop, { LogoItem } from './effects/LogoLoop';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const techLogos: LogoItem[] = [
    { title: 'React', badge: 'Frontend', node: <Layout size={16} /> },
    { title: 'JavaScript (ES6+)', badge: 'Core', node: <Code size={16} /> },
    { title: 'Node.js', badge: 'Backend', node: <Server size={16} /> },
    { title: 'Express.js', badge: 'API', node: <Layers size={16} /> },
    { title: 'MongoDB', badge: 'Database', node: <Database size={16} /> },
    { title: 'Tailwind CSS', badge: 'Styling', node: <Sparkles size={16} /> },
    { title: 'HTML5 & CSS3', badge: 'Layout', node: <Globe size={16} /> },
    { title: 'Bootstrap', badge: 'UI', node: <Layout size={16} /> },
    { title: 'REST APIs', badge: 'Architecture', node: <Cpu size={16} /> },
    { title: 'Git & GitHub', badge: 'VCS', node: <Terminal size={16} /> },
    { title: 'Responsive Design', badge: 'Mobile-First', node: <CheckCircle2 size={16} /> },
    { title: 'Website Deployment', badge: 'DevOps', node: <ShieldCheck size={16} /> },
  ];

  const skillCategories = [
    {
      id: 'frontend',
      category: 'Frontend Engineering',
      icon: <Layout className="text-electric-orange" size={28} />,
      color: 'rgba(249, 115, 22, 0.15)',
      description: 'Building high-performance, mobile-first responsive interfaces and component systems.',
      skills: [
        { name: 'React', level: 'Advanced Component Architecture', experience: 'Core Focus' },
        { name: 'JavaScript (ES6+)', level: 'Async, DOM, ES Modules', experience: 'Foundational' },
        { name: 'HTML5 & Semantic Web', level: 'Accessibility & SEO Ready', experience: 'Standard' },
        { name: 'CSS3 & Tailwind CSS', level: 'Grid, Flexbox, Animations', experience: 'Production' },
        { name: 'Bootstrap', level: 'Rapid Responsive Prototyping', experience: 'Clean UI' },
      ],
    },
    {
      id: 'backend',
      category: 'Backend & Database Systems',
      icon: <Database className="text-sky-400" size={28} />,
      color: 'rgba(56, 189, 248, 0.15)',
      description: 'Developing secure REST APIs, authentication layers, and scalable database schemas.',
      skills: [
        { name: 'Node.js', level: 'Event-driven Server Runtime', experience: 'Backend' },
        { name: 'Express.js', level: 'RESTful API Routing & Middleware', experience: 'API Architecture' },
        { name: 'MongoDB', level: 'NoSQL Document Schemas & Aggregations', experience: 'Database' },
        { name: 'RESTful API Design', level: 'CRUD, Token Auth, Error Handling', experience: 'Services' },
      ],
    },
    {
      id: 'tools',
      category: 'Tooling & Deployment',
      icon: <Terminal className="text-purple-400" size={28} />,
      color: 'rgba(168, 85, 247, 0.15)',
      description: 'Streamlining modern developer workflows, version control, hosting, and performance audits.',
      skills: [
        { name: 'Git & GitHub', level: 'Branching, PRs, Version Control', experience: 'Daily Flow' },
        { name: 'VS Code & DevTools', level: 'Debugging & Performance Profiling', experience: 'IDE' },
        { name: 'Website Deployment', level: 'Vercel, Netlify, Domain & DNS Setup', experience: 'Hosting' },
        { name: 'UI/UX Principles', level: 'Visual Hierarchy & Mobile Optimization', experience: 'User Focus' },
      ],
    },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Cpu size={14} />
              <span>Technical Stack & Tooling</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
              Tools & <span className="text-electric-orange">Technologies</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            I leverage modern JavaScript, React, Node.js, and MongoDB tools to build robust, scalable products that solve real-world problems.
          </p>
        </div>

        {/* Dynamic Infinite LogoLoop Ticker */}
        <div className="rounded-3xl bg-[#090b10] border border-white/5 p-2 overflow-hidden shadow-2xl">
          <LogoLoop logos={techLogos} speed={30} gap={20} scaleOnHover />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'frontend', label: 'Frontend & UI' },
            { id: 'backend', label: 'Backend & APIs' },
            { id: 'tools', label: 'Tooling & Deployment' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-electric-orange text-white shadow-lg shadow-electric-orange/30'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <BorderGlow
                  borderRadius={32}
                  backgroundColor="#0a0c12"
                  colors={['#f97316', '#38bdf8', '#a855f7']}
                  className="h-full"
                >
                  <div className="p-8 md:p-10 space-y-8 h-full flex flex-col justify-between">
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 inline-flex">
                          {cat.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 uppercase tracking-wider">
                          Verified Stack
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          <DecryptedText text={cat.category} animateOn="hover" />
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          {cat.description}
                        </p>
                      </div>

                      {/* Detailed Skill Pills */}
                      <div className="space-y-3 pt-2">
                        {cat.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono text-electric-orange font-semibold">
                                {skill.experience}
                              </span>
                            </div>
                            <div className="text-[11px] text-gray-400">
                              {skill.level}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                      <span>Production Grade</span>
                      <span className="text-green-400 font-bold">100% Validated</span>
                    </div>

                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
