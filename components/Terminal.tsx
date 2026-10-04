import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ChevronRight, CornerDownLeft, Sparkles } from 'lucide-react';
import DecryptedText from './effects/DecryptedText';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "Thabang OS v2026.1 (x86_64-node-production)",
    "System runtime initialized: 100% functional.",
    "Type 'help' or tap quick commands below to inspect developer profile."
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string> = {
    help: "Available commands: 'bio', 'stack', 'projects', 'values', 'certifications', 'contact', 'cv', 'clear'",
    bio: "Thabang Frans Mojapelo — Junior Full-Stack Developer specializing in React, Node.js, Express, and MongoDB. Active since 2023 with 25+ deployed web solutions.",
    stack: "Frontend: HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, Tailwind CSS\nBackend: Node.js, Express.js\nDatabase: MongoDB\nTools: Git, GitHub, VS Code, REST APIs",
    projects: "Flagship 1: CreamFlow (Sensory Motion & E-Commerce)\nFlagship 2: Galaxy Defender (2D Canvas Game Engine)\nClient 1: Mkhonto Global Capital\nClient 2: Tracy Mashishi Portfolio\nClient 3: Kolas Supply Chain\nClient 4: Child Care Africa",
    values: "1. Clean, readable code over clever hacks.\n2. 100% mobile-first responsiveness.\n3. Zero layout shift and sub-second load times.",
    certifications: "1. Scrimba AS — Software Development Programme (Jan 2026)\n2. freeCodeCamp — Legacy Full Stack Developer Certification (1,800+ hours, 2023)",
    contact: "WhatsApp: (+27) 072 348 1158 | Email: mojapelot2@gmail.com | Location: Johannesburg, South Africa",
    cv: "Opening Interactive Resume Module...",
    hire: "Redirecting to WhatsApp (+27 72 348 1158) to discuss your project requirements!"
  };

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.toLowerCase().trim();
    if (cmd === "clear") {
      setHistory(["Terminal memory reset.", "Type 'help' for command directory."]);
      return;
    }

    if (cmd === "cv") {
      window.dispatchEvent(new CustomEvent('open-resume-modal'));
    }

    if (cmd === "hire") {
      window.open("https://wa.me/27723481158", "_blank");
    }

    const response = commands[cmd] || `command not recognized: '${cmd}'. Type 'help' for directory.`;
    setHistory(prev => [...prev, `> ${cmdStr}`, response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const quickPills = ['bio', 'stack', 'projects', 'certifications', 'contact', 'cv', 'clear'];

  return (
    <section className="py-16 sm:py-24 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6">
        
        {/* Terminal Window */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#090b10]">
          
          {/* Header Bar */}
          <div className="bg-[#12151d] px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <TerminalIcon size={16} className="text-electric-orange shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono font-bold text-gray-300 truncate">
                thabang@developer-node: ~/portfolio
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Quick command buttons */}
          <div className="px-4 sm:px-6 py-2.5 bg-[#0e1118] border-b border-white/5 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Quick Run:</span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                onClick={() => executeCommand(pill)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-electric-orange/20 hover:text-electric-orange hover:border-electric-orange/30 border border-white/5 text-[10px] sm:text-[11px] font-mono text-gray-300 transition-colors cursor-pointer"
              >
                ${pill}
              </button>
            ))}
          </div>

          {/* Body Log Output */}
          <div
            ref={scrollRef}
            className="p-4 sm:p-6 md:p-8 h-64 sm:h-72 overflow-y-auto font-mono text-xs md:text-sm space-y-2 text-emerald-400 bg-[#06070a]"
          >
            {history.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith('>')
                    ? 'text-white font-bold'
                    : line.includes('error') || line.includes('not recognized')
                    ? 'text-red-400'
                    : 'text-gray-300 whitespace-pre-wrap leading-relaxed'
                }
              >
                {line}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="p-3 sm:p-4 bg-[#0e1118] border-t border-white/5 flex items-center gap-2 sm:gap-3">
            <ChevronRight size={16} className="text-electric-orange shrink-0" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'bio', 'stack', 'projects', 'contact'..."
              className="w-full bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-electric-orange text-white text-xs font-bold font-mono hover:bg-orange-600 transition-colors shrink-0 cursor-pointer flex items-center justify-center min-w-[36px] min-h-[36px]"
              aria-label="Execute command"
            >
              <CornerDownLeft size={14} />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Terminal;
