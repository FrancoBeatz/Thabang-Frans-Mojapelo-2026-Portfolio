import React, { useEffect, useState } from 'react';
import { X, Printer, Phone, Mail, MapPin, Globe, Award, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

interface InteractiveResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const InteractiveResume: React.FC<InteractiveResumeProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cv' | 'scrimba' | 'fcc'>('cv');

  // Lock body scroll when resume is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="resume-modal" className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      
      {/* Upper Control Bar */}
      <div className="absolute top-4 right-4 md:top-8 md:right-10 flex items-center gap-3 z-50">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-electric-orange hover:border-electric-orange hover:text-white text-gray-300 rounded-xl transition-all font-bold text-sm"
          title="Print or Save as PDF"
        >
          <Printer size={16} />
          <span className="hidden sm:inline">Print / Save PDF</span>
        </button>
        <button 
          onClick={onClose}
          className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/15 text-white transition-all"
          title="Close"
        >
          <X size={20} />
        </button>
      </div>

      <div className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden my-8 print:border-0 print:bg-white print:text-black print:shadow-none print:my-0">
        
        {/* Ambient Top Glow (Hidden in Print) */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-electric-orange to-transparent opacity-60 print:hidden"></div>
        
        {/* Interactive Tabs for switching between CV details and Certificates */}
        <div className="flex flex-wrap border-b border-white/5 bg-[#0e0e0e] px-6 py-4 gap-3 print:hidden">
          <button 
            onClick={() => setActiveTab('cv')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all ${activeTab === 'cv' ? 'bg-electric-orange text-white' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            📄 Professional CV
          </button>
          <button 
            onClick={() => setActiveTab('scrimba')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center gap-1.5 ${activeTab === 'scrimba' ? 'bg-electric-orange text-white' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            <Award size={15} /> Scrimba AS
          </button>
          <button 
            onClick={() => setActiveTab('fcc')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center gap-1.5 ${activeTab === 'fcc' ? 'bg-electric-orange text-white' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            <Award size={15} /> freeCodeCamp (1800h)
          </button>
        </div>

        {activeTab === 'cv' ? (
          /* MAIN CV LAYOUT */
          <div className="grid md:grid-cols-[0.85fr_1.15fr] min-h-[800px] print:grid-cols-[0.85fr_1.15fr]">
            
            {/* LEFT COLUMN (Dark aesthetic, matches PDF exactly) */}
            <div className="bg-[#0f0f0f] p-8 md:p-10 border-r border-white/5 flex flex-col justify-between print:bg-gray-100 print:text-black print:border-gray-300">
              
              <div className="space-y-10">
                {/* 3D Avatar Image */}
                <div className="relative w-36 h-36 mx-auto bg-black rounded-3xl overflow-hidden border border-white/10 p-2 print:border-gray-300">
                  <img 
                    src="https://i.ibb.co/MxMdkkqf/71fbabe1-d110-4701-81d9-f7062408f93f.png" 
                    alt="Thabang Frans Mojapelo Avatar" 
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-electric-orange p-1 rounded-lg text-white font-mono text-[9px] uppercase font-black tracking-widest print:hidden">
                    PRO
                  </div>
                </div>

                {/* CONTACT */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-electric-orange uppercase tracking-[0.3em] border-b border-white/5 pb-2 print:border-gray-300 print:text-black">
                    Contact
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Phone size={16} className="text-electric-orange flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-mono print:text-black">(+27) 0723481158</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={16} className="text-electric-orange flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-mono break-all print:text-black">mojapelot2@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin size={16} className="text-electric-orange flex-shrink-0" />
                      <span className="text-gray-300 text-sm print:text-black">Johannesburg, South Africa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe size={16} className="text-electric-orange flex-shrink-0 mt-0.5" />
                      <a 
                        href="https://thabang-frans-mojapelo-2026-portfol.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm font-mono hover:text-electric-orange underline break-all flex items-center gap-1 print:text-black"
                      >
                        portfolio-url <ExternalLink size={10} className="print:hidden" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* SKILLS */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-electric-orange uppercase tracking-[0.3em] border-b border-white/5 pb-2 print:border-gray-300 print:text-black">
                    Skills
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: 'React / NextJS & Vite', pct: '90%' },
                      { name: 'JavaScript / TypeScript', pct: '85%' },
                      { name: 'NodeJS / ExpressJS', pct: '80%' },
                      { name: 'Problem Solving', pct: '95%' }
                    ].map(skill => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-gray-300 print:text-black">{skill.name}</span>
                          <span className="text-electric-orange">{skill.pct}</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden print:bg-gray-300">
                          <div 
                            className="bg-electric-orange h-1.5 rounded-full" 
                            style={{ width: skill.pct }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-electric-orange uppercase tracking-[0.3em] border-b border-white/5 pb-2 print:border-gray-300 print:text-black">
                    Education
                  </h4>
                  <div className="space-y-5">
                    <div className="space-y-1">
                      <div className="text-xs text-electric-orange font-bold font-mono">2023 – 2026</div>
                      <h5 className="text-sm font-bold text-white print:text-black">Scrimba</h5>
                      <p className="text-xs text-gray-400 print:text-gray-600">Software Development Programme</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-electric-orange font-bold font-mono">2020 – 2023</div>
                      <h5 className="text-sm font-bold text-white print:text-black">FreeCodeCamp</h5>
                      <p className="text-xs text-gray-400 print:text-gray-600">Software Development Basics</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative signature footer inside CV left menu */}
              <div className="text-[10px] text-gray-600 font-mono mt-12 print:text-gray-400">
                Verified Digital Resume • Thabang Frans Mojapelo
              </div>
            </div>

            {/* RIGHT COLUMN (Content exactly representing the right section of PDF) */}
            <div className="p-8 md:p-12 space-y-10 bg-[#0a0a0a] print:bg-white print:text-black">
              {/* Header Title */}
              <div className="space-y-2 border-b border-white/5 pb-6 print:border-gray-200">
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase print:text-black">
                  Thabang Frans <br /> Mojapelo
                </h2>
                <div className="inline-block px-4 py-1.5 bg-electric-orange/10 border border-electric-orange/30 rounded-xl text-electric-orange font-black uppercase text-xs tracking-widest">
                  Software Developer
                </div>
              </div>

              {/* PROFILE */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-electric-orange"></div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-white print:text-black">Profile</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light print:text-gray-700">
                  Motivated Junior Full-Stack Developer with hands-on experience designing and developing responsive websites and web applications using JavaScript, React, Node.js, Express.js, MongoDB, and modern web technologies. Skilled in creating user-focused digital experiences, building scalable solutions, solving technical challenges, and continuously improving software quality. Passionate about clean code, UI/UX principles, and collaborative development environments.
                </p>
              </div>

              {/* WORK EXPERIENCE */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-electric-orange"></div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-white print:text-black">Work Experience</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className="relative pl-6 border-l border-white/10 space-y-2 print:border-gray-200">
                    <div className="absolute w-2.5 h-2.5 bg-electric-orange rounded-full -left-[5.5px] top-1.5"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <h4 className="text-base font-bold text-white print:text-black">Junior Software Development</h4>
                      <span className="text-xs text-electric-orange font-bold font-mono">2023 - 2026</span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium print:text-gray-600">TBang Code</div>
                    <p className="text-gray-300 text-sm leading-relaxed print:text-gray-700">
                      Collaborated closely with cross-functional teams to ensure alignment of technical solutions with system architecture standards and project objectives.
                    </p>
                  </div>

                  {/* Job 2 */}
                  <div className="relative pl-6 border-l border-white/10 space-y-2 print:border-gray-200">
                    <div className="absolute w-2.5 h-2.5 bg-electric-orange rounded-full -left-[5.5px] top-1.5"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <h4 className="text-base font-bold text-white print:text-black">Freelance Software Developer</h4>
                      <span className="text-xs text-electric-orange font-bold font-mono">2016 - Present</span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium print:text-gray-600">UpWork</div>
                    <p className="text-gray-300 text-sm leading-relaxed print:text-gray-700">
                      Contributed to technical planning sessions and provided innovative insights to drive the evolution of system architecture and development strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* REFERENCES (Directly matching PDF) */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-electric-orange"></div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-white print:text-black">References</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 print:border-gray-200 print:bg-gray-50">
                    <div className="font-bold text-white text-sm print:text-black">Tracy Mashishi</div>
                    <div className="text-xs text-gray-500 font-medium mb-2">Client</div>
                    <div className="text-xs font-mono text-gray-300 print:text-black">063-382-7347</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 print:border-gray-200 print:bg-gray-50">
                    <div className="font-bold text-white text-sm print:text-black">Mack Mojapelo</div>
                    <div className="text-xs text-gray-500 font-medium mb-2">Client</div>
                    <div className="text-xs font-mono text-gray-300 print:text-black">060-856-4191</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : activeTab === 'scrimba' ? (
          /* VERIFIED SCRIMBA CERTIFICATE VIEW */
          <div className="p-8 md:p-16 flex flex-col items-center justify-center bg-[#070707] min-h-[700px]">
            
            {/* Elegant Certified border wrap */}
            <div className="w-full max-w-3xl bg-white p-6 md:p-12 rounded-2xl border-4 border-gray-300 text-black shadow-2xl relative">
              
              {/* Scrimba Logo */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 text-2xl font-black text-black">
                  <span className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-mono font-black text-lg">.S</span>
                  scrimba
                </div>
              </div>

              {/* Certificate content */}
              <div className="text-center space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500">Certificate of Completion</h4>
                <p className="text-sm text-gray-600 font-light">presented to</p>
                
                <h3 className="text-3xl md:text-4xl font-display font-black text-black tracking-tight my-4 font-sans">
                  Thabang Frans Mojapelo
                </h3>

                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  for successfully graduating from
                </p>

                <div className="my-6 inline-block py-3 px-8 bg-black/5 text-xl font-bold rounded-xl border border-black/10">
                  JavaScript & TypeScript Deep Dive
                </div>

                <p className="text-xs font-mono text-gray-500">Jan – 2026</p>

                {/* Signature and Verified Stamp */}
                <div className="grid sm:grid-cols-2 gap-8 pt-12 max-w-xl mx-auto items-center">
                  <div className="space-y-2 border-t border-gray-200 pt-4">
                    <div className="font-serif italic text-lg leading-none">Per Harald Borgen</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Per Harald Borgen</div>
                    <div className="text-[9px] text-gray-400">CEO at Scrimba AS</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-700">
                      <ShieldCheck size={28} />
                      <div className="text-left leading-none">
                        <div className="text-[10px] font-black uppercase tracking-wider">100% Verified</div>
                        <div className="text-[8px] text-gray-500 font-mono">ID: SCR-2026-TF19</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Information note */}
            <p className="text-xs text-gray-500 max-w-md text-center mt-6">
              This certificate corresponds directly to the official Scrimba credential on page 2 of Thabang Frans Mojapelo's professional portfolio files.
            </p>

          </div>
        ) : (
          /* VERIFIED FREECODECAMP CERTIFICATE VIEW */
          <div className="p-8 md:p-16 flex flex-col items-center justify-center bg-[#070707] min-h-[700px]">
            
            {/* Elegant freeCodeCamp Verified frame wrapper */}
            <div className="w-full max-w-3xl bg-white p-6 md:p-12 rounded-2xl border-4 border-[#0a0a23] text-black shadow-2xl relative">
              
              {/* freeCodeCamp official logo look & feel header */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div className="flex items-center gap-1 text-xl md:text-2xl font-bold tracking-tight text-[#0a0a23]">
                  {/* Fire/Flame replica design with raw styling */}
                  <span className="text-2xl">🔥</span>
                  <span className="font-sans font-black">freeCodeCamp(<span className="text-green-800">🔥</span>)</span>
                </div>
                <div className="text-xs font-mono font-bold text-gray-500">
                  Issued 2023
                </div>
              </div>

              {/* Certificate content */}
              <div className="text-center space-y-6">
                <p className="text-sm text-gray-600 font-light italic">This certifies that</p>
                
                <h3 className="text-3xl md:text-5xl font-display font-black text-[#0a0a23] tracking-tight my-4">
                  Thabang Frans Mojapelo
                </h3>

                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  has successfully completed the freeCodeCamp.org
                </p>

                <div className="my-6 inline-block py-4 px-10 bg-[#0a0a23]/5 text-2xl md:text-3xl font-black text-[#0a0a23] rounded-xl border border-[#0a0a23]/20 tracking-tight font-sans">
                  Legacy Full Stack
                </div>

                <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                  Developer Certification, representing approximately <span className="font-bold">1800 hours</span> of rigorous software engineering coursework.
                </p>

                {/* Quincy Larson Signature / Seal block */}
                <div className="grid sm:grid-cols-2 gap-8 pt-10 max-w-xl mx-auto items-center">
                  <div className="space-y-2 border-t border-gray-200 pt-4">
                    <div className="font-serif italic text-2xl text-[#0a0a23] leading-none">Quincy Larson</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Quincy Larson</div>
                    <div className="text-[9px] text-gray-400">Executive Director, freeCodeCamp.org</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="flex items-center gap-2 p-2.5 bg-green-500/15 border border-green-500/35 rounded-xl text-green-800">
                        <ShieldCheck size={26} />
                        <div className="text-left leading-none">
                          <div className="text-[9px] font-black uppercase tracking-wider">Officially Verified</div>
                          <div className="text-[8px] text-gray-500 font-mono">Hours: 1,800+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live verification action */}
                <div className="pt-8 border-t border-gray-100">
                  <a 
                    href="https://www.freecodecamp.org/certification/frans1987/full-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 bg-[#0a0a23] hover:bg-green-700 text-white font-bold rounded-xl transition-all text-xs"
                  >
                    🔍 Verify Credentials Online <ExternalLink size={12} />
                  </a>
                </div>

              </div>

            </div>

            {/* Information note */}
            <p className="text-xs text-gray-500 max-w-md text-center mt-6">
              This certificate corresponds directly to page 2 (freeCodeCamp credential) of Thabang Frans Mojapelo's professional portfolio files.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default InteractiveResume;
