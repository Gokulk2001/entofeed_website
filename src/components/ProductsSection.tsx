import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Updated product data
export const products = [
  {
    title: "Live BSFL",
    description: "Fresh larvae ideal for reptiles, birds, and fish",
    benefits: ["High protein content", "Rich in essential nutrients", "Highly digestible"],
    image: "public/lovable-uploads/Live_BSFL.webp" // Original path kept for reference
  },
  {
    title: "Whole Dried BSFL",
    description: "Sun-dried larvae suitable for chickens, fishes, and pets",
    benefits: ["Long shelf life", "Easy to store", "Concentrated nutrition"],
    image: "public/lovable-uploads/Dried_BSFL.webp"
  },
  {
    title: "BSFL Oil",
    description: "Nutrient-rich oil extracted from Black Soldier Fly larvae.",
    benefits: ["Rich nutrition", "Versatile use", "Sustainable source"],
    image: "public/lovable-uploads/BSFL_Oil.webp"
  },
  {
    title: "Puffed BSFL",
    description: "Crispy larvae snacks for pet birds, reptiles, and fancy fishes",
    benefits: ["Highly palatable", "Lightweight", "Perfect for treats"],
    image: "public/lovable-uploads/Puffed_BSFL.webp"
  },
  {
    title: "BSFL Pellets",
    description: "Broken dried larvae for chicks and small birds",
    benefits: ["Easy to consume", "No waste", "Ideal for small species"],
    image: "public/lovable-uploads/BSFL_Pellet.webp"
  },
  {
    title: "BSFL Meal",
    description: "Defatted larvae powder as a protein-rich feed ingredient",
    benefits: ["Consistent quality", "Easily mixed", "High protein concentration"],
    image: "public/lovable-uploads/BSFL_Meal.webp"
  }
];

// Helper function to get correct path for Netlify
const getNetlifyImagePath = (imagePath) => {
  // Extract the filename part
  const filename = imagePath.split('/').pop();
  // Use the correct Netlify dist path
  return `/dist/lovable-uploads/${filename}`;
};

const ProductsSection = () => {
  // Detect if we're running on Netlify
  const isNetlify = () => {
    return window.location.hostname.includes('netlify.app');
  };
  
  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            // Determine image path based on environment
            let imagePath;
            if (isNetlify()) {
              // Use the Netlify-specific path with dist folder
              imagePath = getNetlifyImagePath(product.image);
            } else {
              // For local development
              imagePath = product.image.replace('public/', '/');
            }
            
            return (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="relative w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                    <img 
                      src={imagePath}
                      alt={product.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Image failed to load: ${product.title}`, {
                          originalPath: product.image,
                          processedPath: imagePath
                        });
                        
                        // Try multiple fallbacks
                        if (isNetlify()) {
                          // Try alternative Netlify paths
                          const filename = product.image.split('/').pop();
                          
                          // Try 1: Just the filename in dist folder
                          console.log("Trying with dist/filename:", `/dist/${filename}`);
                          e.target.src = `/dist/${filename}`;
                          
                          e.target.onerror = () => {
                            // Try 2: Without the dist folder
                            console.log("Trying without dist folder:", `/lovable-uploads/${filename}`);
                            e.target.src = `/lovable-uploads/${filename}`;
                            
                            e.target.onerror = () => {
                              // Try 3: Just the filename at root
                              console.log("Trying with just filename at root:", `/${filename}`);
                              e.target.src = `/${filename}`;
                              
                              e.target.onerror = () => {
                                console.log("Using placeholder image");
                                e.target.src = "/placeholder-image.png";
                                e.target.onerror = null;
                              };
                            };
                          };
                        } else {
                          // Local development fallbacks
                          const localPath = product.image.replace('public/', '/');
                          console.log("Trying local path:", localPath);
                          e.target.src = localPath;
                          
                          e.target.onerror = () => {
                            console.log("Using placeholder image");
                            e.target.src = "/placeholder-image.png";
                            e.target.onerror = null;
                          };
                        }
                      }}
                    />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-600">{benefit}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={`/product/${index}`} className="w-full">
                    <Button 
                      className="w-full bg-[#4daf4e] hover:bg-[#3d8c3e] text-white"
                    >
                      Buy Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
