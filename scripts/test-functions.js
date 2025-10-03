// Test script for Netlify functions
import fetch from 'node-fetch';

const BASE_URL = process.env.URL || 'http://localhost:8888';

async function testChatFunction() {
  console.log('🧪 Testing chat function...');
  
  try {
    const response = await fetch(`${BASE_URL}/.netlify/functions/test-chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Tell me about your AI services'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Chat function working!');
    console.log('Response:', data.response);
    console.log('Context used:', data.contextUsed);
    
  } catch (error) {
    console.error('❌ Chat function failed:', error.message);
  }
}

async function testCORS() {
  console.log('🧪 Testing CORS...');
  
  try {
    const response = await fetch(`${BASE_URL}/.netlify/functions/test-chat`, {
      method: 'OPTIONS',
    });

    if (response.ok) {
      console.log('✅ CORS working!');
    } else {
      console.log('⚠️ CORS might have issues');
    }
    
  } catch (error) {
    console.error('❌ CORS test failed:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting function tests...\n');
  
  await testCORS();
  console.log('');
  await testChatFunction();
  
  console.log('\n✨ Tests completed!');
}

runTests();