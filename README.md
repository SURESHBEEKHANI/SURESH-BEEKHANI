# Vite React ShadCN TypeScript

A modern, full-featured React application built with Vite, TypeScript, and ShadCN UI components. This project showcases AI-powered solutions across various industries including HealthTech, EdTech, FinTech, and more.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS with ShadCN UI components
- **Routing:** React Router DOM v6
- **State Management:** TanStack Query (React Query)
- **Animations:** Framer Motion
- **Backend:** Supabase, Netlify Functions
- **AI Integration:** Groq SDK, Pinecone Vector Database
- **Analytics:** Google Analytics 4
- **Form Handling:** React Hook Form with Zod validation

## Features

- 🚀 Lightning-fast development with Vite and SWC
- 🎨 Beautiful UI components from ShadCN
- 📱 Fully responsive design
- 🌙 Dark mode support with next-themes
- 🤖 AI-powered chatbot integration
- 📊 Google Analytics tracking
- 🔍 SEO optimized
- ⚡ Code splitting and lazy loading
- 🎯 TypeScript for type safety
- 🔄 Optimized build with manual chunking

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vite_react_shadcn_ts
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_DEV_PORT=5173
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build:prod
```

Build for development:
```bash
npm run build:dev
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   ├── pages-Industries/  # Industry-specific pages
│   ├── Pages-Portfolio/   # Portfolio showcase pages
│   ├── pages-Services/    # Service offering pages
│   ├── App.tsx         # Main app component with routing
│   ├── Index.tsx       # Landing page
│   └── main.tsx        # App entry point
├── netlify.toml        # Netlify deployment config
└── vite.config.ts      # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run build:prod` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy:frontend` - Deploy frontend to production
- `npm run serve` - Build and serve locally

## Industries Covered

- HealthTech AI
- EdTech AI
- FinTech AI
- GreenTech AI
- Diagnostics AI
- Retail AI
- E-Commerce AI
- HIPAA Compliance

## Services Offered

- AI Chatbot Development
- Predictive Modelling
- ChatGPT Integrations
- Natural Language Processing
- Machine Learning
- Computer Vision
- AI Development
- AI Automation

## Key Dependencies

- **UI Components:** Radix UI primitives with ShadCN
- **Icons:** Lucide React, React Icons
- **Forms:** React Hook Form with Zod validation
- **Animations:** Framer Motion
- **Database:** Supabase
- **Vector DB:** Pinecone
- **AI:** Groq SDK
- **Analytics:** React GA4

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the deployment configuration.

To deploy:
```bash
npm run deploy:frontend
```

## Performance Optimizations

- Code splitting with React lazy loading
- Manual chunk splitting for vendor, router, query, and UI libraries
- Optimized scroll reveal animations
- Image optimization
- Tree shaking and minification in production

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For support, please contact the development team.
