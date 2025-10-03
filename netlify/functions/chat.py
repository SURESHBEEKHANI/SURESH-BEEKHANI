import json
import logging
from datetime import datetime
from vector_store import vector_store
from llm_service import llm_service

logger = logging.getLogger(__name__)

def handler(event, context):
    """Netlify function handler for chat"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
    }

    if event['httpMethod'] == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    if event['httpMethod'] != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event['body'])
        message = body.get('message')

        if not message or not isinstance(message, str):
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Message is required'}),
            }

        # Retrieve relevant context
        contexts = vector_store.search(message)
        context = '\n\n'.join(contexts)

        # Generate response
        response = llm_service.generate_response(message, context)

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'response': response,
                'contextUsed': len(contexts) > 0,
                'numContexts': len(contexts),
                'timestamp': datetime.now().isoformat(),
            }),
        }

    except Exception as e:
        logger.error(f'Chat error: {e}')
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({
                'error': 'Internal server error',
                'message': 'Something went wrong processing your request.',
            }),
        }