# Quick Run Commands

## Run Locally

```cmd
netlify dev
```

This will:
- Start your Vite frontend
- Start Netlify functions
- Open browser at http://localhost:8888

## Deploy to Production

```cmd
netlify deploy --prod
```

Or if connected to Git:

```cmd
git add .
git commit -m "Fixed RAG pipeline"
git push
```

## Test the Chatbot

Once running, go to http://localhost:8888 and test:
- "What services does Suresh offer?"
- "Tell me about your AI projects"
- "How can I contact you?"

## Check Logs

Watch the terminal for:
```
Service health: { pinecone: true, huggingface: true, groq: true }
Generated response with context
```

## If You See Errors

1. Make sure `.env` file has all API keys
2. Check terminal logs for specific errors
3. Verify API keys are valid on service dashboards
