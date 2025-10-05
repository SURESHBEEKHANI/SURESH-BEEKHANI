import { Pinecone } from '@pinecone-database/pinecone';
import { embeddingService } from '../netlify/functions/embeddings.js';
import dotenv from 'dotenv';

dotenv.config();

// Enhanced documents from Portfolio + Solutions + Profile
const documents = [
    // --- ABOUT / APPROACH ---
    {
        id: 'about-suresh',
        text: `Suresh Beekhani is an AI/ML Engineer and Data Scientist specializing in Generative AI.
    With 4+ years of experience, he has completed 25+ projects and built 40+ AI models.
    His expertise spans ML, Deep Learning, Computer Vision, and Generative AI.
    Services include AI Development, Chatbot Development, ChatGPT Integration,
    Predictive Modeling, Computer Vision, and NLP.`,
        metadata: { type: 'about', category: 'profile' }
    },
    {
        id: 'approach',
        text: `Suresh's approach combines technical accuracy with creative problem-solving to deliver
    scalable, innovative, and privacy-first AI solutions. He focuses on understanding business needs,
    designing appropriate architectures, and implementing production-ready systems with ongoing support.`,
        metadata: { type: 'about', category: 'approach' }
    },

    // --- SERVICES ---
    {
        id: 'services-overview',
        text: `Core AI Services:
    - AI Chatbot Development: NLP-powered multi-language bots with business integration
    - Predictive Analytics & Modeling: Forecasting, risk assessment, anomaly detection
    - Natural Language Processing: Text analysis, sentiment analysis, and LLM integration
    - Computer Vision: Object detection, segmentation, OCR, facial recognition, video analysis
    - Generative AI: ChatGPT implementations, AI text/image generation, creative AI`,
        metadata: { type: 'services', category: 'overview' }
    },

    // --- PROJECTS ---
    {
        id: 'project-law-gpt',
        text: `AI-Driven Law GPT: Advanced legal assistant for drafting documents, contracts,
    and case analysis. Reduced preparation time by 70%. Built with GPT-4, LangChain, React, Python.`,
        metadata: { type: 'project', category: 'legal-tech' }
    },
    {
        id: 'project-fraud-detection',
        text: `Real-Time Fraud Detection: AI system analyzing transactions instantly.
    Achieved 95% accuracy. Prevented financial losses worth millions. Built with TensorFlow, Kafka.`,
        metadata: { type: 'project', category: 'fintech' }
    },
    {
        id: 'project-patient-diagnostics',
        text: `Patient Diagnostic System: AI chatbot for preliminary disease assessment,
    improving diagnostic accuracy and reducing patient wait time by 50%.`,
        metadata: { type: 'project', category: 'healthtech' }
    },
    {
        id: 'project-contract-analyzer',
        text: `AI Legal Contract Analyzer: Summarizes contracts, detects risks and compliance issues.
    Improved review efficiency by 3x.`,
        metadata: { type: 'project', category: 'legal-tech' }
    },
    {
        id: 'project-travel-assistant',
        text: `Personalized Travel Assistant: Builds real-time itineraries based on preferences,
    budget, and weather. Increased customer satisfaction by 60%.`,
        metadata: { type: 'project', category: 'travel' }
    },
    {
        id: 'project-early-disease-detection',
        text: `Early Disease Detection AI: Combines imaging data + predictive analytics to detect diseases
    at early stages. Increased accuracy by 25%.`,
        metadata: { type: 'project', category: 'healthtech' }
    },
    {
        id: 'project-learning-ai',
        text: `Personalized Learning AI: Adaptive tutoring system tailoring lessons to learner’s style.
    Improved outcomes by 45%.`,
        metadata: { type: 'project', category: 'edtech' }
    },
    {
        id: 'project-solar-forecasting',
        text: `Solar Output Forecasting: Predicts solar energy output based on weather and system health.
    Enhanced optimization and reduced power waste.`,
        metadata: { type: 'project', category: 'greentech' }
    },
    {
        id: 'project-shelf-restocking',
        text: `Dynamic Shelf Restocking: Smart retail AI predicting stock depletion and automating restocks.
    Reduced inventory waste by 30%.`,
        metadata: { type: 'project', category: 'retail' }
    },
    {
        id: 'project-recommendation-ai',
        text: `Product Recommendation AI: Personalized product suggestions based on user behavior.
    Increased order value by 20%.`,
        metadata: { type: 'project', category: 'ecommerce' }
    },
    {
        id: 'project-radiology-generator',
        text: `Radiology Report Generator: AI tool generating comprehensive radiology reports.
    Cut time from 30 minutes to under 5 minutes.`,
        metadata: { type: 'project', category: 'healthtech' }
    },
    {
        id: 'project-privacy-ai',
        text: `Federated Privacy Compliance AI: Privacy-preserving collaborative AI training.
    Ensured GDPR-compliant multi-institution collaboration.`,
        metadata: { type: 'project', category: 'privacy' }
    },

    // --- INDUSTRIES ---
    {
        id: 'industries-healthtech',
        text: `HealthTech: HIPAA-compliant medical imaging, diagnostics AI, chatbots,
    and predictive analytics for better patient outcomes.`,
        metadata: { type: 'industry', category: 'healthtech' }
    },
    {
        id: 'industries-fintech',
        text: `FinTech: AI for fraud detection, credit scoring, algorithmic trading,
    risk assessment, and secure financial chatbots.`,
        metadata: { type: 'industry', category: 'fintech' }
    },
    {
        id: 'industries-edtech',
        text: `EdTech: Personalized learning platforms, intelligent tutoring,
    automated grading, and engagement-enhancing chatbots.`,
        metadata: { type: 'industry', category: 'edtech' }
    },
    {
        id: 'industries-retail',
        text: `Retail & E-Commerce: AI for recommendation engines, demand forecasting,
    customer sentiment, inventory optimization, and visual search.`,
        metadata: { type: 'industry', category: 'retail' }
    },
    {
        id: 'industries-greentech',
        text: `GreenTech: AI for renewable energy optimization,
    solar forecasting, and sustainable automation.`,
        metadata: { type: 'industry', category: 'greentech' }
    },

    // --- TOOLS / TECH ---
    {
        id: 'tools-frameworks',
        text: `Tools & Frameworks: TensorFlow, PyTorch, Scikit-learn, OpenCV, YOLOv5, Detectron2,
    LangChain, HuggingFace, FastAPI, GPT models, React, Python, Node.js, cloud infra.`,
        metadata: { type: 'technical', category: 'tools' }
    },

    // --- EXPERIENCE ---
    {
        id: 'experience-upwork',
        text: `Upwork (2021–Present): Delivered 25+ AI solutions with 99% client satisfaction.`,
        metadata: { type: 'experience', category: 'freelance' }
    },
    {
        id: 'experience-atliq',
        text: `AtliQ (2022–2024): Developed 15+ production models, improved accuracy by 40%.`,
        metadata: { type: 'experience', category: 'corporate' }
    },
    {
        id: 'experience-avanza',
        text: `Avanza Solutions (2020–2021): Implemented 10+ ML models and mentored junior developers.`,
        metadata: { type: 'experience', category: 'corporate' }
    },
    {
        id: 'experience-techdata',
        text: `TechData Labs (2019–2020): Built predictive models and dashboards for analytics.`,
        metadata: { type: 'experience', category: 'internship' }
    },

    // --- CONTACT ---
    {
        id: 'contact',
        text: `Contact Suresh Beekhani
    Email: sureshbeekhani@gmail.com
    Phone: +92 3401213187
    Website: https://sureshbeekhani.netlify.app/
    Location: Karachi, Pakistan
    Available: Remote work worldwide`,
        metadata: { type: 'contact', category: 'info' }
    }
];

