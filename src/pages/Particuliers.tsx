import React from 'react';
import { Shield, Star, MapPin, Check, Clock, CreditCard, Sparkles } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ScrollToContact from '../components/common/ScrollToContact';

const Particuliers = () => {
  const services = [
    {
      title: "Ménage régulier",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: [
        "Dépoussiérage complet",
        "Nettoyage des sols",
        "Désinfection sanitaires",
        "Rangement"
      ]
    },
    {
      title: "Grand nettoyage",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: [
        "Nettoyage en profondeur",
        "Traitement des taches",
        "Désinfection totale",
        "Remise à neuf"
      ]
    },
    {
      title: "Nettoyage vitres",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: [
        "Vitres intérieures",
        "Vitres extérieures",
        "Encadrements",
        "Anti-traces"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Services aux Particuliers
              </h1>
              <p className="text-xl text-white mb-8">
                Un intérieur impeccable, naturellement. Parce que votre bien-être passe par un logement 
                propre et sain, OC'Clean vous propose des prestations de ménage à domicile adaptées à 
                votre mode de vie.
              </p>
              <ScrollToContact className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Demander un devis
              </ScrollToContact>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Services Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexibilité",
                description: "Interventions adaptées à vos horaires, 7j/7"
              },
              {
                icon: Shield,
                title: "Fiabilité",
                description: "Personnel qualifié et vérifié, assurance incluse"
              },
              {
                icon: CreditCard,
                title: "Simplicité",
                description: "Paiement CESU accepté, crédit d'impôt 50%"
              }
            ].map((benefit, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2">
                  <benefit.icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Home Care Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Pourquoi Choisir Notre Service d'Aide à la Personne ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Service d'aide à la personne"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Une équipe qualifiée et bienveillante</h3>
                  <p className="text-gray-600">
                    Nos intervenants sont rigoureusement sélectionnés et formés pour vous garantir 
                    un service de qualité. Ils allient professionnalisme et bienveillance pour votre 
                    plus grand confort.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Des prestations sur mesure</h3>
                  <p className="text-gray-600">
                    Nous adaptons nos services à vos besoins spécifiques. Que ce soit pour un 
                    entretien régulier ou ponctuel, nous établissons ensemble un plan d'intervention 
                    personnalisé.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Un suivi qualité rigoureux</h3>
                  <p className="text-gray-600">
                    Nous effectuons des contrôles qualité réguliers et restons à votre écoute 
                    pour ajuster nos prestations selon vos retours et attentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CESU & SAP Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-16">
            Services à la Personne & CESU
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* SAP Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-center mb-4">
                Services à la Personne (SAP)
              </h3>
              <p className="text-gray-600 mb-4">
                En tant qu'entreprise agréée Services à la Personne, nous vous garantissons :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Un crédit d'impôt de 50% sur vos prestations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Des intervenants qualifiés et formés</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Un contrôle qualité régulier des prestations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Une assurance responsabilité civile professionnelle</span>
                </li>
              </ul>
            </div>

            {/* CESU Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-center mb-4">
                Chèque Emploi Service Universel (CESU)
              </h3>
              <p className="text-gray-600 mb-4">
                Nous acceptons le paiement par CESU préfinancé, ce qui vous permet de :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Régler vos prestations simplement et en toute sécurité</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Bénéficier d'une aide financière de votre employeur</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Profiter d'avantages fiscaux supplémentaires</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Gérer facilement vos paiements en ligne</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-friendly Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Engagement Écoresponsable</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Produits Naturels",
                description: "100% biodégradables et respectueux de l'environnement"
              },
              {
                title: "Économie d'Eau",
                description: "Techniques optimisées pour préserver les ressources"
              },
              {
                title: "Zéro Déchet",
                description: "Utilisation de matériel réutilisable et durable"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <Star className="w-12 h-12 text-green-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Demandez un Devis Gratuit</h2>
            <p className="text-gray-600">
              Contactez-nous dès maintenant pour bénéficier d'une étude personnalisée 
              de vos besoins et d'un devis gratuit.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Particuliers;