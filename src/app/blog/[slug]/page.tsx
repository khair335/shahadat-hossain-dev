import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2 } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex mb-12 group">
          <div className="flex items-center justify-center font-black text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-primary/10 transition-all cursor-pointer">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </div>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="mb-8">
            <span className="px-5 py-2 glassmorphism rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary border-none">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-10 tracking-tighter font-outfit leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-10 text-[10px] font-black uppercase tracking-widest text-muted-foreground pb-12 border-b border-border/50">
            <div className="flex items-center gap-4">
              {post.authorImage && (
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-[2px]" />
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={48}
                    height={48}
                    className="relative rounded-full ring-2 ring-background object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground opacity-60">Author</span>
                <span className="text-sm font-bold text-foreground tracking-tight normal-case">{post.author}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground opacity-60">Published</span>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground tracking-tight normal-case">
                <Calendar size={14} className="text-primary" />
                <time>{post.date}</time>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground opacity-60">Read Time</span>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground tracking-tight normal-case">
                <Clock size={14} className="text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full aspect-[21/9] mb-20 rounded-[3rem] overflow-hidden shadow-2xl border border-border/20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="glassmorphism rounded-[3rem] p-8 md:p-16 shadow-2xl border-none relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Share2 size={120} />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-outfit prose-headings:font-black prose-headings:tracking-tighter prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary">
            <div 
              className="blog-content font-medium"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          </div>
          
          {/* Tags */}
          <div className="mt-16 pt-12 border-t border-border/30">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-background/50 border border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground rounded-full hover:text-primary hover:border-primary/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            {post.authorImage && (
              <Image
                src={post.authorImage}
                alt={post.author}
                width={64}
                height={64}
                className="rounded-full object-cover ring-4 ring-primary/10 shadow-xl"
              />
            )}
            <div>
              <p className="text-lg font-black tracking-tight font-outfit">{post.author}</p>
              <p className="text-sm text-muted-foreground font-medium">Technical Lead & Open Source Advocate</p>
            </div>
          </div>
          
          <Link href="/blog">
            <div className="flex items-center justify-center px-8 h-14 rounded-full font-black uppercase tracking-widest border border-primary/20 hover:border-primary transition-all shadow-xl hover:shadow-primary/5 text-xs cursor-pointer">
              Explore More Articles
            </div>
          </Link>
        </footer>
      </div>
    </main>
  );
}

