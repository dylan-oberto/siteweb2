import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to contact form
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('scroll') === 'contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer id="contact" />
    </div>
  );
};

export default Layout;