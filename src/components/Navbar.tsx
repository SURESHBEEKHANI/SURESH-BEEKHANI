import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatsAppLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="16" 
    height="16" 
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const isMobile = useIsMobile();
  
  // Get current path for active highlighting
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  
  const logos = [
    { prefix: 'ML', suffix: 'Engineer' },
    { prefix: 'AI', suffix: 'Engineer' },
    { prefix: 'DATA', suffix: 'Scientist' },
  ]
  
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
  
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(logoInterval);
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
    { label: 'About', href: '/#about' },
    { label: 'Portfolio', href: '/Portfolio' },
    { label: 'Services', href: '/#services' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ];
  
  // Update industries array to reflect actual industry pages in /src/pages
  const industrie = [
    
    { name: "Diagnostics AI", page: "/DiagnosticsAI" },
    { name: "E-Commerce", page: "/E-Commerce" },
    { name: "EdTech AI", page: "/EdTechAI" },
    { name: "FinTech AI", page: "/FinTechAI" },
    { name: "GreenTech AI", page: "/GreenTechAI" },
    { name: "HealthTech AI", page: "/HealthTechAI" },
    { name: "HIPAA Compliance", page: "/HIPAACompliance" },
    { name: "Retail AI", page: "/RetailAI" },
  ];

  // Services array for dropdown
  const services = [
    {name:"AI Development",page: "/AI-Development"},
    { name: "AI Chatbot Development", page: "/ai-chatbot-development" },
    { name: "Predictive Modelling", page: "/predictive-modelling" },
    { name: "Chat GPT Integrations", page: "/chat-gpt-integrations" },
    { name: "Natural Language Processing", page: "/natural-language-processing" },
    { name: "Machine Learning", page: "/machine-learning" },
    { name: "Computer Vision", page: "/computer-vision" },
  ];
  
  // WhatsApp phone number with international format
  const whatsappNumber = "+923401213187"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-primary flex items-center transition-opacity duration-500 hover:opacity-80"
            aria-label="Go to homepage"
          >
            <div className="logo-circle mr-2 sm:mr-3">
              {logos[currentLogoIndex].prefix.replace('-', '')}
            </div>
            <span className="text-foreground">{logos[currentLogoIndex].suffix}</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key="Services" className="relative group">
                  <button 
                    className={`nav-link text-sm font-medium transition-colors touch-button ${
                      activeSection === 'services' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                    }`}
                    aria-label="Services dropdown"
                  >
                    Services
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-50">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.page}
                        className={`block px-4 py-3 text-sm transition-colors duration-150 touch-button ${
                          currentPath === service.page ? 'bg-primary text-white font-semibold' : 'text-gray-700 hover:bg-primary hover:text-white'
                        }`}
                        aria-label={`Navigate to ${service.name}`}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : link.label === 'Industries' ? (
                <div key="Industries" className="relative group">
                  <button 
                    className={`nav-link text-sm font-medium transition-colors touch-button ${
                      activeSection === 'industries' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                    }`}
                    aria-label="Industries dropdown"
                  >
                    Industries
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-50">
                    {industrie.map((industry) => (
                      <a
                        key={industry.name}
                        href={industry.page}
                        className={`block px-4 py-3 text-sm transition-colors duration-150 touch-button ${
                          currentPath === industry.page ? 'bg-primary text-white font-semibold' : 'text-gray-700 hover:bg-primary hover:text-white'
                        }`}
                        aria-label={`Navigate to ${industry.name}`}
                      >
                        {industry.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors touch-button ${
                    activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                  }`}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          
          {/* WhatsApp Button - Desktop */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg ml-6 touch-button"
            aria-label="Contact on WhatsApp"
          >
            <WhatsAppLogo />
            <span className="font-medium text-sm">{whatsappNumber}</span>
          </a>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mobile-menu-button touch-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden mobile-menu-container border-t border-gray-200 shadow-lg ${
        isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 sm:px-6 py-4 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <details key="Services" className="group">
                <summary className="py-3 px-4 border-b border-gray-100 transition-colors cursor-pointer text-foreground hover:text-primary font-medium touch-button flex items-center justify-between">
                  <span>Services</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pl-4 bg-gray-50/50">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.page}
                      className={`block py-3 px-4 text-sm transition-colors duration-150 touch-button border-b border-gray-100 last:border-b-0 ${
                        currentPath === service.page ? 'bg-primary text-white font-semibold' : 'text-foreground hover:text-primary hover:bg-gray-100/50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label={`Navigate to ${service.name}`}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </details>
            ) : link.label === 'Industries' ? (
              <details key="Industries" className="group">
                <summary className="py-3 px-4 border-b border-gray-100 transition-colors cursor-pointer text-foreground hover:text-primary font-medium touch-button flex items-center justify-between">
                  <span>Industries</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pl-4 bg-gray-50/50">
                  {industrie.map((industry) => (
                    <a
                      key={industry.name}
                      href={industry.page}
                      className={`block py-3 px-4 text-sm transition-colors duration-150 touch-button border-b border-gray-100 last:border-b-0 ${
                        currentPath === industry.page ? 'bg-primary text-white font-semibold' : 'text-foreground hover:text-primary hover:bg-gray-100/50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label={`Navigate to ${industry.name}`}
                    >
                      {industry.name}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`py-3 px-4 border-b border-gray-100 transition-colors touch-button ${
                  activeSection === link.href.substring(1) ? 'text-primary font-semibold bg-primary/5' : 'text-foreground hover:text-primary hover:bg-gray-100/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            )
          )}
          
          {/* WhatsApp full button in mobile menu */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-all duration-300 touch-button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Contact on WhatsApp"
          >
            <WhatsAppLogo />
            <span className="font-medium">Contact on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;