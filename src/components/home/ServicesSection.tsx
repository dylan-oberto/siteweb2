import React from 'react';
import { Car, Building2, Building } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Car className="w-12 h-12 text-blue-600" />,
    title: "Nettoyage Auto",
    description: "Service premium de nettoyage automobile à domicile. Intérieur, extérieur, et protection céramique.",
    features: ["Nettoyage intérieur complet", "Lavage extérieur", "Protection céramique", "Traitement cuir"],
    link: "/services/auto"
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600 rotate-90" />, // Using Building2 rotated as window icon
    title: "Nettoyage Vitres",
    description: "Nettoyage professionnel de vitres pour particuliers et entreprises, incluant les grandes hauteurs.",
    features: ["Vitres en hauteur", "Anti-traces", "Particuliers & Pro", "Devis gratuit"],
    link: "/services/vitres"
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Entretien Bureaux",
    description: "Service complet d'entretien de bureaux et locaux professionnels.",
    features: ["Nettoyage quotidien", "Désinfection", "Espaces communs", "Sur mesure"],
    link: "/services/bureaux"
  },
  {
    icon: <Building className="w-12 h-12 text-blue-600" />,
    title: "Entretien Immeubles",
    description: "Entretien professionnel des parties communes et espaces collectifs.",
    features: ["Parties communes", "Sortie poubelles", "Vitrerie", "Contrat annuel"],
    link: "/services/immeubles"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de nettoyage professionnel, 
            adaptés à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;