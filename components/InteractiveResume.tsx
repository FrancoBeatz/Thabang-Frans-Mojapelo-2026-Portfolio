import React, { useEffect, useState } from 'react';
import { X, Printer, Phone, Mail, MapPin, Globe, Award, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

interface InteractiveResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const InteractiveResume: React.FC<InteractiveResumeProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cv' | 'scrimba' | 'fcc'>('cv');

  // Lock body scroll when resume is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="resume-modal" className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-2.5 sm:p-4 md:p-8 overscroll-contain animate-in fade-in duration-200">
      
      {/* Upper Control Bar */}
      <div className="fixed top-3 right-3 sm:top-6 sm:right-6 flex items-center gap-2 z-50">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border border-white/15 hover:bg-electric-orange hover:border-electric-orange hover:text-white text-gray-200 rounded-xl transition-all font-bold text-xs cursor-pointer shadow-lg backdrop-blur-md"
          title="Print or Save as PDF"
        >
          <Printer size={15} />
          <span className="hidden xs:inline">Print PDF</span>
        </button>
        <button 
          onClick={onClose}
          className="p-2 bg-white/10 border border-white/15 rounded-xl hover:bg-white/20 text-white transition-all cursor-pointer shadow-lg backdrop-blur-md flex items-center justify-center min-w-[36px] min-h-[36px]"
          title="Close"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
      </div>

      <div className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden my-12 sm:my-8 print:border-0 print:bg-white print:text-black print:shadow-none print:my-0">
        
        {/* Ambient Top Glow (Hidden in Print) */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-electric-orange to-transparent opacity-60 print:hidden" />
        
        {/* Interactive Tabs for switching between CV details and Certificates */}
        <div className="flex flex-wrap border-b border-white/5 bg-[#0e0e0e] px-4 sm:px-6 py-3 sm:py-4 gap-2 print:hidden">
          <button 
            onClick={() => setActiveTab('cv')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${activeTab === 'cv' ? 'bg-electric-orange text-white' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            📄 Verified CV
          </button>
          <button 
            onClick={() => setActiveTab('scrimba')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'scrimba' ? 'bg-electric-orange text-white' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            <Award size={14} /> Scrimba AS
          </button>
          <button 
            onClick={() => setActiveTab('fcc')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'fcc' ? 'bg-electric-orange text-white' : 'text-gray-400 hover:text-white bg-white/5'}`}
          >
            <Award size={14} /> freeCodeCamp (1800h)
          </button>
        </div>

        {activeTab === 'cv' ? (
          /* MAIN CV LAYOUT */
          <div className="grid md:grid-cols-[0.85fr_1.15fr] min-h-[650px] print:grid-cols-[0.85fr_1.15fr]">
            
            {/* LEFT COLUMN */}
            <div className="bg-[#0f0f0f] p-5 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between print:bg-gray-100 print:text-black print:border-gray-300">
              
              <div className="space-y-6 sm:space-y-8">
                {/* Avatar Image */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto bg-black rounded-3xl overflow-hidden border border-white/10 p-2 print:border-gray-300">
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
                <div className="space-y-4 sm:space-y-5">
                  <h4 className="text-xs font-black text-electric-orange uppercase tracking-[0.25em] border-b border-white/5 pb-2 print:border-gray-300 print:text-black">
                    Contact
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex items-center gap-2.5">
                      <Phone size={15} className="text-electric-orange flex-shrink-0" />
                      <span className="text-gray-300 font-mono print:text-black">(+27) 072 348 1158</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail size={15} className="text-electric-orange flex-shrink-0" />
                      <span className="text-gray-300 font-mono break-all print:text-black">mojapelot2@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <MapPin size={15} className="text-electric-orange flex-shrink-0" />
                      <span className="text-gray-300 print:text-black">Johannesburg, South Africa</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Globe size={15} className="text-electric-orange flex-shrink-0 mt-0.5" />
                      <a 
                        href="https://thabang-frans-mojapelo-2026-portfol.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 font-mono hover:text-electric-orange underline break-all flex items-center gap-1 print:text-black"
                      >
                        portfolio-live <ExternalLink size={10} className="print:hidden" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* SKILLS */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-electric-orange uppercase tracking-[0.25em] border-b border-white/5 pb-2 print:border-gray-300 print:text-black">
                    Key Competencies
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: 'React / Next.js / Vite', pct: '90%' },
                      { name: 'JavaScript / TypeScript', pct: '88%' },
                      { name: 'Node.js / Express.js', pct: '85%' },
                      { name: 'MongoDB / REST APIs', pct: '85%' },
                      { name: 'Problem Solving & UI/UX', pct: '95%' }
                    ].map(skill => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-gray-300 print:text-black">{skill.name}</span>
                          <span className="text-electric-orange font-mono">{skill.pct}</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden print:bg-gray-300">
                          <div 
                            className="bg-electric-orange h-1.5 rounded-full" 
                            style={{ width: skill.pct }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-electric-orange uppercase tracking-[0.25em] border-b border-white/5 pb-2 print:border-gray-300 print:text-black">
                    Education
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="text-electric-orange font-bold font-mono">2023 – 2026</div>
                      <h5 className="font-bold text-white print:text-black">Scrimba AS</h5>
                      <p className="text-gray-400 print:text-gray-600">Software Development Programme</p>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-electric-orange font-bold font-mono">2020 – 2023</div>
                      <h5 className="font-bold text-white print:text-black">freeCodeCamp.org</h5>
                      <p className="text-gray-400 print:text-gray-600">Legacy Full Stack Certification (1800h)</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="text-[10px] text-gray-500 font-mono mt-8 print:text-gray-400">
                Verified Digital Resume • Thabang Frans Mojapelo
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-[#0a0a0a] print:bg-white print:text-black">
              {/* Header Title */}
              <div className="space-y-2 border-b border-white/5 pb-4 print:border-gray-200">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase print:text-black">
                  Thabang Frans <br /> Mojapelo
                </h2>
                <div className="inline-block px-3.5 py-1 bg-electric-orange/10 border border-electric-orange/30 rounded-xl text-electric-orange font-black uppercase text-[11px] tracking-widest">
                  Junior Full-Stack Software Developer
                </div>
              </div>

              {/* PROFILE */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-orange" />
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-widest text-white print:text-black">Profile</h3>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light print:text-gray-700">
                  Motivated Junior Full-Stack Developer with hands-on experience designing and developing responsive websites and web applications using JavaScript, React, Node.js, Express.js, MongoDB, and modern web technologies. Skilled in creating user-focused digital experiences, building scalable solutions, solving technical challenges, and continuously improving software quality. Passionate about clean code, UI/UX principles, and collaborative development environments.
                </p>
              </div>

              {/* WORK EXPERIENCE */}
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-orange" />
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-widest text-white print:text-black">Work Experience</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  {/* Job 1 */}
                  <div className="relative pl-5 border-l border-white/10 space-y-1.5 print:border-gray-200">
                    <div className="absolute w-2 h-2 bg-electric-orange rounded-full -left-[4.5px] top-1.5" />
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-white print:text-black">Junior Software Development</h4>
                      <span className="text-xs text-electric-orange font-bold font-mono">2023 - 2026</span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium print:text-gray-600">TBang Code</div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed print:text-gray-700 font-light">
                      Collaborated closely with cross-functional teams to ensure alignment of technical solutions with system architecture standards and project objectives.
                    </p>
                  </div>

                  {/* Job 2 */}
                  <div className="relative pl-5 border-l border-white/10 space-y-1.5 print:border-gray-200">
                    <div className="absolute w-2 h-2 bg-electric-orange rounded-full -left-[4.5px] top-1.5" />
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-white print:text-black">Freelance Software Developer</h4>
                      <span className="text-xs text-electric-orange font-bold font-mono">2023 - Present</span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium print:text-gray-600">Contract & Direct Engagements</div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed print:text-gray-700 font-light">
                      Designed, engineered, and deployed customized responsive web solutions and web portals for corporate clients and startup founders.
                    </p>
                  </div>
                </div>
              </div>

              {/* REFERENCES */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-orange" />
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-widest text-white print:text-black">References</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 print:border-gray-200 print:bg-gray-50">
                    <div className="font-bold text-white text-xs sm:text-sm print:text-black">Tracy Mashishi</div>
                    <div className="text-[11px] text-gray-500 font-medium mb-1">Client</div>
                    <div className="text-xs font-mono text-gray-300 print:text-black">063-382-7347</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 print:border-gray-200 print:bg-gray-50">
                    <div className="font-bold text-white text-xs sm:text-sm print:text-black">Mack Mojapelo</div>
                    <div className="text-[11px] text-gray-500 font-medium mb-1">Client</div>
                    <div className="text-xs font-mono text-gray-300 print:text-black">060-856-4191</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : activeTab === 'scrimba' ? (
          /* VERIFIED SCRIMBA CERTIFICATE VIEW */
          <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-[#070707] min-h-[550px]">
            <div className="w-full max-w-2xl bg-white p-5 sm:p-8 md:p-10 rounded-2xl border-4 border-gray-300 text-black shadow-2xl relative">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 text-xl sm:text-2xl font-black text-black">
                  <span className="w-7 h-7 rounded-lg bg-black flex items-center justify-center text-white font-mono font-black text-base">.S</span>
                  scrimba
                </div>
              </div>

              <div className="text-center space-y-4 sm:space-y-5">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Certificate of Completion</h4>
                <p className="text-xs text-gray-600 font-light">presented to</p>
                
                <h3 className="text-2xl sm:text-3xl font-display font-black text-black tracking-tight my-2 font-sans">
                  Thabang Frans Mojapelo
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  for successfully graduating from
                </p>

                <div className="my-4 inline-block py-2.5 px-6 bg-black/5 text-base sm:text-lg font-bold rounded-xl border border-black/10">
                  JavaScript & TypeScript Deep Dive
                </div>

                <p className="text-xs font-mono text-gray-500">Jan – 2026</p>

                <div className="grid sm:grid-cols-2 gap-4 pt-8 max-w-lg mx-auto items-center">
                  <div className="space-y-1 border-t border-gray-200 pt-3">
                    <div className="font-serif italic text-base leading-none">Per Harald Borgen</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Per Harald Borgen</div>
                    <div className="text-[9px] text-gray-400">CEO at Scrimba AS</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 p-2.5 bg-green-500/10 border border-green-500/20 rounded-xl text-green-700">
                      <ShieldCheck size={24} />
                      <div className="text-left leading-none">
                        <div className="text-[10px] font-black uppercase tracking-wider">100% Verified</div>
                        <div className="text-[8px] text-gray-500 font-mono">ID: SCR-2026-TF19</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-xs text-gray-500 max-w-md text-center mt-4">
              Verified Scrimba credential on page 2 of Thabang Frans Mojapelo's professional portfolio files.
            </p>
          </div>
        ) : (
          /* VERIFIED FREECODECAMP CERTIFICATE VIEW */
          <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center bg-[#070707] min-h-[550px]">
            <div className="w-full max-w-2xl bg-white p-5 sm:p-8 md:p-10 rounded-2xl border-4 border-[#0a0a23] text-black shadow-2xl relative">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6">
                <div className="flex items-center gap-1 text-lg sm:text-xl font-bold tracking-tight text-[#0a0a23]">
                  <span>🔥</span>
                  <span className="font-sans font-black">freeCodeCamp(<span className="text-green-800">🔥</span>)</span>
                </div>
                <div className="text-xs font-mono font-bold text-gray-500">
                  Issued 2023
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xs text-gray-600 font-light italic">This certifies that</p>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-[#0a0a23] tracking-tight my-2">
                  Thabang Frans Mojapelo
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  has successfully completed the freeCodeCamp.org
                </p>

                <div className="my-4 inline-block py-3 px-6 sm:px-8 bg-[#0a0a23]/5 text-xl sm:text-2xl font-black text-[#0a0a23] rounded-xl border border-[#0a0a23]/20 tracking-tight font-sans">
                  Legacy Full Stack
                </div>

                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Developer Certification, representing approximately <span className="font-bold">1800 hours</span> of software engineering coursework.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-lg mx-auto items-center">
                  <div className="space-y-1 border-t border-gray-200 pt-3">
                    <div className="font-serif italic text-xl text-[#0a0a23] leading-none">Quincy Larson</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Quincy Larson</div>
                    <div className="text-[9px] text-gray-400">Executive Director, freeCodeCamp.org</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 p-2 bg-green-500/15 border border-green-500/35 rounded-xl text-green-800">
                      <ShieldCheck size={24} />
                      <div className="text-left leading-none">
                        <div className="text-[9px] font-black uppercase tracking-wider">Officially Verified</div>
                        <div className="text-[8px] text-gray-500 font-mono">Hours: 1,800+</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <a 
                    href="https://www.freecodecamp.org/certification/frans1987/full-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 px-4 bg-[#0a0a23] hover:bg-green-700 text-white font-bold rounded-xl transition-all text-xs"
                  >
                    <span>Verify Credentials Online</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </div>
            </div>

            <p className="text-xs text-gray-500 max-w-md text-center mt-4">
              Verified freeCodeCamp credential (1,800+ hours) on official portal.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default InteractiveResume;
