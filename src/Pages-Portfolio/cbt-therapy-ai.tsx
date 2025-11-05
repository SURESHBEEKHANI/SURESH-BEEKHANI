import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Brain, TrendingUp, Users } from "lucide-react";

const CBTTherapyAI: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/cbt-therapy.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              CBT Therapy AI
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI-powered Cognitive Behavioral Therapy applications guide users through mental health exercises and track progress, making therapy accessible and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Therapy Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Brain className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guided Therapy Sessions</h3>
                <p className="text-gray-700">AI-guided CBT sessions with personalized exercises, thought challenging, and behavioral interventions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Tracking</h3>
                <p className="text-gray-700">Comprehensive progress monitoring with mood tracking, goal setting, and therapeutic outcome measurement.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Care</h3>
                <p className="text-gray-700">24/7 access to therapy tools, making mental health support available anytime, anywhere.</p>
              </div>
            </div>
          </div>

          {/* CBT Modules */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">CBT Treatment Modules</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cognitive Restructuring</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Thought record exercises</li>
                    <li>• Cognitive distortion identification</li>
                    <li>• Evidence-based thinking patterns</li>
                    <li>• Balanced thought development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Behavioral Activation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Activity scheduling and planning</li>
                    <li>• Pleasant activity identification</li>
                    <li>• Goal setting and achievement</li>
                    <li>• Behavioral experiment design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Anxiety Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Exposure therapy protocols</li>
                    <li>• Relaxation techniques training</li>
                    <li>• Panic attack management</li>
                    <li>• Systematic desensitization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Depression Treatment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Mood monitoring and tracking</li>
                    <li>• Negative thought challenging</li>
                    <li>• Social skills development</li>
                    <li>• Relapse prevention strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Outcomes */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Treatment Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600 mb-2">75%</div>
                <p className="text-gray-700">Symptom improvement</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <p className="text-gray-700">Treatment completion rate</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                <p className="text-gray-700">Reduced therapy costs</p>
              </div>
              <div className="text-center p-6 bg-violet-50 rounded-xl">
                <div className="text-3xl font-bold text-violet-600 mb-2">90%</div>
                <p className="text-gray-700">User satisfaction</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Democratize Mental Healthcare</h2>
              <p className="text-lg mb-6 opacity-90">Make evidence-based CBT therapy accessible to everyone with our AI-powered platform.</p>
              <a href="/#contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Start Therapy Program
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CBTTherapyAI;