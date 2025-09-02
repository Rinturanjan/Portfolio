
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'CSS3', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'Tailwind CSS', level: 98, icon: '💨' },
    { name: 'MongoDB', level: 92, icon: '🎭' },
    { name: 'Express.JS', level: 98, icon: '🚀' },
    { name: 'React.JS', level: 99, icon: '⚛️' },
    { name: 'Node.js', level: 100, icon: '🟢' },
    { name: 'API', level: 91, icon: '🚀' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const skillElements = skillsRef.current.children;

    gsap.fromTo(
      skillElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate skill bars
    const skillBars = section.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
      gsap.to(bar, {
        '--skill-width': `${skills[index].level}%`,
        duration: 1.5,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          onEnter: () => bar.classList.add('animate'),
        },
      });
    });
  }, []);

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Proficiency
                  </span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="skill-bar h-2 rounded-full relative"
                    style={{ '--skill-width': '0%' }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Netlify', 'Vercel', 'Firebase', 'AI', 'nodemon', 'Morgan', 'Winston'
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
