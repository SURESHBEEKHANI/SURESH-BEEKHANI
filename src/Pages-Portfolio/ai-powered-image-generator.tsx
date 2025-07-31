import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  InfoSection,
  PortfolioSection,
  FeatureCard,
  ResultCard,
  PortfolioImage,
  CallToAction,
  staggerContainer,
  SectionHeader,
  ResponsiveGrid
} from '@/components/ui/portfolio-components';

// Enhanced Icon components with better accessibility and mobile optimization
const MagicIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 2l-9.5 9.5M14 7l-7 7M17 10l-7 7M19 12l-7 7"/>
    <circle cx="7" cy="17" r="1.5"/>
    <circle cx="17" cy="7" r="1.5"/>
  </svg>
);

const SpeedIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/>
    <path d="M12 7v5l3 3"/>
  </svg>
);

const CustomIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 2v4M16 2v4M4 10h16"/>
  </svg>
);

const CloudIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/>
  </svg>
);

const DeviceIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
  </svg>
);

const CodeIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
  </svg>
);

// Enhanced features with descriptions
const features = [
  { 
    title: 'AI Magic', 
    icon: MagicIcon
  },
  { 
    title: 'Instant Generation', 
    icon: SpeedIcon
  },
  { 
    title: 'Customizable Styles', 
    icon: CustomIcon
  },
  { 
    title: 'Cloud-Based', 
    icon: CloudIcon
  },
  { 
    title: 'Mobile Friendly', 
    icon: DeviceIcon
  },
  { 
    title: 'Modern Tech Stack', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⚡', stat: '10x', desc: 'Faster content creation' },
  { icon: '🎨', stat: '100%', desc: 'Unique images every time' },
  { icon: '💡', stat: 'Zero', desc: 'Design skills required' },
  { icon: '🌍', stat: 'Global', desc: 'Accessible anywhere' },
];

// Development steps with enhanced icons
const AgileIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const FeedbackIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
  </svg>
);

const ApiIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/>
  </svg>
);

const SmartIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const ShieldIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const SustainableIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/>
  </svg>
);

const steps = [
  { number: 1, title: 'Agile Development', icon: AgileIcon },
  { number: 2, title: 'User Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integrations', icon: ApiIcon },
  { number: 4, title: 'Smart Prompt Engine', icon: SmartIcon },
  { number: 5, title: 'Secure Data Handling', icon: ShieldIcon },
  { number: 6, title: 'Scalable Cloud Infra', icon: SustainableIcon },
];

