
import React, { useState } from "react";

const chatGPTServices = [
  {
    id: 1,
    title: "Custom ChatGPT Integration",
    description:
      "Seamlessly integrate ChatGPT into your website, app, or business workflow for enhanced automation and engagement.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 2,
    title: "ChatGPT API Development",
    description:
      "Build robust APIs to connect ChatGPT with your existing systems and platforms.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 3,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline business processes using ChatGPT-powered bots.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 4,
    title: "Conversational AI Assistants",
    description:
      "Deploy intelligent assistants that understand and respond to user queries in real time.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
  {
    id: 5,
    title: "ChatGPT for Customer Support",
    description:
      "Enhance customer support with 24/7 AI-powered chat and ticketing solutions.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4v16m0 0H3" /></svg>
    ),
  },
  {
    id: 6,
    title: "ChatGPT Training & Fine-tuning",
    description:
      "Customize and fine-tune ChatGPT models for your unique business requirements.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M8 11h8M8 7h8" /></svg>
    ),
  },
];

const chatGPTTabs = [
  {
    id: 1,
    title: "Website Chatbots",
    description:
      "Integrate ChatGPT-powered chatbots into your website for instant customer engagement and support.",
    image: "/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg",
  },
  {
    id: 2,
    title: "Business Automation",
    description:
      "Automate business workflows and internal processes with ChatGPT integrations.",
    image: "/image/pages_img/Administrative-Automation.jpg",
  },
  {
    id: 3,
    title: "Omnichannel Messaging",
    description:
      "Connect ChatGPT to multiple messaging platforms for seamless omnichannel communication.",
    image: "/image/pages_img/ChatGPT-Integrations.jpeg",
  },
];

const ChatGPTIntegrations: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Chat GPT Integrations</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Integrate ChatGPT into your workflows for smarter automation and engagement.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our ChatGPT Integration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatGPTServices.map((service) => (
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
          <h2 className="text-2xl font-bold text-white mb-8 text-center">ChatGPT Integration Use Cases</h2>
          <div className="flex justify-center mb-8 flex-wrap gap-4">
            {chatGPTTabs.map((tab, idx) => (
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
              src={chatGPTTabs[currentTab].image}
              alt={chatGPTTabs[currentTab].title}
              className="w-full md:w-1/3 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{chatGPTTabs[currentTab].title}</h3>
              <p className="text-white/80">{chatGPTTabs[currentTab].description}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-cyan-700 via-blue-800 to-green-700 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to integrate ChatGPT?</h2>
          <p className="text-white/80 mb-6">Contact us to discuss your ChatGPT integration needs and discover how we can help you automate and engage smarter.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow hover:bg-cyan-600 transition">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTIntegrations;
