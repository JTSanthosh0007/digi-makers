"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ff2731] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs text-[#ff2731] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-2">
              <Flame size={16} /> ABOUT DIGI MAKER
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-white leading-tight">
              We Don’t Just Run Campaigns <br />
              <span className="text-gray-500">We Build Growth Systems.</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8 font-light leading-relaxed">
              DigiMaker is a full-spectrum marketing agency built for modern brands. We combine strategy, content, digital performance, and on-ground activation to create marketing that doesn’t just look good it delivers real, compounding results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-[#161616] border border-white/5 rounded-2xl">
                <div className="text-[#ff2731] mb-3"><Target size={24} /></div>
                <h4 className="text-white font-bold mb-2">Growth Systems</h4>
                <p className="text-xs text-gray-500">We align marketing channels into a cohesive ecosystem that multiplies results.</p>
              </div>
              <div className="p-5 bg-[#161616] border border-white/5 rounded-2xl">
                <div className="text-[#ff2731] mb-3"><TrendingUp size={24} /></div>
                <h4 className="text-white font-bold mb-2">Compound Value</h4>
                <p className="text-xs text-gray-500">We focus on building long-term brand equity instead of short-term noise.</p>
              </div>
            </div>

            <Link 
              href="#contact" 
              className="inline-flex items-center gap-2 text-white hover:text-[#ff2731] transition-all font-bold text-sm uppercase tracking-widest group border-b border-white/10 hover:border-[#ff2731] pb-1"
            >
              Start Building Your System
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] w-full rounded-3xl overflow-hidden group border border-white/5 bg-[#161616]"
          >
            {/* Dark abstract overlay grids */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,39,49,0.08)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            {/* Animated glowing lines inside the card */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -right-10 w-80 h-80 border border-[#ff2731]/10 rounded-full"
            />
            <motion.div 
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-96 h-96 border border-white/5 rounded-full"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#ff2731]/10 border border-[#ff2731]/20 flex items-center justify-center mb-8 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-[#ff2731] text-3xl font-black">360°</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-wider">FULL SPECTRUM</h4>
              <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                Integrating brand identity, digital marketing, performance scaling, and creative campaigns under a single performance engine.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff2731] to-transparent opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
