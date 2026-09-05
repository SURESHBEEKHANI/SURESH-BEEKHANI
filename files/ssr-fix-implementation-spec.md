# Fix: Server-render page content (blocking — do this before any other SEO/GEO/AEO work)

## Problem
`https://velnixsolutions.com/` returns a fully empty `<body>` to any HTTP
client that doesn't execute JavaScript. Two independent fetch/extraction
passes confirmed this — only `<head>` metadata (title, meta description,
OG/Twitter tags) came back. No headings, text, links, or structured data.

## Why it matters
- **Google**: renders JS in a deferred second wave. Can lag days to weeks,
  or never complete for a low-authority/new domain.
- **Every AI answer-engine crawler does not render JS at all**: GPTBot
  (OpenAI), ClaudeBot (Anthropic), PerplexityBot, CCBot (feeds many LLM
  training pipelines). They see exactly what this audit saw: nothing.
- **Consequence already observed**: neither `velnixsolutions.com` nor the
  brand name "Velnix Solutions" returns a single result anywhere in web
  search today.

## Fix options (pick based on current stack)

**If the site is a custom React/Vue SPA:**
- Migrate to a framework with SSR or static generation by default:
  Next.js (`next export` for SSG, or standard SSR), Nuxt, Astro, or
  Remix. For a marketing site like this, static generation (SSG) is
  almost certainly the right call — content doesn't change per-request.

**If migrating the framework isn't feasible right now (interim fix):**
- Add a prerendering layer that detects bot user-agents (Googlebot,
  GPTBot, ClaudeBot, PerplexityBot, bingbot, etc.) and serves them a
  pre-rendered HTML snapshot while real users still get the SPA.
  Options: Prerender.io (hosted), or self-hosted Rendertron behind
  the existing server/CDN.

**If the site is built on a no-code platform (Wix, Webflow, Framer, Squarespace):**
- Check the platform's SEO/indexing settings first — most of these
  platforms server-render by default, so an empty body suggests either
  a custom code embed intercepting the page, a JS-only section/widget
  covering the whole page, or an indexing setting disabled. Confirm
  which platform is in use before assuming a full framework migration
  is needed.

## Acceptance criteria
Run this and confirm real content comes back (not just `<head>`):
```bash
curl -A "Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)" https://velnixsolutions.com/ | grep -i "<body"
```
The response body should contain visible headings and text matching what
a browser shows — not an empty `<div id="root">` or equivalent shell.

## Priority
**Critical / blocking.** Every other recommendation in the SEO/GEO/AEO
audit (schema markup, sitemap submission, content optimization, FAQ
content) has near-zero effect until this ships, because none of that
content is currently visible to anything that isn't a full browser.
