import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sophie Martinez",
    role: "Directrice Administrative",
    company: "Tech Campus Montpellier",
    content: "Un service exceptionnel ! L'équipe d'OC'Clean assure un nettoyage impeccable de nos bureaux depuis plus d'un an.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Laurent Dupont",
    role: "Gérant",
    company: "Résidence Les Oliviers",
    content: "Professionnalisme et efficacité au rendez-vous. Je recommande vivement leurs services pour l'entretien d'immeubles.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Marie Rousseau",
    role: "Propriétaire",
    company: "Boutique Antigone",
    content: "Le nettoyage des vitres est parfait, et leur équipe est toujours ponctuelle et courtoise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Ce Que Disent Nos Clients</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez les témoignages de nos clients satisfaits à Montpellier et ses environs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;