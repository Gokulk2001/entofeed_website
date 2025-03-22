
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <BenefitsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
