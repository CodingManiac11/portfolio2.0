import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-gray-800 text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-800' 
          : 'bg-white text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white'
        }
        shadow-lg hover:scale-110
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;