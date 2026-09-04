import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import About from '@/components/About';
import OriginStory from '@/components/OriginStory';
import MeetFounder from '@/components/MeetFounder';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import ClientSolutions from '@/components/ClientSolutions';
import Approach from '@/components/Approach';
import Testimonials from '@/components/Testimonials';
import LatestBlogs from '@/components/LatestBlogs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { AnimatedSection } from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* BackgroundAnimation is positioned at the back with fixed positioning */}
      <BackgroundAnimation />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        <AnimatedSection threshold={0.08}>
            <OriginStory />
        </AnimatedSection>

        <AnimatedSection threshold={0.08}>
          <MeetFounder />
        </AnimatedSection>

        <AnimatedSection threshold={0.08}>
            <Services />
        </AnimatedSection>

        <div>
            <Industries />
        </div>

        <AnimatedSection threshold={0.08}>
            <ClientSolutions />
        </AnimatedSection>

        <AnimatedSection threshold={0.08}>
            <Approach />
        </AnimatedSection>

        <AnimatedSection id="testimonials" threshold={0.08}>
            <Testimonials />
        </AnimatedSection>

        <AnimatedSection threshold={0.08}>
            <LatestBlogs />
        </AnimatedSection>

        <AnimatedSection id="faq" threshold={0.08}>
            <FAQ />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;