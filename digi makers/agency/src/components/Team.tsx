"use client";

import { motion } from "framer-motion";
import { Monitor, Link2, MessageCircle } from "lucide-react";

const team = [
  {
    name: "Alex Sterling",
    role: "Founder & Creative Director",
    initials: "AS",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    name: "Jordan Lee",
    role: "Lead Tech Engineer",
    initials: "JL",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "Taylor Reed",
    role: "Head of UX/UI",
    initials: "TR",
    color: "from-rose-500/20 to-orange-500/20",
  },
  {
    name: "Casey Morgan",
    role: "Marketing Strategist",
    initials: "CM",
    color: "from-[#FFD700]/20 to-amber-500/20",
  },
];

export default function Team() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4"
          >
            The Minds Behind the Magic
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Meet our <span className="text-gradient-yellow">experts.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-6">
                {/* Decorative rotating ring */}
                <div className="absolute -inset-2 rounded-full border border-dashed border-white/20 group-hover:border-[#FFD700]/50 group-hover:animate-[spin_10s_linear_infinite] transition-colors duration-500"></div>
                
                {/* Image Placeholder / Initials container */}
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <span className="text-4xl font-bold text-white relative z-20 group-hover:scale-110 transition-transform duration-300">{member.initials}</span>
                </div>
                
                {/* Social links appearing on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 z-30 transition-opacity duration-300 bg-black/60 rounded-full backdrop-blur-sm scale-95 group-hover:scale-105">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-black transition-colors"><MessageCircle size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-black transition-colors"><Link2 size={14} /></a>

                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition-colors">{member.name}</h4>
              <p className="text-sm text-gray-500 uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
