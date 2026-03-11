import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CATEGORIES = [
  { id: "all", label: "All Posts" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "chatbot", label: "Chatbots" },
  { id: "automation", label: "Automation" },
  { id: "nlp", label: "NLP" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "case-studies", label: "Case Studies" }
];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Insights & Resources</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore the latest trends, tutorials, and case studies in AI development
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-600">Blog posts coming soon...</p>
          <p className="text-sm text-gray-500 mt-2">
            Currently viewing: {CATEGORIES.find(c => c.id === activeCategory)?.label}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
