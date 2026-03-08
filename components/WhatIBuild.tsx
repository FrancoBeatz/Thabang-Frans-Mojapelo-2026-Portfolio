
import React from 'react';
import { Globe, Gamepad2, Layers, Monitor, Settings } from 'lucide-react';

const categories = [
  { title: "Full-Stack Web Apps", icon: <Globe />, desc: "Complete websites with powerful backends." },
  { title: "Interactive Tools", icon: <Gamepad2 />, desc: "Fast tools and engines that run in your browser." },
  { title: "APIs & Systems", icon: <Layers />, desc: "Secure and fast systems that connect different apps." },
  { title: "Modern Frontends", icon: <Monitor />, desc: "Beautiful and fast designs that work on all screens." },
  { title: "Admin Dashboards", icon: <Settings />, desc: "Easy-to-use tools for managing your business data." }
];

const WhatIBuild: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/3">
             <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.3em] mb-4">What I Do</h2>
             <h3 className="text-5xl font-display font-bold mb-6">What I <span className="text-electric-orange">Build</span></h3>
             <p className="text-gray-400">Custom software built to last and help your users.</p>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card-bg border border-white/5 hover:border-white/20 transition-all group">
                <div className="text-electric-orange mb-4 group-hover:scale-110 transition-transform inline-block">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{cat.title}</h4>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
