#!/usr/bin/env node

/**
 * PDF Processing Script
 * Extracts text from PDF files and prepares them for vector storage
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as pdfjsLib from 'pdfjs-dist';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Extract text content from PDF file
 */
export async function extractPDFText(pdfPath) {
  console.log(`📄 Processing PDF: ${path.basename(pdfPath)}`);
  
  try {
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    // Load PDF document
    const pdfDoc = await pdfjsLib.getDocument({
      data: new Uint8Array(pdfBuffer),
      useSystemFonts: true,
    }).promise;

    const numPages = pdfDoc.numPages;
    console.log(`📊 PDF has ${numPages} pages`);
    
    let fullText = '';
    const pages = [];

    // Extract text from each page
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      process.stdout.write(`\r⏳ Processing page ${pageNum}/${numPages}...`);
      
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      let pageText = '';
      let lastY = -1;
      
      // Process text items and preserve formatting
      for (const item of textContent.items) {
        if ('str' in item) {
          // Add line break if we're on a new line
          if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
            pageText += '\n';
          }
          pageText += item.str + ' ';
          lastY = item.transform[5];
        }
      }
      
      const cleanPageText = pageText.trim();
      pages.push({
        pageNumber: pageNum,
        text: cleanPageText,
        wordCount: cleanPageText.split(/\s+/).length
      });
      
      fullText += `\n\n--- Page ${pageNum} ---\n\n${cleanPageText}`;
    }
    
    console.log(`\n✅ Text extraction complete`);

    // Get PDF metadata
    const metadata = await pdfDoc.getMetadata();
    
    return {
      text: fullText.trim(),
      pages: pages,
      metadata: {
        title: metadata.info?.Title || path.basename(pdfPath, '.pdf'),
        author: metadata.info?.Author || 'Unknown',
        subject: metadata.info?.Subject || '',
        creator: metadata.info?.Creator || '',
        producer: metadata.info?.Producer || '',
        creationDate: metadata.info?.CreationDate || '',
        modificationDate: metadata.info?.ModDate || '',
        pageCount: numPages,
        wordCount: fullText.split(/\s+/).length,
        characterCount: fullText.length,
        source: pdfPath,
        filename: path.basename(pdfPath),
        fileSize: fs.statSync(pdfPath).size,
        processedAt: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error(`\n❌ Error processing PDF: ${error.message}`);
    throw new Error(`Failed to extract text from PDF: ${error.message}`);
  }
}

/**
 * Validate PDF file
 */
export function validatePDFFile(filePath, maxSize = 50 * 1024 * 1024) {
  const stats = fs.statSync(filePath);
  
  if (stats.size > maxSize) {
    throw new Error(`File too large: ${(stats.size / 1024 / 1024).toFixed(2)}MB (max: ${maxSize / 1024 / 1024}MB)`);
  }
  
  if (!filePath.toLowerCase().endsWith('.pdf')) {
    throw new Error('File must be a PDF');
  }
  
  return true;
}

/**
 * Save processed document metadata
 */
export function saveProcessedMetadata(metadata, outputDir) {
  const filename = `${metadata.filename}_${Date.now()}.json`;
  const outputPath = path.join(outputDir, filename);
  
  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
  console.log(`💾 Metadata saved: ${filename}`);
  
  return outputPath;
}