import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    // Custom Cursor Logic
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      const posX = clientX;
      const posY = clientY;

      if (cursorDot.current) {
        cursorDot.current.style.left = `${posX}px`;
        cursorDot.current.style.top = `${posY}px`;
      }

      if (cursorOutline.current) {
        cursorOutline.current.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Scroll Observer Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.classList.contains('section-title')) {
            entry.target.classList.add('in-view');
          }
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    const titleElements = document.querySelectorAll('.section-title');

    hiddenElements.forEach((el) => observer.observe(el));
    titleElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hiddenElements.forEach((el) => observer.unobserve(el));
      titleElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      <div className="cursor-dot" ref={cursorDot}></div>
      <div className="cursor-outline" ref={cursorOutline}></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
