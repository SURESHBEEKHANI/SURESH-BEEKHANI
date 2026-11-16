# Velnix Solutions Website

## Product Requirements Document

| Document field | Value |
|---|---|
| Document status | Draft for stakeholder review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| Business owner | Velnix Solutions leadership |
| Product owner | To be confirmed |
| Source brief | [Project Brief](../01-PROJECT-INITIATION/PROJECT_BRIEF.md) |
| Product | Public Velnix Solutions marketing and inquiry website |

## 1. Purpose

This Product Requirements Document (PRD) defines the intended audience, business outcomes, product scope, user needs, and release priorities for the Velnix Solutions website. It is based on the website and application routes present in the repository. It distinguishes current implementation from proposed product requirements; approval by the business and product owners is still required.

The website is Velnix's public-facing platform for discovering the company, understanding its AI and software services, reviewing relevant industry and portfolio information, reading content, and initiating a business inquiry. It is not a customer account portal or the software systems Velnix may build for clients.

## 2. Product Vision

Help prospective clients quickly understand how Velnix can apply AI, automation, and modern software engineering to practical business problems, then give them a clear and trustworthy path to start a conversation.

## 3. Business Outcomes

### Outcomes

- Explain the company's services, industries, delivery approach, and engagement options.
- Help visitors find relevant information through clear navigation and related service, industry, and portfolio content.
- Generate useful project inquiries from prospective clients.
- Build confidence through transparent company, leadership, and portfolio information.
- Support publishing and discovery of blog content.
- Provide a maintainable platform for the marketing and engineering teams.

### Candidate success measures

These are proposed measures, not currently approved targets. The product owner should define event semantics, measurement windows, baselines, targets, and reporting responsibilities before using them to judge performance.

| Measure | Definition to agree |
|---|---|
| Qualified inquiry conversion | Qualified inquiries divided by eligible website sessions or visitors |
| Inquiry completion rate | Successfully submitted inquiry forms divided by inquiry form starts |
| Content discovery | Visits to service, industry, or portfolio content and onward inquiry actions |
| Organic search performance | Search impressions, clicks, and qualified organic landing sessions |
| Newsletter conversion | Valid, consented signups divided by eligible signup interactions |
| Operational quality | Availability, error rate, accessibility defects, and agreed performance metrics |

## 4. Users and Needs

### Primary users

**Business decision-maker**
- Wants to understand whether Velnix solves a relevant business problem.
- Needs credible, concise explanations of services, process, and engagement options.
- Wants a clear way to request a consultation or share a project need.

**Operations leader**
- Wants to reduce repetitive work, improve handoffs, or connect fragmented tools.
- Needs to see how automation and AI may fit operational workflows.
- Wants to understand how discovery, delivery, and ongoing support work.

**Technology or product leader**
- Wants to evaluate technical capabilities, integration experience, and relevant examples.
- Needs enough detail to identify a suitable service and initiate a technical discussion.

### Secondary users

**Content editor**
- Needs to manage blog content and images through an authorized workflow.
- Needs clear publication status and confirmation when content changes succeed or fail.

**Job candidate, partner, or returning visitor**
- Needs accurate company, careers, contact, and policy information.

## 5. Product Principles

1. **Business value before technology jargon:** Lead with the problem and outcome, then explain relevant technical capabilities.
2. **Credible evidence:** Clearly identify whether portfolio work is a production delivery, prototype, concept, or illustrative scenario. Publish metrics only with documented approval and evidence.
3. **Clear next steps:** Give visitors an appropriate path to contact, learn more, or continue exploring.
4. **Trust by design:** Make data use, consent, privacy, accessibility, and error states understandable.
5. **Consistent experience:** Preserve the established dark and lime-green brand language while maintaining readability, responsiveness, and reduced-motion support.
6. **Measurable and maintainable:** Use agreed analytics definitions and reusable content patterns; avoid unverified targets and hidden failures.

## 6. Scope

### Included product areas

- Homepage and shared navigation.
- Company/about, leadership, careers, contact, privacy, cookie, and terms pages.
- Service discovery and individual service pages.
- Industry discovery and individual industry pages.
- Portfolio listing and individual portfolio/case-study pages.
- Blog listing, article selection through shareable URLs, search/filter experience, and blog administration.
- Newsletter signup.
- SEO, social metadata, sitemap, RSS, and `llms.txt` discovery support.
- Analytics and consent experience, subject to approved privacy requirements.

### Excluded unless separately approved

- Client login, client dashboards, project collaboration, and other SaaS features.
- Client-specific AI or software implementations marketed through this site.
- Guarantees of business outcomes, model accuracy, regulatory compliance, or security certification.
- A new content-management platform or full visual rebrand.
- Formal legal, privacy, security, or compliance certification.

## 7. Product Requirements

Priority definitions: **P0** is necessary for a trustworthy, usable core experience; **P1** is important to the intended product but can follow a P0 release; **P2** is valuable enhancement. Priorities are proposed for stakeholder review.

