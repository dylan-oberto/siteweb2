import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import ServiceCategories from '../components/services/ServiceCategories';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Stats />
      <Testimonials />
      <ServiceCategories />
      <CTASection />
    </div>
  );
};

export default Home;