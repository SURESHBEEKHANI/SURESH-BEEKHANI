// Test script for JavaScript Netlify functions
import { handler } from '../netlify/functions/chat.js';

async function testChatFunction() {
    console.log('🧪 Testing JavaScript chat function...');
    
    const testEvent = {
        httpMethod: 'POST',
        body: JSON.stringify({
            message: 'Tell me about your AI services'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const result = await handler(testEvent, {});
        console.log('✅ Function executed successfully!');
        console.log('Status:', result.statusCode);
        
        if (result.body) {
            const response = JSON.parse(result.body);
            console.log('Response:', response.response);
            console.log('Context used:', response.contextUsed);
            console.log('Number of contexts:', response.numContexts);
        }
    } catch (error) {
        console.error('❌ Function failed:', error);
    }
}

// Run the test
testChatFunction();