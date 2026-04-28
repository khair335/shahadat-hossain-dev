"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Github,
  Calendar,
  Clock,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  Code,
  Globe,
  Zap,
  Shield,
  Smartphone,
  Monitor,
  Palette,
  Layers,
  Maximize2,
  X,
  ExternalLink,
  ChevronRight as ChevronIcon
} from "lucide-react";
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
import { projects, Project } from "@/lib/projects";
import { Button } from "@nextui-org/react";

// Technology icon mapping
const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
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

const ProjectDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = useCallback(() => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  }, [project]);

  const prevImage = useCallback(() => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  }, [project]);

  useEffect(() => {
    if (params?.slug) {
      const foundProject = projects.find(p => p.id.toString() === params.slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push('/projects');
      }
    }
  }, [params?.slug, router]);

  if (!project) return null;

  const projectStats = [
    { icon: Calendar, label: "Completion", value: project.completionDate },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Users, label: "Team Size", value: project.teamSize },
    { icon: Star, label: "Rating", value: project.rating },
  ];

  return (
    <main className="min-h-screen pt-32 pb-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/projects">
            <Button 
              radius="full" 
              variant="light" 
              className="font-black text-[10px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            {project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button radius="full" className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-8 shadow-xl shadow-primary/20">
                  <Globe size={16} className="mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button radius="full" variant="bordered" className="font-black text-[10px] uppercase tracking-widest border-primary/20 hover:border-primary transition-all">
                  <Github size={16} className="mr-2" />
                  Source Code
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="px-5 py-2 glassmorphism rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary border-none mb-8 inline-block">
                Project Case Study
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter font-outfit leading-[1.1] mb-8">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium opacity-80 italic">
                &quot;{project.description}&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {projectStats.map((stat) => (
                <div key={stat.label} className="glassmorphism p-6 rounded-[2rem] text-center border-none shadow-xl">
                  <stat.icon className="w-6 h-6 mx-auto mb-4 text-primary" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{stat.label}</p>
                  <p className="font-bold tracking-tight">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3">
                <Code size={14} className="text-primary" />
                Technical Ecosystem
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => {
                  const IconComponent = techIcons[tag] || Code;
                  return (
                    <span key={tag} className="px-6 py-3 glassmorphism rounded-full flex items-center gap-3 text-xs font-bold border-none hover:border-primary/30 transition-all group">
                      <IconComponent className="group-hover:text-primary transition-colors" />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-border/20 group">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={600}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-white text-2xl font-black tracking-tighter font-outfit mb-4">Core Vision</h3>
                <p className="text-white/70 text-sm leading-relaxed font-medium line-clamp-4">
                  {project.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter font-outfit mb-4">Innovation Architecture</h2>
            <p className="text-muted-foreground uppercase text-[10px] font-black tracking-[0.3em]">Built for scale, security, and speed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Extreme Performance", desc: "Optimized delivery for global accessibility." },
              { icon: Shield, title: "Vault-Grade Security", desc: "Enterprise security protocols as standard." },
              { icon: Smartphone, title: "Fluid Mobility", desc: "Impeccable experience across all devices." },
              { icon: Monitor, title: "Pixel Fidelity", desc: "Consistent rendering on every viewport." },
              { icon: Palette, title: "Intuitive UX", desc: "Psychology-driven interaction design." },
              { icon: Layers, title: "Modular Scalability", desc: "Future-ready structural engineering." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glassmorphism p-10 rounded-[2.5rem] border-none shadow-xl group hover:shadow-primary/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-black tracking-tighter font-outfit mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Page Breakdown */}
        <section className="mb-32 space-y-20">
          <div className="flex items-end justify-between border-b border-border/50 pb-8">
            <h2 className="text-4xl font-black tracking-tighter font-outfit">Project Walkthrough</h2>
            <span className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">{project.pages.length} Key Milestones</span>
          </div>
          
          <div className="space-y-32">
            {project.pages.map((page, index) => (
              <div key={page.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="w-16 h-16 rounded-full glassmorphism flex items-center justify-center text-2xl font-black font-outfit border-none shadow-xl text-primary">
                      {index + 1}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter font-outfit">
                      {page.title}
                    </h3>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium italic">
                    &quot;{page.description}&quot;
                  </p>
                  <div className="flex gap-8">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary">
                      <Eye size={16} /> Interactive
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent">
                      <Code size={16} /> Responsive
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-border/20 group">
                    <Image
                      src={page.image}
                      alt={page.title}
                      width={800}
                      height={500}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Gallery */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black tracking-tighter font-outfit">Visual Artifacts</h2>
            <Button radius="full" variant="light" onClick={() => setIsFullscreen(true)} className="font-black text-[10px] uppercase tracking-widest opacity-60">
              <Maximize2 size={16} className="mr-2" /> Expand Gallery
            </Button>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-border/20 aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.gallery[currentImageIndex]}
                  alt="Gallery"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8 pointer-events-none">
              <Button isIconOnly radius="full" onClick={prevImage} className="pointer-events-auto glassmorphism border-none text-white hover:bg-primary transition-all">
                <ChevronLeft size={24} />
              </Button>
              <Button isIconOnly radius="full" onClick={nextImage} className="pointer-events-auto glassmorphism border-none text-white hover:bg-primary transition-all">
                <ChevronRight size={24} />
              </Button>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 p-3 glassmorphism rounded-full border-none shadow-xl">
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-20 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black tracking-tighter font-outfit mb-2">Interested in this architecture?</h4>
            <p className="text-muted-foreground font-medium italic">&quot;Let&apos;s build something even better together.&quot;</p>
          </div>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button radius="full" variant="bordered" className="h-14 px-10 font-black uppercase tracking-widest border-primary/20 hover:border-primary">
                View All Projects
              </Button>
            </Link>
            <Link href="/#contact">
              <Button radius="full" className="h-14 px-10 font-black uppercase tracking-widest bg-primary text-white shadow-xl shadow-primary/20">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal (Simple implementation) */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
            onClick={() => setIsFullscreen(false)}
          >
            <Button isIconOnly radius="full" className="absolute top-10 right-10 bg-white/10 text-white" onClick={() => setIsFullscreen(false)}>
              <X size={24} />
            </Button>
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image src={project.gallery[currentImageIndex]} alt="Fullscreen" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectDetailsPage;