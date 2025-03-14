import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import ServiceCategories from '../components/services/ServiceCategories';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Section Présentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-600">OC'Clean</h2>
              <h3 className="text-xl text-gray-600 mb-6">Société de nettoyage</h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Fondée en 2024, OC'Clean ambitionne de devenir une référence incontournable dans le domaine du nettoyage à Montpellier. Dès notre création, nous avons misé sur la qualité, la réactivité et la satisfaction client pour nous imposer sur le marché.
                </p>
                <p className="mb-4">
                  Nous proposons des prestations de nettoyage sur mesure, adaptées aussi bien aux professionnels qu'aux particuliers, en intervenant sur des missions ponctuelles ou régulières. Notre proximité avec nos clients nous permet d'offrir un service rapide et efficace dans toute la métropole montpelliéraine.
                </p>
                <p className="mb-4">
                  Conscients que la qualité du service repose sur l'implication de nos équipes, nous plaçons nos collaborateurs au cœur de notre développement. En valorisant leur savoir-faire et en garantissant un environnement de travail respectueux et motivant, nous assurons un service fiable et constant, gage de satisfaction pour nos clients.
                </p>
                <p>
                  Chez OC'Clean, nous ne nous contentons pas de nettoyer : nous apportons une véritable valeur ajoutée à chaque prestation, en alliant professionnalisme, rigueur et engagement.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Équipe OC'Clean en action"
                className="rounded-lg shadow-xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "+6", label: "ans d'expérience" },
              { value: "+500", label: "clients heureux" },
              { value: "97%", label: "de recommandation" },
              { value: "100%", label: "d'engagement" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <Testimonials />
      <ServiceCategories />
      <CTASection />
    </div>
  );
};

export default Home;