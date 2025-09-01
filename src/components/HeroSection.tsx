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
      className="hero-background py-6 md:py-20 flex flex-col justify-between md:justify-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundPosition: isMobile ? 'calc(50% - 50px) center' : 'center center'
      }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-between h-full md:block">
        <div className={`max-w-xl md:max-w-2xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} flex flex-col justify-between h-full md:h-auto`}>
          {/* Heading at the top with increased padding for mobile */}
          <div className="pt-16 md:pt-0">
            <h1 className={`text-4xl md:text-5xl font-bold text-black mb-6 md:mb-6 transition-all duration-700 ${isLoaded ? 'animate-fade-down' : 'opacity-0 -translate-y-4'}`}>
              Sustainable Insect Protein for Animal Feed
            </h1>
          </div>
          
          {/* Secondary content and buttons at the bottom with more padding */}
          <div className="mb-16 md:mb-0 md:mt-0">
            <p className={`text-lg md:text-xl text-black mb-8 max-w-md md:max-w-lg transition-all duration-700 delay-300 ${isLoaded ? 'animate-fade-up' : 'opacity-0 translate-y-4'}`}>
              We produce high-quality Black Soldier Fly Larvae as a sustainable protein 
              source, reducing environmental impact.
            </p>
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 mt-40 md:mt-0 transition-all duration-700 delay-500 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <a href="#about">
                <Button size="lg" className="text-white">
                  Our Products
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" className="text-white">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
