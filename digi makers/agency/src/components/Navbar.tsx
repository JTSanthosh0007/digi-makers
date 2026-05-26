"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "STATS", href: "#stats" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of links) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Center Logo */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
        <div className="pointer-events-auto bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
          <Link href="#home" className="text-lg md:text-xl font-black tracking-[0.2em] text-white flex items-center gap-3 select-none">
            <span className="w-3 h-3 bg-[#ff2731] rounded-full inline-block animate-pulse" />
            <span>DIGI MAKER</span>
          </Link>
        </div>
      </div>

      {/* Floating Bottom Navbar */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="glass rounded-full px-2 py-1.5 flex items-center gap-1 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          {links.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[10px] md:text-xs font-bold tracking-wider transition-all duration-300 rounded-full uppercase",
                  isActive
                    ? "bg-[#e7e7e9] text-[#ff2731] shadow-[0_4px_15px_rgba(255,39,49,0.25)] scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
