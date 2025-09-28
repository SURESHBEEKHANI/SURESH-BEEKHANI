import React, { useEffect } from 'react';
// ...existing code...
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import ClientSolutions from '@/components/ClientSolutions';
import Approach from '@/components/Approach';
import Testimonials from '@/components/Testimonials';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
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
  }, [isMobile]);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* BackgroundAnimation is positioned at the back with fixed positioning */}
      <BackgroundAnimation />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <section id="about" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <About />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="services" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <Services />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="industries" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <Industries />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="client-solutions" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <ClientSolutions />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="approach" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <Approach />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="testimonials" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <Testimonials />
            <div className="section-decoration section-decoration-2"></div>
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
            <div className="section-decoration section-decoration-1"></div>
            <Contact />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
        
        <section id="faq" className="pro-section">
          <div className="section-container">
            <div className="section-decoration section-decoration-1"></div>
            <FAQ />
            <div className="section-decoration section-decoration-2"></div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;