
import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Briefcase, Award, ChevronUp, ChevronDown, GraduationCap, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2021-2024",
    icon: <Briefcase size={20} className="text-slate-700 dark:text-slate-200" />,
    title: "Senior Full-Stack Developer",
    company: "Freelance & Agency Partnerships",
    desc: "Delivered 40+ production applications for startups and enterprise clients. Specialized in React/Next.js ecosystems with modern deployment strategies and performance optimization.",
    gradient: "from-slate-600 to-slate-800",
    bgGradient: "from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50",
    stats: "40+ Production Apps",
    achievements: ["Modern React Architecture", "Performance Optimization", "Team Leadership"]
  },
  {
    year: "2020",
    icon: <Award size={20} className="text-slate-700 dark:text-slate-200" />,
    title: "Technical Certification",
    company: "Professional Development",
    desc: "Achieved comprehensive certification in JavaScript, React ecosystem, and WordPress development. Established strong foundation in modern web technologies and best practices.",
    gradient: "from-blue-600 to-blue-800",
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
    stats: "5+ Certifications",
    achievements: ["JavaScript Mastery", "React Expertise", "WordPress Development"]
  },
  {
    year: "2018-2020",
    icon: <GraduationCap size={20} className="text-slate-700 dark:text-slate-200" />,
    title: "Foundation Building",
    company: "Self-Directed Learning",
    desc: "Established core competencies in web development fundamentals. Progressed from HTML/CSS foundations to advanced JavaScript frameworks and modern development practices.",
    gradient: "from-emerald-600 to-emerald-800",
    bgGradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30",
    stats: "2+ Years Learning",
    achievements: ["HTML/CSS Mastery", "JavaScript Fundamentals", "Framework Expertise"]
  }
];

