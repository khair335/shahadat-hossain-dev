"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, User, Hash } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen pt-32 pb-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <PageHeader 
          title="Blog & Insights" 
          subtitle="Deep dives into modern web development, React architecture, and performance optimization." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group glassmorphism rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500 border-none shadow-xl hover:shadow-primary/5 flex flex-col"
            >
              {post.image && (
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 glassmorphism rounded-full text-[10px] font-black uppercase tracking-widest text-white border-none">
                      {post.category}
                    </span>
                  </div>
                </Link>
              )}
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-accent" />
                    <time>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-accent" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`} className="block mb-4">
                  <h2 className="text-2xl font-black text-foreground tracking-tighter font-outfit leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground mb-8 line-clamp-3 text-base font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                  &quot;{post.excerpt}&quot;
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background/50 border border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {post.authorImage && (
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={36}
                          height={36}
                          className="relative rounded-full ring-2 ring-background object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Author</span>
                      <span className="text-sm font-bold tracking-tight">{post.author}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-20 text-center">
          <Link href="/">
            <Button 
              radius="full" 
              variant="bordered" 
              className="px-10 h-16 font-black uppercase tracking-widest border-primary/20 hover:border-primary transition-all shadow-xl hover:shadow-primary/5 text-sm md:text-lg"
            >
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

