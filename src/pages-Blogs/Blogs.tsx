import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { Loader2, ArrowLeft, Calendar, User, CheckCircle, Search, Eye, Plus, Minus, ChevronDown, List, MessageSquare, ThumbsUp, Trash2, Reply, Send, CornerDownRight } from "lucide-react";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

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
  faqs?: { q: string; a: string }[];
  meta_title?: string;
  meta_description?: string;
  focus_keyword?: string;
  secondary_keywords?: string;
}

interface BlogComment {
  id: string;
  blog_id: string;
  parent_id: string | null;
  user_name: string;
  content: string;
  likes: number;
  created_at: string;
  replies?: BlogComment[];
}

const AVATAR_COLORS = [
  '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'
];

const getAvatarColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const CommentItem: React.FC<{
  comment: BlogComment;
  level?: number;
  onReply: (id: string | null) => void;
  onLike: (id: string) => void;
  onDelete: (id: string) => void;
  replyingTo: string | null;
  replyInput: string;
  setReplyInput: (val: string) => void;
  onReplySubmit: (e: React.FormEvent, parentId: string) => void;
  isSubmitting: boolean;
  isAdmin: boolean;
}> = ({ comment, level = 0, onReply, onLike, onDelete, replyingTo, replyInput, setReplyInput, onReplySubmit, isSubmitting, isAdmin }) => {
  const avatarColor = getAvatarColor(comment.user_name);
  const isReplying = replyingTo === comment.id;

  return (
    <div className={`mb-8 ${level > 0 ? 'ml-6 md:ml-12 border-l-2 border-gray-100 pl-6 md:pl-8 relative' : ''}`}>
      {level > 0 && (
        <div className="absolute top-4 -left-[2px] w-4 h-0.5 bg-gray-100" />
      )}
      
      <div className="flex gap-4 items-start group">
        <div 
          className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md"
          style={{ backgroundColor: avatarColor }}
        >
          {comment.user_name.charAt(0).toUpperCase()}
        </div>
        
        <div className="flex-grow">
          <div className="bg-white border border-gray-100 p-5 shadow-sm group-hover:shadow-md transition-shadow relative">
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-sm font-black text-[#0a0435] uppercase tracking-wider">{comment.user_name}</span>
                <span className="text-[10px] text-gray-400 font-bold ml-3 uppercase tracking-tighter">
                  {new Date(comment.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onLike(comment.id)}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ec4899] transition-colors group/like"
                >
                  <ThumbsUp size={14} className={comment.likes > 0 ? 'fill-[#ec4899] text-[#ec4899]' : ''} />
                  <span className="text-xs font-black">{comment.likes}</span>
                </button>
                
                {isAdmin && (
                  <button 
                    onClick={() => onDelete(comment.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-[15px] font-medium whitespace-pre-wrap">
              {comment.content}
            </p>

            <button 
              onClick={() => onReply(isReplying ? null : comment.id)}
              className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ec4899] hover:text-[#0a0435] transition-colors"
            >
              <Reply size={12} /> {isReplying ? 'Cancel' : 'Reply'}
            </button>
          </div>

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <form onSubmit={(e) => onReplySubmit(e, comment.id)} className="flex flex-col gap-3">
                <textarea
                  autoFocus
                  value={replyInput}
                  onChange={(e) => setReplyInput(e.target.value)}
                  placeholder={`Reply to ${comment.user_name}...`}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-[#0a0435] focus:border-[#ec4899] outline-none transition-all text-sm font-medium rounded-none resize-none min-h-[100px]"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !replyInput.trim()}
                    className="flex items-center gap-2 bg-[#ec4899] text-white px-5 py-2 rounded-none font-black text-[10px] tracking-widest uppercase hover:bg-[#0a0435] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={14} /> : (
                      <>Send Reply <Send size={12} /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Recursive Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-8">
          {comment.replies.map((reply) => (
            <CommentItem 
              key={reply.id} 
              comment={reply} 
              level={level + 1}
              onReply={onReply}
              onLike={onLike}
              onDelete={onDelete}
              replyingTo={replyingTo}
              replyInput={replyInput}
              setReplyInput={setReplyInput}
              onReplySubmit={onReplySubmit}
              isSubmitting={isSubmitting}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const viewedArticles = useRef<Set<string>>(new Set());

  // Comments State
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [newCommentInput, setNewCommentInput] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyInput, setReplyInput] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [session, setSession] = useState<any>(null);

  // Check auth for comments
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Sync URL with selected blog
  useEffect(() => {
    const articleId = searchParams.get("article");
    if (!articleId) {
      if (selectedBlog) setSelectedBlog(null);
    } else if (blogs.length > 0) {
      const found = blogs.find((b) => b.id === articleId);
      if (found && found.id !== selectedBlog?.id) {
        setSelectedBlog(found);
        window.scrollTo(0, 0);
        incrementViewCount(found.id, found.views || 0);
        fetchComments(found.id);
      }
    }
  }, [searchParams, blogs, selectedBlog]);

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

  const selectedCategoryLabel =
    CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "All Posts";

  const incrementViewCount = async (blogId: string, currentViews: number = 0) => {
    if (viewedArticles.current.has(blogId)) return;
    viewedArticles.current.add(blogId);

    // Optimistically update locally
    setBlogs(prev => prev.map(b => b.id === blogId ? { ...b, views: (b.views || 0) + 1 } : b));
    setSelectedBlog(prev => prev?.id === blogId ? { ...prev, views: (prev.views || 0) + 1 } : prev);

    try {
      // The best, most secure atomic approach for real total counts:
      const { error: rpcError } = await supabase.rpc('increment_blog_view', { blog_id: blogId });

      if (rpcError) {
        // Fallback to standard update if the RPC function isn't created in Supabase yet.
        // Note: Standard update may fail if RLS (Row Level Security) blocks anonymous updates
        const { error: updateError } = await supabase
          .from("blogs")
          .update({ views: (currentViews || 0) + 1 })
          .eq("id", blogId);

        if (updateError) {
          console.error("View increment failed, check RLS policies or create the SQL RPC:", updateError);
        }
      }
    } catch (err) {
      console.warn("Could not increment view count:", err);
    }
  };

  // ── Comment Logic ───────────────────────────────────────────────────

  const buildCommentTree = (flatComments: BlogComment[]): BlogComment[] => {
    const commentMap: Record<string, BlogComment> = {};
    const roots: BlogComment[] = [];

    flatComments.forEach(comment => {
      commentMap[comment.id] = { ...comment, replies: [] };
    });

    flatComments.forEach(comment => {
      if (comment.parent_id && commentMap[comment.parent_id]) {
        commentMap[comment.parent_id].replies!.push(commentMap[comment.id]);
      } else {
        roots.push(commentMap[comment.id]);
      }
    });

    return roots;
  };

  const fetchComments = async (blogId: string) => {
    try {
      setIsLoadingComments(true);
      const { data, error } = await supabase
        .from("blog_comments")
        .select("*")
        .eq("blog_id", blogId)
        .order("created_at", { ascending: true }); // Parent comments first

      if (error) throw error;
      setComments(buildCommentTree(data || []));
    } catch (err) {
      console.error("Error fetching comments:", err);
    } finally {
      setIsLoadingComments(false);
    }
  };

  const getUserDisplayName = (currSession: any) => {
    if (!currSession?.user) return "Anonymous AI Explorer";
    const userMeta = currSession.user.user_metadata;
    const userEmail = currSession.user.email;

    if (userMeta?.first_name) {
      return `${userMeta.first_name} ${userMeta.last_name || ''}`.trim();
    }
    if (userEmail === "sureshbeekhani26@gmail.com") {
      return "Suresh Beekhani";
    }
    if (userEmail) {
      const emailParts = userEmail.split('@')[0];
      return emailParts.charAt(0).toUpperCase() + emailParts.slice(1);
    }
    return "Anonymous AI Explorer";
  };

  const handleCommentSubmit = async (e: React.FormEvent, parentId: string | null = null) => {
    e.preventDefault();
    if (!selectedBlog) return;

    const content = parentId ? replyInput.trim() : newCommentInput.trim();
    if (!content) return;

    setIsSubmittingComment(true);
    try {
      const userName = getUserDisplayName(session);

      const newComment = {
        blog_id: selectedBlog.id,
        parent_id: parentId,
        user_name: userName,
        content,
        likes: 0
      };

      const { data, error } = await supabase
        .from("blog_comments")
        .insert([newComment])
        .select()
        .single();

      if (error) throw error;

      // Update UI locally
      if (parentId) {
        setReplyInput("");
        setReplyingTo(null);
      } else {
        setNewCommentInput("");
      }
      
      toast.success("Comment added successfully!");
      fetchComments(selectedBlog.id);
    } catch (err: any) {
      console.error("Error adding comment:", err);
      toast.error(err.message || "Failed to add comment");
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleCommentLike = async (commentId: string) => {
    try {
      const { error } = await supabase.rpc('increment_comment_likes', { comment_id: commentId });
      
      if (error) {
        // Fallback to update if RPC fails
        const { data: current } = await supabase.from('blog_comments').select('likes').eq('id', commentId).single();
        await supabase.from('blog_comments').update({ likes: (current?.likes || 0) + 1 }).eq('id', commentId);
      }
      if (selectedBlog) fetchComments(selectedBlog.id);
    } catch (err) {
      console.error("Error liking comment:", err);
    }
  };

  const handleCommentDelete = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from("blog_comments")
        .delete()
        .eq("id", commentId);

      if (error) throw error;
      toast.success("Comment deleted");
      if (selectedBlog) fetchComments(selectedBlog.id);
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };
  const renderContent = (content: string) => {
    // ── Inline renderer: bold, italic, links, inline-code ──────────────
    const renderInline = (text: string, baseKey: string): React.ReactNode[] => {
      const segments = text.split(/(```[\s\S]*?```|`[^`]+`)/g);
      return segments.map((seg, si) => {
        if (seg.startsWith('```') && seg.endsWith('```')) {
          const code = seg.slice(3, -3).replace(/^\n/, '');
          return (
            <pre key={`${baseKey}-cb-${si}`} className="bg-[#0f172a] text-[#e2e8f0] text-sm rounded-lg p-5 my-4 overflow-x-auto font-mono leading-relaxed border border-gray-700 shadow-xl">
              <code>{code}</code>
            </pre>
          );
        }
        if (seg.startsWith('`') && seg.endsWith('`') && seg.length > 2) {
          return (
            <code key={`${baseKey}-ic-${si}`} className="bg-[#ec4899]/10 text-[#be185d] px-1.5 py-0.5 rounded text-[0.875em] font-mono font-semibold">
              {seg.slice(1, -1)}
            </code>
          );
        }
        return seg.split(/(\*\*[\s\S]*?\*\*|\*[\s\S]*?\*|\[.*?\]\(.*?\))/g).map((sub, i) => {
          if (sub.startsWith('**') && sub.endsWith('**'))
            return <strong key={`${baseKey}-${si}-b${i}`} className="text-[#0a0435] font-extrabold">{sub.slice(2, -2)}</strong>;
          if (sub.startsWith('*') && sub.endsWith('*') && sub.length > 2)
            return <em key={`${baseKey}-${si}-em${i}`} className="italic text-gray-600">{sub.slice(1, -1)}</em>;
          const lm = sub.match(/\[(.*?)\]\((.*?)\)/);
          if (lm)
            return <a key={`${baseKey}-${si}-lk${i}`} href={lm[2]} target="_blank" rel="noopener noreferrer" className="text-[#ec4899] hover:text-[#be185d] font-bold underline underline-offset-4 transition-colors">{lm[1]}</a>;
          return <React.Fragment key={`${baseKey}-${si}-t${i}`}>{sub}</React.Fragment>;
        });
      });
    };

    // ── Line-by-line parser ────────────────────────────────────────────
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Fenced code block
      if (line.trimStart().startsWith('```')) {
        const lang = line.replace(/^```/, '').trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trimStart().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <div key={`code-${i}`} className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            {lang && (
              <div className="bg-[#1e293b] px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#ec4899] uppercase tracking-widest">{lang}</span>
                <span className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-green-400/60" />
                </span>
              </div>
            )}
            <pre className="bg-[#0f172a] text-[#e2e8f0] text-sm p-5 overflow-x-auto font-mono leading-relaxed">
              <code>{codeLines.join('\n')}</code>
            </pre>
          </div>
        );
        i++;
        continue;
      }

      // Markdown image — trim line first to handle \r (Windows CRLF)
      const imgMatch = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        elements.push(
          <div key={`img-${i}`} className="my-10 group/img relative border-l-4 border-[#ec4899] shadow-2xl rounded-none">
            <div className="relative overflow-hidden bg-gray-50 rounded-none">
              <img
                src={imgMatch[2]}
                alt={imgMatch[1]}
                className="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              {imgMatch[1] && (
                <div className="absolute bottom-0 left-0 w-full bg-[#0a0435]/95 backdrop-blur-md text-white md:text-base text-sm px-5 py-3 rounded-none italic tracking-wide text-center shadow-2xl border-b-2 border-[#ec4899]">
                  {imgMatch[1]}
                </div>
              )}
            </div>
          </div>
        );
        i++;
        continue;
      }


      // Blockquote
      if (line.startsWith('> ')) {
        const bqLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('> ')) {
          bqLines.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <blockquote key={`bq-${i}`} className="relative border-l-4 border-[#ec4899] bg-gradient-to-r from-pink-50/60 to-transparent px-6 py-4 my-6 rounded-r-xl">
            <span className="absolute top-3 left-4 text-4xl text-[#ec4899]/20 font-serif leading-none select-none">"</span>
            {bqLines.map((bl, bi) => (
              <p key={bi} className="italic text-gray-700 text-[1.05rem] leading-relaxed relative z-10">
                {renderInline(bl, `bq-${i}-${bi}`)}
              </p>
            ))}
          </blockquote>
        );
        continue;
      }

      // Heading
      const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headerMatch) {
        const level = headerMatch[1].length;
        const text = headerMatch[2];
        const id = text.toLowerCase().replace(/\s+/g, '-');
        const headingClasses: Record<number, string> = {
          1: 'text-3xl md:text-4xl font-black text-[#0a0435] mt-10 mb-4 tracking-tight scroll-mt-32',
          2: 'text-2xl md:text-3xl font-black text-[#0a0435] mt-8 mb-3 tracking-tight scroll-mt-32 pb-2 border-b border-gray-100',
          3: 'text-xl md:text-2xl font-extrabold text-[#0a0435] mt-6 mb-2 scroll-mt-32',
          4: 'text-lg font-bold text-[#0a0435] mt-5 mb-2 scroll-mt-32',
          5: 'text-base font-bold text-gray-700 mt-4 mb-1 scroll-mt-32',
          6: 'text-sm font-bold text-gray-500 mt-4 mb-1 scroll-mt-32 uppercase tracking-wider',
        };
        const Tag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
        elements.push(
          <Tag key={`h-${i}`} id={id} className={headingClasses[level] || headingClasses[3]}>
            {level === 2 && <span className="inline-block w-1 h-5 bg-[#ec4899] rounded mr-2 align-middle -mt-0.5" />}
            {text}
          </Tag>
        );
        i++;
        continue;
      }

      // Horizontal rule
      if (/^---+$/.test(line.trim())) {
        elements.push(
          <div key={`hr-${i}`} className="my-8 flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]/60" />
            </div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        );
        i++;
        continue;
      }

      // Bullet list
      if (/^(\s*[-*+])\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^(\s*[-*+])\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*[-*+]\s/, ''));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="my-5 space-y-2.5 pl-1">
            {items.map((item, li) => (
              <li key={li} className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-[0.55em] w-2 h-2 rounded-full bg-[#ec4899] shadow-sm shadow-pink-200" />
                <span className="text-[#111827] text-[1.0625rem] leading-[1.8]">
                  {renderInline(item, `ul-${i}-${li}`)}
                </span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Numbered list
      if (/^\d+\.\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\.\s/, ''));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="my-5 space-y-2.5 pl-1 list-none">
            {items.map((item, li) => (
              <li key={li} className="flex gap-3 items-start">
                <span className="flex-shrink-0 min-w-[1.75rem] h-[1.75rem] rounded-md bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 border border-[#ec4899]/20 text-[#ec4899] text-xs font-black flex items-center justify-center">
                  {li + 1}
                </span>
                <span className="text-[#111827] text-[1.0625rem] leading-[1.8]">
                  {renderInline(item, `ol-${i}-${li}`)}
                </span>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Empty line — skip
      if (line.trim() === '') {
        i++;
        continue;
      }

      // Normal paragraph
      elements.push(
        <p key={`p-${i}`} className="text-[#111827] text-[1.0625rem] leading-[1.85] mb-4">
          {renderInline(line, `p-${i}`)}
        </p>
      );
      i++;
    }

    return elements;
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

  useEffect(() => {
    if (selectedBlog) {
      document.title = `${selectedBlog.meta_title || selectedBlog.title} | AI Blog`;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', selectedBlog.meta_description || selectedBlog.content.slice(0, 160));

      // Update keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      const keywords = [selectedBlog.focus_keyword, selectedBlog.secondary_keywords].filter(Boolean).join(', ');
      metaKeywords.setAttribute('content', keywords || "AI, Machine Learning, Data Science");

    } else {
      document.title = "AI Development Deep Dives - Blogs";
    }
  }, [selectedBlog]);

  if (selectedBlog) {
    const recentBlogs = blogs
      .filter(b => b.id !== selectedBlog.id)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 5);

    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar isDark={true} />

        <div className="max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-16 w-full grow">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Main Content Area */}
            <article className="lg:w-[75%]">
              {/* Cover Image First */}
              {selectedBlog.image_url && (
                <div className="relative w-full overflow-hidden border-t-4 border-[#ec4899] shadow-2xl mb-12 group/cover">
                  <img
                    src={selectedBlog.image_url}
                    alt={selectedBlog.title}
                    className="w-full h-[320px] md:h-[480px] object-cover transition-transform duration-700 group-hover/cover:scale-105"
                  />
                  {/* Bottom gradient fade for title readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              )}


              {/* Title and Metadata After Image */}
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-black text-[#0a0435] mb-4 leading-tight tracking-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-xs mb-4 border-b border-gray-100 pb-4 uppercase tracking-[0.1em]">
                  <div className="flex items-center gap-2 text-[#0a0435] font-black">
                    <Calendar size={16} className="text-[#ec4899]" />
                    {new Date(selectedBlog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 font-bold">
                    <Eye size={16} className="text-[#ec4899]" />
                    {selectedBlog.views || 0} Views
                  </div>

                  <div className="flex items-center gap-2 text-[#0a0435] font-black">
                    <User size={16} className="text-[#ec4899]" />
                    Suresh Beekhani
                  </div>
                </div>
              </div>

              {/* Table of Contents Section */}
              {getTOC(selectedBlog.content).length > 0 && (
                <div className="mb-6 bg-white border border-gray-200 p-6 rounded-lg inline-block shadow-sm transition-all duration-300 overflow-hidden">
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
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#ec4899] group-hover:underline transition-colors decoration-1 underline-offset-4 decoration-dotted">
                            {header.text}
                          </span>
                        </a>
                      ))}
                    </nav>
                  )}
                </div>
              )}

              <div className="prose prose-lg md:prose-xl max-w-none text-[#0f172a] leading-[1.85] mb-10 font-medium prose-p:mb-5 prose-headings:mb-3 prose-img:my-8 selection:bg-[#ec4899]/20">
                {renderContent(selectedBlog.content)}
              </div>

              {/* FAQ Section */}
              {selectedBlog.faqs && selectedBlog.faqs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-100 mb-12">
                  <div className="flex flex-col mb-8">
                    <h4 className="text-2xl md:text-4xl font-black text-[#0a0435] tracking-tight uppercase italic">
                      Frequently Asked <span className="text-[#ec4899]">Questions</span>
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {selectedBlog.faqs.map((faq, index) => (
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
                              <p className="text-gray-800 leading-relaxed text-base">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comment Section */}
              <div className="mt-16 pt-12 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 rounded-none bg-gradient-to-br from-[#ec4899] to-[#d928c1] flex items-center justify-center text-white shadow-lg">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0a0435] tracking-tight uppercase italic">
                      Conversations <span className="text-[#ec4899]">Deep Dive</span>
                    </h3>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-0.5">Share your insights & questions</p>
                  </div>
                </div>

                {/* Main Comment Form */}
                <div className="mb-12 bg-gray-50 p-6 md:p-8 border border-gray-100 relative group">
                   {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ec4899]/30" />
                  
                  <form onSubmit={(e) => handleCommentSubmit(e)} className="relative z-10">
                    <textarea
                      value={newCommentInput}
                      onChange={(e) => setNewCommentInput(e.target.value)}
                      placeholder="Write your comment here..."
                      className="w-full min-h-[120px] p-5 bg-white border border-gray-200 text-[#0a0435] focus:border-[#ec4899] focus:ring-4 focus:ring-[#ec4899]/5 outline-none transition-all text-base md:text-lg font-medium rounded-none resize-none"
                    />
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tighter">Your comment will be posted as <span className="text-[#ec4899] font-black">{getUserDisplayName(session)}</span></p>
                      <button
                        type="submit"
                        disabled={isSubmittingComment || !newCommentInput.trim()}
                        className="flex items-center gap-3 bg-[#0a0435] text-white px-8 py-3 rounded-none font-black text-sm tracking-widest uppercase hover:bg-[#ec4899] transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50"
                      >
                        {isSubmittingComment ? <Loader2 className="animate-spin" size={18} /> : (
                          <>
                            Post Comment <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Comments List */}
                <div className="space-y-12">
                  {isLoadingComments ? (
                    <div className="flex justify-center py-12">
                      <Loader2 className="animate-spin text-[#ec4899]" size={32} />
                    </div>
                  ) : comments.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-gray-200 flex flex-col items-center">
                      <MessageSquare className="text-gray-200 mb-4" size={48} />
                      <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">No comments yet. Start the conversation!</p>
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <CommentItem 
                        key={comment.id} 
                        comment={comment} 
                        onReply={(id) => setReplyingTo(id)}
                        onLike={handleCommentLike}
                        onDelete={handleCommentDelete}
                        replyingTo={replyingTo}
                        replyInput={replyInput}
                        setReplyInput={setReplyInput}
                        onReplySubmit={handleCommentSubmit}
                        isSubmitting={isSubmittingComment}
                        isAdmin={!!session?.user}
                      />
                    ))
                  )}
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center">
                <p className="text-gray-600 text-sm mb-6 italic font-medium">Thanks for reading!</p>
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
            <aside className="lg:w-[25%] pl-6 border-l-2 border-[#f755a9d9]">
              <div className="sticky top-32 space-y-6">                {/* Newsletter Box */}
                <div className="bg-white p-4 rounded-none shadow-sm border border-gray-100 relative overflow-hidden">
                  <h3 className="text-xl font-bold text-[#0a0435] mb-2 relative z-10 leading-tight">
                    Join Our <span className="text-[#ec4899]">Newsletter</span> for AI Updates
                  </h3>

                  {isSidebarSubscribed ? (
                    <div className="bg-fuchsia-50/50 border border-fuchsia-100 p-4 rounded-none relative z-10 flex flex-col items-center text-center animate-in fade-in duration-700">
                      <CheckCircle className="text-[#ec4899] mb-1" size={24} />
                      <p className="text-sm text-[#0a0435] font-bold">Successfully Joined!</p>
                      <p className="text-xs text-gray-600 mt-1">Check your inbox soon for AI insights.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSidebarSubscribe} className="relative z-10 space-y-2">
                      <div className="flex flex-col space-y-1.5">
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
                    <p className="text-[11px] text-gray-500 mt-1.5 relative z-10 text-center uppercase tracking-tighter font-medium">
                      Get the latest AI insights delivered to your inbox
                    </p>
                  )}
                </div>


                {/* Recent Posts Section */}
                <div className="mt-12">
                  <h3 className="text-[1.75rem] font-extrabold text-[#0a0435] mb-6">
                    Recent Posts
                  </h3>
                  <div className="space-y-8">
                    {recentBlogs.map(post => (
                      <div key={post.id} className="group cursor-pointer flex flex-col items-start text-left"
                        onClick={() => {
                          setSearchParams({ article: post.id });
                        }}>
                        {post.image_url && (
                          <div className="relative w-[90%] h-[140px] mb-4 overflow-hidden rounded-2xl border-t-4 border-[#d928c1]">
                            <img src={post.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                        )}
                        <h4
                          className="text-[1.2rem] font-bold text-[#0a0435] leading-snug group-hover:text-[#ec4899] transition-colors"
                        >
                          {post.title}
                        </h4>
                      </div>
                    ))}
                    {recentBlogs.length === 0 && (
                      <p className="text-gray-400 text-sm italic">No other posts yet.</p>
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
          <div
            className="inline-flex items-center justify-center mb-5 px-5 py-2.5 rounded-full border border-fuchsia-400/45 bg-fuchsia-500/15 backdrop-blur-sm text-sm md:text-base font-bold text-fuchsia-100 tracking-wide shadow-sm"
            aria-live="polite"
          >
            {selectedCategoryLabel}
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Stay Up-To-Date With Our Latest Blog
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal">
            {activeCategory === "all"
              ? "Discover fresh ideas and stay ahead with our latest blog posts."
              : `Showing posts in ${selectedCategoryLabel}. Explore guides and deep dives in this topic.`}
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
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer pb-2"
                  onClick={() => setSearchParams({ article: blog.id })}
                >
                  <div className="relative h-48 w-full overflow-hidden border-t-[5px] border-[#d928c1]">
                    {blog.image_url ? (
                      <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-700 text-sm mb-3 font-medium">
                      <Calendar className="mr-2 w-4 h-4 text-[#ec4899]" />
                      {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>

                    <h3 className="text-[1.1rem] font-bold text-[#0a0435] mb-8 leading-relaxed line-clamp-2 group-hover:text-[#ec4899] transition-colors">
                      {blog.title}
                    </h3>

                    <div className="mt-auto flex items-center text-[#ec4899] text-[0.95rem] font-bold uppercase tracking-wide">
                      Read More
                      <span className="ml-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
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
