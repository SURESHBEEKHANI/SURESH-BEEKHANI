import dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

console.log('🔍 COMPLETE SYSTEM DIAGNOSTIC\n');
console.log('=' .repeat(50));

// 1. Check Environment Variables
console.log('\n1️⃣ ENVIRONMENT VARIABLES:');
console.log('GROQ_API_KEY:', process.env.GROQ_API_KEY ? '✅ Present' : '❌ Missing');
console.log('PINECONE_API_KEY:', process.env.PINECONE_API_KEY ? '✅ Present' : '❌ Missing');
console.log('HUGGINGFACE_API_KEY:', process.env.HUGGINGFACE_API_KEY ? '✅ Present' : '❌ Missing');

// 2. Test Groq Connection
console.log('\n2️⃣ TESTING GROQ API:');
try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    
    console.log('Sending test request to DeepSeek model...');
    const startTime = Date.now();
    
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            { role: "user", content: "Say hello in one short sentence" }
        ],
        model: "deepseek-r1-distill-llama-70b",
        temperature: 0.6,
        max_completion_tokens: 100,
        top_p: 0.95,
        stream: false,
        stop: null
    });

    const duration = Date.now() - startTime;
    const response = chatCompletion.choices[0]?.message?.content;
    
    console.log('✅ Groq API Working!');
    console.log('Response time:', duration + 'ms');
    console.log('Response:', response);
    
} catch (error) {
    console.log('❌ Groq API Failed!');
    console.log('Error:', error.message);
    if (error.status) console.log('Status:', error.status);
    if (error.code) console.log('Code:', error.code);
}

// 3. Test Netlify Function
console.log('\n3️⃣ TESTING NETLIFY FUNCTION:');
console.log('Make sure netlify dev is running on port 8888');
console.log('Then run: node test-netlify-function.js');

// 4. Summary
console.log('\n' + '='.repeat(50));
console.log('📊 DIAGNOSTIC COMPLETE');
console.log('\nIf Groq API works but chatbot doesn\'t:');
console.log('1. Check terminal where netlify dev is running');
console.log('2. Look for error messages when you send a chat');
console.log('3. Share those errors with me');
console.log('\nIf Groq API fails:');
console.log('1. Check your API key at https://console.groq.com/');
console.log('2. Make sure you have credits/quota available');
console.log('3. Try a different model (gemma2-9b-it)');
