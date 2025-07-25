import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

// Icon components for features (move above features array)
const ItineraryIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/></svg>
);
const CloudIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/></svg>
);
const UserIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
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

// Updated features array with professional icons
const features = [
  {
    title: 'AI Itinerary Builder',
    icon: ItineraryIcon,
  },
  {
    title: 'Live Data Integration',
    icon: CloudIcon,
  },
  {
    title: 'Personalized Suggestions',
    icon: UserIcon,
  },
  {
    title: 'Seamless Booking & Sync',
    icon: CalendarIcon,
  },
  {
    title: 'Mobile-First Experience',
    icon: DeviceIcon,
  },
  {
    title: 'Modern Tech Stack',
    icon: CodeIcon,
  },
];

const results = [
  { icon: '📈', stat: '35%', desc: 'Increase in user engagement' },
  { icon: '💳', stat: '25%', desc: 'Higher booking conversion rate' },
  { icon: '🌟', stat: 'High', desc: 'User satisfaction scores' },
  { icon: '🌍', stat: 'Global', desc: 'Scalable and adaptable architecture' },
];

// Add icon and iconType to steps for visual distinction
// Professional icons for deployment stages
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
const PrivacyIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const SustainableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/></svg>
);

// Add a professional ShieldIcon for GDPR card
const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Updated steps array to only include number and title
const steps = [
  {
    number: 1,
    title: 'Agile Methodology',
    color: 'bg-blue-500',
    icon: AgileIcon,
  },
  {
    number: 2,
    title: 'User Testing & Feedback Loops',
    color: 'bg-yellow-400',
    icon: FeedbackIcon,
  },
  {
    number: 3,
    title: 'Integration of Third-Party APIs',
    color: 'bg-green-500',
    icon: ApiIcon,
  },
  {
    number: 4,
    title: 'Robust Recommendation Engine',
    color: 'bg-purple-500',
    icon: SmartIcon,
  },
  {
    number: 5,
    title: 'GDPR-Compliant Data Handling',
    color: 'bg-orange-500',
    icon: ShieldIcon,
  },
  {
    number: 6,
    title: 'Sustainable Architecture',
    color: 'bg-red-500',
    icon: SustainableIcon,
  },
];

// Professional color palette for segments
const segmentColors = [
  "#1976d2", // blue
  "#424242", // dark gray
  "#388e3c", // green
  "#8e24aa", // purple
  "#fbc02d", // yellow
  "#d32f2f", // red
];

