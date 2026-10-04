import React, { useState, useEffect } from 'react';
import { Home, User, Cpu, Layers, Award, Rocket, Bot, Mail, FileText } from 'lucide-react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import Hero from './components/Hero';
import About from './components/About';
import WhySoftware from './components/WhySoftware';
import Education from './components/Education';
import Terminal from './components/Terminal';
import DevMetrics from './components/DevMetrics';
import Process from './components/Process';
import WhatIBuild from './components/WhatIBuild';
import DigitalTwin from './components/DigitalTwin';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveResume from './components/InteractiveResume';
import SplashCursor from './components/effects/SplashCursor';
import StarBorder from './components/effects/StarBorder';
import Magnetic from './components/effects/Magnetic';
import ClickSpark from './components/effects/ClickSpark';
import DecryptedText from './components/effects/DecryptedText';
import Dock, { DockItemData } from './components/effects/Dock';

const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleOpen = () => setIsResumeOpen(true);
    window.addEventListener('open-resume-modal', handleOpen);
    return () => window.removeEventListener('open-resume-modal', handleOpen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'process', 'ai-assistant', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveNav(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems: DockItemData[] = [
    { icon: <Home size={18} />, label: 'Home', onClick: () => scrollTo('home'), active: activeNav === 'home' },
    { icon: <User size={18} />, label: 'About', onClick: () => scrollTo('about'), active: activeNav === 'about' },
    { icon: <Cpu size={18} />, label: 'Skills', onClick: () => scrollTo('skills'), active: activeNav === 'skills' },
    { icon: <Layers size={18} />, label: 'Projects', onClick: () => scrollTo('projects'), active: activeNav === 'projects' },
    { icon: <Award size={18} />, label: 'Education', onClick: () => scrollTo('education'), active: activeNav === 'education' },
    { icon: <Rocket size={18} />, label: 'Process', onClick: () => scrollTo('process'), active: activeNav === 'process' },
    { icon: <Bot size={18} />, label: 'AI Twin', onClick: () => scrollTo('ai-assistant'), active: activeNav === 'ai-assistant' },
    { icon: <Mail size={18} />, label: 'Contact', onClick: () => scrollTo('contact'), active: activeNav === 'contact' },
    { icon: <FileText size={18} className="text-purple-400" />, label: 'Resume', onClick: () => setIsResumeOpen(true) },
  ];

  return (
    <div className="min-h-screen text-white selection:bg-electric-orange selection:text-white overflow-x-hidden relative bg-[#050608]">
      {/* Interactive Liquid / Splash Cursor */}
      <SplashCursor colorPalette={['#f97316', '#fb923c', '#fdba74', '#38bdf8', '#ffffff']} />
      
      <VideoBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Section: #about */}
        <About />
        
        {/* Section: #why */}
        <WhySoftware />

        {/* Section: #skills */}
        <Skills />

        {/* Section: #projects */}
        <Projects />

        {/* Section: #education */}
        <Education />

        {/* Section: #process */}
        <Process />

        {/* Section: #services */}
        <WhatIBuild />

        {/* Section: #ai-assistant */}
        <DigitalTwin />

        {/* Terminal & Core Web Vitals */}
        <Terminal />
        <DevMetrics />

        {/* Philosophy */}
        <Philosophy />

        {/* Section: #testimonials */}
        <Testimonials />
        
        {/* Strong Final Call to Action */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-orange/20 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10 space-y-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
              <span>Let's Collaborate</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] text-white">
              Have an Idea? <br /> I’ll <span className="text-electric-orange">Engineer</span> It Into Reality.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
              Available for junior software developer opportunities, contract engagements, and custom full-stack solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-2">
              <Magnetic strength={0.35}>
                <ClickSpark sparkColor="#f97316">
                  <StarBorder speed="4s" color="#f97316" className="rounded-2xl">
                    <a 
                      href="https://wa.me/27723481158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-5 bg-electric-orange text-white font-extrabold text-base rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-electric-orange/30"
                    >
                      <DecryptedText text="Let’s Build Something Serious" animateOn="hover" />
                    </a>
                  </StarBorder>
                </ClickSpark>
              </Magnetic>

              <Magnetic strength={0.35}>
                <ClickSpark sparkColor="#38bdf8">
                  <button 
                    onClick={() => setIsResumeOpen(true)}
                    className="inline-block px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-base rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Download Resume
                  </button>
                </ClickSpark>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* Section: #contact */}
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Interactive Dock (Desktop / Tablet) */}
      <div className="hidden md:block">
        <Dock items={dockItems} />
      </div>

      {/* Dynamic CV & Credentials Modal Overlay */}
      <InteractiveResume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
