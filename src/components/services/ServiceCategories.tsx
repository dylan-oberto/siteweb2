import React from 'react';
import { Building2, Warehouse, Building, Stethoscope, Waves, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Les Bureaux",
    description: "Entretien professionnel d'espaces de travail"
  },
  {
    icon: <Warehouse className="w-12 h-12 text-blue-600" />,
    title: "Les Entrepôts",
    description: "Nettoyage industriel et logistique"
  },
  {
    icon: <Building className="w-12 h-12 text-blue-600" />,
    title: "Les Copropriétés",
    description: "Maintenance des parties communes"
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
    title: "Les Centres Médicaux",
    description: "Désinfection et hygiène médicale"
  },
  {
    icon: <Waves className="w-12 h-12 text-blue-600" />,
    title: "Les Piscines",
    description: "Entretien d'espaces aquatiques"
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 text-blue-600" />,
    title: "Les Restaurants",
    description: "Nettoyage professionnel cuisine & salle"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Secteurs d'Intervention</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;