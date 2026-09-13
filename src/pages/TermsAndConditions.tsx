import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const C = {
  black: "#050505", graphite: "#111111", white: "#FFFFFF", lime: "#B6FF00", green: "#7DCC00",
  wa: (opacity: number) => `rgba(255,255,255,${opacity})`,
  la: (opacity: number) => `rgba(182,255,0,${opacity})`,
  ga: (opacity: number) => `rgba(125,204,0,${opacity})`,
};

const PAGE_BG = "radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505";

const TOC = [
  ["scope-of-services", "Scope of Services"], ["acceptance-of-terms", "Acceptance of Terms"],
  ["services-and-deliverables", "Services and Deliverables"], ["payments-and-billing", "Payments and Billing"],
  ["intellectual-property-rights", "Intellectual Property Rights"], ["confidentiality", "Confidentiality"],
  ["client-responsibilities", "Client Responsibilities"], ["data-protection-and-privacy", "Data Protection and Privacy"],
  ["third-party-services", "Third-Party Services"], ["limitation-of-liability", "Limitation of Liability"],
  ["service-availability", "Service Availability"], ["termination", "Termination"], ["indemnification", "Indemnification"],
  ["governing-law", "Governing Law"], ["changes-to-terms", "Changes to Terms"],
  ["contact-information", "Contact Information"], ["entire-agreement", "Entire Agreement"],
] as const;