// Icon components
const GearIcon = ({ className = "w-10 h-10 mx-auto mb-2", color = "#a259f7" }) => (
  <svg className={className} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 5.09V5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const StarIcon = ({ className = "w-10 h-10 mx-auto mb-2", color = "#a259f7" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const cardImages = {
  challenge: '/image/pages_img/Abandoned-Cart-Recovery.png',
  solution: '/image/pages_img/AI-in-E-Commerce.png',
  features: '/image/pages_img/Personalized-Travel-Assistant.webp',
  implementation: '/image/pages_img/Workflow-Optimization.jpg',
  results: '/image/pages_img/Predictive-Analytics-Services.jpg',
  cta: '/image/pages_img/Personalized-Travel-Assistant.webp',
};

const PersonalizedTravelAssistant = () => {
  // Add state for collapsible info box
  const [showInfo, setShowInfo] = useState(true);
  // For fade effect and read more
  const [showFullInfo, setShowFullInfo] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-sky-400 to-pink-200 animate-fade-in mt-16">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/image/pages_img/AI-Travel-Assistant-bg.jpg"
            alt="AI Travel Assistant background"
            style={{ filter: 'brightness(0.6) blur(1px)' }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/70 via-sky-400/60 to-pink-200/60"></div>
        </div>
        <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 w-full text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-left">AI Travel Assistant</h1>
          <p className="text-base md:text-lg font-normal text-gray-100 mb-4 max-w-2xl animate-fade-in text-left">
            AI Trip Planner creates real-time, personalized itineraries. Plan smarter trips based on your preferences and live data.
          </p>
          <div className="flex gap-4 mt-6">
            {/* Removed 'Explore Features' and 'Contact Us' buttons */}
          </div>
        </div>
      </section>
      {/* What Is AI Travel Assistant Section */}
      {/* Styled Info Box Like Screenshot */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-12">
        <div className="flex items-center mb-2">
        
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">AI Travel Assistant for Better Travel Planning</h2>
        </div>
        <div className="relative">
          <div className={`text-base md:text-lg text-gray-700 max-w-6xl text-left md:text-justify transition-all duration-300 ${showFullInfo ? '' : 'line-clamp-5'}`}
               style={!showFullInfo ? { WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)' } : {}}>
            <p>
              AI Travel Assistant is a intelligent digital tool designed to help travelers plan and manage trips with personalized recommendations and real-time updates. Unlike traditional travel apps, it understands your unique preferences, saves hours of manual research, and delivers a smoother, more tailored travel experience. 
            </p>
            <p className="mt-3">
              Acting as a centralized, cloud-based platform, the AI Travel Assistant guides users through every stage of the journey from inspiration to return adapting to your needs whether your a solo traveler, family vacationer, or business professional.
            </p>
            <p className="mt-3">
              Its core strength lies in reducing planning time, increasing accuracy, and providing intelligent, on demand solutions. It eliminates the hassle of switching between multiple apps by curating the best options based on your preferences, live travel data, and predictive algorithms.
            </p>
            <h3 className="font-semibold text-blue-800 mt-4 mb-2">Key Benefits</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><b>Personalized Planning:</b> Learns from your travel history, budget, and preferences to recommend ideal flights, accommodations, and local experiences.</li>
              <li><b>24/7 Real-Time Support:</b> Stay informed with instant updates on delays, weather, gate changes, and more anytime, anywhere.</li>
              <li><b>Smart Itinerary Builder:</b> Automatically generates detailed daily plans based on your travel goals complete with maps, bookings, and tips.</li>
              <li><b>Cost Efficiency:</b> Tracks pricing trends, compares deals, and suggests the best time to book maximizing value.</li>
              <li><b>Device & Calendar Sync:</b> Integrates with your digital calendars and smart devices for seamless travel coordination.</li>
              <li><b>Eco-Conscious Travel:</b> Suggests sustainable flight and stay options, promoting greener choices.</li>
            </ul>
            <h3 className="font-semibold text-blue-800 mt-4 mb-2">Growing Demand</h3>
            <p className="mb-3">The global AI travel technology market is forecasted to reach $13.38 billion by 2030, driven by rising demand for smarter, faster, and more personalized travel experiences.</p>
            <h3 className="font-semibold text-blue-800 mt-4 mb-2">Beyond Planning – A True Travel Companion</h3>
            <p>More than just a planning tool, an AI Travel Assistant acts as a digital travel partner offering translation help, cultural insights, emergency contacts, and destination specific advisories. It reduces stress, improves preparedness, and enhances the overall experience.</p>
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
      {/* Challenge - Two Column Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-4 py-12 md:py-16 gap-10 project-section">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What is AI Travel Assistant?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-2">
          AI Travel Assistant a smart tool that plans and manages your trips with personalized suggestions and live updates saving you time making travel easier.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/pages_img/What-AI-Travel-Assistant.png"
            alt="What is AI Travel Assistant illustration"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      {/* Challenge - Two Column Section */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Problems?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Most travel tools offer generic suggestions, ignoring your preferences and real-time changes. Travelers waste hours researching, often missing out on unique experiences and facing avoidable disruptions.
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
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Solution</h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                An AI Travel Assistant offers personalized trip planning, real-time updates, and smart recommendations—saving time, reducing stress, and making travel smoother and more efficient.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered travel solution illustration"
                loading="lazy"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>
          {/* Features & Technologies */}
          <section className="max-w-6xl mx-auto px-4 py-12 project-section">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center w-full">Key Features</h2>
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
                        <div className="font-semibold text-base text-blue-900 mb-1 mt-1">{f.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Development Section (updated, styled like Key Features) */}
          <section className="max-w-6xl mx-auto px-4 py-12 project-section">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              {/* Left: Development Grid */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Development Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    // Remove checkmark for first and last, keep for others
                    let title = s.title;
                    if (i === 0) title = 'Agile Methodology';
                    if (i === steps.length - 1) title = 'Sustainable Architecture';
                    return (
                      <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon />
                        <div className="font-semibold text-base text-blue-900 mb-1 mt-1">{title}</div>
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
            {/* Left: Text */}
            <div className="text-left">
              <h2 className="text-lg md:text-xl whitespace-nowrap font-bold text-blue-900 mb-4">Ready to Transform Your Travel Experience?</h2>
              <a
                href="mailto:surreshbeekhani26@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 text-lg transition-all duration-200 hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
            {/* Right: (optional image or content) */}
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

export default PersonalizedTravelAssistant;