// Simple development server for testing Netlify functions locally
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Import the test-chat function
async function loadTestChatFunction() {
    try {
        const { handler } = await import('../netlify/functions/test-chat.js');
        return handler;
    } catch (error) {
        console.error('Error loading test-chat function:', error);
        return null;
    }
}

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Netlify function endpoint
app.all('/.netlify/functions/test-chat', async (req, res) => {
    const handler = await loadTestChatFunction();

    if (!handler) {
        return res.status(500).json({ error: 'Function not available' });
    }

    // Convert Express request to Netlify event format
    const event = {
        httpMethod: req.method,
        headers: req.headers,
        body: JSON.stringify(req.body),
        queryStringParameters: req.query,
    };

    try {
        const result = await handler(event);

        // Set headers
        if (result.headers) {
            Object.entries(result.headers).forEach(([key, value]) => {
                res.set(key, value);
            });
        }

        res.status(result.statusCode || 200);

        if (result.body) {
            try {
                const body = JSON.parse(result.body);
                res.json(body);
            } catch {
                res.send(result.body);
            }
        } else {
            res.end();
        }
    } catch (error) {
        console.error('Function execution error:', error);
        res.status(500).json({ error: 'Function execution failed' });
    }
});

// Catch-all handler for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Development server running at http://localhost:${PORT}`);
    console.log(`📡 Netlify functions available at http://localhost:${PORT}/.netlify/functions/`);
    console.log(`🤖 Test chat function: http://localhost:${PORT}/.netlify/functions/test-chat`);
});