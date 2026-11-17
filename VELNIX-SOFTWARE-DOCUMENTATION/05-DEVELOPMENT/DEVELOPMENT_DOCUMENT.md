# Velnix Solutions Website

## Development Document

| Document field | Value |
|---|---|
| Document status | Draft for engineering review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Technical design | [Technical Design Document](../03-TECHNICAL-DOCUMENTATION/TECHNICAL_DESIGN_DOCUMENT.md) |
| UI/UX design | [UI/UX Design Document](../04-UI-UX-DESIGN/UI_UX_DESIGN_DOCUMENT.md) |

## 1. Purpose and Scope

This document defines the development workflow, project structure, build practices, environment setup, and engineering conventions represented in the repository for the Velnix Solutions website.

It is intended to help engineers work efficiently and consistently while preserving the current implementation patterns used in the project. It is not a substitute for production environment approvals, deployment controls, or formal release governance.

## 2. Development Context

The repository is a Vite-based React TypeScript application that implements a marketing website for Velnix Solutions. The application includes:

- A client-side SPA with route-based page composition
- Reusable UI components and section layouts
- Marketing pages for services, industries, portfolio, blog, and company information
- Supabase-backed data flows for contact, blog, and newsletter interactions
- Netlify hosting and serverless support for SEO and syndication endpoints

The project currently follows a front-end-first workflow with build-time SEO generation and simple serverless utilities for marketing content publication needs.

## 3. Development Principles

- Keep the app easy to reason about and maintain.
- Prefer clear component composition over over-engineered abstraction.
- Keep features aligned with business content and route purpose.
- Fail clearly for forms and integrations rather than silently suppressing errors.
- Optimize for user experience, responsiveness, and maintainability.
- Ensure environment configuration remains explicit and not hard-coded in production builds.

## 4. Technology Stack

| Layer | Current implementation |
|---|---|
| UI framework | React 18 |
| Language | TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS |
| UI primitives | Radix UI and shadcn-style components |
| Routing | React Router DOM v6 |
| State/data | TanStack React Query |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Backend support | Supabase JavaScript client |
| Hosting | Netlify |
| Serverless functions | Netlify Functions |
| Analytics | Google Analytics |
| SEO generation | Node build scripts and Netlify functions |

## 5. Local Development Setup

### Prerequisites

- Node.js 18 or newer recommended
- npm
- Access to the project repository
- Environment values for Supabase and analytics configuration when testing live-backed features

### Install dependencies

```bash
npm install
```

### Environment variables

The app expects values such as:

```env
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_DEV_PORT=5173
```

Important:

- `VITE_` variables are exposed to the browser bundle.
- Only public, non-privileged values should be stored here.
- Server-side secrets must never be placed in the frontend build environment.

## 6. Repository Structure

```text
/
├── README.md
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── netlify.toml
├── public/
├── scripts/
├── src/
│   ├── App.tsx
│   ├── Index.tsx
│   ├── main.tsx
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── pages-Blogs/
│   ├── pages-Industries/
│   ├── pages-Services/
│   └── Pages-Portfolio/
├── supabase/
├── VELNIX-SOFTWARE-DOCUMENTATION/
└── ...
```

### Key areas

| Path | Responsibility |
|---|---|
| `src/App.tsx` | App-level routing and global shell |
| `src/Index.tsx` | Homepage composition |
| `src/components/` | Shared marketing UI, sections, forms, and reusable blocks |
| `src/pages-Services/` | Service pages |
| `src/pages-Industries/` | Industry pages |
| `src/Pages-Portfolio/` | Portfolio and case-study pages |
| `src/pages-Blogs/` | Blog browsing and admin flows |
| `src/lib/` | Shared utilities and data configuration |
| `public/` | Static assets and SEO files |
| `scripts/` | Build-time SEO generation helpers |
| `netlify/functions/` | Serverless SEO and feed endpoints |
| `supabase/` | Example database policies and schema scripts |

## 7. Development Scripts

