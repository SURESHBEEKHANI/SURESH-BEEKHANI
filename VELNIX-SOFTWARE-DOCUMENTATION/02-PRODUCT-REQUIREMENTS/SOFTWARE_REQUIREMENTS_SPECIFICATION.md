# Velnix Solutions Website

## Software Requirements Specification

| Document field | Value |
|---|---|
| Document status | Draft for engineering and stakeholder review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](./PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Project context | [Project Brief](../01-PROJECT-INITIATION/PROJECT_BRIEF.md) |

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) describes the externally observable behavior and quality requirements for the Velnix Solutions website. It provides a basis for implementation, verification, release review, and future change control.

The repository is the source for statements about current implementation. Requirements written with “shall” describe the desired product behavior and are not, by themselves, evidence that the current site conforms. Each requirement must be verified before release.

### 1.2 Scope

The system is a public, browser-based marketing and lead-generation website for Velnix Solutions. It includes public company, service, industry, portfolio, blog, contact, and policy content; associated content-management access; and integrations used to store inquiries, blog content, and newsletter subscriptions.

The system does not include client project delivery software, a customer SaaS portal, or the AI systems and custom applications that Velnix may build for clients.

### 1.3 Intended audience

- Business and product owners.
- Frontend and integration engineers.
- Content administrators.
- Quality assurance and release engineers.
- Hosting, data-service, privacy, and security stakeholders.

### 1.4 Definitions

| Term | Definition |
|---|---|
| Visitor | A person using public website content without an administrative role. |
| Editor | A user authorized to manage blog content. |
| Inquiry | Contact form data submitted by a prospective client. |
| Published article | A blog record whose publication status is `published`. |
| Consent choice | A visitor selection about relevant categories of data collection or tracking. |
| Current implementation | Behavior directly observed in this repository; it may differ from the requirements below. |

### 1.5 Requirement conventions

- **Shall** denotes a requirement for the target system.
- **P0/P1/P2** use the priorities defined in the PRD.
- **Observed** means supported by inspected repository code or configuration.
- **Proposed** means a target requirement or quality criterion awaiting owner approval.
- Each requirement has a unique ID and a verification method.

## 2. Overall Description

### 2.1 Product perspective

The website is a React single-page application with client-side routes, static assets, and serverless endpoint integrations. The repository configures Netlify to publish the Vite build and route requests to Netlify Functions. Supabase is used by frontend features for contact, blog, newsletter, authentication, and image-storage operations. Google Analytics is configured for page tracking.

### 2.2 User classes

| User class | Capabilities |
|---|---|
| Public visitor | Browse public pages and articles, submit an inquiry, and optionally subscribe. |
| Blog editor/administrator | Authenticate and manage blog records and approved blog images, subject to server-side authorization. |
| Site maintainer | Deploy and maintain code, hosting configuration, integrations, and operational monitoring. |

### 2.3 Operating environment

**Observed implementation**

- React 18, TypeScript, Vite 5, and React Router DOM v6.
- Netlify build/deployment configuration and Netlify Functions.
- Supabase JavaScript client, Auth, database, and Storage calls.
- Google Analytics (`gtag.js`) integration.
- Responsive HTML/CSS and modern browser APIs.

The current supported browser/version matrix and formal service-level objectives are not documented in the repository and must be approved by the product/engineering owner.

### 2.4 Constraints

- The application requires `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` at frontend initialization; missing values currently cause an explicit error.
- The browser-visible Supabase key must be treated as a public/anonymous key; access control must be enforced by Supabase Auth and Row Level Security (RLS), not by hiding the key.
- Production routing, serverless runtime, and build behavior depend on Netlify configuration.
- Public content, privacy statements, consent behavior, testimonials, and outcome metrics require business approval.
- The project is private/proprietary according to the README.

### 2.5 Assumptions and external dependencies

- Netlify, Supabase, domain/DNS, and analytics accounts are operated outside the repository.
- Database tables, RPC functions, Storage buckets, Auth configuration, and RLS policies are provisioned in the connected Supabase project.
- Published content is reviewed by an authorized Velnix owner.
- The organization will define a supported browser matrix, data retention rules, and incident contacts.

## 3. System Context and Interfaces

### 3.1 User interface

The application shall provide a responsive website with:

- Shared navigation and route-aware page content.
- Public pages for home, service, industry, portfolio, blog, about, careers, contact, and legal/policy information.
- Forms that identify required or invalid input and report submission progress and outcome.
- Accessible status, validation, and error feedback.
- A consent interface whose options correspond to implemented behavior.

