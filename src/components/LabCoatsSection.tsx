import React from 'react';
import { Star } from 'lucide-react';

const LabCoatsSection = () => {
  const labCoats = [
    {
      id: 1,
      name: 'Classic White Lab Coat',
      price: '₹ 1,299',
      originalPrice: '₹ 1,799',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-white', 'bg-blue-100', 'bg-gray-100'],
      badge: 'Professional'
    },
    {
      id: 2,
      name: 'Premium Lab Apron',
      price: '₹ 899',
      originalPrice: '₹ 1,299',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-white', 'bg-blue-50', 'bg-green-50'],
      badge: 'Lightweight'
    },
    {
      id: 3,
      name: 'Long Sleeve Lab Coat',
      price: '₹ 1,599',
      originalPrice: '₹ 2,199',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-white', 'bg-gray-50', 'bg-blue-50'],
      badge: 'Durable'
    },
    {
      id: 4,
      name: 'Student Lab Coat',
      price: '₹ 799',
      originalPrice: '₹ 1,099',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-white', 'bg-blue-25', 'bg-gray-25'],
      badge: 'Student Special'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Lab Coats & Aprons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labCoats.map((coat) => (
            <div key={coat.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={coat.image} 
                  alt={coat.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {coat.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{coat.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{coat.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-purple-800">{coat.price}</span>
                  <span className="text-gray-500 line-through ml-2 text-sm">{coat.originalPrice}</span>
                </div>
                <div className="text-xs text-gray-600 mb-3">(*Incl of taxes)</div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {coat.colors.map((color, index) => (
                      <div key={index} className={`w-5 h-5 rounded-full ${color} border-2 border-gray-300`}></div>
                    ))}
                  </div>
                  <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-3 rounded transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabCoatsSection;