// ─── Velnix Technology Stack — Central Data Registry ─────────────────────────
// Single source of truth for all technologies shown across all service pages.
// Pages import their relevant subset array (e.g. AI_DEV_STACK_CATEGORIES).

export type IconType = 'logo' | 'abbr' | 'lucide';

export interface Technology {
  id: string;
  name: string;
  categoryId: string;
  label: string;        // Short subcategory label shown under name on card
  iconType: IconType;
  iconKey: string;      // Logo key | Lucide icon name | abbreviation text
  iconColor?: string;   // Brand color used for abbr badges and logo tints
}

export interface TechCategory {
  id: string;
  label: string;        // Display label for tab
  shortLabel: string;   // Shorter label for mobile tabs
}

// ─── Category Registry ────────────────────────────────────────────────────────
export const TECH_CATEGORIES: TechCategory[] = [
  { id: 'ai-ml',            label: 'AI & Machine Learning',    shortLabel: 'AI & ML'        },
  { id: 'agentic-genai',    label: 'Agentic & GenAI',          shortLabel: 'Agentic AI'     },
  { id: 'frontend',         label: 'Front-End',                shortLabel: 'Front-End'      },
  { id: 'backend',          label: 'Back-End',                 shortLabel: 'Back-End'       },
  { id: 'automation',       label: 'Low-Code & Automation',    shortLabel: 'Automation'     },
  { id: 'database',         label: 'Database & Data Systems',  shortLabel: 'Database'       },
  { id: 'vector-knowledge', label: 'Vector & Knowledge',       shortLabel: 'Vector DB'      },
  { id: 'cloud-devops',     label: 'Cloud & DevOps',           shortLabel: 'Cloud'          },
  { id: 'mobile',           label: 'Mobile',                   shortLabel: 'Mobile'         },
  { id: 'computer-vision',  label: 'CV, NLP & Speech',         shortLabel: 'CV & NLP'       },
  { id: 'data-engineering', label: 'Data Engineering',         shortLabel: 'Data Eng.'      },
  { id: 'apis',             label: 'APIs & Integrations',      shortLabel: 'APIs'           },
  { id: 'testing',          label: 'Testing & QA',             shortLabel: 'Testing'        },
  { id: 'security',         label: 'Security',                 shortLabel: 'Security'       },
  { id: 'architecture',     label: 'Software Architecture',    shortLabel: 'Architecture'   },
];

