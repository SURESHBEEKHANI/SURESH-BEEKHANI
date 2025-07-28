import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const XIcon = () => (
  <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
    <path d="M1199.61 0H1067.6L600.01 529.09L132.41 0H0L489.09 579.09L0 1227H132.41L600.01 697.91L1067.6 1227H1199.61L710.52 647.91L1199.61 0ZM600.01 797.91L200.41 1227H999.61L600.01 797.91Z" fill="currentColor"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.subject.trim()) errors.push('Subject is required');
    if (!formData.message.trim()) errors.push('Message is required');
    
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
      // Format the message for WhatsApp
      const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from your portfolio website`;

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Replace with your WhatsApp number (include country code)
      const whatsappNumber = '923401213187'; // Your WhatsApp number
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Show success toast
      toast.success('Opening WhatsApp with your message!', {
        description: 'Your message has been prepared and will open in WhatsApp.',
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'sureshbeekhani26@gmail.com',
      href: 'mailto:sureshbeekhani26@gmail.com'
    }
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      label: 'GitHub', 
      href: 'https://github.com/sureshbeekhani' 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/sureshbeekhani' 
    },
    { 
      icon: <XIcon />, 
      label: 'X (Twitter)', 
      href: 'https://x.com/SureshBeekhan' 
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full border-primary/20 hover:bg-primary/15 transition-colors duration-300"
          >
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you! Fill out the form below and it will open WhatsApp with your message.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <Card className="glass-effect rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300">
                      <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center border border-primary/20">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-600">{info.label}</p>
                        <a 
                          href={info.href} 
                          className="text-gray-900 font-medium hover:text-primary transition-colors"
                          aria-label={`Contact via ${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200/50">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                        aria-label={`Visit ${social.label} profile`}
                      >
                        <div className="text-gray-600 group-hover:text-primary transition-colors">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Card className="glass-effect rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                        aria-describedby="name-error"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project inquiry, collaboration, etc."
                        className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                        aria-describedby="subject-error"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      className="w-full resize-none border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                      aria-describedby="message-error"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
                          Send via WhatsApp
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
