import CaseStudyPage from "./CaseStudyPage";

const TravelDisruptionRebookingAssistant = () => (
  <CaseStudyPage
    referenceStyle
    heroTitle="A clearer path through travel disruption."
    heroDescription="An illustrative AI travel disruption and rebooking assistant concept for cancellations, delays, and itinerary changes—bringing travel options and policy guidance together with traveler approval and human support."
    heroPreview={{
      ariaLabel: "Illustrative travel disruption and rebooking assistant conversation",
      title: "Travel Support Assistant",
      subtitle: "Disruption management concept",
      status: "Illustrative concept",
      conversationLabel: "Example disruption conversation",
      customerMessage: "My connection was cancelled. What are my options?",
      assistantMessage:
        "I’m checking the available alternatives and the change conditions for your itinerary.",
      supportingText:
        "Options would be based on connected booking data and applicable travel policies.",
      options: ["Review alternatives", "Talk to an agent"],
      cardIcon: "property",
      cardLabel: "Suggested next step",
      cardTitle: "Review replacement itinerary",
      cardDetail: "Traveler approval required",
      footerText:
        "Booking changes are submitted only after traveler authorization.",
    }}
    cta={{
      title: "Make disruption support more coordinated.",
      description:
        "Explore how AI, connected travel data, and human support can work together across disruption workflows.",
      primaryLabel: "Explore Travel AI Solutions",
    }}
    project={{
      title: "AI Travel Disruption & Rebooking Assistant",
      category: "Travel AI",
      industry: "Travel & Tourism",
      solutionStatus: "Illustrative solution concept",
      introduction:
        "Flight cancellations, schedule changes, and missed connections can turn a routine journey into a stressful one. Travelers need timely, relevant options, while support teams may face a surge in requests across booking platforms, airline notifications, customer service tools, and travel policies. This proposed assistant concept connects those sources into a more coordinated disruption-management experience. It is an illustrative solution concept, not a report of completed client work or measured results.",
      problem:
        "Travel disruption workflows often span disconnected booking systems, airline status updates, customer support tools, and policy documents. Support teams may need to locate an itinerary, check its conditions, search for alternatives, and communicate updates manually, while travelers wait for clear next steps.",
      problemHighlights: [
        "Travelers may wait for disruption updates and suitable alternative options.",
        "Support teams repeatedly search for availability and review booking conditions.",
        "Booking details, travel policies, and disruption notifications can be fragmented across systems.",
        "High support volumes leave agents less time for complex or exceptional cases.",
        "Changes must be coordinated across travelers, support staff, and booking systems.",
      ],
      solution:
        "The proposed AI-powered assistant connects supported travel information, booking systems, and automated workflows into one disruption-management journey. AI agents coordinate tasks, while retrieval-augmented generation grounds policy guidance in approved fare rules and rebooking conditions. Connected APIs can provide supported flight-status, itinerary, and availability information. The assistant explains potential options and known cost differences, obtains traveler approval before a booking change, and hands complex cases to travel support agents with relevant context.",
      outcome:
        "The concept is designed to help travel businesses coordinate disruption support and give travelers clearer next steps. Potential impact should be evaluated using operational data in a pilot; this case study does not claim achieved response-time, cost, or customer-experience improvements.",
      outcomeHighlights: [
        "Measure time to respond to a disruption and identify alternatives.",
        "Track how often eligible routine inquiries are handled without manual assistance.",
        "Evaluate rebooking progress visibility and consistency of policy guidance.",
        "Review the quality of agent handoffs and traveler communication.",
      ],
      metrics: [],
      tags: [
        "AI Agents",
        "RAG",
        "Travel APIs",
        "Workflow Automation",
      ],
      keyCapabilities: [
        "Receives flight-status updates from supported airline or booking APIs and identifies affected itineraries.",
        "Evaluates available alternatives using factors such as departure time, destination, connections, and traveler preferences.",
        "Retrieves relevant fare rules, change policies, and rebooking conditions to ground administrative guidance.",
        "Guides travelers through eligible alternatives and initiates booking changes through connected systems only after required authorization and confirmation.",
        "Sends timely updates about cancellations, delays, alternative options, and booking status through supported communication channels.",
        "Routes complex cases, unavailable alternatives, and policy exceptions to support agents with booking details and interaction history.",
      ],
      approach: [
        "Detect a flight disruption from a connected airline, booking, or travel-data source.",
        "Identify the affected itinerary and retrieve the relevant booking information.",
        "Analyze available alternatives alongside traveler constraints and applicable policies.",
        "Recommend suitable options with clear explanations and known cost differences.",
        "Obtain traveler approval before submitting a booking change.",
        "Execute the authorized change through the connected booking system, then confirm the updated itinerary or escalate for further assistance.",
      ],
      technologyStack: [
        "AI agents to coordinate disruption analysis and support workflows.",
        "Retrieval-augmented generation (RAG) to retrieve relevant travel policies and booking guidance.",
        "Large language models (LLMs) to interpret traveler requests and generate contextual responses.",
        "Travel and booking APIs to access supported flight-status, itinerary, and availability data.",
        "Workflow automation to coordinate notifications, approvals, and rebooking steps.",
        "CRM integration to maintain support history and enable informed agent handoffs.",
      ],
      successMetrics: [
        {
          metric: "Disruption response time",
          whatItMeasures:
            "Elapsed time from receiving a disruption signal to the first useful traveler update.",
        },
        {
          metric: "Alternative identification time",
          whatItMeasures:
            "Time required to identify available options that fit the traveler’s constraints.",
        },
        {
          metric: "Routine inquiry resolution",
          whatItMeasures:
            "Share of eligible disruption inquiries completed without manual agent handling.",
        },
        {
          metric: "Rebooking progress visibility",
          whatItMeasures:
            "Whether travelers and support agents can see the current status and next step.",
        },
        {
          metric: "Policy guidance consistency",
          whatItMeasures:
            "Whether guidance aligns with applicable, approved fare and rebooking rules.",
        },
        {
          metric: "Escalation quality",
          whatItMeasures:
            "Whether exceptions reach the right agent with relevant itinerary and interaction context.",
        },
      ],
      conclusion:
        "Travel disruptions cannot always be prevented, but their response can be clearer and more coordinated. Velnix Solutions brings AI engineering, RAG systems, workflow automation, and API integration together to connect fragmented travel information and repetitive support processes. Booking authorization, policy exceptions, and complex decisions remain with the traveler and appropriate human support. A measured pilot can establish whether this concept delivers value for a specific travel operation.",
    }}
  />
);

export default TravelDisruptionRebookingAssistant;
