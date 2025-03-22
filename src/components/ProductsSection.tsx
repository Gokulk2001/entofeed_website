import React, { useEffect } from "react";
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

// Create a global image URL fix - this needs to be imported early in your app
export const setupImageFix = () => {
  if (typeof window === 'undefined') return; // Skip during SSR

  // Save the original Image constructor
  const OriginalImage = window.Image;

  // Create a proxy for the Image constructor
  window.Image = function() {
    // Create a normal image object
    const img = new OriginalImage(...arguments);
    
    // Override the src setter
    const originalSrcSetter = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src').set;
    
    Object.defineProperty(img, 'src', {
      set: function(url) {
        // Fix the URL if it contains problematic paths
        let newUrl = url;
        
        // Check if it's a Netlify deployment
        const isNetlify = window.location.hostname.includes('netlify.app');
        
        if (isNetlify && url) {
          // Handle images with public/lovable-uploads path
          if (url.includes('/public/lovable-uploads/')) {
            // Extract filename
            const filename = url.split('/').pop();
            // Use dist path
            newUrl = `/dist/lovable-uploads/${filename}`;
            console.log(`Image URL fixed from ${url} to ${newUrl}`);
          }
        }
        
        // Call the original setter with our potentially fixed URL
        originalSrcSetter.call(this, newUrl);
      },
      get: Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src').get
    });
    
    return img;
  };
  
  // Copy properties from original Image constructor
  for (const prop in OriginalImage) {
    if (OriginalImage.hasOwnProperty(prop)) {
      window.Image[prop] = OriginalImage[prop];
    }
  }
  
  window.Image.prototype = OriginalImage.prototype;
  
  console.log('Global image path fix installed');
};

const ProductsSection = () => {
  useEffect(() => {
    // Apply the global image fix
    setupImageFix();
  }, []);

  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            // Extract just the filename
            const filename = product.image.split('/').pop();
            // Use the correct path for the current environment
            const imagePath = window.location.hostname.includes('netlify.app') 
              ? `/dist/lovable-uploads/${filename}`
              : `/${product.image.replace('public/', '')}`;
            
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
                        
                        // Fallback to placeholder if image doesn't load
                        e.target.src = "/placeholder-image.png";
                        e.target.onerror = null;
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
