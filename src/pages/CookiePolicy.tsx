import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const C = {
  black: "#050505",
  graphite: "#111111",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const LAST_UPDATED = "16/06/2026";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "what-are-cookies", label: "What are cookies?" },
  { id: "types-of-cookies", label: "Types of Cookies We Use" },
  { id: "essential-cookies", label: "Essential Cookies", nested: true },
  { id: "analytics-cookies", label: "Analytics Cookies", nested: true },
  { id: "marketing-cookies", label: "Marketing Cookies", nested: true },
  { id: "control-cookies", label: "How can I control cookies?" },
  { id: "contact", label: "Contact Us" },
] as const;

const CookiePolicy = () => {
  const [activeId, setActiveId] = useState<string>("overview");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ids = TOC.map((item) => item.id);
    const offset = 110;

    const update = () => {
      setShowBackToTop(window.scrollY > 280);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const onTocClick = useCallback((id: string) => {
    setMobileTocOpen(false);
    setActiveId(id);
    const el = document.getElementById(id);
    el?.focus({ preventScroll: true });
  }, []);

  const scrollToTop = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <>
      <style>{`
        .cookie-policy-page { scroll-behavior: smooth; }
        .cookie-policy-page a:focus-visible,
        .cookie-policy-page button:focus-visible {
          outline: 2px solid #B6FF00;
          outline-offset: 3px;
        }
        .cookie-section { scroll-margin-top: 6.5rem; }
        @media (prefers-reduced-motion: reduce) {
          .cookie-policy-page { scroll-behavior: auto; }
        }
        @media print {
          nav[aria-label="Main navigation"],
          footer,
          .cookie-print-hide { display: none !important; }
          .cookie-policy-page,
          .cookie-policy-page * {
            background: #FFFFFF !important;
            color: #050505 !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
          .cookie-policy-page a { color: #050505 !important; text-decoration: underline; }
          .cookie-doc { max-width: none !important; }
        }
      `}</style>

      <Navbar />

      <div
        className="cookie-policy-page min-h-screen"
        style={{ background: C.black, color: C.white }}
      >
        <header
          className="pt-28 sm:pt-32 pb-10 sm:pb-14 px-5 sm:px-8 lg:px-12"
          style={{ borderBottom: `1px solid ${C.wa(0.08)}` }}
        >
          <div className="max-w-[1200px] mx-auto">
            <p
              className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: C.lime }}
            >
              Privacy &amp; Cookies
            </p>
            <h1
              className="font-bold tracking-tight mb-4"
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: "clamp(2.15rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                color: C.white,
              }}
            >
              Cookie Policy
            </h1>
            <p
              className="max-w-2xl text-base sm:text-lg mb-8"
              style={{ color: C.wa(0.72), lineHeight: 1.7 }}
            >
              This page describes how cookies and similar tracking technologies are used on this website.
            </p>
            <dl
              className="inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-2.5"
              style={{
                background: C.graphite,
                border: `1px solid ${C.wa(0.08)}`,
              }}
            >
              <dt
                className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                style={{ color: C.wa(0.45) }}
              >
                Last updated
              </dt>
              <dd className="text-sm m-0" style={{ color: C.white, fontVariantNumeric: "tabular-nums" }}>
                {LAST_UPDATED}
              </dd>
            </dl>
          </div>
        </header>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
          {/* Mobile: On this page */}
          <div className="lg:hidden mb-8 cookie-print-hide">
            <button
              type="button"
              aria-expanded={mobileTocOpen}
              aria-controls="cookie-mobile-toc"
              onClick={() => setMobileTocOpen((open) => !open)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
              style={{
                background: C.graphite,
                border: `1px solid ${C.wa(0.1)}`,
                color: C.white,
              }}
            >
              <span className="text-sm font-medium tracking-wide">On this page</span>
              {mobileTocOpen ? (
                <ChevronUp size={18} aria-hidden="true" style={{ color: C.lime }} />
              ) : (
                <ChevronDown size={18} aria-hidden="true" style={{ color: C.lime }} />
              )}
            </button>
            {mobileTocOpen && (
              <nav
                id="cookie-mobile-toc"
                aria-label="On this page"
                className="mt-0 px-2 py-3"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.1)}`,
                  borderTop: "none",
                }}
              >
                <TocList activeId={activeId} onSelect={onTocClick} />
              </nav>
            )}
          </div>

          <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 xl:gap-20 items-start">
            <aside className="hidden lg:block cookie-print-hide">
              <nav
                aria-label="On this page"
                className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
              >
                <p
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: C.wa(0.4) }}
                >
                  On this page
                </p>
                <TocList activeId={activeId} onSelect={onTocClick} />
              </nav>
            </aside>

            <article
              className="cookie-doc min-w-0"
              style={{ maxWidth: 760 }}
            >
              <section id="overview" className="cookie-section" tabIndex={-1}>
                <h2 className="sr-only">Overview</h2>
                <p
                  className="text-[1.05rem] sm:text-[1.125rem]"
                  style={{ color: C.wa(0.82), lineHeight: 1.75 }}
                >
                  This Cookie Policy explains how our website uses cookies and similar tracking technologies to recognize you when you visit our site. It explains what these technologies are, why we use them, and your right to control our use of them.
                </p>
              </section>

              <SectionDivider />

              <section id="what-are-cookies" className="cookie-section" tabIndex={-1}>
                <h2 className="cookie-h2">What are cookies?</h2>
                <p className="cookie-p">
                  Cookies are small text files that are stored on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
              </section>

              <SectionDivider />

              <section id="types-of-cookies" className="cookie-section" tabIndex={-1}>
                <h2 className="cookie-h2">Types of Cookies We Use</h2>
                <p className="cookie-p mb-10">
                  We use three main types of cookies on our website, designed to help us provide you with the best possible experience. Here is a simple breakdown of what they are and why we use them:
                </p>

                <CookieType
                  id="essential-cookies"
                  index="1"
                  title="Essential Cookies"
                  whatTheyDo="These cookies are strictly necessary for our website to function properly. They enable core features like security, network management, and accessibility."
                  optOut="No, these cannot be switched off in our systems because the website simply won't work without them. They do not store any personally identifiable information."
                />
                <CookieType
                  id="analytics-cookies"
                  index="2"
                  title="Analytics Cookies"
                  whatTheyDo="Also known as performance cookies, these help us understand how visitors interact with our website. They collect anonymous information about which pages are visited most often, how much time is spent on the site, and if users encounter any error messages."
                  optOut="Yes. We use this data only to improve how our website works, but you can choose not to allow these cookies."
                />
                <CookieType
                  id="marketing-cookies"
                  index="3"
                  title="Marketing Cookies"
                  whatTheyDo="These cookies are used to track visitors across websites. The goal is to understand your interests so we can display advertisements that are relevant, engaging, and personalized to you, rather than showing you random ads."
                  optOut="Yes. If you do not allow these cookies, you will still see ads, but they will be less targeted to your interests."
                  last
                />
              </section>

              <SectionDivider />

              <section id="control-cookies" className="cookie-section" tabIndex={-1}>
                <h2 className="cookie-h2">How can I control cookies?</h2>
                <p className="cookie-p mb-5">
                  You have the right to decide whether to accept or reject non-essential cookies. You can set your preferences when you first visit our site using the Cookie Consent Banner. You can also change your preferences at any time by clearing your browser cookies and refreshing the page to see the consent banner again.
                </p>
                <p className="cookie-p">
                  Additionally, most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept essential cookies, you may not be able to use some portions of our site.
                </p>
              </section>

              <SectionDivider />

              <section id="contact" className="cookie-section" tabIndex={-1}>
                <h2 className="cookie-h2">Contact Us</h2>
                <p className="cookie-p">
                  If you have any questions about our use of cookies or this Cookie Policy, please{" "}
                  <Link
                    to="/contact"
                    className="font-medium underline underline-offset-4 decoration-1 transition-colors"
                    style={{ color: C.lime }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = C.green;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = C.lime;
                    }}
                  >
                    contact us
                  </Link>.
                </p>
              </section>
            </article>
          </div>
        </div>

        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="cookie-print-hide fixed bottom-6 right-5 z-40 px-3.5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase"
            style={{
              background: C.graphite,
              color: C.white,
              border: `1px solid ${C.wa(0.12)}`,
            }}
            aria-label="Back to top"
          >
            Back to top
          </button>
        )}
      </div>

      <Footer />

      <style>{`
        .cookie-h2 {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: clamp(1.35rem, 2.4vw, 1.75rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0 0 1.25rem;
          line-height: 1.25;
        }
        .cookie-p {
          color: rgba(255,255,255,0.74);
          font-size: 1.015rem;
          line-height: 1.75;
          margin: 0;
        }
      `}</style>
    </>
  );
};

function TocList({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="list-none m-0 p-0 space-y-0.5">
      {TOC.map((item) => {
        const active = activeId === item.id;
        return (
          <li key={item.id} className={item.nested ? "pl-3" : ""}>
            <a
              href={`#${item.id}`}
              onClick={() => onSelect(item.id)}
              aria-current={active ? "location" : undefined}
              className="block py-1.5 px-2.5 text-[13px] leading-snug transition-colors"
              style={{
                color: active ? C.lime : C.wa(item.nested ? 0.48 : 0.62),
                background: active ? C.graphite : "transparent",
                borderLeft: `2px solid ${active ? C.lime : "transparent"}`,
                fontWeight: active ? 600 : 400,
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.color = C.green;
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.color = C.wa(item.nested ? 0.48 : 0.62);
                }
              }}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function SectionDivider() {
  return (
    <hr
      className="border-0 my-12 sm:my-16"
      style={{ height: 1, background: C.wa(0.08) }}
    />
  );
}

function CookieType({
  id,
  index,
  title,
  whatTheyDo,
  optOut,
  last = false,
}: {
  id: string;
  index: string;
  title: string;
  whatTheyDo: string;
  optOut: string;
  last?: boolean;
}) {
  return (
    <section
      id={id}
      className="cookie-section"
      tabIndex={-1}
      style={{
        marginBottom: last ? 0 : "2.25rem",
        padding: "1.5rem 0 0 1.25rem",
        borderLeft: `2px solid ${C.wa(0.12)}`,
      }}
    >
      <h3
        className="mb-5"
        style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontSize: "1.15rem",
          fontWeight: 600,
          color: C.white,
          lineHeight: 1.3,
        }}
      >
        <span
          className="text-xs font-semibold tracking-wider mr-2.5"
          style={{ color: C.lime, fontVariantNumeric: "tabular-nums" }}
        >
          {index}.
        </span>
        {title}
      </h3>
      <div className="space-y-4">
        <p className="cookie-p">
          <strong style={{ color: C.white, fontWeight: 600 }}>What they do: </strong>
          {whatTheyDo}
        </p>
        <p className="cookie-p">
          <strong style={{ color: C.white, fontWeight: 600 }}>Can I opt-out?: </strong>
          {optOut}
        </p>
      </div>
    </section>
  );
}

export default CookiePolicy;
