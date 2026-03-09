import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "@/supabaseClient";
import { toast } from "sonner";

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
      const { error } = await supabase.from("case_study_downloads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          job_title: formData.jobTitle,
          company: formData.company,
          case_study: "ai-powered-electronic-health-record",
        },
      ]);

      if (error) {
        console.error(error);
        toast.error("Download started, but we could not save your details.");
      } else {
        toast.success("Thank you! Your details were saved and the PDF download has started.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Download started, but we could not save your details.");
    } finally {
      setIsSubmitting(false);
      window.open(
        "https://drive.google.com/uc?export=download&id=1w12L8u8Po182QWNO2oitNlVtm5npMJgE",
        "_blank"
      );
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
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
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
          <div className="bg-[#0a0435] text-white rounded-2xl shadow-2xl p-8 sm:p-10 relative overflow-hidden">
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
                      className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
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
                      className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
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
                      className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
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
                      className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                      placeholder="CTO, Head of IT..."
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
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    placeholder="Hospital / Health system name"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="ehr-consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-fuchsia-400 focus:ring-fuchsia-400"
                    required
                  />
                  <label htmlFor="ehr-consent" className="text-xs text-indigo-100 leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-fuchsia-300">
                      Privacy Policy
                    </a>{" "}
                    and Terms &amp; Conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/40 transition hover:from-green-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0435] focus:ring-green-400"
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