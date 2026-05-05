import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ─── Types ──────────────────────────────────────────────────────────────────────
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noIndex?: boolean;
  locale?: string;
  alternateLocales?: string[];
  schemaType?: 'Organization' | 'WebPage' | 'Article' | 'Service' | 'Product' | 'FAQPage' | 'Person';
  faqItems?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
  serviceDetails?: { name: string; description: string; provider?: string };
}

// ─── Constants ──────────────────────────────────────────────────────────────────
const SITE_NAME = 'Velnix Solutions';
const BASE_URL = 'https://velnixsolutions.com';
const DEFAULT_IMAGE = `${BASE_URL}/image/preview.png`;
const DEFAULT_DESCRIPTION =
  'Velnix Solutions is a global AI development company specializing in healthcare AI, machine learning, NLP, computer vision, chatbot development, and intelligent automation solutions.';
const DEFAULT_KEYWORDS =
  'AI development company, machine learning solutions, healthcare AI, NLP services, computer vision, chatbot development, predictive modeling, AI automation, deep learning, Velnix Solutions, agentic AI, custom software development';
const TWITTER_HANDLE = '@VelnixSolutions';
const THEME_COLOR = '#ff0ea3';

// ─── Route-Specific SEO Defaults ────────────────────────────────────────────────
const ROUTE_SEO: Record<string, Partial<SEOProps>> = {
  '/': {
    title: 'Velnix Solutions | AI Development Company & Healthcare AI Agency',
    description: DEFAULT_DESCRIPTION,
    schemaType: 'Organization',
  },
  '/about': {
    title: 'About Velnix Solutions — Our Vision, Mission & Core Values',
    description:
      'Learn about Velnix Solutions — an emerging AI service provider leveraging cutting-edge technology to deliver smart, scalable AI solutions for businesses worldwide.',
    keywords: 'about Velnix Solutions, AI company, AI vision, AI mission, AI team, AI agency',
    schemaType: 'WebPage',
  },
  '/contact': {
    title: 'Contact Velnix Solutions — Get a Free AI Consultation',
    description:
      'Reach out to Velnix Solutions for AI development, machine learning, and custom software solutions. Get a free consultation today.',
    keywords: 'contact Velnix Solutions, AI consultation, hire AI developers',
    schemaType: 'WebPage',
  },
  '/portfolio': {
    title: 'AI Portfolio — Case Studies & Projects | Velnix Solutions',
    description:
      'Explore our AI portfolio showcasing real-world projects in healthcare, finance, education, legal tech, and DevOps automation.',
    keywords: 'AI portfolio, AI case studies, AI projects, machine learning portfolio',
    schemaType: 'WebPage',
  },
  '/blogs': {
    title: 'AI & Tech Blog — Insights & Trends | Velnix Solutions',
    description:
      'Stay updated with the latest AI trends, machine learning insights, and technology deep-dives from the Velnix Solutions team.',
    keywords: 'AI blog, machine learning blog, tech insights, AI trends',
    schemaType: 'WebPage',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Velnix Solutions',
    description: 'Read the Velnix Solutions privacy policy to understand how we collect, use, and protect your personal data.',
    noIndex: false,
    schemaType: 'WebPage',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Velnix Solutions',
    description: 'Review the terms and conditions for using Velnix Solutions services and website.',
    noIndex: false,
    schemaType: 'WebPage',
  },
  // ── Services ──
  '/ai-development': {
    title: 'AI Development Services — Custom AI Solutions | Velnix Solutions',
    description: 'End-to-end AI development services including model training, deployment, and integration for enterprises.',
    keywords: 'AI development services, custom AI solutions, AI model training, enterprise AI',
    schemaType: 'Service',
  },
  '/ai-automation': {
    title: 'AI Automation Solutions — Intelligent Process Automation | Velnix Solutions',
    description: 'Automate workflows with AI-powered intelligent automation solutions that reduce costs and boost efficiency.',
    keywords: 'AI automation, intelligent automation, RPA, workflow automation',
    schemaType: 'Service',
  },
  '/ai-chatbot-development': {
    title: 'AI Chatbot Development — Conversational AI Solutions | Velnix Solutions',
    description: 'Build intelligent AI chatbots with NLP capabilities for customer support, healthcare, and enterprise use cases.',
    keywords: 'AI chatbot development, conversational AI, NLP chatbot, customer support bot',
    schemaType: 'Service',
  },
  '/predictive-modelling': {
    title: 'Predictive Modeling Services — Data-Driven Forecasting | Velnix Solutions',
    description: 'Leverage predictive modeling and analytics to forecast trends, optimize operations, and make smarter decisions.',
    keywords: 'predictive modeling, data analytics, forecasting, ML models',
    schemaType: 'Service',
  },
  '/chat-gpt-integrations': {
    title: 'ChatGPT Integration Services — GPT API Solutions | Velnix Solutions',
    description: 'Integrate ChatGPT and GPT APIs into your applications for advanced conversational AI capabilities.',
    keywords: 'ChatGPT integration, GPT API, OpenAI integration, LLM solutions',
    schemaType: 'Service',
  },
  '/natural-language-processing': {
    title: 'NLP Services — Natural Language Processing Solutions | Velnix Solutions',
    description: 'Advanced NLP solutions including text analysis, sentiment analysis, entity recognition, and language understanding.',
    keywords: 'NLP services, natural language processing, text analytics, sentiment analysis',
    schemaType: 'Service',
  },
  '/machine-learning': {
    title: 'Machine Learning Services — ML Model Development | Velnix Solutions',
    description: 'Custom machine learning model development, training, and deployment for complex business challenges.',
    keywords: 'machine learning services, ML development, model training, deep learning',
    schemaType: 'Service',
  },
  '/computer-vision': {
    title: 'Computer Vision Solutions — Image & Video AI | Velnix Solutions',
    description: 'Computer vision solutions for image recognition, object detection, medical imaging, and video analysis.',
    keywords: 'computer vision, image recognition, object detection, visual AI',
    schemaType: 'Service',
  },
  '/web-development': {
    title: 'Web Development Services — Modern Web Solutions | Velnix Solutions',
    description: 'High-performance, SEO-optimized web development using React, Next.js, and modern frameworks.',
    keywords: 'web development, React development, Next.js, modern web apps',
    schemaType: 'Service',
  },
  '/app-development': {
    title: 'App Development Services — Mobile & Cross-Platform Apps | Velnix Solutions',
    description: 'Build high-quality mobile and cross-platform applications with modern technologies and AI integration.',
    keywords: 'app development, mobile apps, cross-platform, React Native',
    schemaType: 'Service',
  },
  '/devops': {
    title: 'DevOps Services — CI/CD & Cloud Infrastructure | Velnix Solutions',
    description: 'Streamline your development pipeline with DevOps, CI/CD automation, and cloud infrastructure management.',
    keywords: 'DevOps services, CI/CD, cloud infrastructure, Docker, Kubernetes',
    schemaType: 'Service',
  },
  '/custom-software-development': {
    title: 'Custom Software Development — Tailored Solutions | Velnix Solutions',
    description: 'Bespoke software development solutions designed to address your unique business requirements.',
    keywords: 'custom software development, bespoke software, enterprise solutions',
    schemaType: 'Service',
  },
  '/big-data-analytics': {
    title: 'Big Data Analytics — Data Engineering & Insights | Velnix Solutions',
    description: 'Transform raw data into actionable insights with our big data analytics and engineering services.',
    keywords: 'big data analytics, data engineering, data insights, data pipeline',
    schemaType: 'Service',
  },
  '/agentic-ai': {
    title: 'Agentic AI Solutions — Autonomous AI Agents | Velnix Solutions',
    description: 'Build autonomous AI agents that reason, plan, and execute complex multi-step tasks independently.',
    keywords: 'agentic AI, autonomous agents, AI agents, multi-agent systems',
    schemaType: 'Service',
  },
  // ── Industries ──
  '/clinics-and-small-hospitals': {
    title: 'AI for Clinics & Small Hospitals | Velnix Solutions',
    description: 'AI-powered solutions tailored for clinics and small hospitals to optimize patient care and operations.',
    keywords: 'AI for clinics, hospital AI, healthcare AI, clinic management',
    schemaType: 'Service',
  },
  '/telemedicine': {
    title: 'AI for Telemedicine — Remote Healthcare Solutions | Velnix Solutions',
    description: 'Enhance telemedicine platforms with AI-driven diagnostics, virtual triage, and remote monitoring.',
    keywords: 'telemedicine AI, remote healthcare, virtual care, telehealth',
    schemaType: 'Service',
  },
  '/drug-discovery': {
    title: 'AI for Drug Discovery — Pharmaceutical AI | Velnix Solutions',
    description: 'Accelerate drug discovery with AI-powered molecular analysis, target identification, and clinical trial optimization.',
    keywords: 'AI drug discovery, pharmaceutical AI, molecular analysis',
    schemaType: 'Service',
  },
  '/healthcare-data-analytics': {
    title: 'Healthcare Data Analytics — Health Informatics | Velnix Solutions',
    description: 'Advanced healthcare data analytics for population health, clinical decision support, and operational efficiency.',
    keywords: 'healthcare analytics, health informatics, clinical data, population health',
    schemaType: 'Service',
  },
  '/hospital-operations-management': {
    title: 'AI for Hospital Operations — Smart Hospital Solutions | Velnix Solutions',
    description: 'Optimize hospital operations with AI-driven scheduling, resource management, and workflow automation.',
    keywords: 'hospital operations AI, smart hospital, healthcare operations',
    schemaType: 'Service',
  },
  '/medical-imaging-radiology': {
    title: 'AI for Medical Imaging & Radiology | Velnix Solutions',
    description: 'AI-powered medical imaging solutions for radiology, pathology, and diagnostic assistance.',
    keywords: 'medical imaging AI, radiology AI, diagnostic AI, pathology',
    schemaType: 'Service',
  },
  '/electronic-health-records': {
    title: 'AI for Electronic Health Records (EHR/EMR) | Velnix Solutions',
    description: 'Intelligent EHR/EMR solutions with AI-assisted documentation, coding, and clinical decision support.',
    keywords: 'EHR AI, EMR solutions, electronic health records, clinical documentation',
    schemaType: 'Service',
  },
  '/mental-health-tech': {
    title: 'AI for Mental Health Technology | Velnix Solutions',
    description: 'AI-powered mental health solutions including therapy chatbots, mood tracking, and behavioral analysis.',
    keywords: 'mental health AI, therapy chatbot, behavioral analysis, wellness tech',
    schemaType: 'Service',
  },
};

