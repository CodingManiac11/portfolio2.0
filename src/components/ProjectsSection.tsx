import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Rocket, Zap, Globe, Users } from 'lucide-react';
import { SiReact, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

interface Technology {
  name: string;
  icon: any;
  color: string;
}

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects: {
    title: string;
    description: string;
    technologies: Technology[];
    features: string[];
    demoLink: string;
    githubLink: string;
    image: string;
    gradient: string;
    icon: any;
    status: string;
    hideDemo?: boolean;
  }[] = [
    {
      title: 'BroadbandX_CP',
      description: 'A comprehensive broadband comparison platform built with modern web technologies. Features real-time plan comparisons, provider analytics, and user-friendly interface for finding the best internet deals.',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
      ],
      features: [
        'Real-time broadband plan comparison',
        'Provider analytics dashboard',
        'Responsive modern UI/UX',
        'Advanced search & filtering'
      ],
      demoLink: 'https://github.com/CodingManiac11/BroadbandX_CP',
      githubLink: 'https://github.com/CodingManiac11/BroadbandX_CP',
      image: '/api/placeholder/400/250',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      icon: Globe,
      status: 'Featured',
      hideDemo: true
    },
    {
      title: 'SkillSwap Community',
      description: 'A skill-sharing platform that connects learners and mentors. Built with full-stack technologies, featuring user authentication, skill matching algorithms, and real-time messaging.',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
      ],
      features: [
        'User authentication & profiles',
        'Skill matching algorithm',
        'Real-time messaging system',
        'Community features'
      ],
      demoLink: 'https://skillswap-aadi-community.up.railway.app/',
      githubLink: 'https://github.com/CodingManiac11',
      image: '/api/placeholder/400/250',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      icon: Users,
      status: 'In Development',
      hideDemo: true
    },
    {
      title: 'Credit Card Validator',
      description: 'A sophisticated React application built with TypeScript that validates credit card numbers using the Luhn Algorithm. Features responsive UI design and real-time validation with card type detection.',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
      ],
      features: [
        'Luhn Algorithm Implementation',
        'Real-time card validation',
        'Card type auto-detection',
        'Responsive design'
      ],
      demoLink: 'https://credit-card-validator-one.vercel.app/',
      githubLink: 'https://github.com/CodingManiac11/Credit-Card-Validator',
      image: '/api/placeholder/400/250',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      icon: Zap,
      status: 'Complete'
    },
    {
      title: 'QuizNest Web App',
      description: 'An interactive quiz application featuring dynamic question handling, score tracking, and data visualization using Chart.js for comprehensive result analysis and performance insights.',
      technologies: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
      ],
      features: [
        'Interactive quiz interface',
        'Chart.js data visualization',
        'Score tracking & analytics',
        'Multiple quiz categories'
      ],
      demoLink: 'https://quiz-nest-by-aditya-utsav.vercel.app/',
      githubLink: 'https://github.com/CodingManiac11/Quiz_Nest',
      image: '/api/placeholder/400/250',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      icon: Rocket,
      status: 'Complete'
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
    <section id="projects" className={`py-20 px-4 ${isDark ? 'bg-gradient-to-b from-transparent via-dark-card/5 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Portfolio</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-cyan-200 to-purple-400' : 'bg-gradient-to-r from-gray-900 via-cyan-700 to-purple-700'}`}>
              Featured Projects
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A showcase of my best work, featuring full-stack applications and innovative solutions
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`rounded-3xl overflow-hidden border transition-all duration-500 ${isDark ? 'border-white/10 hover:border-white/30 bg-gradient-to-br from-gray-900 to-gray-950' : 'border-gray-300 hover:border-gray-400 bg-white shadow-xl'}`}>
                  {/* Project Header */}
                  <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ProjectIcon size={80} className="text-white/40 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${
                        project.status === 'Live' ? 'bg-green-500/90 text-white' :
                        project.status === 'Featured' ? 'bg-yellow-500/90 text-black' :
                        'bg-blue-500/90 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-6"
                    >
                      {!project.hideDemo && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-4 bg-white rounded-full hover:bg-cyan-400 transition-colors shadow-xl"
                        >
                          <ExternalLink size={24} className="text-gray-900" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors shadow-xl"
                      >
                        <Github size={24} className="text-white" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      {project.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        <Layers size={16} />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => {
                          const TechIcon = tech.icon;
                          return (
                            <motion.div
                              key={techIndex}
                              whileHover={{ scale: 1.1 }}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors ${isDark ? 'bg-white/5 border-white/10 hover:border-white/30' : 'bg-gray-100 border-gray-200 hover:border-gray-400'}`}
                            >
                              <TechIcon size={14} style={{ color: tech.color }} />
                              <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tech.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 text-sm uppercase tracking-wider ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Key Features</h4>
                      <ul className={`text-sm space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {!project.hideDemo && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-center text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                        >
                          View Live
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${project.hideDemo ? 'flex-1' : 'flex-1'} py-3 px-4 ${project.hideDemo ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' : 'border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400'} rounded-xl text-center font-semibold transition-all`}
                      >
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