The observed visual identity uses a dark background and lime-green accent palette. This SRS does not prescribe a redesign.

### 3.2 Supabase interface

Repository usage identifies the following data interfaces:

| Interface | Observed operation |
|---|---|
| `Contact Us` table | Contact form inserts inquiry fields such as name, email, phone, subject, message, help topic, and agreement. |
| `blogs` table | Public page reads records filtered to `status = published`; the admin page reads and manages blog records. |
| `newsletter_signups` table | Newsletter forms insert email addresses. |
| `blog-images` Storage bucket | Blog admin uploads cover/content images and generates public URLs. |
| Supabase Auth | Blog admin code checks sessions and supports sign-in and sign-up. |
| `increment_blog_view` RPC | Blog views are incremented through an RPC, with a table update fallback in the current client code. |

The actual schema, RLS policy, Auth allowlist, retention, and backup configuration are external to this repository and must be reviewed in the deployed Supabase project.

### 3.3 Netlify interface

The repository configures Netlify to run `npm run build`, publish `dist`, and use `netlify/functions`. Functions include RSS, sitemap, `llms.txt`, and SEO synchronization endpoints. Production behavior depends on environment variables and deployment configuration.

### 3.4 Analytics interface

Google Analytics is configured through `VITE_GA_MEASUREMENT_ID`, with a measurement ID fallback currently present in source. Consent gating and the exact event taxonomy require review before launch approval.

## 4. Functional Requirements

### 4.1 Navigation and route handling

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-001 | P0 | The system shall expose the approved public routes for home, service, industry, portfolio, blog, company, contact, and policy pages. | Route smoke test against the approved route inventory. |
| SRS-F-002 | P0 | The system shall render a not-found page for an unknown route and shall not leave the application blank. | Navigate to an unknown path and verify not-found content. |
| SRS-F-003 | P0 | The navigation and page content shall remain usable at the approved mobile, tablet, and desktop viewport sizes. | Responsive browser test at the approved viewport matrix. |
| SRS-F-004 | P1 | Direct navigation and refresh on supported client-side routes shall resolve to the intended page in production hosting. | Test direct URL and refresh on Netlify preview/deployment. |

### 4.2 Service, industry, and portfolio discovery

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-010 | P0 | Each service link presented as navigable shall resolve to the corresponding service route or a deliberate fallback. | Crawl rendered service links and assert destination. |
| SRS-F-011 | P1 | Each industry link presented as navigable shall resolve to its corresponding industry route or a deliberate fallback. | Crawl rendered industry links and assert destination. |
| SRS-F-012 | P0 | Each portfolio item shall display its title and relevant problem/solution summary and shall link to the configured detail route where one exists. | Compare portfolio registry with route inventory and test links. |
| SRS-F-013 | P0 | Each portfolio item shall explicitly identify its evidence status as production delivery, prototype, concept, or proposed pilot when applicable. | Editorial acceptance review of every published portfolio item. |
| SRS-F-014 | P0 | The system shall not present a quantitative outcome as verified without an approved source, timeframe, definition, and publication permission. | Content audit against an approved evidence register. |

### 4.3 Contact inquiry

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-020 | P0 | The contact form shall require a non-empty name and email address and shall validate email format before submission. | Submit empty and malformed values; verify field feedback. |
| SRS-F-021 | P0 | The contact form shall require affirmative agreement to the applicable terms before submission. | Submit without agreement and verify rejection. |
| SRS-F-022 | P0 | The system shall submit the inquiry to the configured data service and shall display success only when the service confirms acceptance. | Mock success and error responses; assert distinct user-visible states. |
| SRS-F-023 | P0 | On submission failure, the system shall display an actionable error and shall not clear entered inquiry data. | Simulate network/database failure and verify input preservation. |
| SRS-F-024 | P0 | While a submission is pending, the form shall communicate progress and prevent duplicate submissions from repeated activation. | Delay response and activate submit multiple times. |
| SRS-F-025 | P0 | The system shall transmit only the inquiry fields required for the approved business purpose and shall handle personal data under approved retention and access rules. | Inspect request payload and verify deployed RLS/retention controls. |
| SRS-F-026 | P0 | If file selection remains available, the interface shall state whether the file bytes are uploaded. It shall not imply an upload when only file name and size are recorded. | Select a file; inspect UI, network request, and stored inquiry. |

