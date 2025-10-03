# 🔐 Environment Variables Setup

## 📋 Required API Keys

You'll need to get these API keys and add them to your Netlify environment variables:

### 1. **GROQ API Key**
- Go to: https://console.groq.com/
- Sign up/login and create an API key
- Copy the key (starts with `gsk_`)

### 2. **Pinecone API Key**
- Go to: https://app.pinecone.io/
- Sign up/login and get your API key
- Copy the key (starts with `pcsk_`)

### 3. **Hugging Face API Key** (Optional)
- Go to: https://huggingface.co/settings/tokens
- Create a new token
- Copy the key (starts with `hf_`)

## 🔧 Adding to Netlify

1. Go to your Netlify site dashboard
2. Click **Site settings** > **Environment variables**
3. Add each variable:

```
Variable Name: GROQ_API_KEY
Value: [paste your GROQ API key here]

Variable Name: PINECONE_API_KEY  
Value: [paste your Pinecone API key here]

Variable Name: PINECONE_INDEX_NAME
Value: towering

Variable Name: PINECONE_ENVIRONMENT
Value: us-east-1

Variable Name: HUGGINGFACE_API_KEY
Value: [paste your Hugging Face token here]
```

## 🏠 Local Development

For local development, your `.env` file should look like:

```env
GROQ_API_KEY=your_actual_groq_key_here
PINECONE_API_KEY=your_actual_pinecone_key_here
PINECONE_INDEX_NAME=towering
PINECONE_ENVIRONMENT=us-east-1
HUGGINGFACE_API_KEY=your_actual_hf_key_here
```

## 🔒 Security Notes

- **Never commit API keys to Git**
- **Use environment variables only**
- **Keep your `.env` file in `.gitignore`**
- **Rotate keys if accidentally exposed**

## ✅ Verification

After adding environment variables:
1. Redeploy your site
2. Test the chatbot
3. Check Netlify function logs if issues occur

Your chatbot will work with just the basic setup, but adding these keys enables the full RAG functionality!