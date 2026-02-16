import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiLinux,
  SiNodedotjs,
  SiTypescript,
  SiPython
} from 'react-icons/si';
import { 
  Shield, 
  Lock, 
  Users, 
  Lightbulb, 
  Target, 
  Heart,
  Server,
  Wifi,
  Code,
  Monitor,
  Brain,
  Zap
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SkillItem {
  name: string;
  icon: any;
  color: string;
  level?: number;
}

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillCategories: {
    title: string;
    color: string;
    gradient: string;
    skills: SkillItem[];
  }[] = [
    {
      title: "Programming Languages",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C", level: 85 },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
        { name: "Python", icon: SiPython, color: "#3776AB", level: 75 },
      ]
    },
    {
      title: "Frontend Development",
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB", level: 90 },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
      ]
    },
    {
      title: "Backend & Tools",
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75 },
        { name: "Git", icon: SiGit, color: "#F05032", level: 85 },
        { name: "Linux", icon: SiLinux, color: "#FCC624", level: 80 },
      ]
    },
    {
      title: "Cybersecurity",
      color: "red",
      gradient: "from-red-500 to-orange-600",
      skills: [
        { name: "Network Security", icon: Shield, color: "#ef4444", level: 85 },
        { name: "Firewall Config", icon: Lock, color: "#f97316", level: 80 },
        { name: "Linux Server", icon: Server, color: "#eab308", level: 85 },
        { name: "Windows Server", icon: Monitor, color: "#0078D4", level: 75 },
      ]
    },
    {
      title: "Soft Skills",
      color: "yellow",
      gradient: "from-yellow-500 to-amber-600",
      skills: [
        { name: "Leadership", icon: Users, color: "#eab308", level: 90 },
        { name: "Problem Solving", icon: Brain, color: "#a855f7", level: 95 },
        { name: "Teamwork", icon: Heart, color: "#ec4899", level: 90 },
        { name: "Adaptability", icon: Zap, color: "#22c55e", level: 85 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/30 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>What I Do</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-purple-200 to-cyan-400' : 'bg-gradient-to-r from-gray-900 via-purple-700 to-cyan-700'}`}>
              Skills & Expertise
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border-white/10 hover:border-white/20' : 'bg-gradient-to-br from-white/60 to-gray-50/60 border-gray-200 hover:border-gray-300 shadow-lg'}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-10 w-1.5 rounded-full bg-gradient-to-b ${category.gradient}`}></div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                        }}
                        className="group relative"
                      >
                        <div className={`rounded-2xl p-6 border transition-all duration-300 text-center ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-white/10 hover:border-white/30' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-gray-400 shadow-md'}`}>
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="mb-4 flex justify-center"
                          >
                            <div className={`p-3 rounded-xl transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                              <IconComponent 
                                size={36} 
                                style={{ color: skill.color }}
                                className="drop-shadow-lg"
                              />
                            </div>
                          </motion.div>
                          
                          <h4 className={`font-semibold text-sm mb-3 transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                            {skill.name}
                          </h4>
                          
                          {/* Skill Level Bar */}
                          {skill.level && (
                            <div className={`relative h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                className={`absolute h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
