import React from 'react';
import { Shield, Users, Leaf, Award, CheckCircle, MapPin } from 'lucide-react';
import { contactInfo } from '../utils/contactInfo';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Fiabilité",
      description: "Un service professionnel sur lequel vous pouvez compter jour après jour."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Expertise",
      description: "Une équipe qualifiée et expérimentée pour des résultats optimaux."
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-600" />,
      title: "Écologie",
      description: "Des solutions respectueuses de l'environnement et de votre santé."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Qualité",
      description: "Un engagement constant vers l'excellence et la satisfaction client."
    }
  ];

  const stats = [
    { value: "500+", label: "Clients Satisfaits" },
    { value: "15+", label: "Professionnels Qualifiés" },
    { value: "98%", label: "Taux de Satisfaction" },
    { value: "24/7", label: "Support Client" }
  ];

  const engagements = [
    {
      title: "Qualité Premium",
      description: "Nous utilisons uniquement des produits et équipements professionnels de haute qualité."
    },
    {
      title: "Respect des Délais",
      description: "Nous nous engageons à respecter scrupuleusement les plannings d'intervention convenus."
    },
    {
      title: "Personnel Qualifié",
      description: "Notre équipe est formée aux dernières techniques et certifiée pour tous types d'interventions."
    },
    {
      title: "Satisfaction Garantie",
      description: "Nous garantissons votre satisfaction totale ou nous revenons gratuitement."
    }
  ];

  const zones = [
    "Montpellier Centre",
    "Antigone",
    "Port Marianne",
    "Près d'Arènes",
    "Les Cévennes",
    "La Paillade",
    "Castelnau-le-Lez",
    "Lattes",
    "Pérols",
    "Saint-Jean-de-Védas",
    "Juvignac",
    "Le Crès"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">À Propos d'OC'Clean</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins en nettoyage professionnel à Montpellier depuis 2024.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2024 à Montpellier, OC'Clean est née de la volonté d'offrir des services de nettoyage professionnel 
                d'excellence, adaptés aux besoins spécifiques de chaque client.
              </p>
              <p className="text-gray-600 mb-4">
                Notre engagement envers la qualité et la satisfaction client nous a permis de devenir un acteur majeur 
                du secteur dans la région de Montpellier.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, notre équipe de professionnels qualifiés intervient dans toute la région, 
                offrant des services sur mesure pour les particuliers et les entreprises.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Notre équipe"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{engagement.title}</h3>
                    <p className="text-gray-600">{engagement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Zone d'Intervention</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nous intervenons dans toute la région de Montpellier et ses environs, offrant nos services 
            de nettoyage professionnel aux particuliers et aux entreprises.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {zones.map((zone, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{zone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Collaborer ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en nettoyage professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;