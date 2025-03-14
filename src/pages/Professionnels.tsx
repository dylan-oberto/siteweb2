import React from 'react';
import { Shield, Star, MapPin, Check, Clock, Building2, Users, Sparkles, Award, FileCheck, Leaf } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ScrollToContact from '../components/common/ScrollToContact';

const Professionnels = () => {
  const services = [
    {
      title: "Bureaux & Locaux",
      description: "Nettoyage complet et régulier des espaces de travail",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: ["Entretien quotidien", "Désinfection", "Gestion des déchets", "Vitres & sols"]
    },
    {
      title: "Commerces",
      description: "Solutions adaptées aux espaces commerciaux",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: ["Nettoyage vitrines", "Entretien quotidien", "Remise en état", "Désinfection"]
    },
    {
      title: "Copropriétés",
      description: "Entretien des parties communes et espaces partagés",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: ["Parties communes", "Sortie poubelles", "Espaces verts", "Parkings"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <source 
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-blue-600/90 text-white px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
                Solutions professionnelles de nettoyage
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                L'Excellence du Nettoyage Professionnel
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Des solutions sur mesure pour maintenir vos espaces impeccables. 
                Nous accompagnons les entreprises, commerces et collectivités avec 
                des services adaptés à chaque secteur d'activité.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ScrollToContact className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Demander un devis
                </ScrollToContact>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                  Nos services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="font-semibold">ISO 9001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="font-semibold">Qualité Pro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="font-semibold">Éco-responsable</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck className="w-8 h-8 text-blue-600" />
              <span className="font-semibold">Assurance RC Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Solutions Professionnelles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des prestations adaptées à chaque secteur d'activité, avec des équipes 
              formées et du matériel professionnel de dernière génération.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir OC'Clean ?</h2>
            <p className="max-w-2xl mx-auto">
              Notre engagement envers l'excellence et la satisfaction client fait 
              la différence dans chacune de nos interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Équipe Qualifiée",
                description: "Personnel formé et expérimenté"
              },
              {
                icon: Clock,
                title: "Disponibilité 24/7",
                description: "Intervention possible à tout moment"
              },
              {
                icon: Shield,
                title: "Garantie Satisfaction",
                description: "Résultats garantis ou reprise gratuite"
              },
              {
                icon: Sparkles,
                title: "Matériel Pro",
                description: "Équipements dernière génération"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Secteurs d'Intervention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre expertise s'étend à tous les secteurs d'activité, avec des solutions 
              adaptées à chaque environnement professionnel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Bureaux & administrations",
              "Commerces & boutiques",
              "Copropriétés & immeubles",
              "Cabinets médicaux",
              "Établissements scolaires",
              "Restaurants & hôtels",
              "Salles de sport",
              "Industries & entrepôts"
            ].map((sector, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors duration-300">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="font-medium text-gray-700">{sector}</span>
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

export default Professionnels;