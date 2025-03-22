import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after initial render
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="py-20 flex items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/black_soldier_fly.png")'
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-xl md:max-w-2xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-700 ${isLoaded ? 'animate-fade-down' : 'opacity-0 -translate-y-4'}`}>
            Sustainable Insect Protein for Animal Feed
          </h1>
          <p className={`text-lg md:text-xl text-black mb-8 max-w-md md:max-w-lg transition-all duration-700 delay-300 ${isLoaded ? 'animate-fade-up' : 'opacity-0 translate-y-4'}`}>
            We produce high-quality Black Soldier Fly Larvae as a sustainable protein 
            source, reducing environmental impact.
          </p>
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <a href="#about">
              <Button size="lg">
                Learn More
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};