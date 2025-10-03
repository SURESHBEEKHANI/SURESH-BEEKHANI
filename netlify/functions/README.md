# Python RAG Functions for Netlify

This directory contains Python serverless functions that provide RAG (Retrieval-Augmented Generation) capabilities for the Suresh Beekhani AI Assistant.

## Functions

### 1. `chat.py`
Main chat endpoint that handles user queries and returns AI-generated responses.

**Endpoint:** `/.netlify/functions/chat`
**Method:** POST
**Body:**
```json
{
  "message": "Your question here"
}
```

**Response:**
```json
{
  "response": "AI generated response",
  "contextUsed": true,
  "numContexts": 3,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### 2. `ingest.py`
Document ingestion endpoint for adding knowledge to the vector database.

**Endpoint:** `/.netlify/functions/ingest`
**Method:** POST
**Body:**
```json
{
  "documents": [
    {
      "text": "Document content",
      "metadata": {"category": "example"}
    }
  ]
}
```

### 3. `embed-local.py`
Local embedding generation using sentence-transformers.

**Endpoint:** `/.netlify/functions/embed-local`
**Method:** POST
**Body:**
```json
{
  "text": "Text to embed"
}
```

## Environment Variables

Set these in your Netlify dashboard:

- `PINECONE_API_KEY`: Your Pinecone API key
- `PINECONE_INDEX_NAME`: Your Pinecone index name
- `GROQ_API_KEY`: Your Groq API key
- `HUGGINGFACE_API_KEY`: Your Hugging Face API key (optional)

## Dependencies

Dependencies are automatically installed from `requirements.txt`:

- `pinecone-client==3.0.3`
- `groq==0.4.1`
- `sentence-transformers==2.2.2`
- `numpy==1.24.3`
- `torch==2.1.0`
- `transformers==4.35.0`

## Deployment

1. **Set Environment Variables** in Netlify dashboard
2. **Deploy** - Functions will be automatically deployed with your site
3. **Test** using the test script:
   ```bash
   python scripts/test-python-functions.py
   ```

## Features

- **Vector Search**: Uses Pinecone for semantic search
- **Local Embeddings**: sentence-transformers for fast embedding generation
- **LLM Integration**: Groq for response generation
- **Fallback System**: Graceful degradation when services are unavailable
- **CORS Support**: Configured for cross-origin requests

## Architecture

```
User Query → chat.py → vector_store.py → Pinecone Search
                   ↓
            llm_service.py → Groq API → Response
```

The system retrieves relevant context from Pinecone and uses Groq to generate contextually aware responses about Suresh's AI services and expertise.