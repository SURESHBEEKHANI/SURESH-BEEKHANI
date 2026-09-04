import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, Zap } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — Velnix Locked Color System
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

// ─────────────────────────────────────────────────────────────────────────────
// SKELETON LOADER
// ─────────────────────────────────────────────────────────────────────────────
const SkeletonCard: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <div
    className={`animate-pulse ${featured ? 'h-full' : ''}`}
    style={{ background: C.graphite, border: `1px solid ${C.wa(0.06)}` }}
  >
    <div
      style={{ background: C.wa(0.05) }}
      className={featured ? 'h-64 sm:h-80' : 'h-28'}
    />
    <div className="p-5 space-y-3">
      <div className="h-2 w-16 rounded" style={{ background: C.wa(0.08) }} />
      <div className="h-4 w-3/4 rounded" style={{ background: C.wa(0.08) }} />
      <div className="h-3 w-full rounded" style={{ background: C.wa(0.05) }} />
      <div className="h-3 w-2/3 rounded" style={{ background: C.wa(0.05) }} />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED ARTICLE CARD
// ─────────────────────────────────────────────────────────────────────────────
const FeaturedCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blogs?article=${blog.id}`}
      aria-label={`Read featured article: ${blog.title}`}
      className="group flex flex-col h-full focus:outline-none"
      style={{
        border: `1px solid ${hovered ? C.la(0.3) : C.wa(0.08)}`,
        background: C.graphite,
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '320px' }}>
        {/* Lime top accent bar */}
        <div
          style={{
            height: 3,
            background: C.lime,
            width: hovered ? '100%' : '40%',
            transition: 'width 0.5s ease',
          }}
        />

        {blog.image_url ? (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: C.wa(0.03) }}
          >
            <Zap size={40} color={C.la(0.3)} />
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.2) 60%, transparent 100%)',
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[0.6rem] font-bold uppercase tracking-widest px-2.5 py-1"
            style={{ background: C.lime, color: C.black }}
          >
            {blog.category ?? 'AI & Automation'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="flex items-center gap-1.5 text-[0.7rem] font-medium"
            style={{ color: C.wa(0.45) }}
          >
            <Calendar size={12} />
            {formatDate(blog.created_at)}
          </span>
          <span
            className="flex items-center gap-1.5 text-[0.7rem] font-medium"
            style={{ color: C.wa(0.45) }}
          >
            <Clock size={12} />
            {blog.read_time ?? '5 min read'}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl sm:text-2xl lg:text-[1.6rem] font-extrabold leading-snug mb-4 line-clamp-3"
          style={{ color: hovered ? C.lime : C.white, transition: 'color 0.3s' }}
        >
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed line-clamp-2 mb-6 flex-grow"
          style={{ color: C.wa(0.55) }}
        >
          {stripMarkdown(blog.content)}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-auto"
          style={{ color: C.lime }}
        >
          Read Article
          <ArrowRight
            size={14}
            style={{
              transform: hovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      </div>
    </Link>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SUPPORTING ARTICLE CARD
// ─────────────────────────────────────────────────────────────────────────────
const fallbackCategories = ['Business Operations', 'Software', 'Data & Analytics'];

const SupportingCard: React.FC<{ blog: Blog; index: number }> = ({ blog, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blogs?article=${blog.id}`}
      aria-label={`Read article: ${blog.title}`}
      className="group flex overflow-hidden focus:outline-none"
      style={{
        background: C.graphite,
        border: `1px solid ${hovered ? C.la(0.25) : C.wa(0.07)}`,
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{ width: '38%', minHeight: '160px' }}
      >
        {/* Lime left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: C.lime,
            zIndex: 2,
          }}
        />

        {blog.image_url ? (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: C.wa(0.03) }}
          >
            <Zap size={24} color={C.la(0.3)} />
          </div>
        )}

        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(17,17,17,0.4), transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="flex flex-col justify-between p-4 sm:p-5"
        style={{ width: '62%' }}
      >
        <div>
          {/* Category */}
          <span
            className="text-[0.58rem] font-bold uppercase tracking-widest mb-2 inline-block"
            style={{ color: C.lime }}
          >
            {blog.category ?? fallbackCategories[index % fallbackCategories.length]}
          </span>

          {/* Title */}
          <h4
            className="text-sm font-bold leading-snug mb-2 line-clamp-2"
            style={{ color: hovered ? C.lime : C.white, transition: 'color 0.3s' }}
          >
            {blog.title}
          </h4>

          {/* Excerpt */}
          <p
            className="text-[0.72rem] leading-relaxed line-clamp-2"
            style={{ color: C.wa(0.45) }}
          >
            {stripMarkdown(blog.content)}
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-wider mt-3"
          style={{ color: C.lime }}
        >
          Read Article
          <ArrowRight
            size={11}
            style={{
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      </div>
    </Link>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const LatestBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewAllHovered, setViewAllHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        className="py-16 sm:py-24 relative overflow-hidden"
        style={{ background: C.black, color: C.white }}
        aria-label="Loading latest insights"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="h-2.5 w-28 rounded animate-pulse" style={{ background: C.wa(0.08) }} />
              <div className="h-8 w-72 rounded animate-pulse" style={{ background: C.wa(0.08) }} />
              <div className="h-3 w-96 rounded animate-pulse" style={{ background: C.wa(0.05) }} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7">
              <SkeletonCard featured />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  const featuredBlog = blogs[0];
  const supportingBlogs = blogs.slice(1, 4);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 relative overflow-hidden antialiased"
      style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white }}
      aria-labelledby="insights-heading"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/3 left-1/4 rounded-full blur-[180px]"
          style={{ width: 480, height: 480, background: C.la(0.025) }}
        />
        <div
          className="absolute bottom-0 right-1/3 rounded-full blur-[140px]"
          style={{ width: 360, height: 360, background: C.ga(0.018) }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ══════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{
                  border: `1px solid ${C.la(0.3)}`,
                  background: C.la(0.06),
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: C.lime,
                    boxShadow: `0 0 8px ${C.lime}`,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: C.lime,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  INSIGHTS & ARTICLES
                </span>
              </span>
            </div>

            {/* Headline */}
            <h2
              id="insights-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3"
              style={{ color: C.white }}
            >
              Ideas for Building{' '}
              <span style={{ color: C.lime }}>Smarter Businesses.</span>
            </h2>

            {/* Sub-copy */}
            <p
              className="text-xs sm:text-sm font-normal leading-relaxed max-w-xl"
              style={{ color: C.wa(0.5) }}
            >
              Practical perspectives on AI, automation, software, and the systems helping modern businesses operate better.
            </p>
          </div>

          {/* View All CTA */}
          <Link
            to="/blogs"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3"
            style={{
              color: viewAllHovered ? C.black : C.lime,
              background: viewAllHovered ? C.lime : 'transparent',
              border: `1px solid ${C.la(0.4)}`,
              boxShadow: viewAllHovered ? `0 4px 16px ${C.la(0.3)}` : 'none',
              transition: 'all 0.25s ease',
            }}
            aria-label="View all insights and articles"
            onMouseEnter={() => setViewAllHovered(true)}
            onMouseLeave={() => setViewAllHovered(false)}
          >
            View All Insights
            <ArrowRight
              size={13}
              style={{
                transform: viewAllHovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.25s ease',
              }}
            />
          </Link>
        </div>

        {/* ══════════════════════════════════════════════════════
            ARTICLE GRID — Featured + Supporting
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* FEATURED ARTICLE */}
          <div className="lg:col-span-7">
            <FeaturedCard blog={featuredBlog} />
          </div>

          {/* SUPPORTING ARTICLES */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {supportingBlogs.map((blog, i) => (
              <SupportingCard key={blog.id} blog={blog} index={i} />
            ))}

            {supportingBlogs.length === 0 && (
              <div
                className="flex-1 flex items-center justify-center text-xs"
                style={{
                  color: C.wa(0.3),
                  border: `1px dashed ${C.wa(0.1)}`,
                  padding: '2rem',
                }}
              >
                More articles coming soon.
              </div>
            )}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            BOTTOM GRADIENT RULE
        ══════════════════════════════════════════════════════ */}
        <div
          className="mt-16 h-px"
          style={{
            background: `linear-gradient(to right, ${C.la(0.2)}, transparent)`,
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default LatestBlogs;


