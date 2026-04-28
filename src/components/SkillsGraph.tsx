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
import { Download } from "lucide-react";
import { Button } from "@nextui-org/react";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="glassmorphism p-6 rounded-[2rem] hover:border-primary/50 transition-all duration-500">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-background/50 border border-border/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-primary">
            {skill.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-base tracking-tight">
              {skill.title}
            </h4>
            <div className="flex justify-between items-center mt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Expertise</span>
              <span className="text-xs font-black text-primary">
                {skill.level}%
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }: CategoryProps) => {
  const categorySkills = allSkills.filter((s) => s.category === category.key);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <div className={`w-1.5 h-10 rounded-full bg-gradient-to-b ${category.color}`} />
        <div>
          <h3 className="text-2xl font-black tracking-tight font-outfit uppercase">
            {category.title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            {category.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categorySkills.map((skill, idx) => (
          <SkillCard
            key={skill.title}
            skill={skill}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsGraph: React.FC = () => {
  return (
    <Section id="skills" className="relative overflow-hidden py-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <PageHeader 
          title="Skills Map" 
          subtitle="A comprehensive overview of my technical expertise and proficiency levels." 
        />

        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            My technical stack is built on a foundation of performance and scalability. 
            I leverage modern tools to deliver high-end digital solutions.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((category, index) => (
            <SkillCategory key={category.key} category={category} index={index} />
          ))}
        </div>

        {/* Resume CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-20 border-t border-border/50"
        >
          <div className="glassmorphism rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border-none shadow-2xl">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight font-outfit">
                Looking for full <span className="text-gradient">technical specifications</span>?
              </h3>
              <p className="text-lg text-muted-foreground font-medium">
                For a detailed breakdown of my professional experience and project history, you can download my comprehensive resume.
              </p>
            </div>
            <Button 
              size="lg" 
              radius="full" 
              className="w-full md:w-auto bg-primary text-white font-black px-12 h-16 text-sm md:text-lg shadow-xl shadow-primary/20 uppercase tracking-widest group"
              asChild
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <Download size={22} className="group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};


export default SkillsGraph;
