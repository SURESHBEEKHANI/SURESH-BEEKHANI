// src/components/Contact.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient'; // Supabase client
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';

const HeroSection = () => (
  <section className="relative w-full min-h-[40vh] flex items-center justify-start overflow-hidden bg-[#0a0435]">
    {/* Ambient Blurs to match footer */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse" />
    <div className="relative z-10 max-w-4xl px-4 sm:px-6 ml-[10%] sm:ml-[15%] lg:ml-[20%] pt-24 pb-12 sm:pt-32 sm:pb-20 text-left text-white">
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
          Contact Us
        </h1>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
        We appreciate your interest in services. Please fill out the form so <br />we can provide you with the right help and support.
      </p>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    helpType: '',
    industry: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: '',
    newsletter: false,
    terms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.firstName.trim()) errors.push('First Name is required');
    if (!formData.lastName.trim()) errors.push('Last Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.phone.trim()) errors.push('Phone is required');
    if (!formData.helpType) errors.push('Please select how we can help you');
    if (!formData.industry) errors.push('Please select your industry');
    if (!formData.terms) errors.push('You must agree to the Privacy Policy and Terms and Conditions');

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert form data into Supabase table "Contact Us"
      // Note: Using the exact name from the screenshot
      const { error } = await supabase.from('Contact Us').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.helpType,
          message: formData.message,
          help_topic: formData.helpType,
          industry: formData.industry,
          country: formData.country,
          company_organization: formData.company,
          newsletter_signup: formData.newsletter,
          agree_terms: formData.terms
        }
      ]);

      if (error) {
        console.error('Supabase Error:', error);
        throw error;
      }

      // Show success message
      toast.success('Message sent successfully!', {
        description: 'Your message has been saved for our team’s review.',
        duration: 5000,
      });

      setIsSubmitted(true);

      // Reset form fields
      setFormData({
        helpType: '',
        industry: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        message: '',
        newsletter: false,
        terms: false
      });

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <BackgroundAnimation />
      <Navbar />

      <HeroSection />

      <main className="flex-grow relative z-10">
        <section id="contact" className="py-12 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="relative rounded-3xl p-8 sm:p-16 text-center space-y-8 animate-in fade-in zoom-in duration-500 overflow-hidden shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #a855f7 50%, #ec4899 100%)' }}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">
                      Thank You for Your Interest!
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-sm font-medium">
                      We've received your message and our team will get back to you within 24 hours. We're excited to help you transform your ideas into intelligent AI solutions.
                    </p>
                  </div>
                  <div className="pt-10">
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="px-8 py-6 rounded-none border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#ff0ea3] transition-all font-bold backdrop-blur-sm border-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* How can we help you */}
                  <div className="space-y-2">
                    <Label htmlFor="helpType" className="text-sm font-semibold text-gray-700">How can we help you*</Label>
                    <select
                      id="helpType"
                      name="helpType"
                      value={formData.helpType}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all cursor-pointer appearance-none"
                      required
                    >
                      <option value="" disabled>Please Select One</option>
                      <option value="ai-development">AI Development</option>
                      <option value="chatbot-development">Chatbot Development</option>
                      <option value="chatgpt-integration">ChatGPT Integration</option>
                      <option value="machine-deep-learning">Machine & Deep Learning</option>
                      <option value="computer-vision">Computer Vision</option>
                      <option value="predictive-modeling">Predictive Modeling</option>
                      <option value="nlp">Natural Language Processing</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Select your Industry */}
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-sm font-semibold text-gray-700">Select your Industry*</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all cursor-pointer appearance-none"
                      required
                    >
                      <option value="" disabled>Please Select One</option>
                      <option value="fintech">FinTech</option>
                      <option value="healthtech">HealthTech</option>
                      <option value="retailtech">RetailTech</option>
                      <option value="edtech">EdTech</option>
                      <option value="fittech">FitTech</option>
                      <option value="legaltech">LegalTech</option>
                      <option value="wealthtech">WealthTech</option>
                      <option value="it-software">IT & Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name*</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="h-12 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all rounded-none"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name*</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="h-12 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all rounded-none"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="h-12 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all rounded-none"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="h-12 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all rounded-none"
                      required
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-semibold text-gray-700">Country*</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Country"
                      className="h-12 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all rounded-none"
                      required
                    />
                  </div>

                  {/* Company/Organization */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-700">Company/Organization*</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="h-12 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all rounded-none"
                      required
                    /></div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="min-h-[150px] border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all resize-none px-4 py-3 rounded-none"
                    required
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
                      I agree to sign up for the newsletter
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      I agree to the <a href="/privacy-policy" target="_blank" className="font-bold hover:underline" style={{ background: 'linear-gradient(135deg, #f01eff 0%, #f755d7 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Privacy policy</a> and Terms and conditions.*
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-center sm:justify-start">
                  <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-12 py-7 text-sm font-bold text-white shadow-lg hover:shadow-[#ff0ea3]/30 transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-none"
                  style={{ background: '#ff0ea3' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-none h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Message'
                  )}
                </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
