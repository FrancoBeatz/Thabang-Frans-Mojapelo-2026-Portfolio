import React from 'react';
import { CheckCircle2, Briefcase, Target, Layers, Globe, Server, User, Award, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import SpotlightCard from './effects/SpotlightCard';
import DecryptedText from './effects/DecryptedText';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects & Implementations', value: '25+' },
    { label: 'Independent Engineering', value: '2023–Now' },
    { label: 'Client Delivery Satisfaction', value: '100%' },
  ];

  const experienceBullets = [
    'Engineered modern, responsive web applications and business websites using React, TypeScript, JavaScript (ES6+), Node.js, Express.js, and MongoDB.',
    'Built custom digital solutions for clients across commercial sectors, strengthening their web footprint, lead generation, and user retention.',
    'Developed modular frontend components with strict focus on high-speed performance, sub-second load times, and cross-device responsiveness.',
    'Designed and implemented secure RESTful API architectures, database models, session handling, and environment-isolated security configs.',
    'Collaborated directly with stakeholders to gather domain requirements, scope architectures, deliver production iterations, and provide support.',
    'Managed deployment pipelines across Vercel, Netlify, and Render including custom DNS setup, SSL encryption, and caching policies.',
    'Maintained Git version control, semantic release tracking, and modular clean-code standards across all projects.',
  ];

  const businessWebOutcomes = [
    'Elevated digital credibility and conversion rates for corporate clients.',
    'Guaranteed 100% fluid responsiveness across mobile, tablet, and widescreen viewports.',
    'Engineered lightweight asset bundles for fast loading even on constrained mobile networks.',
    'Integrated lead-generation forms, direct WhatsApp routing, and transactional workflows.',
  ];

  const fullStackAchievements = [
    'Engineered secure authentication, password encryption, and JWT token sessions.',
    'Developed scalable Node.js/Express API routing with unified error handling structures.',
    'Designed flexible MongoDB database schemas with automated indexing and aggregation.',
    'Optimized state management and client-side caching to reduce redundant network overhead.',
  ];

  return (
    <section id="about" className="py-28 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-xs font-mono text-electric-orange">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
            Engineering Intentional, <span className="text-electric-orange">Production-Grade</span> Software
          </h3>
        </div>

        {/* Career Objective Banner */}
        <SpotlightCard
          spotlightColor="rgba(249, 115, 22, 0.15)"
          tiltIntensity={3}
          className="p-8 md:p-10 rounded-3xl bg-[#0d0d12]/90 border border-white/10 relative overflow-hidden backdrop-blur-md shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-electric-orange uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Primary Engineering Objective</span>
              </div>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                Dedicated <span className="text-white font-semibold">Junior Full-Stack Developer</span> with proven hands-on experience designing and deploying scalable web applications and high-conversion business systems. Seeking a full-time software engineering role where I can contribute clean code, collaborate with senior engineering teams, and deliver immediate value.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 text-center font-mono">
              <span className="text-xs text-gray-400 block mb-1">Status</span>
              <span className="text-sm font-bold text-green-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Ready to Deploy
              </span>
            </div>
          </div>
        </SpotlightCard>

        {/* Experience & Stats Layout */}
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8 items-start">
          
          {/* Main Experience Column */}
          <SpotlightCard
            spotlightColor="rgba(249, 115, 22, 0.18)"
            tiltIntensity={4}
            className="p-8 md:p-10 rounded-3xl bg-[#0d0d12]/90 border border-white/10 space-y-6 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-electric-orange/10 text-electric-orange rounded-2xl border border-electric-orange/20">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Full-Stack Development Experience</h4>
                  <p className="text-xs text-gray-400 font-mono">Self-Employed / Freelance & Client Systems</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-electric-orange">
                2023 – Present
              </span>
            </div>

            <ul className="space-y-4 pt-2">
              {experienceBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-gray-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-electric-orange shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>

          {/* Key Metrics & Strengths Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(56, 189, 248, 0.15)"
                  tiltIntensity={4}
                  className="p-6 rounded-2xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-md group hover:border-electric-orange/40 transition-all shadow-lg"
                >
                  <div className="text-3xl font-mono font-bold text-white mb-1 group-hover:text-electric-orange transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <SpotlightCard
              spotlightColor="rgba(34, 197, 94, 0.15)"
              tiltIntensity={4}
              className="p-6 rounded-2xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-md shadow-lg space-y-3"
            >
              <div className="flex items-center gap-2.5 text-green-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Core Engineering Standards</span>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Prioritizing clean code, maintainability, type safety, low latency, and intuitive UI interactions across every build.
              </p>
            </SpotlightCard>
          </div>

        </div>

        {/* Breakdown: Client Solutions vs Full-Stack Logic */}
        <div className="grid md:grid-cols-2 gap-8">
          <SpotlightCard
            spotlightColor="rgba(249, 115, 22, 0.15)"
            tiltIntensity={4}
            className="p-8 rounded-3xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-md space-y-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-electric-orange/10 text-electric-orange rounded-xl border border-electric-orange/20">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Client Business Solutions</h4>
                <p className="text-xs text-gray-400 font-mono">Conversion, Speed & Accessibility</p>
              </div>
            </div>
            <ul className="space-y-3">
              {businessWebOutcomes.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-orange shrink-0 mt-2" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(56, 189, 248, 0.15)"
            tiltIntensity={4}
            className="p-8 rounded-3xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-md space-y-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Full-Stack Application Architecture</h4>
                <p className="text-xs text-gray-400 font-mono">Backend Logic, REST APIs & Data Integrity</p>
              </div>
            </div>
            <ul className="space-y-3">
              {fullStackAchievements.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
};

export default About;
