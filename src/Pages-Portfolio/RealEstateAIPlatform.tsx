import CaseStudyPage from "./CaseStudyPage";

const RealEstateAIPlatform = () => (
  <CaseStudyPage
    referenceStyle
    heroDescription="An AI-powered lead intelligence platform that helps real estate teams recognize buyer intent, prioritize promising prospects, and get the right opportunity to an agent sooner."
    heroPreview={{
      ariaLabel: "Illustrative real estate lead qualification preview",
      title: "Property Lead Assistant",
      subtitle: "Lead qualification",
      status: "Instant lead routing",
      conversationLabel: "Sample buyer conversation",
      customerMessage: "I’m looking for a 3-bedroom home near downtown.",
      assistantMessage: "I can help narrow the search. What budget range should I use?",
      supportingText: "The inquiry is matched with relevant listings and buyer intent signals.",
      options: ["$500k–$650k", "Move-in ready"],
      cardIcon: "property",
      cardLabel: "Qualified buyer lead",
      cardTitle: "Downtown 3-bedroom",
      cardDetail: "Budget: $500k–$650k · Ready this quarter",
      footerText: "High-intent inquiries can reach the right agent with context.",
    }}
    cta={{
      title: "Turn more property inquiries into meaningful conversations.",
      description: "We help real estate teams qualify leads, streamline follow-up, and connect prospective buyers with the right agent at the right time.",
    }}
    project={{
      title: "Real Estate AI Lead Intelligence",
      category: "Custom Software",
      industry: "Real Estate",
      introduction: "This lead intelligence platform helps real estate teams prioritize promising prospects using behavioral signals, predictive scoring, and automated follow-up.",
      problem: "Agents spent hours manually qualifying leads with no predictive insight into buyer intent or closing probability, wasting resources on low-quality prospects.",
      solution: "Built a custom AI platform that scores, segments, and nurtures leads automatically using behavioral data, NLP, and predictive intent modeling.",
      outcome: "Conversion rates doubled with 80% less manual follow-up effort and sub-2-minute lead response times.",
      metrics: [{ stat: "2x", label: "Conversion Rate" }, { stat: "80%", label: "Less Manual Work" }, { stat: "<2min", label: "Lead Response" }],
      tags: ["Lead Scoring", "NLP", "CRM Integration", "Automation"],
      keyCapabilities: [
        "Lead scoring and qualification using engagement signals and buyer intent patterns",
        "CRM integration to route high-potential opportunities to the right sales teams",
        "NLP-powered lead analysis that identifies urgency, fit, and next-best actions",
      ],
      conclusion: "The platform showed that AI helps real-estate teams win more deals when it shortens the time between inquiry and action. By pairing lead intelligence with process automation, the business created a more responsive sales motion without overloading agents.",
    }}
  />
);

export default RealEstateAIPlatform;
