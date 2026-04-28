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
    <div className="max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {volunteerData.map((volunteer, index) => (
            <CarouselItem key={volunteer.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Image */}
                  {volunteer.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={volunteer.image}
                        alt={volunteer.organization}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-500 text-white border-0">
                        {volunteer.category}
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6">
                    {/* Organization & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {volunteer.organization}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <Heart size={14} />
                        {volunteer.role}
                      </p>
                    </div>

                    {/* Period & Location */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} />
                        <span>{volunteer.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={14} />
                        <span>{volunteer.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {volunteer.description}
                    </p>

                    {/* Achievements */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Award size={16} className="text-green-600 dark:text-green-400" />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Key Achievements
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {volunteer.achievements.map((achievement, idx) => (
                          <li
                            key={`${volunteer.id}-achievement-${idx}`}
                            className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700" />
        <CarouselNext className="hidden md:flex -right-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700" />
      </Carousel>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {volunteerData.map((volunteer) => (
          <div
            key={`${volunteer.id}-dot`}
            className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600"
          />
        ))}
      </div>
    </div>
  );
};

export default VoluntaryCarousel;

