"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Research & Discovery",
    description: "We dive deep into your brand, industry, and audience to uncover insights that drive the project's foundation.",
  },
  {
    num: "02",
    title: "Strategic Planning",
    description: "Developing a comprehensive roadmap that aligns your business goals with user needs and market opportunities.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Crafting wireframes and high-fidelity prototypes that visualize the user journey and aesthetic direction.",
  },
  {
    num: "04",
    title: "Development",
    description: "Writing clean, scalable code to bring the designs to life, ensuring optimal performance across all devices.",
  },
  {
    num: "05",
    title: "Launch & Iterate",
    description: "Rigorous testing followed by deployment. We continuously monitor and optimize to ensure sustained success.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4"
          >
            How We Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Our proven <span className="text-gradient-yellow">methodology.</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-14 h-14 rounded-full bg-black border border-[#FFD700]/30 flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10 text-[#FFD700] font-bold text-lg shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                  {step.num}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                  <div className="glass-card p-8 rounded-3xl group hover:border-[#FFD700]/30 transition-colors duration-300">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
