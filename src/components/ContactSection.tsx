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

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-dark-card/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Ready to collaborate or have a question? I'd love to hear from you. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-cyber font-bold text-cyber-green mb-6 flex items-center gap-3">
                  <MessageCircle size={24} />
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className={`flex items-center gap-4 p-4 glass rounded-lg border border-${info.color}/20 hover:border-${info.color}/50 transition-all duration-300 group`}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-${info.color}/20 to-${info.color}/40 group-hover:scale-110 transition-transform`}>
                          <IconComponent size={20} className={`text-${info.color}`} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.label}</p>
                          <p className={`text-white font-semibold group-hover:text-${info.color} transition-colors`}>
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
                <h4 className="text-xl font-cyber font-bold text-cyber-purple mb-4">
                  Follow Me Online
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
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 p-3 glass rounded-lg border border-${social.bgColor}/20 hover:border-${social.bgColor}/50 transition-all duration-300 group`}
                      >
                        <IconComponent size={20} className={`text-${social.bgColor} group-hover:scale-110 transition-transform`} />
                        <span className="text-white text-sm font-semibold">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6 flex items-center gap-3">
                  <Send size={24} />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-gray-300 mb-2 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_email" className="block text-gray-300 mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyber-purple focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {submitStatus.type && (
                    <div 
                      className={`p-4 rounded-lg border ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                          : 'bg-red-500/10 text-red-500 border-red-500/20'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-lg font-semibold text-dark-bg transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-bg"></div>
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
            className="mt-16 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-400 mb-4">
              © 2025 Aditya Utsav. Built with React & TailwindCSS
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-green transition-colors cursor-pointer"
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
