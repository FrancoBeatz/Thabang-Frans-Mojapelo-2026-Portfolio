
import React from 'react';
import { GraduationCap, BookOpen, Award, Zap } from 'lucide-react';

const Education: React.FC = () => {
  const academicItems = [
    {
      title: "Foundational Logic",
      description: "Mastering the mathematical principles and algorithmic thinking that separate great engineers from average ones.",
      icon: <BookOpen size={24} />,
      year: "The Beginning"
    },
    {
      title: "Full-Stack Specialization",
      description: "Intensive training in modern architectural patterns, distributed systems, and real-time data handling.",
      icon: <GraduationCap size={24} />,
      year: "The Build"
    }
  ];

  return (
    <section id="education" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Visual Decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-electric-orange/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Creative Image Side */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-electric-orange/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 orange-glow transition-all duration-700 hover:rotate-2">
              <img 
                src="https://i.ibb.co/VYz1WK9s/9a9db522-37fe-4342-a3c7-13e6fbdb611d.png" 
                alt="Thabang Professional Setup" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-electric-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold">Always Learning</p>
                      <p className="text-xs text-gray-400">Education is a continuous sprint, not a destination.</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -left-6 p-4 bg-dark-bg border border-white/10 rounded-2xl animate-float">
               <Zap className="text-electric-orange" size={24} />
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em]">The Academic Blueprint</h2>
              <h3 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                Engineering <span className="text-electric-orange italic">Mindset</span>.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                My education wasn't just about obtaining a piece of paper; it was about building a framework for solving impossible problems. I combine traditional computer science principles with the rapid evolution of modern tech.
              </p>
            </div>

            <div className="space-y-8">
              {academicItems.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                   <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-electric-orange group-hover:bg-electric-orange group-hover:text-white transition-all duration-500">
                     {item.icon}
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <h4 className="text-2xl font-display font-bold text-white">{item.title}</h4>
                         <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">{item.year}</span>
                      </div>
                      <p className="text-gray-500 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                   </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 p-1 pr-6 bg-white/5 border border-white/5 rounded-full hover:border-electric-orange/30 transition-colors cursor-default">
                 <div className="w-10 h-10 rounded-full bg-electric-orange/10 flex items-center justify-center text-electric-orange">
                   <Zap size={18} />
                 </div>
                 <span className="text-sm font-medium text-gray-300">Continuous Professional Development via Real-World Application</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
