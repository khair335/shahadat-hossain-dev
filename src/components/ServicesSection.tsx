
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Code2, MonitorSmartphone, Brush, Search, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} className="text-blue-600" />,
    title: "Custom Web Apps",
    desc: "High-performance React/Next.js apps tailored for your business goals."
  },
  {
    icon: <MonitorSmartphone size={32} className="text-purple-600" />,
    title: "Responsive Design",
    desc: "Mobile-first and visually stunning layouts for every screen size."
  },
  {
    icon: <Brush size={32} className="text-pink-500" />,
    title: "UI/UX Consulting",
    desc: "Modern interfaces, delightful interactions, and strong accessibility."
  },
  {
    icon: <Search size={32} className="text-yellow-400" />,
    title: "SEO Optimization",
    desc: "Markup and strategies to help your site rank for ‘React developer Bangladesh’ & more."
  },
  {
    icon: <Shield size={32} className="text-green-600" />,
    title: "Website Security",
    desc: "Best practices for safe, robust, and scalable deployments."
  },
  {
    icon: <Zap size={32} className="text-orange-500" />,
    title: "Performance Optimization",
    desc: "Speed up your apps with code splitting, lazy loading, and caching strategies."
  }
];

const ServicesSection = () => (
  <Section id="services" className="bg-white dark:bg-gray-900">
    <PageHeader title="My Services" subtitle="From idea to launch with React and Next.js." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.50, delay: idx * 0.12 }}
          className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-7 shadow group hover:scale-105 transition-transform"
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default ServicesSection;
