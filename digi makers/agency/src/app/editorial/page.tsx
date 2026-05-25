"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditorialEngine() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,#0f0f14_0%,#0a0a0c_100%)] text-[#e8e4dc] font-serif" style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif' }}>
      
      <Link href="/" className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white/50 hover:text-white transition-colors">
        <ArrowLeft size={16} />
        <span className="text-sm font-sans tracking-widest uppercase">Back</span>
      </Link>

      <div className="fixed top-4 left-1/2 -translate-x-1/2 font-sans text-[13px] text-white/20 bg-black/45 px-4 py-2 rounded-full pointer-events-none whitespace-nowrap z-50 border border-white/5">
        The Editorial Engine UI Design
      </div>

      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[220px] h-[220px] rounded-full pointer-events-none z-10"
        style={{ 
          background: 'radial-gradient(circle at 35% 35%, rgba(196,163,90,0.35), rgba(196,163,90,0.12) 55%, transparent 72%)',
          boxShadow: '0 0 60px 15px rgba(196,163,90,0.18), 0 0 120px 40px rgba(196,163,90,0.07)'
        }}
      />

      <motion.div 
        animate={{ 
          y: [0, 80, 0],
          x: [0, -40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[190px] h-[190px] rounded-full pointer-events-none z-10"
        style={{ 
          background: 'radial-gradient(circle at 35% 35%, rgba(232,100,130,0.35), rgba(232,100,130,0.12) 55%, transparent 72%)',
          boxShadow: '0 0 60px 15px rgba(232,100,130,0.18), 0 0 120px 40px rgba(232,100,130,0.07)'
        }}
      />

      <motion.div 
        animate={{ 
          y: [0, -60, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-1/4 left-1/3 w-[150px] h-[150px] rounded-full pointer-events-none z-10"
        style={{ 
          background: 'radial-gradient(circle at 35% 35%, rgba(100,140,255,0.35), rgba(100,140,255,0.12) 55%, transparent 72%)',
          boxShadow: '0 0 60px 15px rgba(100,140,255,0.18), 0 0 120px 40px rgba(100,140,255,0.07)'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 pt-32 pb-20 relative z-20 max-w-5xl">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            THE FUTURE OF TEXT LAYOUT IS NOT CSS
          </h1>
        </header>

        <div className="columns-1 md:columns-2 gap-12 text-lg leading-[1.8]">
          <p className="mb-6">
            <span className="float-left text-7xl font-bold text-[#c4a35a] leading-[0.8] pr-2 pt-2 pb-1">T</span>
            he web renders text through a pipeline that was designed thirty years ago for static documents. A browser loads a font, shapes the text into glyphs, measures their combined width, determines where lines break, and positions each line vertically. Every step depends on the previous one. Every step requires the rendering engine to consult its internal layout tree — a structure so expensive to maintain that browsers guard access to it behind synchronous reflow barriers that can freeze the main thread for tens of milliseconds at a time.
          </p>

          <p className="mb-6">
            For a paragraph in a blog post, this pipeline is invisible. The browser loads, lays out, and paints before the reader's eye has traveled from the address bar to the first word. But the web is no longer a collection of static documents. It is a platform for applications, and those applications need to know about text in ways the original pipeline never anticipated.
          </p>

          <div className="my-10 border-l-[3px] border-[#6b5a3d] pl-6 py-2 ml-4">
            <p className="text-xl font-style-italic italic text-[#b8a070] leading-relaxed">
              "The performance improvement is not incremental — it is categorical. 0.05ms versus 30ms. Zero reflows versus five hundred."
            </p>
          </div>

          <p className="mb-6">
            Every one of these operations requires text measurement. And every text measurement on the web today requires a synchronous layout reflow. The cost is devastating. Measuring the height of a single text block forces the browser to recalculate the position of every element on the page. When you measure five hundred text blocks in sequence, you trigger five hundred full layout passes. This pattern, known as layout thrashing, is the single largest source of jank on the modern web.
          </p>

          <p className="mb-6">
            Chrome DevTools will flag it with angry red bars. Lighthouse will dock your performance score. But the developer has no alternative — CSS provides no API for computing text height without rendering it. The information is locked behind the DOM, and the DOM makes you pay for every answer.
          </p>

          <p className="mb-6">
            The CSS Shapes specification, finalized in 2014, was supposed to bring magazine-style text wrap to the web. It allows text to flow around a defined shape — a circle, an ellipse, a polygon, even an image alpha channel. On paper, it was the answer. In practice, it is remarkably limited. CSS Shapes only works with floated elements. Text can only wrap on one side of the shape.
          </p>

          <div className="my-10 border-l-[3px] border-[#6b5a3d] pl-6 py-2 ml-4">
            <p className="text-xl font-style-italic italic text-[#b8a070] leading-relaxed">
              "Text becomes a first-class participant in the visual composition — not a static block, but a fluid material that adapts in real time."
            </p>
          </div>

          <p className="mb-6">
            What if text measurement did not require the DOM at all? What if you could compute exactly where every line of text would break, exactly how wide each line would be, and exactly how tall the entire text block would be, using nothing but arithmetic?
          </p>

          <p className="mb-6">
            The open web deserves typography that matches its ambition. We build applications that rival native software in every dimension except text. Our animations are smooth, our interactions are responsive, our graphics are stunning — but our text sits in rigid boxes, unable to flow around obstacles, unable to adapt to dynamic layouts, unable to participate in the fluid compositions that define modern interface design.
          </p>
        </div>
      </div>
    </div>
  );
}
