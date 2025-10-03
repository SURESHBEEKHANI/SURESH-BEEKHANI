import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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
