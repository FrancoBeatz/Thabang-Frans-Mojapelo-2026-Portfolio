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
  ExternalLink, 
  FileText, 
  Sparkle, 
  Zap, 
  CornerDownLeft 
} from 'lucide-react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import ClickSpark from './effects/ClickSpark';

interface Message {
  role: 'user' | 'bot';
  text: string;
  isStreaming?: boolean;
}

const DigitalTwin: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      text: "Hello! I am Thabang's AI Digital Twin, powered by Gemini 3.5 Flash. I have full real-time knowledge of his technical skills, MERN stack projects (including CreamFlow & Galaxy Defender), certifications (Scrimba & freeCodeCamp), and professional experience since 2023.\n\nHow can I help you evaluate his work or schedule a development engagement?" 
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
    { label: "🧑 Who is Thabang?", query: "Who is Thabang Frans Mojapelo and what is his background?" },
    { label: "🛠️ What is your tech stack?", query: "What technical skills and technologies do you use as a Full-Stack developer?" },
    { label: "🚀 Tell me about CreamFlow", query: "Can you tell me about your CreamFlow skincare showroom project?" },
    { label: "📜 Scrimba & freeCodeCamp creds?", query: "Tell me about your Scrimba and freeCodeCamp credentials and hours completed." },
    { label: "📂 Can you build full-stack apps?", query: "Do you build full-stack SaaS or business applications from scratch?" },
    { label: "📬 How do I contact you?", query: "How do I get in contact and hire you for freelance or developer roles?" }
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
      const cleanedHistory = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

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
      setMessages(prev => [...prev, { role: 'bot', text: '', isStreaming: true }]);

      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

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

      setMessages(prev => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = { role: 'bot', text: fullResponse || "I am ready to answer any questions about Thabang's projects, technical stack, or availability.", isStreaming: false };
        return updated;
      });

    } catch (error) {
      console.error("AI Assistant network failure:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I experienced a minor network interruption. You can always contact Thabang directly via WhatsApp at (+27) 072 348 1158 or email mojapelot2@gmail.com to discuss project requirements directly!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{ 
      role: 'bot', 
      text: "Memory cleared. Ask me anything about Thabang's full-stack development experience, projects, or credentials!" 
    }]);
  };

  const triggerResumeModal = () => {
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderActionTriggers = (m: Message) => {
    if (m.role !== 'bot' || m.isStreaming) return null;

    const lower = m.text.toLowerCase();
    const showResumeCTA = lower.includes("resume") || lower.includes("cv") || lower.includes("qualification") || lower.includes("scrimba") || lower.includes("education");
    const showContactCTA = lower.includes("contact") || lower.includes("whatsapp") || lower.includes("hire") || lower.includes("email") || lower.includes("reach");
    const showProjectCTA = lower.includes("project") || lower.includes("creamflow") || lower.includes("galaxy") || lower.includes("portfolio") || lower.includes("tracy");

    if (!showResumeCTA && !showContactCTA && !showProjectCTA) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
        {showResumeCTA && (
          <button 
            onClick={triggerResumeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-electric-orange/15 border border-electric-orange/30 hover:bg-electric-orange/25 text-electric-orange font-mono text-xs font-semibold transition-all duration-200 cursor-pointer"
          >
            <FileText size={12} /> Open CV Modal
          </button>
        )}
        {showContactCTA && (
          <a 
            href="https://wa.me/27723481158"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-green-500/15 border border-green-500/30 hover:bg-green-500/25 text-green-400 font-mono text-xs font-semibold transition-all duration-200"
          >
            <Phone size={12} /> Chat on WhatsApp
          </a>
        )}
        {showProjectCTA && (
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-mono text-xs font-semibold transition-all duration-200 cursor-pointer"
          >
            <ExternalLink size={12} /> View Projects
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="ai-assistant" className="py-20 sm:py-28 lg:py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
        
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left: Information Intro */}
          <div className="space-y-6 sm:space-y-8">
            
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
                <BrainCircuit size={14} className="animate-spin-slow" />
                <span>Context-Aware AI Assistant</span>
              </div>
              
              <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white">
                Interactive <span className="text-electric-orange">Digital Twin</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Ask multi-layered questions about Thabang’s coding experience, MERN architecture decisions, Scrimba training, and project portfolio. Powered by real-time SSE streaming and Gemini 3.5 Flash.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0e14] border border-white/5 space-y-1">
                <div className="text-electric-orange font-bold text-base sm:text-lg flex items-center gap-1.5">
                  <Zap size={16} /> Real-Time
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-gray-400">SSE Word-by-Word Stream</div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0e14] border border-white/5 space-y-1">
                <div className="text-white font-bold text-base sm:text-lg flex items-center gap-1.5">
                  <Sparkles size={16} className="text-yellow-400" /> 100% Context
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-gray-400">Complete Portfolio Knowledge</div>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hidden sm:block">
              <div className="text-xs font-mono uppercase text-gray-400 font-bold">Suggested Inquiries:</div>
              <ul className="text-xs text-gray-300 space-y-1.5 font-light">
                <li>• "How was CreamFlow designed and what makes it performant?"</li>
                <li>• "Explain Thabang's experience with React and Node.js APIs."</li>
                <li>• "What did he learn during the 1,800+ hours at freeCodeCamp?"</li>
              </ul>
            </div>

          </div>

          {/* Right: Chat Terminal Console with BorderGlow */}
          <BorderGlow
            borderRadius={28}
            backgroundColor="#0a0c12"
            colors={['#f97316', '#38bdf8', '#fb923c']}
          >
            <div className="flex flex-col h-[480px] xs:h-[520px] sm:h-[580px] lg:h-[600px] bg-[#0c0e14] rounded-[28px] overflow-hidden">
              
              {/* Header */}
              <div className="p-3.5 sm:p-4 px-4 sm:px-6 bg-[#12151d] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-electric-orange flex items-center justify-center text-white shadow-lg shadow-electric-orange/30 relative shrink-0">
                    <Bot size={18} />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c0e14] animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      Thabang_Twin <Sparkle size={11} className="text-electric-orange fill-electric-orange" />
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      Developer Autonomous Agent
                    </div>
                  </div>
                </div>

                <button
                  onClick={clearChat}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                  title="Reset Conversation"
                  aria-label="Clear chat"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Messages viewport */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-5 bg-[#07080d]">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start gap-2.5 sm:gap-3 max-w-[92%] sm:max-w-[88%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        m.role === 'user'
                          ? 'bg-electric-orange/20 text-electric-orange border border-electric-orange/30'
                          : 'bg-white/10 text-white'
                      }`}>
                        {m.role === 'user' ? <User size={13} /> : <Terminal size={13} />}
                      </div>

                      <div className={`p-3 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                        m.role === 'user'
                          ? 'bg-electric-orange text-white font-medium rounded-tr-none'
                          : 'bg-white/[0.03] text-gray-200 border border-white/5 rounded-tl-none whitespace-pre-wrap'
                      }`}>
                        {m.text}
                        {renderActionTriggers(m)}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2.5 sm:gap-3 max-w-[88%]">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center bg-white/10 text-white shrink-0 mt-0.5">
                        <Terminal size={13} />
                      </div>
                      <div className="p-3 sm:p-3.5 px-4 sm:px-5 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 font-mono text-xs flex items-center gap-2.5">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-bounce [animation-delay:0.4s]" />
                        </div>
                        <span className="text-[11px]">Synthesizing response...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Presets Horizontal Bar */}
              <div className="px-3 sm:px-4 py-2 bg-[#0e1118] border-t border-white/5 flex gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none touch-pan-x">
                {presetQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q.query)}
                    disabled={isTyping}
                    className="inline-flex items-center px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-[11px] sm:text-xs text-gray-300 transition-colors shrink-0 cursor-pointer disabled:opacity-50"
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Input bar */}
              <div className="p-3 sm:p-4 bg-[#12151d] border-t border-white/5">
                <form onSubmit={(e) => handleSendMessage(input, e)} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isTyping}
                    placeholder="Ask about projects, React, backend, or CV..."
                    className="w-full bg-white/[0.04] rounded-2xl pl-4 sm:pl-5 pr-12 sm:pr-14 py-3 sm:py-3.5 border border-white/10 text-white placeholder:text-gray-500 text-xs sm:text-sm focus:border-electric-orange outline-none transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !input.trim()}
                    className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-electric-orange text-white flex items-center justify-center hover:bg-orange-600 disabled:opacity-40 transition-colors cursor-pointer"
                    aria-label="Send query"
                  >
                    <CornerDownLeft size={15} />
                  </button>
                </form>
              </div>

            </div>
          </BorderGlow>

        </div>

      </div>
    </section>
  );
};

export default DigitalTwin;
