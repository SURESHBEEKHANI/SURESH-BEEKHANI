import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

async function testGroqConnection() {
    console.log('Testing Groq connection...');
    console.log('API Key:', process.env.GROQ_API_KEY ? 'Present' : 'Missing');

    try {
        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });

        console.log('\nTesting DeepSeek R1 Distill Llama 70B model...');
        
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "user", content: "Say hello in one sentence" }
            ],
            model: "deepseek-r1-distill-llama-70b",
            temperature: 0.6,
            max_completion_tokens: 100,
            top_p: 0.95,
            stream: false,
            stop: null
        });

        console.log('\n✅ Success! Response:');
        console.log(chatCompletion.choices[0]?.message?.content);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        console.error('Error details:', error);
        
        // Try alternative model
        console.log('\n\nTrying alternative model (gemma2-9b-it)...');
        try {
            const groq = new Groq({
                apiKey: process.env.GROQ_API_KEY
            });

            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: "user", content: "Say hello in one sentence" }
                ],
                model: "gemma2-9b-it",
                temperature: 0.6,
                max_completion_tokens: 100,
                top_p: 0.95,
                stream: false,
                stop: null
            });

            console.log('\n✅ Alternative model works! Response:');
            console.log(chatCompletion.choices[0]?.message?.content);
            console.log('\n💡 Suggestion: Use gemma2-9b-it model instead');

        } catch (altError) {
            console.error('\n❌ Alternative model also failed:', altError.message);
        }
    }
}

testGroqConnection();
