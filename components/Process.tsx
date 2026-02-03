
import React from 'react';
import { Search, PencilRuler, Code, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Understand the Problem",
    description: "Business first, code second. I dive deep into requirements and user needs. I don't just build what you ask for; I build what you actually need to grow.",
    icon: <Search size={32} />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Design the Experience",
    description: "Clean UI, smooth UX. Bridging the gap between design and functionality. I create blueprints that ensure a seamless journey for every user.",
    icon: <PencilRuler size={32} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Build & Optimize",
    description: "Fast, scalable, secure. Writing production-grade code that performs. Utilizing modern stacks like React and Node to ensure long-term stability.",
    icon: <Code size={32} />,
    color: "from-orange-500 to-electric-orange"
  },
  {
    title: "Test & Polish",
    description: "No shortcuts. Rigorous testing for edge cases and accessibility. I break things so your users don't have to.",
    icon: <ShieldCheck size={32} />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Launch & Improve",
    description: "Software is never “done”. Continuous integration and enhancement. I stay on board to ensure the product evolves with your business.",
    icon: <Rocket size={32} />,
    color: "from-white to-gray-400"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-dark-bg border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-orange/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 text-center mb-24">
        <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em] mb-4">The Methodology</h2>
        <h3 className="text-5xl md:text-7xl font-display font-bold">How I Build <span className="text-electric-orange">Software</span></h3>
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Central timeline line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-24 md:space-y-40">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 relative z-10 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Block */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'} group`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6 md:hidden">
                   {step.icon}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 md:justify-inherit">
                     <span className="text-4xl font-display font-black text-white/10 group-hover:text-electric-orange/20 transition-colors duration-500">
                       0{idx + 1}
                     </span>
                     <h4 className="text-3xl md:text-4xl font-display font-bold group-hover:text-electric-orange transition-colors duration-500">
                       {step.title}
                     </h4>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-0 md:ml-auto">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Central Node */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <div className={`w-14 h-14 rounded-full p-[2px] bg-gradient-to-br ${step.color} shadow-lg shadow-white/5`}>
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              {/* Visual/Empty Side for Balance */}
              <div className="hidden md:block w-1/2 relative">
                <div className={`absolute top-1/2 ${idx % 2 === 0 ? 'left-24' : 'right-24'} -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${step.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-1000`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
