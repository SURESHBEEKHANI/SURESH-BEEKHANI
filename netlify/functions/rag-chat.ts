import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from '@langchain/pinecone';
import { HuggingFaceTransformersEmbeddings } from '@langchain/community/embeddings/hf_transformers';

// RAG System prompt for Suresh Beekhani AI Assistant
const RAG_PROMPT_TEMPLATE = `You are **Suresh Beekhani AI Assistant**, a helpful and knowledgeable system connected to a retrieval engine. Your job is to provide **clear, direct, and context-based answers** using the retrieved documents.

Guidelines:
- Always ground your answers in the retrieved context.
- Do not give vague, default, or filler responses.
- If the context lacks the answer, respond with: "No relevant information found in the documents."
- Be concise but include important details.
- Maintain a professional yet approachable tone.

User Question: {question}
Retrieved Documents: {context}
Final Answer:`;

interface ChatRequest {
  message: string;
  useVectorSearch?: boolean;
  topK?: number;
  temperature?: number;
  maxTokens?: number;
}

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const {
      message,
      useVectorSearch = true,
      topK = 5,
      temperature = 0.7,
      maxTokens = 1000
    }: ChatRequest = JSON.parse(event.body || '{}');

    if (!message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Check for required environment variables
    const groqApiKey = process.env.GROQ_API_KEY;
    const pineconeApiKey = process.env.PINECONE_API_KEY;
    const pineconeIndexName = process.env.PINECONE_INDEX_NAME;

    if (!groqApiKey) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'GROQ_API_KEY environment variable is not set' }),
      };
    }

    if (useVectorSearch && (!pineconeApiKey || !pineconeIndexName)) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          error: 'Pinecone configuration incomplete. Required: PINECONE_API_KEY, PINECONE_INDEX_NAME'
        }),
      };
    }

    // Initialize the Groq chat model
    const llm = new ChatGroq({
      apiKey: groqApiKey,
      model: 'mixtral-8x7b-32768',
      temperature,
      maxTokens,
    });

    let context = 'No specific context provided.';

    // Perform vector search if enabled
    if (useVectorSearch && pineconeApiKey && pineconeIndexName) {
      try {
        // Initialize Pinecone
        const pinecone = new Pinecone({
          apiKey: pineconeApiKey,
        });

        // Get the Pinecone index
        const index = pinecone.Index(pineconeIndexName);

        // Initialize embeddings with all-MiniLM-L6-v2 model (384 dimensions)
        const embeddings = new HuggingFaceTransformersEmbeddings({
          modelName: 'sentence-transformers/all-MiniLM-L6-v2',
        });

        // Create Pinecone vector store
        const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
          pineconeIndex: index,
        });

        // Perform similarity search
        const searchResults = await vectorStore.similaritySearch(message, topK);

        // Format the retrieved context
        if (searchResults.length > 0) {
          context = searchResults
            .map((doc: any, docIndex: number) => `Document ${docIndex + 1}:\n${doc.pageContent}`)
            .join('\n\n---\n\n');
        } else {
          context = 'No relevant documents found in the knowledge base.';
        }

      } catch (vectorError) {
        console.error('Vector search error:', vectorError);
        context = 'Error occurred during knowledge base search. Proceeding with general knowledge.';
      }
    }

    // Create the prompt template
    const prompt = PromptTemplate.fromTemplate(RAG_PROMPT_TEMPLATE);

    // Create the chain
    const chain = RunnableSequence.from([
      prompt,
      llm,
      new StringOutputParser(),
    ]);

    // Execute the chain
    const response = await chain.invoke({
      context,
      question: message,
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        response,
        timestamp: new Date().toISOString(),
        vectorSearchUsed: useVectorSearch,
        contextLength: context.length,
      }),
    };

  } catch (error) {
    console.error('Error in RAG chat function:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};

export { handler };