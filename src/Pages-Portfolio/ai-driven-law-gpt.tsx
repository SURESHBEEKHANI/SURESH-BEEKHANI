import React, { useState } from 'react';
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
  staggerContainer
} from '@/components/ui/portfolio-components';

// Icon components for features
const GavelIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 10l7 7m-1.41-1.41a2 2 0 0 1-2.83 0l-7-7a2 2 0 0 1 0-2.83l2.83-2.83a2 2 0 0 1 2.83 0l7 7a2 2 0 0 1 0 2.83z"/>
    <path d="M6 19h6"/>
  </svg>
);

const AiIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12h8M12 8v8"/>
  </svg>
);

const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const ClockIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const CloudIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/>
  </svg>
);

const CodeIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
  </svg>
);

const features = [
  { title: 'Legal Text Generation', icon: GavelIcon },
  { title: 'AI-Powered Research', icon: AiIcon },
  { title: 'Data Privacy & Security', icon: ShieldIcon },
  { title: 'Instant Case Summaries', icon: ClockIcon },
  { title: 'Cloud-Based Access', icon: CloudIcon },
  { title: 'Modern Tech Stack', icon: CodeIcon },
];

const results = [
  { icon: '⚡', stat: '80%', desc: 'Faster document drafting' },
  { icon: '✅', stat: '99%', desc: 'Accuracy in legal text' },
  { icon: '🔒', stat: 'Secure', desc: 'Data handling & compliance' },
  { icon: '🌐', stat: 'Global', desc: 'Scalable for any jurisdiction' },
];

// Development steps
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

const LawIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 2v4M16 2v4M4 10h16"/>
  </svg>
);

const ComplianceIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
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
  { number: 1, title: 'Agile Development', icon: AgileIcon },
  { number: 2, title: 'User Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integrations', icon: ApiIcon },
  { number: 4, title: 'Legal Domain Expertise', icon: LawIcon },
  { number: 5, title: 'Compliance & Security', icon: ComplianceIcon },
  { number: 6, title: 'Sustainable Architecture', icon: SustainableIcon },
];

const AiDrivenLawGpt = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <PortfolioHero
        title="AI-Driven Law GPT"
        description="AI-Driven Law GPT leverages advanced AI to generate, review, and summarize legal documents with speed and precision empowering legal professionals to work smarter."
        gradient="from-indigo-900 via-blue-700 to-purple-200"
      />

      {/* Info Section */}
      <InfoSection
        title="AI-Driven Law GPT for Modern Legal Practice"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
      >
        <p>
          AI-Driven Law GPT is a cutting-edge legal assistant that automates drafting, reviewing, and summarizing legal documents. It understands legal language, adapts to jurisdictional requirements, and ensures compliance with the latest regulations.
        </p>
        <p className="mt-4">
          Unlike traditional tools, it provides context-aware suggestions, reduces manual workload, and minimizes human error. It empowers lawyers, paralegals, and legal teams to focus on strategy rather than paperwork.
        </p>
        <p className="mt-4">
          The platform integrates seamlessly with existing workflows, offering secure, cloud-based access and robust data privacy. It is designed for law firms, in-house counsel, and legal tech innovators seeking efficiency and accuracy.
        </p>
        <h3 className="font-semibold text-indigo-800 mt-6 mb-3 text-lg">Key Benefits</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-base">
          <li><strong>Automated Drafting:</strong> Instantly generate contracts, briefs, and memos tailored to your needs.</li>
          <li><strong>Legal Research:</strong> Access up-to-date statutes, case law, and precedents with AI-powered search.</li>
          <li><strong>Compliance Assurance:</strong> Built-in checks for GDPR, HIPAA, and other legal standards.</li>
          <li><strong>Collaboration:</strong> Share, edit, and comment in real time with your team.</li>
          <li><strong>Data Security:</strong> End-to-end encryption and strict access controls.</li>
          <li><strong>Time Savings:</strong> Reduce document turnaround from days to minutes.</li>
        </ul>
        <h3 className="font-semibold text-indigo-800 mt-6 mb-3 text-lg">Legal Tech Market Growth</h3>
        <p className="mb-4">The legal AI market is projected to exceed $37 billion by 2030, driven by demand for automation, compliance, and digital transformation in law.</p>
        <h3 className="font-semibold text-indigo-800 mt-6 mb-3 text-lg">Beyond Automation – A Trusted Legal Partner</h3>
        <p>AI-Driven Law GPT is more than a tool—it is a digital partner that enhances legal expertise, reduces risk, and delivers better outcomes for clients and firms.</p>
      </InfoSection>

      {/* What is Section */}
      <PortfolioSection className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-6 leading-tight">
            What is AI-Driven Law GPT?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-4 leading-relaxed">
            AI-Driven Law GPT is an intelligent legal assistant that drafts, reviews, and summarizes legal documents, saving time and improving accuracy for legal professionals.
          </p>
        </motion.div>
        <PortfolioImage
          src="/image/pages_img/What-AI-Driven-Law-GPT.webp"
          alt="What is AI-Driven Law GPT illustration"
          delay={0.2}
        />
      </PortfolioSection>

      {/* Challenge Section */}
      <PortfolioSection className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-12">
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-6 leading-tight">
            Problems?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Legal professionals face repetitive drafting, research overload, and compliance risks. Manual processes are slow, error-prone, and costly for firms and clients.
          </p>
        </motion.div>
      </PortfolioSection>

      {/* Solution Section */}
      <div className="py-20 bg-gradient-to-tr from-gray-50 to-white flex-1">
        <div className="max-w-6xl mx-auto space-y-16 px-4">
          {/* Solution */}
          <PortfolioSection className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-6 leading-tight">
                Solution
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
                AI-Driven Law GPT automates legal drafting, research, and compliance reducing errors, saving time, and enabling lawyers to focus on high-value work.
              </p>
            </motion.div>
            <PortfolioImage
              src="/image/pages_img/Solutions.jpg"
              alt="AI-powered law solution illustration"
              delay={0.2}
            />
          </PortfolioSection>

          {/* Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto px-4 py-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-12 text-center leading-tight"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <PortfolioImage
                src="/image/pages_img/Key-Features-legal.png"
                alt="Legal Key Features illustration"
                className="max-w-sm"
              />
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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

          {/* Development Section */}
          <PortfolioSection className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-12 text-center leading-tight">
                  Development Process
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                src="/image/pages_img/Development-Process-law-gpt.png"
                alt="Development Process Law GPT illustration"
              />
            </div>
          </PortfolioSection>

          {/* Results */}
          <PortfolioSection className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-12">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 leading-tight">
                Results
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto"
              >
                {results.map((r, i) => (
                  <ResultCard
                    key={i}
                    icon={r.icon}
                    stat={r.stat}
                    desc={r.desc}
                    delay={i * 0.1}
                    bgColor="bg-indigo-50"
                    textColor="text-indigo-900"
                    shadowColor="hover:shadow-indigo-200"
                  />
                ))}
              </motion.div>
            </motion.div>
          </PortfolioSection>

          {/* Call to Action */}
          <CallToAction
            title="Ready to Transform Your Legal Workflow?"
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
      `}</style>
    </div>
  );
};

export default AiDrivenLawGpt;
