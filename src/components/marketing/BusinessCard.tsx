import React from 'react';
import { Phone, Mail, MapPin, Globe, Droplets } from 'lucide-react';
import Logo from '../Logo';
import { contactInfo } from '../../utils/contactInfo';

const BusinessCard = () => {
  return (
    <div className="w-[85.6mm] h-[54mm] bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <Droplets className="w-full h-full text-blue-600" />
      </div>

      {/* Logo */}
      <div className="mb-4">
        <Logo />
      </div>

      {/* Contact Info */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-blue-600" />
          <span className="text-sm">{contactInfo.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-blue-600" />
          <span className="text-sm">{contactInfo.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-blue-600" />
          <span className="text-sm">www.occlean.fr</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="text-sm">{contactInfo.address}</span>
        </div>
      </div>

      {/* Services */}
      <div className="absolute bottom-4 right-4 text-right">
        <p className="text-xs text-gray-500">
          • Nettoyage Auto
          • Nettoyage Vitres
          • Entretien Bureaux
          • Entretien Immeubles
        </p>
      </div>
    </div>
  );
};

export default BusinessCard;