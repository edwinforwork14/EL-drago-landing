
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <ProductGrid />
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