// ─── Schema Generators ──────────────────────────────────────────────────────────
function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/image/logo/Neurovex.png`,
    description: DEFAULT_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-335-131-2852',
      contactType: 'customer service',
      email: 'velnixsolutions@gmail.com',
      areaServed: ['US', 'GB', 'AE', 'PK'],
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://www.facebook.com/VelnixSolutions',
      'https://www.linkedin.com/company/velnixsolutions/',
      'https://x.com/VelnixSolutions',
      'https://www.instagram.com/velnixsolutions/',
    ],
  };
}

function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
  };
}

function generateServiceSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
  };
}

function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  publishedTime?: string,
  modifiedTime?: string,
  author?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    datePublished: publishedTime || new Date().toISOString(),
    dateModified: modifiedTime || publishedTime || new Date().toISOString(),
    author: { '@type': 'Person', name: author || SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/image/logo/Neurovex.png` },
    },
  };
}

function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

// ─── Helper: upsert meta tag ────────────────────────────────────────────────────
function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// ─── Helper: upsert link tag ────────────────────────────────────────────────────
function upsertLink(rel: string, href: string, attrs?: Record<string, string>) {
  const selector = attrs
    ? `link[rel="${rel}"][hreflang="${attrs.hreflang || ''}"]`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    if (attrs) Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
}

