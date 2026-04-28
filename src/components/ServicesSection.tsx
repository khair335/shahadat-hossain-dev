
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Code2, MonitorSmartphone, Brush, Search, Shield, Zap, Rocket, Layers } from "lucide-react";

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Full-Stack Development",
    desc: "End-to-end web applications built with Next.js, React, and Node.js. Focused on high-performance scalability and enterprise-grade architecture.",
    className: "md:col-span-4 md:row-span-2",
    color: "bg-blue-500/10 text-blue-500",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    icon: <MonitorSmartphone size={24} />,
    title: "Responsive UI",
    desc: "Pixel-perfect, mobile-first designs with fluid animations.",
    className: "md:col-span-2 md:row-span-1",
    color: "bg-purple-500/10 text-purple-500",
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    icon: <Brush size={24} />,
    title: "UI/UX Design",
    desc: "Crafting beautiful interfaces with a focus on user experience.",
    className: "md:col-span-2 md:row-span-1",
    color: "bg-pink-500/10 text-pink-500",
    gradient: "from-pink-500/20 to-transparent"
  },
  {
    icon: <Rocket size={24} />,
    title: "Performance",
    desc: "Optimizing for lightning-fast speed and high SEO rankings.",
    className: "md:col-span-3 md:row-span-1",
    color: "bg-orange-500/10 text-orange-500",
    gradient: "from-orange-500/20 to-transparent"
  },
  {
    icon: <Shield size={24} />,
    title: "Secure Apps",
    desc: "Robust security practices to protect your data and users.",
    className: "md:col-span-3 md:row-span-1",
    color: "bg-green-500/10 text-green-500",
    gradient: "from-green-500/20 to-transparent"
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
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-20">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`group relative glassmorphism rounded-[3rem] p-8 md:p-10 flex flex-col hover:border-primary/50 transition-all duration-700 border-none shadow-2xl hover:shadow-primary/5 min-h-[300px] md:min-h-0 ${service.className}`}
          >
            {/* Hover Gradient Overlay - Clip using rounded corners of parent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-1">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] flex items-center justify-center mb-8 md:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl ${service.color}`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter font-outfit leading-tight group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-md">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary">Service Excellence</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glassmorphism flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Zap size={16} className="md:size-5" />
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default ServicesSection;
