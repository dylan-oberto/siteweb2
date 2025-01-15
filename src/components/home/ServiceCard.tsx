import React from 'react';
import { Shield, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard = ({ icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
        <p className="text-gray-600 text-center mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <Shield className="w-4 h-4 text-blue-600 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={link}
          className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;