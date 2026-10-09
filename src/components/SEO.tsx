
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
  'Practical AI. Measurable Business Results.';

const DEFAULT_DESCRIPTION =
  'Velnix Solutions helps small and medium-sized businesses identify high-value AI opportunities, automate repetitive workflows, and deploy reliable AI systems that save time, reduce operational costs, and deliver measurable business results.';

const DEFAULT_KEYWORDS = [
  'AI workflow automation',
  'AI automation for SMBs',
  'SMB workflow automation',
  'AI implementation',
  'business process automation',
  'AI consulting',
  'AI audit',
  'AI agents',
  'Agentic AI',
  'custom AI solutions',
  'intelligent workflow automation',
  'AI integration',
  'machine learning',
  'generative AI',
  'conversational AI',
  'computer vision',
  'natural language processing',
  'custom software development',
  'Velnix Solutions',
].join(', ');

const TWITTER_HANDLE = '@VelnixSolutions';
const THEME_COLOR = '#050505';

// ─── Route-Specific SEO Defaults ────────────────────────────────────────────────
const ROUTE_SEO: Record<string, Partial<SEOProps>> = {
  '/': {
    title: 'AI Workflow Automation for SMBs | Velnix Solutions',
    description:
      'Become AI-native without costly mistakes. Velnix helps SMBs identify high-value AI opportunities, eliminate repetitive manual work, and deploy reliable automation systems that save time, reduce costs, and deliver measurable results.',
    keywords: DEFAULT_KEYWORDS,
    schemaType: 'Organization',
  },

  '/about': {
    title: 'About Velnix Solutions | Practical AI for SMBs',
    description:
      'Discover how Velnix Solutions helps growing businesses simplify operations, automate repetitive workflows, and implement reliable AI systems built around real business needs.',
    keywords:
      'about Velnix Solutions, practical AI, SMB automation, AI implementation, business workflow automation, AI consulting',
    schemaType: 'WebPage',
  },

  '/contact': {
    title: 'Contact Velnix Solutions | AI Strategy & Automation',
    description:
      'Identify where AI can create measurable value for your business. Contact Velnix Solutions to discuss workflow automation, AI implementation, custom AI systems, and your next steps.',
    keywords:
      'contact Velnix Solutions, AI strategy, AI consultation, workflow automation, SMB AI implementation, AI audit',
    schemaType: 'WebPage',
  },

  '/careers': {
    title: 'Careers at Velnix Solutions | AI & Software Engineering',
    description:
      'Join Velnix Solutions and help build practical AI systems, intelligent automation workflows, and software that solves real business problems.',
    keywords:
      'Velnix careers, AI careers, machine learning jobs, AI engineering, software engineering, AI automation jobs',
    schemaType: 'WebPage',
  },

  '/cookie-policy': {
    title: 'Cookie Policy | Velnix Solutions',
    description:
      'Read how Velnix Solutions uses cookies and similar technologies on this website.',
    schemaType: 'WebPage',
  },

  '/portfolio': {
    title: 'AI Portfolio & Automation Projects | Velnix Solutions',
    description:
      'Explore Velnix Solutions projects in AI workflow automation, AI agents, machine learning, conversational AI, computer vision, and custom software development.',
    keywords:
      'AI portfolio, AI automation projects, AI case studies, Agentic AI projects, machine learning portfolio, workflow automation, custom AI software',
    schemaType: 'WebPage',
  },

  '/blogs': {
    title: 'AI Automation & Agentic AI Insights | Velnix Solutions',
    description:
      'Explore practical insights on AI implementation, business workflow automation, Agentic AI, machine learning, generative AI, and building reliable intelligent systems.',
    keywords:
      'AI automation blog, Agentic AI blog, AI implementation, business automation, machine learning, generative AI, AI engineering',
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
    title: 'Custom AI Development Services | Velnix Solutions',
    description:
      'Build practical, production-ready AI systems tailored to your business workflows, including AI agents, generative AI applications, machine learning models, and custom AI software.',
    keywords:
      'AI development services, custom AI development, AI agents, generative AI, machine learning development, AI software development',
    schemaType: 'Service',
  },

  '/ai-automation': {
    title: 'AI Workflow Automation for Businesses | Velnix Solutions',
    description:
      'Automate repetitive business processes, connect disconnected tools, and reduce manual work with practical AI workflow automation designed around measurable business outcomes.',
    keywords:
      'AI workflow automation, SMB automation, business process automation, AI automation services, workflow integration, intelligent automation',
    schemaType: 'Service',
  },

  '/ai-chatbot-development': {
    title: 'Conversational AI & Chatbot Development | Velnix Solutions',
    description:
      'Build conversational AI assistants and business chatbots that answer questions, retrieve relevant information, support customers, and connect with your business systems.',
    keywords:
      'AI chatbot development, conversational AI, business chatbots, AI assistants, NLP chatbot, generative AI chatbot',
    schemaType: 'Service',
  },

  '/predictive-modelling': {
    title: 'Predictive Modeling & Analytics | Velnix Solutions',
    description:
      'Use predictive modeling and machine learning to identify patterns, forecast demand, anticipate business trends, and support better operational decisions.',
    keywords:
      'predictive modeling, predictive analytics, machine learning forecasting, business forecasting, data analytics, ML models',
    schemaType: 'Service',
  },

  '/natural-language-processing': {
    title: 'Natural Language Processing Services | Velnix Solutions',
    description:
      'Build NLP solutions for document processing, information extraction, semantic search, text classification, and language-driven business automation.',
    keywords:
      'natural language processing, NLP development, document AI, semantic search, text analytics, language AI',
    schemaType: 'Service',
  },

  '/machine-learning': {
    title: 'Machine Learning Development Services | Velnix Solutions',
    description:
      'Develop and deploy machine learning models for prediction, classification, recommendation, forecasting, and data-driven business decisions.',
    keywords:
      'machine learning services, ML development, machine learning models, deep learning, predictive analytics, model deployment',
    schemaType: 'Service',
  },

  '/computer-vision': {
    title: 'Computer Vision & Image AI Solutions | Velnix Solutions',
    description:
      'Build computer vision solutions for image recognition, object detection, visual inspection, OCR, video analysis, and automated quality control.',
    keywords:
      'computer vision development, image recognition, object detection, OCR, video AI, visual inspection',
    schemaType: 'Service',
  },

  '/web-development': {
    title: 'Web Development Services | Velnix Solutions',
    description:
      'Build high-performance websites and web applications with modern frameworks, scalable architecture, AI integrations, and business-focused functionality.',
    keywords:
      'web development, custom web applications, React development, AI web development, business websites, custom web software',
    schemaType: 'Service',
  },

  '/app-development': {
    title: 'Mobile App Development Services | Velnix Solutions',
    description:
      'Build scalable mobile and cross-platform applications with modern technologies, custom integrations, and intelligent automation capabilities.',
    keywords:
      'mobile app development, app development, cross-platform apps, React Native, AI mobile apps, custom applications',
    schemaType: 'Service',
  },

  '/devops': {
    title: 'DevOps & Cloud Infrastructure Services | Velnix Solutions',
    description:
      'Improve software delivery with CI/CD automation, cloud infrastructure, deployment pipelines, monitoring, and scalable application operations.',
    keywords:
      'DevOps services, CI/CD automation, cloud infrastructure, Docker, Kubernetes, MLOps, software deployment',
    schemaType: 'Service',
  },

  '/custom-software-development': {
    title: 'Custom Software Development for Businesses | Velnix Solutions',
    description:
      'Build custom business software that connects your tools, simplifies workflows, automates manual processes, and supports your operational requirements.',
    keywords:
      'custom software development, business software, workflow software, software integration, AI-powered software, bespoke software',
    schemaType: 'Service',
  },

  '/big-data-analytics': {
    title: 'Data Analytics & Business Intelligence | Velnix Solutions',
    description:
      'Turn business data into useful insights with data engineering, analytics, machine learning pipelines, and reporting systems that support informed decisions.',
    keywords:
      'data analytics, data engineering, business intelligence, data pipelines, predictive analytics, data intelligence',
    schemaType: 'Service',
  },

  '/agentic-ai': {
    title: 'Agentic AI Development & AI Agents | Velnix Solutions',
    description:
      'Build AI agents that use tools, retrieve information, follow defined workflows, and complete multi-step business tasks with appropriate guardrails and human oversight.',
    keywords:
      'Agentic AI development, AI agents, autonomous AI agents, multi-agent systems, AI workflow automation, intelligent agents',
    schemaType: 'Service',
  },

  // ── Industries ────────────────────────────────────────────────────────────────

  '/healthcare': {
    title: 'AI & Workflow Automation for Healthcare | Velnix Solutions',
    description:
      'Explore AI software and workflow automation designed to simplify healthcare administration, streamline operations, and improve digital experiences.',
    keywords:
      'healthcare AI, healthcare workflow automation, healthcare software, clinical workflow software, healthcare operations',
    schemaType: 'Service',
  },

  '/fintech': {
    title: 'AI & Automation for Fintech | Velnix Solutions',
    description:
      'Improve financial operations with AI-assisted document processing, fraud detection, risk analysis, customer onboarding, and workflow automation.',
    keywords:
      'fintech AI, financial automation, fraud detection, risk analysis, financial workflow automation, fintech software',
    schemaType: 'Service',
  },

  '/education': {
    title: 'AI Solutions for Education | Velnix Solutions',
    description:
      'Simplify education operations with AI-powered learning support, administrative workflow automation, student services, and intelligent software.',
    keywords:
      'education AI, EdTech, education automation, student support, learning technology, education software',
    schemaType: 'Service',
  },

  '/e-commerce': {
    title: 'AI & Automation for E-Commerce | Velnix Solutions',
    description:
      'Streamline e-commerce operations with AI-powered product discovery, customer support, recommendations, inventory workflows, and business automation.',
    keywords:
      'ecommerce AI, ecommerce automation, retail AI, product recommendations, customer support automation, ecommerce software',
    schemaType: 'Service',
  },

  '/food-and-groceries': {
    title: 'AI & Automation for Food and Grocery Businesses | Velnix Solutions',
    description:
      'Improve grocery and food operations with demand forecasting, inventory workflows, waste reduction, and practical business automation.',
    keywords:
      'grocery AI, food technology, inventory automation, demand forecasting, food business automation',
    schemaType: 'Service',
  },

  '/travel-and-tourism': {
    title: 'AI & Automation for Travel and Tourism | Velnix Solutions',
    description:
      'Simplify travel and hospitality operations with AI-assisted customer support, booking workflows, information retrieval, and operational automation.',
    keywords:
      'travel AI, hospitality AI, travel automation, booking assistant, hotel operations, tourism software',
    schemaType: 'Service',
  },

  '/insurance': {
    title: 'AI & Workflow Automation for Insurance | Velnix Solutions',
    description:
      'Streamline insurance operations with AI-assisted document processing, claims workflows, underwriting support, and customer service automation.',
    keywords:
      'insurance AI, claims automation, underwriting support, insurance workflow automation, insurtech',
    schemaType: 'Service',
  },

  '/on-demand': {
    title: 'AI & Automation for On-Demand Services | Velnix Solutions',
    description:
      'Improve on-demand service operations with intelligent dispatch workflows, customer support automation, task coordination, and system integrations.',
    keywords:
      'on-demand AI, dispatch automation, marketplace operations, service automation, workflow integration',
    schemaType: 'Service',
  },
};

