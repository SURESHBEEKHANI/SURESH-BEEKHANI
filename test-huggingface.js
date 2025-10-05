import dotenv from 'dotenv';
dotenv.config();

async function testHuggingFace() {
    console.log('Testing HuggingFace API...\n');
    console.log('API Key:', process.env.HUGGINGFACE_API_KEY ? 'Present' : 'Missing');
    console.log('API Key (first 10 chars):', process.env.HUGGINGFACE_API_KEY?.substring(0, 10));

    try {
        const response = await fetch('https://api-inference.huggingface.co/models/sentence-transformers/paraphrase-MiniLM-L6-v2', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                inputs: "Hello world",
                options: { wait_for_model: true }
            })
        });

        console.log('\nResponse Status:', response.status);
        console.log('Response Status Text:', response.statusText);

        const data = await response.json();
        console.log('\nResponse Data:', JSON.stringify(data, null, 2));

        if (Array.isArray(data) || (Array.isArray(data[0]) && data[0].length === 384)) {
            console.log('\n✅ HuggingFace API is working!');
            console.log('Embedding dimension:', Array.isArray(data[0]) ? data[0].length : data.length);
        } else {
            console.log('\n❌ Unexpected response format');
        }

    } catch (error) {
        console.error('\n❌ Error:', error.message);
    }
}

testHuggingFace();