The project defines the following key commands in `package.json`:

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run dev:full` | Run the app with the extended dev flow |
| `npm run build` | Build the frontend bundle |
| `npm run build:dev` | Build in development mode |
| `npm run build:prod` | Build in production mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |
| `npm run serve` | Build and serve locally |
| `npm run test:functions` | Run Netlify function validation checks |
| `npm run test:js-functions` | Run JS function validation checks |

### Typical local workflow

```bash
npm install
npm run dev
```

For a production-style verification:

```bash
npm run build
npm run preview
```

## 8. Build and Runtime Flow

### Frontend build

The frontend is compiled into a static bundle using Vite. `npm run build` also triggers the SEO prebuild script:

```bash
npm run build
```

This runs:

- `node scripts/generate-seo-files.mjs`
- Vite production build output

### Netlify deployment flow

The application is configured for Netlify static hosting with serverless functions. The deployment model expects:

- static frontend hosting,
- client-side routing fallback,
- generated SEO outputs such as sitemap and RSS,
- and serverless endpoints for dynamic content syncing.

## 9. Development Workflow

### Feature development flow

1. Create or update the relevant feature branch.
2. Make changes in the nearest applicable module or page component.
3. Validate the feature with the smallest relevant command or local interaction.
4. Run lint and build verification as needed before merge.
5. Check whether the change affects SEO, analytics, content publishing, or shared UI patterns.

### Code change expectations

- Prefer small, readable changes that follow established patterns.
- Reuse existing components before creating duplicates.
- Keep environment-specific logic isolated and clearly labeled.
- Confirm whether a change affects routes, forms, or public-facing metadata.

## 10. Coding Standards and Quality Expectations

### Frontend conventions

- Use TypeScript for application logic and component-level code where possible.
- Keep components focused and purpose-based.
- Ensure forms provide proper validation and visible feedback.
- Keep accessibility in mind for keyboard navigation, focus states, contrast, and semantics.
- Respect reduced-motion preferences for animated UI.

### Data and integration conventions

- Treat Supabase browser keys as public values only.
- Do not place service-role or privileged credentials in browser code or client-side config.
- Keep form submission and admin behavior clear and explicit.
- Verify that display-state and actual data state remain consistent.

### SEO and content conventions

- Ensure pages and metadata remain aligned with the actual content and routes.
- Review generated SEO files after content changes.
- Keep feed and sitemap output consistent with the canonical blog publication field.

## 11. Local Testing Considerations

The repository contains a small set of function-focused validation scripts and frontend build flows. The expected development validation pattern is:

- run lint for static quality checks,
- build the app to catch compilation issues,
- test route-related features manually in the browser,
- validate key forms and blog interactions with live or mocked data,
- verify SEO outputs after content or route changes.

There is no evidence in the repository of a broad end-to-end suite or complete CI pipeline for all flows. Engineering teams should add and maintain validation as the site grows.

## 12. Risk Areas in Development

The following areas require special attention during feature work:

1. **Route and page development**
   - Ensure client-side routes work correctly after refresh and direct navigation.

2. **Data flows**
   - Contact submissions, blog publishing, and newsletter signups require reliable feedback and safe configuration.

3. **SEO metadata**
   - Page metadata, sitemap, and discovered article URLs must remain consistent with published content.

4. **Analytics and consent**
   - Tracking setup should be reviewed with privacy and consent requirements in mind.

5. **Authorization boundaries**
   - Admin and write-access patterns must be intentionally verified before production use.

6. **Build and release stability**
   - SEO prebuild warnings should be reviewed, and release checks should still include production builds.

## 13. Suggested Branch and Release Hygiene

A simple working model for this repository would be:

- `main` for stable production-ready work
- feature branches for individual tickets or changes
- short-lived branches for content, UI, and integration work
- merge after validation and review

Recommended release process:

1. Implement change in a feature branch.
2. Run lint and build validation locally.
3. Review for route, form, and content impact.
4. Merge only after the feature is verified in the target environment.
5. Validate SEO outputs and any public-facing behavior after deployment.

## 14. Engineering Notes

This project is a content-forward website, not a traditional transactional SaaS application. As a result, engineering work should remain highly aware of:

- marketing content quality,
- conversion flows,
- public metadata,
- responsiveness,
- trust and credibility cues,
- and operational safety of forms and admin features.

Even when the app is built with modern frontend tooling, the product's business function is to communicate value and generate qualified inquiries. Engineering should therefore keep the experience accessible, credible, and easy to navigate.

## 15. Repository References

- `README.md` — overview and setup guidance.
- `package.json` — scripts and dependencies.
- `vite.config.ts` — build and dev configuration.
- `netlify.toml` — deployment and route configuration.
- `src/App.tsx` — application routes and shell.
- `src/Index.tsx` — homepage structure.
- `src/components/` — reusable UI and page sections.
- `src/pages-Blogs/` — blog content and admin flows.
- `scripts/` — SEO generation and build-time helpers.
- `netlify/functions/` — serverless features.

---

**Review note:** This document captures the repository-driven development model and current engineering practices. It should be updated as the project evolves and as production workflows, testing, and deployment controls become more formally defined.
