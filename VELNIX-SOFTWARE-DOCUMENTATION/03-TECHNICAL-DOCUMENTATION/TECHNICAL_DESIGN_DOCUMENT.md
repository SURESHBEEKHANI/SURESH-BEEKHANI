# Velnix Solutions Website

## Technical Design Document

| Document field | Value |
|---|---|
| Document status | Draft for engineering review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Project context | [Project Brief](../01-PROJECT-INITIATION/PROJECT_BRIEF.md) |

## 1. Purpose and Status

This document describes the architecture and technical design visible in the repository, along with integration boundaries and key implementation risks. It is intended for engineering, QA, operations, and product stakeholders.

The design is repository-grounded, not an assurance of production configuration. Deployed Netlify settings, Supabase schema and policies, analytics consent behavior, DNS, access controls, backup settings, and service-level targets require verification in their respective accounts.

## 2. System Overview

The website is a React single-page application built with Vite and TypeScript. React Router selects page content on the client. Netlify serves the compiled static application, routes client-side paths to the application entry point, and exposes serverless functions for dynamic SEO-related resources. The browser application communicates directly with Supabase for selected application features. Static assets and SEO files are included in the repository's `public/` directory.

```text
Visitor browser
  ├── Static application and assets ───────> Netlify CDN / published dist
  ├── Client-side routes and UI ───────────> React + React Router
  ├── Contact/blog/newsletter requests ────> Supabase Auth / PostgREST / Storage
  └── Page analytics ──────────────────────> Google Analytics (configured)

Build / deployment
  ├── npm run build
  │     └── prebuild: generate-seo-files.mjs
  ├── Vite production build ────────────────> dist/
  └── Netlify publish + serverless functions
        ├── /sitemap.xml ───────────────────> sitemap function
        ├── /rss.xml ───────────────────────> RSS function
        ├── /llms.txt ──────────────────────> llms function
        └── /api/sync-seo ──────────────────> SEO sync function
```

The diagram represents configured code paths. Actual production routing, credentials, permissions, consent handling, and endpoint availability must be confirmed in the deployed environment.

## 3. Architectural Style and Design Principles

- **Static-first web delivery:** Vite builds browser assets into `dist/`; Netlify publishes the build.
- **Client-side page routing:** React Router owns route selection; Netlify's catch-all redirect returns the SPA entry point for page paths.
- **Feature-oriented composition:** The route shell loads page components, and the homepage composes reusable sections.
- **Selective lazy loading:** Below-the-fold homepage sections and route pages are loaded with React lazy imports and `Suspense`.
- **Managed data services:** Supabase provides browser-facing authentication, database, and storage interfaces.
- **Serverless content endpoints:** Netlify Functions generate or serve RSS, sitemap, `llms.txt`, and SEO synchronization responses.
- **Explicit data boundaries:** Browser requests use the Supabase client and public/anonymous configuration; privileged authorization must be enforced by RLS and Storage policies, not by frontend visibility.
- **Performance and accessibility:** Image loading helpers, reduced-motion handling, semantic markup, and interactive status should be maintained and verified as features evolve.

## 4. Technology Stack

| Layer | Current implementation |
|---|---|
| UI runtime | React 18, React DOM 18 |
| Language | TypeScript; JavaScript modules also appear in build scripts and Netlify Functions |
| Build and development server | Vite 5 with the SWC React plugin |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS, PostCSS, project CSS, Radix UI-based components |
| Animation | Framer Motion |
| Client data/cache | TanStack React Query is installed and configured in the app shell |
| Forms and validation | React Hook Form and Zod are dependencies; individual forms also contain local validation |
| Backend services | Supabase JavaScript client, Auth, database, and Storage calls |
| Hosting/serverless | Netlify static hosting and Netlify Functions using Node bundling |
| Analytics | Google Analytics `gtag.js` |
| SEO build utilities | Node.js scripts that fetch published blog metadata and update static discovery files |

Groq and Pinecone packages are declared in `package.json` and related technology names are presented in the site. Their presence does not establish that the public website invokes them at runtime; confirm usage before treating them as production runtime components.

## 5. Application Structure

