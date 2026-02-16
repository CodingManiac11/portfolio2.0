import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Check, FileText, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface AnimatedDownloadButtonProps {
  href: string;
  fileName?: string;
}

const AnimatedDownloadButton: React.FC<AnimatedDownloadButtonProps> = ({ 
  href, 
  fileName = 'Aditya_Utsav_Resume.pdf' 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    if (isDownloading || isComplete) return;
    
    setIsDownloading(true);
    
    // Simulate download progress
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      // Reset after showing complete state
      setTimeout(() => {
        setIsComplete(false);
      }, 2000);
    }, 1500);
  };

  return (
    <motion.a
      href={href}
      download={fileName}
      onClick={handleDownload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg
        overflow-hidden cursor-pointer transition-all duration-300
        ${isDark 
          ? 'bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-white shadow-lg shadow-green-500/25' 
          : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
        }
      `}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: isHovered ? ['100%', '-100%'] : '-100%',
        }}
        transition={{
          duration: 1,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear',
        }}
      />

      {/* Sparkle effects */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: (Math.random() - 0.5) * 100,
                  y: (Math.random() - 0.5) * 50,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="absolute"
              >
                <Sparkles size={12} className="text-yellow-300" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Icon */}
      <span className="relative z-10">
        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.span
              key="check"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="inline-flex items-center justify-center w-6 h-6"
            >
              <Check size={24} className="text-white" />
            </motion.span>
          ) : isDownloading ? (
            <motion.span
              key="loading"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="inline-flex items-center justify-center w-6 h-6"
            >
              <FileText size={24} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="download"
              initial={{ y: 0 }}
              animate={{ y: isHovered ? [0, -3, 0] : 0 }}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
              className="inline-flex items-center justify-center w-6 h-6"
            >
              <Download size={24} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Text */}
      <span className="relative z-10">
        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.span
              key="complete"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Downloaded!
            </motion.span>
          ) : isDownloading ? (
            <motion.span
              key="downloading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Downloading...
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Download Resume
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Progress bar */}
      <AnimatePresence>
        {isDownloading && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 origin-left"
          />
        )}
      </AnimatePresence>

      {/* Ripple effect on complete */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white rounded-2xl"
          />
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default AnimatedDownloadButton;
