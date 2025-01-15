import React from 'react';
import { Shield, Star, MapPin } from 'lucide-react';
import ServiceGallery from '../../components/services/ServiceGallery';

const OfficeCleaning: React.FC = () => {
  const gallery = [
    {
      image: "https://i.ibb.co/6ssGpw0/bureaux1.jpg",
      caption: "Nettoyage bureaux open space",
      description: "Entretien complet des espaces de travail avec désinfection des surfaces"
    },
    {
      image: "https://i.ibb.co/K6nNdm1/bureaux2.jpg",
      caption: "Entretien salle de réunion",
      description: "Nettoyage approfondi des salles de réunion et espaces communs"
    },
    {
      image: "https://i.ibb.co/LrTJBWM/bureaux3.jpg",
      caption: "Nettoyage sanitaires",
      description: "Désinfection complète et approvisionnement des consommables"
    }
  ];

  const serviceInfo = {
    title: "Entretien de Bureaux à Montpellier",
    description: "Service professionnel d'entretien et de nettoyage de bureaux",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      "Nettoyage quotidien des espaces de travail",
      "Désinfection complète des surfaces",
      "Entretien des sols (tous types)",
      "Nettoyage des sanitaires",
      "Dépoussiérage du mobilier",
      "Entretien des cuisines et salles de pause",
      "Gestion des déchets et recyclage",
      "Approvisionnement des consommables"
    ],
    benefits: [
      "Intervention en dehors des heures de bureau",
      "Personnel formé et expérimenté",
      "Produits écologiques certifiés",
      "Matériel professionnel dernière génération",
      "Contrôle qualité régulier",
      "Assurance responsabilité civile"
    ],
    testimonials: [
      {
        name: "Jean-Marc Dubois",
        location: "Port Marianne",
        content: "OC'Clean assure l'entretien de nos bureaux depuis 6 mois. Un service irréprochable.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      {
        name: "Caroline Martin",
        location: "Antigone",
        content: "Excellente prestation quotidienne, personnel discret et efficace.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      }
    ],
    pricing: [
      {
        name: "Forfait Essentiel",
        price: "sur devis",
        features: [
          "Nettoyage hebdomadaire",
          "Surfaces jusqu'à 200m²",
          "Sanitaires inclus",
          "Gestion des déchets"
        ]
      },
      {
        name: "Forfait Business",
        price: "sur devis",
        features: [
          "Nettoyage quotidien",
          "Surfaces jusqu'à 500m²",
          "Services premium inclus",
          "Contrôle qualité mensuel"
        ]
      },
      {
        name: "Forfait Corporate",
        price: "sur devis",
        features: [
          "Service sur-mesure",
          "Grandes surfaces",
          "Permanence sur site",
          "Reporting détaillé"
        ]
      }
    ],
    areas: [
      "Montpellier Centre",
      "Antigone",
      "Port Marianne",
      "Près d'Arènes",
      "Les Cévennes",
      "La Paillade",
      "Castelnau-le-Lez",
      "Lattes",
      "Pérols"
    ]
  };

  return (
    <div className="pt-16">
      {/* Hero et Services */}
      <div className="relative">
        <div 
          className="h-[400px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${serviceInfo.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-4xl font-bold text-white mb-4">{serviceInfo.title}</h1>
              <p className="text-xl text-white">{serviceInfo.description}</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceInfo.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Nos Réalisations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
          <ServiceGallery images={gallery} />
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceInfo.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Avis Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceInfo.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Forfaits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceInfo.pricing.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Zones d'Intervention</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceInfo.areas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeCleaning;