
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
// import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <title>Jyoti Ranjan Rout - Full Stack Developer Portfolio</title>
        <meta name="description" content="Jyoti Ranjan Rout's personal portfolio showcasing full-stack development skills, projects, and experience in React, Node.js, MongoDB, and modern web technologies." />
        <meta name="keywords" content="Jyoti Ranjan Rout, Full Stack Developer, React, Node.js, MongoDB, JavaScript, Web Development, Portfolio" />
        <meta name="author" content="Jyoti Ranjan Rout" />
        <meta property="og:title" content="Jyoti Ranjan Rout - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Explore my journey as a full-stack developer with expertise in modern web technologies and innovative projects." />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main>
            <About />
            {/* <Experience /> */}
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
