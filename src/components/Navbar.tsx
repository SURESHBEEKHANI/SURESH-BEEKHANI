import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useReducedMotion } from '@/hooks/useAnimations';
import { navbarVariants, menuItemVariants, fadeInDown, hoverScale } from '@/lib/animations';

const WhatsAppLogo = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

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
    { label: 'Chatbot Development', href: '/ai-chatbot-development' },
    { label: 'ChatGPT Integration', href: '/chat-gpt-integrations' },
    { label: 'Machine Learning', href: '/machine-learning' },
    { label: 'Computer Vision', href: '/computer-vision' },
    { label: 'Natural Language Processing', href: '/natural-language-processing' },
    { label: 'Predictive Modeling', href: '/predictive-modelling' },
    { label: 'AI Automation', href: '/ai-automation' },
  
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
    <motion.nav
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? false : "visible"}
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-200/50'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/#home" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-white text-sm sm:text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.svg
                className="w-5 h-5 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M17.364 17.364l-1.414-1.414M12 21v-2M6.636 17.364l1.414-1.414M3 12h2M6.636 6.636l1.414 1.414" />
              </motion.svg>
              AI Specialist
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace('/#', '') || (link.href === '/Portfolio' && currentPath === '/Portfolio');
              const hasDropdown = link.label === 'Services' || link.label === 'Industries';
              const dropdownItems = link.label === 'Services' ? servicePages : link.label === 'Industries' ? industriesPages : [];

              if (hasDropdown) {
                return (
                  <div key={link.label} className="relative group">
                    <motion.a
                      href={link.href}
                      className={`relative px-4 py-2 transition-colors duration-300 font-medium flex items-center gap-1 ${isActive ? 'text-primary' : isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-white/90'
                        }`}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                      {/* Animated underline */}
                      <motion.span
                        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-600"
                        initial={{ width: 0, x: '-50%' }}
                        animate={{ width: isActive ? '80%' : 0, x: '-50%' }}
                        whileHover={{ width: '80%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>

                    {/* Dropdown Menu with Animation */}
                    <AnimatePresence>
                      <motion.div
                        className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible z-50 min-w-[220px]"
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 py-2 overflow-hidden"
                          initial={prefersReducedMotion ? {} : { scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {dropdownItems.map((item, i) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary whitespace-nowrap transition-colors ${item.href === '/ai-development' ? 'text-xs' : 'text-sm'
                                }`}
                              initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.2 }}
                              whileHover={prefersReducedMotion ? {} : { x: 4 }}
                            >
                              {item.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 transition-colors duration-300 font-medium ${isActive ? 'text-primary' : isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-white/90'
                    }`}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-600"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{ width: isActive ? '80%' : 0, x: '-50%' }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-blue-600 border border-white/10 shadow-lg text-white rounded-full px-6 py-2 hover:shadow-xl transition-all duration-300"
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
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mobile-menu-button">
            <motion.div
              whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={prefersReducedMotion ? {} : { rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={prefersReducedMotion ? {} : { rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mobile-menu-container"
              initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="glass border-t border-white/20 mt-2 rounded-b-2xl shadow-xl overflow-hidden"
                initial={prefersReducedMotion ? {} : { y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className={`mobile-nav-item block px-4 py-3 text-base font-medium transition-colors ${activeSection === link.href.replace('/#', '') ||
                          (link.href === '/Portfolio' && currentPath === '/Portfolio')
                          ? 'text-primary bg-primary/10'
                          : 'text-white hover:text-primary hover:bg-white/10'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      custom={index}
                      variants={menuItemVariants}
                      initial={prefersReducedMotion ? {} : "hidden"}
                      animate="visible"
                      exit="hidden"
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Industries pages (mobile) */}
                  <motion.div
                    className="px-4"
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                  >
                    <div className="mt-1 mb-2 text-sm text-gray-300 font-medium">Industries</div>
                    <div className="space-y-1">
                      {industriesPages.map((page, index) => (
                        <motion.a
                          key={page.href}
                          href={page.href}
                          className="block px-4 py-2 text-base text-white hover:bg-white/10 hover:text-primary rounded-md transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                          initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (navLinks.length + index) * 0.05, duration: 0.2 }}
                        >
                          {page.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile Contact Button */}
                  <motion.div
                    className="px-4 py-3"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navLinks.length + industriesPages.length) * 0.05, duration: 0.3 }}
                  >
                    <motion.div
                      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    >
                      <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-blue-600 border border-white/10 shadow-lg text-white rounded-full px-4 sm:px-6 py-2 w-full hover:shadow-xl transition-all duration-300"
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
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
