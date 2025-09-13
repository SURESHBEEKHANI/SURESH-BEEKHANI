import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  const isMobile = useIsMobile();

  const brand = { prefix: 'Suresh', highlight: 'Beekhani', suffix: 'ML Engineer & Data Scientist' };
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
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

  const servicePages = [
    { label: 'AI Development', href: '/ai-development' },
    { label: 'Chatbot Development', href: '/ai-git -development' },
    { label: 'ChatGPT Integration', href: '/chat-gpt-integrations' },
    { label: 'Machine Learning', href: '/machine-learning' },
    { label: 'Computer Vision', href: '/computer-vision' },
    { label: 'Natural Language Processing', href: '/natural-language-processing' },
    { label: 'Predictive Modeling', href: '/predictive-modelling' },
  ];

  const industriesPages = [
    { label: 'HealthTech AI', href: '/HealthTechAI' },
    { label: 'FinTech AI', href: '/FinTechAI' },
    { label: 'EdTech AI', href: '/EdTechAI' },
    { label: 'GreenTech AI', href: '/GreenTechAI' },
    { label: 'Retail AI', href: '/RetailAI' },
    { label: 'E-Commerce AI', href: '/E-Commerce' },
    { label: 'Diagnostics AI', href: '/DiagnosticsAI' },
    { label: 'HIPAA Compliance', href: '/HIPAACompliance' },
  ];
  
  const linkColorClass = (linkHref: string) => {
    const isActive = activeSection === linkHref.replace('/#', '') || (linkHref === '/Portfolio' && currentPath === '/Portfolio');
    if (isActive) return 'active text-primary';
    if (isScrolled) return 'nav-link--dark hover:text-primary';
    return 'nav-link--light hover:text-white/90';
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-white text-sm sm:text-lg font-semibold bg-primary border border-white/10 shadow mt-0">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M17.364 17.364l-1.414-1.414M12 21v-2M6.636 17.364l1.414-1.414M3 12h2M6.636 6.636l1.414 1.414"/>
              </svg>
              ML Engineer
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.label === 'Services' ? (
                <div key={link.label} className="relative group">
                  <a href={link.href} className={`nav-link ${linkColorClass(link.href)}`}>
                    {link.label}
                  </a>
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block group-focus-within:block z-50 min-w-[220px]">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                      {servicePages.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          className={`block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary whitespace-nowrap ${service.href === '/ai-development' ? 'text-xs' : 'text-sm'}`}
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Add Industries dropdown
                link.label === 'Industries' ? (
                  <div key={link.label} className="relative group">
                    <a href={link.href} className={`nav-link ${linkColorClass(link.href)}`}>
                      {link.label}
                    </a>
                    <div className="absolute left-0 top-full mt-2 hidden group-hover:block group-focus-within:block z-50 min-w-[220px]">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                        {industriesPages.map((page) => (
                          <a key={page.href} href={page.href} className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary text-sm whitespace-nowrap">
                            {page.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a key={link.label} href={link.href} className={`nav-link ${linkColorClass(link.href)}`}>
                    {link.label}
                  </a>
                )
              )
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              className="bg-primary border border-white/10 shadow text-white rounded-full px-4 sm:px-6 py-2 hover:bg-primary/90 transition"
            >
              <a 
                href="https://wa.me/923401213187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <WhatsAppLogo />
                <span>Contact</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mobile-menu-button">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu-container">
            <div className="glass border-t border-white/20 mt-2 rounded-b-2xl shadow-xl">
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`mobile-nav-item block px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === link.href.replace('/#', '') || 
                      (link.href === '/Portfolio' && currentPath === '/Portfolio')
                        ? 'text-primary bg-primary/10'
                        : 'text-white hover:text-primary hover:bg-white/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                {/* Industries pages (mobile) */}
                <div className="px-4">
                  <div className="mt-1 mb-2 text-sm text-gray-300 font-medium">Industries</div>
                  <div className="space-y-1">
                    {industriesPages.map((page) => (
                      <a
                        key={page.href}
                        href={page.href}
                        className="block px-4 py-2 text-base text-white hover:bg-white/10 hover:text-primary rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {page.label}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Contact Button */}
                <div className="px-4 py-3">
                  <Button
                    asChild
                    className="bg-primary border border-white/10 shadow text-white rounded-full px-4 sm:px-6 py-2 w-full hover:bg-primary/90 transition"
                  >
                    <a 
                      href="https://wa.me/923401213187" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <WhatsAppLogo />
                      <span>Contact via WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
