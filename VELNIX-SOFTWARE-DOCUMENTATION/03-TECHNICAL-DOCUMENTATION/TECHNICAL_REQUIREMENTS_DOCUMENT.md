# Velnix Solutions Website

## Technical Requirements Document

| Document field | Value |
|---|---|
| Document status | Draft for engineering review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Technical design | [Technical Design Document](./TECHNICAL_DESIGN_DOCUMENT.md) |

## 1. Purpose

This document records technical platform constraints, implementation requirements, external service dependencies, and engineering acceptance criteria for the Velnix Solutions website. It complements the behavior-oriented Software Requirements Specification (SRS) with requirements for the technologies and operating environment.

The requirements below distinguish repository-observed facts from proposed controls. Proposed policies and targets require approval by the engineering, product, security, and privacy owners as appropriate.

## 2. System Boundary

The system under consideration comprises:

- The React/TypeScript browser application and static media.
- Vite build scripts and generated SEO assets.
- Netlify static hosting, routing, and serverless Functions.
- Supabase Auth, database, Storage, and browser/client integrations.
- Google Analytics and its consent/configuration boundary.

External systems are managed services. Their availability, schema, access policies, backups, and service-level commitments must be managed and verified outside the source repository.

## 3. Current Platform Baseline

| Area | Repository-observed baseline |
|---|---|
| Runtime/UI | React 18 and React DOM 18 |
| Language | TypeScript; JavaScript ESM for scripts and Netlify Functions |
| Bundler/dev server | Vite 5 with `@vitejs/plugin-react-swc` |
| Routing | React Router DOM v6 |
| CSS/UI | Tailwind CSS 3, PostCSS, Radix UI primitives, project CSS |
| Client services | Supabase JS v2; TanStack Query v5 is configured in the app |
| Forms/motion | React Hook Form, Zod, Framer Motion |
| Build output | `dist/`; hashed JS/assets; minification with Terser; source maps disabled |
| Hosting | Netlify static publish and Netlify Functions bundled with esbuild |
| Analytics | Google Analytics `gtag.js` |
| Application language target | ES2020 TypeScript configuration; Vite build target `esnext` |

Versions above describe declared dependency major lines in the current package manifest, not an approved upgrade/support policy.

## 4. Environment Requirements

### 4.1 Development environment

- Node.js and npm versions shall be pinned or documented by the project owner for reproducible install, test, and build behavior. The repository currently does not declare a Node engine range.
- The developer shall be able to install dependencies from the lockfile, run Vite, run the agreed lint/test commands, and build without production credentials.
- Local environment values shall be stored outside source control and use a local/test Supabase project where integration testing is required.
- `VITE_DEV_PORT` may configure the local Vite port; the current default is `5173`.
- The root scripts expose `dev`, `build`, `build:dev`, `build:prod`, `lint`, `preview`, `deploy:frontend`, `test:functions`, `test:js-functions`, `dev:full`, and `serve`. Test file availability and exact CI coverage must be verified before release automation depends on a script.

### 4.2 Build environment

- The production build shall run `npm run build`, which invokes the package `prebuild` lifecycle before Vite.
- The build shall emit a deployable static site to `dist/`.
- The build process shall use only documented environment variables and shall not require a developer's personal credentials.
- If SEO generation is unavailable, the release process shall report that condition and verify the resulting sitemap and `llms.txt` freshness before deployment. Current behavior logs a warning and preserves prior files rather than failing the build.
- Production source maps are currently disabled. If source maps are enabled for error monitoring later, access and upload handling shall be restricted.

### 4.3 Hosting environment

- Netlify shall publish the `dist/` output and bundle functions under `netlify/functions/`.
- SPA routes shall resolve to `index.html` through the configured fallback redirect.
- `/rss.xml`, `/sitemap.xml`, `/llms.txt`, and `/api/sync-seo` shall resolve to their intended handlers in the deployed environment.
- Required environment variables shall be configured independently per environment and must not be printed in logs.
- Production and preview must use intentionally selected service projects and credentials; test records must not leak into production.

## 5. Configuration Requirements

