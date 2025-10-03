from groq import Groq
import logging
from config import Config

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self):
        self.config = Config()
        self.client = Groq(api_key=self.config.GROQ_API_KEY)
    
    def generate_response(self, query: str, context: str) -> str:
        """Generate response using Groq LLM"""
        system_prompt = f"""
You are Suresh's AI Assistant, representing AI developer and consultant Suresh Beekhani.

CONTEXT:
{context}

INSTRUCTIONS:
- Use the context to answer questions about Suresh's work, projects, and services.
- If context is missing or irrelevant, give general but accurate AI/ML insights.
- Be professional, approachable, and concise.
- Always stay in character as Suresh's AI Assistant.

FORMAT:
Answer: [clear response]
Context Used: [summary or "No relevant context"]
Next Steps: [optional suggestions]
"""

        try:
            completion = self.client.chat.completions.create(
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": query}
                ],
                model=self.config.LLM_MODEL,
                temperature=self.config.TEMPERATURE,
                max_tokens=self.config.MAX_TOKENS
            )
            
            return completion.choices[0].message.content or "I encountered an issue generating a response. Please try again."
            
        except Exception as e:
            logger.error(f"Error generating response with Groq: {e}")
            return "I'm having trouble generating a response right now. Please try again shortly."

# Global instance
llm_service = LLMService()