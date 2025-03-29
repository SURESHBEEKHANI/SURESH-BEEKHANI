
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, isMobileMenuOpen]);
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];
  
  // WhatsApp phone number with international format
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 ${
      isScrolled ? 'glass-effect border-b border-white/10 shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-lg sm:text-xl font-display font-bold text-primary flex items-center">
          Suresh<span className="text-foreground">Beekhani</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary font-semibold after:w-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* WhatsApp Button - Desktop */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg ml-6"
        >
          <Phone className="h-4 w-4" />
          <span className="font-medium text-sm">{whatsappNumber}</span>
        </a>
        
        {/* Mobile Menu with WhatsApp Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* WhatsApp Icon for Mobile */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Contact on WhatsApp"
          >
            <Phone className="h-4 w-4" />
          </a>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass-effect border-b border-white/10 transition-all duration-300 overflow-hidden mobile-menu-container ${
        isMobileMenuOpen ? 'max-h-[70vh] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 flex flex-col space-y-3 max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`py-2.5 border-b border-white/10 transition-colors ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* WhatsApp full button in mobile menu */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">Contact on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
