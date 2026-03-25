import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { Plus, Edit2, Trash2, Image as ImageIcon, Loader2, LogOut, Lock } from "lucide-react";

const CATEGORIES = [
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
}

const BlogAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<Blog> | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingContentImage, setUploadingContentImage] = useState(false);

  // Auth state
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  // Sign-up extra fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preferences, setPreferences] = useState("");

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
      if (session) fetchBlogs();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchBlogs();
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    setAuthSuccess("");
    
    if (isSignUp) {
      if (password !== confirmPassword) {
        setAuthError("Passwords do not match.");
        setAuthLoading(false);
        return;
      }
      if (password.length < 6) {
        setAuthError("Password must be at least 6 characters.");
        setAuthLoading(false);
        return;
      }
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            age: age,
            gender: gender,
            preferences: preferences,
          }
        }
      });

      if (error) {
        setAuthError(error.message);
      } else {
        setAuthSuccess("Account created successfully! Logging you in...");
        setIsSignUp(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setAuthError(error.message);
      }
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setBlogs([]);
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error: any) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploadingImage(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setEditingBlog(prev => ({ ...prev, image_url: data.publicUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Make sure the 'blog-images' bucket is public.");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploadingContentImage(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `content-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      const markdownImage = `\n![Image description](${data.publicUrl})\n`;
      setEditingBlog(prev => ({ 
        ...prev, 
        content: (prev?.content || '') + markdownImage 
      }));
    } catch (error) {
      console.error("Error uploading content image:", error);
      alert("Error uploading image. Make sure the 'blog-images' bucket is public.");
    } finally {
      setUploadingContentImage(false);
    }
  };

  const handleSave = async (status: "draft" | "published") => {
    try {
      if (!editingBlog?.title || !editingBlog?.content) {
        alert("Title and content are required!");
        return;
      }

      const blogData = {
        ...editingBlog,
        status,
        category: editingBlog.category || CATEGORIES[0].id
      };

      if (editingBlog.id) {
        const { error } = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", editingBlog.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("blogs")
          .insert([blogData]);
        if (error) throw error;
      }

      setIsFormOpen(false);
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog post.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw error;
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog post.");
    }
  };

  const openForm = (blog?: Blog) => {
    setEditingBlog(blog || { category: CATEGORIES[0].id });
    setIsFormOpen(true);
  };

  // If loading auth state, show spinner
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0435]">
        <Loader2 className="animate-spin text-fuchsia-500" size={48} />
      </div>
    );
  }

  // If not logged in, show login form
  if (!session) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        {/* ── Full Width Hero Section ── */}
        <section className="w-full pt-36 pb-16 px-6 relative overflow-hidden" style={{ background: '#0a0435' }}>
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8">
              <Lock size={14} className="text-fuchsia-300" />
              <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Secure Admin Access</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Blog Admin <span style={{ color: '#f92198' }}>Portal</span>
            </h1>
            <p className="text-indigo-100/70 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed">
              A powerful workspace to manage, publish, and curate your AI blog content — all in one place.
            </p>


          </div>
        </section>

        {/* ── Form Card (below hero, overlapping) ── */}
        <div className="w-full flex justify-center px-6 pb-20 -mt-6 relative z-20">
          <div className="w-full max-w-lg bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] p-10 border border-t-0 border-[#ff0ea3]">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h2>
              <p className="text-gray-600 text-sm">
                {isSignUp ? "Fill in your details to get started" : "Sign in to your admin dashboard"}
              </p>
            </div>

            {authError && (
              <div className="mb-5 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-200 flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-500 font-bold rounded-full flex items-center justify-center text-xs">!</span>
                {authError}
              </div>
            )}
            {authSuccess && (
              <div className="mb-5 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-200 flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 bg-emerald-100 text-emerald-600 font-bold rounded-full flex items-center justify-center text-xs">✓</span>
                {authSuccess}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
              {/* Name row — signup only */}
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">First Name</label>
                    <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}
                      className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                      placeholder="Suresh" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Last Name</label>
                    <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)}
                      className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                      placeholder="Beekhani" />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Email Address</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                  placeholder="admin@example.com" />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                  placeholder="Minimum 6 characters" />
              </div>

              {/* Confirm Password — signup only */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Confirm Password</label>
                  <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                    placeholder="Re-enter password" />
                </div>
              )}

              {/* Phone — signup only */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">
                    Phone <span className="text-gray-400 normal-case font-normal">(optional)</span>
                  </label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                    placeholder="+92 300 0000000" />
                </div>
              )}

              {/* Age & Gender row — signup only */}
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">
                      Age <span className="text-gray-400 normal-case font-normal">(optional)</span>
                    </label>
                    <input type="number" min="16" max="100" value={age} onChange={(e) => setAge(e.target.value)}
                      className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                      placeholder="25" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">
                      Gender <span className="text-gray-400 normal-case font-normal">(optional)</span>
                    </label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}
                      className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Preferences — signup only */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">
                    Content Preferences <span className="text-gray-400 normal-case font-normal">(optional)</span>
                  </label>
                  <select value={preferences} onChange={(e) => setPreferences(e.target.value)}
                    className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm">
                    <option value="">Select interest area</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="chatbot">Chatbots</option>
                    <option value="automation">Automation</option>
                    <option value="nlp">NLP</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="case-studies">Case Studies</option>
                  </select>
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={authLoading}
                className="w-full text-white font-bold py-4 transition-all duration-300 flex justify-center items-center shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2 rounded-none hover:shadow-[#ff0ea3]/30"
                style={{ background: '#ff0ea3' }}>
                {authLoading
                  ? <Loader2 className="animate-spin" size={20} />
                  : isSignUp ? "Create Account →" : "Sign In securely →"}
              </button>
            </form>

            <div className="mt-6 text-center border-t border-gray-100 pt-5">
              <button onClick={() => { setIsSignUp(!isSignUp); setAuthError(""); setAuthSuccess(""); }}
                className="text-sm font-semibold transition-colors text-[#ff0ea3] hover:text-[#d00a84]">
                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 shadow-inner relative overflow-hidden" style={{ background: '#0a0435' }}>
        {/* Decorative background elements matching Footer */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />
        
        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-none mb-6 border border-white/20">
            <Lock size={24} className="text-[#ec4899]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Admin Workspace</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto font-light mb-8 leading-relaxed">
            Welcome back, <span className="font-medium text-white">{session.user.email}</span>. Manage your drafts, edit live articles, and publish new content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => openForm()}
              className="flex items-center gap-2 text-white px-8 py-3.5 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold border border-white/10"
              style={{ background: 'linear-gradient(135deg, #f41eff 0%, #f755a9d9 50%, #ec4899 100%)' }}
            >
              <Plus size={20} /> Create New Post
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-none transition-all duration-300 shadow-sm font-medium"
            >
              <LogOut size={20} /> Sign Out
            </button>
          </div>
        </div>
      </section>

      <div className="flex-grow">
        <section className="pt-16 pb-8 px-4 max-w-7xl mx-auto -mt-10 relative z-10">
          <div className="flex justify-between items-center mb-6 px-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Entries</h2>
              <p className="text-gray-500 mt-1">You have {blogs.length} posts configured across all categories.</p>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-24 bg-white rounded-none shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-200">
              <Loader2 className="animate-spin text-[#ff0ea3]" size={40} />
            </div>
          ) : (
            <div className="bg-white rounded-none shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 text-sm">
                      <th className="p-4 font-semibold uppercase tracking-wider">Title</th>
                      <th className="p-4 font-semibold uppercase tracking-wider">Status</th>
                      <th className="p-4 font-semibold uppercase tracking-wider">Category</th>
                      <th className="p-4 font-semibold uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="p-12 text-center text-gray-500">
                          <div className="flex flex-col items-center justify-center">
                            <div className="bg-gray-50 p-4 rounded-none border border-gray-100 mb-3 text-[#ec4899]">
                              <Plus size={32} />
                            </div>
                            <p className="text-lg font-medium text-gray-900">No posts yet</p>
                            <p className="text-sm mt-1">Create your first blog post to get started.</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      blogs.map((blog) => (
                        <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50 transition text-gray-900">
                          <td className="p-4 font-medium">
                            <div className="line-clamp-1">{blog.title}</div>
                            <div className="text-xs text-gray-500 font-normal mt-1">
                              {new Date(blog.created_at).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-none text-xs font-semibold tracking-wide ${
                              blog.status === 'published' 
                                ? 'bg-green-100 text-green-700 border border-green-200' 
                                : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                            }`}>
                              {blog.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4 text-gray-600 capitalize text-sm">
                            {CATEGORIES.find(c => c.id === blog.category)?.label || blog.category}
                          </td>
                          <td className="p-4 flex gap-2 justify-end">
                            <button onClick={() => openForm(blog)} className="p-2 text-[#ff0ea3] hover:bg-[#ff0ea3]/10 rounded-none transition" title="Edit">
                              <Edit2 size={18} />
                            </button>
                            <button onClick={() => handleDelete(blog.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-none transition" title="Delete">
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Blog Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-none shadow-[0_0_40px_rgba(0,0,0,0.1)] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-t-0 border-[#ff0ea3]">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingBlog?.id ? "Edit Post" : "Create New Post"}
              </h2>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="w-8 h-8 flex justify-center items-center rounded-none hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Title</label>
                <input
                  type="text"
                  value={editingBlog?.title || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                  placeholder="Enter a captivating title..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Category</label>
                  <select
                    value={editingBlog?.category || CATEGORIES[0].id}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full h-12 px-4 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/20 focus:border-[#ff0ea3] transition-all text-sm"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Cover Image</label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer border border-gray-200 hover:border-[#ff0ea3] bg-white text-gray-700 h-12 px-4 rounded-none flex items-center justify-center gap-2 transition w-full focus-within:ring-2 focus-within:ring-[#ff0ea3]/20">
                      {uploadingImage ? <Loader2 className="animate-spin" size={20} color="#ff0ea3" /> : <ImageIcon size={20} className="text-[#ff0ea3]" />}
                      <span className="font-medium text-sm">
                        {uploadingImage ? "Uploading..." : "Click to upload image"}
                      </span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploadingImage} />
                    </label>
                  </div>
                </div>
              </div>

              {editingBlog?.image_url && (
                <div className="relative h-64 w-full rounded-none overflow-hidden border border-gray-200 shadow-inner group">
                  <img src={editingBlog.image_url} alt="Cover" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                     <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-none text-sm">Current Image Set</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 tracking-wider mb-2">Content (Markdown Format)</label>
                <div className="border border-gray-200 rounded-none focus-within:ring-2 focus-within:ring-[#ff0ea3]/20 focus-within:border-[#ff0ea3] transition overflow-hidden bg-white">
                  <textarea
                    value={editingBlog?.content || ""}
                    onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                    rows={12}
                    className="w-full p-4 outline-none resize-y text-gray-900 bg-transparent text-sm"
                    placeholder="Write your blog content here... Use Markdown for formatting (**bold**, # Header, etc.)"
                  />
                  <div className="bg-gray-50 border-t border-gray-200 p-2 px-4 flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>Markdown supported</span>
                      <label className="cursor-pointer text-[#ec4899] hover:text-[#d00a84] font-medium flex items-center gap-1 transition-colors">
                        {uploadingContentImage ? <Loader2 className="animate-spin" size={14} /> : <ImageIcon size={14} />}
                        <span>{uploadingContentImage ? "Uploading..." : "Insert Image"}</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleContentImageUpload} disabled={uploadingContentImage} />
                      </label>
                    </div>
                    <span>{editingBlog?.content?.length || 0} characters</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-3 text-gray-700 font-bold hover:bg-gray-100 rounded-none transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSave("draft")}
                  className="px-6 py-3 border border-yellow-300 bg-yellow-50 text-yellow-700 font-bold hover:bg-yellow-100 rounded-none transition"
                >
                  Save as Draft
                </button>
                <button
                  onClick={() => handleSave("published")}
                  className="px-8 py-3 text-white font-bold hover:shadow-[#ff0ea3]/30 hover:shadow-lg rounded-none transition"
                  style={{ background: '#ff0ea3' }}
                >
                  Publish Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogAdmin;
