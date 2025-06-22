import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Men's Collection", path: "/men" },
        { name: "Women's Collection", path: "/women" },
        { name: "Ecoflex Collection", path: "/ecoflex" },
        { name: "Stethoscopes", path: "/stethoscope" },
        { name: "Track Order", path: "/track-order" },
        { name: "Bulk Order", path: "/bulk-order" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Brand Story", path: "/brand-story" },
        { name: "Community Stories", path: "/community-stories" },
        { name: "Our Stores", path: "/our-stores" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Exchanges & Returns", path: "/exchanges-returns" },
        { name: "Warranty Registration", path: "/warranty-registration" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", path: "/terms-conditions" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sitemap</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Navigate through all pages and sections of the Knya website
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6 text-purple-800 border-b border-purple-200 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="flex items-center text-gray-600 hover:text-purple-800 transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Need Help Finding Something?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you can't find what you're looking for, our customer support team is here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-purple-800 font-bold">+91 9987200005</p>
              <p className="text-sm text-gray-600">Mon-Sat (10am-6pm)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-purple-800 font-bold">support@knya.com</p>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-purple-800 font-bold">Available Now</p>
              <p className="text-sm text-gray-600">Mon-Sun (8am-8pm)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;