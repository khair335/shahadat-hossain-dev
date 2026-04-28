import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "React Developer Bangladesh | Shahadat Hossain Portfolio",
    description:
      "Hire a freelance React developer in Bangladesh for web, app, and business projects. Modern, fast, and beautiful digital solutions.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/shahadat-og.png",
        width: 1200,
        height: 630,
        alt: "Shahadat Hossain — React Developer Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || undefined,
    title: "React Developer Bangladesh | Shahadat Hossain",
    description:
      "React developer Bangladesh - Shahadat Hossain’s modern web solutions portfolio.",
    images: ["/shahadat-og.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
