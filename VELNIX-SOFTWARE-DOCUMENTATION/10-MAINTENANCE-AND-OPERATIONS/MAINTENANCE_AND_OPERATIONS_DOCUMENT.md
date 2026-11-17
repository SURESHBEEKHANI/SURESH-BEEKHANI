# Velnix Solutions Website

## Maintenance and Operations Document

| Document field | Value |
|---|---|
| Document status | Draft for operations review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Technical design | [Technical Design Document](../03-TECHNICAL-DOCUMENTATION/TECHNICAL_DESIGN_DOCUMENT.md) |
| Deployment context | [Deployment and DevOps Document](../07-DEPLOYMENT-AND-DEVOPS/DEPLOYMENT_AND_DEVOPS_DOCUMENT.md) |

## 1. Purpose and Scope

This document defines the current maintenance and operational model implied by the repository for the Velnix Solutions website. It outlines routine operational tasks, content maintenance expectations, release hygiene, system health checks, support coordination, and operational risk management.

This is a baseline operations record, not a final production operations manual. Actual ownership, alerting configuration, backup procedures, and continuity practices must be confirmed with the organization operating the production environment.

## 2. Operational Summary

The website is a public-facing marketing platform built with Vite, React, Tailwind, Netlify, and Supabase. It is designed to serve content, generate inquiries, and support a blog ecosystem. Because it relies on static site hosting plus several external integrations, the most important operational concerns are:

- preserving site availability,
- keeping content and metadata current,
- maintaining route integrity,
- validating key user journeys after deployment,
- and monitoring data-related features like forms and article publishing.

## 3. Core System Components

| Component | Operational role |
|---|---|
| Vite frontend | Delivers the React application and static site assets |
| Netlify hosting | Publishes the site and serves routing and serverless functions |
| Netlify functions | Generates RSS, sitemap, llms metadata, and SEO sync behavior |
| Supabase | Provides blog, newsletter, and inquiry data storage and access |
| Analytics scripts | Tracks usage and page-level behavior |
| Static public files | SEO, robots, sitemap base files, image assets, and metadata |

## 4. Maintenance Responsibilities

### 4.1 Content maintenance

The site uses content-heavy pages for services, industries, portfolio, blog, and company messaging. Maintenance responsibilities include:

- updating service descriptions,
- reviewing and refreshing portfolio case studies,
- publishing or updating blog articles,
- maintaining evergreen metadata,
- and validating new content against business claims and brand tone.

### 4.2 Frontend maintenance

Engineering should maintain:

- route integrity,
- shared UI patterns,
- accessibility standards,
- responsive behavior,
- and build stability during feature upgrades.

### 4.3 Integration maintenance

Technical operations should maintain:

- Netlify function health,
- Supabase connectivity and policy correctness,
- analytics configuration,
- and any environment variables required by the site.

## 5. Routine Operational Tasks

### 5.1 Daily or frequent checks

- verify the production site loads successfully,
- check for major front-end errors,
- confirm critical pages still route correctly,
- confirm contact and blog flows are responsive,
- and review basic analytics or traffic quality where enabled.

### 5.2 Weekly or periodic checks

- review blog publication status,
- validate sitemap and feed output,
- confirm page metadata remains aligned with current content,
- audit the homepage for outdated or stale messaging,
- and ensure forms and data integrations still behave as expected.

### 5.3 Release-oriented checks

Before and after any production deployment:

- run lint and build validation,
- test key routes,
- review all critical content and CTA paths,
- check form success/error states,
- and review SEO outputs after updates to blog content.

## 6. System Health Monitoring

The repository indicates build and function-based operations, but no formal monitoring stack is described. A production-ready monitoring baseline should include:

- site uptime checks,
- HTTP error monitoring,
- function failure logging,
- key route availability checks,
- and a notification mechanism for failed critical flows.

### Required monitoring focus

| Area | Why it matters |
|---|---|
| Production site availability | Core marketing experience and brand trust |
| Contact form reliability | Lead generation and user trust |
| Blog feature availability | Content workflow and marketing support |
| SEO endpoint health | Search visibility and content indexing |
| Supabase connectivity | critical route data reliance |

