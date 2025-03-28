
import React, { useState, useEffect, useRef } from 'react';
import { vectorService } from '../services/vectorService';
import { Loader2, Search, Brain } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface GenerativeAIProps {
  sampleContent?: {text: string, metadata?: Record<string, any>}[];
}

const GenerativeAI = ({ sampleContent }: GenerativeAIProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { toast } = useToast();
  const vectorServiceRef = useRef(vectorService);
  
  // Initial sample content for the vector database
  const defaultSampleContent = [
    { 
      text: "Machine learning models are trained on large datasets to make predictions and identify patterns.", 
      metadata: { category: "AI Basics", source: "Internal Knowledge Base" } 
    },
    { 
      text: "Deep learning is a subset of machine learning that uses neural networks with many layers.", 
      metadata: { category: "AI Basics", source: "Internal Knowledge Base" } 
    },
    { 
      text: "Natural Language Processing (NLP) allows computers to understand, interpret, and generate human language.", 
      metadata: { category: "NLP", source: "Research Papers" } 
    },
    { 
      text: "Computer vision systems can detect objects, recognize faces, and interpret visual information from images and videos.", 
      metadata: { category: "Computer Vision", source: "Technical Documentation" } 
    },
    { 
      text: "AI ethics involves ensuring fairness, transparency, and accountability in artificial intelligence systems.", 
      metadata: { category: "AI Ethics", source: "Best Practices Guide" } 
    },
    { 
      text: "Reinforcement learning is a type of machine learning where agents learn to make decisions by receiving rewards or penalties.", 
      metadata: { category: "Learning Types", source: "Academic Research" } 
    }
  ];
  
  // Initialize the vector service
  useEffect(() => {
    const initializeService = async () => {
      setIsLoading(true);
      try {
        const success = await vectorServiceRef.current.initialize();
        if (success) {
          setIsInitialized(true);
          const contentToAdd = sampleContent || defaultSampleContent;
          await vectorServiceRef.current.addDocuments(contentToAdd);
          toast({
            title: "AI System Ready",
            description: "Vector database has been initialized with sample data.",
            duration: 3000,
          });
        }
      } catch (error) {
        console.error("Failed to initialize:", error);
        toast({
          title: "Initialization Failed",
          description: "Could not initialize the AI system. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeService();
  }, [toast, sampleContent]);
  
  // Handle search query
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Empty Query",
        description: "Please enter a search term.",
        variant: "destructive",
      });
      return;
    }
    
    if (!isInitialized) {
      toast({
        title: "System Initializing",
        description: "Please wait while the AI system is being initialized.",
        variant: "destructive",
      });
      return;
    }
    
    setIsFetching(true);
    try {
      const searchResults = await vectorServiceRef.current.similaritySearch(query);
      setResults(searchResults);
      
      if (searchResults.length === 0) {
        toast({
          title: "No Results",
          description: "No matching results found. Try a different query.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      toast({
        title: "Search Failed",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsFetching(false);
    }
  };
  
  return (
    <div className="enhanced-card p-6 w-full">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="h-8 w-8 text-primary" />
        <h3 className="text-2xl font-display font-semibold">AI Knowledge Base</h3>
      </div>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about AI..."
            className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={isLoading || !isInitialized}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
            disabled={isLoading || isFetching || !isInitialized}
          >
            {isFetching ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <Search className="h-6 w-6" />
            )}
          </button>
        </div>
      </form>
      
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-8">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
          <p className="text-foreground/70">Initializing AI system...</p>
        </div>
      )}
      
      {!isLoading && isInitialized && results.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Search Results:</h4>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="bg-secondary/30 rounded-md p-4">
                <p className="text-foreground">{result.pageContent}</p>
                {result.metadata && Object.keys(result.metadata).length > 0 && (
                  <div className="mt-2 pt-2 border-t border-border/30">
                    <p className="text-sm text-foreground/60">
                      {Object.entries(result.metadata).map(([key, value]) => (
                        <span key={key} className="mr-3">
                          <span className="font-medium">{key}:</span> {String(value)}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {!isLoading && isInitialized && results.length === 0 && (
        <div className="text-center py-8 text-foreground/70">
          <p>Search for AI-related topics to get information from the knowledge base.</p>
        </div>
      )}
    </div>
  );
};

export default GenerativeAI;
