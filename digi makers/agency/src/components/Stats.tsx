"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function RollingDigit({ targetValue, suffix }: { targetValue: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const duration = 1500; // 1.5 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing: easeOutQuad
        const ease = progress * (2 - progress);
        
        setDisplayValue(Math.floor(ease * targetValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, targetValue]);

  // Format with leading zero if less than 10
  const formattedValue = displayValue < 10 && targetValue < 10 ? `0${displayValue}` : displayValue;

  return (
    <div ref={ref} className="flex items-baseline select-none">
      <span className="text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter text-[#ff2731] leading-none">
        {formattedValue}
      </span>
      {suffix && (
        <span className="text-5xl md:text-7xl lg:text-8xl font-black text-white/40 ml-2">
          {suffix}
        </span>
      )}
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Decorative gradient glowing spots */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#ff2731] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading Copy */}
          <div className="lg:col-span-6 max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#ff2731] uppercase tracking-[0.2em] font-bold mb-6"
            >
              GROWTH THAT COMPOUNDS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6"
            >
              We focus on measurable outcomes, not vanity metrics.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed font-light"
            >
              Marketing should generate long-term brand equity and sustainable business performance not just short-term noise. Our systems are engineered to build lasting brand value and compounding user growth.
            </motion.p>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <RollingDigit targetValue={100} suffix="+" />
              <span className="text-xs md:text-sm font-extrabold tracking-widest text-gray-500 uppercase mt-4 select-none">
                BRANDS BUILT & SCALED
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col"
            >
              <RollingDigit targetValue={8} suffix="+" />
              <span className="text-xs md:text-sm font-extrabold tracking-widest text-gray-500 uppercase mt-4 select-none">
                YEARS IN BUSINESS
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
