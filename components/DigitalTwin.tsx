
import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, BrainCircuit, Trash2, Sparkles, User, Terminal } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'bot';
  text: string;
  isStreaming?: boolean;
}

const DigitalTwin: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Systems online. I am Thabang's Digital Twin. I have access to his full project history, technical stack, and engineering philosophy. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const portfolioContext = `
    You are Thabang Frans Mojapelo's Digital Twin, a world-class senior software architect.
    CONTEXT:
    - Name: Thabang Frans Mojapelo
    - Role: Pro Software Developer / Lead Systems Architect.
    - Experience: 6+ years in high-performance full-stack engineering.
    - Tech Stack: React, TypeScript, Node.js, Express, MongoDB, Supabase, Socket.io, Tailwind CSS, Canvas API.
    - Key Projects: 
        1. Galaxy Defender: High-performance space shooter built with pure Canvas API (60FPS).
        2. Nexus Chat Live: Real-time messaging suite using Socket.io and Redis-like state management.
        3. Child Care Africa: Social impact portal optimized for performance (99/100 score).
        4. Kolas Supply Chain: Cloud-based inventory management dashboard.
        5. Mkhonto Global: Enterprise human capital consultancy hub.
    - Philosophy: Performance is a hard requirement. Clean code saves lives. Scalability over complexity.
    - Contact: mojapelot2@gmail.com, 0723481158.
    
    GUIDELINES:
    - Maintain a professional, concise, and highly technical tone.
    - When asked about technical details, use markdown for code snippets.
    - If asked for availability, redirect to Thabang's WhatsApp (+27723481158).
    - Always highlight 'Problem-Solution' narratives when discussing projects.
  `;

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const query = input;
    const userMessage: Message = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chatHistory = messages
        .filter((_, idx) => idx > 0 || messages[0].role === 'user') 
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        }));

      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: query }] }
        ],
        config: {
          systemInstruction: portfolioContext,
          temperature: 0.7,
        }
      });

      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'bot', text: '', isStreaming: true }]);

      for await (const chunk of streamResponse) {
        const textPart = chunk.text || "";
        fullResponse += textPart;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          newMessages[lastIndex] = { role: 'bot', text: fullResponse, isStreaming: true };
          return newMessages;
        });
      }

      setMessages(prev => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        newMessages[lastIndex] = { role: 'bot', text: fullResponse || "Engineering logic complete. Ready for next query.", isStreaming: false };
        return newMessages;
      });

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "System Interrupt: Neural link currently unavailable. Please reach out to Thabang directly via WhatsApp for urgent consultation." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'bot', text: "History purged. System environment reset. How can I help you architect your next solution?" }]);
  };

  return (
    <section id="ai-assistant" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-orange/5 blur-[150px] rounded-full -z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch min-h-[700px]">
          <div className="lg:w-1/2 space-y-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-orange/10 border border-electric-orange/20 rounded-full text-electric-orange text-xs font-bold uppercase tracking-widest">
                <BrainCircuit size={14} className="animate-pulse" /> Neural Proxy
              </div>
              <h2 className="text-6xl md:text-7xl font-display font-bold leading-tight text-white">
                The <span className="text-electric-orange">Digital</span> Twin.
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
                Query my engineering logic in real-time. This AI is trained on my specific architectural patterns, codebase philosophies, and professional project history.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full flex flex-col">
            <div className="flex-1 rounded-[2.5rem] bg-card-bg border border-white/10 overflow-hidden shadow-2xl flex flex-col relative">
              <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between backdrop-blur-md sticky top-0 z-20">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-electric-orange flex items-center justify-center">
                      <Bot className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Thabang_Twin.OS</div>
                      <div className="text-[10px] text-electric-orange font-mono uppercase">Neural Stream Active</div>
                    </div>
                 </div>
                 <button onClick={clearChat} className="p-3 text-gray-500 hover:text-red-400 transition-all" aria-label="Clear chat">
                   <Trash2 size={20} />
                 </button>
              </div>
              
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start gap-4 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${m.role === 'user' ? 'bg-white/10 text-white' : 'bg-electric-orange/10 text-electric-orange'}`}>
                        {m.role === 'user' ? <User size={16} /> : <Terminal size={16} />}
                      </div>
                      <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-white text-black font-semibold rounded-tr-none shadow-xl' 
                          : 'bg-white/[0.03] text-gray-200 border border-white/5 rounded-tl-none whitespace-pre-wrap'
                      }`}>
                        {m.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-mono animate-pulse">
                      <Terminal size={12} /> Syncing neural weights...
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8 border-t border-white/5 bg-black/20">
                <form onSubmit={handleSendMessage} className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about my architecture choices..." 
                    className="w-full bg-white/[0.05] rounded-2xl pl-6 pr-16 py-5 border border-white/10 text-white focus:border-electric-orange outline-none transition-all"
                  />
                  <button type="submit" className="absolute right-3 top-3 w-12 h-12 rounded-xl bg-electric-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg shadow-electric-orange/20">
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
