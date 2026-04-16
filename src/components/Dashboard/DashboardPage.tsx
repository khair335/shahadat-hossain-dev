import React from 'react';
import HeroContentEditor from '@/components/Dashboard/HeroContentEditor';
import PortfolioEditor from '@/components/Dashboard/PortfolioEditor';
import ServicesEditor from '@/components/Dashboard/ServicesEditor';
import TimelineEditor from '@/components/Dashboard/TimelineEditor';
import BlogEditor from '@/components/Dashboard/BlogEditor';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';

const DashboardPage = () => {
  return (
    <SidebarInset className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Homepage Content Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Edit the content for various sections of your homepage.
            </p>
          </div>
          <SidebarTrigger className="md:hidden">
            <PanelLeft />
          </SidebarTrigger>
        </header>

        <Accordion type="multiple" defaultValue={["hero-section"]} className="w-full space-y-4">
          <AccordionItem value="hero-section" id="hero-section">
            <AccordionTrigger className="bg-white dark:bg-gray-800 shadow-lg px-6 py-4 rounded-lg text-xl text-gray-900 dark:text-white hover:no-underline">
              Edit Hero Section
            </AccordionTrigger>
            <AccordionContent className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-0">
              <div className="p-6">
                <HeroContentEditor />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="portfolio-section" id="portfolio-section">
            <AccordionTrigger className="bg-white dark:bg-gray-800 shadow-lg px-6 py-4 rounded-lg text-xl text-gray-900 dark:text-white hover:no-underline">
              Edit Portfolio Section
            </AccordionTrigger>
            <AccordionContent className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-0">
              <div className="p-6">
                <PortfolioEditor />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="services-section" id="services-section">
            <AccordionTrigger className="bg-white dark:bg-gray-800 shadow-lg px-6 py-4 rounded-lg text-xl text-gray-900 dark:text-white hover:no-underline">
              Edit Services Section
            </AccordionTrigger>
            <AccordionContent className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-0">
              <div className="p-6">
                <ServicesEditor />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="timeline-section" id="timeline-section">
            <AccordionTrigger className="bg-white dark:bg-gray-800 shadow-lg px-6 py-4 rounded-lg text-xl text-gray-900 dark:text-white hover:no-underline">
              Edit My Journey (Timeline)
            </AccordionTrigger>
            <AccordionContent className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-0">
              <div className="p-6">
                <TimelineEditor />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="blog-section" id="blog-section">
            <AccordionTrigger className="bg-white dark:bg-gray-800 shadow-lg px-6 py-4 rounded-lg text-xl text-gray-900 dark:text-white hover:no-underline">
              Edit Blog & Insights
            </AccordionTrigger>
            <AccordionContent className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-0">
              <div className="p-6">
                <BlogEditor />
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </SidebarInset>
  );
};

export default DashboardPage;
