import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Updated helper function
const getImagePath = (imagePath) => {
  // Remove 'public/' prefix if it exists
  if (imagePath.startsWith("public/")) {
    imagePath = imagePath.substring(7);
  }
  
  // In case the path starts with a slash, remove it
  if (imagePath.startsWith("/")) {
    imagePath = imagePath.substring(1);
  }
  
  // For Netlify, we need to make sure we're not adding /public in the URL
  return `/${imagePath}`;
};

// Updated product data - removed "public/" from the paths
export const products = [
  {
    title: "Live BSFL",
    description: "Fresh larvae ideal for reptiles, birds, and fish",
    benefits: ["High protein content", "Rich in essential nutrients", "Highly digestible"],
    image: "lovable-uploads/Live_BSFL.webp"
  },
  {
    title: "Whole Dried BSFL",
    description: "Sun-dried larvae suitable for chickens, fishes, and pets",
    benefits: ["Long shelf life", "Easy to store", "Concentrated nutrition"],
    image: "lovable-uploads/Dried_BSFL.webp"
  },
  {
    title: "BSFL Oil",
    description: "Nutrient-rich oil extracted from Black Soldier Fly larvae.",
    benefits: ["Rich nutrition", "Versatile use", "Sustainable source"],
    image: "lovable-uploads/BSFL_Oil.webp"
  },
  {
    title: "Puffed BSFL",
    description: "Crispy larvae snacks for pet birds, reptiles, and fancy fishes",
    benefits: ["Highly palatable", "Lightweight", "Perfect for treats"],
    image: "lovable-uploads/Puffed_BSFL.webp"
  },
  {
    title: "BSFL Pellets",
    description: "Broken dried larvae for chicks and small birds",
    benefits: ["Easy to consume", "No waste", "Ideal for small species"],
    image: "lovable-uploads/BSFL_Pellet.webp"
  },
  {
    title: "BSFL Meal",
    description: "Defatted larvae powder as a protein-rich feed ingredient",
    benefits: ["Consistent quality", "Easily mixed", "High protein concentration"],
    image: "lovable-uploads/BSFL_Meal.webp"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const imagePath = getImagePath(product.image);
            
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
                        
                        // Better fallback logic
                        if (window.location.hostname === 'localhost') {
                          // Try with base URL if running locally
                          const baseUrl = window.location.origin;
                          console.log("Trying with base URL:", `${baseUrl}${imagePath}`);
                          e.target.src = `${baseUrl}${imagePath}`;
                          
                          // If that fails, try public path
                          e.target.onerror = () => {
                            console.log("Trying public path:", `/public/${product.image}`);
                            e.target.src = `/public/${product.image}`;
                            
                            // Finally, use placeholder if all else fails
                            e.target.onerror = () => {
                              console.log("Using placeholder image");
                              e.target.src = "/placeholder-image.png";
                              e.target.onerror = null;
                            };
                          };
                        } else {
                          // On Netlify, first try without the lovable-uploads folder
                          const filename = product.image.split('/').pop();
                          console.log("Trying with just filename:", `/${filename}`);
                          e.target.src = `/${filename}`;
                          
                          // If that fails, use placeholder
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
