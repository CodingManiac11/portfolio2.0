import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const VisitorCounter: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [todayCount, setTodayCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate visitor counting with localStorage
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('visitorData');
    
    let data = storedData ? JSON.parse(storedData) : { total: 1247, today: 0, lastVisit: '' };
    
    // If it's a new day, reset today's count
    if (data.lastVisit !== today) {
      data.today = 0;
      data.lastVisit = today;
    }
    
    // Check if this is a unique visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      data.total += 1;
      data.today += 1;
      sessionStorage.setItem('hasVisited', 'true');
    }
    
    localStorage.setItem('visitorData', JSON.stringify(data));
    
    // Animate the counter
    const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };
    
    setTimeout(() => {
      setIsVisible(true);
      animateCounter(data.total, setVisitorCount);
      animateCounter(data.today, setTodayCount);
    }, 2500);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 z-40 hidden md:block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`
          px-4 py-3 rounded-2xl backdrop-blur-xl border
          ${isDark 
            ? 'bg-gray-900/80 border-gray-700/50' 
            : 'bg-white/80 border-gray-200 shadow-lg'
          }
        `}
      >
        <div className="flex items-center gap-4">
          {/* Total Visitors */}
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
              <Users size={16} className={`${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
            <div>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Total Visits</p>
              <p className={`font-bold text-lg leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {visitorCount.toLocaleString()}
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className={`w-px h-10 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
          
          {/* Today's Visitors */}
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <TrendingUp size={16} className={`${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <div>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Today</p>
              <p className={`font-bold text-lg leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {todayCount}
              </p>
            </div>
          </div>
          
          {/* Live indicator */}
          <div className="flex items-center gap-1">
            <Eye size={14} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} animate-pulse`} />
            <span className={`text-xs ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Live</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VisitorCounter;
