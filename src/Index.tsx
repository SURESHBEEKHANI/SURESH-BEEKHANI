import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import ClientSolutions from '@/components/ClientSolutions';
import Approach from '@/components/Approach';
import Testimonials from '@/components/Testimonials';
import Experience from '@/components/Experience';
import MeetFounder from '@/components/MeetFounder';
import LatestBlogs from '@/components/LatestBlogs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Standard effect for any other logic needed on mount
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* BackgroundAnimation is positioned at the back with fixed positioning */}
      <BackgroundAnimation />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <section className="pro-section">
          <div className="section-container">
            <About />
          </div>
        </section>
        
        <section className="pro-section">
          <div className="section-container">
            <Services />
          </div>
        </section>
        
        <section className="pro-section">
          <div className="section-container">
            <Industries />
          </div>
        </section>
        
        <section id="client-solutions" className="pro-section">
          <div className="section-container">
            <ClientSolutions />
          </div>
        </section>
        
        <section id="approach" className="pro-section">
          <div className="section-container">
            <Approach />
          </div>
        </section>
        
        <section id="testimonials" className="pro-section">
          <div className="section-container">
            <Testimonials />
          </div>
        </section>
        
        <section className="pro-section">
          <div className="section-container">
            <Experience />
          </div>
        </section>

        <section className="pro-section">
          <div className="section-container">
            <MeetFounder />
          </div>
        </section>

        <section className="pro-section">
          <div className="section-container">
            <LatestBlogs />
          </div>
        </section>
        
        
        <section id="faq" className="pro-section">
          <div className="section-container">
            <FAQ />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;