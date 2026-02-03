
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-electric-orange selection:text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
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
        
        {/* Strong CTA Section */}
        <section className="py-32 relative overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-orange/20 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-12 leading-tight">
              Have an Idea? <br /> I’ll <span className="text-electric-orange">Engineer</span> It Into Reality.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/27723481158"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-6 bg-electric-orange text-white font-bold text-xl rounded-2xl hover:scale-105 transition-all duration-300 orange-glow-hover"
              >
                Let’s Build Something Serious
              </a>
              <a 
                href="#" 
                className="inline-block px-12 py-6 bg-white/5 border border-white/10 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
