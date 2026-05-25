"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFD700] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#B39700] rounded-full mix-blend-screen filter blur-[200px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-[#FFD700] tracking-wide uppercase">
            Award Winning Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
        >
          <span className="block text-white">DESIGN</span>
          <span className="block text-gradient-yellow">THE FUTURE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light"
        >
          We craft premium, immersive digital experiences that elevate brands to new heights. Minimal, cinematic, and engineered for impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#FFD700] px-8 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] w-full sm:w-auto"
          >
            <span className="mr-2 text-lg font-semibold">Start Project</span>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Link>
          
          <Link
            href="#work"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto"
          >
            <span className="text-lg">View Work</span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElement delay={0} x={-20} y={-30} size="w-32 h-32" className="top-1/4 left-10 md:left-32 border-[#FFD700]/20" />
      <FloatingElement delay={1} x={30} y={20} size="w-24 h-24" className="bottom-1/3 right-10 md:right-32 border-white/10" />
      <FloatingElement delay={2} x={-10} y={40} size="w-16 h-16" className="top-1/3 right-1/4 border-[#FFD700]/30" />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-[#FFD700]"
          />
        </div>
      </motion.div>
    </section>
  );
}

function FloatingElement({ delay, x, y, size, className }: { delay: number, x: number, y: number, size: string, className: string }) {
  return (
    <motion.div
      animate={{
        y: [0, y, 0],
        x: [0, x, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute ${size} rounded-3xl glass rotate-12 -z-10 ${className}`}
    />
  );
}
