import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Settings } from "lucide-react";

const C = {
  black: "#050505",
  graphite: "#111111",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",
};

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
    <>
      <style>{`
        .velnix-cookie-banner { animation: cookie-banner-in 360ms ease-out both; }
        .velnix-cookie-banner a:focus-visible,
        .velnix-cookie-banner button:focus-visible { outline: 2px solid ${C.lime}; outline-offset: 3px; }
        @keyframes cookie-banner-in { from { opacity: 0; transform: translateY(1rem); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .velnix-cookie-banner { animation: none; } }
      `}</style>
      <aside
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        className="velnix-cookie-banner fixed bottom-0 left-0 right-0 z-50 border-t px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pt-5"
        style={{ background: C.black, borderColor: "rgba(182,255,0,.22)", boxShadow: "0 -12px 40px rgba(0,0,0,.35)" }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border" style={{ background: C.graphite, borderColor: "rgba(255,255,255,.12)", color: C.lime }}>
              <Cookie size={18} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p id="cookie-banner-title" className="mb-1 text-sm font-semibold tracking-wide" style={{ color: C.white }}>We use cookies</p>
              <p id="cookie-banner-description" className="max-w-3xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.68)" }}>
                We use cookies to improve your experience, analyze site traffic, and personalize content. You can choose to accept all cookies, reject non-essential ones, or manage your preferences.
              </p>
              <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,.48)" }}>
                Read our <Link to="/cookie-policy" className="font-medium underline underline-offset-4" style={{ color: C.lime }}>Cookie Policy</Link> and <Link to="/privacy-policy" className="font-medium underline underline-offset-4" style={{ color: C.lime }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>

          <div className="grid w-full shrink-0 grid-cols-1 gap-2 sm:grid-cols-3 lg:w-auto lg:min-w-[390px]">
            <button type="button" onClick={handleCustomize} className="inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-2 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5" style={{ background: C.graphite, borderColor: "rgba(255,255,255,.18)", color: C.white }}>
              <Settings size={15} aria-hidden="true" /> Manage preferences
            </button>
            <button type="button" onClick={handleReject} className="min-h-11 border px-4 py-2 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5" style={{ background: "transparent", borderColor: "rgba(255,255,255,.25)", color: C.white }}>
              Reject
            </button>
            <button type="button" onClick={handleAcceptAll} className="min-h-11 border px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#7DCC00]" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
              Accept All
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CookieBanner;
