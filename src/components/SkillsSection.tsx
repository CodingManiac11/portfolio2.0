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
  SiLinux
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
  Monitor
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon: any;
  color: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: {
    title: string;
    color: string;
    skills: SkillItem[];
  }[] = [
    {
      title: "Programming Languages",
      color: "cyber-blue",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ]
    },
    {
      title: "Frontend Development",
      color: "cyber-green",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Tools & Technologies",
      color: "cyber-purple",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "VS Code", icon: Code, color: "#007ACC" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
      ]
    },
    {
      title: "Networking & Security",
      color: "cyber-blue",
      skills: [
        { name: "Firewall", icon: Shield, color: "#00d4ff" },
        { name: "VPN", icon: Lock, color: "#39ff14" },
        { name: "Linux Server", icon: Server, color: "#FCC624" },
        { name: "Windows Server", icon: Monitor, color: "#0078D4" },
        { name: "Network Config", icon: Wifi, color: "#bf00ff" },
      ]
    },
    {
      title: "Soft Skills",
      color: "cyber-green",
      skills: [
        { name: "Leadership", icon: Users, color: "#39ff14" },
        { name: "Problem Solving", icon: Lightbulb, color: "#00d4ff" },
        { name: "Teamwork", icon: Heart, color: "#bf00ff" },
        { name: "Adaptability", icon: Target, color: "#39ff14" },
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
    <section id="skills" className="py-20 px-4 bg-dark-card/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-hack-green to-hack-purple bg-clip-text text-transparent mb-4 glitch">
              SYSTEM_CAPABILITIES.DLL
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hack-green to-hack-red mx-auto rounded-full cyber-glow"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="glass rounded-2xl p-8 border border-white/10"
              >
                <h3 className={`text-2xl font-cyber font-bold text-${category.color} mb-8 text-center`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          rotateY: 10,
                          boxShadow: `0 10px 30px ${skill.color}40`
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                      >
                        <div className="glass rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center cursor-pointer">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="mb-4 flex justify-center"
                          >
                            <IconComponent 
                              size={48} 
                              style={{ color: skill.color }}
                              className="group-hover:drop-shadow-lg"
                            />
                          </motion.div>
                          
                          <h4 className="text-white font-semibold text-sm group-hover:text-cyber-blue transition-colors">
                            {skill.name}
                          </h4>
                          
                          {/* Hover Glow Effect */}
                          <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{ boxShadow: `inset 0 0 20px ${skill.color}` }}
                          ></div>
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
