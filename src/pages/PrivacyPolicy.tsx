import React, { useEffect, useState } from "react";
import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const C = {
  black: "#050505", graphite: "#111111", white: "#FFFFFF", lime: "#B6FF00", green: "#7DCC00",
  wa: (opacity: number) => `rgba(255,255,255,${opacity})`,
};

const TOC = [
  ["scope-and-applicability", "Scope and Applicability"], ["definitions", "Definitions"], ["data-controller", "Data Controller"],
  ["information-we-collect", "Information We Collect"], ["legal-basis", "Legal Basis for Processing (GDPR)"], ["how-we-use-information", "How We Use Your Information"],
  ["data-sharing", "Data Sharing and Disclosure"], ["international-transfers", "International Data Transfers"], ["data-retention", "Data Retention"],
  ["data-security", "Data Security"], ["your-rights", "Your Rights (GDPR and International Users)"], ["cookies-tracking", "Cookies and Tracking Technologies"],
  ["third-party-links", "Third-Party Links"], ["childrens-privacy", "Children's Privacy"], ["policy-updates", "Policy Updates"],
  ["contact-information", "Contact Information"], ["governing-law", "Governing Law"],
] as const;

const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState(TOC[0][0]);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const update = () => {
      setShowBackToTop(window.scrollY > 300);
      let current = TOC[0][0];
      TOC.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 130) current = id;
      });
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const selectSection = (id: string) => {
    setMobileTocOpen(false); setActiveId(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    section?.focus({ preventScroll: true });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

  return <>
    <style>{`
      .privacy-page { background: ${C.black}; color: ${C.white}; }
      .privacy-page a:focus-visible, .privacy-page button:focus-visible { outline: 2px solid ${C.lime}; outline-offset: 3px; }
      .privacy-section { scroll-margin-top: 6.5rem; }
      .privacy-h2 { color: ${C.white}; font-family: 'Space Grotesk', 'Inter', sans-serif; font-size: clamp(1.35rem, 2.4vw, 1.75rem); font-weight: 600; line-height: 1.25; margin: 0 0 1.25rem; }
      .privacy-p, .privacy-list { color: ${C.wa(0.76)}; font-size: 1.015rem; line-height: 1.75; }
      @media (prefers-reduced-motion: reduce) { .privacy-page { scroll-behavior: auto; } }
      @media print { nav[aria-label="Main navigation"], footer, .privacy-print-hide { display: none !important; } .privacy-page, .privacy-page * { background: ${C.white} !important; color: ${C.black} !important; box-shadow: none !important; text-shadow: none !important; } .privacy-page a { text-decoration: underline; } .privacy-doc { max-width: none !important; } .privacy-section { break-inside: avoid; } }
    `}</style>
    <Navbar />
    <div className="privacy-page min-h-screen">
      <header className="border-b px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12" style={{ borderColor: C.wa(0.08) }}>
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.lime }}>Legal</p>
          <h1 className="mb-4 font-bold tracking-tight" style={{ color: C.white, fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontSize: "clamp(2.15rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>Privacy Policy</h1>
          <p className="max-w-2xl text-base sm:text-lg" style={{ color: C.wa(0.72), lineHeight: 1.7 }}>We are committed to protecting personal data in accordance with GDPR and international privacy regulations.</p>
        </div>
      </header>
      <main className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="privacy-print-hide mb-8 lg:hidden">
          <button type="button" aria-expanded={mobileTocOpen} aria-controls="privacy-mobile-toc" onClick={() => setMobileTocOpen((open) => !open)} className="flex min-h-12 w-full items-center justify-between px-4 py-3 text-left" style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}`, color: C.white }}>
            <span className="text-sm font-medium tracking-wide">On this page</span>{mobileTocOpen ? <ChevronUp size={18} aria-hidden="true" color={C.lime} /> : <ChevronDown size={18} aria-hidden="true" color={C.lime} />}
          </button>
          {mobileTocOpen && <nav id="privacy-mobile-toc" aria-label="On this page" className="px-2 py-3" style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}`, borderTop: "none" }}><TocList activeId={activeId} onSelect={selectSection} /></nav>}
        </div>
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-20">
          <aside className="privacy-print-hide hidden lg:block"><nav aria-label="On this page" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"><p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: C.wa(0.42) }}>On this page</p><TocList activeId={activeId} onSelect={selectSection} /></nav></aside>
          <article className="privacy-doc min-w-0" style={{ maxWidth: 760 }}>
            <section id="overview" className="privacy-section" tabIndex={-1}><h2 className="sr-only">Introduction</h2><p className="privacy-p mb-4 text-[1.05rem] sm:text-[1.125rem]" style={{ color: C.wa(0.84), lineHeight: 1.75 }}>Velnix Solutions ("Company", "we", "our", or "us") is committed to protecting the privacy and security of personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) (EU) 2016/679 and other international privacy regulations.</p><p className="privacy-p text-[1.05rem] sm:text-[1.125rem]" style={{ color: C.wa(0.84), lineHeight: 1.75 }}>This Privacy Policy explains how we collect, use, process, disclose, and safeguard your information when you engage with our services, website, or business operations.</p></section>
            <SectionDivider />
            <PrivacySection id="scope-and-applicability" title="1. Scope and Applicability"><p className="privacy-p">This Privacy Policy applies to all personal data processed by Velnix Solutions in connection with:</p><PrivacyList items={["Clients and business partners", "Website visitors and users", "Service engagements and communications"]} className="my-4" /><p className="privacy-p">This policy does not apply to third-party entities that we do not own or control.</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="definitions" title="2. Definitions"><PrivacyList items={[<><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual</>, <><strong>Processing:</strong> Any operation performed on personal data (collection, storage, use, etc.)</>, <><strong>Data Subject:</strong> The individual whose data is processed</>]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="data-controller" title="3. Data Controller"><p className="privacy-p mb-4">Velnix Solutions acts as the Data Controller for personal data collected and processed under this policy.</p><PrivacyList items={[<>Email: velnixsolutions@gmail.com</>, <>Phone: +92 335 1312852</>, <>Location: Karachi, Pakistan</>]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="information-we-collect" title="4. Information We Collect"><p className="privacy-p mb-4">We may collect and process the following categories of personal data:</p><PrivacyList items={[<><strong>Personal Information:</strong> Name, email address, phone number, address and contact details</>, <><strong>Business Information:</strong> Company name, project details, communications</>, <><strong>Financial Information:</strong> Billing details, payment information (processed securely via third-party providers)</>, <><strong>Technical Data:</strong> IP address, browser type, device information, usage data</>]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="legal-basis" title="5. Legal Basis for Processing (GDPR)"><p className="privacy-p mb-4">We process personal data under the following lawful bases:</p><PrivacyList items={["Contractual Necessity - To perform agreements and deliver services", "Legitimate Interests - To improve services, operations, and communication", "Consent - For marketing and optional communications", "Legal Obligation - To comply with applicable laws and regulations"]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="how-we-use-information" title="6. How We Use Your Information"><p className="privacy-p mb-4">We use personal data to:</p><PrivacyList items={["Provide and manage AI, software, and consulting services", "Process transactions and fulfill contractual obligations", "Communicate with clients and provide support", "Improve products, services, and user experience", "Send updates, marketing, or relevant business information (with consent)"]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="data-sharing" title="7. Data Sharing and Disclosure"><p className="privacy-p mb-4">We do not sell or rent personal data. We may share information with:</p><PrivacyList items={["Trusted service providers (e.g., hosting, payment processors, cloud services)", "Business partners involved in service delivery", "Legal authorities where required by law"]} /><p className="privacy-p mt-4">All third parties are required to maintain appropriate data protection standards.</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="international-transfers" title="8. International Data Transfers"><p className="privacy-p mb-4">As a global service provider, your data may be transferred and processed outside your country of residence.</p><p className="privacy-p mb-4">We ensure appropriate safeguards, including:</p><PrivacyList items={["Standard Contractual Clauses (SCCs)", "Secure data processing agreements"]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="data-retention" title="9. Data Retention"><p className="privacy-p mb-4">We retain personal data only for as long as necessary to:</p><PrivacyList items={["Fulfill contractual and business obligations", "Comply with legal requirements", "Resolve disputes and enforce agreements"]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="data-security" title="10. Data Security"><p className="privacy-p mb-4">We implement appropriate technical and organizational measures, including:</p><PrivacyList items={["Encryption of sensitive data", "Secure infrastructure and access controls", "Continuous monitoring and protection systems"]} /></PrivacySection>
            <SectionDivider />
            <PrivacySection id="your-rights" title="11. Your Rights (GDPR and International Users)"><p className="privacy-p mb-4">You have the right to:</p><PrivacyList items={["Access your personal data", "Correct or update inaccurate data", "Request deletion (Right to be Forgotten)", "Restrict or object to processing", "Request data portability", "Withdraw consent at any time"]} /><p className="privacy-p mt-4">To exercise your rights, contact: velnixsolutions@gmail.com</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="cookies-tracking" title="12. Cookies and Tracking Technologies"><p className="privacy-p">We use cookies to enhance functionality and analyze usage. Users can control cookie preferences via browser settings.</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="third-party-links" title="13. Third-Party Links"><p className="privacy-p">Our website may contain links to external sites. We are not responsible for their privacy practices.</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="childrens-privacy" title="14. Children's Privacy"><p className="privacy-p">We do not knowingly collect data from individuals under 18. Any such data will be deleted if identified.</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="policy-updates" title="15. Policy Updates"><p className="privacy-p">We may update this policy periodically. Changes will be posted with an updated effective date.</p></PrivacySection>
            <SectionDivider />
            <PrivacySection id="contact-information" title="16. Contact Information"><ul className="privacy-list m-0 list-none space-y-2"><li><strong>Velnix Solutions</strong></li><li>Location: Karachi, Pakistan</li><li>Phone: +92 335 1312852</li><li>Email: info@velnixsolutions.com</li></ul></PrivacySection>
            <SectionDivider />
            <PrivacySection id="governing-law" title="17. Governing Law"><p className="privacy-p">This Privacy Policy shall be governed by applicable international data protection laws.</p></PrivacySection>
          </article>
        </div>
      </main>
      {showBackToTop && <button type="button" onClick={scrollToTop} aria-label="Back to top" className="privacy-print-hide fixed bottom-6 right-5 z-40 inline-flex min-h-11 items-center gap-2 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em]" style={{ background: C.graphite, border: `1px solid ${C.wa(0.12)}`, color: C.white }}><ArrowUp size={15} aria-hidden="true" /> Back to top</button>}
    </div>
    <Footer />
  </>;
};

function TocList({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return <ul className="m-0 list-none space-y-0.5 p-0">{TOC.map(([id, label]) => { const active = activeId === id; return <li key={id}><a href={`#${id}`} onClick={(event) => { event.preventDefault(); onSelect(id); }} aria-current={active ? "location" : undefined} className="block min-h-10 px-2.5 py-2 text-[13px] leading-snug transition-colors" style={{ background: active ? C.graphite : "transparent", borderLeft: `2px solid ${active ? C.lime : "transparent"}`, color: active ? C.lime : C.wa(0.62), fontWeight: active ? 600 : 400 }}>{label}</a></li>; })}</ul>;
}

function PrivacySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="privacy-section" tabIndex={-1}><p className="mb-3 text-[11px] font-semibold tracking-[0.18em]" style={{ color: C.lime }}>{title.split(".")[0].padStart(2, "0")}</p><h2 className="privacy-h2">{title}</h2>{children}</section>;
}

function PrivacyList({ items, className = "" }: { items: React.ReactNode[]; className?: string }) {
  return <ul className={`privacy-list m-0 list-disc space-y-2 pl-6 ${className}`}>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
}

function SectionDivider() { return <hr className="my-12 border-0 sm:my-16" style={{ height: 1, background: C.wa(0.08) }} />; }

export default PrivacyPolicy;
