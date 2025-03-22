import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Debug helper to log different path formats
const debugImagePath = (originalPath) => {
  console.log("Original image path:", originalPath);
  
  // Try different path formats
  const withoutPublic = originalPath.replace("public/", "");
  console.log("Without public/:", withoutPublic);
  
  const withLeadingSlash = `/${withoutPublic}`;
  console.log("With leading slash:", withLeadingSlash);
  
  const relativeFormat = `./${withoutPublic}`;
  console.log("Relative format:", relativeFormat);
  
  // Return a few different formats to try
  return {
    originalPath,
    withoutPublic,
    withLeadingSlash,
    relativeFormat
  };
};

export const products = [
  {
    title: "Live BSFL",
    description: "Fresh larvae ideal for reptiles, birds, and fish",
    benefits: ["High protein content", "Rich in essential nutrients", "Highly digestible"],
    image: "public/lovable-uploads/Live_BSFL.webp"
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

const ProductsSection = () => {
  useEffect(() => {
    // Log all image paths on component mount to help debug
    products.forEach((product, index) => {
      console.log(`Product ${index} (${product.title}) image paths:`, debugImagePath(product.image));
    });
  }, []);

  // This version tries a different approach using URL constructor
  const getImagePath = (imagePath) => {
    try {
      // First check if it's a full URL
      new URL(imagePath);
      return imagePath; // If it's a valid URL, return as is
    } catch (e) {
      // Not a full URL, so process as a path
      
      // Remove 'public/' prefix if it exists
      let processedPath = imagePath;
      if (processedPath.startsWith("public/")) {
        processedPath = processedPath.substring(7);
      }
      
      // In case the path starts with a slash, remove it
      if (processedPath.startsWith("/")) {
        processedPath = processedPath.substring(1);
      }
      
      // Add a leading slash to ensure it resolves from the root
      return `/${processedPath}`;
    }
  };

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
                      onLoad={() => console.log(`✅ Image loaded successfully: ${product.title}`, imagePath)}
                      onError={(e) => {
                        console.error(`❌ Image failed to load: ${product.title}`, imagePath);
                        // Try alternative path formats if the main one fails
                        const paths = debugImagePath(product.image);
                        e.target.src = paths.withLeadingSlash; // Try with leading slash
                        
                        // If that fails too, set a placeholder
                        e.target.onerror = () => {
                          console.log("Trying relative format...");
                          e.target.src = paths.relativeFormat;
                          
                          // If all attempts fail, use placeholder
                          e.target.onerror = () => {
                            console.log("All path formats failed, using placeholder");
                            e.target.src = "/placeholder-image.png";
                            e.target.onerror = null; // Prevent infinite error loop
                          };
                        };
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
