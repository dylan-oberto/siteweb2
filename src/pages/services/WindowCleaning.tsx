import React from 'react';
import { Shield, Star, MapPin } from 'lucide-react';
import ServiceGallery from '../../components/services/ServiceGallery';

const WindowCleaning: React.FC = () => {
  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1622015663084-307d19eabbbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      caption: "Nettoyage façade vitrée",
      description: "Nettoyage professionnel de façade avec système de perche à eau pure"
    },
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      caption: "Nettoyage véranda",
      description: "Traitement complet intérieur et extérieur avec produits anti-traces"
    },
    {
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      caption: "Résultat impeccable",
      description: "Finition parfaite grâce à nos techniques professionnelles"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Nettoyage de Vitres à Montpellier</h1>
            <p className="text-xl text-white">Service professionnel de nettoyage de vitres pour entreprises et particuliers</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Nettoyage de vitres en hauteur jusqu'à 20m",
              "Traitement anti-traces professionnel",
              "Nettoyage des encadrements et rails",
              "Intervention sur tous types de surfaces vitrées",
              "Nettoyage de vérandas et verrières",
              "Traitement anti-pluie longue durée",
              "Nettoyage de panneaux solaires",
              "Intervention sur façades vitrées"
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {[
              "Personnel qualifié et certifié travail en hauteur",
              "Équipement professionnel aux normes de sécurité",
              "Intervention possible 7j/7",
              "Devis gratuit sous 24h",
              "Assurance responsabilité civile",
              "Produits écologiques certifiés"
            ].map((benefit, index) => (
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
            {[
              {
                name: "Sophie Martin",
                location: "Port Marianne",
                content: "Excellente prestation pour le nettoyage des vitres de ma boutique.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              },
              {
                name: "Laurent Dupont",
                location: "Antigone",
                content: "Je recommande vivement pour l'entretien des vitres en hauteur.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              }
            ].map((testimonial, index) => (
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
            {[
              {
                name: "Forfait Résidentiel",
                price: "à partir de 80€",
                features: [
                  "Vitres classiques",
                  "Encadrements",
                  "Rebords",
                  "Garantie satisfaction"
                ]
              },
              {
                name: "Forfait Commercial",
                price: "sur devis",
                features: [
                  "Façades vitrées",
                  "Grandes hauteurs",
                  "Traitement anti-traces",
                  "Contrat d'entretien"
                ]
              },
              {
                name: "Forfait Premium",
                price: "sur devis",
                features: [
                  "Traitement anti-pluie",
                  "Protection UV",
                  "Nettoyage mensuel",
                  "Garantie 1 an"
                ]
              }
            ].map((plan, index) => (
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
            {[
              "Montpellier Centre",
              "Antigone",
              "Port Marianne",
              "Près d'Arènes",
              "Les Cévennes",
              "La Paillade",
              "Castelnau-le-Lez",
              "Lattes",
              "Pérols"
            ].map((area, index) => (
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

export default WindowCleaning;