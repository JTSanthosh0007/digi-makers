"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD700] opacity-10 blur-[200px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-[#FFD700] uppercase tracking-widest font-bold mb-4">Start a Project</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Let's build something <br/>
              <span className="text-gradient-yellow">extraordinary.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 font-light">
              Ready to take your digital presence to the next level? Reach out to us and let's discuss how we can help your brand succeed.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#FFD700]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="font-medium text-lg">hello@digimakers.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#FFD700]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Call Us</p>
                  <p className="font-medium text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#FFD700]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Visit Us</p>
                  <p className="font-medium text-lg">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-3xl relative"
          >
            {/* Form Highlight line */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent"></div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    placeholder=" " 
                    className="block w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 peer transition-all"
                  />
                  <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FFD700] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder=" " 
                    className="block w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 peer transition-all"
                  />
                  <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FFD700] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>
              </div>
              
              <div className="relative group">
                <input 
                  type="text" 
                  id="subject" 
                  placeholder=" " 
                  className="block w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 peer transition-all"
                />
                <label htmlFor="subject" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FFD700] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                  Project Type / Subject
                </label>
              </div>
              
              <div className="relative group">
                <textarea 
                  id="message" 
                  placeholder=" " 
                  rows={5}
                  className="block w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 peer transition-all resize-none"
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FFD700] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                  Tell us about your project
                </label>
              </div>
              
              <button
                type="button"
                className="w-full group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-[#FFD700] font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                <span className="mr-2 text-lg font-semibold">Send Message</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
