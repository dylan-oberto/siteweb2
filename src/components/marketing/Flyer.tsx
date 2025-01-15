import React from 'react';
import { Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../Logo';

const serviceImages = {
  auto: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  vitres: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  bureaux: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  immeubles: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
};

const services = [
  {
    title: "Nettoyage Auto",
    image: serviceImages.auto,
    features: ["Intérieur & Extérieur", "Protection céramique", "Traitement cuir"]
  },
  {
    title: "Nettoyage Vitres",
    image: serviceImages.vitres,
    features: ["Particuliers & Professionnels", "Grandes hauteurs", "Anti-traces"]
  },
  {
    title: "Entretien Bureaux",
    image: serviceImages.bureaux,
    features: ["Nettoyage quotidien", "Désinfection", "Espaces communs"]
  },
  {
    title: "Entretien Immeubles",
    image: serviceImages.immeubles,
    features: ["Parties communes", "Sortie poubelles", "Vitrerie"]
  }
];

const Flyer = () => {
  return (
    <div className="w-full bg-white p-8 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Solutions Professionnelles de Nettoyage
        </h1>
        <p className="text-xl text-gray-600">
          Votre partenaire propreté de confiance
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="bg-blue-600 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center space-x-2">
            <Phone className="w-6 h-6" />
            <span>04 67 XX XX XX</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-6 h-6" />
            <span>contact@occlean.fr</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-6 h-6" />
            <span>France</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flyer;