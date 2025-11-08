import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Heart, Smartphone, AlertTriangle } from "lucide-react";

const RemotePatientMonitoring: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/remote-patient-monitoring.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight gradient-text-ai neon-text">
              Remote Patient Monitoring
            </h1>
            <p className="body-large ai-text-primary max-w-3xl mx-auto leading-relaxed">
              Wearables and sensors continuously track <span className="gradient-text">vital signs</span> and alert healthcare providers to abnormalities, enabling proactive care and early intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 ai-section">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Monitoring Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <Heart className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Vital Signs Tracking</h3>
                <p className="ai-text-primary">Continuous monitoring of heart rate, blood pressure, oxygen saturation, and other critical vital signs.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <Smartphone className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Smart Devices Integration</h3>
                <p className="ai-text-primary">Seamless integration with wearables, smartphones, and IoT medical devices for comprehensive health monitoring.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <AlertTriangle className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Real-time Alerts</h3>
                <p className="ai-text-primary">Instant notifications to healthcare providers when abnormal readings or emergency situations are detected.</p>
              </div>
            </div>
          </div>

          {/* Monitoring Parameters */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Monitored Parameters</h2>
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-purple/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Cardiovascular Monitoring</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Heart rate and rhythm analysis</li>
                    <li>• Blood pressure tracking</li>
                    <li>• ECG continuous monitoring</li>
                    <li>• Arrhythmia detection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Respiratory Health</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Oxygen saturation (SpO2)</li>
                    <li>• Respiratory rate monitoring</li>
                    <li>• Sleep apnea detection</li>
                    <li>• Lung function assessment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Metabolic Indicators</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Blood glucose levels</li>
                    <li>• Body temperature monitoring</li>
                    <li>• Weight and BMI tracking</li>
                    <li>• Hydration status</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Activity & Wellness</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Physical activity levels</li>
                    <li>• Sleep quality analysis</li>
                    <li>• Stress level monitoring</li>
                    <li>• Medication adherence tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Clinical Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-rose-50 rounded-xl">
                <div className="text-3xl font-bold text-rose-600 mb-2">65%</div>
                <p className="text-gray-700">Reduction in hospital readmissions</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">80%</div>
                <p className="text-gray-700">Earlier intervention rate</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">45%</div>
                <p className="text-gray-700">Lower healthcare costs</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <p className="text-gray-700">Patient satisfaction rate</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Enable Proactive Healthcare</h2>
              <p className="text-lg mb-6 opacity-90">Implement remote monitoring to improve patient outcomes and reduce healthcare costs.</p>
              <a href="/#contact" className="btn-primary bg-white text-rose-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Start Monitoring
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

export default RemotePatientMonitoring;