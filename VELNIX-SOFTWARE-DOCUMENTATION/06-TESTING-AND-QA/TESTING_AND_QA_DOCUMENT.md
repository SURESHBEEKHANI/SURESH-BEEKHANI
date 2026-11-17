# Velnix Solutions Website

## Testing and QA Document

| Document field | Value |
|---|---|
| Document status | Draft for QA review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Technical design | [Technical Design Document](../03-TECHNICAL-DOCUMENTATION/TECHNICAL_DESIGN_DOCUMENT.md) |
| Development context | [Development Document](../05-DEVELOPMENT/DEVELOPMENT_DOCUMENT.md) |

## 1. Purpose and Scope

This document defines the current testing and quality assurance approach for the Velnix Solutions website as represented in the repository. It outlines key quality risks, validation strategies, test types, release checks, and QA responsibilities for the existing marketing platform.

The goal is to support confidence in browser functionality, route integrity, content delivery, form reliability, and public-facing quality without assuming that production systems, data policies, and deployment controls have already been formally validated.

## 2. Test Objectives

The project should validate that:

- core pages render and route correctly,
- the homepage and marketing sections load as expected,
- forms accept valid input and reject invalid input,
- blog and newsletter flows behave correctly,
- contact and write access patterns do not mislead users,
- SEO and sitemap outputs remain viable,
- responsive layouts hold across viewport sizes,
- accessibility goals remain intact,
- build output is stable before production deployment.

## 3. Quality Attributes to Validate

### Functional correctness

- Navigation works across service, industry, portfolio, blog, and company pages.
- Contact form submission and validation behave consistently.
- Page-level CTAs lead to the relevant destination.
- Dynamic content and CMS-backed pages load without broken states.

### Reliability

- No silent failures on data operations.
- Error states are visible to users.
- Recovery is possible when a data service call fails.

### Usability

- Users can understand key actions without confusion.
- Primary conversion journeys are clear and easy to follow.
- Content is structured for quick scanning.

### Accessibility

- Keyboard navigation is supported.
- Focus states are visible.
- Semantic page structure remains clear.
- Form labels, errors, and alerts are understandable.

### Performance

- The initial page experience remains responsive.
- Route-level and section-level lazy loading help maintain acceptable load behavior.
- Heavy media and animation remain controlled.

### Security and privacy awareness

- Sensitive configuration is not exposed to the browser bundle.
- Public website features do not imply stronger privileges than they actually have.
- User-submitted content and consent handling remain aligned with approved policy.

## 4. Test Strategy

The repository suggests a mixed-quality validation approach combining:

- build validation,
- route and UI smoke testing,
- component-level verification,
- data flow review,
- manual browser validation,
- and release checks for marketing-facing features.

Because the project is primarily a marketing site with content pages and external data integrations, the most important checks are business-facing user journeys rather than deep internal implementation coverage alone.

## 5. Test Levels

### 5.1 Build validation

The build level checks whether the app compiles and produces deployable output.

Minimum checks:

- `npm run lint`
- `npm run build`
- `npm run build:prod`
- route sanity review after static build preview

Purpose:

- confirm TypeScript compiles,
- catch broken imports,
- confirm static assets and bundles are generated,
- ensure production build output is usable.

### 5.2 Unit and component-level validation

This is the best place to validate isolated logic around:

- form validation,
- conditional rendering,
- CTA behavior,
- route guards,
- data formatting helpers,
- and content display conditions.

Priority areas:

- contact form validation
- blog article state loading
- newsletter signup handling
- conditional error/success messaging
- route parameter-based article selection

### 5.3 Integration and data flow validation

The app relies on APIs and remote services. QA must validate that the user experience remains coherent when the app interacts with:

- Supabase for blog and contact operations
- Netlify functions for SEO-related endpoints
- browser analytics scripts
- static SEO generation routines

Key risks:

- missing database values or permission errors
- ambiguous success states after a failed operation
- stale metadata after content edits
- inconsistent publication status handling between blog listings and feeds

### 5.4 Browser and responsive validation

The app is expected to work across common viewport sizes and browser engines.

Validate at minimum:

- mobile viewport
- tablet viewport
- desktop viewport
- Chrome and Edge browser experience
- Safari compatibility review where possible

Focus areas:

- navigation usability
- card layout readability
- CTA visibility and click targets
- section spacing and overflow
- form usability on touch devices

### 5.5 Accessibility validation

Manual and automated checks should confirm:

- heading order and semantics
- keyboard navigation across the main UI
- visible focus indicators
- informative labels for form inputs
- adequate contrast against the dark theme
- reduced-motion behavior where animation exists

## 6. Critical User Journey Testing

### 6.1 Homepage conversion flow

Verify:

- hero messaging is clear and aligns with product positioning,
- service and industry links navigate correctly,
- CTA buttons are prominent and visible,
- page does not feel visually overloaded or cluttered,
- user can reach contact or inquiry paths without confusion.

### 6.2 Service and industry exploration

Verify:

- each service and industry page loads,
- page headings and content are aligned with the selected topic,
- internal navigation is stable,
- relevant CTA links appear in appropriate places,
- direct deep-linking to a service page works correctly.

### 6.3 Portfolio and case-study review

Verify:

- portfolio listing loads and is navigable,
- individual case-study routes resolve correctly,
- content is understandable and consistent,
- proof and outcome messaging appear credible and non-misleading,
- no broken links or empty states remain.

### 6.4 Blog reading and discovery

Verify:

