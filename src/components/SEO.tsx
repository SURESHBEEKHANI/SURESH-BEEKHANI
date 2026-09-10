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
  schemaType?:
    | 'Organization'
    | 'WebPage'
    | 'Article'
    | 'Service'
    | 'Product'
    | 'FAQPage'
    | 'Person';
  faqItems?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
  serviceDetails?: {
    name: string;
    description: string;
    provider?: string;
  };
}

// ─── Constants ──────────────────────────────────────────────────────────────────
const SITE_NAME = 'Velnix Solutions';
const BASE_URL = 'https://velnixsolutions.com';
const DEFAULT_IMAGE = `${BASE_URL}/image/preview.png`;

const BRAND_TAGLINE =
  'Building Intelligence. Accelerating Ambition with AI.';

const DEFAULT_DESCRIPTION =
  'Velnix Solutions is an AI development agency helping businesses transform repetitive workflows into intelligent systems with Agentic AI, AI automation, machine learning, and custom AI software.';

const DEFAULT_KEYWORDS =
  'AI development agency, AI agency, Agentic AI, Agentic AI development, AI agents, autonomous AI agents, AI agent development, AI development, AI automation, machine learning, deep learning, generative AI, conversational AI, multi-agent systems, computer vision, natural language processing, data intelligence, custom AI software, custom software development, intelligent systems, SMB workflow automation, AI solutions for SMBs, Velnix Solutions';

const TWITTER_HANDLE = '@VelnixSolutions';
const THEME_COLOR = '#050505';

