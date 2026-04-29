"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, Button } from "@nextui-org/react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = NAV.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.div 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <Navbar 
        onMenuOpenChange={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        maxWidth="xl"
        className={`pointer-events-auto rounded-full transition-all duration-300 glassmorphism ${
          scrolled ? "h-14 shadow-lg" : "h-16 bg-transparent border-transparent"
        }`}
      >
        <NavbarContent justify="start">
          <NavbarBrand as={NextLink} href="/#home" onClick={() => handleNavClick("home")} className="font-bold text-xl tracking-tight">
            <span className="text-gradient">Shahadat</span>
          </NavbarBrand>
        </NavbarContent>
        
        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {NAV.map((item) => (
            <NavbarItem key={item.id} isActive={activeId === item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  activeId === item.id 
                    ? "text-primary scale-110" 
                    : "text-foreground/70 hover:text-primary hover:scale-105"
                }`}
              >
                {item.label}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>
        
        <NavbarContent justify="end" className="gap-2">
          <NavbarItem className="hidden sm:flex">
            <Button 
              color="primary" 
              variant="shadow" 
              size="sm" 
              radius="full"
              as={NextLink} 
              href="/#contact" 
              onPress={() => handleNavClick("contact")}
              className="font-bold"
            >
              Hire Me
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button 
              isIconOnly 
              variant="flat" 
              radius="full"
              size="sm" 
              onPress={() => setTheme(isDark ? "light" : "dark")}
              className="glassmorphism"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </NavbarItem>
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
            className="md:hidden" 
          />
        </NavbarContent>

        <NavbarMenu className="glassmorphism mt-6 p-8 gap-6 rounded-t-[3rem] border-t border-border/50 backdrop-blur-2xl">
          {NAV.map((item, index) => (
            <NavbarMenuItem key={item.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button 
                  className={`w-full text-left py-4 text-2xl font-black tracking-tight font-outfit uppercase flex items-center justify-between group ${
                    activeId === item.id ? "text-primary" : "text-muted-foreground"
                  }`} 
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  <div className={`h-[2px] bg-primary transition-all duration-300 ${activeId === item.id ? "w-12" : "w-0 group-hover:w-8"}`} />
                </button>
              </motion.div>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV.length * 0.1 }}
            >
              <Button 
                color="primary" 
                radius="full" 
                size="lg" 
                className="w-full h-16 font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/20" 
                as={NextLink} 
                href="/#contact" 
                onPress={() => handleNavClick("contact")}
              >
                Hire Me
              </Button>
            </motion.div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
