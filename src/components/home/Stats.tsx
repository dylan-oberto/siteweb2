import React from 'react';
import { Users, Building2, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    value: "500+",
    label: "Clients Satisfaits",
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    value: "1000+",
    label: "Locaux Entretenus",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    value: "24/7",
    label: "Disponibilité",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
    value: "98%",
    label: "Taux de Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;