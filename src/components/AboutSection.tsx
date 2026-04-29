
import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Code,
  UserCheck,
  Download,
  CheckCircle,
  Star,
  Target
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Button } from "@nextui-org/react";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

const AboutSection = () => (
  <Section id="about" className="relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
    </div>

    <div className="relative z-10">
      <PageHeader
        title="About Me"
        subtitle="Driven by curiosity and a passion for crafting high-end digital experiences."
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              I am <span className="text-foreground">Shahadat Hossain</span>, a full-stack developer based in Bangladesh.
              With over 4 years of experience, I specialize in building <span className="text-primary font-bold">scalable, performant applications</span> that prioritize user experience and modern design.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <Code size={28} />, title: "Frontend", desc: "React, Next.js, TypeScript", color: "text-blue-500" },
            { icon: <Target size={28} />, title: "Strategy", desc: "User-centric solutions", color: "text-purple-500" },
            { icon: <Award size={28} />, title: "Quality", desc: "Best practices & Testing", color: "text-emerald-500" },
            { icon: <UserCheck size={28} />, title: "Teamwork", desc: "Agile collaboration", color: "text-orange-500" },
          ].map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-8 rounded-[2rem] hover:border-primary/50 transition-all duration-500 group"
            >
              <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-background/50 border border-border/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${skill.color}`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-tight">{skill.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glassmorphism rounded-[3rem] p-12 md:p-16 mb-24 border-none">
          <h4 className="text-3xl font-bold text-center mb-16 tracking-tight">
            My <span className="text-gradient">Workflow</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep diving into requirements, user needs, and business objectives.",
                icon: <CheckCircle size={24} />
              },
              {
                step: "02",
                title: "Development",
                desc: "Writing clean, modular, and performant code with modern tech stacks.",
                icon: <Code size={24} />
              },
              {
                step: "03",
                title: "Delivery",
                desc: "Rigorous testing and deployment to ensure a flawless user experience.",
                icon: <Star size={24} />
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="text-6xl font-black text-primary/5 absolute -top-8 -left-4">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="mb-6 text-primary">
                    {item.icon}
                  </div>
                  <h5 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-background rounded-[2.5rem] p-10 md:p-16 text-center border border-border/50">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Let&apos;s Build Something Extraordinary</h4>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
              Whether you have a fully-fledged idea or just a spark of inspiration, I&apos;m here to help you bring it to life.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                size="lg"
                radius="full"
                className="bg-primary text-white font-black px-10 h-16 text-sm md:text-lg uppercase tracking-widest shadow-xl shadow-primary/20"
                as={Link}
                href="/#contact"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                radius="full"
                variant="bordered"
                className="font-black px-10 h-16 text-sm md:text-lg glassmorphism border-none uppercase tracking-widest"
                as="a"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-2" /> Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
