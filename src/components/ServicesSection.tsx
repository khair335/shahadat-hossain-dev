import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Code2, MonitorSmartphone, Brush, Shield, Rocket, ArrowUpRight, Server } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Full-Stack Architecture",
    desc: "End-to-end web applications built with Next.js, React, and Node.js. Focused on high-performance scalability and enterprise-grade architecture. I bridge the gap between frontend beauty and backend power.",
    className: "lg:col-span-4 lg:row-span-2 md:col-span-6 md:row-span-1",
    color: "from-indigo-500 to-cyan-400",
    shadow: "shadow-indigo-500/20",
    bgIcon: <Server size={200} strokeWidth={1} />,
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Responsive UI",
    desc: "Pixel-perfect, mobile-first designs with fluid animations and transitions.",
    className: "lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1",
    color: "from-fuchsia-500 to-pink-500",
    shadow: "shadow-fuchsia-500/20",
    bgIcon: <MonitorSmartphone size={160} strokeWidth={1} />,
  },
  {
    icon: <Brush size={28} />,
    title: "Design Systems",
    desc: "Crafting beautiful, reusable components and cohesive visual languages.",
    className: "lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1",
    color: "from-rose-500 to-orange-400",
    shadow: "shadow-rose-500/20",
    bgIcon: <Brush size={160} strokeWidth={1} />,
  },
  {
    icon: <Rocket size={28} />,
    title: "Performance",
    desc: "Lightning-fast load times, high SEO rankings, and smooth Web Vitals.",
    className: "lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1",
    color: "from-amber-500 to-yellow-400",
    shadow: "shadow-amber-500/20",
    bgIcon: <Rocket size={160} strokeWidth={1} />,
  },
  {
    icon: <Shield size={28} />,
    title: "Security & Auth",
    desc: "Robust security practices, OAuth, JWT, and scalable database design.",
    className: "lg:col-span-4 lg:row-span-1 md:col-span-12 md:row-span-1",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
    bgIcon: <Shield size={160} strokeWidth={1} />,
  }
];

const ServicesSection = () => (
  <Section id="services" className="relative overflow-hidden py-32">
    {/* Background Glows */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

    <div className="max-w-7xl mx-auto px-6">
      <PageHeader 
        title="Solutions & Services" 
        subtitle="Comprehensive digital expertise tailored to help your business thrive in the modern web landscape." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-20">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`group relative glassmorphism rounded-[2.5rem] p-8 md:p-10 flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-white/10 shadow-2xl ${service.shadow} min-h-[260px] md:min-h-0 ${service.className}`}
          >
            {/* Background Big Icon (Fades in on hover) */}
            <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-white/10 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
              {service.bgIcon}
            </div>
            
            {/* Hover Gradient Glow inside card */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-1">
                {/* Icon Container */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.color} text-white shadow-lg ${service.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter font-outfit leading-tight text-foreground transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-[95%]">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className={`text-xs font-black uppercase tracking-[0.2em] bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  Explore Service
                </span>
                <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-foreground border border-white/10 group-hover:bg-white/5 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default ServicesSection;
