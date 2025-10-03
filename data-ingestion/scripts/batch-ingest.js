#!/usr/bin/env node

/**
 * Batch PDF Ingestion Script
 * Processes all PDF files in the data folder and ingests them into the vector database
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { extractPDFText, validatePDFFile, saveProcessedMetadata } from './pdf-processor.js';
import { 
  initializeVectorStore, 
  createDocumentChunks, 
  storeDocumentChunks, 
  getIndexStats,
  testVectorSearch 
} from './vector-store.js';
import { ingestionConfig } from '../config/ingestion.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

/**
 * Get all PDF files from the data directory
 */
function getPDFFiles(dataDir) {
  if (!fs.existsSync(dataDir)) {
    throw new Error(`Data directory does not exist: ${dataDir}`);
  }
  
  const files = fs.readdirSync(dataDir)
    .filter(file => file.toLowerCase().endsWith('.pdf'))
    .map(file => path.join(dataDir, file));
  
  return files;
}

/**
 * Create logs directory if it doesn't exist
 */
function ensureLogsDirectory() {
  const logsDir = path.dirname(ingestionConfig.logging.logFile);
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
}

/**
 * Log processing results
 */
function logResults(results) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    results: results,
    config: ingestionConfig
  };
  
  ensureLogsDirectory();
  
  const logFile = ingestionConfig.logging.logFile;
  const logData = JSON.stringify(logEntry, null, 2) + '\n';
  
  fs.appendFileSync(logFile, logData);
  console.log(`📝 Results logged to: ${logFile}`);
}

/**
 * Process a single PDF file
 */
async function processPDFFile(filePath, vectorStore) {
  const filename = path.basename(filePath);
  console.log(`\n🔄 Processing: ${filename}`);
  
  try {
    // Validate file
    validatePDFFile(filePath, ingestionConfig.files.maxFileSize);
    
    // Extract text from PDF
    const extractedData = await extractPDFText(filePath);
    
    // Create document chunks
    const chunks = await createDocumentChunks(extractedData);
    
    // Store chunks in vector database
    const storeResult = await storeDocumentChunks(chunks, vectorStore);
    
    // Save metadata
    const metadataPath = saveProcessedMetadata(
      extractedData.metadata, 
      ingestionConfig.files.processedDir
    );
    
    return {
      success: true,
      filename: filename,
      chunks: chunks.length,
      metadata: extractedData.metadata,
      metadataPath: metadataPath,
      storeResult: storeResult
    };
    
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
    return {
      success: false,
      filename: filename,
      error: error.message
    };
  }
}

/**
 * Main batch ingestion function
 */
async function batchIngest() {
  console.log('🚀 Starting batch PDF ingestion...');
  console.log('=====================================');
  
  const startTime = Date.now();
  const results = {
    processed: [],
    failed: [],
    summary: {}
  };
  
  try {
    // Initialize vector store
    const vectorStore = await initializeVectorStore();
    
    // Get initial index stats
    const initialStats = await getIndexStats(vectorStore);
    console.log('📊 Initial index stats:', initialStats);
    
    // Get PDF files
    const pdfFiles = getPDFFiles(ingestionConfig.files.inputDir);
    console.log(`📁 Found ${pdfFiles.length} PDF files to process`);
    
    if (pdfFiles.length === 0) {
      console.log('ℹ️ No PDF files found in data directory');
      return;
    }
    
    // Process files in batches
    const batchSize = ingestionConfig.files.batchSize;
    let totalProcessed = 0;
    let totalFailed = 0;
    
    for (let i = 0; i < pdfFiles.length; i += batchSize) {
      const batch = pdfFiles.slice(i, i + batchSize);
      console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(pdfFiles.length / batchSize)}`);
      
      // Process batch
      const batchPromises = batch.map(filePath => processPDFFile(filePath, vectorStore));
      const batchResults = await Promise.all(batchPromises);
      
      // Collect results
      batchResults.forEach(result => {
        if (result.success) {
          results.processed.push(result);
          totalProcessed++;
        } else {
          results.failed.push(result);
          totalFailed++;
        }
      });
      
      console.log(`✅ Batch completed: ${batchResults.filter(r => r.success).length} successful, ${batchResults.filter(r => !r.success).length} failed`);
    }
    
    // Get final index stats
    const finalStats = await getIndexStats(vectorStore);
    console.log('📊 Final index stats:', finalStats);
    
    // Calculate summary
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    
    results.summary = {
      totalFiles: pdfFiles.length,
      processed: totalProcessed,
      failed: totalFailed,
      duration: `${duration.toFixed(2)}s`,
      chunksCreated: results.processed.reduce((sum, r) => sum + r.chunks, 0),
      initialStats: initialStats,
      finalStats: finalStats
    };
    
    // Display summary
    console.log('\n🎉 Batch ingestion completed!');
    console.log('===============================');
    console.log(`📊 Summary:`);
    console.log(`   - Total files: ${results.summary.totalFiles}`);
    console.log(`   - Processed: ${results.summary.processed}`);
    console.log(`   - Failed: ${results.summary.failed}`);
    console.log(`   - Chunks created: ${results.summary.chunksCreated}`);
    console.log(`   - Duration: ${results.summary.duration}`);
    
    if (results.failed.length > 0) {
      console.log('\n❌ Failed files:');
      results.failed.forEach(f => console.log(`   - ${f.filename}: ${f.error}`));
    }
    
    // Test vector search
    if (totalProcessed > 0) {
      console.log('\n🔍 Testing vector search...');
      try {
        await testVectorSearch('artificial intelligence machine learning', vectorStore, 3);
      } catch (error) {
        console.warn('⚠️ Vector search test failed:', error.message);
      }
    }
    
    // Log results
    logResults(results);
    
  } catch (error) {
    console.error('💥 Fatal error during batch ingestion:', error.message);
    process.exit(1);
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    await batchIngest();
    console.log('\n✨ All done! Your PDFs are now searchable in the RAG system.');
  } catch (error) {
    console.error('\n💥 Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { batchIngest, processPDFFile };