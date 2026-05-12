
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import Recipes from "@/components/Recipes";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <Features />
        <ProductGrid />
        <Recipes />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
}