// Define all sections in order
const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'timeline', 'voluntary', 'blog', 'reviews', 'contact'];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [lightPosition, setLightPosition] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Throttle function for performance
  const throttle = useCallback(<T extends (...args: never[]) => void>(func: T, limit: number) => {
    let inThrottle: boolean;
    return function(this: unknown, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  // Memoized section finding function
  const findCurrentSection = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        
        if (scrollPosition >= sectionTop) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    }
  }, []);

  // Memoized light position update
  const updateLightPosition = useCallback(() => {
    if (!timelineRef.current || !containerRef.current) return;
    
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    
    // Calculate light position as percentage of timeline height
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    const relativePosition = (viewportCenter - timelineTop) / timelineHeight;
    const clampedPosition = Math.max(0, Math.min(100, relativePosition * 100));
    
    setLightPosition(clampedPosition);
    
    // Determine which timeline item is active based on light position
    const itemCount = timeline.length;
    const itemHeight = 100 / itemCount;
    const activeIndex = Math.floor(clampedPosition / itemHeight);
    setActiveItemIndex(Math.min(activeIndex, itemCount - 1));
  }, []);

  // Find current section and update light position with throttling
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        findCurrentSection();
        updateLightPosition();
        
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
        }
        
        lastScrollY = currentScrollY;
        
        // Hide indicator when scrolled past timeline
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setShowScrollIndicator(rect.bottom > 0);
        }
        
        rafId = null;
      });
    };

    // Throttled scroll handler
    const throttledScroll = throttle(handleScroll, 16); // ~60fps

    findCurrentSection();
    updateLightPosition();
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', updateLightPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', updateLightPosition);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [findCurrentSection, updateLightPosition, throttle]);

  // Memoized scroll functions
  const scrollToPreviousSection = useCallback(() => {
    const prevIndex = Math.max(0, currentSectionIndex - 1);
    const prevSectionId = sections[prevIndex];
    const section = document.getElementById(prevSectionId);
    
    if (section) {
      const offset = 80; // Account for fixed header
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  }, [currentSectionIndex]);

  const scrollToNextSection = useCallback(() => {
    const nextIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
    const nextSectionId = sections[nextIndex];
    const section = document.getElementById(nextSectionId);
    
    if (section) {
      const offset = 80; // Account for fixed header
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  }, [currentSectionIndex]);

  // Memoized previous/next section names for tooltips
  const previousSectionName = useMemo(() => {
    return sections[Math.max(0, currentSectionIndex - 1)].charAt(0).toUpperCase() + 
           sections[Math.max(0, currentSectionIndex - 1)].slice(1);
  }, [currentSectionIndex]);

  const nextSectionName = useMemo(() => {
    return sections[Math.min(sections.length - 1, currentSectionIndex + 1)].charAt(0).toUpperCase() + 
           sections[Math.min(sections.length - 1, currentSectionIndex + 1)].slice(1);
  }, [currentSectionIndex]);

  return (
    <Section id="timeline" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <PageHeader 
            title="My Journey" 
            subtitle="From learning to shipping production apps - the milestones that shaped my career." 
          />
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated background elements */}
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Timeline container */}
          <div ref={timelineRef} className="relative z-10">
            {/* Central line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2 rounded-full overflow-hidden">
              {/* Light effect on central line */}
              <motion.div
                style={{
                  top: `${lightPosition}%`,
                  transform: 'translate(-50%, -50%)',
                  willChange: 'top, opacity',
                }}
                className="absolute left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400 rounded-full blur-sm opacity-80"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Glow effect */}
              <motion.div
                style={{
                  top: `${lightPosition}%`,
                  transform: 'translate(-50%, -50%)',
                  willChange: 'top, opacity',
                }}
                className="absolute left-1/2 w-3 h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent dark:via-blue-300/50 rounded-full blur-md"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Timeline items */}
            <div className="space-y-12 md:space-y-24 relative" role="list" aria-label="Career timeline">
              {/* Mobile zigzag center line with light effect */}
              <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2 overflow-hidden rounded-full">
                {/* Light effect on mobile zigzag line */}
                <motion.div
                  style={{
                    top: `${lightPosition}%`,
                    transform: 'translate(-50%, -50%)',
                    willChange: 'top, opacity',
                  }}
                  className="absolute left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400 rounded-full blur-sm opacity-80"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Glow effect */}
                <motion.div
                  style={{
                    top: `${lightPosition}%`,
                    transform: 'translate(-50%, -50%)',
                    willChange: 'top, opacity',
                  }}
                  className="absolute left-1/2 w-3 h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent dark:via-blue-300/50 rounded-full blur-md"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{ willChange: 'transform, opacity' }}
                  className={`flex flex-col md:flex-row items-center relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  role="listitem"
                >
                  {/* Mobile zigzag connector lines */}
                  {idx > 0 && (
                    <div className="md:hidden absolute left-1/2 top-0 w-0.5 h-12 bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2 -translate-y-12" />
                  )}
                  
                  {/* Content card - zigzag positioning on mobile */}
                  <div className={`w-full md:w-5/12 ${
                    idx % 2 === 0 
                      ? 'md:pr-8 md:text-right text-left pl-4 md:pl-0' 
                      : 'md:pl-8 md:text-left text-left pr-4 md:pr-0'
                  }`}>
                    <motion.article
                      whileHover={{ scale: 1.02, y: -3 }}
                      className={`relative p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-slate-900/50 hover:shadow-xl dark:hover:shadow-slate-900/70 transition-all duration-300 group ${
                        activeItemIndex === idx 
                          ? 'ring-2 ring-blue-500/50 dark:ring-blue-400/50 shadow-blue-500/20 dark:shadow-blue-400/20' 
                          : ''
                      }`}
                      animate={{
                        boxShadow: activeItemIndex === idx 
                          ? '0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1)'
                          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      }}
                      transition={{ duration: 0.3 }}
                      aria-label={`${item.title} at ${item.company} from ${item.year}`}
                    >
                      {/* Year badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.3, type: "spring" }}
                        className={`absolute -top-3 ${idx % 2 === 0 ? 'right-3 md:right-6' : 'left-3 md:left-6'} px-2 md:px-3 py-1 rounded-full bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 text-xs font-medium`}
                      >
                        {item.year}
                      </motion.div>

                      {/* Company */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.4 }}
                        className={`text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ${idx % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}
                      >
                        {item.company}
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.2 }}
                        className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3"
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.3 }}
                        className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4"
                      >
                        {item.desc}
                      </motion.p>

                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.4 }}
                        className="space-y-1.5 sm:space-y-2"
                      >
                        {item.achievements.map((achievement, achievementIdx) => (
                          <div key={achievementIdx} className={`flex items-center gap-2 ${idx % 2 === 0 ? 'md:justify-end justify-start' : 'justify-start'}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                            <span className="text-xs text-slate-500 dark:text-slate-400">{achievement}</span>
                          </div>
                        ))}
                      </motion.div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.5 }}
                        className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700`}
                      >
                        <div className={`flex items-center gap-2 ${idx % 2 === 0 ? 'md:justify-end justify-start' : 'justify-start'}`}>
                          <TrendingUp size={14} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{item.stats}</span>
                        </div>
                      </motion.div>
                    </motion.article>
                  </div>

                  {/* Central icon - zigzag on mobile, center on desktop */}
                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0 relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: idx * 0.2 + 0.5, 
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 dark:bg-slate-200 flex items-center justify-center shadow-lg dark:shadow-slate-900/70 border-2 border-white dark:border-slate-300 z-10 transition-all duration-300 ${
                        activeItemIndex === idx 
                          ? 'ring-4 ring-blue-500/70 dark:ring-blue-400/70 shadow-blue-500/60 dark:shadow-blue-400/60' 
                          : ''
                      }`}
                      animate={{
                        scale: activeItemIndex === idx ? 1.05 : 1,
                      }}
                      style={{ willChange: 'transform' }}
                    >
                      <motion.div 
                        className="[&>svg]:text-slate-100 [&>svg]:dark:text-slate-900"
                        animate={{
                          filter: activeItemIndex === idx ? 'brightness(1.3) drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))' : 'brightness(1)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.div>
                      {/* Glow effect when active */}
                      {activeItemIndex === idx && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full bg-blue-500/40 dark:bg-blue-400/40 blur-xl -z-10"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 blur-2xl -z-20"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          />
                        </>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout - hidden on mobile */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/30">
            <TrendingUp size={20} className="text-slate-600 dark:text-slate-300" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Continuous growth and innovation
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="hidden md:flex fixed right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-2"
        >
            <motion.button
            onClick={scrollToPreviousSection}
            disabled={currentSectionIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2.5 md:p-3 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-slate-900/50 hover:shadow-xl dark:hover:shadow-slate-900/70 transition-all duration-200 relative group ${
              scrollDirection === 'up' ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
            } ${
              currentSectionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title={`Previous: ${previousSectionName}`}
            aria-label={`Navigate to ${previousSectionName} section`}
          >
            <ChevronUp 
              size={20} 
              className={`transition-colors duration-200 ${
                scrollDirection === 'up' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
              }`} 
              aria-hidden="true"
            />
            {/* Tooltip */}
            <span className="absolute right-full mr-2 px-2 py-1 text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg dark:shadow-slate-900/50">
              {previousSectionName}
            </span>
          </motion.button>
          
          <motion.button
            onClick={scrollToNextSection}
            disabled={currentSectionIndex === sections.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2.5 md:p-3 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-slate-900/50 hover:shadow-xl dark:hover:shadow-slate-900/70 transition-all duration-200 relative group ${
              scrollDirection === 'down' ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
            } ${
              currentSectionIndex === sections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title={`Next: ${nextSectionName}`}
            aria-label={`Navigate to ${nextSectionName} section`}
          >
            <ChevronDown 
              size={20} 
              className={`transition-colors duration-200 ${
                scrollDirection === 'down' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
              }`} 
              aria-hidden="true"
            />
            {/* Tooltip */}
            <span className="absolute right-full mr-2 px-2 py-1 text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg dark:shadow-slate-900/50">
              {nextSectionName}
            </span>
          </motion.button>
        </motion.div>
      )}
    </Section>
  );
};

export default TimelineSection;
