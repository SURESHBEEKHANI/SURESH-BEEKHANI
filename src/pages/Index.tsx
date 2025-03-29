
import React, { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Welcome toast when the page loads
    toast({
      title: "Welcome to my portfolio",
      description: "Feel free to explore my projects and services!",
      duration: isMobile ? 4000 : 5000,
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // Add offset for mobile to account for the larger header
        const offset = isMobile ? 60 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
    
    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, [toast, isMobile]);
  
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <About />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="projects" className="pro-section">
          <div className="section-container">
            <Projects />
          </div>
        </section>
        
        <section id="skills" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <Skills />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="services" className="pro-section">
          <div className="section-container">
            <Services />
          </div>
        </section>
        
        <section id="experience" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <Experience />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="contact" className="pro-section">
          <div className="section-container">
            <Contact />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