**Observed behavior requiring product confirmation:** The contact implementation currently appends a selected file's name and size to the inquiry message. The inspected submission path does not upload the selected file itself.

### 4.4 Blog reading and discovery

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-030 | P0 | The public blog page shall retrieve only records whose status is `published`. | Seed published and non-published records and inspect visible results. |
| SRS-F-031 | P0 | A published article shall be addressable by a stable article identifier or supported slug in the URL query, and direct navigation shall select that article. | Open and refresh a URL containing `article=<id>` and verify selection. |
| SRS-F-032 | P0 | If an article identifier is absent, invalid, unpublished, or unavailable, the system shall show a clear list or not-found state rather than stale content. | Test missing, unknown, and unpublished article identifiers. |
| SRS-F-033 | P1 | Search and category filters shall operate on available published articles and provide clear loading, empty, and error states. | Exercise search/category results and simulate data-service failure. |
| SRS-F-034 | P1 | The system shall count a visitor's article view no more than once per article per page session, subject to the approved measurement definition. | Verify repeated article selection does not duplicate the client-side count operation. |

### 4.5 Newsletter signup

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-040 | P0 | The newsletter form shall reject an empty or malformed email address before sending a request. | Submit empty and malformed addresses. |
| SRS-F-041 | P0 | The system shall report successful subscription only after the data service accepts the request. | Test success and service-error responses. |
| SRS-F-042 | P0 | A duplicate signup shall receive an accurate, non-error outcome and shall not create a duplicate record. | Submit the same normalized email twice and verify database behavior. |
| SRS-F-043 | P0 | The system shall not subscribe a visitor to marketing messages without the required consent and shall record the consent evidence required by policy. | Review consent copy, payload, database schema, and end-to-end subscription behavior. |

### 4.6 Blog administration and image storage

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-050 | P0 | The system shall restrict blog create, edit, publish, delete, and image-upload operations to authorized administrator identities. | Attempt operations as anonymous, ordinary authenticated, and authorized admin users. |
| SRS-F-051 | P0 | Supabase RLS and Storage policies shall enforce the same authorization boundary independently of client-side route visibility. | Inspect deployed policies and test direct API requests for each role. |
| SRS-F-052 | P0 | Public account registration shall be disabled or shall not grant blog-administration privileges unless the business owner explicitly approves a controlled onboarding flow. | Test sign-up path and verify role assignment and permissions. |
| SRS-F-053 | P1 | The administration workflow shall support the approved lifecycle for creating, editing, saving, publishing, and managing blog records. | Execute lifecycle tests against a test Supabase project. |
| SRS-F-054 | P1 | Image upload shall accept only approved MIME types and shall report upload errors without saving a false success state. | Test allowed and disallowed types and simulate Storage failure. |
| SRS-F-055 | P1 | The system shall prevent unsafe file uploads using server-side validation, size limits, and storage policies in addition to browser-side checks. | Review and test deployed upload policies and limits. |

**Observed behavior requiring product confirmation:** The blog administration code includes sign-up and sign-in paths. Authorization must be verified in deployed Supabase policies; client-side checks alone do not secure data.

### 4.7 Consent, privacy, and analytics

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-060 | P0 | The system shall present consent choices using language approved by the responsible privacy/legal owner. | Content and policy review. |
| SRS-F-061 | P0 | Each consent choice shall have a documented, distinct effect on the relevant analytics and non-essential storage behavior. | Automated browser test of each choice and inspection of network/storage activity. |
| SRS-F-062 | P0 | The system shall allow visitors to review or change stored consent when required by approved policy. | Exercise preference-management flow after an initial choice. |
| SRS-F-063 | P1 | Analytics shall record only the stakeholder-approved page and conversion events and shall avoid sending unnecessary personal data. | Inspect event payloads and validate against approved event schema. |

**Observed behavior requiring remediation/approval:** The cookie banner currently stores `all`, `essential-only`, or `custom` in local storage, but the Manage action does not expose category settings. Analytics is initialized from the application entry point independently of the banner choice. The current behavior therefore must not be described as consent-gated until verified and corrected.

