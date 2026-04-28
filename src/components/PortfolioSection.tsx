import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { projects } from "@/lib/projects";
import { Button } from "@nextui-org/react";
import PageHeader from "@/components/PageHeader";

// Show only first 4 projects on homepage
const featuredProjects = projects.slice(0, 4);

const PortfolioSection = () => (
  <section id="portfolio" className="relative py-32 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

    <div className="max-w-7xl mx-auto px-6">
      <PageHeader 
        title="Featured Portfolio" 
        subtitle="A selection of my most recent projects, showcasing my expertise in building high-performance web applications." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group glassmorphism rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500 border-none shadow-xl hover:shadow-primary/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <Link href={`/projects/${project.id}`}>
                  <Button isIconOnly radius="full" className="bg-white text-black hover:scale-110 transition-transform">
                    <Eye size={20} />
                  </Button>
                </Link>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button isIconOnly radius="full" className="bg-primary text-white hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </Button>
                </a>
              </div>
            </div>

            <div className="p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter font-outfit group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-8 line-clamp-2 text-base font-medium leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:gap-3 transition-all text-primary">
                  LEARN MORE <ArrowRight size={16} />
                </Link>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 glassmorphism rounded-full">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-20 px-6"
      >
        <Link href="/projects" className="block sm:inline-block w-full sm:w-auto">
          <Button 
            size="lg" 
            radius="full" 
            variant="bordered"
            className="w-full sm:w-auto px-10 h-16 text-sm md:text-lg font-black uppercase tracking-widest border-primary/20 hover:border-primary transition-all shadow-xl hover:shadow-primary/5"
          >
            Explore All Projects
            <ArrowRight size={18} />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