// ─── Route-Specific SEO Defaults ────────────────────────────────────────────────
const ROUTE_SEO: Record<string, Partial<SEOProps>> = {
  '/': {
    title: 'Velnix Solutions | AI Development Agency',
    description:
      'Velnix Solutions is an AI development agency helping businesses transform repetitive workflows into intelligent systems with Agentic AI, AI automation, machine learning, and custom AI software.',
    keywords: DEFAULT_KEYWORDS,
    schemaType: 'Organization',
  },

  '/about': {
    title: 'About Velnix Solutions | AI Development Agency',
    description:
      'Learn about Velnix Solutions, an AI development agency building Agentic AI, AI agents, machine learning systems, automation workflows, and custom software for modern businesses.',
    keywords:
      'about Velnix Solutions, AI agency, AI development agency, Agentic AI company, AI agents, machine learning company, AI automation, intelligent software',
    schemaType: 'WebPage',
  },

  '/contact': {
    title: 'Contact Velnix Solutions | AI Development Agency',
    description:
      'Contact Velnix Solutions for Agentic AI development, AI agents, machine learning, AI automation, conversational AI, and custom AI software.',
    keywords:
      'contact Velnix Solutions, AI consultation, AI development consultation, Agentic AI consultation, hire AI developers, AI automation',
    schemaType: 'WebPage',
  },

  '/careers': {
    title: 'Careers at Velnix Solutions | AI & Software Engineering',
    description:
      'Explore careers at Velnix Solutions and work on Agentic AI, AI agents, machine learning, automation, and intelligent software systems.',
    keywords:
      'Velnix careers, AI careers, machine learning jobs, AI engineering, software engineering, Agentic AI jobs',
    schemaType: 'WebPage',
  },

  '/cookie-policy': {
    title: 'Cookie Policy | Velnix Solutions',
    description:
      'Read how Velnix Solutions uses cookies and similar technologies on this website.',
    schemaType: 'WebPage',
  },

  '/portfolio': {
    title: 'AI Portfolio | Agentic AI, AI Agents & ML Projects | Velnix Solutions',
    description:
      'Explore Velnix Solutions projects across Agentic AI, AI agents, machine learning, AI automation, conversational AI, computer vision, and custom software.',
    keywords:
      'AI portfolio, Agentic AI projects, AI agent projects, machine learning portfolio, AI automation projects, AI case studies, custom AI software',
    schemaType: 'WebPage',
  },

  '/blogs': {
    title: 'AI, Agentic AI & Machine Learning Blog | Velnix Solutions',
    description:
      'Explore insights on Agentic AI, AI agents, machine learning, AI automation, generative AI, software engineering, and intelligent business systems.',
    keywords:
      'AI blog, Agentic AI blog, AI agents blog, machine learning blog, AI automation blog, generative AI, AI trends, AI software development',
    schemaType: 'WebPage',
  },

  '/privacy-policy': {
    title: 'Privacy Policy | Velnix Solutions',
    description:
      'Read the Velnix Solutions privacy policy to understand how we collect, use, and protect your personal data.',
    noIndex: false,
    schemaType: 'WebPage',
  },

  '/terms-and-conditions': {
    title: 'Terms & Conditions | Velnix Solutions',
    description:
      'Review the terms and conditions for using Velnix Solutions services and website.',
    noIndex: false,
    schemaType: 'WebPage',
  },

  // ── Core Services ─────────────────────────────────────────────────────────────

  '/ai-development': {
    title: 'AI Development Services | Agentic AI & Custom AI | Velnix Solutions',
    description:
      'Build production-ready AI systems with Agentic AI, AI agents, machine learning, generative AI, and custom AI software development.',
    keywords:
      'AI development services, AI development agency, Agentic AI development, AI agents, custom AI solutions, machine learning development, generative AI',
    schemaType: 'Service',
  },

  '/ai-automation': {
    title: 'AI Automation Services | Intelligent Workflow Automation | Velnix Solutions',
    description:
      'Automate repetitive business workflows with AI-powered automation, AI agents, intelligent process orchestration, and integrated business systems.',
    keywords:
      'AI automation, AI workflow automation, intelligent automation, business process automation, SMB automation, AI agents, workflow automation',
    schemaType: 'Service',
  },

  '/ai-chatbot-development': {
    title: 'Conversational AI & Chatbot Development | Velnix Solutions',
    description:
      'Build intelligent conversational AI and chatbots powered by NLP, generative AI, retrieval systems, and AI agents for modern business workflows.',
    keywords:
      'AI chatbot development, conversational AI, NLP chatbot, generative AI chatbot, AI agents, business chatbots, conversational agents',
    schemaType: 'Service',
  },

  '/predictive-modelling': {
    title: 'Predictive Modeling Services | Machine Learning | Velnix Solutions',
    description:
      'Use machine learning and predictive modeling to forecast trends, identify patterns, optimize operations, and support data-driven business decisions.',
    keywords:
      'predictive modeling, machine learning forecasting, predictive analytics, data analytics, ML models, machine learning services',
    schemaType: 'Service',
  },

  '/natural-language-processing': {
    title: 'Natural Language Processing Services | Velnix Solutions',
    description:
      'Build NLP systems for text analysis, information extraction, semantic search, language understanding, document processing, and intelligent automation.',
    keywords:
      'NLP services, natural language processing, NLP development, text analytics, semantic search, language AI, document AI',
    schemaType: 'Service',
  },

  '/machine-learning': {
    title: 'Machine Learning Services | ML Model Development | Velnix Solutions',
    description:
      'Develop and deploy custom machine learning models for prediction, classification, recommendation, forecasting, and intelligent business decision-making.',
    keywords:
      'machine learning services, machine learning development, ML development, machine learning agency, model training, deep learning, predictive analytics',
    schemaType: 'Service',
  },

  '/computer-vision': {
    title: 'Computer Vision Solutions | Image & Video AI | Velnix Solutions',
    description:
      'Build computer vision systems for image recognition, object detection, visual inspection, video analysis, OCR, and intelligent automation.',
    keywords:
      'computer vision, computer vision development, image recognition, object detection, video AI, OCR, visual AI',
    schemaType: 'Service',
  },

  '/web-development': {
    title: 'Web Development Services | AI-Powered Web Solutions | Velnix Solutions',
    description:
      'Build high-performance, SEO-optimized web applications with modern frameworks, AI integrations, automation, and scalable software architecture.',
    keywords:
      'web development, AI web development, React development, Next.js, modern web apps, custom web software',
    schemaType: 'Service',
  },

  '/app-development': {
    title: 'App Development Services | AI-Powered Applications | Velnix Solutions',
    description:
      'Build scalable mobile and cross-platform applications with modern technologies, AI integrations, intelligent automation, and custom software capabilities.',
    keywords:
      'app development, mobile app development, AI mobile apps, cross-platform apps, React Native, custom apps',
    schemaType: 'Service',
  },

  '/devops': {
    title: 'DevOps Services | CI/CD & Cloud Infrastructure | Velnix Solutions',
    description:
      'Streamline AI and software delivery with DevOps, CI/CD automation, cloud infrastructure, containerization, monitoring, and scalable deployment systems.',
    keywords:
      'DevOps services, CI/CD, cloud infrastructure, Docker, Kubernetes, AI deployment, MLOps',
    schemaType: 'Service',
  },

  '/custom-software-development': {
    title: 'Custom Software Development | AI-Powered Business Software | Velnix Solutions',
    description:
      'Build tailored software systems combining AI, automation, machine learning, integrations, and scalable architecture around your business workflows.',
    keywords:
      'custom software development, AI software development, business software, bespoke software, AI-powered software, custom AI software',
    schemaType: 'Service',
  },

  '/big-data-analytics': {
    title: 'Big Data Analytics | Data Engineering & Intelligence | Velnix Solutions',
    description:
      'Transform business data into actionable intelligence with data engineering, analytics, machine learning pipelines, and scalable data systems.',
    keywords:
      'big data analytics, data engineering, data intelligence, machine learning data, data pipelines, business analytics',
    schemaType: 'Service',
  },

  '/agentic-ai': {
    title: 'Agentic AI Development | AI Agents & Autonomous Systems | Velnix Solutions',
    description:
      'Build Agentic AI systems and autonomous AI agents that reason, plan, use tools, coordinate tasks, and execute complex multi-step business workflows.',
    keywords:
      'Agentic AI, Agentic AI development, AI agents, autonomous AI agents, AI agent development, multi-agent systems, intelligent agents',
    schemaType: 'Service',
  },

  // ── Industries ────────────────────────────────────────────────────────────────

  '/healthcare': {
    title: 'AI Software for Healthcare | Velnix Solutions',
    description:
      'Intelligent software and automation systems designed to improve healthcare workflows, operations, and digital experiences.',
    keywords:
      'AI software healthcare, healthcare software, healthcare automation, clinical workflow software',
    schemaType: 'Service',
  },

  '/fintech': {
    title: 'AI for Fintech | Velnix Solutions',
    description:
      'AI and automation solutions for financial workflows including fraud detection, risk analysis, onboarding, and operations.',
    keywords:
      'fintech AI, financial technology, fraud detection, risk scoring, financial automation',
    schemaType: 'Service',
  },

  '/education': {
    title: 'AI for Education | Velnix Solutions',
    description:
      'AI-powered software and automation for learning, teaching, student support, and education operations.',
    keywords:
      'education AI, EdTech, personalized learning, student support, education automation',
    schemaType: 'Service',
  },

  '/e-commerce': {
    title: 'AI for E-Commerce | Velnix Solutions',
    description:
      'AI and automation solutions for e-commerce search, recommendations, customer workflows, conversion, and operations.',
    keywords:
      'ecommerce AI, product recommendations, commerce search, retail AI, ecommerce automation',
    schemaType: 'Service',
  },

  '/food-and-groceries': {
    title: 'AI for Food & Groceries | Velnix Solutions',
    description:
      'AI and automation solutions for demand forecasting, inventory optimization, waste reduction, and grocery operations.',
    keywords:
      'grocery AI, foodtech, demand forecasting, inventory optimization, grocery automation',
    schemaType: 'Service',
  },

  '/travel-and-tourism': {
    title: 'AI for Travel & Tourism | Velnix Solutions',
    description:
      'AI-powered digital solutions for travel and hospitality including booking workflows, guest support, and operational automation.',
    keywords:
      'travel AI, hospitality AI, hotel operations, booking assistant, travel automation',
    schemaType: 'Service',
  },

  '/insurance': {
    title: 'AI for Insurance | Velnix Solutions',
    description:
      'AI and automation solutions for insurance claims, underwriting, policy workflows, customer service, and operations.',
    keywords:
      'insurance AI, claims automation, underwriting, insurtech, insurance automation',
    schemaType: 'Service',
  },

  '/on-demand': {
    title: 'AI for On-Demand Services | Velnix Solutions',
    description:
      'AI-powered solutions for dispatch, matching, customer workflows, marketplace operations, and on-demand service automation.',
    keywords:
      'on-demand AI, dispatch automation, marketplace operations, AI matching, service automation',
    schemaType: 'Service',
  },
};

