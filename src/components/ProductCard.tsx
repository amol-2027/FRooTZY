
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  flavor: string;
  description: string;
  imageSrc: string;
  gradient: string;
  benefits: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  flavor,
  description,
  imageSrc,
  gradient,
  benefits
}) => {
  return (
    <div className={`product-card ${gradient} p-6 h-full flex flex-col`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img 
            src={imageSrc} 
            alt={`${flavor} ${name}`} 
            className="h-64 object-contain animate-float"
          />
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-xl font-bold mb-2">{flavor}</h3>
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <p className="mb-4">{description}</p>
          <div className="mb-6">
            <span className="text-sm font-semibold mb-2 block">Benefits:</span>
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/order">
            <Button className="bg-white text-gray-800 hover:bg-gray-100">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
