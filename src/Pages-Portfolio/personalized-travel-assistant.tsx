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
import {
  LegalIcon,
  AiIcon,
  SecurityIcon,
  AnalyticsIcon,
  CloudIcon,
  CodeIcon,
  DevelopmentIcon,
  FeedbackIcon,
  ApiIcon,
  ExpertiseIcon,
  ComplianceIcon,
  ArchitectureIcon
} from '@/components/ui/ImageIcon';

// Enhanced features with descriptions using optimized image icons

// Enhanced features with descriptions
const features = [
  { 
    title: 'Smart Itineraries', 
    icon: LegalIcon
  },
  { 
    title: 'Cloud-Based', 
    icon: AiIcon
  },
  { 
    title: 'Personalized', 
    icon: SecurityIcon
  },
  { 
    title: 'Real-Time Updates', 
    icon: AnalyticsIcon
  },
  { 
    title: 'Multi-Device', 
    icon: CloudIcon
  },
  { 
    title: 'Modern Tech Stack', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⚡', stat: '90%', desc: 'Faster planning' },
  { icon: '✅', stat: '95%', desc: 'User satisfaction' },
  { icon: '🔒', stat: 'Secure', desc: 'Data protection' },
  { icon: '🌍', stat: 'Global', desc: 'Worldwide access' },
];

// Development steps with enhanced icons
const steps = [
  { number: 1, title: 'Agile Development', icon: DevelopmentIcon },
  { number: 2, title: 'Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integration', icon: ApiIcon },
  { number: 4, title: 'Travel Expertise', icon: ExpertiseIcon },
  { number: 5, title: 'Security', icon: ComplianceIcon },
  { number: 6, title: 'Architecture', icon: ArchitectureIcon },
];

const PersonalizedTravelAssistant = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p className="mb-3 text-base text-gray-700">
        The Personalized Travel Assistant is an intelligent AI-powered platform that revolutionizes how travelers plan, book, and experience their journeys. Built with advanced machine learning algorithms, it understands individual preferences, travel patterns, and destination requirements to deliver truly personalized travel experiences.
      </p>
      <p className="mb-3 text-base text-gray-700">
        The system goes beyond simple booking tools to provide comprehensive travel planning, real-time recommendations, and adaptive itineraries that evolve based on user feedback and changing circumstances. It integrates with multiple travel services, accommodation providers, and local experiences to create seamless travel journeys.
      </p>
      <p className="mb-4 text-base text-gray-700">
        With cloud-based accessibility and mobile-first design, the Personalized Travel Assistant ensures travelers have access to their plans, recommendations, and support anywhere in the world, making every trip more enjoyable and stress-free.
      </p>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Key Benefits</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Personalized Planning</h4>
          <p className="text-base text-gray-700">AI-driven recommendations based on your travel history, preferences, and budget.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Real-Time Updates</h4>
          <p className="text-base text-gray-700">Instant notifications about flight changes, weather conditions, and local events.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Seamless Integration</h4>
          <p className="text-base text-gray-700">Connects with airlines, hotels, car rentals, and local experiences in one platform.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Cost Optimization</h4>
          <p className="text-base text-gray-700">Finds the best deals and suggests cost-effective alternatives for your travel budget.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Local Insights</h4>
          <p className="text-base text-gray-700">Provides authentic local recommendations for dining, activities, and cultural experiences.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">24/7 Support</h4>
          <p className="text-base text-gray-700">Round-the-clock assistance for emergencies, changes, and travel questions.</p>
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">The Growing Travel Tech Market</h3>
      <p className="text-base text-gray-700 mb-2">The global travel technology market is projected to reach $1.4 trillion by 2030, driven by:</p>
      <ul className="list-disc pl-4 mb-3 space-y-1 text-base text-gray-700">
        <li>Increasing demand for personalized travel experiences</li>
        <li>Rising adoption of mobile travel planning</li>
        <li>Need for real-time travel information and updates</li>
        <li>Growing preference for contactless travel solutions</li>
      </ul>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Beyond Booking: Your Digital Travel Companion</h3>
      <p className="text-base text-gray-700">
        The Personalized Travel Assistant represents the future of travel technology, combining artificial intelligence with human travel expertise to create journeys that are not just planned, but truly personalized. It transforms the way we explore the world, making every trip more memorable and every destination more accessible.
      </p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Travel-Assistant-bg.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex-1 text-white space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
            <div className="w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Personalized Travel Assistant
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 w-full mt-2 sm:mt-3 md:mt-4 leading-relaxed max-w-2xl mx-auto md:mx-0">
                AI-powered travel companion that creates personalized itineraries, finds the best deals, and provides real-time support for seamless journeys worldwide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-3 sm:pt-4 md:pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg text-center min-h-[44px] flex items-center justify-center touch-manipulation"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>

      {/* Enhanced Info Section */}
      <InfoSection
        title="AI-Powered Personalized Travel Assistant for Modern Travelers"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-slate-800"
      >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                What Is Personalized Travel Assistant?
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl mb-3 sm:mb-4 leading-relaxed">
              Personalized Travel Assistant is an intelligent AI-powered platform that creates customized travel experiences based on individual preferences, budget, and travel style. It combines advanced machine learning with comprehensive travel data to deliver personalized recommendations and seamless booking experiences.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <img
              src="/image/pages_img/What-AI-Travel-Assistant.png"
              alt="What is Personalized Travel Assistant illustration"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl transition-all duration-500 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl touch-manipulation"
            />
          </div>
        </div>
      </PortfolioSection>

      {/* Enhanced Challenge Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              Challenges Addressed
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed mb-3">
              Personalized Travel Assistant addresses critical travel planning challenges:
            </p>
            <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              <li>⏱️ Time-consuming travel research and planning</li>
              <li>💰 Difficulty finding the best deals and value</li>
              <li>🌍 Lack of personalized recommendations</li>
              <li>📱 Fragmented travel booking experiences</li>
              <li>🔄 Limited real-time updates and flexibility</li>
            </ul>
          </motion.div>
          <PortfolioImage
            src="/image/pages_img/Problems.jpg"
            alt="Problems illustration"
          />
        </div>
      </PortfolioSection>

      {/* Enhanced Solution Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-tr from-gray-50 to-white flex-1">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Solution */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                  Industry Insight: Did You Know?
                </h2>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 mb-2">📊 The Rise of AI in Travel</h3>
                <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                  <li>🧠 AI can plan trips 10x faster than manual research</li>
                  <li>🕒 Travelers spend up to 20 hours researching destinations</li>
                  <li>💼 Companies using AI travel assistants report 60% higher satisfaction</li>
                  <li>💡 AI can find deals 40% better than traditional search</li>
                </ul>
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
              title="Core Features of Personalized Travel Assistant"
              subtitle="AI-powered travel tools for planning, booking, and experiencing seamless journeys"
              delay={0.1}
              className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl xl:!text-3xl !text-black"
            />
            <div className="max-w-6xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🧠</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Smart Planning</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🤖 AI-powered itinerary generation</li>
                    <li>📊 Personalized recommendations based on preferences</li>
                    <li>🎯 Budget optimization and cost analysis</li>
                    <li>📅 Flexible scheduling and date suggestions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🔍</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Deal Discovery</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>💰 Best price tracking and alerts</li>
                    <li>✈️ Multi-airline and hotel comparison</li>
                    <li>🎫 Package deals and bundle optimization</li>
                    <li>📱 Real-time price monitoring</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🌍</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Local Insights</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🍽️ Authentic restaurant recommendations</li>
                    <li>🎭 Cultural activity suggestions</li>
                    <li>🚗 Local transportation options</li>
                    <li>📸 Hidden gem discoveries</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Professional Workspace Section */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <SectionHeader
                title="Benefits for Travelers"
                subtitle="Transform your travel experience with AI-powered personalization"
                delay={0.1}
                className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl xl:!text-3xl !text-black"
              />
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-blue-200 hover:border-blue-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⏳</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Time Saved</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Quick planning</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Plan trips in minutes instead of hours with AI-powered automation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-green-200 hover:border-green-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">💰</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Cost Savings</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Best deals found</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Save money with AI-powered deal discovery and price optimization.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-purple-200 hover:border-purple-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🎯</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Personalized</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Tailored experiences</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Get recommendations perfectly matched to your preferences and style.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-orange-200 hover:border-orange-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">📱</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Real-Time Updates</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Live information</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Stay informed with instant updates on flights, weather, and events.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-teal-200 hover:border-teal-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🌍</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Global Access</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Available anywhere</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Access your travel plans and support from anywhere in the world.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-indigo-200 hover:border-indigo-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">📈</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Better Experiences</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Enhanced journeys</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Enjoy more memorable and stress-free travel experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Compliance & Security Section */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl"
              >
                
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Security & Privacy
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Enterprise-grade security for your travel data and personal information.
                </p>
              </motion.div>
              

              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">✅</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Data Protection</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Privacy compliance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">🔐</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Secure Payments</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Encrypted transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">👥</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">User Control</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Privacy settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">🗂️</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Secure Storage</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Cloud protection</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Transform Your Travel Experience?"
            subtitle="Let's discuss how AI can revolutionize your travel planning"
            gradient="from-indigo-500 to-indigo-700"
            hoverGradient="hover:from-indigo-600 hover:to-indigo-800"
          />
        </div>
      </div>

      <Footer />
      
      {/* Enhanced Animations */}
      <style>{`
        .animate-fade-in { 
          animation: fadeIn 1s ease; 
        }
        .animate-fade-in-slow { 
          animation: fadeIn 1.5s ease; 
        }
        .animate-bounce-slow { 
          animation: bounce 2s infinite alternate; 
        }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: none; } 
        }
        @keyframes bounce { 
          0% { transform: translateY(0); } 
          100% { transform: translateY(-8px); } 
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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