| Variable | Consumer | Requirement |
|---|---|---|
| `VITE_SUPABASE_URL` | Browser client, SEO build/function code | Configure the correct Supabase endpoint per environment. It is embedded in the browser bundle where used and is not a secret. |
| `VITE_SUPABASE_ANON_KEY` | Browser client and some SEO code | Use only the intended anonymous/publishable key; it is browser-visible. RLS must protect records and operations. |
| `VITE_GA_MEASUREMENT_ID` | Browser analytics | Configure the approved analytics property and ensure loading follows the consent design. |
| `VITE_DEV_PORT` | Local Vite server | Optional local port override. |
| `SUPABASE_URL` | RSS serverless function override | Server-side endpoint configuration. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional RSS function override | Privileged secret, server-side only. Do not copy to `VITE_` variables, static assets, client bundles, logs, or documentation. Prefer read-only least-privilege access for feeds. |
| `NETLIFY_BUILD_HOOK` or `VITE_NETLIFY_BUILD_HOOK` | SEO synchronization function | A build-hook URL is a secret capability; configure only in protected server-side settings and use one canonical variable name. |

**Configuration risk:** Several SEO files currently contain fallback Supabase endpoint and anonymous-key values. Treat them as public values, never replace them with a service-role key, and plan migration to explicit environment configuration with failure behavior that is observable and safe.

## 6. Technical Requirements

Priority: **P0** is a production safety or core operation requirement; **P1** is an important maintainability/quality requirement; **P2** is a future enhancement.

### 6.1 Architecture and application

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| TR-001 | P0 | The production build shall be reproducible from the declared package manifest and committed lockfile using the project-approved Node/npm versions. | Clean install and build in CI. |
| TR-002 | P0 | Client-side public routes shall resolve on direct navigation and refresh through production hosting. | Netlify preview smoke test for representative routes in every route family. |
| TR-003 | P1 | Route modules and non-critical homepage sections shall remain eligible for lazy loading unless a measured performance or UX reason justifies eager loading. | Bundle/route loading inspection and performance comparison. |
| TR-004 | P1 | TypeScript path alias `@/` and module resolution shall behave consistently in editor, build, and test environments. | Build and test import-resolution checks. |
| TR-005 | P1 | Shared route, content, and integration behavior shall have automated regression checks at appropriate unit, integration, or browser-test levels. | CI test report with critical journeys covered. |
| TR-006 | P1 | Project build/runtime dependencies shall be reviewed for actual usage; unused declared AI/vector packages shall not be represented as active runtime features without implementation evidence. | Dependency usage review and documentation. |

### 6.2 Supabase and data access

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| TR-010 | P0 | Every exposed table and Storage bucket shall have a documented access matrix for anonymous, authenticated, editor/admin, and service roles. | Reviewed schema and policy matrix. |
| TR-011 | P0 | RLS shall be enabled and least-privilege policies shall enforce the approved access matrix on contact, blog, and newsletter data. | Supabase policy review and role-based API tests. |
| TR-012 | P0 | Blog write access shall be restricted to approved administrator roles, not granted to every authenticated user. | Negative/positive policy tests with representative users. |
| TR-013 | P0 | Public article retrieval shall expose published content only, regardless of UI filters or direct API calls. | Anonymous direct-query tests for published and unpublished rows. |
| TR-014 | P0 | Storage upload, update, delete, and read policies shall enforce approved user, path, type, size, and public visibility constraints. | Storage integration tests and deployed policy review. |
| TR-015 | P0 | Client applications shall use only a public/anonymous key and shall never depend on frontend-only checks to secure privileged operations. | Bundle scan and policy tests. |
| TR-016 | P1 | The system shall use one canonical blog publication-state field for public listing, sitemap, RSS, and other discovery outputs. | Schema contract test across blog UI, sitemap, RSS, and `llms.txt`. |
| TR-017 | P1 | Database schema and policy changes shall be reviewed, versioned, and applied through an approved migration process with verification queries. | Migration review, deployment record, and post-migration checks. |
| TR-018 | P1 | Contact and newsletter data shall have approved retention, deletion, and administrative-access controls. | Data-handling policy and service configuration evidence. |

### 6.3 SEO and serverless functions

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| TR-020 | P0 | Dynamic sitemap output shall be valid XML, use canonical public URLs, and exclude localhost, preview-only, and unpublished article URLs. | XML parser plus URL/status assertions. |
| TR-021 | P0 | RSS output shall be valid XML and include only published records under the canonical publication-state contract. | RSS parser and test fixtures for every publication state. |
| TR-022 | P1 | SEO generation failures shall be visible to release checks and shall not silently certify stale output as current. | Simulated upstream failure and build/deployment status assertion. |
| TR-023 | P1 | SEO merge operations shall preserve valid static content and update only designated generated sections. | Fixture tests for marked, unmarked, and malformed input files. |
| TR-024 | P1 | Build-hook synchronization shall accept only the intended HTTP method and shall not disclose hook URLs or credentials in responses/logs. | Function tests for method, success, and upstream failure. |
| TR-025 | P1 | Dynamic function responses shall set an appropriate content type and explicit cache policy. | Header tests for XML, text, and error responses. |

