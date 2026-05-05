import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog-data";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { IconArrowLeft, IconCalendar, IconUser } from "@tabler/icons-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.seoTitle || `${post.title} | Accept Recruitment Insights`;
  const description = post.seoDescription || post.excerpt?.replace(/<[^>]+>/g, '').substring(0, 160) || "Read the latest insights from Accept Recruitment.";
  const ogImage = post.ogImage || post.coverImage || "/assets/images/about/about-hero.webp";

  return {
    title,
    description,
    keywords: post.seoKeywords,
    alternates: {
      canonical: post.canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const coverImage = post.coverImage || "/assets/images/about/about-hero.webp";

  return (
    <div className="min-h-screen selection:bg-teal-5/30 selection:text-teal-3 transition-colors duration-300">
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-[1140px] px-6">
          
          {/* Back button */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-teal-6 dark:text-teal-4 hover:text-teal-7 dark:hover:text-teal-3 font-semibold text-sm transition-colors"
            >
              <IconArrowLeft size={16} />
              Back to all articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-12 text-center">
            {post.category && (
              <span className="inline-block px-3 py-1.5 rounded-lg bg-teal-5/10 border border-teal-5/20 text-teal-6 dark:text-teal-4 text-xs font-bold uppercase tracking-widest mb-6">
                {post.category}
              </span>
            )}
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 dark:text-white/60 text-sm font-medium uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <IconCalendar size={16} className="text-teal-6 dark:text-teal-5" />
                <time dateTime={post.createdAt}>
                  {new Date(post.createdAt).toLocaleDateString("en-GB", {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <IconUser size={16} className="text-teal-6 dark:text-teal-5" />
                <span>{post.author || "Accept Recruitment"}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto relative aspect-video rounded-3xl overflow-hidden mb-16 glass-card p-2 border border-black/5 dark:border-white/10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            {/* 
              Tailwind Typography plugin is used here:
              prose: alap formázás
              dark:prose-invert: sötét témához igazított színek
            */}
            <div 
              className="prose dark:prose-invert prose-lg prose-teal max-w-none 
                         prose-headings:font-bold prose-headings:text-navy-900 dark:prose-headings:text-white 
                         prose-p:text-gray-600 dark:prose-p:text-white/70 prose-p:leading-relaxed 
                         prose-a:text-teal-6 dark:prose-a:text-teal-4 prose-a:no-underline hover:prose-a:text-teal-7 hover:dark:prose-a:text-teal-3 hover:prose-a:underline
                         prose-img:rounded-xl prose-img:border prose-img:border-black/5 dark:prose-img:border-white/10
                         prose-blockquote:border-teal-5/50 prose-blockquote:bg-teal-5/5 dark:prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:font-medium prose-blockquote:text-navy-800 dark:prose-blockquote:text-white/90
                         prose-strong:text-navy-900 dark:prose-strong:text-white prose-strong:font-semibold
                         prose-li:text-gray-600 dark:prose-li:text-white/70"
              dangerouslySetInnerHTML={{ __html: post.content || post.excerpt || "No content provided." }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10">
                <h3 className="text-navy-900 dark:text-white font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag.slug}
                      className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-white/60 text-xs font-semibold uppercase tracking-wider border border-black/5 dark:border-white/10"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </article>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  );
}
