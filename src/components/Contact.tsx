import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
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
    toast.success('Opening WhatsApp with your message!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you! Fill out the form below and it will open WhatsApp with your message.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
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
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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
                className="w-full resize-none"
              />
            </div>
            
            <div className="flex items-center justify-center">
              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Send via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