### 6.4 Security, privacy, and browser behavior

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| TR-030 | P0 | Privileged keys and build-hook URLs shall be stored in protected server-side environment configuration and excluded from client bundles and repository content. | Secret scanning, bundle scan, and deployment configuration review. |
| TR-031 | P0 | Analytics initialization shall conform to the approved consent and privacy policy in actual browser network behavior. | Automated acceptance tests for each consent state. |
| TR-032 | P0 | Application errors and logs shall not include passwords, tokens, privileged credentials, or unnecessary personal form content. | Error-path tests and log review. |
| TR-033 | P0 | Administrative login and role assignment shall use a controlled authorization process; self-registration shall not grant administrative privileges. | Auth flow and role policy tests. |
| TR-034 | P1 | Dependency vulnerabilities shall be reviewed through the team's approved cadence and remediation policy. | Recorded audit/review result and remediation decisions. |
| TR-035 | P1 | Non-essential motion shall respect `prefers-reduced-motion`; core interactions shall not depend solely on hover or animation. | Reduced-motion and keyboard testing. |

### 6.5 Accessibility and performance

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| TR-040 | P0 | Forms, navigation, dialogs, and asynchronous states shall have accessible labels, keyboard behavior, and visible focus. | Manual keyboard test and automated accessibility checks. |
| TR-041 | P1 | WCAG 2.2 AA shall be the proposed target pending owner approval. | Independent accessibility review and issue tracking. |
| TR-042 | P1 | Production performance shall be measured on approved representative devices and networks; proposed Core Web Vitals starting targets are LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile. | Field metrics where available and reproducible lab results. |
| TR-043 | P1 | Image and JS delivery shall be monitored to prevent regressions to initial load and route interactions. | Build artifact review and performance budgets approved by engineering. |
| TR-044 | P2 | Numeric compressed bundle/asset budgets shall be set after collecting a production baseline. | Approved budget in CI and documented baseline. |

### 6.6 Operations and maintainability

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| TR-050 | P0 | Production deployments shall have a documented owner, environment separation, smoke-test checklist, and rollback procedure. | Approved release runbook and successful rehearsal. |
| TR-051 | P1 | Netlify, Supabase, domain, and analytics ownership shall have named administrators and recovery contacts. | Access inventory maintained in an approved secure system. |
| TR-052 | P1 | Production availability, error monitoring, alert thresholds, backups, and recovery objectives shall be defined by service owners. | Operations plan and configuration inspection. |
| TR-053 | P1 | Deployment and runtime logs shall make build, function, and integration failures diagnosable without exposing sensitive data. | Test failures and redacted log samples. |
| TR-054 | P1 | Supported browser versions and test devices shall be explicitly documented; proposed baseline is the latest two major versions of Chrome, Edge, Firefox, and Safari. | Approved browser support statement and CI/browser test results. |
| TR-055 | P1 | The project shall maintain architecture, environment-variable names, integration contracts, and operational procedures in version-controlled documentation. | Documentation review during release readiness. |

## 7. Data and Interface Contracts

### 7.1 Browser-to-Supabase

- The shared Supabase client is initialized once from `src/lib/supabaseClient.ts`.
- Missing required browser configuration currently causes initialization to throw; build/deployment checks shall validate configuration before users access the application.
- Client-side validation improves usability but does not replace database constraints, RLS, or server-side validation.
- The live Supabase schema and access policy are the source of truth for table contracts; the repository contains SQL scripts but does not prove which scripts have been applied.

### 7.2 Blog publication contract

The blog UI and sitemap generation select records with `status = 'published'`; the RSS Function selects records with `published = true`. Engineering shall verify the actual schema and select one canonical publication contract. Tests shall ensure that draft/unpublished records never appear in any public channel.

### 7.3 Contact file handling

The contact component currently stores selected-file name and size in the inquiry message. The inspected path does not upload bytes. The technical contract must either:

1. Remove file-selection UI and metadata if attachments are not supported; or
2. Define authenticated or signed upload, type/size limits, malware/content validation appropriate to the business, storage permissions, privacy/retention, and failure handling.

