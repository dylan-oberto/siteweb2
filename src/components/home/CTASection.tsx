import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Prêt à améliorer la propreté de vos locaux ?
        </h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit. Notre équipe est à votre écoute pour répondre à tous vos besoins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${contactInfo.phone}`}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center group"
          >
            <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Nous Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;