// ─── Known Routes ───────────────────────────────────────────────────────────────
const KNOWN_ROUTES = new Set([
  ...Object.keys(ROUTE_SEO),

  '/careers',
  '/cookie-policy',
  '/blog-admin',

  '/portfolio/ai-powered-electronic-health-record',
  '/portfolio/ai-powered-patient-management-system',
  '/portfolio/ai-powered-telemedicine-systems',
  '/portfolio/ai-clinical-documentation-system',
  '/portfolio/diogenes-ai-chatbot',
  '/portfolio/ai-powered-medical-imaging-system',
  '/portfolio/ai-appointment-management-systems',
  '/portfolio/ai-powered-hospital-management-system',
]);

// ─── Helpers ────────────────────────────────────────────────────────────────────
function humanizePath(pathname: string) {
  return (
    pathname
      .split('/')
      .filter(Boolean)
      .join(' ')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (character) => character.toUpperCase()) ||
    'Home'
  );
}

// ─── Schema Generators ──────────────────────────────────────────────────────────

function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,

    name: SITE_NAME,
    url: `${BASE_URL}/`,
    logo: `${BASE_URL}/image/logo/logo1.avif`,

    description: DEFAULT_DESCRIPTION,
    slogan: BRAND_TAGLINE,

    foundingDate: '2025',

    knowsAbout: [
      'Artificial Intelligence',
      'AI Development',
      'AI Development Agency',
      'Agentic AI',
      'Agentic AI Development',
      'AI Agents',
      'Autonomous AI Agents',
      'Multi-Agent Systems',
      'AI Automation',
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Conversational AI',
      'Natural Language Processing',
      'Computer Vision',
      'Data Intelligence',
      'Custom AI Software',
      'Custom Software Development',
      'Intelligent Business Systems',
      'SMB Workflow Automation',
    ],

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

