import React from 'react';
import { Globe, Gamepad2, Layers, Monitor, Settings, ArrowUpRight, Cpu } from 'lucide-react';
import SpotlightCard from './effects/SpotlightCard';
import DecryptedText from './effects/DecryptedText';

const WhatIBuild: React.FC = () => {
  const offerings = [
    {
      title: "Full-Stack Web Applications",
      icon: <Globe size={26} className="text-electric-orange" />,
      tag: "MERN Stack",
      desc: "Complete web platforms with custom frontends, scalable Node/Express REST backends, authentication, and MongoDB persistence."
    },
    {
      title: "Interactive Engines & Tools",
      icon: <Gamepad2 size={26} className="text-sky-400" />,
      tag: "Canvas & Physics",
      desc: "High-performance interactive web tools, browser games, and graphics engines running at a fluid 60 FPS."
    },
    {
      title: "Commercial Business Portals",
      icon: <Monitor size={26} className="text-emerald-400" />,
      tag: "Corporate Portals",
      desc: "Fast, responsive business websites optimized for search engine visibility, mobile conversion, and direct customer lead generation."
    },
    {
      title: "REST APIs & Data Services",
      icon: <Layers size={26} className="text-purple-400" />,
      tag: "Backend Systems",
      desc: "Robust RESTful web services with token authentication, route validation, database indexing, and clear JSON response schemas."
    },
    {
      title: "Data Dashboards & Admin Portals",
      icon: <Settings size={26} className="text-amber-400" />,
      tag: "Operations UX",
      desc: "Intuitive management consoles that allow businesses to track operations, update content, and manage customer records easily."
    },
    {
      title: "Responsive UI/UX Frontends",
      icon: <Cpu size={26} className="text-rose-400" />,
      tag: "Mobile-First",
      desc: "Pixel-perfect React component architectures designed to provide zero layout shift across mobile, tablet, and desktop viewports."
    }
  ];

  return (
    <section id="services" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <Cpu size={14} />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
              What I <span className="text-electric-orange">Build & Deliver</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            End-to-end engineering solutions built with modern web standards, resilient architectures, and clean interface designs.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <SpotlightCard
              key={idx}
              tiltIntensity={6}
              spotlightColor="rgba(249, 115, 22, 0.15)"
              className="rounded-[2.5rem] h-full"
            >
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0c0e14] border border-white/5 space-y-6 flex flex-col justify-between h-full group hover:border-white/15 transition-all">
                
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-electric-orange transition-colors">
                      <DecryptedText text={item.title} animateOn="hover" />
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-2 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>Standard Verified</span>
                  <span className="text-electric-orange font-bold">100% Custom</span>
                </div>

              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIBuild;