// ─── Helper: upsert JSON-LD script ─────────────────────────────────────────────
function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Professional SEO component for Velnix Solutions
 *
 * Features:
 * - Auto-detects route and applies page-specific meta defaults
 * - Open Graph & Twitter Card meta tags
 * - JSON-LD structured data (Organization, WebPage, Service, Article, FAQ, Breadcrumb)
 * - Canonical URL management
 * - Robots directives
 * - Locale & hreflang support
 */
export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  noIndex = false,
  locale = 'en_US',
  alternateLocales,
  schemaType,
  faqItems,
  breadcrumbs,
}: SEOProps) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Merge route-level defaults with explicit props (props win)
  const routeDefaults = ROUTE_SEO[pathname] || {};
  const resolvedTitle = title || routeDefaults.title || `${SITE_NAME} | AI Development Company`;
  const resolvedDesc = description || routeDefaults.description || DEFAULT_DESCRIPTION;
  const resolvedKeywords = keywords || routeDefaults.keywords || DEFAULT_KEYWORDS;
  const resolvedImage = image || DEFAULT_IMAGE;
  const resolvedUrl = url || `${BASE_URL}${pathname}`;
  const resolvedSchema = schemaType || routeDefaults.schemaType || 'WebPage';
  const resolvedNoIndex = noIndex || routeDefaults.noIndex || false;

  const fullTitle = resolvedTitle.includes(SITE_NAME)
    ? resolvedTitle
    : `${resolvedTitle} | ${SITE_NAME}`;

  useEffect(() => {
    // ── Document title ──
    document.title = fullTitle;

    // ── Primary meta tags ──
    upsertMeta('name', 'title', fullTitle);
    upsertMeta('name', 'description', resolvedDesc);
    upsertMeta('name', 'keywords', resolvedKeywords);
    upsertMeta('name', 'author', author || SITE_NAME);
    upsertMeta('name', 'robots', resolvedNoIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');
    upsertMeta('name', 'theme-color', THEME_COLOR);
    upsertMeta('name', 'generator', 'Vite + React');

    // ── Open Graph ──
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', resolvedUrl);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', resolvedDesc);
    upsertMeta('property', 'og:image', resolvedImage);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:image:alt', fullTitle);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', locale);

    if (alternateLocales) {
      alternateLocales.forEach((loc) => upsertMeta('property', 'og:locale:alternate', loc));
    }

    // Article-specific OG tags
    if (type === 'article') {
      if (publishedTime) upsertMeta('property', 'article:published_time', publishedTime);
      if (modifiedTime) upsertMeta('property', 'article:modified_time', modifiedTime);
      if (author) upsertMeta('property', 'article:author', author);
      if (section) upsertMeta('property', 'article:section', section);
    }

    // ── Twitter Card (uses name attribute per Twitter spec) ──
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:site', TWITTER_HANDLE);
    upsertMeta('name', 'twitter:creator', TWITTER_HANDLE);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', resolvedDesc);
    upsertMeta('name', 'twitter:image', resolvedImage);
    upsertMeta('name', 'twitter:image:alt', fullTitle);

    // ── Canonical URL ──
    upsertLink('canonical', resolvedUrl);

    // ── Hreflang ──
    upsertLink('alternate', resolvedUrl, { hreflang: 'en', type: '' });
    upsertLink('alternate', resolvedUrl, { hreflang: 'x-default', type: '' });

    // ── JSON-LD Structured Data ──
    // Always inject Organization schema on homepage
    if (pathname === '/') {
      upsertJsonLd('schema-org', generateOrganizationSchema());
    }

    // Page-specific schema
    switch (resolvedSchema) {
      case 'Organization':
        upsertJsonLd('schema-page', generateOrganizationSchema());
        break;
      case 'Service':
        upsertJsonLd('schema-page', generateServiceSchema(fullTitle, resolvedDesc, resolvedUrl));
        break;
      case 'Article':
        upsertJsonLd(
          'schema-page',
          generateArticleSchema(fullTitle, resolvedDesc, resolvedUrl, resolvedImage, publishedTime, modifiedTime, author)
        );
        break;
      case 'FAQPage':
        if (faqItems?.length) upsertJsonLd('schema-page', generateFAQSchema(faqItems));
        break;
      case 'WebPage':
      default:
        upsertJsonLd('schema-page', generateWebPageSchema(fullTitle, resolvedDesc, resolvedUrl));
        break;
    }

    // Breadcrumb schema
    if (breadcrumbs?.length) {
      upsertJsonLd('schema-breadcrumb', generateBreadcrumbSchema(breadcrumbs));
    } else if (pathname !== '/') {
      // Auto-generate breadcrumbs from pathname
      const segments = pathname.split('/').filter(Boolean);
      const autoBreadcrumbs = [{ name: 'Home', url: '/' }];
      let currentPath = '';
      segments.forEach((seg) => {
        currentPath += `/${seg}`;
        autoBreadcrumbs.push({
          name: seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
          url: currentPath,
        });
      });
      upsertJsonLd('schema-breadcrumb', generateBreadcrumbSchema(autoBreadcrumbs));
    }
  }, [fullTitle, resolvedDesc, resolvedKeywords, resolvedImage, resolvedUrl, type, pathname, locale, resolvedNoIndex, resolvedSchema]);

  return null;
};
