import React from 'react';
import { Star, Shield, Clock, Check, Calendar, Home, Key, Sparkles, Phone } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ScrollToContact from '../components/common/ScrollToContact';
import { contactInfo } from '../utils/contactInfo';

const AirBnB = () => {
  const services = [
    {
      title: "Check-in / Check-out",
      description: "Préparation complète entre chaque location",
      features: [
        "Nettoyage approfondi",
        "Changement du linge",
        "Vérification des équipements",
        "Photos de contrôle"
      ]
    },
    {
      title: "Nettoyage Premium",
      description: "Service de nettoyage professionnel",
      features: [
        "Désinfection complète",
        "Nettoyage vitres",
        "Entretien terrasse",
        "Traitement odeurs"
      ]
    },
    {
      title: "Gestion du linge",
      description: "Service complet de blanchisserie",
      features: [
        "Draps & serviettes",
        "Linge de maison",
        "Repassage",
        "Stock tampon"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Intérieur moderne"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block bg-blue-600/90 text-white px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
              Service Premium pour Hôtes Airbnb
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Gestion Complète de vos Locations Saisonnières
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Maximisez vos revenus et votre réputation avec notre service clé en main 
              de gestion pour locations courte durée. Nettoyage professionnel, accueil 
              des voyageurs et gestion du linge.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ScrollToContact className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Demander un devis
              </ScrollToContact>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services pour Hôtes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour assurer une expérience exceptionnelle à vos voyageurs 
              et maximiser vos revenus locatifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 text-left">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Processus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une organisation millimétrée pour une gestion sans faille de vos locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Planification",
                description: "Organisation des interventions selon votre calendrier de réservations"
              },
              {
                icon: Key,
                title: "Check-in",
                description: "Accueil professionnel et remise des clés à vos voyageurs"
              },
              {
                icon: Home,
                title: "Entretien",
                description: "Nettoyage complet et préparation pour le prochain séjour"
              },
              {
                icon: Sparkles,
                title: "Contrôle",
                description: "Vérification qualité et rapport photo après chaque intervention"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Demandez un Devis Personnalisé</h2>
            <p className="text-gray-600">
              Nos experts sont à votre disposition pour étudier vos besoins et vous 
              proposer une solution adaptée à votre activité.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default AirBnB;