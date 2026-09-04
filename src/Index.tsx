import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import About from '@/components/About';
import Overview from '@/components/overview';
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
import { AnimatedSection } from '@/components/AnimatedSection';

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
          <AnimatedSection className="section-container" threshold={0.08}>
            <Overview />
          </AnimatedSection>
        </section>

        <section className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <Services />
          </AnimatedSection>
        </section>

        <section className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <Experience />
          </AnimatedSection>
        </section>

        <section className="pro-section">
          <div className="section-container">
            <Industries />
          </div>
        </section>

        <section id="client-solutions" className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <ClientSolutions />
          </AnimatedSection>
        </section>

        <section id="approach" className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <Approach />
          </AnimatedSection>
        </section>

        <section id="testimonials" className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <Testimonials />
          </AnimatedSection>
        </section>

        <section className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <MeetFounder />
          </AnimatedSection>
        </section>

        <section className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <LatestBlogs />
          </AnimatedSection>
        </section>


        <section id="faq" className="pro-section">
          <AnimatedSection className="section-container" threshold={0.08}>
            <FAQ />
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;