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
    title: 'Automated Review', 
    icon: LegalIcon
  },
  { 
    title: 'High Accuracy', 
    icon: AiIcon
  },
  { 
    title: 'Compliance Checks', 
    icon: SecurityIcon
  },
  { 
    title: 'Actionable Insights', 
    icon: AnalyticsIcon
  },
  { 
    title: 'Rapid Processing', 
    icon: CloudIcon
  },
  { 
    title: 'Seamless Integration', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⚡', stat: '80%', desc: 'Faster contract review' },
  { icon: '✅', stat: '99%', desc: 'Accuracy in risk detection' },
  { icon: '🔒', stat: 'Full', desc: 'Compliance with legal standards' },
  { icon: '💼', stat: 'Enterprise', desc: 'Ready for large-scale use' },
];

// Development steps with enhanced icons
const steps = [
  { number: 1, title: 'Agile Development', icon: DevelopmentIcon },
  { number: 2, title: 'Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integration', icon: ApiIcon },
  { number: 4, title: 'Legal Expertise', icon: ExpertiseIcon },
  { number: 5, title: 'Compliance', icon: ComplianceIcon },
  { number: 6, title: 'Architecture', icon: ArchitectureIcon },
];

const AILegalContractAnalyzer = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p className="mb-3 text-base text-gray-700">
        AI Legal Contract Analyzer is a sophisticated legal-tech platform that leverages advanced artificial intelligence to automate contract review, detect potential risks, and ensure regulatory compliance. Built with cutting-edge NLP and machine learning algorithms, it transforms how legal professionals approach contract analysis.
      </p>
      <p className="mb-3 text-base text-gray-700">
        The platform goes beyond simple text processing to understand legal context, identify ambiguous clauses, flag potential liabilities, and provide actionable insights. It supports multiple contract types including NDAs, employment agreements, vendor contracts, and complex commercial arrangements.
      </p>
      <p className="mb-4 text-base text-gray-700">
        With enterprise-grade security and seamless integration capabilities, the AI Legal Contract Analyzer integrates into existing legal workflows, enabling teams to process contracts faster while maintaining the highest standards of accuracy and compliance.
      </p>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Key Benefits</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Risk Detection</h4>
          <p className="text-base text-gray-700">Automatically identifies ambiguous clauses, potential liabilities, and non-standard terms that could pose legal risks.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Compliance Verification</h4>
          <p className="text-base text-gray-700">Checks contracts against regulatory standards, industry best practices, and internal compliance requirements.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Speed & Efficiency</h4>
          <p className="text-base text-gray-700">Reduces contract review time from hours to minutes while maintaining accuracy and thoroughness.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Data Extraction</h4>
          <p className="text-base text-gray-700">Extracts key terms, dates, obligations, and financial data for easy tracking and analysis.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Version Comparison</h4>
          <p className="text-base text-gray-700">Highlights changes between contract versions and tracks negotiation history automatically.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Collaborative Workflow</h4>
          <p className="text-base text-gray-700">Enables real-time collaboration with role-based access controls and audit trails.</p>
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">The Growing Legal Tech Market</h3>
      <p className="text-base text-gray-700 mb-2">The global legal AI market is projected to exceed $37 billion by 2030, driven by:</p>
      <ul className="list-disc pl-4 mb-3 space-y-1 text-base text-gray-700">
        <li>Increasing contract complexity and volume</li>
        <li>Regulatory compliance requirements</li>
        <li>Cost pressure on legal departments</li>
        <li>Need for faster turnaround times</li>
      </ul>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Beyond Automation: Intelligent Legal Analysis</h3>
      <p className="text-base text-gray-700">
        AI Legal Contract Analyzer represents the future of legal technology, combining human expertise with artificial intelligence to deliver faster, more accurate, and more comprehensive contract analysis. It empowers legal teams to focus on strategic work while ensuring no detail is overlooked.
      </p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI Legal Contract Analyzer
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                AI-powered contract analysis that automates review, detects risks, and ensures compliance—with unprecedented speed and accuracy.
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
         title="AI Legal Contract Analyzer for Modern Legal Practice"
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
              <div className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    What Is AI Legal Contract Analyzer?
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    AI Legal Contract Analyzer is an advanced legal-tech platform that leverages cutting-edge artificial intelligence to streamline contract analysis, identify potential risks, and ensure regulatory compliance.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Tailored for legal professionals, in-house counsel, and corporate legal teams, it enhances operational efficiency while maintaining uncompromised accuracy and legal integrity.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center">
              <PortfolioImage
                src="/image/Portfolio-img/What-AI-Legal-Contract-Analyzer.png"
                alt="What is AI Legal Contract Analyzer illustration"
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
                src="/image/pages_img/Challenges-AI-Legal-Contract-Analyzer.webp"
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
                AI Legal Contract Analyzer addresses critical legal industry challenges:
              </p>
                              <ul className="list-none space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                  <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Time-consuming contract review</li>
                  <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Risk of missing critical terms and conditions</li>
                  <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Delays in contract negotiation and approval</li>
                  <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Inconsistent compliance checking</li>
                  <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> High costs of manual legal review</li>
                </ul>
            </motion.div>
            
            {/* Image - Shown on mobile/tablet, hidden on desktop */}
            <div className="lg:hidden order-3">
              <PortfolioImage
                src="/image/pages_img/Challenges-AI-Legal-Contract-Analyzer.webp"
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
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 mb-6">📊 The Rise of AI in Legal Contract Analysis</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Data Point 1 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🧠 AI analyzes contracts 10x faster
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '100%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">10x</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 2 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🕒 40% of time spent on contract review
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '40%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">40%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 3 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      💼 60% faster deal closure with AI
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '60%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">60%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 4 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      💡 AI identifies 95% of contract risks
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '95%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Did-You-Know.jpg"
                alt="AI-powered legal solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <SectionHeader
              title="Core Features of AI Legal Contract Analyzer"
              subtitle="AI-powered contract analysis tools for risk detection, compliance verification, and workflow automation"
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
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">⚙️</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Smart Automation</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🤖 AI-powered contract analysis and review</li>
                    <li>📄 Automated risk detection and flagging</li>
                    <li>📝 Intelligent clause identification and extraction</li>
                    <li>🔍 Advanced pattern recognition for legal terms</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🧑‍💼</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Professional Tools</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>📚 Comprehensive contract template library</li>
                    <li>⚡ Customizable review workflows</li>
                    <li>🔄 Version control and change tracking</li>
                    <li>💡 Intelligent suggestions and alerts</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">📊</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Insight & Analytics</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>📈 Contract performance metrics and analytics</li>
                    <li>📋 Risk assessment reports and summaries</li>
                    <li>🔎 Advanced search and filtering capabilities</li>
                    <li>👥 Real-time collaboration with audit trails</li>
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
                title="Benefits for Legal Teams"
                subtitle="Transform your contract analysis with AI-powered efficiency"
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
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-blue-200 hover:border-blue-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⏳</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Time Saved</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Automate repetitive tasks</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Streamline contract processing and reduce manual review hours with AI-powered automation.
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
                      <span className="text-lg sm:text-xl md:text-2xl text-white">✅</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Increased Accuracy</h3>
                      <p className="text-xs sm:text-sm text-gray-600">AI-powered precision</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Ensure consistent and error-free contract analysis with advanced AI algorithms.
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
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-purple-200 hover:border-purple-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">💼</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Smarter Workflows</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Enhanced efficiency</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Optimize legal processes with intelligent automation and streamlined workflows.
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
                      <span className="text-lg sm:text-xl md:text-2xl text-white">💸</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Cost Reduction</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Streamlined operations</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Reduce operational costs through intelligent automation and resource optimization.
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
                      <span className="text-lg sm:text-xl md:text-2xl text-white">📈</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Client Satisfaction</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Faster turnarounds</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Deliver exceptional client experiences with faster response times and better service.
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
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⚖️</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Legal Compliance</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Regulatory adherence</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Ensure full compliance with legal standards and regulatory requirements.
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
                  Enterprise-grade security and compliance for your legal data.
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
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">GDPR-Compliant</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Data protection regulations</p>
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
            title="Ready to Transform Your Contract Analysis?"
            subtitle="Let's discuss how AI can revolutionize your legal workflow"
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

export default AILegalContractAnalyzer;
