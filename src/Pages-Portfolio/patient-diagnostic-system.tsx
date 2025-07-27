import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Icon components for features
const ChatbotIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 9h8M8 13h4"/></svg>
);
const DiagnosisIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
);
const ReportIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/></svg>
);
const IntegrationIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg>
);
const PrivacyIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const AnalyticsIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const features = [
  { title: 'AI Chatbot Triage', icon: ChatbotIcon },
  { title: 'Automated Diagnosis', icon: DiagnosisIcon },
  { title: 'Instant Reporting', icon: ReportIcon },
  { title: 'EHR Integration', icon: IntegrationIcon },
  { title: 'Data Privacy & Security', icon: PrivacyIcon },
  { title: 'Analytics Dashboard', icon: AnalyticsIcon },
];

const results = [
  { icon: '⏱️', stat: '60%', desc: 'Faster diagnosis time' },
  { icon: '📉', stat: '40%', desc: 'Reduced doctor workload' },
  { icon: '👍', stat: 'High', desc: 'Patient satisfaction' },
  { icon: '🌐', stat: 'Scalable', desc: 'For clinics & hospitals' },
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
const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/></svg>
);
const SustainableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/></svg>
);

const steps = [
  { number: 1, title: 'Agile Development', icon: AgileIcon },
  { number: 2, title: 'Clinical Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API & EHR Integration', icon: ApiIcon },
  { number: 4, title: 'AI Model Optimization', icon: SmartIcon },
  { number: 5, title: 'HIPAA/GDPR Compliance', icon: ShieldIcon },
  { number: 6, title: 'Scalable Architecture', icon: SustainableIcon },
];

const PatientDiagnosticSystem = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-400 to-pink-200 animate-fade-in mt-16">
        
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-400/60 to-pink-200/60"></div>
        <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 w-full text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-left">Patient Diagnostic System</h1>
          <p className="text-base md:text-lg font-normal text-gray-100 mb-4 max-w-2xl animate-fade-in text-left">
            AI-powered system for rapid, accurate disease diagnosis. Reduces doctor workload and improves patient care.
          </p>
        </div>
      </section>
      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-12">
        <div className="flex items-center mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">AI Diagnostic System for Healthcare</h2>
        </div>
        <div className="relative">
          <div className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-300 ${showFullInfo ? '' : 'line-clamp-5'}`}
               style={!showFullInfo ? { WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)' } : {}}>
            <p>
              The Patient Diagnostic System leverages AI chatbots and machine learning to streamline the diagnostic process. It collects patient symptoms, analyzes data, and provides instant, evidence-based recommendations to clinicians.
            </p>
            <p className="mt-3">
              This system acts as a digital assistant, reducing manual paperwork, minimizing diagnostic errors, and ensuring patients receive timely care. It integrates with hospital EHRs for seamless workflow.
            </p>
            <p className="mt-3">
              By automating triage and initial diagnosis, it frees up doctors for complex cases and improves overall healthcare efficiency.
            </p>
            <h3 className="font-semibold text-blue-800 mt-4 mb-2">Key Benefits</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><b>Faster Diagnosis:</b> Reduces time from patient intake to diagnosis.</li>
              <li><b>Reduced Workload:</b> Automates routine tasks for clinicians.</li>
              <li><b>Improved Accuracy:</b> Uses AI to minimize human error.</li>
              <li><b>Seamless Integration:</b> Works with existing hospital systems.</li>
              <li><b>Data Security:</b> Ensures patient privacy and compliance.</li>
              <li><b>Scalable:</b> Suitable for clinics, hospitals, and telemedicine.</li>
            </ul>
            <h3 className="font-semibold text-blue-800 mt-4 mb-2">Growing Demand</h3>
            <p className="mb-3">AI in healthcare diagnostics is projected to reach $20B+ by 2030, driven by the need for efficiency and better patient outcomes.</p>
            <h3 className="font-semibold text-blue-800 mt-4 mb-2">Beyond Diagnosis – A Digital Health Partner</h3>
            <p>More than a diagnostic tool, it supports patient education, follow-up reminders, and connects users to specialists as needed.</p>
          </div>
          {!showFullInfo && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
        <button
          className="mt-4 text-blue-600 hover:underline font-medium text-base focus:outline-none"
          onClick={() => setShowFullInfo(v => !v)}
        >
          {showFullInfo ? 'Show Less' : 'Read More'}
        </button>
      </div>
      {/* What is Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What is Patient Diagnostic System?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-2">
            An AI-powered tool that collects symptoms, analyzes data, and provides instant diagnostic suggestions to healthcare professionals.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/Patient-Diagnostic-System.webp"
            alt="What is Patient Diagnostic System illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      {/* Problems Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/image/pages_img/Problems.jpg"
            alt="Problems illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Problems?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Manual diagnosis is slow, error-prone, and increases clinician workload. Patients face delays and inconsistent care quality.
          </p>
        </div>
      </section>
      {/* Main Content Section */}
      <div className="py-16 bg-gradient-to-tr from-gray-50 to-white flex-1 animate-fade-in-slow">
        <div className="max-w-6xl mx-auto space-y-10 px-4">
          {/* Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 project-section">
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Solution</h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                The Patient Diagnostic System automates triage, provides instant recommendations, and integrates with EHRs—improving speed, accuracy, and patient outcomes.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/image/pages_img/Diagnostics.jpg"
                alt="AI-powered diagnostic solution illustration"
                loading="lazy"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>
          {/* Features & Technologies */}
          <section className="max-w-6xl mx-auto px-4 py-12 project-section">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center w-full">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/image/pages_img/AI-Driven-Testing.jpg"
                  alt="Key Features & Technologies illustration"
                  loading="lazy"
                  className="w-full max-w-3xl max-h-64 h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon />
                        <div className="font-semibold text-base text-blue-900 mb-1 mt-1">{f.title}</div>
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
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Development Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    let title = s.title;
                    if (i === 0) title = 'Agile Development';
                    if (i === steps.length - 1) title = 'Scalable Architecture';
                    return (
                      <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon />
                        <div className="font-semibold text-base text-blue-900 mb-1 mt-1">{title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/image/pages_img/AI-Driven-Law-GPT.jpg"
                  alt="Development Illustration"
                  loading="lazy"
                  className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>
          {/* Results */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 project-section">
            <div className="flex justify-center md:justify-start">
              <img
                src="/image/pages_img/result.jpg"
                alt="Results and impact illustration"
                loading="lazy"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-left md:text-center flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                {results.map((r, i) => (
                  <div key={i} className="flex flex-col items-center justify-center bg-blue-50 rounded-lg p-4 shadow-sm w-full transition-transform duration-300 hover:scale-105 hover:shadow-blue-200">
                    <div className="text-xl font-bold text-blue-900">{r.stat}</div>
                    <div className="text-gray-700 text-base text-center">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-10 animate-bounce-slow">
            <div className="text-left">
              <h2 className="text-lg md:text-xl whitespace-nowrap font-bold text-blue-900 mb-4">Ready to Transform Healthcare?</h2>
              <a
                href="mailto:surreshbeekhani26@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 text-lg transition-all duration-200 hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
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

export default PatientDiagnosticSystem;
