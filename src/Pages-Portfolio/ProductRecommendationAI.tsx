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
const features = [
  { 
    title: 'Smart Recommendations', 
    icon: AiIcon
  },
  { 
    title: 'Behavioral Analysis', 
    icon: AnalyticsIcon
  },
  { 
    title: 'Real-Time Processing', 
    icon: SecurityIcon
  },
  { 
    title: 'Personalized Results', 
    icon: AnalyticsIcon
  },
  { 
    title: 'Cloud-Based AI', 
    icon: CloudIcon
  },
  { 
    title: 'Modern Tech Stack', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '📈', stat: '35%', desc: 'Conversion increase' },
  { icon: '⚡', stat: '<1s', desc: 'Response time' },
  { icon: '🎯', stat: '92%', desc: 'Recommendation accuracy' },
  { icon: '💰', stat: '45%', desc: 'Revenue boost' },
];

// Development steps with enhanced icons
const steps = [
  { number: 1, title: 'Agile Development', icon: DevelopmentIcon },
  { number: 2, title: 'Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integration', icon: ApiIcon },
  { number: 4, title: 'ML Expertise', icon: ExpertiseIcon },
  { number: 5, title: 'Privacy Compliance', icon: ComplianceIcon },
  { number: 6, title: 'Architecture', icon: ArchitectureIcon },
];

