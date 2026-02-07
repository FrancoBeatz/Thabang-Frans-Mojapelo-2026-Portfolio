
import React from 'react';
import { GraduationCap, BookOpen, Award, ShieldCheck, Milestone, Cpu, Database } from 'lucide-react';

const Education: React.FC = () => {
  const academicItems = [
    {
      title: "Advanced Software Engineering",
      description: "Comprehensive mastery of algorithmic complexity and high-performance computing. Focused on building unbreakable logic for mission-critical enterprise systems.",
      icon: <Cpu size={24} />,
      year: "Logic Core"
    },
    {
      title: "Systems Architecture & Design",
      description: "Specialized focus on distributed cloud-native orchestration and scalability patterns. Designing architectures capable of supporting millions of concurrent operations.",
      icon: <Database size={24} />,
      year: "Architectural Lead"
    }
  ];

  return (
    <section id="education" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-orange/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center">
          
          {/* Left Column: Image 1 */}
          <div className="hidden lg:block group">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:-translate-x-2 group-hover:rotate-[-1deg]">
              <img 
                src="https://i.ibb.co/KxfPj1hJ/9a9db522-37fe-4342-a3c7-13e6fbdb611d.png" 
                alt="Theoretical Engineering Excellence" 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5">
                <Milestone className="text-electric-orange mb-2" size={20} />
                <p className="text-[10px] font-black text-white uppercase tracking-widest">Theoretical Base</p>
              </div>
            </div>
          </div>

          {/* Middle Column: Centered Content */}
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-electric-orange uppercase tracking-[0.3em]">
                Academic Infrastructure
              </div>
              <h3 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Architecting <br /> <span className="text-electric-orange italic">The Future</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto font-light">
                I bridge the gap between classical computer science discipline and the relentless speed of modern full-stack development. My education is the blueprint for every line of production code I ship.
              </p>
            </div>

            <div className="space-y-8 text-left max-w-xl mx-auto">
              {academicItems.map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-electric-orange/30 transition-all duration-500">
                   <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-electric-orange/10 flex items-center justify-center text-electric-orange group-hover:bg-electric-orange group-hover:text-white transition-all duration-500">
                     {item.icon}
                   </div>
                   <div className="space-y-1">
                      <div className="flex items-center gap-3">
                         <h4 className="text-xl font-display font-bold text-white group-hover:text-electric-orange transition-colors">{item.title}</h4>
                         <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">{item.year}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                   </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
               <div className="inline-flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-3xl group hover:border-electric-orange/30 transition-all cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-electric-orange flex items-center justify-center text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm">Pro Standards Verified</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">Senior Engineering Grade</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Image 2 */}
          <div className="hidden lg:block group">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:translate-x-2 group-hover:rotate-[1deg]">
              <img 
                src="https://i.ibb.co/CppwZBPS/Chat-GPT-Image-Feb-5-2026-08-32-50-AM.png" 
                alt="Industrial Engineering Application" 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 text-right">
                <Award className="text-electric-orange mb-2 ml-auto" size={20} />
                <p className="text-[10px] font-black text-white uppercase tracking-widest">Industrial Focus</p>
              </div>
            </div>
          </div>

          {/* Mobile Images (Stacked below content on mobile) */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
             <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square">
                <img src="https://i.ibb.co/KxfPj1hJ/9a9db522-37fe-4342-a3c7-13e6fbdb611d.png" className="w-full h-full object-cover" alt="Edu 1" />
             </div>
             <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square">
                <img src="https://i.ibb.co/CppwZBPS/Chat-GPT-Image-Feb-5-2026-08-32-50-AM.png" className="w-full h-full object-cover" alt="Edu 2" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