| Path | Responsibility |
|---|---|
| `src/main.tsx` | Browser entry point, React root, analytics bootstrap, scroll reveal, and lazy image initialization. |
| `src/App.tsx` | Global providers, error boundary, router, shared application-level controls, and route table. |
| `src/Index.tsx` | Homepage composition; primary hero and lazy-loaded content sections. |
| `src/components/` | Shared UI, navigation, homepage sections, SEO, contact, and visual components. |
| `src/pages-Services/` | Individual service pages and service not-found page. |
| `src/pages-Industries/` | Industry-specific page modules and shared industry content. |
| `src/Pages-Portfolio/` | Portfolio and case-study page implementations. |
| `src/pages-Blogs/` | Blog reader and blog administration interface. |
| `src/pages/` | About, careers, and legal/policy pages. |
| `src/lib/` | Supabase client, performance helpers, and shared utilities. |
| `public/` | Static images, icons, sitemap, robots, RSS, and `llms.txt` baseline files. |
| `scripts/` | SEO generation and related build/test utilities. |
| `netlify/functions/` | Dynamic RSS, sitemap, `llms.txt`, and SEO sync handlers. |
| `supabase/` | SQL scripts for blog fields, write policies, image policies, and production data audit. |

## 6. Route Design

The route table is defined in `src/App.tsx`. Route families include:

- `/` — homepage.
- `/healthcare`, `/fintech`, `/education`, `/e-commerce`, `/food-and-groceries`, `/travel-and-tourism`, `/insurance`, `/on-demand` — industry pages.
- `/ai-chatbot-development`, `/data-science-intelligence`, `/ai-native-mvp`, `/ai-development`, `/ai-automation`, `/web-development`, `/ui-ux-design`, `/cloud-infrastructure`, `/software-modernization`, `/custom-software-development`, `/agentic-ai`, `/ai-audit` — service pages. `/devops` redirects to `/cloud-infrastructure`; `/natural-language-processing`, `/computer-vision`, and `/predictive-modelling` redirect to `/data-science-intelligence`; `/machine-learning` redirects to `/ai-native-mvp`.
- `/portfolio` and individual `/portfolio/...` case studies — portfolio.
- `/blogs` and `/blog-admin` — public blog and administration.
- `/about`, `/careers`, `/contact`, `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy` — company, inquiry, and policy pages.
- `*` — not-found route.

The `/blogs` page can select an article through the `article` query parameter. A sitemap/RSS blog URL is generated in the form `/blogs?article=<article-id>`. Public article linking therefore depends on the page resolving identifiers consistently after direct navigation and refresh.

## 7. Data and Integration Design

### 7.1 Supabase

The shared browser client is initialized in `src/lib/supabaseClient.ts` using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Initialization fails explicitly when either value is missing. The anonymous key is browser-visible by design and must never be treated as a privileged secret.

Observed operations:

| Feature | Data/service interface | Current code path |
|---|---|---|
| Contact | `Contact Us` table insert | `src/components/Contact.tsx` |
| Public articles | `blogs` query filtered to published status | `src/pages-Blogs/Blogs.tsx`, homepage blog components |
| Blog views | `increment_blog_view` RPC with a client update fallback | `src/pages-Blogs/Blogs.tsx` |
| Newsletter | `newsletter_signups` insert | Blog page and footer components |
| Blog administration | Supabase Auth and `blogs` read/write operations | `src/pages-Blogs/BlogAdmin.tsx` |
| Blog images | `blog-images` Storage upload and public URL | Blog administration |

Table definitions, constraints, production RLS, Auth role assignment, Storage settings, and backups are not established solely by this repository. Apply and validate schema/policy changes only through an authorized, reviewed database change process.

### 7.2 Important authorization boundary

`supabase/blogs-authenticated-write-policy.sql` is an example SQL script that enables RLS but grants insert, update, and delete to the `authenticated` role with unconditional checks. It does not distinguish an administrator from an ordinary authenticated user. Do not treat this policy as an admin-only boundary. Before production approval, verify deployed policies and replace broad grants with a controlled role/claim-based authorization model approved by the database owner.

