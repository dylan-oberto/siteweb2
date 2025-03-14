import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Immeubles & copropriétés",
    description: "Nous assurons le nettoyage des parties communes d'immeubles et de copropriétés à Montpellier. Nos équipes garantissent la propreté avec des interventions régulières et efficaces.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services/immeubles"
  },
  {
    title: "Bureaux & locaux professionnels",
    description: "OC'Clean propose des services sur mesure pour les bureaux et locaux à Montpellier, assurant des espaces de travail propres et sains adaptés à vos besoins.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services/bureaux"
  },
  {
    title: "Locations Airbnb",
    description: "Service premium pour hôtes Airbnb : nettoyage professionnel, gestion des check-in/out et préparation complète entre chaque location.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/airbnb"
  },
  {
    title: "Commerces",
    description: "Nous offrons des solutions de nettoyage pour les commerces à Montpellier, garantissant des environnements accueillants et impeccables pour vos clients.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services/bureaux"
  },
  {
    title: "Cabinets médicaux",
    description: "Nos équipes respectent les normes strictes des cabinets médicaux. OC'Clean garantit un nettoyage rigoureux et sécurisé pour vos espaces de santé à Montpellier.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services/bureaux"
  },
  {
    title: "École et formation",
    description: "Nous proposons des services de nettoyage adaptés aux écoles et centres de formation à Montpellier, garantissant un environnement sain et propice à l'apprentissage.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services/bureaux"
  }
];

const certifications = [
  {
    image: "https://i.ibb.co/fzwDNhcJ/cradle-to-cradle.png",
    name: "Cradle to Cradle"
  },
  {
    image: "https://i.ibb.co/9KW8C9H/eco-cert.png",
    name: "Eco Cert"
  },
  {
    image: "https://i.ibb.co/tw3jX1hk/fsc.png",
    name: "FSC"
  },
  {
    image: "https://i.ibb.co/fdSh1DSy/eu-ecolabel.png",
    name: "EU Ecolabel"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="h-[2px] w-20 bg-blue-600"></div>
            <h3 className="text-3xl font-bold mx-6 text-blue-600">Nos Services</h3>
            <div className="h-[2px] w-20 bg-blue-600"></div>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-blue-600">Nettoyage à Montpellier</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            OC'Clean propose un large éventail de services de nettoyage à Montpellier. 
            Que vous soyez un particulier, une entreprise ou un hôte Airbnb, nos équipes 
            sont prêtes à intervenir pour vous offrir des espaces propres, 
            sains et accueillants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Plus d'infos
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Respect de l'Environnement */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texte à droite */}
            <div className="order-2 md:order-2">
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Respect de l'Environnement</h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">
                Chez OC'Clean, le respect de l'environnement est au cœur de notre mission. 
                Depuis notre création, nous utilisons exclusivement des produits de nettoyage 
                écologiques afin de préserver la santé de nos employés, de nos clients et de 
                la planète.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Écoresponsable - En savoir plus
              </Link>
            </div>

            {/* Logos à gauche */}
            <div className="order-1 md:order-1 grid grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="h-24 w-auto mx-auto object-contain"
                  />
                  <p className="text-center text-sm font-medium text-gray-600 mt-2">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;