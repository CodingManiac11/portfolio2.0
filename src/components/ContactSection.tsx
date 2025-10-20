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

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      href: '#',
      color: '#0077B5',
      bgColor: 'cyber-blue'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: '#333',
      bgColor: 'cyber-green'
    },
    {
      name: 'LeetCode',
      icon: Code,
      href: '#',
      color: '#FFA116',
      bgColor: 'cyber-purple'
    },
    {
      name: 'GeeksForGeeks',
      icon: Code,
      href: '#',
      color: '#0F9D58',
      bgColor: 'cyber-blue'
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      href: '#',
      color: '#FF6B6B',
      bgColor: 'cyber-green'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
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
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
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
