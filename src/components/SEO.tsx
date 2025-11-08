import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

/**
 * Professional SEO component for managing meta tags
 * Updates document head with proper meta information
 */
export const SEO = ({
  title = 'Suresh Beekhani - AI & Machine Learning Specialist',
  description = 'Professional AI and Machine Learning solutions. Specializing in healthcare AI, chatbot development, computer vision, and predictive modeling.',
  keywords = 'AI development, machine learning, deep learning, healthcare AI, chatbot development, computer vision, NLP, predictive modeling',
  image = '/image/sureshbeekhani.png',
  url = 'https://sureshbeekhani.com',
  type = 'website'
}: SEOProps) => {
  const fullTitle = title.includes('Suresh Beekhani') ? title : `${title} | Suresh Beekhani`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${selector}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Suresh Beekhani');
    updateMetaTag('robots', 'index, follow');

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Suresh Beekhani', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', fullTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:creator', '@SureshBeekhan', true);

    // Theme color
    updateMetaTag('theme-color', '#6C63FF');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [fullTitle, description, keywords, image, url, type]);

  return null;
};
