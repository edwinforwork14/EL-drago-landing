
import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideoHero";
import Hero from "@/components/Hero";
//import ProductGrid from "@/components/ProductGrid";//
import RecipeCTA from "@/components/RecipeCTA";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen />

      <main className="flex-1 overflow-x-hidden">
        <Navbar />
        <div className="-mt-7 md:-mt-9">
          <VideoHero />
        </div>
        <Hero />
        <SocialMedia />
        <RecipeCTA />
        <AboutUs />
        <div className="-mt-[40px] md:-mt-[60px] relative z-10">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
