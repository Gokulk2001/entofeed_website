import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              {/* Logo only */}
              <img 
                src="/lovable-uploads/f18092f9-b25d-4e19-b697-f64a22b5e181.png" 
                alt="Entofeed Logo"
                className="h-8 w-auto"
                width={32}
                height={32}
              />
            </div>
            <p className="text-white/70 leading-relaxed">
              Transforming waste into<br />
              sustainable protein solutions<br />
              for a better future.
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
              <li><a href="/product/2" className="text-white/70 hover:text-white transition-colors">BSFL Oil</a></li>
              <li><a href="/product/3" className="text-white/70 hover:text-white transition-colors">Puffed BSFL</a></li>
              <li><a href="/product/4" className="text-white/70 hover:text-white transition-colors">BSFL Pellets</a></li>
              <li><a href="/product/5" className="text-white/70 hover:text-white transition-colors">BSFL Meal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-white/70" />
                <span className="text-white/70 hover:text-white transition-colors">
                  +91 9487626337
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-white/70" />
                <a href="mailto:entofeedindia@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  entofeedindia@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-white/70" />
                <span className="text-white/70">
                  Coimbatore, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Entofeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
