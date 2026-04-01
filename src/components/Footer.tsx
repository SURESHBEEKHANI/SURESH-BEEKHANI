import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MapPin, Mail, Phone, Youtube, Instagram, Facebook, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = newsletterEmail.trim();

    if (!email) {
      toast.error('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsNewsletterSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([{ email }]);

      if (error) {
        const code = (error as { code?: string } | null)?.code;

        if (code === '23505') {
          toast.success('You’re already subscribed!', {
            description: 'Thanks — we’ve got you.',
          });
          setNewsletterEmail('');
          return;
        }

        throw error;
      }

      toast.success('Subscribed successfully!', {
        description: 'You will receive our latest updates.',
      });

      setNewsletterEmail('');
      setIsSubscribed(true);

    } catch (err) {
      console.error(err);
      toast.error('Could not subscribe right now. Please try again.');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={12} />, url: 'https://www.facebook.com/VelnixSolutions', color: 'from-blue-500 to-blue-700' },
    { name: 'LinkedIn', icon: <Linkedin size={12} />, url: 'https://www.linkedin.com/company/velnixsolutions/', color: 'from-blue-600 to-blue-800' },
    { name: 'X', icon: <Twitter size={12} />, url: 'https://x.com/VelnixSolutions', color: 'from-black to-gray-800' },
    { name: 'Instagram', icon: <Instagram size={12} />, url: 'https://www.instagram.com/velnixsolutions/', color: 'from-pink-500 to-purple-600' },
  ];

  return (
    <footer className="relative bg-[#020010] text-white pt-24 pb-8 overflow-hidden">
      {/* Premium Multi-Layer Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Base Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6a00ff]/10 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/2 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ec4899]/10 blur-[140px] rounded-full -translate-x-1/3 translate-y-1/2 opacity-60" />

        {/* Subtle Tertiary Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#3b82f6]/05 blur-[160px] opacity-40" />

        {/* Top Edge Highlight for Section Separation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0ea3]/30 to-transparent" />

        {/* High-End Grain & Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.04] mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4"
            >
              <a href="/#home" className="group transition-transform hover:scale-105 duration-300">
                <img
                  src="/image/logo/Neurovex.png"
                  alt="Neurovex"
                  className="h-16 sm:h-20 w-auto object-contain brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                />
              </a>
              <p className="text-white/60 text-lg max-w-sm leading-relaxed font-light">
                Engineering world-class AI solutions that bridge the gap between imagination and industrial reality.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${social.color} shadow-lg transition-shadow hover:shadow-white/5 overflow-hidden relative group`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="scale-125">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links / Mobile Accordion Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FooterAccordion title="Our Expertise">
              <ul className="space-y-4">
                {[
                  { label: "AI Development", href: "/ai-development" },
                  { label: "AI Automation", href: "/ai-automation" },
                  { label: "Web Intelligence", href: "/web-development" },
                  { label: "App ecosystems", href: "/app-development" },
                  { label: "DevOps Scaling", href: "/devops" },
                  { label: "Custom Architectures", href: "/custom-software-development" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/50 hover:text-[#ff0ea3] hover:pl-2 transition-all flex items-center gap-2 group decoration-transparent">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff0ea3]/40 group-hover:bg-[#ff0ea3] transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <div className="space-y-8">
              <FooterAccordion title="Get in touch">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#ff0ea3]/50 transition-colors">
                      <MapPin size={16} className="text-[#ff0ea3]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</span>
                      <span className="text-white/80 font-medium">Karachi, Pakistan</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#ff0ea3]/50 transition-colors">
                      <Mail size={16} className="text-[#ff0ea3]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Email</span>
                      <a href="mailto:velnixsolutions@gmail.com" className="text-white/80 font-medium hover:text-[#ff0ea3] transition-colors">velnixsolutions@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#ff0ea3]/50 transition-colors">
                      <Phone size={16} className="text-[#ff0ea3]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Phone</span>
                      <a href="tel:+923351312852" className="text-white/80 font-medium hover:text-[#ff0ea3] transition-colors">+92 335 131 2852</a>
                    </div>
                  </li>
                </ul>
              </FooterAccordion>

              {/* Newsletter Componentized */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md relative overflow-hidden group">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/80">Join Our Newsletter</h4>
                {isSubscribed ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#ff0ea3] font-bold">
                    System updated. Welcome to velnix Solutions.
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <Input
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Newsletter Protocol (email)"
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/20 h-11 focus:border-[#ff0ea3]/50 rounded-xl"
                    />
                    <Button
                      disabled={isNewsletterSubmitting}
                      className="w-full bg-[#ff0ea3] hover:bg-[#e61295] text-white font-bold h-11 rounded-xl shadow-lg shadow-[#ff0ea3]/20"
                    >
                      {isNewsletterSubmitting ? "Processing..." : "Subscribe"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Redesign */}
        <div className="pt-8 border-t border-white/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} <span className="text-white">Velnix Solutions</span> All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#ff0ea3] transition-colors">Privacy</a>
            <a href="/terms-and-conditions" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#ff0ea3] transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-2xl bg-[#ff0ea3] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(255,14,163,0.4)] hover:shadow-[0_15px_40px_rgba(255,14,163,1)] transition-all active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

const FooterAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex flex-col gap-8">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff0ea3]">{title}</h3>
        {children}
      </div>
    );
  }

  return (
    <div className="border-b border-white/5 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff0ea3]">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} className="text-white/40" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="py-6 pt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
