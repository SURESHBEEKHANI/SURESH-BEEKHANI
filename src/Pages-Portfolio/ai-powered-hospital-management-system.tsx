import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { saveCaseStudyLead } from "@/lib/saveCaseStudyLead";

const AIPoweredHospitalManagementSystem: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in at least your name and email.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      window.open(
        "https://drive.google.com/uc?export=download&id=1DgTw-0RJx39eK-dGp13UQgrgqKpG5m7w",
        "_blank"
      );

      const result = await saveCaseStudyLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        jobTitle: formData.jobTitle,
        company: formData.company,
        caseStudy: "ai-powered-hospital-management-system",
      });

      if (result.savedInDatabase) {
        toast.success("Download started. Details saved.");
      } else if (result.queuedLocally) {
        toast.info("Download started. Details not saved.");
      } else {
        toast.error("Download started. Save failed.");
        setError("Download started. Save failed.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ai-contract-analysis-system.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h3 className="heading-3 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              AI-Powered Hospital Management System
            </h3>
            <p className="body-medium text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Unified hospital operations platform with AI-driven bed management, staff scheduling, supply chain
              optimization, and real-time operational insights for smarter facility management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8cbd00] mb-3">
              Case Study
            </p>
            <h1 className="heading-2 text-gray-900 mb-6 leading-tight">
              AI-Powered Hospital Management System
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Our client, a multi-site hospital network, faced fragmented operational workflows, inefficient bed
              utilization, manual staff scheduling, and limited visibility into supply chain and billing performance
              across departments.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We implemented an AI-Powered Hospital Management System that centralizes bed allocation, staff rosters,
              supply inventory, and revenue-cycle metrics on a single platform. Predictive models forecast patient
              discharges, flag staffing gaps, and surface operational bottlenecks before they impact patient throughput.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>Key outcomes:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed mb-4">
              <li>35% lower ER boarding times via predictive discharge planning</li>
              <li>50% faster staff scheduling with AI shift optimization</li>
              <li>30% less supply waste through demand forecasting and auto-reorders</li>
              <li>25% quicker reimbursements with real-time billing and coding checks</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              Download the full case study to explore the implementation roadmap, platform architecture, and measurable
              results—how our AI solution unified hospital operations, improved cross-department coordination, and
              helped leadership run multi-site facilities with greater speed, visibility, and control.
            </p>
          </div>

          <div className="bg-slate-950 text-white rounded-none shadow-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Download Case Study Now!</h2>
              <p className="text-sm text-indigo-100 mb-6">
                Fill in your details to access the implementation story, architecture overview, and real-world outcome
                metrics.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-indigo-100 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-none border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-#B6FF00"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-indigo-100 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-none border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-indigo-100 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-none border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-indigo-100 mb-1">Job Title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full rounded-none border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="COO, Facility Director, CIO..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-indigo-100 mb-1">Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Hospital or health system"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="hospital-mgmt-consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-secondary focus:ring-primary"
                    required
                  />
                  <label htmlFor="hospital-mgmt-consent" className="text-xs text-indigo-100 leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-[#8cbd00]">
                      Privacy Policy
                    </a>{" "}
                    and Terms & Conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full group flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Download Now
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {error && (
                  <div className="mt-4 text-center text-red-500">
                    <p>{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIPoweredHospitalManagementSystem;


