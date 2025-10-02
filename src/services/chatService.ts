// Simple chatbot responses without RAG/LLM dependencies
export interface ChatResponse {
    answer: string;
    suggestions?: string[];
}

// Predefined responses for common questions
const responses: Record<string, string> = {
    "hello": "Hello! I'm here to help you learn about Suresh's AI/ML expertise and services. What would you like to know?",
    "hi": "Hi there! How can I assist you today?",
    "services": "Suresh offers AI/ML services including Machine Learning, Natural Language Processing, Computer Vision, and AI Chatbot development. Which interests you?",
    "experience": "Suresh has extensive experience in AI/ML engineering, developing scalable solutions across healthcare, finance, and other industries.",
    "portfolio": "Suresh has worked on projects like healthcare diagnostics, fraud detection, and personalized learning systems. Want to know more about any specific project?",
    "contact": "You can reach Suresh through the contact form on this website or connect via LinkedIn. He's always open to discussing AI/ML opportunities.",
    "skills": "Suresh specializes in Python, TensorFlow, PyTorch, React, Node.js, and cloud platforms like AWS and Azure.",
    "projects": "Recent projects include AI-powered diagnostic systems, real-time fraud detection, and personalized learning platforms.",
    "default": "That's a great question! For detailed information, I'd recommend using the contact form to reach out to Suresh directly."
};

const suggestions = [
    "Tell me about your services",
    "Show me your portfolio",
    "What's your experience?",
    "How can I contact you?",
    "What technologies do you use?"
];

export const chatService = {
    getResponse(question: string): ChatResponse {
        const lowerQuestion = question.toLowerCase();
        let answer = responses.default;

        // Simple keyword matching
        for (const [key, response] of Object.entries(responses)) {
            if (lowerQuestion.includes(key)) {
                answer = response;
                break;
            }
        }

        return {
            answer,
            suggestions: suggestions.slice(0, 3)
        };
    }
};