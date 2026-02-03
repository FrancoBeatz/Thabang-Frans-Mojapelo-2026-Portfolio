
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Years Experience', value: '6+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  const differentiators = [
    "6+ Years of Hands-On Experience",
    "Clean, Maintainable, Production-Ready Code",
    "Strong UI/UX + Solid Backend Logic",
    "Problem Solver (Not a “copy-paste developer”)",
    "I Build for Users, Not Just Screens"
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.3em] mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              The Dev Behind the <span className="text-electric-orange">Magic</span>
            </h3>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m <span className="text-white font-medium">Thabang Frans Mojapelo</span>, a Pro Software Developer with 6 years of real-world experience turning complex ideas into smooth, reliable digital products.
              </p>
              <p>
                I write clean code, fix messy code, and occasionally argue with bugs — and I always win (eventually).
              </p>
              <p>
                I specialize in building modern web applications that are fast, secure, and scalable. If it loads fast, looks clean, and just works… yeah, I probably built it.
              </p>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-heading font-bold mb-6 text-white">What Makes Me Different</h4>
              <ul className="space-y-4">
                {differentiators.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-electric-orange flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sticky top-24">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-2xl border border-white/5 bg-card-bg group hover:border-electric-orange/30 transition-all duration-300 ${idx === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2 group-hover:text-electric-orange transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
            
            <div className="sm:col-span-2 p-8 rounded-2xl border border-dashed border-white/10 bg-transparent flex items-center justify-center">
                <p className="text-gray-500 italic text-center">
                  "Thabang doesn't just code — he thinks."
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
