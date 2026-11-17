# Velnix Solutions Website

## Security and Compliance Document

| Document field | Value |
|---|---|
| Document status | Draft for security review |
| Version | 1.0 |
| Prepared | 16 November 2026 |
| System | Velnix Solutions public website |
| Product requirements | [Product Requirements Document](../02-PRODUCT-REQUIREMENTS/PRODUCT_REQUIREMENTS_DOCUMENT.md) |
| Software requirements | [Software Requirements Specification](../02-PRODUCT-REQUIREMENTS/SOFTWARE_REQUIREMENTS_SPECIFICATION.md) |
| Technical design | [Technical Design Document](../03-TECHNICAL-DOCUMENTATION/TECHNICAL_DESIGN_DOCUMENT.md) |
| Deployment context | [Deployment and DevOps Document](../07-DEPLOYMENT-AND-DEVOPS/DEPLOYMENT_AND_DEVOPS_DOCUMENT.md) |

## 1. Purpose and Scope

This document describes the repository-visible security posture and compliance considerations for the Velnix Solutions website. It focuses on issues that can be identified from code, configuration, and deployment patterns in the current implementation.

This is not a legal or formal audit; it is a security baseline for engineering review and operational risk awareness. Production security, legal compliance, and data-privacy controls must be confirmed with the business owner, platform administrators, and compliance stakeholders.

## 2. Security Summary

The application is a public-facing marketing website with several sensitive operational surfaces:

- browser-facing contact forms,
- blog content administration,
- newsletter signups,
- Supabase-backed data operations,
- Netlify functions serving dynamic site content,
- analytics and consent logic,
- and environment-specific deployment configuration.

The biggest security themes in the current implementation are:

- authorization boundary maturity,
- data protection for admin and content workflows,
- secret handling discipline,
- consent and analytics alignment,
- and production environment governance.

## 3. Security Principles

- Keep privileged credentials out of the browser bundle.
- Use least-privilege access for application roles and database policies.
- Do not assume that a browser-visible key is sufficient authorization.
- Keep admin authorization explicit and role-aware.
- Ensure user-facing error messages do not reveal implementation details.
- Validate deployment config and operational controls outside the repository.

## 4. Security Findings from Repository Evidence

### 4.1 Blog write permissions are broad

The SQL script `supabase/blogs-authenticated-write-policy.sql` enables row-level security and then grants insert, update, and delete privileges to the `authenticated` role with unconditional checks.

Observed pattern:

```sql
grant select, insert, update, delete on table public.blogs to authenticated;
create policy "Authenticated users can insert blogs"
on public.blogs
for insert
to authenticated
with check (true);
```

This means that any authenticated user is effectively permitted to write blog records if deployed as-is. That is not an administrator-only model and should not be treated as a production-authorized control.

### 4.2 Blog images storage policy is user-scoped but not a complete admin model

The storage policy file `supabase/blog-images-storage-policies.sql` places uploads in a user-specific folder and allows public reads from the bucket. That is suitable for some public media scenarios, but it still requires review against business requirements.

Key concerns:

- public reads enable external access to stored image objects,
- authenticated users can update/delete their own uploaded content,
- access policies should be confirmed against product and privacy expectations.

### 4.3 Browser-side environment variables are public by design

