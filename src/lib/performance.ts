// Performance optimization utilities

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('img.lazy').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll/resize events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fonts = [
    '/fonts/inter.woff2',
    '/fonts/poppins.woff2',
  ];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Get connection speed
 */
export const getConnectionSpeed = (): string => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (connection) {
    return connection.effectiveType || 'unknown';
  }
  
  return 'unknown';
};

/**
 * Optimize images based on device and connection
 */
export const getOptimizedImageUrl = (url: string, width?: number): string => {
  const isMobile = isMobileDevice();
  const connectionSpeed = getConnectionSpeed();
  
  // For slow connections or mobile, use smaller images
  if (connectionSpeed === 'slow-2g' || connectionSpeed === '2g' || (isMobile && !width)) {
    return url.replace(/\.(jpg|jpeg|png)$/i, '-small.$1');
  }
  
  if (width) {
    return `${url}?w=${width}`;
  }
  
  return url;
};

/**
 * Request idle callback polyfill
 */
export const requestIdleCallback = (callback: IdleRequestCallback): number => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  
  return setTimeout(() => {
    const start = Date.now();
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
    });
  }, 1) as unknown as number;
};

/**
 * Prefetch route on hover
 */
export const prefetchRoute = (path: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
};

/**
 * Monitor Core Web Vitals using Performance Observer API
 * This is a lightweight alternative to the web-vitals package
 */
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (!onPerfEntry || !(onPerfEntry instanceof Function)) return;

  // Use native Performance Observer API
  if ('PerformanceObserver' in window) {
    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        onPerfEntry({
          name: 'LCP',
          value: lastEntry.startTime,
          rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          onPerfEntry({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            rating: entry.processingStart - entry.startTime < 100 ? 'good' : entry.processingStart - entry.startTime < 300 ? 'needs-improvement' : 'poor'
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            onPerfEntry({
              name: 'CLS',
              value: clsValue,
              rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
            });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          onPerfEntry({
            name: 'FCP',
            value: entry.startTime,
            rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor'
          });
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        onPerfEntry({
          name: 'TTFB',
          value: ttfb,
          rating: ttfb < 600 ? 'good' : ttfb < 1500 ? 'needs-improvement' : 'poor'
        });
      }
    } catch (error) {
      console.warn('Performance monitoring not fully supported in this browser');
    }
  }
};
