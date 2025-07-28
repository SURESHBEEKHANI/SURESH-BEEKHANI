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
const AutomationIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 2v4M16 2v4M4 10h16"/>
  </svg>
);

const AccuracyIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const ComplianceIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const InsightsIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 16h-1v-4h-1m1-4h.01"/>
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

const SpeedIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    <path d="M21 12h-6"/>
  </svg>
);

const IntegrationIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 17v2a2 2 0 0 0 2 2h2M4 7V5a2 2 0 0 1 2-2h2m8 0h2a2 2 0 0 1 2 2v2m0 8v2a2 2 0 0 1-2 2h-2"/>
  </svg>
);

// Enhanced features with descriptions
const features = [
  { 
    title: 'Automated Review', 
    icon: AutomationIcon,
    description: 'AI-powered contract analysis and risk detection'
  },
  { 
    title: 'High Accuracy', 
    icon: AccuracyIcon,
    description: '99% accuracy in identifying legal issues and risks'
  },
  { 
    title: 'Compliance Checks', 
    icon: ComplianceIcon,
    description: 'Built-in regulatory compliance verification'
  },
  { 
    title: 'Actionable Insights', 
    icon: InsightsIcon,
    description: 'Clear recommendations and risk assessments'
  },
  { 
    title: 'Rapid Processing', 
    icon: SpeedIcon,
    description: 'Process contracts in minutes, not hours'
  },
  { 
    title: 'Seamless Integration', 
    icon: IntegrationIcon,
    description: 'Works with existing legal workflows and systems'
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⚡', stat: '80%', desc: 'Faster contract review' },
  { icon: '✅', stat: '99%', desc: 'Accuracy in risk detection' },
  { icon: '🔒', stat: 'Full', desc: 'Compliance with legal standards' },
  { icon: '💼', stat: 'Enterprise', desc: 'Ready for large-scale use' },
];

// Development process icons with enhanced accessibility
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

const NlpIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ScalableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/>
  </svg>
);

const steps = [
  { number: 1, title: 'Agile Development', icon: AgileIcon },
  { number: 2, title: 'User Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API & Data Integration', icon: ApiIcon },
  { number: 4, title: 'Advanced NLP Models', icon: NlpIcon },
  { number: 5, title: 'Data Security & Compliance', icon: ShieldIcon },
  { number: 6, title: 'Scalable Architecture', icon: ScalableIcon },
];

const AILegalContractAnalyzer = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p>
        The AI Legal Contract Analyzer is an advanced digital solution designed to streamline and automate the contract review process for legal teams and businesses. By leveraging natural language processing and machine learning, it identifies risks, ensures compliance, and extracts key insights from complex legal documents in seconds.
      </p>
      <p className="mt-3">
        Unlike manual review, which is time-consuming and error-prone, this AI tool delivers consistent, accurate, and scalable results—freeing up legal professionals to focus on higher-value work.
      </p>
      <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Key Benefits</h3>
      <ul className="list-disc pl-6 mb-3 space-y-1">
        <li><b>Automated Risk Detection:</b> Instantly flags ambiguous clauses, missing terms, and potential liabilities.</li>
        <li><b>Compliance Assurance:</b> Checks contracts against regulatory standards and company policies.</li>
        <li><b>Faster Turnaround:</b> Reduces review time from hours to minutes, accelerating deal cycles.</li>
        <li><b>Consistent Accuracy:</b> Minimizes human error and ensures every contract is reviewed to the same high standard.</li>
        <li><b>Actionable Insights:</b> Extracts obligations, deadlines, and key data for easy tracking and reporting.</li>
        <li><b>Secure & Confidential:</b> Handles sensitive documents with enterprise-grade security and privacy controls.</li>
      </ul>
      <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Market Growth</h3>
      <p className="mb-3">The global legal AI market is projected to exceed $37 billion by 2030, driven by the need for efficiency, compliance, and risk mitigation in legal operations.</p>
      <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Beyond Review – A Legal Partner</h3>
      <p>More than just a review tool, the AI Legal Contract Analyzer acts as a digital legal partner—offering clause suggestions, version comparisons, and real-time collaboration for legal teams and clients.</p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <PortfolioHero
        title="AI Legal Contract Analyzer"
        description="Automate contract review, boost compliance, and gain actionable insights with AI-powered legal document analysis."
        gradient="from-indigo-900 via-blue-700 to-purple-200"
        backgroundImage="/image/pages_img/AI-Legal-Contract-Analyzer-key-feature.jpg"
      />

      {/* Enhanced Info Section */}
      <InfoSection
        title="AI for Smarter Legal Contract Analysis"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-indigo-900"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-8 leading-tight">
              What is AI Legal Contract Analyzer?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl mb-6 leading-relaxed">
              A smart tool that automates contract review, detects risks, and ensures compliance saving time and reducing legal exposure.
            </p>
          </motion.div>
          <PortfolioImage
            src="/image/pages_img/What-AI-Legal-Contract-Analyzer.jpg"
            alt="What is AI Legal Contract Analyzer illustration"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-8 leading-tight">
              Problems?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
              Manual contract review is slow, costly, and prone to human error. Legal teams struggle to keep up with growing contract volumes and evolving regulations, risking missed obligations and compliance failures.
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-8 leading-tight">
                  Solution
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed">
                  The AI Legal Contract Analyzer automates review, flags risks, and extracts insights empowering legal teams to work faster, smarter, and with greater confidence.
                </p>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered legal solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <SectionHeader
              title="Key Features"
              subtitle="Advanced capabilities that transform contract analysis"
              delay={0.1}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <PortfolioImage
                src="/image/pages_img/Legal-Contract-Analyzer-key-feature.jpg"
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
            title="Ready to Transform Your Legal Operations?"
            subtitle="Let's discuss how AI can revolutionize your contract analysis"
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

export default AILegalContractAnalyzer;
