import React, { useState } from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Shield, CheckCircle, FileText } from 'lucide-react';

const WarrantyRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderNumber: '',
    productType: '',
    purchaseDate: '',
    serialNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Warranty registration:', formData);
  };

  const warrantyBenefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Extended Protection",
      description: "Get extended warranty coverage beyond the standard warranty period"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Priority Support",
      description: "Registered products receive priority customer support and service"
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Digital Records",
      description: "Keep digital records of your warranty for easy access and claims"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Warranty Registration</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Register your Knya products to activate warranty coverage and receive priority support
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Warranty Registration Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {warrantyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Register Your Product</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number *
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., KNY123456"
                  required
                />
              </div>
              <div>
                <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type *
                </label>
                <select
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select product type</option>
                  <option value="stethoscope">6sense Stethoscope</option>
                  <option value="scrubs">Medical Scrubs</option>
                  <option value="lab-coat">Lab Coat</option>
                  <option value="accessories">Medical Accessories</option>
                </select>
              </div>
              <div>
                <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Purchase Date *
                </label>
                <input
                  type="date"
                  id="purchaseDate"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Serial Number (if applicable)
                </label>
                <input
                  type="text"
                  id="serialNumber"
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Found on product label"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Register Product Warranty
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Warranty Coverage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">6sense Stethoscopes</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• 2-year manufacturer warranty</li>
                <li>• Covers manufacturing defects</li>
                <li>• Free repair or replacement</li>
                <li>• 7-day trial period included</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Medical Apparel</h3>
              <ul className="text-green-700 space-y-2">
                <li>• 6-month quality guarantee</li>
                <li>• Covers fabric and construction defects</li>
                <li>• Free replacement for defective items</li>
                <li>• 30-day return policy</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">Important Notes</h3>
            <ul className="text-yellow-700 space-y-1 text-sm">
              <li>• Warranty does not cover normal wear and tear</li>
              <li>• Damage due to misuse or accidents is not covered</li>
              <li>• Original purchase receipt may be required for warranty claims</li>
              <li>• Registration must be completed within 30 days of purchase</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default WarrantyRegistration;