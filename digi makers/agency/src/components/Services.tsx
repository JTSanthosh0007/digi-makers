"use client";

import { motion } from "framer-motion";
import { PenTool, Layout, Code, Smartphone, Share2, Cpu } from "lucide-react";

const services = [
  {
    icon: <PenTool size={32} />,
    title: "Branding",
    description: "Creating memorable brand identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: <Layout size={32} />,
    title: "UI/UX Design",
    description: "Designing intuitive, beautiful, and user-centric interfaces that elevate the digital experience.",
  },
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description: "Building high-performance, scalable, and secure web applications using cutting-edge technologies.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description: "Crafting seamless native and cross-platform mobile experiences for iOS and Android.",
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media Marketing",
    description: "Data-driven marketing campaigns that amplify your brand's voice and drive conversions.",
  },
  {
    icon: <Cpu size={32} />,
    title: "AI Automation",
    description: "Implementing intelligent AI solutions to streamline operations and unlock new possibilities.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFD700] opacity-5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Capabilities that drive <span className="text-gradient-yellow">results.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            A comprehensive suite of services designed to transform your digital presence and accelerate growth.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="group relative">
              {/* Gradient border wrapper */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 opacity-100 group-hover:from-[#FFD700]/50 group-hover:to-transparent transition-all duration-500 z-0"></div>
              
              <div className="relative h-full bg-[#0f0f0f] rounded-3xl p-8 z-10 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(255,215,0,0.15)]">
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-[#FFD700]/10 group-hover:text-[#FFD700] group-hover:border-[#FFD700]/30 transition-all duration-500 relative">
                  {/* Floating effect for icon */}
                  <div className="group-hover:animate-bounce-slow">
                    {service.icon}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Animated line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FFD700] to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
