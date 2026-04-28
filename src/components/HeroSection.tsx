import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiRedux, SiUpwork, SiFiverr } from "react-icons/si";
import { TbGitBranch } from "react-icons/tb";
import AnimatedText from "./AnimatedText";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

const socialLinks = [
  { icon: <SiUpwork size={20} />, url: "https://upwork.com/freelancers/shahadath19", label: "Upwork" },
  { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/shahadathossain4536/", label: "LinkedIn" },
  { icon: <FaFacebook size={20} />, url: "https://www.facebook.com/shahadatofficial007", label: "Facebook" },
  { icon: <SiFiverr size={20} color="#1DBF73" />, url: "https://www.fiverr.com/s/jjwp5aL", label: "Fiverr" },
  { icon: <FaGithub size={20} />, url: "https://github.com/shahadathossain4536", label: "GitHub" },
];

const HeroSection = () => {
  const nameText = "Shahadat Hossain";
  const taglineText =
    "React Developer in Bangladesh: Passionate about crafting beautiful, fast, and robust web applications.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800" />

        {/* Floating gradient orbs (subtler) */}
        <motion.div
          className="absolute top-20 left-10 h-64 w-64 rounded-full mix-blend-multiply filter blur-3xl opacity-25 bg-blue-400"
          animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-16 h-72 w-72 rounded-full mix-blend-multiply filter blur-3xl opacity-25 bg-purple-400"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle moving noise texture (reduced) */}
        <motion.div
          className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
          animate={{ backgroundPosition: ["0px 0px", "120px 120px", "0px 0px"] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating tech icons using react-icons */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {[
            { Comp: SiHtml5, color: "#f97316", top: "10%", left: "8%", delay: 0 },
            { Comp: SiCss3, color: "#3b82f6", top: "18%", right: "10%", delay: 0.6 },
            { Comp: SiJavascript, color: "#f59e0b", bottom: "18%", left: "12%", delay: 1.2 },
            { Comp: SiReact, color: "#22d3ee", top: "26%", left: "45%", delay: 0.9 },
            { Comp: SiNextdotjs, color: "#111827", size: 52, bottom: "24%", right: "16%", delay: 1.5 },
            { Comp: TbGitBranch, color: "#a78bfa", top: "12%", right: "28%", delay: 0.3 },
            { Comp: SiTypescript, color: "#3b82f6", bottom: "10%", left: "40%", delay: 1.8 },
            { Comp: SiRedux, color: "#7c3aed", size: 52, top: "40%", right: "38%", delay: 2.1 },
          ].map((icon, index) => (
            <motion.div
              key={`hero-icon-${index}`}
              className="absolute opacity-70 dark:opacity-60"
              style={(() => {
                const positionStyle: React.CSSProperties = {};
                if ((icon as { top?: string }).top) positionStyle.top = (icon as { top: string }).top;
                if ((icon as { bottom?: string }).bottom) positionStyle.bottom = (icon as { bottom: string }).bottom;
                if ((icon as { left?: string }).left) positionStyle.left = (icon as { left: string }).left;
                if ((icon as { right?: string }).right) positionStyle.right = (icon as { right: string }).right;
                return positionStyle;
              })()}
              initial={{ y: 0, rotate: 0, scale: 0.9, opacity: 0 }}
              animate={{ y: [0, -12, 0], rotate: [0, 10, 0], scale: [0.9, 1, 0.9], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 10 + index, delay: (icon as { delay: number }).delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-white/30 dark:bg-white/5 blur-md" />
                {(() => {
                  const I = (icon as { Comp: React.ComponentType<{ size?: number; color?: string }> }).Comp;
                  const size = (icon as { size?: number }).size ?? 44;
                  return <I size={size} color={(icon as { color: string }).color} />;
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <AnimatedText
                el="span"
                text={nameText}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                stagger={0.06}
              />
            </h1>
            <AnimatedText
              el="p"
              text={taglineText}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              stagger={0.025}
              baseDelay={0.5}
            />
            {/* Badges */}
            <div className="mb-6 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 text-sm">
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                </span>
                Available for work
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 text-sm">
                4+ yrs experience
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 text-sm">
                Dhaka, Bangladesh
              </span>
            </div>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <CTAButton onClick={() => document?.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Hire Me
              </CTAButton>
              <CTAButton
                variant="outline"
                className="bg-none text-blue-600 dark:text-blue-400 border-blue-600/40 dark:border-blue-400/40"
                onClick={() => document?.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Portfolio
              </CTAButton>
              <CTAButton asChild>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
                  Download Resume
                </a>
              </CTAButton>
            </div>
            {/* Social links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  whileTap={{ scale: 0.95, rotate: -6 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right image content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:col-span-6"
          >
            <div className="relative">
              {/* Glow rotating gradient ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(59,130,246,0.4), rgba(168,85,247,0.4), rgba(59,130,246,0.4))",
                  filter: "blur(18px)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              {/* Glow pulsating aura */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.7, 0.4],
                  backgroundColor: ["#60a5fa40", "#c084fc40", "#60a5fa40"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/Shahadat.jpg"
                alt="Shahadat Hossain headshot – React developer in Bangladesh"
                width={320}
                height={320}
                className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                priority
              />
              {/* Orbiting particle */}
              <motion.span
                className="absolute left-1/2 top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-purple-500 shadow"
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "50% 180px" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
