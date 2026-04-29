"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import VoluntarySection from "@/components/VoluntarySection";
import BlogSection from "@/components/BlogSection";
import SkillsGraph from "@/components/SkillsGraph";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { Button } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import Image from "next/image";

// Nav handled by SiteHeader

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Shahadat delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise are outstanding."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Digital Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Working with Shahadat was a pleasure. He completed the project on time and the quality of work was excellent. Highly recommended!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Professional, responsive, and skilled. Shahadat transformed our vision into a beautiful, functional website."
  }
];

const HomePage = () => {
  // Navigation and theme handled globally

  return (
    <div className="min-h-screen transition-colors duration-300">
      <HeroSection />
      <AboutSection />
      {/* Skills Section */}
      <SkillsGraph />
      <PortfolioSection />
      <ServicesSection />
      <TimelineSection />
      <VoluntarySection />
      <BlogSection />

      <section id="testimonials" className="relative py-32 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <PageHeader 
            title="Client Feedback" 
            subtitle="What partners and clients say about our collaboration." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glassmorphism p-10 rounded-[3rem] hover:border-primary/50 transition-all duration-500 group border-none shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="relative w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-background shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-lg tracking-tight font-outfit leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary text-xs font-black uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 gap-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic text-base font-medium">
                  &quot;{testimonial.comment}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter font-outfit">
                Let&apos;s Build <br />
                <span className="text-gradient">Something Great</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-lg font-medium">
                Have a project in mind? Whether it&apos;s a complex web application or a simple landing page, I&apos;m ready to help you bring it to life.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: <Mail className="text-primary" size={24} />, label: "Email", value: "shahadat@example.com", sub: "Available for freelance" },
                  { icon: <Phone className="text-primary" size={24} />, label: "Phone", value: "+880 123 456 7890", sub: "Mon-Fri, 9am-6pm" },
                  { icon: <MapPin className="text-primary" size={24} />, label: "Location", value: "Dhaka, Bangladesh", sub: "Worldwide remote" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] glassmorphism flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-none shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{item.label}</p>
                      <p className="text-xl font-bold tracking-tight">{item.value}</p>
                      <p className="text-xs text-muted-foreground font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glassmorphism p-12 md:p-16 rounded-[3.5rem] border-none shadow-2xl relative z-10">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black ml-1 uppercase tracking-[0.2em] text-muted-foreground">Full Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        className="h-16 rounded-2xl bg-background/50 border-border/50 focus:border-primary transition-all px-6 text-base font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black ml-1 uppercase tracking-[0.2em] text-muted-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="h-16 rounded-2xl bg-background/50 border-border/50 focus:border-primary transition-all px-6 text-base font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black ml-1 uppercase tracking-[0.2em] text-muted-foreground">Subject</label>
                    <Input
                      type="text"
                      placeholder="Project Inquiry"
                      className="h-16 rounded-2xl bg-background/50 border-border/50 focus:border-primary transition-all px-6 text-base font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black ml-1 uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                    <Textarea
                      placeholder="Tell me more about your project..."
                      rows={5}
                      className="rounded-2xl bg-background/50 border-border/50 focus:border-primary transition-all p-6 text-base font-medium"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    radius="full"
                    className="w-full h-16 bg-primary text-white font-black text-sm md:text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 uppercase tracking-widest"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Decorative circle behind form */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
