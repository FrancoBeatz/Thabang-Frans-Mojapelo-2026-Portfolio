
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "Thabang OS v6.2.0 initialized...",
    "System check: 100% functional.",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string> = {
    help: "Available commands: bio, stack, values, clear, contact",
    bio: "Pro Software Developer with 6+ years experience. Expert in turning coffee into scalable systems.",
    stack: "Frontend: React, Next.js. Backend: Node, Express, MongoDB, Supabase. Tools: Git, CI/CD.",
    values: "1. Performance is not a feature, it's a requirement. 2. Scalability over complexity. 3. Clean code saves lives.",
    contact: "Email: thabang@mojapelo.dev | WhatsApp: +27 72 348 1158 | GitHub: FrancoBeatz"
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = "";

    if (cmd === "clear") {
      setHistory(["Terminal cleared."]);
    } else if (commands[cmd]) {
      response = commands[cmd];
      setHistory([...history, `> ${input}`, response]);
    } else if (cmd !== "") {
      setHistory([...history, `> ${input}`, `Unknown command: ${cmd}. Type 'help'.`]);
    }

    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c]">
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <TerminalIcon size={16} className="text-electric-orange" />
              <span className="text-xs font-mono font-bold text-gray-400">thabang_mojapelo — bash — 80x24</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="p-8 h-[400px] overflow-y-auto font-mono text-sm space-y-2 text-green-400/90"
          >
            {history.map((line, i) => (
              <div key={i} className={line.startsWith('>') ? "text-white" : ""}>
                {line}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-electric-orange" />
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-white placeholder:opacity-20"
                placeholder="Type a command..."
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
