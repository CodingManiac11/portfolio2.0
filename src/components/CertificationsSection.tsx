import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Trophy, BookOpen, Star } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  amount?: string;
  achievement?: string;
  year: string;
  icon: any;
  color: string;
  description: string;
  logo: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Reliance Foundation Scholarship',
      organization: 'Reliance Foundation',
      amount: '₹2,00,000 grant',
      year: '2025',
      icon: Trophy,
      color: 'cyber-green',
      description: 'Prestigious scholarship for academic excellence and potential',
      logo: '🏆'
    },
    {
      title: 'CCNA: Introduction to Network',
      organization: 'Cisco',
      year: 'Apr 2025',
      icon: Shield,
      color: 'cyber-blue',
      description: 'Fundamental networking concepts and technologies',
      logo: '🌐'
    },
    {
      title: 'Introduction to Cybersecurity',
      organization: 'Cisco',
      year: 'Jun 2025',
      icon: Shield,
      color: 'cyber-purple',
      description: 'Core cybersecurity principles and best practices',
      logo: '🔒'
    },
    {
      title: 'Oracle Gen AI Professional',
      organization: 'Oracle',
      year: '2025',
      icon: BookOpen,
      color: 'cyber-blue',
      description: 'Advanced AI and machine learning technologies',
      logo: '⚡'
    },
    {
      title: 'CBSE School Topper',
      organization: 'CBSE',
      achievement: '95.6% in Class XII',
      year: '2021',
      icon: Star,
      color: 'cyber-green',
      description: 'Highest scorer in school for Class XII examinations',
      logo: '🎓'
    },
    {
      title: 'NHRC Group Research',
      organization: 'NHRC',
      achievement: '1st Place',
      year: '2025',
      icon: Award,
      color: 'cyber-purple',
      description: 'First place in group research competition',
      logo: '🥇'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-card/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-hack-purple to-hack-cyan bg-clip-text text-transparent mb-4 glitch">
              CREDENTIALS_UNLOCKED.BAT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hack-purple to-hack-green mx-auto rounded-full cyber-glow"></div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  className="group relative"
                >
                  <div className={`glass rounded-xl p-6 border border-${cert.color}/20 hover:border-${cert.color}/50 transition-all duration-500 h-full flex flex-col`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-${cert.color}/20 to-${cert.color}/40 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} className={`text-${cert.color}`} />
                      </div>
                      
                      <div className="text-right">
                        <span className="text-2xl">{cert.logo}</span>
                        <p className={`text-${cert.color} font-mono text-sm font-bold`}>
                          {cert.year}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-cyber font-bold text-white mb-2 group-hover:text-${cert.color} transition-colors`}>
                        {cert.title}
                      </h3>
                      
                      <p className={`text-${cert.color} font-semibold mb-2`}>
                        {cert.organization}
                      </p>
                      
                      {cert.amount && (
                        <p className="text-cyber-green font-bold text-lg mb-2">
                          {cert.amount}
                        </p>
                      )}
                      
                      {cert.achievement && (
                        <p className="text-cyber-green font-bold mb-2">
                          {cert.achievement}
                        </p>
                      )}
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div 
                      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-${cert.color} to-transparent`}
                    ></div>
                    
                    {/* Badge Effect */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-${cert.color} rounded-full flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={cardVariants}
            className="mt-16 glass rounded-2xl p-8 border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-cyber font-bold text-cyber-blue mb-2"
                >
                  4+
                </motion.div>
                <p className="text-gray-300">Certifications</p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-cyber font-bold text-cyber-green mb-2"
                >
                  2
                </motion.div>
                <p className="text-gray-300">Awards</p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-cyber font-bold text-cyber-purple mb-2"
                >
                  ₹2L
                </motion.div>
                <p className="text-gray-300">Scholarship</p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-cyber font-bold text-cyber-blue mb-2"
                >
                  95.6%
                </motion.div>
                <p className="text-gray-300">Best Score</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
