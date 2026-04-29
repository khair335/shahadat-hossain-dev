import React from "react";
import NextLink from "next/link";
import { projects } from "@/lib/projects";
import PageHeader from "@/components/PageHeader";

import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <PageHeader
          title="Creative Portfolio"
          subtitle="Explore a curated collection of high-performance web applications and digital experiences."
        />

        <ProjectsGrid projects={projects} />

        <div className="mt-20 text-center flex justify-center">
          <NextLink
            href="/"
            className="inline-flex items-center justify-center rounded-full px-10 h-16 font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all text-xs"
          >
            ← Return to Main Page
          </NextLink>
        </div>
      </div>
    </main>
  );
}
