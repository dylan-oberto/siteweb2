import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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