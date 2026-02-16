import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, X, ExternalLink, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SpotifyPlayer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isExpanded, setIsExpanded] = useState(false);

  // Bollywood playlist - Arijit Singh, Atif Aslam, Javed Ali, Vishal Dadlani, Sonu Nigam
  const spotifyPlaylistId = '37i9dQZF1DX0XUfTFmNBRM'; // Bollywood Butter - Top Bollywood Hits
  const spotifyEmbedUrl = `https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`;

  return (
    <>
      {/* Floating Music Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        onClick={() => setIsExpanded(true)}
        className={`
          fixed bottom-32 right-6 z-40 w-14 h-14 rounded-full
          flex items-center justify-center shadow-lg
          transition-all duration-300 group
          ${isDark 
            ? 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500' 
            : 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500'
          }
          ${isExpanded ? 'hidden' : ''}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing ring */}
        <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30"></span>
        
        {/* Equalizer bars animation */}
        <div className="absolute -top-1 -right-1 flex gap-0.5 bg-white rounded-full p-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: ['4px', '10px', '4px'] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-1 bg-green-500 rounded-full"
            />
          ))}
        </div>
        
        <Play size={24} className="text-white fill-white ml-1" />
      </motion.button>

      {/* Label */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className={`
            fixed bottom-[7rem] right-6 z-40 text-xs font-medium text-center
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
          `}
        >
          🎵 Music
        </motion.div>
      )}

      {/* Expanded Spotify Player Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Player Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: 'spring', damping: 25 }}
              className={`
                fixed bottom-4 right-4 left-4 md:left-auto md:w-[380px] z-50
                rounded-3xl overflow-hidden shadow-2xl
                ${isDark ? 'bg-gray-900' : 'bg-white'}
              `}
            >
              {/* Header */}
              <div className={`
                flex items-center justify-between p-4 border-b
                ${isDark ? 'border-gray-800' : 'border-gray-200'}
              `}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <Music size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Bollywood Vibes
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Arijit, Atif, Sonu & more 🎧
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.a
                    href={`https://open.spotify.com/playlist/${spotifyPlaylistId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      p-2 rounded-full transition-colors
                      ${isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}
                    `}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      p-2 rounded-full transition-colors
                      ${isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}
                    `}
                  >
                    <X size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Spotify Embed */}
              <div className="p-2">
                <iframe
                  title="Spotify Player"
                  src={spotifyEmbedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-2xl"
                  style={{ 
                    borderRadius: '12px',
                    background: isDark ? '#121212' : '#f5f5f5' 
                  }}
                />
              </div>

              {/* Footer */}
              <div className={`
                px-4 py-3 text-center text-xs border-t
                ${isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'}
              `}>
                Click play to vibe with me while browsing! 🎶
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpotifyPlayer;
