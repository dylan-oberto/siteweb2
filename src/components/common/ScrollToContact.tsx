import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ScrollToContactProps {
  className?: string;
  children: React.ReactNode;
}

const ScrollToContact = ({ className, children }: ScrollToContactProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Get the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default ScrollToContact;