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
          transition: 'border-color 0.3s',
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
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: C.wa(0.42) }}>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} color={C.lime} />
              {formatDate(blog.created_at)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} color={C.lime} />
              {blog.read_time ?? '5 min read'}
            </span>
          </div>

          {/* Title */}
          <h3
            className="mb-3 line-clamp-2 text-lg font-bold"
            style={{ color: hovered ? C.lime : C.white, transition: 'color 0.3s' }}
          >
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p
            className="mb-5 line-clamp-2 flex-grow text-sm leading-6"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {stripMarkdown(blog.content)}
          </p>

          {/* CTA */}
          <div
            className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold"
            style={{
              color: C.lime,
              borderTop: `1px solid ${C.wa(0.1)}`,
            }}
          >
            Read Article
            <ArrowRight
              size={17}
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
          .limit(4);

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
        className="relative overflow-hidden py-16 font-display sm:py-20 lg:py-24"
        style={{ color: C.white }}
        aria-label="Loading latest insights"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <div className="h-2.5 w-32 rounded-full animate-pulse" style={{ background: C.wa(0.08) }} />
              <div className="h-8 w-80 rounded animate-pulse" style={{ background: C.wa(0.08) }} />
              <div className="h-4 w-96 rounded animate-pulse" style={{ background: C.wa(0.05) }} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  const displayBlogs = blogs.slice(0, 4);

  return (
    <section
      className="relative overflow-hidden py-16 font-display antialiased sm:py-20 lg:py-24"
      style={{ color: C.white }}
      aria-labelledby="insights-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ══════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: C.lime }}
            >
              <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
              Latest Insights
            </motion.div>

            <h2 id="insights-heading" className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Insights on technology, <span style={{ color: C.lime }}>AI and innovation</span>
            </h2>
          </div>

          {/* View All CTA */}
          <Link
            to="/blogs"
            className="inline-flex shrink-0 items-center gap-3 rounded-full px-6 py-4 text-sm font-bold"
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
              size={17}
              style={{
                transform: viewAllHovered ? 'translateX(6px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>
        </div>

        {/* ══════════════════════════════════════════════════════
            ARTICLE GRID — 4 Card Layout
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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


