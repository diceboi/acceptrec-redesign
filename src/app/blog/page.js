import Link from "next/link";
import { getPublicPosts, getPublicCategories } from "@/lib/blog-data";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = {
  title: "Insights & Resources | Accept Recruitment",
  description: "Stay up to date with the latest news, insights, and resources from Accept Recruitment.",
};

export default async function BlogPage({ searchParams }) {
  const category = (await searchParams).category || null;
  const page = parseInt((await searchParams).page) || 1;
  const limit = 15; // Jelenítsünk meg 15 posztot egy oldalon

  const [{ posts, count }, categories] = await Promise.all([
    getPublicPosts(page, limit, category),
    getPublicCategories()
  ]);

  const totalPages = Math.ceil(count / limit);

  return (
    <div className="min-h-screen selection:bg-teal-5/30 selection:text-teal-3 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-5/10 via-gray-50 dark:via-navy-900 to-gray-50 dark:to-navy-900 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-5/20 to-transparent blur-sm" />
        
        <div className="mx-auto max-w-[1140px] px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-5 to-teal-4 dark:from-teal-3 dark:to-teal-5">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white/60 mb-12 max-w-2xl mx-auto">
              Stay up to date with the latest industry news, recruitment insights, and company updates from our team of experts.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Link
                href="/blog"
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !category
                    ? "bg-teal-5 text-navy-900 shadow-[0_0_20px_rgba(51,193,191,0.3)]"
                    : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-navy-900 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white border border-black/10 dark:border-white/10"
                }`}
              >
                All Articles
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog?category=${cat.slug}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    category === cat.slug
                      ? "bg-teal-5 text-navy-900 shadow-[0_0_20px_rgba(51,193,191,0.3)]"
                      : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-navy-900 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white border border-black/10 dark:border-white/10"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-[1140px] px-6">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  {page > 1 && (
                    <Link
                      href={`/blog?page=${page - 1}${category ? `&category=${category}` : ""}`}
                      className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 hover:text-navy-900 dark:hover:text-white border border-black/10 dark:border-white/10 transition-colors font-semibold text-sm"
                    >
                      Previous
                    </Link>
                  )}
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNum = i + 1;
                      // Csak az aktív körüli oldalakat mutassuk, vagy az elsőt/utolsót (egyszerűsítve)
                      if (pageNum === 1 || pageNum === totalPages || (pageNum >= page - 1 && pageNum <= page + 1)) {
                        return (
                          <Link
                            key={pageNum}
                            href={`/blog?page=${pageNum}${category ? `&category=${category}` : ""}`}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                              page === pageNum
                                ? "bg-teal-5 text-navy-900"
                                : "text-gray-600 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 hover:text-navy-900 dark:hover:text-white"
                            }`}
                          >
                            {pageNum}
                          </Link>
                        );
                      } else if (pageNum === page - 2 || pageNum === page + 2) {
                        return <span key={pageNum} className="text-gray-400 dark:text-white/30 px-1">...</span>;
                      }
                      return null;
                    })}
                  </div>

                  {page < totalPages && (
                    <Link
                      href={`/blog?page=${page + 1}${category ? `&category=${category}` : ""}`}
                      className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 hover:text-navy-900 dark:hover:text-white border border-black/10 dark:border-white/10 transition-colors font-semibold text-sm"
                    >
                      Next
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 glass-card rounded-3xl border border-black/5 dark:border-white/10">
              <h3 className="text-2xl text-navy-900 dark:text-white font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-white/50">There are no articles published in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
