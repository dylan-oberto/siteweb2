import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';

const FooterContact = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Phone size={16} className="mr-2" />
          <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
            {contactInfo.phone}
          </a>
        </li>
        <li className="flex items-center">
          <Mail size={16} className="mr-2" />
          <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
            {contactInfo.email}
          </a>
        </li>
        <li className="flex items-center">
          <MapPin size={16} className="mr-2" />
          <span className="text-gray-400">{contactInfo.address}</span>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;