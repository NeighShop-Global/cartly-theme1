import React from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const OurStores = () => {
  const stores = [
    {
      id: 1,
      name: "Knya Mumbai Flagship Store",
      address: "401, Todi Building, Mathuradas Mill Compound, Lower Parel, Mumbai 400013",
      phone: "+91 9987200005",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Full Product Range", "Personal Fitting", "Expert Consultation", "Same-day Delivery"]
    },
    {
      id: 2,
      name: "Knya Delhi Medical Hub",
      address: "Block A, Sector 18, Noida, Uttar Pradesh 201301",
      phone: "+91 9987200006",
      hours: "Mon-Sat: 9:30 AM - 7:30 PM, Sun: 10:00 AM - 5:00 PM",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Stethoscope Testing", "Bulk Orders", "Student Discounts", "Free Alterations"]
    },
    {
      id: 3,
      name: "Knya Bangalore Tech Store",
      address: "Koramangala 4th Block, Bangalore, Karnataka 560034",
      phone: "+91 9987200007",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Digital Catalog", "Virtual Try-on", "Express Delivery", "Tech Support"]
    },
    {
      id: 4,
      name: "Knya Chennai Medical Center",
      address: "T. Nagar, Chennai, Tamil Nadu 600017",
      phone: "+91 9987200008",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Regional Sizing", "Local Language Support", "Hospital Partnerships", "Group Discounts"]
    },
    {
      id: 5,
      name: "Knya Pune Healthcare Store",
      address: "Koregaon Park, Pune, Maharashtra 411001",
      phone: "+91 9987200009",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Student Hub", "Internship Packages", "Career Guidance", "Alumni Network"]
    },
    {
      id: 6,
      name: "Knya Hyderabad Medical Plaza",
      address: "Banjara Hills, Hyderabad, Telangana 500034",
      phone: "+91 9987200010",
      hours: "Mon-Sat: 9:30 AM - 7:30 PM, Sun: 10:00 AM - 5:00 PM",
      image: "https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Premium Collection", "VIP Services", "Custom Embroidery", "Loyalty Program"]
    }
  ];

  const services = [
    {
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      title: "Store Locator",
      description: "Find the nearest Knya store to you with our interactive map"
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: "Book Appointment",
      description: "Schedule a personal consultation with our product experts"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Extended Hours",
      description: "Many stores offer extended hours for healthcare professionals"
    },
    {
      icon: <Navigation className="w-8 h-8 text-purple-600" />,
      title: "Home Delivery",
      description: "Can't visit? We'll bring our products to your doorstep"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Stores</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Visit our physical stores across India for personalized service and expert guidance
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Store Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Store Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{store.name}</h3>
                  
                  <div className="flex items-start mb-3">
                    <MapPin className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{store.address}</p>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-purple-600 mr-2" />
                    <p className="text-gray-600 text-sm">{store.phone}</p>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <Clock className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{store.hours}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Store Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {store.features.map((feature, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
                      Get Directions
                    </button>
                    <button className="flex-1 border border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
                      Call Store
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-800">The Knya Store Experience</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-800">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Consultation</h3>
                <p className="text-gray-600">Our trained staff helps you find the perfect fit and style for your needs</p>
              </div>
              <div className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-800">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Try Before You Buy</h3>
                <p className="text-gray-600">Test stethoscopes and try on apparel to ensure the perfect choice</p>
              </div>
              <div className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-800">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Gratification</h3>
                <p className="text-gray-600">Walk out with your products immediately - no waiting for delivery</p>
              </div>
            </div>
            
            <div className="bg-purple-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Can't Find a Store Near You?</h3>
              <p className="text-lg mb-6">
                We're expanding rapidly! Sign up to be notified when we open a store in your city.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Notify Me
              </button>
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

export default OurStores;