### 7.1 Positioning and company information

| ID | Priority | Requirement |
|---|---|---|
| PR-001 | P0 | The homepage shall state who Velnix serves, the business problems it addresses, and its main AI/software capabilities. |
| PR-002 | P0 | Visitors shall be able to navigate to company, service, industry, portfolio, contact, and blog information from the public site. |
| PR-003 | P1 | The site shall present the company's approach and engagement options in language understandable to business decision-makers. |
| PR-004 | P0 | Company facts, leadership details, testimonials, portfolio claims, and performance metrics shall have an accountable business owner and approval before publication. |

### 7.2 Service and industry discovery

| ID | Priority | Requirement |
|---|---|---|
| PR-010 | P0 | Visitors shall be able to explore the service areas currently represented on the site, including AI audit, agentic AI, automation, AI development, conversational AI, machine learning and data, computer vision/NLP, custom software, cloud/DevOps, web/mobile, UI/UX, and modernization. |
| PR-011 | P1 | Visitors shall be able to explore industry information for healthcare, fintech, education, e-commerce, food and groceries, travel and tourism, insurance, and on-demand services. |
| PR-012 | P1 | Service and industry content shall provide a relevant next action, such as a related detail page or contact path. |

### 7.3 Portfolio and proof

| ID | Priority | Requirement |
|---|---|---|
| PR-020 | P0 | Visitors shall be able to browse the portfolio and open supported case-study details. |
| PR-021 | P0 | Each portfolio item shall distinguish verified client delivery from concept, demo, prototype, or proposed pilot. |
| PR-022 | P0 | Quantitative outcome claims shall include an approved source, measurement context, timeframe, and permission to publish where applicable. |
| PR-023 | P1 | Visitors shall be able to move from a relevant portfolio example to a contact or service inquiry. |

### 7.4 Inquiry and contact

| ID | Priority | Requirement |
|---|---|---|
| PR-030 | P0 | Visitors shall be able to submit a project inquiry with required identity/contact fields and an appropriate service or project description. |
| PR-031 | P0 | Visitors shall receive a clear confirmation only after the inquiry has been successfully accepted, and a useful error when it has not. |
| PR-032 | P0 | Inquiry data shall be stored and accessible only under approved data-handling and access-control rules. |
| PR-033 | P1 | If file attachments are offered, the user shall be told whether the file itself is uploaded; the current form appears to record selected-file metadata in the message rather than upload the file. |

### 7.5 Blog and newsletter

| ID | Priority | Requirement |
|---|---|---|
| PR-040 | P0 | Visitors shall be able to view published blog posts and open a specific article through a stable, shareable URL. |
| PR-041 | P1 | Visitors shall be able to search or filter available blog content and receive an understandable empty/error state. |
| PR-042 | P0 | Visitors may subscribe to the newsletter using a valid email address and shall receive clear success, duplicate-subscription, or failure feedback. |
| PR-043 | P0 | Blog administration shall be restricted to authorized content administrators; public self-registration shall not grant publishing privileges unless explicitly approved. |
| PR-044 | P1 | Authorized editors shall be able to create, edit, publish, and manage blog content and approved images. |

### 7.6 Privacy, consent, and analytics

| ID | Priority | Requirement |
|---|---|---|
| PR-050 | P0 | The site shall describe relevant collection and use of personal data in accurate, approved privacy and cookie information. |
| PR-051 | P0 | Consent choices shall be honored by the technologies they govern, with a way to review or change a choice as required by the approved policy. |
| PR-052 | P1 | Analytics shall support page and conversion measurement using stakeholder-approved events and definitions. |

### 7.7 Quality and operations

| ID | Priority | Requirement |
|---|---|---|
| PR-060 | P0 | Core visitor journeys shall work on supported mobile and desktop browsers and provide accessible navigation, forms, and feedback. |
| PR-061 | P0 | The site shall provide working SEO metadata and discovery resources for public content. |
| PR-062 | P1 | The project shall define maintainers, service ownership, deployment responsibility, monitoring, and incident escalation. |
| PR-063 | P1 | The product owner shall approve measurable performance, availability, accessibility, and error-rate targets. |

## 8. User Stories and Acceptance Criteria

### US-01: Understand the offer

**As a** prospective client, **I want** to understand what Velnix does and whom it serves, **so that** I can decide whether to explore further.

Acceptance:
- The homepage communicates the target customer, core problems, and principal service categories.
- Primary navigation exposes the principal content areas.
- Main copy is readable at supported viewport sizes without clipped content.

### US-02: Find a relevant service or industry

**As a** business or technology leader, **I want** to browse service and industry information, **so that** I can identify relevant capabilities.

Acceptance:
- Each listed service and industry opens its corresponding supported route.
- A visitor can reach the contact path from relevant discovery content.
- Missing routes produce a useful not-found page rather than a blank screen.

