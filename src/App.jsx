import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveAppSimulator from './components/InteractiveAppSimulator';
import TechnicalSkills from './components/TechnicalSkills';
import EngineeringHighlights from './components/EngineeringHighlights';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [positionMode, setPositionMode] = useState('hybrid'); // 'mobile' | 'frontend' | 'hybrid'
  const [activeProject, setActiveProject] = useState('astrokarma');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f8fafc' }} className="cyber-grid">
      {/* Funny Interactive Horizontal Scroll Progress Hand Mascot */}
      <ScrollProgressBar />

      {/* Dynamic 2D Constellation Canvas Background */}
      <BackgroundCanvas />

      {/* Navigation Bar */}
      <Navbar
        positionMode={positionMode}
        setPositionMode={setPositionMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          positionMode={positionMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Interactive Live Products Sandbox (Simulators) */}
        <InteractiveAppSimulator
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />

        {/* 3. Categorized Skill Matrix & Project Trace */}
        <TechnicalSkills positionMode={positionMode} />

        {/* 4. Engineering Highlights & Production Code Workbench */}
        <EngineeringHighlights />

        {/* 5. System Architecture Visualizer */}
        <ArchitectureVisualizer />

        {/* 6. Professional Experience Summary, Timeline & Engineering Philosophy */}
        <ExperienceTimeline />

        {/* 7. Direct Contact & Terminal Dispatch Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
