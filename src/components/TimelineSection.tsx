
import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Briefcase, Award, ChevronUp, ChevronDown, GraduationCap, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2021-2024",
    icon: <Briefcase size={22} />,
    title: "Senior Full-Stack Developer",
    company: "Freelance & Agency Partnerships",
    desc: "Delivered 40+ production applications for startups and enterprise clients. Specialized in React/Next.js ecosystems with modern deployment strategies and performance optimization.",
    stats: "40+ Production Apps",
    achievements: ["Modern React Architecture", "Performance Optimization", "Team Leadership"]
  },
  {
    year: "2020",
    icon: <Award size={22} />,
    title: "Technical Certification",
    company: "Professional Development",
    desc: "Achieved comprehensive certification in JavaScript, React ecosystem, and WordPress development. Established strong foundation in modern web technologies and best practices.",
    stats: "5+ Certifications",
    achievements: ["JavaScript Mastery", "React Expertise", "WordPress Development"]
  },
  {
    year: "2018-2020",
    icon: <GraduationCap size={22} />,
    title: "Foundation Building",
    company: "Self-Directed Learning",
    desc: "Established core competencies in web development fundamentals. Progressed from HTML/CSS foundations to advanced JavaScript frameworks and modern development practices.",
    stats: "2+ Years Learning",
    achievements: ["HTML/CSS Mastery", "JavaScript Fundamentals", "Framework Expertise"]
  }
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <Section id="timeline" className="relative overflow-hidden py-32">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-0 md:px-6">
        <PageHeader
          title="My Journey"
          subtitle="A roadmap of my professional growth and technical evolution."
        />

        <div ref={containerRef} className="relative mt-24 md:mt-32 max-w-4xl mx-auto">
          {/* Central Line with Scroll Animation */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/30 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          <div className="space-y-20 md:space-y-32">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Milestone Node */}
                <div className="absolute left-6 md:left-1/2 top-8 md:top-auto w-10 h-10 -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-[3px] md:border-4 border-primary ring-4 md:ring-8 ring-primary/10"
                  />
                </div>

                {/* Date Side */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 flex flex-col ${idx % 2 === 0 ? "md:items-start md:pl-20" : "md:items-end md:pr-20"
                  } mb-4 md:mb-0`}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg font-black tracking-widest text-primary font-outfit uppercase"
                  >
                    {item.year}
                  </motion.span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1">
                    Milestone
                  </span>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-20" : "md:pl-20"
                  }`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glassmorphism p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] hover:border-primary/50 transition-all duration-500 group shadow-xl hover:shadow-primary/5 border-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-primary/5 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                        {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black tracking-tight font-outfit leading-tight mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-accent uppercase tracking-wider">
                          <Briefcase size={12} className="md:size-[14px]" />
                          {item.company}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base font-medium">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                      {item.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-background/50 border border-border/50 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 md:pt-8 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <TrendingUp size={16} />
                        </div>
                        <div>
                          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">Impact</p>
                          <p className="text-xs md:text-sm font-black uppercase tracking-widest">{item.stats}</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full glassmorphism flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Award size={16} className="text-primary" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TimelineSection;
