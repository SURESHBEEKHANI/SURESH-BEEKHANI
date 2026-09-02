import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { 
  Loader2, ArrowLeft, Calendar, User, CheckCircle, Search, 
  Eye, Plus, Minus, List, ArrowRight, Clock, BookOpen, Sparkles, Zap
} from "lucide-react";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS (Velnix Locked Color System)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

const CATEGORIES = [
  { id: "all", label: "All Insights" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "ai-development", label: "Software & AI Systems" },
  { id: "machine-deep-learning", label: "Data & Analytics" },
  { id: "chatbot-development", label: "Conversational AI" },
  { id: "predictive-modeling", label: "Operational Insights" },
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const viewedArticles = useRef<Set<string>>(new Set());
  const shouldReduce = useReducedMotion();

  // Scroll Progress Tracker for Article View
  useEffect(() => {
    if (!selectedBlog) return;
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedBlog]);

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
        if ((error as { code?: string })?.code === '23505') {
          toast.success('You’re already subscribed!', { style: { background: C.lime, color: C.black } });
          setSidebarEmail('');
          return;
        }
        throw error;
      }

      toast.success('Subscribed successfully!', { style: { background: C.lime, color: C.black } });
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

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridBlogs = filteredBlogs.length > 0 ? (activeCategory === "all" ? filteredBlogs.slice(1) : filteredBlogs) : [];

  const incrementViewCount = async (blogId: string, currentViews: number = 0) => {
    if (viewedArticles.current.has(blogId)) return;
    viewedArticles.current.add(blogId);

    setBlogs(prev => prev.map(b => b.id === blogId ? { ...b, views: (b.views || 0) + 1 } : b));
    setSelectedBlog(prev => prev?.id === blogId ? { ...prev, views: (prev.views || 0) + 1 } : prev);

    try {
      const { error: rpcError } = await supabase.rpc('increment_blog_view', { blog_id: blogId });
      if (rpcError) {
        await supabase.from("blogs").update({ views: (currentViews || 0) + 1 }).eq("id", blogId);
      }
    } catch (err) {
      console.warn("Could not increment view count:", err);
    }
  };

  const estimateReadingTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const renderContent = (content: string) => {
    const renderInline = (text: string, baseKey: string): React.ReactNode[] => {
      const segments = text.split(/(```[\s\S]*?```|`[^`]+`)/g);
      return segments.map((seg, si) => {
        if (seg.startsWith('```') && seg.endsWith('```')) {
          const code = seg.slice(3, -3).replace(/^\n/, '');
          return (
            <pre key={`${baseKey}-cb-${si}`} className="bg-[#111111] text-white/90 text-xs sm:text-sm rounded-none p-5 my-6 overflow-x-auto font-mono leading-relaxed border border-white/10">
              <code>{code}</code>
            </pre>
          );
        }
        if (seg.startsWith('`') && seg.endsWith('`') && seg.length > 2) {
          return (
            <code key={`${baseKey}-ic-${si}`} className="bg-[#B6FF00]/10 text-[#B6FF00] px-1.5 py-0.5 text-xs font-mono font-semibold">
              {seg.slice(1, -1)}
            </code>
          );
        }
        return seg.split(/(\*\*[\s\S]*?\*\*|\*[\s\S]*?\*|\[.*?\]\(.*?\))/g).map((sub, i) => {
          if (sub.startsWith('**') && sub.endsWith('**'))
            return <strong key={`${baseKey}-${si}-b${i}`} className="text-white font-bold">{sub.slice(2, -2)}</strong>;
          if (sub.startsWith('*') && sub.endsWith('*') && sub.length > 2)
            return <em key={`${baseKey}-${si}-em${i}`} className="italic text-white/80">{sub.slice(1, -1)}</em>;
          const lm = sub.match(/\[(.*?)\]\((.*?)\)/);
          if (lm)
            return <a key={`${baseKey}-${si}-lk${i}`} href={lm[2]} target="_blank" rel="noopener noreferrer" className="text-[#B6FF00] hover:underline font-semibold">{lm[1]}</a>;
          return <React.Fragment key={`${baseKey}-${si}-t${i}`}>{sub}</React.Fragment>;
        });
      });
    };

    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.trimStart().startsWith('```')) {
        const lang = line.replace(/^```/, '').trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trimStart().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <div key={`code-${i}`} className="my-6 rounded-none overflow-hidden border border-white/10 shadow-2xl">
            {lang && (
              <div className="bg-[#111111] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#B6FF00] uppercase tracking-widest">{lang}</span>
              </div>
            )}
            <pre className="bg-[#050505] text-white/90 text-xs sm:text-sm p-5 overflow-x-auto font-mono leading-relaxed">
              <code>{codeLines.join('\n')}</code>
            </pre>
          </div>
        );
        i++;
        continue;
      }

      const imgMatch = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        elements.push(
          <div key={`img-${i}`} className="my-8">
            <div className="border-l-2 border-[#B6FF00] overflow-hidden bg-[#111111]">
              <img
                src={imgMatch[2]}
                alt={imgMatch[1]}
                className="w-full h-auto max-h-[420px] object-cover"
              />
              {imgMatch[1] && (
                <div className="bg-[#111111] text-white/70 text-xs px-4 py-2 italic border-t border-white/5">
                  {imgMatch[1]}
                </div>
              )}
            </div>
          </div>
        );
        i++;
        continue;
      }

      if (line.startsWith('> ')) {
        const bqLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('> ')) {
          bqLines.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <blockquote key={`bq-${i}`} className="border-l-2 border-[#B6FF00] bg-[#111111] px-6 py-4 my-6">
            {bqLines.map((bl, bi) => (
              <p key={bi} className="italic text-white/80 text-sm sm:text-base leading-relaxed">
                {renderInline(bl, `bq-${i}-${bi}`)}
              </p>
            ))}
          </blockquote>
        );
        continue;
      }

      const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headerMatch) {
        const level = headerMatch[1].length;
        const text = headerMatch[2];
        const id = text.toLowerCase().replace(/\s+/g, '-');
        const headingClasses: Record<number, string> = {
          1: 'text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight scroll-mt-32',
          2: 'text-xl sm:text-2xl font-bold text-white mt-8 mb-4 tracking-tight scroll-mt-32 pb-2 border-b border-white/10',
          3: 'text-lg sm:text-xl font-bold text-white mt-6 mb-3 scroll-mt-32',
          4: 'text-base sm:text-lg font-semibold text-white mt-5 mb-2 scroll-mt-32',
          5: 'text-sm font-semibold text-white/90 mt-4 mb-2 scroll-mt-32',
          6: 'text-xs font-semibold text-white/70 mt-4 mb-2 scroll-mt-32 uppercase tracking-wider',
        };
        const Tag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
        elements.push(
          <Tag key={`h-${i}`} id={id} className={headingClasses[level] || headingClasses[3]}>
            {text}
          </Tag>
        );
        i++;
        continue;
      }

      if (/^---+$/.test(line.trim())) {
        elements.push(
          <div key={`hr-${i}`} className="my-8 border-t border-white/10" />
        );
        i++;
        continue;
      }

      if (/^(\s*[-*+])\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^(\s*[-*+])\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*[-*+]\s/, ''));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="my-4 space-y-2 pl-2">
            {items.map((item, li) => (
              <li key={li} className="flex gap-3 items-start text-sm sm:text-base text-white/80 leading-relaxed">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                <span>{renderInline(item, `ul-${i}-${li}`)}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      if (/^\d+\.\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\.\s/, ''));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="my-4 space-y-2 pl-2">
            {items.map((item, li) => (
              <li key={li} className="flex gap-3 items-start text-sm sm:text-base text-white/80 leading-relaxed">
                <span className="shrink-0 font-bold text-xs px-2 py-0.5 bg-[#111111] text-[#B6FF00] border border-white/10">
                  {li + 1}
                </span>
                <span>{renderInline(item, `ol-${i}-${li}`)}</span>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      if (line.trim() === '') {
        i++;
        continue;
      }

      elements.push(
        <p key={`p-${i}`} className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 font-normal">
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
      document.title = `${selectedBlog.meta_title || selectedBlog.title} | Velnix Insights`;
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', selectedBlog.meta_description || selectedBlog.content.slice(0, 160));
    } else {
      document.title = "Velnix Insights — Strategic Business & AI Intelligence";
    }
  }, [selectedBlog]);

  // ───────────────────────────────────────────────────────────────────────────
  // VIEW: SINGLE ARTICLE READER
  // ───────────────────────────────────────────────────────────────────────────
  if (selectedBlog) {
    const recentBlogs = blogs
      .filter(b => b.id !== selectedBlog.id)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 4);

    return (
      <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
        {/* Reading Progress Indicator */}
        <div 
          className="fixed top-0 left-0 h-1 z-[110] transition-all duration-150"
          style={{ width: `${scrollProgress}%`, background: C.lime }}
        />

        <Navbar isDark={true} />

        <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            
            {/* Back Link */}
            <div className="mb-8">
              <button
                onClick={() => {
                  setSelectedBlog(null);
                  setSearchParams({});
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#B6FF00] transition-colors"
              >
                <ArrowLeft size={16} /> Back to Insights
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* MAIN ARTICLE BODY */}
              <article className="lg:col-span-8">
                
                {/* Header Metadata */}
                <div className="mb-8">
                  <span
                    className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4"
                    style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
                  >
                    {selectedBlog.category || 'Strategic Insight'}
                  </span>

                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
                    {selectedBlog.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-xs text-white/50 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} color={C.lime} />
                      <span>{new Date(selectedBlog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} color={C.lime} />
                      <span>{estimateReadingTime(selectedBlog.content)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={14} color={C.lime} />
                      <span>{selectedBlog.views || 0} Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} color={C.lime} />
                      <span>Suresh Beekhani</span>
                    </div>
                  </div>
                </div>

                {/* Hero Feature Image */}
                {selectedBlog.image_url && (
                  <div className="mb-10 overflow-hidden border border-white/10" style={{ background: C.graphite }}>
                    <img
                      src={selectedBlog.image_url}
                      alt={selectedBlog.title}
                      className="w-full h-auto max-h-[440px] object-cover"
                    />
                  </div>
                )}

                {/* Table of Contents */}
                {getTOC(selectedBlog.content).length > 0 && (
                  <div className="mb-10 p-6" style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}` }}>
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setIsTocOpen(!isTocOpen)}
                    >
                      <div className="flex items-center gap-2">
                        <List size={16} color={C.lime} />
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                          Table of Contents
                        </h3>
                      </div>
                      <ChevronDown size={16} className={`transition-transform ${isTocOpen ? 'rotate-180' : ''}`} color={C.wa(0.5)} />
                    </div>

                    {isTocOpen && (
                      <nav className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-white/10 text-xs">
                        {getTOC(selectedBlog.content).map((header, i) => (
                          <a
                            key={i}
                            href={`#${header.text.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-white/70 hover:text-[#B6FF00] transition-colors"
                          >
                            <span className="text-white/30 mr-2">{i + 1}.</span>
                            {header.text}
                          </a>
                        ))}
                      </nav>
                    )}
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-invert max-w-none mb-12">
                  {renderContent(selectedBlog.content)}
                </div>

                {/* Contextual Commercial CTA Box */}
                <div 
                  className="p-8 my-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  style={{ background: C.graphite, border: `1px solid ${C.la(0.3)}` }}
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#B6FF00] mb-1 block">
                      Operational Next Step
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Have a workflow worth automating?
                    </h3>
                    <p className="text-xs text-white/60 max-w-md">
                      Let's assess your current manual processes and determine where AI or automation creates measurable impact.
                    </p>
                  </div>
                  <a
                    href="https://calendar.app.google/F63aBoA5vxJdtihj7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-black uppercase tracking-wider shrink-0 transition-all"
                    style={{ background: C.lime }}
                  >
                    Discuss Your Workflow <ArrowRight size={14} />
                  </a>
                </div>

                {/* FAQ Section */}
                {selectedBlog.faqs && selectedBlog.faqs.length > 0 && (
                  <div className="mt-14 pt-10 border-t border-white/10 mb-12">
                    <h3 className="text-xl font-bold text-white mb-6">
                      Frequently Asked Questions
                    </h3>

                    <div className="space-y-3">
                      {selectedBlog.faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border transition-all duration-200"
                          style={{
                            background: C.graphite,
                            borderColor: openFaq === index ? C.la(0.4) : C.wa(0.08),
                          }}
                        >
                          <button
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full p-4 flex items-center justify-between text-left"
                          >
                            <span className="text-sm font-semibold text-white">
                              {faq.q}
                            </span>
                            {openFaq === index ? (
                              <Minus size={16} color={C.lime} className="shrink-0" />
                            ) : (
                              <Plus size={16} color={C.wa(0.4)} className="shrink-0" />
                            )}
                          </button>

                          {openFaq === index && (
                            <div className="px-4 pb-4 pt-1 border-t border-white/5 text-xs text-white/70 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </article>

              {/* RIGHT SIDEBAR */}
              <aside className="lg:col-span-4 flex flex-col gap-10">
                
                {/* Newsletter Box */}
                <div 
                  className="p-6"
                  style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}` }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    Subscribe to Insights
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    Get practical ideas for automating workflows and adopting AI in business operations.
                  </p>

                  {isSidebarSubscribed ? (
                    <div className="p-3 bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-xs text-[#B6FF00] font-bold">
                      ✓ Subscribed! You will receive our latest updates.
                    </div>
                  ) : (
                    <form onSubmit={handleSidebarSubscribe} className="space-y-3">
                      <input
                        type="email"
                        value={sidebarEmail}
                        onChange={(e) => setSidebarEmail(e.target.value)}
                        placeholder="Your work email"
                        className="w-full h-10 px-3 bg-[#050505] text-white placeholder-white/40 text-xs outline-none"
                        style={{ border: `1px solid ${C.wa(0.15)}` }}
                      />
                      <button
                        type="submit"
                        disabled={isSidebarSubmitting}
                        className="w-full h-10 font-bold text-xs text-black uppercase tracking-wider transition-all"
                        style={{ background: C.lime }}
                      >
                        {isSidebarSubmitting ? "Processing..." : "Subscribe"}
                      </button>
                    </form>
                  )}
                </div>

                {/* Recent Articles */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 pb-2 border-b border-white/10">
                    Recent Insights
                  </h3>

                  <div className="flex flex-col gap-4">
                    {recentBlogs.map(post => (
                      <div 
                        key={post.id} 
                        className="group cursor-pointer p-4 transition-all duration-200"
                        style={{ background: C.graphite, border: `1px solid ${C.wa(0.06)}` }}
                        onClick={() => setSearchParams({ article: post.id })}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = C.la(0.3);
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = C.wa(0.06);
                        }}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B6FF00] block mb-1">
                          {post.category || 'Insight'}
                        </span>
                        <h4 className="text-xs font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

              </aside>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // VIEW: INSIGHTS HOMEPAGE
  // ───────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/3 rounded-full blur-[140px]" style={{ width: 600, height: 600, background: C.la(0.04) }} />
      </div>

      <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* ══════════════════════════════════════════════════════
              HERO HEADER
          ══════════════════════════════════════════════════════ */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{
                  border: `1px solid ${C.la(0.3)}`,
                  background: C.la(0.06),
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: `0 0 8px ${C.lime}` }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  VELNIX INSIGHTS
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: C.white,
                marginBottom: '1.25rem',
              }}
            >
              Where Business Problems Meet{' '}
              <span style={{ color: C.lime }}>Intelligent Technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: C.wa(0.72),
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              Practical intelligence, engineering frameworks, and strategic guidance for SMB decision-makers evaluating AI, automation, software, and workflow optimization.
            </motion.p>
          </div>

          {/* ══════════════════════════════════════════════════════
              CATEGORY NAVIGATION & SEARCH BAR
          ══════════════════════════════════════════════════════ */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between mb-12 pb-8 border-b border-white/10">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{
                    background: activeCategory === cat.id ? C.lime : C.graphite,
                    color: activeCategory === cat.id ? C.black : C.wa(0.7),
                    border: `1px solid ${activeCategory === cat.id ? C.lime : C.wa(0.1)}`,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-10 bg-[#111111] text-white placeholder-white/40 text-xs outline-none transition-all duration-200"
                style={{ border: `1px solid ${C.wa(0.12)}` }}
                onFocus={(e) => e.target.style.borderColor = C.lime}
                onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
              />
              <Search size={14} color={C.lime} className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════
              FEATURED ARTICLE CARD
          ══════════════════════════════════════════════════════ */}
          {!loading && featuredBlog && activeCategory === "all" && !searchQuery && (
            <div className="mb-16">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B6FF00] mb-3 block">
                Featured Strategic Insight
              </span>

              <div 
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 transition-all duration-300"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.12)}`,
                }}
                onClick={() => setSearchParams({ article: featuredBlog.id })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.la(0.4);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.wa(0.12);
                }}
              >
                {/* Image */}
                <div className="lg:col-span-6 overflow-hidden max-h-[320px] bg-[#050505]">
                  {featuredBlog.image_url ? (
                    <img
                      src={featuredBlog.image_url}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center text-xs text-white/30">Velnix Editorial</div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span 
                      className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-3"
                      style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
                    >
                      {featuredBlog.category || 'Strategic Insight'}
                    </span>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-tight mb-4">
                      {featuredBlog.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-white/60 line-clamp-3 leading-relaxed mb-6">
                      {featuredBlog.meta_description || featuredBlog.content.slice(0, 180)}...
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                    <div className="flex items-center gap-4 text-white/40">
                      <span>{new Date(featuredBlog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{estimateReadingTime(featuredBlog.content)}</span>
                    </div>

                    <span className="inline-flex items-center gap-2 text-[#B6FF00] font-bold text-xs group-hover:translate-x-1 transition-transform">
                      Read Strategic Insight <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              ARTICLE GRID
          ══════════════════════════════════════════════════════ */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6 pb-2 border-b border-white/10">
              {activeCategory === "all" ? "Latest Published Insights" : `Insights in ${CATEGORIES.find(c => c.id === activeCategory)?.label}`}
            </h3>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-[#B6FF00]" size={40} />
              </div>
            ) : gridBlogs.length === 0 && (!featuredBlog || activeCategory !== "all") ? (
              <div className="text-center py-20 p-8" style={{ background: C.graphite, border: `1px solid ${C.wa(0.08)}` }}>
                <p className="text-sm text-white/60">No strategic insights found matching your criteria.</p>
                <p className="text-xs text-white/40 mt-1">Try resetting search or switching categories.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {gridBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="group cursor-pointer flex flex-col justify-between p-6 transition-all duration-300"
                    style={{
                      background: C.graphite,
                      border: `1px solid ${C.wa(0.08)}`,
                    }}
                    onClick={() => setSearchParams({ article: blog.id })}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.la(0.3);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.wa(0.08);
                    }}
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="overflow-hidden h-40 mb-4 bg-[#050505]">
                        {blog.image_url ? (
                          <img 
                            src={blog.image_url} 
                            alt={blog.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-white/20">Velnix Editorial</div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-white/40 mb-2">
                        <span className="font-bold uppercase tracking-wider text-[#B6FF00]">
                          {blog.category || 'Insight'}
                        </span>
                        <span>{estimateReadingTime(blog.content)}</span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-snug mb-3 line-clamp-2">
                        {blog.title}
                      </h4>

                      <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-6">
                        {blog.meta_description || blog.content.slice(0, 140)}...
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                      <span className="text-[11px] text-white/40">
                        {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#B6FF00] font-bold text-xs group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════
              BOTTOM CONVERSATION CTA BANNER
          ══════════════════════════════════════════════════════ */}
          <div 
            className="mt-20 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{
              background: C.graphite,
              border: `1px solid ${C.la(0.25)}`,
            }}
          >
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#B6FF00] mb-2 block">
                Turn Insights Into Action
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to evaluate your business automation opportunities?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Talk to our engineering leads about identifying operational bottlenecks, automating tasks, and building custom AI systems.
              </p>
            </div>

            <a
              href="https://calendar.app.google/F63aBoA5vxJdtihj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold text-black uppercase tracking-wider shrink-0 transition-all"
              style={{ background: C.lime }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.green; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.lime; }}
            >
              Book A Strategy Call <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
