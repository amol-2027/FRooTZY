
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kraft/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-kraft mb-4">VIVRA</h3>
            <p className="text-gray-600 mb-4">
              Refreshing, natural fruit beverages with no artificial additives. Just pure goodness in every sip.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-kraft">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-kraft">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-kraft">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-kraft">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-kraft">Products</Link></li>
              <li><Link to="/reviews" className="text-gray-600 hover:text-kraft">Reviews</Link></li>
              <li><Link to="/where-to-buy" className="text-gray-600 hover:text-kraft">Where to Buy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-kraft">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kraft">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kraft">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kraft">Return Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Our Promise</h4>
            <div className="flex items-start mb-3">
              <Leaf className="text-leaf mr-2 mt-1 flex-shrink-0" size={18} />
              <p className="text-gray-600">100% Natural Ingredients</p>
            </div>
            <div className="flex items-start mb-3">
              <Leaf className="text-leaf mr-2 mt-1 flex-shrink-0" size={18} />
              <p className="text-gray-600">No Artificial Sweeteners</p>
            </div>
            <div className="flex items-start mb-3">
              <Leaf className="text-leaf mr-2 mt-1 flex-shrink-0" size={18} />
              <p className="text-gray-600">Eco-Friendly Packaging</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vivra. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-500 hover:text-kraft mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-kraft mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
