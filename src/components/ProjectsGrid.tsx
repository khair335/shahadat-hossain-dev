"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { ExternalLink, Github, Eye, Search, X, Code, ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import {
  SiNextdotjs,
  SiReact,
  SiStripe,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiWordpress,
  SiPhp,
  SiJavascript,
  SiChartdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiWix,
  SiRedux,
  SiFramer,
  SiReactquery,
  SiVuedotjs,
  SiVite,
  SiAxios,
  SiExpress,
  SiFigma
} from "react-icons/si";
import type { Project } from "@/lib/projects";

// Technology icon mapping
const techIcons: Record<string, React.ComponentType<{ className?: string; size?: number | string }>> = {
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Stripe": SiStripe,
  "MongoDB": SiMongodb,
  "Firebase": SiFirebase,
  "Tailwind CSS": SiTailwindcss,
  "WordPress": SiWordpress,
  "PHP": SiPhp,
  "JavaScript": SiJavascript,
  "Chart.js": SiChartdotjs,
  "Node.js": SiNodedotjs,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Wix": SiWix,
  "Redux": SiRedux,
  "Framer Motion": SiFramer,
  "React Query": SiReactquery,
  "Vue.js": SiVuedotjs,
  "Vite": SiVite,
  "Axios": SiAxios,
  "Express": SiExpress,
  "Figma": SiFigma,
  "API Integration": Code,
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSearch;
    });
  }, [searchQuery, projects]);

  return (
    <>
      {/* Search Control */}
      <div className="mt-20 mb-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism p-4 md:p-6 rounded-[2.5rem] shadow-xl border-none"
        >
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search projects by name, technology, or niche..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-14 py-5 rounded-2xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </motion.div>

        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Showing {filteredProjects.length} of {projects.length} results
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          >
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group glassmorphism rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500 border-none shadow-xl hover:shadow-primary/5 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <NextLink href={`/projects/${project.id}`}>
                      <Button isIconOnly radius="full" className="bg-white text-black hover:scale-110 transition-transform">
                        <Eye size={20} />
                      </Button>
                    </NextLink>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button isIconOnly radius="full" className="bg-primary text-white hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => {
                      const IconComponent = techIcons[tag] || Code;
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest"
                        >
                          <IconComponent size={12} />
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter font-outfit group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-8 line-clamp-3 text-base font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-border/50 flex items-center justify-between">
                    <NextLink href={`/projects/${project.id}`} className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-primary hover:gap-3 transition-all">
                      EXPLORE PROJECT <ChevronRight size={16} />
                    </NextLink>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 glassmorphism rounded-full">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 glassmorphism rounded-[3rem]"
          >
            <Search size={64} className="mx-auto mb-6 text-muted-foreground opacity-20" />
            <h3 className="text-2xl font-black tracking-tight font-outfit mb-2">No projects found</h3>
            <p className="text-muted-foreground font-medium mb-10">Try refining your search terms.</p>
            <Button
              radius="full"
              variant="bordered"
              onClick={() => setSearchQuery("")}
              className="font-black uppercase tracking-widest border-primary/20 hover:border-primary"
            >
              Clear Search
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
