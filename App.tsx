import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { TwoPaths } from './components/TwoPaths';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen selection:bg-arenate-green selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TwoPaths />
        <AboutSection />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;