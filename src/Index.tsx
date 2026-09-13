import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import About from '@/components/About';
import { lazy, Suspense } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

// Lazy load below-the-fold components
const OriginStory = lazy(() => import('@/components/OriginStory'));
const MeetFounder = lazy(() => import('@/components/MeetFounder'));
const Services = lazy(() => import('@/components/Services'));
const Industries = lazy(() => import('@/components/Industries'));
const ClientSolutions = lazy(() => import('@/components/ClientSolutions'));
const Approach = lazy(() => import('@/components/Approach'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const LatestBlogs = lazy(() => import('@/components/LatestBlogs'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        <Suspense fallback={<div className="h-20 bg-[#050505]" />}>
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
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-16 bg-[#050505]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;