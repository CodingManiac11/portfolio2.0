import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, Users, Target } from 'lucide-react';

interface Position {
  title: string;
  organization: string;
  description: string;
  responsibilities: string[];
  icon: any;
  color: string;
  bgGradient: string;
  logo: string;
}

const ResponsibilitySection: React.FC = () => {
  const positions: Position[] = [
    {
      title: 'Senior Member',
      organization: 'CyberCellGU',
      description: 'Cyber Security Club at Galgotias University',
      responsibilities: [
        'Leading cybersecurity awareness initiatives',
        'Organizing security workshops and seminars',
        'Mentoring junior members in ethical hacking',
        'Conducting security audits and assessments'
      ],
      icon: Shield,
      color: 'cyber-blue',
      bgGradient: 'from-cyber-blue/10 to-cyber-purple/10',
      logo: '🛡️'
    },
    {
      title: 'Student Placement Coordinator',
      organization: 'School of CSE, Galgotias University',
      description: 'Facilitating placement opportunities for CSE students',
      responsibilities: [
        'Coordinating with companies for placement drives',
        'Organizing pre-placement training sessions',
        'Mentoring students for interview preparation',
        'Managing placement data and statistics'
      ],
      icon: Briefcase,
      color: 'cyber-green',
      bgGradient: 'from-cyber-green/10 to-cyber-blue/10',
      logo: '💼'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="responsibilities" className="py-20 px-4 bg-dark-card/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent mb-4">
              Positions of Responsibility
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Leading initiatives and making a difference in the academic and cybersecurity community
            </p>
          </motion.div>

          {/* Positions Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => {
              const IconComponent = position.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02
                  }}
                  className="group relative"
                >
                  <div className={`glass rounded-2xl p-8 border border-${position.color}/20 hover:border-${position.color}/50 transition-all duration-500 h-full bg-gradient-to-br ${position.bgGradient}`}>
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br from-${position.color}/20 to-${position.color}/40 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={32} className={`text-${position.color}`} />
                      </div>
                      
                      <div className="text-right">
                        <span className="text-3xl mb-2 block">{position.logo}</span>
                      </div>
                    </div>

                    {/* Title and Organization */}
                    <div className="mb-6">
                      <h3 className={`text-2xl font-cyber font-bold text-white mb-2 group-hover:text-${position.color} transition-colors`}>
                        {position.title}
                      </h3>
                      
                      <p className={`text-${position.color} font-semibold text-lg mb-3`}>
                        {position.organization}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {position.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className={`text-${position.color} font-semibold mb-4 flex items-center gap-2`}>
                        <Target size={16} />
                        Key Responsibilities
                      </h4>
                      
                      <ul className="space-y-3">
                        {position.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: respIndex * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className={`w-2 h-2 bg-${position.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <Users size={64} className={`text-${position.color}`} />
                    </div>
                    
                    {/* Glow Effect */}
                    <div 
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-${position.color} to-transparent`}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Leadership Stats */}
          <motion.div
            variants={cardVariants}
            className="mt-16 glass rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-cyber font-bold text-center text-cyber-green mb-8">
              Leadership Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-cyber font-bold text-cyber-blue"
                >
                  50+
                </motion.div>
                <p className="text-gray-300">Students Mentored</p>
                <div className="w-16 h-1 bg-cyber-blue mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-cyber font-bold text-cyber-green"
                >
                  10+
                </motion.div>
                <p className="text-gray-300">Events Organized</p>
                <div className="w-16 h-1 bg-cyber-green mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl font-cyber font-bold text-cyber-purple"
                >
                  2+
                </motion.div>
                <p className="text-gray-300">Years Experience</p>
                <div className="w-16 h-1 bg-cyber-purple mx-auto rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibilitySection;
