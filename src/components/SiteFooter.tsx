"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 overflow-hidden border-t border-border/50">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tighter font-outfit">
              SHAHADAT<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-relaxed">
              Building high-end digital experiences with modern technologies. 
              Focused on performance, scalability, and exceptional UI/UX.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <Github size={20} />, href: "#", label: "GitHub" },
                { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
                { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "#", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/#home" },
                { label: "About", href: "/#about" },
                { label: "Projects", href: "/#portfolio" },
                { label: "Services", href: "/#services" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[2px] bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Contact</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <p className="font-bold text-lg">shahadat@example.com</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="font-bold text-lg">Dhaka, Bangladesh</p>
              </div>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
              >
                Hire Me <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} <span className="text-foreground font-bold">Shahadat Hossain</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
