import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Icon components for features
const AutomationIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/></svg>
);
const AccuracyIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
);
const ComplianceIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const InsightsIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01"/><circle cx="12" cy="12" r="10"/></svg>
);
const SpeedIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="M21 12h-6"/></svg>
);
const IntegrationIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 0 0 2 2h2M4 7V5a2 2 0 0 1 2-2h2m8 0h2a2 2 0 0 1 2 2v2m0 8v2a2 2 0 0 1-2 2h-2"/></svg>
);

const features = [
  { title: 'Automated Review', icon: AutomationIcon },
  { title: 'High Accuracy', icon: AccuracyIcon },
  { title: 'Compliance Checks', icon: ComplianceIcon },
  { title: 'Actionable Insights', icon: InsightsIcon },
  { title: 'Rapid Processing', icon: SpeedIcon },
  { title: 'Seamless Integration', icon: IntegrationIcon },
];

const results = [
  { icon: '⚡', stat: '80%', desc: 'Faster contract review' },
  { icon: '✅', stat: '99%', desc: 'Accuracy in risk detection' },
  { icon: '🔒', stat: 'Full', desc: 'Compliance with legal standards' },
  { icon: '💼', stat: 'Enterprise', desc: 'Ready for large-scale use' },
];

// Development process icons
const AgileIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const FeedbackIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
);
const ApiIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/></svg>
);
const NlpIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
);
const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/></svg>
);
const ScalableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/></svg>
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
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-700 to-purple-200 animate-fade-in mt-16">
        
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-700/60 to-purple-200/60"></div>
        
        <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 w-full text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-left">AI Legal Contract Analyzer</h1>
          <p className="text-base md:text-lg font-normal text-gray-100 mb-4 max-w-2xl animate-fade-in text-left">
            Automate contract review, boost compliance, and gain actionable insights with AI-powered legal document analysis.
          </p>
        </div>
      </section>
      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-12">
        <div className="flex items-center mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">AI for Smarter Legal Contract Analysis</h2>
        </div>
        <div className="relative">
          <div className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-300 ${showFullInfo ? '' : 'line-clamp-5'}`}
               style={!showFullInfo ? { WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)' } : {}}>
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
          </div>
          {!showFullInfo && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
        <button
          className="mt-4 text-indigo-600 hover:underline font-medium text-base focus:outline-none"
          onClick={() => setShowFullInfo(v => !v)}
        >
          {showFullInfo ? 'Show Less' : 'Read More'}
        </button>
      </div>
      {/* What is Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">What is AI Legal Contract Analyzer?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-2">
            A smart tool that automates contract review, detects risks, and ensures compliance saving time and reducing legal exposure.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/What-AI-Legal-Contract-Analyzer.jpg"
            alt="What is AI Legal Contract Analyzer illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      {/* Problem Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/image/pages_img/Problems.jpg"
            alt="Problems illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Problems?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Manual contract review is slow, costly, and prone to human error. Legal teams struggle to keep up with growing contract volumes and evolving regulations, risking missed obligations and compliance failures.
          </p>
        </div>
      </section>
      {/* Solution Section */}
      <div className="py-16 bg-gradient-to-tr from-gray-50 to-white flex-1 animate-fade-in-slow">
        <div className="max-w-6xl mx-auto space-y-10 px-4">
          {/* Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 project-section">
            {/* Left: Text */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Solution</h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                The AI Legal Contract Analyzer automates review, flags risks, and extracts insights empowering legal teams to work faster, smarter, and with greater confidence.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered legal solution illustration"
                loading="lazy"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>
          {/* Features & Technologies */}
          <section className="max-w-6xl mx-auto px-4 py-12 project-section">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8 text-center w-full">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                             {/* Left: Image */}
               <div className="flex flex-col items-center justify-center">
                 <img
                   src="/image/pages_img/Legal-Contract-Analyzer-key-feature.jpg"
                   alt="Key Features & Technologies illustration"
                   loading="lazy"
                   className="w-full max-w-3xl max-h-64 h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                 />
               </div>
              {/* Right: Features Grid */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon />
                        <div className="font-semibold text-base text-indigo-900 mb-1 mt-1">{f.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          {/* Development Section */}
          <section className="max-w-6xl mx-auto px-4 py-12 project-section">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              {/* Left: Development Grid */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8 text-center">Development Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    let title = s.title;
                    if (i === 0) title = 'Agile Development';
                    if (i === steps.length - 1) title = 'Scalable Architecture';
                    return (
                      <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon />
                        <div className="font-semibold text-base text-indigo-900 mb-1 mt-1">{title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Right: Development Image */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/image/pages_img/implements-ai-assents.png"
                  alt="Development Illustration"
                  loading="lazy"
                  className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>
          {/* Results */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 project-section">
            {/* Left: Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/image/pages_img/result.jpg"
                alt="Results and impact illustration"
                loading="lazy"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Right: Text */}
            <div className="text-left md:text-center flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                {results.map((r, i) => (
                  <div key={i} className="flex flex-col items-center justify-center bg-indigo-50 rounded-lg p-4 shadow-sm w-full transition-transform duration-300 hover:scale-105 hover:shadow-indigo-200">
                    <div className="text-xl font-bold text-indigo-900">{r.stat}</div>
                    <div className="text-gray-700 text-base text-center">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 animate-bounce-slow">
            {/* Left: Text */}
            <div className="text-left">
              <h2 className="text-lg md:text-xl whitespace-nowrap font-bold text-indigo-900 mb-4">Ready to Transform Your Legal Operations?</h2>
              <a
                href="mailto:surreshbeekhani26@gmail.com"
                className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-indigo-600 hover:to-indigo-800 text-lg transition-all duration-200 hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-slow { animation: fadeIn 1.5s ease; }
        .animate-bounce-slow { animation: bounce 2s infinite alternate; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
      `}</style>
    </div>
  );
};

export default AILegalContractAnalyzer;
