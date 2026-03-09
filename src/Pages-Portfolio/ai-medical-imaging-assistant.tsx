import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "@/supabaseClient";
import { toast } from "sonner";
import { Send } from "lucide-react";

const AIMedicalImagingAssistant: React.FC = () => {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in at least your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Try saving details in Supabase
      const { error } = await supabase
        .from("case_study_downloads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            job_title: formData.jobTitle || null,
            company: formData.company || null,
            case_study: "ai-medical-imaging-assistant",
          },
        ]);

      if (error) {
        console.error("Supabase Insert Error:", error.message);
        toast.error(
          "Download started, but we could not save your details."
        );
      } else {
        toast.success(
          "Thank you! Your details were saved and the PDF download has started."
        );
      }
    } catch (err: any) {
      console.error("Unexpected Error:", err);
      toast.error("Download started, but we could not save your details.");
    } finally {
      setIsSubmitting(false);
      // Always start download, even if saving fails
      window.open(
        "https://drive.google.com/file/d/1aR7qBfUMhsncq0hpwnf7iQj4o8BwkZ1s/view?usp=sharing",
        "_blank"
      );
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        jobTitle: "",
        company: "",
      });
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ai-medical-imaging-assistant.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h3 className="heading-3 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              AI Medical Imaging Assistant
            </h3>
            <p className="body-medium text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Computer vision models that analyze radiology images to surface anomalies, prioritize worklists, and
              help radiologists deliver faster, more accurate diagnosis.
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
              AI Medical Imaging Assistant
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Our client, a multi-site hospital network, struggled with rising radiology volumes, long report turnaround
              times, and growing pressure on radiologists to catch subtle findings across X-ray, CT, and MRI studies.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We implemented an AI Medical Imaging Assistant that pre-screens studies, highlights suspicious regions,
              and prioritizes high-risk cases in the worklist. The system integrates with existing PACS and EHR
              workflows, provides explainable heatmaps, and supports clinicians without disrupting their reading
              patterns.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>Key outcomes:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed mb-4">
              <li>Reduced average report turnaround time for critical cases</li>
              <li>Improved detection rates for subtle and early-stage anomalies</li>
              <li>Higher radiologist satisfaction with workload distribution and triage</li>
              <li>Better visibility into imaging throughput and case-mix across the network</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              Download the full case study to see how our AI solution augments radiology teams, strengthens clinical
              decision-making, and improves patient outcomes in imaging-heavy service lines.
            </p>
          </div>

          {/* Right form card */}
          <div className="bg-[#0a0435] text-white rounded-2xl shadow-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Download Case Study Now!</h2>
              <p className="text-sm text-indigo-100 mb-6">
                Fill in your details to access the clinical use cases, architecture overview, and real-world outcome
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
                      placeholder="CMO, Head of Radiology..."
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
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    placeholder="Hospital or health system"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="imaging-consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-fuchsia-400 focus:ring-fuchsia-400"
                    required
                  />
                  <label htmlFor="imaging-consent" className="text-xs text-indigo-100 leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-fuchsia-300">
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
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIMedicalImagingAssistant;