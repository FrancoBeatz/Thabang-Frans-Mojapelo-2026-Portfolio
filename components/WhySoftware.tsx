
import React, { useEffect, useRef, useState } from 'react';
import { Target, Bug, Zap, Rocket } from 'lucide-react';

const WhySoftware: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2, // Increased threshold for more intentional trigger
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Years Experience', value: '6+', icon: <Target size={24} /> },
    { label: 'Projects Built', value: '30+', icon: <Rocket size={24} /> },
    { label: 'Bugs Defeated', value: '1,000+', icon: <Bug size={24} /> },
    { label: 'Perf Optimized', value: '100%', icon: <Zap size={24} /> },
  ];

  return (
    <section id="why" ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-electric-orange/20 bg-electric-orange/5 text-xs font-bold text-electric-orange uppercase tracking-widest">
              The Mission
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight text-white">
              Why Software <br /> <span className="text-electric-orange">Development?</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>
                I didn’t choose software development because it was trending — I chose it because I enjoy <span className="text-white font-medium">solving problems, breaking systems, rebuilding them better,</span> and watching ideas turn into real products.
              </p>
              <p>
                For me, coding isn’t just about writing lines of code. It’s about logic, creativity, performance, and impact. That’s why I build software that lasts.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                style={{ transitionDelay: `${idx * 150}ms` }}
                className={`p-8 rounded-3xl bg-card-bg border border-white/5 group hover:border-electric-orange/40 transition-all duration-700 flex flex-col items-center text-center justify-center space-y-4 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-electric-orange group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-display font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
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

export default WhySoftware;
