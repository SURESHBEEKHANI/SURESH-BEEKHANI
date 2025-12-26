import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus, Trash2, Edit } from 'lucide-react';

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

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('blogPosts');
    return saved ? JSON.parse(saved) : [];
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: '',
    image: '',
    author: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let updatedBlogs;
    if (editingBlog) {
      // Update existing blog
      updatedBlogs = blogs.map(blog => 
        blog.id === editingBlog.id 
          ? { ...formData, id: editingBlog.id }
          : blog
      );
    } else {
      // Create new blog
      const newBlog: BlogPost = {
        ...formData,
        id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1
      };
      updatedBlogs = [...blogs, newBlog];
    }
    
    setBlogs(updatedBlogs);
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
    
    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      category: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '',
      image: '',
      author: ''
    });
    setIsFormOpen(false);
    setEditingBlog(null);
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData(blog);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(blogs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blog-posts.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F0F9FF]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Blog Admin Panel
            </h1>
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all"
              >
                Export Blogs
              </button>
              <button
                onClick={() => {
                  setIsFormOpen(true);
                  setEditingBlog(null);
                  setFormData({
                    title: '',
                    excerpt: '',
                    category: '',
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    readTime: '',
                    image: '',
                    author: ''
                  });
                }}
                className="px-6 py-3 text-white rounded-xl hover:shadow-xl transition-all flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 50%, #71EFA3 100%)' }}
              >
                <Plus className="w-5 h-5" />
                Create New Blog
              </button>
            </div>
          </div>

          {/* Blog Form */}
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-200/50"
            >
              <h2 className="text-2xl font-bold mb-6">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="Enter blog title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Author *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="Author name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Read Time *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="e.g., 5 min read"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="e.g., Dec 6, 2025"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Image URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="/image/blog-image.jpg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                    placeholder="Brief description of the blog post"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-8 py-3 text-white rounded-xl hover:shadow-xl transition-all"
                    style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 50%, #71EFA3 100%)' }}
                  >
                    {editingBlog ? 'Update Blog' : 'Create Blog'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsFormOpen(false);
                      setEditingBlog(null);
                    }}
                    className="px-8 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Blog List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              All Blog Posts ({blogs.length})
            </h2>
            {blogs.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-gray-200/50">
                <p className="text-gray-500 text-lg">No blog posts yet. Create your first blog post!</p>
              </div>
            ) : (
              blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200/50 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 100%)' }}
                        >
                          {blog.category}
                        </span>
                        <span className="text-sm text-gray-500">{blog.date}</span>
                        <span className="text-sm text-gray-500">{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-2">{blog.excerpt}</p>
                      <p className="text-sm text-gray-500">By {blog.author}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogAdmin;
