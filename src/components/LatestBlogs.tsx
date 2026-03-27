import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

interface Blog {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
}

const LatestBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("status", "published")
          .order("created_at", { ascending: false })
          .limit(4);

        if (error) throw error;
        setBlogs(data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading || blogs.length === 0) {
    return null;
  }

  const mainBlog = blogs[0];
  const sideBlogs = blogs.slice(1);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-start gap-3 sm:gap-4 mb-3">
            <div
              className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1.5 rounded-full"
              style={{
                background: '#ff0ea3',
                transform: 'skewX(-15deg)'
              }}
            ></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
              Blogs & Articles
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            Showcasing our expertise, experience, and commitment to excellence in every piece we create.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Large Blog */}
          {mainBlog && (
            <div className="lg:col-span-7 flex flex-col">
              <Link
                to={`/blogs?article=${mainBlog.id}`}
                className="group flex flex-col h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-[280px] md:h-[350px] overflow-hidden border-t-[5px] border-[#ff0ea3]">
                  {mainBlog.image_url ? (
                    <img
                      src={mainBlog.image_url}
                      alt={mainBlog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-4 font-medium">
                    <Calendar className="mr-2 w-4 h-4 text-gray-400" />
                    {new Date(mainBlog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>

                  <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#0a0435] mb-4 leading-tight group-hover:text-[#ff0ea3] transition-colors line-clamp-2">
                    {mainBlog.title}
                  </h3>

                  <p className="text-gray-500 text-[0.95rem] mb-6 line-clamp-2 leading-relaxed">
                    {mainBlog.content
                      .replace(/!\[.*?\]\(.*?\)/g, "")
                      .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
                      .replace(/[#*`~_>-]/g, "")
                      .trim()}
                  </p>

                  <div className="mt-auto flex items-center text-[#ff0ea3] text-[0.95rem] font-semibold">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Side Small Blogs */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {sideBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs?article=${blog.id}`}
                className="group flex flex-col sm:flex-row bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full sm:h-[180px]"
              >
                <div className="relative w-full sm:w-[40%] h-[180px] sm:h-full overflow-hidden border-l-0 sm:border-l-[5px] border-t-[5px] sm:border-t-0 border-[#ff0ea3]">
                  {blog.image_url ? (
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>

                <div className="p-4 sm:p-5 w-full sm:w-[60%] flex flex-col justify-between">
                  <div>
                    <h4 className="text-[1.1rem] font-bold text-[#0a0435] mb-2 leading-snug group-hover:text-[#ff0ea3] transition-colors line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4">
                      {blog.content
                        .replace(/!\[.*?\]\(.*?\)/g, "")
                        .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
                        .replace(/[#*`~_>-]/g, "")
                        .trim()}
                    </p>
                  </div>

                  <div className="flex items-center text-[#ff0ea3] text-xs font-semibold mt-auto">
                    Read more
                    <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
