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
            description: <span className="text-black/80 font-medium">Thanks — we’ve got you.</span>,
            style: { background: '#B6FF00', color: 'black', border: 'none' }
          });
          setNewsletterEmail('');
          return;
        }

        throw error;
      }

      toast.success('Subscribed successfully!', {
        description: <span className="text-black/80 font-medium">You will receive our latest updates.</span>,
        style: { background: '#B6FF00', color: 'black', border: 'none' }
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
    { name: 'Facebook', icon: <Facebook size={16} strokeWidth={1.5} />, url: 'https://www.facebook.com/VelnixSolutions', color: 'from-blue-600 to-blue-800' },
    { name: 'LinkedIn', icon: <Linkedin size={16} strokeWidth={1.5} />, url: 'https://www.linkedin.com/company/velnixsolutions/', color: 'from-blue-700 to-blue-900' },
    { name: 'X', icon: <Twitter size={16} strokeWidth={1.5} />, url: 'https://x.com/VelnixSolutions', color: 'from-zinc-800 to-black' },
    { name: 'Instagram', icon: <Instagram size={16} strokeWidth={1.5} />, url: 'https://www.instagram.com/velnixsolutions/', color: 'from-pink-600 to-purple-800' },
  ];

  return (
    <footer className="relative bg-[#020010] text-white pt-24 pb-8 overflow-hidden">
      {/* Premium Pink + Lime gradient ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B6FF00]/12 via-[#020010] to-[#B6FF00]/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#B6FF00]/8 via-transparent to-[#B6FF00]/8" />

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B6FF00]/20 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/2 opacity-70" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#B6FF00]/15 blur-[140px] rounded-full -translate-x-1/3 translate-y-1/2 opacity-70" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#B6FF00]/15 via-[#B6FF00]/5 to-[#B6FF00]/15 blur-[120px] opacity-60 rounded-full" />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#B6FF00]/40 via-[#B6FF00]/30 to-[#B6FF00]/40" />

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
                  src="/image/logo/logo1.png"
                  alt="Neurovex"
                  className="h-16 sm:h-20 w-auto object-contain brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                />
              </a>
              <p className="text-white text-lg max-w-sm leading-relaxed font-light">
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
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${social.color} shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(182,255,0,0.3)] overflow-hidden relative group border border-white/5 hover:border-[#B6FF00]/50`}
                >
                  <div className="absolute inset-0 bg-[#B6FF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
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
                  { label: "Chatbot Development", href: "/ai-chatbot-development" },
                  { label: "ChatGPT Integration", href: "/chat-gpt-integrations" },
                  { label: "Agentic AI", href: "/agentic-ai" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white hover:text-[#B6FF00] hover:pl-2 transition-all flex items-center gap-3 group decoration-transparent">
                      <div className="w-2 h-2 rounded-full bg-[#B6FF00] group-hover:scale-125 transition-transform flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <div className="space-y-8">
              <FooterAccordion title="Get in touch">
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 group">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B6FF00]/50 transition-colors">
                      <MapPin size={16} className="text-[#B6FF00]" />
                    </div>
                    <span className="text-white/80 font-medium">Karachi, Pakistan</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B6FF00]/50 transition-colors">
                      <Mail size={16} className="text-[#B6FF00]" />
                    </div>
                    <a href="mailto:velnixsolutions@gmail.com" className="text-white/80 font-medium hover:text-[#B6FF00] transition-colors">info@velnixsolutions.com</a>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B6FF00]/50 transition-colors">
                      <Phone size={16} className="text-[#B6FF00]" />
                    </div>
                    <a href="tel:+923351312852" className="text-white/80 font-medium hover:text-[#B6FF00] transition-colors">+92 335 131 2852</a>
                  </li>
                </ul>
              </FooterAccordion>

              {/* Newsletter Componentized */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-none backdrop-blur-md relative overflow-hidden group">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/80">Join Our Newsletter</h4>
                {isSubscribed ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#B6FF00] font-bold">
                    System updated. Welcome to velnix Solutions.
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <Input
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Newsletter Protocol (email)"
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/20 h-11 focus:border-[#B6FF00]/50 rounded-none"
                    />
                    <Button
                      disabled={isNewsletterSubmitting}
                      className="w-full bg-[#B6FF00] hover:bg-[#9ddf00] text-black font-bold h-11 rounded-none shadow-lg shadow-[#B6FF00]/30"
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
          <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} <span className="text-[#B6FF00]">Velnix Solutions</span> All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#B6FF00] transition-colors">Privacy</a>
            <a href="/terms-and-conditions" className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#B6FF00] transition-colors">Terms</a>
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
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-2xl bg-[#B6FF00] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(182,255,0,0.4)] hover:shadow-[0_15px_40px_rgba(182,255,0,1)] transition-all active:scale-95"
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
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">{title}</h3>
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
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">{title}</span>
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
