import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert du Nettoyage Professionnel
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            OC'Clean, votre partenaire de confiance pour tous vos besoins en nettoyage. 
            De l'entretien de bureaux au nettoyage automobile, nous garantissons un service 
            d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Contactez-nous
            </a>
            <Link
              to="/services/auto"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Nos Services
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "7/7", label: "Disponibilité" },
              { value: "100%", label: "Satisfaction" },
              { value: "15min", label: "Temps de réponse" },
              { value: "24/24", label: "Service client" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;