import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Original product data - don't modify this
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

// More robust image path resolver function
export const getCorrectImagePath = (originalPath) => {
  if (typeof window === 'undefined') return originalPath; // SSR fallback
  
  // Extract just the filename
  const filename = originalPath.split('/').pop();
  
  // Try different path patterns based on environment
  // Start with an array of possible path patterns to try
  const possiblePaths = [
    `/lovable-uploads/${filename}`,               // Direct in root
    `/dist/lovable-uploads/${filename}`,          // In dist folder
    `/public/lovable-uploads/${filename}`,        // In public folder
    `/${originalPath.replace('public/', '')}`,    // Original without public
    `/${filename}`                                // Just the filename
  ];
  
  // For development environment, prioritize the local path
  if (!window.location.hostname.includes('netlify.app')) {
    return `/${originalPath.replace('public/', '')}`;
  }
  
  // For production/Netlify environment
  console.log(`Trying to resolve image path for ${filename}`);
  return `/public/lovable-uploads/${filename}`; // Changed from dist to public as suggested
};

const ProductsSection = () => {
  const [imageLoadAttempts, setImageLoadAttempts] = useState({});
  
  // Preload images to test which paths work
  useEffect(() => {
    const preloadImages = async () => {
      // Nothing to implement here, let the img tags handle loading
      console.log('Component mounted, images will load with robust fallback handling');
    };
    
    preloadImages();
  }, []);

  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            // Get the corrected image path
            const imagePath = getCorrectImagePath(product.image);
            
            return (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="relative w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                    <img 
                      src={imagePath}
                      alt={product.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Get current attempt count
                        const attempts = imageLoadAttempts[product.title] || 0;
                        
                        // Log detailed error info for debugging
                        console.error(`Image failed to load (attempt ${attempts + 1}): ${product.title}`, {
                          originalPath: product.image,
                          triedPath: imagePath
                        });
                        
                        if (attempts === 0) {
                          // First failure - try without '/public' prefix
                          const newPath = `/lovable-uploads/${product.image.split('/').pop()}`;
                          console.log(`Retrying with path: ${newPath}`);
                          e.target.src = newPath;
                          
                          // Update attempt counter
                          setImageLoadAttempts(prev => ({
                            ...prev,
                            [product.title]: 1
                          }));
                        } else if (attempts === 1) {
                          // Second failure - try with '/dist' prefix
                          const newPath = `/dist/lovable-uploads/${product.image.split('/').pop()}`;
                          console.log(`Retrying with path: ${newPath}`);
                          e.target.src = newPath;
                          
                          // Update attempt counter
                          setImageLoadAttempts(prev => ({
                            ...prev,
                            [product.title]: 2
                          }));
                        } else {
                          // All attempts failed, use placeholder
                          console.log(`All attempts failed, using placeholder for: ${product.title}`);
                          e.target.src = "/placeholder-image.png";
                          e.target.onerror = null; // Prevent infinite loop
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
