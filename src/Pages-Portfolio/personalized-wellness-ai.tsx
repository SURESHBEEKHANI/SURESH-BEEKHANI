import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Brain, Leaf, Smile, Download } from "lucide-react";

const PersonalizedWellnessAI: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/wellness-personalized.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Personalized Wellness AI
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI-driven meditation, stress management, and wellness programs tailored to individual patient needs, promoting holistic health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Wellness Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Brain className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Support</h3>
                <p className="text-gray-700">AI-powered meditation guides, stress reduction techniques, and mindfulness programs personalized to individual needs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Leaf className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Optimization</h3>
                <p className="text-gray-700">Personalized recommendations for nutrition, exercise, sleep, and daily habits based on individual health data.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Smile className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emotional Well-being</h3>
                <p className="text-gray-700">Mood tracking, emotional intelligence development, and personalized interventions for improved mental health.</p>
              </div>
            </div>
          </div>

          {/* Wellness Programs */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">AI-Powered Wellness Programs</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stress Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Personalized meditation sessions</li>
                    <li>• Breathing exercises and techniques</li>
                    <li>• Stress level monitoring and alerts</li>
                    <li>• Progressive muscle relaxation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Optimization</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Sleep pattern analysis and improvement</li>
                    <li>• Personalized bedtime routines</li>
                    <li>• Sleep hygiene recommendations</li>
                    <li>• Circadian rhythm optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition & Fitness</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Personalized meal planning</li>
                    <li>• Exercise routines based on fitness level</li>
                    <li>• Calorie and nutrient tracking</li>
                    <li>• Hydration monitoring and reminders</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Health Support</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Mood tracking and analysis</li>
                    <li>• Cognitive behavioral therapy exercises</li>
                    <li>• Mindfulness and gratitude practices</li>
                    <li>• Social connection recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Outcomes */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Wellness Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <p className="text-gray-700">Stress reduction</p>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                <p className="text-gray-700">Improved sleep quality</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-600 mb-2">60%</div>
                <p className="text-gray-700">Better mood scores</p>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">90%</div>
                <p className="text-gray-700">User engagement rate</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Transform Wellness with AI</h2>
              <p className="text-lg mb-6 opacity-90">Implement personalized wellness programs to improve patient mental health and overall well-being.</p>
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

export default PersonalizedWellnessAI;