Do not represent metadata-only behavior as a completed file upload.

### 7.4 Error response contract

- Functions shall return status codes aligned to success, client error, and upstream/server failure.
- Public errors shall be concise and shall not disclose secrets or stack traces.
- Operational logs may include a request correlation identifier and safe diagnostic details, but no credentials or unnecessary personal data.
- Build-time stale-file fallbacks shall be visible in the release result and subjected to freshness validation.

## 8. Proposed Quality Targets and Approval

| Quality area | Proposed target | Owner approval |
|---|---|---|
| Accessibility | WCAG 2.2 AA for public journeys | Pending |
| Web performance | LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at 75th percentile | Pending |
| Browser support | Latest two major versions of Chrome, Edge, Firefox, Safari | Pending |
| Availability | Define by service and hosting owner | Pending |
| Recovery | Define RTO/RPO for Supabase and content data | Pending |
| Data retention | Define by privacy/business owner for inquiry and subscription data | Pending |
| Deployment cadence | Define release approval and rollback process | Pending |

These are proposed targets. Do not publish them as current measured service levels before collecting and approving evidence.

## 9. Verification and Release Gates

### Required release checks

1. Clean dependency install using the approved Node/npm versions.
2. ESLint and all relevant automated test suites.
3. Production build with environment configuration supplied through protected settings.
4. Route smoke tests for homepage, each page family, blog deep links, and not-found handling.
5. Contact and newsletter success, validation, duplicate, offline, and service-error tests.
6. Supabase policy tests for anonymous, ordinary authenticated, and administrator roles.
7. Storage tests for allowed and disallowed upload scenarios.
8. Consent-state tests observing analytics/network behavior.
9. Sitemap, RSS, and `llms.txt` validity, publication filtering, canonical URL, and cache-header checks.
10. Keyboard, reduced-motion, screen-reader/accessibility, and responsive viewport checks.
11. Production-like monitoring, alerting, backup, and rollback readiness review.

### Current validation caveat

An earlier TypeScript check of the repository reported unresolved imports and unrelated type errors in other application files. The documentation requirements do not imply those issues have been fixed. Re-run the current build, lint, and targeted integration checks before release and record the results against the relevant requirements.

## 10. Risks and Engineering Actions

| Risk | Technical impact | Required action |
|---|---|---|
| Broad authenticated blog write policy in checked-in SQL script | Any authenticated user matching the script's policy may receive write access if applied | Inspect deployed policies; implement and test a controlled administrator role/claim. |
| Blog admin sign-up code | Account creation could be confused with trusted administrator provisioning | Confirm intended onboarding; ensure role grant is controlled server-side. |
| RSS publication boolean differs from UI/sitemap status field | Public feeds may omit published posts or expose records inconsistently | Validate live schema and unify query contract. |
| Consent choices do not govern analytics bootstrap in inspected code | Visitor preferences may not match actual tracking behavior | Define policy and test network behavior for each choice. |
| SEO build errors preserve existing output and do not fail build | Stale discoverability data can be deployed with apparent build success | Add a release check for freshness and report generation failure. |
| Hard-coded fallback project configuration in SEO code | Environment drift and unclear configuration ownership | Remove fallback where practical; configure explicit environment values. |
| Supabase policies and data schema are external | Repository tests alone cannot establish production security or correctness | Run integration tests against isolated staging and review actual deployed schema/policies. |
| No declared Node engine range | Local/CI behavior can differ by runtime | Pin/document supported runtime and enforce in CI. |

## 11. Traceability

This document complements:

- [Project Brief](../01-PROJECT-INITIATION/PROJECT_BRIEF.md), which defines project context, business outcomes, audiences, and scope.
- [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md), which defines product-level needs and priorities.
- [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md), which defines system behavior, data requirements, and test verification.
- [Technical Design Document](./TECHNICAL_DESIGN_DOCUMENT.md), which records the implementation architecture and integration design.

## 12. Approval

| Role | Name | Approval / date |
|---|---|---|
| Engineering owner | To be confirmed | Pending |
| Product owner | To be confirmed | Pending |
| Security/data owner | To be confirmed | Pending |
| Privacy/legal owner | To be confirmed | Pending |
| Operations/hosting owner | To be confirmed | Pending |

---

**Review note:** This document records repository-visible technical facts and proposes controls for review. Production configuration and service policies must be independently verified; proposed targets require owner approval.