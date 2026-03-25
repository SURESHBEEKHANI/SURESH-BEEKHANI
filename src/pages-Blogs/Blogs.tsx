import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { Loader2, ArrowLeft, Calendar, User, CheckCircle, Search, Eye, Plus, Minus, ChevronDown, List } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  { id: "all", label: "All Posts" },
  { id: "ai-development", label: "AI Development" },
  { id: "chatbot-development", label: "Chatbot Development" },
  { id: "chatgpt-integration", label: "ChatGPT Integration" },
  { id: "machine-deep-learning", label: "Machine & Deep Learning" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "predictive-modeling", label: "Predictive Modeling" },
  { id: "nlp", label: "Natural Language Processing" },
  { id: "ai-automation", label: "AI Automation" }
];

interface Blog {
  id: string;
  title: string;
  content: string;
  image_url: string;
  category: string;
  status: "draft" | "published";
  created_at: string;
  views?: number;
}

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [isSidebarSubmitting, setIsSidebarSubmitting] = useState(false);
  const [isSidebarSubscribed, setIsSidebarSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(true);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchPublishedBlogs(searchQuery);
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchPublishedBlogs = async (search = "") => {
    try {
      setLoading(true);
      let query = supabase
        .from("blogs")
        .select("*")
        .eq("status", "published");

      if (search) {
        query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching published blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSidebarSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = sidebarEmail.trim();

    if (!email) {
      toast.error('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSidebarSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([{ email }]);

      if (error) {
        if ((error as any).code === '23505') {
          toast.success('You’re already subscribed!', { description: "We've got you already." });
          setSidebarEmail('');
          return;
        }
        throw error;
      }

      toast.success('Subscribed successfully!', { description: 'Welcome to our AI community.' });
      setSidebarEmail('');
      setIsSidebarSubscribed(true);
    } catch (err) {
      console.error(err);
      toast.error('Could not subscribe right now. Please try again.');
    } finally {
      setIsSidebarSubmitting(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    return activeCategory === "all" || blog.category === activeCategory;
  });

  const incrementViewCount = async (blogId: string, currentViews: number = 0) => {
    try {
      await supabase
        .from("blogs")
        .update({ views: (currentViews || 0) + 1 })
        .eq("id", blogId);
    } catch (err) {
      console.warn("Could not increment view count:", err);
    }
  };

  const renderContent = (content: string) => {
    // Splits text around markdown images and headers
    const parts = content.split(/(!\[.*?\]\(.*?\)|#{1,6}\s+.+)/g);

    return parts.map((part, index) => {
      // Check for markdown headers
      const headerMatch = part.match(/^(#+)\s+(.*)$/);
      if (headerMatch) {
         const level = headerMatch[1].length;
         const text = headerMatch[2];
         const Tag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
         return <Tag key={index} id={text.toLowerCase().replace(/\s+/g, '-')} className="font-black text-[#0a0435] mt-12 mb-6 italic uppercase tracking-tight scroll-mt-32 border-l-4 border-[#ec4899] pl-6 transition-all hover:translate-x-2">{text}</Tag>;
      }

      const match = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <img
            key={index}
            src={match[2]}
            alt={match[1]}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-none shadow-lg my-12 border-l-4 border-[#ec4899]"
          />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const getTOC = (content: string) => {
    return content.split('\n')
      .filter(line => /^#+\s/.test(line))
      .map(line => {
        const level = (line.match(/^#+/) || [[]])[0].length;
        const text = line.replace(/^#+\s*/, '');
        return { text, level };
      });
  };

  if (selectedBlog) {
    const recentBlogs = blogs
      .filter(b => b.id !== selectedBlog.id)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 5);

    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar isDark={true} />

        <div className="max-w-7xl mx-auto px-4 pt-32 md:pt-40 pb-16 w-full grow">
          <div className="flex flex-col lg:flex-row gap-24">

            {/* Main Content Area */}
            {/* Main Content Area */}
            <article className="lg:w-[65%]">
              {/* Cover Image First */}
              {selectedBlog.image_url && (
                <img
                  src={selectedBlog.image_url}
                  alt={selectedBlog.title}
                  className="w-full h-auto max-h-[500px] object-cover rounded-none shadow-lg mb-12 border-t-8 border-[#ec4899]"
                />
              )}

              {/* Title and Metadata After Image */}
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-black text-[#0a0435] mb-8 leading-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm mb-12 border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-fuchsia-50/30 border border-fuchsia-100/50 text-[#0a0435] font-bold italic">
                    <Calendar size={18} className="text-[#ec4899]" />
                    {new Date(selectedBlog.created_at).toLocaleDateString('en-GB')}
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 text-gray-500 font-medium">
                    <Eye size={18} className="text-[#ec4899]" />
                    {selectedBlog.views || 0} Views
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 text-[#0a0435] font-bold">
                    <User size={18} className="text-[#ec4899]" />
                    Suresh Beekhani
                  </div>
                </div>
              </div>

              {/* Table of Contents Section */}
              {getTOC(selectedBlog.content).length > 0 && (
                <div className="mb-12 bg-white border border-gray-200 p-6 rounded-lg inline-block shadow-sm transition-all duration-300 overflow-hidden">
                  <div 
                    className="flex items-center justify-between gap-8 cursor-pointer group/title"
                    onClick={() => setIsTocOpen(!isTocOpen)}
                  >
                    <h3 className="text-lg font-bold text-[#0a0435] tracking-tight group-hover:text-[#ec4899] transition-colors">
                      Table of Contents
                    </h3>
                    <div className="flex items-center justify-center w-8 h-8 border border-gray-200 rounded-md text-gray-400 group-hover:text-[#ec4899] group-hover:border-[#ec4899]/50 transition-all">
                      <List size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {isTocOpen && (
                    <nav className="flex flex-col gap-3 mt-4 border-t border-gray-50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {getTOC(selectedBlog.content).map((header, i) => (
                        <a 
                          key={i}
                          href={`#${header.text.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-start gap-2 group transition-all"
                        >
                          <span className="text-sm font-semibold text-gray-400 w-4">
                            {i + 1}.
                          </span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#ec4899] group-hover:underline transition-colors decoration-1 underline-offset-4 decoration-dotted">
                            {header.text}
                          </span>
                        </a>
                      ))}
                    </nav>
                  )}
                </div>
              )}

              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap mb-16">
                {renderContent(selectedBlog.content)}
              </div>

              {/* FAQ Section */}
              <div className="mt-24 pt-16 border-t border-gray-100 mb-20">
                <div className="flex flex-col mb-12">
                  <h3 className="text-3xl md:text-4xl font-black text-[#0a0435] tracking-tight uppercase italic">
                    Frequently Asked <span className="text-[#ec4899]">Questions</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    { q: "How do you stay updated with the latest AI trends?", a: "We follow major AI research journals, participate in global conferences, and continuously test new models like GPT-4 and Claude to provide real-world insights." },
                    { q: "Can I request a specific topic for a future blog?", a: "Absolutely! We value community input. Feel free to use our newsletter form to subscribe and reply with any specific AI topics you'd like us to cover." },
                    { q: "Is the technical advice provided here suitable for beginners?", a: "Yes! While we dive deep into complex topics, we strive to explain the core concepts in a way that is accessible to both AI enthusiasts and industry leaders." },
                    { q: "How often do you publish new blog posts?", a: "We aim to release high-quality, deep-dive articles 2-3 times per week, along with periodic 'Flash Updates' on breaking AI news and industry shifts." },
                    { q: "Do you provide consulting based on these blog topics?", a: "Yes, Suresh Beekhani and the team offer specialized AI and Data Science consulting. You can reach out via the contact form on our main services page." }
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className={`border border-gray-200 rounded-md overflow-hidden bg-gray-50 transition-all duration-300 hover:border-[#ec4899]/50 hover:shadow-lg group ${openFaq === index ? 'shadow-lg border-[#ec4899]/50' : ''}`}
                      style={openFaq === index ? {
                        boxShadow: '0 4px 20px rgba(236, 72, 153, 0.2), 0 0 15px rgba(236, 72, 153, 0.15)'
                      } : {}}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className={`w-full p-5 flex items-center justify-between text-left transition-all duration-300 ${openFaq === index ? 'bg-gradient-to-r from-[#ec4899]/15 via-[#ec4899]/10 to-[#ec4899]/5' : 'hover:bg-[#ec4899]/5'}`}
                      >
                        <h4 className={`text-base font-semibold transition-all duration-300 group-hover:text-[#ec4899] ${openFaq === index ? 'text-[#ec4899]' : 'text-[#050729]'}`}>
                          {faq.q}
                        </h4>
                        <div className="flex-shrink-0 ml-4">
                          {openFaq === index ? (
                            <Minus className="h-4 w-4" style={{ color: '#ec4899' }} />
                          ) : (
                            <Plus className="h-4 w-4 text-gray-400 group-hover:text-[#ec4899]" />
                          )}
                        </div>
                      </button>

                      {openFaq === index && (
                        <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-300">
                          <div className="pt-3 border-t border-gray-200/50">
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
                <p className="text-gray-400 text-sm mb-6 italic">Thanks for reading!</p>
                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    window.scrollTo(0, 0);
                  }}
                  className="flex items-center gap-2 text-white px-10 py-4 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-bold tracking-wide"
                  style={{ background: 'linear-gradient(135deg, #f41eff 0%, #f755a9d9 50%, #ec4899 100%)' }}
                >
                  <ArrowLeft size={20} /> Back to Blogs
                </button>
              </div>
            </article>

            {/* Sidebar with Recent Posts */}
            {/* Sidebar with Recent Posts */}
            <aside className="lg:w-[35%] pl-20 border-l-2 border-[#f755a9d9]">
              <div className="sticky top-32 space-y-10">                {/* Newsletter Box */}
                <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 relative overflow-hidden">
                  <h3 className="text-xl font-bold text-[#0a0435] mb-6 relative z-10 leading-tight">
                    Join Our <span className="text-[#ec4899]">Newsletter</span> for AI Updates
                  </h3>

                  {isSidebarSubscribed ? (
                    <div className="bg-fuchsia-50/50 border border-fuchsia-100 p-6 rounded-none relative z-10 flex flex-col items-center text-center animate-in fade-in duration-700">
                      <CheckCircle className="text-[#ec4899] mb-3" size={32} />
                      <p className="text-sm text-[#0a0435] font-bold">Successfully Joined!</p>
                      <p className="text-xs text-gray-500 mt-2">Check your inbox soon for the latest AI insights.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSidebarSubscribe} className="relative z-10 space-y-4">
                      <div className="flex flex-col space-y-3">
                        <input
                          type="email"
                          value={sidebarEmail}
                          onChange={(e) => setSidebarEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0a0435] placeholder:text-gray-400 outline-none focus:border-[#ec4899]/50 transition-all text-sm rounded-none"
                        />
                        <button
                          type="submit"
                          disabled={isSidebarSubmitting}
                          className="w-full py-3 text-white font-extrabold shadow-lg hover:shadow-[#ec4899]/30 transition-all uppercase tracking-widest text-xs rounded-none disabled:opacity-50"
                          style={{ background: 'linear-gradient(90deg, #d928c1 0%, #f82c92 50%, #ec4899 100%)' }}
                        >
                          {isSidebarSubmitting ? <Loader2 className="animate-spin mx-auto" size={16} /> : "Subscribe"}
                        </button>
                      </div>
                    </form>
                  )}

                  {!isSidebarSubscribed && (
                    <p className="text-[10px] text-gray-400 mt-4 relative z-10 text-center uppercase tracking-tighter font-medium">
                      Get the latest AI insights delivered to your inbox
                    </p>
                  )}
                </div>


                {/* Recent Posts Section */}
                <div className="bg-white p-8 border border-gray-100 rounded-none shadow-sm">
                  <h3 className="text-2xl font-bold text-[#0a0435] mb-10 text-center">
                    Recent Posts
                  </h3>
                  <div className="space-y-10">
                    {recentBlogs.map(post => (
                      <div key={post.id} className="group cursor-pointer flex flex-col items-center text-center"
                        onClick={() => {
                          setSelectedBlog(post);
                          incrementViewCount(post.id, post.views);
                          window.scrollTo(0, 0);
                        }}>
                        {post.image_url && (
                          <div className="w-full h-40 mb-4 overflow-hidden rounded-none border-2 border-transparent group-hover:border-[#ec4899] transition-all">
                            <img src={post.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                        )}
                        <h4 className="text-lg font-bold text-[#0a0435] leading-snug group-hover:text-[#ec4899] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-2 font-medium">
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                    {recentBlogs.length === 0 && (
                      <p className="text-gray-400 text-sm italic text-center">No other posts yet.</p>
                    )}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 pt-32 relative overflow-hidden" style={{ background: '#0a0435' }}>
        {/* Decorative background elements matching Footer */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />

        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 tracking-tight">Stay Up-To-Date With Our Latest Blog</h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto font-light">
            Discover fresh ideas and stay ahead with our latest blog posts.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-[400px]">
            <input
              type="text"
              placeholder="Search for Blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-12 py-3.5 bg-white border-2 border-[#ec4899]/30 rounded-lg text-gray-800 focus:border-[#ec4899] focus:ring-4 focus:ring-[#ec4899]/10 outline-none transition-all shadow-sm placeholder:text-gray-400 font-medium"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ec4899]" size={20} />
          </div>

          {/* Category Select Dropdown */}
          <div className="w-full md:w-[300px] relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-6 py-3.5 bg-white border-2 border-[#ec4899]/30 rounded-lg text-gray-800 focus:border-[#ec4899] focus:ring-4 focus:ring-[#ec4899]/10 outline-none transition-all shadow-sm font-medium appearance-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.filter(c => c.id !== "all").map(category => (
                <option key={category.id} value={category.id}>{category.label}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-24">
              <Loader2 className="animate-spin text-[#ec4899]" size={48} />
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-none border border-gray-200 shadow-sm">
              <p className="text-xl text-gray-600 font-medium">No blog posts found in this category.</p>
              <p className="text-gray-500 mt-2">Check back later for new updates!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-none overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group transform hover:-translate-y-1"
                  onClick={() => {
                    setSelectedBlog(blog);
                    incrementViewCount(blog.id, blog.views);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    {blog.image_url ? (
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-sm border border-gray-300 rounded px-3 py-1">No Image</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#ec4899] text-xs font-bold px-3 py-1.5 rounded-none shadow-sm border border-gray-100">
                      {CATEGORIES.find(c => c.id === blog.category)?.label || blog.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#ec4899] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 ext-ellipsis flex-grow">
                      {blog.content.slice(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-gray-400 flex items-center">
                          <Calendar size={14} className="mr-1.5" />
                          {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-xs font-medium text-gray-400 flex items-center">
                          <Eye size={14} className="mr-1.5" />
                          {blog.views || 0}
                        </span>
                      </div>
                      <span className="text-[#ec4899] font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
