import CaseStudyPage from "./CaseStudyPage";

const ClinicalDecisionSupport = () => (
  <CaseStudyPage
    referenceStyle
    pdfDownloadHref="/downloads/patient-experience-ai-platform-case-study.pdf"
    heroDescription="A connected patient experience platform that brings scheduling, follow-up, and clinic operations into one thoughtful journey—automating the routine while keeping care teams present for the moments that matter."
    project={{
      title: "Patient Experience AI Platform",
      category: "Healthcare Operations",
      industry: "Healthcare",
      introduction:
        "For a growing, multi-location clinic group, every appointment began a chain of conversations: scheduling questions, reminders, follow-ups, and the occasional handoff that needed a person’s judgment. Disconnected workflows made it difficult to respond consistently without adding pressure to already busy front-desk teams. We shaped a patient experience platform to bring those moments into one coordinated journey—making everyday interactions easier to manage while keeping clinical and operational teams in control.",
      problem:
        "Patient communication was spread across high call volumes, manual reminder and follow-up work, repetitive questions, and handoffs between disconnected systems. Staff had to bridge the gaps themselves, often switching context to confirm details or move a request forward. That left less capacity for complex needs and made timely, consistent communication harder to sustain across clinic locations.",
      solution:
        "We designed an AI-enabled engagement layer to coordinate scheduling, patient messaging, and operational workflows. It guides routine intake and appointment questions, supports reminders and follow-up outreach, and routes requests to the appropriate next step. When a conversation involves an exception or needs human judgment, the workflow preserves a clear handoff to clinic staff rather than forcing automation to handle it alone.",
      outcome:
        "The proposed experience gives patients a clearer path from their first question to their next appointment, while giving clinic teams a more structured way to manage routine communication. By bringing reminders, follow-ups, scheduling coordination, and escalation into a shared operating model, the platform is designed to reduce avoidable administrative friction and support a more dependable experience across locations.",
      metrics: [
        { stat: "5%", label: "No-show reduction target" },
        { stat: "3×", label: "Faster response objective" },
        { stat: "24/7", label: "Always-on patient support" },
      ],
      tags: [
        "Healthcare AI",
        "Patient Experience",
        "EHR Integration",
        "Clinic Operations",
      ],
      approach: [
        "Mapped the patient journey from initial inquiry through scheduling and post-visit follow-up, identifying repetitive work and points where requests stalled.",
        "Structured conversational experiences to understand patient intent, collect relevant details, and guide routine requests toward the appropriate scheduling or support path.",
        "Designed an orchestration layer across messaging, scheduling, and clinic operations to support more consistent handoffs between digital touchpoints and staff workflows.",
        "Built in clear escalation paths so sensitive questions, exceptions, and requests requiring judgment can reach clinic staff with context.",
      ],
      keyCapabilities: [
        "Conversational intake that captures the purpose of a request and helps patients navigate routine booking and follow-up questions.",
        "Coordinated appointment reminders and follow-up outreach, with clear next steps for patients and clinic teams.",
        "Workflow orchestration connecting patient messaging with scheduling and operational processes to support more reliable handoffs.",
        "Human escalation for sensitive requests, exceptions, and care-navigation needs that call for staff expertise.",
      ],
      conclusion:
        "Better patient access is built from many small moments handled well: a clear answer, a timely reminder, a smooth reschedule, and a thoughtful handoff when the situation is more complex. This platform brings those moments into a coordinated experience—using automation to support the work, not replace the people behind it. The result is a more considered foundation for responsive clinic operations and patient communication.",
    }}
  />
);

export default ClinicalDecisionSupport;
