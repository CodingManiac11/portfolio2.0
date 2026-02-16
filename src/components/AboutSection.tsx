import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, GraduationCap, Award, Briefcase, Star, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { label: 'CGPA', value: '8.18', icon: Award },
    { label: 'Projects', value: '10+', icon: Briefcase },
    { label: 'Certifications', value: '5+', icon: Star },
  ];

  return (
    <section id="about" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/50 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Get to Know Me</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-blue-200 to-purple-400' : 'bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700'}`}>
              About Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`backdrop-blur-xl rounded-2xl p-6 border text-center transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-white/10 hover:border-cyan-500/50' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-cyan-500/50 shadow-lg'}`}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                <div className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-cyan-500/30' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-cyan-500/30 shadow-xl'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AU</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Aditya Utsav</h3>
                    <p className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Full Stack Developer & Security Enthusiast</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <MapPin className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={20} />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Noida, India</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <Phone className="text-green-400" size={20} />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>+91-9570329856</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <Mail className="text-purple-400" size={20} />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>adityautsav1901@gmail.com</span>
                  </div>
                </div>

                <p className={`leading-relaxed text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  A passionate <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Full Stack Developer</span> and <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Cybersecurity Enthusiast</span> currently 
                  pursuing B.Tech in Computer Science Engineering at Galgotias University. Recognized as a <span className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Reliance Foundation Scholar</span> with 
                  expertise in building secure, scalable web applications.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <GraduationCap className="text-purple-400" />
                Education Journey
              </h3>

              <div className="space-y-4">
                {/* B.Tech */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/50' : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 hover:border-cyan-500/60 shadow-lg'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>B.Tech in Computer Science</h4>
                      <p className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Galgotias University</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-bold text-lg ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-500/20 text-cyan-700'}`}>8.18 CGPA</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2022 – 2026 (Expected)</p>
                </motion.div>

                {/* Class XII */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/50' : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/60 shadow-lg'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Class XII (CBSE)</h4>
                      <p className={`flex items-center gap-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                        <Trophy size={16} className="text-yellow-400" />
                        School Topper
                      </p>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-bold text-lg ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-500/20 text-purple-700'}`}>95.6%</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2021</p>
                </motion.div>

                {/* Class X */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/50' : 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/60 shadow-lg'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Class X (CBSE)</h4>
                      <p className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>Strong Academic Foundation</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-bold text-lg ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-500/20 text-green-700'}`}>93.2%</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2019</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
