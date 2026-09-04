import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { Plus, Edit2, Trash2, Image as ImageIcon, Loader2, LogOut, Lock, Bold, Italic, List, ListOrdered, Quote, Link as LinkIcon, Heading1, Heading2, Heading3, Code, Braces, Minus, Type, ChevronDown, CheckCircle, Search, X } from "lucide-react";
import { toast } from "sonner";

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

const BRAND = {
  black: "#050505",
  graphite: "#111111",
  white: "#FFFFFF",
  lime: "#B6FF00",
  green: "#7DCC00",
};

const ADMIN_STYLES = `
  .blog-admin-page { background: ${BRAND.black} !important; color: ${BRAND.white}; }
  .blog-admin-page .admin-surface { background: ${BRAND.graphite} !important; border-color: rgba(255,255,255,.1) !important; }
  .blog-admin-page input, .blog-admin-page textarea, .blog-admin-page select { background: ${BRAND.graphite} !important; color: ${BRAND.white} !important; border-color: rgba(255,255,255,.14) !important; }
  .blog-admin-page input::placeholder, .blog-admin-page textarea::placeholder { color: rgba(255,255,255,.38) !important; }
  .blog-admin-page input:focus, .blog-admin-page textarea:focus, .blog-admin-page select:focus { border-color: ${BRAND.lime} !important; outline: 2px solid rgba(182,255,0,.2) !important; outline-offset: 1px; }
  .blog-admin-page button:focus-visible, .blog-admin-page a:focus-visible, .blog-admin-page input:focus-visible, .blog-admin-page textarea:focus-visible, .blog-admin-page select:focus-visible { outline: 2px solid ${BRAND.lime}; outline-offset: 3px; }
  .blog-admin-page .brand-lime { color: ${BRAND.lime} !important; }
  .blog-admin-page .admin-muted { color: rgba(255,255,255,.58) !important; }
  .blog-admin-page .admin-subtle { color: rgba(255,255,255,.4) !important; }
  .blog-admin-page .admin-divider { border-color: rgba(255,255,255,.1) !important; }
  .blog-admin-page .admin-primary { background: ${BRAND.lime} !important; color: ${BRAND.black} !important; }
  .blog-admin-page .admin-primary:hover { background: ${BRAND.green} !important; }
  .blog-admin-page .admin-control { min-height: 44px; border: 1px solid rgba(255,255,255,.14); background: ${BRAND.graphite}; color: ${BRAND.white}; }
  .blog-admin-page .admin-row:hover { background: rgba(182,255,0,.045) !important; }
  .blog-admin-page .admin-status { border: 1px solid rgba(182,255,0,.28); color: ${BRAND.lime}; background: rgba(182,255,0,.08); }
  .blog-admin-page .admin-draft { border: 1px solid rgba(255,255,255,.18); color: rgba(255,255,255,.72); background: rgba(255,255,255,.06); }
  .blog-admin-page [class*="bg-white"], .blog-admin-page [class*="bg-gray-50"] { background: ${BRAND.graphite} !important; }
  .blog-admin-page [class*="bg-gray-900"] { background: ${BRAND.black} !important; }
  .blog-admin-page [class*="text-gray-900"], .blog-admin-page [class*="text-gray-800"] { color: ${BRAND.white} !important; }
  .blog-admin-page [class*="text-gray-700"], .blog-admin-page [class*="text-gray-600"], .blog-admin-page [class*="text-gray-500"], .blog-admin-page [class*="text-gray-400"] { color: rgba(255,255,255,.58) !important; }
  .blog-admin-page [class*="text-[#ff0ea3]"], .blog-admin-page [class*="text-[#ec4899]"] { color: ${BRAND.lime} !important; }
  .blog-admin-page [class*="border-gray"] { border-color: rgba(255,255,255,.12) !important; }
  @media (max-width: 640px) { .blog-admin-page .admin-table-wrap { overflow: visible; } .blog-admin-page .admin-table { min-width: 0; } .blog-admin-page .admin-table thead { display: none; } .blog-admin-page .admin-table tr { display: block; padding: 1rem; border-bottom: 1px solid rgba(255,255,255,.1); } .blog-admin-page .admin-table td { display: block; padding: .35rem 0; border: 0; } .blog-admin-page .admin-table td:last-child { padding-top: .8rem; } }
  @media print { .blog-admin-page .admin-print-hide { display: none !important; } }
`;

interface Blog {
  id: string;
  title: string;
  content: string;
  image_url: string;
  category: string;
  status: "draft" | "published";
  created_at: string;
  faqs?: { q: string; a: string }[];
  meta_title?: string;
  meta_description?: string;
  focus_keyword?: string;
  secondary_keywords?: string;
  views?: number;
}

