
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Years Experience', value: '6+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  const differentiators = [
    "6+ Years of Experience",
    "Clean and Easy-to-Read Code",
    "Great Design + Strong Logic",
    "I Solve Real Problems",
    "I Build for People, Not Just Screens"
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.3em] mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              The Developer Behind the <span className="text-electric-orange">Work</span>
            </h3>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m <span className="text-white font-medium">Thabang Frans Mojapelo</span>. I have spent 6 years turning ideas into smooth and reliable apps.
              </p>
              <p>
                I build modern websites that are fast, safe, and easy to grow. If it works well and looks good, I probably built it.
              </p>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-heading font-bold mb-6 text-white">Why Work With Me</h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