The project uses `VITE_` environment variables for the browser. This is expected for public configuration such as:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_GA_MEASUREMENT_ID`

These values are visible in the client bundle. The repository must therefore never treat them as privileged secrets. Any service-role or write-capable secret must remain in server-side configuration only.

### 4.4 Serverless functions use fallback public configuration values

The Netlify function files include fallback Supabase URL and anon-key values. This is a configuration smell for production environments because it may cause a live environment to use default or public values if environment variables are not set correctly.

Example concern:

```js
const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://korkozxilsxaslokckif.supabase.co";
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_...";
```

These values are intended for public readonly operations, and they should be managed under an explicit deployment model rather than hidden inside code.

### 4.5 Sensitive deployment secrets may exist in environment config

The deployment document references optional secrets such as:

- `SUPABASE_SERVICE_ROLE_KEY`
- `NETLIFY_BUILD_HOOK`
- `VITE_NETLIFY_BUILD_HOOK`

These values are privileged or sensitive and should be treated as server-side-only configuration. They must not be exposed to frontend build output or logs.

### 4.6 Analytics and consent handling require validation

The repository contains analytics initialization and cookie-banner logic, but the current source review indicates that consent gating is not yet clearly integrated.

This creates a privacy risk because analytics behavior can become inconsistent with approved consent models. Before claiming compliance with privacy requirements, the site must confirm:

- whether analytics is opt-in or opt-out,
- which categories of tracking are active,
- what data is collected,
- how consent is stored and enforced,
- and whether the cookie banner matches the actual implementation.

## 5. Security Controls Already Present

### Public website design

The application is designed as a public website rather than a customer portal, which reduces some attack surface by default.

### Environment separation intent

The project has a clear distinction between client-safe and server-safe environment variables. This is a good baseline, but it must be enforced in practice.

### Static hosting model

Netlify static hosting reduces the attack surface compared with running a custom server. It also makes it easier to isolate application responsibilities.

### Serverless functions

Function-based route handling introduces some logic that is easier to keep server-side and away from the browser, which is helpful for metadata generation and operational separation.

## 6. Compliance Considerations

### Privacy and data handling

The project processes contact inquiries, newsletter signups, and blog admin content. Any such personal data must be reviewed against applicable privacy requirements, including:

- consent and tracking disclosures,
- data retention policy,
- lawful basis for processing,
- user-facing privacy notices,
- and deletion or access handling instructions where applicable.

### Content accuracy and claims

The website contains business performance and outcome statements that may require validation before publication. False or unsubstantiated claims can create legal and reputational risk.

### Accessibility and inclusion

Accessibility is not only a usability issue; it can also be part of broader compliance and responsible user experience practices. The site should maintain semantic structure, contrast, keyboard support, and understandable error states.

### Security policy ownership

Operational security controls such as Netlify settings, Supabase policies, analytics configuration, and admin authorization should be assigned to named owners. Lack of clear ownership is itself a governance compliance risk.

## 7. Recommended Security Improvements

The following improvements are recommended before the application is considered production-hardened:

### 7.1 Replace broad authenticated write access

The `blogs` table should be protected by a role or claim model that allows only authorized editorial/admin users to insert, update, or delete blog records.

Recommended practice:

- restrict writes to a clearly named admin role or claim,
- require row-level checks beyond `true`,
- confirm the identity model in Supabase before deployment.

### 7.2 Review storage bucket access

The blog image bucket should be reviewed to confirm:

- public read access is intentional,
- uploaded files are stored in the expected user or admin folder,
- update/delete rights are limited to authorized users,
- no private content is inadvertently exposed.

### 7.3 Enforce environment discipline

- keep secret values in deployment environment controls only,
- never expose service-role keys in client-side code,
- avoid fallback secrets in public code paths,
- document the expected environment variables and ownership per environment.

### 7.4 Validate consent and analytics

- confirm tracking is gated correctly,
- ensure the cookie banner behavior matches actual script execution,
- document the categories of tracking in use,
- and only claim consent compliance once the overall model is verified.

### 7.5 Standardize error handling

- return actionable but non-sensitive error messages,
- avoid exposing stack traces or internal configuration in browser output,
- preserve graceful degradation when external services fail.

### 7.6 Define clear operational ownership

Assign named responsibility for:

- deployment and hosting configuration,
- Supabase database policies,
- secrets and environment management,
- analytics configuration,
- website/content governance,
- and incident response.

## 8. Risk Rating Summary

| Area | Risk level | Notes |
|---|---|---|
| Blog admin authorization | High | broad authenticated writes in SQL scripts |
| Storage permissions | Medium | public reads and user-scoped writes need review |
| Secret handling | High | risk of exposing privileged config in browser or code |
| Analytics consent | Medium | current behavior should be validated against policy |
| Production environment control | Medium | repo alone does not establish secure operational ownership |
| Data privacy and claims | Medium | marketing and personal-data flows require review |

## 9. Security Checklist for Release Readiness

Before approving a production release, verify the following:

- [ ] No privileged secrets are stored in source or browser-safe config.
- [ ] Blog admin permissions are restricted to approved roles only.
- [ ] Blog image storage access matches privacy and content requirements.
- [ ] Analytics scripts are gated by consent and policy.
- [ ] Error handling does not leak internal details.
- [ ] Build and deployment settings are reviewed by the platform owner.
- [ ] Data retention and privacy notices are confirmed.
- [ ] Critical business claims have an approval path and evidence source.

## 10. Security Governance Recommendations

A stronger governance model should include:

- a named security owner or reviewer for production changes,
- clear review of SQL policy changes before they are applied,
- environment-specific approval for new secrets or API integrations,
- and regular review of public-facing data flows and root permissions.

## 11. Repository References

- `supabase/blogs-authenticated-write-policy.sql` — broad blog write policy example.
- `supabase/blog-images-storage-policies.sql` — blog image bucket permissions.
- `netlify.toml` — hosting and redirect configuration.
- `netlify/functions/` — serverless data endpoints and metadata generation.
- `src/lib/supabaseClient.ts` — browser Supabase initialization.
- `src/components/Contact.tsx` — user-submitted data handling.
- `src/pages-Blogs/BlogAdmin.tsx` — admin-facing content workflow.
- `src/components/CookieBanner.tsx` and app analytics bootstrap — consent and tracking behavior.

---

**Review note:** This document identifies the most important security and compliance considerations visible in the current repository. Production security sign-off requires validation of the actual deployed Supabase policies, Netlify settings, analytics implementation, and legal/privacy approvals outside the source repository.