function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,

    url: `${BASE_URL}/`,
    name: SITE_NAME,

    description:
      'AI development agency building Agentic AI, AI automation, machine learning, and intelligent software systems.',

    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',

    '@id': `${url}#webpage`,
    name: title,
    description,
    url,

    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },

    about: {
      '@id': `${BASE_URL}/#organization`,
    },

    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

function generateServiceSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name: title,
    description,
    url,

    provider: {
      '@id': `${BASE_URL}/#organization`,
    },

    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
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

    datePublished:
      publishedTime || new Date().toISOString(),

    dateModified:
      modifiedTime ||
      publishedTime ||
      new Date().toISOString(),

    author: {
      '@type': 'Person',
      name: author || SITE_NAME,
    },

    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    mainEntity: items.map((item) => ({
      '@type': 'Question',

      name: item.question,

      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,

      item: item.url.startsWith('http')
        ? item.url
        : `${BASE_URL}${item.url}`,
    })),
  };
}

// ─── Meta Helper ────────────────────────────────────────────────────────────────
function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let el = document.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }

  el.setAttribute('content', content);
}

// ─── Link Helper ────────────────────────────────────────────────────────────────
function upsertLink(
  rel: string,
  href: string,
  attrs?: Record<string, string>
) {
  const selector = attrs
    ? `link[rel="${rel}"][hreflang="${attrs.hreflang || ''}"]`
    : `link[rel="${rel}"]`;

  let el = document.querySelector(
    selector
  ) as HTMLLinkElement | null;

  if (!el) {
    el = document.createElement('link');
    el.rel = rel;

    if (attrs) {
      Object.entries(attrs).forEach(
        ([key, value]) => {
          el!.setAttribute(key, value);
        }
      );
    }

    document.head.appendChild(el);
  }

  el.href = href;
}

