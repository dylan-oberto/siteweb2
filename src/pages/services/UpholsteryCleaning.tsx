import React from 'react';
import { Star, Shield, Clock, CheckCircle, Phone } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';

const UpholsteryCleaning = () => {
  const services = [
    {
      title: "Nettoyage de Canapés",
      description: "Redonnez vie à vos canapés avec notre service professionnel",
      price: "À partir de 89€",
      features: [
        "Élimination des taches tenaces",
        "Désodorisation en profondeur",
        "Traitement anti-acariens",
        "Protection anti-taches"
      ],
      images: [
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      ]
    },
    {
      title: "Nettoyage de Tapis",
      description: "Un nettoyage professionnel pour des tapis comme neufs",
      price: "À partir de 49€/m²",
      features: [
        "Nettoyage en profondeur",
        "Élimination des allergènes",
        "Ravivage des couleurs",
        "Séchage rapide"
      ],
      images: [
        "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      ]
    },
    {
      title: "Nettoyage de Matelas",
      description: "Pour un sommeil sain et réparateur",
      price: "À partir de 69€",
      features: [
        "Désinfection complète",
        "Traitement anti-acariens",
        "Élimination des allergènes",
        "Désodorisation naturelle"
      ],
      images: [
        "https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Expert en Nettoyage de Textiles</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Redonnez vie à vos textiles avec nos services professionnels de nettoyage
          </p>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Satisfaction garantie</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Produits écologiques</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Intervention rapide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Canapés */}
          <div className="mb-20">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">{services[0].title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{services[0].description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-blue-600 mb-2">{services[0].price}</p>
                    <p className="text-sm text-gray-500">Prix TTC, déplacement inclus</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {services[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Réserver maintenant
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {services[0].images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`Nettoyage canapé ${imgIndex + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sections Tapis et Matelas */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="mb-8">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{service.price}</p>
                  <p className="text-sm text-gray-500">Prix TTC, déplacement inclus</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Réserver maintenant
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à redonner vie à vos textiles ?</h2>
          <p className="text-xl mb-8">
            Contactez-nous dès maintenant pour un devis gratuit
          </p>
          <a
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            <Phone className="w-6 h-6 mr-2" />
            {contactInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default UpholsteryCleaning;