// ─── Known Routes ───────────────────────────────────────────────────────────────
const KNOWN_ROUTES = new Set([
  ...Object.keys(ROUTE_SEO),
  '/blog-admin',
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
      'AI Workflow Automation',
      'AI Implementation for SMBs',
      'Business Process Automation',
      'Agentic AI',
      'AI Agents',
      'AI Strategy and Consulting',
      'AI Opportunity Assessment',
      'Intelligent Workflow Automation',
      'Business Systems Integration',
      'Generative AI',
      'Machine Learning',
      'Conversational AI',
      'Natural Language Processing',
      'Computer Vision',
      'Data Intelligence',
      'Custom AI Software',
      'Custom Software Development',
      'Operational Efficiency',
      'Digital Transformation',
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
      'Velnix Solutions helps SMBs identify valuable AI opportunities, automate repetitive business workflows, and deploy reliable AI systems that improve operational efficiency and deliver measurable results.',

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

    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime
      ? { dateModified: modifiedTime }
      : publishedTime
        ? { dateModified: publishedTime }
        : {}),

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
      Object.entries(attrs).forEach(([key, value]) => {
        el!.setAttribute(key, value);
      });
    }

    document.head.appendChild(el);
  }

  el.href = href;
}

// ─── JSON-LD Helper ─────────────────────────────────────────────────────────────
function upsertJsonLd(id: string, data: object) {
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
 * SEO component for Velnix Solutions.
 *
 * Primary positioning:
 * Practical AI deployment and workflow automation for SMBs.
 *
 * Brand tagline:
 * Practical AI. Measurable Business Results.
 *
 * Features:
 * - Route-specific titles and descriptions
 * - Keywords and robots directives
 * - Open Graph and Twitter/X metadata
 * - Canonical URLs and hreflang
 * - Organization, website, page, and service schemas
 * - Article, FAQ, and breadcrumb schemas
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
  const routeDefaults = ROUTE_SEO[pathname] || {};
  const routeLabel = humanizePath(pathname);

  // ── Resolved values ──
  const resolvedTitle =
    title ||
    routeDefaults.title ||
    `${routeLabel} | ${SITE_NAME}`;

  const resolvedDesc =
    description ||
    routeDefaults.description ||
    `${routeLabel} from ${SITE_NAME}. We help SMBs automate repetitive workflows, implement practical AI solutions, and improve business operations.`;

  const resolvedKeywords =
    keywords ||
    routeDefaults.keywords ||
    DEFAULT_KEYWORDS;

  const resolvedImage = image || DEFAULT_IMAGE;
  const resolvedUrl = url || `${BASE_URL}${pathname}`;

  const resolvedSchema =
    schemaType ||
    routeDefaults.schemaType ||
    'WebPage';

  const resolvedNoIndex =
    noIndex ||
    routeDefaults.noIndex ||
    !KNOWN_ROUTES.has(pathname) ||
    pathname === '/blog-admin';

  const fullTitle = resolvedTitle.includes(SITE_NAME)
    ? resolvedTitle
    : `${resolvedTitle} | ${SITE_NAME}`;

  useEffect(() => {
    // ── Document title ──
    document.title = fullTitle;

    // ── Primary metadata ──
    upsertMeta('name', 'title', fullTitle);
    upsertMeta('name', 'description', resolvedDesc);
    upsertMeta('name', 'keywords', resolvedKeywords);
    upsertMeta('name', 'author', author || SITE_NAME);

    upsertMeta(
      'name',
      'robots',
      resolvedNoIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

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

    // Remove stale alternate locale tags before adding current ones.
    document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((el) => el.remove());

    alternateLocales?.forEach((loc) => {
      upsertMeta('property', 'og:locale:alternate', loc);
    });

    // ── Article metadata ──
    const articleMeta = [
      'article:published_time',
      'article:modified_time',
      'article:author',
      'article:section',
    ];

    articleMeta.forEach((key) => {
      const el = document.querySelector(
        `meta[property="${key}"]`
      );
      el?.remove();
    });

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
        upsertMeta('property', 'article:author', author);
      }

      if (section) {
        upsertMeta('property', 'article:section', section);
      }
    }

    // ── Twitter / X ──
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
    upsertLink('alternate', resolvedUrl, { hreflang: 'en' });
    upsertLink('alternate', resolvedUrl, {
      hreflang: 'x-default',
    });

    // ── Remove static schema ──
    document.getElementById('schema-static')?.remove();

    // ── Clear schemas from the previous route ──
    [
      'schema-organization',
      'schema-website',
      'schema-page',
      'schema-faq',
      'schema-breadcrumb',
    ].forEach((id) => {
      document.getElementById(id)?.remove();
    });

    // ── Homepage structured data ──
    if (pathname === '/') {
      upsertJsonLd(
        'schema-organization',
        generateOrganizationSchema()
      );

      upsertJsonLd(
        'schema-website',
        generateWebSiteSchema()
      );

      const homepageFAQs = faqItems?.length
        ? faqItems
        : [
            {
              question: 'What does Velnix Solutions do?',
              answer:
                'Velnix Solutions helps small and medium-sized businesses identify high-value AI opportunities, automate repetitive workflows, integrate business systems, and deploy reliable AI solutions that save time and improve operational efficiency.',
            },
            {
              question: 'What is Agentic AI?',
              answer:
                'Agentic AI describes AI systems designed to pursue defined goals, plan actions, use connected tools, and complete multi-step tasks within configured permissions and safeguards.',
            },
            {
              question: 'How can AI automation help my business?',
              answer:
                'AI automation can reduce repetitive manual work, process business documents, connect disconnected tools, streamline administrative workflows, and help teams spend more time on higher-value activities.',
            },
            {
              question: 'How do we identify the right AI opportunities?',
              answer:
                'Start by examining repetitive, rule-based workflows, the tools involved, the time required, the cost of errors, and the expected business value. Prioritize opportunities with clear success measures before building a solution.',
            },
            {
              question: 'What technologies does Velnix use?',
              answer:
                'Velnix works with AI agents, generative AI, machine learning, conversational AI, computer vision, natural language processing, workflow automation, system integrations, and custom software development.',
            },
          ];

      upsertJsonLd(
        'schema-faq',
        generateFAQSchema(homepageFAQs)
      );
    } else {
      // ── Non-homepage structured data ──
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
              generateFAQSchema(faqItems)
            );
          }
          break;

        case 'Person':
          upsertJsonLd('schema-page', {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: author || 'Suresh Beekhani',
            url: resolvedUrl,
            worksFor: {
              '@id': `${BASE_URL}/#organization`,
            },
          });
          break;

        case 'Product':
          upsertJsonLd('schema-page', {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: fullTitle,
            description: resolvedDesc,
            url: resolvedUrl,
            image: resolvedImage,
            brand: {
              '@type': 'Brand',
              name: SITE_NAME,
            },
          });
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

      if (faqItems?.length && resolvedSchema !== 'FAQPage') {
        upsertJsonLd(
          'schema-faq',
          generateFAQSchema(faqItems)
        );
      }
    }

    // ── Breadcrumb structured data ──
    if (breadcrumbs?.length) {
      upsertJsonLd(
        'schema-breadcrumb',
        generateBreadcrumbSchema(breadcrumbs)
      );
    } else if (pathname !== '/') {
      const segments = pathname.split('/').filter(Boolean);

      const autoBreadcrumbs = [
        {
          name: 'Home',
          url: '/',
        },
      ];

      let currentPath = '';

      segments.forEach((segment) => {
        currentPath += `/${segment}`;

        autoBreadcrumbs.push({
          name: segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (character) =>
              character.toUpperCase()
            ),
          url: currentPath,
        });
      });

      upsertJsonLd(
        'schema-breadcrumb',
        generateBreadcrumbSchema(autoBreadcrumbs)
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