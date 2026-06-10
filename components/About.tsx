
import React from 'react';
import { CheckCircle2, Briefcase, Target, Layers, Laptop, Globe, Server } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Active Since', value: '2023' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  const experienceBullets = [
    "Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.",
    "Built custom business websites for clients across various industries, enhancing their brand presence.",
    "Developed front-end interfaces focused on performance, user experience, and mobile responsiveness.",
    "Implemented back-end systems, APIs, database integration, and authentication features.",
    "Collaborated with clients to gather requirements, deliver tailored solutions, and provide ongoing maintenance.",
    "Managed project deployment, hosting, domain configuration, and website optimization.",
    "Utilized Git, GitHub, and modern development workflows for version control and project-management reliability."
  ];

  const businessWebOutcomes = [
    "Improved online visibility and professional credibility of client businesses.",
    "Created fully responsive experiences across desktop, tablet, and mobile devices.",
    "Optimized page speed and overall website performance to guarantee excellent UX.",
    "Integrated contact forms and lead-generation features to drive customer connection.",
    "Delivered modern, user-friendly interfaces that substantially improved user engagement."
  ];

  const fullStackAchievements = [
    "Built secure authentication and user management systems.",
    "Developed robust REST APIs and smooth database integrations.",
    "Implemented scalable, clean backend architectures using Node.js and MongoDB.",
    "Enhanced user experience through high-fidelity intuitive UI/UX design.",
    "Achieved significant gains in system performance and screen responsiveness."
  ];

  return (
    <section id="about" className="py-32 relative z-10 overflow-hidden">
      {/* Decorative localized glow */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] bg-electric-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em]">Professional Persona</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black leading-tight text-white">
              The Developer Behind The <span className="text-electric-orange">Logic</span>
            </h3>
          </div>

          {/* Top Frame: Career Objective */}
          <div className="p-8 md:p-12 rounded-[2rem] bg-card-bg border border-white/5 relative overflow-hidden group hover:border-electric-orange/20 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-electric-orange/10 transition-colors">
              <Target size={110} />
            </div>
            <div className="z-10 relative space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-orange/10 border border-electric-orange/20 rounded-full text-electric-orange text-xs font-bold uppercase tracking-widest">
                <Target size={12} /> Career Objective
              </div>
              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light">
                Passionate <span className="text-white font-semibold">Full-Stack Developer</span> with hands-on experience building modern web applications and business websites. Seeking an entry-level software development opportunity where I can contribute, learn from experienced professionals, and continue growing within a collaborative development environment.
              </p>
            </div>
          </div>

          {/* Grid section */}
          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start">
            
            {/* Left Column: Experience */}
            <div className="p-8 md:p-10 rounded-[2rem] bg-card-bg border border-white/5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-electric-orange/10 text-electric-orange rounded-xl">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Professional Experience</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Self-Employed & Projects</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <h5 className="text-xl font-bold text-white">Junior Full-Stack Developer</h5>
                  <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-electric-orange w-fit">
                    2023 – Present
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-400">
                  Self-Employed / Independent Development Projects
                </p>
              </div>

              <ul className="space-y-4 pt-2">
                {experienceBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-gray-300 text-sm md:text-base leading-relaxed">
                    <CheckCircle2 className="text-electric-orange flex-shrink-0 mt-1" size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Key Stats & Professional Positioning */}
            <div className="space-y-8">
              {/* Stat Cards */}
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-card-bg group hover:border-electric-orange/30 transition-all duration-300">
                    <div className="text-4xl font-display font-extrabold text-white mb-1 group-hover:text-electric-orange transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Achievements/Outcomes Card */}
              <div className="p-8 rounded-[2rem] bg-card-bg border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
                    <Layers size={20} />
                  </div>
                  <h4 className="font-bold text-white text-lg">Impact Portfolio Focus</h4>
                </div>
                <p className="text-xs text-gray-500">
                  Demonstrating technical results and client solutions across high-impact business products and full-stack systems.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Grid: Business Websites vs Full-Stack Apps Results */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Box 1: Business Website Development */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-card-bg border border-white/5 hover:border-electric-orange/10 transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-electric-orange">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Business Website Development</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Real-World Case Study Solutions</p>
                </div>
              </div>
              <ul className="space-y-3 pt-2">
                {businessWebOutcomes.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-xs md:text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-orange flex-shrink-0 mt-2"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Full-Stack Web Applications */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-card-bg border border-white/5 hover:border-blue-500/10 transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-blue-400">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Full-Stack Web Applications</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Backend Logic & Database Integrations</p>
                </div>
              </div>
              <ul className="space-y-3 pt-2">
                {fullStackAchievements.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-xs md:text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

