import React, { useState, useEffect } from 'react';
import { Home, User, Cpu, FolderGit2, Mail, FileText, Send, Sparkles } from 'lucide-react';
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
import Dock, { DockItemData } from './components/effects/Dock';
import Magnetic from './components/effects/Magnetic';
import ClickSpark from './components/effects/ClickSpark';
import StarBorder from './components/effects/StarBorder';

const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleOpen = () => setIsResumeOpen(true);
    window.addEventListener('open-resume-modal', handleOpen);
    return () => window.removeEventListener('open-resume-modal', handleOpen);
  }, []);

  const dockItems: DockItemData[] = [
    {
      icon: <Home className="w-4 h-4" />,
      label: 'Home',
      onClick: () => {
        setActiveSection('home');
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeSection === 'home',
    },
    {
      icon: <User className="w-4 h-4" />,
      label: 'About',
      onClick: () => {
        setActiveSection('about');
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeSection === 'about',
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      label: 'Skills',
      onClick: () => {
        setActiveSection('skills');
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeSection === 'skills',
    },
    {
      icon: <FolderGit2 className="w-4 h-4" />,
      label: 'Projects',
      onClick: () => {
        setActiveSection('projects');
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeSection === 'projects',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Contact',
      onClick: () => {
        setActiveSection('contact');
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeSection === 'contact',
    },
    {
      icon: <FileText className="w-4 h-4 text-electric-orange" />,
      label: 'Inspect CV',
      onClick: () => setIsResumeOpen(true),
    },
  ];

  return (
    <div className="min-h-screen text-white selection:bg-electric-orange selection:text-white overflow-hidden relative bg-[#070709]">
      {/* Ambient Mouse Particle Trail */}
      <SplashCursor colorPalette={['#f97316', '#fb923c', '#fdba74', '#38bdf8', '#ffffff']} />

      {/* Layered Cinematic Video Background */}
      <VideoBackground />
      
      {/* Fixed Header */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <WhySoftware />
        <Education />
        <Terminal />
        <DevMetrics />
        <Process />
        <WhatIBuild />
        <DigitalTwin />
        <Philosophy />
        <Skills />
        <Projects />
        <Testimonials />
        
        {/* Strong Direct Action CTA Section */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-orange/20 blur-[180px] rounded-full" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/30 text-xs font-mono text-electric-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO COLLABORATE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-tight text-white max-w-4xl mx-auto">
              Have a Project in Mind? <br />
              Let’s <span className="text-electric-orange">Engineer</span> It Together.
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
              Whether you are hiring for a full-time software developer role or need a high-performance web application built from scratch, I'm ready to ship.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
              <Magnetic strength={0.3}>
                <ClickSpark sparkColor="#f97316">
                  <a 
                    href="https://wa.me/27723481158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-electric-orange hover:bg-orange-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-electric-orange/30 hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Let’s Build Something Serious</span>
                  </a>
                </ClickSpark>
              </Magnetic>

              <Magnetic strength={0.3}>
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2.5 px-8 py-5 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-lg rounded-2xl backdrop-blur-md transition-all duration-300"
                >
                  <FileText className="w-5 h-5 text-electric-orange" />
                  <span>Download CV</span>
                </button>
              </Magnetic>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Floating HUD Quick-Access Dock */}
      <div className="hidden sm:block">
        <Dock items={dockItems} />
      </div>
      
      {/* Dynamic CV Modal Overlay */}
      <InteractiveResume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
