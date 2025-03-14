import React from 'react';
import { Phone, Globe, Droplets } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';

const BusinessCard = () => {
  return (
    <div className="w-[85.6mm] h-[54mm] bg-blue-600 rounded-lg shadow-xl p-5 relative overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Section supérieure */}
        <div className="flex justify-between relative">
          {/* Logo et nom à gauche */}
          <div className="flex flex-col items-start">
            <Droplets className="w-8 h-8 text-white mb-1" />
            <h1 className="text-lg font-bold text-white">
              OC'Clean
            </h1>
            <p className="text-[10px] font-medium text-blue-100">
              PROPRETÉ & EXCELLENCE
            </p>
          </div>

          {/* Ligne séparatrice verticale */}
          <div className="absolute left-[45%] top-0 h-full border-l-2 border-blue-300" />

          {/* Contact à droite */}
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end space-x-1.5 text-white">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="text-xs">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center justify-end space-x-1.5 text-white">
              <Globe className="w-3.5 h-3.5 text-white" />
              <span className="text-xs">oc-clean.onrender.com</span>
            </div>
            <div className="text-xs text-white">
              Montpellier et environs
            </div>
          </div>
        </div>

        {/* Ligne séparatrice horizontale */}
        <div className="my-3 border-t-2 border-blue-300" />

        {/* Services en bas */}
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs text-white">
            <div className="flex items-center">• Nettoyage Auto</div>
            <div className="flex items-center">• Nettoyage Vitres</div>
            <div className="flex items-center">• Locaux Commerciaux</div>
            <div className="flex items-center">• Nettoyage Textile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;