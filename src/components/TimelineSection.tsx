import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  side: 'left' | 'right';
}

const TimelineSection: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2019',
      title: 'CBSE Class X',
      description: '93.2% - Strong foundation in academics',
      icon: GraduationCap,
      color: 'hack-green',
      side: 'left'
    },
    {
      year: '2021',
      title: 'CBSE Class XII - School Topper',
      description: '95.6% - Achieved highest score in school',
      icon: Trophy,
      color: 'hack-cyan',
      side: 'right'
    },
    {
      year: '2022',
      title: 'Started B.Tech CSE',
      description: 'Galgotias University - Computer Science Engineering',
      icon: GraduationCap,
      color: 'hack-purple',
      side: 'left'
    },
    {
      year: 'Nov-Dec 2024',
      title: 'Intern @ Edunet Foundations',
      description: 'Microsoft & SAP AICTE Program',
      icon: Briefcase,
      color: 'hack-red',
      side: 'right'
    },
    {
      year: 'Jun-Jul 2025',
      title: 'Cybersecurity Intern',
      description: 'Jayadhi Limited (UK) - Remote Internship',
      icon: Briefcase,
      color: 'hack-cyan',
      side: 'left'
    },
    {
      year: '2026 (Expected)',
      title: 'B.Tech Graduation',
      description: 'Computer Science Engineering - Galgotias University',
      icon: GraduationCap,
      color: 'hack-green',
      side: 'right'
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-dark-card/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-hack-green to-hack-purple bg-clip-text text-transparent mb-4 glitch">
              EDUCATION_HISTORY.LOG
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hack-green to-hack-red mx-auto rounded-full cyber-glow"></div>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isLeft = event.side === 'left';
                
                return (
                  <motion.div
                    key={index}
                    variants={isLeft ? itemVariants : rightItemVariants}
                    className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Item */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
                    >
                      <div className={`glass rounded-xl p-6 border border-${event.color}/20 hover:border-${event.color}/40 transition-all duration-300`}>
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br from-${event.color}/20 to-${event.color}/40`}>
                            <IconComponent size={24} className={`text-${event.color}`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`text-${event.color} font-mono font-bold text-sm`}>
                                {event.year}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-cyber font-bold text-white mb-2">
                              {event.title}
                            </h3>
                            
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Circle */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${event.color} border-4 border-dark-bg z-10`}
                      style={{
                        boxShadow: `0 0 20px var(--tw-gradient-from, ${event.color})`
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
