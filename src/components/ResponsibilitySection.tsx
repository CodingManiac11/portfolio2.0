import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, Target, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Position {
  title: string;
  organization: string;
  description: string;
  responsibilities: string[];
  icon: any;
  gradient: string;
  logo: string;
}

const ResponsibilitySection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const positions: Position[] = [
    {
      title: 'Senior Member',
      organization: 'CyberCellGU',
      description: 'Cyber Security Club at Galgotias University - Leading initiatives in cybersecurity awareness and education',
      responsibilities: [
        'Leading cybersecurity awareness initiatives and workshops',
        'Organizing security seminars and CTF competitions',
        'Mentoring junior members in ethical hacking',
        'Conducting security audits and assessments'
      ],
      icon: Shield,
      gradient: 'from-cyan-500 to-blue-600',
      logo: '🛡️'
    },
    {
      title: 'Student Placement Coordinator',
      organization: 'School of CSE, Galgotias University',
      description: 'Facilitating career opportunities and placement support for CSE students',
      responsibilities: [
        'Coordinating with companies for placement drives',
        'Organizing pre-placement training sessions',
        'Mentoring students for interview preparation',
        'Managing placement data and success metrics'
      ],
      icon: Briefcase,
      gradient: 'from-purple-500 to-pink-600',
      logo: '💼'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="responsibilities" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/30 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Leadership</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-cyan-200 to-purple-400' : 'bg-gradient-to-r from-gray-900 via-cyan-700 to-purple-700'}`}>
              Positions of Responsibility
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Leading initiatives and making a difference in the academic and cybersecurity community
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Positions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => {
              const IconComponent = position.icon;
              
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
                  <div className={`h-full backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-white/30' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-gray-400 shadow-xl'}`}>
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${position.gradient} shadow-lg`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      
                      <div className="text-right">
                        <span className="text-4xl block">{position.logo}</span>
                      </div>
                    </div>

                    {/* Title and Organization */}
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                        {position.title}
                      </h3>
                      
                      <p className={`font-semibold text-lg mb-3 bg-gradient-to-r ${position.gradient} bg-clip-text text-transparent`}>
                        {position.organization}
                      </p>
                      
                      <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {position.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className={`font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <Target size={16} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        Key Responsibilities
                      </h4>
                      
                      <ul className="space-y-3">
                        {position.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: respIndex * 0.1 }}
                            className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            <ChevronRight size={16} className={`mt-1 flex-shrink-0 bg-gradient-to-r ${position.gradient} bg-clip-text text-cyan-400`} />
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
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

export default ResponsibilitySection;
