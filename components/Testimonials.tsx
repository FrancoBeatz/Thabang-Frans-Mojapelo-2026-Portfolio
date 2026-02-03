
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Professional, fast, and delivers quality work. The attention to detail in the UI was exceptional.",
      author: "Alex Rivers",
      role: "CEO, TechLaunch",
      rating: 5,
    },
    {
      text: "Great communication and modern designs. He understood our complex requirements perfectly.",
      author: "Sarah Jenkins",
      role: "Product Manager, CreativeCo",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0c0c0c] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.3em] mb-4">Trust</h2>
          <h3 className="text-4xl font-heading font-bold">Client <span className="text-electric-orange">Feedback</span></h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-charcoal/50 border border-white/5 space-y-6 relative">
              <div className="flex text-electric-orange gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl italic text-gray-300 leading-relaxed">
                “{review.text}”
              </p>
              <div>
                <div className="font-bold text-white text-lg">{review.author}</div>
                <div className="text-sm text-gray-500">{review.role}</div>
              </div>
              <div className="absolute top-10 right-10 opacity-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.2556 14 12.017 11.7614 12.017 9V5H20.017V14H22.017V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697V14H5.01697C2.25555 14 0.0169678 11.7614 0.0169678 9V5H8.01697V14H10.017V21H2.01697Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