async function ingestDocuments() {
    console.log('🚀 Starting document ingestion to Pinecone...\n');

    try {
        // Initialize Pinecone
        const pc = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY
        });

        const index = pc.index(process.env.PINECONE_INDEX_NAME || 'towering').namespace('pdf');

        console.log('✅ Connected to Pinecone');
        console.log(`📊 Ingesting ${documents.length} documents...\n`);

        // Prepare vectors using the same embedding service
        const vectors = [];
        for (const doc of documents) {
            console.log(`  Generating embedding for: ${doc.id}...`);
            const embedding = await embeddingService.getEmbedding(doc.text);
            vectors.push({
                id: doc.id,
                values: embedding,
                metadata: {
                    ...doc.metadata,
                    text: doc.text
                }
            });
        }

        // Upsert to Pinecone
        console.log('\n📤 Uploading to Pinecone...');
        await index.upsert(vectors);

        console.log('✅ Successfully uploaded all documents to Pinecone!\n');
        console.log('📋 Uploaded documents:');
        documents.forEach(doc => {
            console.log(`   - ${doc.id}: ${doc.text.substring(0, 60)}...`);
        });

        // Verify
        console.log('\n🔍 Verifying upload...');
        const stats = await pc.index(process.env.PINECONE_INDEX_NAME || 'towering').describeIndexStats();
        console.log('📊 Index stats:', JSON.stringify(stats, null, 2));

        console.log('\n✅ RAG pipeline is now ready!');
        console.log('💡 Try asking: "What AI services do you offer?" or "Tell me about your projects"');

    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error(error);
    }
}

ingestDocuments();
