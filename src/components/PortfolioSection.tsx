
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { projects } from "@/lib/projects";

// Show only first 4 projects on homepage
const featuredProjects = projects.slice(0, 4);

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          My Portfolio
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-5"></div>
        <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Some of my favorite projects as a <b>React developer from Bangladesh</b>.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot – project by Shahadat Hossain, React developer in Bangladesh`}
                width={800}
                height={480}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <Link href={`/projects/${project.id}`} className="w-full">
                  <CTAButton className="w-full flex items-center justify-center gap-2">
                    <Eye size={16} /> View Details
                  </CTAButton>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-5">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href={project.liveUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href={project.githubUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 font-medium"
                >
                  <Github size={16} />
                  Source
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* View All Projects Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link href="/projects">
          <CTAButton className="inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={16} />
          </CTAButton>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
