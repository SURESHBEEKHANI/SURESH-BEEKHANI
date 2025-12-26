import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight, ChevronDown, Search } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

// Default sample blogs
const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    excerpt: 'Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnosis to treatment planning.',
    category: 'Healthcare AI',
    date: 'Dec 5, 2025',
    readTime: '5 min read',
    image: '/image/ai-healthcare.jpg',
    author: 'Dr. Sarah Johnson'
  },
  {
    id: 2,
    title: 'Machine Learning Models for Early Disease Detection',
    excerpt: 'Learn about cutting-edge ML algorithms that can predict diseases before symptoms appear.',
    category: 'Machine Learning',
    date: 'Dec 3, 2025',
    readTime: '7 min read',
    image: '/image/ml-detection.jpg',
    author: 'Michael Chen'
  },
  {
    id: 3,
    title: 'Building Intelligent Chatbots for Patient Support',
    excerpt: 'A comprehensive guide to developing AI-powered chatbots that enhance patient engagement.',
    category: 'Chatbots',
    date: 'Nov 28, 2025',
    readTime: '6 min read',
    image: '/image/chatbot.jpg',
    author: 'Emily Rodriguez'
  },
];

const categories = [
  'AI Development',
  'Chatbot Development',
  'ChatGPT Integration',
  'Machine & Deep Learning',
  'Computer Vision',
  'Predictive Modeling',
  'Natural Language Processing',
  'AI Automation'
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get blogs from localStorage or use default
  const blogPosts = (() => {
    const saved = localStorage.getItem('blogPosts');
    const adminBlogs = saved ? JSON.parse(saved) : [];
    // Combine admin blogs with default blogs
    return [...adminBlogs, ...defaultBlogPosts];
  })();

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Stay Up-To-Date With Our Latest Blog Posts
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and updates on AI, machine learning, and healthcare technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F0F9FF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            {/* Search Box - Left Side */}
            <div className="relative w-full sm:w-auto max-w-sm">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-xl font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent placeholder:text-gray-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.05) 0%, rgba(0, 194, 203, 0.05) 50%, rgba(113, 239, 163, 0.05) 100%)',
                  }}
                />
              </div>
            </div>

            {/* Category Select - Right Side */}
            <div className="relative w-full sm:w-auto max-w-sm">
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700 font-medium pointer-events-none z-10">
                  {selectedCategory || 'Select Category'}
                </div>
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent [&>option]:bg-white [&>option]:text-gray-900"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.05) 0%, rgba(0, 194, 203, 0.05) 50%, rgba(113, 239, 163, 0.05) 100%)',
                    color: 'transparent'
                  }}
                >
                  <option value="" className="bg-white text-gray-900">All</option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-white text-gray-900">
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F0F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.1) 0%, rgba(0, 194, 203, 0.1) 50%, rgba(113, 239, 163, 0.1) 100%)'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📝</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20"
                      style={{
                        background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 100%)'
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <button 
                      className="flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                      style={{ color: '#1E5AFF' }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-500">No blog posts found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
