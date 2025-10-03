#!/usr/bin/env node

/**
 * Vector Store Management
 * Handles document chunking and storage in Pinecone
 */

import { Pinecone } from '@pinecone-database/pinecone';
import { HuggingFaceTransformersEmbeddings } from '@langchain/community/embeddings/hf_transformers';
import { PineconeStore } from '@langchain/pinecone';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Document } from '@langchain/core/documents';
import { ingestionConfig } from '../config/ingestion.config.js';

/**
 * Initialize Pinecone and embeddings
 */
export async function initializeVectorStore() {
  console.log('🔧 Initializing vector store...');
  
  // Check environment variables
  if (!process.env.PINECONE_API_KEY) {
    throw new Error('PINECONE_API_KEY environment variable is required');
  }

  // Initialize Pinecone
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });

  const index = pinecone.Index(ingestionConfig.pinecone.indexName);

  // Initialize embeddings
  const embeddings = new HuggingFaceTransformersEmbeddings({
    modelName: ingestionConfig.embeddings.model,
    modelKwargs: {
      device: ingestionConfig.embeddings.device,
      normalize_embeddings: ingestionConfig.embeddings.normalize,
    },
  });

  console.log('✅ Vector store initialized');
  
  return { pinecone, index, embeddings };
}

/**
 * Create document chunks from extracted text
 */
export async function createDocumentChunks(extractedData) {
  console.log('✂️ Creating document chunks...');
  
  const { text, metadata } = extractedData;
  
  // Create main document
  const document = new Document({
    pageContent: text,
    metadata: {
      ...metadata,
      type: 'pdf',
      namespace: ingestionConfig.pinecone.namespace,
      chunkingSettings: ingestionConfig.textProcessing
    }
  });

  // Initialize text splitter
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: ingestionConfig.textProcessing.chunkSize,
    chunkOverlap: ingestionConfig.textProcessing.chunkOverlap,
    separators: ingestionConfig.textProcessing.separators,
  });

  // Split document into chunks
  const chunks = await textSplitter.splitDocuments([document]);
  
  // Add chunk-specific metadata
  const chunksWithMetadata = chunks.map((chunk, index) => ({
    ...chunk,
    metadata: {
      ...chunk.metadata,
      chunkIndex: index,
      totalChunks: chunks.length,
      chunkId: `${metadata.filename}_${Date.now()}_${index}`,
      chunkSize: chunk.pageContent.length,
      createdAt: new Date().toISOString()
    }
  }));

  console.log(`📦 Created ${chunks.length} chunks`);
  return chunksWithMetadata;
}

/**
 * Store document chunks in Pinecone
 */
export async function storeDocumentChunks(chunks, vectorStore) {
  console.log('🔄 Storing chunks in Pinecone...');
  
  const { index, embeddings } = vectorStore;
  
  try {
    // Store chunks in batches
    const batchSize = 10;
    let storedCount = 0;
    
    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      
      await PineconeStore.fromDocuments(
        batch,
        embeddings,
        {
          pineconeIndex: index,
          namespace: ingestionConfig.pinecone.namespace,
        }
      );
      
      storedCount += batch.length;
      console.log(`📊 Stored ${storedCount}/${chunks.length} chunks`);
    }
    
    console.log('✅ All chunks stored successfully');
    
    return {
      success: true,
      chunksStored: chunks.length,
      namespace: ingestionConfig.pinecone.namespace,
      indexName: ingestionConfig.pinecone.indexName
    };
    
  } catch (error) {
    console.error('❌ Error storing chunks:', error.message);
    throw error;
  }
}

/**
 * Get index statistics
 */
export async function getIndexStats(vectorStore) {
  try {
    const { index } = vectorStore;
    const stats = await index.describeIndexStats();
    
    return {
      totalVectors: stats.totalVectorCount || 0,
      namespaces: stats.namespaces || {},
      dimension: stats.dimension || 0,
      indexFullness: stats.indexFullness || 0
    };
  } catch (error) {
    console.warn('⚠️ Could not retrieve index stats:', error.message);
    return null;
  }
}

/**
 * Test vector search
 */
export async function testVectorSearch(query, vectorStore, topK = 3) {
  console.log(`🔍 Testing vector search with query: "${query}"`);
  
  const { index, embeddings } = vectorStore;
  
  try {
    const vectorStoreInstance = await PineconeStore.fromExistingIndex(
      embeddings,
      {
        pineconeIndex: index,
        namespace: ingestionConfig.pinecone.namespace,
      }
    );
    
    const results = await vectorStoreInstance.similaritySearch(query, topK);
    
    console.log(`📋 Found ${results.length} similar documents:`);
    results.forEach((result, index) => {
      console.log(`${index + 1}. ${result.metadata?.title || 'Untitled'} (Score: ${result.metadata?.score || 'N/A'})`);
      console.log(`   Preview: ${result.pageContent.substring(0, 100)}...`);
    });
    
    return results;
  } catch (error) {
    console.error('❌ Vector search test failed:', error.message);
    throw error;
  }
}