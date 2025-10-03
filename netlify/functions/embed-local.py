import json
import logging
from embeddings import embedding_service

logger = logging.getLogger(__name__)

def handler(event, context):
    """Netlify function handler for local embeddings"""
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
        text = body.get('text')

        if not text or not isinstance(text, str):
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Text is required'}),
            }

        # Generate embedding
        embedding = embedding_service.get_embedding(text)

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'embedding': embedding,
                'dimensions': len(embedding),
                'model': 'all-MiniLM-L6-v2',
            }),
        }

    except Exception as e:
        logger.error(f'Embedding error: {e}')
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({
                'error': 'Failed to generate embedding',
                'message': str(e),
            }),
        }