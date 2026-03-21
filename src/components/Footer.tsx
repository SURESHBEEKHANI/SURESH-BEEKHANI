import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MapPin, Mail, Phone, Heart, Brain, Code, Rocket, Globe, Youtube, Instagram } from 'lucide-react';
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
    { name: 'Github', icon: <Github size={16} />, url: 'https://github.com/sureshbeekhani', color: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/suresh-beekhani/', color: 'from-blue-600 to-blue-800' },
    { name: 'X', icon: <Twitter size={16} />, url: 'https://x.com/SureshBeekhan', color: 'from-black to-gray-800' },
    { name: 'YouTube', icon: <Youtube size={16} />, url: 'https://www.youtube.com/@sureshbeekhani', color: 'from-red-500 to-red-700' },
    { name: 'Instagram', icon: <Instagram size={16} />, url: 'https://www.instagram.com/sureshbeekhani/', color: 'from-pink-500 to-purple-600' },
  ];

  return (
    <footer
      className="text-white py-16 relative overflow-hidden"
      style={{ background: '#0a0435' }}
    >
      {/* Fuchsia glow blobs — matching EHR hero */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

            <div className="flex items-center gap-3">
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-fuchsia-500/30"
                style={{
                  background:
                    'linear-gradient(135deg, #f00e7b 0%, #ff0cbe 50%, #ed1481 100%)',
                }}
              >
                <Brain className="h-6 w-6 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Suresh <span style={{ color: '#f92198' }}>Beekhani</span>
                </h3>
                <p className="text-xs text-indigo-300">
                  Data Scientist | AI Specialist
                </p>
              </div>
            </div>

            <p className="text-indigo-100/70 text-sm leading-relaxed">
              Transforming ideas into intelligent AI solutions using
              Machine Learning, Deep Learning, Generative AI, and intelligent
              automation.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-gradient-to-r text-white hover:scale-110 transition ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Services */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-indigo-100/70 text-sm">
              {[
                "AI Development",
                "Machine Learning",
                "Deep Learning",
                "NLP Solutions",
                "Computer Vision",
                "Predictive AI",
                "Chatbot Development",
                "AI Automation"
              ].map((service) => (
                <li key={service} className="hover:text-fuchsia-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>

          </div>

          {/* Contact + Newsletter */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>

            <ul className="space-y-3 text-indigo-100/70 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-fuchsia-400" /> Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-fuchsia-400" /> sureshbeekhani26@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-fuchsia-400" /> +923401213187
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
        <div className="border-t border-white/10 pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
          <p className="text-indigo-100/60 text-sm">
            © {new Date().getFullYear()} Suresh Beekhani. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy">
              <Badge
                variant="outline"
                className="border-fuchsia-500/40 text-indigo-100/70 hover:bg-fuchsia-500/10 transition-colors cursor-pointer"
              >
                Privacy Policy
              </Badge>
            </a>
            <Badge
              variant="outline"
              className="border-fuchsia-500/40 text-indigo-100/70"
            >
              Data Scientist
            </Badge>
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