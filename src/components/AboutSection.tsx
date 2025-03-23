import React from "react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-primary-dark mb-6">
              About Our Insect Farm
            </h2>
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
          <div className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <img 
              src="/lovable-uploads/a3f92e64-fa3d-425b-af18-889aa2d3e096.png" 
              alt="Black Soldier Fly Larvae" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
