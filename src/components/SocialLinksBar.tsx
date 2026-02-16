import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SocialLinksBar: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/CodingManiac11',
      color: '#333',
      hoverColor: 'hover:bg-gray-800 hover:text-white',
      darkHoverColor: 'hover:bg-white hover:text-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aditya-utsav-3413a1289/',
      color: '#0077B5',
      hoverColor: 'hover:bg-blue-600 hover:text-white',
      darkHoverColor: 'hover:bg-blue-500 hover:text-white',
    },
    {
      name: 'LeetCode',
      icon: Code,
      href: 'https://leetcode.com/u/adi_utsav/',
      color: '#FFA116',
      hoverColor: 'hover:bg-orange-500 hover:text-white',
      darkHoverColor: 'hover:bg-orange-400 hover:text-black',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:adityautsav1901@gmail.com',
      color: '#EA4335',
      hoverColor: 'hover:bg-red-500 hover:text-white',
      darkHoverColor: 'hover:bg-red-400 hover:text-white',
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      href: 'https://adityautsav.vercel.app/',
      color: '#8B5CF6',
      hoverColor: 'hover:bg-purple-600 hover:text-white',
      darkHoverColor: 'hover:bg-purple-500 hover:text-white',
    },
  ];

  return (
    <>
      {/* Desktop - Left side vertical bar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed left-6 top-[40%] -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
      >
        <div className={`w-px h-20 ${isDark ? 'bg-gradient-to-b from-transparent via-green-500 to-cyan-500' : 'bg-gradient-to-b from-transparent via-blue-500 to-purple-500'}`} />
        
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm
                ${isDark 
                  ? `bg-gray-800/80 border border-gray-700 text-gray-400 ${link.darkHoverColor}` 
                  : `bg-white/80 border border-gray-200 text-gray-600 ${link.hoverColor} shadow-lg`
                }
              `}
              title={link.name}
            >
              <IconComponent size={18} />
            </motion.a>
          );
        })}
        
        <div className={`w-px h-20 ${isDark ? 'bg-gradient-to-b from-cyan-500 via-green-500 to-transparent' : 'bg-gradient-to-b from-purple-500 via-blue-500 to-transparent'}`} />
      </motion.div>
    </>
  );
};

export default SocialLinksBar;
