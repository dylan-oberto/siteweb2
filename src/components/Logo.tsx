import React from 'react';
import { Droplets, Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="relative">
          <Droplets className="w-10 h-10 text-blue-600" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-green-400" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 text-transparent bg-clip-text">
            OC'Clean
          </span>
        </div>
        <span className="text-xs font-medium text-gray-500 tracking-wider">
          PROPRETÉ & EXCELLENCE
        </span>
      </div>
    </div>
  );
};

export default Logo;