import emailjs from '@emailjs/browser';

// Initialisation d'EmailJS avec la clé publique
emailjs.init("7RDgHigEDJh1R86UK");

// Configuration EmailJS
export const EMAILJS_SERVICE_ID = 'service_2nvwwxn';
export const EMAILJS_TEMPLATE_ID = 'template_u5f2rfb';
export const EMAILJS_PUBLIC_KEY = '7RDgHigEDJh1R86UK';

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    // Vérification des champs requis
    const fromName = form.querySelector<HTMLInputElement>('[name="from_name"]')?.value;
    const replyTo = form.querySelector<HTMLInputElement>('[name="reply_to"]')?.value;
    const phoneNumber = form.querySelector<HTMLInputElement>('[name="phone_number"]')?.value;
    const service = form.querySelector<HTMLSelectElement>('[name="service"]')?.value;
    const message = form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value;

    if (!fromName || !replyTo || !message) {
      throw new Error('Veuillez remplir tous les champs obligatoires');
    }

    // Création de l'objet de données pour EmailJS
    const templateParams = {
      from_name: fromName,
      reply_to: replyTo,
      phone_number: phoneNumber || 'Non renseigné',
      service: service || 'Non spécifié',
      message: message,
      email: 'contact.client.oc.clean@gmail.com' // Changed to match the template variable
    };

    // Envoi de l'email avec les paramètres du template
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (result.status !== 200) {
      throw new Error('Une erreur est survenue lors de l\'envoi de l\'email');
    }

    return result;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};