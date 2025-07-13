import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      image,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Jyoti Ranjan Rout</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Frontend Developer || React.JS Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm Jyoti Ranjan Rout, a web developer with experience in HTML, CSS, JavaScript, ReactJS,
                Tailwind CSS, GSAP, and handling APIs. I have completed my Bachelor of Computer
                Applications (BCA) from Mangalmay Institute of Management and Technology. I have worked
                on the EcoMart website, where I applied my skills to create a user-friendly and dynamic web
                application.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I enjoy building interactive web applications, integrating APIs for seamless data
                handling, and continuously improving my expertise in front-end and full-stack development.
                Additionally, I have a foundational understanding of backend technologies like Node.js,
                Express.js, and Mongoose, allowing me to work with databases and build efficient server-side
                applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                <span className="text-blue-800 dark:text-blue-300 font-medium">React Developer</span>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                <span className="text-green-800 dark:text-green-300 font-medium">Node.js Expert</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                <span className="text-purple-800 dark:text-purple-300 font-medium">JavaScript Specialist</span>
              </div>
              <div className="bg-pink-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                <span className="text-pink-800 dark:text-pink-300 font-medium">Tailwind CSS</span>
              </div>
              <div className="bg-sky-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                <span className="text-sky-800 dark:text-sky-300 font-medium">Handling APIs</span>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{
                y: ["-10px", "10px", "-10px"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img  
                  alt="Jyoti Ranjan Rout - Professional headshot"
                  className="w-full h-full object-cover"
                 src="/ProfileIMAGEjyoti.jpg" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
