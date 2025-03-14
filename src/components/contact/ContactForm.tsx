import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail } from '../../utils/emailjs';

interface ContactFormProps {
  service?: string;
}

const ContactForm = ({ service }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Validation des champs
      const form = formRef.current;
      const fromName = form.querySelector<HTMLInputElement>('[name="from_name"]')?.value;
      const replyTo = form.querySelector<HTMLInputElement>('[name="reply_to"]')?.value;
      const message = form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value;

      if (!fromName || !replyTo || !message) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }

      // Ajout du champ to_email caché
      const toEmailInput = document.createElement('input');
      toEmailInput.type = 'hidden';
      toEmailInput.name = 'to_email';
      toEmailInput.value = 'contact.client.oc.clean@gmail.com';
      form.appendChild(toEmailInput);

      // Envoi de l'email
      const result = await sendEmail(form);

      // Suppression du champ to_email après l'envoi
      form.removeChild(toEmailInput);

      if (result.status === 200) {
        toast.success('Votre message a été envoyé avec succès !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });

        // Reset form
        form.reset();
      } else {
        throw new Error('Une erreur est survenue lors de l\'envoi de l\'email');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
              Nom complet *
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Service
            </label>
            <select
              id="service"
              name="service"
              defaultValue={service || ''}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Sélectionnez un service</option>
              <option value="airbnb">Gestion Airbnb</option>
              <option value="auto">Nettoyage Auto</option>
              <option value="vitres">Nettoyage Vitres</option>
              <option value="bureaux">Entretien Bureaux</option>
              <option value="immeubles">Entretien Immeubles</option>
              <option value="copropriete">Entretien Copropriété</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              'Envoi en cours...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Envoyer
              </>
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;