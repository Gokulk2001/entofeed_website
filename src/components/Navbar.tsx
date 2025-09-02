import { useState, useEffect, useRef } from 'react';
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = ({ onLogoHeightChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const logoRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (logoRef.current) {
      onLogoHeightChange(logoRef.current.offsetHeight);
    }
  }, [logoLoaded, onLogoHeightChange]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add effect to handle navigation when coming from another page with hash
  useEffect(() => {
    // Check if we have a hash in the URL
    if (location.hash && location.pathname === '/') {
      // Remove the # character
      const sectionId = location.hash.substring(1);
      
      // Give the DOM time to render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Navigate to homepage section or handle in-page navigation
  const navigateToSection = (sectionId) => {
    setMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // On homepage, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage with section hash
      navigate(`/${sectionId !== 'home' ? '#' + sectionId : ''}`);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              ref={logoRef}
              src="/lovable-uploads/b8c14063-699d-4483-9744-9ae0a4e9ab85.png" 
              alt="EntoFeed Logo" 
              className={`h-10 transition-opacity duration-700 ${
                logoLoaded ? 'opacity-100' : 'opacity-0'
              } cursor-pointer`}
              onLoad={handleLogoLoad}
              onClick={handleLogoClick}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToSection('about')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => navigateToSection('products')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => navigateToSection('process')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => navigateToSection('benefits')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => navigateToSection('blog')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => navigateToSection('contact')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors"
            >
              Contact
            </button>
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
            <button 
              onClick={() => navigateToSection('about')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2 text-left"
            >
              About
            </button>
            <button 
              onClick={() => navigateToSection('products')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2 text-left"
            >
              Products
            </button>
            <button 
              onClick={() => navigateToSection('process')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2 text-left"
            >
              Process
            </button>
            <button 
              onClick={() => navigateToSection('benefits')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2 text-left"
            >
              Benefits
            </button>
            <button 
              onClick={() => navigateToSection('blog')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2 text-left"
            >
              Blog
            </button>
            <button 
              onClick={() => navigateToSection('contact')} 
              className="text-primary-dark hover:text-[#4daf4e] transition-colors py-2 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
