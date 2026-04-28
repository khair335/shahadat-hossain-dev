"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, Award } from "lucide-react";
import type { VolunteerWork } from "./VoluntarySection";

interface VoluntaryCarouselProps {
  volunteerData: VolunteerWork[];
}

const VoluntaryCarousel: React.FC<VoluntaryCarouselProps> = ({ volunteerData }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {volunteerData.map((volunteer, index) => (
            <CarouselItem key={volunteer.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div className="glassmorphism h-full rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500 group flex flex-col">
                  {/* Image */}
                  {volunteer.image && (
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={volunteer.image}
                        alt={volunteer.organization}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <span className="absolute top-6 right-6 px-4 py-1.5 glassmorphism rounded-full text-[10px] font-black uppercase tracking-widest text-primary border-none">
                        {volunteer.category}
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <p className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                        <Heart size={14} className="text-accent" />
                        {volunteer.role}
                      </p>
                      <h3 className="text-2xl font-bold tracking-tight">
                        {volunteer.organization}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        <Calendar size={14} className="text-primary" />
                        <span>{volunteer.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        <MapPin size={14} className="text-primary" />
                        <span>{volunteer.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1 italic">
                      &quot;{volunteer.description}&quot;
                    </p>

                    <div className="pt-6 border-t border-border/50">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                        <Award size={14} className="text-accent" />
                        Impact & Achievements
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {volunteer.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-12">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 glassmorphism border-none hover:bg-primary hover:text-white transition-all" />
          <CarouselNext className="static translate-y-0 h-12 w-12 glassmorphism border-none hover:bg-primary hover:text-white transition-all" />
        </div>
      </Carousel>
    </div>
  );
};

export default VoluntaryCarousel;

