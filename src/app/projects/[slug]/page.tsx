"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
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
  ArrowRight as ArrowRightIcon,
  Maximize2,
  X
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
import CTAButton from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

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
  "API Integration": Code, // Using Code icon for API Integration
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
      // Find project by slug (we'll use id for now, but could be enhanced with actual slugs)
      const foundProject = projects.find(p => p.id.toString() === params.slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push('/projects');
      }
    }
  }, [params?.slug, router]);

  // Keyboard navigation for fullscreen gallery
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFullscreen) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          if (isZoomed) {
            setIsZoomed(false);
          } else {
            setIsFullscreen(false);
          }
          break;
        case ' ':
        case 'Enter':
          event.preventDefault();
          setIsZoomed(!isZoomed);
          break;
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen, currentImageIndex, project?.gallery.length, isZoomed, nextImage, prevImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        {/* Navigation Skeleton */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-10 w-32" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section Skeleton */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-2/3" />
                </div>

                {/* Stats Cards Skeleton */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center">
                      <Skeleton className="h-16 w-full rounded-lg" />
                    </div>
                  ))}
                </div>

                {/* Technologies Skeleton */}
                <div>
                  <Skeleton className="h-6 w-40 mb-4" />
                  <div className="flex flex-wrap gap-3">
                    {[...Array(6)].map((_, i) => (
                      <Skeleton key={i} className="h-8 w-20 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Skeleton className="w-full h-80 rounded-2xl" />
              </div>
            </div>
          </div>

          <Skeleton className="h-px w-full my-12" />

          {/* About Section Skeleton */}
          <div className="mb-16">
            <Skeleton className="h-10 w-64 mb-6" />
            <div className="max-w-4xl space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>

          {/* Features Section Skeleton */}
          <div className="mb-16">
            <Skeleton className="h-10 w-48 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-16 w-16 rounded-lg" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>

          {/* Page Breakdown Skeleton */}
          <div className="mb-16">
            <Skeleton className="h-10 w-56 mb-8" />
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-8 w-48" />
                    </div>
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-4/5" />
                    <div className="flex items-center gap-4 text-sm">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Skeleton className="w-full h-64 rounded-xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Skeleton */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <Skeleton className="h-10 w-48" />
              <Skeleton className="h-10 w-24" />
            </div>
            <div className="relative">
              <Skeleton className="w-full h-96 rounded-2xl" />
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-3 h-3 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Grid Skeleton */}
          <div className="mb-16">
            <Skeleton className="h-10 w-56 mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="text-center space-y-2">
                  <Skeleton className="h-12 w-12 mx-auto rounded-lg" />
                  <Skeleton className="h-4 w-16 mx-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Skeleton */}
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto space-y-6">
              <Skeleton className="h-12 w-96 mx-auto" />
              <Skeleton className="h-6 w-4/5 mx-auto" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const projectStats = [
    { icon: Calendar, label: "Completion", value: project.completionDate },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Users, label: "Team Size", value: project.teamSize },
    { icon: Star, label: "Rating", value: project.rating },
  ];

  const projectFeatures = [
    { icon: Zap, title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: Shield, title: "Security", description: "Secure authentication and data protection" },
    { icon: Smartphone, title: "Responsive", description: "Mobile-first design approach" },
    { icon: Monitor, title: "Cross-browser", description: "Compatible with all modern browsers" },
    { icon: Palette, title: "Modern UI", description: "Clean and intuitive user interface" },
    { icon: Layers, title: "Scalable", description: "Built for growth and maintenance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/projects">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Projects
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              {project.liveUrl !== "#" && (
                <Button asChild variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe size={16} />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl !== "#" && (
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white"
                >
                  {project.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {projectStats.map((stat, index) => (
                  <Card key={stat.label} className="text-center">
                    <CardContent className="p-4">
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => {
                    const IconComponent = techIcons[tag] || Code;
                    return (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                          <IconComponent className="w-4 h-4" />
                          {tag}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold mb-2">Project Overview</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {project.detailedDescription.slice(0, 150)}...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="my-12" />

        {/* Detailed Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About This Project</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {project.detailedDescription}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Project Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Page Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Page Breakdown</h2>
          <div className="space-y-8">
            {project.pages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {page.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>Interactive Design</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code size={16} />
                      <span>Responsive Layout</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={page.image}
                      alt={page.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Project Gallery</h2>
            {project.gallery.length > 0 && (
              <Button
                onClick={() => setIsFullscreen(true)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Maximize2 size={16} />
                Fullscreen
              </Button>
            )}
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => setIsFullscreen(true)}>
              <Image
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} gallery ${currentImageIndex + 1}`}
                width={1200}
                height={600}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              {/* Fullscreen hint overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full p-3">
                  <Maximize2 size={20} className="text-slate-700 dark:text-slate-300" />
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-blue-600 scale-125'
                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.section>

        {/* Fullscreen Gallery Modal */}
        {isFullscreen && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(false);
              }}
              className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Close fullscreen gallery"
            >
              <X size={24} />
            </button>

            {/* Main image container */}
            <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative max-w-full max-h-full ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
              >
                <Image
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.title} gallery ${currentImageIndex + 1}`}
                  width={1920}
                  height={1080}
                  className={`max-w-full max-h-full w-auto h-auto transition-all duration-300 ${
                    isZoomed ? 'object-cover cursor-zoom-out' : 'object-contain cursor-zoom-in'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  priority
                />
              </motion.div>

              {/* Navigation arrows */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Image counter and navigation dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {project.gallery.length}
                </span>
                {project.gallery.length > 1 && (
                  <div className="flex gap-2">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Keyboard hints */}
              <div className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
                <div className="flex items-center gap-4">
                  <span>← → Navigate</span>
                  <span>Space/Enter Zoom</span>
                  <span>ESC Close</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Technologies Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.tags.map((tech, index) => {
              const IconComponent = techIcons[tech] || Code;
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center"
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{tech}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Interested in Similar Projects?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I&apos;m always excited to work on new challenges. Let&apos;s discuss your next project and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton asChild>
                <Link href="/#contact">
                  Start a Project
                  <ArrowRightIcon size={16} />
                </Link>
              </CTAButton>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;