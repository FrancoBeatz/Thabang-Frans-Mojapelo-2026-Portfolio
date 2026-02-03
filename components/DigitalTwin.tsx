
import React, { useState } from 'react';
import { Bot, User, Send, BrainCircuit } from 'lucide-react';

const DigitalTwin: React.FC = () => {
  const [messages] = useState([
    { role: 'bot', text: "Hi! I'm Thabang's Digital Twin. Ask me something about my work or availability by clicking a question below!" }
  ]);

  const questions = [
    { 
      q: "What is your main expertise?", 
      msg: "Hi Thabang, I'm interested in your main expertise. Can you tell me more about your full-stack web architecture skills?" 
    },
    { 
      q: "Are you open for freelance?", 
      msg: "Hi Thabang, I have a project in mind and wanted to check if you are currently open for freelance opportunities." 
    },
    { 
      q: "Tell me about your tech stack.", 
      msg: "Hi Thabang, I'd like to know more about your tech stack (React, Node, etc.) for a potential collaboration." 
    }
  ];

  const handleAsk = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/27723481158?text=${encodedMsg}`, '_blank');
  };

  return (
    <section className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-orange/10 border border-electric-orange/20 rounded-full text-electric-orange text-xs font-bold uppercase tracking-widest">
              <BrainCircuit size={14} /> AI-Powered Persona
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight text-white">
              Instant Answers from my <span className="text-electric-orange">Digital Twin</span>.
            </h2>
            <p className="text-gray-400 text-lg">
              Don't have time to wait for an email? Clicking these questions will connect you directly to Thabang's WhatsApp for an immediate response.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {questions.map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAsk(item.msg)}
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-electric-orange/50 hover:bg-electric-orange/5 transition-all text-sm font-medium text-white text-left"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-xl">
            <div className="rounded-3xl bg-card-bg border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[500px]">
              <div className="p-6 bg-white/5 border-b border-white/5 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-electric-orange flex items-center justify-center">
                   <Bot className="text-white" size={20} />
                 </div>
                 <div>
                   <div className="text-white font-bold">Thabang Bot v1.0</div>
                   <div className="text-xs text-green-500">Redirecting to Live Chat...</div>
                 </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-electric-orange text-white rounded-tr-none' : 'bg-white/5 text-gray-300 rounded-tl-none'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-white/5 flex gap-4">
                <input type="text" readOnly placeholder="Click a question to chat..." className="flex-1 bg-white/5 rounded-xl px-6 py-3 border border-white/5 text-gray-500 cursor-not-allowed outline-none" />
                <button className="w-12 h-12 rounded-xl bg-electric-orange flex items-center justify-center text-white cursor-not-allowed opacity-50">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
