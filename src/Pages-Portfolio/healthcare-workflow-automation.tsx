import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Workflow, Clock, FileText } from "lucide-react";

const HealthcareWorkflowAutomation: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Healthcare-Workflow.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Healthcare Workflow Automation
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI automates administrative tasks, patient scheduling, and documentation to reduce staff burden and improve operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Automation Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Workflow className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Process Automation</h3>
                <p className="text-gray-700">Streamline complex healthcare workflows with intelligent automation and decision support systems.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Clock className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduling Optimization</h3>
                <p className="text-gray-700">AI-powered scheduling systems optimize appointments, staff allocation, and resource utilization.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <FileText className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation Automation</h3>
                <p className="text-gray-700">Automated clinical documentation and reporting to reduce administrative burden on healthcare staff.</p>
              </div>
            </div>
          </div>

          {/* Automation Areas */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Key Automation Areas</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Tasks</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Patient registration and check-in</li>
                    <li>• Insurance verification and billing</li>
                    <li>• Appointment scheduling and reminders</li>
                    <li>• Medical record management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Workflows</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Clinical decision support systems</li>
                    <li>• Medication management and alerts</li>
                    <li>• Lab result processing and routing</li>
                    <li>• Discharge planning automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Efficiency Gains */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Efficiency Improvements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">70%</div>
                <p className="text-gray-700">Reduced admin time</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-600 mb-2">50%</div>
                <p className="text-gray-700">Faster processing</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="text-3xl font-bold text-yellow-600 mb-2">85%</div>
                <p className="text-gray-700">Accuracy improvement</p>
              </div>
              <div className="text-center p-6 bg-lime-50 rounded-xl">
                <div className="text-3xl font-bold text-lime-600 mb-2">60%</div>
                <p className="text-gray-700">Cost reduction</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Streamline Healthcare Operations</h2>
              <p className="text-lg mb-6 opacity-90">Automate workflows to reduce administrative burden and focus on patient care.</p>
              <a href="/#contact" className="btn-primary bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Automate Workflows
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

export default HealthcareWorkflowAutomation;