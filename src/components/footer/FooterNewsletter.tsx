import React from 'react';

const FooterNewsletter = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
      <p className="text-gray-400 mb-4">
        Recevez nos actualités et offres spéciales
      </p>
      <form className="space-y-2">
        <input
          type="email"
          placeholder="Votre email"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;