"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiReactquery,
  SiWordpress,
  SiVuedotjs,
  SiVite,
  SiAxios,
  SiExpress,
  SiFigma,
  SiMongodb,
  SiSupabase,
  SiJavascript,
  SiPython,
  SiWix,
} from "react-icons/si";
import CTAButton from "@/components/CTAButton";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

type Skill = {
  title: string;
  level: number;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "design" | "database" | "programming" | "cms" | "other";
};

const allSkills: Skill[] = [
  // Frontend
  {
    title: "React",
    level: 90,
    icon: <SiReact size={20} />,
    category: "frontend",
  },
  {
    title: "Next.js",
    level: 85,
    icon: <SiNextdotjs size={20} />,
    category: "frontend",
  },
  {
    title: "TypeScript",
    level: 88,
    icon: <SiTypescript size={20} />,
    category: "frontend",
  },
  {
    title: "Tailwind CSS",
    level: 92,
    icon: <SiTailwindcss size={20} />,
    category: "frontend",
  },
  {
    title: "Framer Motion",
    level: 82,
    icon: <SiFramer size={20} />,
    category: "frontend",
  },
  {
    title: "Redux",
    level: 80,
    icon: <SiRedux size={20} />,
    category: "frontend",
  },
  {
    title: "React Query",
    level: 86,
    icon: <SiReactquery size={20} />,
    category: "frontend",
  },
  {
    title: "Vite",
    level: 75,
    icon: <SiVite size={20} />,
    category: "frontend",
  },

  // Backend
  {
    title: "Node.js",
    level: 78,
    icon: <SiNodedotjs size={20} />,
    category: "backend",
  },
  {
    title: "Express.js",
    level: 82,
    icon: <SiExpress size={20} />,
    category: "backend",
  },
  {
    title: "Axios",
    level: 85,
    icon: <SiAxios size={20} />,
    category: "backend",
  },

  // Design
  {
    title: "Figma",
    level: 76,
    icon: <SiFigma size={20} />,
    category: "design",
  },

  // Database
  {
    title: "MongoDB",
    level: 80,
    icon: <SiMongodb size={20} />,
    category: "database",
  },
  {
    title: "Supabase",
    level: 82,
    icon: <SiSupabase size={20} />,
    category: "database",
  },

  // Programming Languages
  {
    title: "JavaScript",
    level: 92,
    icon: <SiJavascript size={20} />,
    category: "programming",
  },
  {
    title: "Python",
    level: 75,
    icon: <SiPython size={20} />,
    category: "programming",
  },

  // CMS
  {
    title: "WordPress",
    level: 78,
    icon: <SiWordpress size={20} />,
    category: "cms",
  },
  {
    title: "Wix",
    level: 72,
    icon: <SiWix size={20} />,
    category: "cms",
  },

  // Other
  {
    title: "Vue.js",
    level: 70,
    icon: <SiVuedotjs size={20} />,
    category: "other",
  },
];

const categories = [
  {
    key: "frontend",
    title: "Frontend Development",
    description: "UI/UX, Component Libraries & State Management",
    color: "from-blue-600 to-cyan-500",
  },
  {
    key: "backend",
    title: "Backend & APIs",
    description: "Servers & API Development",
    color: "from-purple-600 to-pink-500",
  },
  {
    key: "database",
    title: "Database & Data",
    description: "Data Management & Storage Solutions",
    color: "from-green-600 to-teal-500",
  },
  {
    key: "programming",
    title: "Programming Languages",
    description: "Core Languages & Fundamentals",
    color: "from-yellow-600 to-orange-500",
  },
  {
    key: "cms",
    title: "CMS & Page Builders",
    description: "Content Management & Website Builders",
    color: "from-red-600 to-rose-500",
  },
  {
    key: "design",
    title: "Design",
    description: "UI/UX Design & Prototyping",
    color: "from-indigo-600 to-purple-500",
  },
  {
    key: "other",
    title: "Other Technologies",
    description: "Additional Tools & Frameworks",
    color: "from-slate-600 to-gray-500",
  },
];

type SkillCardProps = {
  skill: Skill;
  index: number;
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.05 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 rounded-lg p-4 transition-all duration-300 group-hover:border-blue-400/50 dark:group-hover:border-blue-400/30 group-hover:shadow-lg dark:group-hover:shadow-blue-500/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {skill.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
              {skill.title}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Proficiency
            </p>
          </div>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {skill.level}%
          </span>
        </div>

        <div className="relative h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

type CategoryProps = {
  category: (typeof categories)[number];
  index: number;
};

const SkillCategory = ({ category, index }: CategoryProps) => {
  const categorySkills = allSkills.filter((s) => s.category === category.key);

  const headerVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-4"
    >
      {/* Category Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div
            className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}
          />
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {category.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
        {categorySkills.map((skill, idx) => (
          <SkillCard
            key={skill.title}
            skill={skill}
            index={index * 5 + idx}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsGraph: React.FC = () => {
  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive breakdown of my technical expertise across the modern web development stack. Each skill reflects hands-on production experience and continuous growth.
        </p>
      </motion.div>

      {/* Skills by Category */}
      <div className="space-y-16">
        {categories.map((category, index) => (
          <SkillCategory key={category.key} category={category} index={index} />
        ))}
      </div>

      {/* Resume CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Want the details?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Download my resume to see my full experience, projects, and certifications.
            </p>
          </div>
          <CTAButton asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
              Download Resume
            </a>
          </CTAButton>
        </div>
      </motion.div>
    </div>
  );
};


export default SkillsGraph;
