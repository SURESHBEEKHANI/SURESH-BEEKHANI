
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const socialLinks = [
    { name: 'Github', icon: <Github className="h-5 w-5" />, url: 'https://github.com/sureshbeekhani' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/sureshbeekhani' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/sureshbeekhani' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/sureshbeekhani' },
  ];
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      content: 'sureshbeekhani26@gmail.com',
      link: 'mailto:sureshbeekhani26@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Phone',
      content: '+92 340 1213187',
      link: 'tel:+923401213187'
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Location',
      content: 'Pakistan',
      link: 'https://maps.google.com'
    }
  ];
  
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
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="glass-effect rounded-lg p-8 h-full">
              <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-start hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-foreground/70">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 rounded-full p-3 text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="glass-effect rounded-lg p-8">
              <h3 className="text-xl font-display font-semibold mb-6">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                className="btn-primary w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
