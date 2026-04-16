
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

const BlogSection = () => {
  const posts = getAllBlogPosts().slice(0, 3); // Show only first 3 on homepage

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.54 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Blog & Insights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-5"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Sharing knowledge to help React developers in Bangladesh and beyond!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.49, delay: idx * 0.13 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-7 shadow-lg hover:shadow-xl group"
            >
              <header>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{post.title}</h3>
                <time className="text-xs font-medium text-blue-600 dark:text-blue-400">{post.date}</time>
              </header>
              <p className="text-gray-600 dark:text-gray-300 my-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline mt-2"
              >
                Read More
                <ExternalLink size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            View All Posts
            <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