const AIPoweredImageGenerator = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p>
        The AI-Powered Image Generator is a smart digital tool that lets anyone create custom images in seconds. No more searching for stock photos or waiting for designers just describe what you want, and get a unique image instantly.
      </p>
      <p className="mt-3">
        Powered by advanced AI models, it understands your prompts, style preferences, and brand colors, delivering visuals that match your needs. Perfect for marketers, bloggers, businesses, and creators who want to stand out.
      </p>
      <p className="mt-3">
        Save time, reduce costs, and unlock creative freedom. The generator adapts to your workflow, integrates with your favorite tools, and scales with your content demands.
      </p>
      <h3 className="font-semibold text-purple-800 mt-4 mb-2">Key Benefits</h3>
      <ul className="list-disc pl-6 mb-3 space-y-1">
        <li><b>Instant Results:</b> Generate images in seconds, not hours.</li>
        <li><b>Unlimited Creativity:</b> Describe any scene, style, or concept—AI brings it to life.</li>
        <li><b>Brand Consistency:</b> Match your brand colors, fonts, and style guidelines.</li>
        <li><b>Cost Effective:</b> Eliminate the need for stock photos or expensive designers.</li>
        <li><b>Seamless Integration:</b> Works with your CMS, social media, and marketing tools.</li>
        <li><b>Accessible Anywhere:</b> Cloud-based and mobile-friendly for on-the-go creation.</li>
      </ul>
      <h3 className="font-semibold text-purple-800 mt-4 mb-2">Growing Demand</h3>
      <p className="mb-3">The global AI image generation market is booming, driven by the need for fast, unique, and scalable content creation across industries.</p>
      <h3 className="font-semibold text-purple-800 mt-4 mb-2">Beyond Stock Photos – True Visual Innovation</h3>
      <p>AI image generators empower everyone to become a creator, breaking barriers to design and enabling new forms of visual storytelling.</p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/img-gen-background.png')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI-Powered <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Image Generator</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                Instantly create unique, high quality images for your content, marketing, or social media no design skills needed.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg text-center min-h-[44px] flex items-center justify-center"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>

      {/* Enhanced Info Section */}
      <InfoSection
        title="AI Image Generator for Effortless Visual Creation"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-purple-900"
      >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-900 mb-3 sm:mb-4 leading-tight">
              What is AI Image Generator?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mb-4 leading-relaxed">
              AI Image Generator is a tool that creates custom images from text prompts, making visual content creation effortless and accessible to all.
            </p>
          </motion.div>
          <PortfolioImage
            src="/image/pages_img/what-is-img-Generator.webp"
            alt="What is AI Image Generator illustration"
            delay={0.2}
          />
        </div>
      </PortfolioSection>

      {/* Enhanced Problems Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
          <PortfolioImage
            src="/image/pages_img/Problems.jpg"
            alt="Problems illustration"
          />
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-900 mb-3 sm:mb-4 leading-tight">
              Problems?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Creating custom images is slow, expensive, and often requires design skills. Stock photos are generic and overused, making it hard to stand out.
            </p>
          </motion.div>
        </div>
      </PortfolioSection>

      {/* Enhanced Main Content Section */}
      <div className="py-12 sm:py-16 bg-gradient-to-tr from-gray-50 to-white flex-1">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Solution */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 text-left"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-900 mb-3 sm:mb-4 leading-tight">
                  Solution
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                  AI Image Generator delivers instant, unique visuals from simple prompts saving time, reducing costs, and enabling creative freedom for everyone.
                </p>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered image solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <SectionHeader
              title="Key Features"
              subtitle="Advanced capabilities that transform visual creation"
              delay={0.1}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <PortfolioImage
                src="/image/pages_img/ai-powered image generator Key Features.webp"
                alt="Key Features & Technologies illustration"
                className="max-w-sm"
              />
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                {features.map((f, i) => (
                  <FeatureCard
                    key={i}
                    icon={f.icon}
                    title={f.title}
                    delay={i * 0.1}
                  />
                ))}
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Development Section */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Development Process"
                  subtitle="Our systematic approach to building AI solutions"
                  delay={0.1}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {steps.map((s, i) => (
                    <FeatureCard
                      key={i}
                      icon={s.icon}
                      title={s.title}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Development-Process-img-gen.webp"
                alt="Development Illustration"
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Results */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <PortfolioImage
                src="/image/pages_img/result.jpg"
                alt="Results and impact illustration"
              />
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-left lg:text-center flex flex-col items-center"
              >
                <SectionHeader
                  title="Results"
                  subtitle="Measurable impact and outcomes"
                  delay={0.1}
                />
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-2xl mx-auto"
                >
                  {results.map((r, i) => (
                    <ResultCard
                      key={i}
                      icon={r.icon}
                      stat={r.stat}
                      desc={r.desc}
                      delay={i * 0.1}
                      bgColor="bg-gradient-to-br from-purple-50 to-pink-50"
                      textColor="text-purple-900"
                      shadowColor="hover:shadow-purple-200/50"
                      borderColor="border-purple-100"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Create Stunning Visuals Instantly?"
            subtitle="Let's discuss how AI can revolutionize your visual content creation"
            gradient="from-purple-500 to-purple-700"
            hoverGradient="hover:from-purple-600 hover:to-purple-800"
          />
        </div>
      </div>

      <Footer />
      
      {/* Enhanced Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-slow { animation: fadeIn 1.5s ease; }
        .animate-bounce-slow { animation: bounce 2s infinite alternate; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default AIPoweredImageGenerator;
