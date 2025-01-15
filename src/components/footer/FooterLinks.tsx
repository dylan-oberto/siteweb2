import React from 'react';
import { Link } from 'react-router-dom';
import { serviceLinks } from '../../utils/navigationLinks';

const FooterLinks: React.FC = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Services</h4>
      <ul className="space-y-2">
        {serviceLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;