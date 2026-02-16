import React, { useState } from 'react';
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
// Trendy features
import ScrollProgress from './components/ScrollProgress';
import FloatingNav from './components/FloatingNav';
import LoadingScreen from './components/LoadingScreen';
import GitHubStats from './components/GitHubStats';
import Testimonials from './components/Testimonials';
// New trendy features
import SocialLinksBar from './components/SocialLinksBar';
import VisitorCounter from './components/VisitorCounter';
import EasterEggs from './components/EasterEggs';
import Confetti from './components/Confetti';
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };

  return (
    <ThemeProvider>
      {/* Loading Screen - shows on initial load */}
      <LoadingScreen />
      
      {/* Scroll Progress Bar - shows reading progress */}
      <ScrollProgress />
      
      {/* Confetti effect */}
      <Confetti isActive={showConfetti} />
      
      {/* Easter Eggs - hidden fun features */}
      <EasterEggs />
      
      {/* Visitor Counter */}
      <VisitorCounter />
      
      {/* Spotify Music Player */}
      <SpotifyPlayer />
      
      {/* Social Links Bar - left side */}
      <SocialLinksBar />
      
      <div className="App min-h-screen relative transition-colors duration-500" data-theme-aware>
        <MatrixBackground />
        <ThemeToggle />
        
        {/* Floating Navigation - appears on scroll */}
        <FloatingNav />
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        
        {/* New: GitHub Stats Section */}
        <GitHubStats />
        
        <CertificationsSection />
        <ResponsibilitySection />
        
        {/* New: Testimonials Section */}
        <Testimonials />
        
        <ResumeSection />
        <ContactSection onSubmitSuccess={triggerConfetti} />
      </div>
    </ThemeProvider>
  );
}

export default App;
