import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Portfolio | Shahadat Hossain",
  description: "Explore a curated collection of high-performance web applications and digital experiences built with modern technologies.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
