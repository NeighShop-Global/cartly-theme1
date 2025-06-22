import React from 'react';
import Header from '../components/Header';
import WomensScrubsSection from '../components/WomensScrubsSection';
import ScrubsCollection from '../components/ScrubsCollection';
import LabCoatsSection from '../components/LabCoatsSection';
import AccessoriesSection from '../components/AccessoriesSection';
import TrustSection from '../components/TrustSection';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Women = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Women's Medical Apparel</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Stylish and comfortable scrubs, lab coats, and accessories designed for female healthcare professionals
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
            Shop Women's Collection
          </button>
        </div>
      </section>

      <WomensScrubsSection />
      <ScrubsCollection />
      <LabCoatsSection />
      <AccessoriesSection />
      <TrustSection />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Women;