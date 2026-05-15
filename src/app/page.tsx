
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import RecipeSection from "@/components/RecipeSection";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen />

      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <ProductGrid />
        <RecipeSection />
        <AboutUs />
        <WhyChooseUs />
        <Contact />
        <SocialMedia />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
