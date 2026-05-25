"use client";

import { cn } from "@/lib/utils";

const BRANDS = [
  "ACME CORP",
  "GLOBAL TECH",
  "NEXUS",
  "QUANTUM",
  "STELLAR",
  "HORIZON",
  "ECLIPSE",
  "APEX",
];

export default function TrustedBrands() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-10 text-center relative z-10">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Trusted by innovative companies worldwide</p>
      </div>

      <div className="relative flex overflow-x-hidden group glass-card py-10 mx-auto max-w-[90%] md:max-w-[80%] rounded-3xl">
        {/* Left gradient mask */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent rounded-l-3xl"></div>
        
        {/* Marquee Content */}
        <div className="animate-infinite-scroll flex items-center whitespace-nowrap">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center mx-8 md:mx-16 text-2xl md:text-4xl font-bold text-gray-600 hover:text-white transition-colors duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
        
        {/* Right gradient mask */}
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0f0f0f] to-transparent rounded-r-3xl"></div>
      </div>
    </section>
  );
}
