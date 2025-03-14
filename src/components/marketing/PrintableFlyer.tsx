import React from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle, Droplets, Sparkles } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';

const PrintableFlyer = () => {
  return (
    <div className="w-[151mm] h-[213mm] bg-white mx-auto shadow-xl relative overflow-hidden">
      {/* En-tête */}
      <div className="h-[55mm] bg-blue-600 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622015663084-307d19eabbbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative h-full flex justify-between items-center px-4">
          {/* Logo CESU à gauche */}
          <div className="bg-white p-2 rounded-lg">
            <img 
              src="https://i.ibb.co/gLJQtKB/cesu-logo.png"
              alt="Logo CESU"
              className="h-16 object-contain"
            />
          </div>
          
          {/* Logo OC'Clean au centre */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="relative">
                  <Droplets className="w-12 h-12 text-white" />
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold tracking-tight text-white">
                    OC'Clean
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-100 tracking-wider">
                  PROPRETÉ & EXCELLENCE
                </span>
              </div>
            </div>
          </div>
          
          {/* Logo SAP à droite */}
          <div className="bg-white p-2 rounded-lg">
            <img 
              src="https://i.ibb.co/0pNgq1t/sap-logo.png"
              alt="Logo Services à la Personne"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-center mb-2">Nos Services</h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              title: "Nettoyage Auto",
              image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              features: ["Intérieur & Extérieur", "Protection céramique"]
            },
            {
              title: "Nettoyage Vitres",
              image: "https://i.ibb.co/bjyKbfmP/nettoyage-vitre.jpg",
              features: ["Particuliers & Pro", "Grandes hauteurs"]
            },
            {
              title: "Entretien Bureaux",
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              features: ["Nettoyage quotidien", "Désinfection"]
            },
            {
              title: "Entretien Immeubles",
              image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              features: ["Parties communes", "Vitrerie"]
            },
            {
              title: "Nettoyage Textile",
              image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              features: ["Canapés & Tapis", "Matelas"]
            },
            {
              title: "Nettoyage Piscines",
              image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              features: ["Entretien régulier", "Traitement eau"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-16 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-1 left-2 text-xs font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-1">
                <ul className="space-y-0.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[9px]">
                      <CheckCircle className="w-2 h-2 text-blue-600 mr-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Garanties */}
      <div className="px-4 py-2 bg-gray-50">
        <h2 className="text-lg font-bold text-center mb-2">Nos Garanties</h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            { text: "Devis Gratuit", icon: Shield },
            { text: "Personnel Qualifié", icon: Shield },
            { text: "Satisfaction Garantie", icon: Shield }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center space-x-1.5 bg-white p-2 rounded-lg shadow-sm">
              <item.icon className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-center mb-2">Contactez-nous</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center justify-center space-x-1.5 bg-blue-50 p-2 rounded-lg">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-xs">{contactInfo.phone}</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-50 p-2 rounded-lg">
            <div className="flex items-center space-x-1.5">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-xs">Email</span>
            </div>
            <span className="text-[8px] text-center break-all">{contactInfo.email}</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 bg-blue-50 p-2 rounded-lg">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-xs">{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Offre Spéciale - Remplace les certifications */}
      <div className="px-4 py-3">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg py-3 px-4 text-white text-center shadow-lg mx-auto border-2 border-blue-300">
          <h2 className="text-2xl font-bold mb-1">OFFRE SPÉCIALE -20%</h2>
          <p className="text-sm">Sur votre première prestation • Sur présentation de ce flyer</p>
        </div>
      </div>

      {/* Footer avec SIRET mis à jour */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white py-1.5 px-4">
        <div className="text-center text-[9px]">
          Entreprise agréée Services à la Personne • SIRET: 93961336000014
        </div>
      </div>
    </div>
  );
};

export default PrintableFlyer;