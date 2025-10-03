import json
import logging
from vector_store import vector_store

logger = logging.getLogger(__name__)

def handler(event, context):
    """Netlify function handler for document ingestion"""
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
        documents = body.get('documents')

        if not documents or not isinstance(documents, list):
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Documents array is required'}),
            }

        # Ingest documents
        result = vector_store.upsert_documents(documents)

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'message': 'Documents ingested successfully',
                'success': True,
                **result
            }),
        }

    except Exception as e:
        logger.error(f'Ingest error: {e}')
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({
                'error': 'Failed to ingest documents',
                'message': str(e),
                'success': False
            }),
        }