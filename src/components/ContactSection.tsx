import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  ExternalLink,
  Code,
  MessageCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

interface ContactSectionProps {
  onSubmitSuccess?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmitSuccess }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityautsav1901@gmail.com',
      href: 'mailto:adityautsav1901@gmail.com',
      color: 'cyber-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9570329856',
      href: 'tel:+919570329856',
      color: 'cyber-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, India',
      href: '#',
      color: 'cyber-purple'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aditya-utsav-3413a1289/',
      color: '#0077B5',
      bgColor: 'cyber-blue'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/CodingManiac11/',
      color: '#333',
      bgColor: 'cyber-green'
    },
    {
      name: 'LeetCode',
      icon: Code,
      href: 'https://leetcode.com/u/adi_utsav/',
      color: '#FFA116',
      bgColor: 'cyber-purple'
    },
    {
      name: 'GeeksForGeeks',
      icon: Code,
      href: 'https://www.geeksforgeeks.org/user/aditya22sc5htq/',
      color: '#0F9D58',
      bgColor: 'cyber-blue'
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      href: 'https://adityautsav.vercel.app/',
      color: '#FF6B6B',
      bgColor: 'cyber-green'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      // Trigger confetti celebration
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    <section id="contact" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-t from-gray-900/50 to-transparent' : 'bg-gradient-to-t from-gray-100/50 to-transparent'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Contact</span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-purple-200 to-cyan-400' : 'bg-gradient-to-r from-gray-900 via-purple-700 to-cyan-700'}`}>
              Let's Work Together
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <MessageCircle size={24} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className={`flex items-center gap-4 p-5 backdrop-blur-xl rounded-2xl border transition-all duration-300 group ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-cyan-500/50' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-cyan-500/50 shadow-lg'}`}
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                          <IconComponent size={24} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        </div>
                        <div>
                          <p className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{info.label}</p>
                          <p className={`font-semibold transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <ExternalLink size={20} className={`${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  Connect Online
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 p-4 backdrop-blur-xl rounded-xl border transition-all duration-300 group ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-purple-500/50' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-purple-500/50 shadow-md'}`}
                      >
                        <IconComponent size={20} className={`transition-colors ${isDark ? 'text-purple-400 group-hover:text-cyan-400' : 'text-purple-600 group-hover:text-cyan-600'}`} />
                        <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={`backdrop-blur-xl rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 shadow-xl'}`}>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Send size={24} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="user_name" className={`block mb-2 font-semibold text-sm uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-gray-900/50 border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20'}`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_email" className={`block mb-2 font-semibold text-sm uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-gray-900/50 border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20'}`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block mb-2 font-semibold text-sm uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${isDark ? 'bg-gray-900/50 border-white/10 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500/20' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500/20'}`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {submitStatus.type && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                          : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className={`mt-20 pt-8 border-t text-center ${isDark ? 'border-white/10' : 'border-gray-200'}`}
          >
            <p className={`mb-4 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              © 2025 Aditya Utsav. Crafted with passion using React & TailwindCSS
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'}`}
            >
              <Code size={16} />
              <span className="text-sm">Made with ❤️ and lots of ☕</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
