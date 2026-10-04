import React, { useState } from 'react';
import { 
  Layout, 
  Database, 
  Terminal, 
  Layers, 
  Code, 
  Server, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  CodeXml,
  Braces
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoLoop, { LogoItem } from './effects/LogoLoop';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [selectedSnippet, setSelectedSnippet] = useState<string>('react');

  const techLogos: LogoItem[] = [
    { title: 'React 19', badge: 'Frontend', node: <Layout size={16} /> },
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
    { title: 'Production Hosting', badge: 'DevOps', node: <ShieldCheck size={16} /> },
  ];

  const skillCategories = [
    {
      id: 'frontend',
      category: 'Frontend Engineering',
      icon: <Layout className="text-electric-orange" size={24} />,
      color: 'rgba(249, 115, 22, 0.15)',
      description: 'Building high-performance, mobile-first responsive interfaces and component architectures.',
      skills: [
        { name: 'React', level: 'Component Hierarchy & Hooks', badge: 'Core Focus', snippetKey: 'react' },
        { name: 'JavaScript (ES6+)', level: 'Async/Await, DOM, Closures', badge: 'Foundational', snippetKey: 'js' },
        { name: 'HTML5 & Semantic Web', level: 'Accessibility & SEO Ready', badge: 'Standard', snippetKey: 'html' },
        { name: 'CSS3 & Tailwind CSS', level: 'Flexbox, Grid, Fluid Motion', badge: 'Production', snippetKey: 'css' },
        { name: 'Bootstrap', level: 'Rapid Responsive Prototyping', badge: 'Clean UI', snippetKey: 'bootstrap' },
      ],
    },
    {
      id: 'backend',
      category: 'Backend & Database Systems',
      icon: <Database className="text-sky-400" size={24} />,
      color: 'rgba(56, 189, 248, 0.15)',
      description: 'Developing secure REST APIs, authentication layers, middleware, and database schemas.',
      skills: [
        { name: 'Node.js', level: 'Event-driven Server Runtime', badge: 'Backend', snippetKey: 'node' },
        { name: 'Express.js', level: 'RESTful API Routing & Middleware', badge: 'API Design', snippetKey: 'express' },
        { name: 'MongoDB', level: 'NoSQL Document Schemas & Queries', badge: 'Database', snippetKey: 'mongo' },
        { name: 'RESTful API Design', level: 'CRUD, Token Auth, Error Handling', badge: 'Architecture', snippetKey: 'rest' },
      ],
    },
    {
      id: 'tools',
      category: 'Tooling & Deployment',
      icon: <Terminal className="text-purple-400" size={24} />,
      color: 'rgba(168, 85, 247, 0.15)',
      description: 'Streamlining modern developer workflows, version control, hosting, and performance audits.',
      skills: [
        { name: 'Git & GitHub', level: 'Branching, PRs, Version Control', badge: 'Daily Flow', snippetKey: 'git' },
        { name: 'VS Code & DevTools', level: 'Debugging & Performance Profiling', badge: 'IDE', snippetKey: 'tools' },
        { name: 'Website Deployment', level: 'Vercel, Netlify, Domain & DNS Setup', badge: 'Hosting', snippetKey: 'deploy' },
        { name: 'UI/UX Principles', level: 'Visual Hierarchy & Mobile Optimization', badge: 'User Focus', snippetKey: 'ux' },
      ],
    },
  ];

  const codeSnippets: Record<string, { title: string; code: string }> = {
    react: {
      title: "React Modular Component & State Hook",
      code: `// Custom React Interactive State Hook
export function useSystemMetrics() {
  const [metrics, setMetrics] = useState({ perf: 100, status: 'OPTIMAL' });
  
  useEffect(() => {
    const checkPerformance = () => {
      // Real-time Core Web Vitals Audit Verification
      setMetrics({ perf: 100, status: 'PRODUCTION_READY' });
    };
    checkPerformance();
  }, []);
  
  return metrics;
}`
    },
    express: {
      title: "Express.js RESTful API Router",
      code: `// Secure REST Endpoint with Validation
router.post('/api/inquiries', async (req, res) => {
  const { name, email, service, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Required fields missing' });
  }
  const result = await db.collection('leads').insertOne({
    name, email, service, message, createdAt: new Date()
  });
  return res.status(201).json({ success: true, leadId: result.insertedId });
});`
    },
    mongo: {
      title: "MongoDB Document Schema & Aggregation",
      code: `// MongoDB Collection Aggregation Pipeline
const clientStats = await db.collection('projects').aggregate([
  { $match: { status: 'ACTIVE' } },
  { $group: {
      _id: '$category',
      totalCount: { $sum: 1 },
      avgPerformance: { $avg: '$auditScore' }
  }},
  { $sort: { totalCount: -1 } }
]).toArray();`
    },
    node: {
      title: "Node.js Asynchronous Pipeline",
      code: `// High-Speed Asynchronous Task Execution
import http from 'node:http';
import { EventEmitter } from 'node:events';

class SystemBus extends EventEmitter {}
const bus = new SystemBus();

bus.on('deploy:success', (payload) => {
  console.log(\`[DEPLOYMENT OK] Project: \${payload.name}\`);
});`
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[400px] sm:h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Cpu size={14} />
              <span>Technical Stack & Architecture</span>
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white">
              Tools & <span className="text-electric-orange">Technologies</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
            I leverage modern JavaScript, React, Node.js, and MongoDB tools to engineer resilient, high-speed software solutions.
          </p>
        </div>

        {/* Infinite LogoLoop Marquee */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#090b10] border border-white/5 p-1.5 sm:p-2 overflow-hidden shadow-2xl">
          <LogoLoop logos={techLogos} speed={30} gap={16} scaleOnHover />
        </div>

        {/* Discipline Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'frontend', label: 'Frontend & UI' },
            { id: 'backend', label: 'Backend & APIs' },
            { id: 'tools', label: 'Tools & DevOps' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <BorderGlow
                  borderRadius={28}
                  backgroundColor="#0a0c12"
                  colors={['#f97316', '#38bdf8', '#a855f7']}
                  className="h-full"
                >
                  <div className="p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between">
                    
                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex">
                          {cat.icon}
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 uppercase tracking-wider">
                          Verified Stack
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1.5">
                          <DecryptedText text={cat.category} animateOn="hover" />
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          {cat.description}
                        </p>
                      </div>

                      {/* Detailed Skill Pills */}
                      <div className="space-y-2.5 pt-1">
                        {cat.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange shrink-0" />
                                <span className="truncate">{skill.name}</span>
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-mono text-electric-orange font-semibold shrink-0">
                                {skill.badge}
                              </span>
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-gray-400 font-mono">
                              {skill.level}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-500">
                      <span>Production Grade</span>
                      <span className="text-green-400 font-bold">100% Validated</span>
                    </div>

                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Live Code Architecture Preview Console */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-[#090b10] border border-white/10 overflow-hidden shadow-2xl">
          <div className="bg-[#12151e] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <CodeXml size={16} className="text-electric-orange shrink-0" />
              <span className="text-xs font-mono font-bold text-gray-300">
                Live Engineering Patterns
              </span>
            </div>

            {/* Code Selector Pills */}
            <div className="flex items-center gap-1.5">
              {[
                { id: 'react', label: 'React.tsx' },
                { id: 'express', label: 'Express.ts' },
                { id: 'mongo', label: 'MongoDB.ts' },
                { id: 'node', label: 'Node.ts' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedSnippet(pill.id)}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                    selectedSnippet === pill.id
                      ? 'bg-electric-orange text-white font-bold'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 bg-[#06070a] font-mono text-xs md:text-sm text-gray-300 overflow-x-auto">
            <div className="text-[10px] sm:text-[11px] text-gray-500 mb-2 uppercase tracking-wider">
              // {codeSnippets[selectedSnippet]?.title}
            </div>
            <pre className="text-emerald-400 font-mono leading-relaxed text-[11px] sm:text-xs md:text-sm">
              <code>{codeSnippets[selectedSnippet]?.code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
