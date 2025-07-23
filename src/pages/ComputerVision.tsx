
import React, { useState } from "react";

const cvServices = [
  {
    id: 1,
    title: "Image Recognition & Classification",
    description:
      "Automatically identify and classify objects in images for a variety of business applications.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 2,
    title: "Object Detection",
    description:
      "Detect and locate multiple objects in images and video streams in real time.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 3,
    title: "Facial Recognition",
    description:
      "Enable secure authentication and personalized experiences with facial recognition technology.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 4,
    title: "Video Analytics",
    description:
      "Analyze video feeds for security, safety, and operational insights.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 5,
    title: "Optical Character Recognition (OCR)",
    description:
      "Extract text from images and scanned documents with high accuracy.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 6,
    title: "Medical Image Analysis",
    description:
      "Leverage AI to analyze medical images for diagnostics and research.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
];

const cvTabs = [
  {
    id: 1,
    title: "Retail Analytics",
    description:
      "Use computer vision to analyze shopper behavior and optimize store layouts.",
    image: "/image/pages_img/Customer-Segmentation.jpg",
  },
  {
    id: 2,
    title: "Healthcare Imaging",
    description:
      "Improve diagnostics and patient care with AI-powered medical image analysis.",
    image: "/image/pages_img/Diagnostics.jpg",
  },
  {
    id: 3,
    title: "Security & Surveillance",
    description:
      "Enhance security with real-time video analytics and anomaly detection.",
    image: "/image/pages_img/Anomaly-Detection-Access-Logs.jpg",
  },
];

const ComputerVision: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Computer Vision</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Transform images and video into actionable insights with computer vision.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Computer Vision Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvServices.map((service) => (
              <div key={service.id} className="bg-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-lg border border-white/10 hover:scale-105 transition-transform">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Computer Vision Use Cases</h2>
          <div className="flex justify-center mb-8 flex-wrap gap-4">
            {cvTabs.map((tab, idx) => (
              <button
                key={tab.id}
                className={`px-6 py-2 rounded-full font-semibold transition-colors border-2 border-cyan-400 text-white ${currentTab === idx ? "bg-cyan-600" : "bg-transparent hover:bg-cyan-800"}`}
                onClick={() => setCurrentTab(idx)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 rounded-xl p-8 shadow-lg border border-white/10">
            <img
              src={cvTabs[currentTab].image}
              alt={cvTabs[currentTab].title}
              className="w-full md:w-1/3 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{cvTabs[currentTab].title}</h3>
              <p className="text-white/80">{cvTabs[currentTab].description}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-cyan-700 via-blue-800 to-green-700 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see with computer vision?</h2>
          <p className="text-white/80 mb-6">Contact us to discuss your computer vision needs and discover how we can help you turn images into insights.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow hover:bg-cyan-600 transition">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default ComputerVision;
