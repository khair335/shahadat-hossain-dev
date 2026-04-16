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
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      <div id="skills" className="bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
        <PageHeader title="Skills Map" subtitle="A comprehensive overview of my technical expertise and proficiency levels." />
        <SkillsGraph />
      </div>
      <PortfolioSection />
      <ServicesSection />
      <TimelineSection />
      <VoluntarySection />
      <BlogSection />

      <section id="reviews" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Client Reviews
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            ></motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.11 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}, client review for React developer Bangladesh`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {testimonial.comment}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 36 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            ></motion.div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let&apos;s Work Together
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Have a project in mind? I&apos;d love to hear about it. Send me a message 
                and let&apos;s discuss how we can bring your ideas to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">shahadat@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">+880 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Shahadat Hossain. React Developer Bangladesh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
