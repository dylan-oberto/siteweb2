import React from 'react';
import { Shield, Star, MapPin } from 'lucide-react';
import ServiceGallery from '../../components/services/ServiceGallery';
import ScrollToContact from '../../components/common/ScrollToContact';

const AutoCleaning: React.FC = () => {
  const gallery = [
    {
      image: "https://i.ibb.co/jfs5BbG/auto1.jpg",
      caption: "Nettoyage intérieur complet",
      description: "Nettoyage approfondi de l'habitacle avec aspiration et traitement des surfaces"
    },
    {
      image: "https://i.ibb.co/XWDPyBC/auto2.jpg",
      caption: "Nettoyage extérieur",
      description: "Lavage et protection de la carrosserie"
    },
    {
      image: "https://i.ibb.co/1f1ZMpz/auto3.jpg",
      caption: "Finition détaillée",
      description: "Finition soignée pour un résultat impeccable"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1552930294-6b595f4c2974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Nettoyage Auto à Montpellier</h1>
            <p className="text-xl text-white mb-8">Service professionnel de nettoyage automobile à domicile</p>
            <ScrollToContact className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Obtenir un devis
            </ScrollToContact>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Nettoyage intérieur complet",
              "Lavage extérieur professionnel",
              "Protection céramique",
              "Traitement cuir",
              "Rénovation des optiques",
              "Décontamination carrosserie",
              "Désinfection habitacle",
              "Détailing complet"
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
              "Service à domicile",
              "Produits haut de gamme",
              "Personnel qualifié",
              "Devis gratuit",
              "Satisfaction garantie",
              "Assurance professionnelle"
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
                name: "Thomas Martin",
                location: "Montpellier",
                content: "Service impeccable, ma voiture est comme neuve !",
                rating: 5,
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              },
              {
                name: "Julie Dupont",
                location: "Castelnau-le-Lez",
                content: "Très satisfaite du nettoyage intérieur, je recommande !",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
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
                name: "Forfait Express",
                price: "à partir de 49€",
                features: [
                  "Lavage extérieur",
                  "Aspiration intérieure",
                  "Nettoyage vitres",
                  "Parfum"
                ]
              },
              {
                name: "Forfait Complet",
                price: "à partir de 89€",
                features: [
                  "Nettoyage intérieur complet",
                  "Lavage extérieur premium",
                  "Traitement plastiques",
                  "Protection carrosserie"
                ]
              },
              {
                name: "Forfait Prestige",
                price: "sur devis",
                features: [
                  "Détailing complet",
                  "Protection céramique",
                  "Traitement cuir",
                  "Rénovation optiques"
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

export default AutoCleaning;