// ─── JSON-LD Helper ─────────────────────────────────────────────────────────────
function upsertJsonLd(
  id: string,
  data: object
) {
  let el = document.getElementById(
    id
  ) as HTMLScriptElement | null;

  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }

  el.textContent = JSON.stringify(data);
}

// ─── SEO Component ──────────────────────────────────────────────────────────────
/**
 * Professional SEO component for Velnix Solutions.
 *
 * Primary positioning:
 * AI Development Agency
 *
 * Brand tagline:
 * Building Intelligence. Accelerating Ambition with AI.
 *
 * Core positioning:
 * - Agentic AI
 * - AI Agents
 * - AI Development
 * - AI Automation
 * - Machine Learning
 * - Generative AI
 * - Conversational AI
 * - Computer Vision
 * - NLP
 * - Custom AI Software
 * - SMB Workflow Automation
 *
 * Features:
 * - Route-specific SEO
 * - Dynamic document titles
 * - Meta descriptions
 * - Keywords
 * - Open Graph
 * - Twitter/X Cards
 * - Canonical URLs
 * - Hreflang
 * - Robots directives
 * - JSON-LD structured data
 * - FAQ schema
 * - Breadcrumb schema
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

  // ── Route defaults ──
  const routeDefaults =
    ROUTE_SEO[pathname] || {};

  const routeLabel =
    humanizePath(pathname);

  // ── Resolved values ──
  const resolvedTitle =
    title ||
    routeDefaults.title ||
    `${routeLabel} | ${SITE_NAME}`;

  const resolvedDesc =
    description ||
    routeDefaults.description ||
    `${routeLabel} from ${SITE_NAME}, an AI development agency building Agentic AI, AI agents, machine learning, automation, and custom AI software.`;

  const resolvedKeywords =
    keywords ||
    routeDefaults.keywords ||
    DEFAULT_KEYWORDS;

  const resolvedImage =
    image || DEFAULT_IMAGE;

  const resolvedUrl =
    url || `${BASE_URL}${pathname}`;

  const resolvedSchema =
    schemaType ||
    routeDefaults.schemaType ||
    'WebPage';

  const resolvedNoIndex =
    noIndex ||
    routeDefaults.noIndex ||
    !KNOWN_ROUTES.has(pathname) ||
    pathname === '/blog-admin';

  const fullTitle =
    resolvedTitle.includes(SITE_NAME)
      ? resolvedTitle
      : `${resolvedTitle} | ${SITE_NAME}`;

  useEffect(() => {
    // ──────────────────────────────────────────────────────────────────────────
    // Document Title
    // ──────────────────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ──────────────────────────────────────────────────────────────────────────
    // Primary Meta
    // ──────────────────────────────────────────────────────────────────────────
    upsertMeta(
      'name',
      'title',
      fullTitle
    );

    upsertMeta(
      'name',
      'description',
      resolvedDesc
    );

    upsertMeta(
      'name',
      'keywords',
      resolvedKeywords
    );

    upsertMeta(
      'name',
      'author',
      author || SITE_NAME
    );

    upsertMeta(
      'name',
      'robots',
      resolvedNoIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    upsertMeta(
      'name',
      'theme-color',
      THEME_COLOR
    );

    upsertMeta(
      'name',
      'generator',
      'Vite + React'
    );

    // ──────────────────────────────────────────────────────────────────────────
    // Open Graph
    // ──────────────────────────────────────────────────────────────────────────
    upsertMeta(
      'property',
      'og:type',
      type
    );

    upsertMeta(
      'property',
      'og:url',
      resolvedUrl
    );

    upsertMeta(
      'property',
      'og:title',
      fullTitle
    );

    upsertMeta(
      'property',
      'og:description',
      resolvedDesc
    );

    upsertMeta(
      'property',
      'og:image',
      resolvedImage
    );

    upsertMeta(
      'property',
      'og:image:width',
      '1200'
    );

    upsertMeta(
      'property',
      'og:image:height',
      '630'
    );

    upsertMeta(
      'property',
      'og:image:alt',
      fullTitle
    );

    upsertMeta(
      'property',
      'og:site_name',
      SITE_NAME
    );

    upsertMeta(
      'property',
      'og:locale',
      locale
    );

    // ──────────────────────────────────────────────────────────────────────────
    // Alternate OG Locales
    // ──────────────────────────────────────────────────────────────────────────
    if (alternateLocales) {
      alternateLocales.forEach(
        (loc) =>
          upsertMeta(
            'property',
            'og:locale:alternate',
            loc
          )
      );
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Article OG
    // ──────────────────────────────────────────────────────────────────────────
    if (type === 'article') {
      if (publishedTime) {
        upsertMeta(
          'property',
          'article:published_time',
          publishedTime
        );
      }

      if (modifiedTime) {
        upsertMeta(
          'property',
          'article:modified_time',
          modifiedTime
        );
      }

      if (author) {
        upsertMeta(
          'property',
          'article:author',
          author
        );
      }

      if (section) {
        upsertMeta(
          'property',
          'article:section',
          section
        );
      }
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Twitter / X
    // ──────────────────────────────────────────────────────────────────────────
    upsertMeta(
      'name',
      'twitter:card',
      'summary_large_image'
    );

    upsertMeta(
      'name',
      'twitter:site',
      TWITTER_HANDLE
    );

    upsertMeta(
      'name',
      'twitter:creator',
      TWITTER_HANDLE
    );

    upsertMeta(
      'name',
      'twitter:title',
      fullTitle
    );

    upsertMeta(
      'name',
      'twitter:description',
      resolvedDesc
    );

    upsertMeta(
      'name',
      'twitter:image',
      resolvedImage
    );

    upsertMeta(
      'name',
      'twitter:image:alt',
      fullTitle
    );

    // ──────────────────────────────────────────────────────────────────────────
    // Canonical
    // ──────────────────────────────────────────────────────────────────────────
    upsertLink(
      'canonical',
      resolvedUrl
    );

    // ──────────────────────────────────────────────────────────────────────────
    // Hreflang
    // ──────────────────────────────────────────────────────────────────────────
    upsertLink(
      'alternate',
      resolvedUrl,
      {
        hreflang: 'en',
      }
    );

    upsertLink(
      'alternate',
      resolvedUrl,
      {
        hreflang: 'x-default',
      }
    );

    // ──────────────────────────────────────────────────────────────────────────
    // Remove static schema from index.html
    //
    // SEO.tsx becomes the single authoritative schema manager.
    // ──────────────────────────────────────────────────────────────────────────
    const staticSchema =
      document.getElementById(
        'schema-static'
      );

    if (staticSchema) {
      staticSchema.remove();
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Remove old dynamic schemas that may no longer apply
    // ──────────────────────────────────────────────────────────────────────────
    [
      'schema-organization',
      'schema-website',
      'schema-page',
      'schema-faq',
      'schema-breadcrumb',
    ].forEach((id) => {
      const existing =
        document.getElementById(id);

      if (existing) {
        existing.remove();
      }
    });

    // ──────────────────────────────────────────────────────────────────────────
    // Homepage Structured Data
    // ──────────────────────────────────────────────────────────────────────────
    if (pathname === '/') {
      upsertJsonLd(
        'schema-organization',
        generateOrganizationSchema()
      );

      upsertJsonLd(
        'schema-website',
        generateWebSiteSchema()
      );

      if (faqItems?.length) {
        upsertJsonLd(
          'schema-faq',
          generateFAQSchema(
            faqItems
          )
        );
      }

      // Default homepage FAQ schema
      if (!faqItems?.length) {
        upsertJsonLd(
          'schema-faq',
          generateFAQSchema([
            {
              question:
                'What does Velnix Solutions do?',
              answer:
                'Velnix Solutions is an AI development agency that builds Agentic AI, AI agents, AI automation, machine learning, conversational AI, and custom AI software systems for businesses.',
            },
            {
              question:
                'What is Agentic AI?',
              answer:
                'Agentic AI enables intelligent software systems to reason about goals, plan actions, use tools, make decisions, and execute multi-step tasks with limited human intervention.',
            },
            {
              question:
                'How can AI automate business workflows?',
              answer:
                'AI can interpret business information, process documents, make decisions, use connected tools, coordinate tasks, and automate repetitive workflows across business systems.',
            },
            {
              question:
                'What technologies does Velnix use?',
              answer:
                'Velnix works across Agentic AI, AI agents, machine learning, generative AI, conversational AI, computer vision, natural language processing, data intelligence, AI automation, and custom software development.',
            },
          ])
        );
      }
    } else {
      // ────────────────────────────────────────────────────────────────────────
      // Non-Homepage Structured Data
      // ────────────────────────────────────────────────────────────────────────
      switch (resolvedSchema) {
        case 'Organization':
          upsertJsonLd(
            'schema-page',
            generateOrganizationSchema()
          );
          break;

        case 'Service':
          upsertJsonLd(
            'schema-page',
            generateServiceSchema(
              fullTitle,
              resolvedDesc,
              resolvedUrl
            )
          );
          break;

        case 'Article':
          upsertJsonLd(
            'schema-page',
            generateArticleSchema(
              fullTitle,
              resolvedDesc,
              resolvedUrl,
              resolvedImage,
              publishedTime,
              modifiedTime,
              author
            )
          );
          break;

        case 'FAQPage':
          if (faqItems?.length) {
            upsertJsonLd(
              'schema-page',
              generateFAQSchema(
                faqItems
              )
            );
          }
          break;

        case 'WebPage':
        default:
          upsertJsonLd(
            'schema-page',
            generateWebPageSchema(
              fullTitle,
              resolvedDesc,
              resolvedUrl
            )
          );
          break;
      }

      // ────────────────────────────────────────────────────────────────────────
      // FAQ Schema
      // ────────────────────────────────────────────────────────────────────────
      if (faqItems?.length) {
        upsertJsonLd(
          'schema-faq',
          generateFAQSchema(
            faqItems
          )
        );
      }
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Breadcrumb Schema
    // ──────────────────────────────────────────────────────────────────────────
    if (breadcrumbs?.length) {
      upsertJsonLd(
        'schema-breadcrumb',
        generateBreadcrumbSchema(
          breadcrumbs
        )
      );
    } else if (pathname !== '/') {
      const segments =
        pathname
          .split('/')
          .filter(Boolean);

      const autoBreadcrumbs = [
        {
          name: 'Home',
          url: '/',
        },
      ];

      let currentPath = '';

      segments.forEach((seg) => {
        currentPath += `/${seg}`;

        autoBreadcrumbs.push({
          name: seg
            .replace(/-/g, ' ')
            .replace(
              /\b\w/g,
              (c) => c.toUpperCase()
            ),
          url: currentPath,
        });
      });

      upsertJsonLd(
        'schema-breadcrumb',
        generateBreadcrumbSchema(
          autoBreadcrumbs
        )
      );
    }
  }, [
    fullTitle,
    resolvedDesc,
    resolvedKeywords,
    resolvedImage,
    resolvedUrl,
    type,
    pathname,
    locale,
    resolvedNoIndex,
    resolvedSchema,
    author,
    publishedTime,
    modifiedTime,
    section,
    alternateLocales,
    faqItems,
    breadcrumbs,
  ]);

  return null;
};