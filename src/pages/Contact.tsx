import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Téléphone",
      content: "04 67 XX XX XX",
      link: "tel:0467XXXXXX"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "contact@occlean.fr",
      link: "mailto:contact@occlean.fr"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Adresse",
      content: "123 Avenue de la Liberté, 34000 Montpellier",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h | Sam: 9h-12h",
      link: null
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Envoyez-nous un message</h2>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.79977330112!2d3.8062771781349726!3d43.61088690460675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier%2C%20France!5e0!3m2!1sen!2sus!4v1644935735000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;