import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 30 },
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jyotiranjanrout584@gmail.com',
      href: 'mailto:jyotiranjanrout584@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9319875905',
      href: 'tel:+919319875905',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'NOIDA, UP, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Rinturanjan' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jyoti-ranjan-rout-978239280/' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/JyotiCodes_303' },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}  
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Let's Work Together
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>

              <div className="space-y-4">
                {/* Resume download link */}
                <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <a
                    href="/Jyoti_ranjan_CV.pdf"
                    download
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download My Resume
                  </a>
                </Button>

                {/* Mail link */}
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                  <a href="mailto:jyotiranjanrout584@gmail.com?subject=Let's Connect&body=Hi Jyoti, I came across your portfolio and would like to get in touch.">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Stats
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    1
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Month Experience
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Projects Completed
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Personal Projects
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Support Available
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
