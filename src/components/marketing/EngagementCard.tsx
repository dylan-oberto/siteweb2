import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EngagementCardProps {
  icon: LucideIcon;
  text: string;
}

const EngagementCard = ({ icon: Icon, text }: EngagementCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-6" />
      <div className="relative bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1">
        <div className="text-blue-600 mb-2 flex justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <p className="text-sm text-center font-medium">{text}</p>
      </div>
    </div>
  );
};

export default EngagementCard;