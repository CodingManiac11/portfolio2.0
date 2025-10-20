import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';
import { SiReact, SiTypescript, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

interface Technology {
  name: string;
  icon: any;
  color: string;
}

const ProjectsSection: React.FC = () => {
  const projects: {
    title: string;
    description: string;
    technologies: Technology[];
    features: string[];
    demoLink: string;
    githubLink: string;
    image: string;
    gradient: string;
  }[] = [
    {
      title: 'Credit Card Validator',
      description: 'A sophisticated React application built with TypeScript that validates credit card numbers using the Luhn Algorithm. Features responsive UI design and real-time validation.',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
      ],
      features: [
        'Luhn Algorithm Implementation',
        'Real-time Validation',
        'Responsive Design',
        'TypeScript Integration'
      ],
      demoLink: 'https://credit-card-validator-one.vercel.app/',
      githubLink: 'https://github.com/CodingManiac11/Credit-Card-Validator',
      image: '/api/placeholder/400/250',
      gradient: 'from-cyber-blue to-cyber-green'
    },
    {
      title: 'QuizNest Web App',
      description: 'An interactive quiz application featuring dynamic question handling, score tracking, and data visualization using Chart.js for comprehensive result analysis.',
      technologies: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
      ],
      features: [
        'Interactive Quiz Interface',
        'Chart.js Integration',
        'Score Tracking',
        'Responsive Design'
      ],
      demoLink: 'https://quiz-nest-by-aditya-utsav.vercel.app/',
      githubLink: 'https://github.com/CodingManiac11/Quiz_Nest',
      image: '/api/placeholder/400/250',
      gradient: 'from-cyber-green to-cyber-purple'
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
    <section id="projects" className="py-20 px-4 bg-dark-card/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-hack-green to-hack-cyan bg-clip-text text-transparent mb-4 glitch">
              COMPILED_PROJECTS.EXE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hack-green to-hack-red mx-auto rounded-full cyber-glow"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
                  {/* Project Image/Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-dark-card to-dark-bg overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 size={64} className="text-white/30" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-cyber-blue rounded-full hover:bg-cyber-green transition-colors"
                      >
                        <ExternalLink size={20} className="text-dark-bg" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-cyber-purple rounded-full hover:bg-cyber-green transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-cyber font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-4">
                      <h4 className="text-cyber-green font-semibold mb-2 flex items-center gap-2">
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
                              className="flex items-center gap-2 px-3 py-1 bg-dark-card rounded-full border border-white/10"
                            >
                              <TechIcon size={16} style={{ color: tech.color }} />
                              <span className="text-xs text-gray-300">{tech.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-cyber-purple font-semibold mb-2">Key Features</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-cyber-blue rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-2 px-4 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-lg text-center text-dark-bg font-semibold hover:shadow-lg transition-all"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-2 px-4 border border-cyber-purple rounded-lg text-center text-cyber-purple font-semibold hover:bg-cyber-purple hover:text-dark-bg transition-all"
                      >
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
