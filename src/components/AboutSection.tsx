
import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Code, 
  UserCheck, 
  Download,
  ArrowRight,
  CheckCircle,
  Star,
  Target
} from "lucide-react";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

const AboutSection = () => (
  <Section id="about" className="bg-white dark:bg-gray-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>

    <div className="relative z-10">
      <PageHeader 
        title="About Me" 
        subtitle="Building digital experiences that matter" 
      />
      
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Shahadat Hossain
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
              <MapPin size={24} />
              <span className="text-xl">Bangladesh</span>
            </div> */}
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Passionate React developer crafting exceptional web experiences. 
              I specialize in building scalable, performant applications with modern technologies.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <Code size={32} />, title: "Frontend", desc: "React, Next.js, TypeScript", color: "from-blue-500 to-blue-600" },
            { icon: <Target size={32} />, title: "UI/UX", desc: "Clean, intuitive designs", color: "from-purple-500 to-purple-600" },
            { icon: <Award size={32} />, title: "Quality", desc: "Best practices & testing", color: "from-green-500 to-green-600" },
            { icon: <UserCheck size={32} />, title: "Collaboration", desc: "Team-focused approach", color: "from-orange-500 to-orange-600" },
          ].map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${skill.color} text-white mb-4`}>
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16"
        >
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            My Approach
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Understand", 
                desc: "I start by understanding your business goals and user needs to create solutions that truly matter.",
                icon: <CheckCircle size={24} />
              },
              { 
                step: "02", 
                title: "Design", 
                desc: "Clean, intuitive designs that provide exceptional user experiences across all devices.",
                icon: <Star size={24} />
              },
              { 
                step: "03", 
                title: "Build", 
                desc: "Robust, scalable applications built with modern technologies and best practices.",
                icon: <Code size={24} />
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">{item.step}</div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h5>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white dark:text-gray-100 shadow-xl dark:shadow-2xl">
            <h4 className="text-2xl font-bold mb-4 text-white dark:text-white">Ready to work together?</h4>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton asChild className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-200 border-0 shadow-lg">
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </a>
              </CTAButton>
              <CTAButton variant="outline" asChild className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 hover:bg-white dark:hover:bg-gray-100 hover:text-blue-600 dark:hover:text-blue-700 bg-transparent dark:bg-transparent shadow-lg">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight size={18} />
                </a>
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
