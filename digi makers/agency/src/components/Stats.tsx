"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Revenue Generated", value: 50, suffix: "M+" },
  { label: "Countries Served", value: 15, suffix: "" },
];

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 relative border-y border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center ${index % 2 !== 0 ? 'border-l border-white/5 md:border-none' : 'border-none'} md:border-l md:first:border-none`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tighter text-shadow-yellow">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-[#FFD700] uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
