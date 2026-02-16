import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Award, Shield, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Aditya Utsav";
  const { theme } = useTheme();

  const roles = [
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Open Source Contributor",
  ];

  // Name typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSubtitle(true), 300);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Role typing effect
  useEffect(() => {
    if (!showSubtitle) return;

    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (roleText.length < currentRole.length) {
          setRoleText(currentRole.slice(0, roleText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (roleText.length > 0) {
          setRoleText(roleText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex, showSubtitle, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  const highlights = [
    { icon: Award, text: 'Reliance Scholar', color: 'from-yellow-400 to-orange-500' },
    { icon: Shield, text: 'Cybersecurity Specialist', color: 'from-cyan-400 to-blue-500' },
    { icon: Code2, text: 'Full Stack Developer', color: 'from-green-400 to-emerald-500' },
  ];

  return (
    <section className={`
      min-h-screen flex items-center justify-center relative px-4 transition-all duration-500 overflow-hidden
      ${isDark ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'}
    `}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-green-500/10' : 'bg-blue-400/20'}`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${isDark ? 'bg-cyan-500/10' : 'bg-purple-400/20'}`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-pink-300/10'}`}></div>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto">
        
        {/* Profile Photo with Elegant Frame */}
        <div className="mb-10 flex justify-center">
          <div className="relative group">
            {/* Rotating Border */}
            <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${isDark ? 'from-green-500 via-cyan-500 to-purple-500' : 'from-blue-500 via-purple-500 to-pink-500'} opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-spin-slow`}></div>
            
            <div className={`
              relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 transition-all duration-500
              ${isDark 
                ? 'border-gray-800 bg-gray-900 shadow-2xl shadow-green-500/20' 
                : 'border-white bg-white shadow-2xl shadow-purple-500/30'
              }
            `}>
              <img 
                src="/profile.png"
                alt="Aditya Utsav" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Status Badge */}
            <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider ${isDark ? 'bg-green-500 text-black' : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`}>
              ✨ Available for Opportunities
            </div>
          </div>
        </div>

        {/* Name with Gradient */}
        <div className="mb-4">
          <h1 className={`
            text-5xl md:text-7xl lg:text-8xl font-black mb-4 transition-colors duration-300 tracking-tight
            ${isDark 
              ? 'bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            }
          `}>
            {displayText}
            <span className={`animate-pulse ${isDark ? 'text-green-400' : 'text-purple-500'}`}>|</span>
          </h1>
        </div>

        {/* Subtitle with Typewriter Effect */}
        <div className={`mb-8 transition-all duration-700 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className={`text-xl md:text-2xl font-light mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            B.Tech CSE @ Galgotias University | <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>8.18 CGPA</span>
          </p>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-purple-600'}`}>
              {roleText}
            </span>
            <span className={`animate-pulse ${isDark ? 'text-green-400' : 'text-purple-500'}`}>|</span>
            <span className="mx-2">•</span>
            Reliance Foundation Scholar
          </p>
        </div>

        {/* Highlights Pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-300 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm
                ${isDark 
                  ? 'bg-gray-800/80 border border-gray-700 text-gray-200 hover:border-gray-500' 
                  : 'bg-white/80 border border-gray-200 text-gray-700 hover:border-gray-400 shadow-sm'
                }
                backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default
              `}
            >
              <item.icon size={16} className={`bg-gradient-to-r ${item.color} bg-clip-text`} />
              {item.text}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="/Aditya_Utsav_Resume.pdf"
            download="Aditya_Utsav_Resume.pdf"
            className={`
              group px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3
              ${isDark 
                ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-black hover:shadow-lg hover:shadow-green-500/30 hover:scale-105' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105'
              }
            `}
          >
            <Sparkles size={20} className="group-hover:animate-spin" />
            Download Resume
          </a>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105
              ${isDark 
                ? 'border-gray-600 text-gray-200 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10' 
                : 'border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50'
              }
            `}
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105
              ${isDark 
                ? 'border-gray-600 text-gray-200 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10' 
                : 'border-gray-300 text-gray-700 hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50'
              }
            `}
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div 
            className={`
              cursor-pointer transition-all duration-300 hover:scale-125
              ${isDark ? 'text-gray-500 hover:text-green-400' : 'text-gray-400 hover:text-purple-500'}
            `}
            onClick={() => scrollToSection('about')}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown size={24} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
