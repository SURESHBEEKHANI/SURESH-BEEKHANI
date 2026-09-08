import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { lazyLoadImages, requestIdleCallback } from './lib/performance'

const root = document.getElementById("root");
if (!root) throw new Error('Root element not found');

createRoot(root).render(<App />);

// #region agent log
const sendDebugLog = (payload: Record<string, unknown>) => {
  fetch('http://127.0.0.1:7506/ingest/771b2a7c-ee53-4e40-a2ba-c469b35ac4b1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '5ef95a' },
    body: JSON.stringify({ sessionId: '5ef95a', timestamp: Date.now(), ...payload }),
  }).catch(() => {});
};

const collectOverflowOffenders = (limit = 8) => {
  const docWidth = document.documentElement.clientWidth;
  const offenders: Array<{ tag: string; id: string; cls: string; sw: number; cw: number; right: number }> = [];
  const nodes = document.querySelectorAll('body *');
  for (let i = 0; i < nodes.length; i++) {
    const el = nodes[i] as HTMLElement;
    if (!(el instanceof HTMLElement)) continue;
    const sw = el.scrollWidth;
    const cw = el.clientWidth;
    const rect = el.getBoundingClientRect();
    if (sw > cw + 2 || rect.right > docWidth + 2) {
      offenders.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || '',
        cls: (el.className?.toString?.() || '').slice(0, 120),
        sw,
        cw,
        right: Math.round(rect.right),
      });
    }
  }
  offenders.sort((a, b) => (b.sw - b.cw) - (a.sw - a.cw));
  return offenders.slice(0, limit);
};

const auditLayout = (runId: string) => {
  const htmlStyle = getComputedStyle(document.documentElement);
  const bodyStyle = getComputedStyle(document.body);
  const sampleLink = document.querySelector('a');
  const linkStyle = sampleLink ? getComputedStyle(sampleLink) : null;
  const industryHero = document.querySelector('.hero-bg > .relative.z-10.mx-auto.grid');
  const heroGrid = industryHero ? getComputedStyle(industryHero as HTMLElement).gridTemplateColumns : '';
  const dropdown = document.querySelector('.absolute.top-full.left-1\\/2');

  sendDebugLog({
    runId,
    hypothesisId: 'A',
    location: 'main.tsx:auditLayout',
    message: 'html/body overflow and viewport',
    data: {
      path: location.pathname,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      htmlOverflow: htmlStyle.overflow,
      htmlOverflowX: htmlStyle.overflowX,
      htmlHeight: htmlStyle.height,
      bodyOverflow: bodyStyle.overflow,
      bodyOverflowX: bodyStyle.overflowX,
      bodyOverflowY: bodyStyle.overflowY,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      overflowDelta: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      radiusToken: htmlStyle.getPropertyValue('--radius').trim() || 'UNSET',
    },
  });

  sendDebugLog({
    runId,
    hypothesisId: 'B',
    location: 'main.tsx:collectOverflowOffenders',
    message: 'top overflow offenders',
    data: {
      path: location.pathname,
      innerWidth: window.innerWidth,
      offenders: collectOverflowOffenders(),
    },
  });

  sendDebugLog({
    runId,
    hypothesisId: 'C',
    location: 'main.tsx:linkMinSize',
    message: 'global mobile min-size on anchors',
    data: {
      innerWidth: window.innerWidth,
      linkMinWidth: linkStyle?.minWidth,
      linkMinHeight: linkStyle?.minHeight,
      linkDisplay: linkStyle?.display,
    },
  });

  sendDebugLog({
    runId,
    hypothesisId: 'D',
    location: 'main.tsx:industryHeroGrid',
    message: 'industry hero grid columns if present',
    data: {
      path: location.pathname,
      innerWidth: window.innerWidth,
      heroGrid,
      hasIndustryHero: Boolean(industryHero),
    },
  });

  sendDebugLog({
    runId,
    hypothesisId: 'E',
    location: 'main.tsx:navDropdown',
    message: 'desktop dropdown presence vs viewport',
    data: {
      innerWidth: window.innerWidth,
      dropdownCount: dropdown ? 1 : document.querySelectorAll('[style*="min-width"]').length,
      navFixed: Boolean(document.querySelector('nav[aria-label="Main navigation"]')),
    },
  });
};

const scheduleLayoutAudit = () => {
  window.setTimeout(() => auditLayout('pre-fix'), 800);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleLayoutAudit);
} else {
  scheduleLayoutAudit();
}
window.addEventListener('resize', () => auditLayout('pre-fix-resize'));
window.addEventListener('popstate', () => window.setTimeout(() => auditLayout('pre-fix-nav'), 600));
// #endregion

const GA_MEASUREMENT_ID = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || 'G-HBZG5HGKQE';

const loadAnalytics = () => {
  if (!GA_MEASUREMENT_ID || document.querySelector('script[data-velnix-analytics]')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  script.dataset.velnixAnalytics = 'true';
  document.head.appendChild(script);
};

const scheduleAnalytics = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
  } else {
    window.setTimeout(loadAnalytics, 1500);
  }
};

scheduleAnalytics();

// Optimized scroll-reveal for elements with .reveal
const setupScrollReveal = () => {
  const elements = document.querySelectorAll('.reveal');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
};

// Setup scroll reveal after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupScrollReveal);
} else {
  requestAnimationFrame(setupScrollReveal);
}

// Initialize lazy loading for images
requestIdleCallback(() => {
  lazyLoadImages();
});

