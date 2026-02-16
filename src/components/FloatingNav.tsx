import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Award, Mail, ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'certifications', icon: Award, label: 'Certs' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 300px
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating Navigation */}
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full backdrop-blur-xl border shadow-2xl ${
              isDark
                ? 'bg-gray-900/80 border-white/10 shadow-cyan-500/10'
                : 'bg-white/80 border-gray-200 shadow-purple-500/10'
            }`}
          >
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-full transition-all duration-300 group ${
                      isActive
                        ? isDark
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-white/10'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent size={20} />
                    
                    {/* Tooltip */}
                    <span
                      className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                        isDark
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-900 text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.nav>

          {/* Back to Top Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full backdrop-blur-xl border shadow-lg transition-colors ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-white/20 text-white hover:shadow-cyan-500/30'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 border-gray-200 text-white hover:shadow-purple-500/30'
            }`}
          >
            <ChevronUp size={24} />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
