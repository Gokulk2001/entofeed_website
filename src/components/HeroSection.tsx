import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Trigger animations after initial render
    setIsLoaded(true);
    
    // Check if mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section
      id="hero"
      className="relative py-6 md:py-20 flex flex-col justify-center min-h-screen bg-cover bg-no-repeat"
    >
      <img
        src="/lovable-uploads/black_soldier_fly.webp"
        alt="Black Soldier Fly"
        className="absolute bottom-0 right-0 max-w-[240px] md:max-w-md lg:max-w-lg z-0"
      />
      <div className="relative container mx-auto px-4 flex flex-col justify-center h-full z-10">
        <div className={`max-w-xl md:max-w-2xl`}>
          <h1 className={`text-[22px] md:text-5xl font-bold text-gray-800 mt-[10px] mb-[12px]`}>
            Sustainable Insect Protein for Animal Feed
          </h1>
          <p className={`text-[16px] md:text-xl text-gray-700 mb-[40px] max-w-md md:max-w-lg`}>
            We produce high-quality Black Soldier Fly Larvae as a sustainable protein
            source, reducing environmental impact.
          </p>
          <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 mt-[60px]`}>
            <a href="#about" className="w-[80%] my-3 md:w-auto md:my-0">
              <Button size="lg" className="text-white w-full">
                Our Products
              </Button>
            </a>
            <a href="#contact" className="w-[80%] my-3 md:w-auto md:my-0">
              <Button size="lg" className="text-white w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
