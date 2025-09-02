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
      className="hero-background py-6 md:py-20 flex flex-col justify-between md:justify-start min-h-screen bg-cover bg-no-repeat relative"
      style={{
        backgroundPosition: isMobile ? 'calc(50% - 50px) center' : 'center center'
      }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-start h-full pt-20">
        <div className={`max-w-xl md:max-w-2xl`}>
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6`}>
            Sustainable Insect Protein for Animal Feed
          </h1>
          <p className={`text-lg md:text-xl text-gray-700 mb-8 max-w-md md:max-w-lg`}>
            We produce high-quality Black Soldier Fly Larvae as a sustainable protein
            source, reducing environmental impact.
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 px-4">
        <div className="container mx-auto">
          <div className={`flex flex-col md:flex-row items-start md:items-center gap-4`}>
            <a href="#products" className="w-1/3 md:w-auto">
              <Button size="lg" className="text-white w-full text-center">
                Our Products
              </Button>
            </a>
            <a href="#contact" className="w-1/3 md:w-auto">
              <Button size="lg" className="text-white w-full text-center">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
