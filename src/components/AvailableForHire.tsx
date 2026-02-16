import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AvailableForHire: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(34, 197, 94, 0.3)',
            '0 0 40px rgba(34, 197, 94, 0.5)',
            '0 0 20px rgba(34, 197, 94, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`
          relative px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer
          ${isDark 
            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 backdrop-blur-xl' 
            : 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-500/50 backdrop-blur-xl shadow-lg'
          }
        `}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {/* Pulsing dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        
        <span className={`text-sm font-semibold ${isDark ? 'text-green-400' : 'text-green-700'}`}>
          Available for Opportunities
        </span>
        
        <Sparkles size={16} className={`${isDark ? 'text-green-400' : 'text-green-600'} animate-pulse`} />

        {/* Rotating border */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-50%] bg-gradient-conic from-green-500 via-transparent to-green-500 opacity-20"
            style={{ background: 'conic-gradient(from 0deg, rgba(34, 197, 94, 0.5), transparent, rgba(34, 197, 94, 0.5))' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AvailableForHire;
