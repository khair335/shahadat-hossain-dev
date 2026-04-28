import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import AnimatedText from "./AnimatedText";
import HeroCanvas from "./HeroCanvas";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

const socialLinks = [
  { icon: <SiUpwork size={18} />, url: "https://upwork.com/freelancers/shahadath19", label: "Upwork" },
  { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/shahadathossain4536/", label: "LinkedIn" },
  { icon: <FaFacebook size={18} />, url: "https://www.facebook.com/shahadatofficial007", label: "Facebook" },
  { icon: <SiFiverr size={18} />, url: "https://www.fiverr.com/s/jjwp5aL", label: "Fiverr" },
  { icon: <FaGithub size={18} />, url: "https://github.com/shahadathossain4536", label: "GitHub" },
];

const HeroSection = () => {
  const nameText = "Shahadat Hossain";
  const taglineText =
    "I build digital experiences that are fast, beautiful, and accessible.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <HeroCanvas />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Avatar with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-8 md:mb-10"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl animate-pulse" />
            <Image
              src="/Shahadat.jpg"
              alt="Shahadat Hossain"
              width={160}
              height={160}
              className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-background shadow-2xl"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="glassmorphism px-4 py-1.5 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tighter font-outfit leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="text-gradient block lg:inline">
              Shahadat Hossain
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-2xl text-lg md:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium px-4">
            A <span className="text-foreground">Full-Stack React Developer</span> based in Bangladesh, dedicated to crafting high-performance digital experiences.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full max-w-md px-6">
            <CTAButton 
              size="lg" 
              className="w-full sm:w-auto px-10 h-16 shadow-xl shadow-primary/20"
              onPress={() => document?.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Project
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-10 h-16 glassmorphism border-none"
              onPress={() => document?.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Work
            </CTAButton>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-3 glassmorphism rounded-full hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground opacity-50"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

