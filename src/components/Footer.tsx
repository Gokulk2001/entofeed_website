import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              {/* Logo only, removed the EntoFeed text */}
              <img 
                src="/lovable-uploads/f18092f9-b25d-4e19-b697-f64a22b5e181.png" 
                alt="EntoFeed Logo" 
                className="h-8 w-auto"
                width={32}
                height={32}
              />
            </div>
            <p className="text-white/70">
              Transforming waste into sustainable protein solutions for a better future.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#products" className="text-white/70 hover:text-white transition-colors">Products</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="/product/0" className="text-white/70 hover:text-white transition-colors">Live BSFL</a></li>
              <li><a href="/product/1" className="text-white/70 hover:text-white transition-colors">Dried BSFL</a></li>
              <li><a href="/product/5" className="text-white/70 hover:text-white transition-colors">BSFL Meal</a></li>
              <li><a href="/product/2" className="text-white/70 hover:text-white transition-colors">BSFL Oil</a></li>
              <li><a href="/product/3" className="text-white/70 hover:text-white transition-colors">Puffed BSFL</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} EntoFeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
