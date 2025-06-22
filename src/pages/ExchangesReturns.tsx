import React from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Package, RefreshCw, Shield, Clock } from 'lucide-react';

const ExchangesReturns = () => {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Contact our support team or use our online return form within 30 days of purchase"
    },
    {
      step: 2,
      title: "Pack Your Item",
      description: "Pack the item in its original condition with tags attached and original packaging"
    },
    {
      step: 3,
      title: "Schedule Pickup",
      description: "We'll arrange a free pickup from your address at your convenience"
    },
    {
      step: 4,
      title: "Processing",
      description: "Once we receive your item, we'll process your return within 3-5 business days"
    },
    {
      step: 5,
      title: "Refund",
      description: "Your refund will be processed to the original payment method within 5-7 business days"
    }
  ];

  const policies = [
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "30-Day Return Window",
      description: "You have 30 days from the date of delivery to return most items"
    },
    {
      icon: <Package className="w-8 h-8 text-purple-600" />,
      title: "Original Condition",
      description: "Items must be unused, unwashed, and in original condition with tags attached"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-purple-600" />,
      title: "Free Exchanges",
      description: "Size exchanges are free within 30 days for the same product"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Quality Guarantee",
      description: "Defective items are eligible for free returns and full refunds"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Exchanges & Returns</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Easy returns and exchanges to ensure you're completely satisfied with your purchase
          </p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Return Policy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{policy.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{policy.title}</h3>
                <p className="text-gray-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">How to Return an Item</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200 hidden md:block"></div>
              {returnSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Special Return Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Stethoscope 7-Day Trial</h3>
              <p className="text-gray-700 mb-4">
                Our 6sense stethoscopes come with a special 7-day free trial period. If you're not completely 
                satisfied with the sound quality or comfort, return it within 7 days for a full refund.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Must be in original condition</li>
                <li>• Include all original accessories</li>
                <li>• No questions asked return policy</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Defective Items</h3>
              <p className="text-gray-700 mb-4">
                If you receive a defective or damaged item, we'll provide a free return and full refund or 
                replacement at no additional cost to you.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Free return shipping</li>
                <li>• Priority processing</li>
                <li>• Full refund or replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Returnable Items */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Non-Returnable Items</h2>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-gray-700 mb-4">
              For hygiene and safety reasons, the following items cannot be returned unless defective:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Items that have been worn, washed, or altered</li>
              <li>• Items without original tags or packaging</li>
              <li>• Personalized or customized items</li>
              <li>• Items returned after 30 days from delivery</li>
              <li>• Items damaged due to misuse or normal wear</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Need Help with Returns?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our customer support team is here to assist you with any return or exchange questions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-purple-800 font-bold mb-1">+91 9987200005</p>
              <p className="text-sm text-gray-600">Mon-Sat (10am-6pm)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-purple-800 font-bold mb-1">returns@knya.com</p>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Online Form</h3>
              <button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded transition-colors">
                Start Return
              </button>
              <p className="text-sm text-gray-600 mt-1">Quick & Easy</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ExchangesReturns;