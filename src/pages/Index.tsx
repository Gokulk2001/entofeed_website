
import { useState } from 'react';
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
import AnimatedComponent from "@/components/ui/AnimatedComponent";

const Index = () => {
  const [logoHeight, setLogoHeight] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar onLogoHeightChange={setLogoHeight} />
      <AnimatedComponent animation="fade-in">
        <HeroSection logoHeight={logoHeight} />
      </AnimatedComponent>
      <AnimatedComponent animation="slide-in-up" delay={100}>
        <AboutSection />
      </AnimatedComponent>
      <AnimatedComponent animation="fade-in" delay={200}>
        <ProductsSection />
      </AnimatedComponent>
      <AnimatedComponent animation="slide-in-up" delay={100}>
        <ProcessSection />
      </AnimatedComponent>
      <AnimatedComponent animation="fade-in" delay={200}>
        <BenefitsSection />
      </AnimatedComponent>
      <AnimatedComponent animation="slide-in-up" delay={100}>
        <BlogSection />
      </AnimatedComponent>
      <AnimatedComponent animation="fade-in" delay={200}>
        <ContactSection />
      </AnimatedComponent>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
