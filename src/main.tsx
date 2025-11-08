import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { lazyLoadImages, requestIdleCallback } from './lib/performance'

const root = document.getElementById("root");
if (!root) throw new Error('Root element not found');

createRoot(root).render(<App />);

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

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator && (import.meta as any).env?.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed - this is optional
    });
  });
}
