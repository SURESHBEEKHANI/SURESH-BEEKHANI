import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "@/supabaseClient";
import { toast } from "sonner";
import { Send } from "lucide-react";

const AINutritionPlanner: React.FC = () => {
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
    setError("");

    try {
      const { error: insertError } = await supabase.from("case_study_downloads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          job_title: formData.jobTitle,
          company: formData.company,
          case_study: "ai-nutrition-planner",
        },
      ]);

      if (insertError) {
        console.error("Supabase Insert Error:", insertError);
        toast.error("Download started, but we could not save your details.");
        setError(insertError.message || "Something went wrong");
      } else {
        toast.success("Thank you! Your details were saved and the PDF download has started.");
        window.open(
          "https://drive.google.com/uc?export=download&id=YOUR_NUTRITION_PLANNER_CASE_STUDY_ID",
          "_blank"
        );
      }
    } catch (err: any) {
      console.error("Unexpected Error:", err);
      toast.error("Download started, but we could not save your details.");
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ai-nutrition-planner.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h3 className="heading-3 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              AI Nutrition Planner
            </h3>
            <p className="body-medium text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Hyper‑personalized meal planning that respects preferences, allergies, culture, and health goals while
              staying practical for everyday life.
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
              AI-Powered Nutrition Planner
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Our client, a digital health and wellness platform, wanted to move beyond generic meal plans and offer
              truly personalized nutrition guidance that adapts to user goals, preferences, and health conditions.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We implemented an AI Nutrition Planner that combines behavioral data, dietary preferences, and clinical
              constraints to generate weekly meal plans, recipes, and grocery lists. The system continuously learns from
              adherence and progress, adjusting recommendations to keep users engaged and on track.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>Key outcomes:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed mb-4">
              <li>Increased user engagement and retention in the wellness app</li>
              <li>Higher adherence to nutrition plans over multi-week programs</li>
              <li>Ability to support diverse health goals, from weight management to chronic disease support</li>
              <li>New revenue opportunities through premium personalized nutrition offerings</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              Download the full case study to see how AI-driven nutrition planning can power differentiated wellness
              experiences and measurable user outcomes.
            </p>
          </div>

          {/* Right form card */}
          <div className="bg-[#0a0435] text-white rounded-2xl shadow-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Download Case Study Now!
              </h2>
              <p className="text-sm text-indigo-100 mb-6">
                Fill in your details to access the full implementation story, personalization logic, and engagement
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
                    <label className="block text-xs font-medium text-indigo-100 mb-1">Role</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                      placeholder="Product lead, Founder..."
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
                    placeholder="Health / wellness brand"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="nutrition-consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-fuchsia-400 focus:ring-fuchsia-400"
                    required
                  />
                  <label htmlFor="nutrition-consent" className="text-xs text-indigo-100 leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-fuchsia-300">
                      Privacy Policy
                    </a>{" "}
                    and Terms &amp; Conditions.
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
                    <p>Something went wrong</p>
                    <p>Please try refreshing the page.</p>
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

export default AINutritionPlanner;

