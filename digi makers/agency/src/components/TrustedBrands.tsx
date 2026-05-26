"use client";

const BRANDS = [
  "1MG-LIDO",
  "TRINITY CIRCLE",
  "VAULT BY VIRAT KOHLI",
  "GAURAJYA",
  "MONK STUDIOS",
  "TECH SYSTEMS",
  "RETAIL LABS",
  "CORE VENTURES",
];

export default function TrustedBrands() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold">
          Trusted by modern brands & founders
        </p>
      </div>

      <div className="relative flex overflow-x-hidden py-4">
        {/* Left gradient mask */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        
        {/* Marquee Content */}
        <div className="animate-infinite-scroll flex items-center whitespace-nowrap">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center px-8 py-4 mx-4 bg-[#161616] border border-white/5 rounded-2xl text-sm md:text-base font-black tracking-widest text-gray-400 hover:text-white hover:border-[#ff2731]/30 transition-all duration-300 select-none cursor-pointer"
            >
              <span className="w-2 h-2 bg-[#ff2731] rounded-full mr-3 opacity-60" />
              {brand}
            </div>
          ))}
        </div>
        
        {/* Right gradient mask */}
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
