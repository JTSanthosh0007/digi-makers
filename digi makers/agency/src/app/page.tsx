import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-[#FFD700] selection:text-black">
      <Hero />
      <TrustedBrands />
      <About />
      <Services />
      <CaseStudies />
      <Stats />
      <Process />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  );
}
