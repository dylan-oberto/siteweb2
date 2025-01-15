import React from 'react';
import { Phone, Mail, MapPin, Shield, Star, Clock, Award } from 'lucide-react';
import Logo from '../Logo';
import ServiceCard from './ServiceCard';
import EngagementCard from './EngagementCard';
import { contactInfo } from '../../utils/contactInfo';

const PrintableFlyer = () => {
  const services = [
    {
      title: "Nettoyage Auto",
      image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Intérieur & Extérieur", "Protection céramique", "Traitement cuir"]
    },
    {
      title: "Nettoyage Vitres",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Particuliers & Pro", "Grandes hauteurs", "Anti-traces"]
    },
    {
      title: "Entretien Bureaux",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Nettoyage quotidien", "Désinfection", "Espaces communs"]
    },
    {
      title: "Entretien Immeubles",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Parties communes", "Sortie poubelles", "Vitrerie"]
    }
  ];

  const engagements = [
    { icon: Shield, text: "Satisfaction garantie" },
    { icon: Clock, text: "Disponible 7j/7" },
    { icon: Award, text: "Personnel qualifié" }
  ];

  return (
    <div className="w-[148mm] h-[210mm] bg-white mx-auto shadow-xl relative overflow-hidden">
      {/* En-tête avec effet parallaxe */}
      <div className="relative h-[70mm] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/90" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-center mt-4 mb-2">
            Expert du Nettoyage Professionnel
          </h1>
          <p className="text-center text-lg">
            Votre partenaire propreté à Montpellier
          </p>
        </div>
      </div>

      {/* Services avec images */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Nos engagements avec effets */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
          Nos Engagements
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {engagements.map((engagement, index) => (
            <EngagementCard key={index} {...engagement} />
          ))}
        </div>
      </div>

      {/* Offre spéciale avec effet brillant */}
      <div className="p-4">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-6 text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iNDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-center mb-2">
              OFFRE SPÉCIALE
            </h2>
            <p className="text-3xl font-bold text-center mb-2">
              -20%
            </p>
            <p className="text-center">
              sur votre première prestation
            </p>
          </div>
        </div>
      </div>

      {/* Contact avec effet de carte */}
      <div className="bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold text-center mb-4 text-blue-800">Contactez-nous</h2>
          <div className="space-y-3">
            {[
              { icon: Phone, text: contactInfo.phone },
              { icon: Mail, text: contactInfo.email },
              { icon: MapPin, text: contactInfo.address }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-100 text-center text-xs text-gray-600">
        Ne pas jeter sur la voie publique • SIRET: XXXXXXXXXXXXX
      </div>
    </div>
  );
};

export default PrintableFlyer;