### 4.8 SEO and content discovery

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-F-070 | P0 | Public routes shall provide a meaningful page title, description, canonical URL, and relevant social metadata according to the approved SEO policy. | Crawl representative pages and validate metadata. |
| SRS-F-071 | P0 | The sitemap shall contain valid canonical public URLs and shall not expose localhost or non-public preview URLs. | Generate/fetch sitemap and parse all locations. |
| SRS-F-072 | P1 | RSS output shall include published articles with valid links and publication metadata. | Fetch RSS endpoint and validate XML and article records. |
| SRS-F-073 | P1 | `llms.txt` and SEO synchronization endpoints shall return valid, current content or an explicit error when dependencies fail. | Exercise endpoint success and failure cases. |

## 5. Data Requirements

### 5.1 Data entities observed in code

| Entity | Data elements observed or implied | Data owner/retention |
|---|---|---|
| Inquiry | Name, email, phone, service/help topic, subject, message, agreement, country/phone code, optional selected-file metadata | To be defined by business/privacy owner |
| Blog | Identifier, title, content, category, status, image URL, creation date, view count, optional slug | To be defined by content owner |
| Newsletter signup | Email address | To be defined by business/privacy owner |
| Blog image | Uploaded image file and public URL; object path includes authenticated user ID | To be defined by system owner |
| Consent preference | Current code stores a local-storage string value | Purpose, retention, and semantics require approval |

The actual database schema and required constraints must be read from the deployed Supabase schema and migrations before implementation or testing decisions are finalized.

### 5.2 Data handling requirements

- Data collection shall be limited to what is needed for the documented purpose.
- Data sent to a service shall be validated by the application and independently constrained by backend/database policies where applicable.
- Public, anonymous, and administrator access boundaries shall be enforced server-side.
- Data retention, export, correction, and deletion rules shall be approved and documented by the data owner.
- No production credentials, service-role keys, or secrets shall be embedded in client assets.

## 6. Non-Functional Requirements

The repository does not establish approved service-level targets. Numeric targets below are **proposed acceptance baselines** for product/engineering review; they must not be represented as existing production performance.

| ID | Priority | Requirement | Verification |
|---|---|---|---|
| SRS-NF-001 | P0 | The public site shall render and support core journeys at the product-approved mobile, tablet, and desktop viewport matrix without horizontal overflow or inaccessible controls. | Browser/device test matrix. |
| SRS-NF-002 | P0 | All interactive functions shall be operable by keyboard, expose accessible names and states, and show visible focus. | Keyboard-only and accessibility audit. |
| SRS-NF-003 | P0 | Form errors, submission status, and important asynchronous outcomes shall be programmatically associated with their controls or announced to assistive technology. | Screen-reader and accessibility-tree test. |
| SRS-NF-004 | P0 | Motion shall respect the user's reduced-motion preference for non-essential animation. | Emulate `prefers-reduced-motion` and inspect transitions. |
| SRS-NF-005 | P0 | The application shall not expose privileged service credentials in client code or build output. | Secret scanning and bundle/configuration review. |
| SRS-NF-006 | P0 | Authorization for administrative data changes and uploads shall be enforced by the data service and storage policies. | Role-based integration and policy tests. |
| SRS-NF-007 | P0 | Failures of contact, blog, newsletter, authentication, storage, and content endpoints shall be visible and shall not be represented as successful operations. | Fault-injection tests for each integration. |
| SRS-NF-008 | P1 | On the agreed representative mobile/desktop test profiles, production navigation performance should meet approved Core Web Vitals targets; proposed starting targets are LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile. | Field data when available and repeatable production-like lab runs. |
| SRS-NF-009 | P1 | The engineering owner shall define availability, recovery, and alerting objectives for the website and external services before production operations are considered complete. | Approved operations runbook and service configuration review. |
| SRS-NF-010 | P1 | The application shall support the most recent two major versions of Chrome, Edge, Firefox, and Safari unless a different browser policy is approved. | Automated and manual browser matrix. |
| SRS-NF-011 | P1 | Public pages shall meet WCAG 2.2 AA as the proposed accessibility target, subject to formal audit and owner approval. | Automated checks plus manual keyboard and assistive-technology review. |
| SRS-NF-012 | P1 | Changes to routes, forms, content retrieval, consent, and administration shall have repeatable regression checks appropriate to their risk. | CI/test-suite review and release checklist. |
| SRS-NF-013 | P1 | Production configuration and deployment shall be reproducible from documented manifests, environment-variable names, and approved access procedures. | Clean build/deployment rehearsal without privileged values in source. |
| SRS-NF-014 | P1 | Logs and analytics shall avoid recording unnecessary sensitive form content, passwords, authentication tokens, or secrets. | Log/event payload review and targeted tests. |

