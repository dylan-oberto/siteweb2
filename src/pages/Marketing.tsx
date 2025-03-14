import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import Logo from '../components/common/Logo';
import PrintableFlyer from '../components/marketing/PrintableFlyer';
import CarSticker from '../components/marketing/CarSticker';
import FlyerExport from '../components/marketing/FlyerExport';

const Marketing = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Documents Marketing</h1>

        {/* Carte de Visite */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Carte de Visite</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Preview */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-[85.6mm] h-[54mm] bg-white rounded-lg shadow-xl p-6 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-50 rounded-full -ml-12 -mb-12" />
                
                <div className="relative">
                  {/* Logo */}
                  <div className="mb-4">
                    <Logo />
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">04 67 XX XX XX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">contact@occlean.fr</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">www.occlean.fr</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">France</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <p className="text-xs text-gray-500">
                      • Nettoyage Auto • Nettoyage Vitres<br />
                      • Entretien Bureaux • Entretien Immeubles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">Carte de visite professionnelle</h3>
              <p className="text-gray-600">
                Notre carte de visite reflète notre identité professionnelle avec un design 
                moderne et élégant. Elle intègre tous nos services et coordonnées dans un 
                format pratique et mémorable.
              </p>
            </div>
          </div>
        </section>

        {/* Flyer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Flyer Commercial</h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8">
            <div className="mb-8 text-gray-600">
              <p className="mb-4">
                Format A5 (148 x 210 mm) optimisé pour l'impression et la distribution en boîtes aux lettres.
              </p>
              <p>
                Conçu pour attirer l'attention avec :
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Des couleurs vives et professionnelles</li>
                <li>Une mise en page claire et efficace</li>
                <li>Des informations essentielles facilement lisibles</li>
                <li>Une offre spéciale attractive</li>
              </ul>
            </div>
            
            {/* Flyer Preview */}
            <div className="flex justify-center">
              <PrintableFlyer />
            </div>
            
            {/* Export Options */}
            <div className="mt-8 max-w-md mx-auto">
              <FlyerExport />
            </div>
          </div>
        </section>

        {/* Sticker Voiture */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Sticker Voiture</h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8">
            <div className="mb-8 text-gray-600">
              <p className="mb-4">
                Sticker professionnel conçu pour la vitre arrière de votre Renault Captur 2019.
              </p>
              <p>
                Caractéristiques du design :
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Design moderne et épuré</li>
                <li>Excellente visibilité des informations</li>
                <li>Matériaux résistants aux intempéries</li>
                <li>Installation facile</li>
              </ul>
            </div>
            
            {/* Sticker Preview */}
            <div className="flex justify-center bg-gray-100 p-8 rounded-lg">
              <CarSticker />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketing;