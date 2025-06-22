import React from 'react';
import Header from '../components/Header';
import StethoscopeCollection from '../components/StethoscopeCollection';
import TrustSection from '../components/TrustSection';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Award, Shield, Headphones } from 'lucide-react';

const Stethoscope = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-purple-600" />,
      title: "Professional Grade",
      description: "Hospital-quality stethoscopes trusted by medical professionals"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "7-Day Free Trial",
      description: "Try before you buy with our risk-free trial period"
    },
    {
      icon: <Headphones className="w-12 h-12 text-purple-600" />,
      title: "Superior Acoustics",
      description: "Crystal clear sound quality for accurate diagnosis"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">6sense Stethoscopes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional-grade stethoscopes with superior acoustics and comfort
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
            Shop Stethoscopes
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Why Choose 6sense?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-purple-50">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StethoscopeCollection />
      <TrustSection />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Stethoscope;