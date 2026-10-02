import React from 'react';
import { Target, Briefcase, CheckCircle2, Globe, Server, Layers, ArrowUpRight, Zap, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import SpotlightCard from './effects/SpotlightCard';

const About: React.FC = () => {
  const stats = [
    { label: 'Production Projects', value: '25+', sub: 'Websites & Web Apps' },
    { label: 'Active Since', value: '2023', sub: 'Independent & Client Work' },
    { label: 'Optimization Audits', value: '100%', sub: 'Mobile & Speed Focus' },
  ];

  const experienceBullets = [
    "Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.",
    "Built custom business websites for clients across various industries, creating tailored online portals.",
    "Developed front-end interfaces focused on performance, user experience, and cross-device responsiveness.",
    "Implemented back-end systems, APIs, database integration, and authentication features.",
    "Collaborated with clients to gather requirements, deliver solutions, and provide ongoing maintenance.",
    "Managed project deployment, hosting, domain configuration, and website optimization.",
    "Utilized Git, GitHub, and modern development workflows for version control and project management."
  ];

  const businessWebOutcomes = [
    "Improved online visibility and professional credibility for client operations.",
    "Created fully responsive experiences across desktop, tablet, and mobile devices.",
    "Optimized page speed and website performance for immediate user retention.",
    "Integrated contact forms, lead-generation features, and WhatsApp dispatch.",
    "Delivered modern, user-friendly interfaces that improved customer engagement."
  ];

  const fullStackAchievements = [
    "Built secure authentication and user management architectures.",
    "Developed REST APIs and seamless database integrations.",
    "Implemented scalable backend systems using Node.js and MongoDB.",
    "Enhanced user experience through intuitive UI/UX design and interaction feedback.",
    "Improved application performance, caching, and server response time."
  ];

  return (
    <section id="about" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-electric-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-20">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
            <Target size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
            Engineering Background & <span className="text-electric-orange">Career Objective</span>
          </h2>
        </div>

        {/* Career Objective Banner with BorderGlow */}
        <BorderGlow
          borderRadius={36}
          backgroundColor="#0a0c12"
          colors={['#f97316', '#38bdf8', '#fb923c']}
        >
          <div className="p-8 md:p-12 space-y-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-electric-orange/10 text-electric-orange font-mono text-xs font-bold uppercase tracking-wider">
                <Target size={14} /> Junior Full-Stack Developer
              </div>
              <span className="text-xs font-mono text-gray-500">
                Independent Projects • Active 2023 – Present
              </span>
            </div>

            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light">
              "Motivated <span className="text-white font-semibold">Full-Stack Developer</span> with practical experience building modern websites and web applications using JavaScript technologies. Passionate about creating responsive, user-friendly digital experiences and eager to contribute to a professional development team while continuing to grow technical expertise in modern web development."
            </p>
          </div>
        </BorderGlow>

        {/* Grid: Professional Experience vs Key Metrics */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
          
          {/* Left: Professional Experience Breakdown */}
          <SpotlightCard
            tiltIntensity={4}
            spotlightColor="rgba(249, 115, 22, 0.15)"
            className="rounded-[2.5rem]"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0c0e14] border border-white/5 space-y-8 h-full">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-electric-orange/10 border border-electric-orange/20 text-electric-orange">
                  <Briefcase size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    <DecryptedText text="Professional Experience" animateOn="hover" />
                  </h3>
                  <div className="text-xs text-gray-400 font-mono">
                    Self-Employed / Independent Development Projects (2023 – Present)
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                {experienceBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-gray-300 text-sm md:text-base leading-relaxed">
                    <CheckCircle2 size={18} className="text-electric-orange shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Right: Key Stats & Positioning */}
          <div className="space-y-6">
            {stats.map((stat, idx) => (
              <BorderGlow
                key={idx}
                borderRadius={24}
                backgroundColor="#0b0d13"
                colors={['#f97316', '#38bdf8', '#ffffff']}
              >
                <div className="p-6 md:p-8 space-y-2">
                  <div className="text-4xl md:text-5xl font-display font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-gray-200">{stat.label}</div>
                  <div className="text-xs text-gray-500 font-mono">{stat.sub}</div>
                </div>
              </BorderGlow>
            ))}
          </div>

        </div>

        {/* Real-World Solutions Showcase: Business Websites vs Full-Stack Web Apps */}
        <div className="space-y-6 pt-6">
          <h3 className="text-2xl font-display font-bold text-white text-center">
            Proven Results & Applied Solutions
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Card 1: Business Websites */}
            <SpotlightCard
              tiltIntensity={5}
              spotlightColor="rgba(249, 115, 22, 0.18)"
              className="rounded-[2.5rem]"
            >
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0c0e14] border border-white/5 space-y-6 h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-electric-orange">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Business Website Development</h4>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Commercial Client Solutions
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {businessWebOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300 text-xs md:text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-orange shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2: Full-Stack Web Apps */}
            <SpotlightCard
              tiltIntensity={5}
              spotlightColor="rgba(56, 189, 248, 0.18)"
              className="rounded-[2.5rem]"
            >
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0c0e14] border border-white/5 space-y-6 h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-sky-400">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Full-Stack Web Applications</h4>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Backend Systems & Integrations
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {fullStackAchievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300 text-xs md:text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
