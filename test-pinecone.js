import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';

dotenv.config();

async function testPinecone() {
    console.log('Testing Pinecone connection...');
    console.log('API Key:', process.env.PINECONE_API_KEY ? 'Present' : 'Missing');
    console.log('Index Name:', process.env.PINECONE_INDEX_NAME);

    try {
        const pc = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY,
        });

        const index = pc.index(process.env.PINECONE_INDEX_NAME);

        console.log('\nTesting index stats...');
        const stats = await index.describeIndexStats();
        console.log('Index stats:', JSON.stringify(stats, null, 2));

        // Test query with a simple vector
        console.log('\nTesting query...');
        const testVector = new Array(384).fill(0.1);
        const queryResponse = await index.query({
            vector: testVector,
            topK: 3,
            includeMetadata: true
        });

        console.log('Query results:', JSON.stringify(queryResponse, null, 2));

    } catch (error) {
        console.error('Error:', error.message);
        console.error('Full error:', error);
    }
}

testPinecone();
