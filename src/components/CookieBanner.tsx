import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "essential-only");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // For now, we'll just store the custom state and hide the banner.
    localStorage.setItem("cookieConsent", "custom");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-zinc-950/95 backdrop-blur-md border-t border-primary/20 shadow-2xl transform transition-transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-sm sm:text-base text-gray-300 flex-1">
          <p>
            We use cookies to improve your experience, analyze site traffic, and personalize content. 
            You can choose to accept all cookies, reject non-essential ones, or manage your preferences. 
            Read our <Link to="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link> and <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link> for more details.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={handleCustomize}
            className="text-white border-primary/50 hover:bg-primary/20 bg-transparent flex-1 md:flex-none"
          >
            Customize Settings
          </Button>
          <Button 
            variant="outline" 
            onClick={handleReject}
            className="text-white border-primary/50 hover:bg-primary/20 bg-transparent flex-1 md:flex-none"
          >
            Reject
          </Button>
          <Button 
            onClick={handleAcceptAll}
            className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(var(--primary),0.5)] flex-1 md:flex-none"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
