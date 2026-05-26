"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Brand & Strategy",
    description:
      "Branding and strategy define your positioning, refine your messaging, and create a clear roadmap for sustainable growth and competitive advantage.",
    image: "/digi-makers/brand_strategy.png",
    link: "#contact",
  },
  {
    title: "Creative & Content",
    description:
      "We create high-impact visuals and strategic content that strengthen brand identity, engage audiences, and drive measurable marketing results across digital platforms.",
    image: "/digi-makers/creative_content.png",
    link: "#contact",
  },
  {
    title: "Content & Growth",
    description:
      "We build data-driven content strategies and performance marketing systems that increase visibility, generate leads, and optimise conversions turning audience attention into business growth.",
    image: "/digi-makers/content_growth.png",
    link: "#contact",
  },
  {
    title: "Activation & Influence",
    description:
      "We drive reach and engagement through strategic activations and influencer marketing that strengthen brand presence and accelerate growth.",
    image: "/digi-makers/activation_influence.png",
    link: "#contact",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Huge floating letters background */}
      <div className="absolute inset-x-0 top-10 pointer-events-none select-none overflow-hidden opacity-5 flex justify-center">
        <h1 className="text-[12rem] md:text-[20rem] font-black tracking-widest text-white leading-none font-sans">
          SERVICES
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-[#ff2731] uppercase tracking-[0.2em] font-bold mb-6"
          >
            OUR CAPABILITIES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Tailored Marketing & <br />
            Growth Solutions.
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-[#161616] border border-white/5 hover:border-[#ff2731]/30 rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,39,49,0.08)]"
            >
              {/* Image Column */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-[#161616]/50" />
              </div>

              {/* Text Content Column */}
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#ff2731] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-white group-hover:text-[#ff2731] transition-colors duration-300"
                  >
                    Learn More
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
