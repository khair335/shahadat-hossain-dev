"use client";

import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";

export default function SiteFooter() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card shadow="sm" radius="lg" className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200">
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-white font-semibold mb-2">Shine On Web</div>
                <p className="text-slate-400">Modern React/Next.js development from Bangladesh.</p>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Navigation</div>
                <ul className="space-y-1">
                  {[
                    { id: "home", label: "Home" },
                    { id: "about", label: "About" },
                    { id: "portfolio", label: "Portfolio" },
                    { id: "services", label: "Services" },
                    { id: "contact", label: "Contact" },
                  ].map((l) => (
                    <li key={l.id}>
                      <Link href={`#${l.id}`} className="text-slate-300 hover:text-white" underline="hover">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Contact</div>
                <p className="text-slate-400">Dhaka, Bangladesh</p>
                <p className="text-slate-400">shahadat@example.com</p>
              </div>
            </div>
            <div className="text-center text-slate-400 mt-8">
              © {new Date().getFullYear()} Shahadat Hossain. All rights reserved.
            </div>
          </CardBody>
        </Card>
      </div>
    </footer>
  );
}
