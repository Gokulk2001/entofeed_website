
import React from "react";
import { Leaf, Egg, Sprout, Settings, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    title: "Organic Waste Collection",
    description: "We source pre-consumer food waste from local producers to feed our larvae.",
    icon: <Leaf size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Larvae Production",
    description: "Our BSF colony produces eggs that hatch into larvae in controlled conditions.",
    icon: <Egg size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Feeding & Growth",
    description: "Larvae consume organic waste, converting it into valuable protein and fat.",
    icon: <Sprout size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Harvesting & Processing",
    description: "When ready, larvae are harvested and processed into various product forms.",
    icon: <Settings size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Quality Control",
    description: "Rigorous testing ensures our products meet the highest quality standards.",
    icon: <CheckCircle size={36} strokeWidth={2} color="#F2FCE2" />
  },
  {
    title: "Distribution",
    description: "Products are packaged and distributed to animal feed producers and farmers.",
    icon: <Truck size={36} strokeWidth={2} color="#F2FCE2" />
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Our Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4 bg-primary rounded-full w-16 h-16 mx-auto items-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              <div className="mt-4 text-sm font-medium text-primary text-center">
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
