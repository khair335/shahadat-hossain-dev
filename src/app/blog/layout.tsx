import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Shahadat Hossain",
  description: "Sharing technical insights, React development tips, and modern web architecture strategies.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
