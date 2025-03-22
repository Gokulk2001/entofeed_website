
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b8c14063-699d-4483-9744-9ae0a4e9ab85.png" 
              alt="EntoFeed Logo" 
              className={`h-10 transition-opacity duration-700 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={handleLogoLoad}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-primary-dark hover:text-[#4daf4e] transition-colors">About</a>
            <a href="#products" className="text-primary-dark hover:text-[#4daf4e] transition-colors">Products</a>
            <a href="#process" className="text-primary-dark hover:text-[#4daf4e] transition-colors">Process</a>
            <a href="#benefits" className="text-primary-dark hover:text-[#4daf4e] transition-colors">Benefits</a>
            <a href="#blog" className="text-primary-dark hover:text-[#4daf4e] transition-colors">Blog</a>
            <a href="#contact" className="text-primary-dark hover:text-[#4daf4e] transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-dark p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#process" 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#benefits" 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#blog" 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
