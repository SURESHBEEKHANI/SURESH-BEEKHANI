import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useReducedMotion } from '@/hooks/useAnimations';
import { navbarVariants, menuItemVariants } from '@/lib/animations';
import { supabase } from '../lib/supabaseClient';

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

const Navbar = ({ isDark = false }: { isDark?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [allBlogs, setAllBlogs] = useState<{ id: string, title: string }[]>([]);

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      // Fetch blogs when search opens if not already fetched
      if (allBlogs.length === 0) {
        supabase
          .from('blogs')
          .select('id, title')
          .eq('status', 'published')
          .then(({ data, error }) => {
            if (!error && data) {
              setAllBlogs(data);
            }
          });
      }
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollY.current;

      // Hide on scroll down, show on scroll up — ALL pages
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY + 5) {
        // Scrolling down — hide
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < prevScrollY - 5) {
        // Scrolling up — show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = currentScrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { label: 'Resources', href: '#' },
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
    { label: 'FinTech', href: '/fintech' },
    { label: 'HealthTech', href: '/healthtech' },
    { label: 'RetailTech', href: '/retailtech' },
    { label: 'EdTech', href: '/edtech' },
    { label: 'FitTech', href: '/fittech' },
    { label: 'LegalTech', href: '/legaltech' },
    { label: 'WealthTech', href: '/wealthtech' },
    { label: 'IT & Software', href: '/it-software' },
  ];

  const resourcesPages = [
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ];

  // Prevent default click on Resources link since it's just a dropdown trigger
  const handleResourcesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const allSearchableLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Portfolio: View All Projects', href: '/Portfolio' },
    { label: 'Experience', href: '/#experience' },
    ...servicePages,
    ...industriesPages,
    ...resourcesPages,
    { label: 'Portfolio: AI Fraud Detection System', href: '/portfolio/ai-fraud-detection-system' },
    { label: 'Portfolio: AI Personal Finance Advisor', href: '/portfolio/ai-personal-finance-advisor' },
    { label: 'Portfolio: AI Powered Electronic Health Record', href: '/portfolio/ai-powered-electronic-health-record' },
    { label: 'Portfolio: AI Medical Imaging Assistant', href: '/portfolio/ai-medical-imaging-assistant' },
    { label: 'Portfolio: AI Product Recommendation Engine', href: '/portfolio/ai-product-recommendation-engine' },
    { label: 'Portfolio: AI Demand Forecasting System', href: '/portfolio/ai-demand-forecasting-system' },
    { label: 'Portfolio: AI Personalized Learning Platform', href: '/portfolio/ai-personalized-learning-platform' },
    { label: 'Portfolio: AI Automated Grading System', href: '/portfolio/ai-automated-grading-system' },
    { label: 'Portfolio: AI Personal Fitness Coach', href: '/portfolio/ai-personal-fitness-coach' },
    { label: 'Portfolio: AI Nutrition Planner', href: '/portfolio/ai-nutrition-planner' },
    { label: 'Portfolio: AI Contract Analysis System', href: '/portfolio/ai-contract-analysis-system' },
    { label: 'Portfolio: AI Legal Research Assistant', href: '/portfolio/ai-legal-research-assistant' },
    { label: 'Portfolio: AI Robo Advisor', href: '/portfolio/ai-robo-advisor' },
    { label: 'Portfolio: AI Portfolio Risk Analyzer', href: '/portfolio/ai-portfolio-risk-analyzer' },
    { label: 'Portfolio: AI DevOps Monitoring Assistant', href: '/portfolio/ai-devops-monitoring-assistant' },
    { label: 'Portfolio: AI IT Support Chatbot', href: '/portfolio/ai-it-support-chatbot' },
  ];

  const combinedSearchableLinks = [
    ...allSearchableLinks,
    ...allBlogs.map(blog => ({
      label: `Blog: ${blog.title}`,
      href: `/blogs?article=${blog.id}`
    }))
  ];

  const filteredLinks = searchQuery
    ? combinedSearchableLinks.filter(link => link.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <nav
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s ease-in-out, background-color 0.3s, box-shadow 0.3s',
      }}
      className={`fixed top-0 left-0 right-0 z-50 group/navbar ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
        : 'bg-transparent hover:bg-white/95 hover:backdrop-blur-xl hover:shadow-lg hover:border-b hover:border-gray-200/50'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

          {/* Logo - Optimized for mobile */}
          <motion.div
            className="hidden lg:flex items-center flex-shrink-0"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="/#home"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2  text-white text-xs sm:text-sm lg:text-base font-semibold border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
              style={{ background: 'linear-gradient(135deg, #f01eff 0%, #f755d7 50%, #ec4899 100%)' }}
              aria-label="AI Specialist - Home"
            >
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M17.364 17.364l-1.414-1.414M12 21v-2M6.636 17.364l1.414-1.414M3 12h2M6.636 6.636l1.414 1.414" />
              </motion.svg>
              <span className="hidden sm:inline">AI Specialist</span>
              <span className="sm:hidden">AI</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('/#', '') || (link.href === '/Portfolio' && currentPath === '/Portfolio');
              const hasDropdown = link.label === 'Services' || link.label === 'Industries' || link.label === 'Resources';
              const dropdownItems = link.label === 'Services' ? servicePages : link.label === 'Industries' ? industriesPages : link.label === 'Resources' ? resourcesPages : [];

              if (hasDropdown) {
                return (
                  <div key={link.label} className="relative group">
                    <motion.a
                      href={link.href}
                      onClick={link.label === 'Resources' ? handleResourcesClick : undefined}
                      className={`relative px-4 py-2 transition-colors duration-300 font-medium ${isActive ? 'text-[#ec4899]' : (isScrolled || isDark) ? 'text-gray-900 hover:text-[#ec4899]' : 'text-white group-hover/navbar:text-gray-900 hover:text-[#ec4899]'
                        }`}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      {/* Animated underline */}
                      <motion.span
                        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#f01eff] to-[#ec4899]"
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
                          className="bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200/50 py-2 overflow-hidden"
                          initial={prefersReducedMotion ? {} : { scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {dropdownItems.map((item, i) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2 text-gray-800 hover:bg-[#f01eff]/5 hover:text-[#ec4899] whitespace-nowrap transition-colors ${item.href === '/ai-development' ? 'text-xs' : 'text-sm'
                                }`}
                              initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.2 }}
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
                  className={`relative px-4 py-2 transition-colors duration-300 font-medium ${isActive ? 'text-[#ec4899]' : (isScrolled || isDark) ? 'text-gray-900 hover:text-[#ec4899]' : 'text-white group-hover/navbar:text-gray-900 hover:text-[#ec4899]'
                    }`}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899]"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{ width: isActive ? '80%' : 0, x: '-50%' }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}

            {/* Desktop Search Icon */}
            <div className="flex items-center ml-2 pl-2 border-l transition-colors duration-300 border-white/20 group-hover/navbar:border-gray-200">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  (isScrolled || isDark)
                    ? 'text-gray-900 hover:text-[#ec4899] hover:bg-gray-100' 
                    : 'text-white hover:text-[#ec4899] hover:bg-white/10 group-hover/navbar:text-gray-900 group-hover/navbar:hover:text-[#ec4899] group-hover/navbar:hover:bg-gray-100'
                }`}
                aria-label="Open Search"
              >
                <Search className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 relative group/contact">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Button
                asChild
                className="rounded-none border border-white/10 shadow-lg text-white px-4 lg:px-6 py-2 hover:shadow-xl transition-all duration-300 touch-manipulation min-h-[44px]"
                style={{ background: 'linear-gradient(135deg, #f41eff 0%, #f755a9d9 50%, #ec4899 100%)' }}
              >
                <a
                  href="https://wa.me/923401213187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label="Contact via WhatsApp"
                >
                  <WhatsAppLogo />
                  <span className="text-sm lg:text-base">Contact</span>
                </a>
              </Button>
            </motion.div>

            {/* Notification type tooltip on hover */}
            <div className="absolute top-full mt-3 right-0 opacity-0 invisible group-hover/contact:opacity-100 group-hover/contact:visible group-hover/contact:translate-y-0 translate-y-2 transition-all duration-300 z-50 pointer-events-none">
              <div className="relative bg-white text-gray-900 text-xs sm:text-sm font-medium px-4 py-3 rounded-none shadow-2xl border border-gray-100 w-[260px] flex items-start gap-3 leading-snug">
                <div className="shrink-0 relative flex h-2 w-2 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                If you're interested in our services, feel free to contact us on WhatsApp.
                <div className="absolute -top-1.5 right-[30px] w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Improved touch target */}
          <div className="lg:hidden mobile-menu-button">
            <motion.div
              whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className={`p-2 sm:p-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] touch-manipulation ${
                  (isScrolled || isDark)
                    ? 'text-gray-900 hover:text-[#ec4899] hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10 hover:text-[#ec4899] group-hover/navbar:text-gray-900 group-hover/navbar:hover:text-[#ec4899] group-hover/navbar:hover:bg-gray-100'
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
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
                      <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={prefersReducedMotion ? {} : { rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu - Improved accessibility and touch targets */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mobile-menu-container"
              initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <motion.div
                className="border-t border-white/20 mt-2 shadow-2xl overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto relative"
                style={{ background: '#0a0435' }}
                initial={prefersReducedMotion ? {} : { y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle fuchsia glow blob for mobile menu */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl pointer-events-none" />
                <div className="py-3 sm:py-4 space-y-1">
                  {navLinks.map((link, index) => {
                    const hasDropdown = link.label === 'Services' || link.label === 'Industries' || link.label === 'Resources';
                    let dropdownItems = link.label === 'Services' ? servicePages : link.label === 'Industries' ? industriesPages : link.label === 'Resources' ? resourcesPages : [];

                    const isExpanded = expandedSection === link.label;

                    if (hasDropdown) {
                      return (
                        <div key={link.label} className="border-b border-white/5 last:border-0">
                          <button
                            onClick={() => setExpandedSection(isExpanded ? null : link.label)}
                            className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors flex items-center justify-between touch-manipulation ${isExpanded ? 'text-[#ec4899] bg-white/5' : 'text-white hover:text-[#f755d7]'
                              }`}
                          >
                            <span>{link.label}</span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-5 w-5 opacity-70" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden bg-white/5"
                              >
                                <div className="py-2 pl-8 sm:pl-10 pr-4 space-y-1">
                                  {dropdownItems.map((item, i) => (
                                    <motion.a
                                      key={item.href}
                                      href={item.href}
                                      className="block py-3 text-sm sm:text-base text-gray-300 hover:text-[#f755d7] transition-colors border-l border-white/10 pl-4"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                    >
                                      {item.label}
                                    </motion.a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className={`mobile-nav-item block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors min-h-[48px] flex items-center touch-manipulation border-b border-white/5 last:border-0 ${activeSection === link.href.replace('/#', '') ||
                            (link.href === '/Portfolio' && currentPath === '/Portfolio')
                            ? 'text-[#ec4899] bg-white/10'
                            : 'text-white hover:text-[#f755d7] hover:bg-white/10'
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        custom={index}
                        variants={menuItemVariants}
                        initial={prefersReducedMotion ? {} : "hidden"}
                        animate="visible"
                        exit="hidden"
                        role="menuitem"
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}

                  {/* Mobile Search Button */}
                  <div className="px-4 sm:px-6 mt-4">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsSearchOpen(true);
                      }}
                      className="w-full relative flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ec4899] hover:bg-[#ec4899]/10 transition-all text-white/80 hover:text-white"
                    >
                      <span className="text-sm font-medium">Search the site...</span>
                      <Search className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Mobile Contact Button */}
                  <div className="px-4 sm:px-6 py-6 sm:py-8">
                    <motion.div
                      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    >
                      <Button
                        asChild
                        className="border border-white/10 shadow-lg text-white px-4 sm:px-6 py-3 sm:py-4 w-full hover:shadow-xl transition-all duration-300 min-h-[48px] touch-manipulation"
                        style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #a855f7 50%, #ec4899 100%)' }}
                      >
                        <a
                          href="https://wa.me/923401213187"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold"
                        >
                          <WhatsAppLogo />
                          <span>Contact via WhatsApp</span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search overlay modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0a0435]/90 backdrop-blur-md flex justify-center items-start pt-[12vh] px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Search Header */}
              <div className="flex items-center p-4 border-b border-gray-100 relative bg-white">
                <Search className="w-6 h-6 text-gray-400 absolute left-6" strokeWidth={2.5} />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search pages, services, industries, projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-transparent text-gray-900 border-none outline-none text-lg placeholder:text-gray-400 focus:ring-0"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" strokeWidth={2.5} />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto bg-gray-50/50">
                {searchQuery && filteredLinks.length > 0 ? (
                  <div className="p-3">
                    {filteredLinks.map((link, index) => (
                      <a
                        key={`${link.href}-${index}`}
                        href={link.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center p-4 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-[#ec4899]/30 hover:shadow-md mb-2 group text-gray-700 hover:text-[#ec4899]"
                      >
                        <Search className="w-4 h-4 mr-3 text-gray-400 group-hover:text-[#ec4899] transition-colors" strokeWidth={2.5} />
                        <span className="text-sm md:text-base font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="p-10 text-center text-gray-500">
                    <p className="text-lg mb-2">No results found for "{searchQuery}"</p>
                    <p className="text-sm">Try using different keywords or checking services page.</p>
                  </div>
                ) : (
                  <div className="p-12 text-center text-gray-400">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="text-lg">Type to start finding what you need...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
