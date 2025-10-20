import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ResponsibilitySection from './components/ResponsibilitySection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen relative transition-colors duration-500" data-theme-aware>
        <MatrixBackground />
        <ThemeToggle />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <CertificationsSection />
        <ResponsibilitySection />
        <ResumeSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
