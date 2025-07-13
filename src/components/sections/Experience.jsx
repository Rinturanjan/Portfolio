
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    
    {
      title: 'Frontend Developer',
      company: 'Cipherbyte Technology',
      location: 'Noida, India',
      period: 'JUNE 2024 - JULY 2024',
      description: 'Built interactive user interfaces and collaborated with design teams to create engaging user experiences.',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Tailwind CSS'],
    }
    
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    gsap.fromTo(
      timeline.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through various roles and technologies in the software development industry
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                    <Code className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
