import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "React Developer Bangladesh | Shahadat Hossain Portfolio",
    template: "%s | Shahadat Hossain",
  },
  description:
    "React developer Bangladesh - Shahadat Hossain's professional portfolio. See my projects, services, blog & contact for modern web solutions.",
  keywords: [
    "React developer Bangladesh",
    "freelance React developer",
    "Next.js developer",
    "Bangladesh web developer",
    "web developer portfolio",
    "Shahadat Hossain",
  ],
  openGraph: {
    title: "React Developer Bangladesh | Shahadat Hossain Portfolio",
    description:
      "Hire a freelance React developer in Bangladesh for web, app, and business projects. Modern, fast, and beautiful digital solutions.",
    type: "website",
    url: "/",
    images: [{ url: "https://i.ibb.co/1JzcWJXn/1000031357.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || undefined,
    title: "React Developer Bangladesh | Shahadat Hossain",
    description:
      "React developer Bangladesh - Shahadat Hossain’s modern web solutions portfolio.",
    images: ["https://i.ibb.co/1JzcWJXn/1000031357.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteHeader />
          {children}
         
        </Providers>
      </body>
    </html>
  );
}
