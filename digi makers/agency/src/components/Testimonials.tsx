"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DigiMakers transformed our digital presence completely. Their attention to detail and design aesthetic is unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CMO, Nexus Tech",
  },
  {
    quote: "Working with this team felt like having an in-house design studio. They understood our vision perfectly and delivered beyond expectations.",
    author: "Marcus Chen",
    role: "Founder, Aura Finance",
  },
  {
    quote: "The rebrand and new platform they built for us increased our conversion rate by 150% in the first quarter alone.",
    author: "Elena Rodriguez",
    role: "CEO, Lumina Labs",
  },
  {
    quote: "A rare combination of incredible design talent and deep technical expertise. They are our go-to partner for all things digital.",
    author: "David Kim",
    role: "Product VP, Vortex AI",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-black/50 border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,rgba(255,215,0,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4"
        >
          Client Stories
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter"
        >
          Don't just take <span className="text-gray-500">our word for it.</span>
        </motion.h3>
      </div>

      <div className="relative flex overflow-x-hidden group pb-10">
        {/* Left gradient mask */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent"></div>
        
        {/* Scrolling content */}
        <div className="animate-infinite-scroll flex items-center gap-6 px-6">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] shrink-0 glass-card p-8 rounded-3xl relative"
            >
              <Quote className="text-[#FFD700]/20 w-12 h-12 mb-6" />
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-semibold">{testimonial.author}</h5>
                  <p className="text-sm text-[#FFD700]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right gradient mask */}
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}