## 7. Error Handling

- Validation errors shall identify the field or action that needs correction.
- Network or backend failures shall use a clear, non-technical visitor message and a useful operator diagnostic that does not disclose secrets or unnecessary personal data.
- Loading state shall end after success, failure, or cancellation where cancellation is supported.
- A failed submission shall not trigger a success toast, redirect, or cleared form.
- An unavailable article shall not leave an unrelated previously selected article displayed.
- Data-service fallbacks shall not silently mask failed persistence or produce inaccurate counts.
- If an endpoint cannot provide dynamic content, it shall return a valid fallback only when the fallback is truthful and clearly distinguishable from live data.

## 8. Security and Privacy Requirements

- Supabase RLS shall be enabled and reviewed for contact, blogs, newsletter signups, and any user/profile data touched by the application.
- Administrative permissions shall be assigned through a documented, controlled process; public sign-up shall not imply administrator access.
- Storage policies shall constrain upload identity, path, type, and size; public read access shall be intentional and approved.
- Authentication errors shall not reveal whether arbitrary accounts exist beyond the approved identity flow.
- Personal data fields, processing purpose, retention, and access roles shall be reviewed by the responsible privacy owner.
- Analytics and cookies shall follow the approved consent and privacy policy in actual runtime behavior.
- Security and privacy testing shall use test accounts and non-production data.

This section defines software controls to verify; it is not a claim of legal compliance, certification, or security assurance.

## 9. Verification Strategy

| Test level | Minimum verification |
|---|---|
| Unit/component | Form validation, consent state transitions, route selection, article query parsing, and error/success state logic. |
| Integration | Supabase success/failure, duplicate newsletter behavior, authentication roles, RLS, Storage restrictions, and article view update behavior. |
| End-to-end | Visitor journeys for service discovery, portfolio-to-contact, contact submission, article deep link, newsletter signup, and unauthorized admin access. |
| Accessibility | Keyboard navigation, focus visibility, semantic structure, form announcements, contrast, reduced motion, and representative screen-reader checks. |
| SEO/content | Metadata, canonical URLs, sitemap XML, RSS XML, redirect behavior, and crawlable public route inventory. |
| Performance | Production-like mobile and desktop checks against owner-approved Web Vitals and asset budgets. |
| Release | Environment configuration, build, deployment preview, production smoke tests, monitoring, and rollback readiness. |

## 10. Traceability Matrix

| Product requirement | SRS requirements |
|---|---|
| PR-001–PR-004 | SRS-F-001–F-004, SRS-F-012–F-014, SRS-F-070 |
| PR-010–PR-012 | SRS-F-010–F-011 |
| PR-020–PR-023 | SRS-F-012–F-014 |
| PR-030–PR-033 | SRS-F-020–F-026 |
| PR-040–PR-044 | SRS-F-030–F-034, SRS-F-050–F-055 |
| PR-050–PR-052 | SRS-F-060–F-063, SRS-NF-002–NF-005, SRS-NF-014 |
| PR-060–PR-063 | SRS-F-001–F-004, SRS-F-070–F-073, SRS-NF-001–NF-014 |

## 11. Open Items

1. Confirm product owner, business owner, engineering owner, privacy reviewer, and content administrator.
2. Approve requirements priorities, supported browser matrix, accessibility target, and performance/availability targets.
3. Verify deployed Supabase schema, RLS policies, Auth signup settings, image-storage policies, and production data retention.
4. Decide whether contact-form file attachments are supported; implement real upload or remove/clarify the current metadata-only behavior.
5. Resolve consent/analytics behavior with the privacy owner and verify it in the deployed application.
6. Establish portfolio evidence standards and review all public metrics and client-identifying material.
7. Approve newsletter consent, confirmation/verification, and unsubscribe behavior.
8. Confirm direct-route hosting behavior, monitoring, backup, incident response, and rollback procedures.

## 12. Approval

| Role | Name | Approval / date |
|---|---|---|
| Product owner | To be confirmed | Pending |
| Engineering owner | To be confirmed | Pending |
| Business owner | To be confirmed | Pending |
| Privacy/security reviewer | To be confirmed | Pending |

---

**Review note:** This SRS is a draft derived from repository inspection. Requirements and proposed targets require stakeholder approval, and implementation conformance requires testing against production-like services and policies.
