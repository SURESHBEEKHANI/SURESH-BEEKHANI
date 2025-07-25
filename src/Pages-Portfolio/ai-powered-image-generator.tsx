import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Icon components for features
const MagicIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 2l-9.5 9.5M14 7l-7 7M17 10l-7 7M19 12l-7 7"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="7" r="1.5"/></svg>
);
const SpeedIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/><path d="M12 7v5l3 3"/></svg>
);
const CustomIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/></svg>
);
const CloudIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/></svg>
);
const DeviceIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg>
);
const CodeIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
);

const features = [
  { title: 'AI Magic', icon: MagicIcon },
  { title: 'Instant Generation', icon: SpeedIcon },
  { title: 'Customizable Styles', icon: CustomIcon },
  { title: 'Cloud-Based', icon: CloudIcon },
  { title: 'Mobile Friendly', icon: DeviceIcon },
  { title: 'Modern Tech Stack', icon: CodeIcon },
];

const results = [
  { icon: '⚡', stat: '10x', desc: 'Faster content creation' },
  { icon: '🎨', stat: '100%', desc: 'Unique images every time' },
  { icon: '💡', stat: 'Zero', desc: 'Design skills required' },
  { icon: '🌍', stat: 'Global', desc: 'Accessible anywhere' },
];

// Development steps
const AgileIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const FeedbackIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
);
const ApiIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/></svg>
);
const SmartIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
);
const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/></svg>
);
const SustainableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/></svg>
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
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-400 to-pink-200 animate-fade-in mt-16">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* Background image removed */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-400/60 to-pink-200/60"></div>
        </div>
        <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 w-full text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-left">AI-Powered Image Generator</h1>
          <p className="text-base md:text-lg font-normal text-gray-100 mb-4 max-w-2xl animate-fade-in text-left">
            Instantly create unique, high-quality images for your content, marketing, or social media—no design skills needed.
          </p>
        </div>
      </section>
      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">AI Image Generator for Effortless Visual Creation</h2>
        <div className="relative">
          <div className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-300 ${showFullInfo ? '' : 'line-clamp-5'}`}
               style={!showFullInfo ? { WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)' } : {}}>
            <p>
              The AI-Powered Image Generator is a smart digital tool that lets anyone create custom images in seconds. No more searching for stock photos or waiting for designers—just describe what you want, and get a unique image instantly.
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
          </div>
          {!showFullInfo && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
        <button
          className="mt-4 text-purple-600 hover:underline font-medium text-base focus:outline-none"
          onClick={() => setShowFullInfo(v => !v)}
        >
          {showFullInfo ? 'Show Less' : 'Read More'}
        </button>
      </div>
      {/* Challenge Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">What is AI Image Generator?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-2">
            AI Image Generator is a tool that creates custom images from text prompts, making visual content creation effortless and accessible to all.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/what-is-img-Generator.webp"
            alt="What is AI Image Generator illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      {/* Problems Section */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Problems?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Creating custom images is slow, expensive, and often requires design skills. Stock photos are generic and overused, making it hard to stand out.
          </p>
        </div>
      </section>
      {/* Main Content Section */}
      <div className="py-16 bg-gradient-to-tr from-gray-50 to-white flex-1 animate-fade-in-slow">
        <div className="max-w-6xl mx-auto space-y-10 px-4">
          {/* Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 project-section">
            {/* Left: Text */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Solution</h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                AI Image Generator delivers instant, unique visuals from simple prompts—saving time, reducing costs, and enabling creative freedom for everyone.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered image solution illustration"
                loading="lazy"
                className="w-full max-w-3xl h-auto"
              />
            </div>
          </section>
          {/* Features & Technologies */}
          <section className="max-w-6xl mx-auto px-4 py-12 project-section">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center w-full">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              {/* Left: Image */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/image/pages_img/ai-powered image generator Key Features.webp"
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
                        <div className="font-semibold text-base text-purple-900 mb-1 mt-1">{f.title}</div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">Development Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    let title = s.title;
                    if (i === 0) title = 'Agile Development';
                    if (i === steps.length - 1) title = 'Scalable Cloud Infra';
                    return (
                      <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon />
                        <div className="font-semibold text-base text-purple-900 mb-1 mt-1">{title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Right: Development Image */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/image/pages_img/Development-Process-img-gen.webp"
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
              <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                {results.map((r, i) => (
                  <div key={i} className="flex flex-col items-center justify-center bg-purple-50 rounded-lg p-4 shadow-sm w-full transition-transform duration-300 hover:scale-105 hover:shadow-purple-200">
                    <div className="text-xl font-bold text-purple-900">{r.stat}</div>
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
              <h2 className="text-lg md:text-xl whitespace-nowrap font-bold text-purple-900 mb-4">Ready to Create Stunning Visuals Instantly?</h2>
              <a
                href="mailto:surreshbeekhani26@gmail.com"
                className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-purple-600 hover:to-purple-800 text-lg transition-all duration-200 hover:scale-105"
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

export default AIPoweredImageGenerator;
