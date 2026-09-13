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
      <section
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        className="velnix-cookie-banner fixed bottom-0 left-0 right-0 z-50 border-t px-4 py-2 sm:px-6"
        style={{ background: C.black, borderColor: "rgba(182,255,0,.22)", boxShadow: "0 -12px 40px rgba(0,0,0,.35)" }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-row items-center justify-between gap-6">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center border" style={{ background: C.graphite, borderColor: "rgba(255,255,255,.12)", color: C.lime }}>
              <Cookie size={14} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p id="cookie-banner-description" className="text-xs leading-snug" style={{ color: "rgba(255,255,255,.68)" }}>
                We use cookies to improve your experience and analyze traffic. Read our{" "}
                <Link to="/cookie-policy" className="font-medium underline underline-offset-2" style={{ color: C.lime }}>Cookie Policy</Link>{" "}
                and <Link to="/privacy-policy" className="font-medium underline underline-offset-2" style={{ color: C.lime }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={handleCustomize} className="inline-flex h-8 items-center justify-center gap-1.5 border px-3 text-xs font-medium transition-colors hover:border-white/40 hover:bg-white/5" style={{ background: C.graphite, borderColor: "rgba(255,255,255,.18)", color: C.white }}>
              <Settings size={12} aria-hidden="true" /> Manage
            </button>
            <button type="button" onClick={handleReject} className="h-8 border px-3 text-xs font-medium transition-colors hover:border-white/40 hover:bg-white/5" style={{ background: "transparent", borderColor: "rgba(255,255,255,.25)", color: C.white }}>
              Reject
            </button>
            <button type="button" onClick={handleAcceptAll} className="h-8 border px-3 text-xs font-semibold transition-colors hover:bg-[#7DCC00]" style={{ background: C.lime, borderColor: C.lime, color: C.black }}>
              Accept All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CookieBanner;