const Summary = ({ label, value }: { label: string; value: number }) => (
  <div className="admin-surface border px-5 py-4">
    <p className="admin-subtle text-[10px] font-bold uppercase tracking-[0.18em]">{label}</p>
    <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
  </div>
);

const BlogAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<Blog> | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingContentImage, setUploadingContentImage] = useState(false);
  const [keywordInput, setKeywordInput] = useState("");
  const [focusKeywordInput, setFocusKeywordInput] = useState("");
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const insertMarkdown = (pre: string, post: string = "") => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = editingBlog?.content || "";
    const selection = content.substring(start, end);

    const newContent =
      content.substring(0, start) +
      pre + selection + post +
      content.substring(end);

    setEditingBlog(prev => ({ ...prev, content: newContent }));

    // Focus back and set cursor
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + pre.length + selection.length + post.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

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

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery = !query || blog.title.toLowerCase().includes(query) || blog.category.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "all" || blog.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || blog.category === categoryFilter;
    return matchesQuery && matchesStatus && matchesCategory;
  });

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

  const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  const uploadBlogImage = async (file: File, prefix: "cover" | "content") => {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!user) throw new Error("You must be signed in to upload images.");

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      throw new Error(`File type "${file.type || "unknown"}" is not allowed. Use JPG, PNG, GIF, or WebP.`);
    }

    const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
    const filePath = `${user.id}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file, {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploadingImage(true);
      const publicUrl = await uploadBlogImage(file, "cover");
      setEditingBlog(prev => ({ ...prev, image_url: publicUrl }));
      toast.success("Cover image uploaded.");
    } catch (error: any) {
      console.error("Error uploading image:", error);
      toast.error(error.message || "Failed to upload image. Check storage policies in Supabase.");
    } finally {
      setUploadingImage(false);
      e.target.value = "";
    }
  };

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploadingContentImage(true);
      const publicUrl = await uploadBlogImage(file, "content");
      const markdownImage = `\n![Image description](${publicUrl})\n`;
      setEditingBlog(prev => ({
        ...prev,
        content: (prev?.content || "") + markdownImage,
      }));
      toast.success("Image inserted into content.");
    } catch (error: any) {
      console.error("Error uploading content image:", error);
      toast.error(error.message || "Failed to upload image. Check storage policies in Supabase.");
    } finally {
      setUploadingContentImage(false);
      e.target.value = "";
    }
  };

  const extractStoragePaths = (content: string, coverUrl?: string): string[] => {
    const paths: string[] = [];
    
    // Add cover image path if it exists
    if (coverUrl) {
      const parts = coverUrl.split('/blog-images/');
      if (parts.length > 1) paths.push(parts[1]);
    }

    // Regex to match Supabase storage URLs in markdown: ![desc](url)
    // Looking for URLs that contain /blog-images/
    const mdImageRegex = /!\[.*?\]\((.*?\b(?:blog-images)\b\/storage\/v1\/object\/public\/blog-images\/(.*?))\)/g;
    let match;
    while ((match = mdImageRegex.exec(content)) !== null) {
      if (match[2]) {
        // The regex might capture extra params if there are any, let's refine
        const path = match[2].split('?')[0];
        if (path && !paths.includes(path)) {
          paths.push(path);
        }
      }
    }

    // Also look for raw URLs that might be in the content
    const urlRegex = /https:\/\/[^/]+\/storage\/v1\/object\/public\/blog-images\/([^)\s"']+)/g;
    while ((match = urlRegex.exec(content)) !== null) {
      if (match[1]) {
        const path = match[1].split('?')[0];
        if (path && !paths.includes(path)) {
          paths.push(path);
        }
      }
    }

    return paths;
  };

  const handleRemoveCoverImage = async () => {
    try {
      if (!editingBlog?.image_url) return;
      
      const fileUrl = editingBlog.image_url;
      const pathParts = fileUrl.split('/blog-images/');
      if (pathParts.length > 1) {
        const filePath = pathParts[1].split('?')[0];
        const { error } = await supabase.storage
          .from('blog-images')
          .remove([filePath]);
        if (error) console.error("Storage removal error:", error);
      }

      // Immediate DB update if editing an existing blog
      if (editingBlog.id) {
        const { error: dbError } = await supabase
          .from("blogs")
          .update({ image_url: "" })
          .eq("id", editingBlog.id);
        
        if (dbError) throw dbError;
      }

      setEditingBlog(prev => prev ? { ...prev, image_url: "" } : null);
      toast.success("Image permanently removed from storage and database.");
      fetchBlogs(); // Refresh list to reflect empty image
    } catch (error: any) {
      console.error("Error removing image:", error);
      toast.error(error.message || "Failed to remove image.");
    }
  };

  const handleSave = async (status: "draft" | "published") => {
    try {
      if (!editingBlog?.title?.trim() || !editingBlog?.content?.trim()) {
        toast.error("Title and content are required!");
        return;
      }

      // Destructure to remove fields that shouldn't be in the update payload
      const { id, created_at, views, ...updatableData } = editingBlog as any;

      const blogData = {
        ...updatableData,
        status,
        category: editingBlog.category || CATEGORIES[0].id,
        meta_title: editingBlog.meta_title || editingBlog.title,
        meta_description: editingBlog.meta_description || editingBlog.content?.slice(0, 160)
      };

      if (id) {
        const { error } = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", id);
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
      toast.success(status === 'published' ? "Post Published Successfully!" : "Draft Saved Successfully!");
    } catch (error: any) {
      console.error("Error saving blog:", error);
      toast.error(`Error: ${error.message || "Failed to save blog post."}`);
    }
  };

  const handleDelete = async (id: string) => {
    // No more window.confirm as per user request for "the moment you click"
    try {
      setLoading(true);
      
      // 1. Fetch the blog first to get image URLs
      const { data: blog, error: fetchError } = await supabase
        .from("blogs")
        .select("content, image_url")
        .eq("id", id)
        .single();

      if (fetchError) throw fetchError;

      // 2. Extract and delete images from storage
      if (blog) {
        const storagePaths = extractStoragePaths(blog.content || "", blog.image_url);
        
        if (storagePaths.length > 0) {
          console.log("Deleting associated files:", storagePaths);
          const { error: storageError } = await supabase.storage
            .from('blog-images')
            .remove(storagePaths);
          
          if (storageError) {
            console.error("Error deleting files from storage:", storageError);
            // We continue anyway to delete the database entry, or we could stop
            toast.error("Some images could not be deleted from storage.");
          }
        }
      }

      // 3. Delete from database
      const { error: deleteError } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

      if (deleteError) throw deleteError;
      
      fetchBlogs();
      toast.success("Blog Post and all images permanently deleted.");
    } catch (error: any) {
      console.error("Error deleting blog:", error);
      toast.error(error.message || "Could not delete the post.");
    } finally {
      setLoading(false);
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
        <Loader2 className="animate-spin brand-lime" size={48} />
      </div>
    );
  }

  // If not logged in, show login form
  if (!session) {
    return (
      <div className="blog-admin-page min-h-screen flex flex-col">
        <Navbar />
        <style>{ADMIN_STYLES}</style>

        {/* ── Full Width Hero Section ── */}
        <section className="w-full border-b border-white/10 px-6 pb-16 pt-32 relative overflow-hidden" style={{ background: BRAND.black }}>
          {/* Glow orbs */}

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8">
              <Lock size={14} className="brand-lime" />
              <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Secure admin access</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Blog Admin
            </h1>
            <p className="text-white/80/70 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed">
              Sign in to manage, publish, and curate Velnix blog content.
            </p>


          </div>
        </section>

        {/* ── Form Card (below hero, overlapping) ── */}
        <div className="w-full flex justify-center px-6 pb-20 -mt-6 relative z-20">
          <div className="admin-surface w-full max-w-lg p-6 sm:p-10 border shadow-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-white mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h2>
              <p className="admin-muted text-sm">
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
                className="w-full text-black font-medium py-4 transition-all duration-300 flex justify-center items-center shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2 rounded-none hover:shadow-[#B6FF00]/30 border border-black/10"
                style={{ background: '#B6FF00' }}>
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
    <div className="blog-admin-page min-h-screen flex flex-col">
      <Navbar />
      <style>{ADMIN_STYLES}</style>
      
      {/* Hero Section */}
      <section className="border-b border-white/10 px-4 pb-12 pt-28 shadow-inner relative overflow-hidden" style={{ background: BRAND.black }}>
        {/* Decorative background elements matching Footer */}
        
        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-none mb-6 border border-white/20">
            <Lock size={22} className="brand-lime" />
          </div>
          <p className="brand-lime mb-3 text-xs font-semibold uppercase tracking-[0.22em]">Content management</p>
          <h1 className="brand-lime text-4xl md:text-6xl font-extrabold mb-5 tracking-tight">Blog Management</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light mb-8 leading-relaxed">
            Welcome back, <span className="brand-lime font-medium">{session.user.email}</span>. Manage drafts, edit live articles, and publish new content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => openForm()}
              className="admin-primary flex items-center gap-2 px-8 py-3.5 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium border border-black/10"
              style={{ background: BRAND.lime }}
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
        <section className="pt-12 pb-8 px-4 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-8 px-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Your posts</h2>
              <p className="admin-muted mt-1">Create, review, and publish your Velnix knowledge base.</p>
            </div>
            <button onClick={() => openForm()} className="admin-primary inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 font-semibold" style={{ background: BRAND.lime }}><Plus size={18} /> Create New Post</button>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Summary label="Total posts" value={blogs.length} />
            <Summary label="Published" value={blogs.filter((blog) => blog.status === "published").length} />
            <Summary label="Drafts" value={blogs.filter((blog) => blog.status === "draft").length} />
          </div>

          <div className="admin-surface mb-5 flex flex-col gap-3 border p-3 sm:flex-row sm:items-center">
            <div className="relative min-w-0 flex-1"><Search size={17} className="admin-subtle absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" /><label htmlFor="blog-search" className="sr-only">Search posts</label><input id="blog-search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search posts..." className="admin-control w-full pl-10 pr-3 text-sm" /></div>
            <div className="flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="status-filter">Filter by status</label><select id="status-filter" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "all" | "published" | "draft")} className="admin-control px-3 text-sm"><option value="all">All statuses</option><option value="published">Published</option><option value="draft">Draft</option></select><label className="sr-only" htmlFor="category-filter">Filter by category</label><select id="category-filter" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="admin-control px-3 text-sm"><option value="all">All categories</option>{CATEGORIES.map((category) => <option key={category.id} value={category.id}>{category.label}</option>)}</select>{(searchQuery || statusFilter !== "all" || categoryFilter !== "all") && <button type="button" onClick={() => { setSearchQuery(""); setStatusFilter("all"); setCategoryFilter("all"); }} className="admin-control inline-flex items-center justify-center gap-2 px-3 text-sm"><X size={15} /> Clear</button>}</div>
          </div>

          {loading ? (
            <div className="flex justify-center py-24 bg-white rounded-none shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-200">
              <Loader2 className="animate-spin text-[#ff0ea3]" size={40} />
            </div>
          ) : (
            <div className="admin-surface rounded-none shadow-2xl border overflow-hidden">
              <div className="admin-table-wrap overflow-x-auto">
                <table className="admin-table w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-white/5 border-b admin-divider text-white/60 text-xs">
                      <th className="p-4 font-semibold uppercase tracking-wider">Title</th>
                      <th className="p-4 font-semibold uppercase tracking-wider">Status</th>
                      <th className="p-4 font-semibold uppercase tracking-wider">Category</th>
                      <th className="p-4 font-semibold uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="p-12 text-center text-gray-500">
                          <div className="flex flex-col items-center justify-center">
                            <div className="bg-gray-50 p-4 rounded-none border border-gray-100 mb-3 text-[#ec4899]">
                              <Plus size={32} />
                            </div>
                            <p className="text-lg font-medium text-white">{blogs.length === 0 ? "No posts yet" : "No posts found"}</p>
                            <p className="admin-muted text-sm mt-1">{blogs.length === 0 ? "Create your first blog post to get started." : "Try changing your search or filters."}</p>
                            {blogs.length === 0 ? <button onClick={() => openForm()} className="admin-primary mt-5 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold" style={{ background: BRAND.lime }}><Plus size={16} /> Create New Post</button> : <button onClick={() => { setSearchQuery(""); setStatusFilter("all"); setCategoryFilter("all"); }} className="admin-control mt-5 px-4 py-2.5 text-sm">Clear Filters</button>}
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredBlogs.map((blog) => (
                        <tr key={blog.id} className="admin-row border-b admin-divider transition text-white">
                          <td className="p-4 font-medium">
                            <div className="line-clamp-1">{blog.title}</div>
                            <div className="admin-subtle text-xs font-normal mt-1">
                              {new Date(blog.created_at).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-none text-xs font-semibold tracking-wide ${blog.status === 'published' ? 'admin-status' : 'admin-draft'}`}>
                              {blog.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4 admin-muted capitalize text-sm">
                            {CATEGORIES.find(c => c.id === blog.category)?.label || blog.category}
                          </td>
                          <td className="p-4 flex gap-2 justify-end">
                              <button onClick={() => openForm(blog)} className="p-2 brand-lime hover:bg-white/10 rounded-none transition" title="Edit post" aria-label={`Edit ${blog.title}`}>
                              <Edit2 size={18} />
                            </button>
                            <button onClick={() => handleDelete(blog.id)} className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-none transition" title="Delete post" aria-label={`Delete ${blog.title}`}>
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

      {/* Blog Form Full Screen Overlay */}
      {isFormOpen && (
        <div className="admin-surface fixed inset-0 z-[70] overflow-y-auto animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col">
          {/* Header Bar */}
          <div className="h-20 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-xl z-30 px-6 md:px-12 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#ff0ea3]/10 flex items-center justify-center rounded-none border border-[#ff0ea3]/20">
                <Edit2 size={20} className="text-[#ff0ea3]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                {editingBlog?.id ? "EDIT POST" : "CREATE NEW POST"}
              </h2>
            </div>
            <button 
              onClick={() => setIsFormOpen(false)}
              className="group flex items-center gap-2 px-4 py-2 rounded-none hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-all font-bold text-sm tracking-widest"
            >
              <span>CLOSE</span>
              <div className="w-8 h-8 flex justify-center items-center rounded-none bg-gray-100 group-hover:bg-red-500 group-hover:text-white transition-all">
                <span className="text-xl leading-none">&times;</span>
              </div>
            </button>
          </div>
          
          <div className="flex-grow bg-gray-50/50">
            <div className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
              {/* Form Content Area */}
              <div className="admin-surface p-8 md:p-12 shadow-2xl border border-gray-100 space-y-8">
                <div>
                  <label className="block text-xs font-black text-gray-400 tracking-[0.2em] mb-3 uppercase">Post Title</label>
                  <input
                    type="text"
                    value={editingBlog?.title || ""}
                    onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                    className="w-full h-16 px-6 text-base md:text-lg font-bold rounded-none border-b-2 border-gray-100 bg-white text-gray-900 outline-none focus:border-[#ff0ea3] transition-all placeholder:text-gray-200"
                    placeholder="Enter a captivating title..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs font-black text-gray-400 tracking-[0.2em] mb-3 uppercase">Category Selection</label>
                    <select
                      value={editingBlog?.category || CATEGORIES[0].id}
                      onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                      className="w-full h-14 px-5 rounded-none border border-gray-200 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#ff0ea3]/10 focus:border-[#ff0ea3] transition-all text-sm font-semibold"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 tracking-[0.2em] mb-3 uppercase">Main Cover Image</label>
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer border-2 border-dashed border-gray-200 hover:border-[#ff0ea3] bg-white text-gray-600 h-14 px-6 rounded-none flex items-center justify-center gap-3 transition w-full group">
                        {uploadingImage ? <Loader2 className="animate-spin text-[#ff0ea3]" size={20} /> : <ImageIcon size={20} className="text-gray-400 group-hover:text-[#ff0ea3] transition-colors" />}
                        <span className="font-bold text-xs tracking-wider uppercase">
                          {uploadingImage ? "Uploading..." : "Upload New Cover"}
                        </span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploadingImage} />
                      </label>
                    </div>
                  </div>
                </div>

                {editingBlog?.image_url && (
                  <div className="relative group">
                    <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-none overflow-hidden border border-gray-100 shadow-sm relative">
                      <img src={editingBlog.image_url} alt="Cover" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                      
                      <button 
                        type="button"
                        onClick={handleRemoveCoverImage}
                        className="absolute top-4 right-4 bg-red-600/90 backdrop-blur text-white p-2.5 rounded-none hover:bg-black transition-all opacity-0 group-hover:opacity-100 z-10 shadow-xl border border-white/20"
                        title="Permanently Delete Image"
                      >
                        <Trash2 size={18} />
                      </button>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white text-xs font-black tracking-widest uppercase bg-[#ff0ea3] px-4 py-2 shadow-xl">Active Cover Image</span>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-black text-gray-400 tracking-[0.2em] mb-3 uppercase">Article Content (Markdown)</label>
                  <div className="border border-gray-200 rounded-none focus-within:ring-4 focus-within:ring-[#ff0ea3]/5 focus-within:border-[#ff0ea3] transition-all overflow-hidden bg-white">
                    {/* Professional Markdown Toolbar (Matching Image) */}
                    <div className="bg-[#1e293b] p-3 flex flex-wrap items-center gap-1.5 md:gap-3 sticky top-0 z-20">
                      {/* Style Dropdown Wrapper */}
                      <div className="relative group/style">
                        <button type="button" className="flex items-center gap-2 px-3 py-1.5 bg-[#334155] text-white text-xs font-bold hover:bg-[#475569] transition-all rounded-md">
                          <span>Style</span>
                          <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-2xl rounded-none py-2 invisible group-hover/style:visible opacity-0 group-hover/style:opacity-100 transition-all z-30">
                          <button type="button" onClick={() => insertMarkdown('# ')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <Heading1 size={16} /> <span>Heading 1</span>
                          </button>
                          <button type="button" onClick={() => insertMarkdown('## ')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <Heading2 size={16} /> <span>Heading 2</span>
                          </button>
                          <button type="button" onClick={() => insertMarkdown('### ')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <Heading3 size={16} /> <span>Heading 3</span>
                          </button>
                          <div className="h-px bg-gray-100 my-1"></div>
                          <button type="button" onClick={() => insertMarkdown('> ')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <Quote size={16} /> <span>Blockquote</span>
                          </button>
                        </div>
                      </div>

                      <div className="w-px h-6 bg-[#334155] mx-1 hidden md:block"></div>

                      <button type="button" onClick={() => insertMarkdown('**', '**')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Bold"><Bold size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('*', '*')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Italic"><Italic size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('- ')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Bullet List"><List size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('1. ')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Numbered List"><ListOrdered size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('> ')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Quote"><Quote size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('`', '`')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Inline Code"><Braces size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('\n---\n')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Horizontal Rule"><Minus size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('[', '](url)')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Link"><LinkIcon size={18} /></button>
                      <button type="button" onClick={() => insertMarkdown('```\n', '\n```')} className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] transition flex items-center justify-center rounded-md" title="Code Block text"><Code size={18} /></button>
                      <label className="p-2 text-gray-400 hover:text-white hover:bg-[#334155] cursor-pointer transition flex items-center justify-center rounded-md" title="Upload Image">
                        <ImageIcon size={18} />
                        <input type="file" accept="image/*" className="hidden" onChange={handleContentImageUpload} disabled={uploadingContentImage} />
                      </label>
                    </div>

                    <textarea
                      ref={textAreaRef}
                      value={editingBlog?.content || ""}
                      onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                      rows={20}
                      className="w-full p-8 outline-none resize-y text-gray-800 bg-transparent text-base md:text-lg leading-relaxed font-serif"
                      placeholder="Start sharing your knowledge here... Use Markdown for professional formatting."
                    />
                    <div className="bg-gray-50 border-t border-gray-100 p-4 px-6 flex justify-between items-center">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-400 uppercase">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Markdown Live
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                          {editingBlog?.content?.trim().split(/\s+/).filter(Boolean).length || 0} Words
                        </span>
                        <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                        <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                          {editingBlog?.content?.length || 0} Characters
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="pt-10 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <label className="block text-xs font-black text-gray-400 tracking-[0.2em] mb-1 uppercase">Advanced Section</label>
                      <h3 className="text-base font-bold text-gray-900">FAQ Management</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const currentFaqs = editingBlog?.faqs || [];
                        setEditingBlog({ ...editingBlog, faqs: [...currentFaqs, { q: "", a: "" }] });
                      }}
                      className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-[#ff0ea3] transition-all"
                    >
                      <Plus size={14} /> Add FAQ Item
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {(editingBlog?.faqs || []).map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-6 md:p-8 border border-gray-100 rounded-none relative group/faq transition-all hover:bg-white hover:shadow-xl hover:border-white">
                        <button
                          type="button"
                          onClick={async () => {
                            const updatedFaqs = (editingBlog?.faqs || []).filter((_, i) => i !== index);
                            
                            // Immediate DB update if editing an existing blog
                            if (editingBlog?.id) {
                              const { error } = await supabase
                                .from("blogs")
                                .update({ faqs: updatedFaqs })
                                .eq("id", editingBlog.id);
                              
                              if (error) {
                                console.error("Failed to sync FAQ deletion:", error);
                                toast.error("Database update failed.");
                              } else {
                                toast.success("FAQ removed and database synced.");
                              }
                            }
                            
                            setEditingBlog({ ...editingBlog, faqs: updatedFaqs });
                          }}
                          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all rounded-none opacity-0 group-hover/faq:opacity-100"
                          title="Remove FAQ"
                        >
                          <Trash2 size={16} />
                        </button>
                        
                        <div className="space-y-4 pr-6">
                          <div>
                            <span className="text-[10px] font-black text-[#ff0ea3] tracking-widest mb-2 block uppercase">Question {index + 1}</span>
                            <input
                              type="text"
                              value={faq.q}
                              onChange={(e) => {
                                const updatedFaqs = [...(editingBlog?.faqs || [])];
                                updatedFaqs[index].q = e.target.value;
                                setEditingBlog({ ...editingBlog, faqs: updatedFaqs });
                              }}
                              placeholder="e.g., What are the key benefits of this technology?"
                              className="w-full h-12 px-0 border-b border-gray-200 bg-transparent text-gray-900 font-bold outline-none focus:border-[#ff0ea3] transition-all"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-[#ff0ea3] tracking-widest mb-2 block uppercase">Detailed Answer</span>
                            <textarea
                              value={faq.a}
                              onChange={(e) => {
                                const updatedFaqs = [...(editingBlog?.faqs || [])];
                                updatedFaqs[index].a = e.target.value;
                                setEditingBlog({ ...editingBlog, faqs: updatedFaqs });
                              }}
                              placeholder="Provide a clear, concise answer..."
                              rows={3}
                              className="w-full p-0 border-0 bg-transparent text-gray-600 text-sm leading-relaxed outline-none transition-all resize-none"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    {(editingBlog?.faqs || []).length === 0 && (
                      <div className="text-center py-12 border-2 border-dashed border-gray-100 bg-gray-50/50">
                        <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">No FAQs configured yet.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* SEO Section (Modern Premium Dashboard Style) */}
                <div className="pt-16 border-t border-gray-100 mb-16 px-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 tracking-[0.3em] mb-2 uppercase">Google & Search Optimization</label>
                      <h3 className="text-2xl font-black text-[#0a0435] flex items-center gap-3 italic uppercase tracking-tighter">
                        <Lock className="text-[#ec4899]" size={24} />
                        SEO <span className="text-[#ec4899]">Settings</span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border border-gray-100 text-[#0a0435] text-[10px] font-black uppercase tracking-widest">
                      <CheckCircle size={14} className="text-green-500" /> SEO Readiness Check
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-10">
                      {/* Meta Title */}
                      <div className="bg-white p-0 group/seo transition-all">
                        <div className="flex justify-between items-center mb-4">
                          <label className="block text-[10px] font-black text-[#ec4899] tracking-[0.2em] uppercase">Meta Title (Search Heading)</label>
                          <span className={`text-[9px] font-black uppercase tracking-tighter ${ (editingBlog?.meta_title?.length || 0) > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                            {editingBlog?.meta_title?.length || 0} / 60 CHARS
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="e.g. How AI Chatbots Are Transforming Customer Support in 2026"
                          value={editingBlog?.meta_title || ""}
                          onChange={(e) => setEditingBlog({ ...editingBlog, meta_title: e.target.value })}
                          className="w-full bg-gray-50 border-0 border-l-4 border-gray-200 px-6 py-4 text-gray-900 font-bold text-lg md:text-xl outline-none focus:border-[#ec4899] focus:bg-white transition-all shadow-sm"
                        />
                      </div>

                      {/* Meta Description */}
                      <div className="bg-white p-0 group/seo transition-all">
                        <div className="flex justify-between items-center mb-4">
                          <label className="block text-[10px] font-black text-[#ec4899] tracking-[0.2em] uppercase">Meta Description (Snippet)</label>
                          <span className={`text-[9px] font-black uppercase tracking-tighter ${ (editingBlog?.meta_description?.length || 0) > 160 ? 'text-red-500' : 'text-gray-400'}`}>
                            {editingBlog?.meta_description?.length || 0} / 160 CHARS
                          </span>
                        </div>
                        <textarea
                          placeholder="Discover how AI chatbots are revolutionizing customer support in 2026 — what they do, when to deploy, and how to get started."
                          value={editingBlog?.meta_description || ""}
                          onChange={(e) => setEditingBlog({ ...editingBlog, meta_description: e.target.value })}
                          rows={4}
                          className="w-full bg-gray-50 border-0 border-l-4 border-gray-200 px-6 py-4 text-gray-600 text-sm md:text-base leading-relaxed outline-none focus:border-[#ec4899] focus:bg-white transition-all shadow-sm resize-none"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-10">
                      {/* Focus Keyword */}
                      <div className="bg-white p-0">
                        <label className="block text-[10px] font-black text-[#ec4899] tracking-[0.2em] mb-4 uppercase">Focus Keyword</label>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(editingBlog?.focus_keyword || "").split(",").map(kw => kw.trim()).filter(Boolean).map((kw, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-none text-[10px] font-black text-[#0a0435] border border-gray-100 uppercase tracking-widest group transition-all hover:bg-white hover:border-[#ec4899]">
                              {kw}
                              <X 
                                size={12} 
                                className="cursor-pointer text-gray-300 hover:text-red-500 transition-colors" 
                                onClick={() => {
                                  const tags = (editingBlog?.focus_keyword || "").split(",").map(k => k.trim()).filter(Boolean);
                                  const updated = tags.filter((_, idx) => idx !== i).join(", ");
                                  setEditingBlog({ ...editingBlog, focus_keyword: updated });
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                          <input
                            type="text"
                            placeholder="Add primary keyword..."
                            value={focusKeywordInput}
                            onChange={(e) => setFocusKeywordInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ',') {
                                e.preventDefault();
                                const newKw = focusKeywordInput.trim().replace(/,/g, '');
                                if (newKw) {
                                  const current = (editingBlog?.focus_keyword || "").split(",").map(k => k.trim()).filter(Boolean);
                                  if (!current.includes(newKw) && current.length < 5) {
                                    const updated = [...current, newKw].join(", ");
                                    setEditingBlog({ ...editingBlog, focus_keyword: updated });
                                  } else if (current.length >= 5) {
                                    toast.error("Maximum 5 focus keywords allowed!");
                                  }
                                  setFocusKeywordInput("");
                                }
                              }
                            }}
                            className="w-full bg-gray-50 border-0 border-l-4 border-gray-200 pl-12 pr-6 py-4 text-gray-900 font-bold outline-none focus:border-[#ec4899] focus:bg-white transition-all shadow-sm text-sm"
                          />
                        </div>
                      </div>

                      {/* Secondary Keywords */}
                      <div className="bg-white p-0">
                        <label className="block text-[10px] font-black text-[#ec4899] tracking-[0.2em] mb-4 uppercase">Secondary Keywords</label>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(editingBlog?.secondary_keywords || "").split(",").map(kw => kw.trim()).filter(Boolean).map((kw, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-none text-[10px] font-black text-[#0a0435] border border-gray-100 uppercase tracking-widest group transition-all hover:bg-white hover:border-[#ec4899]">
                              {kw}
                              <X 
                                size={12} 
                                className="cursor-pointer text-gray-300 hover:text-red-500 transition-colors" 
                                onClick={() => {
                                  const tags = (editingBlog?.secondary_keywords || "").split(",").map(k => k.trim()).filter(Boolean);
                                  const updated = tags.filter((_, idx) => idx !== i).join(", ");
                                  setEditingBlog({ ...editingBlog, secondary_keywords: updated });
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        <input
                          type="text"
                          placeholder="Add keyword and press Enter..."
                          value={keywordInput}
                          onChange={(e) => setKeywordInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ',') {
                              e.preventDefault();
                              const newKw = keywordInput.trim().replace(/,/g, '');
                              if (newKw) {
                                const current = (editingBlog?.secondary_keywords || "").split(",").map(k => k.trim()).filter(Boolean);
                                if (!current.includes(newKw) && current.length < 5) {
                                  const updated = [...current, newKw].join(", ");
                                  setEditingBlog({ ...editingBlog, secondary_keywords: updated });
                                } else if (current.length >= 5) {
                                  toast.error("Maximum 5 secondary keywords allowed!");
                                }
                                setKeywordInput("");
                              }
                            }
                          }}
                          className="w-full bg-gray-50 border-0 border-l-4 border-gray-200 px-6 py-4 text-gray-600 text-sm outline-none focus:border-[#ec4899] focus:bg-white transition-all shadow-sm"
                        />
                        <p className="text-[9px] text-gray-400 mt-3 font-bold uppercase tracking-widest italic flex items-center gap-1.5">
                          Max 5 keywords (Press Enter)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-col md:flex-row justify-end gap-4 pb-20">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="px-10 py-5 text-gray-500 font-black text-xs tracking-[0.2em] uppercase hover:bg-gray-100 transition-all rounded-none border border-transparent"
                >
                  Discard Changes
                </button>
                <button
                  onClick={() => handleSave("draft")}
                  className="px-10 py-5 border-2 border-orange-500/20 bg-orange-50 text-orange-700 font-black text-xs tracking-[0.2em] uppercase hover:bg-orange-100 transition-all rounded-none shadow-sm"
                >
                  Save to Drafts
                </button>
                <button
                  onClick={() => handleSave("published")}
                  className="px-12 py-5 text-black hover:text-black font-medium text-xs tracking-[0.2em] uppercase transition-all shadow-2xl hover:scale-[1.02] active:scale-95 rounded-none border border-black/10"
                  style={{ background: '#B6FF00' }}
                >
                  Publish Live Post
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