const TermsAndConditions = () => {
  const [activeId, setActiveId] = useState(TOC[0][0]);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const update = () => {
      let current = TOC[0][0];
      TOC.forEach(([id]) => {
        if (document.getElementById(id)?.getBoundingClientRect().top && document.getElementById(id)!.getBoundingClientRect().top <= 130) current = id;
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

  return <>
    <style>{`
      .terms-page { background: ${PAGE_BG}; color: ${C.white}; font-family: 'Space Grotesk', 'Inter', sans-serif; }
      .terms-page > header { background: linear-gradient(180deg, ${C.graphite}55 0%, transparent 100%); }
      .terms-page a:focus-visible, .terms-page button:focus-visible { outline: 2px solid ${C.lime}; outline-offset: 3px; }
      .terms-section { scroll-margin-top: 6.5rem; }
      .terms-h2 { color: ${C.white}; font-family: 'Space Grotesk', 'Inter', sans-serif; font-size: clamp(1.25rem, 2.2vw, 1.5rem); font-weight: 900; line-height: 1.2; letter-spacing: -0.04em; margin: 0 0 1.25rem; }
      .terms-p, .terms-list { color: rgba(255,255,255,0.55); font-size: 1rem; line-height: 1.75; }
      @media (prefers-reduced-motion: reduce) { .terms-page { scroll-behavior: auto; } }
      @media print { nav[aria-label="Main navigation"], footer, .terms-print-hide { display: none !important; } .terms-page, .terms-page * { background: ${C.white} !important; color: ${C.black} !important; box-shadow: none !important; text-shadow: none !important; } .terms-page a { text-decoration: underline; } .terms-doc { max-width: none !important; } .terms-section { break-inside: avoid; } }
    `}</style>
    <Navbar />
    <div className="terms-page relative min-h-screen overflow-hidden font-display">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div style={{ position: "absolute", top: -120, left: -100, width: 500, height: 500, background: `radial-gradient(circle, ${C.la(0.1)} 0%, ${C.ga(0.035)} 40%, transparent 72%)`, filter: "blur(48px)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -60, width: 400, height: 400, background: `radial-gradient(circle, ${C.ga(0.12)} 0%, ${C.ga(0.04)} 42%, transparent 74%)`, filter: "blur(58px)" }} />
      </div>
      <header className="relative z-10 border-b px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12" style={{ borderColor: C.wa(0.07) }}>
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>
            <span className="h-px w-8" style={{ background: C.lime }} /> Legal
          </p>
          <h1 className="mb-8 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl">Terms &amp; Conditions</h1>
          <p className="max-w-xl text-lg leading-8 sm:text-xl" style={{ color: C.wa(0.64) }}>These terms govern your use of our services, website, and products.</p>
        </div>
      </header>
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="terms-print-hide mb-8 lg:hidden">
          <button type="button" aria-expanded={mobileTocOpen} aria-controls="terms-mobile-toc" onClick={() => setMobileTocOpen((open) => !open)} className="flex min-h-12 w-full items-center justify-between px-4 py-3 text-left" style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}`, color: C.white }}>
            <span className="text-sm font-bold">On this page</span>{mobileTocOpen ? <ChevronUp size={18} aria-hidden="true" color={C.lime} /> : <ChevronDown size={18} aria-hidden="true" color={C.lime} />}
          </button>
          {mobileTocOpen && <nav id="terms-mobile-toc" aria-label="On this page" className="px-2 py-3" style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}`, borderTop: "none" }}><TocList activeId={activeId} onSelect={selectSection} /></nav>}
        </div>
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-20">
          <aside className="terms-print-hide hidden lg:block"><nav aria-label="On this page" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"><p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.wa(0.42) }}>On this page</p><TocList activeId={activeId} onSelect={selectSection} /></nav></aside>
          <article className="terms-doc min-w-0" style={{ maxWidth: 760 }}>
            <section id="overview" className="terms-section" tabIndex={-1}><h2 className="sr-only">Introduction</h2><p className="terms-p">These Terms and Conditions ("Terms") govern your use of services, website, and products provided by Velnix Solutions ("Company", "we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms.</p></section>
            <SectionDivider />
            <TermsSection id="scope-of-services" title="1. Scope of Services"><p className="terms-p">Velnix Solutions provides AI, machine learning, software development, automation, and consulting services. All services are delivered based on agreed proposals, contracts, or statements of work.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="acceptance-of-terms" title="2. Acceptance of Terms"><p className="terms-p mb-4">By accessing our website or engaging our services, you confirm that you:</p><TermsList items={["Agree to these Terms", "Are legally capable of entering into a binding agreement", "Will comply with all applicable laws and regulations"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="services-and-deliverables" title="3. Services and Deliverables"><TermsList items={["All services will be defined in a formal agreement or proposal", "Deliverables, timelines, and scope are subject to mutual agreement", "Any changes in scope may result in revised pricing and timelines"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="payments-and-billing" title="4. Payments and Billing"><TermsList items={["Clients agree to pay all fees as outlined in the agreement", "Payments must be made according to agreed terms (e.g., upfront, milestone-based)", "Late payments may result in service delays or suspension", "All fees are non-refundable unless explicitly stated"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="intellectual-property-rights" title="5. Intellectual Property Rights"><TermsList items={["All intellectual property developed by Velnix Solutions remains our property until full payment is received", "Upon full payment, ownership of agreed deliverables may be transferred to the client", "Velnix Solutions retains the right to showcase completed work for portfolio and marketing purposes"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="confidentiality" title="6. Confidentiality"><p className="terms-p mb-4">Both parties agree to:</p><TermsList items={["Keep confidential information secure", "Not disclose proprietary or sensitive information to third parties without consent", "Use such information solely for business purposes"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="client-responsibilities" title="7. Client Responsibilities"><p className="terms-p mb-4">Clients agree to:</p><TermsList items={["Provide accurate and complete information", "Respond promptly to requests and approvals", "Ensure lawful use of delivered solutions"]} /><p className="terms-p mt-4">Failure to meet responsibilities may impact project timelines and outcomes.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="data-protection-and-privacy" title="8. Data Protection and Privacy"><p className="terms-p">We process personal data in accordance with our Privacy Policy. Clients are responsible for ensuring that any data shared complies with applicable data protection laws.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="third-party-services" title="9. Third-Party Services"><p className="terms-p mb-4">Our solutions may integrate with third-party tools or services. We are not responsible for:</p><TermsList items={["Performance or availability of third-party services", "Any losses caused by third-party providers"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="limitation-of-liability" title="10. Limitation of Liability"><p className="terms-p mb-4">To the fullest extent permitted by law:</p><TermsList items={["Velnix Solutions shall not be liable for indirect, incidental, or consequential damages", "Our total liability shall not exceed the amount paid for the services"]} /></TermsSection>
            <SectionDivider />
            <TermsSection id="service-availability" title="11. Service Availability"><p className="terms-p">We strive to ensure continuous service availability but do not guarantee uninterrupted or error-free operation.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="termination" title="12. Termination"><p className="terms-p mb-4">We reserve the right to:</p><TermsList items={["Suspend or terminate services for breach of Terms", "Terminate agreements with reasonable notice"]} /><p className="terms-p mt-4">Clients may terminate services based on agreed contractual terms.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="indemnification" title="13. Indemnification"><p className="terms-p">Clients agree to indemnify and hold Velnix Solutions harmless from any claims, damages, or liabilities arising from misuse of services or violation of these Terms.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="governing-law" title="14. Governing Law"><p className="terms-p">These Terms shall be governed by and interpreted in accordance with applicable laws. Any disputes shall be subject to the jurisdiction of relevant courts.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="changes-to-terms" title="15. Changes to Terms"><p className="terms-p">We may update these Terms at any time. Continued use of our services constitutes acceptance of updated Terms.</p></TermsSection>
            <SectionDivider />
            <TermsSection id="contact-information" title="16. Contact Information"><ul className="terms-list m-0 list-none space-y-2"><li><strong style={{ color: C.white }}>Velnix Solutions</strong></li><li><strong style={{ color: C.white }}>Location:</strong> Karachi, Pakistan</li><li><strong style={{ color: C.white }}>Phone:</strong> <a href="tel:+923351312852" style={{ color: C.lime }}>+92 335 1312852</a></li><li><strong style={{ color: C.white }}>Email:</strong> <a href="mailto:info@velnixsolutions.com" style={{ color: C.lime }}>info@velnixsolutions.com</a></li></ul></TermsSection>
            <SectionDivider />
            <TermsSection id="entire-agreement" title="17. Entire Agreement"><p className="terms-p">These Terms, along with any agreements or proposals, constitute the entire agreement between Velnix Solutions and the client.</p></TermsSection>
          </article>
        </div>
      </div>
    </div>
    <Footer />
  </>;
};

function TocList({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return <ul className="m-0 list-none space-y-0.5 p-0">{TOC.map(([id, label]) => { const active = activeId === id; return <li key={id}><a href={`#${id}`} onClick={(event) => { event.preventDefault(); onSelect(id); }} aria-current={active ? "location" : undefined} className="block min-h-10 px-2.5 py-2 text-sm leading-6 transition-colors" style={{ background: active ? C.graphite : "transparent", borderLeft: `2px solid ${active ? C.lime : "transparent"}`, color: active ? C.lime : C.wa(0.55), fontWeight: active ? 700 : 400 }}>{label}</a></li>; })}</ul>;
}

function TermsSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="terms-section" tabIndex={-1}><p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.lime }}>{title.split(".")[0].padStart(2, "0")}</p><h2 className="terms-h2">{title}</h2>{children}</section>;
}

function TermsList({ items }: { items: string[] }) {
  return <ul className="terms-list m-0 list-disc space-y-2 pl-6">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function SectionDivider() { return <hr className="my-12 border-0 sm:my-16" style={{ height: 1, background: C.wa(0.08) }} />; }

export default TermsAndConditions;