- blog listing renders correctly,
- individual article routes resolve properly,
- article selection via query parameter behaves consistently,
- published content and article metadata align,
- newsletter or related CTA flows remain functional.

### 6.5 Contact and inquiry flow

Verify:

- fields show clear labels and validation,
- invalid input displays a clear error,
- successful submission gives a clear confirmation,
- failed submission does not falsely indicate success,
- the form remains usable on mobile and desktop.

## 7. Risk-Based Focus Areas

The following areas deserve special QA attention because they are either business-critical or technically sensitive:

### 7.1 Route integrity

The app relies on client-side routing. QA should verify:

- direct navigation to major routes,
- route fallback behavior,
- refresh on route pages,
- not-found experience,
- consistent page loads after browser refresh.

### 7.2 Blog publication consistency

Because the repository references both `status = 'published'` and `published = true`, QA should verify the live publishing model used in production and check if the UI matches it.

### 7.3 Analytics and consent behavior

The app includes analytics and cookie logic. QA must confirm whether:

- tracking is gated correctly,
- local-storage consent state is respected,
- analytics scripts do not execute contrary to policy,
- any user-facing consent messaging stays consistent.

### 7.4 Admin write permissions

Blog admin flows and Supabase policies should be reviewed to ensure they do not inadvertently allow broad write access. QA should validate that admin experiences are protected by the intended authorization model.

### 7.5 SEO and discovery outputs

QA should confirm that generated sitemap, RSS, and `llms.txt` outputs align with current content and publication rules. Broken metadata or stale feeds can reduce discoverability and trust.

## 8. Suggested Test Cases

### Functional smoke tests

- Open homepage and confirm required sections render.
- Navigate through all top-level pages.
- Click a service card and verify the destination route is correct.
- Open a selected portfolio or case-study page.
- Open a blog article page.
- Submit a valid contact form.
- Submit an invalid contact form and confirm error feedback.
- Attempt newsletter sign-up with valid and invalid input.

### UI regression checks

- Verify section headings are styled consistently.
- Confirm CTA buttons remain visible at mobile and desktop breakpoints.
- Ensure cards do not overflow or clip on smaller screens.
- Confirm focus state remains visible after tab navigation.

### Error handling checks

- Simulate a failed Supabase insert and confirm the form shows a useful failure state.
- Validate that a blog article missing content does not crash the page.
- Confirm broken route fallback returns a user-friendly not-found experience.

## 9. QA Checklist Before Release

Use the following checklist before deploying a release candidate:

- [ ] Production build completes successfully.
- [ ] Core routes load without errors.
- [ ] Homepage CTAs are working.
- [ ] Service and industry pages are reachable.
- [ ] Portfolio page entries are valid and navigable.
- [ ] Blog list and article pages render correctly.
- [ ] Contact form validation and submission states are correct.
- [ ] Newsletter and content-related form states are correct.
- [ ] Error states are visible and actionable.
- [ ] Mobile and desktop layouts remain usable.
- [ ] Keyboard navigation and focus states are acceptable.
- [ ] Critical metadata and sitemap output were checked.
- [ ] Analytics and consent behavior are reviewed against policy.
- [ ] Admin and content-writing boundaries are reviewed and approved.

## 10. Defect Triage and Severity

| Severity | Meaning | Typical examples |
|---|---|---|
| Critical | Release-blocking issue affecting core business or data integrity | contact form broken, page route crash, unauthorized write exposure |
| High | Major user-facing issue impacting trust or conversion | broken blog route, major layout collapse, invalid CTA behavior |
| Medium | Usability or clarity issue that needs correction | unclear validation text, weak contrast in a section |
| Low | Cosmetic or minor improvement issue | spacing inconsistency, non-critical motion imbalance |

## 11. Regression Strategy

To reduce risk as the site evolves:

- run build checks after every significant change,
- check the main conversion paths after routing or component changes,
- confirm content and SEO updates after new pages are added,
- treat blog and form flows as release-critical assets,
- review analytics and consent logic whenever tracking changes are made,
- maintain a short list of pages that must always pass smoke testing before production release.

## 12. Recommended Automation Roadmap

The repository does not yet show a comprehensive automated QA suite. A practical roadmap would be:

1. Add route smoke tests for key public pages.
2. Add form validation tests for contact and newsletter flows.
3. Add a small integration layer for Supabase error handling checks.
4. Add UI tests for CTA, navigation, and blog page selection logic.
5. Add accessibility smoke tests for key pages.
6. Add build and route checks to the CI process.

## 13. Responsibilities

### Engineering

- Keep the frontend build stable.
- Validate route, form, and integration behavior.
- Fix issues before merge and release.
- Ensure environment-specific values remain secure and correctly scoped.

### Product or content owner

- Approve business-facing copy and positioning.
- Validate claims, metrics, and publication quality.
- Check that marketing pages match intended brand and audience goals.

### QA owner

- Verify critical flows across devices.
- Track defects and release blockers.
- Ensure regression coverage is maintained for key journeys.

## 14. Repository References

- `package.json` — project scripts and validation commands.
- `src/App.tsx` — route-driven user journeys.
- `src/components/Contact.tsx` — contact form validation and user feedback.
- `src/pages-Blogs/` — blog reading and admin interactions.
- `scripts/` — SEO generation and build-time output validation.
- `netlify/functions/` — public-facing serverless endpoints and data integration behavior.
- `supabase/` — policy and schema references affecting data reliability and authorization.

---

**Review note:** This document establishes a practical QA baseline for the current repository and should be expanded as automated test coverage, production monitoring, and release governance mature.
