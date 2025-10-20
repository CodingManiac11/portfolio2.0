import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
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

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-hack-green to-hack-cyan bg-clip-text text-transparent mb-4 glitch">
              NEURAL_PROFILE.EXE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hack-green to-hack-red mx-auto rounded-full cyber-glow"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass rounded-2xl p-8 border border-cyber-blue/20">
                <h3 className="text-3xl font-cyber font-bold text-cyber-blue mb-6">Aditya Utsav</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-cyber-green" size={20} />
                    <span className="text-gray-300">Noida, India</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="text-cyber-green" size={20} />
                    <span className="text-gray-300">+91-9570329856</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="text-cyber-green" size={20} />
                    <span className="text-gray-300">adityautsav1901@gmail.com</span>
                  </div>
                </div>

                <p className="text-gray-300 mt-6 leading-relaxed">
                  A passionate Frontend Developer and Cybersecurity Enthusiast currently pursuing B.Tech in Computer Science Engineering. 
                  I combine creative problem-solving with technical expertise to build secure, user-friendly digital experiences.
                </p>
              </div>
            </motion.div>

            {/* Education Summary */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-cyber font-bold text-cyber-purple mb-6 flex items-center gap-3">
                <GraduationCap className="text-cyber-purple" />
                Education
              </h3>

              <div className="space-y-6">
                {/* B.Tech */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-cyber-blue">B.Tech (CSE)</h4>
                    <span className="text-cyber-green font-mono font-bold">8.18 CGPA</span>
                  </div>
                  <p className="text-gray-300">Galgotias University</p>
                  <p className="text-gray-400 text-sm">2022 – 2026</p>
                </motion.div>

                {/* Class XII */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-cyber-blue">Class XII (CBSE)</h4>
                    <span className="text-cyber-green font-mono font-bold">95.6%</span>
                  </div>
                  <p className="text-gray-300">School Topper</p>
                  <p className="text-gray-400 text-sm">2021</p>
                </motion.div>

                {/* Class X */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-cyber-blue">Class X (CBSE)</h4>
                    <span className="text-cyber-green font-mono font-bold">93.2%</span>
                  </div>
                  <p className="text-gray-400 text-sm">2019</p>
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
