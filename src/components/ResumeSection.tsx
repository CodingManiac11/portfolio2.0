import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, ExternalLink } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // Simulate download process
    setTimeout(() => {
      setIsLoading(false);
      // In a real implementation, this would trigger the actual download
      const link = document.createElement('a');
      link.href = '/Aditya_Utsav_Resume.pdf';
      link.download = 'Aditya_Utsav_Resume.pdf';
      link.click();
    }, 1000);
  };

  const handlePreview = () => {
    // In a real implementation, this would open the PDF in a new tab
    window.open('/Aditya_Utsav_Resume.pdf', '_blank');
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-b from-dark-card/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent mb-4">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Download my complete resume to get a detailed overview of my skills, experience, and achievements.
            </p>
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyber-blue/30 to-cyber-green/30 rounded-lg">
                    <FileText size={32} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white">
                      Aditya Utsav - Resume
                    </h3>
                    <p className="text-gray-300">Frontend Developer & Cybersecurity Enthusiast</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl">📄</span>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Column - Quick Stats */}
                <div>
                  <h4 className="text-cyber-green font-semibold mb-4">Quick Overview</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Education:</span>
                      <span className="text-white">B.Tech CSE (8.18 CGPA)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Experience:</span>
                      <span className="text-white">2+ Internships</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Projects:</span>
                      <span className="text-white">2+ Major Projects</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Certifications:</span>
                      <span className="text-white">4+ Certifications</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Skills Preview */}
                <div>
                  <h4 className="text-cyber-purple font-semibold mb-4">Core Skills</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                      <span className="text-gray-300">Frontend Development (React, TypeScript)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                      <span className="text-gray-300">Cybersecurity & Network Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                      <span className="text-gray-300">Database Management (MongoDB)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                      <span className="text-gray-300">Leadership & Team Management</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Embed Preview */}
              <div className="mb-8 bg-dark-card/50 rounded-lg overflow-hidden border border-white/10">
                <iframe
                  src="/Aditya_Utsav_Resume.pdf"
                  title="Resume Preview"
                  className="w-full h-[600px]"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={handleDownload}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-lg font-semibold text-dark-bg transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-bg"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download Resume
                    </>
                  )}
                </motion.button>

                <motion.button
                  onClick={handlePreview}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 py-4 px-6 border-2 border-cyber-purple rounded-lg font-semibold text-cyber-purple transition-all duration-300 hover:bg-cyber-purple hover:text-dark-bg"
                >
                  <Eye size={20} />
                  Preview Resume
                </motion.button>

                <motion.button
                  onClick={() => window.open('/Aditya_Utsav_Resume.pdf', '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 py-4 px-6 border-2 border-cyber-green rounded-lg font-semibold text-cyber-green transition-all duration-300 hover:bg-cyber-green hover:text-dark-bg"
                >
                  <ExternalLink size={20} />
                  Open in New Tab
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              Last updated: February 2026 • PDF format
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
