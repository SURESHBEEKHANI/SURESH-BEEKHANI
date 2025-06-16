import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
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
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScDqDaSXj1g071CpTDzbplzw7t8xsrwn7isEhx7EodHN23VAg/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
