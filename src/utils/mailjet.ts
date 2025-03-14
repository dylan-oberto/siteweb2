import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.VITE_MJ_APIKEY_PUBLIC || 'your-api-key',
  apiSecret: process.env.VITE_MJ_APIKEY_PRIVATE || 'your-api-secret'
});

export const sendEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) => {
  try {
    const response = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: "contact.client.oc.clean@gmail.com",
            Name: "OC'Clean"
          },
          To: [
            {
              Email: "contact.client.oc.clean@gmail.com",
              Name: "OC'Clean"
            }
          ],
          Subject: `Nouvelle demande de contact - ${data.service || 'Général'}`,
          TextPart: `
            Nouveau message de ${data.name}
            Email: ${data.email}
            Téléphone: ${data.phone || 'Non renseigné'}
            Service: ${data.service || 'Non spécifié'}
            Message: ${data.message}
          `,
          HTMLPart: `
            <h3>Nouveau message de contact</h3>
            <p><strong>Nom:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Téléphone:</strong> ${data.phone || 'Non renseigné'}</p>
            <p><strong>Service:</strong> ${data.service || 'Non spécifié'}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `
        }
      ]
    });

    return response;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};