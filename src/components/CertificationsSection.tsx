import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Trophy, BookOpen, Star, Sparkles, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Certification {
  title: string;
  organization: string;
  amount?: string;
  achievement?: string;
  year: string;
  icon: any;
  gradient: string;
  description: string;
  logo: string;
  featured?: boolean;
}

const CertificationsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const certifications: Certification[] = [
    {
      title: 'Reliance Foundation Scholarship',
      organization: 'Reliance Foundation',
      amount: '₹2,00,000 Grant',
      year: '2025',
      icon: Trophy,
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
      description: 'Prestigious scholarship awarded for academic excellence, leadership, and innovation potential',
      logo: '🏆',
      featured: true
    },
    {
      title: 'CCNA: Introduction to Networks',
      organization: 'Cisco Networking Academy',
      year: 'Apr 2025',
      icon: Shield,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      description: 'Comprehensive certification covering networking fundamentals, IP addressing, and network infrastructure',
      logo: '🌐'
    },
    {
      title: 'Introduction to Cybersecurity',
      organization: 'Cisco Networking Academy',
      year: 'Jun 2025',
      icon: Shield,
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      description: 'Core cybersecurity principles including threat detection, security operations, and best practices',
      logo: '🔒'
    },
    {
      title: 'Oracle Gen AI Professional',
      organization: 'Oracle',
      year: '2025',
      icon: BookOpen,
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      description: 'Advanced certification in Generative AI technologies, prompt engineering, and AI applications',
      logo: '⚡'
    },
    {
      title: 'CBSE School Topper',
      organization: 'CBSE Board',
      achievement: '95.6% in Class XII',
      year: '2021',
      icon: Star,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      description: 'Achieved highest score in school for Class XII board examinations',
      logo: '🎓'
    },
    {
      title: 'NHRC Group Research - 1st Place',
      organization: 'National Human Rights Commission',
      achievement: 'Winner',
      year: '2025',
      icon: Award,
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      description: 'First place in national-level group research competition on human rights',
      logo: '🥇'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/30 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Recognition</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-yellow-200 to-orange-400' : 'bg-gradient-to-r from-gray-900 via-yellow-700 to-orange-700'}`}>
              Certifications & Awards
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Recognition for excellence in academics, technology, and leadership
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Featured Certification */}
          {certifications.filter(c => c.featured).map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r ${cert.gradient}`}
              >
                <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'}`}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="text-7xl">{cert.logo}</div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <Sparkles className="text-yellow-400 w-6 h-6" />
                        <span className={`font-semibold uppercase tracking-wider text-sm ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Featured Achievement</span>
                      </div>
                      <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
                      <p className={`text-xl font-semibold mb-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>{cert.organization}</p>
                      {cert.amount && (
                        <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">{cert.amount}</p>
                      )}
                      <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{cert.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-6 py-3 rounded-full font-bold text-lg ${isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-500/20 text-yellow-700'}`}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Other Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.filter(c => !c.featured).map((cert, index) => {
              const IconComponent = cert.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02
                  }}
                  className="group"
                >
                  <div className={`h-full backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-white/30' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-gray-400 shadow-lg'}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} bg-opacity-20`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      
                      <div className="text-right">
                        <span className="text-3xl block mb-1">{cert.logo}</span>
                        <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                        {cert.title}
                      </h3>
                      
                      <p className={`font-semibold mb-2 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                        {cert.organization}
                      </p>
                      
                      {cert.achievement && (
                        <p className="text-green-400 font-bold mb-2 flex items-center gap-2">
                          <Trophy size={16} />
                          {cert.achievement}
                        </p>
                      )}
                      
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
