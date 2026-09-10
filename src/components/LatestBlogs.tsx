import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, Zap } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — Velnix Locked Color System
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface Blog {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  category?: string;
  read_time?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const stripMarkdown = (md: string): string =>
  md
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/[#*`~_>-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const getBlogImageUrl = (blog: Blog): string => blog.image_url;

// ─────────────────────────────────────────────────────────────────────────────
// SKELETON LOADER
// ─────────────────────────────────────────────────────────────────────────────
const SkeletonCard: React.FC = () => (
  <div
    className="animate-pulse rounded-2xl overflow-hidden"
    style={{ background: C.graphite, border: `1px solid ${C.wa(0.08)}` }}
  >
    <div
      style={{ background: C.wa(0.05) }}
      className="h-48"
    />
    <div className="p-6 sm:p-7 space-y-4">
      <div className="h-2 w-24 rounded-full" style={{ background: C.wa(0.08) }} />
      <div className="h-5 w-3/4 rounded" style={{ background: C.wa(0.08) }} />
      <div className="h-3 w-full rounded" style={{ background: C.wa(0.05) }} />
      <div className="h-3 w-2/3 rounded" style={{ background: C.wa(0.05) }} />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED ARTICLE CARD
// ─────────────────────────────────────────────────────────────────────────────
const BlogCard: React.FC<{ blog: Blog; index: number }> = ({ blog, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/blogs?article=${blog.id}`}
        aria-label={`Read article: ${blog.title}`}
        className="group flex flex-col h-full focus:outline-none rounded-2xl overflow-hidden"
        style={{
          background: C.graphite,
          border: `1px solid ${hovered ? C.la(0.3) : C.wa(0.08)}`,
          transition: 'border-color 0.3s, transform 0.3s',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          {getBlogImageUrl(blog) ? (
            <img
              src={getBlogImageUrl(blog)}
              alt={blog.title}
              className="w-full h-full object-cover"
              style={{
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: C.wa(0.03) }}
            >
              <Zap size={32} color={C.la(0.3)} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6 sm:p-7">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-4">
            <span
              className="flex items-center gap-1.5 text-[0.7rem] font-medium"
              style={{ color: C.wa(0.5) }}
            >
              <Calendar size={12} color={C.lime} />
              {formatDate(blog.created_at)}
            </span>
            <span
              className="flex items-center gap-1.5 text-[0.7rem] font-medium"
              style={{ color: C.wa(0.5) }}
            >
              <Clock size={12} color={C.lime} />
              {blog.read_time ?? '5 min read'}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-base sm:text-lg font-bold leading-snug mb-3 line-clamp-2"
            style={{ color: hovered ? C.lime : C.white, transition: 'color 0.3s' }}
          >
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p
            className="text-sm leading-relaxed line-clamp-2 mb-5 flex-grow"
            style={{ color: C.wa(0.6) }}
          >
            {stripMarkdown(blog.content)}
          </p>

          {/* CTA */}
          <div
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-auto pt-8"
            style={{
              color: C.lime,
              borderTop: `1px solid ${C.wa(0.1)}`,
            }}
          >
            Read Article
            <ArrowRight
              size={14}
              style={{
                transform: hovered ? 'translateX(6px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const LatestBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewAllHovered, setViewAllHovered] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        setBlogs(data || []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ── Skeleton loading state ──────────────────────────────────────────────────
  if (loading) {
    return (
      <section
        className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white }}
        aria-label="Loading latest insights"
      >
        {/* Background ambient lighting */}
        <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 left-1/3 rounded-full blur-[140px]" style={{ width: 500, height: 500, background: C.la(0.03) }} />
          <div className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]" style={{ width: 450, height: 450, background: C.ga(0.02) }} />
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <div className="h-2.5 w-32 rounded-full animate-pulse" style={{ background: C.wa(0.08) }} />
              <div className="h-8 w-80 rounded animate-pulse" style={{ background: C.wa(0.08) }} />
              <div className="h-4 w-96 rounded animate-pulse" style={{ background: C.wa(0.05) }} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  const displayBlogs = blogs.slice(0, 3);

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden antialiased"
      style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white }}
      aria-labelledby="insights-heading"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 rounded-full blur-[140px]" style={{ width: 500, height: 500, background: C.la(0.03) }} />
        <div className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]" style={{ width: 450, height: 450, background: C.ga(0.02) }} />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ══════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-7 bg-[#B6FF00]" aria-hidden="true" />
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                LATEST INSIGHTS
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Insights on technology, <span style={{ color: C.lime }}>AI and innovation</span>
            </h2>
          </div>

          {/* View All CTA */}
          <Link
            to="/blogs"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full"
            style={{
              color: viewAllHovered ? C.black : C.black,
              background: viewAllHovered ? C.lime : C.lime,
              border: `1px solid ${C.la(0.4)}`,
              boxShadow: viewAllHovered ? `0 8px 24px ${C.la(0.4)}` : `0 4px 12px ${C.la(0.15)}`,
              transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
            aria-label="View all insights and articles"
            onMouseEnter={() => setViewAllHovered(true)}
            onMouseLeave={() => setViewAllHovered(false)}
          >
            Explore More
            <ArrowRight
              size={14}
              style={{
                transform: viewAllHovered ? 'translateX(6px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>
        </div>

        {/* ══════════════════════════════════════════════════════
            ARTICLE GRID — 3 Card Layout
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {displayBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}

          {displayBlogs.length === 0 && (
            <div
              className="col-span-full flex items-center justify-center text-sm rounded-2xl"
              style={{
                color: C.wa(0.3),
                border: `1px dashed ${C.wa(0.1)}`,
                padding: '4rem',
                background: C.graphite,
              }}
            >
              More articles coming soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;


