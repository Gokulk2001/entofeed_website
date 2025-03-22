
import React from "react";
import { Leaf, Droplet, Recycle, Apple, Globe, Home } from "lucide-react";

const benefits = [
  {
    title: "Eco-Friendly",
    description: "Reduces land use by 99% compared to soy protein production",
    icon: <Leaf size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Water Efficient",
    description: "Uses 98% less water than conventional protein sources",
    icon: <Droplet size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Waste Reduction",
    description: "Diverts organic waste from landfills, reducing methane emissions",
    icon: <Recycle size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Nutrient-Rich",
    description: "Contains high-quality protein, fats, and micronutrients",
    icon: <Apple size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Low Carbon Footprint",
    description: "Produces 95% less greenhouse gases than conventional feed production",
    icon: <Globe size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Locally Produced",
    description: "Reducing transportation emissions and supporting local economy",
    icon: <Home size={36} strokeWidth={2} color="#F2FCE2" />
  }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Benefits of Insect Protein
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4 bg-primary rounded-full w-16 h-16 mx-auto items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
