# 🚀 Deployment Guide for Suresh Beekhani's RAG Portfolio

This guide will help you deploy the RAG-powered portfolio to production.

## 📋 Prerequisites

- GitHub repository with your code
- Pinecone account and API key
- Groq account and API key
- Netlify account (for frontend)
- Railway/Render account (for backend)

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Netlify       │    │   Railway/Render │    │   Pinecone      │
│   (Frontend)    │◄──►│   (Backend)      │◄──►│   (Vector DB)   │
│   - React App   │    │   - RAG Server   │    │   - Embeddings  │
│   - Static Site │    │   - Express API  │    │   - Namespaces  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🎯 Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your code is pushed to GitHub with all the files we created.

### 2. Deploy Backend (RAG Server)

#### Option A: Railway (Recommended)

1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Create a new project
4. Add environment variables:
   ```
   PINECONE_API_KEY=your_pinecone_key
   GROQ_API_KEY=your_groq_key
   PINECONE_INDEX=towering-fir
   PORT=8080
   NODE_ENV=production
   ```
5. Deploy and get your backend URL (e.g., `https://your-app.railway.app`)

#### Option B: Render

1. Go to [Render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Use the `render.yaml` configuration
5. Add environment variables in the dashboard
6. Deploy and get your backend URL

### 3. Update Frontend Configuration

Update the backend URL in `src/services/ragApi.ts`:

```typescript
const RAG_API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-actual-backend-url.com' // Replace with your backend URL
  : 'http://localhost:8080';
```

### 4. Deploy Frontend to Netlify

#### Method 1: Netlify Dashboard

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build:prod`
   - Publish directory: `dist`
   - Node version: `18`
5. Add environment variables:
   ```
   NODE_ENV=production
   VITE_RAG_API_URL=https://your-backend-url.com
   ```
6. Deploy

#### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build:prod

# Deploy
netlify deploy --prod --dir=dist
```

### 5. Run Data Ingestion

After both frontend and backend are deployed:

1. Set up your environment variables locally
2. Run the ingestion script:
   ```bash
   npm run ingest
   ```
3. This will populate your Pinecone database with portfolio data

### 6. Test Your Deployment

1. Visit your Netlify URL
2. Open the chatbot
3. Test a query like "Tell me about your AI projects"
4. Check that responses are coming from your RAG system

## 🔧 Environment Variables

### Frontend (Netlify)
```
NODE_ENV=production
VITE_RAG_API_URL=https://your-backend-url.com
```

### Backend (Railway/Render)
```
NODE_ENV=production
PINECONE_API_KEY=your_pinecone_key
GROQ_API_KEY=your_groq_key
PINECONE_INDEX=towering-fir
PORT=8080
```

## 📊 Monitoring

### Backend Health Check
Visit: `https://your-backend-url.com/health`

### Database Detection
Visit: `https://your-backend-url.com/detect-database`

### Frontend
Your Netlify URL will show the portfolio with the integrated chatbot.

## 🔄 Updating Your Deployment

### Frontend Updates
1. Push changes to GitHub
2. Netlify will automatically redeploy

### Backend Updates
1. Push changes to GitHub
2. Railway/Render will automatically redeploy

### Data Updates
1. Run `npm run ingest` locally
2. This updates the Pinecone database

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check that your backend URL is correct
   - Ensure CORS is enabled in your backend

2. **RAG Not Responding**
   - Check backend health: `https://your-backend-url.com/health`
   - Verify environment variables are set
   - Check Pinecone connection

3. **Build Failures**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check build logs for specific errors

4. **Database Issues**
   - Verify Pinecone API key is correct
   - Check if data ingestion completed successfully
   - Verify Pinecone index exists

### Debug Commands

```bash
# Check backend health
curl https://your-backend-url.com/health

# Check database connection
curl https://your-backend-url.com/detect-database

# Test a query
curl -X POST https://your-backend-url.com/query \
  -H "Content-Type: application/json" \
  -d '{"query": "Tell me about your projects"}'
```

## 📈 Performance Optimization

### For Production

1. **Enable Caching**
   - Add Redis for response caching
   - Implement query result caching

2. **Rate Limiting**
   - Add rate limiting to prevent abuse
   - Implement request throttling

3. **Monitoring**
   - Set up error tracking (Sentry)
   - Add performance monitoring
   - Set up uptime monitoring

4. **Security**
   - Add API authentication
   - Implement request validation
   - Add rate limiting

## 🎉 Success!

Once deployed, your RAG-powered portfolio will be live with:
- ✅ Intelligent chatbot responses
- ✅ Multi-namespace search
- ✅ Real-time database detection
- ✅ Professional AI assistant
- ✅ Scalable architecture

Your portfolio is now powered by cutting-edge AI technology! 🚀