### US-03: Evaluate a portfolio example

**As a** prospective client, **I want** to review relevant work and understand its evidence level, **so that** I can assess fit without mistaking a concept for a production deployment.

Acceptance:
- Portfolio items identify the problem and described solution.
- Delivery status is explicit (production, prototype, concept, or pilot).
- Any published metric has approved evidence and context, or is omitted.

### US-04: Submit an inquiry

**As a** prospective client, **I want** to submit my contact details and project context, **so that** Velnix can respond.

Acceptance:
- Required fields and invalid email input are identified before submission.
- The submit control indicates progress and prevents accidental duplicate submission while processing.
- A success state appears only after the data service confirms acceptance.
- On failure, entered data is preserved where practical and an actionable error is shown.
- The user is told plainly whether a selected file was uploaded or only referenced.

### US-05: Read and share a blog article

**As a** visitor, **I want** to open and share a specific article, **so that** another person can reach the same content.

Acceptance:
- Published articles can be listed and opened by a stable identifier or slug.
- A direct article URL loads the intended article after refresh.
- Missing or unpublished articles have a clear fallback state.

### US-06: Subscribe to updates

**As a** visitor, **I want** to subscribe with my email, **so that** I can receive newsletter updates.

Acceptance:
- Empty or invalid email addresses are rejected with clear feedback.
- Successful and already-subscribed outcomes are communicated.
- Service errors are not displayed as successful subscriptions.

### US-07: Manage content safely

**As an** authorized editor, **I want** to manage blog content and images, **so that** I can keep public content current.

Acceptance:
- Only approved administrator identities can create, edit, publish, upload, or delete content.
- Unauthorized visitors cannot gain these privileges through self-registration.
- Failed data or image operations are reported and do not claim success.

### US-08: Make a consent choice

**As a** visitor, **I want** to understand and control non-essential data collection as described by the approved policy, **so that** my preference is respected.

Acceptance:
- Each displayed consent option has a defined, distinct effect.
- Governed tracking does not run contrary to the selected preference.
- The visitor can review/change the preference when required by the approved policy.

## 9. Release Priorities

### P0: Trustworthy core

- Accurate company and service information.
- Working routes and responsive navigation for core content.
- Contact and newsletter submissions with correct success/error handling.
- Portfolio claims with appropriate evidence/status labels.
- Authorized-only blog administration.
- Consent controls that match actual tracking behavior.
- Baseline accessibility, SEO, error handling, and privacy review.

### P1: Growth and content improvements

- Validated analytics events and conversion reporting.
- Improved blog search/filter and content discovery.
- Stronger cross-linking between services, industries, and case studies.
- Approved service-level quality and operations objectives.

### P2: Optional enhancements

- Further content personalization, new self-service tools, or client portal functionality only after separate discovery and approval.

## 10. Dependencies

- Velnix leadership approval of company positioning, factual claims, and public content.
- Product/marketing owner for content and conversion goals.
- Netlify hosting and Functions configuration.
- Supabase project, schema, authentication, storage, and access policies.
- Google Analytics configuration and approved consent behavior.
- Domain, search, social sharing, and content publishing ownership.

## 11. Risks and Decisions Required

| Topic | Risk / decision |
|---|---|
| Portfolio evidence | Some entries describe illustrative concepts or proposed pilots; other outcome metrics are unverified in repository content. Establish publication standards and owners. |
| Contact uploads | The current contact implementation includes selected-file name/size in the inquiry text; confirm whether actual upload is intended. |
| Blog access | The repository contains sign-up and sign-in code. Confirm the intended administrator provisioning model and enforce authorization in Supabase policies and the application. |
| Consent vs. analytics | The current banner's Manage action stores a `custom` value but does not expose customization; analytics is initialized from the app entry point independently. Validate actual consent requirements and fix behavior before claiming that choices govern tracking. |
| Personal data | Confirm retention, access, deletion, newsletter consent, and policy accuracy with responsible legal/privacy owners. |
| Success targets | Traffic, lead, performance, availability, and quality targets have not been established in the reviewed materials. |
| Ownership | Confirm product owner, content owner, engineering maintainer, and production incident contacts. |

## 12. Traceability

The detailed, testable system requirements are defined in [Software Requirements Specification](./SOFTWARE_REQUIREMENTS_SPECIFICATION.md). This PRD's IDs are product-level outcomes and are mapped to SRS requirements there.

## 13. Approval

| Role | Name | Approval / date |
|---|---|---|
| Business owner | To be confirmed | Pending |
| Product owner | To be confirmed | Pending |
| Engineering owner | To be confirmed | Pending |
| Privacy/legal reviewer | To be confirmed | Pending |

---

**Review note:** This PRD is a repository-grounded draft, not an approved business commitment. Confirm product priorities, legal/privacy requirements, public claims, and success targets with their owners before treating it as a delivery baseline.
