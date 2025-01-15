import React from 'react';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  features: string[];
  image: string;
}

const ServiceCard = ({ title, features, image }: ServiceCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative p-4 text-white">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm">
              <Star className="w-3 h-3 text-yellow-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 transition-colors duration-300 rounded-lg" />
    </div>
  );
};

export default ServiceCard;