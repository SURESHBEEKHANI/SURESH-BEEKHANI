/**
 * Custom Animation Hooks
 * Reusable hooks for Framer Motion animations
 */

import { useEffect, useState, useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

/**
 * Hook to detect if user prefers reduced motion
 * Respects system accessibility settings
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook for scroll-triggered animations
 * Returns ref and inView state
 */
export const useScrollAnimation = (options?: {
  threshold?: number;
  triggerOnce?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, {
    once: options?.triggerOnce ?? true,
    amount: options?.threshold ?? 0.1,
  });

  return { ref, isInView };
};

/**
 * Hook for element in viewport detection
 * More flexible than useScrollAnimation
 */
export const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px 0px -100px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
};

/**
 * Hook to monitor animation performance (FPS)
 * Useful for debugging performance issues
 */
export const useAnimationPerformance = (enabled = false) => {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    if (!enabled) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const measureFPS = () => {
      const currentTime = performance.now();
      frameCount++;

      if (currentTime >= lastTime + 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFps(currentFps);

        if (currentFps < 50) {
          console.warn('Low FPS detected:', currentFps);
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return fps;
};

/**
 * Hook for stagger animation delays
 * Returns delay value based on index
 */
export const useStaggerDelay = (index: number, baseDelay = 0, staggerAmount = 0.1) => {
  return baseDelay + index * staggerAmount;
};

/**
 * Hook to handle animation state
 * Useful for complex animation sequences
 */
export const useAnimationState = (initialState: string = 'idle') => {
  const [animationState, setAnimationState] = useState(initialState);

  const startAnimation = (state: string) => {
    setAnimationState(state);
  };

  const resetAnimation = () => {
    setAnimationState(initialState);
  };

  return { animationState, startAnimation, resetAnimation };
};

/**
 * Hook for scroll progress
 * Returns scroll progress as a value between 0 and 1
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollProgress;
};

/**
 * Hook for mouse position tracking
 * Useful for parallax effects
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

/**
 * Hook for viewport size
 * Useful for responsive animations
 */
export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportSize;
};
