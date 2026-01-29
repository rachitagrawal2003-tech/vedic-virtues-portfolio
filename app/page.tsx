import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <div className="flex flex-col gap-10 md:gap-24 pb-10 md:pb-24">
        <ProductShowcase />
        <Features />
        <AboutUs />
        <Testimonials />
      </div>
    </main>
  );
}
