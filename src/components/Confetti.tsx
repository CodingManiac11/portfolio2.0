import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiProps {
  isActive: boolean;
  duration?: number;
}

interface Particle {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
  shape: 'square' | 'circle' | 'triangle';
}

const Confetti: React.FC<ConfettiProps> = ({ isActive, duration = 3000 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [show, setShow] = useState(false);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8B500', '#FF69B4', '#00CED1', '#FFD700', '#7B68EE',
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isActive) {
      setShow(true);
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < 150; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
          rotation: Math.random() * 360,
          shape: ['square', 'circle', 'triangle'][Math.floor(Math.random() * 3)] as 'square' | 'circle' | 'triangle',
        });
      }
      
      setParticles(newParticles);

      const timer = setTimeout(() => {
        setShow(false);
        setParticles([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration]);

  const getShape = (shape: string, color: string) => {
    switch (shape) {
      case 'circle':
        return <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />;
      case 'triangle':
        return (
          <div 
            className="w-0 h-0" 
            style={{ 
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: `10px solid ${color}`,
            }} 
          />
        );
      default:
        return <div className="w-3 h-3" style={{ backgroundColor: color }} />;
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                x: `${particle.x}vw`,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: '110vh',
                rotate: particle.rotation + 720,
                opacity: [1, 1, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: particle.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute"
              style={{
                left: `${particle.x}%`,
              }}
            >
              {getShape(particle.shape, particle.color)}
            </motion.div>
          ))}
          
          {/* Burst effect from center */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              initial={{
                x: '50vw',
                y: '50vh',
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: `${25 + Math.random() * 50}vw`,
                y: `${25 + Math.random() * 50}vh`,
                scale: [0, 1.5, 0],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.3,
              }}
              className="absolute text-2xl"
            >
              {['🎉', '🎊', '✨', '⭐', '🌟', '💫', '🎈'][Math.floor(Math.random() * 7)]}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default Confetti;
