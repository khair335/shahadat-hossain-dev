
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import { Button } from "@nextui-org/react";

const BlogSection = () => {
  const posts = getAllBlogPosts().slice(0, 3); // Show only first 3 on homepage

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Sharing my thoughts and knowledge on the latest trends in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-8 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 group"
            >
              <header className="mb-6">
                <time className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  {post.date}
                </time>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </header>
              <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:gap-3 transition-all"
              >
                READ MORE <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20 px-6"
        >
          <Link href="/blog" className="block sm:inline-block w-full sm:w-auto">
            <Button 
              size="lg" 
              radius="full" 
              variant="bordered"
              className="w-full sm:w-auto px-10 h-16 text-sm md:text-lg font-black uppercase tracking-widest border-primary/20 hover:border-primary transition-all shadow-xl hover:shadow-primary/5"
            >
              All Articles
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
