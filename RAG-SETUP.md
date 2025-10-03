# RAG Pipeline Setup Guide

This guide explains how to set up and use the RAG (Retrieval-Augmented Generation) pipeline for Suresh's AI Assistant chatbot.

## Architecture Overview

```
User Query → Embedding → Pinecone Search → Context Retrieval → GROQ LLM → Response
```

## Components

### 1. **Netlify Functions**
- `netlify/functions/chat.js` - Main chat endpoint with RAG
- `netlify/functions/embed-local.js` - Local embedding service
- `netlify/functions/ingest.js` - Data ingestion endpoint

### 2. **Vector Database**
- **Pinecone** - Stores document embeddings
- **Index**: `towering` (384 dimensions)
- **Metric**: Cosine similarity

### 3. **Embedding Model**
- **Primary**: Hugging Face Inference API (`all-MiniLM-L6-v2`)
- **Fallback**: Hash-based embedding for offline use

### 4. **LLM**
- **GROQ API** with `llama-3.1-70b-versatile` model

## Setup Instructions

### 1. Environment Variables

Update your `.env` file:

```env
# GROQ API (Required)
GROQ_API_KEY=your_groq_api_key

# Pinecone Configuration (Required)
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=towering
PINECONE_ENVIRONMENT=us-east-1

# Hugging Face API (Optional - for better embeddings)
HUGGINGFACE_API_KEY=your_huggingface_api_key
```

### 2. Pinecone Index Setup

1. Go to [Pinecone Console](https://app.pinecone.io/)
2. Create a new index with these settings:
   - **Name**: `towering`
   - **Dimensions**: `384`
   - **Metric**: `cosine`
   - **Environment**: `us-east-1`

### 3. Data Ingestion

1. **Prepare your data** in `data/suresh-knowledge.json`:
```json
[
  {
    "text": "Your knowledge content here...",
    "metadata": {
      "category": "about",
      "type": "introduction",
      "source": "portfolio"
    }
  }
]
```

2. **Run ingestion**:
```bash
# After deploying to Netlify
npm run ingest

# Or manually call the endpoint
curl -X POST https://your-site.netlify.app/.netlify/functions/ingest \
  -H "Content-Type: application/json" \
  -d @data/suresh-knowledge.json
```

## API Endpoints

### Chat Endpoint
```
POST /.netlify/functions/chat
Content-Type: application/json

{
  "message": "Tell me about Suresh's AI projects"
}
```

**Response:**
```json
{
  "response": "Suresh has worked on various AI projects...",
  "contextUsed": true,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Ingestion Endpoint
```
POST /.netlify/functions/ingest
Content-Type: application/json

{
  "documents": [
    {
      "text": "Document content...",
      "metadata": { "category": "example" }
    }
  ]
}
```

## Features

### ✅ Implemented
- RAG-powered responses using Pinecone
- Fallback embedding generation
- Context-aware chat responses
- Automatic text chunking
- Batch document ingestion
- CORS support for frontend integration

### 🔄 Fallback Mechanisms
- Hash-based embeddings when APIs are unavailable
- Keyword-based context retrieval
- Graceful error handling
- Default responses for API failures

## Usage

### 1. Deploy to Netlify
```bash
npm run build
# Deploy via Netlify CLI or Git integration
```

### 2. Ingest Knowledge Base
```bash
npm run ingest
```

### 3. Test the Chatbot
The chatbot will automatically use the RAG pipeline when deployed.

## Monitoring

### Check Ingestion Status
```bash
curl https://your-site.netlify.app/.netlify/functions/ingest \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"documents": []}'
```

### Test Chat Functionality
```bash
curl https://your-site.netlify.app/.netlify/functions/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## Troubleshooting

### Common Issues

1. **Pinecone Connection Errors**
   - Verify API key and index name
   - Check index dimensions (must be 384)

2. **Embedding Generation Fails**
   - System falls back to hash-based embeddings
   - Consider adding Hugging Face API key

3. **GROQ API Errors**
   - Check API key validity
   - Monitor rate limits

4. **CORS Issues**
   - Functions include CORS headers
   - Verify domain configuration

### Debug Mode
Add console logs to functions for debugging:
```javascript
console.log('Debug info:', { query, context, response });
```

## Performance Optimization

- **Chunking**: Documents split into 500-character chunks
- **Caching**: Consider implementing response caching
- **Batch Processing**: Ingest documents in batches of 100
- **Similarity Threshold**: Adjustable context relevance filtering

## Security

- API keys stored as environment variables
- CORS configured for your domain
- Input validation on all endpoints
- Rate limiting recommended for production

## Next Steps

1. Add more knowledge documents
2. Implement conversation memory
3. Add response caching
4. Monitor usage analytics
5. Fine-tune similarity thresholds