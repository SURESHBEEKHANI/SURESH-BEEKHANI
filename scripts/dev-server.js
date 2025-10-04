// Development server with Netlify functions support
import dotenv from 'dotenv';

// Load environment variables FIRST before any other imports
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { handler as chatHandler } from '../netlify/functions/chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Netlify functions endpoint
app.post('/.netlify/functions/chat', async (req, res) => {
    try {
        const event = {
            httpMethod: req.method,
            body: JSON.stringify(req.body),
            headers: req.headers
        };
        
        const result = await chatHandler(event, {});
        
        res.status(result.statusCode);
        Object.entries(result.headers || {}).forEach(([key, value]) => {
            res.setHeader(key, value);
        });
        res.send(result.body);
    } catch (error) {
        console.error('Function error:', error);
        res.status(500).json({ error: 'Function execution failed' });
    }
});

// Handle OPTIONS for CORS
app.options('/.netlify/functions/chat', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.status(200).end();
});

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all handler for SPA routing (must be last)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Development server running at http://localhost:${PORT}`);
    console.log(`🤖 Chatbot functions are now available locally!`);
    console.log(`📡 Functions endpoint: http://localhost:${PORT}/.netlify/functions/chat`);
});