`supabase/blog-images-storage-policies.sql` constrains uploads to a user-ID folder, but permits public reads from the blog-images bucket and allows authenticated users to update/delete their own files. Confirm that these permissions match the business and privacy requirements.

### 7.3 SEO and discovery data flow

1. `npm run build` runs the `prebuild` script (`scripts/generate-seo-files.mjs`).
2. The script calls `scripts/seo-generator-core.mjs`, which fetches published blog metadata and updates marked sections in `public/sitemap.xml` and `public/llms.txt`.
3. If SEO generation fails, the prebuild script logs a warning and preserves existing files; it does not fail the build.
4. In deployment, Netlify routes `/sitemap.xml`, `/rss.xml`, `/llms.txt`, and `/api/sync-seo` to corresponding functions.
5. The sitemap and `llms.txt` functions fetch published blog metadata and merge it with a base static resource fetched from the public site.
6. The sync function may trigger a Netlify build hook when configured; without a hook it returns a message indicating that a request was received.

SEO code references a production site URL and can use environment-provided Supabase configuration. The repository also contains hard-coded fallback Supabase URL and public-key configuration in SEO-generation/endpoint code. Treat those values as public configuration, avoid adding privileged keys there, and migrate to explicit deployment configuration as part of environment hardening.

The RSS function queries a `published` boolean, whereas the public blog and sitemap code filter on `status = 'published'`. This may be intentional if both columns are maintained, but the schema and data consistency are not proven by this repository. Reconcile the canonical publication field and test generated feeds and sitemap output against the production schema.

### 7.4 Analytics and consent

Analytics is configured in both the HTML entry point and the application bootstrap. The application bootstrap also checks for an existing Google Tag Manager script before adding one. Page tracking is implemented in `src/App.tsx`.

The cookie banner stores a choice in local storage, but the Manage action currently stores a generic custom value rather than presenting category-level controls. Analytics initialization is independent of that choice in the inspected source. Do not assume consent gating is implemented; align analytics initialization, consent state, and policy with an approved privacy design.

## 8. Build and Deployment Design

### Development

- `npm run dev` starts Vite, using `VITE_DEV_PORT` when set and otherwise port `5173`.
- `npm run dev:full` invokes `scripts/dev-server.js`.
- The Vite configuration exposes `/api/sync-seo` middleware in development and preview; the corresponding implementation dynamically imports the SEO generator.

### Production build and hosting

- `npm run build` invokes the SEO prebuild script, then Vite builds to `dist/`.
- `npm run build:prod` runs Vite with production mode.
- `netlify.toml` configures `npm run build`, `dist`, Netlify Functions, Node bundling, SEO endpoint redirects, and a catch-all SPA redirect.
- Vite production output uses hashed asset paths, Terser minification, CSS splitting, and no source maps.

### Deployment flow (proposed operational sequence)

1. Review and merge a change through the repository's approved Git process.
2. Run lint, the relevant test suites, and production build in CI or an approved local environment.
3. Confirm required environment variables and Netlify function configuration are present without exposing their values.
4. Deploy a preview and validate critical routes, forms, content retrieval, SEO endpoints, consent behavior, and administrative boundaries against non-production/test data where possible.
5. Approve deployment, monitor errors and external-service health, and retain an agreed rollback path.

The repository does not show a complete CI workflow, production monitoring configuration, rollback procedure, or approved environment matrix. These operational controls require confirmation.

## 9. Configuration and Secrets

| Variable | Use | Handling |
|---|---|---|
| `VITE_SUPABASE_URL` | Browser Supabase endpoint and some SEO function/build reads | Public endpoint configuration; set per environment. |
| `VITE_SUPABASE_ANON_KEY` | Browser Supabase anonymous/publishable key and some SEO reads | Public/client key, not a service-role secret; rely on RLS. |
| `VITE_GA_MEASUREMENT_ID` | Analytics measurement ID | Public identifier; consent behavior must be reviewed. |
| `VITE_DEV_PORT` | Local Vite server port | Local development configuration. |
| `SUPABASE_URL` | RSS function Supabase endpoint override | Server-side environment configuration. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional privileged RSS function key override | Secret; store only in protected server-side environment and never expose to browser/build output. Prefer least privilege. |
| `NETLIFY_BUILD_HOOK` / `VITE_NETLIFY_BUILD_HOOK` | Optional SEO synchronization build hook | Secret URL; configure only in protected server-side environment. |

