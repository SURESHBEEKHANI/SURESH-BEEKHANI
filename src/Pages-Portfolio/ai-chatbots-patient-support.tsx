import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, MessageCircle, Clock, Users, Download } from "lucide-react";

const AIChatbotsPatientSupport: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Patient-Support-Chatbot.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              AI Chatbots for Patient Support
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Intelligent AI chatbots handle inquiries, schedule appointments, and provide 24/7 patient assistance, improving healthcare accessibility and patient satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">System Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Conversations</h3>
                <p className="text-gray-700">Natural language processing enables human-like conversations for patient inquiries and support needs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Clock className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
                <p className="text-gray-700">Round-the-clock patient support ensuring help is always available when patients need it most.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Users className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-700">Tailored responses based on patient history, preferences, and specific healthcare needs.</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Engagement</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Automated appointment scheduling and reminders</li>
                    <li>• Prescription refill requests and tracking</li>
                    <li>• Symptom checking and triage guidance</li>
                    <li>• Multi-language support for diverse populations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Integration</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• EHR system integration for patient data access</li>
                    <li>• Insurance verification and billing inquiries</li>
                    <li>• Lab results and test report delivery</li>
                    <li>• Post-discharge follow-up and care coordination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Assistance</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• FAQ handling and general health information</li>
                    <li>• Medication reminders and adherence tracking</li>
                    <li>• Provider directory and specialist referrals</li>
                    <li>• Health education and wellness tips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Patient sentiment analysis and feedback</li>
                    <li>• Common inquiry pattern identification</li>
                    <li>• Service quality monitoring and improvement</li>
                    <li>• Escalation to human agents when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <p className="text-gray-700">Reduction in call volume</p>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">90%</div>
                <p className="text-gray-700">Patient satisfaction rate</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-600 mb-2">65%</div>
                <p className="text-gray-700">Lower operational costs</p>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-xl">
                <div className="text-3xl font-bold text-sky-600 mb-2">24/7</div>
                <p className="text-gray-700">Continuous availability</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Enhance Patient Support?</h2>
              <p className="text-lg mb-6 opacity-90">Deploy intelligent AI chatbots to provide 24/7 patient assistance and improve healthcare accessibility.</p>
              <a href="/#contact" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 inline-flex items-center gap-2 font-bold shadow-xl px-8 py-4 text-lg">
                <Download className="h-5 w-5" />
                Download Case Study
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIChatbotsPatientSupport;