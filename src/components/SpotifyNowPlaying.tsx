import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Play, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Track {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  isPlaying: boolean;
  spotifyUrl: string;
}

const SpotifyNowPlaying: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  // Simulated playlist - In production, this would connect to Spotify API
  const playlist: Track[] = [
    {
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      isPlaying: true,
      spotifyUrl: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    },
    {
      name: 'Shape of You',
      artist: 'Ed Sheeran',
      album: '÷ (Divide)',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
      isPlaying: true,
      spotifyUrl: 'https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3',
    },
    {
      name: 'Starboy',
      artist: 'The Weeknd, Daft Punk',
      album: 'Starboy',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452',
      isPlaying: true,
      spotifyUrl: 'https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB',
    },
    {
      name: 'Believer',
      artist: 'Imagine Dragons',
      album: 'Evolve',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b273cdee1db4dd299d5c8e498630',
      isPlaying: true,
      spotifyUrl: 'https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP',
    },
  ];

  useEffect(() => {
    // Rotate through playlist to simulate "now playing"
    let index = 0;
    setCurrentTrack(playlist[0]);
    
    const interval = setInterval(() => {
      index = (index + 1) % playlist.length;
      setCurrentTrack(playlist[index]);
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="fixed bottom-24 right-4 z-40"
    >
      <motion.div
        animate={{ width: isExpanded ? 280 : 56 }}
        transition={{ duration: 0.3 }}
        className={`
          h-14 rounded-full backdrop-blur-xl border overflow-hidden cursor-pointer
          ${isDark 
            ? 'bg-gray-900/90 border-green-500/30' 
            : 'bg-white/90 border-green-500/30 shadow-lg'
          }
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center h-full px-2 gap-3">
          {/* Spotify Icon / Album Art */}
          <div className="relative w-10 h-10 flex-shrink-0">
            {currentTrack.albumArt ? (
              <img
                src={currentTrack.albumArt}
                alt={currentTrack.album}
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className={`w-full h-full rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
                <Music size={20} className="text-green-500" />
              </div>
            )}
            
            {/* Playing animation */}
            <div className="absolute -bottom-1 -right-1 flex gap-0.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ['4px', '12px', '4px'] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="w-1 bg-green-500 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Track Info */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 min-w-0 pr-2"
              >
                <p className={`text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentTrack.name}
                </p>
                <p className={`text-xs truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentTrack.artist}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Spotify Link */}
          <AnimatePresence>
            {isExpanded && (
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                href={currentTrack.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                  ${isDark ? 'bg-green-500 hover:bg-green-400' : 'bg-green-500 hover:bg-green-600'}
                  transition-colors
                `}
              >
                <ExternalLink size={14} className="text-white" />
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Label when collapsed */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`
              absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap
              ${isDark ? 'text-gray-500' : 'text-gray-500'}
            `}
          >
            Now Playing
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpotifyNowPlaying;
