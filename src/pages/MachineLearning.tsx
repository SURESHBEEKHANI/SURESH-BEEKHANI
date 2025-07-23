
import React, { useState } from "react";

const mlServices = [
  {
    id: 1,
    title: "Custom ML Model Development",
    description:
      "Design and deploy machine learning models tailored to your business challenges and data.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 2,
    title: "Model Training & Optimization",
    description:
      "Train, validate, and optimize ML models for maximum accuracy and performance.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 3,
    title: "ML Model Deployment",
    description:
      "Deploy machine learning models to cloud, edge, or on-premise environments.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 4,
    title: "Data Preparation & Feature Engineering",
    description:
      "Clean, transform, and engineer features from raw data for optimal model performance.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 5,
    title: "ML Model Monitoring & Maintenance",
    description:
      "Monitor deployed models and ensure ongoing accuracy and reliability.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 6,
    title: "Automated Machine Learning (AutoML)",
    description:
      "Accelerate model development with automated machine learning pipelines.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
];

const mlTabs = [
  {
    id: 1,
    title: "Predictive Analytics",
    description:
      "Use machine learning to forecast trends, demand, and outcomes for smarter business decisions.",
    image: "/image/pages_img/Predictive-Modelling.jpg",
  },
  {
    id: 2,
    title: "Recommendation Systems",
    description:
      "Deliver personalized recommendations to users with collaborative and content-based filtering.",
    image: "/image/pages_img/Content-Recommendation.jpg",
  },
  {
    id: 3,
    title: "Anomaly Detection",
    description:
      "Detect outliers and prevent fraud or failures with advanced anomaly detection models.",
    image: "/image/pages_img/Anomaly-Detection.jpg",
  },
];

const MachineLearning: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Machine Learning</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Empower your business with custom machine learning models and solutions.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Machine Learning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlServices.map((service) => (
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
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Machine Learning Use Cases</h2>
          <div className="flex justify-center mb-8 flex-wrap gap-4">
            {mlTabs.map((tab, idx) => (
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
              src={mlTabs[currentTab].image}
              alt={mlTabs[currentTab].title}
              className="w-full md:w-1/3 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{mlTabs[currentTab].title}</h3>
              <p className="text-white/80">{mlTabs[currentTab].description}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-cyan-700 via-blue-800 to-green-700 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build with machine learning?</h2>
          <p className="text-white/80 mb-6">Contact us to discuss your machine learning needs and discover how we can help you innovate with AI.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow hover:bg-cyan-600 transition">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
