import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient'; // ✅ Import Supabase client

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
  const formRef = useRef<HTMLDivElement>(null);

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
      // ✅ Insert form data into Supabase table "messages"
      const { error } = await supabase.from('messages').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }
      ]);

      if (error) throw error;

      toast.success('Message sent successfully!', {
        description: 'Your message has been saved for our team’s review.',
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'sureshbeekhani@gmail.com',
      link: 'mailto:sureshbeekhani@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+92 3401213187',
      link: 'tel:+923401213187',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Karachi, Pakistan',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Work Remotely',
      value: 'Global — Available for remote work worldwide across time zones.',
      link: '#',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Quick Response',
      value: 'I typically respond within 2–4 hours during business hours.',
      link: '#',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <Badge className="mb-4 px-4 py-2 glass border-primary/20">
            <MessageSquare className="w-4 h-4 mr-2 text-primary" />
            <span className="text-white">Get In Touch</span>
          </Badge>
          <h2 className="heading-2 mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="body-large text-foreground/70 max-w-3xl mx-auto">
            Ready to transform your ideas into intelligent AI solutions?
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className={`${isVisible ? 'slide-left' : 'opacity-0'}`}>
            <Card className="modern-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Subject *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder="Project inquiry"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="contact-input min-h-[120px] resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="btn-primary w-full group">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className={`${isVisible ? 'slide-right' : 'opacity-0'}`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="modern-card hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <a href={info.link} className="flex items-center gap-4 group">
                      <div className={`p-3 rounded-xl bg-gradient-to-r text-white ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-sm text-foreground/70">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
