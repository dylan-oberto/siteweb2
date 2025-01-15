import React from 'react';
import Logo from '../common/Logo';

const FooterBrand = () => {
  return (
    <div>
      <div className="mb-4">
        <Logo />
      </div>
      <p className="text-gray-400">
        Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel à Montpellier et ses environs.
      </p>
    </div>
  );
};

export default FooterBrand;