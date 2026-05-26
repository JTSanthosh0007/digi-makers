"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, ArrowUp } from "lucide-react";

const collageImages = [
  "/digi-makers/brand_strategy.png",
  "/digi-makers/creative_content.png",
  "/digi-makers/content_growth.png",
  "/digi-makers/activation_influence.png",
  "/digi-makers/brand_strategy.png",
  "/digi-makers/creative_content.png",
  "/digi-makers/content_growth.png",
  "/digi-makers/activation_influence.png",
  "/digi-makers/brand_strategy.png",
  "/digi-makers/creative_content.png",
  "/digi-makers/content_growth.png",
  "/digi-makers/activation_influence.png",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="relative bg-black pt-0 pb-16 overflow-hidden">
      {/* Say Hello Banner Container */}
      <div className="relative w-full min-h-[550px] flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* 3x4 Grid Collage Background */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 opacity-20 pointer-events-none select-none">
          {collageImages.map((img, index) => (
            <div key={index} className="relative w-full h-full min-h-[150px]">
              <Image
                src={img}
                alt="Collage Graphic"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Vibrant Red Overlay */}
        <div className="absolute inset-0 bg-[#ff2731] mix-blend-multiply opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        {/* Inner Content */}
        <div className="relative z-10 text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-8xl md:text-[10rem] font-black tracking-tighter text-white mb-6 select-none leading-none"
          >
            Say Hello!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-lg md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Tell us your goals we’ll build the growth engine behind them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="mailto:hello@digimaker.in"
              className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Mail size={16} />
              hello@digimaker.in
            </a>
            <a
              href="tel:+919036639525"
              className="flex items-center gap-3 px-8 py-4 bg-black text-white border border-white/20 font-black uppercase text-xs tracking-widest rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone size={16} />
              +91 90366 39525
            </a>
            <a
              href="tel:+918884803048"
              className="flex items-center gap-3 px-8 py-4 bg-black text-white border border-white/20 font-black uppercase text-xs tracking-widest rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone size={16} />
              +91 88848 03048
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Meta Details */}
      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link href="#home" className="flex items-center gap-3 select-none mb-4 h-12">
                <Image
                  src="/digi-makers/logo.png"
                  alt="DIGI MAKER"
                  width={200}
                  height={60}
                  className="h-full w-auto object-contain"
                  style={{ mixBlendMode: "screen" }}
                />
              </Link>
              <p className="text-gray-500 text-sm max-w-sm mt-4 leading-relaxed">
                Bengaluru's top creative & marketing agency building systems that scale modern brands through content, performance, and strategy.
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="#" className="text-xs font-bold tracking-widest text-gray-500 hover:text-white uppercase transition-colors">
                Instagram <ArrowUpRight size={10} className="inline ml-0.5" />
              </a>
              <a href="#" className="text-xs font-bold tracking-widest text-gray-500 hover:text-white uppercase transition-colors">
                LinkedIn <ArrowUpRight size={10} className="inline ml-0.5" />
              </a>
              <a href="#" className="text-xs font-bold tracking-widest text-gray-500 hover:text-white uppercase transition-colors">
                Twitter <ArrowUpRight size={10} className="inline ml-0.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-[#ff2731] uppercase mb-6">Nav</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-sm text-gray-400 hover:text-white transition-colors uppercase font-medium">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors uppercase font-medium">About</Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors uppercase font-medium">Services</Link>
              </li>
              <li>
                <Link href="#stats" className="text-sm text-gray-400 hover:text-white transition-colors uppercase font-medium">Stats</Link>
              </li>
            </ul>
          </div>

          {/* Location Info */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-[#ff2731] uppercase mb-6">Location</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Bengaluru, Karnataka,<br />
              India
            </p>
            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copy / Attributions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} DigiMaker. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by{" "}
            <a href="https://webflow.com" className="hover:text-white transition-colors">
              DigiMaker
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
