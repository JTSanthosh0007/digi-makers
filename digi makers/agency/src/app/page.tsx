import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-[#ff2731] selection:text-white">
      <Hero />
      <TrustedBrands />
      <About />
      <Services />
      <Stats />
    </main>
  );
}

