import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceGallery from './ServiceGallery';

interface ServicePageProps {
  serviceInfo: any;
  gallery: any[];
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceInfo, gallery }) => {
  return (
    <div className="pt-16">
      {/* Gallery Section First */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
          <ServiceGallery images={gallery} />
        </div>
      </section>

      {/* Service Layout */}
      <ServiceLayout {...serviceInfo} />
    </div>
  );
};

export default ServicePage;