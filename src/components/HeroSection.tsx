import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Aditya Utsav – Frontend Developer & Cybersecurity Enthusiast";
  const { theme } = useTheme();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <section className={`
      min-h-screen flex items-center justify-center relative px-4 transition-all duration-500
      ${isDark ? 'bg-black' : 'bg-gray-50'}
    `}>
      {/* Theme-aware content */}
      <div className="text-center z-10 max-w-6xl mx-auto">
        
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className={`
              w-40 h-48 md:w-48 md:h-56 rounded-lg overflow-hidden border-2 relative transition-all duration-300
              ${isDark 
                ? 'border-green-500 bg-gray-800' 
                : 'border-blue-500 bg-white shadow-lg'
              }
            `}>
              <img 
                src="/profile.png"
                alt="Aditya Utsav" 
                className="w-full h-full object-cover"
                onLoad={(e) => {
                  console.log('✅ Photo loaded successfully!');
                }}
                onError={(e) => {
                  console.log('❌ Photo not found');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="mb-8">
          <h1 className={`
            text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300
            ${isDark ? 'text-green-400' : 'text-gray-900'}
          `}>
            {displayText}
          </h1>
          <p className={`
            text-xl mb-8 transition-colors duration-300
            ${isDark ? 'text-cyan-400' : 'text-blue-600'}
          `}>
            {'>'} SYSTEM BREACH INITIATED... CRAFTING SECURE DIGITAL EXPERIENCES
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            download="Aditya_Utsav_Resume.pdf"
            className={`
              px-6 py-3 border-2 transition-all duration-300 inline-flex items-center gap-2 rounded-lg
              ${isDark 
                ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' 
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              }
            `}
          >
            📥 DOWNLOAD RESUME
          </a>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`
              px-6 py-3 border-2 transition-all duration-300 rounded-lg
              ${isDark 
                ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black' 
                : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
              }
            `}
          >
            🚀 ACCESS PROJECTS
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div 
            className={`
              cursor-pointer animate-bounce transition-colors duration-300
              ${isDark ? 'text-green-500 hover:text-red-500' : 'text-blue-500 hover:text-purple-500'}
            `}
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
