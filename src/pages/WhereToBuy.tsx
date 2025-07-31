
import React from 'react';
import { MapPin, ShoppingCart, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WhereToBuy = () => {
  const onlineStores = [
    { name: "Blinkit", logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22", url: "#" },
    { name: "Swiggy", logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22", url: "#" },
    { name: "Zepto", logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22", url: "#" },
    { name: "Instamart", logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22", url: "#" },
  ];

  const storeLocations = [
    { name: "Organic Harvest", address: "123 Green St, Mumbai", distance: "0.8 km" },
    { name: "Nature's Basket", address: "456 Wellness Ave, Delhi", distance: "1.2 km" },
    { name: "Health Junction", address: "789 Vitality Rd, Bangalore", distance: "0.5 km" },
    { name: "Fresh & Natural", address: "101 Eco Blvd, Pune", distance: "1.5 km" },
    { name: "Green Market", address: "202 Sustainable St, Hyderabad", distance: "0.7 km" },
    { name: "Wellness World", address: "303 Healthy Way, Chennai", distance: "1.1 km" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-kraft/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Where to Find Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Frootzy Splash is available at your favorite stores and online platforms. Find the nearest location or order online for delivery.
            </p>
          </div>
        </section>

        {/* Online Stores Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-orange/10 mb-4">
                <ShoppingCart className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Order Online</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get Frootzy Splash delivered to your doorstep through these platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onlineStores.map((store, index) => (
                <a 
                  key={index} 
                  href={store.url} 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img 
                      src={store.logo} 
                      alt={store.name} 
                      className="h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/150?text=" + store.name;
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{store.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">Click to order</p>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/order">
                <Button className="bg-kraft hover:bg-kraft/90 text-white">
                  Order Directly from Us <Truck className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Store Locations Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-kraft/5">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-leaf/10 mb-4">
                <MapPin className="h-6 w-6 text-leaf" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Find at a Store Near You</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Frootzy Splash is available at these retail locations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {storeLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-3">{location.address}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{location.distance} away</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Don't see a store near you? Check back soon as we're expanding to more locations!</p>
              <Button variant="outline">
                Contact Us for Distribution
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WhereToBuy;