// ─── Technology Registry ──────────────────────────────────────────────────────
export const ALL_TECHNOLOGIES: Technology[] = [

  // ── AI & Machine Learning ──────────────────────────────────────────────────
  { id: 'python',          name: 'Python',              categoryId: 'ai-ml',  label: 'AI & ML',          iconType: 'logo',   iconKey: 'python',       iconColor: '#3776AB' },
  { id: 'tensorflow',      name: 'TensorFlow',          categoryId: 'ai-ml',  label: 'Deep Learning',    iconType: 'logo',   iconKey: 'tensorflow',   iconColor: '#FF6F00' },
  { id: 'pytorch',         name: 'PyTorch',             categoryId: 'ai-ml',  label: 'Deep Learning',    iconType: 'logo',   iconKey: 'pytorch',      iconColor: '#EE4C2C' },
  { id: 'keras',           name: 'Keras',               categoryId: 'ai-ml',  label: 'Deep Learning',    iconType: 'logo',   iconKey: 'keras',        iconColor: '#D00000' },
  { id: 'sklearn',         name: 'Scikit-learn',        categoryId: 'ai-ml',  label: 'ML Library',       iconType: 'logo',   iconKey: 'scikitlearn',  iconColor: '#F7931E' },
  { id: 'xgboost',         name: 'XGBoost',             categoryId: 'ai-ml',  label: 'Gradient Boost',   iconType: 'abbr',   iconKey: 'XG',           iconColor: '#189C45' },
  { id: 'lightgbm',        name: 'LightGBM',            categoryId: 'ai-ml',  label: 'Gradient Boost',   iconType: 'abbr',   iconKey: 'LG',           iconColor: '#2196F3' },
  { id: 'numpy',           name: 'NumPy',               categoryId: 'ai-ml',  label: 'Scientific',       iconType: 'logo',   iconKey: 'numpy',        iconColor: '#013243' },
  { id: 'pandas',          name: 'Pandas',              categoryId: 'ai-ml',  label: 'Data Analysis',    iconType: 'logo',   iconKey: 'pandas',       iconColor: '#150458' },
  { id: 'scipy',           name: 'SciPy',               categoryId: 'ai-ml',  label: 'Scientific',       iconType: 'abbr',   iconKey: 'Sc',           iconColor: '#8CAAE6' },


  // ── Agentic AI & Generative AI ─────────────────────────────────────────────
  { id: 'openai',          name: 'OpenAI',              categoryId: 'agentic-genai', label: 'LLM Provider',    iconType: 'logo',   iconKey: 'openai',      iconColor: '#412991' },
  { id: 'anthropic',       name: 'Anthropic',           categoryId: 'agentic-genai', label: 'LLM Provider',    iconType: 'logo',   iconKey: 'anthropic',   iconColor: '#CC785C' },
  { id: 'google-gemini',   name: 'Google Gemini',       categoryId: 'agentic-genai', label: 'LLM Provider',    iconType: 'logo',   iconKey: 'googlegemini',iconColor: '#4285F4' },
  { id: 'meta-llama',      name: 'Meta Llama',          categoryId: 'agentic-genai', label: 'Open Source LLM', iconType: 'logo',   iconKey: 'meta',        iconColor: '#0467DF' },
  { id: 'mistral',         name: 'Mistral',             categoryId: 'agentic-genai', label: 'LLM Provider',    iconType: 'abbr',   iconKey: 'Mi',          iconColor: '#FF7000' },
  { id: 'cohere',          name: 'Cohere',              categoryId: 'agentic-genai', label: 'LLM Provider',    iconType: 'abbr',   iconKey: 'Co',          iconColor: '#39594D' },
  { id: 'huggingface',     name: 'Hugging Face',        categoryId: 'agentic-genai', label: 'Model Hub',       iconType: 'logo',   iconKey: 'huggingface', iconColor: '#FFD21E' },
  { id: 'langchain',       name: 'LangChain',           categoryId: 'agentic-genai', label: 'AI Framework',    iconType: 'logo',   iconKey: 'langchain',   iconColor: '#1C3C3C' },
  { id: 'langgraph',       name: 'LangGraph',           categoryId: 'agentic-genai', label: 'Agent Orchestration',iconType:'abbr', iconKey: 'LG',          iconColor: '#2D9CDB' },
  { id: 'llamaindex',      name: 'LlamaIndex',          categoryId: 'agentic-genai', label: 'AI Framework',    iconType: 'abbr',   iconKey: 'Li',          iconColor: '#7B48CC' },
  { id: 'autogen',         name: 'AutoGen',             categoryId: 'agentic-genai', label: 'Multi-Agent',     iconType: 'abbr',   iconKey: 'AG',          iconColor: '#0078D4' },
  { id: 'crewai',          name: 'CrewAI',              categoryId: 'agentic-genai', label: 'Multi-Agent',     iconType: 'abbr',   iconKey: 'CR',          iconColor: '#E04B4B' },
  { id: 'semantic-kernel', name: 'Semantic Kernel',     categoryId: 'agentic-genai', label: 'AI SDK',          iconType: 'abbr',   iconKey: 'SK',          iconColor: '#0078D4' },
  { id: 'rag',             name: 'RAG',                 categoryId: 'agentic-genai', label: 'Architecture',    iconType: 'lucide', iconKey: 'Search',      iconColor: '#B6FF00' },
  { id: 'vector-search',   name: 'Vector Search',       categoryId: 'agentic-genai', label: 'Search',          iconType: 'lucide', iconKey: 'Database',    iconColor: '#B6FF00' },
  { id: 'ai-agents',       name: 'AI Agents',           categoryId: 'agentic-genai', label: 'Agentic AI',      iconType: 'lucide', iconKey: 'Bot',         iconColor: '#B6FF00' },
  { id: 'multi-agent',     name: 'Multi-Agent Systems', categoryId: 'agentic-genai', label: 'Agentic AI',      iconType: 'lucide', iconKey: 'Network',     iconColor: '#B6FF00' },
  { id: 'tool-calling',    name: 'Tool Calling',        categoryId: 'agentic-genai', label: 'Agentic Pattern', iconType: 'lucide', iconKey: 'Wrench',      iconColor: '#B6FF00' },
  { id: 'prompt-eng',      name: 'Prompt Engineering',  categoryId: 'agentic-genai', label: 'AI Engineering',  iconType: 'lucide', iconKey: 'Code',        iconColor: '#B6FF00' },
  { id: 'llmops',          name: 'LLMOps',              categoryId: 'agentic-genai', label: 'Operations',      iconType: 'lucide', iconKey: 'Settings',    iconColor: '#B6FF00' },
  { id: 'image-gen',       name: 'Image Generation',    categoryId: 'agentic-genai', label: 'GenAI',           iconType: 'lucide', iconKey: 'Image',       iconColor: '#B6FF00' },
  { id: 'speech-ai',       name: 'Speech AI',           categoryId: 'agentic-genai', label: 'GenAI',           iconType: 'lucide', iconKey: 'Mic',         iconColor: '#B6FF00' },
  { id: 'multimodal-ai',   name: 'Multimodal AI',       categoryId: 'agentic-genai', label: 'GenAI',           iconType: 'lucide', iconKey: 'Layers',      iconColor: '#B6FF00' },
  { id: 'doc-ai',          name: 'Document AI',         categoryId: 'agentic-genai', label: 'GenAI',           iconType: 'lucide', iconKey: 'FileText',    iconColor: '#B6FF00' },
  { id: 'code-gen',        name: 'Code Generation',     categoryId: 'agentic-genai', label: 'GenAI',           iconType: 'lucide', iconKey: 'Terminal',    iconColor: '#B6FF00' },

  // ── Front-End ─────────────────────────────────────────────────────────────
  { id: 'react',           name: 'React',               categoryId: 'frontend', label: 'UI Framework',     iconType: 'logo',   iconKey: 'react',        iconColor: '#61DAFB' },
  { id: 'nextjs',          name: 'Next.js',             categoryId: 'frontend', label: 'React Framework',  iconType: 'logo',   iconKey: 'nextdotjs',    iconColor: '#FFFFFF' },
  { id: 'vuejs',           name: 'Vue.js',              categoryId: 'frontend', label: 'UI Framework',     iconType: 'logo',   iconKey: 'vuedotjs',     iconColor: '#4FC08D' },
  { id: 'angular',         name: 'Angular',             categoryId: 'frontend', label: 'UI Framework',     iconType: 'logo',   iconKey: 'angular',      iconColor: '#DD0031' },
  { id: 'typescript',      name: 'TypeScript',          categoryId: 'frontend', label: 'Language',         iconType: 'logo',   iconKey: 'typescript',   iconColor: '#3178C6' },
  { id: 'javascript',      name: 'JavaScript',          categoryId: 'frontend', label: 'Language',         iconType: 'logo',   iconKey: 'javascript',   iconColor: '#F7DF1E' },
  { id: 'html5',           name: 'HTML5',               categoryId: 'frontend', label: 'Markup',           iconType: 'logo',   iconKey: 'html5',        iconColor: '#E34F26' },
  { id: 'css3',            name: 'CSS3',                categoryId: 'frontend', label: 'Styling',          iconType: 'logo',   iconKey: 'css3',         iconColor: '#1572B6' },
  { id: 'tailwind',        name: 'Tailwind CSS',        categoryId: 'frontend', label: 'CSS Framework',    iconType: 'logo',   iconKey: 'tailwindcss',  iconColor: '#06B6D4' },
  { id: 'bootstrap',       name: 'Bootstrap',           categoryId: 'frontend', label: 'CSS Framework',    iconType: 'logo',   iconKey: 'bootstrap',    iconColor: '#7952B3' },
  { id: 'mui',             name: 'Material UI',         categoryId: 'frontend', label: 'Component Library',iconType: 'logo',   iconKey: 'mui',          iconColor: '#0081CB' },
  { id: 'shadcn',          name: 'shadcn/ui',           categoryId: 'frontend', label: 'Component Library',iconType: 'abbr',   iconKey: 'SC',           iconColor: '#FFFFFF' },
  { id: 'redux',           name: 'Redux',               categoryId: 'frontend', label: 'State Management', iconType: 'logo',   iconKey: 'redux',        iconColor: '#764ABC' },
  { id: 'zustand',         name: 'Zustand',             categoryId: 'frontend', label: 'State Management', iconType: 'abbr',   iconKey: 'Zu',           iconColor: '#E67E22' },
  { id: 'react-query',     name: 'React Query',         categoryId: 'frontend', label: 'Data Fetching',    iconType: 'abbr',   iconKey: 'RQ',           iconColor: '#FF4154' },
  { id: 'threejs',         name: 'Three.js',            categoryId: 'frontend', label: '3D / WebGL',       iconType: 'logo',   iconKey: 'threedotjs',   iconColor: '#FFFFFF' },

  // ── Back-End ──────────────────────────────────────────────────────────────
  { id: 'python-be',       name: 'Python',              categoryId: 'backend', label: 'Language',          iconType: 'logo',   iconKey: 'python',       iconColor: '#3776AB' },
  { id: 'nodejs',          name: 'Node.js',             categoryId: 'backend', label: 'Runtime',           iconType: 'logo',   iconKey: 'nodedotjs',    iconColor: '#339933' },
  { id: 'java',            name: 'Java',                categoryId: 'backend', label: 'Language',          iconType: 'logo',   iconKey: 'java',         iconColor: '#007396' },
  { id: 'csharp',          name: 'C#',                  categoryId: 'backend', label: 'Language',          iconType: 'abbr',   iconKey: 'C#',           iconColor: '#239120' },
  { id: 'golang',          name: 'Go',                  categoryId: 'backend', label: 'Language',          iconType: 'logo',   iconKey: 'go',           iconColor: '#00ADD8' },
  { id: 'php',             name: 'PHP',                 categoryId: 'backend', label: 'Language',          iconType: 'logo',   iconKey: 'php',          iconColor: '#777BB4' },
  { id: 'fastapi',         name: 'FastAPI',             categoryId: 'backend', label: 'API Framework',     iconType: 'logo',   iconKey: 'fastapi',      iconColor: '#009688' },
  { id: 'django',          name: 'Django',              categoryId: 'backend', label: 'Web Framework',     iconType: 'logo',   iconKey: 'django',       iconColor: '#092E20' },
  { id: 'flask',           name: 'Flask',               categoryId: 'backend', label: 'Web Framework',     iconType: 'logo',   iconKey: 'flask',        iconColor: '#FFFFFF' },
  { id: 'expressjs',       name: 'Express.js',          categoryId: 'backend', label: 'Web Framework',     iconType: 'logo',   iconKey: 'express',      iconColor: '#FFFFFF' },
  { id: 'nestjs',          name: 'NestJS',              categoryId: 'backend', label: 'Node Framework',    iconType: 'logo',   iconKey: 'nestjs',       iconColor: '#E0234E' },
  { id: 'spring',          name: 'Spring Boot',         categoryId: 'backend', label: 'Java Framework',    iconType: 'logo',   iconKey: 'springboot',   iconColor: '#6DB33F' },
  { id: 'dotnet',          name: '.NET',                categoryId: 'backend', label: 'Framework',         iconType: 'logo',   iconKey: 'dotnet',       iconColor: '#512BD4' },
  { id: 'laravel',         name: 'Laravel',             categoryId: 'backend', label: 'PHP Framework',     iconType: 'logo',   iconKey: 'laravel',      iconColor: '#FF2D20' },
  { id: 'rest-api',        name: 'REST APIs',           categoryId: 'backend', label: 'Architecture',      iconType: 'lucide', iconKey: 'Plug',         iconColor: '#B6FF00' },
  { id: 'graphql',         name: 'GraphQL',             categoryId: 'backend', label: 'Query Language',    iconType: 'logo',   iconKey: 'graphql',      iconColor: '#E10098' },
  { id: 'websockets',      name: 'WebSockets',          categoryId: 'backend', label: 'Protocol',          iconType: 'lucide', iconKey: 'Zap',          iconColor: '#B6FF00' },
  { id: 'microservices',   name: 'Microservices',       categoryId: 'backend', label: 'Architecture',      iconType: 'lucide', iconKey: 'Layers',       iconColor: '#B6FF00' },
  { id: 'serverless',      name: 'Serverless',          categoryId: 'backend', label: 'Architecture',      iconType: 'lucide', iconKey: 'Cloud',        iconColor: '#B6FF00' },
  { id: 'event-driven',    name: 'Event-Driven',        categoryId: 'backend', label: 'Architecture',      iconType: 'lucide', iconKey: 'Activity',     iconColor: '#B6FF00' },
  { id: 'auth',            name: 'Auth & Authorization',categoryId: 'backend', label: 'Security',          iconType: 'lucide', iconKey: 'Shield',       iconColor: '#B6FF00' },

  // ── Low-Code / Automation ─────────────────────────────────────────────────
  { id: 'n8n',             name: 'n8n',                 categoryId: 'automation', label: 'Workflow Automation', iconType: 'logo',   iconKey: 'n8n',         iconColor: '#EA4B71' },
  { id: 'make',            name: 'Make',                categoryId: 'automation', label: 'Automation',      iconType: 'abbr',   iconKey: 'Mk',           iconColor: '#6D00CC' },
  { id: 'zapier',          name: 'Zapier',              categoryId: 'automation', label: 'Automation',      iconType: 'logo',   iconKey: 'zapier',       iconColor: '#FF4A00' },
  { id: 'power-automate',  name: 'Power Automate',      categoryId: 'automation', label: 'Automation',      iconType: 'logo',   iconKey: 'powerautomate',iconColor: '#0066FF' },
  { id: 'bubble',          name: 'Bubble',              categoryId: 'automation', label: 'No-Code',         iconType: 'abbr',   iconKey: 'Bu',           iconColor: '#0557FC' },
  { id: 'retool',          name: 'Retool',              categoryId: 'automation', label: 'Low-Code',        iconType: 'abbr',   iconKey: 'RT',           iconColor: '#3D3D3D' },
  { id: 'airtable',        name: 'Airtable',            categoryId: 'automation', label: 'No-Code DB',      iconType: 'logo',   iconKey: 'airtable',     iconColor: '#18BFFF' },
  { id: 'webflow',         name: 'Webflow',             categoryId: 'automation', label: 'No-Code CMS',     iconType: 'logo',   iconKey: 'webflow',      iconColor: '#146EF5' },
  { id: 'wordpress',       name: 'WordPress',           categoryId: 'automation', label: 'CMS',             iconType: 'logo',   iconKey: 'wordpress',    iconColor: '#21759B' },
  { id: 'workflow-auto',   name: 'Workflow Automation', categoryId: 'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'Workflow',     iconColor: '#B6FF00' },
  { id: 'api-auto',        name: 'API Automation',      categoryId: 'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'Plug',         iconColor: '#B6FF00' },
  { id: 'bpa',             name: 'Business Process Auto',categoryId:'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'Settings',     iconColor: '#B6FF00' },
  { id: 'ai-workflow',     name: 'AI Workflow Auto',    categoryId: 'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'Bot',          iconColor: '#B6FF00' },
  { id: 'crm-auto',        name: 'CRM Automation',      categoryId: 'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'Users',        iconColor: '#B6FF00' },
  { id: 'doc-auto',        name: 'Document Automation', categoryId: 'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'FileText',     iconColor: '#B6FF00' },
  { id: 'email-auto',      name: 'Email Automation',    categoryId: 'automation', label: 'Practice',        iconType: 'lucide', iconKey: 'Mail',         iconColor: '#B6FF00' },

  // ── Database & Data Systems ───────────────────────────────────────────────
  { id: 'postgres',        name: 'PostgreSQL',          categoryId: 'database', label: 'Relational DB',    iconType: 'logo',   iconKey: 'postgresql',   iconColor: '#4169E1' },
  { id: 'mysql',           name: 'MySQL',               categoryId: 'database', label: 'Relational DB',    iconType: 'logo',   iconKey: 'mysql',        iconColor: '#4479A1' },
  { id: 'mssql',           name: 'SQL Server',          categoryId: 'database', label: 'Relational DB',    iconType: 'logo',   iconKey: 'microsoftsqlserver', iconColor: '#CC2927' },
  { id: 'sqlite',          name: 'SQLite',              categoryId: 'database', label: 'Embedded DB',      iconType: 'logo',   iconKey: 'sqlite',       iconColor: '#003B57' },
  { id: 'mongodb',         name: 'MongoDB',             categoryId: 'database', label: 'Document DB',      iconType: 'logo',   iconKey: 'mongodb',      iconColor: '#47A248' },
  { id: 'redis',           name: 'Redis',               categoryId: 'database', label: 'In-Memory DB',     iconType: 'logo',   iconKey: 'redis',        iconColor: '#DC382D' },
  { id: 'firebase',        name: 'Firebase',            categoryId: 'database', label: 'Cloud DB',         iconType: 'logo',   iconKey: 'firebase',     iconColor: '#FFCA28' },
  { id: 'dynamodb',        name: 'DynamoDB',            categoryId: 'database', label: 'NoSQL DB',         iconType: 'logo',   iconKey: 'amazondynamodb',iconColor: '#4053D6' },
  { id: 'supabase',        name: 'Supabase',            categoryId: 'database', label: 'BaaS',             iconType: 'logo',   iconKey: 'supabase',     iconColor: '#3ECF8E' },
  { id: 'planetscale',     name: 'PlanetScale',         categoryId: 'database', label: 'MySQL Platform',   iconType: 'abbr',   iconKey: 'PS',           iconColor: '#000000' },
  { id: 'elasticsearch',   name: 'Elasticsearch',       categoryId: 'database', label: 'Search Engine',    iconType: 'logo',   iconKey: 'elastic',      iconColor: '#FEC514' },
  { id: 'opensearch',      name: 'OpenSearch',          categoryId: 'database', label: 'Search Engine',    iconType: 'abbr',   iconKey: 'OS',           iconColor: '#005EB8' },
  { id: 'data-modeling',   name: 'Data Modeling',       categoryId: 'database', label: 'Practice',         iconType: 'lucide', iconKey: 'Database',     iconColor: '#B6FF00' },
  { id: 'data-warehouse',  name: 'Data Warehousing',    categoryId: 'database', label: 'Practice',         iconType: 'lucide', iconKey: 'Server',       iconColor: '#B6FF00' },
  { id: 'etl',             name: 'ETL / ELT',           categoryId: 'database', label: 'Data Integration', iconType: 'lucide', iconKey: 'RefreshCw',    iconColor: '#B6FF00' },

  // ── Vector Databases & Knowledge ──────────────────────────────────────────
  { id: 'pinecone',        name: 'Pinecone',            categoryId: 'vector-knowledge', label: 'Vector DB',      iconType: 'logo',   iconKey: 'pinecone',    iconColor: '#00C9A7' },
  { id: 'weaviate',        name: 'Weaviate',            categoryId: 'vector-knowledge', label: 'Vector DB',      iconType: 'abbr',   iconKey: 'Wv',          iconColor: '#4CAF50' },
  { id: 'qdrant',          name: 'Qdrant',              categoryId: 'vector-knowledge', label: 'Vector DB',      iconType: 'abbr',   iconKey: 'Qd',          iconColor: '#DC244C' },
  { id: 'chroma',          name: 'Chroma',              categoryId: 'vector-knowledge', label: 'Vector DB',      iconType: 'abbr',   iconKey: 'Ch',          iconColor: '#F15A29' },
  { id: 'milvus',          name: 'Milvus',              categoryId: 'vector-knowledge', label: 'Vector DB',      iconType: 'abbr',   iconKey: 'Mi',          iconColor: '#00A1EA' },
  { id: 'pgvector',        name: 'pgvector',            categoryId: 'vector-knowledge', label: 'Postgres Ext.',  iconType: 'abbr',   iconKey: 'pg',          iconColor: '#4169E1' },
  { id: 'faiss',           name: 'FAISS',               categoryId: 'vector-knowledge', label: 'Similarity Search',iconType:'abbr',  iconKey: 'FA',          iconColor: '#4267B2' },
  { id: 'rag-vk',          name: 'RAG',                 categoryId: 'vector-knowledge', label: 'Architecture',   iconType: 'lucide', iconKey: 'Search',      iconColor: '#B6FF00' },
  { id: 'semantic-search', name: 'Semantic Search',     categoryId: 'vector-knowledge', label: 'Search',         iconType: 'lucide', iconKey: 'Sparkles',    iconColor: '#B6FF00' },
  { id: 'hybrid-search',   name: 'Hybrid Search',       categoryId: 'vector-knowledge', label: 'Search',         iconType: 'lucide', iconKey: 'Filter',      iconColor: '#B6FF00' },
  { id: 'knowledge-graphs',name: 'Knowledge Graphs',    categoryId: 'vector-knowledge', label: 'Knowledge System',iconType: 'lucide', iconKey: 'Network',    iconColor: '#B6FF00' },
  { id: 'embeddings',      name: 'Embeddings',          categoryId: 'vector-knowledge', label: 'AI Primitive',   iconType: 'lucide', iconKey: 'Binary',      iconColor: '#B6FF00' },
  { id: 'enterprise-search',name:'Enterprise Search',   categoryId: 'vector-knowledge', label: 'Search System',  iconType: 'lucide', iconKey: 'Globe',       iconColor: '#B6FF00' },

  // ── Cloud & DevOps ────────────────────────────────────────────────────────
  { id: 'aws',             name: 'AWS',                 categoryId: 'cloud-devops', label: 'Cloud Provider',  iconType: 'logo',   iconKey: 'amazonaws',   iconColor: '#FF9900' },
  { id: 'azure',           name: 'Microsoft Azure',     categoryId: 'cloud-devops', label: 'Cloud Provider',  iconType: 'logo',   iconKey: 'microsoftazure',iconColor: '#0089D6' },
  { id: 'gcp',             name: 'Google Cloud',        categoryId: 'cloud-devops', label: 'Cloud Provider',  iconType: 'logo',   iconKey: 'googlecloud', iconColor: '#4285F4' },
  { id: 'digitalocean',    name: 'DigitalOcean',        categoryId: 'cloud-devops', label: 'Cloud Provider',  iconType: 'logo',   iconKey: 'digitalocean',iconColor: '#0080FF' },
  { id: 'vercel',          name: 'Vercel',              categoryId: 'cloud-devops', label: 'Deployment',      iconType: 'logo',   iconKey: 'vercel',      iconColor: '#FFFFFF' },
  { id: 'cloudflare',      name: 'Cloudflare',          categoryId: 'cloud-devops', label: 'Edge / CDN',      iconType: 'logo',   iconKey: 'cloudflare',  iconColor: '#F38020' },
  { id: 'docker',          name: 'Docker',              categoryId: 'cloud-devops', label: 'Containerization',iconType: 'logo',   iconKey: 'docker',      iconColor: '#2496ED' },
  { id: 'kubernetes',      name: 'Kubernetes',          categoryId: 'cloud-devops', label: 'Orchestration',   iconType: 'logo',   iconKey: 'kubernetes',  iconColor: '#326CE5' },
  { id: 'terraform',       name: 'Terraform',           categoryId: 'cloud-devops', label: 'IaC',             iconType: 'logo',   iconKey: 'terraform',   iconColor: '#7B42BC' },
  { id: 'nginx',           name: 'Nginx',               categoryId: 'cloud-devops', label: 'Web Server',      iconType: 'logo',   iconKey: 'nginx',       iconColor: '#009639' },
  { id: 'linux',           name: 'Linux',               categoryId: 'cloud-devops', label: 'OS',              iconType: 'logo',   iconKey: 'linux',       iconColor: '#FCC624' },
  { id: 'github-actions',  name: 'GitHub Actions',      categoryId: 'cloud-devops', label: 'CI/CD',           iconType: 'logo',   iconKey: 'githubactions',iconColor: '#2088FF' },
  { id: 'gitlab-ci',       name: 'GitLab CI/CD',        categoryId: 'cloud-devops', label: 'CI/CD',           iconType: 'logo',   iconKey: 'gitlab',      iconColor: '#FC6D26' },
  { id: 'jenkins',         name: 'Jenkins',             categoryId: 'cloud-devops', label: 'CI/CD',           iconType: 'logo',   iconKey: 'jenkins',     iconColor: '#D33833' },
  { id: 'grafana',         name: 'Grafana',             categoryId: 'cloud-devops', label: 'Observability',   iconType: 'logo',   iconKey: 'grafana',     iconColor: '#F46800' },
  { id: 'prometheus',      name: 'Prometheus',          categoryId: 'cloud-devops', label: 'Monitoring',      iconType: 'logo',   iconKey: 'prometheus',  iconColor: '#E6522C' },
  { id: 'sentry',          name: 'Sentry',              categoryId: 'cloud-devops', label: 'Error Tracking',  iconType: 'logo',   iconKey: 'sentry',      iconColor: '#362D59' },
  { id: 'datadog',         name: 'Datadog',             categoryId: 'cloud-devops', label: 'Observability',   iconType: 'logo',   iconKey: 'datadog',     iconColor: '#632CA6' },

  // ── Mobile ────────────────────────────────────────────────────────────────
  { id: 'react-native',    name: 'React Native',        categoryId: 'mobile', label: 'Cross-Platform',    iconType: 'logo',   iconKey: 'react',        iconColor: '#61DAFB' },
  { id: 'flutter',         name: 'Flutter',             categoryId: 'mobile', label: 'Cross-Platform',    iconType: 'logo',   iconKey: 'flutter',      iconColor: '#02569B' },
  { id: 'android',         name: 'Android',             categoryId: 'mobile', label: 'Native',            iconType: 'logo',   iconKey: 'android',      iconColor: '#34A853' },
  { id: 'ios',             name: 'iOS',                 categoryId: 'mobile', label: 'Native',            iconType: 'logo',   iconKey: 'apple',        iconColor: '#FFFFFF' },
  { id: 'kotlin',          name: 'Kotlin',              categoryId: 'mobile', label: 'Android Language',  iconType: 'logo',   iconKey: 'kotlin',       iconColor: '#7F52FF' },
  { id: 'swift',           name: 'Swift',               categoryId: 'mobile', label: 'iOS Language',      iconType: 'logo',   iconKey: 'swift',        iconColor: '#F05138' },
  { id: 'expo',            name: 'Expo',                categoryId: 'mobile', label: 'React Native',      iconType: 'abbr',   iconKey: 'Ex',           iconColor: '#000020' },
  { id: 'push-notif',      name: 'Push Notifications',  categoryId: 'mobile', label: 'Mobile Feature',    iconType: 'lucide', iconKey: 'Bell',         iconColor: '#B6FF00' },
  { id: 'mobile-auth',     name: 'Authentication',      categoryId: 'mobile', label: 'Mobile Feature',    iconType: 'lucide', iconKey: 'Shield',       iconColor: '#B6FF00' },
  { id: 'app-analytics',   name: 'App Analytics',       categoryId: 'mobile', label: 'Mobile Feature',    iconType: 'lucide', iconKey: 'BarChart3',    iconColor: '#B6FF00' },
  { id: 'offline-data',    name: 'Offline Data',        categoryId: 'mobile', label: 'Mobile Feature',    iconType: 'lucide', iconKey: 'Database',     iconColor: '#B6FF00' },

  // ── Computer Vision, NLP & Speech AI ────────────────────────────────────
  { id: 'opencv',          name: 'OpenCV',              categoryId: 'computer-vision', label: 'CV Library',       iconType: 'logo',   iconKey: 'opencv',      iconColor: '#5C3EE8' },
  { id: 'yolo',            name: 'YOLO',                categoryId: 'computer-vision', label: 'Object Detection', iconType: 'abbr',   iconKey: 'YO',          iconColor: '#00AEEF' },
  { id: 'detectron2',      name: 'Detectron2',          categoryId: 'computer-vision', label: 'CV Framework',     iconType: 'abbr',   iconKey: 'D2',          iconColor: '#0072CE' },
  { id: 'tf-cv',           name: 'TensorFlow',          categoryId: 'computer-vision', label: 'CV Backend',       iconType: 'logo',   iconKey: 'tensorflow',  iconColor: '#FF6F00' },
  { id: 'pt-cv',           name: 'PyTorch',             categoryId: 'computer-vision', label: 'CV Backend',       iconType: 'logo',   iconKey: 'pytorch',     iconColor: '#EE4C2C' },
  { id: 'mediapipe',       name: 'MediaPipe',           categoryId: 'computer-vision', label: 'CV Framework',     iconType: 'abbr',   iconKey: 'MP',          iconColor: '#4285F4' },
  { id: 'obj-detect',      name: 'Object Detection',    categoryId: 'computer-vision', label: 'CV Task',          iconType: 'lucide', iconKey: 'Scan',        iconColor: '#B6FF00' },
  { id: 'img-class',       name: 'Image Classification',categoryId: 'computer-vision', label: 'CV Task',          iconType: 'lucide', iconKey: 'Tags',        iconColor: '#B6FF00' },
  { id: 'img-seg',         name: 'Image Segmentation',  categoryId: 'computer-vision', label: 'CV Task',          iconType: 'lucide', iconKey: 'Layers',      iconColor: '#B6FF00' },
  { id: 'ocr',             name: 'OCR',                 categoryId: 'computer-vision', label: 'Document AI',      iconType: 'lucide', iconKey: 'FileText',    iconColor: '#B6FF00' },
  { id: 'face-detect',     name: 'Face Detection',      categoryId: 'computer-vision', label: 'CV Task',          iconType: 'lucide', iconKey: 'Eye',         iconColor: '#B6FF00' },
  { id: 'video-analytics', name: 'Video Analytics',     categoryId: 'computer-vision', label: 'CV Task',          iconType: 'lucide', iconKey: 'Video',       iconColor: '#B6FF00' },
  { id: 'visual-inspect',  name: 'Visual Inspection',   categoryId: 'computer-vision', label: 'CV Application',   iconType: 'lucide', iconKey: 'Search',      iconColor: '#B6FF00' },
  { id: 'spacy',           name: 'spaCy',               categoryId: 'computer-vision', label: 'NLP Library',      iconType: 'abbr',   iconKey: 'sP',          iconColor: '#09A3D5' },
  { id: 'nltk',            name: 'NLTK',                categoryId: 'computer-vision', label: 'NLP Library',      iconType: 'abbr',   iconKey: 'NL',          iconColor: '#4CAF50' },
  { id: 'transformers',    name: 'Transformers',        categoryId: 'computer-vision', label: 'HF Library',       iconType: 'logo',   iconKey: 'huggingface', iconColor: '#FFD21E' },
  { id: 'whisper',         name: 'Whisper',             categoryId: 'computer-vision', label: 'Speech-to-Text',   iconType: 'abbr',   iconKey: 'Wh',          iconColor: '#412991' },
  { id: 'stt',             name: 'Speech-to-Text',      categoryId: 'computer-vision', label: 'Speech AI',        iconType: 'lucide', iconKey: 'Mic',         iconColor: '#B6FF00' },
  { id: 'tts',             name: 'Text-to-Speech',      categoryId: 'computer-vision', label: 'Speech AI',        iconType: 'lucide', iconKey: 'Volume2',     iconColor: '#B6FF00' },
  { id: 'voice-agents',    name: 'Voice Agents',        categoryId: 'computer-vision', label: 'Agentic AI',       iconType: 'lucide', iconKey: 'Bot',         iconColor: '#B6FF00' },
  { id: 'sentiment',       name: 'Sentiment Analysis',  categoryId: 'computer-vision', label: 'NLP Task',         iconType: 'lucide', iconKey: 'MessageSquare',iconColor: '#B6FF00' },
  { id: 'text-class',      name: 'Text Classification', categoryId: 'computer-vision', label: 'NLP Task',         iconType: 'lucide', iconKey: 'Tags',        iconColor: '#B6FF00' },
  { id: 'ner',             name: 'Entity Recognition',  categoryId: 'computer-vision', label: 'NLP Task',         iconType: 'lucide', iconKey: 'Search',      iconColor: '#B6FF00' },
  { id: 'translation',     name: 'Translation',         categoryId: 'computer-vision', label: 'NLP Task',         iconType: 'lucide', iconKey: 'Globe',       iconColor: '#B6FF00' },
  { id: 'conv-ai',         name: 'Conversational AI',   categoryId: 'computer-vision', label: 'Application',      iconType: 'lucide', iconKey: 'MessageSquare',iconColor: '#B6FF00' },

  // ── Data Engineering & Analytics ──────────────────────────────────────────
  { id: 'spark',           name: 'Apache Spark',        categoryId: 'data-engineering', label: 'Data Processing', iconType: 'logo',   iconKey: 'apachespark', iconColor: '#E25A1C' },
  { id: 'airflow',         name: 'Apache Airflow',      categoryId: 'data-engineering', label: 'Orchestration',   iconType: 'logo',   iconKey: 'apacheairflow',iconColor: '#017CEE' },
  { id: 'kafka',           name: 'Apache Kafka',        categoryId: 'data-engineering', label: 'Streaming',       iconType: 'logo',   iconKey: 'apachekafka', iconColor: '#231F20' },
  { id: 'dbt',             name: 'dbt',                 categoryId: 'data-engineering', label: 'Data Transform',  iconType: 'logo',   iconKey: 'dbt',         iconColor: '#FF694A' },
  { id: 'pandas-de',       name: 'Pandas',              categoryId: 'data-engineering', label: 'Data Processing', iconType: 'logo',   iconKey: 'pandas',      iconColor: '#150458' },
  { id: 'powerbi',         name: 'Power BI',            categoryId: 'data-engineering', label: 'BI & Analytics',  iconType: 'logo',   iconKey: 'powerbi',     iconColor: '#F2C811' },
  { id: 'tableau',         name: 'Tableau',             categoryId: 'data-engineering', label: 'BI & Analytics',  iconType: 'logo',   iconKey: 'tableau',     iconColor: '#E97627' },
  { id: 'data-pipelines',  name: 'Data Pipelines',      categoryId: 'data-engineering', label: 'Practice',        iconType: 'lucide', iconKey: 'GitBranch',   iconColor: '#B6FF00' },
  { id: 'bi',              name: 'Business Intelligence',categoryId:'data-engineering',  label: 'Practice',        iconType: 'lucide', iconKey: 'BarChart3',   iconColor: '#B6FF00' },
  { id: 'realtime-analytics',name:'Real-Time Analytics',categoryId: 'data-engineering', label: 'Practice',        iconType: 'lucide', iconKey: 'Activity',    iconColor: '#B6FF00' },
  { id: 'data-viz',        name: 'Data Visualization',  categoryId: 'data-engineering', label: 'Practice',        iconType: 'lucide', iconKey: 'LineChart',   iconColor: '#B6FF00' },
  { id: 'report-auto',     name: 'Reporting Automation',categoryId: 'data-engineering', label: 'Practice',        iconType: 'lucide', iconKey: 'FileText',    iconColor: '#B6FF00' },

  // ── APIs & Integrations ───────────────────────────────────────────────────
  { id: 'rest',            name: 'REST API',            categoryId: 'apis', label: 'Protocol',          iconType: 'lucide', iconKey: 'Code',        iconColor: '#B6FF00' },
  { id: 'graphql-api',     name: 'GraphQL',             categoryId: 'apis', label: 'Query Language',    iconType: 'logo',   iconKey: 'graphql',     iconColor: '#E10098' },
  { id: 'webhooks',        name: 'Webhooks',            categoryId: 'apis', label: 'Integration',       iconType: 'lucide', iconKey: 'Zap',         iconColor: '#B6FF00' },
  { id: 'oauth',           name: 'OAuth',               categoryId: 'apis', label: 'Auth Protocol',     iconType: 'lucide', iconKey: 'Lock',        iconColor: '#B6FF00' },
  { id: 'jwt',             name: 'JWT',                 categoryId: 'apis', label: 'Auth Token',        iconType: 'abbr',   iconKey: 'JWT',         iconColor: '#D63AFF' },
  { id: 'stripe',          name: 'Stripe',              categoryId: 'apis', label: 'Payments',          iconType: 'logo',   iconKey: 'stripe',      iconColor: '#635BFF' },
  { id: 'paypal',          name: 'PayPal',              categoryId: 'apis', label: 'Payments',          iconType: 'logo',   iconKey: 'paypal',      iconColor: '#00457C' },
  { id: 'google-apis',     name: 'Google APIs',         categoryId: 'apis', label: 'Platform APIs',     iconType: 'logo',   iconKey: 'google',      iconColor: '#4285F4' },
  { id: 'slack-api',       name: 'Slack APIs',          categoryId: 'apis', label: 'Collaboration',     iconType: 'logo',   iconKey: 'slack',       iconColor: '#4A154B' },
  { id: 'hubspot',         name: 'HubSpot',             categoryId: 'apis', label: 'CRM',               iconType: 'logo',   iconKey: 'hubspot',     iconColor: '#FF7A59' },
  { id: 'salesforce',      name: 'Salesforce',          categoryId: 'apis', label: 'CRM',               iconType: 'logo',   iconKey: 'salesforce',  iconColor: '#00A1E0' },
  { id: 'crm-int',         name: 'CRM Integrations',    categoryId: 'apis', label: 'Integration',       iconType: 'lucide', iconKey: 'Users',       iconColor: '#B6FF00' },
  { id: 'erp-int',         name: 'ERP Integrations',    categoryId: 'apis', label: 'Integration',       iconType: 'lucide', iconKey: 'Layers',      iconColor: '#B6FF00' },

  // ── Testing & QA ─────────────────────────────────────────────────────────
  { id: 'pytest',          name: 'PyTest',              categoryId: 'testing', label: 'Python Testing',   iconType: 'logo',   iconKey: 'pytest',      iconColor: '#0A9EDC' },
  { id: 'jest',            name: 'Jest',                categoryId: 'testing', label: 'JS Testing',       iconType: 'logo',   iconKey: 'jest',        iconColor: '#C21325' },
  { id: 'playwright',      name: 'Playwright',          categoryId: 'testing', label: 'E2E Testing',      iconType: 'logo',   iconKey: 'playwright',  iconColor: '#45BA4B' },
  { id: 'cypress',         name: 'Cypress',             categoryId: 'testing', label: 'E2E Testing',      iconType: 'logo',   iconKey: 'cypress',     iconColor: '#69D3A7' },
  { id: 'selenium',        name: 'Selenium',            categoryId: 'testing', label: 'Browser Testing',  iconType: 'logo',   iconKey: 'selenium',    iconColor: '#43B02A' },
  { id: 'postman',         name: 'Postman',             categoryId: 'testing', label: 'API Testing',      iconType: 'logo',   iconKey: 'postman',     iconColor: '#FF6C37' },
  { id: 'unit-testing',    name: 'Unit Testing',        categoryId: 'testing', label: 'Practice',         iconType: 'lucide', iconKey: 'CheckCircle', iconColor: '#B6FF00' },
  { id: 'integration-test',name: 'Integration Testing', categoryId: 'testing', label: 'Practice',         iconType: 'lucide', iconKey: 'GitBranch',   iconColor: '#B6FF00' },
  { id: 'api-testing',     name: 'API Testing',         categoryId: 'testing', label: 'Practice',         iconType: 'lucide', iconKey: 'Plug',        iconColor: '#B6FF00' },
  { id: 'perf-testing',    name: 'Performance Testing', categoryId: 'testing', label: 'Practice',         iconType: 'lucide', iconKey: 'Activity',    iconColor: '#B6FF00' },
  { id: 'auto-qa',         name: 'Automated QA',        categoryId: 'testing', label: 'Practice',         iconType: 'lucide', iconKey: 'Bot',         iconColor: '#B6FF00' },

  // ── Security ──────────────────────────────────────────────────────────────
  { id: 'oauth-sec',       name: 'OAuth 2.0',           categoryId: 'security', label: 'Auth Protocol',   iconType: 'lucide', iconKey: 'Lock',        iconColor: '#B6FF00' },
  { id: 'jwt-sec',         name: 'JWT',                 categoryId: 'security', label: 'Auth Token',      iconType: 'abbr',   iconKey: 'JWT',         iconColor: '#D63AFF' },
  { id: 'ssl-tls',         name: 'SSL / TLS',           categoryId: 'security', label: 'Transport Security',iconType: 'lucide', iconKey: 'Shield',    iconColor: '#B6FF00' },
  { id: 'api-security',    name: 'API Security',        categoryId: 'security', label: 'Security',        iconType: 'lucide', iconKey: 'ShieldCheck', iconColor: '#B6FF00' },
  { id: 'rbac',            name: 'RBAC',                categoryId: 'security', label: 'Access Control',  iconType: 'lucide', iconKey: 'Users',       iconColor: '#B6FF00' },
  { id: 'iam',             name: 'IAM',                 categoryId: 'security', label: 'Identity',        iconType: 'lucide', iconKey: 'UserCheck',   iconColor: '#B6FF00' },
  { id: 'secrets-mgmt',    name: 'Secrets Management',  categoryId: 'security', label: 'Security',        iconType: 'lucide', iconKey: 'Key',         iconColor: '#B6FF00' },
  { id: 'encryption',      name: 'Data Encryption',     categoryId: 'security', label: 'Security',        iconType: 'lucide', iconKey: 'Lock',        iconColor: '#B6FF00' },
  { id: 'sec-monitoring',  name: 'Security Monitoring', categoryId: 'security', label: 'Observability',   iconType: 'lucide', iconKey: 'Activity',    iconColor: '#B6FF00' },

  // ── Software Architecture ─────────────────────────────────────────────────
  { id: 'modular',         name: 'Modular Architecture',categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Layers',      iconColor: '#B6FF00' },
  { id: 'microservices-a', name: 'Microservices',       categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Network',     iconColor: '#B6FF00' },
  { id: 'monolithic',      name: 'Monolithic',          categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Server',      iconColor: '#B6FF00' },
  { id: 'serverless-a',    name: 'Serverless',          categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Cloud',       iconColor: '#B6FF00' },
  { id: 'event-driven-a',  name: 'Event-Driven',        categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Activity',    iconColor: '#B6FF00' },
  { id: 'ddd',             name: 'Domain-Driven Design',categoryId: 'architecture', label: 'Methodology',  iconType: 'lucide', iconKey: 'GitBranch',   iconColor: '#B6FF00' },
  { id: 'clean-arch',      name: 'Clean Architecture',  categoryId: 'architecture', label: 'Methodology',  iconType: 'lucide', iconKey: 'CheckCircle', iconColor: '#B6FF00' },
  { id: 'api-first',       name: 'API-First',           categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Plug',        iconColor: '#B6FF00' },
  { id: 'cloud-native',    name: 'Cloud-Native',        categoryId: 'architecture', label: 'Architecture', iconType: 'lucide', iconKey: 'Cloud',       iconColor: '#B6FF00' },
];

// ─── Per-Page Category Subsets ────────────────────────────────────────────────
// Pass these to <TechnologyStack categories={…} /> on each page.

/** AI Development page: AI/ML + Agentic AI + Vector DB + Cloud */
export const AI_DEV_STACK_CATEGORIES    = ['ai-ml', 'agentic-genai', 'vector-knowledge', 'cloud-devops'];

/** Agentic AI page: Agentic AI + AI/ML + Vector DB + APIs */
export const AGENTIC_STACK_CATEGORIES   = ['agentic-genai', 'ai-ml', 'vector-knowledge', 'apis'];

/** Machine Learning page: AI/ML + Data Engineering + Database + Cloud */
export const ML_STACK_CATEGORIES        = ['ai-ml', 'data-engineering', 'database', 'cloud-devops'];

/** Web Development page: Front-End + Back-End + Database + Cloud */
export const WEB_DEV_STACK_CATEGORIES   = ['frontend', 'backend', 'database', 'cloud-devops'];

/** App Development page: Mobile + Back-End + Database + Cloud */
export const APP_DEV_STACK_CATEGORIES   = ['mobile', 'backend', 'database', 'cloud-devops'];

/** AI Automation page: Agentic AI + Automation + APIs + Database */
export const AI_AUTOMATION_STACK_CATEGORIES = ['agentic-genai', 'automation', 'apis', 'database'];

/** Computer Vision page: CV + AI/ML + Cloud */
export const CV_STACK_CATEGORIES        = ['computer-vision', 'ai-ml', 'cloud-devops'];

/** NLP & Speech page: NLP + Agentic AI + AI/ML */
export const NLP_STACK_CATEGORIES       = ['nlp-speech', 'agentic-genai', 'ai-ml'];

/** DevOps page: Cloud & DevOps + Back-End + Security + Testing */
export const DEVOPS_STACK_CATEGORIES    = ['cloud-devops', 'backend', 'security', 'testing'];

/** Chatbot Development page: Agentic AI + NLP + APIs + Database */
export const CHATBOT_STACK_CATEGORIES   = ['agentic-genai', 'nlp-speech', 'apis', 'database'];

/** Custom Software page: Front-End + Back-End + Database + Cloud */
export const CUSTOM_SOFTWARE_STACK_CATEGORIES = ['frontend', 'backend', 'database', 'cloud-devops'];

/** Ecommerce page: Front-End + Back-End + Database + Cloud + APIs + Agentic AI */
export const ECOMMERCE_STACK_CATEGORIES = [
  'frontend',
  'backend',
  'database',
  'apis',
  'cloud-devops',
  'agentic-genai',
  'automation',
  'security',
];
