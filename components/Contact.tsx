
import React from 'react';
import { Mail, Linkedin, Github, Send, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em]">Start a Conversation</h2>
              <h3 className="text-5xl font-display font-bold">Let’s talk <span className="text-electric-orange">Serious</span> Business</h3>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Let’s talk ideas, roadmaps, or that app you’ve been thinking about for months. I turn concepts into engineering realities.
              </p>
            </div>
            
            <div className="space-y-8">
              <a href="mailto:thabang@mojapelo.dev" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-card-bg border border-white/5 flex items-center justify-center text-electric-orange group-hover:bg-electric-orange group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Direct Email</div>
                  <div className="text-2xl font-display font-bold">thabang@mojapelo.dev</div>
                </div>
              </a>
              
              <a href="https://wa.me/27723481158" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-card-bg border border-white/5 flex items-center justify-center text-electric-orange group-hover:bg-electric-orange group-hover:text-white transition-all duration-500">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp Fast</div>
                  <div className="text-2xl font-display font-bold">+27 (0) 72 348 1158</div>
                </div>
              </a>
            </div>
            
            <div className="flex gap-4">
               <a 
                href="https://www.linkedin.com/in/thabang-frans-mojapelo-5a9166370/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-electric-orange hover:border-electric-orange transition-all duration-500 group"
              >
                <Linkedin size={24} className="group-hover:text-white" />
              </a>
               <a 
                href="https://github.com/FrancoBeatz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <Github size={24} className="group-hover:text-black" />
              </a>
            </div>
          </div>
          
          <div className="p-12 rounded-[2.5rem] bg-card-bg border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric-orange to-transparent animate-glow-line"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-8 py-5 bg-charcoal/50 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-electric-orange transition-all placeholder:text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 bg-charcoal/50 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-electric-orange transition-all placeholder:text-gray-700" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">The Project Vision</label>
                <textarea rows={5} placeholder="Describe the problem you want me to solve..." className="w-full px-8 py-5 bg-charcoal/50 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-electric-orange transition-all resize-none placeholder:text-gray-700"></textarea>
              </div>
              
              <a 
                href="https://wa.me/27723481158"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 bg-electric-orange text-white font-bold rounded-2xl hover:bg-orange-600 transition-all orange-glow-hover flex items-center justify-center gap-3 text-lg group"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
