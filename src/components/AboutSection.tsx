import React from "react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-6">
              About Our Insect Farm
            </h2>
            
            {/* Image visible only on mobile, placed after heading */}
            <div className="md:hidden rounded-lg overflow-hidden shadow-xl mb-6">
              <img 
                src="/lovable-uploads/Puffed_BSFL.webp"
                alt="Black Soldier Fly Larvae" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-lg mb-4">
              We specialize in producing high-quality Black Soldier Fly Larvae (BSFL) 
              as a sustainable protein source for animal feed, helping to reduce the 
              environmental impact of traditional feed production.
            </p>
            <p className="text-lg mb-4">
              Our state-of-the-art vertical farming facility allows us to produce 
              protein-rich larvae year-round with minimal land use and environmental 
              impact compared to conventional feed sources.
            </p>
            <p className="text-lg">
              By converting organic waste into valuable protein, we're closing the loop 
              in the food production system and contributing to a more sustainable future.
            </p>
          </div>
          
          {/* Image visible only on desktop */}
          <div className="hidden md:block rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/Puffed_BSFL.webp"
              alt="Black Soldier Fly Larvae" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
