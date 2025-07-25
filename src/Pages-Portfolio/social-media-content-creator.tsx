import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Simple icon components for features/steps
const AutomationIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const AnalyticsIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/></svg>
);
const PersonalizationIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
);
const CalendarIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
);
const DeviceIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg>
);
const CodeIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
);

const features = [
  { title: 'Automated Content Scheduling', icon: AutomationIcon },
  { title: 'Real-Time Analytics', icon: AnalyticsIcon },
  { title: 'Personalized Recommendations', icon: PersonalizationIcon },
  { title: 'Calendar & Device Sync', icon: CalendarIcon },
  { title: 'Mobile-First Experience', icon: DeviceIcon },
  { title: 'Modern Tech Stack', icon: CodeIcon },
];

const steps = [
  { title: 'Agile Development', icon: AutomationIcon },
  { title: 'User Feedback Loops', icon: AnalyticsIcon },
  { title: 'API Integrations', icon: CodeIcon },
  { title: 'Personalization Engine', icon: PersonalizationIcon },
  { title: 'Data Privacy', icon: CalendarIcon },
  { title: 'Scalable Architecture', icon: DeviceIcon },
];

const results = [
  { stat: '40%', desc: 'Increase in engagement' },
  { stat: '30%', desc: 'Faster content delivery' },
  { stat: 'High', desc: 'User satisfaction' },
  { stat: 'Global', desc: 'Scalable solution' },
];

const SoMeCreator = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-700 to-pink-200 animate-fade-in mt-16">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/image/pages_img/Social-Media-Content-Creator.png"
            alt="Social Media Content Creator background"
            style={{ filter: 'brightness(0.6) blur(1px)' }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-700/60 to-pink-200/60"></div>
        </div>
        <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 w-full text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-left">Social Media Content Creator</h1>
          <p className="text-base md:text-lg font-normal text-gray-100 mb-4 max-w-2xl animate-fade-in text-left">
            AI-powered platform for automating, analyzing, and optimizing your social media content strategy.
          </p>
        </div>
      </section>
      {/* Info/Overview Box */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">AI Social Media Content Creator for Modern Brands</h2>
        <div className="relative">
          <div className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-300 ${showFullInfo ? '' : 'line-clamp-5'}`}
               style={!showFullInfo ? { WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)' } : {}}>
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
      {/* What is Social Media Content Creator Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">What is Social Media Content Creator?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-2">
            A Social Media Content Creator is a digital tool or platform that empowers users to design, schedule, and manage engaging posts across multiple social channels. It leverages AI to streamline content ideation, automate publishing, and analyze performance, helping brands and individuals grow their online presence efficiently.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/Social-Media-Content-Creator.png"
            alt="What is Social Media Content Creator illustration"
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
            Manual content creation is time-consuming, inconsistent, and often fails to engage audiences. Marketers struggle to analyze performance and adapt quickly to trends, leading to missed opportunities and lower ROI.
          </p>
        </div>
      </section>
      {/* Solution Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 project-section">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Solution</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            The AI Social Media Content Creator automates content generation, optimizes scheduling, and delivers real-time analytics—saving time, increasing engagement, and maximizing your brand impact.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/Solutions.jpg"
            alt="AI-powered social media solution illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 project-section">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8 text-center w-full">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/image/pages_img/key-f-t-assistent.jpg"
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
                return (
                  <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <Icon />
                    <div className="font-semibold text-base text-indigo-900 mb-1 mt-1">{s.title}</div>
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
      {/* Results Section */}
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
          <h2 className="text-lg md:text-xl whitespace-nowrap font-bold text-indigo-900 mb-4">Ready to Elevate Your Social Media Strategy?</h2>
          <a
            href="mailto:surreshbeekhani26@gmail.com"
            className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-indigo-600 hover:to-indigo-800 text-lg transition-all duration-200 hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
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

export default SoMeCreator;
