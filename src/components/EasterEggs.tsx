import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Star, Heart, Code2, Coffee, Gamepad2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface EasterEgg {
  id: string;
  trigger: string;
  message: string;
  icon: React.ReactNode;
  color: string;
}

const EasterEggs: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeEgg, setActiveEgg] = useState<EasterEgg | null>(null);
  const [keySequence, setKeySequence] = useState<string>('');
  const [matrixMode, setMatrixMode] = useState(false);
  const [partyMode, setPartyMode] = useState(false);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const easterEggs: EasterEgg[] = [
      {
        id: 'konami',
        trigger: 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba',
        message: '🎮 Konami Code Activated! You found a secret!',
        icon: <Gamepad2 size={24} />,
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 'dev',
        trigger: 'dev',
        message: '👨‍💻 Developer Mode: Console unlocked!',
        icon: <Code2 size={24} />,
        color: 'from-green-500 to-cyan-500',
      },
      {
        id: 'coffee',
        trigger: 'coffee',
        message: '☕ Coffee time! Aditya runs on caffeine!',
        icon: <Coffee size={24} />,
        color: 'from-amber-500 to-orange-500',
      },
      {
        id: 'hire',
        trigger: 'hireme',
        message: '🚀 Great choice! Let\'s connect!',
        icon: <Rocket size={24} />,
        color: 'from-blue-500 to-purple-500',
      },
      {
        id: 'love',
        trigger: 'love',
        message: '❤️ Spreading love through code!',
        icon: <Heart size={24} />,
        color: 'from-red-500 to-pink-500',
      },
      {
        id: 'matrix',
        trigger: 'matrix',
        message: '🟢 Welcome to the Matrix...',
        icon: <Code2 size={24} />,
        color: 'from-green-400 to-green-600',
      },
      {
        id: 'party',
        trigger: 'party',
        message: '🎉 Party Mode Activated!',
        icon: <Star size={24} />,
        color: 'from-yellow-400 to-pink-500',
      },
    ];
    const newSequence = keySequence + e.key;
    setKeySequence(newSequence);

    // Check for easter egg triggers
    for (const egg of easterEggs) {
      if (newSequence.toLowerCase().endsWith(egg.trigger.toLowerCase())) {
        setActiveEgg(egg);
        
        // Special effects
        if (egg.id === 'matrix') {
          setMatrixMode(true);
          setTimeout(() => setMatrixMode(false), 5000);
        }
        if (egg.id === 'party') {
          setPartyMode(true);
          setTimeout(() => setPartyMode(false), 5000);
        }
        if (egg.id === 'hire') {
          setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }, 1500);
        }
        
        setTimeout(() => setActiveEgg(null), 3000);
        setKeySequence('');
        return;
      }
    }

    // Reset sequence if it gets too long
    if (newSequence.length > 50) {
      setKeySequence(newSequence.slice(-20));
    }
  }, [keySequence, setActiveEgg, setMatrixMode, setPartyMode, setKeySequence]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Click counter easter egg - click logo 7 times
  const [, setClickCount] = useState(0);
  
  useEffect(() => {
    const handleLogoClick = () => {
      setClickCount(prev => {
        const newCount = prev + 1;
        if (newCount === 7) {
          setActiveEgg({
            id: 'secret',
            trigger: 'clicks',
            message: '⭐ You found a hidden secret! You\'re persistent!',
            icon: <Star size={24} />,
            color: 'from-yellow-400 to-amber-500',
          });
          setTimeout(() => setActiveEgg(null), 3000);
          return 0;
        }
        // Reset after 2 seconds of no clicks
        setTimeout(() => setClickCount(0), 2000);
        return newCount;
      });
    };

    const logo = document.querySelector('[data-logo]');
    if (logo) {
      logo.addEventListener('click', handleLogoClick);
      return () => logo.removeEventListener('click', handleLogoClick);
    }
  }, []);

  return (
    <>
      {/* Easter Egg Notification */}
      <AnimatePresence>
        {activeEgg && (
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.8 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100]"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                ],
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className={`
                px-6 py-4 rounded-2xl backdrop-blur-xl border
                bg-gradient-to-r ${activeEgg.color}
                flex items-center gap-3 text-white font-bold
              `}
            >
              {activeEgg.icon}
              <span>{activeEgg.message}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Rain Effect */}
      <AnimatePresence>
        {matrixMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] pointer-events-none overflow-hidden"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100 }}
                animate={{ y: '110vh' }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute text-green-500 font-mono text-lg"
                style={{ left: `${Math.random() * 100}%` }}
              >
                {Array.from({ length: 20 }, () => 
                  String.fromCharCode(0x30A0 + Math.random() * 96)
                ).join('')}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Party Mode Effect */}
      <AnimatePresence>
        {partyMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] pointer-events-none"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: '50vw',
                  y: '50vh',
                  scale: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: [0, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute text-4xl"
              >
                {['🎉', '🎊', '⭐', '✨', '🎈', '🎁', '💫'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint for Easter Eggs (shown after 30 seconds) */}
      <HintComponent isDark={isDark} />
    </>
  );
};

// Separate hint component to show easter egg hint
const HintComponent: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  if (!showHint) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-4 right-4 z-40 hidden lg:block"
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`
          px-4 py-2 rounded-lg text-xs backdrop-blur-sm
          ${isDark 
            ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300' 
            : 'bg-purple-100 border border-purple-200 text-purple-700'
          }
        `}
      >
        💡 Hint: Try typing "party" or "coffee" 🎉
      </motion.div>
    </motion.div>
  );
};

export default EasterEggs;
