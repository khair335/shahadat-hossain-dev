"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, Button, Link } from "@nextui-org/react";
import { useTheme } from "next-themes";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
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
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50">
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered className={scrolled ? "backdrop-blur bg-background/70" : "backdrop-blur bg-transparent"}>
        <NavbarContent justify="start">
          <NavbarBrand as={Link} href="#home" onClick={() => scrollToSection("home")} className="font-bold text-xl">
            Shahadat
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-6" justify="center">
          {NAV.map((item) => (
            <NavbarItem key={item.id} isActive={activeId === item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium ${activeId === item.id ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
              >
                {item.label}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Button color="primary" variant="shadow" size="sm" as={Link} href="#contact" onClick={() => scrollToSection("contact")}>
              Hire Me
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly variant="flat" size="sm" onClick={() => setTheme(isDark ? "light" : "dark")}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </NavbarItem>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
        </NavbarContent>

        <NavbarMenu>
          {NAV.map((item) => (
            <NavbarMenuItem key={item.id}>
              <button className="w-full text-left py-2" onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}>
                {item.label}
              </button>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button color="primary" className="w-full" as={Link} href="#contact" onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }}>
              Hire Me
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
