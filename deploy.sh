#!/bin/bash

# 🚀 Deployment Script for Suresh Beekhani's RAG Portfolio
# This script helps deploy both frontend and backend

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm"
        exit 1
    fi
    
    print_status "Dependencies check passed"
}

# Install dependencies
install_deps() {
    print_status "Installing dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Build frontend
build_frontend() {
    print_status "Building frontend..."
    npm run build:prod
    if [ $? -eq 0 ]; then
        print_status "Frontend built successfully"
    else
        print_error "Frontend build failed"
        exit 1
    fi
}

# Run data ingestion
run_ingestion() {
    print_warning "Running data ingestion..."
    print_warning "Make sure you have set up your .env file with Pinecone and Groq API keys"
    
    read -p "Do you want to run data ingestion? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        npm run ingest
        if [ $? -eq 0 ]; then
            print_status "Data ingestion completed successfully"
        else
            print_error "Data ingestion failed"
            exit 1
        fi
    else
        print_warning "Skipping data ingestion. You can run it later with: npm run ingest"
    fi
}

# Main deployment function
main() {
    echo "🎯 RAG Portfolio Deployment Script"
    echo "=================================="
    
    check_dependencies
    install_deps
    build_frontend
    run_ingestion
    
    echo ""
    echo "🎉 Deployment preparation completed!"
    echo ""
    echo "Next steps:"
    echo "1. Deploy backend to Railway/Render"
    echo "2. Deploy frontend to Netlify"
    echo "3. Update backend URL in src/services/ragApi.ts"
    echo "4. Test your deployment"
    echo ""
    echo "For detailed instructions, see DEPLOYMENT.md"
}

# Run main function
main
