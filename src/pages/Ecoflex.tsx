import React from 'react';
import Header from '../components/Header';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustSection from '../components/TrustSection';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Leaf, Recycle, Heart } from 'lucide-react';

const Ecoflex = () => {
  const ecoFeatures = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Sustainable Materials",
      description: "Made from eco-friendly fabrics that reduce environmental impact"
    },
    {
      icon: <Recycle className="w-12 h-12 text-green-600" />,
      title: "Recyclable Packaging",
      description: "All packaging materials are 100% recyclable and biodegradable"
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Comfort & Care",
      description: "Designed for maximum comfort while caring for our planet"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ecoflex Collection</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sustainable medical apparel that cares for you and the environment
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
            Shop Ecoflex
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Why Choose Ecoflex?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ecoFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-green-50">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <TrustSection />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Ecoflex;