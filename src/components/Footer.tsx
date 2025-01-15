import React from 'react';
import FooterContact from './footer/FooterContact';
import FooterLinks from './footer/FooterLinks';
import FooterNewsletter from './footer/FooterNewsletter';
import FooterBrand from './footer/FooterBrand';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
          <FooterNewsletter />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OC'Clean. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;