import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{
        scaleX,
        background: isDark
          ? 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)'
          : 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
      }}
    />
  );
};

export default ScrollProgress;
