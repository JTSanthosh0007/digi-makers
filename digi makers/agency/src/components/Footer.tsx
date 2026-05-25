"use client";

import Link from "next/link";
import { ArrowUpRight, Monitor, MessageCircle, Link2, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[100px] bg-[#FFD700] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="text-4xl font-bold tracking-tighter flex items-center gap-2 mb-6">
              <span className="text-white">DIGI</span>
              <span className="text-gradient-yellow">MAKERS</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 text-lg">
              Crafting premium digital experiences for forward-thinking brands. We build the future of the web.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<MessageCircle size={20} />} href="#" />
              <SocialIcon icon={<Link2 size={20} />} href="#" />
              <SocialIcon icon={<Camera size={20} />} href="#" />
              <SocialIcon icon={<Monitor size={20} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#work">Case Studies</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">San Francisco, CA</li>
              <li className="text-gray-400">hello@digimakers.io</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DigiMakers. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#FFD700] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FFD700] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-[#FFD700] transition-colors inline-flex items-center group">
        {children}
        <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  );
}
