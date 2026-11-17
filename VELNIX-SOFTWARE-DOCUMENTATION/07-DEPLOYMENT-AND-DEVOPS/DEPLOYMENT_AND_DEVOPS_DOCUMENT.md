# Velnix Solutions Website

## Deployment and DevOps Document

| Document field | Value |
|---|---|
| Document status | Draft for deployment review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Technical design | [Technical Design Document](../03-TECHNICAL-DOCUMENTATION/TECHNICAL_DESIGN_DOCUMENT.md) |
| Development context | [Development Document](../05-DEVELOPMENT/DEVELOPMENT_DOCUMENT.md) |

## 1. Purpose and Scope

This document defines the current deployment model and DevOps operational posture of the Velnix Solutions website as represented in the repository. It outlines hosting architecture, build pipeline behavior, environment handling, operational concerns, and release readiness assumptions.

This document is based on implementation evidence in the repository and should be treated as a deployment baseline, not as a substitute for actual production configuration review, security approval, or operational ownership confirmation.

## 2. Deployment Architecture Overview

The project is deployed as a static frontend application hosted on Netlify, with client-side routing and a few serverless endpoint functions for content discovery and metadata generation.

### Current architecture

- Frontend application built with Vite and React
- Static assets published through Netlify
- Serverless functions hosted by Netlify for RSS, sitemap, and `llms.txt`
- Supabase used for dynamic website data such as blog content, contact submissions, newsletter signups, and admin-related content flows
- Google Analytics configured for page tracking

### High-level deployment topology

```text
Visitor browser
  ├── Netlify static site build (dist/)
  ├── SPA route fallback to /index.html
  ├── /rss.xml -> Netlify Function
  ├── /sitemap.xml -> Netlify Function
  ├── /llms.txt -> Netlify Function
  ├── /api/sync-seo -> Netlify Function
  └── Supabase data requests (public client calls)
```

## 3. Hosting and Runtime Platform

### Netlify

The repository has a `netlify.toml` configuration that defines:

- build output directory: `dist`
- function directory: `netlify/functions`
- default build command: `npm run build`
- SPA catch-all redirect to `/index.html`
- route mappings for RSS, sitemap, and `llms.txt`

### Key configuration details

| Setting | Value in repository |
|---|---|
| Publish directory | `dist` |
| Function directory | `netlify/functions` |
| Node bundler | `esbuild` |
| Default build command | `npm run build` |
| SPA fallback | `/* -> /index.html` |
| Dev target port | `5173` |

### Production hosting assumptions

The repository strongly indicates a Netlify-hosted production deployment, but it does not establish whether the actual production domain, environment variables, build hooks, and access control are already configured and approved by the business owner.

## 4. Build Pipeline

### Primary build command

```bash
npm run build
```

This triggers:

1. `prebuild` script execution
2. SEO generation script
3. Vite production build into `dist/`

### SEO prebuild behavior

The repository includes `scripts/generate-seo-files.mjs`, which runs before the main build and updates SEO-related files. The script catches errors and logs warnings rather than failing the build.

Observed behavior:

- If blog metadata refresh succeeds, it updates generated XML/text resources.
- If it fails, the script logs a warning and does not fail release processing.

This is operationally useful but should be reviewed against deployment risk tolerance.

## 5. Deployment Workflow

### Current operational flow implied by repository

1. Update application or content in a branch.
2. Validate locally with build and lint checks.
3. Push to the repository.
4. Netlify triggers build and publish based on configuration.
5. Static site is served and routes are resolved via catch-all redirect.
6. SEO and feed endpoints are served by Netlify functions during deployment.

### Deployment triggers

The repository includes the following build-time and runtime mechanisms:

- standard Netlify build from source repository,
- serverless function runtime for RSS/sitemap/SEO endpoints,
- optional build hook support via environment variables such as `NETLIFY_BUILD_HOOK` or `VITE_NETLIFY_BUILD_HOOK`.

## 6. Environment Configuration

### Environment variables observed

| Variable | Purpose | Handling notes |
|---|---|---|
| `VITE_SUPABASE_URL` | Public Supabase endpoint | Browser-safe public configuration |
| `VITE_SUPABASE_ANON_KEY` | Public access key | Not a privileged secret |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID | Public identifier |
| `VITE_DEV_PORT` | Local dev port | Local use only |
| `SUPABASE_URL` | Server-side override for functions | Safe in server-side environment |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged database key override | Must never be browser-exposed |
| `NETLIFY_BUILD_HOOK` / `VITE_NETLIFY_BUILD_HOOK` | Optional SEO sync hook | Secret URL; protect in deployment settings |

### Secret handling principle

The codebase follows the general rule that browser-exposed environment variables are public-safe, while service-role and privileged secrets must remain in server-side deployment configuration only.

This must be preserved during all future deployment changes.

## 7. Netlify Functions and SEO Delivery

### Function routes

The project wires several endpoints through `netlify.toml`:

- `/rss.xml` -> `/.netlify/functions/rss`
- `/sitemap.xml` -> `/.netlify/functions/sitemap`
- `/llms.txt` -> `/.netlify/functions/llms`
- `/api/sync-seo` -> `/.netlify/functions/sync-seo`

