import React from 'react';
import { Shield, Clock, Wrench, Award, Sparkles, Heart } from 'lucide-react';

interface QualityCommitmentsProps {
  service: string;
}

const QualityCommitments = ({ service }: QualityCommitmentsProps) => {
  const commitments = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Garantie Satisfaction",
      description: "Nous nous engageons à reprendre gratuitement le travail si vous n'êtes pas entièrement satisfait."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Rapidité d'Intervention",
      description: "Une équipe disponible sous 24-48h pour répondre à vos besoins urgents."
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Équipement Premium",
      description: "Utilisation exclusive de matériel professionnel et de produits haut de gamme."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Personnel Certifié",
      description: "Nos équipes sont formées et certifiées aux dernières techniques du métier."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Résultats Garantis",
      description: "Un niveau de finition exceptionnel pour une satisfaction totale."
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Service Personnalisé",
      description: "Une approche sur mesure adaptée à vos besoins spécifiques."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Engagements Qualité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pour votre {service}, nous nous engageons à fournir un service d'excellence 
            basé sur des standards de qualité rigoureux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                <p className="text-gray-600">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCommitments;