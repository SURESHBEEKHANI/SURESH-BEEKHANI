import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { lazyLoadImages, requestIdleCallback } from './lib/performance'

const root = document.getElementById("root");
if (!root) throw new Error('Root element not found');

createRoot(root).render(<App />);

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

