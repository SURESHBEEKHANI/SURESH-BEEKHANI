import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  PortfolioHero,
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

// Enhanced Icon components with better accessibility
const ItineraryIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 2v4M16 2v4M4 10h16"/>
  </svg>
);

const CloudIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/>
  </svg>
);

const UserIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4"/>
    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
  </svg>
);

const CalendarIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const DeviceIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
  </svg>
);

const CodeIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
  </svg>
);

// Enhanced features with descriptions
const features = [
  {
    title: 'AI Itinerary Builder',
    icon: ItineraryIcon,
    description: 'Intelligent trip planning and route optimization'
  },
  {
    title: 'Live Data Integration',
    icon: CloudIcon,
    description: 'Real-time travel information and updates'
  },
  {
    title: 'Personalized Suggestions',
    icon: UserIcon,
    description: 'AI-powered recommendations based on preferences'
  },
  {
    title: 'Seamless Booking & Sync',
    icon: CalendarIcon,
    description: 'Integrated booking and calendar synchronization'
  },
  {
    title: 'Mobile-First Experience',
    icon: DeviceIcon,
    description: 'Optimized for all devices and platforms'
  },
  {
    title: 'Modern Tech Stack',
    icon: CodeIcon,
    description: 'Built with cutting-edge technologies'
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '📈', stat: '35%', desc: 'Increase in user engagement' },
  { icon: '💳', stat: '25%', desc: 'Higher booking conversion rate' },
  { icon: '🌟', stat: 'High', desc: 'User satisfaction scores' },
  { icon: '🌍', stat: 'Global', desc: 'Scalable and adaptable architecture' },
];

// Development steps with enhanced icons
const AgileIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const FeedbackIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
  </svg>
);

const ApiIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/>
  </svg>
);

const SmartIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const PrivacyIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const SustainableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/>
  </svg>
);

const steps = [
  { number: 1, title: 'Agile Methodology', icon: AgileIcon },
  { number: 2, title: 'User Testing & Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'Integration of Third-Party APIs', icon: ApiIcon },
  { number: 4, title: 'Robust Recommendation Engine', icon: SmartIcon },
  { number: 5, title: 'GDPR-Compliant Data Handling', icon: PrivacyIcon },
  { number: 6, title: 'Sustainable Architecture', icon: SustainableIcon },
];

const PersonalizedTravelAssistant = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p>
        AI Travel Assistant is a intelligent digital tool designed to help travelers plan and manage trips with personalized recommendations and real-time updates. Unlike traditional travel apps, it understands your unique preferences, saves hours of manual research, and delivers a smoother, more tailored travel experience.
      </p>
      <p className="mt-3">
        Acting as a centralized, cloud-based platform, the AI Travel Assistant guides users through every stage of the journey from inspiration to return adapting to your needs whether your a solo traveler, family vacationer, or business professional.
      </p>
      <p className="mt-3">
        Its core strength lies in reducing planning time, increasing accuracy, and providing intelligent, on demand solutions. It eliminates the hassle of switching between multiple apps by curating the best options based on your preferences, live travel data, and predictive algorithms.
      </p>
      <h3 className="font-semibold text-blue-800 mt-4 mb-2">Key Benefits</h3>
      <ul className="list-disc pl-6 mb-3 space-y-1">
        <li><b>Personalized Planning:</b> Learns from your travel history, budget, and preferences to recommend ideal flights, accommodations, and local experiences.</li>
        <li><b>24/7 Real-Time Support:</b> Stay informed with instant updates on delays, weather, gate changes, and more anytime, anywhere.</li>
        <li><b>Smart Itinerary Builder:</b> Automatically generates detailed daily plans based on your travel goals complete with maps, bookings, and tips.</li>
        <li><b>Cost Efficiency:</b> Tracks pricing trends, compares deals, and suggests the best time to book maximizing value.</li>
        <li><b>Device & Calendar Sync:</b> Integrates with your digital calendars and smart devices for seamless travel coordination.</li>
        <li><b>Eco-Conscious Travel:</b> Suggests sustainable flight and stay options, promoting greener choices.</li>
      </ul>
      <h3 className="font-semibold text-blue-800 mt-4 mb-2">Growing Demand</h3>
      <p className="mb-3">The global AI travel technology market is forecasted to reach $13.38 billion by 2030, driven by rising demand for smarter, faster, and more personalized travel experiences.</p>
      <h3 className="font-semibold text-blue-800 mt-4 mb-2">Beyond Planning – A True Travel Companion</h3>
      <p>More than just a planning tool, an AI Travel Assistant acts as a digital travel partner offering translation help, cultural insights, emergency contacts, and destination specific advisories. It reduces stress, improves preparedness, and enhances the overall experience.</p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <PortfolioHero
        title="AI Travel Assistant"
        description="AI Trip Planner creates real-time, personalized itineraries. Plan smarter trips based on your preferences and live data."
        gradient="from-blue-700 via-sky-400 to-pink-200"
        backgroundImage="/image/pages_img/AI-Travel-Assistant-bg.jpg"
      />

      {/* Enhanced Info Section */}
      <InfoSection
        title="AI Travel Assistant for Better Travel Planning"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-blue-900"
      >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              What is AI Travel Assistant?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl mb-6 leading-relaxed">
              AI Travel Assistant a smart tool that plans and manages your trips with personalized suggestions and live updates saving you time making travel easier.
            </p>
          </motion.div>
          <PortfolioImage
            src="/image/pages_img/What-AI-Travel-Assistant.png"
            alt="What is AI Travel Assistant illustration"
            delay={0.2}
          />
        </div>
      </PortfolioSection>

      {/* Enhanced Problem Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              Problems?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
              Most travel tools offer generic suggestions, ignoring your preferences and real-time changes. Travelers waste hours researching, often missing out on unique experiences and facing avoidable disruptions.
            </p>
          </motion.div>
        </div>
      </PortfolioSection>

      {/* Enhanced Main Content Section */}
      <div className="py-24 bg-gradient-to-tr from-gray-50 to-white flex-1">
        <div className="max-w-6xl mx-auto space-y-20 px-6">
          {/* Enhanced Solution */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 text-left"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
                  Solution
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed">
                  An AI Travel Assistant offers personalized trip planning, real-time updates, and smart recommendations—saving time, reducing stress, and making travel smoother and more efficient.
                </p>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered travel solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <SectionHeader
              title="Key Features"
              subtitle="Advanced capabilities that transform travel planning"
              delay={0.1}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <PortfolioImage
                src="/image/pages_img/key-f-t-assistent.jpg"
                alt="Key Features & Technologies illustration"
                className="max-w-sm"
              />
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {features.map((f, i) => (
                  <FeatureCard
                    key={i}
                    icon={f.icon}
                    title={f.title}
                    description={f.description}
                    delay={i * 0.1}
                  />
                ))}
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Development Section */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                src="/image/pages_img/implements-ai-assents.png"
                alt="Development Illustration"
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Results */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
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
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mx-auto"
                >
                  {results.map((r, i) => (
                    <ResultCard
                      key={i}
                      icon={r.icon}
                      stat={r.stat}
                      desc={r.desc}
                      delay={i * 0.1}
                      bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
                      textColor="text-blue-900"
                      shadowColor="hover:shadow-blue-200/50"
                      borderColor="border-blue-100"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Transform Your Travel Experience?"
            subtitle="Let's discuss how AI can revolutionize your travel planning"
            gradient="from-blue-500 to-blue-700"
            hoverGradient="hover:from-blue-600 hover:to-blue-800"
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

export default PersonalizedTravelAssistant;