import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  BrainCircuit, 
  Trash2, 
  Sparkles, 
  User, 
  Terminal, 
  Phone, 
  Mail, 
  ArrowRight,
  ExternalLink,
  FileText,
  MousePointer,
  Sparkle
} from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
  isStreaming?: boolean;
}

const DigitalTwin: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      text: "Hello! I am Thabang's custom AI Digital Twin. I possess real-time knowledge of his projects, skills, history, and certifications. \n\nHow can I help you explore his work or request a full-stack engagement profile today?" 
    }
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

  const presetQuestions = [
    { label: "🧑 Who is Thabang Frans?", query: "Who is Thabang Mojapelo?" },
    { label: "🛠️ What tech stack do you use?", query: "What technical skills and technologies do you use?" },
    { label: "🚀 Tell me about the CreamFlow project", query: "Can you tell me about your CreamFlow skincare showroom project?" },
    { label: "📜 Scrimba & freeCodeCamp certifications?", query: "Tell me about your Scrimba and freeCodeCamp credentials. Are they certified?" },
    { label: "📂 Can you build full-stack apps?", query: "Do you build full-stack SaaS or business applications?" },
    { label: "📬 How do I contact you to work together?", query: "How do I get in contact and hire you for freelance work?" }
  ];

  const handleSendMessage = async (rawQuery: string, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = rawQuery.trim();
    if (!query || isTyping) return;

    const userMessage: Message = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Clean up messages array for historical context (excluding the latest user message which we send separately)
      const cleanedHistory = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

      // Call streaming SSE backend endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: cleanedHistory,
          message: query
        })
      });

      if (!response.ok) {
        throw new Error("Unable to establish link with digital network.");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");

      if (!reader) {
        throw new Error("Stream reader not available.");
      }

      let fullResponse = "";
      // Initialize an empty bot message which will stream word-by-word
      setMessages(prev => [...prev, { role: 'bot', text: '', isStreaming: true }]);

      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || ""; // hold onto the remaining part of current stream line

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;

          if (trimmed === "data: [DONE]") {
            continue;
          }

          if (trimmed.startsWith("data: ")) {
            try {
              const data = JSON.parse(trimmed.substring(6));
              if (data.text) {
                fullResponse += data.text;
                setMessages(prev => {
                  const updated = [...prev];
                  const lastIndex = updated.length - 1;
                  updated[lastIndex] = { role: 'bot', text: fullResponse, isStreaming: true };
                  return updated;
                });
              } else if (data.error) {
                fullResponse += "\n\n" + data.error;
              }
            } catch (err) {
              // Ignore partial JSON chunks till completed
            }
          }
        }
      }

      // Finish streaming and lock response text
      setMessages(prev => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = { role: 'bot', text: fullResponse || "I'm ready to answer any details about my projects, skills, or service availability.", isStreaming: false };
        return updated;
      });

    } catch (error) {
      console.error("AI Assistant network failure:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I experienced a minor network interruption. Rest assured, you can always contact Thabang directly via WhatsApp at (+27) 072 348 1158 or email me at mojapelot2@gmail.com and we can organize a project session!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{ 
      role: 'bot', 
      text: "Memory cleared. Ask me anything about Thabang's professional engineering expertise, his high-end interactive CreamFlow project, or Scrimba qualifications!" 
    }]);
  };

  // Helper to open the resume overlay (listened to by App.tsx)
  const triggerResumeModal = () => {
    const event = new CustomEvent('open-resume-modal');
    window.dispatchEvent(event);
  };

  // Helper to scroll to specific section id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if speech patterns inside bot message warrant offering click action cards
  const renderActionTriggers = (m: Message) => {
    if (m.role !== 'bot' || m.isStreaming) return null;

    const lower = m.text.toLowerCase();
    const showResumeCTA = lower.includes("resume") || lower.includes("cv") || lower.includes("qualification") || lower.includes("scrimba") || lower.includes("education");
    const showContactCTA = lower.includes("contact") || lower.includes("whatsapp") || lower.includes("hire") || lower.includes("email") || lower.includes("reach");
    const showProjectCTA = lower.includes("project") || lower.includes("creamflow") || lower.includes("galaxy") || lower.includes("portfolio") || lower.includes("tracy");

    if (!showResumeCTA && !showContactCTA && !showProjectCTA) return null;

    return (
      <div className="flex flex-wrap gap-2.5 mt-4 pt-4 border-t border-white/5">
        {showResumeCTA && (
          <button 
            onClick={triggerResumeModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-electric-orange/15 border border-electric-orange/30 hover:bg-electric-orange/25 text-electric-orange font-mono text-xs font-semibold transition-all duration-200"
          >
            <FileText size={13} /> Open Interactive CV Module
          </button>
        )}
        {showContactCTA && (
          <a 
            href="https://wa.me/27723481158"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 text-orange-400 font-mono text-xs font-semibold transition-all duration-200"
          >
            <Phone size={13} /> Chat on WhatsApp
          </a>
        )}
        {showProjectCTA && (
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-mono text-xs font-semibold transition-all duration-200"
          >
            <ExternalLink size={13} /> View Projects Showcase
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="ai-assistant" className="py-32 relative overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-electric-orange/5 blur-[180px] rounded-full -z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch min-h-[750px]">
          
          {/* Information & Intro panel */}
          <div className="lg:w-5/12 space-y-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div id="ai-assistant-badge" className="inline-flex items-center gap-2 px-4 py-2 bg-electric-orange/10 border border-electric-orange/20 rounded-full text-electric-orange text-xs font-bold uppercase tracking-widest">
                <BrainCircuit size={14} className="animate-spin-slow text-electric-orange" /> Claude & ChatGPT style Digital twin
              </div>
              <h2 id="ai-assistant-heading" className="text-5.5xl md:text-7xl font-display font-bold leading-tight text-white">
                The <span className="text-electric-orange">Digital</span> Twin.
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Experience a high-end, real-time context-aware conversation powered by <span className="text-white font-semibold">Gemini 3.5 Flash</span>.
                </p>
                <p className="text-gray-400 text-base">
                  Ask multi-layered questions, explore technical stack highlights (including Scrimba training and 1800+ FCC legacy certification), review CreamFlow showcase animations, or automatically trigger his Interactive CV.
                </p>
              </div>
            </div>

            {/* Micro details cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-electric-orange font-bold text-2xl mb-1 flex items-center gap-1.5">
                  <SparklingText text="Realtime" />
                </div>
                <div className="text-xs text-gray-400 uppercase font-mono font-bold tracking-wider">SSE Streaming Response</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div id="ai-intelligence-percent" className="text-white font-bold text-2xl mb-1 flex items-center gap-1">
                  100% <Sparkles size={16} className="text-yellow-400" />
                </div>
                <div className="text-xs text-gray-400 uppercase font-mono font-bold tracking-wider">Context Knowledge Base</div>
              </div>
            </div>
          </div>
          
          {/* Main interactive AI Workspace */}
          <div className="lg:w-7/12 w-full flex flex-col">
            <div className="flex-1 rounded-[2.5rem] bg-card-bg border border-white/10 overflow-hidden shadow-2xl flex flex-col relative min-h-[580px]">
              
              {/* Header */}
              <div className="p-5 bg-white/5 border-b border-white/5 flex items-center justify-between backdrop-blur-md sticky top-0 z-20">
                 <div className="flex items-center gap-4">
                    <div id="ai-avatar" className="w-12 h-12 rounded-2xl bg-electric-orange flex items-center justify-center relative">
                      <Bot className="text-white" size={24} />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-card-bg animate-pulse"></span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg flex items-center gap-1.5">
                        Thabang_Twin <Sparkle size={12} className="text-electric-orange fill-electric-orange animate-spin-slow" />
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest flex items-center gap-1.5">
                        <span>Autonomous Dev Agent</span>
                      </div>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-2">
                   <button 
                     onClick={clearChat} 
                     className="p-3 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-xl transition-all" 
                     title="Reset twin memory"
                     aria-label="Clear chat"
                   >
                     <Trash2 size={18} />
                   </button>
                 </div>
              </div>
              
              {/* Message scroll container */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scroll-smooth bg-black/10">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mt-1 shrink-0 ${m.role === 'user' ? 'bg-electric-orange/20 text-electric-orange border border-electric-orange/30' : 'bg-white/10 text-white'}`}>
                        {m.role === 'user' ? <User size={16} /> : <Terminal size={16} />}
                      </div>
                      <div className="space-y-1">
                        <div className={`p-4 md:p-5 rounded-2xl text-[14.5px] leading-relaxed shadow-lg ${
                          m.role === 'user' 
                            ? 'bg-electric-orange text-white font-medium rounded-tr-none' 
                            : 'bg-white/[0.03] text-gray-200 border border-white/5 rounded-tl-none whitespace-pre-wrap'
                        }`}>
                          {m.text}

                          {/* Render dynamic internal system smart CTA triggers */}
                          {renderActionTriggers(m)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-4 max-w-[85%]">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 text-white shrink-0 mt-1">
                        <Terminal size={16} />
                      </div>
                      <div className="p-4 px-6 rounded-2xl bg-white/[0.01] border border-white/5 text-gray-400 font-mono text-xs flex items-center gap-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-electric-orange animate-bounce"></span>
                          <span className="w-2 h-2 rounded-full bg-electric-orange animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-2 h-2 rounded-full bg-electric-orange animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                        <span>Interfacing cognitive system logs...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Preset Cards */}
              <div className="px-6 md:px-8 py-3 border-t border-white/5 bg-black/10 overflow-x-auto whitespace-nowrap scrollbar-none scrollbar-hide flex gap-3">
                {presetQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q.query)}
                    disabled={isTyping}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/[0.04] border border-white/5 hover:bg-white/10 hover:border-white/10 rounded-xl text-gray-300 text-xs font-medium cursor-pointer transition-all duration-200 disabled:opacity-50 shrink-0"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
              
              {/* Footer Prompt Input */}
              <div className="p-6 md:p-8 border-t border-white/5 bg-black/30 backdrop-blur-md">
                <form onSubmit={(e) => handleSendMessage(input, e)} className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isTyping}
                    placeholder="Ask standard or multi-part questions..." 
                    className="w-full bg-white/[0.04] rounded-2xl pl-6 pr-16 py-4 border border-white/10 text-white placeholder-gray-500 focus:border-electric-orange focus:bg-white/[0.08] focus:ring-1 focus:ring-electric-orange outline-none transition-all disabled:opacity-60"
                  />
                  <button 
                    type="submit" 
                    disabled={isTyping || !input.trim()}
                    className="absolute right-3 top-3 w-10 h-10 rounded-xl bg-electric-orange text-white flex items-center justify-center hover:bg-orange-600 active:scale-95 disabled:opacity-50 disabled:hover:bg-electric-orange disabled:active:scale-100 transition-all shadow-lg shadow-electric-orange/20"
                  >
                    <Send size={18} />
                  </button>
                </form>
                <div className="mt-3 text-center text-[10px] text-gray-500 font-mono uppercase tracking-wider flex items-center justify-center gap-1">
                  <span>Press Send or click standard cards to compile twin outputs.</span>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// Help helper for visual text sparkles
const SparklingText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="relative flex items-center gap-1">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-orange to-amber-400">
        {text}
      </span>
    </span>
  );
};

export default DigitalTwin;
