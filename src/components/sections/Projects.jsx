import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const projects = [
    {
      title: 'EcoMart Web App',
      description: 'A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.',
      image: 'Modern e-commerce website interface with product listings',
      technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://projects-zeta-woad.vercel.app/',
      githubUrl: 'https://github.com/Rinturanjan/error404ReimagineRound1',
      featured: true,
    },
    {
      title: 'TODO Web App',
      description: 'A collaborative task management application. Implemented core task functionalities including add, display, and delete features through effective DOM manipulation and Local Storage integration.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS'],
      image: 'Clean task management dashboard with kanban boards and team collaboration',
      liveUrl: 'https://todolist-sand-one.vercel.app/',
      githubUrl: 'https://github.com/Rinturanjan/TODO-LIST',
      featured: true,
    },
    {
      title: 'HotPlates',
      description: 'A responsive Food Recipe Web App featuring dynamic recipe search, filters, and detailed views.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      image: 'Recipe app interface',
      liveUrl: 'https://bit.ly/HOTPLATES',
      githubUrl: 'https://github.com/Rinturanjan/Food_App_HotPlates',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
      image: 'Portfolio website design',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Calculator',
      description: 'A responsive calculator for basic arithmetic operations with real-time input and clean UI.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
      image: 'Calculator interface',
      liveUrl: 'https://calculatorcom-tau.vercel.app/',
      githubUrl: 'https://github.com/Rinturanjan/CalculatorApp',
      featured: false,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // Smart opener function
  const open = (url) => {
    if (!url || url === '#') {
      toast({
        title: '🚧  Link missing',
        description: 'You haven’t added this URL yet. Update it in your project list.',
      });
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various technologies and skills
          </p>
        </motion.div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img  
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => open(project.liveUrl)}
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => open(project.githubUrl)}
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1" onClick={() => open(project.liveUrl)}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => open(project.githubUrl)}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
