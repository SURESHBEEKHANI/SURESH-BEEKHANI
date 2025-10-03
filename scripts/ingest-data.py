#!/usr/bin/env python3
"""
Script to ingest knowledge data into Pinecone via Netlify function
"""
import json
import requests
import os
from pathlib import Path

NETLIFY_SITE_URL = os.getenv('URL', 'http://localhost:8888')

def load_knowledge_data(file_path: str) -> list:
    """Load knowledge data from JSON file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"📚 Loaded {len(data)} documents from {file_path}")
        return data
    except FileNotFoundError:
        print(f"❌ Knowledge file not found: {file_path}")
        raise
    except json.JSONDecodeError as e:
        print(f"❌ Invalid JSON in {file_path}: {e}")
        raise

def main():
    """Main ingestion function"""
    try:
        print("🚀 Starting data ingestion...")
        
        # Load the knowledge data
        data_path = Path(__file__).parent.parent / "data" / "suresh-knowledge.json"
        documents = load_knowledge_data(str(data_path))
        
        # Call the ingestion function
        response = requests.post(
            f"{NETLIFY_SITE_URL}/.netlify/functions/ingest",
            headers={'Content-Type': 'application/json'},
            json={'documents': documents}
        )
        
        if not response.ok:
            error_text = response.text
            raise Exception(f"Ingestion failed: {response.status_code} - {error_text}")
        
        result = response.json()
        print("✅ Ingestion completed successfully!")
        print(f"📊 Results: {result}")
        
    except Exception as e:
        print(f"❌ Ingestion failed: {e}")
        exit(1)

if __name__ == "__main__":
    main()