"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4">About Us</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              We engineer <br/>
              <span className="text-gray-500">digital excellence.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-6 font-light leading-relaxed">
              Based at the intersection of design and technology, we are a premium creative agency dedicated to building digital experiences that define tomorrow.
            </p>
            <p className="text-lg text-gray-500 mb-10 font-light leading-relaxed">
              Our approach is rooted in strategy, fueled by creativity, and executed with precision. We don't just build websites; we craft digital ecosystems that drive growth and command attention.
            </p>
            
            <Link href="#contact" className="inline-flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors font-medium text-lg group border-b border-transparent hover:border-[#FFD700] pb-1">
              Discover Our Process
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl glass-card overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black z-0"></div>
            
            {/* Animated decorative elements inside the card */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -right-20 w-64 h-64 border border-[#FFD700]/20 rounded-full z-10"
            />
            <motion.div 
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 border border-white/10 rounded-full z-10"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-24 h-24 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center mb-8 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-[#FFD700] text-4xl font-bold">10+</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Years of Innovation</h4>
              <p className="text-gray-400">Pushing the boundaries of what's possible on the web since 2014.</p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
