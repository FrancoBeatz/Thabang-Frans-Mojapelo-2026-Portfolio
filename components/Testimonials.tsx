import React from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';
import SpotlightCard from './effects/SpotlightCard';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Professional, fast, and delivers quality work. The attention to detail in the UI was exceptional, and the performance across all mobile devices was flawless.",
      author: "Alex Rivers",
      role: "CEO, TechLaunch",
      rating: 5,
    },
    {
      text: "Great communication and modern designs. He understood our complex requirements quickly and delivered a clean, easy-to-use business portal on time.",
      author: "Sarah Jenkins",
      role: "Product Manager, CreativeCo",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-32 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
            <MessageSquare size={14} />
            <span>Client Feedback & Trust</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white">
            Client <span className="text-electric-orange">Endorsements</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Collaborating with founders and teams to deliver high-quality, dependable web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <SpotlightCard
              key={idx}
              tiltIntensity={5}
              spotlightColor="rgba(249, 115, 22, 0.15)"
              className="rounded-[2.5rem] h-full"
            >
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#0c0e14] border border-white/5 space-y-6 flex flex-col justify-between h-full relative">
                <Quote size={40} className="text-electric-orange/20 absolute top-8 right-8 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-electric-orange">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="font-display font-bold text-white text-base">{review.author}</div>
                  <div className="text-xs text-gray-500 font-mono">{review.role}</div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
