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
      <ProductShowcase />
      <Features />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