Environment variable names are documented here; secret values must not be copied into this document, source control, build logs, or client bundles. Because Vite exposes `VITE_` variables to browser builds, never place privileged credentials under a `VITE_` name.

## 10. Error Handling and Observability

- The application has a global React error boundary.
- Supabase operations generally handle and log failures in the relevant UI flow; this behavior should be covered by integration tests.
- SEO Functions return error responses when their required data fetch fails; the build SEO refresh instead logs a warning and retains existing files.
- Analytics errors and external script failures should not block core navigation or form submission.
- Production monitoring, alerting, log retention, uptime objectives, and incident ownership are not evidenced in the repository and must be specified operationally.

Logs must not include passwords, privileged keys, authentication tokens, or unnecessary inquiry content. Error messages shown to visitors should be actionable without exposing internal configuration.

## 11. Technical Decisions and Rationale

| Decision | Current approach | Rationale / status |
|---|---|---|
| SPA with static hosting | Vite build served by Netlify with catch-all route fallback | Fits a content-led site with many client-side routes; direct route handling must be tested. |
| Managed data services | Supabase accessed from the browser using an anonymous key | Avoids maintaining a custom application API for routine operations; requires robust RLS and storage policies. |
| Dynamic SEO endpoints | Netlify Functions augment static SEO resources with blog records | Supports current published content; publication-field consistency and failure behavior need tests. |
| Lazy loading | Route pages and homepage sections use dynamic imports | Reduces initial application work; route and fallback states need regression coverage. |
| Build-time SEO refresh | Prebuild updates static sitemap and `llms.txt` sections | Keeps static files current when Supabase is available; failures preserve prior files and should be visible in release checks. |

## 12. Known Design Risks and Required Follow-up

1. **Blog write permissions:** The checked-in SQL policy script permits any authenticated user to write blog rows. Verify production policies and implement role-based admin enforcement.
2. **Public registration:** Blog administration contains sign-up and sign-in flows. Confirm whether sign-up is intended, who may receive editor permissions, and whether role changes are controlled server-side.
3. **RSS publication field:** RSS uses `published = true`; other code uses `status = 'published'`. Confirm the live schema and unify behavior.
4. **Consent integration:** Cookie choices are not wired to analytics initialization in the inspected implementation; resolve before making consent claims.
5. **SEO configuration:** Dynamic functions and build scripts use fallback project configuration; establish an environment-specific configuration policy and ensure no privileged values reach client assets.
6. **Build signal:** SEO prebuild errors are warnings and do not fail the build. Decide whether stale SEO resources should block release or be surfaced in a deployment health check.
7. **Environment differences:** No approved local/staging/production matrix was found. Document isolated projects, keys, data, and deployment ownership.
8. **Operations:** Define monitoring, backups, incident response, and rollback responsibilities for Netlify, Supabase, domain, and analytics.

## 13. Repository References

- `package.json` — dependencies and scripts.
- `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json` — frontend build and TypeScript configuration.
- `netlify.toml` — build, publishing, redirects, and function configuration.
- `src/App.tsx`, `src/Index.tsx` — router and page composition.
- `src/lib/supabaseClient.ts` — browser Supabase initialization.
- `src/components/Contact.tsx`, `src/pages-Blogs/Blogs.tsx`, `src/pages-Blogs/BlogAdmin.tsx` — main data and content flows.
- `src/main.tsx`, `src/components/CookieBanner.tsx` — analytics bootstrap and consent UI.
- `scripts/generate-seo-files.mjs`, `scripts/seo-generator-core.mjs` — build-time SEO file generation.
- `netlify/functions/` — serverless SEO and feed handlers.
- `supabase/` — reviewed SQL scripts for blog schema and access configuration.

---

**Review note:** This design document describes repository-visible architecture and identified technical risks. Confirm every deployed service configuration and data policy with its owner before production or compliance decisions.