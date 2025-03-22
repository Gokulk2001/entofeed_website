import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

// Import product data from ProductsSection
import { products } from "@/components/ProductsSection";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id && !isNaN(Number(id))) {
      const productId = parseInt(id, 10);
      if (productId >= 0 && productId < products.length) {
        setProduct(products[productId]);
        // Scroll to top on page load
        window.scrollTo(0, 0);
      } else {
        navigate("/not-found");
      }
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.title} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Processing purchase",
      description: `Redirecting to checkout for ${quantity} ${product.title}.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  // Properly format the image path
  const getImagePath = (imagePath) => {
    // Remove 'public/' prefix if it exists
    if (imagePath.startsWith("public/")) {
      imagePath = imagePath.substring(7);
    }
    
    // In case the path starts with a slash, remove it
    if (imagePath.startsWith("/")) {
      imagePath = imagePath.substring(1);
    }
    
    // Add a leading slash to ensure it resolves from the root
    return `/${imagePath}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/#products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-4 text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Button>

        {/* Product Title */}
        <h1 className="text-4xl font-bold text-primary-dark mb-8 text-center">
          {product.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product Image with improved path handling */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src={getImagePath(product.image)} 
                alt={product.title} 
                className="rounded-md object-cover w-full h-full"
                onError={(e) => {
                  console.error("Image failed to load:", product.image);
                  e.target.src = "/placeholder-image.png"; // Fallback to a placeholder
                  e.target.onerror = null; // Prevent infinite error loop
                }}
              />
            </AspectRatio>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-gray-700 mb-4">{product.description}</p>
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-1" /> Wishlist
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" /> Share
                </Button>
              </div>
            </div>
            
            <div className="border-t border-b py-4">
              <h3 className="font-semibold text-lg mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="py-4">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-semibold">Quantity:</h3>
                <div className="flex items-center border rounded-md">
                  <button 
                    className="px-3 py-1 text-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x">{quantity}</span>
                  <button 
                    className="px-3 py-1 text-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1"
                  variant="outline"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow} 
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            
            <div className="bg-accent p-4 rounded-md mt-6">
              <h3 className="font-semibold mb-2">Environmental Impact</h3>
              <p className="text-sm text-gray-700">
                Our Black Soldier Fly Larvae products are sustainably sourced and produced, 
                contributing to a 90% reduction in carbon footprint compared to traditional 
                protein sources.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            Product Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Storage Instructions</h3>
              <p className="text-gray-700">
                {product.title.includes("Live") 
                  ? "Keep in a cool, dry place. Use within 14 days of receiving."
                  : product.title.includes("Frozen") 
                  ? "Store at -18°C or below. Do not refreeze after thawing."
                  : "Store in a cool, dry place. Keep package sealed when not in use."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Feeding Guidelines</h3>
              <p className="text-gray-700">
                {product.title.includes("Meal") 
                  ? "Mix with other feed ingredients according to your animal's nutritional requirements."
                  : "Feed according to animal size and dietary needs. Introduce gradually into diet."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
};

export default ProductDetailsPage;