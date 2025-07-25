import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Icon components for features
const GavelIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 10l7 7m-1.41-1.41a2 2 0 0 1-2.83 0l-7-7a2 2 0 0 1 0-2.83l2.83-2.83a2 2 0 0 1 2.83 0l7 7a2 2 0 0 1 0 2.83z"/><path d="M6 19h6"/></svg>
);
const AiIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
);
const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
);
const ClockIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const CloudIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/></svg>
);
const CodeIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
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
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const FeedbackIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
);
const ApiIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/></svg>
);
const LawIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/></svg>
);
const ComplianceIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const SustainableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/></svg>
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-700 to-purple-200 animate-fade-in mt-16">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/image/pages_img/AI-Driven-Law-GPT.jpg"
            alt="AI-Driven Law GPT background"
            style={{ filter: 'brightness(0.6) blur(1px)' }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-700/60 to-purple-200/60"></div>
        </div>
        <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 w-full text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-left">AI-Driven Law GPT</h1>
          <p className="text-base md:text-lg font-normal text-gray-100 mb-4 max-w-2xl animate-fade-in text-left">
            AI-Driven Law GPT leverages advanced AI to generate, review, and summarize legal documents with speed and precision—empowering legal professionals to work smarter.
          </p>
        </div>
      </section>
      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-12">
        <div className="flex items-center mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">AI-Driven Law GPT for Modern Legal Practice</h2>
        </div>
        <div className="relative">
          <div className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-300 ${showFullInfo ? '' : 'line-clamp-5'}`}
               style={!showFullInfo ? { WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)' } : {}}>
            <p>
              AI-Driven Law GPT is a cutting-edge legal assistant that automates drafting, reviewing, and summarizing legal documents. It understands legal language, adapts to jurisdictional requirements, and ensures compliance with the latest regulations.
            </p>
            <p className="mt-3">
              Unlike traditional tools, it provides context-aware suggestions, reduces manual workload, and minimizes human error. It empowers lawyers, paralegals, and legal teams to focus on strategy rather than paperwork.
            </p>
            <p className="mt-3">
              The platform integrates seamlessly with existing workflows, offering secure, cloud-based access and robust data privacy. It is designed for law firms, in-house counsel, and legal tech innovators seeking efficiency and accuracy.
            </p>
            <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Key Benefits</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><b>Automated Drafting:</b> Instantly generate contracts, briefs, and memos tailored to your needs.</li>
              <li><b>Legal Research:</b> Access up-to-date statutes, case law, and precedents with AI-powered search.</li>
              <li><b>Compliance Assurance:</b> Built-in checks for GDPR, HIPAA, and other legal standards.</li>
              <li><b>Collaboration:</b> Share, edit, and comment in real time with your team.</li>
              <li><b>Data Security:</b> End-to-end encryption and strict access controls.</li>
              <li><b>Time Savings:</b> Reduce document turnaround from days to minutes.</li>
            </ul>
            <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Legal Tech Market Growth</h3>
            <p className="mb-3">The legal AI market is projected to exceed $37 billion by 2030, driven by demand for automation, compliance, and digital transformation in law.</p>
            <h3 className="font-semibold text-indigo-800 mt-4 mb-2">Beyond Automation – A Trusted Legal Partner</h3>
            <p>AI-Driven Law GPT is more than a tool—it is a digital partner that enhances legal expertise, reduces risk, and delivers better outcomes for clients and firms.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">What is AI-Driven Law GPT?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-2">
            AI-Driven Law GPT is an intelligent legal assistant that drafts, reviews, and summarizes legal documents, saving time and improving accuracy for legal professionals.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/What-AI-Driven-Law-GPT.webp"
            alt="What is AI-Driven Law GPT illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      {/* Challenge Section */}
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
            Legal professionals face repetitive drafting, research overload, and compliance risks. Manual processes are slow, error-prone, and costly for firms and clients.
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
                AI-Driven Law GPT automates legal drafting, research, and compliance—reducing errors, saving time, and enabling lawyers to focus on high-value work.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered law solution illustration"
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
                  src="/image/pages_img/Key-Features-legal.png"
                  alt="Legal Key Features illustration"
                  loading="lazy"
                  className="w-full max-w-xs max-h-64 h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
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
                    if (i === steps.length - 1) title = 'Sustainable Architecture';
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
                  src="/image/pages_img/Development-Process-law-gpt.png"
                  alt="Development Process Law GPT illustration"
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
              <h2 className="text-lg md:text-xl whitespace-nowrap font-bold text-indigo-900 mb-4">Ready to Transform Your Legal Workflow?</h2>
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

export default AiDrivenLawGpt;