## 7. Release and Change Management

### Change control expectation

The project should use a lightweight but disciplined change process:

- changes are created in a branch,
- validation occurs before merge,
- preview or staging checks are completed where possible,
- a deployment approver signs off on production release,
- and rollback is understood if the release causes issues.

### Change review categories

- content-only changes,
- design and layout changes,
- route or navigation changes,
- form and data-flow changes,
- analytics and consent changes,
- deployment and infrastructure changes.

The higher the risk or user impact, the more detailed the review and validation should be.

## 8. Backup and Recovery

The repository does not provide a formal backup plan, but the operational model implies multiple important data surfaces:

- source code repository backups,
- deployment configuration backups,
- environment variables and platform configuration records,
- Supabase data and permissions,
- static assets and SEO resources,
- and content authoring records.

### Recovery expectations

The organization should document:

- where backups are stored,
- how frequently they are taken,
- who restores them,
- and what the recovery time objective is for a website outage or data issue.

## 9. Incident Response

### Likely incident types

- site unavailable or loading incorrectly,
- form submission failures,
- blog content not appearing or selectable,
- sitemap or feed broken,
- tracking or consent issue,
- admin write access mis-scoped,
- and external service outage affecting the site.

### Response model

1. triage the incident and determine its scope,
2. identify whether the issue affects content, data, or infrastructure,
3. communicate status to stakeholders,
4. implement the fastest safe fix,
5. validate the fix in production or preview,
6. document the incident and follow-up actions.

## 10. Security-Related Operations

Operational maintenance should include security hygiene:

- verify that secrets stay in the correct environment,
- review admin access and database policies,
- confirm the website is not exposing sensitive configuration,
- and ensure consent and analytics settings reflect actual policy.

Because the repo includes explicit SQL scripts with broad authenticated write access, operational review of database permissions is essential.

## 11. Content Governance

The site is content-driven, so maintenance should include editorial oversight:

- articles should be reviewed for accuracy,
- service and portfolio claims should be validated,
- outdated calls to action should be fixed,
- and blog content should remain aligned with public messaging and the company's latest offering.

This is especially important because the site is being used as a trust and conversion asset.

## 12. Performance and Reliability Operations

The project should be maintained with attention to:

- page load quality,
- route stability,
- image and media efficiency,
- lazy-load behavior,
- and the overall loading performance of core landing and conversion pages.

A performance regression should be treated as a product-quality issue, not just a technical concern.

## 13. Documentation and Runbooks

The site should maintain support and operations documentation for the people who own it, including:

- how to deploy,
- how to validate production health,
- how to troubleshoot contact form and blog issues,
- how to restore a failed deployment,
- where to find environment variables,
- and how to escalate incidents.

## 14. Recommended Operational Improvements

The repository shows a solid foundation, but for stronger operational maturity the following should be formalized:

- production monitoring and alerting,
- named ownership for hosting, content, data, and analytics,
- rollback procedure and release sign-off,
- regular content reviews for trust and claim accuracy,
- operational checks for sitemap and SEO outputs,
- and clear maintenance windows or review schedules.

## 15. Risk Register Summary

| Risk | Operational impact |
|---|---|
| Broken contact flow | lost inbound leads and brand trust |
| Blog publishing issues | reduced content freshness and trust |
| SEO output drift | reduced discoverability |
| Build or deployment failure | downtime or stale site |
| Weak admin authorization | security and content integrity risk |
| Missing monitoring | slow incident detection |
| Unclear ownership | slow or inconsistent fixes |

## 16. Repository References

- `package.json` — scripts and validation tasks.
- `netlify.toml` — hosting, route, and build configuration.
- `scripts/generate-seo-files.mjs` — build-time SEO maintenance hook.
- `netlify/functions/` — production endpoint maintenance and data sync logic.
- `supabase/` — blog and storage policy definitions that affect ongoing operational risk.
- `src/App.tsx`, `src/Index.tsx`, and components — site behavior that must be checked during release validation.

---

**Review note:** This document captures the current operational baseline implied by the repository. Production maintenance maturity requires explicit ownership, monitoring, backup, rollback, and incident response processes outside the source code itself.
