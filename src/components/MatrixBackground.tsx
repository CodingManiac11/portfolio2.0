import React, { useEffect, useState } from 'react';

const MatrixBackground: React.FC = () => {
  const [lines, setLines] = useState<Array<{
    id: number;
    text: string;
    color: string;
    opacity: number;
    speed: number;
  }>>([]);

  useEffect(() => {
    // Hacker-themed characters
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]|\\:";\'<>?,./~`';
    const hackColors = ['#00ff00', '#ff0040', '#00ffff', '#ffff00', '#ff00ff'];
    
    const createLines = () => {
      const newLines = [];
      for (let i = 0; i < 60; i++) { // More lines for denser effect
        let line = '';
        for (let j = 0; j < 25; j++) {
          line += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        newLines.push({
          id: i,
          text: line,
          color: hackColors[Math.floor(Math.random() * hackColors.length)],
          opacity: 0.1 + Math.random() * 0.3,
          speed: 15 + Math.random() * 15
        });
      }
      setLines(newLines);
    };

    createLines();
    const interval = setInterval(createLines, 3000); // Faster refresh

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-bg fixed inset-0 -z-10">
      {lines.map((line, index) => (
        <div
          key={line.id}
          className="matrix-line absolute font-mono text-xs"
          style={{
            left: `${(index * 1.7) % 100}%`,
            color: line.color,
            opacity: line.opacity,
            textShadow: `0 0 10px ${line.color}, 0 0 20px ${line.color}`,
            animationDelay: `${index * 0.1}s`,
            animationDuration: `${line.speed}s`,
          }}
        >
          {line.text}
        </div>
      ))}
      
      {/* Glitch overlay messages */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`glitch-${i}`}
          className="absolute text-hack-red font-mono text-sm flicker"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            textShadow: '0 0 15px #ff0040, 0 0 30px #ff0040',
            opacity: 0.6,
            zIndex: 1
          }}
        >
          {i % 4 === 0 ? 'ACCESS_DENIED' : 
           i % 4 === 1 ? 'BREACH_DETECTED' :
           i % 4 === 2 ? 'FIREWALL_DOWN' : 'SYSTEM_COMPROMISED'}
        </div>
      ))}
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
    </div>
  );
};

export default MatrixBackground;
