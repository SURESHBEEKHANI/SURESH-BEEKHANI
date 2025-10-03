#!/usr/bin/env python3
"""
Test script for Python Netlify functions
"""
import requests
import json
import os

NETLIFY_SITE_URL = os.getenv('URL', 'http://localhost:8888')

def test_chat_function():
    """Test the chat function"""
    print("🧪 Testing Python Chat Function")
    print("=" * 40)
    
    test_messages = [
        "Who is Suresh Beekhani?",
        "What services does Suresh offer?",
        "How can I contact Suresh?",
        "Tell me about AI projects"
    ]
    
    for i, message in enumerate(test_messages, 1):
        print(f"\n📝 Test {i}: {message}")
        print("-" * 30)
        
        try:
            response = requests.post(
                f"{NETLIFY_SITE_URL}/.netlify/functions/chat",
                headers={'Content-Type': 'application/json'},
                json={'message': message},
                timeout=30
            )
            
            if response.ok:
                data = response.json()
                print(f"✅ Response: {data['response'][:100]}...")
                print(f"📊 Context used: {data.get('contextUsed', False)}")
            else:
                print(f"❌ Error: {response.status_code} - {response.text}")
                
        except Exception as e:
            print(f"❌ Exception: {e}")

def test_embed_function():
    """Test the embedding function"""
    print("\n🧪 Testing Python Embedding Function")
    print("=" * 40)
    
    test_text = "Suresh Beekhani is an AI developer"
    
    try:
        response = requests.post(
            f"{NETLIFY_SITE_URL}/.netlify/functions/embed-local",
            headers={'Content-Type': 'application/json'},
            json={'text': test_text},
            timeout=30
        )
        
        if response.ok:
            data = response.json()
            print(f"✅ Embedding generated successfully")
            print(f"📊 Dimensions: {data['dimensions']}")
            print(f"📊 Model: {data['model']}")
        else:
            print(f"❌ Error: {response.status_code} - {response.text}")
            
    except Exception as e:
        print(f"❌ Exception: {e}")

def main():
    """Main test function"""
    print("🚀 Testing Python Netlify Functions")
    print("=" * 50)
    
    test_chat_function()
    test_embed_function()
    
    print("\n🎉 Testing completed!")

if __name__ == "__main__":
    main()