"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Nova Ecosystem",
    category: "Web & Mobile App",
    imageClass: "bg-gradient-to-br from-indigo-900 to-black",
    span: "md:col-span-2 md:row-span-2",
    delay: 0.1,
  },
  {
    title: "Aura Finance",
    category: "Fintech Platform",
    imageClass: "bg-gradient-to-br from-emerald-900 to-black",
    span: "md:col-span-1 md:row-span-1",
    delay: 0.2,
  },
  {
    title: "Vortex AI",
    category: "SaaS Dashboard",
    imageClass: "bg-gradient-to-br from-rose-900 to-black",
    span: "md:col-span-1 md:row-span-1",
    delay: 0.3,
  },
  {
    title: "Lumina Labs",
    category: "Corporate Site",
    imageClass: "bg-gradient-to-br from-amber-900 to-black",
    span: "md:col-span-2 md:row-span-1",
    delay: 0.4,
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              Featured <span className="text-gray-500">projects.</span>
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/5 transition-all duration-300 text-white hover:text-[#FFD700]"
            >
              View All Work
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: project.delay, duration: 0.6 }}
              className={`group relative rounded-3xl overflow-hidden glass-card cursor-pointer ${project.span}`}
            >
              {/* Background with placeholder gradient (would be an image/video in reality) */}
              <div className={`absolute inset-0 w-full h-full ${project.imageClass} transition-transform duration-700 ease-in-out group-hover:scale-105`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[#FFD700] text-sm font-medium mb-2 tracking-wide uppercase">{project.category}</p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white/20">
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
