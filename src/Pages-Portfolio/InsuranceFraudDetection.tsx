import CaseStudyPage from "./CaseStudyPage";

const FoodGroceryKnowledgeAgent = () => (
  <CaseStudyPage
    referenceStyle
    heroTitle="Every Product Answer. One AI Agent."
    heroDescription="A growing food and grocery business was relying on experienced staff to answer recurring questions about product availability, ingredients, allergens, pricing, supplier details, and inventory. Velnix Solutions built an AI-powered knowledge agent that brings operational information together, helping teams find relevant, source-backed answers without searching across multiple systems."
    heroPreview={{
      ariaLabel: "Illustrative grocery product knowledge assistant",
      title: "Grocery Knowledge Agent",
      subtitle: "Product and operations assistant",
      status: "Source-grounded",
      conversationLabel: "Example product question",
      customerMessage: "Does this oat milk contain any allergens?",
      assistantMessage: "The product record lists oats. I found no other declared allergens in the available source.",
      supportingText: "Answer checked against approved product information.",
      options: ["View product record", "Check supplier details"],
      cardLabel: "Product source",
      cardTitle: "Organic oat milk",
      cardDetail: "Product catalog · Current record",
      footerText: "Questions outside the available evidence can be routed to a team member.",
    }}
    cta={{
      title: "Ready to Improve Your Grocery Operations?",
      description: "Tell us where your team loses time searching for information, checking records, or answering repetitive questions. We'll help identify where AI can create practical business value.",
      primaryLabel: "Book a Discovery Call",
      primaryHref: "/contact",
      secondaryLabel: "Explore AI Agent Development",
      secondaryHref: "/agentic-ai",
    }}
    project={{
      title: "Food & Grocery Knowledge AI Agent",
      category: "AI Knowledge Agent",
      industry: "Food & Grocery",
      solutionStatus: "AI Agent Concept / Proposed Implementation",
      introduction:
        "A growing food and grocery business was relying on experienced staff to answer recurring questions about product availability, ingredients, allergens, pricing, supplier details, and inventory. Velnix Solutions built an AI-powered knowledge agent that brings operational information together, helping teams find relevant, source-backed answers without searching across multiple systems.",
      problem:
        "Food and grocery operations depend on accurate, up-to-date information. Store teams, customer support representatives, purchasing staff, and inventory managers frequently need answers about products, suppliers, stock levels, pricing, ingredients, and delivery procedures. But this information often lives across spreadsheets, product catalogs, supplier documents, inventory systems, emails, and internal operating procedures. Employees spend valuable time searching for answers or contacting colleagues who already know where the information is stored. As operations expand, these repeated questions create avoidable delays and make consistent knowledge access more difficult.",
      problemHighlights: [
        "Product information gaps: staff struggle to find accurate product specifications, ingredients, and allergen information.",
        "Inventory visibility: employees consult multiple systems to locate stock and availability information.",
        "Supplier information silos: procurement details, delivery terms, and supplier records remain distributed across documents.",
        "Repeated internal questions: experienced staff repeatedly answer routine operational queries, interrupting higher-value work.",
      ],
      problemQuote:
        "The challenge isn't always a lack of information. It's making the right information accessible when employees need it.",
      solution:
        "Velnix Solutions designed a retrieval-augmented generation (RAG) AI agent that connects approved grocery business information and provides contextual answers through a familiar conversational interface. Employees can ask questions in plain language instead of manually searching through multiple systems. The agent retrieves relevant records, generates answers grounded in available evidence, and provides source references for verification. When information is missing, outdated, ambiguous, or outside the agent's authorized scope, the system can route the question to the appropriate team.",
      capabilitiesHeading: "An AI Knowledge Assistant for Grocery Operations",
      capabilitiesDescription:
        "A connected knowledge layer makes approved grocery information easier to find, verify, and act on.",
      keyCapabilities: [
        "Unified knowledge access: search product catalogs, supplier documents, operating procedures, spreadsheets, and approved internal records.",
        "Grounded product answers: retrieve relevant information about ingredients, specifications, packaging, and documented allergen data.",
        "Inventory and pricing integration: connect to authorized, current inventory and pricing systems where integrations are available.",
        "Smart escalation: route unanswered questions to purchasing, inventory, or customer support teams with relevant context.",
        "Feedback and evaluation: review answer quality, correct errors, and test the system as business information changes.",
      ],
      outcome:
        "The proposed AI agent helps grocery businesses make operational knowledge easier to access without requiring employees to learn another complicated system. Potential business outcomes include:",
      outcomeHighlights: [
        "Faster access to product and supplier information.",
        "Fewer repetitive questions directed at experienced employees.",
        "More consistent access to approved product documentation.",
        "Reduced manual searching across disconnected business systems.",
        "Better support for onboarding new store and operations staff.",
        "Clear escalation paths when information requires human verification.",
      ],
      metrics: [
        { stat: "24/7", label: "On-demand access to product and operational knowledge" },
        { stat: "0", label: "Routine questions that need to interrupt an expert when the agent can answer" },
        { stat: "Source-Grounded", label: "Answers linked to relevant product records and business documents" },
      ],
      tags: [
        "Food & Grocery",
        "RAG",
        "AI Knowledge Agent",
        "Product Information",
        "Source Citations",
      ],
      conclusion:
        "Food and grocery businesses already hold valuable information across product records, supplier documentation, inventory tools, and internal workflows. The opportunity is to make that information easier to find, verify, and use. Velnix Solutions builds custom AI agents that connect business knowledge with everyday operations. With retrieval, system integrations, source citations, and appropriate human oversight, grocery teams can spend less time searching for information and more time serving customers.",
    }}
  />
);

export default FoodGroceryKnowledgeAgent;
