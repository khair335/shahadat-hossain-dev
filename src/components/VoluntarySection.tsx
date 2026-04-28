import React from "react";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import VoluntaryCarousel from "./VoluntaryCarousel";

export interface VolunteerWork {
  id: number;
  organization: string;
  role: string;
  period: string;
  description: string;
  location: string;
  image?: string;
  achievements: string[];
  category: string;
}

// Demo data - this can be moved to a separate file or database later
const volunteerData: VolunteerWork[] = [
  {
    id: 1,
    organization: "Tech for Good Bangladesh",
    role: "Web Development Mentor",
    period: "2022 - Present",
    description: "Mentoring aspiring developers in web technologies, helping them build real-world projects and prepare for careers in tech. Conducting workshops on React, Next.js, and modern web development practices.",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    achievements: [
      "Mentored 50+ students",
      "Organized 12 workshops",
      "Helped launch 20+ projects"
    ],
    category: "Education"
  },
  {
    id: 2,
    organization: "Digital Literacy Initiative",
    role: "Volunteer Developer",
    period: "2021 - 2023",
    description: "Developed free educational platforms and tools to improve digital literacy in rural areas. Created responsive web applications that work on low-end devices with limited internet connectivity.",
    location: "Remote / Bangladesh",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    achievements: [
      "Built 3 educational platforms",
      "Reached 5000+ users",
      "Open source contributions"
    ],
    category: "Social Impact"
  },
  {
    id: 3,
    organization: "Code for Community",
    role: "Lead Developer",
    period: "2020 - 2022",
    description: "Led a team of volunteers to build web solutions for local NGOs. Managed project timelines, code reviews, and deployment strategies. Focused on creating accessible and user-friendly interfaces.",
    location: "Bangladesh",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    achievements: [
      "Led team of 8 developers",
      "Delivered 5 NGO projects",
      "100% volunteer satisfaction"
    ],
    category: "Community"
  },
  {
    id: 4,
    organization: "Youth Tech Hub",
    role: "Workshop Instructor",
    period: "2019 - 2021",
    description: "Conducted free coding workshops for underprivileged youth. Taught HTML, CSS, JavaScript fundamentals and helped students create their first websites. Provided career guidance and mentorship.",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    achievements: [
      "Taught 200+ students",
      "Created 10 workshop series",
      "Job placement assistance"
    ],
    category: "Education"
  },
  {
    id: 5,
    organization: "Open Source Contributor",
    role: "Maintainer & Contributor",
    period: "2018 - Present",
    description: "Contributing to open source projects that benefit the developer community. Maintaining documentation, fixing bugs, and adding new features to popular React and Next.js libraries.",
    location: "Global / Remote",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    achievements: [
      "500+ GitHub contributions",
      "Maintained 3 projects",
      "Helped 1000+ developers"
    ],
    category: "Open Source"
  }
];

// Server Component - SSR compatible
const VoluntarySection = () => {
  return (
    <Section 
      id="voluntary" 
      className="relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10">
        <PageHeader 
          title="Volunteer Work" 
          subtitle="Giving back to the community through technology and education." 
        />

        <div className="mt-20">
          <VoluntaryCarousel volunteerData={volunteerData} />
        </div>
      </div>
    </Section>
  );
};

export default VoluntarySection;

