import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const testimonials: Testimonial[] = [
    {
      name: 'Prof. B.Thillaieaswaran',
      role: 'Faculty Mentor',
      company: 'Galgotias University',
      content: 'Aditya is one of the most dedicated students I have mentored. His passion for cybersecurity and full-stack development is evident in every project he undertakes. A natural leader with exceptional problem-solving skills.',
      avatar: '👨‍🏫',
      rating: 5,
    },
    {
      name: 'Amit Sharma',
      role: 'Senior Developer',
      company: 'Edunet Foundation',
      content: 'Working with Aditya during his internship was a pleasure. He quickly grasped complex concepts and contributed meaningfully to our projects. His work ethic and technical skills are impressive for someone at his level.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Project Lead',
      company: 'Jayadhi Limited UK',
      content: 'Aditya showed exceptional understanding of cybersecurity concepts during his remote internship. His ability to work independently and deliver quality work on time made him a valuable team member.',
      avatar: '👩‍💼',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="testimonials" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/30 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
              Testimonials
            </span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-pink-200 to-purple-400' : 'bg-gradient-to-r from-gray-900 via-pink-700 to-purple-700'}`}>
              What People Say
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Feedback from mentors, colleagues, and collaborators
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 border ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 shadow-xl'}`}
              >
                {/* Quote Icon */}
                <Quote className={`w-12 h-12 mb-6 ${isDark ? 'text-pink-400/30' : 'text-pink-500/30'}`} />

                {/* Content */}
                <p className={`text-xl md:text-2xl leading-relaxed mb-8 italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                  <div>
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className={`${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                      {testimonials[currentIndex].role}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className={`-translate-x-4 md:-translate-x-8 p-3 rounded-full backdrop-blur-xl border pointer-events-auto transition-colors ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100 shadow-lg'}`}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className={`translate-x-4 md:translate-x-8 p-3 rounded-full backdrop-blur-xl border pointer-events-auto transition-colors ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100 shadow-lg'}`}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-pink-500 to-purple-500'
                    : isDark
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
