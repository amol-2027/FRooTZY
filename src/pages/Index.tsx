import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const products = [
    {
      name: "Frootzy Splash",
      flavor: "Fresh Watermelon",
      description: "Light, subtly sweet, and incredibly hydrating – the taste of summer in a bottle.",
      imageSrc: "/lovable-uploads/21533967-3e57-4c29-954f-974861d0e379.png",
      gradient: "watermelon-gradient",
      benefits: ["Hydrating", "Rich in antioxidants", "Natural electrolytes"]
    },
    {
      name: "Frootzy Splash",
      flavor: "Summer Orange",
      description: "Bright, zesty, and packed with Vitamin C for a revitalizing lift.",
      imageSrc: "/lovable-uploads/41fbb537-90b2-496f-9702-1bf11038fd9a.png",
      gradient: "orange-gradient",
      benefits: ["Vitamin C boost", "Immunity support", "Natural energy"]
    },
    {
      name: "Frootzy Splash",
      flavor: "Tangy Lemon",
      description: "A crisp, citrusy awakening – the perfect balance of sweet and tart.",
      imageSrc: "/lovable-uploads/2f57bb65-ea40-47a5-8bea-69b8faf2e8cd.png",
      gradient: "lemon-gradient",
      benefits: ["Detoxifying", "Refreshing", "Vitamin packed"]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <span className="eco-badge mb-4 inline-block">100% Natural</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="block text-gray-800">Nature's Best</span>
                  <span className="block text-kraft">In Every Bottle</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-lg">
                  Introducing Frootzy Splash – your guilt-free gateway to summer refreshment. 100% natural, cold-pressed, and sweetened only with real fruit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button size="lg">
                      Explore Flavors <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/order">
                    <Button size="lg" variant="outline">
                      Order Now
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-wrap mt-8">
                  <div className="flex items-center mr-6 mb-4">
                    <CheckCircle className="h-5 w-5 text-leaf mr-2" />
                    <span className="text-gray-700">No Added Sugar</span>
                  </div>
                  <div className="flex items-center mr-6 mb-4">
                    <CheckCircle className="h-5 w-5 text-leaf mr-2" />
                    <span className="text-gray-700">100% Natural</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-leaf mr-2" />
                    <span className="text-gray-700">Eco-Friendly</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-lg animate-splash">
                  <img 
                    src="/lovable-uploads/ce025556-eba6-4627-9196-d8483139b0fe.png"
                    alt="Frootzy Splash All Flavors" 
                    className="mx-auto z-10 relative h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Refreshing Flavors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our range of cold-pressed fruit beverages that deliver exceptional taste without compromising your health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-kraft/5">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="eco-badge mb-4 inline-block">Why Choose Us</span>
              <h2 className="text-3xl font-bold mb-4">The Frootzy Difference</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Unlike other fruit juices loaded with artificial flavors and excessive sugar, we believe in keeping things natural and healthy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-leaf" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Natural</h3>
                <p className="text-gray-600">
                  Made with real fruits and no artificial additives. Just pure goodness in every sip.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-watermelon/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-watermelon" />
                </div>
                <h3 className="text-xl font-bold mb-2">Health Conscious</h3>
                <p className="text-gray-600">
                  Low in calories, naturally sweetened, and packed with essential vitamins and minerals.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Committed to sustainability with eco-friendly, compostable, and BPA-free packaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <img 
                  src="/lovable-uploads/ef32383f-42db-424e-b8c2-0a997b5f7a2a.png" 
                  alt="Vivra Sustainability" 
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-16">
                <span className="eco-badge mb-4 inline-block">Sustainability</span>
                <h2 className="text-3xl font-bold mb-4">Our Commitment to the Planet</h2>
                <p className="text-gray-600 mb-6">
                  Sustainability is at our core. Vivra is dedicated to minimizing our environmental footprint through recycled and recyclable packaging.
                </p>
                <div className="bg-leaf/5 border border-leaf/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-2">Vivra Recycling Program</h3>
                  <p className="text-gray-700">
                    Return 5 empty bottles and get 1 filled juice bottle in exchange! Help us save plastic waste.
                  </p>
                  <div className="mt-4 text-sm font-medium text-leaf">
                    1000 bottles = 25 kg plastic saved
                  </div>
                </div>
                <Link to="/order">
                  <Button>
                    Join Our Green Initiative <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-kraft/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a Frootzy Experience?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Try our delicious range of natural fruit beverages and refresh your day the healthy way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/order">
                <Button size="lg">
                  Order Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/where-to-buy">
                <Button size="lg" variant="outline">
                  Find in Stores
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
