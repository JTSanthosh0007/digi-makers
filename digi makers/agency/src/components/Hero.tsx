"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Parallax translations for left and right image columns
  const leftY = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
  
  // Fade out text as scroll progress increases
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center bg-[#ff2731] overflow-hidden py-32"
    >
      {/* Decorative subtle background overlay grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column of Floating Images (Parallax Up) */}
        <motion.div 
          style={{ y: leftY }}
          className="hidden lg:flex lg:col-span-3 flex-col gap-8 pointer-events-none select-none"
        >
          <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 rotate-[-4deg]">
            <Image
              src="/digi-makers/brand_strategy.png"
              alt="Brand & Strategy Mockup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
              priority
            />
          </div>
          <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 rotate-[2deg] translate-x-4">
            <Image
              src="/digi-makers/creative_content.png"
              alt="Creative & Content Mockup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
              priority
            />
          </div>
        </motion.div>

        {/* Center Typography & Copy Column */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="lg:col-span-6 text-center flex flex-col items-center justify-center"
        >
          {/* Stacked Heading */}
          <div className="flex flex-col items-center leading-[0.8] mb-10 select-none">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter"
            >
              WE THINK
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-black text-white/40 tracking-tighter my-2"
            >
              WE CREATE
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter"
            >
              DIGIMAKER
            </motion.h1>
          </div>

          {/* Subheading text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-white text-base md:text-lg max-w-lg mb-12 font-medium leading-relaxed tracking-wide"
          >
            A 360° Marketing & Growth Studio. We turn brand identity into measurable impact through strategy, content, digital performance, and scalable marketing systems.
          </motion.p>

          {/* Button CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#contact"
              className="px-10 py-5 rounded-full bg-black text-white text-sm font-black tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-transparent hover:border-black"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column of Floating Images (Parallax Down) */}
        <motion.div 
          style={{ y: rightY }}
          className="hidden lg:flex lg:col-span-3 flex-col gap-8 pointer-events-none select-none"
        >
          <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 rotate-[3deg] -translate-x-4">
            <Image
              src="/digi-makers/content_growth.png"
              alt="Content & Growth Mockup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
              priority
            />
          </div>
          <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 rotate-[-2deg]">
            <Image
              src="/digi-makers/activation_influence.png"
              alt="Activation & Influence Mockup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Dynamic bottom transition shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
