import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Equipment from './components/Equipment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';

// Simulate AOS (Animate on Scroll) functionality
const App: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Maquinados Industriales DAZA - Precisión en CNC';
    
    // Mock AOS implementation (in a real project, you'd use AOS or similar library)
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animate-fadeIn');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in view
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Equipment />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;