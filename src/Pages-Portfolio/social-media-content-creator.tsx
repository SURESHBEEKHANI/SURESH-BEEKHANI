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
const AutomationIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const AnalyticsIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/>
  </svg>
);

const PersonalizationIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4"/>
    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
  </svg>
);

const CalendarIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
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
    title: 'Automated Content Scheduling', 
    icon: AutomationIcon
  },
  { 
    title: 'Real-Time Analytics', 
    icon: AnalyticsIcon
  },
  { 
    title: 'Personalized Recommendations', 
    icon: PersonalizationIcon
  },
  { 
    title: 'Calendar & Device Sync', 
    icon: CalendarIcon
  },
  { 
    title: 'Mobile-First Experience', 
    icon: DeviceIcon
  },
  { 
    title: 'Modern Tech Stack', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '📈', stat: '40%', desc: 'Increase in engagement' },
  { icon: '⚡', stat: '30%', desc: 'Faster content delivery' },
  { icon: '👍', stat: 'High', desc: 'User satisfaction' },
  { icon: '🌍', stat: 'Global', desc: 'Scalable solution' },
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

const PrivacyIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
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
  { number: 4, title: 'Personalization Engine', icon: SmartIcon },
  { number: 5, title: 'Data Privacy', icon: PrivacyIcon },
  { number: 6, title: 'Scalable Architecture', icon: SustainableIcon },
];

const SoMeCreator = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p>
        The AI Social Media Content Creator is a smart platform designed to help brands, influencers, and marketers automate content creation, scheduling, and performance analysis. It leverages AI to generate engaging posts, optimize timing, and provide actionable insights, saving hours of manual work and boosting online presence.
      </p>
      <p className="mt-3">
        Acting as a centralized hub, it streamlines your workflow from ideation to publishing, adapts to your brand voice, and ensures your content reaches the right audience at the right time.
      </p>
      <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Key Benefits</h3>
      <ul className="list-disc pl-6 mb-3 space-y-1">
        <li><b>Automated Scheduling:</b> Plan and publish posts across platforms effortlessly.</li>
        <li><b>Real-Time Analytics:</b> Track engagement, reach, and trends instantly.</li>
        <li><b>Personalized Content:</b> AI adapts to your brand and audience preferences.</li>
        <li><b>Collaboration Tools:</b> Work with teams, assign tasks, and review drafts in one place.</li>
        <li><b>Cross-Platform Support:</b> Manage all your social channels from a single dashboard.</li>
      </ul>
      <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Growing Demand</h3>
      <p className="mb-3">The global social media management market is projected to reach $41.6 billion by 2030, driven by the need for smarter, faster, and more effective content strategies.</p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Social -Media-Development.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Social Media <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Content Creator</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                AI-powered platform for automating, analyzing, and optimizing your social media content strategy.
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
        title="AI Social Media Content Creator for Modern Brands"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-indigo-900"
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-3 sm:mb-4 leading-tight">
              What is Social Media Content Creator?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mb-4 leading-relaxed">
              A Social Media Content Creator is a digital tool or platform that empowers users to design, schedule, and manage engaging posts across multiple social channels. It leverages AI to streamline content ideation, automate publishing, and analyze performance, helping brands and individuals grow their online presence efficiently.
            </p>
          </motion.div>
          <PortfolioImage
            src="/image/pages_img/What-Social-Media-Content-Creator.jpg"
            alt="What is Social Media Content Creator illustration"
            delay={0.2}
          />
        </div>
      </PortfolioSection>

      {/* Enhanced Problem Section */}
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-3 sm:mb-4 leading-tight">
              Problems?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Manual content creation is time-consuming, inconsistent, and often fails to engage audiences. Marketers struggle to analyze performance and adapt quickly to trends, leading to missed opportunities and lower ROI.
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
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-3 sm:mb-4 leading-tight">
                  Solution
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                  The AI Social Media Content Creator automates content generation, optimizes scheduling, and delivers real-time analytics—saving time, increasing engagement, and maximizing your brand impact.
                </p>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered social media solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <SectionHeader
              title="Key Features"
              subtitle="Advanced capabilities that transform social media management"
              delay={0.1}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <PortfolioImage
                src="/image/pages_img/Key-Features-socal-medui.png"
                alt="Key Features Social Media illustration"
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
                src="/image/pages_img/Social -Media-Development.jpg"
                alt="Development Process Social Media illustration"
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
                      bgColor="bg-gradient-to-br from-indigo-50 to-purple-50"
                      textColor="text-indigo-900"
                      shadowColor="hover:shadow-indigo-200/50"
                      borderColor="border-indigo-100"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Elevate Your Social Media Strategy?"
            subtitle="Let's discuss how AI can revolutionize your content creation"
            gradient="from-indigo-500 to-indigo-700"
            hoverGradient="hover:from-indigo-600 hover:to-indigo-800"
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

export default SoMeCreator;
