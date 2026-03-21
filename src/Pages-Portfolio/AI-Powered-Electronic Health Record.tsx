import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { saveCaseStudyLead } from "@/lib/saveCaseStudyLead";

const AIPoweredElectronicHealthRecord: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in at least your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      window.open(
        "https://drive.google.com/uc?export=download&id=1w12L8u8Po182QWNO2oitNlVtm5npMJgE",
        "_blank"
      );

      const result = await saveCaseStudyLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        jobTitle: formData.jobTitle,
        company: formData.company,
        caseStudy: "ai-powered-electronic-health-record",
      });

      if (result.savedInDatabase) {
        toast.success("Download started. Details saved.");
      } else if (result.queuedLocally) {
        toast.info("Download started. Details not saved.");
      } else {
        toast.error("Download started. Save failed.");
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
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ai-fraud-detection.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h3 className="heading-3 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              AI-Powered Electronic Health Record
            </h3>
            <p className="body-medium text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Streamlining healthcare with AI-driven insights, predictive analytics, and intelligent workflow automation
              for better patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study + Form Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#f01eff] mb-3">
              Case Study
            </p>
            <h1 className="heading-2 text-gray-900 mb-6 leading-tight">
              AI-Powered EHR
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Our client, a multi-specialty hospital network, struggled with fragmented records across departments,
              manual data entry, and slow access to critical patient information during peak hours.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We implemented an AI-powered Electronic Health Record platform that unifies clinical, imaging, and
              administrative data into a single intelligent workspace. The system surfaces real-time insights, flags
              high-risk patients, and automates routine workflows such as follow-ups and discharge summaries.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Download the full case study to see how we reduced documentation time for clinicians, improved care team
              collaboration, and enabled leadership to make data-driven decisions using predictive analytics.
            </p>
          </div>

          {/* Right form card */}
          <div className="bg-[#0a0435] text-white rounded-none shadow-2xl p-8 sm:p-10 relative overflow-hidden border border-white/5">
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Download  Case Study Now!
              </h2>
              <p className="text-sm text-indigo-100 mb-6">
                Fill in your details to access the in-depth implementation story, architecture overview, and outcome
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
                      className="w-full rounded-none border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#f01eff] hover:border-[#f01eff]/50 transition-colors"
                      placeholder="Enter your name"
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
                      placeholder="CTO, Head of IT.."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-indigo-100 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Hospital / Health system name"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="ehr-consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-secondary focus:ring-primary"
                    required
                  />
                  <label htmlFor="ehr-consent" className="text-xs text-indigo-100 leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-[#f01eff]">
                      Privacy Policy
                    </a>{" "}
                    and Terms &amp; Conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full group flex items-center justify-center mt-4"
                >
                  {isSubmitting ? "Processing..." : "Download Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIPoweredElectronicHealthRecord;