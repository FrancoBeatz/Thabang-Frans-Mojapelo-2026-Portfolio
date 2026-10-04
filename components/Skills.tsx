import React, { useState } from 'react';
import { Database, Layout, Layers, Code, Server, Globe, Cpu, CheckCircle2, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoLoop, { LogoItem } from './effects/LogoLoop';
import SpotlightCard from './effects/SpotlightCard';
import DecryptedText from './effects/DecryptedText';

const techLogos: LogoItem[] = [
  { title: 'React', badge: 'v18/19', node: <Layout className="w-5 h-5" /> },
  { title: 'TypeScript', badge: 'Strict', node: <Code className="w-5 h-5" /> },
  { title: 'JavaScript (ES6+)', badge: 'Core', node: <Sparkles className="w-5 h-5" /> },
  { title: 'Node.js', badge: 'Backend', node: <Server className="w-5 h-5" /> },
  { title: 'Express.js', badge: 'API', node: <Terminal className="w-5 h-5" /> },
  { title: 'MongoDB', badge: 'NoSQL', node: <Database className="w-5 h-5" /> },
  { title: 'Tailwind CSS', badge: 'Styling', node: <Layers className="w-5 h-5" /> },
  { title: 'Git & GitHub', badge: 'VCS', node: <ShieldCheck className="w-5 h-5" /> },
  { title: 'RESTful Architecture', badge: 'Design', node: <Globe className="w-5 h-5" /> },
];

const SkillGroup: React.FC<{
  title: string;
  category: string;
  skills: { name: string; level: string; desc: string }[];
  icon: React.ReactNode;
  accentColor: string;
}> = ({ title, category, skills, icon, accentColor }) => (
  <SpotlightCard
    spotlightColor={accentColor}
    tiltIntensity={5}
    className="p-8 rounded-3xl bg-[#0d0d12]/90 border border-white/10 relative overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-electric-orange">
          {icon}
        </div>
        <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
          {category}
        </span>
      </div>

      <h4 className="text-2xl font-display font-bold text-white mb-2">{title}</h4>
      <p className="text-xs text-gray-400 mb-6 font-mono">Verified Stack Capabilities</p>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-electric-orange/30 hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-gray-200 group-hover:text-electric-orange transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                {skill.level}
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-light leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
      <span>Status: Active</span>
      <span className="text-green-400 flex items-center gap-1">
        <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
      </span>
    </div>
  </SpotlightCard>
);

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'devops'>('all');

  return (
    <section id="skills" className="py-28 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-xs font-mono text-electric-orange">
              <Cpu className="w-3.5 h-3.5" />
              <span>STACK & ARCHITECTURE</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
              Tools That Power <br />
              <span className="text-electric-orange">High-Performance</span> Code
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            I specialize in full-cycle web engineering — bridging high-fidelity, accessible frontend interfaces with robust, scalable backends and secure databases.
          </p>
        </div>

        {/* Live Tech Stream Marquee */}
        <div className="mb-14">
          <LogoLoop logos={techLogos} speed={32} />
        </div>

        {/* Grid of Specialized Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <SkillGroup
            title="Frontend Engineering"
            category="Client-Side"
            accentColor="rgba(56, 189, 248, 0.2)"
            icon={<Layout className="w-6 h-6" />}
            skills={[
              { name: 'React & Hooks', level: 'Advanced', desc: 'SPA architecture, custom state machines, lifecycle optimization & context.' },
              { name: 'JavaScript (ES6+) & TS', level: 'Proficient', desc: 'Async/await, modern DOM manipulation, strict type safety & modular patterns.' },
              { name: 'Tailwind CSS & CSS3', level: 'Expert', desc: 'Modern responsive systems, bespoke styling, CSS grid/flexbox & animations.' },
              { name: 'HTML5 & Semantic Web', level: 'Expert', desc: 'Accessible (a11y) structures, SEO foundations & semantic layouts.' },
            ]}
          />

          <SkillGroup
            title="Backend & Systems"
            category="Server-Side"
            accentColor="rgba(249, 115, 22, 0.2)"
            icon={<Database className="w-6 h-6" />}
            skills={[
              { name: 'Node.js & Express.js', level: 'Proficient', desc: 'RESTful API routing, middleware chaining, authentication & file streams.' },
              { name: 'MongoDB & Mongoose', level: 'Proficient', desc: 'Document schemas, indexing, aggregation pipelines & data validation.' },
              { name: 'REST API Design', level: 'Proficient', desc: 'Stateless endpoints, standardized error payloads, status codes & rate limits.' },
              { name: 'State & Security', level: 'Proficient', desc: 'CORS policies, secure headers, environment variables & payload sanitation.' },
            ]}
          />

          <SkillGroup
            title="DevOps & Best Practices"
            category="Workflow"
            accentColor="rgba(34, 197, 94, 0.2)"
            icon={<Layers className="w-6 h-6" />}
            skills={[
              { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching strategies, pull requests, semantic versioning & merge management.' },
              { name: 'Cloud Deployment', level: 'Proficient', desc: 'Vercel, Netlify, Render, domain DNS setup, SSL configuration & monitoring.' },
              { name: 'UI/UX & Mobile First', level: 'Advanced', desc: 'Touch-optimized layouts, micro-interactions & cross-browser compatibility.' },
              { name: 'Performance Optimization', level: 'Advanced', desc: 'Image compression, lazy loading, bundle analysis & fast Time-To-Interactive.' },
            ]}
          />
        </div>

      </div>
    </section>
  );
};

export default Skills;
