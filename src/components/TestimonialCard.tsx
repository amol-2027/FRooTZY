
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  flavor: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  avatar, 
  rating, 
  text, 
  date,
  flavor
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
          <img 
            src={avatar} 
            alt={name} 
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1500673922987-e212871fec22"; // Default image if avatar fails to load
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? 'text-orange fill-orange' : 'text-gray-300'} 
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {flavor && <span className="bg-gray-100 rounded px-2 py-0.5 ml-1">{flavor}</span>}
        </span>
      </div>
      
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default TestimonialCard;
