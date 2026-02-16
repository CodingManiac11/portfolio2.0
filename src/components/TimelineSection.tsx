import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy,
  Award,
  Shield,
  Rocket
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  gradient: string;
  side: 'left' | 'right';
  type: 'education' | 'experience' | 'achievement';
}

const TimelineSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2019',
      title: 'CBSE Class X',
      subtitle: 'Academic Excellence',
      description: 'Achieved 93.2% - Built a strong academic foundation',
      icon: GraduationCap,
      gradient: 'from-green-500 to-emerald-600',
      side: 'left',
      type: 'education'
    },
    {
      year: '2021',
      title: 'CBSE Class XII - School Topper',
      subtitle: 'Outstanding Achievement',
      description: 'Scored 95.6% - Highest scorer in the school',
      icon: Trophy,
      gradient: 'from-yellow-500 to-orange-600',
      side: 'right',
      type: 'achievement'
    },
    {
      year: '2022',
      title: 'B.Tech CSE at Galgotias University',
      subtitle: 'Higher Education',
      description: 'Started pursuing Computer Science Engineering with focus on Full Stack Development and Cybersecurity',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-600',
      side: 'left',
      type: 'education'
    },
    {
      year: 'Nov-Dec 2024',
      title: 'Intern @ Edunet Foundation',
      subtitle: 'Microsoft & SAP AICTE Program',
      description: 'Gained hands-on experience in enterprise technologies through industry collaboration',
      icon: Briefcase,
      gradient: 'from-purple-500 to-violet-600',
      side: 'right',
      type: 'experience'
    },
    {
      year: '2025',
      title: 'Reliance Foundation Scholar',
      subtitle: '₹2,00,000 Grant',
      description: 'Selected for prestigious scholarship recognizing academic excellence and innovation',
      icon: Award,
      gradient: 'from-amber-500 to-yellow-600',
      side: 'left',
      type: 'achievement'
    },
    {
      year: 'Jun-Jul 2025',
      title: 'Cybersecurity Intern @ Jayadhi Limited',
      subtitle: 'UK-Based Remote Internship',
      description: 'Hands-on experience in network security, vulnerability assessment, and security protocols',
      icon: Shield,
      gradient: 'from-red-500 to-rose-600',
      side: 'right',
      type: 'experience'
    },
    {
      year: '2026 (Expected)',
      title: 'B.Tech Graduation',
      subtitle: 'Galgotias University',
      description: 'Expected graduation with strong foundation in CSE and practical industry experience',
      icon: Rocket,
      gradient: 'from-cyan-500 to-blue-600',
      side: 'left',
      type: 'education'
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'education': return 'bg-blue-500';
      case 'experience': return 'bg-purple-500';
      case 'achievement': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'education': return 'Education';
      case 'experience': return 'Experience';
      case 'achievement': return 'Achievement';
      default: return '';
    }
  };

  return (
    <section id="timeline" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/30 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>My Journey</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-blue-200 to-purple-400' : 'bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700'}`}>
              Education & Experience
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A timeline of my academic achievements and professional experiences
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Legend */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12 flex-wrap">
            {['education', 'experience', 'achievement'].map((type) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getTypeColor(type)}`}></div>
                <span className={`text-sm capitalize ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{type}</span>
              </div>
            ))}
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>
            {/* Mobile Line */}
            <div className="absolute left-4 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full md:hidden"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isLeft = event.side === 'left';
                
                return (
                  <motion.div
                    key={index}
                    variants={isLeft ? itemVariants : rightItemVariants}
                    className={`relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                  >
                    {/* Timeline Item */}
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}
                    >
                      <div className={`backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-white/30' : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-200 hover:border-gray-400 shadow-lg'}`}>
                        {/* Type Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(event.type)}`}>
                            {getTypeLabel(event.type)}
                          </span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                            {event.year}
                          </span>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${event.gradient} shadow-lg`}>
                            <IconComponent size={24} className="text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {event.title}
                            </h3>
                            <p className={`font-semibold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent mb-2`}>
                              {event.subtitle}
                            </p>
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Circle - Desktop */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${event.gradient} border-4 z-10 shadow-lg ${isDark ? 'border-gray-900' : 'border-white'}`}
                    />
                    
                    {/* Left Circle - Mobile */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`md:hidden absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${event.gradient} border-2 z-10 ${isDark ? 'border-gray-900' : 'border-white'}`}
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
