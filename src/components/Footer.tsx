import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MapPin, Mail, Phone, Youtube, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient';

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
    { name: 'Facebook', icon: <Facebook size={16} />, url: 'https://www.facebook.com/VelnixSolutions', color: 'from-blue-500 to-blue-700' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/company/beekhaninova', color: 'from-blue-600 to-blue-800' },
    { name: 'X', icon: <Twitter size={16} />, url: 'https://x.com/VelnixSolutions', color: 'from-black to-gray-800' },
    { name: 'Instagram', icon: <Instagram size={16} />, url: 'https://www.instagram.com/velnixsolutions/', color: 'from-pink-500 to-purple-600' },
  ];

  return (
    <footer
      className="text-white pt-16 pb-6 relative overflow-hidden"
      style={{ background: '#0a0435' }}
    >
      {/* Fuchsia glow blobs — matching EHR hero */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

            <a
              href="/#home"
              className="inline-flex items-center touch-manipulation transition-transform duration-300 hover:scale-[1.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400/50 rounded-lg"
              aria-label="Neurovex — Home"
            >
              <img
                src="/image/logo/Neurovex.png"
                alt="Neurovex"
                className="h-14 sm:h-16 md:h-20 w-auto max-w-[min(100%,300px)] object-contain object-left brightness-110 contrast-125 saturate-115 drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
                decoding="async"
              />
            </a>

            <p className="text-indigo-100 text-sm sm:text-base font-medium leading-relaxed max-w-md">
              We design and build intelligent AI solutions that help modern businesses automate, scale, and make smarter decisions.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gradient-to-r text-white hover:scale-110 transition ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Services */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-indigo-100/90 text-sm">
              {[
                { label: "AI Development", href: "/ai-development" },
                { label: "Chatbot Development", href: "/ai-chatbot-development" },
                { label: "ChatGPT Integration", href: "/chat-gpt-integrations" },
                { label: "Machine Learning", href: "/machine-learning" },
                { label: "Computer Vision", href: "/computer-vision" },
                { label: "Natural Language Processing", href: "/natural-language-processing" },
                { label: "Predictive Modeling", href: "/predictive-modelling" },
                { label: "AI Automation", href: "/ai-automation" }
              ].map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="hover:text-[#f92198] transition-colors font-medium">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact + Newsletter */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

            <h3 className="text-lg font-semibold text-white">Get in touch</h3>

            <ul className="space-y-3 text-indigo-100/90 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} style={{ color: '#f92198' }} />
                <span>
                  Flat 5, Street 13, Near Taj Plaza, Central Jacob Lines,
                  <br />
                  Karachi, Pakistan, 74400
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} style={{ color: '#f92198' }} />
                <span className="font-medium">velnixsolutions@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} style={{ color: '#f92198' }} />
                <span className="font-medium">+92 335 131 2852</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                Join Our Newsletter
              </h4>

              {isSubscribed ? (
                <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-4 animate-fadeIn">
                  <p className="text-sm text-indigo-100/90 font-medium">
                    Thank you! You've successfully joined our community.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex w-full max-w-xs overflow-hidden  border border-white/15 bg-white/5 focus-within:border-fuchsia-500/50 transition-colors"
                >
                  <Input
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="border-0 bg-transparent text-white placeholder:text-indigo-200/50 focus-visible:ring-0 px-4 py-3"
                  />
                  <Button
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="px-6 font-semibold text-white "
                    style={{
                      background:
                        'linear-gradient(90deg, #d928c1 0%, #f82c92 50%, #ec4899 100%)',
                    }}
                  >
                    {isNewsletterSubmitting ? "..." : "Subscribe"}
                  </Button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-2 flex justify-between items-center flex-col md:flex-row gap-2">
          <p className="text-indigo-100/90 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-pink-400">Velnix Solutions</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy">
              <span className="text-xs sm:text-sm font-medium text-indigo-100/90 hover:text-pink-400 transition-colors">
                Privacy Policy
              </span>
            </a>
            <a href="/terms-and-conditions">
              <span className="text-xs sm:text-sm font-medium text-indigo-100/90 hover:text-pink-400 transition-colors">
                Terms and Conditions
              </span>
            </a>
            
          </div>
        </div>

      </div>

      {/* Scroll-to-top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 rounded-full p-3 shadow-lg shadow-fuchsia-500/30 transition-opacity ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #ff0a84 100%)' }}
      >
        <ArrowUp size={18} />
      </Button>

    </footer>
  );
};

export default Footer;