### Function responsibilities

| Endpoint | Purpose |
|---|---|
| `rss.mjs` | Generates an RSS feed from published blog rows |
| `sitemap.mjs` | Builds sitemap XML entries using published blog records |
| `llms.mjs` | Serves llms metadata and discovery output |
| `sync-seo.mjs` | Performs SEO synchronization and optional build-trigger activity |

### Notable operational concern

The repository contains code that references production URLs and fallback Supabase credentials. That pattern is not a secure deployment practice for production systems. These values should be moved behind explicit, environment-specific configuration that is reviewed and controlled by the production owner.

## 8. DevOps Practices Observed in Repository

### Version control and build reproducibility

The repository supports conventional Git-based workflows and reproducible builds through:

- Node package scripts,
- locked dependency management in `package.json`,
- static build output to `dist`,
- and deployment automation through Netlify.

### Release validation practices

The repository includes build scripts and validation commands such as:

- `npm run lint`
- `npm run build`
- `npm run build:prod`
- `npm run test:functions`
- `npm run test:js-functions`

These indicate a development expectation for validation before shipping.

### Operational gap

The repository does not provide evidence of a formal CI/CD pipeline, production approval gate, rollback procedure, or monitoring/alerting configuration. Those controls must be established outside the codebase by the deployment owner.

## 9. Operational Risks

The following operational risks require deliberate handling:

1. **Environment drift**
   - Local, staging, and production configuration may diverge without formal review.

2. **Secret exposure risk**
   - Public-facing configuration can accidentally be treated as privileged if developers place service keys under Vite-safe variables.

3. **SEO data mismatch**
   - Different files use different publication-field semantics, such as `published` versus `status = 'published'`.

4. **Unclear release gating**
   - Build warnings on SEO generation do not fail the release by default.

5. **No formal rollback path**
   - The codebase does not define who can revert a failed deployment or how rollback should be executed.

6. **Limited observability**
   - No production monitoring, uptime SLA, or incident ownership sequence is described.

7. **Authorization maturity**
   - Blog admin and Supabase policy configuration may not yet reflect least-privilege admin boundaries.

## 10. Recommended DevOps Baseline

The following controls are strongly recommended for production readiness:

### Environment management

- Maintain separate configuration for local, staging, and production.
- Keep privileged secrets in trusted deployment environments only.
- Validate that each environment has the required DNS, domain, and redirect settings.

### Build and release controls

- Require successful lint and production build before deployment.
- Review preview deployments before production promotion.
- Keep a release checklist covering route validation, form validation, and SEO checks.

### Monitoring and alerting

- Track page availability and HTTP errors.
- Capture Netlify function errors and failed requests.
- Monitor Supabase connectivity issues and content failures.

### Rollback and ownership

- Define who approves deployment.
- Define who can rollback a failed release.
- Keep a named owner for Netlify, Supabase, analytics, and domain administration.

## 11. Security and Compliance Considerations

The repository includes both public content and operational integrations. DevOps should ensure:

- no privileged credentials are committed to source control,
- only authorized staff can change deployment settings,
- browser-side keys remain limited to publicly safe values,
- admin workflows are verified against least-privilege protections,
- analytics and cookie practices comply with the approved privacy model.

## 12. Recommended Release Checklist

Before a production release, verify the following:

- [ ] Production build succeeds.
- [ ] Netlify publish configuration is correct.
- [ ] Redirects and SPA fallback are functioning.
- [ ] Homepage and key routes render correctly.
- [ ] Contact and form flows behave correctly.
- [ ] Blog and article pages load without broken state.
- [ ] Sitemap, RSS, and `llms.txt` outputs are valid.
- [ ] Environment variables are set correctly and no secrets were exposed.
- [ ] Analytics and consent behavior align with policy.
- [ ] Admin permissions and data flow boundaries are approved.
- [ ] Operational monitoring and rollback ownership are in place.

## 13. DevOps Responsibilities

### Engineering / application owner

- maintain automated validation,
- review production build health,
- coordinate release readiness,
- confirm route and form behavior in deployed preview or production.

### Platform / hosting owner

- maintain Netlify app configuration,
- manage domain, redirects, and environment settings,
- review platform-level logs and incidents.

### Data owner

- manage Supabase environments, policies, and role boundaries,
- verify data retention and access rules,
- review content publication logic and admin authorization.

## 14. Repository References

- `netlify.toml` — Netlify build and redirect configuration.
- `package.json` — scripts and build validation commands.
- `scripts/generate-seo-files.mjs` — SEO prebuild behavior.
- `netlify/functions/rss.mjs` — RSS generation endpoint.
- `netlify/functions/sitemap.mjs` — blog-aware sitemap generation.
- `netlify/functions/llms.mjs` — `llms.txt` generation.
- `netlify/functions/sync-seo.mjs` — SEO synchronization endpoint.
- `public/` — static SEO and site resources served at build time.

---

**Review note:** This document captures the repository's current deployment architecture and identified DevOps risks. Production readiness requires confirmation of hosting settings, environment ownership, secret handling, monitoring, and release governance outside the source repository.
