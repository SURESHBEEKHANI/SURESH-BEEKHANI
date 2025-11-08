import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Wifi, Activity, Database } from "lucide-react";

const HealthcareIoTSmartDevices: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Healthcare-IoT.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Healthcare IoT & Smart Devices
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI processes IoT medical device data for actionable insights and real-time hospital decision-making, optimizing healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Smart Healthcare Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Wifi className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Connected Devices</h3>
                <p className="text-gray-700">Seamless integration of medical IoT devices for continuous patient monitoring and data collection.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Activity className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Analytics</h3>
                <p className="text-gray-700">AI-powered analysis of streaming IoT data for immediate insights and automated decision support.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Database className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-gray-700">Unified platform for aggregating and processing data from diverse medical devices and sensors.</p>
              </div>
            </div>
          </div>

          {/* IoT Applications */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">IoT Healthcare Applications</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Monitoring</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Wearable health sensors and trackers</li>
                    <li>• Smart hospital beds and equipment</li>
                    <li>• Continuous vital sign monitoring</li>
                    <li>• Fall detection and emergency alerts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hospital Operations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Asset tracking and management</li>
                    <li>• Environmental monitoring systems</li>
                    <li>• Smart medication dispensing</li>
                    <li>• Energy optimization and efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Benefits */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Operational Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">40%</div>
                <p className="text-gray-700">Improved efficiency</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                <p className="text-gray-700">Reduced costs</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <p className="text-gray-700">Device uptime</p>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-xl">
                <div className="text-3xl font-bold text-sky-600 mb-2">24/7</div>
                <p className="text-gray-700">Continuous monitoring</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Connect Your Healthcare Ecosystem</h2>
              <p className="text-lg mb-6 opacity-90">Implement smart IoT solutions to optimize healthcare operations and improve patient outcomes.</p>
              <a href="/#contact" className="btn-primary bg-white text-cyan-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Learn More & Connect Devices
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

export default HealthcareIoTSmartDevices;