import React from 'react';
import { Star } from 'lucide-react';

const ScrubsCollection = () => {
  const scrubs = [
    {
      id: 1,
      name: 'Classic Navy Scrub Set',
      price: '₹ 1,899',
      originalPrice: '₹ 2,499',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-blue-900', 'bg-green-700', 'bg-black'],
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Comfort Fit Green Scrubs',
      price: '₹ 1,699',
      originalPrice: '₹ 2,299',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-green-700', 'bg-blue-900', 'bg-purple-800'],
      badge: 'Eco-friendly'
    },
    {
      id: 3,
      name: 'Premium Black Scrub Set',
      price: '₹ 2,199',
      originalPrice: '₹ 2,899',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/6749781/pexels-photo-6749781.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-black', 'bg-gray-700', 'bg-blue-900'],
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Wine Colored Scrubs',
      price: '₹ 1,799',
      originalPrice: '₹ 2,399',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-red-900', 'bg-purple-800', 'bg-blue-900'],
      badge: 'New Arrival'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Scrubs Collection</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scrubs.map((scrub) => (
            <div key={scrub.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={scrub.image} 
                  alt={scrub.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {scrub.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{scrub.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{scrub.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-purple-800">{scrub.price}</span>
                  <span className="text-gray-500 line-through ml-2 text-sm">{scrub.originalPrice}</span>
                </div>
                <div className="text-xs text-gray-600 mb-3">(*Incl of taxes)</div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {scrub.colors.map((color, index) => (
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

export default ScrubsCollection;