const ProductRecommendationAI = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p className="mb-3 text-base text-gray-700">
        Product Recommendation AI is an intelligent recommendation engine that leverages advanced machine learning algorithms to provide personalized product suggestions to customers. Built with sophisticated collaborative filtering and content-based filtering techniques, it analyzes user behavior, purchase history, and product attributes to deliver highly relevant recommendations.
      </p>
      <p className="mb-3 text-base text-gray-700">
        The system goes beyond traditional recommendation methods by implementing deep learning models, real-time processing, and adaptive learning capabilities. It supports e-commerce platforms, retail businesses, and digital marketplaces with comprehensive recommendation intelligence.
      </p>
      <p className="mb-4 text-base text-gray-700">
        With high accuracy rates and sub-second response times, Product Recommendation AI helps businesses increase conversion rates, boost average order values, and enhance customer satisfaction while maintaining seamless user experiences.
      </p>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Key Benefits</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Personalized Recommendations</h4>
          <p className="text-base text-gray-700">Deliver highly relevant product suggestions based on individual user preferences and behavior patterns.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Real-Time Processing</h4>
          <p className="text-base text-gray-700">Generate recommendations instantly as users browse and interact with products.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Conversion Optimization</h4>
          <p className="text-base text-gray-700">Increase sales conversion rates and average order values through targeted recommendations.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Behavioral Analysis</h4>
          <p className="text-base text-gray-700">Analyze user interactions to continuously improve recommendation accuracy.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Scalable Architecture</h4>
          <p className="text-base text-gray-700">Handle millions of products and users with high performance and reliability.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Revenue Growth</h4>
          <p className="text-base text-gray-700">Significant increase in revenue through better product discovery and cross-selling.</p>
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">The Growing Recommendation Engine Market</h3>
      <p className="text-base text-gray-700 mb-2">The global recommendation engine market is projected to reach $15 billion by 2027, driven by:</p>
      <ul className="list-disc pl-4 mb-3 space-y-1 text-base text-gray-700">
        <li>Increasing e-commerce adoption and digital shopping</li>
        <li>Growing need for personalized customer experiences</li>
        <li>Advancements in AI and machine learning</li>
        <li>Rising competition in online retail</li>
      </ul>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Beyond Recommendations: An Intelligent Commerce Platform</h3>
      <p className="text-base text-gray-700">
        Product Recommendation AI represents the future of intelligent commerce, combining human expertise with artificial intelligence to deliver personalized shopping experiences. It empowers businesses to understand their customers better and drive revenue growth through smart product suggestions.
      </p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Product Recommendation AI
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                Advanced AI-powered recommendation engine that delivers personalized product suggestions to boost conversions and revenue.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg text-center min-h-[44px] flex items-center justify-center"
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
        title="Product Recommendation AI for Intelligent Commerce"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-slate-800"
      >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
        <PortfolioSection className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 p-6 sm:p-8 lg:p-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
                             <div className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10">
                 <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                   What Is Product Recommendation AI?
                 </h2>
               </div>
               <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 max-w-xl mb-3 sm:mb-4 leading-relaxed">
                 Product Recommendation AI is an intelligent recommendation engine that leverages advanced machine learning algorithms to provide personalized product suggestions to customers. Built with sophisticated collaborative filtering and content-based filtering techniques.
               </p>
            </motion.div>
            <div className="flex justify-center">
              <img
                src="/image/Portfolio-img/What Is Product Recommendation AI.png"
                alt="What is Product Recommendation AI illustration"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl transition-all duration-500 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl touch-manipulation"
              />
            </div>
          </div>
        </PortfolioSection>
      </div>

      {/* Enhanced Challenge Section */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
        <PortfolioSection className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 p-6 sm:p-8 lg:p-10">
            {/* Image - Hidden on mobile/tablet, shown on desktop (left side) */}
            <div className="hidden lg:block order-1">
              <PortfolioImage
                src="/image/pages_img/Challenges-Addressed.webp"
                alt="Problems illustration"
              />
            </div>
            
            {/* Content - Desktop (right side), Mobile/Tablet (top) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left order-2 lg:order-2"
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                Challenges Addressed
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed mb-3">
                Product Recommendation AI addresses critical e-commerce and retail challenges:
              </p>
                             <ul className="list-none space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                 <li><span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Poor product discovery</li>
                 <li><span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Generic recommendations</li>
                 <li><span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Slow recommendation generation</li>
                 <li><span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Limited customer insights</li>
                 <li><span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Low revenue growth</li>
               </ul>
            </motion.div>
            
            {/* Image - Shown on mobile/tablet, hidden on desktop */}
            <div className="lg:hidden order-3">
              <PortfolioImage
                src="/image/pages_img/Challenges-Addressed.webp"
                alt="Problems illustration"
              />
            </div>
          </div>
        </PortfolioSection>
      </div>

      {/* Enhanced Solution Section */}
      <div className="w-full bg-gradient-to-tr from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
          {/* Enhanced Solution */}
          <PortfolioSection className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Industry Insight: Did You Know?
                </h2>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 mb-6">📊 The Power of AI in Product Recommendations</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Data Point 1 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🎯 35% increase in conversion rates with AI recommendations
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '100%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">35%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 2 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      💰 45% boost in average order value
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '100%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">45%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 3 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      ⚡ 92% accuracy in recommendation relevance
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '92%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">92%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 4 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      📈 60% of e-commerce revenue from recommendations
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '60%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Did-You-Know.jpg"
                alt="AI-powered product recommendation solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <SectionHeader
              title="Core Features of Product Recommendation AI"
              subtitle="Advanced AI tools for personalized recommendations, behavioral analysis, and conversion optimization"
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
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🤖</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Smart Recommendations</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🧠 Advanced ML algorithms</li>
                    <li>📊 Collaborative filtering</li>
                    <li>🎯 Content-based filtering</li>
                    <li>📈 Real-time processing</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">📊</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Behavioral Analysis</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>👁️ User interaction tracking</li>
                    <li>🛒 Purchase history analysis</li>
                    <li>🔍 Browsing pattern recognition</li>
                    <li>💡 Preference learning</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">⚡</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Real-Time Processing</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🚀 Sub-second response times</li>
                    <li>🔄 Live recommendation updates</li>
                    <li>📱 Multi-platform support</li>
                    <li>💻 Scalable architecture</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Professional Workspace Section */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <SectionHeader
                title="Benefits for E-commerce Teams"
                subtitle="Transform your product discovery with AI-powered recommendations"
                delay={0.1}
                className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl xl:!text-3xl !text-black"
              />
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-emerald-200 hover:border-emerald-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">📈</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Higher Conversions</h3>
                      <p className="text-xs sm:text-sm text-gray-600">35% increase in sales</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Increase conversion rates and sales through personalized product recommendations that match customer preferences.
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
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-green-200 hover:border-green-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">💰</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Revenue Growth</h3>
                      <p className="text-xs sm:text-sm text-gray-600">45% AOV increase</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Boost average order values and revenue through intelligent cross-selling and upselling recommendations.
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
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-blue-200 hover:border-blue-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🎯</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Personalization</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Tailored experiences</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Deliver highly personalized shopping experiences that increase customer satisfaction and loyalty.
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
                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-orange-200 hover:border-orange-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⚡</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Real-Time Processing</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Instant recommendations</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Generate recommendations instantly as users browse, ensuring optimal user experience and engagement.
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
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🔍</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Product Discovery</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Better visibility</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Help customers discover relevant products they might not find through traditional browsing.
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
                <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-indigo-200 hover:border-indigo-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">📊</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Analytics Insights</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Performance tracking</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Gain valuable insights into customer behavior and recommendation performance for continuous optimization.
                  </p>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Compliance & Security Section */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl"
              >
                
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Compliance & Security
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Enterprise-grade security and compliance for your customer data.
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
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">✅</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">GDPR Compliant</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Data protection</p>
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
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">End-to-End Encryption</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Military-grade security</p>
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
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Access Controls</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Role-based permissions</p>
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
                          <p className="text-xs sm:text-sm text-gray-600">99.9% uptime guarantee</p>
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
            title="Ready to Transform Your Product Recommendations?"
            subtitle="Let's discuss how AI can revolutionize your e-commerce conversion rates"
            gradient="from-emerald-500 to-emerald-700"
            hoverGradient="hover:from-emerald-600 hover:to-emerald-800"
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

export default ProductRecommendationAI; 