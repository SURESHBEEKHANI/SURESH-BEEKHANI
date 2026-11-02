import CaseStudyPage from "./CaseStudyPage";

const AIWorkflowAutomation = () => (
  <CaseStudyPage
    referenceStyle
    heroDescription="An AI-powered orchestration layer that connects business systems, data, and agents—moving routine work forward while keeping people in control of important decisions."
    heroPreview={{
      ariaLabel: "Illustrative AI workflow automation preview",
      title: "Workflow Assistant",
      subtitle: "Operations orchestration",
      status: "Workflow running",
      conversationLabel: "Example approval workflow",
      customerMessage: "Can you process this new vendor request?",
      assistantMessage: "I’ve checked the request and sent it to the right approver.",
      supportingText: "The approval is tracked and the connected systems stay in sync.",
      options: ["Review request", "View activity"],
      cardLabel: "Approval status",
      cardTitle: "Vendor request",
      cardDetail: "Sent to Finance · Activity tracked",
      footerText: "Exceptions stay visible and can be handed to a team member.",
    }}
    project={{
      title: "AI Workflow Automation Platform",
      category: "AI & Automation",
      industry: "Business Operations",
      introduction: "This platform connects business processes, data sources, and AI agents to help teams reduce repetitive administrative work and move operational tasks forward more quickly.",
      problem: "Repetitive administrative workflows required significant manual effort across teams, causing bottlenecks, delays, and high operational costs.",
      solution: "Designed an AI automation platform connecting business processes, data sources, and intelligent agents using n8n orchestration, custom APIs, and GPT-powered decision nodes.",
      outcome: "Reduced repetitive work and accelerated internal workflows, freeing teams to focus on higher-value strategic tasks.",
      metrics: [{ stat: "70%", label: "Admin Work Reduced" }, { stat: "10x", label: "Workflow Speed" }, { stat: "24/7", label: "Automation" }],
      tags: ["AI Agents", "Automation", "n8n", "APIs", "Workflows"],
      keyCapabilities: [
        "AI agent orchestration across approvals, triage, and back-office task flows",
        "Workflow automation built with n8n, custom APIs, and rule-based decision logic",
        "Human-in-the-loop monitoring to keep exceptions visible without slowing operations",
      ],
      conclusion: "The workflow platform proved that operational transformation happens when repetitive coordination is removed without sacrificing oversight. By connecting people, systems, and AI decisions in a single workflow layer, the business gained faster execution and more resilient day-to-day operations.",
    }}
  />
);

export default AIWorkflowAutomation;
